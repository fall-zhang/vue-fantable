import{_ as t,o,a as s,e as a}from"./index-X6yBs7pR.js";const l={data(){return{loadingInstance:null}},mounted(){this.loadingInstance=this.$veLoading({fullscreen:!0,name:"bounce",lock:!0})},unmounted(){this.loadingInstance.destroy()},methods:{show(){this.loadingInstance.show(),setTimeout(()=>{this.loadingInstance.close()},2e3)}}};function c(d,e,r,i,u,n){return o(),s("div",null,[a("button",{class:"button-demo",onClick:e[0]||(e[0]=m=>n.show())},"开启 Loading")])}const h=t(l,[["render",c]]);export{h as default};
