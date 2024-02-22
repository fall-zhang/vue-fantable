import{d as s}from"./db-jGcA6pVs.js";import{t as u}from"./api-tpl-7T6V_5eZ.js";import{_ as i,r as n,o as r,a,b as o,e as k}from"./index-g2bFAzY6.js";import{E as w}from"./ellipsis-props-IJbuVHLp.js";import{F as A}from"./filter-props-rRrylSMC.js";import{F}from"./filter-custom-props-QD0I-sJ5.js";import{I as T}from"./instance-methods-cR6hGcvG.js";import{E as z}from"./expand-option-props-IQvIVeyT.js";import{C as M}from"./checkbox-option-props-079Rx881.js";import{R as W}from"./radio-option-props-hdZAnvx2.js";import{V as N}from"./virtual-scroll-option-props-59HnGoU2.js";import{S as K}from"./sort-option-props-XOtiysii.js";import{E as j}from"./event-custom-option-props-ClTnX_RH.js";import{C as q}from"./column-hidden-option-props-jnPavauX.js";import{C as D}from"./cell-style-option-props-8QJko75t.js";import{R as G}from"./row-style-option-props-2YF_zIiH.js";import{C as J}from"./cell-selection-option-props-VUvuMcCY.js";import{E as L}from"./edit-option-props-1y61mfCN.js";import{c as Q,a as U}from"./contextmenu-body-option-props-43xITuyH.js";import{c as X}from"./cell-autofill-option-props-OicySSQv.js";import{c as Y}from"./clipboard-option-props-rCGFJLn1.js";import{c as Z}from"./column-width-resize-option-props-63LihG3w.js";const oo={components:{tpl:u},props:{anchor:{type:String,default:"表格配置"},desc:{type:String,default:"Table Props"}},data(){return{db:s}}};function no(p,l,t,m,e,d){const c=n("tpl");return r(),a("div",null,[o(c,{desc:t.desc,anchor:t.anchor,"table-data":e.db.table.data,columns:e.db.table.columns},null,8,["desc","anchor","table-data","columns"])])}const to=i(oo,[["render",no]]),eo={components:{tpl:u},props:{anchor:{type:String,default:"列配置"},desc:{type:String,default:"Columns"}},data(){return{db:s,expandOption:{expandable:({row:p,column:l,rowIndex:t})=>{if(![49,50,55].includes(p.expandId))return!1},defaultExpandedRowKeys:[],render:({row:p,column:l,rowIndex:t})=>{if(p.expandId===49)return o(w,null,null);if(p.expandId===50)return o(A,null,null);if(p.expandId===55)return o(F,null,null)}}}}};function po(p,l,t,m,e,d){const c=n("tpl");return r(),a("div",null,[o(c,{desc:t.desc,anchor:t.anchor,"table-data":e.db.columns.data,columns:e.db.columns.columns,"expand-option":e.expandOption},null,8,["desc","anchor","table-data","columns","expand-option"])])}const co=i(eo,[["render",po]]),lo={components:{tpl:u},props:{anchor:{type:String,default:"单元格合并配置"},desc:{type:String,default:"cellSpanOption"}},data(){return{db:s}}};function so(p,l,t,m,e,d){const c=n("tpl");return r(),a("div",null,[o(c,{desc:t.desc,anchor:t.anchor,"table-data":e.db.cellSpanOption.data,columns:e.db.cellSpanOption.columns},null,8,["desc","anchor","table-data","columns"])])}const io=i(lo,[["render",so]]),ro={components:{TableProps:to,ColumnProps:co,InstanceMethods:T,CellSpanOption:io,EventCustomOption:j,ColumnHiddenOption:q,CellStyleOption:D,RowStyleOption:G,ExpandOption:z,CheckboxOption:M,RadioOption:W,VirtualScrollOption:N,SortOption:K,CellSelectionOption:J,EditOption:L,contextmenuHeaderOption:Q,contextmenuBodyOption:U,cellAutofillOption:X,clipboardOption:Y,columnWidthResizeOption:Z},data(){return{db:s}}},ao={class:"mb100"},mo=k("h2",null,"API",-1);function uo(p,l,t,m,e,d){const c=n("TableProps"),_=n("ColumnProps"),O=n("InstanceMethods"),f=n("CellSpanOption"),b=n("ColumnHiddenOption"),x=n("CellStyleOption"),h=n("RowStyleOption"),C=n("ExpandOption"),S=n("CheckboxOption"),y=n("RadioOption"),E=n("VirtualScrollOption"),R=n("SortOption"),I=n("CellSelectionOption"),P=n("EditOption"),$=n("contextmenuHeaderOption"),v=n("contextmenuBodyOption"),g=n("EventCustomOption"),B=n("cellAutofillOption"),H=n("clipboardOption"),V=n("columnWidthResizeOption");return r(),a("div",ao,[mo,o(c),o(_),o(O),o(f),o(b),o(x),o(h),o(C),o(S),o(y),o(E),o(R),o(I),o(P),o($),o(v),o(g),o(B),o(H),o(V)])}const Fo=i(ro,[["render",uo]]);export{Fo as default};
