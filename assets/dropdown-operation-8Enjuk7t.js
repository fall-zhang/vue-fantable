import{_ as s,r as i,o as a,c,w as d,e as p}from"./index-crzR-Bjn.js";const f={data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四",selected:!0},{value:2,label:"王二"}]}},methods:{filterConfirm(e){console.log(e)},filterReset(e){console.log(e)}}},u=p("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);function m(e,o,_,v,t,r){const l=i("ve-dropdown");return a(),c(l,{modelValue:t.options,"onUpdate:modelValue":o[0]||(o[0]=n=>t.options=n),"show-operation":"","confirm-filter-text":"筛选","reset-filter-text":"重置","is-multiple":"",onOnFilterConfirm:r.filterConfirm,onOnFilterReset:r.filterReset},{default:d(()=>[u]),_:1},8,["modelValue","onOnFilterConfirm","onOnFilterReset"])}const x=s(f,[["render",m]]);export{x as default};
