import{o as l,a as r,e as n,d as a,r as s,b as t,w as e,_ as m}from"./index-y7N75Dfv.js";const b={class:"markdown-body"},_=n("div",{class:"tip"},[n("p",null,[a("1、The table height is determined by row data by default. You can also set the max height through the "),n("code",null,"max-height"),a(" attribute"),n("br"),a(" 2、Table height can be set to a fixed value. like:"),n("code",null,':max-height="500"'),n("br"),a(" 3、Table height can be set to a dynamic value. like:"),n("code",null,'max-height="calc(100vh - 210px)"'),a(" or "),n("code",null,'max-height="80%"'),n("br")])],-1),f=[_],x={__name:"explain",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>(l(),r("div",b,f))}},v={class:"markdown-body"},w=n("p",null,"When the table height is not set, the table height is auto height",-1),$=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fan-table")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'left'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'left'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"created"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("tableData "),n("span",{class:"token operator"},"="),a(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])],-1),D=n("p",null,"fan-table/table-height/auto-height",-1),H={__name:"auto-height",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>{const c=s("vue-anchor"),p=s("demo-block");return l(),r("div",v,[t(c,{"is-edit":"",label:"Auto Table Height",fileName:""}),a(),t(p,{filePath:"fan-table/table-height/auto-height",sourceCode:""},{description:e(()=>[w]),code:e(()=>[$]),default:e(()=>[D]),_:1})])}}},T={class:"markdown-body"},q=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fan-table")]),a(`
        `),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("300"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableData"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":border-around"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":border-x"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":border-y"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tel'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"200"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"300"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"300"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"created"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("tableData "),n("span",{class:"token operator"},"="),a(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),C=n("p",null,"fan-table/table-height/fixed-height",-1),N={__name:"fixed-height",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>{const c=s("vue-anchor"),p=s("demo-block");return l(),r("div",T,[t(c,{"is-edit":"",label:"Fixed Table Height",fileName:""}),a(),t(p,{filePath:"fan-table/table-height/fixed-height",sourceCode:""},{code:e(()=>[q]),default:e(()=>[C]),_:1})])}}},A={class:"markdown-body"},E=n("p",null,[a("1、You can use "),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc()"},"calc css function"),a(" to achieve table dynamic height<br>2、Try changing the browser height to see the effect")],-1),F=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fan-table")]),a(`
        `),n("span",{class:"token attr-name"},"max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("calc(100vh - 350px)"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"fixed-header"),a(`
        `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'left'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"created"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("tableData "),n("span",{class:"token operator"},"="),a(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),j=n("p",null,"fan-table/table-height/calc-height",-1),B={__name:"calc-height",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>{const c=s("vue-anchor"),p=s("demo-block");return l(),r("div",A,[t(c,{"is-edit":"",label:"Dynamic Table Height(calc css function)",fileName:""}),a(),t(p,{filePath:"fan-table/table-height/calc-height",sourceCode:""},{description:e(()=>[E]),code:e(()=>[F]),default:e(()=>[j]),_:1})])}}},P={name:"basic-main",components:{Explain:x,AutoHeight:H,FixedHeight:N,CalcHeight:B}},S=n("h2",null,"Table Height",-1);function V(u,o,k,i,y,c){const p=s("Explain"),d=s("AutoHeight"),h=s("FixedHeight"),g=s("CalcHeight");return l(),r("div",null,[S,t(p),t(d),t(h),t(g)])}const Y=m(P,[["render",V]]);export{Y as default};
