import{b as a,d as t,_ as s,r as l,o as c,c as y}from"./index-DhQICo8y.js";const p={data(){return{expandOption:{trigger:"row",render:({row:e,column:o,rowIndex:d},r)=>a("p",null,[t("My name is "),a("span",{style:"color:#1890ff;"},[e.name]),t(",I'm living in "),e.address])},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function m(e,o,d,r,n,u){const i=l("fan-table");return c(),y(i,{style:{width:"100%"},columns:n.columns,"table-data":n.tableData,"expand-option":n.expandOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","expand-option"])}const g=s(p,[["render",m]]);export{g as default};
