import{b as d,d as i,_ as c,r as y,o as u,a as x,e as t}from"./index-WVU3T6XN.js";const b={data(){return{expandOption:{expandedRowKeys:[1001],render:({row:e,column:n,rowIndex:s},r)=>d("p",null,[i("My name is "),d("span",{style:"color:#1890ff;"},[e.name]),i(",I'm living in "),e.address]),afterExpandRowChange:({afterExpandedRowKeys:e,row:n,rowIndex:s})=>{this.changeExpandedRowKeys(e)}},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"center"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeExpandedRowKeys(e){this.expandOption.expandedRowKeys=e},expandSwitch(e){const n=this.expandOption.expandedRowKeys.indexOf(e);n>-1?this.expandOption.expandedRowKeys.splice(n,1):this.expandOption.expandedRowKeys.push(e)},expandAll(){this.expandOption.expandedRowKeys=this.tableData.map(e=>e.rowKey)},foldAll(){this.expandOption.expandedRowKeys=[]}}},h=t("br",null,null,-1),m=t("br",null,null,-1);function w(e,n,s,r,a,o){const p=y("fan-table");return u(),x("div",null,[t("button",{class:"button-demo",onClick:n[0]||(n[0]=l=>o.expandSwitch(1003))},"第3行展开切换"),t("button",{class:"button-demo",onClick:n[1]||(n[1]=l=>o.expandAll())},"展开全部"),t("button",{class:"button-demo",onClick:n[2]||(n[2]=l=>o.foldAll())},"折叠全部"),h,m,d(p,{style:{width:"100%"},columns:a.columns,"table-data":a.tableData,"expand-option":a.expandOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","expand-option"])])}const g=c(b,[["render",w]]);export{g as default};
