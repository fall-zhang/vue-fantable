import{_ as a,r as i,o as r,a as b,e as o,b as h}from"./index-QNTyIAJW.js";const y={data(){return{checkboxOption:{selectedRowKeys:[1003],selectedRowChange:({row:t,isSelected:e,selectedRowKeys:n})=>{this.changeSelectedRowKeys(n)},selectedAllChange:({isSelected:t,selectedRowKeys:e})=>{this.changeSelectedRowKeys(e)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKeys(t){this.checkboxOption.selectedRowKeys=t},selectedSwitch(t){const e=this.checkboxOption.selectedRowKeys,n=e.indexOf(t);n>-1?e.splice(n,1):e.push(t)},selectedAll(){this.checkboxOption.selectedRowKeys=this.tableData.map(t=>t.rowKey)},unselectedAll(){this.checkboxOption.selectedRowKeys=[]}}},u=o("br",null,null,-1),w=o("br",null,null,-1);function m(t,e,n,p,s,l){const c=i("fan-table");return r(),b("div",null,[o("button",{class:"button-demo",onClick:e[0]||(e[0]=d=>l.selectedSwitch(1002))},"第二行选中切换"),o("button",{class:"button-demo",onClick:e[1]||(e[1]=d=>l.selectedAll())},"选中全部"),o("button",{class:"button-demo",onClick:e[2]||(e[2]=d=>l.unselectedAll())},"取消选中全部"),u,w,h(c,{style:{width:"100%"},columns:s.columns,"table-data":s.tableData,"row-key-field-name":"rowKey","checkbox-option":s.checkboxOption},null,8,["columns","table-data","checkbox-option"])])}const k=a(y,[["render",m]]);export{k as default};
