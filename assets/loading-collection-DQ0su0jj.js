import{_ as c,r as l,o,c as r,w as d,e as s,a as t,G as _,B as u,F as p}from"./index-BgIuBINE.js";const g={name:"FanLoading",data(){return{SPIN_NAMES:{PLANE:"plane",GRID:"grid",WAVE:"wave",FLOW:"flow",BOUNCE:"bounce",PULSE:"pulse"}}},mounted(){Object.values(this.SPIN_NAMES).forEach(e=>{this.$veLoading({target:`#loading-${e}`,name:e}).show()})}},f={class:"loading-container"},h=["id"],v={class:"loading-name"};function m(e,E,N,S,n,B){const i=l("vue-anchor");return o(),r(i,{label:"loading 集合","is-edit":!1},{default:d(()=>[s("div",f,[(o(!0),t(p,null,_(Object.values(n.SPIN_NAMES),a=>(o(),t("div",{key:a,class:"loading-item"},[s("div",{id:"loading-"+a,class:"loading-item-spin"},null,8,h),s("span",v,u(a),1)]))),128))])]),_:1})}const w=c(g,[["render",m],["__scopeId","data-v-76f10081"]]);export{w as default};
