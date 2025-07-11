<template>
  <div class="scene-view" ref="sceneContainer" @dragover="handleDragOver" @drop="handleDrop" @click="handleClick">
    <!-- ViewHelper控件 -->
    <div class="view-helper" ref="viewHelper">
      <div class="view-helper-container">
        <!-- X轴连线 -->
        <div class="axis-line x-line"></div>
        <!-- Y轴连线 -->
        <div class="axis-line y-line"></div>
        <!-- Z轴连线 -->
        <div class="axis-line z-line"></div>
        
        <!-- X轴球体 -->
        <div class="axis-sphere x-axis positive" @click="setCameraView('x')"></div>
        <div class="axis-sphere x-axis negative" @click="setCameraView('-x')"></div>
        
        <!-- Y轴球体 -->
        <div class="axis-sphere y-axis positive" @click="setCameraView('y')"></div>
        <div class="axis-sphere y-axis negative" @click="setCameraView('-y')"></div>
        
        <!-- Z轴球体 -->
        <div class="axis-sphere z-axis positive" @click="setCameraView('z')"></div>
        <div class="axis-sphere z-axis negative" @click="setCameraView('-z')"></div>
        
        <!-- 中心球体 -->
        <div class="center-sphere"></div>
      </div>
    </div>
    <div class="transform-controls">
      <div class="section0">
        <select
          v-model="selectedMaterialId"
          class="material-select"
        >
          <option value="">选择素材</option>
          <option
            v-for="material in sceneObjectsList"
            :key="material.id"
            :value="material.id"
          >
            {{ material.name }}
          </option>
        </select>
        <div>
          <button @click="resetSelectedObject" class="reset-button">重置</button>
          <button @click="deleteSelectedObject" class="delete-button">删除</button>
        </div>
      </div>
      <div class="section1">
        <button :class="{ active: transformMode === 'translate' }" @click="setTransformMode('translate')">移动</button>
        <button :class="{ active: transformMode === 'rotate' }" @click="setTransformMode('rotate')">旋转</button>
        <button :class="{ active: transformMode === 'scale' }" @click="setTransformMode('scale')">缩放</button>
      </div>
      <div class="section2">
        <button @click="clearAllObjects" class="clear-button">清空</button>
        <button @click="preview" class="preview-button">预览</button>
        <button @click="collectSceneObjects" class="confirm-button">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const sceneContainer = ref(null)
const transformMode = ref('translate')
const selectedMaterialId = ref(null)

