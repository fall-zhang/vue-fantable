import"./base-BcJO4Gwv.js";import{E as d}from"./el-button-SaRo2yJs.js";import{b as n,d as r,_ as i,r as c,o as u,c as b}from"./index-BgIuBINE.js";import"./index-DCeqGwEP.js";import"./index-C08E7QLU.js";const h={data(){return{columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:({row:e,column:o,rowIndex:t},l)=>n("span",{class:"text-bold",style:"color:#1890ff;"},[++t])},{field:"date",key:"b",title:"Date",align:"center"},{field:"hobby",key:"c",title:"Hobby",align:"left",renderBodyCell:({row:e,column:o,rowIndex:t},l)=>{const a=e[o.field];return n("span",null,[n("a",{class:"test-text",href:"http://github.com",style:"color:#1890ff;cursor:pointer;"},[a]),r(" are my hobbies")])}},{field:"address",key:"d",title:"Address",width:"",align:"left",renderBodyCell:({row:e,column:o,rowIndex:t},l)=>{const a=e[o.field];return n("input",{style:"width:100%",value:a},null)}},{field:"",key:"e",title:"Action",width:"",center:"left",renderBodyCell:({row:e,column:o,rowIndex:t},l)=>n("span",null,[n(d,{"on-click":()=>this.editRow(t)},{default:()=>[r("Edit")]}),r(" "),n(d,{"on-click":()=>this.deleteRow(t)},{default:()=>[r("Delete")]})])}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{editRow(e){alert(`eidt row number:${e}`)},deleteRow(e){this.tableData.splice(e,1)}}};function y(e,o,t,l,a,m){const s=c("fan-table");return u(),b(s,{style:{width:"100%"},"border-y":"",columns:a.columns,"table-data":a.tableData},null,8,["columns","table-data"])}const _=i(h,[["render",y]]);export{_ as default};
