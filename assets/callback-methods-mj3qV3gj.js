import{_ as a,r,o as i,c,w as d,e as p}from"./index-5MF4L8d4.js";const b={data(){return{options:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}},methods:{beforeVisibleChange({nextVisible:e}){console.log("nextVisible::",e)}}},u=p("div",{style:{color:"blue",cursor:"pointer"}},"点击这里",-1);function _(e,o,f,m,l,s){const t=r("ve-dropdown");return i(),c(t,{modelValue:l.options,"onUpdate:modelValue":o[0]||(o[0]=n=>l.options=n),"hide-by-item-click":"","before-visible-change":s.beforeVisibleChange},{default:d(()=>[u]),_:1},8,["modelValue","before-visible-change"])}const h=a(b,[["render",_]]);export{h as default};