// 定义props和emits
const props = defineProps({
  sceneObjects: {
    type: Array,
    default: () => []
  },
  selectedObjectId: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['object-selected', 'object-created', 'object-updated', 'object-deleted', 'objects-cleared', 'confirm'])

let scene, camera, renderer, orbitControls, transformControls, raycaster, mouse, gridHelper, axesHelper
let selectedObject = null

const sceneObjectsList = computed(() => {
  console.log('场景中所有素材',props.sceneObjects)
  return props.sceneObjects
    .filter(obj => {
      // 过滤掉识别图，使其不出现在下拉框中
      const isRecognitionImage = 
        obj.id.toString().includes('recognition_image') ||
        obj.name === '识别图' ||
        obj.type === 'recognition_image';
      return !isRecognitionImage;
    })
    .map(obj => ({
      id: obj.id,
      name: obj.name || '未命名素材'
    }))
})

// 初始化Three.js场景
const initScene = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xE5E8EB)

  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  camera = new THREE.PerspectiveCamera(
    75,
    sceneContainer.value.clientWidth / sceneContainer.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 2.8, 6)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false
  })
  renderer.setSize(sceneContainer.value.clientWidth, sceneContainer.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.NoToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.outputColorSpace = THREE.SRGBColorSpace

  sceneContainer.value.appendChild(renderer.domElement)

  orbitControls = new OrbitControls(camera, renderer.domElement)
  // orbitControls.enableDamping = true
  // orbitControls.dampingFactor = 0.02

  // 创建变换控制器
  transformControls = new TransformControls(camera, renderer.domElement)
  transformControls.setSize(1) // 调整控件大小，增大以便更容易看到
  console.log('初始化TransformControls', transformControls)
  transformControls.setTranslationSnap(0.05)
  transformControls.setRotationSnap(Math.PI / 24) // 15度
  transformControls.setScaleSnap(0.05)

  // 在Three.js r174版本中，使用getHelper方法获取可渲染的helper对象
  // 但初始化时不添加到场景，只在选中对象时才添加
  const helper = transformControls.getHelper()
  if (helper) {
    helper.visible = false  // 初始时隐藏
    console.log('TransformControls helper已创建但暂时隐藏')
  }
  
  console.log('TransformControls初始化完成')

  gridHelper = new THREE.GridHelper(20, 40, 0x333333, 0x333333)
  scene.add(gridHelper)

  axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
  scene.add(ambientLight)

  const hemisphereLight = new THREE.HemisphereLight(0x80aaff, 0x4d3319, 1)
  scene.add(hemisphereLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(0, 80, 0)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 2048
  directionalLight.shadow.mapSize.height = 2048
  directionalLight.shadow.camera.near = 0.5
  directionalLight.shadow.camera.far = 150
  scene.add(directionalLight)

  transformControls.addEventListener('mouseDown', () => {
    orbitControls.enabled = false
  })

  transformControls.addEventListener('mouseUp', () => {
    orbitControls.enabled = true
  })

  transformControls.addEventListener('dragging-changed', (event) => {
    orbitControls.enabled = !event.value

    if (!event.value && selectedObject) {
      const objectType = selectedObject.userData?.type
      const objToSend = {
        id: selectedObject.userData?.id,
        position: {
          x: Number(selectedObject.position.x.toFixed(2)),
          y: Number(selectedObject.position.y.toFixed(2)),
          z: Number(selectedObject.position.z.toFixed(2))
        },
        rotation: {
          x: objectType === 'pic' || objectType === 'video'
            ? Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1))
            : Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1)),
          y: objectType === 'pic' || objectType === 'video'
            ? Number((-selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
            : Number((-selectedObject.rotation.y * 180 / Math.PI).toFixed(1)),
          z: objectType === 'pic' || objectType === 'video'
            ? Number((selectedObject.rotation.y * 180 / Math.PI).toFixed(1))
            : Number((-selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
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
    }
  })

  transformControls.setMode(transformMode.value)

  transformControls.addEventListener('change', () => {
    // 移除dragging检查，因为在r174版本中可能不准确
    
    if (selectedObject && transformControls.object) {
      // 只在相应的模式下更新对应的属性
      if (transformMode.value === 'translate') {
        selectedObject.position.copy(transformControls.object.position)
      } else if (transformMode.value === 'rotate') {
        selectedObject.rotation.copy(transformControls.object.rotation)
      } else if (transformMode.value === 'scale') {
        // 统一缩放处理：使用最大的缩放值应用到所有轴
        const scaleX = transformControls.object.scale.x
        const scaleY = transformControls.object.scale.y
        const scaleZ = transformControls.object.scale.z
        
        // 找出哪个轴变化最大
        const originalScale = selectedObject.scale.x // 假设之前是统一缩放
        const deltaX = Math.abs(scaleX - originalScale)
        const deltaY = Math.abs(scaleY - originalScale)
        const deltaZ = Math.abs(scaleZ - originalScale)
        
        let uniformScale = originalScale
        if (deltaX >= deltaY && deltaX >= deltaZ) {
          uniformScale = scaleX
        } else if (deltaY >= deltaX && deltaY >= deltaZ) {
          uniformScale = scaleY
        } else {
          uniformScale = scaleZ
        }
        
        // 应用统一缩放
        selectedObject.scale.set(uniformScale, uniformScale, uniformScale)
        // 同步回TransformControls，确保显示一致
        transformControls.object.scale.set(uniformScale, uniformScale, uniformScale)
      }

      selectedObject.updateMatrix()
      selectedObject.updateMatrixWorld(true)

      // 实时更新对象数据
      const objectType = selectedObject.userData?.type
      const objToSend = {
        id: selectedObject.userData?.id,
        position: {
          x: Number(selectedObject.position.x.toFixed(2)),
          y: Number(selectedObject.position.y.toFixed(2)),
          z: Number(selectedObject.position.z.toFixed(2))
        },
        rotation: {
          x: objectType === 'pic' || objectType === 'video'
            ? Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1))
            : Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1)),
          y: objectType === 'pic' || objectType === 'video'
            ? Number((-selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
            : Number((-selectedObject.rotation.y * 180 / Math.PI).toFixed(1)),
          z: objectType === 'pic' || objectType === 'video'
            ? Number((selectedObject.rotation.y * 180 / Math.PI).toFixed(1))
            : Number((-selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
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
    }
  })

  transformControls.addEventListener('mouseDown', (e) => {
    if (e && e.nativeEvent) {
      e.nativeEvent.stopPropagation()
      e.nativeEvent.preventDefault()
    }
  })

  transformControls.visible = true
  transformControls.showX = true
  transformControls.showY = true
  transformControls.showZ = true
  transformControls.setSpace('world')



  animate()
}

const animate = () => {
  requestAnimationFrame(animate)

  if (orbitControls) {
    orbitControls.update()
  }

  if (scene) {
    scene.traverse((object) => {
      if (object.isMesh && object.material && object.material.map) {
        const texture = object.material.map
        if (texture instanceof THREE.VideoTexture) {
          texture.needsUpdate = true
        }
      }
    })
  }

  if (scene && camera && renderer) {
    // 先渲染主场景
    renderer.render(scene, camera)
    
    // 在r174版本中，TransformControls可能需要单独的渲染调用
    if (transformControls && transformControls.object) {
      // 尝试手动触发TransformControls的更新
      if (transformControls.update) {
        transformControls.update()
      }
      
      // 尝试渲染TransformControls
      if (transformControls.render && typeof transformControls.render === 'function') {
        transformControls.render(renderer, camera)
      }
    }
  }
}


const handleResize = () => {
  if (!sceneContainer.value) return
  camera.aspect = sceneContainer.value.clientWidth / sceneContainer.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(sceneContainer.value.clientWidth, sceneContainer.value.clientHeight)
}

const setTransformMode = (mode) => {
  if (transformMode.value === mode) return

  transformMode.value = mode

  if (transformControls && transformControls.object) {
    // 先保存当前的变换状态
    const currentPosition = selectedObject.position.clone()
    const currentRotation = selectedObject.rotation.clone()
    const currentScale = selectedObject.scale.clone()
    
    // 设置新模式
    transformControls.setMode(mode)
    
    // 恢复变换状态
    selectedObject.position.copy(currentPosition)
    selectedObject.rotation.copy(currentRotation)
    selectedObject.scale.copy(currentScale)
    
    // 强制更新TransformControls的对象
    transformControls.detach()
    transformControls.attach(selectedObject)
    
    console.log('切换到模式:', mode, '当前缩放:', selectedObject.scale)
  }
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const handleDrop = (event) => {
  event.preventDefault()
  const modelData = JSON.parse(event.dataTransfer.getData('model'))
  createModel(modelData)
}

const generateUniqueName = (baseName, materialId) => {
  const existingItems = props.sceneObjects.filter(obj => obj.materialId === materialId)
  return existingItems.length === 0 ? baseName : `${baseName}(${existingItems.length + 1})`
}

// 创建模型
const createModel = (modelData) => {
  try {
    if (!modelData || !modelData.type || !modelData.defaultProps) {
      console.error('无效的模型数据:', modelData)
      return
    }

    // 生成唯一的实例ID，支持重复拖入同一素材
    const instanceId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // 创建对象数据结构，确保与ModelList中的数据结构一致
    const objectData = {
      id: instanceId, // 随机生成的唯一ID
      materialId: modelData.id, // 新增：素材库中的原始ID
      name: generateUniqueName(modelData.name, modelData.id), // 修改：根据重复情况生成名称
      type: modelData.type,
      preview: modelData.preview || '',
      position: { x: 0, y: 0.5, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      defaultProps: modelData.defaultProps // 添加defaultProps以保存几何体参数
    }

    // 如果是GLTF模型，添加路径信息
    // if (modelData.type === 'model' && modelData.defaultProps.path) {
    //   objectData.path = modelData.defaultProps.path
    // }

    objectData.path = modelData.defaultProps.path

    // 处理几何体类型
    if (modelData.type === 'geometry') {
      const props = modelData.defaultProps
      let geometry = null
      const material = new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        roughness: 0.5,
        metalness: 0.3
      })
      
      // 根据几何体类型创建对应的几何体
      switch (props.geometryType) {
        case 'box':
          geometry = new THREE.BoxGeometry(props.width, props.height, props.depth)
          break
        case 'sphere':
          geometry = new THREE.SphereGeometry(props.radius, props.widthSegments, props.heightSegments)
          break
        case 'cylinder':
          geometry = new THREE.CylinderGeometry(props.radiusTop, props.radiusBottom, props.height, props.radialSegments)
          break
        case 'cone':
          geometry = new THREE.ConeGeometry(props.radius, props.height, props.radialSegments)
          break
        case 'torus':
          geometry = new THREE.TorusGeometry(props.radius, props.tube, props.radialSegments, props.tubularSegments)
          break
        case 'plane':
          geometry = new THREE.PlaneGeometry(props.width, props.height)
          break
        default:
          console.error('未知的几何体类型:', props.geometryType)
          return
      }
      
      if (geometry) {
        const mesh = new THREE.Mesh(geometry, material)
        
        // 设置阴影
        mesh.castShadow = true
        mesh.receiveShadow = true
        
        // 设置初始位置（根据几何体类型调整高度）
        let yPosition = 0.5
        if (props.geometryType === 'sphere') {
          yPosition = props.radius
        } else if (props.geometryType === 'cylinder' || props.geometryType === 'cone') {
          yPosition = props.height / 2
        } else if (props.geometryType === 'box') {
          yPosition = props.height / 2
        } else if (props.geometryType === 'plane') {
          mesh.rotation.x = -Math.PI / 2 // 平面默认水平放置
          yPosition = 0
        }
        
        mesh.position.set(0, yPosition, 0)
        
        // 设置用户数据
        mesh.userData = {
          id: objectData.id,
          materialId: objectData.materialId,
          type: modelData.type,
          name: objectData.name,
          geometryType: props.geometryType,
          defaultProps: props
        }
        
        // 添加到场景
        scene.add(mesh)
        
        // 选中新创建的对象
        selectObject(mesh)
        
        // 发送对象创建事件到父组件
        emit('object-created', objectData)
      }
      
      return
    }

    // 处理GLTF/GLB模型
    if (modelData.type === 'model') {
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
          id: objectData.id, // 使用唯一的实例ID
          materialId: objectData.materialId, // 素材库中的原始ID
          type: modelData.type,
          name: objectData.name, // 使用生成的唯一名称
          path: props.path
        }

        // 添加到场景
        scene.add(model)

        // 选中新创建的对象
        selectObject(model)

        // 标记需要渲染
        if (transformControls) {
          // transformControls.changed = true // 在r174版本中不再支持直接设置changed属性
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

    // 使用缓存的材质，避免重复创建
    const material = new THREE.MeshStandardMaterial({
      color: 0xFFF59D,
      roughness: 0.7,
      metalness: 0.2
    })

    // 根据类型创建几何体
    const props = modelData.defaultProps
    switch (modelData.type) {
      case 'pic':

        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(
          modelData.defaultProps.path,
          (texture) => {
            let geometry;

            // 检查是否是识别图（通过ID或名称判断）
            const isRecognitionImage =
              objectData.id.toString().includes('recognition_image') ||
              objectData.name === '识别图' ||
              modelData.type === 'recognition_image';

            // 所有图片都保持原始宽高比
            const aspectRatio = texture.image.width / texture.image.height;

            if (isRecognitionImage) {
              // 识别图：宽度固定为1
              const width = 1;
              const height = width / aspectRatio;
              geometry = new THREE.PlaneGeometry(width, height);
            } else {
              // 普通图片：宽度固定为1.5，保持宽高比
              const width = 1;
              const height = width / aspectRatio;
              geometry = new THREE.PlaneGeometry(width, height);
            }

            // 创建材质（显示图片）
            const material = new THREE.MeshBasicMaterial({
              map: texture,
              side: THREE.DoubleSide, // 双面显示
              transparent: true      // 启用透明（如果图片有透明通道）
            })
            // 创建图片网格并添加到场景
            const mesh = new THREE.Mesh(geometry, material)
            // 设置阴影
            mesh.castShadow = true
            mesh.receiveShadow = true

            // 设置位置（默认放在场景中心稍上方，使用原始单位）
            mesh.position.set(0, props.height / 2 || 0.5, 0)

            // 缩放处理：识别图有固定缩放，普通图片使用默认缩放
            if (isRecognitionImage) {
              // 识别图：固定缩放 1 倍，与index.vue中fileList1的处理一致
              mesh.scale.set(1, 1, 1);
              mesh.rotation.set(0, 0, 0);
            } else {
              // 普通图片：使用默认缩放
              mesh.scale.set(1, 1, 1);
            }

            // 设置用户数据，用于后续识别
            mesh.userData = {
              id: objectData.id, // 使用唯一的实例ID
              materialId: objectData.materialId, // 素材库中的原始ID
              type: modelData.type,
              name: objectData.name, // 使用生成的唯一名称
              path: modelData.defaultProps.path,
              isRecognitionImage: isRecognitionImage // 添加识别图标识
            }

            scene.add(mesh)
            // 如果不是识别图，才选中新创建的对象
            if (!isRecognitionImage) {
              selectObject(mesh)
            }

            // 标记需要渲染
            if (transformControls) {
              // transformControls.changed = true // 在r174版本中不再支持直接设置changed属性
            }

            // 发送对象创建事件到父组件
            emit('object-created', objectData)
          })

        break
      case 'video':

        // 创建视频元素
        const video = document.createElement('video');
        video.src = modelData.defaultProps.path; // 替换为你的视频URL
        video.crossOrigin = 'anonymous';
        video.loop = true;
        video.muted = true; // 必须静音才能自动播放
        video.playsInline = true;
        video.autoplay = true; // 添加自动播放
        video.preload = 'auto'; // 预加载视频

        // 添加视频事件监听
        video.addEventListener('loadstart', () => {
          console.log('视频开始加载');
        });

        video.addEventListener('canplay', () => {
          console.log('视频可以播放');
        });

        video.addEventListener('error', (e) => {
          console.error('视频加载错误:', e);
        });

        // 视频加载后回调
        video.addEventListener('loadedmetadata', () => {
          console.log('视频元数据加载完成', video.videoWidth, video.videoHeight);
          // 视频保持原始宽高比
          const videoAspect = video.videoWidth / video.videoHeight;
          const width = 1; // 固定宽度为1.5
          const height = width / videoAspect; // 高度根据宽高比计算

          // 创建视频纹理
          const videoTexture = new THREE.VideoTexture(video);
          videoTexture.minFilter = THREE.LinearFilter;
          videoTexture.magFilter = THREE.LinearFilter;
          videoTexture.generateMipmaps = false; // 禁用mipmap生成，减少闪烁
          videoTexture.flipY = true; // 启用Y轴翻转，修复上下颠倒问题
          videoTexture.needsUpdate = true; // 立即标记需要更新

          // 创建平面几何体（保持原始宽高比）
          const geometry = new THREE.PlaneGeometry(width, height);

          // 创建材质
          const material = new THREE.MeshBasicMaterial({
            map: videoTexture,
            side: THREE.DoubleSide,
            transparent: true, // 恢复透明度支持
            opacity: 1.0, // 设置完全不透明
            depthWrite: true, // 启用深度写入
            depthTest: true, // 启用深度测试
            color: 0xffffff // 确保材质颜色为白色
          });

          // 创建视频平面
          const videoMesh = new THREE.Mesh(geometry, material);

          // 设置阴影
          videoMesh.castShadow = true
          videoMesh.receiveShadow = true

          // 设置位置（默认放在场景中心稍上方，使用原始单位）
          videoMesh.position.set(0, props.height / 2 || 0.5, 0)

          // 设置用户数据，用于后续识别
          videoMesh.userData = {
            id: objectData.id, // 使用唯一的实例ID
            materialId: objectData.materialId, // 素材库中的原始ID
            type: modelData.type,
            name: objectData.name, // 使用生成的唯一名称
            path: modelData.defaultProps.path
          }

          // 添加到场景
          scene.add(videoMesh)
          // 选中新创建的对象
          selectObject(videoMesh)

          // 标记需要渲染
          if (transformControls) {
            // transformControls.changed = true // 在r174版本中不再支持直接设置changed属性
          }

          // 发送对象创建事件到父组件
          emit('object-created', objectData)

          // 播放视频
          video.play().then(() => {
            console.log('视频开始播放');
            console.log('视频当前时间:', video.currentTime);
            console.log('视频是否暂停:', video.paused);
            // 确保纹理更新
            videoTexture.needsUpdate = true;
          }).catch(e => {
            console.error('视频播放失败:', e);
            // 如果自动播放失败，尝试手动触发播放
            setTimeout(() => {
              video.play().catch(err => console.error('手动播放也失败:', err));
            }, 1000);
          });

          // 添加时间更新监听，确保视频在播放
          video.addEventListener('timeupdate', () => {
            videoTexture.needsUpdate = true;
          });
        });

        break
      case 'audio':

        break
      default:
        console.error('未知的素材类型:', modelData.type)
        return
    }

    // // 创建网格对象
    // const mesh = new THREE.Mesh(geometry, material)
    //
    // // 设置阴影
    // mesh.castShadow = true
    // mesh.receiveShadow = true
    //
    // // 设置位置（默认放在场景中心稍上方）
    // mesh.position.set(0, props.height / 2 || 0.5, 0)
    //
    // // 设置用户数据，用于后续识别
    // mesh.userData = {
    //   type: modelData.type,
    //   name: modelData.name
    // }
    //
    // // 设置id到userData中，便于后续查找
    // mesh.userData.id = objectData.id
    //
    // // 添加到场景
    // scene.add(mesh)

    // // 选中新创建的对象
    // selectObject(mesh)
    //
    // // 标记需要渲染
    // if (transformControls) {
    //   transformControls.changed = true
    // }
    //
    // // 发送对象创建事件到父组件
    // emit('object-created', objectData)

    // return mesh
  } catch (error) {
    console.error('创建模型时出错:', error)
    // return null
  }
}

const loadImage = (imageConfig) => {
  const { path, position, rotation, scale } = imageConfig;
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    path.includes('?versionId') ? path + '&v=1' : path + '?v=1',
    (texture) => {
      let geometry;

      // 检查是否是识别图（通过ID或名称判断）
      const isRecognitionImage =
        imageConfig.id.toString().includes('recognition_image') ||
        imageConfig.name === '识别图' ||
        imageConfig.type === 'recognition_image';

             // 所有图片都保持原始宽高比
       const aspectRatio = texture.image.width / texture.image.height;

       if (isRecognitionImage) {
         // 识别图：宽度固定为1
         const width = 1;
         const height = width / aspectRatio;
         geometry = new THREE.PlaneGeometry(width, height);
       } else {
         // 普通图片：宽度固定为1.5，保持宽高比
         const width = 1;
         const height = width / aspectRatio;
         geometry = new THREE.PlaneGeometry(width, height);
       }
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true      // 启用透明（如果图片有透明通道）
      });
      const mesh = new THREE.Mesh(geometry, material);

      // 设置阴影
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      // 直接使用原始坐标值
      mesh.position.set(
        position.x,
        position.y,
        position.z
      );
      // 应用与index.vue图片旋转一致的逻辑
      mesh.rotation.set(
        (rotation.x * Math.PI) / 180,
        (rotation.z * Math.PI) / 180,   // 注意：图片的Y和Z轴顺序不同
        (-rotation.y * Math.PI) / 180   // Y轴取反
      );

      // 缩放处理：识别图有固定缩放，普通图片使用用户设置的缩放
      if (isRecognitionImage) {
        // 识别图：固定缩放 1 倍，与index.vue中fileList1的处理一致
        mesh.scale.set(1, 1, 1);
        mesh.rotation.set(0, 0, 0);
      } else {
        // 普通图片：使用用户设置的缩放
        mesh.scale.set(scale.x, scale.y, scale.z);
      }
      // 设置用户数据，用于后续识别
      mesh.userData = {
        id: imageConfig.id, // 使用sceneObjects中的id
        materialId: imageConfig.materialId, // 素材库中的原始ID
        type: imageConfig.type,
        name: imageConfig.name,
        path: imageConfig.path
      }
      scene.add(mesh);
      loadedModels.push({ model: mesh, config: imageConfig });
    },
    undefined,
    (error) => {
      console.error('Error loading image:', error);
    }
  );
};

const loadVideo = (videoConfig) => {
  const { path, position, rotation, scale } = videoConfig;
  const video = document.createElement('video');
  video.src = path.includes('?versionId') ? path + '&v=1' : path + '?v=1';
  video.crossOrigin = 'anonymous';
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.autoplay = true; // 添加自动播放
  video.preload = 'auto'; // 预加载视频

  // 添加视频事件监听
  video.addEventListener('loadstart', () => {
    console.log('视频开始加载');
  });

  video.addEventListener('canplay', () => {
    console.log('视频可以播放');
  });

  video.addEventListener('error', (e) => {
    console.error('视频加载错误:', e);
  });

  // 视频加载后回调
  video.addEventListener('loadedmetadata', () => {
    console.log('视频元数据加载完成', video.videoWidth, video.videoHeight);
    // 视频保持原始宽高比
    const videoAspect = video.videoWidth / video.videoHeight;
    const width = 1; // 固定宽度为1.5
    const height = width / videoAspect; // 高度根据宽高比计算

    // 创建视频纹理
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.generateMipmaps = false; // 禁用mipmap生成，减少闪烁
    videoTexture.flipY = true; // 启用Y轴翻转，修复上下颠倒问题
    videoTexture.needsUpdate = true; // 立即标记需要更新

    // 创建平面几何体（保持原始宽高比）
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshBasicMaterial({
      map: videoTexture,
      side: THREE.DoubleSide,
      transparent: true, // 恢复透明度支持
      opacity: 1.0, // 设置完全不透明
      depthWrite: true, // 启用深度写入
      depthTest: true, // 启用深度测试
      color: 0xffffff // 确保材质颜色为白色
    });
    const mesh = new THREE.Mesh(geometry, material);

    // 设置阴影
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    // 直接使用原始坐标值
    mesh.position.set(
      position.x,
      position.y,
      position.z
    );
    // 应用与index.vue视频旋转一致的逻辑
    mesh.rotation.set(
      (rotation.x * Math.PI) / 180,
      (rotation.z * Math.PI) / 180,   // 注意：视频的Y和Z轴顺序不同
      (-rotation.y * Math.PI) / 180   // Y轴取反
    );
    mesh.scale.set(scale.x, scale.y, scale.z);

    // 设置用户数据，用于后续识别
    mesh.userData = {
      id: videoConfig.id, // 使用sceneObjects中的id
      materialId: videoConfig.materialId, // 素材库中的原始ID
      type: videoConfig.type,
      name: videoConfig.name,
      path: videoConfig.path
    }

    scene.add(mesh);
    loadedModels.push({ model: mesh, config: videoConfig });

    // 播放视频
    video.play().then(() => {
      console.log('视频开始播放');
      console.log('视频当前时间:', video.currentTime);
      console.log('视频是否暂停:', video.paused);
      // 确保纹理更新
      videoTexture.needsUpdate = true;
    }).catch(e => {
      console.error('视频播放失败:', e);
      // 如果自动播放失败，尝试手动触发播放
      setTimeout(() => {
        video.play().catch(err => console.error('手动播放也失败:', err));
      }, 1000);
    });

    // 添加时间更新监听，确保视频在播放
    video.addEventListener('timeupdate', () => {
      videoTexture.needsUpdate = true;
    });
  });
};
let loadedModels = [];

const loadGeometry = (geometryConfig) => {
  const { position, rotation, scale, defaultProps, id, materialId, name } = geometryConfig;
  let geometry = null;
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    roughness: 0.5,
    metalness: 0.3
  });
  
  // 根据几何体类型创建对应的几何体
  switch (defaultProps.geometryType) {
    case 'box':
      geometry = new THREE.BoxGeometry(defaultProps.width, defaultProps.height, defaultProps.depth);
      break;
    case 'sphere':
      geometry = new THREE.SphereGeometry(defaultProps.radius, defaultProps.widthSegments, defaultProps.heightSegments);
      break;
    case 'cylinder':
      geometry = new THREE.CylinderGeometry(defaultProps.radiusTop, defaultProps.radiusBottom, defaultProps.height, defaultProps.radialSegments);
      break;
    case 'cone':
      geometry = new THREE.ConeGeometry(defaultProps.radius, defaultProps.height, defaultProps.radialSegments);
      break;
    case 'torus':
      geometry = new THREE.TorusGeometry(defaultProps.radius, defaultProps.tube, defaultProps.radialSegments, defaultProps.tubularSegments);
      break;
    case 'plane':
      geometry = new THREE.PlaneGeometry(defaultProps.width, defaultProps.height);
      break;
    default:
      console.error('未知的几何体类型:', defaultProps.geometryType);
      return;
  }
  
  if (geometry) {
    const mesh = new THREE.Mesh(geometry, material);
    
    // 设置阴影
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // 设置位置、旋转和缩放
    mesh.position.set(position.x, position.y, position.z);
    mesh.rotation.set(
      (rotation.x * Math.PI) / 180,
      (rotation.y * Math.PI) / 180,
      (rotation.z * Math.PI) / 180
    );
    mesh.scale.set(scale.x, scale.y, scale.z);
    
    // 设置用户数据
    mesh.userData = {
      id: id,
      materialId: materialId,
      type: 'geometry',
      name: name,
      geometryType: defaultProps.geometryType,
      defaultProps: defaultProps
    };
    
    // 添加到场景
    scene.add(mesh);
    loadedModels.push({ model: mesh, config: geometryConfig });
  }
};

const loadModel = (modelConfig) => {
  const { path, position, rotation, scale } = modelConfig;
  console.log('模型位置属性', position)
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    'https://unpkg.com/three@0.150.1/examples/jsm/libs/draco/' // 使用公共CDN资源
  );
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.load(
    path, // 简化URL处理，直接使用path
    (gltf) => {
      const currentModel = gltf.scene;
      // 直接使用原始坐标值
      currentModel.position.set(
        position.x,
        position.y,
        position.z
      );
      // 设置旋转顺序为 YXZ
      currentModel.rotation.order = 'YXZ';
      // 将角度转换为弧度，并应用Y、Z轴取反逻辑
      currentModel.rotation.set(
        (rotation.x * Math.PI) / 180,
        (-rotation.y * Math.PI) / 180,  // Y轴取反
        (-rotation.z * Math.PI) / 180   // Z轴取反
      );
      currentModel.scale.set(scale.x, scale.y, scale.z);
      scene.add(currentModel);
      loadedModels.push({ model: currentModel, config: modelConfig }); // 存储加载的模型和配置

      // 设置用户数据，用于后续识别
      currentModel.userData = {
        id: modelConfig.id, // 使用sceneObjects中的id
        materialId: modelConfig.materialId, // 素材库中的原始ID
        type: modelConfig.type,
        name: modelConfig.name,
        path: modelConfig.path
      }

      console.log('模型加载完成', modelConfig.name);

      if (gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(currentModel);
        const action = mixer.clipAction(gltf.animations[0]);
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.play();

        action.getMixer().addEventListener('finished', () => {
          console.log('动画播放完成', modelConfig.name);
        });
      }
    },
    (progress) => {},
    (error) => {
      console.error('Error loading model:', modelConfig.name, error);
    }
  );
};

