import{b as d,r as l,_ as o,o as r,c as i}from"./index-6s-dGoXs.js";const c={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],filterConfirm:e=>{const a=e.filter(t=>t.selected).map(t=>t.label);this.searchByDateField(a)},filterReset:e=>{this.searchByDateField([])},filterIcon:()=>d(l("ve-icon"),{name:"search"},null)}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},created(){this.tableData=this.sourceData.slice(0)},methods:{searchByDateField(e){this.tableData=this.sourceData.filter(a=>e.length===0||e.includes(a.date))}}};function u(e,a,t,h,n,b){const s=l("fan-table");return r(),i(s,{"max-height":300,"fixed-header":!0,columns:n.columns,"table-data":n.tableData},null,8,["columns","table-data"])}const m=o(c,[["render",u]]);export{m as default};
