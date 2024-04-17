import{r as l,o as r,a as n,b as o,d as a,e,aq as i}from"./index-CvE8Fbe-.js";const h={class:"markdown-body"},d=e("h2",{id:"theme-custom",tabindex:"-1"},"Theme Custom",-1),m=e("p",null,"By default, two sets of themes are provided, blue theme and dark theme",-1),u=e("h4",{id:"use-blue-theme",tabindex:"-1"},"Use Blue Theme",-1),c=e("p",null,"import blue theme style",-1),p=e("pre",null,[e("code",null,`import "vue-fantable/libs/theme-default.css";
`)],-1),f=e("h4",{id:"use-dark-theme",tabindex:"-1"},"Use Dark Theme",-1),b=e("p",null,"import dark theme style",-1),v=e("pre",null,[e("code",null,`import "vue-fantable/libs/theme-dark/index.css";
`)],-1),_=i(`<p>The style of vue-fantable uses less as the development language,A series of global / component style variables are defined,You can adjust to your needs.</p><h4 id="choose-blue-theme-to-customize" tabindex="-1">Choose Blue Theme To Customize</h4><p>If the theme you need is close to the blue theme,You can choose to customize according to the blue theme.All blue theme style variables <strong><a href="https://github.com/fall-zhang/vue-fantable/blob/master/packages/theme-default/var.less">Can Be Found Here</a>.</strong></p><p>Create a less variable file,For example “vue-fantable-variables.less”,Introduce this file overlay var.less The variables in.</p><pre><code>@import &#39;~vue-fantable/packages/theme-default/index.less&#39;; // import the official less style entry file
@import &#39;your-theme-file.less&#39;; // Used to override the variables defined above
</code></pre><p>Then, in the entry file of the project, you can directly import the above style files(there is no need to import the compiled CSS file of vue-fantable)</p><pre><code>import Vue from &#39;vue&#39;
import VueFantable from &#39;vue-fantable&#39;
import &#39;./vue-fantable-variables.less&#39;

Vue.use(VueFantable)
</code></pre><h4 id="choose-dark-theme-to-customize" tabindex="-1">Choose Dark Theme To Customize</h4><p>If the theme you need is close to the dark theme,You can choose to customize according to the dark theme.All dark theme style variables can be found <strong><a href="https://github.com/fall-zhang/vue-fantable/blob/master/packages/theme-dark/var.less">Can Be Found Here</a></strong>.</p><p>Create a less variable file,For example “vue-fantable-variables.less”,Introduce this file overlay var.less The variables in.</p><pre><code>@import &#39;~vue-fantable/packages/theme-dark/index.less&#39;; // import the official less style entry file
@import &#39;your-theme-file.less&#39;; // Used to override the variables defined above
</code></pre><p>Then, in the entry file of the project, you can directly import the above style files(there is no need to import the compiled CSS file of vue-fantable)</p><pre><code>import Vue from &#39;vue&#39;
import VueFantable from &#39;vue-fantable&#39;
import &#39;./vue-fantable-variables.less&#39;

Vue.use(VueFantable)
</code></pre>`,13),C={__name:"theme",setup(y,{expose:s}){return s({frontmatter:{}}),(g,x)=>{const t=l("vue-anchor");return r(),n("div",h,[d,o(t,{"is-edit":"",label:"Built in themes",fileName:""}),a(),m,u,c,p,f,b,v,o(t,{"is-edit":"",label:"Theme Custom",fileName:""}),a(),_])}}};export{C as default};
