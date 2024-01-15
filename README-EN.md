[![license](https://img.shields.io/npm/l/vue-fantable.svg)](http://www.opensource.org/licenses/mit-license.php)

# still work on adept vue3

# vue-fantable

**English** | [中文](./README-CN.md)

> *If I have seen further, it is by standing on the shoulders of giants.*

## Introduction

A powerful data table based on vue You can use it as data grid、Microsoft Excel or Google sheets. It supports virtual scroll、cell edit etc.

Just use vue-fantable like vue-easytable

## Characteristics

-   Support 300000 rows of data display through virtual scroll
-   Free forever. Of course, you can also choose to donate, ensure the long-term maintenance of the project

## API & Examples

-   [Official documents (Github)]()
-   [Official documents (China)]()

## Install

```
npm install vue-fantable
```

or

```
yarn add vue-fantable
```

## Usage

Write the following in main.js:

```javascript
import {createApp} from "vue";
import "vue-fantable/libs/theme-default.css";
import App from './app.vue'
import VueFantable from "vue-fantable";
const app = createApp(App)
app.use(VueFantable);

app.mounted('#app')
```

Example:

```vue
<template>
  <fan-table :columns="columns" :table-data="tableData" />
</template>

<script >
  export default {
    data() {
      return {
        columns: [
          { field: "name", key: "a", title: "Name", align: "center" },
          { field: "date", key: "b", title: "Date", align: "left" },
          { field: "hobby", key: "c", title: "Hobby", align: "right" },
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
  };
</script>
```

## Features

**Base components**

- [x] [Loading component]()
- [x] [Pagination component]()
- [x] [Contextmenu component]()
- [x] [Icon component]()
- [x] [Locale component]()

**Table component**

- [x] [Internationalization]()
- [x] [Theme Custom & Built in theme]()
- [x] [Virtual Scroll]()
- [x] [Column Fixed]()
- [x] [Column Hidden]()
- [x] [Header Fixed]()
- [x] [Header Grouping]()
- [x] [Filter]()
- [x] [Sort]()
- [x] [Column Resize]()
- [x] [Cell Style]()
- [x] [Cell Custom]()
- [x] [Cell Span]()
- [x] [Cell Selection(keyboard operation)]()
- [x] [Cell Autofill]()
- [x] [Cell Edit]()
- [x] [Clipboard]()
- [x] [Contextmenu]()
- [x] [Cell Ellipsis]()
- [x] [Row Radio]()
- [x] [Row Checkbox]()
- [x] [Row Expand]()
- [x] [Row Style]()
- [x] [Footer Summary]()
- [x] [Event Custom]()
- [More]()

If there is no feature you want,
[Please Tell Us]()

## Todo List

## Environment Support

- Modern browser

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## How to contribute

If you want to contribute,just create a

## Contributors

Thanks to vue-easytable. This project is inherited from vue-easytable@2.27.1.

Thanks to the following friends for their contributions 🙏

## Discussion group

- [Join In Gitter Chat Room](https://gitter.im/vue-fantable)
- [Join In Discord Chat Room]()

## License

http://www.opensource.org/licenses/mit-license.php
