<template>
  <div class="scene-view" ref="sceneContainer" @dragover="handleDragOver" @drop="handleDrop" @click="handleClick">
    <div class="transform-controls">
      <button :class="{ active: transformMode === 'translate' }" @click="setTransformMode('translate')">移动</button>
      <button :class="{ active: transformMode === 'rotate' }" @click="setTransformMode('rotate')">旋转</button>
      <button :class="{ active: transformMode === 'scale' }" @click="setTransformMode('scale')">缩放</button>
      <button @click="resetSelectedObject" class="reset-button">重置</button>
      <button @click="deleteSelectedObject" class="delete-button">删除</button>
      <button @click="preview" class="preview-button">预览</button>
      <button @click="collectSceneObjects" class="confirm-button">确定</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const sceneContainer = ref(null)
const transformMode = ref('translate')

// 定义props和emits
const props = defineProps({
  sceneObjects: {
    type: Array,
    default: () => []
  },
  selectedObjectId: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['object-selected', 'object-created', 'object-updated', 'object-deleted'])

// Three.js 场景相关变量
let scene, camera, renderer, orbitControls, transformControls, raycaster, mouse, gridHelper, axesHelper;
let selectedObject = null

// 初始化Three.js场景
const initScene = () => {
  // 创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff) // 将背景色改为白色

  // 初始化射线检测器和鼠标向量
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // 设置相机
  camera = new THREE.PerspectiveCamera(
    75,
    sceneContainer.value.clientWidth / sceneContainer.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 4, 6)
  camera.lookAt(0, 0, 0)

  // 初始化渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(sceneContainer.value.clientWidth, sceneContainer.value.clientHeight)

  // 启用阴影
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  // 设置色调映射和曝光
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0

  // 添加到容器
  sceneContainer.value.appendChild(renderer.domElement)

  // 设置轨道控制器
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.enableDamping = true
  orbitControls.dampingFactor = 0.02 // 降低阻尼系数，减少摄像头旋转迟滞

  // 初始化变换控制器
  try {
    // 创建并配置变换控制器
    transformControls = new TransformControls(camera, renderer.domElement)

    // 设置控制器属性
    Object.assign(transformControls, {
      size: 1.5,            // 增大控制器大小，使其更容易看到
      visible: true,        // 确保控制器可见
      enabled: true,        // 确保控制器启用
      renderOrder: 999,     // 设置渲染顺序，确保在最上层
      showX: true,          // 显示X轴
      showY: true,          // 显示Y轴
      showZ: true,          // 显示Z轴
      changed: false,       // 添加changed标志用于优化渲染
      scaleSpeed: 0.05       // 降低缩放速度，默认值为1.0
    })
  } catch (error) {
    console.error('初始化TransformControls时出错:', error)
  }

  // 添加网格和坐标轴
  gridHelper = new THREE.GridHelper(20, 40, 0x333333, 0x333333) // 增加网格密度，修改颜色为#333
  scene.add(gridHelper)

  axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  // 添加环境光和方向光
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4) // 降低环境光强度，使阴影更明显
  scene.add(ambientLight)

  // 主方向光（带阴影）
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2) // 增强主光源
  directionalLight.position.set(5, 10, 5)
  directionalLight.castShadow = true

  // 设置阴影属性
  directionalLight.shadow.mapSize.width = 2048 // 提高阴影贴图分辨率
  directionalLight.shadow.mapSize.height = 2048
  directionalLight.shadow.camera.near = 0.5
  directionalLight.shadow.camera.far = 50
  directionalLight.shadow.camera.left = -10
  directionalLight.shadow.camera.right = 10
  directionalLight.shadow.camera.top = 10
  directionalLight.shadow.camera.bottom = -10
  directionalLight.shadow.bias = -0.0005 // 减少阴影失真
  directionalLight.shadow.normalBias = 0.05 // 改善阴影边缘

  scene.add(directionalLight)

  // 添加辅助光源
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
  fillLight.position.set(-5, 3, -5)
  scene.add(fillLight)

  // 设置变换控制器事件
  transformControls.addEventListener('mouseDown', () => {
    orbitControls.enabled = false
  })

  transformControls.addEventListener('mouseUp', () => {
    orbitControls.enabled = true
  })

  // 添加拖动状态变化事件监听
  transformControls.addEventListener('dragging-changed', (event) => {
    // 在拖动时禁用轨道控制器，避免冲突
    orbitControls.enabled = !event.value

    // 如果停止拖动，触发对象更新事件
    if (!event.value && selectedObject) {
      // 确保对象仍然存在且仍然被选中
      const objToSend = {
        id: String(selectedObject.userData?.id || selectedObject.id), // 确保id是字符串类型
        position: {
          x: Number(selectedObject.position.x.toFixed(2)),
          y: Number(selectedObject.position.y.toFixed(2)),
          z: Number(selectedObject.position.z.toFixed(2))
        },
        rotation: {
          x: Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1)),
          y: Number((selectedObject.rotation.y * 180 / Math.PI).toFixed(1)),
          z: Number((selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
        },
        scale: {
          x: Number(selectedObject.scale.x.toFixed(2)),
          y: Number(selectedObject.scale.y.toFixed(2)),
          z: Number(selectedObject.scale.z.toFixed(2))
        },
        type: selectedObject.userData?.type || 'unknown',
        name: selectedObject.userData?.name || 'Object'
      }
      emit('object-updated', objToSend)
      console.log('拖动结束，发送对象更新:', objToSend)
    }
  })

  // 设置初始变换模式
  transformControls.setMode(transformMode.value)

  // 添加变换控制器的change事件监听
  transformControls.addEventListener('change', () => {
    // 确保选中对象跟随控制器移动
    if (selectedObject && transformControls.object) {
      // 同步对象位置与控制器
      selectedObject.position.copy(transformControls.object.position)
      selectedObject.rotation.copy(transformControls.object.rotation)

      // 在缩放模式下，保持三个轴的缩放值一致
      if (transformMode.value === 'scale') {
        const scaleFactor = 0.1; // 每步缩放增量调整为10%
        const roundedScale = {
          x: Math.round(transformControls.object.scale.x / scaleFactor) * scaleFactor,
          y: Math.round(transformControls.object.scale.y / scaleFactor) * scaleFactor,
          z: Math.round(transformControls.object.scale.z / scaleFactor) * scaleFactor
        };

        // 应用缩放并保持三个轴一致
        const maxScale = Math.max(roundedScale.x, roundedScale.y, roundedScale.z);
        selectedObject.scale.set(maxScale, maxScale, maxScale);
        transformControls.object.scale.copy(selectedObject.scale);
      } else {
        selectedObject.scale.copy(transformControls.object.scale)
      }

      // 更新对象的矩阵（只在必要时更新）
      selectedObject.updateMatrix()
      selectedObject.updateMatrixWorld(true)

      // 标记需要渲染
      transformControls.changed = true

      // 强制在每次change事件时都发送更新事件到属性面板
      const objToSend = {
        id: String(selectedObject.userData?.id || selectedObject.id), // 确保id是字符串类型
        position: {
          x: Number(selectedObject.position.x.toFixed(2)),
          y: Number(selectedObject.position.y.toFixed(2)),
          z: Number(selectedObject.position.z.toFixed(2))
        },
        rotation: {
          x: Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1)),
          y: Number((selectedObject.rotation.y * 180 / Math.PI).toFixed(1)),
          z: Number((selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
        },
        scale: {
          x: Number(selectedObject.scale.x.toFixed(2)),
          y: Number(selectedObject.scale.y.toFixed(2)),
          z: Number(selectedObject.scale.z.toFixed(2))
        },
        type: selectedObject.userData?.type || 'unknown',
        name: selectedObject.userData?.name || 'Object'
      }
      // 确保每次变换都触发更新事件
      emit('object-updated', objToSend)
      
      // 打印调试信息，确认对象ID和更新数据
      console.log('对象更新事件:', objToSend)
    }
  })

  // 添加mouseDown事件监听，防止点击控制器时取消选择
  transformControls.addEventListener('mouseDown', (e) => {
    // 阻止事件冒泡，避免触发场景的点击事件
    if (e && e.nativeEvent) {
      e.nativeEvent.stopPropagation()
      e.nativeEvent.preventDefault()
    }
  })

  // 初始化控制器可见性
  transformControls.visible = true
  transformControls.showX = true
  transformControls.showY = true
  transformControls.showZ = true
  transformControls.setSpace('world')

  // 开始动画循环
  animate()
}

