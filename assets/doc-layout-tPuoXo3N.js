import{_ as C,ai as x,aj as F,ak as A,o,a as c,H as v,L as w,e as t,z as d,v as f,d as _,F as g,G as $,y as B,al as S,am as H,an as V,r as m,b as y,w as L,c as p,x as D,ah as j}from"./index-P7Lzo4Rg.js";const E={name:"VueCatalog",mixins:[x],props:{catalogData:{type:Array,required:!0},showCatalogList:{type:Boolean,default:!0}},data(){return{showCatalogList2:this.showCatalogList}},computed:{catalogTitle(){return F[this.currentDocLang].anchorCatalogTitle}},methods:{goAnchor(e){A(this,e)},toggleCatalogList(){this.showCatalogList2=!this.showCatalogList2}}},N=e=>(S("data-v-30104ca7"),e=e(),H(),e),z={key:0,class:"catalog-container"},M={class:"catalog-ul"},U=N(()=>t("i",{class:"catalog-li-title-down icon iconfont icon-shouqi1"},null,-1)),G=["title"],K=["onClick"];function J(e,a,h,r,i,s){return h.catalogData&&h.catalogData.length>0?(o(),c("div",z,[v(t("div",{class:"catalog-corner",onClick:a[0]||(a[0]=f(n=>s.toggleCatalogList(),["stop"]))},[t("span",null,d(s.catalogTitle),1)],512),[[w,!i.showCatalogList2]]),v(t("ul",M,[t("li",{class:"catalog-li-title",onClick:a[1]||(a[1]=f(n=>s.toggleCatalogList(),["stop"]))},[_(d(s.catalogTitle)+" ",1),U]),(o(!0),c(g,null,$(h.catalogData,(n,k)=>(o(),c("li",{key:k,title:n.label,class:"catalog-li"},[t("a",{href:"javascript:void(0);",onClick:f(b=>s.goAnchor(n.id),["stop"])},d(n.label),9,K)],8,G))),128))],512),[[w,i.showCatalogList2]])])):B("",!0)}const O=C(E,[["render",J],["__scopeId","data-v-30104ca7"]]),P={},Q=e=>(S("data-v-d3073b34"),e=e(),H(),e),R={class:"main-footer"},W=Q(()=>t("div",null,[_("        "),t("span",null,[_(" Created by "),t("a",{href:"https://github.com/huangshuwei"},"huangshuwei"),_(", Updated by "),t("a",{href:"https://github.com/fall-zhang"},"Fall")])],-1)),X=[W];function Y(e,a){return o(),c("div",R,X)}const Z=C(P,[["render",Y],["__scopeId","data-v-d3073b34"]]),tt={name:"App",components:{Footer:Z,catolog:O},mixins:[x],data(){return{showBackTop:!1,catalogData:[],showHide:!1}},computed:{routerConfig(){return V[this.currentDocLang]}},watch:{$route:{handler:function(e,a){this.anchorLink(e),this.enableHideComp(e)},immediate:!0}},mounted(){document.addEventListener("scroll",this.handleScroll)},beforeUnmount(){document.removeEventListener("scroll",this.handleScroll)},methods:{goBackTop(){window.scroll(0,0)},handleScroll(){const e=document.documentElement.scrollTop||document.body.scrollTop||window.scrollHeight;this.showBackTop=e>600},anchorLink(e){const a=e.query;a&&a.anchor&&this.$nextTick(h=>{A(this,a.anchor)}),this.$nextTick(h=>{const r=this.$el.querySelectorAll(".anchor-link"),i=[];if(r&&r.length>0)for(let s=0,n=r.length;s<n;s++)i.push({id:r[s].id,label:r[s].getAttribute("label")});this.catalogData=i})},enableHideComp(e){const a=e.query;a.showHide&&a.showHide===1&&(this.showHide=!0)}}},et={class:"main-wrapper"},at={class:"main-wrapper-sidebar"},ot={class:"menu-root"},st={class:"main-wrapper-sidebar-link",href:"javascript:javascript:void(0);"},lt={class:"menu-sub"},nt={class:"main-wrapper-container"},ct={class:"main-back-top"};function it(e,a,h,r,i,s){const n=m("router-link"),k=m("router-view"),b=m("Footer"),I=m("catolog");return o(),c("div",null,[t("div",et,[t("div",at,[t("ul",ot,[(o(!0),c(g,null,$(s.routerConfig,(l,T)=>(o(),c(g,null,[l.children?(o(),c("li",{key:T},[t("a",st,d(l.name),1),t("ul",lt,[(o(!0),c(g,null,$(l.children,(u,q)=>(o(),p(n,{key:q,to:`/${e.currentDocLang}/doc/${l.path}/${u.path}`},{default:L(()=>[t("li",null,[t("a",null,[_(d(u.name)+" ",1),v(t("span",{class:"version"},d(u.meta&&u.meta.version),513),[[w,u.meta&&u.meta.version]])])])]),_:2},1032,["to"]))),128))])])):!l.meta||!l.meta.hide?(o(),p(n,{key:T+"",class:"no-child",to:`/${e.currentDocLang}/doc/${l.path}`},{default:L(()=>[t("li",null,[t("a",null,d(l.name),1)])]),_:2},1032,["to"])):B("",!0)],64))),256))])]),t("div",nt,[y(k,null,{default:L(({Component:l})=>[e.$route.meta.keepAlive?(o(),p(j,{key:0},[(o(),p(D(l)))],1024)):(o(),p(D(l),{key:1}))]),_:1})]),y(b)]),t("div",null,[v(t("div",ct,[t("i",{class:"icon iconfont icon-huidaodingbu-copy main-back-top-icon",onClick:a[0]||(a[0]=l=>s.goBackTop())})],512),[[w,i.showBackTop]])]),t("div",null,[y(I,{"catalog-data":i.catalogData},null,8,["catalog-data"])])])}const dt=C(tt,[["render",it]]);export{dt as default};
