import{_ as V,r as m,o as _,a as v,e,b as i,w as n,d as r,z as s}from"./index-crzR-Bjn.js";const p={data(){return{radioVal:!1,radioVal2:!1,radioVal3:!0}},methods:{radioChange(t){console.log("radioChange::",t)}}},c=e("div",{class:"bold"},"单选",-1),f=e("div",{class:"bold"},"单选禁用",-1),g=e("div",{class:"bold"},"单选禁用",-1);function C(t,l,b,R,o,u){const d=m("ve-radio",!0);return _(),v("div",null,[e("div",null,[c,i(d,{modelValue:o.radioVal,"onUpdate:modelValue":l[0]||(l[0]=a=>o.radioVal=a),onOnRadioChange:u.radioChange},{default:n(()=>[r("Radio")]),_:1},8,["modelValue","onOnRadioChange"]),e("div",null,s(o.radioVal),1)]),e("div",null,[f,i(d,{modelValue:o.radioVal2,"onUpdate:modelValue":l[1]||(l[1]=a=>o.radioVal2=a),disabled:""},{default:n(()=>[r("Radio")]),_:1},8,["modelValue"]),e("div",null,s(o.radioVal2),1)]),e("div",null,[g,i(d,{modelValue:o.radioVal3,"onUpdate:modelValue":l[2]||(l[2]=a=>o.radioVal3=a),disabled:""},{default:n(()=>[r("Radio")]),_:1},8,["modelValue"]),e("div",null,s(o.radioVal3),1)])])}const x=V(p,[["render",C]]);export{x as default};
