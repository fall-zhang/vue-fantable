import{_ as s,r as d,o as i,c as o}from"./index-DhQICo8y.js";const r={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],filterConfirm:e=>{const a=e.filter(t=>t.selected).map(t=>t.label);this.searchByDateField(a)},filterReset:e=>{this.searchByDateField([])}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},created(){this.tableData=this.sourceData.slice(0)},methods:{searchByDateField(e){this.tableData=this.sourceData.filter(a=>e.length===0||e.includes(a.date))}}};function c(e,a,t,h,l,u){const n=d("fan-table");return i(),o(n,{"max-height":300,"fixed-header":!0,columns:l.columns,"table-data":l.tableData},null,8,["columns","table-data"])}const f=s(r,[["render",c]]);export{f as default};
