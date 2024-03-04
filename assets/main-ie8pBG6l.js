import{o as e,a as p,e as t,r as a,b as s,d as n,aq as h,w as k,_ as v,c as b,G as $,A as w,F as R}from"./index-BWOAprk1.js";const x={class:"markdown-body"},O=t("div",{class:"tip"},[t("p",null,"内置了一些图标供你选择")],-1),A=[O],T={__name:"explain",setup(r,{expose:o}){return o({frontmatter:{}}),(u,i)=>(e(),p("div",x,A))}},I={class:"markdown-body"},q=h(`<p>引入 <code>VeIcon</code></p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VeIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>使用</p><pre class="language-javascript"><code class="language-javascript"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ve<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">&quot;double-right-arrow&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre>`,4),y={__name:"usage",setup(r,{expose:o}){return o({frontmatter:{}}),(u,i)=>{const c=a("vue-anchor");return e(),p("div",I,[s(c,{"is-edit":"",label:"使用方法",fileName:""}),n(),q])}}},B={class:"markdown-body"},E=t("p",null,[n("1、"),t("code",null,"name"),n("属性设置图标的名称<br> 2、"),t("code",null,"size"),n("属性设置图标的大小<br> 3、"),t("code",null,"color"),n("属性设置图标的颜色")],-1),V=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("double-right-arrow"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("double-right-arrow"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("red"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("double-right-arrow"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("40"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),W=t("p",null,"ve-icon/ve-icon",-1),C={__name:"base",setup(r,{expose:o}){return o({frontmatter:{}}),(u,i)=>{const c=a("vue-anchor"),d=a("demo-block");return e(),p("div",B,[s(c,{"is-edit":"",label:"使用",fileName:""}),n(),s(d,{filePath:"ve-icon/ve-icon",sourceCode:""},{description:k(()=>[E]),code:k(()=>[V]),default:k(()=>[W]),_:1})])}}},P={name:"FanIcon",data(){return{icons:{FILTER:"filter",DOUBLE_RIGHT_ARROW:"double-right-arrow",DOUBLE_LEFT_ARROW:"double-left-arrow",TOP_ARROW:"top-arrow",RIGHT_ARROW:"right-arrow",BOTTOM_ARROW:"bottom-arrow",LEFT_ARROW:"left-arrow",SORT_TOP_ARROW:"sort-top-arrow",SORT_BOTTOM_ARROW:"sort-bottom-arrow",SEARCH:"search"}}}},S={class:"icon-container"},F={class:"icon-item-comp"},L={class:"icon-name"};function N(r,o,l,u,i,c){const d=a("ve-icon"),m=a("vue-anchor");return e(),b(m,{label:"图标集合","is-edit":!1},{default:k(()=>[t("div",S,[(e(!0),p(R,null,$(Object.values(this.icons),_=>(e(),p("div",{key:_,class:"icon-item"},[t("div",F,[s(d,{name:_},null,8,["name"])]),t("span",L,w(_),1)]))),128))])]),_:1})}const j=v(P,[["render",N],["__scopeId","data-v-b8d3db38"]]),U={class:"markdown-body"},z=h('<h3 id="props" tabindex="-1">props</h3><table class="md-it-table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标名称</td><td><code>String</code></td><td>见示例</td><td>-</td></tr><tr><td>size</td><td>图标大小</td><td><code>Number</code></td><td>-</td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td><code>String</code></td><td>-</td><td>-</td></tr></tbody></table>',2),D={__name:"api",setup(r,{expose:o}){return o({frontmatter:{}}),(u,i)=>{const c=a("vue-anchor");return e(),p("div",U,[s(c,{"is-edit":"",label:"API",fileName:""}),n(),z])}}},G={components:{Explain:T,Usage:y,Base:C,Collection:j,API:D}},H=t("h2",null,"Icon 图标",-1);function M(r,o,l,u,i,c){const d=a("Explain"),m=a("Usage"),_=a("Base"),g=a("Collection"),f=a("API");return e(),p("div",null,[H,s(d),s(m),s(_),s(g),s(f)])}const K=v(G,[["render",M]]);export{K as default};
