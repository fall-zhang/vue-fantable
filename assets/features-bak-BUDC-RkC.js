import{_ as i,r as c,o as s,a as r,b as d}from"./index-BWOAprk1.js";const u={data(){return{cellAutofillOption:!0,editOption:{cellValueChange:({row:t,column:e})=>{}},clipboardOption:{copy:!0,paste:!0,cut:!0,delete:!0,beforeCopy:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>!0,afterCopy:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{},beforePaste:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{},afterPaste:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{},beforeCut:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{},afterCut:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{},beforeDelete:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{},afterDelete:({data:t,selectionRangeIndexes:e,selectionRangeKeys:o})=>{}},columns:[{field:"index",key:"index",operationColumn:!0,title:"#",width:50,align:"center",renderBodyCell:({row:t,column:e,rowIndex:o},n)=>++o,edit:!0},{field:"col1",key:"col1",title:"Col1",edit:!0},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const t=[];for(let e=0;e<8;e++)t.push({rowKey:e,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=t}}};function f(t,e,o,n,l,p){const a=c("fan-table");return s(),r("div",null,[d(a,{columns:l.columns,"table-data":l.tableData,"border-y":"","cell-autofill-option":l.cellAutofillOption,"edit-option":l.editOption,"row-key-field-name":"rowKey","clipboard-option":"clipboardOption"},null,8,["columns","table-data","cell-autofill-option","edit-option"])])}const b=i(u,[["render",f]]);export{b as default};
