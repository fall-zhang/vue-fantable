import{o as l,a as r,e as n,d as a,r as s,b as t,w as o,_ as g}from"./index-5MF4L8d4.js";const _={class:"markdown-body"},f=n("div",{class:"tip"},[n("p",null,[a("1、"),n("code",null,"max-height"),a(" is the max height of the table"),n("br"),a(" 2、When the total height of the table is greater than the ‘max height’ value, a vertical scroll bar will appear"),n("br"),a(" 3、When the total height of the table is less than the "),n("code",null,"max-height"),a(" value, the table will be highly adaptive")])],-1),m=[f],b={__name:"explain",setup(u,{expose:e}){return e({frontmatter:{}}),(k,d)=>(l(),r("div",_,m))}},x={class:"markdown-body"},v=n("p",null,[a("1、"),n("code",null,'fixed-header="true"'),a(" to enable the header to be fixed,Default to "),n("code",null,"true"),a("<br>2、"),n("code",null,"max-height"),a(" to set max height of table")],-1),w=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fan-table")]),a(),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":fixed-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
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
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"rowKey"),n("span",{class:"token operator"},":"),a(" i"),n("span",{class:"token punctuation"},","),a(`
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
`)])],-1),D=n("p",null,"fan-table/header-fixed/header-fixed",-1),$={__name:"base",setup(u,{expose:e}){return e({frontmatter:{}}),(k,d)=>{const c=s("vue-anchor"),p=s("demo-block");return l(),r("div",x,[t(c,{"is-edit":"",label:"Basic Usage",fileName:""}),a(),t(p,{filePath:"fan-table/header-fixed/header-fixed",sourceCode:""},{description:o(()=>[v]),code:o(()=>[w]),default:o(()=>[D]),_:1})])}}},q={class:"markdown-body"},B=n("p",null,[n("code",null,'fixed-header="false"'),a("disable fixed header.When there is too much content, the header will scroll with table content")],-1),N=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("fan-table")]),a(),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":fixed-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
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
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
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
`)])],-1),H=n("p",null,"fan-table/header-fixed/header-fixed-disabled",-1),T={__name:"header-fixed-disabled",setup(u,{expose:e}){return e({frontmatter:{}}),(k,d)=>{const c=s("vue-anchor"),p=s("demo-block");return l(),r("div",q,[t(c,{"is-edit":"",label:"Disable header fixed",fileName:""}),a(),t(p,{filePath:"fan-table/header-fixed/header-fixed-disabled",sourceCode:""},{description:o(()=>[B]),code:o(()=>[N]),default:o(()=>[H]),_:1})])}}},C={name:"basic-main",components:{Explain:b,Base:$,HeaderFixedDisabled:T}},E=n("h2",null,"Header Fixed",-1);function F(u,e,i,k,d,c){const p=s("Explain"),y=s("Base"),h=s("HeaderFixedDisabled");return l(),r("div",null,[E,t(p),t(y),t(h)])}const W=g(C,[["render",F]]);export{W as default};
