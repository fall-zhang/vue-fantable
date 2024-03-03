import{r as o,o as l,a as p,b as t,d as s,e as a,aq as c}from"./index-DhQICo8y.js";const r={class:"markdown-body"},u=a("h2",{id:"%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",tabindex:"-1"},"常见问题",-1),i=a("p",null,[s("Q:"),a("code",null,"scrollWidth"),s("属性的用法？")],-1),d=a("p",null,[s("A:当外层容器宽度小于 "),a("code",null,"scrollWidth"),s(" 值时，将会出现横向滚动条；当外层容器宽度大于 "),a("code",null,"scrollWidth"),s(" 值时，将会跟随容器自适应")],-1),h=a("p",null,"Q:为什么设置固定列后，有些列无法显示？",-1),k=a("p",null,[s("A:因为设置的 "),a("code",null,"scrollWidth"),s("值小于列（设置具体宽度的）的宽度之和，会导致未设置宽度或者设置百分比的列挤掉")],-1),_=a("p",null,[s("Q:什么时候使用"),a("code",null,"rowKeyFieldName"),s(" 属性？")],-1),m=a("p",null,"A:此属性为了解决数据更新时，渲染的正确性。适用的功能有：行展开、行单选、行多选、行点击高亮、虚拟滚动",-1),b=a("p",null,[s("Q:为什么使用自定义列渲染函数"),a("code",null,"renderBodyCell"),s("报‘ReferenceError: h is not defined’")],-1),g=a("p",null,[s("A:参考"),a("a",{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX"},"官方文档"),s("。你可以"),a("strong",null,"加上"),s("第二个参数解决，如：")],-1),f=a("pre",null,[a("code",null,`renderBodyCell: ({ row, column, rowIndex },h) => {
       return (<div>hello</div>);
}
`)],-1),v=c(`<p>Q:为什么当单元格内容过多时，设置的宽度不生效</p><p>A:当单元格文本内容过多时会破坏布局，此时可以通过样式 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break">word-break</a> 控制（<a href="#/zh/doc/table/column-width?anchor=long-text-destroys-layout">具体参考这个示例</a>），如：</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fan-table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">word-break</span><span class="token punctuation">:</span> break-all</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:table-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,3),N=a("p",null,"Q:如何自定义滚动条样式",-1),w=a("p",null,[s("A:组件内部没有定制滚动条样式，根据你的业务自定义即可。滚动条样式自定义可参考："),a("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar"},"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar")],-1),S={__name:"QA",setup(q,{expose:e}){return e({frontmatter:{}}),(y,C)=>{const n=o("vue-anchor");return l(),p("div",r,[u,t(n,{"is-edit":"",label:"scrollWidth 属性",fileName:""}),s(),i,d,t(n,{"is-edit":"",label:"固定列",fileName:""}),s(),h,k,t(n,{"is-edit":"",label:"rowKeyFieldName 属性",fileName:""}),s(),_,m,t(n,{"is-edit":"",label:"报错：‘ReferenceError: h is not defined’",fileName:""}),s(),b,g,f,t(n,{"is-edit":"",label:"长文本破坏布局",fileName:""}),s(),v,t(n,{"is-edit":"",label:"自定义滚动条样式",fileName:""}),s(),N,w])}}};export{S as default};
