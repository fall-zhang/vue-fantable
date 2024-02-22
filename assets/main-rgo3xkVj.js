import{r as s,o as p,a as c,b as a,d as t,ap as y,w as d,e as n,_ as h}from"./index-g2bFAzY6.js";const _={class:"markdown-body"},v=y(`<p>引入 <code>VeContextmenu</code></p><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VeContextmenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-fantable&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeContextmenu<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>使用</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
    &lt;div&gt;
         &lt;div id=&quot;contextmenu-target&quot; ref=&quot;contextmenuTargetRef&quot;&gt;
            &lt;div&gt;右键点击此区域&lt;/div&gt;
        &lt;/div&gt;
        &lt;ve-contextmenu eventTarget=&quot;#contextmenu-target&quot; :options=&quot;options&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data() {
        return {
            eventTarget:&quot;&quot;,
            options: [
                    {
                        label: &quot;menu1&quot;,
                        type: &quot;menu1-type&quot;,
                    },
                    {
                        label: &quot;menu2&quot;,
                        type: &quot;menu2-type&quot;,
                        children: [
                            {
                                label: &quot;menu2-1&quot;,
                                type: &quot;menu2-1-type&quot;,
                            },
                            {
                                label: &quot;menu2-2&quot;,
                                type: &quot;menu2-2-type&quot;,
                            },
                        ],
                    },
                    {
                        type: &quot;SEPARATOR&quot;,
                    },
                    {
                        label: &quot;menu3&quot;,
                        type: &quot;menu3-type&quot;,
                    },
            ],
        };
    },
     mounted() {
            /*
            eventTarget can be the following case:
            1、this.eventTarget = &quot;#contextmenu-target&quot;;
            2、this.eventTarget = document.querySelector(&#39;#contextmenu-target&#39;);
            3、this.eventTarget = this.$refs[&quot;contextmenuTargetRef&quot;];
            */
            this.eventTarget = this.$refs[&quot;contextmenuTargetRef&quot;];
    },
};
&lt;/script&gt;
</code></pre>`,4),b={__name:"usage",setup(l,{expose:e}){return e({frontmatter:{}}),(r,k)=>{const o=s("vue-anchor");return p(),c("div",_,[a(o,{"is-edit":"",label:"使用方法",fileName:""}),t(),v])}}},x={class:"markdown-body"},q=n("p",null,[n("code",null,"type=SEPARATOR"),t("为分割线")],-1),f=n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenu-target"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenuTargetRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("右键点击此区域"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t("30px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t("red"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ contextmenuType }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ve-contextmenu")]),t(),n("span",{class:"token attr-name"},":event-target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("eventTarget"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@on-node-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("contextmenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ve-contextmenu")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"eventTarget"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// contextmenu type"),t(`
      `),n("span",{class:"token literal-property property"},"contextmenuType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// contextmenu options"),t(`
      `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu1-type'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu2'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu2-type'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu2-1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu2-1-type'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu2-2'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu2-2'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'SEPARATOR'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu3'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu3-type'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu4'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu4-1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu4-1-type'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-type'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-type'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1-type'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1-1-type'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1-2'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu5-1-1-2-type'"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
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
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu6'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'menu6-type'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"mounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},`/*
            eventTarget can be the following case:
            1、this.eventTarget = "#contextmenu-target";
            2、this.eventTarget = document.querySelector('#contextmenu-target');
            3、this.eventTarget = this.$refs["contextmenuTargetRef"];
            */`),t(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("eventTarget "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$refs"),n("span",{class:"token punctuation"},"."),t(`contextmenuTargetRef
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"contextmenuClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"type"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("contextmenuType "),n("span",{class:"token operator"},"="),t(` type
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#contextmenu-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" column"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #eee"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 3px dashed #666"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),T=n("p",null,"ve-contextmenu/ve-contextmenu",-1),w={__name:"base",setup(l,{expose:e}){return e({frontmatter:{}}),(r,k)=>{const o=s("vue-anchor"),i=s("demo-block");return p(),c("div",x,[a(o,{"is-edit":"",label:"基础示例",fileName:""}),t(),a(i,{filePath:"ve-contextmenu/ve-contextmenu",sourceCode:""},{description:d(()=>[q]),code:d(()=>[f]),default:d(()=>[T]),_:1})])}}},R={class:"markdown-body"},$=y('<h3 id="props" tabindex="-1">props</h3><p>| 参数 | 说明 | 类型 | 可选值 | 默认值 | | ----------- | ---------------------------------------------- | ------------ | ------- | ------ | — | | eventTarget | 设置右键菜单作用的元素 | <code>HTMLElement | String</code> | - | - | | options | 右键菜单项。支持无限层级树形结构，具体结构如下 | <code>Array</code> | - | - |</p><h3 id="options" tabindex="-1">options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>展示的菜单名称</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>type</td><td>菜单类型，内置分隔符类型为‘SEPARATOR’。将会作为点击后回调的参数</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>禁用当前菜单，点击无效</td><td><code>Boolean</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="event" tabindex="-1">Event</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>on-node-click</td><td>菜单点击回调</td><td>当前点击的菜单类型</td></tr></tbody></table><h3 id="instance-methods" tabindex="-1">Instance Methods</h3><table><thead><tr><th>实例名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>hideContextmenu</td><td>隐藏当前右键菜单</td><td>-</td></tr></tbody></table>',8),A={__name:"api",setup(l,{expose:e}){return e({frontmatter:{}}),(r,k)=>{const o=s("vue-anchor");return p(),c("div",R,[a(o,{"is-edit":"",label:"API",fileName:""}),t(),$])}}},S={components:{Usage:b,Base:w,Api:A}},C=n("h2",null,"Contextmenu 右键菜单",-1);function V(l,e,u,r,k,o){const i=s("Usage"),m=s("Base"),g=s("Api");return p(),c("div",null,[C,a(i),a(m),a(g)])}const B=h(S,[["render",V]]);export{B as default};
