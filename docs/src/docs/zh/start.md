## 快速开始

:::anchor npm & yarn 安装

```bash
npm install vue-fantable
```

或者

```bash
yarn add vue-fantable
```

:::anchor 使用

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
// 引入样式
import "vue-fantable/libs/theme-default.css";
// 引入组件库
import VueFantable from "vue-fantable";

Vue.use(VueFantable);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
```

以上代码便完成了 vue-fantable 的引入。别忘了引入样式文件。

#### 按需引入

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
// 引入样式
import "vue-fantable/libs/theme-default.css";
// 引入组件库
import { FanTable, VePagination, VeIcon, VeLoading, VeLocale } from "vue-fantable";

Vue.use(FanTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;

new Vue({
    el: "#app",
    render: (h) => h(App),
});
```

#### 示例

:::demo

start-example

:::

:::anchor CDN 方式使用

通过 [https://unpkg.com/vue-fantable/](https://unpkg.com/vue-fantable/) 可以看到 vue-fantable 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：

```css
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-fantable/libs/theme-default.css">
<!-- 引入Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-fantable/libs/umd/index.js"></script>
```

#### 示例

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <!-- 引入样式 -->
        <link
            rel="stylesheet"
            href="https://unpkg.com/vue-fantable/libs/theme-default.css"
        />
    </head>
    <body>
        <div id="app">
            <fan-table :columns="columns" :table-data="tableData"></fan-table>
        </div>
    </body>
    <!-- 引入 Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/vue-fantable/libs/umd/index.js"></script>
    <script>
        new Vue({
            el: "#app",
            data: function () {
                return {
                    columns: [
                        {
                            field: "name",
                            key: "a",
                            title: "Name",
                            align: "center",
                        },
                        {
                            field: "date",
                            key: "b",
                            title: "Date",
                            align: "left",
                        },
                        {
                            field: "hobby",
                            key: "c",
                            title: "Hobby",
                            align: "right",
                        },
                        { field: "address", key: "d", title: "Address" },
                    ],
                    tableData: [
                        {
                            name: "John",
                            date: "1900-05-20",
                            hobby: "coding and coding repeat",
                            address: "No.1 Century Avenue, Shanghai",
                        },
                        {
                            name: "Dickerson",
                            date: "1910-06-20",
                            hobby: "coding and coding repeat",
                            address: "No.1 Century Avenue, Beijing",
                        },
                        {
                            name: "Larsen",
                            date: "2000-07-20",
                            hobby: "coding and coding repeat",
                            address: "No.1 Century Avenue, Chongqing",
                        },
                        {
                            name: "Geneva",
                            date: "2010-08-20",
                            hobby: "coding and coding repeat",
                            address: "No.1 Century Avenue, Xiamen",
                        },
                        {
                            name: "Jami",
                            date: "2020-09-20",
                            hobby: "coding and coding repeat",
                            address: "No.1 Century Avenue, Shenzhen",
                        },
                    ],
                };
            },
        });
    </script>
</html>
```
