import{_ as g,r as i,o as p,a as y,e as l,z as u,b as h}from"./index-DhQICo8y.js";let a=[];const w={data(){return{pageIndex:1,pageSize:10,selectedRowKeysCollection:[],checkboxOption:{selectedRowKeys:[],selectedRowChange:({row:e,isSelected:t,selectedRowKeys:o})=>{this.changeSelectedRowKeys(e,t)},selectedAllChange:({isSelected:e,selectedRowKeys:t})=>{this.changeSelectAll(e,t)}},columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:({row:e,column:t,rowIndex:o},n)=>(this.pageIndex-1)*this.pageSize+o+1},{field:"",key:"checkbox",type:"checkbox",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",align:"center"},{field:"date",key:"c",title:"Date",align:"left"},{field:"hobby",key:"d",title:"Hobby",align:"left"},{field:"address",key:"e",title:"Address",width:""}]}},computed:{currentPageData(){const{pageIndex:e,pageSize:t}=this;return a.slice((e-1)*t,e*t)},totalCount(){return a.length}},created(){this.initDatabase()},methods:{changeSelectedRowKeys(e,t){const o=e.rowKey;if(t)this.checkboxOption.selectedRowKeys.push(o),this.selectedRowKeysCollection.push(o);else{const n=this.checkboxOption.selectedRowKeys.indexOf(o);this.checkboxOption.selectedRowKeys.splice(n,1),this.selectedRowKeysCollection.splice(n,1)}},changeSelectAll(e,t){this.checkboxOption.selectedRowKeys=t,e?this.selectedRowKeysCollection=this.selectedRowKeysCollection.concat(t):this.currentPageData.forEach((o,n)=>{this.selectedRowKeysCollection.indexOf(o.rowKey)>-1&&this.selectedRowKeysCollection.splice(n,1)})},resetSelectedRowKeys(){this.checkboxOption.selectedRowKeys=[];const e=this.selectedRowKeysCollection;e.length&&this.currentPageData.forEach(t=>{e.indexOf(t.rowKey)>-1&&this.checkboxOption.selectedRowKeys.push(t.rowKey)})},pageNumberChange(e){this.pageIndex=e,this.resetSelectedRowKeys()},pageSizeChange(e){this.pageIndex=1,this.pageSize=e,this.resetSelectedRowKeys()},initDatabase(){a=[];for(let e=0;e<1e3;e++)a.push({rowKey:e,name:"John"+e,date:"1900-05-20",hobby:"coding and coding repeat"+e,address:"No.1 Century Avenue, Shanghai"+e})}}},b={class:"table-pagination"};function K(e,t,o,n,s,c){const d=i("fan-table"),r=i("ve-pagination");return p(),y("div",null,[l("div",null,"当前选中的行key："+u(s.selectedRowKeysCollection),1),h(d,{columns:s.columns,"table-data":c.currentPageData,"checkbox-option":s.checkboxOption,"row-key-field-name":"rowKey"},null,8,["columns","table-data","checkbox-option"]),l("div",b,[h(r,{total:c.totalCount,"page-index":s.pageIndex,"page-size":s.pageSize,onOnPageNumberChange:c.pageNumberChange,onOnPageSizeChange:c.pageSizeChange},null,8,["total","page-index","page-size","onOnPageNumberChange","onOnPageSizeChange"])])])}const x=g(w,[["render",K]]);export{x as default};
