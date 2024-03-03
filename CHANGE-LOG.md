Vx.x.x(TPL)

- Breaking Changes
- Feature
- Bug Fixes
- Performance Improvements
- Style changes
- Documents
- Dependencies Changes

### V0.2.2

#### Feature

- 文档以及更新发布

#### Bug Fixes

- 修复 Loading 组件无法的问题
- 修复 Loading 组件无法销毁的问题
- 修复 svg，默认样式和行内当前文字颜色和文字大小保持一致

### V0.2.2

#### Bug Fixes

- 修复右键菜单默认功能不生效的问题
- 移除一些过时的浏览器 API

### V0.2.1

#### Bug Fixes

- 修复黑色主题样式不生效的问题

### V0.2.0

#### Feature

- 为所有的组件添加 v-model（绑定值现在是 modelValue（不是 value），和 element-plus 一致）
- fan- 和 ve- 都可以做组件的前缀
- 现在样式使用的是 css 变量

#### Bug Fixes

- 修复双击表格时，无法立即编辑
- 修复点击空白处时，menu 无法关闭的问题
- 完善了打包时的类型处理

### V0.1.9

#### Bug Fixes

- 修复多选 label 渲染可能存在的问题
- 修复展开时图标的动效
- 完善了打包时的类型处理

### V0.1.8

#### Feature

- 修复 ts 中类型引入，为组件补充类型

### V0.1.7

#### Feature

- 为组件添加 ts 类型

#### Bug Fixes

- 修复 pageSizeChange 事件

### V0.1.4

#### Feature

- 为 libs/ 路径下添加新的生成文件

### V0.1.3

#### Bug Fixes

- 修复筛选功能

### V0.1.2

#### Documents

- 更新 README 版本描述

### V0.1.1

#### Feature

- 修复文档中的 vue-router 的使用问题
- 全局事件绑定在 vue-fantable 实例上

#### Dependencies Changes

- 移除对于 lodash 的依赖

#### Bug Fixes

- 更新文档中处理 markdown 的工具
- 修复文档中的 vue-router 的使用问题
- 修复 js 代码循环引用

### V0.1.0

#### Feature

- 现在支持 Vue3 使用
- 统一项目代码格式

#### Bug Fixes

- 修复 Vue3 prop 值专递问题
- 修复 dom-size-change 事件
- 修复事件中心值专递的问题
- 修复 Vue3 directive 的问题

#### Dependencies Changes

- 使用 mitt 替代 vue2 的 Vue.$on 事件

### V0.0.2


#### Dependencies Changes

- 移除 IE 浏览器的 polyfill，大部分 lodash 的使用
- 更新打包工具配置
