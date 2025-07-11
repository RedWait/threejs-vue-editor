<template>
  <div class="model-list">
    <h2>素材列表</h2>
    <div class="el-tabs">
      <div class="el-tabs__header">
        <div class="el-tabs__nav-wrap">
          <div class="el-tabs__nav">
            <div 
              v-for="tab in tabs" 
              :key="tab.name" 
              :class="['el-tabs__item', { 'is-active': materialType === tab.name }]"
              @click="handleTabClick(tab.name)"
            >
              {{ tab.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="model-items">
      <div 
        v-for="model in currentMaterials" 
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

// 模拟的素材类型选项卡
const tabs = [
  { label: '模型', name: 'model' },
  { label: '图片', name: 'pic' },
  { label: '视频', name: 'video' },
  { label: '几何体', name: 'geometry' },
  { label: '音频', name: 'audio' }
]

// 模拟从API获取模型数据的函数
const fetchMaterialsFromAPI = async () => {
  // 返回模拟的API响应数据
  return [
    // 几何体类型
    {
      id: 'geo_1',
      name: '立方体',
      type: 'geometry',
      preview: '/api/placeholder/100/100',
      defaultProps: {
        geometryType: 'box',
        width: 1,
        height: 1,
        depth: 1
      }
    },
    {
      id: 'geo_2',
      name: '球体',
      type: 'geometry',
      preview: '/api/placeholder/100/100',
      defaultProps: {
        geometryType: 'sphere',
        radius: 0.5,
        widthSegments: 32,
        heightSegments: 16
      }
    },
    {
      id: 'geo_3',
      name: '圆柱体',
      type: 'geometry',
      preview: '/api/placeholder/100/100',
      defaultProps: {
        geometryType: 'cylinder',
        radiusTop: 0.5,
        radiusBottom: 0.5,
        height: 1,
        radialSegments: 32
      }
    },
    {
      id: 'geo_4',
      name: '圆锥体',
      type: 'geometry',
      preview: '/api/placeholder/100/100',
      defaultProps: {
        geometryType: 'cone',
        radius: 0.5,
        height: 1,
        radialSegments: 32
      }
    },
    {
      id: 'geo_5',
      name: '圆环体',
      type: 'geometry',
      preview: '/api/placeholder/100/100',
      defaultProps: {
        geometryType: 'torus',
        radius: 0.5,
        tube: 0.2,
        radialSegments: 16,
        tubularSegments: 100
      }
    },
    {
      id: 'geo_6',
      name: '平面',
      type: 'geometry',
      preview: '/api/placeholder/100/100',
      defaultProps: {
        geometryType: 'plane',
        width: 1,
        height: 1
      }
    },
    // 模型类型
    {
      id: '1',
      name: '立方体',
      type: 'model',
      preview: 'https://picsum.photos/100',
      defaultProps: {
        width: 1,
        height: 1,
        depth: 1,
        path: '/models/cube.glb',
        scale: 1
      }
    },
    {
      id: '2',
      name: '球体',
      type: 'model',
      preview: 'https://picsum.photos/101',
      defaultProps: {
        radius: 0.5,
        segments: 32,
        path: '/models/sphere.glb',
        scale: 1
      }
    },
    {
      id: '3',
      name: '圆柱体',
      type: 'model',
      preview: 'https://picsum.photos/102',
      defaultProps: {
        radius: 0.5,
        height: 1,
        segments: 32,
        path: '/models/cylinder.glb',
        scale: 1
      }
    },
    {
      id: '4',
      name: '小狗模型',
      type: 'model',
      preview: 'https://picsum.photos/103',
      defaultProps: {
        path: '/src/assets/dog.glb',
        scale: 1
      }
    },
    // 图片类型
    {
      id: '5',
      name: '风景图片',
      type: 'pic',
      preview: 'https://picsum.photos/104',
      defaultProps: {
        path: 'https://picsum.photos/800/600',
        scale: 1
      }
    },
    {
      id: '6',
      name: '产品展示图',
      type: 'pic',
      preview: 'https://picsum.photos/105',
      defaultProps: {
        path: 'https://picsum.photos/800/600?random=1',
        scale: 1
      }
    },
    // 视频类型
    {
      id: '7',
      name: '产品介绍视频',
      type: 'video',
      preview: 'https://picsum.photos/106',
      defaultProps: {
        path: 'https://www.w3schools.com/html/mov_bbb.mp4',
        scale: 1
      }
    },
    {
      id: '8',
      name: '宣传片段',
      type: 'video',
      preview: 'https://picsum.photos/107',
      defaultProps: {
        path: 'https://www.w3schools.com/html/movie.mp4',
        scale: 1
      }
    },
    // 音频类型
    {
      id: '9',
      name: '背景音乐',
      type: 'audio',
      preview: 'https://picsum.photos/108',
      defaultProps: {
        path: 'https://www.w3schools.com/html/horse.mp3',
        scale: 1
      }
    },
    {
      id: '10',
      name: '语音解说',
      type: 'audio',
      preview: 'https://picsum.photos/109',
      defaultProps: {
        path: 'https://www.w3schools.com/html/horse.mp3',
        scale: 1
      }
    }
  ];
};

const materials = ref([])
const currentMaterials = ref([])
const materialType = ref('model') // 默认显示模型

// 在组件挂载时加载模型数据
onMounted(async () => {
  try {
    // 从API获取模型数据
    const materialData = await fetchMaterialsFromAPI()
    // 更新模型列表
    materials.value = materialData
    // 默认显示几何体类型的素材
    currentMaterials.value = materialData.filter(m => m.type === 'model')
  } catch (error) {
    console.error('加载模型数据失败:', error)
  }
})

// 处理选项卡点击事件
const handleTabClick = (tabName) => {
  materialType.value = tabName
  if(tabName === 'pic') {
    // 图片类型可能包括普通图片和AR图片
    currentMaterials.value = materials.value.filter(m => m.type === tabName || m.type === 'arpic')
  } else {
    currentMaterials.value = materials.value.filter(m => m.type === tabName)
  }
}

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

/* 模拟Element UI的tabs样式 */
.el-tabs {
  margin-bottom: 16px;
}

.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
}

.el-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}

.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e7ed;
  z-index: 1;
}

.el-tabs__nav {
  white-space: nowrap;
  position: relative;
  transition: transform .3s;
  display: flex;
  z-index: 2;
}

.el-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  cursor: pointer;
}

.el-tabs__item.is-active {
  color: #409EFF;
}

.el-tabs__item.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #409EFF;
  z-index: 2;
}

/* 原始NewModelList的样式 */
.model-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* flex: 1; */
  overflow-y: auto;
  padding-right: 8px;
}

.model-item {
  width: 40%;
  height: 130px;
  margin-bottom: 20px;
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