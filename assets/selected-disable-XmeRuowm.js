import{_ as d,r as l,o as c,a as s,b as i}from"./index-crzR-Bjn.js";const r={data(){return{checkboxOption:{disableSelectedRowKeys:[1002,1005],defaultSelectedRowKeys:[1001,1003,1004,1005],selectedRowChange:({row:e,isSelected:n,selectedRowKeys:t})=>{console.log(e,n,t)},selectedAllChange:({isSelected:e,selectedRowKeys:n})=>{console.log(e,n)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function b(e,n,t,y,o,h){const a=l("fan-table");return c(),s("div",null,[i(a,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey","checkbox-option":o.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}const g=d(r,[["render",b]]);export{g as default};
