import"./base-57trjWHS.js";import{E as d,a as p}from"./el-radio-group-9h3HEZv3.js";/* empty css                 */import{_,r as h,o as m,a as y,b as t,w as i,d as n,e as c}from"./index-crzR-Bjn.js";import"./event-1FCdoqwy.js";const b={data(){return{autofillType:"All",cellAutofillOption:{directionX:!0,directionY:!0},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"col1",key:"col1",title:"Col1"},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},created(){this.initTableData()},methods:{autofillTypeChang(o){this.cellAutofillOption.directionX=!1,this.cellAutofillOption.directionY=!1,o==="Horizontal"?this.cellAutofillOption.directionX=!0:o==="Vertical"?this.cellAutofillOption.directionY=!0:o==="All"&&(this.cellAutofillOption.directionX=!0,this.cellAutofillOption.directionY=!0)},initTableData(){const o=[];for(let l=0;l<8;l++)o.push({rowKey:l,col1:`A${l+1}`,col2:`B${l+1}`,col3:`C${l+1}`,col4:`D${l+1}`,col5:`E${l+1}`,col6:`F${l+1}`,col7:`G${l+1}`,col8:`H${l+1}`});this.tableData=o}}},A=c("br",null,null,-1),C=c("br",null,null,-1);function k(o,l,O,g,e,r){const a=d,s=p,u=h("fan-table");return m(),y("div",null,[t(s,{modelValue:e.autofillType,"onUpdate:modelValue":l[0]||(l[0]=f=>e.autofillType=f),onChange:r.autofillTypeChang},{default:i(()=>[t(a,{label:"Horizontal"},{default:i(()=>[n("Horizontal")]),_:1}),t(a,{label:"Vertical"},{default:i(()=>[n("Vertical")]),_:1}),t(a,{label:"All"},{default:i(()=>[n("All")]),_:1})]),_:1},8,["modelValue","onChange"]),A,C,t(u,{"fixed-header":"","border-y":"",columns:e.columns,"table-data":e.tableData,"cell-autofill-option":e.cellAutofillOption,"row-key-field-name":"rowKey","row-style-option":e.rowStyleOption},null,8,["columns","table-data","cell-autofill-option","row-style-option"])])}const H=_(b,[["render",k]]);export{H as default};
