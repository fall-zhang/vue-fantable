import{b as a,_ as n,r as i,o as r,a as s}from"./index-DhQICo8y.js";const d={data(){return{virtualScrollOption:{enable:!0},radioOption:{selectedRowChange:({row:t})=>{console.log(t)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:t},e)=>a("span",{domPropsInnerHTML:t.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{initData(){const t=[];for(let e=0;e<1e4;e++)t.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=t}}};function c(t,e,p,m,o,u){const l=i("fan-table");return r(),s("div",null,[a(l,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,"radio-option":o.radioOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","radio-option","columns","table-data"])])}const f=n(d,[["render",c]]);export{f as default};
