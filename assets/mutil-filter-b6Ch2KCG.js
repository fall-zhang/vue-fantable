import{_ as s,r as i,o as d,c as o}from"./index-BWOAprk1.js";const r={data(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filter:{filterList:[{value:0,label:"John",selected:!1},{value:1,label:"Dickerson",selected:!1},{value:2,label:"Larsen",selected:!1},{value:3,label:"Geneva",selected:!1},{value:4,label:"Jami",selected:!1}],isMultiple:!0,filterConfirm:e=>{const a=e.filter(t=>t.selected).map(t=>t.label);this.searchByNameField(a)},filterReset:e=>{this.searchByNameField([])},maxHeight:120}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},created(){this.tableData=this.sourceData.slice(0)},methods:{searchByNameField(e){this.tableData=this.sourceData.filter(a=>e.length===0||e.includes(a.name))}}};function c(e,a,t,h,n,u){const l=i("fan-table");return d(),o(l,{"max-height":300,"fixed-header":!0,columns:n.columns,"table-data":n.tableData},null,8,["columns","table-data"])}const f=s(r,[["render",c]]);export{f as default};
