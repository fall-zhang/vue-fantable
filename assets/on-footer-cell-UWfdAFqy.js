import{_ as s,r as i,o as r,a as d,d as c,b as m}from"./index-y7N75Dfv.js";const b={data(){return{eventCustomOption:{footerCellEvents:({row:t,column:e,rowIndex:a})=>({click:o=>{console.log("click::",t,e,a,o)},dblclick:o=>{console.log("dblclick::",t,e,a,o)},contextmenu:o=>{console.log("contextmenu::",t,e,a,o)},mouseenter:o=>{console.log("mouseenter::",t,e,a,o)},mouseleave:o=>{console.log("mouseleave::",t,e,a,o)}})},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:({row:t,column:e,rowIndex:a},o)=>++a},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initTableData(),this.initFooterData()},methods:{initTableData(){const t=[];for(let e=0;e<15;e++)t.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=t},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}}};function f(t,e,a,o,l,u){const n=i("fan-table");return r(),d("div",null,[c(" 打开F12 查看 console 信息 "),m(n,{"border-y":"","fixed-header":"","max-height":300,columns:l.columns,"table-data":l.tableData,"footer-data":t.footerData,"row-key-field-name":"rowKey","event-custom-option":l.eventCustomOption},null,8,["columns","table-data","footer-data","event-custom-option"])])}const y=s(b,[["render",f]]);export{y as default};
