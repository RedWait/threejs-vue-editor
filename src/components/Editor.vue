<template>
  <div class="editor-container">
    <div class="left-panel">
      <ModelList
        :isTreasure="isTreasure"
        @model-drag-start="handleModelDragStart"
      />
    </div>
    <div class="scene-container">
      <Scene
        @object-selected="handleObjectSelected"
        @object-created="handleObjectCreated"
        @object-updated="handleObjectUpdated"
        @object-deleted="handleObjectDeleted"
        @objects-cleared="handleObjectsCleared"
        @confirm="confirm"
        :scene-objects="sceneObjects"
        :selected-object-id="selectedObjectId"
      />
    </div>
    <div class="right-panel">
      <PropertyPanel
        :selected-object="selectedObject"
        @update-object="handleUpdateObject"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps, watch } from 'vue'
import ModelList from './editor/ModelList.vue'
import Scene from './editor/Scene.vue'
import PropertyPanel from './editor/PropertyPanel.vue'

const props = defineProps({
  currentMats: {
    type: Array,
    default: () => []
  },
  isTreasure: {
    type: Boolean,
    default: () => false
  },
})

// 场景中所有对象的数组
const sceneObjects = ref([...props.currentMats])

// 当前选中对象的ID
const selectedObjectId = ref(null)

// 监听 currentMats 的变化，重新初始化数据
watch(() => props.currentMats, (newMats) => {
  console.log('currentMats 发生变化，重新初始化 Editor 数据:', newMats)
  // 深拷贝新的数据
  sceneObjects.value = [...newMats]
  // 清空选中状态
  selectedObjectId.value = null
}, { 
  immediate: false, // 不需要立即执行，因为初始化时已经设置了
  deep: true // 深度监听数组内容变化
})

// 计算属性：当前选中的对象
const selectedObject = computed(() => {
  console.log('当前对象属性发生变化', sceneObjects.value)
  if (!selectedObjectId.value) return null
  return sceneObjects.value.find(obj => String(obj.id) === String(selectedObjectId.value)) || null
})

// 处理模型拖拽开始事件
const handleModelDragStart = (modelData) => {
  // 这里只需记录拖拽开始，实际创建对象的逻辑在Scene组件中处理
  console.log('开始拖拽模型:', modelData)
}

// 处理对象选择事件
const handleObjectSelected = (objectId) => {
  selectedObjectId.value = objectId
}

// 处理对象创建事件
const handleObjectCreated = (objectData) => {
  console.log('创建新对象:', objectData)
  // 添加新对象到数组
  sceneObjects.value.push(objectData)
  // 自动选中新创建的对象
  selectedObjectId.value = objectData.id
}

// 处理对象更新事件
const handleObjectUpdated = (updatedObject) => {
  // 检查是否为数组（从collectSceneObjects函数收集的所有对象）
  if (Array.isArray(updatedObject)) {
    // 更新整个sceneObjects数组
    sceneObjects.value = updatedObject;
    return;
  }

  // 单个对象更新
  console.log('接收到对象更新:', updatedObject);

  // ID已经是字符串类型，不需要转换
  const objId = updatedObject.id;
  console.log('查找对象ID:', objId, '类型:', typeof objId);
  console.log('当前sceneObjects:', sceneObjects.value.map(obj => ({ id: obj.id, type: typeof obj.id })));

  const index = sceneObjects.value.findIndex(obj => String(obj.id) === String(objId));
  console.log('找到的index:', index, objId, sceneObjects.value);
  if (index !== -1) {
    // 创建新对象并替换数组中的旧对象 (关键修改)
    const newObject = { ...sceneObjects.value[index], ...updatedObject };
    // 使用 splice 替换数组元素，确保 Vue 能够检测到变化
    sceneObjects.value.splice(index, 1, newObject);
    // 合并对象，保留原有属性
    // sceneObjects.value[index] = {
    //   ...sceneObjects.value[index],
    //   ...updatedObject
    // };
    console.log('更新后的对象:', sceneObjects.value[index]);
  } else {
    console.warn('未找到要更新的对象:', objId);
  }
}

// 处理对象属性更新
const handleUpdateObject = (updatedProps) => {
  if (!selectedObjectId.value) return

  // 查找当前选中的对象
  const index = sceneObjects.value.findIndex(obj => String(obj.id) === String(selectedObjectId.value))
  if (index === -1) return

  // 更新对象属性
  // sceneObjects.value[index] = {
  //   ...sceneObjects.value[index],
  //   ...updatedProps
  // }
  // 创建新对象并替换数组中的旧对象 (关键修改)
  const newObject = { ...sceneObjects.value[index], ...updatedProps };
  // 使用 splice 替换数组元素，确保 Vue 能够检测到变化
  sceneObjects.value.splice(index, 1, newObject);
}

// 处理对象删除事件
const handleObjectDeleted = (objectId) => {
  // 从场景对象数组中移除该对象
  const index = sceneObjects.value.findIndex(obj => String(obj.id) === String(objectId))
  if (index !== -1) {
    sceneObjects.value.splice(index, 1)
  }

  // 如果删除的是当前选中的对象，清空选中状态
  if (String(selectedObjectId.value) === String(objectId)) {
    selectedObjectId.value = null
  }
}

// 处理清空所有对象事件
const handleObjectsCleared = (objectIds) => {
  console.log('清空所有对象:', objectIds)
  
  // 清空场景对象数组
  sceneObjects.value = []
  
  // 清空选中状态
  selectedObjectId.value = null
  
  console.log('场景已清空，当前对象数量:', sceneObjects.value.length)
}

const emit = defineEmits(['confirm'])
const confirm = () => {
  // 确保回参中包含preview字段
  const resultData = sceneObjects.value.map(obj => {
    return {
      ...obj,
      // 确保preview字段存在，如果没有则使用src字段作为备用
      preview: obj.preview || obj.src || ''
    }
  })
  emit('confirm', resultData)
}
</script>

<style scoped>
.editor-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  overflow: hidden;
}

.left-panel {
  width: 300px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.scene-container {
  flex: 1;
  background-color: #ffffff;
  height: 100%;
  position: relative;
}

.right-panel {
  width: 300px;
  background-color: #ffffff;
  border-left: 1px solid #e0e0e0;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>