import{b as a,d as o,r as s,_ as d,o as l,c as u}from"./index-g2bFAzY6.js";const h={defaultVisible:!1,render:({showFn:e,closeFn:n},c)=>a("div",{class:"custom-name-filter"},[a("input",{value:(void 0).searchValue,"on-input":t=>(void 0).searchValue=t.target.value,placeholder:"Search name"},null),a("div",{class:"custom-name-filter-operation"},[a("span",{class:"name-filter-cancel","on-click":()=>(void 0).searchCancel(n)},[o("取消")]),a("span",{class:"name-filter-confirm","on-click":()=>(void 0).searchConfirm(n)},[o("查询")])])]),filterIcon:()=>a(s("ve-icon"),{name:"search"},null)},m={data(){return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:h},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},created(){this.tableData=this.sourceData.slice(0)},methods:{search(){const e=this.searchValue;this.tableData=this.sourceData.filter(n=>!e.length||n.name.toLowerCase().includes(e.toLowerCase()))},searchCancel(e){e()},searchConfirm(e){this.search(),e()}}};function f(e,n,c,t,r,b){const i=s("fan-table");return l(),u(i,{"max-height":300,"fixed-header":!0,columns:r.columns,"table-data":r.tableData},null,8,["columns","table-data"])}const p=d(m,[["render",f]]);export{p as default};
