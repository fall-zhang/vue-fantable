import{_ as c,r as i,o as a,c as d}from"./index-y7N75Dfv.js";const n={data(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},created(){this.initTableData()},methods:{initTableData(){const e=[];for(let l=0;l<10;l++)e.push({rowKey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l});this.tableData=e}}};function r(e,l,f,s,t,h){const o=i("fan-table");return a(),d(o,{"fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:t.columns,"table-data":t.tableData},null,8,["columns","table-data"])}const m=c(n,[["render",r]]);export{m as default};
