import{b as r,d,_ as s,r as l,o as c,c as p}from"./index-X6yBs7pR.js";const f={data(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center",renderBodyCell:({row:t,column:e,rowIndex:n},o)=>e.field==="name"&&n===1?r("span",{style:"color:#1890ff;"},[d("this is custom content")]):t[e.field]},{field:"date",key:"b",title:"Date",width:200,align:"left",renderBodyCell:({row:t,column:e,rowIndex:n},o)=>n===1&&e.field==="date"?r("span",{style:"color:#1890ff;"},[d("this is custom content")]):t[e.field]},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan({row:t,column:e,rowIndex:n}){if(n===1){if(e.field==="date")return{rowspan:1,colspan:2};if(e.field==="hobby")return{rowspan:0,colspan:0}}if(e.field==="name"){if(n===1)return{rowspan:2,colspan:1};if(n===2)return{rowspan:0,colspan:0}}}}};function u(t,e,n,o,a,b){const i=l("fan-table");return c(),p(i,{columns:a.columns,"table-data":a.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":a.cellSpanOption},null,8,["columns","table-data","cell-span-option"])}const y=s(f,[["render",u]]);export{y as default};
