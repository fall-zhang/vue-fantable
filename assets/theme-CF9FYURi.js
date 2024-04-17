import{r as o,o as l,a as r,b as t,d as s,e,aq as i}from"./index-CvE8Fbe-.js";const p={class:"markdown-body"},d=e("h2",{id:"%E4%B8%BB%E9%A2%98%E5%AE%9A%E5%88%B6",tabindex:"-1"},"主题定制",-1),c=e("p",null,"默认提供了两套主题，蓝色主题和暗黑主题",-1),u=e("h4",{id:"%E4%BD%BF%E7%94%A8%E8%93%9D%E8%89%B2%E4%B8%BB%E9%A2%98",tabindex:"-1"},"使用蓝色主题",-1),m=e("p",null,"引入蓝色主题样式",-1),b=e("pre",null,[e("code",null,`import "vue-fantable/libs/theme-default/index.css";
`)],-1),h=e("h4",{id:"%E4%BD%BF%E7%94%A8%E6%9A%97%E9%BB%91%E4%B8%BB%E9%A2%98",tabindex:"-1"},"使用暗黑主题",-1),E=e("pre",null,[e("code",null,`import "vue-fantable/libs/theme-dark/index.css";
`)],-1),f=i(`<p>vue-fantable 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。</p><h4 id="%E9%80%89%E6%8B%A9%E8%93%9D%E8%89%B2%E4%B8%BB%E9%A2%98%E5%AE%9A%E5%88%B6" tabindex="-1">选择蓝色主题定制</h4><p>如果你需要的主题和蓝色主题接近，你可以选择按照蓝色主题定制。所有蓝色主题样式变量可以在 <strong><a href="https://github.com/fall-zhang/vue-fantable/blob/master/packages/theme-default/var.less">这里找到</a></strong>。</p><p>建创建一个单独的 less 变量文件，例如 vue-fantable-variables.less，引入这个文件覆盖 var.less 里的变量。</p><pre><code>@import &#39;~vue-fantable/packages/theme-default/index.less&#39;; // 引入官方提供的 less 样式入口文件
@import &#39;your-theme-file.less&#39;; // 用于覆盖上面定义的变量
</code></pre><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 vue-fantable 编译好的 CSS 文件）：</p><pre><code>import Vue from &#39;vue&#39;
import VueFantable from &#39;vue-fantable&#39;
import &#39;./vue-fantable-variables.less&#39;

Vue.use(VueFantable)
</code></pre><h4 id="%E9%80%89%E6%8B%A9%E6%9A%97%E9%BB%91%E4%B8%BB%E9%A2%98%E5%AE%9A%E5%88%B6" tabindex="-1">选择暗黑主题定制</h4><p>如果你需要的主题和暗黑主题接近，你可以选择按照暗黑主题定制。所有暗黑主题样式变量可以在 <strong><a href="https://github.com/fall-zhang/vue-fantable/blob/master/packages/theme-dark/var.less">这里找到</a></strong>。</p><p>建创建一个单独的 less 变量文件，例如 vue-fantable-variables.less，引入这个文件覆盖 var.less 里的变量。</p><pre><code>@import &#39;~vue-fantable/packages/theme-dark/index.less&#39;; // 引入官方提供的 less 样式入口文件
@import &#39;your-theme-file.less&#39;; // 用于覆盖上面定义的变量
</code></pre><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 vue-fantable 编译好的 CSS 文件）：</p><pre><code>import Vue from &#39;vue&#39;
import VueFantable from &#39;vue-fantable&#39;
import &#39;./vue-fantable-variables.less&#39;

Vue.use(VueFantable)
</code></pre>`,13),g={__name:"theme",setup(B,{expose:n}){return n({frontmatter:{}}),(_,A)=>{const a=o("vue-anchor");return l(),r("div",p,[d,t(a,{"is-edit":"",label:"内置主题",fileName:""}),s(),c,u,m,b,h,E,t(a,{"is-edit":"",label:"主题定制",fileName:""}),s(),f])}}};export{g as default};
