import{_ as i,r as c,o as a,c as d}from"./index-BgIuBINE.js";const n={data(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},created(){this.initTableData()},methods:{initTableData(){const l=[];for(let e=0;e<10;e++)l.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=l}}};function f(l,e,r,s,t,y){const o=c("fan-table");return a(),d(o,{"scroll-width":1600,"border-y":"",columns:t.columns,"table-data":l.tableData,"row-key-field-name":"rowKey"},null,8,["columns","table-data"])}const u=i(n,[["render",f]]);export{u as default};
