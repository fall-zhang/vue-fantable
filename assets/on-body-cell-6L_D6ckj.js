import{_ as s,r as d,o as c,a as i,d as r,b as u}from"./index-g2bFAzY6.js";const m={data(){return{eventCustomOption:{bodyCellEvents:({row:o,column:t,rowIndex:n})=>({click:e=>{console.log("click::",o,t,n,e)},dblclick:e=>{console.log("dblclick::",o,t,n,e)},contextmenu:e=>{console.log("contextmenu::",o,t,n,e)},mouseenter:e=>{console.log("mouseenter::",o,t,n,e)},mouseleave:e=>{console.log("mouseleave::",o,t,n,e)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:o,column:t,rowIndex:n},e)=>++n},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function b(o,t,n,e,a,y){const l=d("fan-table");return c(),i("div",null,[r(" 打开F12 查看 console 信息 "),u(l,{columns:a.columns,"table-data":a.tableData,"event-custom-option":a.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}const h=s(m,[["render",b]]);export{h as default};
