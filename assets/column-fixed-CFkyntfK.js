import{_ as c,r as i,o as a,a as r,b as d}from"./index-BgIuBINE.js";const n={data(){return{virtualScrollOption:{enable:!0},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:50,fixed:"right"},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},created(){this.initData()},methods:{initData(){const e=[];for(let l=0;l<1e4;l++)e.push({rowKey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l,col9:l,col10:l});this.tableData=e}}};function s(e,l,f,h,t,u){const o=i("fan-table");return a(),r("div",null,[d(o,{"fixed-header":"","border-y":"","max-height":500,"scroll-width":1600,"virtual-scroll-option":t.virtualScrollOption,columns:t.columns,"table-data":t.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}const m=c(n,[["render",s]]);export{m as default};
