import{_ as s,r as d,o as r,a as c,d as i,b as u}from"./index-DhQICo8y.js";const m={data(){return{eventCustomOption:{headerCellEvents:({column:n,rowIndex:o})=>({click:e=>{console.log("click::",n,o,e)},dblclick:e=>{console.log("dblclick::",n,o,e)},contextmenu:e=>{console.log("contextmenu::",n,o,e)},mouseenter:e=>{console.log("mouseenter::",n,o,e)},mouseleave:e=>{console.log("mouseleave::",n,o,e)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:n,column:o,rowIndex:e},a)=>++e},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};function b(n,o,e,a,t,y){const l=d("fan-table");return r(),c("div",null,[i(" 打开F12 查看 console 信息 "),u(l,{columns:t.columns,"table-data":t.tableData,"event-custom-option":t.eventCustomOption},null,8,["columns","table-data","event-custom-option"])])}const h=s(m,[["render",b]]);export{h as default};
