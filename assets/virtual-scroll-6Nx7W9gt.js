import{_ as o,r as n,o as i,a as r,b as s}from"./index-P7Lzo4Rg.js";const d={data(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{initData(){const t=[];for(let e=0;e<1e4;e++)t.push({rowKey:e,index:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=t}}};function c(t,e,b,f,a,u){const l=n("fan-table");return i(),r("div",null,[s(l,{"max-height":500,"virtual-scroll-option":a.virtualScrollOption,columns:a.columns,"table-data":a.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}const p=o(d,[["render",c]]);export{p as default};