// 动画循环
const animate = () => {
  requestAnimationFrame(animate)

  // 更新轨道控制器
  if (orbitControls) {
    orbitControls.update()
  }

  // 渲染场景
  // 确保场景始终渲染，特别是在相机旋转时
  if (scene && camera && renderer) {
    // 检查是否需要渲染
    // 1. 当轨道控制器正在使用时（用户正在旋转/平移场景）
    // 2. 当变换控制器发生变化时
    // 3. 首次渲染时
    const isOrbitActive = orbitControls.enabled && (orbitControls.changed || orbitControls.autoRotate || orbitControls.enableDamping)
    const needsRender = isOrbitActive ||
      (transformControls && transformControls.changed) ||
      !renderer.info.render.frame; // 检查是否是首次渲染

    // 始终渲染场景，确保旋转流畅
    renderer.render(scene, camera)

    // 重置changed标志
    if (orbitControls.changed) orbitControls.changed = false
    if (transformControls && transformControls.changed) transformControls.changed = false
  }
}


// 处理窗口大小变化
const handleResize = () => {
  if (!sceneContainer.value) return
  camera.aspect = sceneContainer.value.clientWidth / sceneContainer.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(sceneContainer.value.clientWidth, sceneContainer.value.clientHeight)
}

// 设置变换模式
const setTransformMode = (mode) => {
  // 如果模式相同，不做任何操作
  if (transformMode.value === mode) return

  transformMode.value = mode

  if (transformControls) {
    // 设置新的变换模式
    transformControls.setMode(mode)

    // 如果有选中对象，确保控制器正确应用新模式
    if (selectedObject) {
      // 标记需要渲染
      transformControls.changed = true
    }
  }
}

