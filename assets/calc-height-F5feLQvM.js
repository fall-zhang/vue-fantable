import{_ as n,r as o,o as s,c}from"./index-QNTyIAJW.js";const i={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const t=[];for(let e=0;e<20;e++)t.push({name:e,date:e,hobby:e,address:e});this.tableData=t}}};function r(t,e,d,b,a,f){const l=o("fan-table");return s(),c(l,{"max-height":"calc(100vh - 350px)","fixed-header":"",columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}const h=n(i,[["render",r]]);export{h as default};
