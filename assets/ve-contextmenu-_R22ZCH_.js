import{_ as u,r as m,o as p,a,e as t,z as r,b as c}from"./index-DhQICo8y.js";const s={data(){return{eventTarget:"",contextmenuType:"",options:[{label:"menu1",type:"menu1-type"},{label:"menu2",type:"menu2-type",children:[{label:"menu2-1",type:"menu2-1-type"},{label:"menu2-2",type:"menu2-2"}]},{type:"SEPARATOR"},{label:"menu3",type:"menu3-type"},{label:"menu4",disabled:!0,children:[{label:"menu4-1",type:"menu4-1-type"}]},{label:"menu5",type:"menu5-type",children:[{label:"menu5-1",type:"menu5-1-type",children:[{label:"menu5-1-1",type:"menu5-1-1-type",children:[{label:"menu5-1-1-1",type:"menu5-1-1-1-type"},{label:"menu5-1-1-2",type:"menu5-1-1-2-type"}]},{label:"menu5-2-2",type:"menu5-2-2-type"}]},{label:"menu5-2",disabled:!0},{type:"SEPARATOR"},{label:"menu5-3",type:"menu5-3-type"}]},{label:"menu6",type:"menu6-type",disabled:!0}]}},mounted(){this.eventTarget=this.$refs.contextmenuTargetRef},methods:{contextmenuClick(n){this.contextmenuType=n}}},y={id:"contextmenu-target",ref:"contextmenuTargetRef"},i=t("div",null,"右键点击此区域",-1),d={style:{"font-size":"30px",color:"red"}};function b(n,_,x,h,e,l){const o=m("ve-contextmenu",!0);return p(),a("div",null,[t("div",y,[i,t("div",d,r(e.contextmenuType),1)],512),c(o,{"event-target":e.eventTarget,options:e.options,onOnNodeClick:l.contextmenuClick},null,8,["event-target","options","onOnNodeClick"])])}const f=u(s,[["render",b]]);export{f as default};