// 处理拖拽放置
const handleDragOver = (event) => {
  event.preventDefault()
}

const handleDrop = (event) => {
  event.preventDefault()
  const modelData = JSON.parse(event.dataTransfer.getData('model'))
  createModel(modelData)
}

// 创建模型
const createModel = (modelData) => {
  try {
    if (!modelData || !modelData.type || !modelData.defaultProps) {
      console.error('无效的模型数据:', modelData)
      return
    }

    // 创建对象数据结构，确保与ModelList中的数据结构一致
    const objectData = {
      id: modelData.id, // 使用模型自带的id
      name: modelData.name,
      type: modelData.type,
      src: modelData.preview || '',
      position: { x: 0, y: 0.5, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 }
    }

    // 如果是GLTF模型，添加路径信息
    if (modelData.type === 'gltf' && modelData.defaultProps.path) {
      objectData.path = modelData.defaultProps.path
    }

    // 处理GLTF/GLB模型
    if (modelData.type === 'gltf') {
      const props = modelData.defaultProps
      const loader = new GLTFLoader()

      // 加载模型
      loader.load(props.path, (gltf) => {
        // 获取模型
        const model = gltf.scene

        // 设置阴影
        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true
            node.receiveShadow = true
          }
        })

        // 应用缩放
        const scale = props.scale || 1
        model.scale.set(scale, scale, scale)

        // 设置位置（默认放在场景中心）
        model.position.set(0, 0, 0)

        // 设置用户数据，用于后续识别
        model.userData = {
          id: objectData.id, // 添加id字段，确保能被属性面板识别
          type: modelData.type,
          name: modelData.name,
          path: props.path
        }

        // 添加到场景
        scene.add(model)

        // 选中新创建的对象
        selectObject(model)

        // 标记需要渲染
        if (transformControls) {
          transformControls.changed = true
        }

        // 发送对象创建事件到父组件
        emit('object-created', objectData)
      },
        // 加载进度回调
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% 已加载')
        },
        // 加载错误回调
        (error) => {
          console.error('加载GLTF模型时出错:', error)
        })

      // 由于GLTF加载是异步的，这里不返回mesh
      return null
    }

    // 处理基础几何体模型
    let geometry
    // 使用缓存的材质，避免重复创建
    const material = new THREE.MeshStandardMaterial({
      color: 0xFFF59D,
      roughness: 0.7,
      metalness: 0.2
    })

    // 根据类型创建几何体
    const props = modelData.defaultProps
    switch (modelData.type) {
      case 'cube':
        geometry = new THREE.BoxGeometry(
          props.width || 1,
          props.height || 1,
          props.depth || 1
        )
        break
      case 'sphere':
        geometry = new THREE.SphereGeometry(
          props.radius || 0.5,
          props.segments || 32
        )
        break
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(
          props.radiusTop || props.radius || 0.5,
          props.radiusBottom || props.radius || 0.5,
          props.height || 1,
          props.segments || 32
        )
        break
      default:
        console.error('未知的模型类型:', modelData.type)
        return
    }

    // 创建网格对象
    const mesh = new THREE.Mesh(geometry, material)

    // 设置阴影
    mesh.castShadow = true
    mesh.receiveShadow = true

    // 设置位置（默认放在场景中心稍上方）
    mesh.position.set(0, props.height / 2 || 0.5, 0)

    // 设置用户数据，用于后续识别
    mesh.userData = {
      type: modelData.type,
      name: modelData.name
    }

    // 设置id到userData中，便于后续查找
    mesh.userData.id = objectData.id

    // 添加到场景
    scene.add(mesh)

    // 选中新创建的对象
    selectObject(mesh)

    // 标记需要渲染
    if (transformControls) {
      transformControls.changed = true
    }

    // 发送对象创建事件到父组件
    emit('object-created', objectData)

    return mesh
  } catch (error) {
    console.error('创建模型时出错:', error)
    return null
  }
}

