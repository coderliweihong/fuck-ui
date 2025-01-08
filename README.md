# Joker UI

一个轻量级的 React UI 组件库，参考 Ant Design 设计规范开发。

## ✨ 特性

- 🌈 提供简洁美观的 React 组件
- 📦 开箱即用的高质量组件
- 🛡 使用 TypeScript 开发，提供完整的类型定义
- ⚡️ 超轻量级，按需加载
- 🎨 可定制的主题和样式

## 📦 安装
```bash

npm install @coderlwhui/joker-ui
```
or
```bash
yarn add @coderlwhui/joker-ui
```
## 🔨 使用

```jsx
import { Button } from '@coderlwhui/joker-ui';

import '@coderlwhui/joker-ui/dist/index.css';

function App() {
return (
    <Button type="primary" onClick={() => alert('Hello!')}>
        Click Me
    </Button>
);}

// Types
<Button type="primary">Primary Button</Button>
<Button type="default">Default Button</Button>
<Button type="dashed">Dashed Button</Button>
<Button type="link">Link Button</Button>
<Button type="text">Text Button</Button>
// Sizes
<Button size="large">Large Button</Button>
<Button size="middle">Middle Button</Button>
<Button size="small">Small Button</Button>
// Disabled state
<Button disabled>Disabled Button</Button>
```
## 📊 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'default' \| 'dashed' \| 'link' \| 'text'` | `'default'` |
| size | 按钮大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击按钮时的回调 | `(event) => void` | - |

## 📁 目录结构

joker-ui/

├── src/ # 源码目录

├──── components/ # 组件目录

├────── Button/ # 按钮组件

├──── index.ts # 组件库入口文件

├── dist/ # 构建输出目录

├── package.json # 项目配置文件

└── README.md # 项目说明文档