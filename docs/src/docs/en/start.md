## Quick Start

:::anchor npm & yarn

```javascript
npm install vue-fantable
```

or

```javascript
yarn add vue-fantable
```

:::anchor Usage

#### Fully import

Write the following in main.js：

```javascript
import Vue from "vue";
import "vue-fantable/libs/theme-default.css"; // import style
import VueFantable from "vue-fantable"; // import library

Vue.use(VueFantable);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
```

The above code completes the introduction of vue-fantable.Don't forget to import style files.

#### On demand

Write the following in main.js：

```javascript
import Vue from "vue";
import "vue-fantable/libs/theme-default.css"; // import style

import { FanTable, VePagination, VeIcon, VeLoading, VeLocale } from "vue-fantable"; // import library

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

#### Example

:::demo

start-example

:::

:::anchor Usage By CDN

Through [https://unpkg.com/vue-fantable/](https://unpkg.com/vue-fantable/), you can see the resources of the latest version of Vue easytable,You can also switch versions to select the required resources,You can start using JS and CSS files on the page

```css
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/vue-fantable/libs/theme-default.css">
<!-- import Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<!-- import library -->
<script src="https://unpkg.com/vue-fantable/libs/umd/index.js"></script>
```

#### Example

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <!-- import style -->
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
    <!-- import Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <!-- import library -->
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

:::anchor Browser Compatible
Support all of modern browser