const selectObject = (object) => {
  // 检查是否是识别图，如果是则不允许选中
  if (object && object.userData && object.userData.isRecognitionImage) {
    return;
  }

  // 如果之前已经有选中的对象，先分离控制器
  if (transformControls && transformControls.object) {
    transformControls.detach()
  }

  selectedObject = object

  if (transformControls && object) {
    // 设置变换模式
    transformControls.setMode(transformMode.value)
    
    // 确保控制器可见
    transformControls.visible = true
    transformControls.enabled = true
    
    // 直接挂载到对象上
    transformControls.attach(object)
    
    // 获取helper并添加到场景（如果还没有添加）
    const helper = transformControls.getHelper()
    if (helper) {
      if (!helper.parent) {
        scene.add(helper)
        console.log('添加helper到场景')
      }
      helper.visible = true
      console.log('设置helper.visible = true')
    }
    
    // 确保gizmo也是可见的
    if (transformControls._gizmo) {
      if (!transformControls._gizmo.parent) {
        scene.add(transformControls._gizmo)
        console.log('添加_gizmo到场景')
      }
      transformControls._gizmo.visible = true
      console.log('设置_gizmo.visible = true')
    }
    
    console.log('TransformControls已挂载到对象', object)
    console.log('TransformControls内部结构:', transformControls)
    console.log('TransformControls.visible:', transformControls.visible)
    console.log('TransformControls.enabled:', transformControls.enabled)
    console.log('TransformControls object:', transformControls.object)
    console.log('检查TransformControls的children:', transformControls.children)
    
    // 检查是否有gizmo或helper
    for (let key in transformControls) {
      if (key.includes('gizmo') || key.includes('helper') || key.includes('Helper')) {
        console.log(`发现可能的gizmo属性: ${key}:`, transformControls[key])
      }
    }

    const objectId = object.userData?.id
    console.log('看这里的object.id', objectId)

    selectedMaterialId.value = objectId

    emit('object-selected', objectId)

    // 只有在拖拽操作完成后才发送object-updated事件，避免在对象创建时发送
    // const objectType = object.userData?.type
    // const objInfo = {
    //   id: objectId,
    //   position: {
    //     x: Number(object.position.x.toFixed(2)),
    //     y: Number(object.position.y.toFixed(2)),
    //     z: Number(object.position.z.toFixed(2))
    //   },
    //   rotation: {
    //     x: objectType === 'pic' || objectType === 'video'
    //       ? Number((object.rotation.x * 180 / Math.PI).toFixed(1))
    //       : Number((object.rotation.x * 180 / Math.PI).toFixed(1)),
    //     y: objectType === 'pic' || objectType === 'video'
    //       ? Number((-object.rotation.z * 180 / Math.PI).toFixed(1))
    //       : Number((-object.rotation.y * 180 / Math.PI).toFixed(1)),
    //     z: objectType === 'pic' || objectType === 'video'
    //       ? Number((object.rotation.y * 180 / Math.PI).toFixed(1))
    //       : Number((-object.rotation.z * 180 / Math.PI).toFixed(1))
    //   },
    //   scale: {
    //     x: Number(object.scale.x.toFixed(2)),
    //     y: Number(object.scale.y.toFixed(2)),
    //     z: Number(object.scale.z.toFixed(2))
    //   }
    // }
    // console.log('update333', objInfo)
    // emit('object-updated', objInfo)
  } else {
    if (transformControls) {
      transformControls.detach()
      // 隐藏gizmo和helper
      if (transformControls._gizmo) {
        transformControls._gizmo.visible = false
      }
      const helper = transformControls.getHelper()
      if (helper) {
        helper.visible = false
      }
    }
    selectedMaterialId.value = null
    emit('object-selected', null)
  }
}

