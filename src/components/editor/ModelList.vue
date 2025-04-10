<template>
  <div class="model-list">
    <h2>模型列表</h2>
    <div class="model-items">
      <div
        v-for="model in models"
        :key="model.id"
        class="model-item"
        draggable="true"
        @dragstart="handleDragStart(model)"
      >
        <div class="model-preview">
          <img :src="model.preview" :alt="model.name">
        </div>
        <div class="model-name">{{ model.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 模拟从API获取模型数据的函数
const fetchModelsFromAPI = async () => {
  // 这里将来可以替换为真实的API调用
  // 返回模拟的API响应数据
  return [
    {
      id: '1',
      name: '立方体',
      type: 'cube',
      preview: 'https://picsum.photos/50',
      defaultProps: {
        width: 1,
        height: 1,
        depth: 1
      }
    },
    {
      id: '2',
      name: '球体',
      type: 'sphere',
      preview: 'https://picsum.photos/50',
      defaultProps: {
        radius: 0.5,
        segments: 32
      }
    },
    {
      id: '3',
      name: '圆柱体',
      type: 'cylinder',
      preview: 'https://picsum.photos/50',
      defaultProps: {
        radius: 0.5,
        height: 1,
        segments: 32
      }
    },
    {
      id: '4',
      name: '小狗模型',
      type: 'gltf',
      preview: 'https://picsum.photos/50',
      defaultProps: {
        path: '/src/assets/dog.glb',
        scale: 1
      }
    }
  ];
};

const models = ref([])

// 在组件挂载时加载模型数据
onMounted(async () => {
  try {
    // 从API获取模型数据
    const modelData = await fetchModelsFromAPI()
    // 更新模型列表
    models.value = modelData
  } catch (error) {
    console.error('加载模型数据失败:', error)
  }
})

const emit = defineEmits(['model-drag-start'])

const handleDragStart = (model) => {
  // 设置拖拽数据
  const modelData = JSON.stringify(model)
  event.dataTransfer.setData('model', modelData)
  
  // 发送事件到父组件
  emit('model-drag-start', model)
}
</script>

<style scoped>
.model-list {
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

.model-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  overflow-y: auto;
}

.model-item {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 8px;
  cursor: move;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.model-item:hover {
  background-color: #e8e8e8;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.model-item:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.model-preview {
  width: 100%;
  aspect-ratio: 1;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.model-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.model-name {
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>