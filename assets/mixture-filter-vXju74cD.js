import{_ as r,r as i,o as d,c}from"./index-DhQICo8y.js";const s=[{value:0,label:"John",selected:!0},{value:1,label:"Dickerson",selected:!0},{value:2,label:"Larsen",selected:!1},{value:3,label:"Geneva",selected:!0},{value:4,label:"Jami",selected:!1}],o=[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],h={data(){return{searchData:{names:[],date:""},columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filter:{filterList:s,isMultiple:!0,filterConfirm:e=>{const t=e.filter(a=>a.selected).map(a=>a.label);this.searchData.names=t},filterReset:e=>{this.searchData.names=[]}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:o,filterConfirm:e=>{const t=e.find(a=>a.selected);this.searchData.date=t?t.label:""},filterReset:e=>{this.searchData.date=""}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},watch:{searchData:{handler:function(){this.search()},immediate:!0,deep:!0}},created(){this.searchData.names=s.filter(e=>e.selected).map(e=>e.label)},methods:{search(){const{names:e,date:t}=this.searchData;this.tableData=this.sourceData.filter(a=>(t===""||t===a.date)&&(e.length===0||e.includes(a.name)))}}};function u(e,t,a,f,l,b){const n=i("fan-table");return d(),c(n,{"max-height":300,"fixed-header":!0,columns:l.columns,"table-data":l.tableData},null,8,["columns","table-data"])}const y=r(h,[["render",u]]);export{y as default};
