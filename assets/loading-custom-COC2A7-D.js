import{_ as s,o as a,a as l,e as o}from"./index-BWOAprk1.js";const d={data(){return{loadingInstance:null}},mounted(){this.loadingInstance=this.$veLoading({target:document.querySelector("#custom-loading-container"),name:"wave",color:"#fff",tip:"loading...",overlayBackgroundColor:"rgba(255, 255, 255, 0.1)"}),this.show()},unmounted(){this.loadingInstance.destroy()},methods:{show(){this.loadingInstance.show()},close(){this.loadingInstance.close()}}},i=o("br",null,null,-1),c=o("br",null,null,-1),r=o("div",{id:"custom-loading-container",style:{width:"100%",height:"250px","background-color":"#2980b9"}},null,-1);function u(g,n,h,m,_,t){return a(),l("div",null,[o("button",{class:"button-demo",onClick:n[0]||(n[0]=e=>t.show())},"开启 Loading"),o("button",{class:"button-demo",onClick:n[1]||(n[1]=e=>t.close())},"关闭 Loading"),i,c,r])}const f=s(d,[["render",u]]);export{f as default};
