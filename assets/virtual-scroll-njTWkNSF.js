import{_ as l,r,o as n,a as s,b as i}from"./index-DhQICo8y.js";const d={data(){return{virtualScrollOption:{enable:!0},columns:[{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{initData(){const t=[];for(let e=0;e<1e4;e++)t.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=t,this.footerData=[{rowKey:0,name:"平均值",date:1100,hobby:1200,address:1300},{rowKey:1,name:"汇总值",date:701e3,hobby:801e3,address:801e3}]}}};function c(t,e,b,f,a,m){const o=r("fan-table");return n(),s("div",null,[i(o,{"fixed-header":"","max-height":500,"virtual-scroll-option":a.virtualScrollOption,columns:a.columns,"table-data":a.tableData,"footer-data":t.footerData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data","footer-data"])])}const h=l(d,[["render",c]]);export{h as default};
