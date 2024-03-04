import{P as V,j as X,m as _,l as N,n as G,E as ie,o as r,a as w,e as h,q as s,s as C,I as ae,c as y,w as S,x as k,y as g,A as b,b as u,z as Z,t as se,v as ce,C as re,ao as Y,aj as P,d as m,ak as U,_ as z,r as L,F as de,G as ue,ap as q}from"./index-BWOAprk1.js";import{y as he,b as pe,k as D,g as A,d as fe,c as me,e as ve,a as ye,n as be,j as ge,_ as we,w as Ce}from"./base-DVofVk8m.js";import"./el-input-BfRQ1q77.js";import{g as xe,f as _e}from"./el-select-weHVvPpg.js";import{M as I}from"./mock-JSU2lZct.js";import{l as T,E as R,n as Ie,q as Se}from"./index-BL7SZCuo.js";import{U as M,C as F,I as B,t as Re,d as ke}from"./event-BE20p1dL.js";import"./debounce-D6eaSoDg.js";const Oe=e=>["",...he].includes(e),Ee=pe({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Oe},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:T},activeActionIcon:{type:T},activeIcon:{type:T},inactiveIcon:{type:T},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:fe(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}}),Te={[M]:e=>D(e)||V(e)||A(e),[F]:e=>D(e)||V(e)||A(e),[B]:e=>D(e)||V(e)||A(e)},De=["onClick"],Le=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Ve=["aria-hidden"],Ne=["aria-hidden"],Ae=["aria-hidden"],J="ElSwitch",Me=X({name:J}),Fe=X({...Me,props:Ee,emits:Te,setup(e,{expose:t,emit:o}){const i=e,{formItem:n}=me(),c=ve(),a=ye("switch"),{inputId:x}=be(i,{formItemContext:n}),f=ge(_(()=>i.loading)),O=N(i.modelValue!==!1),d=N(),Q=N(),$=_(()=>[a.b(),a.m(c.value),a.is("disabled",f.value),a.is("checked",p.value)]),ee=_(()=>[a.e("label"),a.em("label","left"),a.is("active",!p.value)]),te=_(()=>[a.e("label"),a.em("label","right"),a.is("active",p.value)]),oe=_(()=>({width:Se(i.width)}));G(()=>i.modelValue,()=>{O.value=!0});const K=_(()=>O.value?i.modelValue:!1),p=_(()=>K.value===i.activeValue);[i.activeValue,i.inactiveValue].includes(K.value)||(o(M,i.inactiveValue),o(F,i.inactiveValue),o(B,i.inactiveValue)),G(p,l=>{var v;d.value.checked=l,i.validateEvent&&((v=n==null?void 0:n.validate)==null||v.call(n,"change").catch(le=>ke()))});const E=()=>{const l=p.value?i.inactiveValue:i.activeValue;o(M,l),o(F,l),o(B,l),re(()=>{d.value.checked=p.value})},W=()=>{if(f.value)return;const{beforeChange:l}=i;if(!l){E();return}const v=l();[Y(v),D(v)].includes(!0)||Re(J,"beforeChange must return type `Promise<boolean>` or `boolean`"),Y(v)?v.then(H=>{H&&E()}).catch(H=>{}):v&&E()},ne=()=>{var l,v;(v=(l=d.value)==null?void 0:l.focus)==null||v.call(l)};return ie(()=>{d.value.checked=p.value}),t({focus:ne,checked:p}),(l,v)=>(r(),w("div",{class:C(s($)),onClick:ce(W,["prevent"])},[h("input",{id:s(x),ref_key:"input",ref:d,class:C(s(a).e("input")),type:"checkbox",role:"switch","aria-checked":s(p),"aria-disabled":s(f),"aria-label":l.label,name:l.name,"true-value":l.activeValue,"false-value":l.inactiveValue,disabled:s(f),tabindex:l.tabindex,onChange:E,onKeydown:ae(W,["enter"])},null,42,Le),!l.inlinePrompt&&(l.inactiveIcon||l.inactiveText)?(r(),w("span",{key:0,class:C(s(ee))},[l.inactiveIcon?(r(),y(s(R),{key:0},{default:S(()=>[(r(),y(k(l.inactiveIcon)))]),_:1})):g("v-if",!0),!l.inactiveIcon&&l.inactiveText?(r(),w("span",{key:1,"aria-hidden":s(p)},b(l.inactiveText),9,Ve)):g("v-if",!0)],2)):g("v-if",!0),h("span",{ref_key:"core",ref:Q,class:C(s(a).e("core")),style:se(s(oe))},[l.inlinePrompt?(r(),w("div",{key:0,class:C(s(a).e("inner"))},[l.activeIcon||l.inactiveIcon?(r(),y(s(R),{key:0,class:C(s(a).is("icon"))},{default:S(()=>[(r(),y(k(s(p)?l.activeIcon:l.inactiveIcon)))]),_:1},8,["class"])):l.activeText||l.inactiveText?(r(),w("span",{key:1,class:C(s(a).is("text")),"aria-hidden":!s(p)},b(s(p)?l.activeText:l.inactiveText),11,Ne)):g("v-if",!0)],2)):g("v-if",!0),h("div",{class:C(s(a).e("action"))},[l.loading?(r(),y(s(R),{key:0,class:C(s(a).is("loading"))},{default:S(()=>[u(s(Ie))]),_:1},8,["class"])):s(p)?Z(l.$slots,"active-action",{key:1},()=>[l.activeActionIcon?(r(),y(s(R),{key:0},{default:S(()=>[(r(),y(k(l.activeActionIcon)))]),_:1})):g("v-if",!0)]):s(p)?g("v-if",!0):Z(l.$slots,"inactive-action",{key:2},()=>[l.inactiveActionIcon?(r(),y(s(R),{key:0},{default:S(()=>[(r(),y(k(l.inactiveActionIcon)))]),_:1})):g("v-if",!0)])],2)],6),!l.inlinePrompt&&(l.activeIcon||l.activeText)?(r(),w("span",{key:1,class:C(s(te))},[l.activeIcon?(r(),y(s(R),{key:0},{default:S(()=>[(r(),y(k(l.activeIcon)))]),_:1})):g("v-if",!0),!l.activeIcon&&l.activeText?(r(),w("span",{key:1,"aria-hidden":!s(p)},b(l.activeText),9,Ae)):g("v-if",!0)],2)):g("v-if",!0)],10,De))}});var Be=we(Fe,[["__file","switch.vue"]]);const Pe=Ce(Be),Ue={name:"NormalDataGrid",components:{},mixins:[P],data(){return{columnWidthResizeOption:{enable:!0},cellSelectionOption:{enable:!1},editOption:{cellValueChange:({row:e,column:t})=>{console.log("cellValueChange row::",e),console.log("cellValueChange column::",t)}},dataRow:5e3,switchActiveColor:"#1890ff",switchInactiveColor:"rgba(0,0,0,.25)",enableColumnFixed:!0,enableLoading:!1,enableExpand:!0,enableRowRadio:!1,enableRowCheckbox:!1,sourceData:[],tableData:[],startRowIndex:0,filterConditions:[],cellStyleOption:{bodyCellClass:({row:e,column:t,rowIndex:o})=>{if(t.field==="proficiency")return"table-body-cell-proficiency"}},virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{stripe:!0,clickHighlight:!0,hoverHighlight:!0},sortOption:{sortChange:e=>{this.sortChange(e)}},radioOption:{selectedRowChange:({row:e})=>{}},checkboxOption:{selectedRowChange:({row:e,isSelected:t,selectedRowKeys:o})=>{},selectedAllChange:({isSelected:e,selectedRowKeys:t})=>{}},expandOption:{render:({row:e,column:t,rowIndex:o},i)=>u("p",null,[m("Hello everyone, My name is")," ",u("span",{style:"font-weight:bold;"},[e.name]),m(", I'm a "),e.profession,m(". And I'm living in")," ",e.address,m(".")])}}},computed:{currentLocal(){return U[this.currentDocLang].completeDemo.demo1},tableScrollWdith(){let e=0;const{columns:t}=this;return t.length&&t.forEach(o=>{typeof o.width=="number"&&(e+=o.width)}),e},columns(){let e=[{field:"rowIndex",key:"rowIndex",title:"#",width:50,fixed:this.enableColumnFixed?"left":"",renderBodyCell:this.renderRowIndex}];return this.enableRowRadio&&e.push({field:"radio",key:"radio",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"radio"}),this.enableRowCheckbox&&e.push({field:"checkbox",key:"checkbox",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"checkbox"}),this.enableExpand&&e.push({field:"expand",key:"expand",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"expand"}),e=e.concat([{title:"Basic Info",fixed:this.enableColumnFixed?"left":"",width:300,children:[{field:"name",key:"name",title:"Name",width:200,align:"left"},{field:"sex",key:"sex",title:"Sex",width:100,align:"center",sortBy:"",edit:!0,renderBodyCell:({row:t,column:o,rowIndex:i},n)=>{const a=t[o.field]===1?"icon-male":"icon-female";return u("i",{style:"font-size:20px;color:#666;",class:"demo-sex iconfont "+a},null)}}]},{title:"Personal Experience",align:"center",width:800,children:[{title:"Profession",field:"profession",key:"profession",width:200,align:"left"},{title:"IT Skills",children:[{field:"proficiency",key:"proficiency",title:"Proficiency",width:300,sortBy:"",edit:!0,renderBodyCell:({row:t,column:o,rowIndex:i},n)=>{const c=t[o.field],a=c>60?"demo-blue":c>30?"demo-orange":"demo-red";return u("div",{class:"proficiency-span-container"},[u("span",{class:"proficiency-span "+a,style:"width:"+c+"%;"},[c,m("%")])])}},{field:"skills",key:"skills",title:"Skills",width:300,align:"left",edit:!0,renderBodyCell:({row:t,column:o,rowIndex:i},n)=>{const c=t[o.field];return[{name:"Javascript",color:"#48a4ef"},{name:"Python",color:"#d8899c"},{name:"java",color:"#a88cd9"}].slice(0,c).map(f=>u("span",{class:"skill-span",style:"background-color:"+f.color},[f.name]))}}]}]},{field:"address",key:"address",title:"Address",width:350,align:"left"},{field:"status",key:"status",title:"Status",width:100,fixed:this.enableColumnFixed?"right":"",align:"left",filter:{filterList:[{value:0,label:"Working",selected:!1},{value:1,label:"Metting",selected:!1},{value:2,label:"Traveling",selected:!1}],isMultiple:!0,filterConfirm:t=>{const o=t.filter(i=>i.selected).map(i=>i.value);this.searchByNameField(o)},filterReset:t=>{this.searchByNameField([])}},renderBodyCell:({row:t,column:o,rowIndex:i},n)=>{const c=t[o.field],x=[{name:"Working",color:"#48a4ef"},{name:"Meeting",color:"#d8899c"},{name:"Traveling",color:"#a88cd9"}][c];return u("span",{class:"status-span",style:"color:"+x.color},[x.name])}}]),e}},created(){this.initSourceData()},mounted(){this.loadingInstance=this.$veLoading({target:this.$refs.tableRef.$el,name:"grid"})},unmounted(){},methods:{scrolling({startRowIndex:e,visibleStartIndex:t,visibleEndIndex:o,visibleAboveCount:i,visibleBelowCount:n}){this.startRowIndex=e},renderRowIndex({row:e,column:t,rowIndex:o}){return u("span",null,[o+this.startRowIndex+1])},searchByNameField(e){this.filterConditions=e,this.filter(),this.$refs.tableRef.scrollTo({top:0})},filter(){const e=this.filterConditions;this.tableData=this.sourceData.slice(0).filter(t=>e.length===0||e.includes(t.status))},sortChange(e){const t="sex",o="proficiency";e[t]||e[o]?this.tableData.sort((i,n)=>{if(e[t]){if(e[t]==="asc")return i[t]-n[t];if(e[t]==="desc")return n[t]-i[t]}else if(e[o]){if(e[o]==="asc")return i[o]-n[o];if(e[o]==="desc")return n[o]-i[o]}}):this.resetTableData(),this.$refs.tableRef.scrollTo({top:0})},switchLoading(){this.enableLoading?this.loadingInstance.show():this.loadingInstance.close()},resetTableData(){this.tableData=this.sourceData.slice(0),this.filter()},dataRowChange(){setTimeout(()=>{this.initSourceData(),this.$refs.tableRef.scrollTo({top:0})})},initSourceData(){const e=["Project Manager","User Interface Designer","Front-End Developer","Testor","Product Designer","System Designer"],t=[],o=this.dataRow;for(let i=0;i<o;i++)t.push({rowKey:i,name:I.Random.name(),sex:I.Random.boolean()?1:2,profession:e[I.Random.natural(0,5)],proficiency:I.Random.natural(5,85),skills:I.Random.natural(0,3),address:I.Random.county(!0),status:I.Random.natural(0,2)});this.sourceData=t,this.resetTableData()}}},ze={class:"normal-data-grid"},Ke={class:"operation"},We={class:"operation-item"},He={class:"operation-item"},Ge={class:"operation-item"},Ze={class:"operation-item"},Ye={class:"operation-item"},je={class:"operation-item"},Xe={class:"table-list"};function qe(e,t,o,i,n,c){const a=_e,x=xe,f=Pe,O=L("fan-table");return r(),w("div",ze,[h("div",Ke,[h("div",We,[m(b(c.currentLocal.dataRows)+" ",1),u(x,{modelValue:n.dataRow,"onUpdate:modelValue":t[0]||(t[0]=d=>n.dataRow=d),style:{width:"160px"},size:"small",onChange:c.dataRowChange},{default:S(()=>[(r(!0),w(de,null,ue(c.currentLocal.dataRowsOption,d=>(r(),y(a,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),h("div",He,[m(b(c.currentLocal.columnFixed)+" ",1),u(f,{modelValue:n.enableColumnFixed,"onUpdate:modelValue":t[1]||(t[1]=d=>n.enableColumnFixed=d),"active-color":n.switchActiveColor,"inactive-color":n.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),h("div",Ge,[m(b(c.currentLocal.expand)+" ",1),u(f,{modelValue:n.enableExpand,"onUpdate:modelValue":t[2]||(t[2]=d=>n.enableExpand=d),"active-color":n.switchActiveColor,"inactive-color":n.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),h("div",Ze,[m(b(c.currentLocal.loading)+" ",1),u(f,{modelValue:n.enableLoading,"onUpdate:modelValue":t[3]||(t[3]=d=>n.enableLoading=d),"active-color":n.switchActiveColor,"inactive-color":n.switchInactiveColor,onChange:c.switchLoading},null,8,["modelValue","active-color","inactive-color","onChange"])]),h("div",Ye,[m(b(c.currentLocal.radio)+" ",1),u(f,{modelValue:n.enableRowRadio,"onUpdate:modelValue":t[4]||(t[4]=d=>n.enableRowRadio=d),"active-color":n.switchActiveColor,"inactive-color":n.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),h("div",je,[m(b(c.currentLocal.checkbox)+" ",1),u(f,{modelValue:n.enableRowCheckbox,"onUpdate:modelValue":t[5]||(t[5]=d=>n.enableRowCheckbox=d),"active-color":n.switchActiveColor,"inactive-color":n.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])])]),h("div",Xe,[u(O,{id:"demo-loading-container",ref:"tableRef","fixed-header":"","border-y":"","max-height":500,"scroll-width":0,"sort-option":n.sortOption,"virtual-scroll-option":n.virtualScrollOption,columns:c.columns,"table-data":n.tableData,"row-key-field-name":"rowKey","cell-style-option":n.cellStyleOption,"expand-option":n.expandOption,"radio-option":n.radioOption,"checkbox-option":n.checkboxOption,"row-style-option":n.rowStyleOption,"cell-selection-option":n.cellSelectionOption,"column-width-resize-option":n.columnWidthResizeOption},null,8,["sort-option","virtual-scroll-option","columns","table-data","cell-style-option","expand-option","radio-option","checkbox-option","row-style-option","cell-selection-option","column-width-resize-option"])])])}const Je=z(Ue,[["render",qe]]),j=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],Qe={name:"SpreadSheet",mixins:[P],data(){return{startRowIndex:0,columnWidthResizeOption:{enable:!0},virtualScrollOption:{enable:!0,scrolling:this.scrolling},cellAutofillOption:{directionX:!0,directionY:!0,beforeAutofill:({direction:e,sourceSelectionRangeIndexes:t,targetSelectionRangeIndexes:o,sourceSelectionData:i,targetSelectionData:n})=>{},afterAutofill:({direction:e,sourceSelectionRangeIndexes:t,targetSelectionRangeIndexes:o,sourceSelectionData:i,targetSelectionData:n})=>{}},editOption:{beforeCellValueChange:({row:e,column:t,changeValue:o})=>{},afterCellValueChange:({row:e,column:t,changeValue:o})=>{}},contextmenuHeaderOption:{beforeShow:({isWholeColSelection:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{},afterMenuClick:({type:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCEL_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:({isWholeRowSelection:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",e),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},afterMenuClick:({type:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{console.log("---contextmenu body afterMenuClick--"),console.log("type::",e),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"EMPTY_ROW"},{type:"EMPTY_CELL"}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},tableData:[]}},computed:{currentLocal(){return U[this.currentDocLang].completeDemo.demo2.description},columns(){let e=[{field:"index",key:"index",operationColumn:!0,title:"",width:55,fixed:"left",renderBodyCell:this.renderRowIndex}];return e=e.concat(j.map(t=>({title:t,field:t,key:t,width:90,edit:!0}))),e}},created(){this.initTableData()},methods:{renderRowIndex({row:e,column:t,rowIndex:o}){return u("span",null,[o+this.startRowIndex+1])},scrolling({startRowIndex:e,visibleStartIndex:t,visibleEndIndex:o,visibleAboveCount:i,visibleBelowCount:n}){this.startRowIndex=e},initTableData(){const e=[];for(let t=0;t<5e3;t++){const o={rowKey:t};j.forEach(i=>{o[i]=""}),(t===1||t===3)&&(o.C="YOU",o.D="CAN",o.E="TRY",o.F="ENTER",o.G="SOME",o.H="WORDS",o.I="!!!"),e.push(o)}this.tableData=e}}},$e={class:"spreadsheet"},et=h("br",null,null,-1),tt=h("br",null,null,-1);function ot(e,t,o,i,n,c){const a=L("fan-table");return r(),w("div",$e,[h("div",null,[m(b(c.currentLocal)+" ",1),et,tt]),u(a,{style:{"word-break":"break-word"},"fixed-header":"","scroll-width":0,"max-height":500,"border-y":"",columns:c.columns,"table-data":n.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":n.virtualScrollOption,"cell-autofill-option":n.cellAutofillOption,"edit-option":n.editOption,"contextmenu-body-option":n.contextmenuBodyOption,"contextmenu-header-option":n.contextmenuHeaderOption,"row-style-option":n.rowStyleOption,"column-width-resize-option":n.columnWidthResizeOption},null,8,["columns","table-data","virtual-scroll-option","cell-autofill-option","edit-option","contextmenu-body-option","contextmenu-header-option","row-style-option","column-width-resize-option"])])}const nt=z(Qe,[["render",ot]]),lt="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9995%2031V36M14.0134%2027.7553L4.02734%2024.5106C5.39776%2020.2929%208.06824%2016.6173%2011.656%2014.0106C15.2438%2011.404%2019.5648%2010%2023.9995%2010C28.4343%2010%2032.7552%2011.404%2036.343%2014.0106C39.9308%2016.6173%2042.6013%2020.2929%2043.9717%2024.5106L33.9856%2027.7553H14.0134ZM14.0134%2027.7553C14.6986%2025.6465%2016.0339%2023.8087%2017.8278%2022.5053L14.0134%2027.7553ZM14.0134%2027.7553L23.9995%2031L14.0134%2027.7553ZM17.8278%2022.5053C19.6217%2021.202%2021.7821%2020.5%2023.9995%2020.5L17.8278%2022.5053ZM17.8278%2022.5053L23.9995%2031L17.8278%2022.5053ZM23.9995%2020.5C26.2169%2020.5%2028.3774%2021.202%2030.1713%2022.5053L23.9995%2020.5ZM23.9995%2020.5V31V20.5ZM30.1713%2022.5053C31.9652%2023.8087%2033.3004%2025.6465%2033.9856%2027.7553L30.1713%2022.5053ZM30.1713%2022.5053L23.9995%2031L30.1713%2022.5053ZM33.9856%2027.7553L23.9995%2031L33.9856%2027.7553Z'%20stroke='%23333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",it={name:"DemoPage",components:{NormalDataGrid:Je,SpreadSheet:nt,FoldingFan:q},mixins:[P],data(){return{Icon:lt}},computed:{currentLocal(){return U[this.currentDocLang].completeDemo}}},at={class:"demo-page"},st={class:"site-demo-container"},ct={class:"main-title"},rt={class:"demo-title"},dt={class:"demo-title-text"},ut={class:"demo-title last"},ht={class:"demo-title-text"};function pt(e,t,o,i,n,c){const a=q,x=L("NormalDataGrid"),f=L("SpreadSheet");return r(),w("div",at,[h("div",st,[h("h1",ct,[u(a),m(" vue-fantable ")]),h("div",rt,[h("div",dt,b(c.currentLocal.demo1.selection),1)]),u(x),h("div",ut,[h("div",ht,b(c.currentLocal.demo2.selection),1)]),u(f)])])}const xt=z(it,[["render",pt]]);export{xt as default};
