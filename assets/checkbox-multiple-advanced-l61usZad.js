import{_ as b,r as i,o as n,a as h,e as s,b as o,w as k,F as f,G as p,c as m,d as x,z as C}from"./index-QNTyIAJW.js";const V={data(){return{checkboxGroupInitValues:[{disabled:!1,label:"南瓜"},{disabled:!0,label:"西红柿"},{disabled:!1,label:"哈密瓜"},{disabled:!1,label:"水蜜桃"},{disabled:!0,label:"哈密瓜2"},{disabled:!1,label:"水蜜桃2"}],checkboxGroupDefaultValue:["南瓜","哈密瓜","水蜜桃","哈密瓜2"],indeterminate:!0,checkedAllModel:!1}},computed:{hasAllChecked(){return this.checkboxGroupInitValues.every(l=>this.checkboxGroupDefaultValue.indexOf(l.label)>-1)},hasPartChecked(){return this.checkboxGroupInitValues.some(l=>this.checkboxGroupDefaultValue.indexOf(l.label)>-1)},disabledChecked(){const l=[];return this.checkboxGroupInitValues.filter(e=>{e.disabled&&this.checkboxGroupDefaultValue.indexOf(e.label)>-1&&l.push(e.label)}),l},disabledUnChecked(){const l=[];return this.checkboxGroupInitValues.filter(e=>{e.disabled&&this.checkboxGroupDefaultValue.indexOf(e.label)===-1&&l.push(e.label)}),l}},methods:{checkAll(){let l=this.checkboxGroupInitValues.map(e=>e.label);this.disabledUnChecked.length>0?(l=l.filter(e=>this.disabledUnChecked.indexOf(e)===-1),this.indeterminate=!0,this.checkedAllModel=!1):(this.indeterminate=!1,this.checkedAllModel=!0),this.checkboxGroupDefaultValue=l},unCheckAll(){this.checkboxGroupDefaultValue=this.disabledChecked,this.disabledChecked.length>0?this.indeterminate=!0:this.indeterminate=!1,this.checkedAllModel=!1},handleCheckAll(){this.checkedAllModel?this.checkAll():this.unCheckAll()},handleCheckGroupChange(){console.log(1111),this.hasAllChecked?(this.checkedAllModel=!0,this.indeterminate=!1):this.hasPartChecked?this.indeterminate=!0:(this.indeterminate=!1,this.checkedAllModel=!1)}}},_=s("div",{class:"bold"},"全选",-1),G=s("br",null,null,-1),A=s("br",null,null,-1),g=s("br",null,null,-1);function v(l,e,D,M,t,d){const c=i("ve-checkbox"),u=i("ve-checkbox-group");return n(),h("div",null,[s("div",null,[_,s("div",null,[o(c,{modelValue:t.checkedAllModel,"onUpdate:modelValue":e[0]||(e[0]=a=>t.checkedAllModel=a),indeterminate:t.indeterminate,label:"全选",onOnCheckedChange:d.handleCheckAll},null,8,["modelValue","indeterminate","onOnCheckedChange"]),G,A]),o(u,{modelValue:t.checkboxGroupDefaultValue,"onUpdate:modelValue":e[1]||(e[1]=a=>t.checkboxGroupDefaultValue=a),onOnCheckedChange:d.handleCheckGroupChange},{default:k(()=>[(n(!0),h(f,null,p(t.checkboxGroupInitValues,(a,r)=>(n(),m(c,{key:r,disabled:a.disabled,label:a.label},null,8,["disabled","label"]))),128))]),_:1},8,["modelValue","onOnCheckedChange"]),g,x(" ["+C(t.checkboxGroupDefaultValue.join())+"] ",1)])])}const I=b(V,[["render",v]]);export{I as default};
