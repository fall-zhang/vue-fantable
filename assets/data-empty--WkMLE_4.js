import{_ as o,r as d,o as i,a as l,e,b as r,H as c,L as h}from"./index-crzR-Bjn.js";const u={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"center",width:"20%"},{field:"date",key:"b",title:"Date",align:"left",width:"20%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"30%"}],tableData:[],showEmpty:!1}},created(){this.request()},methods:{request(){setTimeout(()=>{this.tableData=this.tableData.length>0?[]:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}],this.tableData.length===0?this.showEmpty=!0:this.showEmpty=!1})}}},b=e("br",null,null,-1),m=e("br",null,null,-1),y={class:"empty-data"};function g(p,a,f,_,t,n){const s=d("fan-table");return i(),l("div",null,[e("button",{class:"button-demo",onClick:a[0]||(a[0]=v=>n.request())},"切换请求"),b,m,r(s,{columns:t.columns,"table-data":t.tableData,"border-y":""},null,8,["columns","table-data"]),c(e("div",y,"暂无数据",512),[[h,t.showEmpty]])])}const k=o(u,[["render",g]]);export{k as default};
