import{r as a,o as p,a as t,b as o,aq as e}from"./index-5MF4L8d4.js";const r={class:"markdown-body"},c=e(`<p>引入 <code>FanTable</code></p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FanTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FanTable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>使用</p><pre class="language-javascript"><code class="language-javascript"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>fan<span class="token operator">-</span>table <span class="token operator">:</span>columns<span class="token operator">=</span><span class="token string">&quot;columns&quot;</span> <span class="token operator">:</span>table<span class="token operator">-</span>data<span class="token operator">=</span><span class="token string">&quot;tableData&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;hobby&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Hobby&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Address&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token string">&quot;1900-05-20&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Shanghai&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Dickerson&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token string">&quot;1910-06-20&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Beijing&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Larsen&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token string">&quot;2000-07-20&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Chongqing&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Geneva&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token string">&quot;2010-08-20&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Xiamen&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jami&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token string">&quot;2020-09-20&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&quot;coding and coding repeat&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Century Avenue, Shenzhen&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre>`,4),q={__name:"main",setup(l,{expose:n}){return n({frontmatter:{}}),(k,i)=>{const s=a("vue-anchor");return p(),t("div",r,[o(s,{label:"用法"}),c])}}};export{q as default};