// 选择对象
const selectObject = (object) => {
  // 如果之前有选中的对象，先分离控制器
  if (transformControls && transformControls.object) {
    transformControls.detach()
  }

  // 保存当前选中的对象引用
  selectedObject = object

  // 确保变换控制器存在且有选中对象
  if (transformControls && object) {
    // 确保控制器已添加到场景中
    if (!scene.children.includes(transformControls)) {
      const gizmo = transformControls.getHelper()
      scene.add(gizmo)
    }

    // 设置控制器属性
    transformControls.setMode(transformMode.value)
    transformControls.visible = true
    transformControls.enabled = true
    transformControls.showX = true
    transformControls.showY = true
    transformControls.showZ = true
    transformControls.renderOrder = 999

    // 附加控制器到新选中的对象
    transformControls.attach(object)
    transformControls.changed = true // 标记需要渲染

    // 只发送对象ID到父组件，简化数据流
    const objectId = String(object.userData?.id || object.id)
    emit('object-selected', objectId)

    // 发送对象属性更新，以便属性面板显示
    const objInfo = {
      id: objectId,
      position: {
        x: Number(object.position.x.toFixed(2)),
        y: Number(object.position.y.toFixed(2)),
        z: Number(object.position.z.toFixed(2))
      },
      rotation: {
        x: Number((object.rotation.x * 180 / Math.PI).toFixed(1)),
        y: Number((object.rotation.y * 180 / Math.PI).toFixed(1)),
        z: Number((object.rotation.z * 180 / Math.PI).toFixed(1))
      },
      scale: {
        x: Number(object.scale.x.toFixed(2)),
        y: Number(object.scale.y.toFixed(2)),
        z: Number(object.scale.z.toFixed(2))
      }
    }
    emit('object-updated', objInfo)
  } else {
    // 如果没有选中对象或变换控制器不存在，发送null
    if (transformControls) {
      transformControls.detach()
    }
    emit('object-selected', null)
  }
}

const preview = () => {
  if (transformControls) {
    transformControls.detach()
  }
  emit('object-selected', null)
}

