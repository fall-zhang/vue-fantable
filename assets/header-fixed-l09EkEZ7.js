import{_ as n,r as o,o as s,c as r}from"./index-WVU3T6XN.js";const i={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const t=[];for(let e=0;e<15;e++)t.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=t}}};function d(t,e,c,b,a,f){const l=o("fan-table");return s(),r(l,{"max-height":200,"fixed-header":!0,columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}const u=n(i,[["render",d]]);export{u as default};
