import{_ as r,r as s,o as n,c as i}from"./index-crzR-Bjn.js";const d={data(){return{cellStyleOption:{footerCellClass:({row:t,column:e,rowIndex:l})=>{if(e.field==="address")return"table-footer-cell-class1";if(e.field==="date"&&l===1)return"table-footer-cell-class2"}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initTableData(),this.initFooterData()},methods:{initTableData(){const t=[];for(let e=0;e<15;e++)t.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=t},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}}};function f(t,e,l,c,a,b){const o=s("fan-table");return n(),i(o,{"border-y":"","fixed-header":"","max-height":300,columns:a.columns,"table-data":a.tableData,"footer-data":t.footerData,"cell-style-option":a.cellStyleOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","footer-data","cell-style-option"])}const m=r(d,[["render",f]]);export{m as default};
