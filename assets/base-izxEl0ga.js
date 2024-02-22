import{h as B,Q as h,P as q,R as O,S as F,U as R,M as b,k as d,l as $,m as p,q as N,E as J,n as T,K as U,V as D}from"./index-g2bFAzY6.js";function A(e){for(var s=-1,t=e==null?0:e.length,o={};++s<t;){var a=e[s];o[a[0]]=a[1]}return o}const k=e=>e===void 0,ee=e=>typeof e=="boolean",se=e=>typeof e=="number",te=e=>!e&&e!==0||B(e)&&e.length===0||h(e)&&!Object.keys(e).length,ne=e=>typeof Element>"u"?!1:e instanceof Element,oe=e=>q(e)?!Number.isNaN(Number(e)):!1,w="__epPropKey",ae=e=>e,Y=e=>h(e)&&!!e[w],E=(e,s)=>{if(!h(e)||Y(e))return e;const{values:t,required:o,default:a,type:u,validator:c}=e,y={type:u,required:!!o,validator:t||c?i=>{let f=!1,I=[];if(t&&(I=Array.from(t),O(e,"default")&&I.push(a),f||(f=I.includes(i))),c&&(f||(f=c(i))),!f&&I.length>0){const g=[...new Set(I)].map(z=>JSON.stringify(z)).join(", ");F(`Invalid prop: validation failed${s?` for prop "${s}"`:""}. Expected one of [${g}], got value ${JSON.stringify(i)}.`)}return f}:void 0,[w]:!0};return O(e,"default")&&(y.default=a),y},re=e=>A(Object.entries(e).map(([s,t])=>[s,E(t,s)])),ue=(e,s)=>{if(e.install=t=>{for(const o of[e,...Object.values(s??{})])t.component(o.name,o)},s)for(const[t,o]of Object.entries(s))e[t]=o;return e},le=e=>(e.install=R,e),C=["","default","small","large"],_="el",L="is-",m=(e,s,t,o,a)=>{let u=`${e}-${s}`;return t&&(u+=`-${t}`),o&&(u+=`__${o}`),a&&(u+=`--${a}`),u},M=Symbol("namespaceContextKey"),V=e=>{const s=e||(b()?d(M,$(_)):$(_));return p(()=>N(s)||_)},ce=(e,s)=>{const t=V(s);return{namespace:t,b:(n="")=>m(t.value,e,n,"",""),e:n=>n?m(t.value,e,"",n,""):"",m:n=>n?m(t.value,e,"","",n):"",be:(n,r)=>n&&r?m(t.value,e,n,r,""):"",em:(n,r)=>n&&r?m(t.value,e,"",n,r):"",bm:(n,r)=>n&&r?m(t.value,e,n,"",r):"",bem:(n,r,l)=>n&&r&&l?m(t.value,e,n,r,l):"",is:(n,...r)=>{const l=r.length>=1?r[0]:!0;return n&&l?`${L}${n}`:""},cssVar:n=>{const r={};for(const l in n)n[l]&&(r[`--${t.value}-${l}`]=n[l]);return r},cssVarName:n=>`--${t.value}-${n}`,cssVarBlock:n=>{const r={};for(const l in n)n[l]&&(r[`--${t.value}-${e}-${l}`]=n[l]);return r},cssVarBlockName:n=>`--${t.value}-${e}-${n}`}},K=e=>{const s=b();return p(()=>{var t,o;return(o=(t=s==null?void 0:s.proxy)==null?void 0:t.$props)==null?void 0:o[e]})},P={prefix:Math.floor(Math.random()*1e4),current:0},Q=Symbol("elIdInjection"),Z=()=>b()?d(Q,P):P,H=e=>{const s=Z(),t=V();return p(()=>N(e)||`${t.value}-id-${s.prefix}-${s.current++}`)},ie=E({type:String,values:C,required:!1}),W=Symbol("size"),X=()=>{const e=d(W,{});return p(()=>N(e.size)||"")};var de=(e,s)=>{const t=e.__vccOpts||e;for(const[o,a]of s)t[o]=a;return t};const S=Symbol("formContextKey"),j=Symbol("formItemContextKey"),ve=(e,s={})=>{const t=$(void 0),o=s.prop?t:K("size"),a=s.global?t:X(),u=s.form?{size:void 0}:d(S,void 0),c=s.formItem?{size:void 0}:d(j,void 0);return p(()=>o.value||N(e)||(c==null?void 0:c.size)||(u==null?void 0:u.size)||a.value||"")},fe=e=>{const s=K("disabled"),t=d(S,void 0);return p(()=>s.value||N(e)||(t==null?void 0:t.disabled)||!1)},me=()=>{const e=d(S,void 0),s=d(j,void 0);return{form:e,formItem:s}},pe=(e,{formItemContext:s,disableIdGeneration:t,disableIdManagement:o})=>{t||(t=$(!1)),o||(o=$(!1));const a=$();let u;const c=p(()=>{var v;return!!(!e.label&&s&&s.inputIds&&((v=s.inputIds)==null?void 0:v.length)<=1)});return J(()=>{u=T([U(e,"id"),t],([v,y])=>{const i=v??(y?void 0:H().value);i!==a.value&&(s!=null&&s.removeInputId&&(a.value&&s.removeInputId(a.value),!(o!=null&&o.value)&&!y&&i&&s.addInputId(i)),a.value=i)},{immediate:!0})}),D(()=>{u&&u(),s!=null&&s.removeInputId&&a.value&&s.removeInputId(a.value)}),{isLabeledByFormItem:c,inputId:a}};export{de as _,ce as a,re as b,me as c,ae as d,ve as e,k as f,se as g,fe as h,te as i,ee as j,H as k,pe as l,le as m,E as n,A as o,V as p,Z as q,ne as r,j as s,C as t,ie as u,oe as v,ue as w};
