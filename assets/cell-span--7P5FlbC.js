import{_ as d,r,o as i,c as s}from"./index-QNTyIAJW.js";const l={data(){return{cellSpanOption:{footerCellSpan:this.footerCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},created(){this.initTableData(),this.initFooterData()},methods:{footerCellSpan({row:a,column:e,rowIndex:n}){if(n===0){if(e.field==="date")return{rowspan:1,colspan:2};if(e.field==="hobby")return{rowspan:0,colspan:0}}},initTableData(){const a=[];for(let e=0;e<15;e++)a.push({rowKey:e,name:e,date:e,hobby:e,address:e});this.tableData=a},initFooterData(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}}};function c(a,e,n,b,t,h){const o=r("fan-table");return i(),s(o,{"border-y":"","fixed-header":"","max-height":300,columns:t.columns,"table-data":t.tableData,"footer-data":a.footerData,"row-key-field-name":"rowKey","cell-span-option":t.cellSpanOption},null,8,["columns","table-data","footer-data","cell-span-option"])}const f=d(l,[["render",c]]);export{f as default};
