import{_ as f,r as d,o as h,a as r,e as c,b as n,w as i,d as k,z as b,F as C,G as m,c as x}from"./index-DhQICo8y.js";const V={data(){return{checkboxGroupDefaultValue1:["西红柿","哈密瓜"],checkboxGroupInitValues:[{disabled:!1,label:"南瓜"},{disabled:!1,label:"西红柿"},{disabled:!1,label:"哈密瓜"},{disabled:!1,label:"水蜜桃"}],checkboxGroupDefaultValue2:["南瓜","哈密瓜","水蜜桃"],indeterminate:!0,checkedAllModel:!1}},computed:{hasAllChecked(){return this.checkboxGroupInitValues.every(e=>this.checkboxGroupDefaultValue2.indexOf(e.label)>-1)},hasPartChecked(){return this.checkboxGroupInitValues.some(e=>this.checkboxGroupDefaultValue2.indexOf(e.label)>-1)}},methods:{checkAll(){const e=this.checkboxGroupInitValues.map(o=>o.label);this.checkboxGroupDefaultValue2=e},unCheckAll(){this.checkboxGroupDefaultValue2=[]},handleCheckAll(){this.checkedAllModel?this.checkAll():this.unCheckAll(),this.indeterminate=!1},handleCheckGroupChange(e){console.log("checkgroupChange1::",e),this.hasAllChecked?(this.checkedAllModel=!0,this.indeterminate=!1):this.hasPartChecked?this.indeterminate=!0:(this.indeterminate=!1,this.checkedAllModel=!1)},checkedChange(e){console.log("checkedChange1::",e)}}},_=c("div",{class:"bold"},"多选",-1),G=c("div",{class:"bold"},"全选",-1),g=c("br",null,null,-1),A=c("br",null,null,-1),D=c("br",null,null,-1);function v(e,o,O,M,l,u){const t=d("ve-checkbox"),s=d("ve-checkbox-group");return h(),r("div",null,[c("div",null,[_,n(s,{modelValue:l.checkboxGroupDefaultValue1,"onUpdate:modelValue":o[0]||(o[0]=a=>l.checkboxGroupDefaultValue1=a)},{default:i(()=>[n(t,{label:"南瓜"}),n(t,{disabled:"",label:"西红柿"}),n(t,{label:"哈密瓜"}),n(t,{label:"水蜜桃"})]),_:1},8,["modelValue"]),k(" ["+b(l.checkboxGroupDefaultValue1.join())+"] ",1)]),c("div",null,[G,c("div",null,[n(t,{modelValue:l.checkedAllModel,"onUpdate:modelValue":o[1]||(o[1]=a=>l.checkedAllModel=a),indeterminate:l.indeterminate,label:"全选",onOnCheckedChange:u.handleCheckAll},null,8,["modelValue","indeterminate","onOnCheckedChange"]),g,A]),n(s,{modelValue:l.checkboxGroupDefaultValue2,"onUpdate:modelValue":o[2]||(o[2]=a=>l.checkboxGroupDefaultValue2=a),onOnCheckedChange:u.handleCheckGroupChange},{default:i(()=>[(h(!0),r(C,null,m(l.checkboxGroupInitValues,(a,p)=>(h(),x(t,{key:p,disabled:a.disabled,label:a.label,onOnCheckedChange:u.checkedChange},null,8,["disabled","label","onOnCheckedChange"]))),128))]),_:1},8,["modelValue","onOnCheckedChange"]),D,k(" ["+b(l.checkboxGroupDefaultValue2.join())+"] ",1)])])}const B=f(V,[["render",v]]);export{B as default};
