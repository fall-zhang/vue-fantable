import{_ as d,r as s,o as c,a as h,e as o,b as u}from"./index-5MF4L8d4.js";const b={data(){return{rowStyleOption:{clickHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:e,column:t,rowIndex:a},l)=>++a},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{setHighlightRow(e){this.$refs.tableRef.setHighlightRow({rowKey:e})}}},y=o("br",null,null,-1),g=o("br",null,null,-1);function m(e,t,a,l,n,r){const i=s("fan-table");return c(),h("div",null,[o("button",{class:"button-demo",onClick:t[0]||(t[0]=f=>r.setHighlightRow(1002))},"选中第2行"),y,g,u(i,{ref:"tableRef","row-style-option":n.rowStyleOption,columns:n.columns,"table-data":n.tableData,"row-key-field-name":"rowKey"},null,8,["row-style-option","columns","table-data"])])}const p=d(b,[["render",m]]);export{p as default};
