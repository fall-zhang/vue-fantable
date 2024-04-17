import{r as o,o as u,a as r,b as a,d as s,w as e,e as n,aq as p}from"./index-CvE8Fbe-.js";const k={class:"markdown-body"},i=n("h2",{id:"%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B",tabindex:"-1"},"快速开始",-1),g=p(`<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> vue-fantable
</code></pre><p>或者</p><pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> vue-fantable
</code></pre>`,3),y=p(`<h4 id="%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5" tabindex="-1">完整引入</h4><p>在 main.js 中写入以下内容：</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入样式</span>
<span class="token keyword">import</span> <span class="token string">&quot;vue-fantable/libs/theme-default.css&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入组件库</span>
<span class="token keyword">import</span> VueFantable <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueFantable<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>以上代码便完成了 vue-fantable 的引入。别忘了引入样式文件。</p><h4 id="%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5" tabindex="-1">按需引入</h4><p>在 main.js 中写入以下内容：</p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入样式</span>
<span class="token keyword">import</span> <span class="token string">&quot;vue-fantable/libs/theme-default.css&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入组件库</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FanTable<span class="token punctuation">,</span> VePagination<span class="token punctuation">,</span> VeIcon<span class="token punctuation">,</span> VeLoading<span class="token punctuation">,</span> VeLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FanTable<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VePagination<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeLoading<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$veLoading <span class="token operator">=</span> VeLoading<span class="token punctuation">;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$veLocale <span class="token operator">=</span> VeLocale<span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h4 id="%E7%A4%BA%E4%BE%8B" tabindex="-1">示例</h4>`,8),d=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("fan-table")]),s(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("columns"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":table-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tableData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"columns"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'center'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'date'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Date'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'left'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hobby'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Address'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tableData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'John'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1900-05-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shanghai'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Dickerson'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1910-06-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Beijing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Larsen'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2000-07-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Chongqing'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Geneva'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2010-08-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Xiamen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jami'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2020-09-20'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"hobby"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'coding and coding repeat'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'No.1 Century Avenue, Shenzhen'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),q=n("p",null,"start-example",-1),m=p(`<p>通过 <a href="https://unpkg.com/vue-fantable/">https://unpkg.com/vue-fantable/</a> 可以看到 vue-fantable 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：</p><pre class="language-css"><code class="language-css">&lt;!-- 引入样式 --&gt;
&lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> href=<span class="token string">&quot;https://unpkg.com/vue-fantable/libs/theme-default.css&quot;</span>&gt;
&lt;!-- 引入Vue --&gt;
&lt;script src=<span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue@2&quot;</span>&gt;&lt;/script&gt;
&lt;!-- 引入组件库 --&gt;
&lt;script src=<span class="token string">&quot;https://unpkg.com/vue-fantable/libs/umd/index.js&quot;</span>&gt;&lt;/script&gt;
</code></pre><h4 id="%E7%A4%BA%E4%BE%8B-1" tabindex="-1">示例</h4><pre class="language-html"><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!-- 引入样式 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
            <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-fantable/libs/theme-default.css<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fan-table</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:table-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fan-table</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入 Vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入组件库 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-fantable/libs/umd/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;hobby&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Hobby&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Address&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&quot;1900-05-20&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Shanghai&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Dickerson&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&quot;1910-06-20&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Beijing&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Larsen&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&quot;2000-07-20&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Chongqing&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Geneva&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&quot;2010-08-20&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Xiamen&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jami&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&quot;2020-09-20&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Shenzhen&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,4),_={__name:"start",setup(b,{expose:c}){return c({frontmatter:{}}),(f,v)=>{const t=o("vue-anchor"),l=o("demo-block");return u(),r("div",k,[i,a(t,{"is-edit":"",label:"npm & yarn 安装",fileName:""}),s(),g,a(t,{"is-edit":"",label:"使用",fileName:""}),s(),y,a(l,{filePath:"start-example",sourceCode:""},{code:e(()=>[d]),default:e(()=>[q]),_:1}),a(t,{"is-edit":"",label:"CDN 方式使用",fileName:""}),s(),m])}}};export{_ as default};
