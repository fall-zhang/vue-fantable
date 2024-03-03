import{r as a,o as l,a as u,b as s,d as t,aq as g,w as e,e as n,_ as $}from"./index-6s-dGoXs.js";const P={class:"markdown-body"},z=g(`<p>import <code>VePagination</code></p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VePagination<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>use</p><pre class="language-javascript"><code class="language-javascript"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>ve<span class="token operator">-</span>pagination <span class="token operator">:</span>total<span class="token operator">=</span><span class="token string">&quot;600&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre>`,4),w={__name:"usage",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor");return l(),u("div",P,[s(c,{"is-edit":"",label:"Usage",fileName:""}),t(),z])}}},q={class:"markdown-body"},C=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")])])],-1),S=n("p",null,"ve-pagination/base-usage",-1),N={__name:"base-usage",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",q,[s(c,{"is-edit":"",label:"Base Usage",fileName:""}),t(),s(p,{filePath:"ve-pagination/base-usage",sourceCode:""},{code:e(()=>[C]),default:e(()=>[S]),_:1})])}}},j={class:"markdown-body"},B=n("p",null,[n("code",null,"page-index"),t(" sets the current page number")],-1),E=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":page-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),V=n("p",null,"ve-pagination/page-index",-1),I={__name:"page-index",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",j,[s(c,{"is-edit":"",label:"Page Index",fileName:""}),t(),s(p,{filePath:"ve-pagination/page-index",sourceCode:""},{description:e(()=>[B]),code:e(()=>[E]),default:e(()=>[V]),_:1})])}}},U={class:"markdown-body"},A=n("p",null,[n("code",null,"page-size"),t(" set the size of each page")],-1),T=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":page-size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),L=n("p",null,"ve-pagination/page-size",-1),D={__name:"page-size",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",U,[s(c,{"is-edit":"",label:"Page Size",fileName:""}),t(),s(p,{filePath:"ve-pagination/page-size",sourceCode:""},{description:e(()=>[A]),code:e(()=>[T]),default:e(()=>[L]),_:1})])}}},O={class:"markdown-body"},H=n("p",null,[n("code",null,"pagingCount"),t(" set the number of middle buttons and paging buttons for the forward 5 pages and backward 5 pages")],-1),M=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":paging-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),W=n("p",null,"ve-pagination/paging-buttons",-1),F={__name:"paging-buttons",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",O,[s(c,{"is-edit":"",label:"Paging Buttons",fileName:""}),t(),s(p,{filePath:"ve-pagination/paging-buttons",sourceCode:""},{description:e(()=>[H]),code:e(()=>[M]),default:e(()=>[W]),_:1})])}}},G={class:"markdown-body"},J=n("p",null,[n("code",null,"pageSizeOption"),t(" set paging size drop-down option")],-1),K=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":page-size-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("[5,10,15]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":page-size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Q=n("p",null,"ve-pagination/paging-configuration",-1),R={__name:"paging-configuration",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",G,[s(c,{"is-edit":"",label:"Paging Configuration",fileName:""}),t(),s(p,{filePath:"ve-pagination/paging-configuration",sourceCode:""},{description:e(()=>[J]),code:e(()=>[K]),default:e(()=>[Q]),_:1})])}}},X={class:"markdown-body"},Y=n("p",null,[t("1、"),n("code",null,"on-page-number-change"),t("Page number change callback event<br>2、"),n("code",null,"on-page-size-change"),t("Change callback events under each page")],-1),Z=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(`
        `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@on-page-number-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pageNumberChange"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"@on-page-size-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pageSizeChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"pageNumberChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pageIndex"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("pageIndex"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

    `),n("span",{class:"token function"},"pageSizeChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pageSize"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("pageSize"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),nn=n("p",null,"ve-pagination/callback-events",-1),tn={__name:"callback-events",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",X,[s(c,{"is-edit":"",label:"Callback Events",fileName:""}),t(),s(p,{filePath:"ve-pagination/callback-events",sourceCode:""},{description:e(()=>[Y]),code:e(()=>[Z]),default:e(()=>[nn]),_:1})])}}},an={class:"markdown-body"},sn=n("p",null,[t("1、Change the layout by setting the "),n("code",null,"layout"),t(" property.<br>2、The "),n("code",null,"layout"),t(" property supports the following option items:<br>"),n("code",null,"total"),t(":Display total number、"),n("code",null,"prev"),t(":Show previous button、"),n("code",null,"pager"),t(":Show page number button、"),n("code",null,"next"),t(":Show next page button、"),n("code",null,"sizer"),t(":Show per page size settings、"),n("code",null,"jumper"),t(":Show goto input")],-1),en=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20 bold"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("不显示页码按钮"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['total', 'prev', 'next', 'sizer', 'jumper']"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mt30 mb20 bold"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("调整显示顺序"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(`
                `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(`
                `),n("span",{class:"token attr-name"},":layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['total', 'sizer', 'prev', 'pager', 'next', 'jumper']"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mt30 mb20 bold"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("完整布局"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-pagination")]),t(`
                `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("600"),n("span",{class:"token punctuation"},'"')]),t(`
                `),n("span",{class:"token attr-name"},":layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),on=n("p",null,"ve-pagination/layout-settings",-1),cn={__name:"layout-settings",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor"),p=a("demo-block");return l(),u("div",an,[s(c,{"is-edit":"",label:"Layout Settings",fileName:""}),t(),s(p,{filePath:"ve-pagination/layout-settings",sourceCode:""},{description:e(()=>[sn]),code:e(()=>[en]),default:e(()=>[on]),_:1})])}}},pn={class:"markdown-body"},ln=g('<h3 id="props" tabindex="-1">props</h3><table class="md-it-table"><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Optional value</th><th>Default</th></tr></thead><tbody><tr><td>layout</td><td>Layout settings can be matched according to your own business scenarios</td><td><code>Array</code></td><td>[‘total’, ‘prev’, ‘pager’, ‘next’, ‘sizer’, ‘jumper’]</td><td>[‘total’, ‘prev’, ‘pager’, ‘next’, ‘sizer’, ‘jumper’]</td></tr><tr><td>total</td><td>Total Count</td><td><code>Number</code></td><td>-</td><td>-</td></tr><tr><td>pageIndex</td><td>Current page number</td><td><code>Number</code></td><td>-</td><td>1</td></tr><tr><td>pagingCount</td><td>The number of buttons in the middle of forward 5 pages and backward 5 pages</td><td><code>Number</code></td><td>-</td><td>5</td></tr><tr><td>pageSize</td><td>Page size</td><td><code>Number</code></td><td>-</td><td>10</td></tr><tr><td>pageSizeOption</td><td>Per page size drop-down option</td><td><code>Array</code></td><td>-</td><td>[10, 20, 30]</td></tr><tr><td>popperAppendTo</td><td>Parent Node which the selector should be rendered to. Default to <code>body</code>. When position issues happen, try to modify it into scrollable content and position it relative. <a href="https://codesandbox.io/s/vue-fantable-2-15-0-example-forked-q9k3m0?file=/Example.vue">Example</a></td><td>`String</td><td>HTMLElement`</td><td>-</td></tr></tbody></table><h3 id="event" tabindex="-1">Event</h3><table class="md-it-table"><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>on-page-number-change</td><td>Page change callback event</td><td>Current page number</td></tr><tr><td>on-page-size-change</td><td>Page size dropdown change callback</td><td>Current page size</td></tr></tbody></table>',4),un={__name:"api",setup(i,{expose:o}){return o({frontmatter:{}}),(k,d)=>{const c=a("vue-anchor");return l(),u("div",pn,[s(c,{"is-edit":"",label:"API",fileName:""}),t(),ln])}}},rn={components:{Usage:w,BaseUsage:N,PageIndex:I,PageSize:D,PagingButtons:F,PagingConfiguration:R,CallbackEvents:tn,LayoutSettings:cn,Api:un}},kn=n("h2",null,"Pagination",-1);function dn(i,o,r,k,d,c){const p=a("Usage"),_=a("BaseUsage"),m=a("PageIndex"),h=a("PageSize"),v=a("PagingButtons"),b=a("PagingConfiguration"),f=a("CallbackEvents"),x=a("LayoutSettings"),y=a("Api");return l(),u("div",null,[kn,s(p),s(_),s(m),s(h),s(v),s(b),s(f),s(x),s(y)])}const _n=$(rn,[["render",dn]]);export{_n as default};
