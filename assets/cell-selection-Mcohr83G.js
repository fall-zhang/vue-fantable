import{_ as r,r as a,o as n,c as d}from"./index-P7Lzo4Rg.js";const f={data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:e,column:l,rowIndex:o},c)=>++o},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const e=[];for(let l=0;l<10;l++)e.push({rowKey:l,col1:`A${l+1}`,col2:`B${l+1}`,col3:`C${l+1}`,col4:`D${l+1}`,col5:`E${l+1}`,col6:`F${l+1}`,col7:`G${l+1}`,col8:`H${l+1}`});this.tableData=e}}};function h(e,l,o,c,t,s){const i=a("fan-table");return n(),d(i,{"fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:t.columns,"table-data":t.tableData,"row-key-field-name":"rowKey","row-style-option":t.rowStyleOption},null,8,["columns","table-data","row-style-option"])}const y=r(f,[["render",h]]);export{y as default};
