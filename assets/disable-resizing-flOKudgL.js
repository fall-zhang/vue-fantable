import{M as n}from"./mock-0C7JtNqy.js";import{_ as d,r as a,o as r,c as s}from"./index-crzR-Bjn.js";const u={data(){return{columnWidthResizeOption:{enable:!0,minWidth:30,sizeChange:({column:l,differWidth:e,columnWidth:t})=>{}},columns:[{field:"index",key:"index",title:"#",width:50,align:"center",fixed:"left",renderBodyCell:({row:l,column:e,rowIndex:t},i)=>++t,disableResizing:!0},{field:"col1",key:"col1",title:"Col1",width:220,disableResizing:!0},{field:"col2",key:"col2",title:"Col2",width:220,disableResizing:!0},{field:"col3",key:"col3",title:"Col3",width:220},{field:"col4",key:"col4",title:"Col4",width:220},{field:"col5",key:"col5",title:"Col5",width:220},{field:"col6",key:"col6",title:"Col6",width:220},{field:"col7",key:"col7",title:"Col7"},{field:"col8",key:"col8",title:"Col8"}],columnResizeInfo:{column:"",differWidth:"",columnWidth:"",tableWidth:""},tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const l=[];for(let e=0;e<5;e++)l.push({rowKey:e,col1:`A${e+1}`,col2:n.Random.sentence(3,12),col3:`C${e+1}`,col4:`D${e+1}`,col5:`E${e+1}`,col6:`F${e+1}`,col7:`G${e+1}`,col8:`H${e+1}`});this.tableData=l}}};function f(l,e,t,i,o,h){const c=a("fan-table");return r(),s(c,{style:{width:"100%"},"scroll-width":0,columns:o.columns,"table-data":o.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"column-width-resize-option":o.columnWidthResizeOption},null,8,["columns","table-data","column-width-resize-option"])}const p=d(u,[["render",f]]);export{p as default};
