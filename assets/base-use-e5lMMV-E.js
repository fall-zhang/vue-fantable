import{_ as r,r as i,o as s,a as d,b as u}from"./index-6s-dGoXs.js";const c={data(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},editOption:{beforeStartCellEditing:({row:l,column:e,cellValue:o})=>{if(console.log("beforeStartCellEditing"),console.log("row::",l),console.log("column::",e),console.log("cellValue::",o),console.log("---"),l.rowKey===0&&e.field==="name")return alert("You can't edit this cell."),!1},beforeCellValueChange:({row:l,column:e,changeValue:o})=>{if(console.log("beforeCellValueChange"),console.log("row::",l),console.log("column::",e),console.log("changeValue::",o),console.log("---"),e.field==="number"&&!/^\d+$/.test(o))return alert("请输入数字"),!1},afterCellValueChange:({row:l,column:e,changeValue:o})=>{console.log("afterCellValueChange"),console.log("row::",l),console.log("column::",e),console.log("changeValue::",o),console.log("---")}},columns:[{field:"",key:"a",title:"",width:50,align:"center",operationColumn:!0,renderBodyCell:({row:l,column:e,rowIndex:o},t)=>++o},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"number",key:"number",title:"Number",align:"right",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"You can't edit",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}};function g(l,e,o,t,n,m){const a=i("fan-table");return s(),d("div",null,[u(a,{"row-key-field-name":"rowKey","fixed-header":!0,columns:n.columns,"table-data":n.tableData,"edit-option":n.editOption,"row-style-option":n.rowStyleOption,"border-y":""},null,8,["columns","table-data","edit-option","row-style-option"])])}const h=r(c,[["render",g]]);export{h as default};
