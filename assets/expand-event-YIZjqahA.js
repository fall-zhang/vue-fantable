import{b as t,d as r,_ as i,r as l,o as c,c as p}from"./index-crzR-Bjn.js";const y={data(){return{expandOption:{expandable:({row:e,column:n,rowIndex:a})=>{if(e.rowKey===1002)return!1},render:({row:e,column:n,rowIndex:a},d)=>t("p",null,[r("My name is "),t("span",{style:"color:#1890ff;"},[e.name]),r(",I'm living in "),e.address]),beforeExpandRowChange:({beforeExpandedRowKeys:e,row:n,rowIndex:a})=>n.rowKey===1001?(alert("切换前的事件。返回false可中断展开切换"),!1):!0,afterExpandRowChange:({afterExpandedRowKeys:e,row:n,rowIndex:a})=>{alert("切换后的事件")}},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"center"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function u(e,n,a,d,o,f){const s=l("fan-table");return c(),p(s,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"expand-option":o.expandOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","expand-option"])}const m=i(y,[["render",u]]);export{m as default};
