import{o as p,a as c,e as n,r as s,b as a,d as t,ao as f,w as y,_ as b}from"./index-X6yBs7pR.js";import{c as _}from"./clipboard-option-props-dw9YNzR0.js";import"./api-tpl-g6V9uJDd.js";import"./db-QG-PUSh-.js";const h={class:"markdown-body"},x=n("div",{class:"tip"},[n("p",null,"1、You can select cells and copy, paste, cut and delete them in batches like excle")],-1),w=[x],v={__name:"explain",setup(l,{expose:o}){return o({frontmatter:{}}),(i,r)=>(p(),c("div",h,w))}},R={class:"markdown-body"},C=f('<p>Clipboard supports the following shortcut keys (refer to excel shortcut keys):</p><table class="md-it-table"><thead><tr><th style="text-align:left;">Feature</th><th style="text-align:left;">Shortcuts</th></tr></thead><tbody><tr><td style="text-align:left;">Copy range cell values</td><td style="text-align:left;"><code>Ctrl</code> + <code>C</code></td></tr><tr><td style="text-align:left;">Paste (support excel content format)</td><td style="text-align:left;"><code>Ctrl</code> + <code>V</code></td></tr><tr><td style="text-align:left;">Cut range cell values</td><td style="text-align:left;"><code>Ctrl</code> + <code>X</code></td></tr><tr><td style="text-align:left;">Delete range cell values</td><td style="text-align:left;"><code>Delete</code></td></tr></tbody></table>',2),I={__name:"shortcuts",setup(l,{expose:o}){return o({frontmatter:{}}),(i,r)=>{const e=s("vue-anchor");return p(),c("div",R,[a(e,{"is-edit":"",label:"Shortcuts",fileName:""}),t(),C])}}},$={class:"markdown-body"},K=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("fan-table")]),t(`
            `),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("350"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"border-y"),t(`
            `),n("span",{class:"token attr-name"},":row-style-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowStyleOption"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":cell-autofill-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("cellAutofillOption"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":edit-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("editOption"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"row-key-field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowKey"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":clipboard-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clipboardOption"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":virtual-scroll-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("virtualScrollOption"),n("span",{class:"token punctuation"},'"')]),t(`
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
      `),n("span",{class:"token comment"},"// clipboard option"),t(`
      `),n("span",{class:"token literal-property property"},"clipboardOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"copy"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"paste"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cut"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token keyword"},"delete"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"beforeCopy"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'beforeCopy'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"afterCopy"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'afterCopy'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"beforePaste"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'beforePaste'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"afterPaste"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'afterPaste'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"beforeCut"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'beforeCut'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"afterCut"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'afterCut'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"beforeDelete"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'beforeDelete'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"afterDelete"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'afterDelete'"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"virtualScrollOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// 是否开启"),t(`
        `),n("span",{class:"token literal-property property"},"enable"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
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
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"35"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" row"),n("span",{class:"token punctuation"},","),t(" column"),n("span",{class:"token punctuation"},","),t(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" h")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"++"),t(`rowIndex
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Col6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"edit"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
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
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"rowKey"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"row"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
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
    `),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" data"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'data::'"),n("span",{class:"token punctuation"},","),t(" data"),n("span",{class:"token punctuation"},")"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),D=n("p",null,"fan-table/clipboard/clipboard-base",-1),O={__name:"base",setup(l,{expose:o}){return o({frontmatter:{}}),(i,r)=>{const e=s("vue-anchor"),k=s("demo-block");return p(),c("div",$,[a(e,{"is-edit":"",label:"Base usage",fileName:""}),t(),a(k,{filePath:"fan-table/clipboard/clipboard-base",sourceCode:""},{code:y(()=>[K]),default:y(()=>[D]),_:1})])}}},P={name:"basic-main",components:{Explain:v,ShortCuts:I,Base:O,API:_}},S=n("h2",null,"Clipboard",-1);function q(l,o,u,i,r,e){const k=s("Explain"),d=s("ShortCuts"),g=s("Base"),m=s("API");return p(),c("div",null,[S,a(k),a(d),a(g),a(m,{title:"API",anchor:"API",desc:"clipboardOption"})])}const E=b(P,[["render",q]]);export{E as default};
