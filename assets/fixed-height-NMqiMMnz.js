import{_ as r,r as d,o as s,c as l}from"./index-DhQICo8y.js";const n={data(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const t=[];for(let e=0;e<20;e++)t.push({name:e,date:e,hobby:e,address:e});this.tableData=t}}};function i(t,e,c,b,a,u){const o=d("fan-table");return s(),l(o,{"max-height":300,columns:a.columns,"table-data":a.tableData,"border-around":!0,"border-x":!0,"border-y":!0},null,8,["columns","table-data"])}const h=r(n,[["render",i]]);export{h as default};
