import{r as p,o as c,a as l,b as s,d as a,e as n,ap as e}from"./index-P7Lzo4Rg.js";const r={class:"markdown-body"},i=n("h2",{id:"internationalization",tabindex:"-1"},"Internationalization",-1),u=e(`<p>You can implement multilingual support using the <code>VeLocal</code> component, using <code>VeLocal.use</code> method toggles the currently used language.</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import language</span>
<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable/libs/locale/lang/en-US.js&quot;</span><span class="token punctuation">;</span>

VeLocale<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>enUS<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,2),d=e(`<p>Use <code>Locale.update</code> method to modify the default configs.</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> lang <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">goto</span><span class="token operator">:</span> <span class="token string">&quot;goto&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

VeLocale<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,2),g=n("div",{class:"tip"},[n("p",null,[a("1、import languages from “"),n("a",{href:"//unpkg.com/vue-fantable/libs/locale/lang/"},"//unpkg.com/vue-fantable/libs/locale/lang/"),a("”"),n("br"),a(" 2、Use "),n("code",null,"FanTable.VeLocale.use"),a(" method to switch languages."),n("br"),a(" 3、Language configs are fixed format "),n("code",null,"FanTable.lang.[Language config name]"),a(",[Language config name] does not contain the ‘-’ symbol, as shown in the following example")])],-1),k=n("pre",null,[n("code",null,`<script src="//unpkg.com/vue"><\/script>
<script src="//unpkg.com/vue-fantable"><\/script>
<script src="//unpkg.com/vue-fantable/src/libs/locale/lang/en-US.js"><\/script>
<script src="//unpkg.com/vue-fantable/src/libs/locale/lang/zh-CN.js"><\/script>

<script>
  // Switch to English
  FanTable.VeLocale.use(FanTable.lang.enUS);

  /*
  Switch to Chinese
  FanTable.VeLocale.use(FanTable.lang.zhCN);
  */
<\/script>
`)],-1),f=e('<p>The following languages are currently supported：</p><table><thead><tr><th>language</th><th>file name</th></tr></thead><tbody><tr><td>Simplified Chinese</td><td>zh-CN</td></tr><tr><td>Traditional Chinese (Traditional)</td><td>zh-TW</td></tr><tr><td>English</td><td>en-US</td></tr><tr><td>South Africa (Afrikaans)</td><td>af-ZA</td></tr><tr><td>South Africa (ZA)</td><td>zu-ZA</td></tr><tr><td>French(FR)</td><td>fr-FR</td></tr><tr><td>Brazilian Portuguese</td><td>pt-BR</td></tr><tr><td>Korean(KR)</td><td>ko-KR</td></tr><tr><td>Russian (RU)</td><td>ru-RU</td></tr></tbody></table><p>If you need to use other languages, you are welcome to contribute PR: just add a language configuration file in <a href="https://github.com/fall-zhang/vue-fantable/tree/master/packages/src/locale/lang">here</a>.</p>',3),v={__name:"locale",setup(h,{expose:o}){return o({frontmatter:{}}),(b,_)=>{const t=p("vue-anchor");return c(),l("div",r,[i,s(t,{"is-edit":"",label:"Switch Languages",fileName:""}),a(),u,s(t,{"is-edit":"",label:"Override Default Configs",fileName:""}),a(),d,s(t,{"is-edit":"",label:"Using By CDN",fileName:""}),a(),g,k,s(t,{"is-edit":"",label:"Languages Configs",fileName:""}),a(),f])}}};export{v as default};