// 处理鼠标点击事件
const handleClick = (event) => {
  // 快速过滤：如果点击的是按钮或非canvas元素，或控制器正在拖动，则忽略
  if (event.target.tagName === 'BUTTON' ||
    event.target !== renderer.domElement ||
    (transformControls && transformControls.dragging)) {
    return
  }

  // 计算鼠标在画布中的归一化坐标
  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  // 设置射线投射方向
  raycaster.setFromCamera(mouse, camera)

  // 创建可选择对象的列表（排除辅助对象和控制器）
  const selectableObjects = []
  scene.traverse(object => {
    // 只考虑网格对象，包括SkinnedMesh
    if (!object.isMesh && !object.isSkinnedMesh) return
    // 排除辅助对象
    if (object.isHelper ||
      object.name.includes('Helper') ||
      object.name.includes('helper') ||
      object.isTransformControlsPlane) return
    // 排除变换控制器相关对象
    let parent = object.parent
    while (parent) {
      if (parent === transformControls ||
        parent.type === 'TransformControlsGizmo' ||
        parent.name.includes('TransformControls')) {
        return;
      }
      parent = parent.parent
    }

    // 确保对象有几何体和材质
    if (object.geometry && object.material) {
      selectableObjects.push(object)
    }
  })

  // 获取射线与可选择对象的交点
  const intersects = raycaster.intersectObjects(selectableObjects, false)

  // 检查是否点击了对象
  if (intersects.length > 0) {
    // 选择距离最近的对象
    let clickedObject = intersects[0].object;

    // 如果点击的是模型的一部分，尝试找到模型的根节点
    if (clickedObject.parent && clickedObject.parent !== scene) {
      let rootObject = clickedObject;
      while (rootObject.parent && rootObject.parent !== scene) {
        rootObject = rootObject.parent;
      }

      // 确保对象有id，并且id是字符串类型
      if (!rootObject.userData) {
        rootObject.userData = { id: String(rootObject.id) };
      } else if (!rootObject.userData.id) {
        rootObject.userData.id = String(rootObject.id);
      } else {
        // 确保现有id是字符串类型
        rootObject.userData.id = String(rootObject.userData.id);
      }

      selectObject(rootObject);
    } else {
      // 确保对象有id，并且id是字符串类型
      if (!clickedObject.userData) {
        clickedObject.userData = { id: String(clickedObject.id) };
      } else if (!clickedObject.userData.id) {
        clickedObject.userData.id = String(clickedObject.id);
      } else {
        // 确保现有id是字符串类型
        clickedObject.userData.id = String(clickedObject.userData.id);
      }

      selectObject(clickedObject);
    }
  } else {
    // 当点击空白区域时，不执行任何操作
    // 保持当前选中的对象状态
    return;
  }
}

// 处理鼠标移动事件
const handleMouseMove = (event) => {
  // 快速过滤：如果渲染器不存在或控制器正在操作对象，则忽略
  if (!renderer || !renderer.domElement || (transformControls && transformControls.object)) {
    return
  }

  // 只有当鼠标在canvas上时才处理
  if (event.target !== renderer.domElement) {
    return
  }

  // 计算鼠标在画布中的归一化坐标（-1到1之间）
  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  // 设置射线投射方向
  if (raycaster && camera && scene) {
    try {
      // 检查鼠标是否悬停在TransformControls上
      raycaster.setFromCamera(mouse, camera)

      // 创建一个临时数组来存储所有的TransformControls相关对象
      const transformControlsObjects = []
      scene.traverse(object => {
        // 检查对象是否是TransformControls的一部分
        if (object.isHelper ||
          object.name.includes('Helper') ||
          object.name.includes('helper') ||
          object.type === 'TransformControlsGizmo' ||
          object.name.includes('TransformControls')) {
          transformControlsObjects.push(object)
        }

        // 检查父级是否是TransformControls
        let parent = object.parent
        while (parent) {
          if (parent === transformControls ||
            parent.type === 'TransformControlsGizmo' ||
            parent.name.includes('TransformControls')) {
            transformControlsObjects.push(object)
            break
          }
          parent = parent.parent
        }
      })

      // 检查鼠标是否悬停在TransformControls上
      const transformIntersects = raycaster.intersectObjects(transformControlsObjects, false)
      if (transformIntersects.length > 0) {
        // 鼠标悬停在TransformControls上，不执行任何操作
        return
      }

      // 这里可以添加悬停效果的代码
      // 例如：改变鼠标指针样式或高亮对象
      // 注意：为了性能考虑，不在每次移动时执行完整的射线检测
    } catch (error) {
      console.error('鼠标移动处理错误:', error)
    }
  }
}

