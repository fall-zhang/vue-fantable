import{_ as r,r as i,o as l,c as n}from"./index-g2bFAzY6.js";const d={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",fixed:"left",width:200},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left",fixed:"right",width:200}],tableData:[],footerData:[]}},created(){this.initTableData(),this.initFooterData()},methods:{initTableData(){const t=[];for(let e=0;e<15;e++)t.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=t},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}}};function s(t,e,f,c,a,b){const o=i("fan-table");return l(),n(o,{"border-y":"","fixed-header":"","max-height":300,style:{width:"900px"},"scroll-width":1200,columns:a.columns,"table-data":a.tableData,"footer-data":a.footerData,"row-key-field-name":"rowKey"},null,8,["columns","table-data","footer-data"])}const m=r(d,[["render",s]]);export{m as default};
