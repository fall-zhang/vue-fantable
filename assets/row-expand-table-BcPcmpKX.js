import{b as o,_ as c,r as d,o as r,a as s}from"./index-CvE8Fbe-.js";const p={name:"ChildTableComp",template:`
        <div class="child-table-comp">
            <span style="font-weight:bold;">Table Name:{{row.name}}</span>
            <fan-table
              :max-height="300"
              :fixed-header="true"
              style="width:100%"
              :columns="columns"
              :table-data="tableData"
              :virtual-scroll-option="{
                  enable: false,
              }"
            />
        </div>
    `,props:{row:Object},data(){return{columns:[{field:"col1",key:"a",title:"Col1"},{field:"col2",key:"b",title:"Col2"},{field:"col3",key:"c",title:"Col3"},{field:"col4",key:"d",title:"Col4"},{field:"col5",key:"e",title:"Col5"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5"}]}}},b={data(){return{virtualScrollOption:{enable:!0},expandOption:{defaultExpandedRowKeys:[2],render:({row:l,column:e,rowIndex:a},n)=>o(p,{row:l},null)},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:({row:l},e)=>o("span",{domPropsInnerHTML:l.name},null)},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},created(){this.initData()},methods:{initData(){const l=[];for(let e=0;e<1e4;e++)l.push({rowKey:e,name:`name${e}`,hobby:`hobby${e}`,address:`address${e}`});this.tableData=l}}};function m(l,e,a,n,t,u){const i=d("fan-table");return r(),s("div",null,[o(i,{"fixed-header":"","max-height":500,"virtual-scroll-option":t.virtualScrollOption,"expand-option":t.expandOption,columns:t.columns,"table-data":t.tableData,"row-key-field-name":"rowKey"},null,8,["virtual-scroll-option","expand-option","columns","table-data"])])}const h=c(b,[["render",m]]);export{h as default};
