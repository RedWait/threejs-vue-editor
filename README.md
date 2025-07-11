# Three.js Vue Editor - 基于Vue 3和Three.js的3D场景编辑器

![项目截图](./src/assets/screenShot.png)

Three.js Vue Editor是一个功能完备的3D场景编辑器，基于Vue 3和Three.js r174构建，提供直观的拖拽式界面和实时编辑功能，让您轻松创建和编辑复杂的3D场景。

## ✨ 主要特性

### 🎨 丰富的素材类型
- **几何体** - 内置6种基础几何体：立方体、球体、圆柱体、圆锥体、圆环体、平面
- **3D模型** - 支持GLTF/GLB格式模型加载
- **图片素材** - 支持JPG/PNG等常见图片格式
- **视频素材** - 支持MP4等视频格式，自动播放和纹理更新
- **音频素材** - 预留音频素材接口

### 🛠️ 强大的编辑功能
- **拖拽添加** - 从素材列表拖拽到场景即可创建对象
- **变换控制** - 使用TransformControls进行精确的位移、旋转、缩放操作
- **统一缩放** - 缩放时自动保持物体比例
- **实时同步** - 场景变化与属性面板实时同步
- **多选方式** - 支持点击选择和下拉框选择

### 🎯 便捷的操作功能
- **视角控制** - ViewHelper提供快速视角切换
- **网格辅助** - 显示网格和坐标轴辅助定位
- **对象管理** - 支持重置、删除、清空等操作
- **预览模式** - 隐藏控制器查看最终效果
- **数据持久化** - 支持场景保存和加载

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

## 📖 使用指南

### 基本使用
```vue
<template>
  <Editor 
    :currentMats="initialObjects"
    :isTreasure="false"
    @confirm="handleConfirm"
  />
</template>

<script setup>
import Editor from './components/Editor.vue'

const initialObjects = ref([])

const handleConfirm = (sceneData) => {
  console.log('场景数据:', sceneData)
}
</script>
```

### 界面布局

#### 左侧面板 - 素材列表
- 分类展示不同类型的素材
- 支持拖拽到场景中创建对象
- 自动过滤识别图等特殊素材

#### 中间区域 - 3D场景
- **操作控制栏**
  - 素材选择下拉框
  - 变换模式切换（移动/旋转/缩放）
  - 对象操作（重置/删除）
  - 场景操作（清空/预览/确定）
- **3D视口**
  - OrbitControls相机控制
  - TransformControls对象编辑
  - ViewHelper视角切换
- **交互方式**
  - 左键点击选择对象
  - 拖拽控制器编辑对象
  - 滚轮缩放场景

#### 右侧面板 - 属性编辑器
- 显示选中对象的详细信息
- 实时编辑位置、旋转、缩放属性
- 数值输入精确控制

## 🔧 高级功能

### 素材数据结构
```javascript
{
  id: 'unique_id',
  name: '素材名称',
  type: 'geometry|model|pic|video|audio',
  preview: '预览图URL',
  defaultProps: {
    // 几何体类型特有
    geometryType: 'box|sphere|cylinder|cone|torus|plane',
    width: 1,
    height: 1,
    // 模型类型特有
    path: '模型文件路径',
    scale: 1
  }
}
```

### 场景数据结构
```javascript
{
  id: '对象ID',
  materialId: '素材ID',
  name: '对象名称',
  type: '对象类型',
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 }, // 角度制
  scale: { x: 1, y: 1, z: 1 },
  preview: '预览图URL'
}
```

## 🎨 自定义配置

### 修改默认材质
在Scene.vue中修改几何体的默认材质：
```javascript
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,  // 修改颜色
  roughness: 0.5,   // 粗糙度
  metalness: 0.3    // 金属度
})
```

### 添加新的几何体类型
1. 在ModelList.vue的fetchMaterialsFromAPI中添加新的几何体数据
2. 在Scene.vue的createModel函数中添加对应的创建逻辑

## 📋 功能清单

- [x] 几何体素材支持
- [x] 3D模型加载（GLTF/GLB）
- [x] 图片素材支持
- [x] 视频素材支持
- [x] 变换控制器（TransformControls）
- [x] 场景数据导入/导出
- [x] 属性面板实时编辑
- [x] 多种选择方式
- [x] 视角控制器（ViewHelper）
- [ ] 材质编辑器
- [ ] 光照控制
- [ ] 动画支持
- [ ] 撤销/重做功能

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发规范
- 使用Vue 3 Composition API
- 遵循ESLint代码规范
- 提交前确保所有功能正常工作

## 📄 许可证

MIT License

---

💡 **提示**：本项目基于Three.js r174版本开发，请确保版本兼容性。