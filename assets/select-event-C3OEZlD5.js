import{_ as c,r as a,o as r,c as m}from"./index-BWOAprk1.js";const u={data(){return{selectItems1:[{value:0,label:"张三"},{value:1,label:"李四"},{value:2,label:"王二"}]}},methods:{selectChange(e){console.log("items::",e)}}};function p(e,l,_,d,t,o){const s=a("ve-select");return r(),m(s,{modelValue:t.selectItems1,"onUpdate:modelValue":l[0]||(l[0]=n=>t.selectItems1=n),placeholder:"姓名",onOnSelectChange:o.selectChange},null,8,["modelValue","onOnSelectChange"])}const f=c(u,[["render",p]]);export{f as default};
