import{_ as c,r as a,o as r,a as s,b as d}from"./index-6s-dGoXs.js";const u={data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellAutofillOption:!0,editOption:{cellValueChange:({row:e,column:l})=>{}},columns:[{field:"index",key:"index",operationColumn:!0,title:"",width:50,align:"center",renderBodyCell:({row:e,column:l,rowIndex:t},i)=>++t,edit:!0},{field:"col1",key:"col1",title:"Col1",edit:!0},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const e=[];for(let l=0;l<8;l++)e.push({rowKey:l,col1:`A${l+1}`,col2:`B${l+1}`,col3:`C${l+1}`,col4:`D${l+1}`,col5:`E${l+1}`,col6:`F${l+1}`,col7:`G${l+1}`,col8:`H${l+1}`});this.tableData=e}}};function p(e,l,t,i,o,f){const n=a("fan-table");return r(),s("div",null,[d(n,{columns:o.columns,"table-data":o.tableData,"border-y":"","cell-autofill-option":o.cellAutofillOption,"edit-option":o.editOption,"row-key-field-name":"rowKey","row-style-option":o.rowStyleOption},null,8,["columns","table-data","cell-autofill-option","edit-option","row-style-option"])])}const y=c(u,[["render",p]]);export{y as default};
