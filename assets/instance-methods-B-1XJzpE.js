import{_ as i,r as d,o as u,a,e as o,b as m}from"./index-6s-dGoXs.js";const b={data(){return{columnHiddenOption:{defaultHiddenColumnKeys:["col8"]},columns:[{field:"col1",key:"col1",title:"col1",width:"10%"},{title:"col2-col3",children:[{field:"col2",key:"col2",title:"col2",width:100},{field:"col3",key:"col3",title:"col3",width:110}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{field:"col7",key:"col7",title:"col7",width:150},{field:"col8",key:"col8",title:"col8",width:160}],tableData:[]}},created(){this.initTableData()},methods:{hideColumns(e){this.$refs.tableRef.hideColumnsByKeys(e)},showColumns(e){this.$refs.tableRef.showColumnsByKeys(e)},initTableData(){const e=[];for(let l=0;l<3;l++)e.push({rowKey:l,col1:"col1-"+l,col2:"col2-"+l,col3:"col3-"+l,col4:"col4-"+l,col5:"col5-"+l,col6:"col6-"+l,col7:"col7-"+l,col8:"col8-"+l});this.tableData=e}}},r=o("br",null,null,-1),f=o("br",null,null,-1),C=o("br",null,null,-1),h=o("br",null,null,-1);function k(e,l,w,y,c,t){const s=d("fan-table");return u(),a("div",null,[o("button",{class:"button-demo",onClick:l[0]||(l[0]=n=>t.hideColumns(["col1"]))},"隐藏 col1 列"),o("button",{class:"button-demo",onClick:l[1]||(l[1]=n=>t.hideColumns(["col2"]))},"隐藏 col2 列"),o("button",{class:"button-demo",onClick:l[2]||(l[2]=n=>t.hideColumns(["col3"]))},"隐藏 col3 列"),o("button",{class:"button-demo",onClick:l[3]||(l[3]=n=>t.hideColumns(["col1","col2","col3"]))}," 隐藏 col1、col2、col3 列 "),r,f,o("button",{class:"button-demo",onClick:l[4]||(l[4]=n=>t.showColumns(["col1"]))},"显示 col1 列"),o("button",{class:"button-demo",onClick:l[5]||(l[5]=n=>t.showColumns(["col2"]))},"显示 col2 列"),o("button",{class:"button-demo",onClick:l[6]||(l[6]=n=>t.showColumns(["col3"]))},"显示 col3 列"),o("button",{class:"button-demo",onClick:l[7]||(l[7]=n=>t.showColumns(["col1","col2","col3"]))}," 显示 col1、col2、col3 列 "),C,h,m(s,{ref:"tableRef","border-y":"",columns:c.columns,"table-data":c.tableData,"column-hidden-option":c.columnHiddenOption},null,8,["columns","table-data","column-hidden-option"])])}const p=i(b,[["render",k]]);export{p as default};
