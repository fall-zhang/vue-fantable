import{o as l,a as r,e as n,d as t,r as s,b as a,aq as _,w as c,_ as h}from"./index-CvE8Fbe-.js";import{c as b,a as R}from"./contextmenu-body-option-props-Bvp02pJS.js";import"./api-tpl-CPwM1adO.js";import"./db-Ct460jSq.js";const w={class:"markdown-body"},O=n("div",{class:"tip"},[n("p",null,[t("1、有些操作可以通过右键菜单更方便的完成。比如单元格编辑功能，可以通过右键操作很方便的插入行或者移除行"),n("br"),t(" 2、当然你也可以自定义右键菜单功能")])],-1),C=[O],I={__name:"explain",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>(l(),r("div",w,C))}},v={class:"markdown-body"},E=_('<p>header 右键菜单清单</p><table class="md-it-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">分割线</td><td style="text-align:left;"><code>SEPARATOR</code></td></tr><tr><td style="text-align:left;">剪切</td><td style="text-align:left;"><code>CUT</code></td></tr><tr><td style="text-align:left;">拷贝</td><td style="text-align:left;"><code>COPY</code></td></tr><tr><td style="text-align:left;">清空列</td><td style="text-align:left;"><code>EMPTY_COLUMN</code></td></tr><tr><td style="text-align:left;">左列冻结至该列</td><td style="text-align:left;"><code>LEFT_FIXED_COLUMN_TO</code></td></tr><tr><td style="text-align:left;">右列冻结至该列</td><td style="text-align:left;"><code>RIGHT_FIXED_COLUMN_TO</code></td></tr><tr><td style="text-align:left;">取消左列冻结至该列</td><td style="text-align:left;"><code>CANCEL_LEFT_FIXED_COLUMN_TO</code></td></tr><tr><td style="text-align:left;">取消右列冻结至该列</td><td style="text-align:left;"><code>CANCEL_RIGHT_FIXED_COLUMN_TO</code></td></tr></tbody></table><p>body 右键菜单清单</p><table class="md-it-table"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">分割线</td><td style="text-align:left;"><code>SEPARATOR</code></td></tr><tr><td style="text-align:left;">剪切</td><td style="text-align:left;"><code>CUT</code></td></tr><tr><td style="text-align:left;">拷贝</td><td style="text-align:left;"><code>COPY</code></td></tr><tr><td style="text-align:left;">在上方插入行</td><td style="text-align:left;"><code>INSERT_ROW_ABOVE</code></td></tr><tr><td style="text-align:left;">在下方插入行</td><td style="text-align:left;"><code>INSERT_ROW_BELOW</code></td></tr><tr><td style="text-align:left;">删除行</td><td style="text-align:left;"><code>REMOVE_ROW</code></td></tr><tr><td style="text-align:left;">清空行</td><td style="text-align:left;"><code>EMPTY_ROW</code></td></tr><tr><td style="text-align:left;">清空单元格</td><td style="text-align:left;"><code>EMPTY_CELL</code></td></tr></tbody></table>',4),T={__name:"contextmenu-types",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>{const e=s("vue-anchor");return l(),r("div",v,[a(e,{"is-edit":"",label:"右键菜单清单",fileName:""}),t(),E])}}},S={class:"markdown-body"},A=n("p",null,"右键表格区域查看效果",-1),L=n("p",null,"你可以根据需要进行组合使用",-1),M=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("fan-table")]),t(),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("350"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":scroll-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"row-key-field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowKey"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":fixed-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":row-style-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowStyleOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"border-y"),t(),n("span",{class:"token attr-name"},":virtual-scroll-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("virtualScrollOption"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":contextmenu-body-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenuBodyOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":contextmenu-header-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenuHeaderOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},"// start row index"),t(`
      `),n("span",{class:"token literal-property property"},"startRowIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"virtualScrollOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// 是否开启"),t(`
        `),n("span",{class:"token literal-property property"},"enable"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"scrolling"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("scrolling"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// contextmenu header option"),t(`
      `),n("span",{class:"token literal-property property"},"contextmenuHeaderOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},`/*
                    before contextmenu show.
                    In this function,You can change the \`contextmenu\` options
                    */`),t(`
        `),n("span",{class:"token function-variable function"},"beforeShow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
          isWholeColSelection`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeKeys`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeIndexes`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu header beforeShow--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'isWholeColSelection::'"),n("span",{class:"token punctuation"},","),t(" isWholeColSelection"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// after menu click"),t(`
        `),n("span",{class:"token function-variable function"},"afterMenuClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" type"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu header afterMenuClick--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'type::'"),n("span",{class:"token punctuation"},","),t(" type"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

        `),n("span",{class:"token comment"},"// contextmenus"),t(`
        `),n("span",{class:"token literal-property property"},"contextmenus"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CUT'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'COPY'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'EMPTY_COLUMN'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'LEFT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CANCEL_LEFT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RIGHT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CANCEL_RIGHT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

      `),n("span",{class:"token comment"},"// contextmenu body option"),t(`
      `),n("span",{class:"token literal-property property"},"contextmenuBodyOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},`/*
                    before contextmenu show.
                    In this function,You can change the \`contextmenu\` options
                    */`),t(`
        `),n("span",{class:"token function-variable function"},"beforeShow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
          isWholeRowSelection`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeKeys`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeIndexes`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu body beforeShow--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'isWholeRowSelection::'"),n("span",{class:"token punctuation"},","),t(" isWholeRowSelection"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// after menu click"),t(`
        `),n("span",{class:"token function-variable function"},"afterMenuClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" type"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu body afterMenuClick--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'type::'"),n("span",{class:"token punctuation"},","),t(" type"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

        `),n("span",{class:"token comment"},"// contextmenus"),t(`
        `),n("span",{class:"token literal-property property"},"contextmenus"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CUT'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'COPY'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'INSERT_ROW_ABOVE'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'INSERT_ROW_BELOW'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'REMOVE_ROW'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'EMPTY_ROW'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'EMPTY_CELL'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

      `),n("span",{class:"token literal-property property"},"rowStyleOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"clickHighlight"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"hoverHighlight"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"operationColumn"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" row"),n("span",{class:"token punctuation"},","),t(" column"),n("span",{class:"token punctuation"},","),t(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" h")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(" rowIndex "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("startRowIndex "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col8'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col8'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col8'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// table data"),t(`
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
          `),n("span",{class:"token literal-property property"},"rowKey"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"A"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"B"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"C"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col4"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"D"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col5"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"E"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col6"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"F"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col7"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"G"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col8"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"H"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("tableData "),n("span",{class:"token operator"},"="),t(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// virtual scrolling"),t(`
    `),n("span",{class:"token function"},"scrolling"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" startRowIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("startRowIndex "),n("span",{class:"token operator"},"="),t(` startRowIndex
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),P=n("p",null,"fan-table/contextmenu/contextmenu-base",-1),N={__name:"base",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>{const e=s("vue-anchor"),p=s("demo-block");return l(),r("div",S,[a(e,{"is-edit":"",label:"基础用法",fileName:""}),t(),A,a(p,{filePath:"fan-table/contextmenu/contextmenu-base",sourceCode:""},{description:c(()=>[L]),code:c(()=>[M]),default:c(()=>[P]),_:1})])}}},K={class:"markdown-body"},D=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("fan-table")]),t(),n("span",{class:"token attr-name"},":scroll-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("350"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"row-key-field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowKey"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":fixed-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("columns"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tableData"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":row-style-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("rowStyleOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":virtual-scroll-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("virtualScrollOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"border-y"),t(`
      `),n("span",{class:"token attr-name"},":contextmenu-body-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenuBodyOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":contextmenu-header-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenuHeaderOption"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"virtualScrollOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// 是否开启"),t(`
        `),n("span",{class:"token literal-property property"},"enable"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"scrolling"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("scrolling"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// contextmenu header option"),t(`
      `),n("span",{class:"token literal-property property"},"contextmenuHeaderOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},`/*
                before contextmenu show.
                In this function,You can change the \`contextmenu\` options
                */`),t(`
        `),n("span",{class:"token function-variable function"},"beforeShow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
          isWholeColSelection`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeKeys`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeIndexes`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu header beforeShow--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'isWholeColSelection::'"),n("span",{class:"token punctuation"},","),t(" isWholeColSelection"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// after menu click"),t(`
        `),n("span",{class:"token function-variable function"},"afterMenuClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" type"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu header afterMenuClick--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'type::'"),n("span",{class:"token punctuation"},","),t(" type"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

        `),n("span",{class:"token comment"},"// contextmenus"),t(`
        `),n("span",{class:"token literal-property property"},"contextmenus"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CUT'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'COPY'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'EMPTY_COLUMN'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'LEFT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CANCEL_LEFT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RIGHT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CANCEL_RIGHT_FIXED_COLUMN_TO'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// contextmenu body option"),t(`
      `),n("span",{class:"token literal-property property"},"contextmenuBodyOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},`/*
                before contextmenu show.
                In this function,You can change the \`contextmenu\` options
                */`),t(`
        `),n("span",{class:"token function-variable function"},"beforeShow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
          isWholeRowSelection`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeKeys`),n("span",{class:"token punctuation"},","),t(`
          selectionRangeIndexes`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu body beforeShow--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'isWholeRowSelection::'"),n("span",{class:"token punctuation"},","),t(" isWholeRowSelection"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// after menu click"),t(`
        `),n("span",{class:"token function-variable function"},"afterMenuClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" type"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'---contextmenu body afterMenuClick--'"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'type::'"),n("span",{class:"token punctuation"},","),t(" type"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeKeys::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeKeys"),n("span",{class:"token punctuation"},")"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectionRangeIndexes::'"),n("span",{class:"token punctuation"},","),t(" selectionRangeIndexes"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

        `),n("span",{class:"token comment"},"// contextmenus"),t(`
        `),n("span",{class:"token literal-property property"},"contextmenus"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CUT'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'COPY'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'custom-empty-row'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'empty row(custom)'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'customType1'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'custom menu'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-type'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                  `),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1-type'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-2-2'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-2-2-type'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-2'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-3'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-3-type'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

      `),n("span",{class:"token literal-property property"},"rowStyleOption"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"clickHighlight"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"hoverHighlight"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"operationColumn"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"renderBodyCell"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" row"),n("span",{class:"token punctuation"},","),t(" column"),n("span",{class:"token punctuation"},","),t(" rowIndex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" h")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(" rowIndex "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("startRowIndex "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2-col3'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col3'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"130"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"140"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"140"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7-1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col7'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col8'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col8'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'col8'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// table data"),t(`
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
          `),n("span",{class:"token literal-property property"},"rowKey"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"A"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"B"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"C"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col4"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"D"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col5"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"E"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col6"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"F"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col7"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"G"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"col8"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"H"),n("span",{class:"token template-punctuation string"},"`")]),t(),n("span",{class:"token operator"},"+"),t(" i"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("tableData "),n("span",{class:"token operator"},"="),t(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// virtual scrolling"),t(`
    `),n("span",{class:"token function"},"scrolling"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" startRowIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("startRowIndex "),n("span",{class:"token operator"},"="),t(` startRowIndex
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
\`\`\`

:::
`)])],-1),B=n("p",null,"fan-table/contextmenu/custom-menu",-1),W={__name:"custom",setup(u,{expose:o}){return o({frontmatter:{}}),(i,y)=>{const e=s("vue-anchor"),p=s("demo-block");return l(),r("div",K,[a(e,{"is-edit":"",label:"自定义右键菜单",fileName:""}),t(),a(p,{filePath:"fan-table/contextmenu/custom-menu",sourceCode:""},{code:c(()=>[D]),default:c(()=>[B]),_:1})])}}},q={name:"BasicMain",components:{Explain:I,ContextmenuTypes:T,Base:N,Custom:W,API1:b,API2:R}},U=n("h2",null,"右键菜单",-1);function F(u,o,k,i,y,e){const p=s("Explain"),g=s("ContextmenuTypes"),d=s("Base"),m=s("Custom"),f=s("API1"),x=s("API2");return l(),r("div",null,[U,a(p),a(g),a(d),a(m),a(f,{anchor:"API contextmenuHeaderOption",desc:"contextmenuHeaderOption header 右键菜单配置"}),a(x,{anchor:"API contextmenuBodyOption",desc:"contextmenuBodyOption body 右键菜单配置"})])}const G=h(q,[["render",F]]);export{G as default};
