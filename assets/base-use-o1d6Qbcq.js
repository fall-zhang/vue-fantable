import{_ as n,r as a,o as r,c as s}from"./index-g2bFAzY6.js";const d={data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},virtualScrollOption:{enable:!0},cellAutofillOption:{directionX:!0,directionY:!0,beforeAutofill:({direction:o,sourceSelectionRangeIndexes:l,targetSelectionRangeIndexes:t,sourceSelectionData:i,targetSelectionData:e})=>{console.log("direction::",o),console.log("sourceSelectionRangeIndexes::",l),console.log("targetSelectionRangeIndexes::",t),console.log("sourceSelectionData::",i),console.log("targetSelectionData::",e),console.log("---")},afterAutofill:({direction:o,sourceSelectionRangeIndexes:l,targetSelectionRangeIndexes:t,sourceSelectionData:i,targetSelectionData:e})=>{console.log("direction::",o),console.log("sourceSelectionRangeIndexes::",l),console.log("targetSelectionRangeIndexes::",t),console.log("sourceSelectionData::",i),console.log("targetSelectionData::",e),console.log("---")}},columns:[{field:"index",key:"index",operationColumn:!0,title:"#",width:15,fixed:"left"},{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:30}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:110},{field:"col5",key:"col5",title:"col5",width:120}]},{title:"col6",field:"col6",key:"col6",width:130}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const o=[];for(let l=0;l<100;l++)o.push({rowKey:l,index:l+1,col1:`A${l+1}`,col2:`B${l+1}`,col3:`C${l+1}`,col4:`D${l+1}`,col5:`E${l+1}`,col6:`F${l+1}`,col7:`G${l+1}`});this.tableData=o}}};function f(o,l,t,i,e,u){const c=a("fan-table");return r(),s(c,{"fixed-header":"","scroll-width":1600,"max-height":500,"border-y":"",columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":e.virtualScrollOption,"cell-autofill-option":e.cellAutofillOption,"row-style-option":e.rowStyleOption},null,8,["columns","table-data","virtual-scroll-option","cell-autofill-option","row-style-option"])}const g=n(d,[["render",f]]);export{g as default};
