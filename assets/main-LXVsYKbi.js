import{r as t,o as p,a as l,b as s,d as a,aq as g,w as d,e as n,_ as h}from"./index-crzR-Bjn.js";const f={class:"markdown-body"},b=g(`<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入英文语言包</span>
<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable/libs/locale/lang/en-US.js&quot;</span><span class="token punctuation">;</span>

VeLocale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>enUS<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,1),y=g(`<p>将 veLocale 组件挂载到 Vue 的 prototype 原型上，便于全局调用</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$veLocale <span class="token operator">=</span> VeLocale<span class="token punctuation">;</span>
</code></pre><p>调用</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable/libs/locale/lang/en-US.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$veLocale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>enUS<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,4),w={__name:"usage",setup(u,{expose:e}){return e({frontmatter:{}}),(i,r)=>{const o=t("vue-anchor");return p(),l("div",f,[s(o,{"is-edit":"",label:"使用方法",fileName:""}),a(),b,s(o,{"is-edit":"",label:"全局使用",fileName:""}),a(),y])}}},L={class:"markdown-body"},$=n("p",null,[a("你可以通过 VeLocal 组件实现多语言支持，使用 "),n("code",null,"VeLocal.use"),a(" 方法可以切换当前使用的语言")],-1),q=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button-demo"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("englishLang()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("英文"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button-demo"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("chineseLang()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("中文"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ve-pagination")]),a(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("600"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" zhCN "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue-fantable/packages/src/locale/lang/zh-CN'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" enUS "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue-fantable/packages/src/locale/lang/en-US'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"englishLang"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$veLocale"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("enUS"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"chineseLang"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$veLocale"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("zhCN"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),x=n("p",null,"ve-locale/switch-lang",-1),V={__name:"switch-lang",setup(u,{expose:e}){return e({frontmatter:{}}),(i,r)=>{const o=t("vue-anchor"),c=t("demo-block");return p(),l("div",L,[s(o,{"is-edit":"",label:"语言切换",fileName:""}),a(),$,s(c,{filePath:"ve-locale/switch-lang",sourceCode:""},{code:d(()=>[q]),default:d(()=>[x]),_:1})])}}},S={class:"markdown-body"},N=n("p",null,[a("通过 "),n("code",null,"VeLocale.update"),a(" 方法可以实现文案的修改和扩展")],-1),U=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("button")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button-demo"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("coverLang()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("修改文案"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("button")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ve-pagination")]),a(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("600"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"coverLang"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" lang "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"pagination"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"goto"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'跳转到'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$veLocale"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),j=n("p",null,"ve-locale/cover-lang",-1),C={__name:"cover-lang",setup(u,{expose:e}){return e({frontmatter:{}}),(i,r)=>{const o=t("vue-anchor"),c=t("demo-block");return p(),l("div",S,[s(o,{"is-edit":"",label:"覆盖语言包",fileName:""}),a(),N,s(c,{filePath:"ve-locale/cover-lang",sourceCode:""},{code:d(()=>[U]),default:d(()=>[j]),_:1})])}}},A={class:"markdown-body"},z=g('<h3 id="methods" tabindex="-1">methods</h3><table class="md-it-table"><thead><tr><th>方法名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>use</td><td>使用语言包</td><td>语言包</td></tr><tr><td>update</td><td>修改或者扩展语言包</td><td>语言包</td></tr></tbody></table>',2),B={__name:"api",setup(u,{expose:e}){return e({frontmatter:{}}),(i,r)=>{const o=t("vue-anchor");return p(),l("div",A,[s(o,{"is-edit":"",label:"API",fileName:""}),a(),z])}}},P={components:{Usage:w,SwitchLang:V,CoverLang:C,Api:B}},E=n("h2",null,"locale 国际化",-1);function I(u,e,k,i,r,o){const c=t("Usage"),_=t("SwitchLang"),m=t("CoverLang"),v=t("Api");return p(),l("div",null,[E,s(c),s(_),s(m),s(v)])}const D=h(P,[["render",I]]);export{D as default};
