import{_ as n,r,o as d,a,b as h}from"./index-WVU3T6XN.js";const s={data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},editOption:{cellValueChange:({row:l,column:e})=>{console.log("cellValueChange row::",l),console.log("cellValueChange column::",e)}},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:l,column:e,rowIndex:o},i)=>++o},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left",edit:!0},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50,edit:!0},{field:"col3",key:"col3",title:"col3",width:50,edit:!0}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130,edit:!0},{field:"col5",key:"col5",title:"col5",width:140,edit:!0}]},{title:"col6",field:"col6",key:"col6",width:140,edit:!0}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50,edit:!0}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right",edit:!0}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const l=[];for(let e=0;e<100;e++)l.push({rowKey:e,col1:"A"+e,col2:"B"+e,col3:"C"+e,col4:"D"+e,col5:"E"+e,col6:"F"+e,col7:"G"+e,col8:"H"+e});this.tableData=l}}};function u(l,e,o,i,t,f){const c=r("fan-table");return d(),a("div",null,[h(c,{"scroll-width":1600,"max-height":500,"row-key-field-name":"rowKey","fixed-header":!0,columns:t.columns,"table-data":t.tableData,"edit-option":t.editOption,"row-style-option":t.rowStyleOption,"virtual-scroll-option":{enable:!0},"border-y":""},null,8,["columns","table-data","edit-option","row-style-option"])])}const w=n(s,[["render",u]]);export{w as default};
