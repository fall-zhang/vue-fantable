import{_ as r,r as n,o as s,c as d}from"./index-P7Lzo4Rg.js";const i={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",width:200},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left",width:200}],tableData:[],footerData:[]}},created(){this.initTableData(),this.initFooterData()},methods:{initTableData(){const t=[];for(let e=0;e<15;e++)t.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=t},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}}};function l(t,e,f,c,a,b){const o=n("fan-table");return s(),d(o,{"border-y":"","fixed-header":"","max-height":300,columns:a.columns,"table-data":a.tableData,"footer-data":a.footerData,"fixed-footer":!1,"row-key-field-name":"rowKey"},null,8,["columns","table-data","footer-data"])}const h=r(i,[["render",l]]);export{h as default};
