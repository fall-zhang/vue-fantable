import{_ as r,r as s,o as g,c as d}from"./index-DhQICo8y.js";const l={data(){return{sortOption:{multipleSort:!0,sortChange:e=>{console.log("sortChange::",e),this.sortChange(e)}},columns:[{field:"name",key:"a",title:"Name",align:"left"},{field:"age",key:"b",title:"Age",align:"center",sortBy:""},{field:"weight",key:"c",title:"Weight(kg)",align:"center",sortBy:"asc"},{field:"hobby",key:"d",title:"Hobby",align:"center"},{field:"address",key:"e",title:"Address",align:"left"}],tableData:[{name:"John",age:25,weight:66,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",age:20,weight:70,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",age:18,weight:65,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",age:17,weight:80,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",age:26,weight:72,hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{sortChange(e){const o=this.tableData.slice(0);o.sort((t,n)=>{if(e.age){if(e.age==="asc")return t.age-n.age;if(e.age==="desc")return n.age-t.age}return 0}),o.sort((t,n)=>{if(e.weight){if(e.weight==="asc")return t.weight-n.weight;if(e.weight==="desc")return n.weight-t.weight}return 0}),this.tableData=o}}};function c(e,o,t,n,a,h){const i=s("fan-table");return g(),d(i,{columns:a.columns,"table-data":a.tableData,"sort-option":a.sortOption,"border-y":""},null,8,["columns","table-data","sort-option"])}const b=r(l,[["render",c]]);export{b as default};
