<template>
  <div class="property-panel">
    <h2>属性面板</h2>
    <div v-if="selectedObject" class="properties">
      <div class="property-group">
        <h3>基本信息</h3>
        <div class="property-field">
          <input
            type="text"
            disabled
            v-model="objectName"
            @change="updateObjectName"
          >
        </div>
        <!-- <div class="property-field">
          <span>{{ selectedObject.type }}</span>
        </div> -->
      </div>

      <div class="property-group">
        <h3>位置</h3>
        <div class="property-field">
          <label>X:</label>
          <input
            type="number"
            v-model="position.x"
            step="0.1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Y:</label>
          <input
            type="number"
            v-model="position.y"
            step="0.1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Z:</label>
          <input
            type="number"
            v-model="position.z"
            step="0.1"
            @input="updateObject"
          >
        </div>
      </div>

      <div class="property-group">
        <h3>旋转</h3>
        <div class="property-field">
          <label>X:</label>
          <input
            type="number"
            v-model="rotation.x"
            step="1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Y:</label>
          <input
            type="number"
            v-model="rotation.y"
            step="1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Z:</label>
          <input
            type="number"
            v-model="rotation.z"
            step="1"
            @input="updateObject"
          >
        </div>
      </div>

      <div class="property-group">
        <h3>缩放</h3>
        <div class="property-field">
          <label>X:</label>
          <input
            type="number"
            v-model="scale.x"
            step="0.01"
            min="0.01"
            @input="updateUniformScale"
          >
        </div>
        <div class="property-field">
          <label>Y:</label>
          <input
            type="number"
            v-model="scale.y"
            step="0.01"
            min="0.01"
            @input="updateUniformScale"
          >
        </div>
        <div class="property-field">
          <label>Z:</label>
          <input
            type="number"
            v-model="scale.z"
            step="0.01"
            min="0.01"
            @input="updateUniformScale"
          >
        </div>
      </div>
    </div>
    <div v-else class="no-selection">
      <p>请选择一个对象</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

// 接收从Editor传递的选中对象数据
const props = defineProps({
  selectedObject: {
    type: Object,
    default: null
  }
})

// 定义要发送给父组件的事件
const emit = defineEmits(['update-object'])

// 对象名称
const objectName = ref('')

// 使用ref来处理位置、旋转和缩放的数据
const position = ref({ x: 0, y: 0, z: 0 })
const rotation = ref({ x: 0, y: 0, z: 0 })
const scale = ref({ x: 1, y: 1, z: 1 })

// 监听selectedObject变化，同步数据
watch(() => props.selectedObject, (newValue) => {
  if (newValue) {
    // console.log('属性面板选中对象变化:', newValue);
    objectName.value = newValue.name || ''
    
    if (newValue.position) {
      position.value = { ...newValue.position }
    } else {
      position.value = { x: 0, y: 0, z: 0 }
    }
    
    if (newValue.rotation) {
      rotation.value = { ...newValue.rotation }
    } else {
      rotation.value = { x: 0, y: 0, z: 0 }
    }
    
    if (newValue.scale) {
      scale.value = { ...newValue.scale }
    } else {
      scale.value = { x: 1, y: 1, z: 1 }
    }
  } else {
    // 清空数据
    objectName.value = ''
    position.value = { x: 0, y: 0, z: 0 }
    rotation.value = { x: 0, y: 0, z: 0 }
    scale.value = { x: 1, y: 1, z: 1 }
  }
}, { immediate: true, deep: true });

// 更新对象名称
const updateObjectName = () => {
  if (!props.selectedObject) return

  emit('update-object', {
    name: objectName.value
  })
}

// 统一更新对象属性
const updateObject = () => {
  if (!props.selectedObject) return

  // 只有当值不为空字符串时才更新
  const positionData = {}
  const rotationData = {}
  
  if (position.value.x !== '' && position.value.x !== null && position.value.x !== undefined) {
    positionData.x = Number(position.value.x) || 0
  }
  if (position.value.y !== '' && position.value.y !== null && position.value.y !== undefined) {
    positionData.y = Number(position.value.y) || 0
  }
  if (position.value.z !== '' && position.value.z !== null && position.value.z !== undefined) {
    positionData.z = Number(position.value.z) || 0
  }
  
  if (rotation.value.x !== '' && rotation.value.x !== null && rotation.value.x !== undefined) {
    rotationData.x = Number(rotation.value.x) || 0
  }
  if (rotation.value.y !== '' && rotation.value.y !== null && rotation.value.y !== undefined) {
    rotationData.y = Number(rotation.value.y) || 0
  }
  if (rotation.value.z !== '' && rotation.value.z !== null && rotation.value.z !== undefined) {
    rotationData.z = Number(rotation.value.z) || 0
  }

  emit('update-object', {
    id: props.selectedObject.id,
    position: positionData,
    rotation: rotationData
  })
}

// 更新统一缩放
const updateUniformScale = () => {
  if (!props.selectedObject) return

  // 获取当前输入的值，只处理非空值
  let inputValue = scale.value.x || scale.value.y || scale.value.z
  
  // 如果输入为空字符串，不进行更新
  if (inputValue === '' || inputValue === null || inputValue === undefined) {
    return
  }
  
  // 转换为数字并确保值有效且大于0.01
  const numValue = Number(inputValue)
  if (isNaN(numValue)) return
  
  const newScale = Math.max(0.01, numValue)

  // 同步更新所有缩放值
  scale.value.x = newScale
  scale.value.y = newScale
  scale.value.z = newScale

  // 发送更新事件，三个轴使用相同的值
  emit('update-object', {
    id: props.selectedObject.id,
    scale: {
      x: newScale,
      y: newScale,
      z: newScale
    }
  })
}
</script>

<style scoped>
.property-panel {
  padding: 16px;
  color: #333;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: normal;
}

.properties {
  flex: 1;
  overflow-y: auto;
}

.property-group {
  margin-bottom: 24px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}

.property-field {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.property-field:last-child {
  margin-bottom: 0;
}

label {
  width: 24px;
  margin-right: 8px;
  color: #666;
}

input {
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #333;
  padding: 4px 8px;
  font-size: 12px;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #0077ff;
}

.no-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
  font-style: italic;
}
</style>