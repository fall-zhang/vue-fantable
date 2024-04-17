import{r as a,o as l,a as r,b as t,d as s,w as o,e as n,_ as h}from"./index-CvE8Fbe-.js";import{_ as b}from"./custom-cell-CxfnoQKt.js";const f={class:"markdown-body"},w=n("p",null,[s("1、"),n("code",null,"column"),s("配置中，支持通过属性 "),n("code",null,"renderBodyCell({row,column,rowIndex},h)"),s("传入渲染函数，此处为 jsx 语法,书写和模板语法接近。更多 jsx 知识请参考"),n("a",{href:"https://vuejs.org/v2/guide/render-function.html#JSX"},"Vue.js 考官方文档"),s("<br>2、渲染函数接收三个参数，"),n("code",null,"row"),s(":当前行数据、"),n("code",null,"column"),s(":当前列配置、"),n("code",null,"rowIndex"),s(":行索引")],-1),_=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"border-y"),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("jsx"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
              `),n("span",{class:"token operator"},"<"),s("span "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text-bold"'),s(" style"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"color:#1890ff;"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"++"),s("rowIndex"),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("span"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" text "),n("span",{class:"token operator"},"="),s(" row"),n("span",{class:"token punctuation"},"["),s("column"),n("span",{class:"token punctuation"},"."),s("field"),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
              `),n("span",{class:"token operator"},"<"),s("span"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s(`a
                  `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"test-text"'),s(`
                  href`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://github.com"'),s(`
                  style`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"color:#1890ff;cursor:pointer;"'),s(`
                `),n("span",{class:"token operator"},">"),s(`
                  `),n("span",{class:"token punctuation"},"{"),s("text"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),s(`are my hobbies
              `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("span"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" text "),n("span",{class:"token operator"},"="),s(" row"),n("span",{class:"token punctuation"},"["),s("column"),n("span",{class:"token punctuation"},"."),s("field"),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("input style"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"width:100%"'),s(" value"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("text"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("input"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'e'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Action'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"center"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
              `),n("span",{class:"token operator"},"<"),s("span"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("el"),n("span",{class:"token operator"},"-"),s("button on"),n("span",{class:"token operator"},"-"),s("click"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"editRow"),n("span",{class:"token punctuation"},"("),s("rowIndex"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
                  Edit
                `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("el"),n("span",{class:"token operator"},"-"),s("button"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token operator"},"<"),s("el"),n("span",{class:"token operator"},"-"),s("button on"),n("span",{class:"token operator"},"-"),s("click"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteRow"),n("span",{class:"token punctuation"},"("),s("rowIndex"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
                  Delete
                `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("el"),n("span",{class:"token operator"},"-"),s("button"),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("span"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1900-05-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1910-06-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2000-07-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2010-08-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2020-09-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"editRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"rowIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"eidt row number:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("rowIndex"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"deleteRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"rowIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("rowIndex"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".text-bold"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" bold"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])])],-1),v=n("p",null,"fan-table/cell-custom/body-cell",-1),x={__name:"body-cell",setup(u,{expose:e}){return e({frontmatter:{}}),(i,y)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),r("div",f,[t(c,{"is-edit":"",label:"body 自定义单元格",fileName:""}),s(),t(p,{filePath:"fan-table/cell-custom/body-cell",sourceCode:""},{description:o(()=>[w]),code:o(()=>[_]),default:o(()=>[v]),_:1})])}}},C={class:"markdown-body"},I=n("p",null,[s("1、"),n("code",null,"column"),s("配置中，支持通过属性 "),n("code",null,"renderHeaderCell"),s("传入渲染函数，与 body 自定义单元格用法一致。"),n("code",null,"renderHeaderCell"),s("在表头分组中一样适用<br>2、渲染函数接收一个参数，"),n("code",null,"column"),s(":当前列配置")],-1),N=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"border-y"),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData.filter(item => !searchText || item.name.toLowerCase().includes(searchText.toLowerCase()))"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("jsx"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderHeaderCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" column "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
              `),n("span",{class:"token operator"},"<"),s(`input
                `),n("span",{class:"token comment"},"// jsx 不能直接使用 v-model。此处为 jsx 实现 v-model，了解更多查看官方文档"),s(`
                value`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("searchText"),n("span",{class:"token punctuation"},"}"),s(`
                onInput`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("searchInputChange"),n("span",{class:"token punctuation"},"}"),s(`
                style`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"width:90%"'),s(`
                placeholder`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"请输入名称关键字"'),s(`
              `),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderHeaderCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" column "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
              `),n("span",{class:"token operator"},"<"),s("span "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"text-bold"'),s(" style"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"color:#1890ff;"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token punctuation"},"{"),s("column"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("span"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1900-05-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1910-06-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2000-07-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2010-08-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2020-09-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// 搜索"),s(`
      `),n("span",{class:"token literal-property property"},"searchText"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// search input change event"),s(`
    `),n("span",{class:"token function"},"searchInputChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("searchText "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s(`value
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".text-bold"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" bold"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])])],-1),A=n("p",null,"fan-table/cell-custom/header-cell",-1),$={__name:"header-cell",setup(u,{expose:e}){return e({frontmatter:{}}),(i,y)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),r("div",C,[t(c,{"is-edit":"",label:"header 自定义单元格",fileName:""}),s(),t(p,{filePath:"fan-table/cell-custom/header-cell",sourceCode:""},{description:o(()=>[I]),code:o(()=>[N]),default:o(()=>[A]),_:1})])}}},j={class:"markdown-body"},B=n("div",{class:"tip"},[n("p",null,[s("1、 当然你也可以通过外部组件自定义单元格内容，此示例是在组件内部定义了一个"),n("code",null,"OtherComp"),s("组件，你也可以通过 "),n("code",null,"import"),s("关键字导入一个组件作为自定义组件"),n("br"),s(" 2、 "),n("code",null,"renderBodyCell"),s("、"),n("code",null,"renderHeaderCell"),s("等一样适用"),n("br")])],-1),q=n("p",null,"通过外部组件自定义",-1),D=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"border-y"),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("jsx"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// 此示例是在组件内部定义了一个子组件。你当然也可以通过 `import`关键字导入一个组件"),s(`
`),n("span",{class:"token keyword"},"const"),s(" OtherComp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'OtherComp'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
    <div class="other-comp">
      <span style="color:#1890ff;">row index: {{rowIndex}}</span>
    </div>
    `),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"row"),n("span",{class:"token operator"},":"),s(" Object"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"column"),n("span",{class:"token operator"},":"),s(" Object"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"rowIndex"),n("span",{class:"token operator"},":"),s(" Number"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Row Number'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" row"),n("span",{class:"token punctuation"},","),s(" column"),n("span",{class:"token punctuation"},","),s(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" h")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("OtherComp row"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("row"),n("span",{class:"token punctuation"},"}"),s(" column"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("column"),n("span",{class:"token punctuation"},"}"),s(" rowIndex"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("rowIndex"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1900-05-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1910-06-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2000-07-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2010-08-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2020-09-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"editRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"rowIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"eidt row number:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("rowIndex"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"deleteRow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"rowIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("rowIndex"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".text-bold"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" bold"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])])],-1),H=n("p",null,"fan-table/cell-custom/more-compo",-1),J={__name:"more",setup(u,{expose:e}){return e({frontmatter:{}}),(i,y)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),r("div",j,[t(c,{"is-edit":"",label:"通过外部组件自定义",fileName:""}),s(),B,t(p,{filePath:"fan-table/cell-custom/more-compo",sourceCode:""},{description:o(()=>[q]),code:o(()=>[D]),default:o(()=>[H]),_:1})])}}},R={name:"custom-cell",components:{BodyCell:x,HeaderCell:$,FooterCell:b,More:J}},S=n("h2",null,"自定义列",-1);function O(u,e,k,i,y,c){const p=a("BodyCell"),d=a("HeaderCell"),g=a("FooterCell"),m=a("More");return l(),r("div",null,[S,t(p),t(d),t(g),t(m)])}const V=h(R,[["render",O]]);export{V as default};