const preview = () => {
  if (transformControls) {
    transformControls.detach()
  }
  selectedMaterialId.value = null
  emit('object-selected', null)
}

const handleClick = (event) => {
  if (event.target.tagName === 'BUTTON' ||
    event.target !== renderer.domElement ||
    (transformControls && transformControls.dragging)) {
    return
  }

  console.log('处理点击事件')

  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)

  const selectableObjects = []
  scene.traverse(object => {
    if (!object.isMesh && !object.isSkinnedMesh) return
    if (object.isHelper ||
      object.name.includes('Helper') ||
      object.name.includes('helper') ||
      object.isTransformControlsPlane) return
    let parent = object.parent
    while (parent) {
      if (parent === transformControls ||
        parent.type === 'TransformControlsGizmo' ||
        parent.name.includes('TransformControls')) {
        return
      }
      parent = parent.parent
    }

    if (object.geometry && object.material) {
      selectableObjects.push(object)
    }
  })

  console.log('可选物体数量:', selectableObjects.length)

  const intersects = raycaster.intersectObjects(selectableObjects, false)

  console.log('交叉物体数量:', intersects.length)

  if (intersects.length > 0) {
    let clickedObject = intersects[0].object
    console.log('点击到对象:', clickedObject)

    // 检查是否是识别图，如果是则不允许选中
     const checkIfRecognitionImage = (obj) => {
       return obj.userData && (
         obj.userData.isRecognitionImage ||
         obj.userData.id.toString().includes('recognition_image') ||
         obj.userData.name === '识别图' ||
         obj.userData.type === 'recognition_image'
       );
     };

    if (clickedObject.parent && clickedObject.parent !== scene) {
      let rootObject = clickedObject
      while (rootObject.parent && rootObject.parent !== scene) {
        rootObject = rootObject.parent
      }

      // 如果是识别图，直接返回，不进行选中操作
      if (checkIfRecognitionImage(rootObject)) {
        return;
      }

      if (!rootObject.userData) {
        rootObject.userData = { id: rootObject.id }
      } else if (!rootObject.userData.id) {
        rootObject.userData.id = rootObject.id
      } else {
        rootObject.userData.id = rootObject.userData.id
      }

      selectObject(rootObject)
    } else {
      // 如果是识别图，直接返回，不进行选中操作
      if (checkIfRecognitionImage(clickedObject)) {
        return;
      }

      if (!clickedObject.userData) {
        clickedObject.userData = { id: clickedObject.id }
      } else if (!clickedObject.userData.id) {
        clickedObject.userData.id = clickedObject.id
      } else {
        clickedObject.userData.id = clickedObject.userData.id
      }

      selectObject(clickedObject)
    }
  } else {
    return
  }
}

