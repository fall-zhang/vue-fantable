import{_ as n,r as a,o as d,a as s,e,b as f}from"./index-y7N75Dfv.js";const u={data(){return{virtualScrollOption:{enable:!0,minRowHeight:40},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},created(){this.initTableData()},methods:{getRandom(t,l){return Math.floor(Math.random()*(l-t)+t)},initTableData(){const t=[];for(let l=0;l<1e4;l++)l%2===0&&this.getRandom(2,3),t.push({rowKey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l});this.tableData=t},scrollToRowKey(t){this.$refs.tableRef.scrollToRowKey({rowKey:t})}}},w={style:{"margin-bottom":"20px","line-height":"3.0"}};function y(t,l,h,b,c,o){const r=a("fan-table");return d(),s("div",null,[e("div",w,[e("button",{class:"button-demo",onClick:l[0]||(l[0]=i=>o.scrollToRowKey(9999))}," 滚动到rowKey为9999的行 "),e("button",{class:"button-demo",onClick:l[1]||(l[1]=i=>o.scrollToRowKey(9989))}," 滚动到rowKey为9989的行 "),e("button",{class:"button-demo",onClick:l[2]||(l[2]=i=>o.scrollToRowKey(5e3))}," 滚动到rowKey为5000的行 "),e("button",{class:"button-demo",onClick:l[3]||(l[3]=i=>o.scrollToRowKey(0))},"滚动到rowKey为0的行")]),f(r,{ref:"tableRef",style:{width:"1000px"},"scroll-width":1600,"max-height":400,"border-y":"",columns:c.columns,"table-data":t.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":c.virtualScrollOption},null,8,["columns","table-data","virtual-scroll-option"])])}const k=n(u,[["render",y]]);export{k as default};
