import{_ as i,r,o as s,a as c,b as l}from"./index-y7N75Dfv.js";const y={data(){return{eventCustomOption:{bodyRowEvents:({row:e,rowIndex:n})=>({click:a=>{const t=e.rowKey;this.changeSelectedRowKeyByRowClick(t)}})},radioOption:{selectedRowKey:"",selectedRowChange:({row:e})=>{this.changeSelectedRowKey(e.rowKey)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKey(e){this.radioOption.selectedRowKey=e},changeSelectedRowKeyByRowClick(e){this.radioOption.selectedRowKey=e}}};function h(e,n,a,t,o,w){const d=r("fan-table");return s(),c("div",null,[l(d,{style:{width:"100%"},columns:o.columns,"table-data":o.tableData,"radio-option":o.radioOption,"row-key-field-name":"rowKey","event-custom-option":o.eventCustomOption},null,8,["columns","table-data","radio-option","event-custom-option"])])}const m=i(y,[["render",h]]);export{m as default};
