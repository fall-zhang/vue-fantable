import{_ as s,r as d,o as f,a as h,e as o,b as u}from"./index-6s-dGoXs.js";const w={data(){return{startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellSelectionOption:{enable:!0},columns:[{field:"",key:"a",title:"",width:15,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:({row:e,column:l,rowIndex:i},n)=>i+this.startRowIndex+1},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},created(){this.initTableData()},methods:{setAllCellSelection(){this.$refs.tableRef.setAllCellSelection()},setRangeCellSelection(){this.$refs.tableRef.setRangeCellSelection({startRowKey:30,startColKey:"col2",endRowKey:32,endColKey:"col4",isScrollToStartCell:!0})},initTableData(){const e=[];for(let l=0;l<50;l++)e.push({rowKey:l,col1:`A${l+1}`,col2:`B${l+1}`,col3:`C${l+1}`,col4:`D${l+1}`,col5:`E${l+1}`,col6:`F${l+1}`,col7:`G${l+1}`,col8:`H${l+1}`});this.tableData=e},scrolling({startRowIndex:e}){this.startRowIndex=e}}},b=o("br",null,null,-1),y=o("br",null,null,-1);function p(e,l,i,n,t,c){const r=d("fan-table");return f(),h("div",null,[o("button",{class:"button-demo",onClick:l[0]||(l[0]=a=>c.setAllCellSelection())},"单元格全选"),o("button",{class:"button-demo",onClick:l[1]||(l[1]=a=>c.setRangeCellSelection())},"区域选择"),b,y,u(r,{ref:"tableRef","fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:t.columns,"table-data":t.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":t.virtualScrollOption,"row-style-option":t.rowStyleOption},null,8,["columns","table-data","virtual-scroll-option","row-style-option"])])}const g=s(w,[["render",p]]);export{g as default};
