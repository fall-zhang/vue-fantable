import{_ as s,r as c,o as d,a as r,d as i,b as u}from"./index-BgIuBINE.js";const m={data(){return{eventCustomOption:{headerRowEvents:({rowIndex:n})=>({click:e=>{console.log("click::",n,e)},dblclick:e=>{console.log("dblclick::",n,e)},contextmenu:e=>{console.log("contextmenu::",n,e)},mouseenter:e=>{console.log("mouseenter::",n,e)},mouseleave:e=>{console.log("mouseleave::",n,e)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:n,column:e,rowIndex:t},a)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function b(n,e,t,a,o,y){const l=c("fan-table");return d(),r("div",null,[i(" 打开F12 查看 console 信息 "),u(l,{columns:o.columns,"table-data":o.tableData,"event-custom-option":o.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}const h=s(m,[["render",b]]);export{h as default};