const handleMouseMove = (event) => {
  if (!renderer || !renderer.domElement || (transformControls && transformControls.object)) {
    return
  }

  if (event.target !== renderer.domElement) {
    return
  }

  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  if (raycaster && camera && scene) {
    try {
      raycaster.setFromCamera(mouse, camera)

      const transformControlsObjects = []
      scene.traverse(object => {
        if (object.isHelper ||
          object.name.includes('Helper') ||
          object.name.includes('helper') ||
          object.type === 'TransformControlsGizmo' ||
          object.name.includes('TransformControls')) {
          transformControlsObjects.push(object)
        }

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

      const transformIntersects = raycaster.intersectObjects(transformControlsObjects, false)
      if (transformIntersects.length > 0) {
        return
      }
    } catch (error) {
      console.error('鼠标移动处理错误:', error)
    }
  }
}

const resetSelectedObject = () => {
  if (!selectedObject) return

  selectedObject.position.set(0, 0, 0)
  selectedObject.rotation.set(0, 0, 0)
  selectedObject.scale.set(1, 1, 1)

  if (selectedObject.userData.type) {
    switch (selectedObject.userData.type) {
      case 'cube':
      case 'cylinder':
        selectedObject.position.y = selectedObject.geometry.parameters.height / 2 || 0.5
        break
      case 'sphere':
        selectedObject.position.y = selectedObject.geometry.parameters.radius || 0.5
        break
      default:
        selectedObject.position.y = 0.5
    }
  }

  if (transformControls && transformControls.object) {
    transformControls.object.position.copy(selectedObject.position)
    transformControls.object.rotation.copy(selectedObject.rotation)
    transformControls.object.scale.copy(selectedObject.scale)
  }

  selectedObject.updateMatrix()
  selectedObject.updateMatrixWorld(true)

  if (transformControls) {
    // transformControls.changed = true // 在r174版本中不再支持直接设置changed属性
  }

  const objectType = selectedObject.userData?.type
  const objToSend = {
    id: selectedObject.id,
    position: {
      x: Number(selectedObject.position.x.toFixed(2)),
      y: Number(selectedObject.position.y.toFixed(2)),
      z: Number(selectedObject.position.z.toFixed(2))
    },
    rotation: {
      x: objectType === 'pic' || objectType === 'video'
        ? Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1))
        : Number((selectedObject.rotation.x * 180 / Math.PI).toFixed(1)),
      y: objectType === 'pic' || objectType === 'video'
        ? Number((-selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
        : Number((-selectedObject.rotation.y * 180 / Math.PI).toFixed(1)),
      z: objectType === 'pic' || objectType === 'video'
        ? Number((selectedObject.rotation.y * 180 / Math.PI).toFixed(1))
        : Number((-selectedObject.rotation.z * 180 / Math.PI).toFixed(1))
    },
    scale: {
      x: Number(selectedObject.scale.x.toFixed(2)),
      y: Number(selectedObject.scale.y.toFixed(2)),
      z: Number(selectedObject.scale.z.toFixed(2))
    },
    type: selectedObject.userData.type || 'unknown',
    name: selectedObject.userData.name || 'Object'
  }
  console.log('update444', objToSend)
  emit('object-updated', objToSend)

  renderer.render(scene, camera)
}

watch(() => props.sceneObjects, (newObjects) => {
  if (!scene || !newObjects || newObjects.length === 0) return
  newObjects.forEach(objData => {
    let sceneObject = null
    scene.traverse((object) => {
      if (object.userData && String(object.userData.id) === String(objData.id)) {
        sceneObject = object
      }
    })

    if (sceneObject) {
      if (objData.position) {
        sceneObject.position.set(
          objData.position.x,
          objData.position.y,
          objData.position.z
        )
      }

      if (objData.rotation) {
        const objectType = sceneObject.userData?.type
        if (objectType === 'model') {
          sceneObject.rotation.order = 'YXZ'
          sceneObject.rotation.set(
            (objData.rotation.x * Math.PI) / 180,
            (-objData.rotation.y * Math.PI) / 180,
            (-objData.rotation.z * Math.PI) / 180
          )
        } else {
          sceneObject.rotation.set(
            (objData.rotation.x * Math.PI) / 180,
            (objData.rotation.z * Math.PI) / 180,
            (-objData.rotation.y * Math.PI) / 180
          )
        }
      }

      if (objData.scale) {
        sceneObject.scale.set(
          objData.scale.x,
          objData.scale.y,
          objData.scale.z
        )
      }

      sceneObject.updateMatrix()
      sceneObject.updateMatrixWorld(true)

      if (selectedObject && String(selectedObject.userData.id) === String(objData.id) && transformControls) {
        // transformControls.changed = true // 在r174版本中不再支持直接设置changed属性
      }

      if (renderer && camera) {
        renderer.render(scene, camera)
      }
    }
  })
}, { deep: true })

watch(() => props.selectedObjectId, (newId) => {
  if (!newId || !scene) return

  let objectToSelect = null
  scene.traverse((object) => {
    if ((object.userData && String(object.userData.id) === String(newId)) || String(object.id) === String(newId)) {
      objectToSelect = object
    }
  })

  if (objectToSelect) {
    selectObject(objectToSelect)
  }
})

// 监听下拉框选择的变化
watch(selectedMaterialId, (newId) => {
  if (!newId || !scene) return
  
  console.log('下拉框选择了素材:', newId)
  
  let objectToSelect = null
  scene.traverse((object) => {
    if (object.userData && String(object.userData.id) === String(newId)) {
      objectToSelect = object
    }
  })

  if (objectToSelect) {
    selectObject(objectToSelect)
  }
})

onMounted(() => {
  console.log('Scene中查看源数据sceneObjects', props.sceneObjects)
  initScene()
  if (props.sceneObjects.length > 0) {
    props.sceneObjects.forEach((modelConfig) => {
      if (modelConfig.type === 'model') {
        loadModel(modelConfig);
      } else if (modelConfig.type === 'pic') {
        loadImage(modelConfig);
      } else if (modelConfig.type === 'video') {
        loadVideo(modelConfig);
      } else if (modelConfig.type === 'geometry') {
        loadGeometry(modelConfig);
      }
    });
  }
  window.addEventListener('resize', handleResize)
  // 添加鼠标移动事件监听
  window.addEventListener('mousemove', handleMouseMove)
})

const clearAllObjects = () => {
  if (!scene) return

  // 添加二次确认
  if (confirm('确定要清空场景中的所有素材吗？此操作不可撤销。')) {
    // 用户确认后执行清空操作
    const objectIds = []
    const objectsToRemove = []

    scene.traverse((object) => {
      if (object.userData && object.userData.id &&
          (object.userData.type === 'model' || object.userData.type === 'pic' || object.userData.type === 'video' || object.userData.type === 'geometry')) {
        objectIds.push(object.userData.id)
        objectsToRemove.push(object)
      }
    })

    objectsToRemove.forEach(object => {
      scene.remove(object)
      if (selectedObject === object) {
        selectedObject = null
      }
    })

    selectedObject = null
    selectedMaterialId.value = null

    if (transformControls && transformControls.object) {
      transformControls.detach()
    }

    loadedModels = []

    emit('objects-cleared', objectIds)

    renderer.render(scene, camera)
    
    // 显示成功提示
    alert('场景已清空')
  }
}

const deleteSelectedObject = () => {
  if (!selectedObject) return

  const objectId = selectedObject.userData?.id || selectedObject.id

  scene.remove(selectedObject)

  if (transformControls && transformControls.object) {
    transformControls.detach()
  }

  selectedObject = null

  emit('object-deleted', objectId)

  renderer.render(scene, camera)
}

const setTopView = () => {
  if (!camera || !orbitControls) return

  camera.position.set(0, -8, 1)
  camera.lookAt(0, 0, 0)

  orbitControls.target.set(0, 0, 0)
  orbitControls.update()

  if (renderer) {
    renderer.render(scene, camera)
  }
}

// ViewHelper相机视角切换方法（带动画过渡）
let isAnimating = false
const setCameraView = (axis) => {
  if (!camera || !orbitControls || isAnimating) return

  const distance = 8 // 相机距离目标的距离
  const target = new THREE.Vector3(0, 0, 0) // 目标点
  let targetPosition = new THREE.Vector3()

  switch (axis) {
    case 'x':
      // 从X轴正方向看向原点
      targetPosition.set(distance, 0, 0)
      break
    case '-x':
      // 从X轴负方向看向原点
      targetPosition.set(-distance, 0, 0)
      break
    case 'y':
      // 从Y轴正方向看向原点
      targetPosition.set(0, distance, 0)
      break
    case '-y':
      // 从Y轴负方向看向原点
      targetPosition.set(0, -distance, 0)
      break
    case 'z':
      // 从Z轴正方向看向原点
      targetPosition.set(0, 0, -distance)
      break
    case '-z':
      // 从Z轴负方向看向原点
      targetPosition.set(0, 0, distance)
      break
    default:
      return
  }

  // 动画参数
  const startPosition = camera.position.clone()
  const startTarget = orbitControls.target.clone()
  const duration = 800 // 动画持续时间（毫秒）
  const startTime = Date.now()

  isAnimating = true

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // 使用easeInOutCubic缓动函数
    const easeProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2

    // 插值相机位置
    camera.position.lerpVectors(startPosition, targetPosition, easeProgress)
    
    // 插值控制器目标
    orbitControls.target.lerpVectors(startTarget, target, easeProgress)
    
    // 更新相机朝向
    camera.lookAt(orbitControls.target)
    orbitControls.update()

    if (renderer) {
      renderer.render(scene, camera)
    }

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      isAnimating = false
    }
  }

  animate()
}

