import{b as r,_ as s,r as l,o as i,c}from"./index-5MF4L8d4.js";const b={name:"OtherComp",template:`
    <div class="other-comp">
      <span style="color:#1890ff;">row index: {{rowIndex}}</span>
    </div>
    `,props:{row:Object,column:Object,rowIndex:Number}},m={data(){return{columns:[{field:"",key:"a",title:"Row Number",width:200,align:"center",renderBodyCell:({row:e,column:n,rowIndex:t},a)=>r(b,{row:e,column:n,rowIndex:t},null)},{field:"date",key:"b",title:"Date",width:200,align:"center"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{editRow(e){alert(`eidt row number:${e}`)},deleteRow(e){this.tableData.splice(e,1)}}};function u(e,n,t,a,o,h){const d=l("fan-table");return i(),c(d,{style:{width:"100%"},"border-y":"",columns:o.columns,"table-data":o.tableData},null,8,["columns","table-data"])}const y=s(m,[["render",u]]);export{y as default};
