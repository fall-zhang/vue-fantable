import{_ as n,r as c,o as a,a as s,b as d}from"./index-5MF4L8d4.js";const p={data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},clipboardOption:{copy:!0,paste:!0,cut:!0,delete:!0,beforeCopy:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("beforeCopy"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},afterCopy:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("afterCopy"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},beforePaste:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("beforePaste"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},afterPaste:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("afterPaste"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},beforeCut:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("beforeCut"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},afterCut:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("afterCut"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},beforeDelete:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("beforeDelete"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})},afterDelete:({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})=>{console.log("afterDelete"),this.log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l})}},virtualScrollOption:{enable:!1},cellAutofillOption:!0,editOption:{cellValueChange:({row:o,column:e})=>{}},columns:[{field:"index",key:"index",operationColumn:!0,title:"#",width:35,align:"center",renderBodyCell:({row:o,column:e,rowIndex:l},i)=>++l},{field:"col1",key:"col1",title:"Col1",edit:!0,width:150},{field:"col2",key:"col2",title:"Col2",edit:!0,width:150},{field:"col3",key:"col3",title:"Col3",edit:!0,width:150},{field:"col4",key:"col4",title:"Col4",edit:!0,width:150},{field:"col5",key:"col5",title:"Col5",edit:!0,width:150},{field:"col6",key:"col6",title:"Col6",edit:!0,width:150}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const o=[];for(let e=0;e<100;e++)o.push({rowKey:`row${e}`,col1:`A${e+1}`,col2:`B${e+1}`,col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=o},log({data:o,selectionRangeIndexes:e,selectionRangeKeys:l}){console.log("data::",o),console.log("selectionRangeIndexes::",e),console.log("selectionRangeKeys::",l)}}};function u(o,e,l,i,t,f){const r=c("fan-table");return a(),s("div",null,[d(r,{"max-height":350,columns:t.columns,"table-data":t.tableData,"border-y":"","row-style-option":t.rowStyleOption,"cell-autofill-option":t.cellAutofillOption,"edit-option":t.editOption,"row-key-field-name":"rowKey","clipboard-option":t.clipboardOption,"virtual-scroll-option":t.virtualScrollOption},null,8,["columns","table-data","row-style-option","cell-autofill-option","edit-option","clipboard-option","virtual-scroll-option"])])}const h=n(p,[["render",u]]);export{h as default};
