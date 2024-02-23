import{r as o,o as l,a as c,b as a,d as t,e,ap as r}from"./index-P7Lzo4Rg.js";const i={class:"markdown-body"},p=e("h2",{id:"common-problem",tabindex:"-1"},"Common Problem",-1),u=e("p",null,[t("Q:When to use "),e("code",null,"scrollWidth"),t(" attribute?")],-1),d=e("p",null,[t("A:When the outer container width is less than the "),e("code",null,"scrollwidth"),t(" value, a horizontal scroll bar will appear; when the outer container width is greater than the "),e("code",null,"scrollwidth"),t(" value, it will follow the container adaptively")],-1),h=e("p",null,"Q:Why can’t some columns be displayed after setting fixed columns?",-1),m=e("p",null,"A:Because the set scrollWidth value is less than the sum of the width of the column (setting the specific width), it will cause the column with no width or set percentage to be squeezed out",-1),k=e("p",null,[t("Q:When to use "),e("code",null,"rowKeyFieldName"),t(" property?")],-1),b=e("p",null,"A:This attribute is to solve the correctness of rendering when the data is updated. Applicable functions are: row expansion, row single selection, row multiple selection, row click highlighting, virtual scroll",-1),_=e("p",null,"Q:Why ‘ReferenceError: h is not defined’",-1),f=e("p",null,[t("A:Refer to"),e("a",{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX"},"official documents"),t("。You can add the second parameter to solve,Such as:")],-1),g=e("pre",null,[e("code",null,`renderBodyCell: ({ row, column, rowIndex },h) => {
       return (<div>hello</div>);
}
`)],-1),w=r(`<p>Q:When there are too many cell contents, the width set does not take effect?</p><p>A:Too much text in a cell destroys the layout,This can be controlled by style <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break">word-break</a> ,<a href="#/en/doc/table/column-width?anchor=long-text-destroys-layout">Refer to this example</a>,Such as:</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fan-table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">word-break</span><span class="token punctuation">:</span> break-all</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:table-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,3),y=e("p",null,"Q:How to customize scroll bar styles",-1),v=e("p",null,[t("A:There is no customized scroll bar style inside the component, which can be customized according to your business.For the customization of scroll bar style, please refer to:"),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar"},"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar")],-1),q={__name:"QA",setup(N,{expose:n}){return n({frontmatter:{}}),(z,W)=>{const s=o("vue-anchor");return l(),c("div",i,[p,a(s,{"is-edit":"",label:"'scrollWidth' attribute",fileName:""}),t(),u,d,a(s,{"is-edit":"",label:"Column Fixed",fileName:""}),t(),h,m,a(s,{"is-edit":"",label:"'rowKeyFieldName' property",fileName:""}),t(),k,b,a(s,{"is-edit":"",label:"Error：'ReferenceError: h is not defined'",fileName:""}),t(),_,f,g,a(s,{"is-edit":"",label:"Long text destroys layout",fileName:""}),t(),w,a(s,{"is-edit":"",label:"Customize scroll bar styles",fileName:""}),t(),y,v])}}};export{q as default};
