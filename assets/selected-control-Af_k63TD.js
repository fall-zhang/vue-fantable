import{_ as s,r as l,o as r,a as c,e as o,b as y}from"./index-5MF4L8d4.js";const u={data(){return{radioOption:{selectedRowKey:"",selectedRowChange:({row:e})=>{this.changeSelectedRowKey(e.rowKey)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKey(e){this.radioOption.selectedRowKey=e},selectedSwitch(e){this.radioOption.selectedRowKey===e?this.radioOption.selectedRowKey="":this.radioOption.selectedRowKey=e},unselected(){this.radioOption.selectedRowKey=""}}},b=o("br",null,null,-1),h=o("br",null,null,-1);function w(e,t,m,p,n,d){const a=l("fan-table");return r(),c("div",null,[o("button",{class:"button-demo",onClick:t[0]||(t[0]=i=>d.selectedSwitch(1002))},"第二行选中切换"),o("button",{class:"button-demo",onClick:t[1]||(t[1]=i=>d.unselected())},"取消选中"),b,h,y(a,{style:{width:"100%"},columns:n.columns,"table-data":n.tableData,"radio-option":n.radioOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","radio-option"])])}const f=s(u,[["render",w]]);export{f as default};
