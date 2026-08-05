var Le=Object.defineProperty,Oe=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var zt=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var Mt=(n,t,e)=>t in n?Le(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,g=(n,t)=>{for(var e in t||(t={}))Pe.call(t,e)&&Mt(n,e,t[e]);if(zt)for(var e of zt(t))Ie.call(t,e)&&Mt(n,e,t[e]);return n},R=(n,t)=>Oe(n,Ce(t));import{n as $e,d as Ne,r as Ct,g as Re,B as vt,o as y,c as x,a as I,b as T,m as v,s as st,e as Ae,l as ie,f as Ee,h as B,i as Et,t as K,R as ae,j as ft,k as se,w as le,p as z,q as gt,u as A,v as Pt,x as It,A as Te,y as Fe,z as De,Y as je,D as ze,C as xt,E as wt,S as Me,F as dt,G as ct,H as Kt,I as Ke,J as X,T as Ue,K as Y,L as Ut,M as Ve,N as Be,O as j,P as He,Q as Je,U as We,V as Qe,W as Ze}from"./index2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const h=n=>typeof n=="string",q=()=>{let n,t;const e=new Promise((o,r)=>{n=o,t=r});return e.resolve=n,e.reject=t,e},Vt=n=>n==null?"":""+n,Ye=(n,t,e)=>{n.forEach(o=>{t[o]&&(e[o]=t[o])})},qe=/###/g,Bt=n=>n&&n.indexOf("###")>-1?n.replace(qe,"."):n,Ht=n=>!n||h(n),tt=(n,t,e)=>{const o=h(t)?t.split("."):t;let r=0;for(;r<o.length-1;){if(Ht(n))return{};const i=Bt(o[r]);!n[i]&&e&&(n[i]=new e),Object.prototype.hasOwnProperty.call(n,i)?n=n[i]:n={},++r}return Ht(n)?{}:{obj:n,k:Bt(o[r])}},Jt=(n,t,e)=>{const{obj:o,k:r}=tt(n,t,Object);if(o!==void 0||t.length===1){o[r]=e;return}let i=t[t.length-1],a=t.slice(0,t.length-1),l=tt(n,a,Object);for(;l.obj===void 0&&a.length;)i=`${a[a.length-1]}.${i}`,a=a.slice(0,a.length-1),l=tt(n,a,Object),l&&l.obj&&typeof l.obj[`${l.k}.${i}`]!="undefined"&&(l.obj=void 0);l.obj[`${l.k}.${i}`]=e},Ge=(n,t,e,o)=>{const{obj:r,k:i}=tt(n,t,Object);r[i]=r[i]||[],r[i].push(e)},ht=(n,t)=>{const{obj:e,k:o}=tt(n,t);if(e)return e[o]},_e=(n,t,e)=>{const o=ht(n,e);return o!==void 0?o:ht(t,e)},ue=(n,t,e)=>{for(const o in t)o!=="__proto__"&&o!=="constructor"&&(o in n?h(n[o])||n[o]instanceof String||h(t[o])||t[o]instanceof String?e&&(n[o]=t[o]):ue(n[o],t[o],e):n[o]=t[o]);return n},U=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Xe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const tn=n=>h(n)?n.replace(/[&<>"'\/]/g,t=>Xe[t]):n;class en{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(e!==void 0)return e;const o=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,o),this.regExpQueue.push(t),o}}const nn=[" ",",","?","!",";"],on=new en(20),rn=(n,t,e)=>{t=t||"",e=e||"";const o=nn.filter(a=>t.indexOf(a)<0&&e.indexOf(a)<0);if(o.length===0)return!0;const r=on.getRegExp(`(${o.map(a=>a==="?"?"\\?":a).join("|")})`);let i=!r.test(n);if(!i){const a=n.indexOf(e);a>0&&!r.test(n.substring(0,a))&&(i=!0)}return i},$t=function(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!n)return;if(n[t])return n[t];const o=t.split(e);let r=n;for(let i=0;i<o.length;){if(!r||typeof r!="object")return;let a,l="";for(let s=i;s<o.length;++s)if(s!==i&&(l+=e),l+=o[s],a=r[l],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&s<o.length-1)continue;i+=s-i+1;break}r=a}return r},bt=n=>n&&n.replace("_","-"),an={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,t){console&&console[n]&&console[n].apply(console,t)}};class mt{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,e)}init(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||an,this.options=e,this.debug=e.debug}log(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return this.forward(e,"log","",!0)}warn(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return this.forward(e,"warn","",!0)}error(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return this.forward(e,"error","")}deprecate(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,o,r){return r&&!this.debug?null:(h(t[0])&&(t[0]=`${o}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new mt(this.logger,g({prefix:`${this.prefix}:${t}:`},this.options))}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new mt(this.logger,t)}}var D=new mt;class kt{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const r=this.observers[o].get(e)||0;this.observers[o].set(e,r+1)}),this}off(t,e){if(this.observers[t]){if(!e){delete this.observers[t];return}this.observers[t].delete(e)}}emit(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(a=>{let[l,s]=a;for(let d=0;d<s;d++)l(...o)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[l,s]=a;for(let d=0;d<s;d++)l.apply(l,[t,...o])})}}class Wt extends kt{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=e,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,a=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;t.indexOf(".")>-1?l=t.split("."):(l=[t,e],o&&(Array.isArray(o)?l.push(...o):h(o)&&i?l.push(...o.split(i)):l.push(o)));const s=ht(this.data,l);return!s&&!e&&!o&&t.indexOf(".")>-1&&(t=l[0],e=l[1],o=l.slice(2).join(".")),s||!a||!h(o)?s:$t(this.data&&this.data[t]&&this.data[t][e],o,i)}addResource(t,e,o,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=[t,e];o&&(l=l.concat(a?o.split(a):o)),t.indexOf(".")>-1&&(l=t.split("."),r=e,e=l[1]),this.addNamespaces(e),Jt(this.data,l,r),i.silent||this.emit("added",t,e,o,r)}addResources(t,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in o)(h(o[i])||Array.isArray(o[i]))&&this.addResource(t,e,i,o[i],{silent:!0});r.silent||this.emit("added",t,e,o)}addResourceBundle(t,e,o,r,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},l=[t,e];t.indexOf(".")>-1&&(l=t.split("."),r=o,o=e,e=l[1]),this.addNamespaces(e);let s=ht(this.data,l)||{};a.skipCopy||(o=JSON.parse(JSON.stringify(o))),r?ue(s,o,i):s=g(g({},s),o),Jt(this.data,l,s),a.silent||this.emit("added",t,e,o)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return this.getResource(t,e)!==void 0}getResourceBundle(t,e){return e||(e=this.options.defaultNS),this.options.compatibilityAPI==="v1"?g({},this.getResource(t,e)):this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find(r=>e[r]&&Object.keys(e[r]).length>0)}toJSON(){return this.data}}var de={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,t,e,o,r){return n.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,e,o,r))}),t}};const Qt={};class yt extends kt{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ye(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=e,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=D.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const o=this.resolve(t,e);return o&&o.res!==void 0}extractFromKey(t,e){let o=e.nsSeparator!==void 0?e.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const r=e.keySeparator!==void 0?e.keySeparator:this.options.keySeparator;let i=e.ns||this.options.defaultNS||[];const a=o&&t.indexOf(o)>-1,l=!this.options.userDefinedKeySeparator&&!e.keySeparator&&!this.options.userDefinedNsSeparator&&!e.nsSeparator&&!rn(t,o,r);if(a&&!l){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:h(i)?[i]:i};const d=t.split(o);(o!==r||o===r&&this.options.ns.indexOf(d[0])>-1)&&(i=d.shift()),t=d.join(r)}return{key:t,namespaces:h(i)?[i]:i}}translate(t,e,o){if(typeof e!="object"&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),typeof e=="object"&&(e=g({},e)),e||(e={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const r=e.returnDetails!==void 0?e.returnDetails:this.options.returnDetails,i=e.keySeparator!==void 0?e.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(t[t.length-1],e),s=l[l.length-1],d=e.lng||this.language,c=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(c){const w=e.nsSeparator||this.options.nsSeparator;return r?{res:`${s}${w}${a}`,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:s,usedParams:this.getUsedParamsDetails(e)}:`${s}${w}${a}`}return r?{res:a,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:s,usedParams:this.getUsedParamsDetails(e)}:a}const p=this.resolve(t,e);let u=p&&p.res;const f=p&&p.usedKey||a,b=p&&p.exactUsedKey||a,m=Object.prototype.toString.apply(u),k=["[object Number]","[object Function]","[object RegExp]"],S=e.joinArrays!==void 0?e.joinArrays:this.options.joinArrays,O=!this.i18nFormat||this.i18nFormat.handleAsObject,H=!h(u)&&typeof u!="boolean"&&typeof u!="number";if(O&&u&&H&&k.indexOf(m)<0&&!(h(S)&&Array.isArray(u))){if(!e.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,u,R(g({},e),{ns:l})):`key '${a} (${this.language})' returned an object instead of string.`;return r?(p.res=w,p.usedParams=this.getUsedParamsDetails(e),p):w}if(i){const w=Array.isArray(u),$=w?[]:{},E=w?b:f;for(const C in u)if(Object.prototype.hasOwnProperty.call(u,C)){const lt=`${E}${i}${C}`;$[C]=this.translate(lt,R(g({},e),{joinArrays:!1,ns:l})),$[C]===lt&&($[C]=u[C])}u=$}}else if(O&&h(S)&&Array.isArray(u))u=u.join(S),u&&(u=this.extendTranslation(u,t,e,o));else{let w=!1,$=!1;const E=e.count!==void 0&&!h(e.count),C=yt.hasDefaultValue(e),lt=E?this.pluralResolver.getSuffix(d,e.count,e):"",we=e.ordinal&&E?this.pluralResolver.getSuffix(d,e.count,{ordinal:!1}):"",Ft=E&&!e.ordinal&&e.count===0&&this.pluralResolver.shouldUseIntlApi(),J=Ft&&e[`defaultValue${this.options.pluralSeparator}zero`]||e[`defaultValue${lt}`]||e[`defaultValue${we}`]||e.defaultValue;!this.isValidLookup(u)&&C&&(w=!0,u=J),this.isValidLookup(u)||($=!0,u=a);const Se=(e.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&$?void 0:u,W=C&&J!==u&&this.options.updateMissing;if($||w||W){if(this.logger.log(W?"updateKey":"missingKey",d,s,a,W?J:u),i){const N=this.resolve(a,R(g({},e),{keySeparator:!1}));N&&N.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Q=[];const ut=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ut&&ut[0])for(let N=0;N<ut.length;N++)Q.push(ut[N]);else this.options.saveMissingTo==="all"?Q=this.languageUtils.toResolveHierarchy(e.lng||this.language):Q.push(e.lng||this.language);const Dt=(N,M,Z)=>{const jt=C&&Z!==u?Z:Se;this.options.missingKeyHandler?this.options.missingKeyHandler(N,s,M,jt,W,e):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(N,s,M,jt,W,e),this.emit("missingKey",N,s,M,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?Q.forEach(N=>{const M=this.pluralResolver.getSuffixes(N,e);Ft&&e[`defaultValue${this.options.pluralSeparator}zero`]&&M.indexOf(`${this.options.pluralSeparator}zero`)<0&&M.push(`${this.options.pluralSeparator}zero`),M.forEach(Z=>{Dt([N],a+Z,e[`defaultValue${Z}`]||J)})}):Dt(Q,a,J))}u=this.extendTranslation(u,t,e,p,o),$&&u===a&&this.options.appendNamespaceToMissingKey&&(u=`${s}:${a}`),($||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,w?u:void 0):u=this.options.parseMissingKeyHandler(u))}return r?(p.res=u,p.usedParams=this.getUsedParamsDetails(e),p):u}extendTranslation(t,e,o,r,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,g(g({},this.options.interpolation.defaultVariables),o),o.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init(R(g({},o),{interpolation:g(g({},this.options.interpolation),o.interpolation)}));const d=h(t)&&(o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(d){const u=t.match(this.interpolator.nestingRegexp);c=u&&u.length}let p=o.replace&&!h(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(p=g(g({},this.options.interpolation.defaultVariables),p)),t=this.interpolator.interpolate(t,p,o.lng||this.language||r.usedLng,o),d){const u=t.match(this.interpolator.nestingRegexp),f=u&&u.length;c<f&&(o.nest=!1)}!o.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(o.lng=this.language||r.usedLng),o.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var u=arguments.length,f=new Array(u),b=0;b<u;b++)f[b]=arguments[b];return i&&i[0]===f[0]&&!o.context?(a.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${e[0]}`),null):a.translate(...f,e)},o)),o.interpolation&&this.interpolator.reset()}const l=o.postProcess||this.options.postProcess,s=h(l)?[l]:l;return t!=null&&s&&s.length&&o.applyPostProcessor!==!1&&(t=de.handle(s,t,e,this.options&&this.options.postProcessPassResolved?g({i18nResolved:R(g({},r),{usedParams:this.getUsedParamsDetails(o)})},o):o,this)),t}resolve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o,r,i,a,l;return h(t)&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(o))return;const d=this.extractFromKey(s,e),c=d.key;r=c;let p=d.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const u=e.count!==void 0&&!h(e.count),f=u&&!e.ordinal&&e.count===0&&this.pluralResolver.shouldUseIntlApi(),b=e.context!==void 0&&(h(e.context)||typeof e.context=="number")&&e.context!=="",m=e.lngs?e.lngs:this.languageUtils.toResolveHierarchy(e.lng||this.language,e.fallbackLng);p.forEach(k=>{this.isValidLookup(o)||(l=k,!Qt[`${m[0]}-${k}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(Qt[`${m[0]}-${k}`]=!0,this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(S=>{if(this.isValidLookup(o))return;a=S;const O=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(O,c,S,k,e);else{let w;u&&(w=this.pluralResolver.getSuffix(S,e.count,e));const $=`${this.options.pluralSeparator}zero`,E=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(O.push(c+w),e.ordinal&&w.indexOf(E)===0&&O.push(c+w.replace(E,this.options.pluralSeparator)),f&&O.push(c+$)),b){const C=`${c}${this.options.contextSeparator}${e.context}`;O.push(C),u&&(O.push(C+w),e.ordinal&&w.indexOf(E)===0&&O.push(C+w.replace(E,this.options.pluralSeparator)),f&&O.push(C+$))}}let H;for(;H=O.pop();)this.isValidLookup(o)||(i=H,o=this.getResource(S,k,H,e))}))})}),{res:o,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:l}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,o,r):this.resourceStore.getResource(t,e,o,r)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=t.replace&&!h(t.replace);let r=o?t.replace:t;if(o&&typeof t.count!="undefined"&&(r.count=t.count),this.options.interpolation.defaultVariables&&(r=g(g({},this.options.interpolation.defaultVariables),r)),!o){r=g({},r);for(const i of e)delete r[i]}return r}static hasDefaultValue(t){const e="defaultValue";for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&e===o.substring(0,e.length)&&t[o]!==void 0)return!0;return!1}}const St=n=>n.charAt(0).toUpperCase()+n.slice(1);class Zt{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=D.create("languageUtils")}getScriptPartFromCode(t){if(t=bt(t),!t||t.indexOf("-")<0)return null;const e=t.split("-");return e.length===2||(e.pop(),e[e.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(e.join("-"))}getLanguagePartFromCode(t){if(t=bt(t),!t||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if(h(t)&&t.indexOf("-")>-1){if(typeof Intl!="undefined"&&typeof Intl.getCanonicalLocales!="undefined")try{let r=Intl.getCanonicalLocales(t)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch(r){}const e=["hans","hant","latn","cyrl","cans","mong","arab"];let o=t.split("-");return this.options.lowerCaseLng?o=o.map(r=>r.toLowerCase()):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),e.indexOf(o[1].toLowerCase())>-1&&(o[1]=St(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),e.indexOf(o[1].toLowerCase())>-1&&(o[1]=St(o[1].toLowerCase())),e.indexOf(o[2].toLowerCase())>-1&&(o[2]=St(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach(o=>{if(e)return;const r=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(r))&&(e=r)}),!e&&this.options.supportedLngs&&t.forEach(o=>{if(e)return;const r=this.getLanguagePartFromCode(o);if(this.isSupportedCode(r))return e=r;e=this.options.supportedLngs.find(i=>{if(i===r)return i;if(!(i.indexOf("-")<0&&r.indexOf("-")<0)&&(i.indexOf("-")>0&&r.indexOf("-")<0&&i.substring(0,i.indexOf("-"))===r||i.indexOf(r)===0&&r.length>1))return i})}),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if(typeof t=="function"&&(t=t(e)),h(t)&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let o=t[e];return o||(o=t[this.getScriptPartFromCode(e)]),o||(o=t[this.formatLanguageCode(e)]),o||(o=t[this.getLanguagePartFromCode(e)]),o||(o=t.default),o||[]}toResolveHierarchy(t,e){const o=this.getFallbackCodes(e||this.options.fallbackLng||[],t),r=[],i=a=>{a&&(this.isSupportedCode(a)?r.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return h(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):h(t)&&i(this.formatLanguageCode(t)),o.forEach(a=>{r.indexOf(a)<0&&i(this.formatLanguageCode(a))}),r}}let sn=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ln={1:n=>+(n>1),2:n=>+(n!=1),3:n=>0,4:n=>n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2,5:n=>n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5,6:n=>n==1?0:n>=2&&n<=4?1:2,7:n=>n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2,8:n=>n==1?0:n==2?1:n!=8&&n!=11?2:3,9:n=>+(n>=2),10:n=>n==1?0:n==2?1:n<7?2:n<11?3:4,11:n=>n==1||n==11?0:n==2||n==12?1:n>2&&n<20?2:3,12:n=>+(n%10!=1||n%100==11),13:n=>+(n!==0),14:n=>n==1?0:n==2?1:n==3?2:3,15:n=>n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2,16:n=>n%10==1&&n%100!=11?0:n!==0?1:2,17:n=>n==1||n%10==1&&n%100!=11?0:1,18:n=>n==0?0:n==1?1:2,19:n=>n==1?0:n==0||n%100>1&&n%100<11?1:n%100>10&&n%100<20?2:3,20:n=>n==1?0:n==0||n%100>0&&n%100<20?1:2,21:n=>n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0,22:n=>n==1?0:n==2?1:(n<0||n>10)&&n%10==0?2:3};const un=["v1","v2","v3"],dn=["v4"],Yt={zero:0,one:1,two:2,few:3,many:4,other:5},cn=()=>{const n={};return sn.forEach(t=>{t.lngs.forEach(e=>{n[e]={numbers:t.nr,plurals:ln[t.fc]}})}),n};class pn{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=e,this.logger=D.create("pluralResolver"),(!this.options.compatibilityJSON||dn.includes(this.options.compatibilityJSON))&&(typeof Intl=="undefined"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=cn(),this.pluralRulesCache={}}addRule(t,e){this.rules[t]=e}clearCache(){this.pluralRulesCache={}}getRule(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const o=bt(t==="dev"?"en":t),r=e.ordinal?"ordinal":"cardinal",i=JSON.stringify({cleanedCode:o,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(o,{type:r})}catch(l){if(!t.match(/-|_/))return;const s=this.languageUtils.getLanguagePartFromCode(t);a=this.getRule(s,e)}return this.pluralRulesCache[i]=a,a}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=this.getRule(t,e);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}getPluralFormsOfKey(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,o).map(r=>`${e}${r}`)}getSuffixes(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=this.getRule(t,e);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort((r,i)=>Yt[r]-Yt[i]).map(r=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${r}`):o.numbers.map(r=>this.getSuffix(t,r,e)):[]}getSuffix(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(t,o);return r?this.shouldUseIntlApi()?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${r.select(e)}`:this.getSuffixRetroCompatible(r,e):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,e){const o=t.noAbs?t.plurals(e):t.plurals(Math.abs(e));let r=t.numbers[o];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const i=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}shouldUseIntlApi(){return!un.includes(this.options.compatibilityJSON)}}const qt=function(n,t,e){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=_e(n,t,e);return!i&&r&&h(e)&&(i=$t(n,e,o),i===void 0&&(i=$t(t,e,o))),i},Lt=n=>n.replace(/\$/g,"$$$$");class fn{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=D.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(e=>e),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:o,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:l,suffixEscaped:s,formatSeparator:d,unescapeSuffix:c,unescapePrefix:p,nestingPrefix:u,nestingPrefixEscaped:f,nestingSuffix:b,nestingSuffixEscaped:m,nestingOptionsSeparator:k,maxReplaces:S,alwaysFormat:O}=t.interpolation;this.escape=e!==void 0?e:tn,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=i?U(i):a||"{{",this.suffix=l?U(l):s||"}}",this.formatSeparator=d||",",this.unescapePrefix=c?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=u?U(u):f||U("$t("),this.nestingSuffix=b?U(b):m||U(")"),this.nestingOptionsSeparator=k||",",this.maxReplaces=S||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(e,o)=>e&&e.source===o?(e.lastIndex=0,e):new RegExp(o,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,e,o,r){let i,a,l;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=f=>{if(f.indexOf(this.formatSeparator)<0){const S=qt(e,s,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,o,R(g(g({},r),e),{interpolationkey:f})):S}const b=f.split(this.formatSeparator),m=b.shift().trim(),k=b.join(this.formatSeparator).trim();return this.format(qt(e,s,m,this.options.keySeparator,this.options.ignoreJSONStructure),k,o,R(g(g({},r),e),{interpolationkey:m}))};this.resetRegExp();const c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,p=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Lt(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Lt(this.escape(f)):Lt(f)}].forEach(f=>{for(l=0;i=f.regex.exec(t);){const b=i[1].trim();if(a=d(b),a===void 0)if(typeof c=="function"){const k=c(t,i,r);a=h(k)?k:""}else if(r&&Object.prototype.hasOwnProperty.call(r,b))a="";else if(p){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${b} for interpolating ${t}`),a="";else!h(a)&&!this.useRawValueToEscape&&(a=Vt(a));const m=f.safeValue(a);if(t=t.replace(i[0],m),p?(f.regex.lastIndex+=a.length,f.regex.lastIndex-=i[0].length):f.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),t}nest(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,i,a;const l=(s,d)=>{const c=this.nestingOptionsSeparator;if(s.indexOf(c)<0)return s;const p=s.split(new RegExp(`${c}[ ]*{`));let u=`{${p[1]}`;s=p[0],u=this.interpolate(u,a);const f=u.match(/'/g),b=u.match(/"/g);(f&&f.length%2===0&&!b||b.length%2!==0)&&(u=u.replace(/'/g,'"'));try{a=JSON.parse(u),d&&(a=g(g({},d),a))}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,m),`${s}${c}${u}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,s};for(;r=this.nestingRegexp.exec(t);){let s=[];a=g({},o),a=a.replace&&!h(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const c=r[1].split(this.formatSeparator).map(p=>p.trim());r[1]=c.shift(),s=c,d=!0}if(i=e(l.call(this,r[1].trim(),a),a),i&&r[0]===t&&!h(i))return i;h(i)||(i=Vt(i)),i||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${t}`),i=""),d&&(i=s.reduce((c,p)=>this.format(c,p,o.lng,R(g({},o),{interpolationkey:r[1].trim()})),i.trim())),t=t.replace(r[0],i),this.regexp.lastIndex=0}return t}}const gn=n=>{let t=n.toLowerCase().trim();const e={};if(n.indexOf("(")>-1){const o=n.split("(");t=o[0].toLowerCase().trim();const r=o[1].substring(0,o[1].length-1);t==="currency"&&r.indexOf(":")<0?e.currency||(e.currency=r.trim()):t==="relativetime"&&r.indexOf(":")<0?e.range||(e.range=r.trim()):r.split(";").forEach(a=>{if(a){const[l,...s]=a.split(":"),d=s.join(":").trim().replace(/^'+|'+$/g,""),c=l.trim();e[c]||(e[c]=d),d==="false"&&(e[c]=!1),d==="true"&&(e[c]=!0),isNaN(d)||(e[c]=parseInt(d,10))}})}return{formatName:t,formatOptions:e}},V=n=>{const t={};return(e,o,r)=>{let i=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(i=R(g({},i),{[r.interpolationkey]:void 0}));const a=o+JSON.stringify(i);let l=t[a];return l||(l=n(bt(o),r),t[a]=l),l(e)}};class hn{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=D.create("formatter"),this.options=t,this.formats={number:V((e,o)=>{const r=new Intl.NumberFormat(e,g({},o));return i=>r.format(i)}),currency:V((e,o)=>{const r=new Intl.NumberFormat(e,R(g({},o),{style:"currency"}));return i=>r.format(i)}),datetime:V((e,o)=>{const r=new Intl.DateTimeFormat(e,g({},o));return i=>r.format(i)}),relativetime:V((e,o)=>{const r=new Intl.RelativeTimeFormat(e,g({},o));return i=>r.format(i,o.range||"day")}),list:V((e,o)=>{const r=new Intl.ListFormat(e,g({},o));return i=>r.format(i)})},this.init(t)}init(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=e.interpolation.formatSeparator||","}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=V(e)}format(t,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=e.split(this.formatSeparator);if(i.length>1&&i[0].indexOf("(")>1&&i[0].indexOf(")")<0&&i.find(l=>l.indexOf(")")>-1)){const l=i.findIndex(s=>s.indexOf(")")>-1);i[0]=[i[0],...i.splice(1,l)].join(this.formatSeparator)}return i.reduce((l,s)=>{const{formatName:d,formatOptions:c}=gn(s);if(this.formats[d]){let p=l;try{const u=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},f=u.locale||u.lng||r.locale||r.lng||o;p=this.formats[d](l,f,g(g(g({},c),r),u))}catch(u){this.logger.warn(u)}return p}else this.logger.warn(`there was no format function for ${d}`);return l},t)}}const bn=(n,t)=>{n.pending[t]!==void 0&&(delete n.pending[t],n.pendingCount--)};class mn extends kt{constructor(t,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=e,this.services=o,this.languageUtils=o.languageUtils,this.options=r,this.logger=D.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(o,r.backend,r)}queueLoad(t,e,o,r){const i={},a={},l={},s={};return t.forEach(d=>{let c=!0;e.forEach(p=>{const u=`${d}|${p}`;!o.reload&&this.store.hasResourceBundle(d,p)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?a[u]===void 0&&(a[u]=!0):(this.state[u]=1,c=!1,a[u]===void 0&&(a[u]=!0),i[u]===void 0&&(i[u]=!0),s[p]===void 0&&(s[p]=!0)))}),c||(l[d]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}loaded(t,e,o){const r=t.split("|"),i=r[0],a=r[1];e&&this.emit("failedLoading",i,a,e),!e&&o&&this.store.addResourceBundle(i,a,o,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&o&&(this.state[t]=0);const l={};this.queue.forEach(s=>{Ge(s.loaded,[i],a),bn(s,t),e&&s.errors.push(e),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(d=>{l[d]||(l[d]={});const c=s.loaded[d];c.length&&c.forEach(p=>{l[d][p]===void 0&&(l[d][p]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(s=>!s.done)}read(t,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:e,fcName:o,tried:r,wait:i,callback:a});return}this.readingCalls++;const l=(d,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(d&&c&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,t,e,o,r+1,i*2,a)},i);return}a(d,c)},s=this.backend[o].bind(this.backend);if(s.length===2){try{const d=s(t,e);d&&typeof d.then=="function"?d.then(c=>l(null,c)).catch(l):l(null,d)}catch(d){l(d)}return}return s(t,e,l)}prepareLoading(t,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();h(t)&&(t=this.languageUtils.toResolveHierarchy(t)),h(e)&&(e=[e]);const i=this.queueLoad(t,e,o,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(a=>{this.loadOne(a)})}load(t,e,o){this.prepareLoading(t,e,{},o)}reload(t,e,o){this.prepareLoading(t,e,{reload:!0},o)}loadOne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const o=t.split("|"),r=o[0],i=o[1];this.read(r,i,"read",void 0,void 0,(a,l)=>{a&&this.logger.warn(`${e}loading namespace ${i} for language ${r} failed`,a),!a&&l&&this.logger.log(`${e}loaded namespace ${i} for language ${r}`,l),this.loaded(t,a,l)})}saveMissing(t,e,o,r,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e)){this.logger.warn(`did not save key "${o}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend&&this.backend.create){const s=R(g({},a),{isUpdate:i}),d=this.backend.create.bind(this.backend);if(d.length<6)try{let c;d.length===5?c=d(t,e,o,r,s):c=d(t,e,o,r),c&&typeof c.then=="function"?c.then(p=>l(null,p)).catch(l):l(null,c)}catch(c){l(c)}else d(t,e,o,r,l,s)}!t||!t[0]||this.store.addResource(t[0],e,o,r)}}}const Gt=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let t={};if(typeof n[1]=="object"&&(t=n[1]),h(n[1])&&(t.defaultValue=n[1]),h(n[2])&&(t.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const e=n[3]||n[2];Object.keys(e).forEach(o=>{t[o]=e[o]})}return t},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),_t=n=>(h(n.ns)&&(n.ns=[n.ns]),h(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),h(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),n.supportedLngs&&n.supportedLngs.indexOf("cimode")<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),n),pt=()=>{},yn=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e=>{typeof n[e]=="function"&&(n[e]=n[e].bind(n))})};class et extends kt{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(super(),this.options=_t(t),this.services={},this.logger=D,this.modules={external:[]},yn(this),e&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,e),this;setTimeout(()=>{this.init(t,e)},0)}}init(){var t=this;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof e=="function"&&(o=e,e={}),!e.defaultNS&&e.defaultNS!==!1&&e.ns&&(h(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const r=Gt();this.options=g(g(g({},r),this.options),_t(e)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=g(g({},r.interpolation),this.options.interpolation)),e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const i=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?D.init(i(this.modules.logger),this.options):D.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl!="undefined"&&(c=hn);const p=new Zt(this.options);this.store=new Wt(this.options.resources,this.options);const u=this.services;u.logger=D,u.resourceStore=this.store,u.languageUtils=p,u.pluralResolver=new pn(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(u.formatter=i(c),u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new fn(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new mn(i(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",function(f){for(var b=arguments.length,m=new Array(b>1?b-1:0),k=1;k<b;k++)m[k-1]=arguments[k];t.emit(f,...m)}),this.modules.languageDetector&&(u.languageDetector=i(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=i(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new yt(this.services,this.options),this.translator.on("*",function(f){for(var b=arguments.length,m=new Array(b>1?b-1:0),k=1;k<b;k++)m[k-1]=arguments[k];t.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,o||(o=pt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return t.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return t.store[c](...arguments),t}});const s=q(),d=()=>{const c=(p,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(u),o(p,u)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),s}loadResources(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pt;const r=h(t)?t:this.language;if(typeof t=="function"&&(o=t),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const i=[],a=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(d=>{d!=="cimode"&&i.indexOf(d)<0&&i.push(d)})};r?a(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>a(s)),this.options.preload&&this.options.preload.forEach(l=>a(l)),this.services.backendConnector.load(i,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(l)})}else o(null)}reloadResources(t,e,o){const r=q();return typeof t=="function"&&(o=t,t=void 0),typeof e=="function"&&(o=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),o||(o=pt),this.services.backendConnector.reload(t,e,i=>{r.resolve(),o(i)}),r}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&de.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let e=0;e<this.languages.length;e++){const o=this.languages[e];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}}changeLanguage(t,e){var o=this;this.isLanguageChangingTo=t;const r=q();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},a=(s,d)=>{d?(i(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,r.resolve(function(){return o.t(...arguments)}),e&&e(s,function(){return o.t(...arguments)})},l=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const d=h(s)?s:this.services.languageUtils.getBestMatchFromCodes(s);d&&(this.language||i(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,c=>{a(c,d)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(t),r}getFixedT(t,e,o){var r=this;const i=function(a,l){let s;if(typeof l!="object"){for(var d=arguments.length,c=new Array(d>2?d-2:0),p=2;p<d;p++)c[p-2]=arguments[p];s=r.options.overloadTranslationOptionHandler([a,l].concat(c))}else s=g({},l);s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix!==""&&(s.keyPrefix=s.keyPrefix||o||i.keyPrefix);const u=r.options.keySeparator||".";let f;return s.keyPrefix&&Array.isArray(a)?f=a.map(b=>`${s.keyPrefix}${u}${b}`):f=s.keyPrefix?`${s.keyPrefix}${u}${a}`:a,r.t(f,s)};return h(t)?i.lng=t:i.lngs=t,i.ns=e,i.keyPrefix=o,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=e.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const a=(l,s)=>{const d=this.services.backendConnector.state[`${l}|${s}`];return d===-1||d===0||d===2};if(e.precheck){const l=e.precheck(this,a);if(l!==void 0)return l}return!!(this.hasResourceBundle(o,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(o,t)&&(!r||a(i,t)))}loadNamespaces(t,e){const o=q();return this.options.ns?(h(t)&&(t=[t]),t.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{o.resolve(),e&&e(r)}),o):(e&&e(),Promise.resolve())}loadLanguages(t,e){const o=q();h(t)&&(t=[t]);const r=this.options.preload||[],i=t.filter(a=>r.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return i.length?(this.options.preload=r.concat(i),this.loadResources(a=>{o.resolve(),e&&e(a)}),o):(e&&e(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const e=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services&&this.services.languageUtils||new Zt(Gt());return e.indexOf(o.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return new et(t,e)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pt;const o=t.forkResourceStore;o&&delete t.forkResourceStore;const r=R(g(g({},this.options),t),{isClone:!0}),i=new et(r);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(l=>{i[l]=this[l]}),i.services=g({},this.services),i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},o&&(i.store=new Wt(this.store.data,r),i.services.resourceStore=i.store),i.translator=new yt(i.services,r),i.translator.on("*",function(l){for(var s=arguments.length,d=new Array(s>1?s-1:0),c=1;c<s;c++)d[c-1]=arguments[c];i.emit(l,...d)}),i.init(r,e),i.translator.options=r,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const L=et.createInstance();L.createInstance=et.createInstance;L.createInstance;L.dir;L.init;L.loadResources;L.reloadResources;L.use;L.changeLanguage;L.getFixedT;L.t;L.exists;L.setDefaultNamespace;L.hasLoadedNamespace;L.loadNamespaces;L.loadLanguages;function vn(n,{i18next:t,rerenderOn:e=["languageChanged","loaded","added","removed"],slotStart:o="{",slotEnd:r="}",legacyI18nOptionsSupport:i=!1}){const a=Ct(new Date),l=()=>$e(()=>{a.value=new Date}),s=()=>a.value;e.forEach(u=>{var f;switch(u){case"added":case"removed":(f=t.store)==null||f.on(u,l);break;default:t.on(u,l);break}}),n.component("i18next",wn);const d=()=>t.isInitialized;i?n.config.globalProperties.$t=Ot(c,s,d):n.config.globalProperties.$t=Ot(t.t.bind(t),s,d),n.config.globalProperties.$i18next=new Proxy(t,{get(u,f){switch(f){case"__withAccessRecording":return(b,m)=>Ot(b,s,m);case"__slotPattern":return xn(o,r);default:return s(),Reflect.get(u,f)}}});function c(u,f){var b;const m=this.$options.i18nOptions;if(!m)return t.t(u,f);if(m.namespaces&&!ce(t,m.namespaces)())return"";let k=m.keyPrefix;typeof u=="string"&&p(u,t)&&(k=void 0);let S;return m.lng?S=t.getFixedT(m.lng,m.namespaces,k):S=t.getFixedT(null,(b=m.namespaces)!=null?b:null,k),S(u,f)}function p(u,f){const b=f.options.nsSeparator;return typeof b=="string"&&u.includes(b)}}function kn(n,t){const e=pe();let o;return o=e.getFixedT(null,null,void 0),{i18next:e,t:e.__withAccessRecording(o,ce(e,n))}}function ce(n,t=[]){let e;return()=>{if(e===void 0)if(n.isInitialized){const r=(typeof t=="string"?[t]:t).filter(i=>!n.hasLoadedNamespace(i));r.length?(e=!1,n.loadNamespaces(r).then(()=>e=!0)):e=!0}else return!1;return e}}function Ot(n,t,e){return new Proxy(n,{apply:function(o,r,i){return t(),e()?Reflect.apply(o,r,i):""}})}function pe(){const n=Re();if(!n)throw new Error("i18next-vue: No Vue instance in context. This needs to be called inside setup().");const t=n.appContext.config.globalProperties;if(!t.$i18next)throw new Error("i18next-vue: Make sure to register the i18next-vue plugin using app.use(...).");return t.$i18next}function xn(n,t){const e=`${n}\\s*([a-z0-9\\-]+)\\s*${t}`;return new RegExp(e,"gi")}var wn=Ne({props:{translation:{type:String,required:!0}},setup(n,{slots:t}){const e=pe().__slotPattern;return()=>{const o=n.translation,r=[];let i,a=0;for(;(i=e.exec(o))!==null;){r.push(o.substring(a,i.index));const l=t[i[1]];l?r.push(...l()):r.push(i[0]),a=e.lastIndex}return r.push(o.substring(a)),r}}});function Sn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function nt(n){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(n)}function Ln(n,t){if(nt(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t);if(nt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function On(n){var t=Ln(n,"string");return nt(t)=="symbol"?t:t+""}function Cn(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,On(o.key),o)}}function Pn(n,t,e){return t&&Cn(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}var fe=[],In=fe.forEach,$n=fe.slice;function Nn(n){return In.call($n.call(arguments,1),function(t){if(t)for(var e in t)n[e]===void 0&&(n[e]=t[e])}),n}var Xt=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Rn=function(t,e,o){var r=o||{};r.path=r.path||"/";var i=encodeURIComponent(e),a="".concat(t,"=").concat(i);if(r.maxAge>0){var l=r.maxAge-0;if(Number.isNaN(l))throw new Error("maxAge should be a Number");a+="; Max-Age=".concat(Math.floor(l))}if(r.domain){if(!Xt.test(r.domain))throw new TypeError("option domain is invalid");a+="; Domain=".concat(r.domain)}if(r.path){if(!Xt.test(r.path))throw new TypeError("option path is invalid");a+="; Path=".concat(r.path)}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");a+="; Expires=".concat(r.expires.toUTCString())}if(r.httpOnly&&(a+="; HttpOnly"),r.secure&&(a+="; Secure"),r.sameSite){var s=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(s){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a},te={create:function(t,e,o,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};o&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+o*60*1e3)),r&&(i.domain=r),document.cookie=Rn(t,encodeURIComponent(e),i)},read:function(t){for(var e="".concat(t,"="),o=document.cookie.split(";"),r=0;r<o.length;r++){for(var i=o[r];i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(e)===0)return i.substring(e.length,i.length)}return null},remove:function(t){this.create(t,"",-1)}},An={name:"cookie",lookup:function(t){var e;if(t.lookupCookie&&typeof document!="undefined"){var o=te.read(t.lookupCookie);o&&(e=o)}return e},cacheUserLanguage:function(t,e){e.lookupCookie&&typeof document!="undefined"&&te.create(e.lookupCookie,t,e.cookieMinutes,e.cookieDomain,e.cookieOptions)}},En={name:"querystring",lookup:function(t){var e;if(typeof window!="undefined"){var o=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));for(var r=o.substring(1),i=r.split("&"),a=0;a<i.length;a++){var l=i[a].indexOf("=");if(l>0){var s=i[a].substring(0,l);s===t.lookupQuerystring&&(e=i[a].substring(l+1))}}}return e}},G=null,ee=function(){if(G!==null)return G;try{G=window!=="undefined"&&window.localStorage!==null;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch(e){G=!1}return G},Tn={name:"localStorage",lookup:function(t){var e;if(t.lookupLocalStorage&&ee()){var o=window.localStorage.getItem(t.lookupLocalStorage);o&&(e=o)}return e},cacheUserLanguage:function(t,e){e.lookupLocalStorage&&ee()&&window.localStorage.setItem(e.lookupLocalStorage,t)}},_=null,ne=function(){if(_!==null)return _;try{_=window!=="undefined"&&window.sessionStorage!==null;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch(e){_=!1}return _},Fn={name:"sessionStorage",lookup:function(t){var e;if(t.lookupSessionStorage&&ne()){var o=window.sessionStorage.getItem(t.lookupSessionStorage);o&&(e=o)}return e},cacheUserLanguage:function(t,e){e.lookupSessionStorage&&ne()&&window.sessionStorage.setItem(e.lookupSessionStorage,t)}},Dn={name:"navigator",lookup:function(t){var e=[];if(typeof navigator!="undefined"){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)e.push(navigator.languages[o]);navigator.userLanguage&&e.push(navigator.userLanguage),navigator.language&&e.push(navigator.language)}return e.length>0?e:void 0}},jn={name:"htmlTag",lookup:function(t){var e,o=t.htmlTag||(typeof document!="undefined"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(e=o.getAttribute("lang")),e}},zn={name:"path",lookup:function(t){var e;if(typeof window!="undefined"){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array)if(typeof t.lookupFromPathIndex=="number"){if(typeof o[t.lookupFromPathIndex]!="string")return;e=o[t.lookupFromPathIndex].replace("/","")}else e=o[0].replace("/","")}return e}},Mn={name:"subdomain",lookup:function(t){var e=typeof t.lookupFromSubdomainIndex=="number"?t.lookupFromSubdomainIndex+1:1,o=typeof window!="undefined"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[e]}},ge=!1;try{document.cookie,ge=!0}catch(n){}var he=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];ge||he.splice(1,1);function Kn(){return{order:he,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:function(t){return t}}}var be=function(){function n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Sn(this,n),this.type="languageDetector",this.detectors={},this.init(t,e)}return Pn(n,[{key:"init",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=Nn(o,this.options||{},Kn()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=function(i){return i.replace("-","_")}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(An),this.addDetector(En),this.addDetector(Tn),this.addDetector(Fn),this.addDetector(Dn),this.addDetector(jn),this.addDetector(zn),this.addDetector(Mn)}},{key:"addDetector",value:function(e){return this.detectors[e.name]=e,this}},{key:"detect",value:function(e){var o=this;e||(e=this.options.order);var r=[];return e.forEach(function(i){if(o.detectors[i]){var a=o.detectors[i].lookup(o.options);a&&typeof a=="string"&&(a=[a]),a&&(r=r.concat(a))}}),r=r.map(function(i){return o.options.convertDetectedLanguage(i)}),this.services.languageUtils.getBestMatchFromCodes?r:r.length>0?r[0]:null}},{key:"cacheUserLanguage",value:function(e,o){var r=this;o||(o=this.options.caches),o&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||o.forEach(function(i){r.detectors[i]&&r.detectors[i].cacheUserLanguage(e,r.options)}))}}])}();be.type="languageDetector";var Un=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,Vn={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},Bn=vt.extend({name:"toolbar",style:Un,classes:Vn}),Hn={name:"BaseToolbar",extends:st,props:{ariaLabelledby:{type:String,default:null}},style:Bn,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},me={name:"Toolbar",extends:Hn,inheritAttrs:!1},Jn=["aria-labelledby"];function Wn(n,t,e,o,r,i){return y(),x("div",v({class:n.cx("root"),role:"toolbar","aria-labelledby":n.ariaLabelledby},n.ptmi("root")),[I("div",v({class:n.cx("start")},n.ptm("start")),[T(n.$slots,"start")],16),I("div",v({class:n.cx("center")},n.ptm("center")),[T(n.$slots,"center")],16),I("div",v({class:n.cx("end")},n.ptm("end")),[T(n.$slots,"end")],16)],16,Jn)}me.render=Wn;var ye={name:"SpinnerIcon",extends:Ae};function Qn(n){return Gn(n)||qn(n)||Yn(n)||Zn()}function Zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(n,t){if(n){if(typeof n=="string")return Nt(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Nt(n,t):void 0}}function qn(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Gn(n){if(Array.isArray(n))return Nt(n)}function Nt(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}function _n(n,t,e,o,r,i){return y(),x("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),Qn(t[0]||(t[0]=[I("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)])),16)}ye.render=_n;var Xn=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,to={root:function(t){var e=t.props,o=t.instance;return["p-badge p-component",{"p-badge-circle":Ee(e.value)&&String(e.value).length===1,"p-badge-dot":ie(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},eo=vt.extend({name:"badge",style:Xn,classes:to}),no={name:"BaseBadge",extends:st,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:eo,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function ot(n){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(n)}function oe(n,t,e){return(t=oo(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function oo(n){var t=ro(n,"string");return ot(t)=="symbol"?t:t+""}function ro(n,t){if(ot(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t);if(ot(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var ve={name:"Badge",extends:no,inheritAttrs:!1,computed:{dataP:function(){return B(oe(oe({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},io=["data-p"];function ao(n,t,e,o,r,i){return y(),x("span",v({class:n.cx("root"),"data-p":i.dataP},n.ptmi("root")),[T(n.$slots,"default",{},function(){return[Et(K(n.value),1)]})],16,io)}ve.render=ao;var so=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: " ";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;function rt(n){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(n)}function F(n,t,e){return(t=lo(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function lo(n){var t=uo(n,"string");return rt(t)=="symbol"?t:t+""}function uo(n,t){if(rt(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t);if(rt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var co={root:function(t){var e=t.instance,o=t.props;return["p-button p-component",F(F(F(F(F(F(F(F(F({"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link||o.variant==="link"},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text||o.variant==="text"),"p-button-outlined",o.outlined||o.variant==="outlined"),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",e.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var e=t.props;return["p-button-icon",F({},"p-button-icon-".concat(e.iconPos),e.label)]},label:"p-button-label"},po=vt.extend({name:"button",style:so,classes:co}),fo={name:"BaseButton",extends:st,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:po,provide:function(){return{$pcButton:this,$parentInstance:this}}};function it(n){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(n)}function P(n,t,e){return(t=go(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function go(n){var t=ho(n,"string");return it(t)=="symbol"?t:t+""}function ho(n,t){if(it(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t);if(it(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var Rt={name:"Button",extends:fo,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return v(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return ie(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return B(P(P(P(P(P(P(P(P(P(P({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return B(P(P({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return B(P(P({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:ye,Badge:ve},directives:{ripple:ae}},bo=["data-p"],mo=["data-p"];function yo(n,t,e,o,r,i){var a=ft("SpinnerIcon"),l=ft("Badge"),s=se("ripple");return n.asChild?T(n.$slots,"default",{key:1,class:Pt(n.cx("root")),a11yAttrs:i.a11yAttrs}):le((y(),z(It(n.as),v({key:0,class:n.cx("root"),"data-p":i.dataP},i.attrs),{default:gt(function(){return[T(n.$slots,"default",{},function(){return[n.loading?T(n.$slots,"loadingicon",v({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(y(),x("span",v({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(y(),z(a,v({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):T(n.$slots,"icon",v({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(y(),x("span",v({key:0,class:[n.cx("icon"),n.icon,n.iconClass],"data-p":i.dataIconP},n.ptm("icon")),null,16,bo)):A("",!0)]}),n.label?(y(),x("span",v({key:2,class:n.cx("label")},n.ptm("label"),{"data-p":i.dataLabelP}),K(n.label),17,mo)):A("",!0),n.badge?(y(),z(l,{key:3,value:n.badge,class:Pt(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):A("",!0)]})]}),_:3},16,["class","data-p"])),[[s]])}Rt.render=yo;function at(n){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(n)}function vo(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function ko(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,wo(o.key),o)}}function xo(n,t,e){return t&&ko(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function wo(n){var t=So(n,"string");return at(t)=="symbol"?t:t+""}function So(n,t){if(at(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t);if(at(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var Lo=function(){function n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};vo(this,n),this.element=t,this.listener=e}return xo(n,[{key:"bindScrollListener",value:function(){this.scrollableParents=Te(this.element);for(var e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}(),Oo=Fe(),Co=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,Po={root:function(t){var e=t.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var e=t.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Io=vt.extend({name:"menu",style:Co,classes:Po}),$o={name:"BaseMenu",extends:st,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Io,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ke={name:"Menuitem",hostName:"Menu",extends:st,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,e){return t&&t.item?Ke(t.item[e]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:v({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:v({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:v({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return B({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:ae}},No=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],Ro=["data-p"],Ao=["href","target"],Eo=["data-p"],To=["data-p"];function Fo(n,t,e,o,r,i){var a=se("ripple");return i.visible()?(y(),x("li",v({key:0,id:e.id,class:[n.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[I("div",v({class:n.cx("itemContent"),onClick:t[0]||(t[0]=function(l){return i.onItemClick(l)}),onMousemove:t[1]||(t[1]=function(l){return i.onItemMouseMove(l)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(y(),z(It(e.templates.item),{key:1,item:e.item,label:i.label(),props:i.getMenuItemProps(e.item)},null,8,["item","label","props"])):A("",!0):le((y(),x("a",v({key:0,href:e.item.url,class:n.cx("itemLink"),target:e.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[e.templates.itemicon?(y(),z(It(e.templates.itemicon),{key:0,item:e.item,class:Pt(n.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(y(),x("span",v({key:1,class:[n.cx("itemIcon"),e.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,Eo)):A("",!0),I("span",v({class:n.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),K(i.label()),17,To)],16,Ao)),[[a]])],16,Ro)],16,No)):A("",!0)}ke.render=Fo;function re(n){return Mo(n)||zo(n)||jo(n)||Do()}function Do(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jo(n,t){if(n){if(typeof n=="string")return At(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?At(n,t):void 0}}function zo(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mo(n){if(Array.isArray(n))return At(n)}function At(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}var xe={name:"Menu",extends:$o,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&wt.clear(this.container),this.container=null},methods:{itemClick:function(t){var e=t.item;this.disabled(e)||(e.command&&e.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(dt(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)dt(this.target),this.hide(),t.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(ct(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var e=Kt(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=e&&Kt(e,'a[data-pc-section="itemlink"]');this.popup&&dt(this.target),o?o.click():e&&e.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var e=ct(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=re(e).findIndex(function(r){return r.id===t});return o>-1?o+1:0},findPrevOptionIndex:function(t){var e=ct(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=re(e).findIndex(function(r){return r.id===t});return o>-1?o-1:0},changeFocusedOptionIndex:function(t){var e=ct(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=t>=e.length?e.length-1:t<0?0:t;o>-1&&(this.focusedOptionIndex=e[o].getAttribute("id"))},toggle:function(t,e){this.overlayVisible?this.hide():this.show(t,e)},show:function(t,e){this.overlayVisible=!0,this.target=e!=null?e:t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){Me(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&wt.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&dt(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&wt.clear(t)},alignOverlay:function(){ze(this.container,this.target);var t=xt(this.target);t>xt(this.container)&&(this.container.style.minWidth=xt(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(e){var o=t.container&&!t.container.contains(e.target),r=!(t.target&&(t.target===e.target||t.target.contains(e.target)));t.overlayVisible&&o&&r?t.hide():!t.popup&&o&&r&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Lo(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!je()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){Oo.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return B({popup:this.popup})}},components:{PVMenuitem:ke,Portal:De}},Ko=["id","data-p"],Uo=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Vo=["id"];function Bo(n,t,e,o,r,i){var a=ft("PVMenuitem"),l=ft("Portal");return y(),z(l,{appendTo:n.appendTo,disabled:!n.popup},{default:gt(function(){return[X(Ue,v({name:"p-anchored-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:gt(function(){return[!n.popup||r.overlayVisible?(y(),x("div",v({key:0,ref:i.containerRef,id:n.$id,class:n.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},n.ptmi("root")),[n.$slots.start?(y(),x("div",v({key:0,class:n.cx("start")},n.ptm("start")),[T(n.$slots,"start")],16)):A("",!0),I("ul",v({ref:i.listRef,id:n.$id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":r.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(y(!0),x(Y,null,Ut(n.model,function(s,d){return y(),x(Y,{key:i.label(s)+d.toString()},[s.items&&i.visible(s)&&!s.separator?(y(),x(Y,{key:0},[s.items?(y(),x("li",v({key:0,id:n.$id+"_"+d,class:[n.cx("submenuLabel"),s.class],role:"none"},{ref_for:!0},n.ptm("submenuLabel")),[T(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:s},function(){return[Et(K(i.label(s)),1)]})],16,Vo)):A("",!0),(y(!0),x(Y,null,Ut(s.items,function(c,p){return y(),x(Y,{key:c.label+d+"_"+p},[i.visible(c)&&!c.separator?(y(),z(a,{key:0,id:n.$id+"_"+d+"_"+p,item:c,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(c)&&c.separator?(y(),x("li",v({key:"separator"+d+p,class:[n.cx("separator"),s.class],style:c.style,role:"separator"},{ref_for:!0},n.ptm("separator")),null,16)):A("",!0)],64)}),128))],64)):i.visible(s)&&s.separator?(y(),x("li",v({key:"separator"+d.toString(),class:[n.cx("separator"),s.class],style:s.style,role:"separator"},{ref_for:!0},n.ptm("separator")),null,16)):(y(),z(a,{key:i.label(s)+d.toString(),id:n.$id+"_"+d,item:s,index:d,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Uo),n.$slots.end?(y(),x("div",v({key:1,class:n.cx("end")},n.ptm("end")),[T(n.$slots,"end")],16)):A("",!0)],16,Ko)):A("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}xe.render=Bo;const Ho="https://cdn.jsdelivr.net/gh/highclaws-com/cdn-ui-notice@sha-695593150017/assets/construction.png",Jo=(n,t)=>{const e=n.__vccOpts||n;for(const[o,r]of t)e[o]=r;return e},Wo=["data-layout-debug"],Qo={class:"actions-group"},Zo={class:"notice-container"},Yo={class:"image-wrapper"},qo=["src","alt"],Go={class:"notice-box"},_o={key:0,class:"support-line"},Xo=["href"],tr={__name:"App",setup(n){const{i18next:t,t:e}=kn(),o="help@highclaws.com".trim(),r=Ct(!1),i=Ct(),a=[{label:"English",command:()=>t.changeLanguage("en-US")},{label:"Deutsch",command:()=>t.changeLanguage("de-DE")},{label:"Français",command:()=>t.changeLanguage("fr-FR")},{label:"简体中文",command:()=>t.changeLanguage("zh-CN")},{label:"繁體中文",command:()=>t.changeLanguage("zh-TW")},{label:"日本語",command:()=>t.changeLanguage("ja-JP")},{label:"한국어",command:()=>t.changeLanguage("ko-KR")},{label:"Español",command:()=>t.changeLanguage("es-ES")},{label:"Português",command:()=>t.changeLanguage("pt-BR")}],l=He(()=>e("translation:title"));Ve(l,p=>{p&&(document.title=p)},{immediate:!0});const s=p=>{const u=document.documentElement;p?u.classList.add("p-dark"):u.classList.remove("p-dark")};Be(()=>{const u=new URLSearchParams(window.location.search).get("theme");if(u==="dark")r.value=!0,localStorage.setItem("theme","dark");else if(u==="light")r.value=!1,localStorage.setItem("theme","light");else{const f=localStorage.getItem("theme"),b=window.matchMedia("(prefers-color-scheme: dark)").matches;r.value=f==="dark"||!f&&b}s(r.value)});const d=()=>{r.value=!r.value,localStorage.setItem("theme",r.value?"dark":"light"),s(r.value)},c=p=>{i.value.toggle(p)};return(p,u)=>(y(),x("div",{class:"app-container","data-layout-debug":void 0},[X(j(me),{class:"header-glass"},{end:gt(()=>[I("div",Qo,[X(j(Rt),{icon:r.value?"pi pi-sun":"pi pi-moon",text:"",rounded:"","aria-label":"Toggle Theme",onClick:d},null,8,["icon"]),X(j(Rt),{icon:"pi pi-language",text:"",rounded:"","aria-label":"Language","aria-haspopup":"true","aria-controls":"lang_menu",onClick:c}),X(j(xe),{ref_key:"langMenu",ref:i,id:"lang_menu",model:a,popup:!0},null,512)])]),_:1}),I("main",Zo,[I("div",Yo,[I("img",{src:j(Ho),alt:p.$t("translation:title"),class:"error-image"},null,8,qo)]),I("div",Go,[I("p",null,K(p.$t("translation:maintenance_notice")),1),j(o)?(y(),x("small",_o,[Et(K(p.$t("translation:support"))+" ",1),I("a",{href:`mailto:${j(o)}`},K(j(o)),9,Xo)])):A("",!0)])])],8,Wo))}},er=Jo(tr,[["__scopeId","data-v-09631bc4"]]);var nr=(...n)=>Je(...n);const or={"en-US":{title:"Website Maintenance",maintenance_notice:`The world is a little broken, and our website is getting patched up too. 🛠️
Please come back later 👋`,support:"Customer service:"},"de-DE":{title:"Wartungsarbeiten",maintenance_notice:`Die Welt ist ein bisschen kaputt – und auch unsere Website wird gerade wieder zusammengeflickt. 🛠️
Bitte schauen Sie später noch einmal vorbei 👋`,support:"Kundenservice:"},"fr-FR":{title:"Maintenance en cours",maintenance_notice:`Le monde part un peu en morceaux, et notre site aussi est en train de se refaire une beauté. 🛠️
Revenez nous voir un peu plus tard 👋`,support:"Service client :"},"zh-CN":{title:"网站维护中",maintenance_notice:`世界破破烂烂，网站也在修修补补 🛠️
请之后再来 👋`,support:"客服邮箱："},"zh-TW":{title:"網站維護中",maintenance_notice:`世界破破爛爛，網站也在修修補補 🛠️
請稍後再來 👋`,support:"客服信箱："},"ja-JP":{title:"メンテナンス中",maintenance_notice:`世界はあちこち綻びだらけ。ウェブサイトもただいま繕い中です。 🛠️
またあとでお越しください 👋`,support:"カスタマーサポート："},"ko-KR":{title:"웹사이트 점검 중",maintenance_notice:`세상도 여기저기 고장 나고, 우리 웹사이트도 지금 열심히 수리 중이에요. 🛠️
나중에 다시 찾아와 주세요 👋`,support:"고객 지원:"},"es-ES":{title:"Sitio en mantenimiento",maintenance_notice:`El mundo está un poco hecho pedazos, y nuestra web también anda poniéndose parches. 🛠️
Vuelve a visitarnos más tarde 👋`,support:"Atención al cliente:"},"pt-BR":{title:"Site em manutenção",maintenance_notice:`O mundo anda meio quebrado, e nosso site também está recebendo uns remendos. 🛠️
Volte mais tarde 👋`,support:"Atendimento ao cliente:"}},rr=nr(Ze,{semantic:{primary:{300:"{cyan.300}",400:"{cyan.400}",500:"{cyan.500}",600:"{cyan.600}",700:"{cyan.700}",800:"{cyan.800}"},colorScheme:{light:{primary:{color:"{cyan.600}",hoverColor:"{cyan.700}",activeColor:"{cyan.800}"},highlight:{background:"{cyan.600}",focusBackground:"{cyan.700}"}},dark:{primary:{color:"{cyan.500}",hoverColor:"{cyan.400}",activeColor:"{cyan.300}"},highlight:{background:"{cyan.500}",focusBackground:"{cyan.400}"}}}}});L.use(be).init({fallbackLng:"en-US",resources:Object.fromEntries(Object.entries(or).map(([n,t])=>[n,{translation:t}])),detection:{order:["querystring","cookie","localStorage","navigator"],lookupQuerystring:"lang",caches:["localStorage","cookie"],cookieOptions:{path:"/",sameSite:"strict"}},interpolation:{escapeValue:!1}});const Tt=We(er);Tt.use(vn,{i18next:L});Tt.use(Qe,{theme:{preset:rr,options:{darkModeSelector:".p-dark"}}});Tt.mount("#app");
