import{b as t,d,_ as s,r as i,o as c,c as p}from"./index-QNTyIAJW.js";const y={data(){return{expandOption:{defaultExpandAllRows:!1,defaultExpandedRowKeys:[1001,1003],expandable:({row:e,column:a,rowIndex:o})=>{if(e.rowKey===1002)return!1},render:({row:e,column:a,rowIndex:o},r)=>t("p",null,[d("My name is "),t("span",{style:"color:#1890ff;"},[e.name]),d(",I'm living in "),e.address])},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"center"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function u(e,a,o,r,n,m){const l=i("fan-table");return c(),p(l,{style:{width:"100%"},columns:n.columns,"table-data":n.tableData,"expand-option":n.expandOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","expand-option"])}const f=s(y,[["render",u]]);export{f as default};