// 重置选中对象到初始状态
const resetSelectedObject = () => {
  if (!selectedObject) return;

  // 重置位置、旋转和缩放
  selectedObject.position.set(0, 0, 0);
  selectedObject.rotation.set(0, 0, 0);
  selectedObject.scale.set(1, 1, 1);

  // 如果是从场景中心上方创建的对象，恢复其初始高度
  if (selectedObject.userData.type) {
    // 根据对象类型调整位置
    switch (selectedObject.userData.type) {
      case 'cube':
      case 'cylinder':
        // 将对象放置在地面上方
        selectedObject.position.y = selectedObject.geometry.parameters.height / 2 || 0.5;
        break;
      case 'sphere':
        // 将球体放置在地面上方
        selectedObject.position.y = selectedObject.geometry.parameters.radius || 0.5;
        break;
      default:
        // 默认高度
        selectedObject.position.y = 0.5;
    }
  }

  // 同步到变换控制器
  if (transformControls && transformControls.object) {
    transformControls.object.position.copy(selectedObject.position);
    transformControls.object.rotation.copy(selectedObject.rotation);
    transformControls.object.scale.copy(selectedObject.scale);
    transformControls.update();
  }

  // 更新对象的矩阵
  selectedObject.updateMatrix();
  selectedObject.updateMatrixWorld(true);

  // 标记需要渲染
  if (transformControls) {
    transformControls.changed = true;
  }

  // 发送更新事件到属性面板
  const objToSend = {
    position: {
      x: Number(selectedObject.position.x.toFixed(2)),
      y: Number(selectedObject.position.y.toFixed(2)),
      z: Number(selectedObject.position.z.toFixed(2))
    },
    rotation: {
      x: Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1)),
      y: Number((selectedObject.rotation.y * 180 / Math.PI).toFixed(1)),
      z: Number((selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
    },
    scale: {
      x: Number(selectedObject.scale.x.toFixed(2)),
      y: Number(selectedObject.scale.y.toFixed(2)),
      z: Number(selectedObject.scale.z.toFixed(2))
    },
    type: selectedObject.userData.type || 'unknown',
    name: selectedObject.userData.name || 'Object'
  }
  emit('object-updated', objToSend);

  // 强制渲染一次，确保变化立即显示
  renderer.render(scene, camera);
}

// 监听sceneObjects的变化，更新场景中的对象
watch(() => props.sceneObjects, (newObjects) => {
  if (!scene || !newObjects || newObjects.length === 0) return;
  
  // 遍历所有新对象数据
  newObjects.forEach(objData => {
    // 查找场景中对应ID的对象
    let sceneObject = null;
    scene.traverse((object) => {
      if (object.userData && object.userData.id === objData.id) {
        sceneObject = object;
      }
    });
    
    // 如果找到对象，更新其属性
    if (sceneObject) {
      // 更新位置
      if (objData.position) {
        sceneObject.position.set(
          objData.position.x,
          objData.position.y,
          objData.position.z
        );
      }
      
      // 更新旋转（需要转换为弧度）
      if (objData.rotation) {
        sceneObject.rotation.set(
          objData.rotation.x * Math.PI / 180,
          objData.rotation.y * Math.PI / 180,
          objData.rotation.z * Math.PI / 180
        );
      }
      
      // 更新缩放
      if (objData.scale) {
        sceneObject.scale.set(
          objData.scale.x,
          objData.scale.y,
          objData.scale.z
        );
      }
      
      // 更新对象的矩阵
      sceneObject.updateMatrix();
      sceneObject.updateMatrixWorld(true);
      
      // 如果当前选中的是这个对象，同步更新变换控制器
      if (selectedObject && selectedObject.userData.id === objData.id && transformControls) {
        transformControls.update();
        transformControls.changed = true;
      }
      
      // 强制渲染一次，确保变化立即显示
      if (renderer && camera) {
        renderer.render(scene, camera);
      }
    }
  });
}, { deep: true })