const collectSceneObjects = () => {
  emit('confirm')
}

const handleMaterialSelect = (materialId) => {
  if (!materialId || !scene) return

  let objectToSelect = null
  scene.traverse((object) => {
    if (object.userData && String(object.userData.id) === String(materialId)) {
      objectToSelect = object
    }
  })

  if (objectToSelect) {
    // 检查是否是识别图，如果是则不允许选中
    if (objectToSelect.userData && objectToSelect.userData.isRecognitionImage) {
      return;
    }
    selectObject(objectToSelect)
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
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
  width: 100%;
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.transform-controls button {
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
  transition: all 0.2s;
}

.transform-controls button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.transform-controls button.active {
  background-color: #2196F3;
  color: white;
}

.transform-controls .section0 {
  position: absolute;
  left: 10px;
  display: flex;
  align-items: flex-end;
}

.transform-controls .section1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.transform-controls .section3 {
  position: fixed;
  right: -30px;
  top: 15px;
  transform: translateX(-50%);
  z-index: 999999999999;
}

.transform-controls .section2 {
  position: absolute;
  right: 10px;
}

.preview-button {
  background-color: #9C27B0 !important;
  color: white;
}

.top-view-button {
  background-color: #2196F3 !important;
  color: white;
}

.reset-button {
  background-color: #FF9800 !important;
  color: white;
  margin-left: 10px;
}

.delete-button {
  background-color: #f44336 !important;
  color: white;
}

.confirm-button {
  background-color: #4CAF50 !important;
  color: white;
}
::v-deep .el-input__inner {
  margin-top: -4px !important;
}

/* ViewHelper控件样式 - 仿照three.js editor */
.view-helper {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  z-index: 1000;
  pointer-events: auto;
}

.view-helper-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 轴线样式 */
.axis-line {
  position: absolute;
  background: #666;
}

.x-line {
  top: 50%;
  left: 50%;
  width: 48px;
  height: 1px;
  transform: translate(-50%, -50%);
  background: #ff6b6b;
}

.y-line {
  top: 50%;
  left: 50%;
  width: 1px;
  height: 48px;
  transform: translate(-50%, -50%);
  background: #51cf66;
}

.z-line {
  top: 50%;
  left: 50%;
  width: 48px;
  height: 1px;
  transform: translate(-50%, -50%) rotate(-45deg);
  background: #339af0;
}

/* 球体样式 */
.axis-sphere {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.axis-sphere:hover {
  transform: scale(1.2);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

/* X轴球体 */
.x-axis.positive {
  background: #f00;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.x-axis.negative {
  background: #aaa;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

/* Y轴球体 */
.y-axis.positive {
  background: #0f0;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.y-axis.negative {
  background: #aaa;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

/* Z轴球体 */
.z-axis.positive {
  background: #aaa;
  top: 18px;
  right: 18px;
}

.z-axis.negative {
  background: #00f;
  bottom: 18px;
  left: 18px;
}

/* 中心球体 */
.center-sphere {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #868e96;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.axis-sphere:active {
  transform: scale(0.9);
}

.material-select {
  width: 250px;
  height: 36px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 10px;
  color: #606266;
  background-color: #fff;
  margin-right: 10px;
}
</style>