import{o as e,a as c,e as n,d as t,r as a,b as o,w as y,_ as g}from"./index-DhQICo8y.js";const d={class:"markdown-body"},_=n("div",{class:"tip"},[n("p",null,[t("1、Set "),n("code",null,"operationColumn = true"),t(" in columns as the operation column "),n("br"),t(" 2、操作列默认左固定 "),n("br"),t(" 3、The operation column supports row operations such as multiple row selection, whole row copying, whole row cutting, row position exchange (under development). This column function is similar to the operation column function of Excel"),n("br"),t(" 4、The cells in the operation column are not allowed to be selected, edited, or automatically filled")])],-1),f=[_],b={__name:"explain",setup(l,{expose:s}){return s({frontmatter:{}}),(u,i)=>(e(),c("div",d,f))}},h={class:"markdown-body"},w=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("fan-table")]),t(`
            `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"border-y"),t(`
            `),n("span",{class:"token attr-name"},":cell-autofill-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("cellAutofillOption"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":edit-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("editOption"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"row-key-field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowKey"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":row-style-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowStyleOption"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"rowStyleOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"clickHighlight"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"hoverHighlight"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"cellAutofillOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"editOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// cell value change"),t(`
        `),n("span",{class:"token function-variable function"},"cellValueChange"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" row"),n("span",{class:"token punctuation"},","),t(" column "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"operationColumn"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" row"),n("span",{class:"token punctuation"},","),t(" column"),n("span",{class:"token punctuation"},","),t(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" h")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"++"),t(`rowIndex
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col2'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col3'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col4'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col5'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col6'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"created"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"initTableData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"rowKey"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"B"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"C"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col4"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"D"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col5"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"E"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col6"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"F"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col7"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"G"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col8"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"H"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("tableData "),n("span",{class:"token operator"},"="),t(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),v=n("p",null,"fan-table/operation-column/operation-column",-1),x={__name:"base",setup(l,{expose:s}){return s({frontmatter:{}}),(u,i)=>{const k=a("vue-anchor"),p=a("demo-block");return e(),c("div",h,[o(k,{"is-edit":"",label:"Basic usage",fileName:""}),t(),o(p,{filePath:"fan-table/operation-column/operation-column",sourceCode:""},{code:y(()=>[w]),default:y(()=>[v]),_:1})])}}},$={name:"basic-main",components:{Explain:b,Base:x}},C=n("h2",null,"Operation Column",-1);function B(l,s,r,u,i,k){const p=a("Explain"),m=a("Base");return e(),c("div",null,[C,o(p),o(m)])}const q=g($,[["render",B]]);export{q as default};
