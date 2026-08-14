import{n as ko,d as yo,r as X,g as wo,B as M,o as d,c as l,a as m,b as y,m as i,s as D,e as Co,l as io,f as $o,h as z,i as Z,t as R,R as co,j as A,k as lo,w as so,p as x,q as E,u as v,v as V,x as _,A as Bo,y as xo,z as Ro,Y as zo,D as So,C as N,E as K,S as Io,F as T,G as F,H as J,I as Lo,J as I,T as Po,K as S,L as oo,M as Oo,N as Wo,O as B,P as Do,Q as To,U as uo,V as Fo,W as Ao,X as Eo,Z as Mo}from"./translate.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=e(a);fetch(a.href,t)}})();function Ho(o,{i18next:r,rerenderOn:e=["languageChanged","loaded","added","removed"],slotStart:n="{",slotEnd:a="}",legacyI18nOptionsSupport:t=!1}){const s=X(new Date),g=()=>ko(()=>{s.value=new Date}),c=()=>s.value;e.forEach(u=>{var h;switch(u){case"added":case"removed":(h=r.store)==null||h.on(u,g);break;default:r.on(u,g);break}}),o.component("i18next",Ko);const b=()=>r.isInitialized;t?o.config.globalProperties.$t=Y(k,c,b):o.config.globalProperties.$t=Y(r.t.bind(r),c,b),o.config.globalProperties.$i18next=new Proxy(r,{get(u,h){switch(h){case"__withAccessRecording":return($,w)=>Y($,c,w);case"__slotPattern":return No(n,a);default:return c(),Reflect.get(u,h)}}});function k(u,h){var $;const w=this.$options.i18nOptions;if(!w)return r.t(u,h);if(w.namespaces&&!fo(r,w.namespaces)())return"";let H=w.keyPrefix;typeof u=="string"&&f(u,r)&&(H=void 0);let j;return w.lng?j=r.getFixedT(w.lng,w.namespaces,H):j=r.getFixedT(null,($=w.namespaces)!=null?$:null,H),j(u,h)}function f(u,h){const $=h.options.nsSeparator;return typeof $=="string"&&u.includes($)}}function jo(o,r){const e=go();let n;return n=e.getFixedT(null,null,void 0),{i18next:e,t:e.__withAccessRecording(n,fo(e,o))}}function fo(o,r=[]){let e;return()=>{if(e===void 0)if(o.isInitialized){const a=(typeof r=="string"?[r]:r).filter(t=>!o.hasLoadedNamespace(t));a.length?(e=!1,o.loadNamespaces(a).then(()=>e=!0)):e=!0}else return!1;return e}}function Y(o,r,e){return new Proxy(o,{apply:function(n,a,t){return r(),e()?Reflect.apply(n,a,t):""}})}function go(){const o=wo();if(!o)throw new Error("i18next-vue: No Vue instance in context. This needs to be called inside setup().");const r=o.appContext.config.globalProperties;if(!r.$i18next)throw new Error("i18next-vue: Make sure to register the i18next-vue plugin using app.use(...).");return r.$i18next}function No(o,r){const e=`${o}\\s*([a-z0-9\\-]+)\\s*${r}`;return new RegExp(e,"gi")}var Ko=yo({props:{translation:{type:String,required:!0}},setup(o,{slots:r}){const e=go().__slotPattern;return()=>{const n=o.translation,a=[];let t,s=0;for(;(t=e.exec(n))!==null;){a.push(n.substring(s,t.index));const g=r[t[1]];g?a.push(...g()):a.push(t[0]),s=e.lastIndex}return a.push(n.substring(s)),a}}}),Yo=`
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
`,Xo={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},Vo=M.extend({name:"toolbar",style:Yo,classes:Xo}),_o={name:"BaseToolbar",extends:D,props:{ariaLabelledby:{type:String,default:null}},style:Vo,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},bo={name:"Toolbar",extends:_o,inheritAttrs:!1},Go=["aria-labelledby"];function Uo(o,r,e,n,a,t){return d(),l("div",i({class:o.cx("root"),role:"toolbar","aria-labelledby":o.ariaLabelledby},o.ptmi("root")),[m("div",i({class:o.cx("start")},o.ptm("start")),[y(o.$slots,"start")],16),m("div",i({class:o.cx("center")},o.ptm("center")),[y(o.$slots,"center")],16),m("div",i({class:o.cx("end")},o.ptm("end")),[y(o.$slots,"end")],16)],16,Go)}bo.render=Uo;var po={name:"SpinnerIcon",extends:Co};function qo(o){return or(o)||Jo(o)||Qo(o)||Zo()}function Zo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qo(o,r){if(o){if(typeof o=="string")return G(o,r);var e={}.toString.call(o).slice(8,-1);return e==="Object"&&o.constructor&&(e=o.constructor.name),e==="Map"||e==="Set"?Array.from(o):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?G(o,r):void 0}}function Jo(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function or(o){if(Array.isArray(o))return G(o)}function G(o,r){(r==null||r>o.length)&&(r=o.length);for(var e=0,n=Array(r);e<r;e++)n[e]=o[e];return n}function rr(o,r,e,n,a,t){return d(),l("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.pti()),qo(r[0]||(r[0]=[m("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)])),16)}po.render=rr;var er=`
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
`,nr={root:function(r){var e=r.props,n=r.instance;return["p-badge p-component",{"p-badge-circle":$o(e.value)&&String(e.value).length===1,"p-badge-dot":io(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]}},tr=M.extend({name:"badge",style:er,classes:nr}),ar={name:"BaseBadge",extends:D,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:tr,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function L(o){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},L(o)}function ro(o,r,e){return(r=dr(r))in o?Object.defineProperty(o,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[r]=e,o}function dr(o){var r=ir(o,"string");return L(r)=="symbol"?r:r+""}function ir(o,r){if(L(o)!="object"||!o)return o;var e=o[Symbol.toPrimitive];if(e!==void 0){var n=e.call(o,r);if(L(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(o)}var mo={name:"Badge",extends:ar,inheritAttrs:!1,computed:{dataP:function(){return z(ro(ro({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},cr=["data-p"];function lr(o,r,e,n,a,t){return d(),l("span",i({class:o.cx("root"),"data-p":t.dataP},o.ptmi("root")),[y(o.$slots,"default",{},function(){return[Z(R(o.value),1)]})],16,cr)}mo.render=lr;var sr=`
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
`;function P(o){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},P(o)}function C(o,r,e){return(r=ur(r))in o?Object.defineProperty(o,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[r]=e,o}function ur(o){var r=fr(o,"string");return P(r)=="symbol"?r:r+""}function fr(o,r){if(P(o)!="object"||!o)return o;var e=o[Symbol.toPrimitive];if(e!==void 0){var n=e.call(o,r);if(P(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(o)}var gr={root:function(r){var e=r.instance,n=r.props;return["p-button p-component",C(C(C(C(C(C(C(C(C({"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link||n.variant==="link"},"p-button-".concat(n.severity),n.severity),"p-button-raised",n.raised),"p-button-rounded",n.rounded),"p-button-text",n.text||n.variant==="text"),"p-button-outlined",n.outlined||n.variant==="outlined"),"p-button-sm",n.size==="small"),"p-button-lg",n.size==="large"),"p-button-plain",n.plain),"p-button-fluid",e.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(r){var e=r.props;return["p-button-icon",C({},"p-button-icon-".concat(e.iconPos),e.label)]},label:"p-button-label"},br=M.extend({name:"button",style:sr,classes:gr}),pr={name:"BaseButton",extends:D,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:br,provide:function(){return{$pcButton:this,$parentInstance:this}}};function O(o){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},O(o)}function p(o,r,e){return(r=mr(r))in o?Object.defineProperty(o,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[r]=e,o}function mr(o){var r=hr(o,"string");return O(r)=="symbol"?r:r+""}function hr(o,r){if(O(o)!="object"||!o)return o;var e=o[Symbol.toPrimitive];if(e!==void 0){var n=e.call(o,r);if(O(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(o)}var U={name:"Button",extends:pr,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(r){var e=r==="root"?this.ptmi:this.ptm;return e(r,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return i(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return io(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return z(p(p(p(p(p(p(p(p(p(p({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return z(p(p({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return z(p(p({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:po,Badge:mo},directives:{ripple:co}},vr=["data-p"],kr=["data-p"];function yr(o,r,e,n,a,t){var s=A("SpinnerIcon"),g=A("Badge"),c=lo("ripple");return o.asChild?y(o.$slots,"default",{key:1,class:V(o.cx("root")),a11yAttrs:t.a11yAttrs}):so((d(),x(_(o.as),i({key:0,class:o.cx("root"),"data-p":t.dataP},t.attrs),{default:E(function(){return[y(o.$slots,"default",{},function(){return[o.loading?y(o.$slots,"loadingicon",i({key:0,class:[o.cx("loadingIcon"),o.cx("icon")]},o.ptm("loadingIcon")),function(){return[o.loadingIcon?(d(),l("span",i({key:0,class:[o.cx("loadingIcon"),o.cx("icon"),o.loadingIcon]},o.ptm("loadingIcon")),null,16)):(d(),x(s,i({key:1,class:[o.cx("loadingIcon"),o.cx("icon")],spin:""},o.ptm("loadingIcon")),null,16,["class"]))]}):y(o.$slots,"icon",i({key:1,class:[o.cx("icon")]},o.ptm("icon")),function(){return[o.icon?(d(),l("span",i({key:0,class:[o.cx("icon"),o.icon,o.iconClass],"data-p":t.dataIconP},o.ptm("icon")),null,16,vr)):v("",!0)]}),o.label?(d(),l("span",i({key:2,class:o.cx("label")},o.ptm("label"),{"data-p":t.dataLabelP}),R(o.label),17,kr)):v("",!0),o.badge?(d(),x(g,{key:3,value:o.badge,class:V(o.badgeClass),severity:o.badgeSeverity,unstyled:o.unstyled,pt:o.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):v("",!0)]})]}),_:3},16,["class","data-p"])),[[c]])}U.render=yr;function W(o){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},W(o)}function wr(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}function Cr(o,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,Br(n.key),n)}}function $r(o,r,e){return r&&Cr(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o}function Br(o){var r=xr(o,"string");return W(r)=="symbol"?r:r+""}function xr(o,r){if(W(o)!="object"||!o)return o;var e=o[Symbol.toPrimitive];if(e!==void 0){var n=e.call(o,r);if(W(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Rr=function(){function o(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};wr(this,o),this.element=r,this.listener=e}return $r(o,[{key:"bindScrollListener",value:function(){this.scrollableParents=Bo(this.element);for(var e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}(),zr=xo(),Sr=`
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
`,Ir={root:function(r){var e=r.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(r){var e=r.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Lr=M.extend({name:"menu",style:Sr,classes:Ir}),Pr={name:"BaseMenu",extends:D,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Lr,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ho={name:"Menuitem",hostName:"Menu",extends:D,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(r,e){return r&&r.item?Lo(r.item[e]):void 0},getPTOptions:function(r){return this.ptm(r,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(r){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:r,item:this.item.item}),this.$emit("item-click",{originalEvent:r,item:this.item,id:this.id})},onItemMouseMove:function(r){this.$emit("item-mousemove",{originalEvent:r,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(r){return{action:i({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:i({class:[this.cx("itemIcon"),r.icon]},this.getPTOptions("itemIcon")),label:i({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return z({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:co}},Or=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],Wr=["data-p"],Dr=["href","target"],Tr=["data-p"],Fr=["data-p"];function Ar(o,r,e,n,a,t){var s=lo("ripple");return t.visible()?(d(),l("li",i({key:0,id:e.id,class:[o.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":t.label(),"aria-disabled":t.disabled(),"data-p-focused":t.isItemFocused(),"data-p-disabled":t.disabled()||!1,"data-p":t.dataP},t.getPTOptions("item")),[m("div",i({class:o.cx("itemContent"),onClick:r[0]||(r[0]=function(g){return t.onItemClick(g)}),onMousemove:r[1]||(r[1]=function(g){return t.onItemMouseMove(g)}),"data-p":t.dataP},t.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(d(),x(_(e.templates.item),{key:1,item:e.item,label:t.label(),props:t.getMenuItemProps(e.item)},null,8,["item","label","props"])):v("",!0):so((d(),l("a",i({key:0,href:e.item.url,class:o.cx("itemLink"),target:e.item.target,tabindex:"-1"},t.getPTOptions("itemLink")),[e.templates.itemicon?(d(),x(_(e.templates.itemicon),{key:0,item:e.item,class:V(o.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(d(),l("span",i({key:1,class:[o.cx("itemIcon"),e.item.icon],"data-p":t.dataP},t.getPTOptions("itemIcon")),null,16,Tr)):v("",!0),m("span",i({class:o.cx("itemLabel"),"data-p":t.dataP},t.getPTOptions("itemLabel")),R(t.label()),17,Fr)],16,Dr)),[[s]])],16,Wr)],16,Or)):v("",!0)}ho.render=Ar;function eo(o){return jr(o)||Hr(o)||Mr(o)||Er()}function Er(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mr(o,r){if(o){if(typeof o=="string")return q(o,r);var e={}.toString.call(o).slice(8,-1);return e==="Object"&&o.constructor&&(e=o.constructor.name),e==="Map"||e==="Set"?Array.from(o):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?q(o,r):void 0}}function Hr(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function jr(o){if(Array.isArray(o))return q(o)}function q(o,r){(r==null||r>o.length)&&(r=o.length);for(var e=0,n=Array(r);e<r;e++)n[e]=o[e];return n}var vo={name:"Menu",extends:Pr,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&K.clear(this.container),this.container=null},methods:{itemClick:function(r){var e=r.item;this.disabled(e)||(e.command&&e.command(r),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==r.id&&(this.focusedOptionIndex=r.id))},itemMouseMove:function(r){this.focused&&(this.focusedOptionIndex=r.id)},onListFocus:function(r){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",r)},onListBlur:function(r){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",r)},onListKeyDown:function(r){switch(r.code){case"ArrowDown":this.onArrowDownKey(r);break;case"ArrowUp":this.onArrowUpKey(r);break;case"Home":this.onHomeKey(r);break;case"End":this.onEndKey(r);break;case"Enter":case"NumpadEnter":this.onEnterKey(r);break;case"Space":this.onSpaceKey(r);break;case"Escape":this.popup&&(T(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(r){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),r.preventDefault()},onArrowUpKey:function(r){if(r.altKey&&this.popup)T(this.target),this.hide(),r.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),r.preventDefault()}},onHomeKey:function(r){this.changeFocusedOptionIndex(0),r.preventDefault()},onEndKey:function(r){this.changeFocusedOptionIndex(F(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),r.preventDefault()},onEnterKey:function(r){var e=J(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=e&&J(e,'a[data-pc-section="itemlink"]');this.popup&&T(this.target),n?n.click():e&&e.click(),r.preventDefault()},onSpaceKey:function(r){this.onEnterKey(r)},findNextOptionIndex:function(r){var e=F(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),n=eo(e).findIndex(function(a){return a.id===r});return n>-1?n+1:0},findPrevOptionIndex:function(r){var e=F(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),n=eo(e).findIndex(function(a){return a.id===r});return n>-1?n-1:0},changeFocusedOptionIndex:function(r){var e=F(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),n=r>=e.length?e.length-1:r<0?0:r;n>-1&&(this.focusedOptionIndex=e[n].getAttribute("id"))},toggle:function(r,e){this.overlayVisible?this.hide():this.show(r,e)},show:function(r,e){this.overlayVisible=!0,this.target=e!=null?e:r.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(r){Io(r,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&K.set("menu",r,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&T(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(r){this.autoZIndex&&K.clear(r)},alignOverlay:function(){So(this.container,this.target);var r=N(this.target);r>N(this.container)&&(this.container.style.minWidth=N(this.target)+"px")},bindOutsideClickListener:function(){var r=this;this.outsideClickListener||(this.outsideClickListener=function(e){var n=r.container&&!r.container.contains(e.target),a=!(r.target&&(r.target===e.target||r.target.contains(e.target)));r.overlayVisible&&n&&a?r.hide():!r.popup&&n&&a&&(r.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var r=this;this.scrollHandler||(this.scrollHandler=new Rr(this.target,function(){r.overlayVisible&&r.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var r=this;this.resizeListener||(this.resizeListener=function(){r.overlayVisible&&!zo()&&r.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(r){return typeof r.visible=="function"?r.visible():r.visible!==!1},disabled:function(r){return typeof r.disabled=="function"?r.disabled():r.disabled},label:function(r){return typeof r.label=="function"?r.label():r.label},onOverlayClick:function(r){zr.emit("overlay-click",{originalEvent:r,target:this.target})},containerRef:function(r){this.container=r},listRef:function(r){this.list=r}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return z({popup:this.popup})}},components:{PVMenuitem:ho,Portal:Ro}},Nr=["id","data-p"],Kr=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Yr=["id"];function Xr(o,r,e,n,a,t){var s=A("PVMenuitem"),g=A("Portal");return d(),x(g,{appendTo:o.appendTo,disabled:!o.popup},{default:E(function(){return[I(Po,i({name:"p-anchored-overlay",onEnter:t.onEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},o.ptm("transition")),{default:E(function(){return[!o.popup||a.overlayVisible?(d(),l("div",i({key:0,ref:t.containerRef,id:o.$id,class:o.cx("root"),onClick:r[3]||(r[3]=function(){return t.onOverlayClick&&t.onOverlayClick.apply(t,arguments)}),"data-p":t.dataP},o.ptmi("root")),[o.$slots.start?(d(),l("div",i({key:0,class:o.cx("start")},o.ptm("start")),[y(o.$slots,"start")],16)):v("",!0),m("ul",i({ref:t.listRef,id:o.$id+"_list",class:o.cx("list"),role:"menu",tabindex:o.tabindex,"aria-activedescendant":a.focused?t.focusedOptionId:void 0,"aria-label":o.ariaLabel,"aria-labelledby":o.ariaLabelledby,onFocus:r[0]||(r[0]=function(){return t.onListFocus&&t.onListFocus.apply(t,arguments)}),onBlur:r[1]||(r[1]=function(){return t.onListBlur&&t.onListBlur.apply(t,arguments)}),onKeydown:r[2]||(r[2]=function(){return t.onListKeyDown&&t.onListKeyDown.apply(t,arguments)})},o.ptm("list")),[(d(!0),l(S,null,oo(o.model,function(c,b){return d(),l(S,{key:t.label(c)+b.toString()},[c.items&&t.visible(c)&&!c.separator?(d(),l(S,{key:0},[c.items?(d(),l("li",i({key:0,id:o.$id+"_"+b,class:[o.cx("submenuLabel"),c.class],role:"none"},{ref_for:!0},o.ptm("submenuLabel")),[y(o.$slots,o.$slots.submenulabel?"submenulabel":"submenuheader",{item:c},function(){return[Z(R(t.label(c)),1)]})],16,Yr)):v("",!0),(d(!0),l(S,null,oo(c.items,function(k,f){return d(),l(S,{key:k.label+b+"_"+f},[t.visible(k)&&!k.separator?(d(),x(s,{key:0,id:o.$id+"_"+b+"_"+f,item:k,templates:o.$slots,focusedOptionId:t.focusedOptionId,unstyled:o.unstyled,onItemClick:t.itemClick,onItemMousemove:t.itemMouseMove,pt:o.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):t.visible(k)&&k.separator?(d(),l("li",i({key:"separator"+b+f,class:[o.cx("separator"),c.class],style:k.style,role:"separator"},{ref_for:!0},o.ptm("separator")),null,16)):v("",!0)],64)}),128))],64)):t.visible(c)&&c.separator?(d(),l("li",i({key:"separator"+b.toString(),class:[o.cx("separator"),c.class],style:c.style,role:"separator"},{ref_for:!0},o.ptm("separator")),null,16)):(d(),x(s,{key:t.label(c)+b.toString(),id:o.$id+"_"+b,item:c,index:b,templates:o.$slots,focusedOptionId:t.focusedOptionId,unstyled:o.unstyled,onItemClick:t.itemClick,onItemMousemove:t.itemMouseMove,pt:o.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Kr),o.$slots.end?(d(),l("div",i({key:1,class:o.cx("end")},o.ptm("end")),[y(o.$slots,"end")],16)):v("",!0)],16,Nr)):v("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}vo.render=Xr;const Vr="https://cdn.jsdelivr.net/gh/highclaws-com/cdn-ui-notice@sha-0f9d35fa9411/assets/construction.png",_r=(o,r)=>{const e=o.__vccOpts||o;for(const[n,a]of r)e[n]=a;return e},Gr=["data-layout-debug"],Ur={class:"actions-group"},qr={class:"notice-container"},Zr={class:"image-wrapper"},Qr=["src","alt"],Jr={class:"notice-box"},oe={key:0,class:"support-line"},re=["href"],ee={__name:"App",setup(o){const{i18next:r,t:e}=jo(),n="help@highclaws.com".trim(),a=X(!1),t=X(),s=[{label:"English",command:()=>r.changeLanguage("en-US")},{label:"Deutsch",command:()=>r.changeLanguage("de-DE")},{label:"Français",command:()=>r.changeLanguage("fr-FR")},{label:"简体中文",command:()=>r.changeLanguage("zh-CN")},{label:"繁體中文",command:()=>r.changeLanguage("zh-TW")},{label:"日本語",command:()=>r.changeLanguage("ja-JP")},{label:"한국어",command:()=>r.changeLanguage("ko-KR")},{label:"Español",command:()=>r.changeLanguage("es-ES")},{label:"Português",command:()=>r.changeLanguage("pt-BR")}],g=Do(()=>e("translation:title"));Oo(g,f=>{f&&(document.title=f)},{immediate:!0});const c=f=>{const u=document.documentElement;f?u.classList.add("p-dark"):u.classList.remove("p-dark")};Wo(()=>{const u=new URLSearchParams(window.location.search).get("theme");if(u==="dark")a.value=!0,localStorage.setItem("theme","dark");else if(u==="light")a.value=!1,localStorage.setItem("theme","light");else{const h=localStorage.getItem("theme"),$=window.matchMedia("(prefers-color-scheme: dark)").matches;a.value=h==="dark"||!h&&$}c(a.value)});const b=()=>{a.value=!a.value,localStorage.setItem("theme",a.value?"dark":"light"),c(a.value)},k=f=>{t.value.toggle(f)};return(f,u)=>(d(),l("div",{class:"app-container","data-layout-debug":void 0},[I(B(bo),{class:"header-glass"},{end:E(()=>[m("div",Ur,[I(B(U),{icon:a.value?"pi pi-sun":"pi pi-moon",text:"",rounded:"","aria-label":"Toggle Theme",onClick:b},null,8,["icon"]),I(B(U),{icon:"pi pi-language",text:"",rounded:"","aria-label":"Language","aria-haspopup":"true","aria-controls":"lang_menu",onClick:k}),I(B(vo),{ref_key:"langMenu",ref:t,id:"lang_menu",model:s,popup:!0},null,512)])]),_:1}),m("main",qr,[m("div",Zr,[m("img",{src:B(Vr),alt:f.$t("translation:title"),class:"error-image"},null,8,Qr)]),m("div",Jr,[m("p",null,R(f.$t("translation:maintenance_notice")),1),B(n)?(d(),l("small",oe,[Z(R(f.$t("translation:support"))+" ",1),m("a",{href:`mailto:${B(n)}`},R(B(n)),9,re)])):v("",!0)])])],8,Gr))}},ne=_r(ee,[["__scopeId","data-v-09631bc4"]]);var te=(...o)=>To(...o),ae={transitionDuration:"{transition.duration}"},de={borderWidth:"0",borderColor:"{content.border.color}"},ie={color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"700",borderRadius:"0",borderWidth:"0 1px 1px 1px",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-2px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"1px"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},ce={borderWidth:"0 1px 1px 1px",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"1.125rem"},le={root:ae,panel:de,header:ie,content:ce},se={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},ue={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},fe={padding:"{list.padding}",gap:"{list.gap}"},ge={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},be={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},pe={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},background:"{form.field.background}",color:"{form.field.icon.color}",hoverColor:"{form.field.icon.color}",activeColor:"{form.field.icon.color}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},me={borderRadius:"{border.radius.xs}"},he={padding:"{list.option.padding}"},ve={light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.900}"},dropdown:{hoverBackground:"{surface.200}",activeBackground:"{surface.300}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{hoverBackground:"{surface.700}",activeBackground:"{surface.600}"}}},ke={root:se,overlay:ue,list:fe,option:ge,optionGroup:be,dropdown:pe,chip:me,emptyMessage:he,colorScheme:ve},ye={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.hover.background}",color:"{content.color}",borderRadius:"{content.border.radius}"},we={size:"1rem"},Ce={borderColor:"{content.background}",offset:"-0.75rem"},$e={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},Be={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},xe={root:ye,icon:we,group:Ce,lg:$e,xl:Be},Re={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},ze={size:"0.5rem"},Se={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},Ie={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},Le={fontSize:"1rem",minWidth:"2rem",height:"2rem"},Pe={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.200}",color:"{surface.700}"},success:{background:"{green.600}",color:"{surface.0}"},info:{background:"{sky.600}",color:"{surface.0}"},warn:{background:"{orange.600}",color:"{surface.0}"},danger:{background:"{red.600}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.700}",color:"{surface.200}"},success:{background:"{green.500}",color:"{green.950}"},info:{background:"{sky.500}",color:"{sky.950}"},warn:{background:"{orange.500}",color:"{orange.950}"},danger:{background:"{red.500}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},Oe={root:Re,dot:ze,sm:Se,lg:Ie,xl:Le,colorScheme:Pe},We={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},De={transitionDuration:"0s",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.xs}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-1px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.125rem 0",gap:"0",header:{padding:"0.5rem 0.75rem 0.375rem 0.75rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"0"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.xs}"},mask:{transitionDuration:"0.3s"},navigation:{list:{padding:"0.125rem 0",gap:"0"},item:{padding:"0.5rem 0.75rem",borderRadius:"0",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.xs}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.xs}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xs}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.600}",contrastColor:"#ffffff",hoverColor:"{primary.700}",activeColor:"{primary.800}"},highlight:{background:"{primary.600}",focusBackground:"{primary.700}",color:"#ffffff",focusColor:"#ffffff"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.100}",filledFocusBackground:"{surface.100}",borderColor:"{surface.500}",hoverBorderColor:"{surface.500}",focusBorderColor:"{surface.500}",invalidBorderColor:"{red.500}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.900}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.950}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.700}"},content:{background:"{surface.0}",hoverBackground:"{surface.200}",borderColor:"{surface.400}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"transparent",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"transparent",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"transparent",color:"{text.color}"}},list:{option:{focusBackground:"{surface.200}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{text.muted.color}",focusColor:"{text.hover.muted.color}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{primary.color}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{primary.contrast.color}",activeColor:"{text.hover.color}",icon:{color:"{text.muted.color}",focusColor:"{primary.contrast.color}",activeColor:"{text.hover.muted.color}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{text.muted.color}",focusColor:"{primary.contrast.color}",activeColor:"{text.hover.muted.color}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.500}",contrastColor:"{surface.950}",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"{primary.500}",focusBackground:"{primary.400}",color:"{surface.950}",focusColor:"{surface.950}"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.500}",hoverBorderColor:"{surface.500}",focusBorderColor:"{surface.500}",invalidBorderColor:"{red.400}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.0}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.700}",borderColor:"{surface.500}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.700}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{text.muted.color}",focusColor:"{text.hover.muted.color}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{primary.color}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{primary.contrast.color}",activeColor:"{text.color}",icon:{color:"{text.muted.color}",focusColor:"{primary.contrast.color}",activeColor:"{text.hover.muted.color}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{text.muted.color}",focusColor:"{primary.contrast.color}",activeColor:"{text.hover.muted.color}"}}}}},Te={primitive:We,semantic:De},Fe={borderRadius:"{content.border.radius}"},Ae={root:Fe},Ee={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},Me={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{text.muted.color}",hoverColor:"{text.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},He={color:"{navigation.item.icon.color}"},je={root:Ee,item:Me,separator:He},Ne={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"700"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},Ke={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{surface.400}",borderColor:"{surface.200}",hoverBorderColor:"{surface.300}",activeBorderColor:"{surface.400}",color:"{surface.700}",hoverColor:"{surface.800}",activeColor:"{surface.900}",focusRing:{color:"{surface.700}",shadow:"none"}},info:{background:"{sky.600}",hoverBackground:"{sky.700}",activeBackground:"{sky.800}",borderColor:"{sky.600}",hoverBorderColor:"{sky.700}",activeBorderColor:"{sky.800}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.600}",shadow:"none"}},success:{background:"{green.600}",hoverBackground:"{green.700}",activeBackground:"{green.800}",borderColor:"{green.600}",hoverBorderColor:"{green.700}",activeBorderColor:"{green.800}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.600}",shadow:"none"}},warn:{background:"{orange.600}",hoverBackground:"{orange.700}",activeBackground:"{orange.800}",borderColor:"{orange.600}",hoverBorderColor:"{orange.700}",activeBorderColor:"{orange.800}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.600}",shadow:"none"}},help:{background:"{purple.600}",hoverBackground:"{purple.700}",activeBackground:"{purple.800}",borderColor:"{purple.600}",hoverBorderColor:"{purple.700}",activeBorderColor:"{purple.800}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.600}",shadow:"none"}},danger:{background:"{red.600}",hoverBackground:"{red.700}",activeBackground:"{red.800}",borderColor:"{red.600}",hoverBorderColor:"{red.700}",activeBorderColor:"{red.800}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.600}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.600}",color:"{green.600}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.600}",color:"{sky.600}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.600}",color:"{orange.600}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.600}",color:"{purple.600}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.600}",color:"{red.600}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.600}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.600}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.600}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.600}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.600}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{surface.500}",borderColor:"{surface.700}",hoverBorderColor:"{surface.600}",activeBorderColor:"{surface.500}",color:"{surface.200}",hoverColor:"{surface.100}",activeColor:"{surface.0}",focusRing:{color:"{surface.200}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.400}",color:"{surface.400}"},success:{hoverBackground:"{green.950}",activeBackground:"{green.900}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.950}",activeBackground:"{sky.900}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.950}",activeBackground:"{orange.900}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.950}",activeBackground:"{purple.900}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.950}",activeBackground:"{red.900}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.0}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.0}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.500}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.500}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.500}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.500}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.500}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},Ye={root:Ne,colorScheme:Ke},Xe={background:"{content.background}",borderRadius:"{border.radius.sm}",color:"{content.color}",shadow:"0 1px 4px 0 rgba(0, 0, 0, 0.1)"},Ve={padding:"1.25rem",gap:"0.5rem"},_e={gap:"0.5rem"},Ge={fontSize:"1.25rem",fontWeight:"500"},Ue={color:"{text.muted.color}"},qe={root:Xe,body:Ve,caption:_e,title:Ge,subtitle:Ue},Ze={transitionDuration:"{transition.duration}"},Qe={gap:"0.25rem"},Je={padding:"1rem",gap:"0.5rem"},on={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},rn={light:{indicator:{background:"{surface.300}",hoverBackground:"{surface.400}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.600}",hoverBackground:"{surface.500}",activeBackground:"{primary.color}"}}},en={root:Ze,content:Qe,indicatorList:Je,indicator:on,colorScheme:rn},nn={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},tn={width:"2.5rem",color:"{form.field.icon.color}"},an={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},dn={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},cn={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},ln={color:"{form.field.icon.color}"},sn={root:nn,dropdown:tn,overlay:an,list:dn,option:cn,clearIcon:ln},un={borderRadius:"{border.radius.xs}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},fn={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},gn={root:un,icon:fn},bn={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},pn={width:"2rem",height:"2rem"},mn={size:"1rem"},hn={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},vn={light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.900}"},removeIcon:{color:"{surface.900}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},kn={root:bn,image:pn,icon:mn,removeIcon:hn,colorScheme:vn},yn={transitionDuration:"{transition.duration}"},wn={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Cn={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},$n={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},Bn={root:yn,preview:wn,panel:Cn,colorScheme:$n},xn={size:"2rem",color:"{overlay.modal.color}"},Rn={gap:"1rem"},zn={icon:xn,content:Rn},Sn={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},In={padding:"{overlay.popover.padding}",gap:"1rem"},Ln={size:"1.5rem",color:"{overlay.popover.color}"},Pn={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},On={root:Sn,content:In,icon:Ln,footer:Pn},Wn={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Dn={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Tn={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Fn={mobileIndent:"1rem"},An={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},En={borderColor:"{content.border.color}"},Mn={root:Wn,list:Dn,item:Tn,submenu:Fn,submenuIcon:An,separator:En},Hn={transitionDuration:"{transition.duration}"},jn={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"1px 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Nn={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Kn={fontWeight:"700"},Yn={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Xn={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Vn={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},_n={fontWeight:"700"},Gn={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Un={color:"{primary.color}"},qn={width:"0.5rem"},Zn={width:"1px",color:"{primary.color}"},Qn={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},Jn={size:"2rem"},ot={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},rt={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},et={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},nt={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},tt={light:{root:{borderColor:"{surface.300}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.600}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},at={root:Hn,header:jn,headerCell:Nn,columnTitle:Kn,row:Yn,bodyCell:Xn,footerCell:Vn,columnFooter:_n,footer:Gn,dropPoint:Un,columnResizer:qn,resizeIndicator:Zn,sortIcon:Qn,loadingIcon:Jn,rowToggleButton:ot,filter:rt,paginatorTop:et,paginatorBottom:nt,colorScheme:tt},dt={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},it={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},ct={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},lt={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},st={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},ut={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},ft={root:dt,header:it,content:ct,footer:lt,paginatorTop:st,paginatorBottom:ut},gt={transitionDuration:"{transition.duration}"},bt={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},pt={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},mt={gap:"0.5rem",fontWeight:"500"},ht={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},background:"{form.field.background}",color:"{form.field.icon.color}",hoverColor:"{form.field.icon.color}",activeColor:"{form.field.icon.color}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},vt={color:"{form.field.icon.color}"},kt={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},yt={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},wt={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},Ct={margin:"0.5rem 0 0 0"},$t={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},Bt={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},xt={margin:"0.5rem 0 0 0"},Rt={padding:"0.375rem",borderRadius:"{content.border.radius}"},zt={margin:"0.5rem 0 0 0"},St={padding:"0.375rem",borderRadius:"{content.border.radius}"},It={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},Lt={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},Pt={light:{dropdown:{hoverBackground:"{surface.200}",activeBackground:"{surface.300}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{hoverBackground:"{surface.700}",activeBackground:"{surface.600}"},today:{background:"{surface.700}",color:"{surface.0}"}}},Ot={root:gt,panel:bt,header:pt,title:mt,dropdown:ht,inputIcon:vt,selectMonth:kt,selectYear:yt,group:wt,dayView:Ct,weekDay:$t,date:Bt,monthView:xt,month:Rt,yearView:zt,year:St,buttonbar:It,timePicker:Lt,colorScheme:Pt},Wt={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},Dt={padding:"{overlay.modal.padding}",gap:"0.5rem"},Tt={fontSize:"1.25rem",fontWeight:"700"},Ft={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},At={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},Et={root:Wt,header:Dt,title:Tt,content:Ft,footer:At},Mt={borderColor:"{content.border.color}"},Ht={background:"{content.background}",color:"{text.color}"},jt={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},Nt={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},Kt={root:Mt,content:Ht,horizontal:jt,vertical:Nt},Yt={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},Xt={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Vt={root:Yt,item:Xt},_t={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},Gt={padding:"{overlay.modal.padding}"},Ut={fontSize:"1.5rem",fontWeight:"700"},qt={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Zt={padding:"{overlay.modal.padding}"},Qt={root:_t,header:Gt,title:Ut,content:qt,footer:Zt},Jt={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},oa={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},ra={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},ea={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},na={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},ta={toolbar:Jt,toolbarItem:oa,overlay:ra,overlayOption:ea,content:na},aa={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0.75rem 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},da={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"{content.border.color}",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"700",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ia={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},ca={padding:"0"},la={root:aa,legend:da,toggleIcon:ia,content:ca},sa={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},ua={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},fa={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},ga={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},ba={gap:"0.5rem"},pa={height:"0.25rem"},ma={gap:"0.5rem"},ha={root:sa,header:ua,content:fa,file:ga,fileList:ba,progressbar:pa,basic:ma},va={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},ka={active:{top:"-1.25rem"}},ya={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},wa={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},Ca={root:va,over:ka,in:ya,on:wa},$a={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Ba={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},xa={size:"1.5rem"},Ra={background:"{content.background}",padding:"1rem 0.25rem"},za={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Sa={size:"1rem"},Ia={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},La={gap:"0.5rem",padding:"1rem"},Pa={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Oa={background:"rgba(0, 0, 0, 0.5)"},Wa={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},Da={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ta={size:"1.5rem"},Fa={light:{thumbnailNavButton:{hoverBackground:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},indicatorButton:{background:"{surface.300}",hoverBackground:"{surface.400}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.600}",hoverBackground:"{surface.500}"}}},Aa={root:$a,navButton:Ba,navIcon:xa,thumbnailsContent:Ra,thumbnailNavButton:za,thumbnailNavButtonIcon:Sa,caption:Ia,indicatorList:La,indicatorButton:Pa,insetIndicatorList:Oa,insetIndicatorButton:Wa,closeButton:Da,closeButtonIcon:Ta,colorScheme:Fa},Ea={color:"{form.field.icon.color}"},Ma={icon:Ea},Ha={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},ja={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},Na={root:Ha,input:ja},Ka={transitionDuration:"{transition.duration}"},Ya={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},Xa={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"{content.border.radius}",padding:".5rem",gap:"0.5rem"},Va={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},_a={root:Ka,preview:Ya,toolbar:Xa,action:Va},Ga={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"rgba(255,255,255,0.3)",hoverBorderColor:"rgba(255,255,255,0.3)",borderWidth:"3px",borderRadius:"{content.border.radius}",transitionDuration:"0.2s",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ua={handle:Ga},qa={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},Za={fontWeight:"700"},Qa={size:"1rem"},Ja={light:{info:{background:"{blue.800}",borderColor:"{blue.800}",color:"{blue.50}",shadow:"none"},success:{background:"{green.800}",borderColor:"{green.800}",color:"{green.50}",shadow:"none"},warn:{background:"{yellow.600}",borderColor:"{yellow.600}",color:"{yellow.50}",shadow:"none"},error:{background:"{red.800}",borderColor:"{red.800}",color:"{red.50}",shadow:"none"},secondary:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.700}",shadow:"none"},contrast:{background:"{surface.900}",borderColor:"{surface.900}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"{blue.200}",borderColor:"{blue.200}",color:"{blue.950}",shadow:"none"},success:{background:"{green.200}",borderColor:"{green.200}",color:"{green.950}",shadow:"none"},warn:{background:"{yellow.200}",borderColor:"{yellow.200}",color:"{yellow.950}",shadow:"none"},error:{background:"{red.200}",borderColor:"{red.200}",color:"{red.950}",shadow:"none"},secondary:{background:"{surface.700}",borderColor:"{surface.700}",color:"{surface.200}",shadow:"none"},contrast:{background:"{surface.0}",borderColor:"{surface.0}",color:"{surface.950}",shadow:"none"}}},od={root:qa,text:Za,icon:Qa,colorScheme:Ja},rd={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},ed={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},nd={root:rd,display:ed},td={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},ad={borderRadius:"{border.radius.xs}"},dd={light:{chip:{focusBackground:"{surface.300}",color:"{surface.900}"}},dark:{chip:{focusBackground:"{surface.600}",color:"{surface.0}"}}},id={root:td,chip:ad,colorScheme:dd},cd={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},ld={addon:cd},sd={transitionDuration:"{transition.duration}"},ud={background:"transparent",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{form.field.icon.color}",hoverColor:"{form.field.icon.color}",activeColor:"{form.field.icon.color}",width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},fd={light:{button:{hoverBackground:"{surface.200}",activeBackground:"{surface.300}"}},dark:{button:{hoverBackground:"{surface.700}",activeBackground:"{surface.600}"}}},gd={root:sd,button:ud,colorScheme:fd},bd={gap:"0.5rem"},pd={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},md={root:bd,input:pd},hd={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},vd={root:hd},kd={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},yd={background:"{primary.color}"},wd={color:"{text.muted.color}"},Cd={light:{range:{background:"{surface.300}"}},dark:{range:{background:"{surface.600}"}}},$d={root:kd,value:yd,text:wd,colorScheme:Cd},Bd={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},xd={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Rd={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},zd={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Sd={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},Id={padding:"{list.option.padding}"},Ld={light:{option:{stripedBackground:"{surface.100}"}},dark:{option:{stripedBackground:"{surface.800}"}}},Pd={root:Bd,list:xd,option:Rd,optionGroup:zd,checkmark:Sd,emptyMessage:Id,colorScheme:Ld},Od={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},Wd={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},Dd={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Td={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},Fd={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Ad={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Ed={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Md={borderColor:"{content.border.color}"},Hd={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},jd={root:Od,baseItem:Wd,item:Dd,overlay:Td,submenu:Fd,submenuLabel:Ad,submenuIcon:Ed,separator:Md,mobileButton:Hd},Nd={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Kd={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Yd={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},Xd={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Vd={borderColor:"{content.border.color}"},_d={root:Nd,list:Kd,item:Yd,submenuLabel:Xd,separator:Vd},Gd={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},Ud={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},qd={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Zd={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},Qd={borderColor:"{content.border.color}"},Jd={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},oi={root:Gd,baseItem:Ud,item:qd,submenu:Zd,separator:Qd,mobileButton:Jd},ri={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},ei={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},ni={fontSize:"1rem",fontWeight:"700",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},ti={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},ai={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},di={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},ii={root:{borderWidth:"1px"}},ci={content:{padding:"0"}},li={light:{info:{background:"{blue.800}",borderColor:"{blue.800}",color:"{blue.50}",shadow:"none",closeButton:{hoverBackground:"{blue.600}",focusRing:{color:"{blue.50}",shadow:"none"}},outlined:{color:"{blue.800}",borderColor:"{blue.800}"},simple:{color:"{blue.800}"}},success:{background:"{green.800}",borderColor:"{green.800}",color:"{green.50}",shadow:"none",closeButton:{hoverBackground:"{green.600}",focusRing:{color:"{green.50}",shadow:"none"}},outlined:{color:"{green.800}",borderColor:"{green.800}"},simple:{color:"{green.800}"}},warn:{background:"{yellow.600}",borderColor:"{yellow.600}",color:"{yellow.50}",shadow:"none",closeButton:{hoverBackground:"{yellow.400}",focusRing:{color:"{yellow.50}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"{red.800}",borderColor:"{red.800}",color:"{red.50}",shadow:"none",closeButton:{hoverBackground:"{red.600}",focusRing:{color:"{red.50}",shadow:"none"}},outlined:{color:"{red.800}",borderColor:"{red.800}"},simple:{color:"{red.800}"}},secondary:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.700}",shadow:"none",closeButton:{hoverBackground:"{surface.50}",focusRing:{color:"{surface.700}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.900}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.900}",borderColor:"{surface.900}"},simple:{color:"{surface.900}"}}},dark:{info:{background:"{blue.200}",borderColor:"{blue.200}",color:"{blue.950}",shadow:"none",closeButton:{hoverBackground:"{blue.50}",focusRing:{color:"{blue.950}",shadow:"none"}},outlined:{color:"{blue.200}",borderColor:"{blue.200}"},simple:{color:"{blue.200}"}},success:{background:"{green.200}",borderColor:"{green.200}",color:"{green.950}",shadow:"none",closeButton:{hoverBackground:"{green.50}",focusRing:{color:"{green.950}",shadow:"none"}},outlined:{color:"{green.200}",borderColor:"{green.200}"},simple:{color:"{green.200}"}},warn:{background:"{yellow.200}",borderColor:"{yellow.200}",color:"{yellow.950}",shadow:"none",closeButton:{hoverBackground:"{yellow.50}",focusRing:{color:"{yellow.950}",shadow:"none"}},outlined:{color:"{yellow.200}",borderColor:"{yellow.200}"},simple:{color:"{yellow.200}"}},error:{background:"{red.200}",borderColor:"{red.200}",color:"{red.950}",shadow:"none",closeButton:{hoverBackground:"{red.50}",focusRing:{color:"{red.950}",shadow:"none"}},outlined:{color:"{red.200}",borderColor:"{red.200}"},simple:{color:"{red.200}"}},secondary:{background:"{surface.700}",borderColor:"{surface.700}",color:"{surface.200}",shadow:"none",closeButton:{hoverBackground:"{surface.500}",focusRing:{color:"{surface.200}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.0}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},si={root:ri,content:ei,text:ni,icon:ti,closeButton:ai,closeIcon:di,outlined:ii,simple:ci,colorScheme:li},ui={borderRadius:"{content.border.radius}",gap:"1rem"},fi={size:"0.5rem"},gi={gap:"0.5rem"},bi={size:"0.5rem"},pi={size:"1rem"},mi={verticalGap:"0.5rem",horizontalGap:"1rem"},hi={light:{meters:{background:"{surface.300}"}},dark:{meters:{background:"{surface.600}"}}},vi={root:ui,meters:fi,label:gi,labelMarker:bi,labelIcon:pi,labelList:mi,colorScheme:hi},ki={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},yi={width:"2.5rem",color:"{form.field.icon.color}"},wi={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Ci={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},$i={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},Bi={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},xi={color:"{form.field.icon.color}"},Ri={borderRadius:"{border.radius.xs}"},zi={padding:"{list.option.padding}"},Si={root:ki,dropdown:yi,overlay:wi,list:Ci,option:$i,optionGroup:Bi,chip:Ri,clearIcon:xi,emptyMessage:zi},Ii={gap:"1.125rem"},Li={gap:"0.5rem"},Pi={root:Ii,controls:Li},Oi={gutter:"0.75rem",transitionDuration:"{transition.duration}"},Wi={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},Di={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ti={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},Fi={root:Oi,node:Wi,nodeToggleButton:Di,connector:Ti},Ai={outline:{width:"2px",color:"{content.background}"}},Ei={root:Ai},Mi={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},Hi={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ji={color:"{text.muted.color}"},Ni={maxWidth:"2.5rem"},Ki={root:Mi,navButton:Hi,currentPageReport:ji,jumpToPageInput:Ni},Yi={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Xi={background:"transparent",color:"{text.color}",padding:"1.125rem",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",borderRadius:"0"},Vi={padding:"0.375rem 1.125rem"},_i={fontWeight:"700"},Gi={padding:"1.125rem"},Ui={padding:"0 1.125rem 1.125rem 1.125rem"},qi={root:Yi,header:Xi,toggleableHeader:Vi,title:_i,content:Gi,footer:Ui},Zi={gap:"0",transitionDuration:"{transition.duration}"},Qi={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"0",first:{borderWidth:"1px 1px 0 1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0 1px 1px 1px",bottomBorderRadius:"{content.border.radius}"}},Ji={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},oc={indent:"1rem"},rc={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},ec={root:Zi,panel:Qi,item:Ji,submenu:oc,submenuIcon:rc},nc={borderRadius:"{content.border.radius}",height:".75rem"},tc={color:"{form.field.icon.color}"},ac={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},dc={gap:"0.5rem"},ic={light:{meter:{background:"{surface.300}"},strength:{weakBackground:"{red.600}",mediumBackground:"{yellow.600}",strongBackground:"{green.600}"}},dark:{meter:{background:"{surface.600}"},strength:{weakBackground:"{red.500}",mediumBackground:"{yellow.500}",strongBackground:"{green.500}"}}},cc={meter:nc,icon:tc,overlay:ac,content:dc,colorScheme:ic},lc={gap:"1.125rem"},sc={gap:"0.5rem"},uc={root:lc,controls:sc},fc={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},gc={padding:"{overlay.popover.padding}"},bc={root:fc,content:gc},pc={borderRadius:"{content.border.radius}",height:"1.25rem"},mc={background:"{primary.color}"},hc={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"700"},vc={light:{root:{background:"{surface.300}"}},dark:{root:{background:"{surface.600}"}}},kc={root:pc,value:mc,label:hc,colorScheme:vc},yc={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},wc={colorScheme:yc},Cc={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{form.field.background}",checkedHoverBackground:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{form.field.border.color}",checkedHoverBorderColor:"{form.field.hover.border.color}",checkedFocusBorderColor:"{form.field.focus.border.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},$c={size:"0.75rem",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},Bc={root:Cc,icon:$c},xc={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Rc={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},zc={root:xc,icon:Rc},Sc={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.4)"}}},Ic={colorScheme:Sc},Lc={transitionDuration:"{transition.duration}"},Pc={size:"9px",borderRadius:"{border.radius.xs}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Oc={light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}},Wc={root:Lc,bar:Pc,colorScheme:Oc},Dc={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Tc={width:"2.5rem",color:"{form.field.icon.color}"},Fc={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Ac={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Ec={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Mc={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Hc={color:"{form.field.icon.color}"},jc={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},Nc={padding:"{list.option.padding}"},Kc={root:Dc,dropdown:Tc,overlay:Fc,list:Ac,option:Ec,optionGroup:Mc,clearIcon:Hc,checkmark:jc,emptyMessage:Nc},Yc={borderRadius:"{form.field.border.radius}"},Xc={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},Vc={root:Yc,colorScheme:Xc},_c={borderRadius:"{content.border.radius}"},Gc={light:{root:{background:"{surface.300}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.1)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},Uc={root:_c,colorScheme:Gc},qc={transitionDuration:"{transition.duration}"},Zc={borderRadius:"{content.border.radius}",size:"3px"},Qc={background:"{primary.color}"},Jc={width:"16px",height:"16px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",width:"12px",height:"12px",shadow:"none"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ol={light:{track:{background:"{surface.300}"}},dark:{track:{background:"{surface.600}"}}},rl={root:qc,track:Zc,range:Qc,handle:Jc,colorScheme:ol},el={gap:"0.5rem",transitionDuration:"{transition.duration}"},nl={root:el},tl={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},al={root:tl},dl={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},il={background:"{content.border.color}"},cl={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ll={root:dl,gutter:il,handle:cl},sl={transitionDuration:"{transition.duration}"},ul={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},fl={padding:"0.5rem",gap:"1rem"},gl={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},bl={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"700"},pl={background:"{content.background}",activeBackground:"{primary.color}",borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},ml={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},hl={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},vl={root:sl,separator:ul,step:fl,stepHeader:gl,stepTitle:bl,stepNumber:pl,steppanels:ml,steppanel:hl},kl={transitionDuration:"{transition.duration}"},yl={background:"{content.border.color}"},wl={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},Cl={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"700"},$l={background:"{content.background}",activeBackground:"{primary.color}",borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},Bl={root:kl,separator:yl,itemLink:wl,itemLabel:Cl,itemNumber:$l},xl={transitionDuration:"{transition.duration}"},Rl={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},zl={background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{primary.color}",borderWidth:"0",borderColor:"transparent",hoverBorderColor:"transparent",activeBorderColor:"transparent",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.contrast.color}",padding:"1rem 1.25rem",fontWeight:"700",margin:"0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Sl={color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.contrast.color}"},Il={height:"0",bottom:"0",background:"transparent"},Ll={root:xl,tablist:Rl,item:zl,itemIcon:Sl,activeBar:Il},Pl={transitionDuration:"{transition.duration}"},Ol={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Wl={background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{primary.color}",borderWidth:"0",borderColor:"transparent",hoverBorderColor:"transparent",activeBorderColor:"transparent",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.contrast.color}",padding:"1rem 1.25rem",fontWeight:"700",margin:"0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-2px",shadow:"{focus.ring.shadow}"}},Dl={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Tl={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Fl={height:"0",bottom:"0",background:"transparent"},Al={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},El={root:Pl,tablist:Ol,tab:Wl,tabpanel:Dl,navButton:Tl,activeBar:Fl,colorScheme:Al},Ml={transitionDuration:"{transition.duration}"},Hl={background:"{content.background}",borderColor:"{content.border.color}"},jl={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Nl={background:"{content.background}",color:"{content.color}"},Kl={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},Yl={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},Xl={root:Ml,tabList:Hl,tab:jl,tabPanel:Nl,navButton:Kl,colorScheme:Yl},Vl={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},_l={size:"0.75rem"},Gl={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.200}",color:"{surface.700}"},success:{background:"{green.600}",color:"{surface.0}"},info:{background:"{sky.600}",color:"{surface.0}"},warn:{background:"{orange.600}",color:"{surface.0}"},danger:{background:"{red.600}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.700}",color:"{surface.200}"},success:{background:"{green.500}",color:"{green.950}"},info:{background:"{sky.500}",color:"{sky.950}"},warn:{background:"{orange.500}",color:"{orange.950}"},danger:{background:"{red.500}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},Ul={root:Vl,icon:_l,colorScheme:Gl},ql={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},Zl={gap:"0.25rem"},Ql={margin:"2px 0"},Jl={root:ql,prompt:Zl,commandResponse:Ql},os={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},rs={root:os},es={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},ns={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},ts={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},as={mobileIndent:"1rem"},ds={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},is={borderColor:"{content.border.color}"},cs={root:es,list:ns,item:ts,submenu:as,submenuIcon:ds,separator:is},ls={minHeight:"5rem"},ss={eventContent:{padding:"1rem 0"}},us={eventContent:{padding:"0 1rem"}},fs={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",borderColor:"{primary.color}",content:{borderRadius:"50%",size:"0.375rem",background:"transparent",insetShadow:"none"}},gs={color:"{content.border.color}",size:"2px"},bs={event:ls,horizontal:ss,vertical:us,eventMarker:fs,eventConnector:gs},ps={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0 0 0 6px",transitionDuration:"{transition.duration}",blur:"0"},ms={size:"1.125rem"},hs={padding:"{overlay.popover.padding}",gap:"0.5rem"},vs={gap:"0.5rem"},ks={fontWeight:"700",fontSize:"1rem"},ys={fontWeight:"500",fontSize:"0.875rem"},ws={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Cs={size:"1rem"},$s={light:{info:{background:"{blue.800}",borderColor:"{blue.800}",color:"{blue.50}",detailColor:"{blue.50}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{blue.600}",focusRing:{color:"{blue.50}",shadow:"none"}}},success:{background:"{green.800}",borderColor:"{green.800}",color:"{green.50}",detailColor:"{green.50}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{green.600}",focusRing:{color:"{green.50}",shadow:"none"}}},warn:{background:"{yellow.600}",borderColor:"{yellow.600}",color:"{yellow.50}",detailColor:"{yellow.50}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{yellow.400}",focusRing:{color:"{yellow.50}",shadow:"none"}}},error:{background:"{red.800}",borderColor:"{red.800}",color:"{red.50}",detailColor:"{red.50}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{red.600}",focusRing:{color:"{red.50}",shadow:"none"}}},secondary:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.700}",detailColor:"{surface.700}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.50}",focusRing:{color:"{surface.700}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.900}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{info:{background:"{blue.200}",borderColor:"{blue.200}",color:"{blue.950}",detailColor:"{blue.950}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{blue.50}",focusRing:{color:"{blue.950}",shadow:"none"}}},success:{background:"{green.200}",borderColor:"{green.200}",color:"{green.950}",detailColor:"{green.950}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{green.50}",focusRing:{color:"{green.950}",shadow:"none"}}},warn:{background:"{yellow.200}",borderColor:"{yellow.200}",color:"{yellow.950}",detailColor:"{yellow.950}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{yellow.50}",focusRing:{color:"{yellow.950}",shadow:"none"}}},error:{background:"{red.200}",borderColor:"{red.200}",color:"{red.950}",detailColor:"{red.950}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{red.50}",focusRing:{color:"{red.950}",shadow:"none"}}},secondary:{background:"{surface.700}",borderColor:"{surface.700}",color:"{surface.200}",detailColor:"{surface.200}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.500}",focusRing:{color:"{surface.200}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.0}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},Bs={root:ps,icon:ms,content:hs,text:vs,summary:ks,detail:ys,closeButton:ws,closeIcon:Cs,colorScheme:$s},xs={padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedBackground:"{highlight.background}",checkedColor:"{highlight.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.625rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 0.875rem"}},Rs={color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{highlight.color}",disabledColor:"{form.field.disabled.color}"},zs={checkedBackground:"transparent",checkedShadow:"none",padding:"0",borderRadius:"0",sm:{padding:"0"},lg:{padding:"0"}},Ss={light:{root:{hoverBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.700}"}}},Is={root:xs,icon:Rs,content:zs,colorScheme:Ss},Ls={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",invalidBorderColor:"{form.field.invalid.border.color}",background:"{form.field.background}",hoverBackground:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.1s",disabledBackground:"{form.field.disabled.background}"},Ps={borderRadius:"50%",size:"1rem",background:"{form.field.border.color}",hoverBackground:"{form.field.border.color}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.color}",color:"{surface.0}",hoverColor:"{surface.0}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}"},Os={root:Ls,handle:Ps},Ws={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},Ds={root:Ws},Ts={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},Fs={light:{root:{background:"{surface.900}",color:"{surface.0}"}},dark:{root:{background:"{surface.0}",color:"{surface.900}"}}},As={root:Ts,colorScheme:Fs},Es={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},Ms={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-2px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},Hs={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},js={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ns={size:"2rem"},Ks={margin:"0 0 0.5rem 0"},Ys={root:Es,node:Ms,nodeIcon:Hs,nodeToggleButton:js,loadingIcon:Ns,filter:Ks},Xs={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Vs={width:"2.5rem",color:"{form.field.icon.color}"},_s={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Gs={padding:"{list.padding}"},Us={padding:"{list.option.padding}"},qs={borderRadius:"{border.radius.sm}"},Zs={color:"{form.field.icon.color}"},Qs={root:Xs,dropdown:Vs,overlay:_s,tree:Gs,emptyMessage:Us,chip:qs,clearIcon:Zs},Js={transitionDuration:"{transition.duration}"},ou={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"1px 0 1px 0",padding:"0.75rem 1rem"},ru={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},eu={fontWeight:"700"},nu={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tu={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},au={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},du={fontWeight:"700"},iu={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},cu={width:"0.5rem"},lu={width:"1px",color:"{primary.color}"},su={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},uu={size:"2rem"},fu={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},gu={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},bu={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},pu={light:{root:{borderColor:"{surface.300}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.600}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},mu={root:Js,header:ou,headerCell:ru,columnTitle:eu,row:nu,bodyCell:tu,footerCell:au,columnFooter:du,footer:iu,columnResizer:cu,resizeIndicator:lu,sortIcon:su,loadingIcon:uu,nodeToggleButton:fu,paginatorTop:gu,paginatorBottom:bu,colorScheme:pu},hu={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},vu={loader:hu},ku=Object.defineProperty,yu=Object.defineProperties,wu=Object.getOwnPropertyDescriptors,no=Object.getOwnPropertySymbols,Cu=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable,to=(o,r,e)=>r in o?ku(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,ao,Bu=(ao=((o,r)=>{for(var e in r||(r={}))Cu.call(r,e)&&to(o,e,r[e]);if(no)for(var e of no(r))$u.call(r,e)&&to(o,e,r[e]);return o})({},Te),yu(ao,wu({components:{accordion:le,autocomplete:ke,avatar:xe,badge:Oe,blockui:Ae,breadcrumb:je,button:Ye,datepicker:Ot,card:qe,carousel:en,cascadeselect:sn,checkbox:gn,chip:kn,colorpicker:Bn,confirmdialog:zn,confirmpopup:On,contextmenu:Mn,dataview:ft,datatable:at,dialog:Et,divider:Kt,dock:Vt,drawer:Qt,editor:ta,fieldset:la,fileupload:ha,iftalabel:Na,floatlabel:Ca,galleria:Aa,iconfield:Ma,image:_a,imagecompare:Ua,inlinemessage:od,inplace:nd,inputchips:id,inputgroup:ld,inputnumber:gd,inputotp:md,inputtext:vd,knob:$d,listbox:Pd,megamenu:jd,menu:_d,menubar:oi,message:si,metergroup:vi,multiselect:Si,orderlist:Pi,organizationchart:Fi,overlaybadge:Ei,popover:bc,paginator:Ki,password:cc,panel:qi,panelmenu:ec,picklist:uc,progressbar:kc,progressspinner:wc,radiobutton:Bc,rating:zc,ripple:Ic,scrollpanel:Wc,select:Kc,selectbutton:Vc,skeleton:Uc,slider:rl,speeddial:nl,splitter:ll,splitbutton:al,stepper:vl,steps:Bl,tabmenu:Ll,tabs:El,tabview:Xl,textarea:rs,tieredmenu:cs,tag:Ul,terminal:Jl,timeline:bs,togglebutton:Is,toggleswitch:Os,tree:Ys,treeselect:Qs,treetable:mu,toast:Bs,toolbar:Ds,tooltip:As,virtualscroller:vu}})));const xu=te(Bu,{semantic:{primary:{300:"{cyan.300}",400:"{cyan.400}",500:"{cyan.500}",600:"{cyan.600}",700:"{cyan.700}",800:"{cyan.800}"},colorScheme:{light:{primary:{color:"{cyan.600}",hoverColor:"{cyan.700}",activeColor:"{cyan.800}"},highlight:{background:"{cyan.600}",focusBackground:"{cyan.700}"}},dark:{primary:{color:"{cyan.500}",hoverColor:"{cyan.400}",activeColor:"{cyan.300}"},highlight:{background:"{cyan.500}",focusBackground:"{cyan.400}"}}}}});uo.use(Fo).init({fallbackLng:"en-US",resources:Object.fromEntries(Object.entries(Ao).map(([o,r])=>[o,{translation:r}])),detection:{order:["querystring","cookie","localStorage","navigator"],lookupQuerystring:"lang",caches:["localStorage","cookie"],cookieOptions:{path:"/",sameSite:"strict"}},interpolation:{escapeValue:!1}});const Q=Eo(ne);Q.use(Ho,{i18next:uo});Q.use(Mo,{theme:{preset:xu,options:{darkModeSelector:".p-dark"}}});Q.mount("#app");
