import{_ as s,r as c,o as u,a as m,e,d as n,z as f,b}from"./index-6s-dGoXs.js";const w={data(){return{msg:"",tempData:[],tableData:[],columns:[{field:"col1",key:"a",title:"col1",width:"10%",fixed:"left"},{field:"col2",key:"b",title:"col2",width:"10%"},{field:"col3",key:"c",title:"col3",width:"10%"},{field:"col4",key:"d",title:"col4",width:"10%"},{field:"col5",key:"e",title:"col5",width:"10%"},{field:"col6",key:"f",title:"col6",width:"10%"},{field:"col7",key:"g",title:"col7",width:"10%"},{field:"col8",key:"h",title:"col8",width:"10%"},{field:"col9",key:"i",title:"col9",width:"10%"},{field:"col10",key:"j",title:"col10",width:""}]}},methods:{initData(i){this.tempData=[];for(let t=0;t<i;t++){const r={col1:t,col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"};this.tempData.push(r)}},reRender(){this.tableData=this.tempData.slice(0);const i=window.performance.now();setTimeout(()=>{this.msg="render took: "+(window.performance.now()-i).toFixed(2)+"ms"},0)},unmount(){this.tableData=this.tempData=[];const i=window.performance.now();setTimeout(()=>{this.msg="unmount took: "+(window.performance.now()-i).toFixed(2)+"ms"},0)}}},k=e("br",null,null,-1),h=e("br",null,null,-1),D=e("br",null,null,-1),p=e("br",null,null,-1);function y(i,t,r,x,a,l){const d=c("fan-table");return u(),m("div",null,[e("button",{onClick:t[0]||(t[0]=o=>l.initData(100))},"100条"),n("   "),e("button",{onClick:t[1]||(t[1]=o=>l.initData(1e3))},"1000条"),n("   "),e("button",{onClick:t[2]||(t[2]=o=>l.initData(3e3))},"3000条"),n("   "),e("button",{onClick:t[3]||(t[3]=o=>l.initData(1e4))},"10000条"),n("   "),e("button",{onClick:t[4]||(t[4]=o=>l.initData(1e5))},"100000条"),n("   "),k,h,e("button",{onClick:t[5]||(t[5]=(...o)=>l.reRender&&l.reRender(...o))},"reRender"),n("   "),e("button",{onClick:t[6]||(t[6]=(...o)=>l.unmount&&l.unmount(...o))},"unmount"),n("   "+f(a.msg)+" ",1),D,p,b(d,{"scroll-width":1600,style:{height:"500px"},"fixed-header":"",columns:a.columns,"table-data":a.tableData,"border-around":!0,"border-x":!0,"border-y":!1},null,8,["columns","table-data"])])}const g=s(w,[["render",y]]);export{g as default};
