import{_ as o,r as s,o as a,a as r,e,b as c}from"./index-crzR-Bjn.js";const u={data(){return{eventTarget:"",options:[{label:"menu1",type:"menu1-type"},{label:"menu2",type:"menu2-type",children:[{label:"menu2-1",type:"menu2-1-type"},{label:"menu2-2",type:"menu2-2-type"}]},{type:"SEPARATOR"},{label:"menu3",type:"menu3-type"}]}},mounted(){this.eventTarget=this.$refs.contextmenuTargetRef}},p={id:"contextmenu-target",ref:"contextmenuTargetRef"},m=e("div",null,"右键点击此区域",-1),l=[m];function i(_,d,y,f,t,x){const n=s("ve-contextmenu");return a(),r("div",null,[e("div",p,l,512),c(n,{"event-target":"#contextmenu-target",options:t.options},null,8,["options"])])}const g=o(u,[["render",i]]);export{g as default};
