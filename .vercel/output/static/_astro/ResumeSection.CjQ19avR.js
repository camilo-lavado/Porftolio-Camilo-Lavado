import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.DtoOFyvK.js";import{A as g}from"./index.Cuh5bk_9.js";import{m as p}from"./proxy.BaQyMiq9.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,r,s)=>s?s.toUpperCase():r.toLowerCase()),f=t=>{const a=v(t);return a.charAt(0).toUpperCase()+a.slice(1)},b=(...t)=>t.filter((a,r,s)=>!!a&&a.trim()!==""&&s.indexOf(a)===r).join(" ").trim(),j=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:i="",children:n,iconNode:d,...x},h)=>o.createElement("svg",{ref:h,...k,width:a,height:a,stroke:t,strokeWidth:s?Number(r)*24/Number(a):r,className:b("lucide",i),...!n&&!j(x)&&{"aria-hidden":"true"},...x},[...d.map(([m,u])=>o.createElement(m,u)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(t,a)=>{const r=o.forwardRef(({className:s,...i},n)=>o.createElement(N,{ref:n,iconNode:a,className:b(`lucide-${w(f(t))}`,`lucide-${t}`,s),...i}));return r.displayName=f(t),r};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],y=c("circle-check",C);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],M=c("download",_);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],E=c("external-link",A);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],$=c("file-text",D);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],V=c("info",z),l="/cv/CamiloLavadoCV.pdf";async function H(t){try{const a=await fetch(t,{method:"HEAD",cache:"no-store"}),r=Number(a.headers.get("content-length")||0),s=a.headers.get("last-modified")||void 0;return{size:r>0?r/(1024*1024)>=1?`${(r/(1024*1024)).toFixed(2)} MB`:`${(r/1024).toFixed(0)} KB`:void 0,lastModified:s,ok:a.ok}}catch{return{ok:!1}}}function S(){const[t,a]=o.useState({ok:!0}),[r,s]=o.useState(!1),[i,n]=o.useState(null);o.useEffect(()=>{typeof window<"u"&&H(l).then(a)},[]),o.useEffect(()=>{if(!i)return;const u=setTimeout(()=>n(null),4e3);return()=>clearTimeout(u)},[i]);const d=()=>{r||typeof window>"u"||(fetch(l,{method:"GET",headers:{Range:"bytes=0-0"}}).catch(()=>{}),s(!0))},x=()=>{typeof window<"u"&&(window.open(l,"_blank","noopener,noreferrer"),n("opened"))},h=()=>{n("downloaded")},m=o.useMemo(()=>i==="opened"?{title:"Abriendo mi CV",text:"Se está mostrando en una nueva pestaña."}:{title:"Descarga iniciada",text:"Tu navegador comenzará a descargar el PDF."},[i]);return e.jsxs("section",{id:"cv",className:"relative py-24 px-6 max-w-4xl mx-auto text-white flex flex-col items-center justify-center font-outfit",children:[e.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-500/10 to-transparent blur-3xl opacity-50"}),e.jsxs("h2",{className:"text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight relative",children:["Currículum ",e.jsx("span",{className:"text-gradient",children:"Vitae"})]}),e.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-white/10 glass-panel flex flex-col items-center justify-center transition-all duration-500 hover:border-teal-400/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] w-full max-w-2xl",children:[e.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 opacity-[0.03]",style:{backgroundImage:"linear-gradient(to right, rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,212,191,1) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),e.jsx(g,{mode:"wait",children:i?e.jsxs(p.div,{initial:{opacity:0,rotateX:-15,y:20},animate:{opacity:1,rotateX:0,y:0},exit:{opacity:0,rotateX:15,y:-20},transition:{duration:.45},className:"relative p-10 text-center flex flex-col items-center justify-center",children:[e.jsx("div",{className:"mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/15 ring-1 ring-teal-400/40 shadow-[0_0_20px_rgba(45,212,191,0.2)]",children:e.jsx(y,{className:"h-8 w-8 text-teal-300","aria-hidden":!0})}),e.jsx("h3",{className:"text-2xl font-semibold text-teal-200 mb-2",children:m.title}),e.jsxs("p",{className:"text-teal-100/80 mb-6",children:[m.text," Gracias por tu interés!"]}),e.jsx("button",{onClick:()=>n(null),className:"inline-flex px-6 py-2 rounded-full border border-teal-500/30 text-sm text-teal-300 hover:bg-teal-500/10 hover:text-teal-200 transition-colors",children:"Volver"})]},"ack"):e.jsxs(p.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.35},className:"relative p-8 flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"relative flex items-center gap-3 mb-6 justify-center",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-500/30",children:e.jsx($,{className:"h-6 w-6 text-blue-300","aria-hidden":!0})}),e.jsx("p",{className:"text-gray-300",children:"Descarga el PDF o ábrelo en una pestaña nueva."})]}),e.jsxs("div",{className:"relative flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-6",children:[e.jsxs("a",{href:l,download:!0,onMouseEnter:d,onClick:h,className:"flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-medium hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto",children:[e.jsx(M,{className:"h-5 w-5","aria-hidden":!0}),"Descargar CV"]}),e.jsxs("button",{onClick:x,onMouseEnter:d,className:"flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto",children:[e.jsx(E,{className:"h-5 w-5","aria-hidden":!0}),"Abrir pestaña"]})]}),e.jsx("div",{className:"relative mt-4 flex items-center justify-center gap-3 text-sm",children:t.ok?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"h-4 w-4 text-emerald-300/90","aria-hidden":!0}),e.jsxs("span",{className:"text-gray-400",children:[t.size?e.jsxs("span",{className:"mr-3",children:["Tamaño: ",t.size]}):null,t.lastModified?e.jsxs("span",{children:["Actualizado: ",new Date(t.lastModified).toLocaleDateString()]}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsx(V,{className:"h-4 w-4 text-amber-300/90","aria-hidden":!0}),e.jsxs("span",{className:"text-amber-200/90",children:["No se pudo verificar el archivo. Revisa la ruta: ",e.jsx("code",{className:"text-white/90",children:l})]})]})})]},"normal")})]})]})}export{S as default};
