import{_ as d,r as n,o as s,a as r,e as o,b as f}from"./index-DhQICo8y.js";const h={data(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},created(){this.initTableData()},methods:{initTableData(){const e=[];for(let l=0;l<80;l++)e.push({rowKey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l});this.tableData=e},scrollToColKey(e){this.$refs.tableRef.scrollToColKey({colKey:e})}}},b={style:{"margin-bottom":"20px","line-height":"3.0"}};function y(e,l,m,u,i,t){const a=n("fan-table");return s(),r("div",null,[o("div",b,[o("button",{class:"button-demo",onClick:l[0]||(l[0]=c=>t.scrollToColKey("col4"))},"滚动到col4列"),o("button",{class:"button-demo",onClick:l[1]||(l[1]=c=>t.scrollToColKey("col5"))},"滚动到col5列"),o("button",{class:"button-demo",onClick:l[2]||(l[2]=c=>t.scrollToColKey("col6"))},"滚动到col6列")]),f(a,{ref:"tableRef",style:{width:"1000px"},"scroll-width":1600,"max-height":350,"border-y":"",columns:i.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"},null,8,["columns","table-data"])])}const w=d(h,[["render",y]]);export{w as default};
