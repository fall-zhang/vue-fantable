import{_ as d,r,o as i,c as l}from"./index-DhQICo8y.js";const s={data(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan({row:o,column:a,rowIndex:e}){if(a.field==="name"){if(e===1)return{rowspan:2,colspan:1};if(e===2)return{rowspan:0,colspan:0}}}}};function c(o,a,e,p,n,b){const t=r("fan-table");return i(),l(t,{columns:n.columns,"table-data":n.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":n.cellSpanOption},null,8,["columns","table-data","cell-span-option"])}const y=d(s,[["render",c]]);export{y as default};
