# vue-fantable

## 起步

确保 node 版本至少为 18

```
pnpm i
pnpm run dev
```

## FanTable 开发计划

开发计划详情可看：https://flowus.cn/share/7fea404b-8e1f-4eaa-8ccf-cacb79a929f6

- [x] 保证项目的打包构建
- [x] 修复升级到 Vue3 后的问题
- [x] 发布文档，并解决文档中遇到的问题，详情查看 [文档](./docs/README.md)
- [ ] 新功能添加
  - [ ] 添加 hooks
  - [ ] 实现导入导出表格为 excel 文件，做成工具
- [ ] 测试
  - [x] 舍弃 jest 全局 API 使用 vitest api
  - [ ] 调整适配原测试内容
  - [ ] 添加新的测试
- [ ] 关注性能和优化
  - [ ] 减少 DOM，使用 transform 代替 position:absolute
  - [ ] 加上防抖和节流
  - [ ] 减少更新渲染卡顿问题（单次渲染时长超过 100ms）
  - [ ] 移除过时以及兼容性 API（使用新的 web 标准）
  - [ ] setTimeout 优化
  - [x] 使用 CSS 变量
  - [x] 重写 Loading 组件
  - [ ] 异步加载模式，拆分为三步进行加载
- [ ] 使用 TS 重构应用（V1.0）
  - [x] 添加 TS 类型支持
  - [x] 修复点击单个单元格，整行无法高亮的问题
  - [ ] 300 行以下的所有组件使用 setup 重构系统
  - [ ] 所有组件补充临时类型（难推断的用 any
  - [ ] 移除过时的 API（document.execCommand，keyCode）argument 的使用
  - [ ] 组件改写为组合式 API 形式
  - [ ] TS 重写组件
- [ ] 最后支持原生（V2.0无框架依赖）
  - [ ] 使用 shadow dom 替代

## 文档更新计划

- [x] 移除 theme-switch-tool
- [x] 移除 vue-lazy-container
- [x] 文档的 :::anchor
- [x] 示例的加载方式
  - [x] 查询如何一套代码实现源码查看以及渲染
  - [x] 考虑如何读取代码，渲染到代码展示区域中
  - [x] 将所有带 :::demo 的内容，全都复制到新的 example 文件夹内
  - [x] 使用路径代替代码展示区域
  - [x] 所有语言的 md 文件共通引用这些代码
- [x] 修复文档，可以完成打包
- [ ] 原版的沙盒功能
  - [ ] 暂时移除原版的沙盒功能
  - [ ] 替换原版的沙盒功能
- [ ] 文档切换语言后，demo 会导致页面停留在 en 语言下
- [ ] 更新优化文档和样式
  - [ ] 为错误提供捕获和对应的提示
  - [ ] markdown 被解析后，没有样式（表格样式
  - [ ] 更新 back-top 样式
  - [ ] 展开代码后，固定在页底部，可以点击
  - [ ] 更新头部文档 theme 的内容
  - [ ] 左侧组件菜单
  - [ ] 右侧 anchor 跳转的样式
  - [ ] 全屏头部样式
- [ ] 表格为何渲染不出来
- [ ] 添加 CHANGE_LOG 页面