// 监听selectedObjectId的变化，选中相应的对象
watch(() => props.selectedObjectId, (newId) => {
  if (!newId || !scene) return

  // 查找场景中对应ID的对象
  let objectToSelect = null
  scene.traverse((object) => {
    // 只检查userData中的id或对象自身的id
    if ((object.userData && object.userData.id === newId) || object.id === newId) {
      objectToSelect = object
    }
  })

  // 如果找到对象，选中它
  if (objectToSelect) {
    selectObject(objectToSelect)
  }
})

onMounted(() => {
  initScene()
  window.addEventListener('resize', handleResize)
  // 添加鼠标移动事件监听
  window.addEventListener('mousemove', handleMouseMove)
})

// 删除当前选中的对象
const deleteSelectedObject = () => {
  // 检查是否有选中的对象
  if (!selectedObject) return;

  // 获取对象ID
  const objectId = String(selectedObject.userData?.id || selectedObject.id);

  // 从场景中移除对象
  scene.remove(selectedObject);

  // 分离变换控制器
  if (transformControls && transformControls.object) {
    transformControls.detach();
  }

  // 清除选中对象引用
  selectedObject = null;

  // 通知父组件删除该对象
  emit('object-deleted', objectId);

  // 强制渲染一次，确保变化立即显示
  renderer.render(scene, camera);
};

// 收集场景中所有对象信息
const collectSceneObjects = () => {
  // 创建一个新数组来存储场景中的对象信息
  const collectedObjects = [];
  
  // 遍历场景中的所有对象
  scene.traverse((object) => {
    // 只处理有userData和id的对象
    if (object.userData && object.userData.id) {
      // 创建对象信息
      const objInfo = {
        id: String(object.userData.id),
        name: object.userData.name || 'Unnamed Object',
        type: object.userData.type || 'unknown',
        position: {
          x: Number(object.position.x.toFixed(2)),
          y: Number(object.position.y.toFixed(2)),
          z: Number(object.position.z.toFixed(2))
        },
        rotation: {
          x: Number((object.rotation.x * 180 / Math.PI).toFixed(1)),
          y: Number((object.rotation.y * 180 / Math.PI).toFixed(1)),
          z: Number((object.rotation.z * 180 / Math.PI).toFixed(1))
        },
        scale: {
          x: Number(object.scale.x.toFixed(2)),
          y: Number(object.scale.y.toFixed(2)),
          z: Number(object.scale.z.toFixed(2))
        }
      };
      
      // 如果是GLTF模型，添加路径信息
      if (object.userData.path) {
        objInfo.path = object.userData.path;
      }
      
      // 添加到收集的对象数组
      collectedObjects.push(objInfo);
    }
  });
  
  // 打印场景中的所有对象
  console.log('场景中的所有对象:', collectedObjects);
  
  // 发送更新事件到父组件
  emit('object-updated', collectedObjects);
  
  return collectedObjects;
};

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  // 移除鼠标移动事件监听
  window.removeEventListener('mousemove', handleMouseMove)
  if (renderer) {
    renderer.dispose()
  }
})


</script>

<style scoped>
.scene-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.transform-controls {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 5px;
  z-index: 100;
}

.transform-controls button {
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.transform-controls button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.transform-controls button.active {
  background-color: #2196F3;
  color: white;
}

.reset-button {
  background-color: #FF9800 !important;
  color: white;
}

.delete-button {
  background-color: #f44336 !important;
  color: white;
}

.confirm-button {
  background-color: #4CAF50 !important;
  color: white;
}
</style>