import{_ as s,r as i,o as l,a as r,e as n,b as c}from"./index-crzR-Bjn.js";const u={data(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},mounted(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},unmounted(){this.loadingInstance.destroy()},methods:{show(){this.loadingInstance.show()},close(){this.loadingInstance.close()}}},g=n("br",null,null,-1),b=n("br",null,null,-1);function m(h,e,y,f,a,t){const o=i("fan-table");return l(),r("div",null,[n("button",{class:"button-demo",onClick:e[0]||(e[0]=d=>t.show())},"开启 Loading"),n("button",{class:"button-demo",onClick:e[1]||(e[1]=d=>t.close())},"关闭 Loading"),g,b,c(o,{id:"loading-container",columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])])}const v=s(u,[["render",m]]);export{v as default};
