import{b as a,_ as r,r as i,o as c,a as s}from"./index-crzR-Bjn.js";const d={data(){return{virtualScrollOption:{enable:!0},checkboxOption:{selectedRowChange:({row:t,isSelected:e,selectedRowKeys:l})=>{console.log(t,e,l)},selectedAllChange:({isSelected:t,selectedRowKeys:e})=>{console.log(t,e)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:t},e)=>a("span",{domPropsInnerHTML:t.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{initData(){const t=[];for(let e=0;e<1e4;e++)t.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=t}}};function b(t,e,l,h,o,p){const n=i("fan-table");return c(),s("div",null,[a(n,{"fixed-header":"","max-height":500,"virtual-scroll-option":o.virtualScrollOption,"checkbox-option":o.checkboxOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","checkbox-option","columns","table-data"])])}const u=r(d,[["render",b]]);export{u as default};
