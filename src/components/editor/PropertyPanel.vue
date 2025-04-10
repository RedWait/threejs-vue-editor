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
            v-model.number="position.x"
            step="0.1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Y:</label>
          <input
            type="number"
            v-model.number="position.y"
            step="0.1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Z:</label>
          <input
            type="number"
            v-model.number="position.z"
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
            v-model.number="rotation.x"
            step="1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Y:</label>
          <input
            type="number"
            v-model.number="rotation.y"
            step="1"
            @input="updateObject"
          >
        </div>
        <div class="property-field">
          <label>Z:</label>
          <input
            type="number"
            v-model.number="rotation.z"
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
            v-model.number="scale.x"
            step="0.1"
            min="0.1"
            @input="updateUniformScale"
          >
        </div>
        <div class="property-field">
          <label>Y:</label>
          <input
            type="number"
            v-model.number="scale.y"
            step="0.1"
            min="0.1"
            @input="updateUniformScale"
          >
        </div>
        <div class="property-field">
          <label>Z:</label>
          <input
            type="number"
            v-model.number="scale.z"
            step="0.1"
            min="0.1"
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
const objectName = computed({
  get: () => props.selectedObject?.name || '',
  set: (value) => {}
})

// 使用计算属性来处理位置、旋转和缩放的数据
const position = computed({
  get: () => {
    if (props.selectedObject && props.selectedObject.position) {
      console.log('属性面板获取位置:', props.selectedObject.position);
      return props.selectedObject.position;
    }
    return { x: 0, y: 0, z: 0 };
  },
  set: (value) => {}
});

const rotation = computed({
  get: () => {
    if (props.selectedObject && props.selectedObject.rotation) {
      console.log('属性面板获取旋转:', props.selectedObject.rotation);
      return props.selectedObject.rotation;
    }
    return { x: 0, y: 0, z: 0 };
  },
  set: (value) => {}
});

const scale = computed({
  get: () => {
    if (props.selectedObject && props.selectedObject.scale) {
      console.log('属性面板获取缩放:', props.selectedObject.scale);
      return props.selectedObject.scale;
    }
    return { x: 1, y: 1, z: 1 };
  },
  set: (value) => {}
});

// 监听selectedObject变化
watch(() => props.selectedObject, (newValue) => {
  if (newValue) {
    console.log('属性面板选中对象变化:', newValue);
  }
}, { deep: true });

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
  
  emit('update-object', {
    id: props.selectedObject.id, // 添加对象ID，确保能在Scene中找到对应对象
    position: {
      x: Number(position.value.x),
      y: Number(position.value.y),
      z: Number(position.value.z)
    },
    rotation: {
      x: Number(rotation.value.x),
      y: Number(rotation.value.y),
      z: Number(rotation.value.z)
    }
  })
}

// 更新统一缩放
const updateUniformScale = () => {
  if (!props.selectedObject) return
  
  // 获取当前输入的值
  const inputValue = Number(scale.value.x || scale.value.y || scale.value.z)
  
  // 确保值有效且大于0
  const newScale = Math.max(0.1, inputValue)
  
  // 发送更新事件，三个轴使用相同的值
  emit('update-object', {
    id: props.selectedObject.id, // 添加对象ID，确保能在Scene中找到对应对象
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