# Three.js Vue编辑器组件

这是一个基于Three.js和Vue 3的3D编辑器组件，用于创建和编辑3D场景。

## 组件结构

- **Editor.vue**: 主编辑器组件，负责协调其他子组件
- **ModelList.vue**: 展示可用的3D模型列表
- **Scene.vue**: 提供3D场景预览和交互功能
- **PropertyPanel.vue**: 用于编辑选中对象的属性

## 使用方法

```vue
<template>
  <div class="app">
    <Editor @confirm="handleConfirm" />
  </div>
</template>

<script setup>
import Editor from './components/Editor.vue'

const handleConfirm = (sceneData) => {
  console.log('编辑器返回的场景数据:', sceneData)
}
</script>
```

## 功能特点

- 拖放式添加3D模型到场景中
- 支持模型的移动、旋转和缩放操作
- 实时属性编辑面板
- 支持GLTF/GLB模型加载
- 支持图片和视频的添加

## 数据模拟

所有数据都在前端模拟，无需后端API支持，便于快速测试和演示。模型数据在ModelList.vue中定义，可以根据需要进行扩展。

## 技术栈

- Vue 3
- Three.js
- Composition API

## 注意事项

- 组件已配置使用公共CDN资源，如需离线使用，请自行配置本地资源。
- 视图控制器右上角可以快速切换视角。
- 支持拖拽模型到场景中，也可以通过下拉菜单选择。
