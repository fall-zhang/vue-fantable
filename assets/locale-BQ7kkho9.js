import{r as o,o as p,a as c,b as a,d as n,e as l,aq as s}from"./index-CvE8Fbe-.js";const r={class:"markdown-body"},u=l("h2",{id:"%E5%9B%BD%E9%99%85%E5%8C%96",tabindex:"-1"},"国际化",-1),d=s(`<p>你可以通过 <code>VeLocal</code> 组件实现多语言支持，使用 <code>VeLocal.use</code> 方法可以切换当前使用的语言。</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入英文语言包</span>
<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable/libs/locale/lang/en-US.js&quot;</span><span class="token punctuation">;</span>

VeLocale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>enUS<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,2),i=s(`<p>通过 <code>VeLocale.update</code> 方法可以实现文案的修改和扩展。</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> lang <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">goto</span><span class="token operator">:</span> <span class="token string">&quot;跳转到&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

VeLocale<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,2),k=s(`<div class="tip"><p>1、从目录 “<a href="//unpkg.com/vue-fantable/libs/locale/lang/%E2%80%9D">//unpkg.com/vue-fantable/libs/locale/lang/”</a> 目录下引用需要的语言包<br> 2、使用 <code>FanTable.VeLocale.use</code> 方法使用和切换语言包<br> 3、语言包固定格式为 <code>FanTable.lang.[语言包名称]</code>，[语言包名称] 不包含‘-’符号，具体见下面示例<br></p></div><pre><code>&lt;script src=&quot;//unpkg.com/vue&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/vue-fantable&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/vue-fantable/src/libs/locale/lang/en-US.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/vue-fantable/src/libs/locale/lang/zh-CN.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
  // 切换到英文
  FanTable.VeLocale.use(FanTable.lang.enUS);

  /*
  切换中文
  FanTable.VeLocale.use(FanTable.lang.zhCN);
  */
&lt;/script&gt;
</code></pre>`,2),g=s('<p>目前支持以下语言：</p><table class="md-it-table"><thead><tr><th>语言</th><th>文件名</th></tr></thead><tbody><tr><td>简体中文</td><td>zh-CN</td></tr><tr><td>繁體中文（中国台湾）</td><td>zh-TW</td></tr><tr><td>英语（en）</td><td>en-US</td></tr><tr><td>南非（荷兰语）</td><td>af-ZA</td></tr><tr><td>南非（ZA）</td><td>zu-ZA</td></tr><tr><td>法语（FR）</td><td>fr-FR</td></tr><tr><td>巴西葡萄牙语</td><td>pt-BR</td></tr><tr><td>韩文(KR)</td><td>ko-KR</td></tr><tr><td>俄语(RU)</td><td>ru-RU</td></tr></tbody></table><p>如果你需要使用其他的语言，欢迎贡献 PR：只需在 <a href="https://github.com/fall-zhang/vue-fantable/tree/master/packages/src/locale/lang">这里</a> 添加一个语言配置文件即可。</p>',3),v={__name:"locale",setup(b,{expose:e}){return e({frontmatter:{}}),(f,h)=>{const t=o("vue-anchor");return p(),c("div",r,[u,a(t,{"is-edit":"",label:"语言切换",fileName:""}),n(),d,a(t,{"is-edit":"",label:"修改语言包",fileName:""}),n(),i,a(t,{"is-edit":"",label:"CDN 方式加载语言文件",fileName:""}),n(),k,a(t,{"is-edit":"",label:"语言包",fileName:""}),n(),g])}}};export{v as default};
