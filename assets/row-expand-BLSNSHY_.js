import{b as a,d as l,_ as d,r as s,o as c,a as p}from"./index-BgIuBINE.js";const m={data(){return{virtualScrollOption:{enable:!0},expandOption:{render:({row:t,column:e,rowIndex:o},r)=>a("p",null,[l("My name is "),a("span",{style:"color:#1890ff;"},[t.name]),l(",I'm living in "),t.address])},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:t},e)=>a("span",{domPropsInnerHTML:t.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{initData(){const t=[];for(let e=0;e<1e4;e++)t.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=t}}};function u(t,e,o,r,n,f){const i=s("fan-table");return c(),p("div",null,[a(i,{"fixed-header":"","max-height":500,"virtual-scroll-option":n.virtualScrollOption,"expand-option":n.expandOption,columns:n.columns,"table-data":n.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","expand-option","columns","table-data"])])}const h=d(m,[["render",u]]);export{h as default};
