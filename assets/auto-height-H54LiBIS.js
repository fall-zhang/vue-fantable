import{b as n,_ as i,r as s,o as d,a as c}from"./index-g2bFAzY6.js";const u={data(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:t},e)=>n("span",{domPropsInnerHTML:t.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{getRandom(t,e){return Math.floor(Math.random()*(e-t)+t)},initData(){const t=[];for(let e=0;e<1e4;e++){let l="";if(e%2===0){const o=this.getRandom(3,5);for(let a=0;a<o;a++)l+="this is the long word.<br />"}else l=`name${e}`;t.push({rowKey:e,index:e,name:l,hobby:`hobby${e}`,address:`address${e}`})}this.tableData=t}}};function f(t,e,l,o,a,h){const r=s("fan-table");return d(),c("div",null,[n(r,{"fixed-header":"","max-height":500,"virtual-scroll-option":a.virtualScrollOption,columns:a.columns,"table-data":a.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","columns","table-data"])])}const b=i(u,[["render",f]]);export{b as default};
