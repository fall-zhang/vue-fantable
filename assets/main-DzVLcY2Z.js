import{o as r,a as l,aq as b,r as a,b as t,d as s,w as o,e as n,_ as f}from"./index-CvE8Fbe-.js";import{S as w}from"./sort-option-props-j9VpWaSX.js";import"./api-tpl-CPwM1adO.js";import"./db-g234uLN5.js";const _={class:"markdown-body"},v=b('<div class="tip"><p>1、Set the columns to be sorted through the <code>sortBy</code> attribute. <code>sortBy=&quot;asc&quot;</code>:By default, the current column is in ascending order;<code>sortBy=&quot;desc&quot;</code>:By default, the current column is in descending order;<code>sortBy=&quot;&quot;</code>:Sorting allowed without collation<br> 2、Set more sorting functions through the <code>sortOption</code> object. The sorting function needs to be implemented with the <code>sortChange(param)</code> callback function,The callback parameter contains the collation for the column</p></div>',1),C=[v],A={__name:"explain",setup(u,{expose:p}){return p({frontmatter:{}}),(i,y)=>(r(),l("div",_,C))}},S={class:"markdown-body"},N=n("p",null,[s("1、The default is single field sorting<br>2、"),n("code",null,"sortChange(params)"),s("callback function receives the collation of the column")],-1),x=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":sort-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sortOption"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"border-y"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"sortOption"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function-variable function"},"sortChange"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sortChange::'"),n("span",{class:"token punctuation"},","),s(" params"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sortChange"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sortBy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weight'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Weight(kg)'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sortBy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'e'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"70"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"17"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"72"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"sortChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s(`age
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" b"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"-"),s(" a"),n("span",{class:"token punctuation"},"."),s(`age
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s(`weight
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" b"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"-"),s(" a"),n("span",{class:"token punctuation"},"."),s(`weight
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),$=n("p",null,"fan-table/header-sort/single-sort",-1),q={__name:"single-sort",setup(u,{expose:p}){return p({frontmatter:{}}),(i,y)=>{const c=a("vue-anchor"),e=a("demo-block");return r(),l("div",S,[t(c,{"is-edit":"",label:"Single field sorting",fileName:""}),s(),t(e,{filePath:"fan-table/header-sort/single-sort",sourceCode:""},{description:o(()=>[N]),code:o(()=>[x]),default:o(()=>[$]),_:1})])}}},B={class:"markdown-body"},D=n("p",null,[s("1、Enable multi field sorting by "),n("code",null,"multipleSort=true"),s("<br>2、The priority of the sort field needs to be specified by yourself,This is just an example,The specific logic is implemented by itself (generally returned by the back-end service)")],-1),O=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":sort-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sortOption"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"border-y"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"sortOption"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 是否开启多字段排序"),s(`
        `),n("span",{class:"token literal-property property"},"multipleSort"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"sortChange"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sortChange::'"),n("span",{class:"token punctuation"},","),s(" params"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sortChange"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sortBy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weight'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Weight(kg)'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sortBy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'e'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"70"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"17"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"72"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"sortChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`

      data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s(`age
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" b"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"-"),s(" a"),n("span",{class:"token punctuation"},"."),s(`age
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

      data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s(`weight
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" b"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"-"),s(" a"),n("span",{class:"token punctuation"},"."),s(`weight
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData "),n("span",{class:"token operator"},"="),s(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),j=n("p",null,"fan-table/header-sort/multi-sort",-1),P={__name:"multi-sort",setup(u,{expose:p}){return p({frontmatter:{}}),(i,y)=>{const c=a("vue-anchor"),e=a("demo-block");return r(),l("div",B,[t(c,{"is-edit":"",label:"Multi field sorting",fileName:""}),s(),t(e,{filePath:"fan-table/header-sort/multi-sort",sourceCode:""},{description:o(()=>[D]),code:o(()=>[O]),default:o(()=>[j]),_:1})])}}},T={class:"markdown-body"},J=n("p",null,[s("1、"),n("code",null,"sortAlways=true"),s(" allows sorting to switch between ascending and descending order only")],-1),E=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":sort-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sortOption"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"border-y"),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"sortOption"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// sort always"),s(`
        `),n("span",{class:"token literal-property property"},"sortAlways"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function-variable function"},"sortChange"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sortChange::'"),n("span",{class:"token punctuation"},","),s(" params"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sortChange"),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sortBy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weight'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Weight(kg)'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sortBy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'e'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"25"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"70"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"17"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"weight"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"72"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"sortChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tableData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s(`age
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" b"),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"-"),s(" a"),n("span",{class:"token punctuation"},"."),s(`age
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'asc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s(`weight
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("params"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" b"),n("span",{class:"token punctuation"},"."),s("weight "),n("span",{class:"token operator"},"-"),s(" a"),n("span",{class:"token punctuation"},"."),s(`weight
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),I=n("p",null,"fan-table/header-sort/sort-always",-1),M={__name:"sort-always",setup(u,{expose:p}){return p({frontmatter:{}}),(i,y)=>{const c=a("vue-anchor"),e=a("demo-block");return r(),l("div",T,[t(c,{"is-edit":"",label:"Sort Switch",fileName:""}),s(),t(e,{filePath:"fan-table/header-sort/sort-always",sourceCode:""},{description:o(()=>[J]),code:o(()=>[E]),default:o(()=>[I]),_:1})])}}},V={name:"BasicMain",components:{Explain:A,SingleSort:q,MultiSort:P,SortAlways:M,API:w}},z=n("h2",null,"Sort",-1);function G(u,p,k,i,y,c){const e=a("Explain"),g=a("SingleSort"),d=a("MultiSort"),m=a("SortAlways"),h=a("API");return r(),l("div",null,[z,t(e),t(g),t(d),t(m),t(h,{title:"API",anchor:"API",desc:"sortOption Sort option"})])}const F=f(V,[["render",G]]);export{F as default};
