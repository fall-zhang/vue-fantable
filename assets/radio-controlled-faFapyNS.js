import{_ as d,r as l,o as r,a as i,e,b as c,w as _,d as u,z as h}from"./index-X6yBs7pR.js";const p={data(){return{radioVal:!1}},methods:{radioChange(o){this.radioVal=o,console.log("radioChange::",o)},test(){this.radioVal=!this.radioVal}}},C=e("div",{class:"bold"},"受控单选",-1),V=e("br",null,null,-1);function f(o,a,m,g,t,s){const n=l("ve-radio");return r(),i("div",null,[e("div",null,[C,e("button",{class:"button-demo",onClick:a[0]||(a[0]=v=>s.test())},"测试"),V,c(n,{"is-controlled":"","is-selected":t.radioVal,onOnRadioChange:s.radioChange},{default:_(()=>[u(" Radio ")]),_:1},8,["is-selected","onOnRadioChange"]),e("div",null,h(t.radioVal),1)])])}const x=d(p,[["render",f]]);export{x as default};
