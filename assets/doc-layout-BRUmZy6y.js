import{_ as S,ah as I,ai as N,aj as z,o as i,a as h,H as L,L as y,e as a,z as p,v as $,d as g,F as C,G as j,y as A,ak as B,al as W,k as q,b as m,am as O,r as k,w as x,c as _,x as D,an as U}from"./index-WVU3T6XN.js";const E={name:"VueCatalog",mixins:[I],props:{catalogData:{type:Array,required:!0},showCatalogList:{type:Boolean,default:!0}},data(){return{showCatalogList2:this.showCatalogList}},computed:{catalogTitle(){return N[this.currentDocLang].anchorCatalogTitle}},methods:{goAnchor(t){z(this,t)},toggleCatalogList(){this.showCatalogList2=!this.showCatalogList2}}},V=t=>(B("data-v-30104ca7"),t=t(),W(),t),M={key:0,class:"catalog-container"},G={class:"catalog-ul"},K=V(()=>a("i",{class:"catalog-li-title-down icon iconfont icon-shouqi1"},null,-1)),P=["title"],Z=["onClick"];function J(t,o,r,e,n,s){return r.catalogData&&r.catalogData.length>0?(i(),h("div",M,[L(a("div",{class:"catalog-corner",onClick:o[0]||(o[0]=$(c=>s.toggleCatalogList(),["stop"]))},[a("span",null,p(s.catalogTitle),1)],512),[[y,!n.showCatalogList2]]),L(a("ul",G,[a("li",{class:"catalog-li-title",onClick:o[1]||(o[1]=$(c=>s.toggleCatalogList(),["stop"]))},[g(p(s.catalogTitle)+" ",1),K]),(i(!0),h(C,null,j(r.catalogData,(c,u)=>(i(),h("li",{key:u,title:c.label,class:"catalog-li"},[a("a",{href:"javascript:void(0);",onClick:$(f=>s.goAnchor(c.id),["stop"])},p(c.label),9,Z)],8,P))),128))],512),[[y,n.showCatalogList2]])])):A("",!0)}const Q=S(E,[["render",J],["__scopeId","data-v-30104ca7"]]),R={},X=t=>(B("data-v-d3073b34"),t=t(),W(),t),Y={class:"main-footer"},tt=X(()=>a("div",null,[g("        "),a("span",null,[g(" Created by "),a("a",{href:"https://github.com/huangshuwei"},"huangshuwei"),g(", Updated by "),a("a",{href:"https://github.com/fall-zhang"},"Fall")])],-1)),et=[tt];function ot(t,o){return i(),h("div",Y,et)}const nt=S(R,[["render",ot],["__scopeId","data-v-d3073b34"]]);var st={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function at(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function rt(t,o,r){var e=typeof o.fill=="string"?[o.fill]:o.fill||[],n=[],s=o.theme||r.theme;switch(s){case"outline":n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push("none"),n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push("none");break;case"filled":n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push("#FFF"),n.push("#FFF");break;case"two-tone":n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone),n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone);break;case"multi-color":n.push(typeof e[0]=="string"?e[0]:"currentColor"),n.push(typeof e[1]=="string"?e[1]:r.colors.multiColor.outFillColor),n.push(typeof e[2]=="string"?e[2]:r.colors.multiColor.innerStrokeColor),n.push(typeof e[3]=="string"?e[3]:r.colors.multiColor.innerFillColor);break}return{size:o.size||r.size,strokeWidth:o.strokeWidth||r.strokeWidth,strokeLinecap:o.strokeLinecap||r.strokeLinecap,strokeLinejoin:o.strokeLinejoin||r.strokeLinejoin,colors:n,id:t}}var lt=Symbol("icon-context");function it(t,o,r){var e={name:"icon-"+t,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(s){var c=at(),u=q(lt,st);return function(){var f=s.size,F=s.strokeWidth,b=s.strokeLinecap,l=s.strokeLinejoin,v=s.theme,d=s.fill,T=s.spin,H=rt(c,{size:f,strokeWidth:F,strokeLinecap:b,strokeLinejoin:l,theme:v,fill:d},u),w=[u.prefix+"-icon"];return w.push(u.prefix+"-icon-"+t),o&&u.rtl&&w.push(u.prefix+"-icon-rtl"),T&&w.push(u.prefix+"-icon-spin"),m("span",{class:w.join(" ")},[r(H)])}}};return e}const ct=it("up-one",!1,function(t){return m("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[m("path",{d:"M12 29L24 17L36 29H12Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null)])}),ut={name:"App",components:{Footer:nt,catolog:Q,UpOne:ct},mixins:[I],data(){return{showBackTop:!1,catalogData:[],showHide:!1}},computed:{routerConfig(){return O[this.currentDocLang]}},watch:{$route:{handler:function(t,o){this.anchorLink(t),this.enableHideComp(t)},immediate:!0}},mounted(){document.addEventListener("scroll",this.handleScroll)},beforeUnmount(){document.removeEventListener("scroll",this.handleScroll)},methods:{onBackTop(){window.scroll(0,0)},handleScroll(){const t=document.documentElement.scrollTop||document.body.scrollTop||window.scrollHeight;this.showBackTop=t>600},anchorLink(t){const o=t.query;o&&o.anchor&&this.$nextTick(r=>{z(this,o.anchor)}),this.$nextTick(r=>{const e=this.$el.querySelectorAll(".anchor-link"),n=[];if(e&&e.length>0)for(let s=0,c=e.length;s<c;s++)n.push({id:e[s].id,label:e[s].getAttribute("label")});this.catalogData=n})},enableHideComp(t){const o=t.query;o.showHide&&o.showHide===1&&(this.showHide=!0)}}},ht={class:"main-wrapper"},dt={class:"main-wrapper-sidebar"},pt={class:"menu-root"},mt={class:"main-wrapper-sidebar-link",href:"javascript:javascript:void(0);"},kt={class:"menu-sub"},_t={class:"main-wrapper-container"};function gt(t,o,r,e,n,s){const c=k("router-link"),u=k("router-view"),f=k("Footer"),F=k("UpOne"),b=k("catolog");return i(),h("div",null,[a("div",ht,[a("div",dt,[a("ul",pt,[(i(!0),h(C,null,j(s.routerConfig,(l,v)=>(i(),h(C,null,[l.children?(i(),h("li",{key:v},[a("a",mt,p(l.name),1),a("ul",kt,[(i(!0),h(C,null,j(l.children,(d,T)=>(i(),_(c,{key:T,to:`/${t.currentDocLang}/doc/${l.path}/${d.path}`},{default:x(()=>[a("li",null,[a("a",null,[g(p(d.name)+" ",1),L(a("span",{class:"version"},p(d.meta&&d.meta.version),513),[[y,d.meta&&d.meta.version]])])])]),_:2},1032,["to"]))),128))])])):!l.meta||!l.meta.hide?(i(),_(c,{key:v+"",class:"no-child",to:`/${t.currentDocLang}/doc/${l.path}`},{default:x(()=>[a("li",null,[a("a",null,p(l.name),1)])]),_:2},1032,["to"])):A("",!0)],64))),256))])]),a("div",_t,[m(u,null,{default:x(({Component:l})=>[t.$route.meta.keepAlive?(i(),_(U,{key:0},[(i(),_(D(l)))],1024)):(i(),_(D(l),{key:1}))]),_:1})]),m(f)]),L(a("div",{class:"main-back-top",onClick:o[0]||(o[0]=l=>s.onBackTop())},[m(F,{theme:"outline",size:"28",fill:"#000000",strokeWidth:2,strokeLinejoin:"bevel",strokeLinecap:"butt"})],512),[[y,n.showBackTop]]),a("div",null,[m(b,{"catalog-data":n.catalogData},null,8,["catalog-data"])])])}const vt=S(ut,[["render",gt],["__scopeId","data-v-19ac754f"]]);export{vt as default};
