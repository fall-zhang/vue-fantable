import{P as M,j as ee,m as S,l as B,n as F,E as ce,o as c,a as C,e as h,q as s,s as x,I as de,c as b,w as I,x as O,y as w,z as y,b as d,A as q,t as J,v as ue,C as he,ao as Q,M as pe,ah as H,d as v,ai as G,_ as Z,r as V,F as fe,G as me,ap as te}from"./index-WVU3T6XN.js";import{v as ve,b as be,j as L,g as P,d as ye,c as ge,e as we,a as Ce,l as xe,h as Se,_ as _e,w as Ie}from"./base-qBWUFMhd.js";import"./el-input-eSoSiCgL.js";import{g as Re,f as ke}from"./el-select-S0CDPkeH.js";import{M as _}from"./mock-oLMOesb2.js";import{l as D,E as R,n as Oe,u as Ee,q as Te}from"./index-DYCJPSO7.js";import{U,C as z,I as K,t as De,d as Le}from"./event-1FCdoqwy.js";import"./debounce-owP990zo.js";const Ve=e=>["",...ve].includes(e),Ne=be({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Ve},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:D},activeActionIcon:{type:D},activeIcon:{type:D},inactiveIcon:{type:D},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:ye(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),Ae={[U]:e=>L(e)||M(e)||P(e),[z]:e=>L(e)||M(e)||P(e),[K]:e=>L(e)||M(e)||P(e)},Me=["onClick"],Be=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Fe=["aria-hidden"],Pe=["aria-hidden"],Ue=["aria-hidden"],W="ElSwitch",ze=ee({name:W}),Ke=ee({...ze,props:Ne,emits:Ae,setup(e,{expose:t,emit:o}){const i=e,l=pe(),{formItem:a}=ge(),m=we(),r=Ce("switch");(n=>{n.forEach(f=>{Ee({from:f[0],replacement:f[1],scope:W,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},S(()=>{var T;return!!((T=l.vnode.props)!=null&&T[f[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:N}=xe(i,{formItemContext:a}),u=Se(S(()=>i.loading)),A=B(i.modelValue!==!1),k=B(),oe=B(),le=S(()=>[r.b(),r.m(m.value),r.is("disabled",u.value),r.is("checked",p.value)]),ne=S(()=>[r.e("label"),r.em("label","left"),r.is("active",!p.value)]),ie=S(()=>[r.e("label"),r.em("label","right"),r.is("active",p.value)]),ae=S(()=>({width:Te(i.width)}));F(()=>i.modelValue,()=>{A.value=!0}),F(()=>i.value,()=>{A.value=!1});const Y=S(()=>A.value?i.modelValue:i.value),p=S(()=>Y.value===i.activeValue);[i.activeValue,i.inactiveValue].includes(Y.value)||(o(U,i.inactiveValue),o(z,i.inactiveValue),o(K,i.inactiveValue)),F(p,n=>{var f;k.value.checked=n,i.validateEvent&&((f=a==null?void 0:a.validate)==null||f.call(a,"change").catch(T=>Le()))});const E=()=>{const n=p.value?i.inactiveValue:i.activeValue;o(U,n),o(z,n),o(K,n),he(()=>{k.value.checked=p.value})},X=()=>{if(u.value)return;const{beforeChange:n}=i;if(!n){E();return}const f=n();[Q(f),L(f)].includes(!0)||De(W,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(f)?f.then(j=>{j&&E()}).catch(j=>{}):f&&E()},se=S(()=>r.cssVarBlock({...i.activeColor?{"on-color":i.activeColor}:null,...i.inactiveColor?{"off-color":i.inactiveColor}:null,...i.borderColor?{"border-color":i.borderColor}:null})),re=()=>{var n,f;(f=(n=k.value)==null?void 0:n.focus)==null||f.call(n)};return ce(()=>{k.value.checked=p.value}),t({focus:re,checked:p}),(n,f)=>(c(),C("div",{class:x(s(le)),style:J(s(se)),onClick:ue(X,["prevent"])},[h("input",{id:s(N),ref_key:"input",ref:k,class:x(s(r).e("input")),type:"checkbox",role:"switch","aria-checked":s(p),"aria-disabled":s(u),"aria-label":n.label,name:n.name,"true-value":n.activeValue,"false-value":n.inactiveValue,disabled:s(u),tabindex:n.tabindex,onChange:E,onKeydown:de(X,["enter"])},null,42,Be),!n.inlinePrompt&&(n.inactiveIcon||n.inactiveText)?(c(),C("span",{key:0,class:x(s(ne))},[n.inactiveIcon?(c(),b(s(R),{key:0},{default:I(()=>[(c(),b(O(n.inactiveIcon)))]),_:1})):w("v-if",!0),!n.inactiveIcon&&n.inactiveText?(c(),C("span",{key:1,"aria-hidden":s(p)},y(n.inactiveText),9,Fe)):w("v-if",!0)],2)):w("v-if",!0),h("span",{ref_key:"core",ref:oe,class:x(s(r).e("core")),style:J(s(ae))},[n.inlinePrompt?(c(),C("div",{key:0,class:x(s(r).e("inner"))},[n.activeIcon||n.inactiveIcon?(c(),b(s(R),{key:0,class:x(s(r).is("icon"))},{default:I(()=>[(c(),b(O(s(p)?n.activeIcon:n.inactiveIcon)))]),_:1},8,["class"])):n.activeText||n.inactiveText?(c(),C("span",{key:1,class:x(s(r).is("text")),"aria-hidden":!s(p)},y(s(p)?n.activeText:n.inactiveText),11,Pe)):w("v-if",!0)],2)):w("v-if",!0),h("div",{class:x(s(r).e("action"))},[n.loading?(c(),b(s(R),{key:0,class:x(s(r).is("loading"))},{default:I(()=>[d(s(Oe))]),_:1},8,["class"])):s(p)?q(n.$slots,"active-action",{key:1},()=>[n.activeActionIcon?(c(),b(s(R),{key:0},{default:I(()=>[(c(),b(O(n.activeActionIcon)))]),_:1})):w("v-if",!0)]):s(p)?w("v-if",!0):q(n.$slots,"inactive-action",{key:2},()=>[n.inactiveActionIcon?(c(),b(s(R),{key:0},{default:I(()=>[(c(),b(O(n.inactiveActionIcon)))]),_:1})):w("v-if",!0)])],2)],6),!n.inlinePrompt&&(n.activeIcon||n.activeText)?(c(),C("span",{key:1,class:x(s(ie))},[n.activeIcon?(c(),b(s(R),{key:0},{default:I(()=>[(c(),b(O(n.activeIcon)))]),_:1})):w("v-if",!0),!n.activeIcon&&n.activeText?(c(),C("span",{key:1,"aria-hidden":!s(p)},y(n.activeText),9,Ue)):w("v-if",!0)],2)):w("v-if",!0)],14,Me))}});var We=_e(Ke,[["__file","switch.vue"]]);const He=Ie(We),Ge={name:"NormalDataGrid",components:{},mixins:[H],data(){return{columnWidthResizeOption:{enable:!0},cellSelectionOption:{enable:!1},editOption:{cellValueChange:({row:e,column:t})=>{console.log("cellValueChange row::",e),console.log("cellValueChange column::",t)}},dataRow:5e3,switchActiveColor:"#1890ff",switchInactiveColor:"rgba(0,0,0,.25)",enableColumnFixed:!0,enableLoading:!1,enableExpand:!0,enableRowRadio:!1,enableRowCheckbox:!1,sourceData:[],tableData:[],startRowIndex:0,filterConditions:[],cellStyleOption:{bodyCellClass:({row:e,column:t,rowIndex:o})=>{if(t.field==="proficiency")return"table-body-cell-proficiency"}},virtualScrollOption:{enable:!0,scrolling:this.scrolling},rowStyleOption:{stripe:!0,clickHighlight:!0,hoverHighlight:!0},sortOption:{sortChange:e=>{this.sortChange(e)}},radioOption:{selectedRowChange:({row:e})=>{}},checkboxOption:{selectedRowChange:({row:e,isSelected:t,selectedRowKeys:o})=>{},selectedAllChange:({isSelected:e,selectedRowKeys:t})=>{}},expandOption:{render:({row:e,column:t,rowIndex:o},i)=>d("p",null,[v("Hello everyone, My name is")," ",d("span",{style:"font-weight:bold;"},[e.name]),v(", I'm a "),e.profession,v(". And I'm living in")," ",e.address,v(".")])}}},computed:{currentLocal(){return G[this.currentDocLang].completeDemo.demo1},tableScrollWdith(){let e=0;const{columns:t}=this;return t.length&&t.forEach(o=>{typeof o.width=="number"&&(e+=o.width)}),e},columns(){let e=[{field:"rowIndex",key:"rowIndex",title:"#",width:50,fixed:this.enableColumnFixed?"left":"",renderBodyCell:this.renderRowIndex}];return this.enableRowRadio&&e.push({field:"radio",key:"radio",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"radio"}),this.enableRowCheckbox&&e.push({field:"checkbox",key:"checkbox",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"checkbox"}),this.enableExpand&&e.push({field:"expand",key:"expand",title:"",width:100,fixed:this.enableColumnFixed?"left":"",type:"expand"}),e=e.concat([{title:"Basic Info",fixed:this.enableColumnFixed?"left":"",width:300,children:[{field:"name",key:"name",title:"Name",width:200,align:"left"},{field:"sex",key:"sex",title:"Sex",width:100,align:"center",sortBy:"",edit:!0,renderBodyCell:({row:t,column:o,rowIndex:i},l)=>{const m=t[o.field]===1?"icon-male":"icon-female";return d("i",{style:"font-size:20px;color:#666;",class:"demo-sex iconfont "+m},null)}}]},{title:"Personal Experience",align:"center",width:800,children:[{title:"Profession",field:"profession",key:"profession",width:200,align:"left"},{title:"IT Skills",children:[{field:"proficiency",key:"proficiency",title:"Proficiency",width:300,sortBy:"",edit:!0,renderBodyCell:({row:t,column:o,rowIndex:i},l)=>{const a=t[o.field],m=a>60?"demo-blue":a>30?"demo-orange":"demo-red";return d("div",{class:"proficiency-span-container"},[d("span",{class:"proficiency-span "+m,style:"width:"+a+"%;"},[a,v("%")])])}},{field:"skills",key:"skills",title:"Skills",width:300,align:"left",edit:!0,renderBodyCell:({row:t,column:o,rowIndex:i},l)=>{const a=t[o.field];return[{name:"Javascript",color:"#48a4ef"},{name:"Python",color:"#d8899c"},{name:"java",color:"#a88cd9"}].slice(0,a).map(g=>d("span",{class:"skill-span",style:"background-color:"+g.color},[g.name]))}}]}]},{field:"address",key:"address",title:"Address",width:350,align:"left"},{field:"status",key:"status",title:"Status",width:100,fixed:this.enableColumnFixed?"right":"",align:"left",filter:{filterList:[{value:0,label:"Working",selected:!1},{value:1,label:"Metting",selected:!1},{value:2,label:"Traveling",selected:!1}],isMultiple:!0,filterConfirm:t=>{const o=t.filter(i=>i.selected).map(i=>i.value);this.searchByNameField(o)},filterReset:t=>{this.searchByNameField([])}},renderBodyCell:({row:t,column:o,rowIndex:i},l)=>{const a=t[o.field],r=[{name:"Working",color:"#48a4ef"},{name:"Meeting",color:"#d8899c"},{name:"Traveling",color:"#a88cd9"}][a];return d("span",{class:"status-span",style:"color:"+r.color},[r.name])}}]),e}},created(){this.initSourceData()},mounted(){this.loadingInstance=this.$veLoading({target:this.$refs.tableRef.$el,name:"grid"})},unmounted(){},methods:{scrolling({startRowIndex:e,visibleStartIndex:t,visibleEndIndex:o,visibleAboveCount:i,visibleBelowCount:l}){this.startRowIndex=e},renderRowIndex({row:e,column:t,rowIndex:o}){return d("span",null,[o+this.startRowIndex+1])},searchByNameField(e){this.filterConditions=e,this.filter(),this.$refs.tableRef.scrollTo({top:0})},filter(){const e=this.filterConditions;this.tableData=this.sourceData.slice(0).filter(t=>e.length===0||e.includes(t.status))},sortChange(e){const t="sex",o="proficiency";e[t]||e[o]?this.tableData.sort((i,l)=>{if(e[t]){if(e[t]==="asc")return i[t]-l[t];if(e[t]==="desc")return l[t]-i[t]}else if(e[o]){if(e[o]==="asc")return i[o]-l[o];if(e[o]==="desc")return l[o]-i[o]}}):this.resetTableData(),this.$refs.tableRef.scrollTo({top:0})},switchLoading(){this.enableLoading?this.loadingInstance.show():this.loadingInstance.close()},resetTableData(){this.tableData=this.sourceData.slice(0),this.filter()},dataRowChange(){setTimeout(()=>{this.initSourceData(),this.$refs.tableRef.scrollTo({top:0})})},initSourceData(){const e=["Project Manager","User Interface Designer","Front-End Developer","Testor","Product Designer","System Designer"],t=[],o=this.dataRow;for(let i=0;i<o;i++)t.push({rowKey:i,name:_.Random.name(),sex:_.Random.boolean()?1:2,profession:e[_.Random.natural(0,5)],proficiency:_.Random.natural(5,85),skills:_.Random.natural(0,3),address:_.Random.county(!0),status:_.Random.natural(0,2)});this.sourceData=t,this.resetTableData()}}},Ze={class:"normal-data-grid"},Ye={class:"operation"},Xe={class:"operation-item"},je={class:"operation-item"},qe={class:"operation-item"},Je={class:"operation-item"},Qe={class:"operation-item"},$e={class:"operation-item"},et={class:"table-list"};function tt(e,t,o,i,l,a){const m=ke,r=Re,g=He,N=V("fan-table");return c(),C("div",Ze,[h("div",Ye,[h("div",Xe,[v(y(a.currentLocal.dataRows)+" ",1),d(r,{modelValue:l.dataRow,"onUpdate:modelValue":t[0]||(t[0]=u=>l.dataRow=u),style:{width:"160px"},size:"small",onChange:a.dataRowChange},{default:I(()=>[(c(!0),C(fe,null,me(a.currentLocal.dataRowsOption,u=>(c(),b(m,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),h("div",je,[v(y(a.currentLocal.columnFixed)+" ",1),d(g,{modelValue:l.enableColumnFixed,"onUpdate:modelValue":t[1]||(t[1]=u=>l.enableColumnFixed=u),"active-color":l.switchActiveColor,"inactive-color":l.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),h("div",qe,[v(y(a.currentLocal.expand)+" ",1),d(g,{modelValue:l.enableExpand,"onUpdate:modelValue":t[2]||(t[2]=u=>l.enableExpand=u),"active-color":l.switchActiveColor,"inactive-color":l.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),h("div",Je,[v(y(a.currentLocal.loading)+" ",1),d(g,{modelValue:l.enableLoading,"onUpdate:modelValue":t[3]||(t[3]=u=>l.enableLoading=u),"active-color":l.switchActiveColor,"inactive-color":l.switchInactiveColor,onChange:a.switchLoading},null,8,["modelValue","active-color","inactive-color","onChange"])]),h("div",Qe,[v(y(a.currentLocal.radio)+" ",1),d(g,{modelValue:l.enableRowRadio,"onUpdate:modelValue":t[4]||(t[4]=u=>l.enableRowRadio=u),"active-color":l.switchActiveColor,"inactive-color":l.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])]),h("div",$e,[v(y(a.currentLocal.checkbox)+" ",1),d(g,{modelValue:l.enableRowCheckbox,"onUpdate:modelValue":t[5]||(t[5]=u=>l.enableRowCheckbox=u),"active-color":l.switchActiveColor,"inactive-color":l.switchInactiveColor},null,8,["modelValue","active-color","inactive-color"])])]),h("div",et,[d(N,{id:"demo-loading-container",ref:"tableRef","fixed-header":"","border-y":"","max-height":500,"scroll-width":0,"sort-option":l.sortOption,"virtual-scroll-option":l.virtualScrollOption,columns:a.columns,"table-data":l.tableData,"row-key-field-name":"rowKey","cell-style-option":l.cellStyleOption,"expand-option":l.expandOption,"radio-option":l.radioOption,"checkbox-option":l.checkboxOption,"row-style-option":l.rowStyleOption,"cell-selection-option":l.cellSelectionOption,"column-width-resize-option":l.columnWidthResizeOption},null,8,["sort-option","virtual-scroll-option","columns","table-data","cell-style-option","expand-option","radio-option","checkbox-option","row-style-option","cell-selection-option","column-width-resize-option"])])])}const ot=Z(Ge,[["render",tt]]),$=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],lt={name:"SpreadSheet",mixins:[H],data(){return{startRowIndex:0,columnWidthResizeOption:{enable:!0},virtualScrollOption:{enable:!0,scrolling:this.scrolling},cellAutofillOption:{directionX:!0,directionY:!0,beforeAutofill:({direction:e,sourceSelectionRangeIndexes:t,targetSelectionRangeIndexes:o,sourceSelectionData:i,targetSelectionData:l})=>{},afterAutofill:({direction:e,sourceSelectionRangeIndexes:t,targetSelectionRangeIndexes:o,sourceSelectionData:i,targetSelectionData:l})=>{}},editOption:{beforeCellValueChange:({row:e,column:t,changeValue:o})=>{},afterCellValueChange:({row:e,column:t,changeValue:o})=>{}},contextmenuHeaderOption:{beforeShow:({isWholeColSelection:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{},afterMenuClick:({type:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCEL_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:({isWholeRowSelection:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",e),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},afterMenuClick:({type:e,selectionRangeKeys:t,selectionRangeIndexes:o})=>{console.log("---contextmenu body afterMenuClick--"),console.log("type::",e),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"EMPTY_ROW"},{type:"EMPTY_CELL"}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},tableData:[]}},computed:{currentLocal(){return G[this.currentDocLang].completeDemo.demo2.description},columns(){let e=[{field:"index",key:"index",operationColumn:!0,title:"",width:55,fixed:"left",renderBodyCell:this.renderRowIndex}];return e=e.concat($.map(t=>({title:t,field:t,key:t,width:90,edit:!0}))),e}},created(){this.initTableData()},methods:{renderRowIndex({row:e,column:t,rowIndex:o}){return d("span",null,[o+this.startRowIndex+1])},scrolling({startRowIndex:e,visibleStartIndex:t,visibleEndIndex:o,visibleAboveCount:i,visibleBelowCount:l}){this.startRowIndex=e},initTableData(){const e=[];for(let t=0;t<5e3;t++){const o={rowKey:t};$.forEach(i=>{o[i]=""}),(t===1||t===3)&&(o.C="YOU",o.D="CAN",o.E="TRY",o.F="ENTER",o.G="SOME",o.H="WORDS",o.I="!!!"),e.push(o)}this.tableData=e}}},nt={class:"spreadsheet"},it=h("br",null,null,-1),at=h("br",null,null,-1);function st(e,t,o,i,l,a){const m=V("fan-table");return c(),C("div",nt,[h("div",null,[v(y(a.currentLocal)+" ",1),it,at]),d(m,{style:{"word-break":"break-word"},"fixed-header":"","scroll-width":0,"max-height":500,"border-y":"",columns:a.columns,"table-data":l.tableData,"row-key-field-name":"rowKey","virtual-scroll-option":l.virtualScrollOption,"cell-autofill-option":l.cellAutofillOption,"edit-option":l.editOption,"contextmenu-body-option":l.contextmenuBodyOption,"contextmenu-header-option":l.contextmenuHeaderOption,"row-style-option":l.rowStyleOption,"column-width-resize-option":l.columnWidthResizeOption},null,8,["columns","table-data","virtual-scroll-option","cell-autofill-option","edit-option","contextmenu-body-option","contextmenu-header-option","row-style-option","column-width-resize-option"])])}const rt=Z(lt,[["render",st]]),ct="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9995%2031V36M14.0134%2027.7553L4.02734%2024.5106C5.39776%2020.2929%208.06824%2016.6173%2011.656%2014.0106C15.2438%2011.404%2019.5648%2010%2023.9995%2010C28.4343%2010%2032.7552%2011.404%2036.343%2014.0106C39.9308%2016.6173%2042.6013%2020.2929%2043.9717%2024.5106L33.9856%2027.7553H14.0134ZM14.0134%2027.7553C14.6986%2025.6465%2016.0339%2023.8087%2017.8278%2022.5053L14.0134%2027.7553ZM14.0134%2027.7553L23.9995%2031L14.0134%2027.7553ZM17.8278%2022.5053C19.6217%2021.202%2021.7821%2020.5%2023.9995%2020.5L17.8278%2022.5053ZM17.8278%2022.5053L23.9995%2031L17.8278%2022.5053ZM23.9995%2020.5C26.2169%2020.5%2028.3774%2021.202%2030.1713%2022.5053L23.9995%2020.5ZM23.9995%2020.5V31V20.5ZM30.1713%2022.5053C31.9652%2023.8087%2033.3004%2025.6465%2033.9856%2027.7553L30.1713%2022.5053ZM30.1713%2022.5053L23.9995%2031L30.1713%2022.5053ZM33.9856%2027.7553L23.9995%2031L33.9856%2027.7553Z'%20stroke='%23333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",dt={name:"DemoPage",components:{NormalDataGrid:ot,SpreadSheet:rt,FoldingFan:te},mixins:[H],data(){return{Icon:ct}},computed:{currentLocal(){return G[this.currentDocLang].completeDemo}}},ut={class:"site-demo-container"},ht={class:"main-title"},pt={class:"demo-title"},ft={class:"demo-title-text"},mt={class:"demo-title last"},vt={class:"demo-title-text"};function bt(e,t,o,i,l,a){const m=te,r=V("NormalDataGrid"),g=V("SpreadSheet");return c(),C("div",null,[h("div",ut,[h("h1",ht,[d(m),v(" vue-fantable ")]),h("div",pt,[h("div",ft,y(a.currentLocal.demo1.selection),1)]),d(r),h("div",mt,[h("div",vt,y(a.currentLocal.demo2.selection),1)]),d(g)])])}const Rt=Z(dt,[["render",bt]]);export{Rt as default};
