import{_ as c,r as l,o as p,a as h,b as s,e as u}from"./index-y7N75Dfv.js";let t=[];const b={data(){return{pageIndex:1,pageSize:10,columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:({row:e,column:a,rowIndex:o},g)=>(this.pageIndex-1)*this.pageSize+o+1},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{tableData(){const{pageIndex:e,pageSize:a}=this;return t.slice((e-1)*a,e*a)},totalCount(){return t.length}},created(){this.initDatabase()},methods:{pageNumberChange(e){this.pageIndex=e},pageSizeChange(e){this.pageIndex=1,this.pageSize=e},initDatabase(){t=[];for(let e=0;e<1e3;e++)t.push({name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}}},m={class:"table-pagination"};function _(e,a,o,g,i,n){const d=l("fan-table"),r=l("ve-pagination");return p(),h("div",null,[s(d,{columns:i.columns,"table-data":n.tableData},null,8,["columns","table-data"]),u("div",m,[s(r,{total:n.totalCount,"page-index":i.pageIndex,"page-size":i.pageSize,onOnPageNumberChange:n.pageNumberChange,onOnPageSizeChange:n.pageSizeChange},null,8,["total","page-index","page-size","onOnPageNumberChange","onOnPageSizeChange"])])])}const C=c(b,[["render",_]]);export{C as default};
