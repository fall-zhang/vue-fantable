import{_ as s,r as i,o as r,a as c,d,b as m}from"./index-BgIuBINE.js";const u={data(){return{eventCustomOption:{footerRowEvents:({row:o,rowIndex:e})=>({click:t=>{console.log("click::",o,e,t)},dblclick:t=>{console.log("dblclick::",o,e,t)},contextmenu:t=>{console.log("contextmenu::",o,e,t)},mouseenter:t=>{console.log("mouseenter::",o,e,t)},mouseleave:t=>{console.log("mouseleave::",o,e,t)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:o,column:e,rowIndex:t},n)=>++t},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initTableData(),this.initFooterData()},methods:{initTableData(){const o=[];for(let e=0;e<15;e++)o.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=o},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}}};function b(o,e,t,n,a,f){const l=i("fan-table");return r(),c("div",null,[d(" 打开F12 查看 console 信息 "),m(l,{"border-y":"","fixed-header":"","max-height":300,columns:a.columns,"table-data":a.tableData,"footer-data":o.footerData,"row-key-field-name":"rowKey","event-custom-option":a.eventCustomOption},null,8,["columns","table-data","footer-data","event-custom-option"])])}const y=s(u,[["render",b]]);export{y as default};
