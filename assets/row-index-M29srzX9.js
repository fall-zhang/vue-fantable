import"./base-qBWUFMhd.js";import{E as h}from"./el-button-R3wSAfJM.js";import{E as m}from"./el-input-eSoSiCgL.js";import{b as a,_ as p,r as b,o as f,a as _,w,d as x,e as n}from"./index-WVU3T6XN.js";import{M as y}from"./mock-oLMOesb2.js";import"./index-DYCJPSO7.js";import"./event-1FCdoqwy.js";const g={data(){return{searchValue:"",startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},columns:[{field:"index",key:"index",title:"#",width:200,align:"left",renderBodyCell:this.renderRowIndex},{field:"name",key:"name",title:"Name",width:200,align:"left"},{field:"hobby",key:"hobby",title:"Hobby",width:300,align:"left"},{field:"address",key:"address",title:"Address",width:"",align:"left"}],tableData:[],sourceData:[]}},created(){this.initData()},methods:{scrolling({startRowIndex:t,visibleStartIndex:e,visibleEndIndex:l,visibleAboveCount:s,visibleBelowCount:o}){this.startRowIndex=t,console.log("startRowIndex::",t),console.log("visibleStartIndex::",e),console.log("visibleEndIndex::",l),console.log("visibleAboveCount::",s),console.log("visibleBelowCount::",o)},renderRowIndex({row:t,column:e,rowIndex:l}){return a("span",{class:"text-bold",style:"color:#1890ff;"},[l+this.startRowIndex+1])},search(){const t=this.searchValue;this.tableData=this.sourceData.filter(e=>!t.length||e.name.toLowerCase().includes(t.toLowerCase()))},initData(){const t=[];for(let e=0;e<1e3;e++)t.push({rowKey:e,name:y.Random.name(),hobby:"hobby",address:"address"});this.sourceData=t,this.tableData=this.sourceData.slice(0)}}},v=n("br",null,null,-1),V=n("br",null,null,-1);function k(t,e,l,s,o,r){const i=m,c=h,d=b("fan-table");return f(),_("div",null,[a(i,{modelValue:o.searchValue,"onUpdate:modelValue":e[0]||(e[0]=u=>o.searchValue=u),style:{width:"250px"},placeholder:"search name"},null,8,["modelValue"]),a(c,{type:"primary",onClick:r.search},{default:w(()=>[x("Search")]),_:1},8,["onClick"]),v,V,a(d,{"max-height":500,"virtual-scroll-option":o.virtualScrollOption,columns:o.columns,"table-data":o.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}const S=p(g,[["render",k]]);export{S as default};
