(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oc(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const ft={},zs=[],jn=()=>{},Vp=()=>!1,xa=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Fc=i=>i.startsWith("onUpdate:"),nn=Object.assign,Bc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Gp=Object.prototype.hasOwnProperty,ot=(i,e)=>Gp.call(i,e),ke=Array.isArray,ks=i=>Jr(i)==="[object Map]",va=i=>Jr(i)==="[object Set]",Iu=i=>Jr(i)==="[object Date]",qe=i=>typeof i=="function",Rt=i=>typeof i=="string",qn=i=>typeof i=="symbol",xt=i=>i!==null&&typeof i=="object",zd=i=>(xt(i)||qe(i))&&qe(i.then)&&qe(i.catch),kd=Object.prototype.toString,Jr=i=>kd.call(i),Wp=i=>Jr(i).slice(8,-1),Hd=i=>Jr(i)==="[object Object]",zc=i=>Rt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Lr=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Xp=/-(\w)/g,Bi=ya(i=>i.replace(Xp,(e,t)=>t?t.toUpperCase():"")),jp=/\B([A-Z])/g,ps=ya(i=>i.replace(jp,"-$1").toLowerCase()),Vd=ya(i=>i.charAt(0).toUpperCase()+i.slice(1)),Na=ya(i=>i?`on${Vd(i)}`:""),Ui=(i,e)=>!Object.is(i,e),Vo=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Gd=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},ea=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Lu;const Ma=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kc(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Rt(n)?Zp(n):kc(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(i)||xt(i))return i}const Yp=/;(?![^(]*\))/g,qp=/:([^]+)/,Kp=/\/\*[^]*?\*\//g;function Zp(i){const e={};return i.replace(Kp,"").split(Yp).forEach(t=>{if(t){const n=t.split(qp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function cs(i){let e="";if(Rt(i))e=i;else if(ke(i))for(let t=0;t<i.length;t++){const n=cs(i[t]);n&&(e+=n+" ")}else if(xt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const $p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jp=Oc($p);function Wd(i){return!!i||i===""}function Qp(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=Sa(i[n],e[n]);return t}function Sa(i,e){if(i===e)return!0;let t=Iu(i),n=Iu(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=qn(i),n=qn(e),t||n)return i===e;if(t=ke(i),n=ke(e),t||n)return t&&n?Qp(i,e):!1;if(t=xt(i),n=xt(e),t||n){if(!t||!n)return!1;const s=Object.keys(i).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Sa(i[o],e[o]))return!1}}return String(i)===String(e)}function em(i,e){return i.findIndex(t=>Sa(t,e))}const Xd=i=>!!(i&&i.__v_isRef===!0),ta=i=>Rt(i)?i:i==null?"":ke(i)||xt(i)&&(i.toString===kd||!qe(i.toString))?Xd(i)?ta(i.value):JSON.stringify(i,jd,2):String(i),jd=(i,e)=>Xd(e)?jd(i,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[Ua(n,r)+" =>"]=s,t),{})}:va(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ua(t))}:qn(e)?Ua(e):xt(e)&&!ke(e)&&!Hd(e)?String(e):e,Ua=(i,e="")=>{var t;return qn(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class tm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function nm(){return hn}let _t;const Oa=new WeakSet;class Yd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Du(this),Zd(this);const e=_t,t=On;_t=this,On=!0;try{return this.fn()}finally{$d(this),_t=e,On=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let qd=0,Dr,Nr;function Kd(i,e=!1){if(i.flags|=8,e){i.next=Nr,Nr=i;return}i.next=Dr,Dr=i}function Hc(){qd++}function Vc(){if(--qd>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function Zd(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $d(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),Gc(n),im(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function Il(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function Jd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Hr))return;i.globalVersion=Hr;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!Il(i)){i.flags&=-3;return}const t=_t,n=On;_t=i,On=!0;try{Zd(i);const s=i.fn(i._value);(e.version===0||Ui(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{_t=t,On=n,$d(i),i.flags&=-3}}function Gc(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Gc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function im(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let On=!0;const Qd=[];function ki(){Qd.push(On),On=!1}function Hi(){const i=Qd.pop();On=i===void 0?!0:i}function Du(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let Hr=0;class sm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!_t||!On||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new sm(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,ef(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=n)}return t}trigger(e){this.version++,Hr++,this.notify(e)}notify(e){Hc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vc()}}}function ef(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)ef(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Ll=new WeakMap,us=Symbol(""),Dl=Symbol(""),Vr=Symbol("");function Gt(i,e,t){if(On&&_t){let n=Ll.get(i);n||Ll.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new Wc),s.map=n,s.key=t),s.track()}}function ui(i,e,t,n,s,r){const o=Ll.get(i);if(!o){Hr++;return}const a=l=>{l&&l.trigger()};if(Hc(),e==="clear")o.forEach(a);else{const l=ke(i),c=l&&zc(t);if(l&&t==="length"){const h=Number(n);o.forEach((u,d)=>{(d==="length"||d===Vr||!qn(d)&&d>=h)&&a(u)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Vr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(us)),ks(i)&&a(o.get(Dl)));break;case"delete":l||(a(o.get(us)),ks(i)&&a(o.get(Dl)));break;case"set":ks(i)&&a(o.get(us));break}}Vc()}function _s(i){const e=rt(i);return e===i?e:(Gt(e,"iterate",Vr),En(i)?e:e.map(Wt))}function ba(i){return Gt(i=rt(i),"iterate",Vr),i}const rm={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,Wt)},concat(...i){return _s(this).concat(...i.map(e=>ke(e)?_s(e):e))},entries(){return Fa(this,"entries",i=>(i[1]=Wt(i[1]),i))},every(i,e){return ei(this,"every",i,e,void 0,arguments)},filter(i,e){return ei(this,"filter",i,e,t=>t.map(Wt),arguments)},find(i,e){return ei(this,"find",i,e,Wt,arguments)},findIndex(i,e){return ei(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return ei(this,"findLast",i,e,Wt,arguments)},findLastIndex(i,e){return ei(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return ei(this,"forEach",i,e,void 0,arguments)},includes(...i){return Ba(this,"includes",i)},indexOf(...i){return Ba(this,"indexOf",i)},join(i){return _s(this).join(i)},lastIndexOf(...i){return Ba(this,"lastIndexOf",i)},map(i,e){return ei(this,"map",i,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...i){return pr(this,"push",i)},reduce(i,...e){return Nu(this,"reduce",i,e)},reduceRight(i,...e){return Nu(this,"reduceRight",i,e)},shift(){return pr(this,"shift")},some(i,e){return ei(this,"some",i,e,void 0,arguments)},splice(...i){return pr(this,"splice",i)},toReversed(){return _s(this).toReversed()},toSorted(i){return _s(this).toSorted(i)},toSpliced(...i){return _s(this).toSpliced(...i)},unshift(...i){return pr(this,"unshift",i)},values(){return Fa(this,"values",Wt)}};function Fa(i,e,t){const n=ba(i),s=n[e]();return n!==i&&!En(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const om=Array.prototype;function ei(i,e,t,n,s,r){const o=ba(i),a=o!==i&&!En(i),l=o[e];if(l!==om[e]){const u=l.apply(i,r);return a?Wt(u):u}let c=t;o!==i&&(a?c=function(u,d){return t.call(this,Wt(u),d,i)}:t.length>2&&(c=function(u,d){return t.call(this,u,d,i)}));const h=l.call(o,c,n);return a&&s?s(h):h}function Nu(i,e,t,n){const s=ba(i);let r=t;return s!==i&&(En(i)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,i)}):r=function(o,a,l){return t.call(this,o,Wt(a),l,i)}),s[e](r,...n)}function Ba(i,e,t){const n=rt(i);Gt(n,"iterate",Vr);const s=n[e](...t);return(s===-1||s===!1)&&qc(t[0])?(t[0]=rt(t[0]),n[e](...t)):s}function pr(i,e,t=[]){ki(),Hc();const n=rt(i)[e].apply(i,t);return Vc(),Hi(),n}const am=Oc("__proto__,__v_isRef,__isVue"),tf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(qn));function lm(i){qn(i)||(i=String(i));const e=rt(this);return Gt(e,"has",i),e.hasOwnProperty(i)}class nf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?xm:af:r?of:rf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=rm[t]))return l;if(t==="hasOwnProperty")return lm}const a=Reflect.get(e,t,Xt(e)?e:n);return(qn(t)?tf.has(t):am(t))||(s||Gt(e,"get",t),r)?a:Xt(a)?o&&zc(t)?a:a.value:xt(a)?s?lf(a):jc(a):a}}class sf extends nf{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const l=hs(r);if(!En(n)&&!hs(n)&&(r=rt(r),n=rt(n)),!ke(e)&&Xt(r)&&!Xt(n))return l?!1:(r.value=n,!0)}const o=ke(e)&&zc(t)?Number(t)<e.length:ot(e,t),a=Reflect.set(e,t,n,Xt(e)?e:s);return e===rt(s)&&(o?Ui(n,r)&&ui(e,"set",t,n):ui(e,"add",t,n)),a}deleteProperty(e,t){const n=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&ui(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!qn(t)||!tf.has(t))&&Gt(e,"has",t),n}ownKeys(e){return Gt(e,"iterate",ke(e)?"length":us),Reflect.ownKeys(e)}}class cm extends nf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const um=new sf,hm=new cm,dm=new sf(!0);const Nl=i=>i,ao=i=>Reflect.getPrototypeOf(i);function fm(i,e,t){return function(...n){const s=this.__v_raw,r=rt(s),o=ks(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),h=t?Nl:e?Ul:Wt;return!e&&Gt(r,"iterate",l?Dl:us),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function lo(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function pm(i,e){const t={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);i||(Ui(s,a)&&Gt(o,"get",s),Gt(o,"get",a));const{has:l}=ao(o),c=e?Nl:i?Ul:Wt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Gt(rt(s),"iterate",us),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return i||(Ui(s,a)&&Gt(o,"has",s),Gt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?Nl:i?Ul:Wt;return!i&&Gt(l,"iterate",us),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return nn(t,i?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(s){!e&&!En(s)&&!hs(s)&&(s=rt(s));const r=rt(this);return ao(r).has.call(r,s)||(r.add(s),ui(r,"add",s,s)),this},set(s,r){!e&&!En(r)&&!hs(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=ao(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Ui(r,h)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=ao(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fm(s,i,e)}),t}function Xc(i,e){const t=pm(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ot(t,s)&&s in n?t:n,s,r)}const mm={get:Xc(!1,!1)},gm={get:Xc(!1,!0)},_m={get:Xc(!0,!1)};const rf=new WeakMap,of=new WeakMap,af=new WeakMap,xm=new WeakMap;function vm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ym(i){return i.__v_skip||!Object.isExtensible(i)?0:vm(Wp(i))}function jc(i){return hs(i)?i:Yc(i,!1,um,mm,rf)}function Mm(i){return Yc(i,!1,dm,gm,of)}function lf(i){return Yc(i,!0,hm,_m,af)}function Yc(i,e,t,n,s){if(!xt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=ym(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function Hs(i){return hs(i)?Hs(i.__v_raw):!!(i&&i.__v_isReactive)}function hs(i){return!!(i&&i.__v_isReadonly)}function En(i){return!!(i&&i.__v_isShallow)}function qc(i){return i?!!i.__v_raw:!1}function rt(i){const e=i&&i.__v_raw;return e?rt(e):i}function Sm(i){return!ot(i,"__v_skip")&&Object.isExtensible(i)&&Gd(i,"__v_skip",!0),i}const Wt=i=>xt(i)?jc(i):i,Ul=i=>xt(i)?lf(i):i;function Xt(i){return i?i.__v_isRef===!0:!1}function yn(i){return bm(i,!1)}function bm(i,e){return Xt(i)?i:new Em(i,e)}class Em{constructor(e,t){this.dep=new Wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||En(e)||hs(e);e=n?e:rt(e),Ui(e,t)&&(this._rawValue=e,this._value=n?e:Wt(e),this.dep.trigger())}}function Tm(i){return Xt(i)?i.value:i}const Am={get:(i,e,t)=>e==="__v_raw"?i:Tm(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Xt(s)&&!Xt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function cf(i){return Hs(i)?i:new Proxy(i,Am)}class wm{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return Kd(this,!0),!0}get value(){const e=this.dep.track();return Jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rm(i,e,t=!1){let n,s;return qe(i)?n=i:(n=i.get,s=i.set),new wm(n,s,t)}const co={},na=new WeakMap;let ts;function Cm(i,e=!1,t=ts){if(t){let n=na.get(t);n||na.set(t,n=[]),n.push(i)}}function Pm(i,e,t=ft){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:En(v)||s===!1||s===0?hi(v,1):hi(v);let h,u,d,f,g=!1,_=!1;if(Xt(i)?(u=()=>i.value,g=En(i)):Hs(i)?(u=()=>c(i),g=!0):ke(i)?(_=!0,g=i.some(v=>Hs(v)||En(v)),u=()=>i.map(v=>{if(Xt(v))return v.value;if(Hs(v))return c(v);if(qe(v))return l?l(v,2):v()})):qe(i)?e?u=l?()=>l(i,2):i:u=()=>{if(d){ki();try{d()}finally{Hi()}}const v=ts;ts=h;try{return l?l(i,3,[f]):i(f)}finally{ts=v}}:u=jn,e&&s){const v=u,I=s===!0?1/0:s;u=()=>hi(v(),I)}const p=nm(),m=()=>{h.stop(),p&&p.active&&Bc(p.effects,h)};if(r&&e){const v=e;e=(...I)=>{v(...I),m()}}let S=_?new Array(i.length).fill(co):co;const E=v=>{if(!(!(h.flags&1)||!h.dirty&&!v))if(e){const I=h.run();if(s||g||(_?I.some((C,P)=>Ui(C,S[P])):Ui(I,S))){d&&d();const C=ts;ts=h;try{const P=[I,S===co?void 0:_&&S[0]===co?[]:S,f];l?l(e,3,P):e(...P),S=I}finally{ts=C}}}else h.run()};return a&&a(E),h=new Yd(u),h.scheduler=o?()=>o(E,!1):E,f=v=>Cm(v,!1,h),d=h.onStop=()=>{const v=na.get(h);if(v){if(l)l(v,4);else for(const I of v)I();na.delete(h)}},e?n?E(!0):S=h.run():o?o(E.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function hi(i,e=1/0,t){if(e<=0||!xt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Xt(i))hi(i.value,e,t);else if(ke(i))for(let n=0;n<i.length;n++)hi(i[n],e,t);else if(va(i)||ks(i))i.forEach(n=>{hi(n,e,t)});else if(Hd(i)){for(const n in i)hi(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&hi(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(i,e,t,n){try{return n?i(...n):i()}catch(s){Ea(s,e,t)}}function Kn(i,e,t,n){if(qe(i)){const s=Qr(i,e,t,n);return s&&zd(s)&&s.catch(r=>{Ea(r,e,t)}),s}if(ke(i)){const s=[];for(let r=0;r<i.length;r++)s.push(Kn(i[r],e,t,n));return s}}function Ea(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](i,l,c)===!1)return}a=a.parent}if(r){ki(),Qr(r,null,10,[i,l,c]),Hi();return}}Im(i,t,s,n,o)}function Im(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const $t=[];let Gn=-1;const Vs=[];let Ci=null,Ds=0;const uf=Promise.resolve();let ia=null;function hf(i){const e=ia||uf;return i?e.then(this?i.bind(this):i):e}function Lm(i){let e=Gn+1,t=$t.length;for(;e<t;){const n=e+t>>>1,s=$t[n],r=Gr(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function Kc(i){if(!(i.flags&1)){const e=Gr(i),t=$t[$t.length-1];!t||!(i.flags&2)&&e>=Gr(t)?$t.push(i):$t.splice(Lm(e),0,i),i.flags|=1,df()}}function df(){ia||(ia=uf.then(pf))}function Dm(i){ke(i)?Vs.push(...i):Ci&&i.id===-1?Ci.splice(Ds+1,0,i):i.flags&1||(Vs.push(i),i.flags|=1),df()}function Uu(i,e,t=Gn+1){for(;t<$t.length;t++){const n=$t[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;$t.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ff(i){if(Vs.length){const e=[...new Set(Vs)].sort((t,n)=>Gr(t)-Gr(n));if(Vs.length=0,Ci){Ci.push(...e);return}for(Ci=e,Ds=0;Ds<Ci.length;Ds++){const t=Ci[Ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ci=null,Ds=0}}const Gr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function pf(i){try{for(Gn=0;Gn<$t.length;Gn++){const e=$t[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<$t.length;Gn++){const e=$t[Gn];e&&(e.flags&=-2)}Gn=-1,$t.length=0,ff(),ia=null,($t.length||Vs.length)&&pf()}}let Mn=null,mf=null;function sa(i){const e=Mn;return Mn=i,mf=i&&i.type.__scopeId||null,e}function Nm(i,e=Mn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Wu(-1);const r=sa(e);let o;try{o=i(...s)}finally{sa(r),n._d&&Wu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Pn(i,e){if(Mn===null)return i;const t=Ra(Mn),n=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),n.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function Xi(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(ki(),Kn(l,t,8,[i.el,a,i,e]),Hi())}}const Um=Symbol("_vte"),Om=i=>i.__isTeleport;function Zc(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Zc(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function gf(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function ra(i,e,t,n,s=!1){if(ke(i)){i.forEach((g,_)=>ra(g,e&&(ke(e)?e[_]:e),t,n,s));return}if(Ur(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ra(i,e,t,n.component.subTree);return}const r=n.shapeFlag&4?Ra(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,h=a.refs===ft?a.refs={}:a.refs,u=a.setupState,d=rt(u),f=u===ft?()=>!1:g=>ot(d,g);if(c!=null&&c!==l&&(Rt(c)?(h[c]=null,f(c)&&(u[c]=null)):Xt(c)&&(c.value=null)),qe(l))Qr(l,a,12,[o,h]);else{const g=Rt(l),_=Xt(l);if(g||_){const p=()=>{if(i.f){const m=g?f(l)?u[l]:h[l]:l.value;s?ke(m)&&Bc(m,r):ke(m)?m.includes(r)||m.push(r):g?(h[l]=[r],f(l)&&(u[l]=h[l])):(l.value=[r],i.k&&(h[i.k]=l.value))}else g?(h[l]=o,f(l)&&(u[l]=o)):_&&(l.value=o,i.k&&(h[i.k]=o))};o?(p.id=-1,un(p,t)):p()}}}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Ur=i=>!!i.type.__asyncLoader,_f=i=>i.type.__isKeepAlive;function Fm(i,e){xf(i,"a",e)}function Bm(i,e){xf(i,"da",e)}function xf(i,e,t=Qt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Ta(e,n,t),t){let s=t.parent;for(;s&&s.parent;)_f(s.parent.vnode)&&zm(n,e,t,s),s=s.parent}}function zm(i,e,t,n){const s=Ta(e,i,n,!0);yf(()=>{Bc(n[e],s)},t)}function Ta(i,e,t=Qt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=eo(t),l=Kn(e,t,i,o);return a(),Hi(),l});return n?s.unshift(r):s.push(r),r}}const vi=i=>(e,t=Qt)=>{(!jr||i==="sp")&&Ta(i,(...n)=>e(...n),t)},km=vi("bm"),$c=vi("m"),Hm=vi("bu"),Vm=vi("u"),vf=vi("bum"),yf=vi("um"),Gm=vi("sp"),Wm=vi("rtg"),Xm=vi("rtc");function jm(i,e=Qt){Ta("ec",i,e)}const Ym=Symbol.for("v-ndc");function Ol(i,e,t,n){let s;const r=t,o=ke(i);if(o||Rt(i)){const a=o&&Hs(i);let l=!1;a&&(l=!En(i),i=ba(i)),s=new Array(i.length);for(let c=0,h=i.length;c<h;c++)s[c]=e(l?Wt(i[c]):i[c],c,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=e(a+1,a,void 0,r)}else if(xt(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=e(i[h],h,l,r)}}else s=[];return s}const Fl=i=>i?Vf(i)?Ra(i):Fl(i.parent):null,Or=nn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Fl(i.parent),$root:i=>Fl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Sf(i),$forceUpdate:i=>i.f||(i.f=()=>{Kc(i.update)}),$nextTick:i=>i.n||(i.n=hf.bind(i.proxy)),$watch:i=>mg.bind(i)}),za=(i,e)=>i!==ft&&!i.__isScriptSetup&&ot(i,e),qm={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(za(n,e))return o[e]=1,n[e];if(s!==ft&&ot(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&ot(c,e))return o[e]=3,r[e];if(t!==ft&&ot(t,e))return o[e]=4,t[e];Bl&&(o[e]=0)}}const h=Or[e];let u,d;if(h)return e==="$attrs"&&Gt(i.attrs,"get",""),h(i);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ft&&ot(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return za(s,e)?(s[e]=t,!0):n!==ft&&ot(n,e)?(n[e]=t,!0):ot(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==ft&&ot(i,o)||za(e,o)||(a=r[0])&&ot(a,o)||ot(n,o)||ot(Or,o)||ot(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ot(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Ou(i){return ke(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Bl=!0;function Km(i){const e=Sf(i),t=i.proxy,n=i.ctx;Bl=!1,e.beforeCreate&&Fu(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:E,unmounted:v,render:I,renderTracked:C,renderTriggered:P,errorCaptured:U,serverPrefetch:A,expose:b,inheritAttrs:O,components:j,directives:Y,filters:oe}=e;if(c&&Zm(c,n,null),o)for(const ie in o){const G=o[ie];qe(G)&&(n[ie]=G.bind(t))}if(s){const ie=s.call(t,t);xt(ie)&&(i.data=jc(ie))}if(Bl=!0,r)for(const ie in r){const G=r[ie],pe=qe(G)?G.bind(t,t):qe(G.get)?G.get.bind(t,t):jn,Se=!qe(G)&&qe(G.set)?G.set.bind(t):jn,Ce=eu({get:pe,set:Se});Object.defineProperty(n,ie,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Le=>Ce.value=Le})}if(a)for(const ie in a)Mf(a[ie],n,t,ie);if(l){const ie=qe(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(G=>{ng(G,ie[G])})}h&&Fu(h,i,"c");function ne(ie,G){ke(G)?G.forEach(pe=>ie(pe.bind(t))):G&&ie(G.bind(t))}if(ne(km,u),ne($c,d),ne(Hm,f),ne(Vm,g),ne(Fm,_),ne(Bm,p),ne(jm,U),ne(Xm,C),ne(Wm,P),ne(vf,S),ne(yf,v),ne(Gm,A),ke(b))if(b.length){const ie=i.exposed||(i.exposed={});b.forEach(G=>{Object.defineProperty(ie,G,{get:()=>t[G],set:pe=>t[G]=pe})})}else i.exposed||(i.exposed={});I&&i.render===jn&&(i.render=I),O!=null&&(i.inheritAttrs=O),j&&(i.components=j),Y&&(i.directives=Y),A&&gf(i)}function Zm(i,e,t=jn){ke(i)&&(i=zl(i));for(const n in i){const s=i[n];let r;xt(s)?"default"in s?r=Go(s.from||n,s.default,!0):r=Go(s.from||n):r=Go(s),Xt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function Fu(i,e,t){Kn(ke(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Mf(i,e,t,n){let s=n.includes(".")?Of(t,n):()=>t[n];if(Rt(i)){const r=e[i];qe(r)&&Oi(s,r)}else if(qe(i))Oi(s,i.bind(t));else if(xt(i))if(ke(i))i.forEach(r=>Mf(r,e,t,n));else{const r=qe(i.handler)?i.handler.bind(t):e[i.handler];qe(r)&&Oi(s,r,i)}}function Sf(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>oa(l,c,o,!0)),oa(l,e,o)),xt(e)&&r.set(e,l),l}function oa(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&oa(i,r,t,!0),s&&s.forEach(o=>oa(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=$m[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const $m={data:Bu,props:zu,emits:zu,methods:wr,computed:wr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:wr,directives:wr,watch:Qm,provide:Bu,inject:Jm};function Bu(i,e){return e?i?function(){return nn(qe(i)?i.call(this,this):i,qe(e)?e.call(this,this):e)}:e:i}function Jm(i,e){return wr(zl(i),zl(e))}function zl(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Kt(i,e){return i?[...new Set([].concat(i,e))]:e}function wr(i,e){return i?nn(Object.create(null),i,e):e}function zu(i,e){return i?ke(i)&&ke(e)?[...new Set([...i,...e])]:nn(Object.create(null),Ou(i),Ou(e??{})):e}function Qm(i,e){if(!i)return e;if(!e)return i;const t=nn(Object.create(null),i);for(const n in e)t[n]=Kt(i[n],e[n]);return t}function bf(){return{app:null,config:{isNativeTag:Vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(i,e){return function(n,s=null){qe(n)||(n=nn({},n)),s!=null&&!xt(s)&&(s=null);const r=bf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:eg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Fg,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&qe(h.install)?(o.add(h),h.install(c,...u)):qe(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,d){if(!l){const f=c._ceVNode||Fn(n,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),i(f,h,d),l=!0,c._container=h,h.__vue_app__=c,Ra(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Kn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=Gs;Gs=c;try{return h()}finally{Gs=u}}};return c}}let Gs=null;function ng(i,e){if(Qt){let t=Qt.provides;const n=Qt.parent&&Qt.parent.provides;n===t&&(t=Qt.provides=Object.create(n)),t[i]=e}}function Go(i,e,t=!1){const n=Qt||Mn;if(n||Gs){const s=Gs?Gs._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&qe(e)?e.call(n&&n.proxy):e}}const Ef={},Tf=()=>Object.create(Ef),Af=i=>Object.getPrototypeOf(i)===Ef;function ig(i,e,t,n=!1){const s={},r=Tf();i.propsDefaults=Object.create(null),wf(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:Mm(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function sg(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=rt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const h=i.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Aa(i.emitsOptions,d))continue;const f=e[d];if(l)if(ot(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Bi(d);s[g]=kl(l,a,g,f,i,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{wf(i,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!ot(e,u)&&((h=ps(u))===u||!ot(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=kl(l,a,u,void 0,i,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!ot(e,u))&&(delete r[u],c=!0)}c&&ui(i.attrs,"set","")}function wf(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let h;s&&ot(s,h=Bi(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:Aa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=rt(t),c=a||ft;for(let h=0;h<r.length;h++){const u=r[h];t[u]=kl(s,l,u,c[u],i,!ot(c,u))}}return o}function kl(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=ot(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const h=eo(s);n=c[t]=l.call(null,e),h()}}else n=l;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===ps(t))&&(n=!0))}return n}const rg=new WeakMap;function Rf(i,e,t=!1){const n=t?rg:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!qe(i)){const h=u=>{l=!0;const[d,f]=Rf(u,e,!0);nn(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!r&&!l)return xt(i)&&n.set(i,zs),zs;if(ke(r))for(let h=0;h<r.length;h++){const u=Bi(r[h]);ku(u)&&(o[u]=ft)}else if(r)for(const h in r){const u=Bi(h);if(ku(u)){const d=r[h],f=o[u]=ke(d)||qe(d)?{type:d}:nn({},d),g=f.type;let _=!1,p=!0;if(ke(g))for(let m=0;m<g.length;++m){const S=g[m],E=qe(S)&&S.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(p=!1)}else _=qe(g)&&g.name==="Boolean";f[0]=_,f[1]=p,(_||ot(f,"default"))&&a.push(u)}}const c=[o,a];return xt(i)&&n.set(i,c),c}function ku(i){return i[0]!=="$"&&!Lr(i)}const Cf=i=>i[0]==="_"||i==="$stable",Jc=i=>ke(i)?i.map(Wn):[Wn(i)],og=(i,e,t)=>{if(e._n)return e;const n=Nm((...s)=>Jc(e(...s)),t);return n._c=!1,n},Pf=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Cf(s))continue;const r=i[s];if(qe(r))e[s]=og(s,r,n);else if(r!=null){const o=Jc(r);e[s]=()=>o}}},If=(i,e)=>{const t=Jc(e);i.slots.default=()=>t},Lf=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},ag=(i,e,t)=>{const n=i.slots=Tf();if(i.vnode.shapeFlag&32){const s=e._;s?(Lf(n,e,t),t&&Gd(n,"_",s,!0)):Pf(e,n)}else e&&If(i,e)},lg=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=ft;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Lf(s,e,t):(r=!e.$stable,Pf(e,s)),o=e}else e&&(If(i,e),o={default:1});if(r)for(const a in s)!Cf(a)&&o[a]==null&&delete s[a]},un=Sg;function cg(i){return ug(i)}function ug(i,e){const t=Ma();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=jn,insertStaticContent:g}=i,_=(w,R,y,Z=null,V=null,q=null,X=void 0,le=null,$=!!R.dynamicChildren)=>{if(w===R)return;w&&!mr(w,R)&&(Z=F(w),Le(w,V,q,!0),w=null),R.patchFlag===-2&&($=!1,R.dynamicChildren=null);const{type:M,ref:x,shapeFlag:N}=R;switch(M){case wa:p(w,R,y,Z);break;case Wr:m(w,R,y,Z);break;case Ha:w==null&&S(R,y,Z,X);break;case vn:j(w,R,y,Z,V,q,X,le,$);break;default:N&1?I(w,R,y,Z,V,q,X,le,$):N&6?Y(w,R,y,Z,V,q,X,le,$):(N&64||N&128)&&M.process(w,R,y,Z,V,q,X,le,$,ee)}x!=null&&V&&ra(x,w&&w.ref,q,R||w,!R)},p=(w,R,y,Z)=>{if(w==null)n(R.el=a(R.children),y,Z);else{const V=R.el=w.el;R.children!==w.children&&c(V,R.children)}},m=(w,R,y,Z)=>{w==null?n(R.el=l(R.children||""),y,Z):R.el=w.el},S=(w,R,y,Z)=>{[w.el,w.anchor]=g(w.children,R,y,Z,w.el,w.anchor)},E=({el:w,anchor:R},y,Z)=>{let V;for(;w&&w!==R;)V=d(w),n(w,y,Z),w=V;n(R,y,Z)},v=({el:w,anchor:R})=>{let y;for(;w&&w!==R;)y=d(w),s(w),w=y;s(R)},I=(w,R,y,Z,V,q,X,le,$)=>{R.type==="svg"?X="svg":R.type==="math"&&(X="mathml"),w==null?C(R,y,Z,V,q,X,le,$):A(w,R,V,q,X,le,$)},C=(w,R,y,Z,V,q,X,le)=>{let $,M;const{props:x,shapeFlag:N,transition:W,dirs:Q}=w;if($=w.el=o(w.type,q,x&&x.is,x),N&8?h($,w.children):N&16&&U(w.children,$,null,Z,V,ka(w,q),X,le),Q&&Xi(w,null,Z,"created"),P($,w,w.scopeId,X,Z),x){for(const ge in x)ge!=="value"&&!Lr(ge)&&r($,ge,null,x[ge],q,Z);"value"in x&&r($,"value",null,x.value,q),(M=x.onVnodeBeforeMount)&&kn(M,Z,w)}Q&&Xi(w,null,Z,"beforeMount");const K=hg(V,W);K&&W.beforeEnter($),n($,R,y),((M=x&&x.onVnodeMounted)||K||Q)&&un(()=>{M&&kn(M,Z,w),K&&W.enter($),Q&&Xi(w,null,Z,"mounted")},V)},P=(w,R,y,Z,V)=>{if(y&&f(w,y),Z)for(let q=0;q<Z.length;q++)f(w,Z[q]);if(V){let q=V.subTree;if(R===q||Bf(q.type)&&(q.ssContent===R||q.ssFallback===R)){const X=V.vnode;P(w,X,X.scopeId,X.slotScopeIds,V.parent)}}},U=(w,R,y,Z,V,q,X,le,$=0)=>{for(let M=$;M<w.length;M++){const x=w[M]=le?Pi(w[M]):Wn(w[M]);_(null,x,R,y,Z,V,q,X,le)}},A=(w,R,y,Z,V,q,X)=>{const le=R.el=w.el;let{patchFlag:$,dynamicChildren:M,dirs:x}=R;$|=w.patchFlag&16;const N=w.props||ft,W=R.props||ft;let Q;if(y&&ji(y,!1),(Q=W.onVnodeBeforeUpdate)&&kn(Q,y,R,w),x&&Xi(R,w,y,"beforeUpdate"),y&&ji(y,!0),(N.innerHTML&&W.innerHTML==null||N.textContent&&W.textContent==null)&&h(le,""),M?b(w.dynamicChildren,M,le,y,Z,ka(R,V),q):X||G(w,R,le,null,y,Z,ka(R,V),q,!1),$>0){if($&16)O(le,N,W,y,V);else if($&2&&N.class!==W.class&&r(le,"class",null,W.class,V),$&4&&r(le,"style",N.style,W.style,V),$&8){const K=R.dynamicProps;for(let ge=0;ge<K.length;ge++){const de=K[ge],xe=N[de],Be=W[de];(Be!==xe||de==="value")&&r(le,de,xe,Be,V,y)}}$&1&&w.children!==R.children&&h(le,R.children)}else!X&&M==null&&O(le,N,W,y,V);((Q=W.onVnodeUpdated)||x)&&un(()=>{Q&&kn(Q,y,R,w),x&&Xi(R,w,y,"updated")},Z)},b=(w,R,y,Z,V,q,X)=>{for(let le=0;le<R.length;le++){const $=w[le],M=R[le],x=$.el&&($.type===vn||!mr($,M)||$.shapeFlag&70)?u($.el):y;_($,M,x,null,Z,V,q,X,!0)}},O=(w,R,y,Z,V)=>{if(R!==y){if(R!==ft)for(const q in R)!Lr(q)&&!(q in y)&&r(w,q,R[q],null,V,Z);for(const q in y){if(Lr(q))continue;const X=y[q],le=R[q];X!==le&&q!=="value"&&r(w,q,le,X,V,Z)}"value"in y&&r(w,"value",R.value,y.value,V)}},j=(w,R,y,Z,V,q,X,le,$)=>{const M=R.el=w?w.el:a(""),x=R.anchor=w?w.anchor:a("");let{patchFlag:N,dynamicChildren:W,slotScopeIds:Q}=R;Q&&(le=le?le.concat(Q):Q),w==null?(n(M,y,Z),n(x,y,Z),U(R.children||[],y,x,V,q,X,le,$)):N>0&&N&64&&W&&w.dynamicChildren?(b(w.dynamicChildren,W,y,V,q,X,le),(R.key!=null||V&&R===V.subTree)&&Df(w,R,!0)):G(w,R,y,x,V,q,X,le,$)},Y=(w,R,y,Z,V,q,X,le,$)=>{R.slotScopeIds=le,w==null?R.shapeFlag&512?V.ctx.activate(R,y,Z,X,$):oe(R,y,Z,V,q,X,$):re(w,R,$)},oe=(w,R,y,Z,V,q,X)=>{const le=w.component=Ig(w,Z,V);if(_f(w)&&(le.ctx.renderer=ee),Lg(le,!1,X),le.asyncDep){if(V&&V.registerDep(le,ne,X),!w.el){const $=le.subTree=Fn(Wr);m(null,$,R,y)}}else ne(le,w,R,y,V,q,X)},re=(w,R,y)=>{const Z=R.component=w.component;if(yg(w,R,y))if(Z.asyncDep&&!Z.asyncResolved){ie(Z,R,y);return}else Z.next=R,Z.update();else R.el=w.el,Z.vnode=R},ne=(w,R,y,Z,V,q,X)=>{const le=()=>{if(w.isMounted){let{next:N,bu:W,u:Q,parent:K,vnode:ge}=w;{const Ee=Nf(w);if(Ee){N&&(N.el=ge.el,ie(w,N,X)),Ee.asyncDep.then(()=>{w.isUnmounted||le()});return}}let de=N,xe;ji(w,!1),N?(N.el=ge.el,ie(w,N,X)):N=ge,W&&Vo(W),(xe=N.props&&N.props.onVnodeBeforeUpdate)&&kn(xe,K,N,ge),ji(w,!0);const Be=Vu(w),fe=w.subTree;w.subTree=Be,_(fe,Be,u(fe.el),F(fe),w,V,q),N.el=Be.el,de===null&&Mg(w,Be.el),Q&&un(Q,V),(xe=N.props&&N.props.onVnodeUpdated)&&un(()=>kn(xe,K,N,ge),V)}else{let N;const{el:W,props:Q}=R,{bm:K,m:ge,parent:de,root:xe,type:Be}=w,fe=Ur(R);ji(w,!1),K&&Vo(K),!fe&&(N=Q&&Q.onVnodeBeforeMount)&&kn(N,de,R),ji(w,!0);{xe.ce&&xe.ce._injectChildStyle(Be);const Ee=w.subTree=Vu(w);_(null,Ee,y,Z,w,V,q),R.el=Ee.el}if(ge&&un(ge,V),!fe&&(N=Q&&Q.onVnodeMounted)){const Ee=R;un(()=>kn(N,de,Ee),V)}(R.shapeFlag&256||de&&Ur(de.vnode)&&de.vnode.shapeFlag&256)&&w.a&&un(w.a,V),w.isMounted=!0,R=y=Z=null}};w.scope.on();const $=w.effect=new Yd(le);w.scope.off();const M=w.update=$.run.bind($),x=w.job=$.runIfDirty.bind($);x.i=w,x.id=w.uid,$.scheduler=()=>Kc(x),ji(w,!0),M()},ie=(w,R,y)=>{R.component=w;const Z=w.vnode.props;w.vnode=R,w.next=null,sg(w,R.props,Z,y),lg(w,R.children,y),ki(),Uu(w),Hi()},G=(w,R,y,Z,V,q,X,le,$=!1)=>{const M=w&&w.children,x=w?w.shapeFlag:0,N=R.children,{patchFlag:W,shapeFlag:Q}=R;if(W>0){if(W&128){Se(M,N,y,Z,V,q,X,le,$);return}else if(W&256){pe(M,N,y,Z,V,q,X,le,$);return}}Q&8?(x&16&&z(M,V,q),N!==M&&h(y,N)):x&16?Q&16?Se(M,N,y,Z,V,q,X,le,$):z(M,V,q,!0):(x&8&&h(y,""),Q&16&&U(N,y,Z,V,q,X,le,$))},pe=(w,R,y,Z,V,q,X,le,$)=>{w=w||zs,R=R||zs;const M=w.length,x=R.length,N=Math.min(M,x);let W;for(W=0;W<N;W++){const Q=R[W]=$?Pi(R[W]):Wn(R[W]);_(w[W],Q,y,null,V,q,X,le,$)}M>x?z(w,V,q,!0,!1,N):U(R,y,Z,V,q,X,le,$,N)},Se=(w,R,y,Z,V,q,X,le,$)=>{let M=0;const x=R.length;let N=w.length-1,W=x-1;for(;M<=N&&M<=W;){const Q=w[M],K=R[M]=$?Pi(R[M]):Wn(R[M]);if(mr(Q,K))_(Q,K,y,null,V,q,X,le,$);else break;M++}for(;M<=N&&M<=W;){const Q=w[N],K=R[W]=$?Pi(R[W]):Wn(R[W]);if(mr(Q,K))_(Q,K,y,null,V,q,X,le,$);else break;N--,W--}if(M>N){if(M<=W){const Q=W+1,K=Q<x?R[Q].el:Z;for(;M<=W;)_(null,R[M]=$?Pi(R[M]):Wn(R[M]),y,K,V,q,X,le,$),M++}}else if(M>W)for(;M<=N;)Le(w[M],V,q,!0),M++;else{const Q=M,K=M,ge=new Map;for(M=K;M<=W;M++){const Me=R[M]=$?Pi(R[M]):Wn(R[M]);Me.key!=null&&ge.set(Me.key,M)}let de,xe=0;const Be=W-K+1;let fe=!1,Ee=0;const De=new Array(Be);for(M=0;M<Be;M++)De[M]=0;for(M=Q;M<=N;M++){const Me=w[M];if(xe>=Be){Le(Me,V,q,!0);continue}let He;if(Me.key!=null)He=ge.get(Me.key);else for(de=K;de<=W;de++)if(De[de-K]===0&&mr(Me,R[de])){He=de;break}He===void 0?Le(Me,V,q,!0):(De[He-K]=M+1,He>=Ee?Ee=He:fe=!0,_(Me,R[He],y,null,V,q,X,le,$),xe++)}const ze=fe?dg(De):zs;for(de=ze.length-1,M=Be-1;M>=0;M--){const Me=K+M,He=R[Me],Xe=Me+1<x?R[Me+1].el:Z;De[M]===0?_(null,He,y,Xe,V,q,X,le,$):fe&&(de<0||M!==ze[de]?Ce(He,y,Xe,2):de--)}}},Ce=(w,R,y,Z,V=null)=>{const{el:q,type:X,transition:le,children:$,shapeFlag:M}=w;if(M&6){Ce(w.component.subTree,R,y,Z);return}if(M&128){w.suspense.move(R,y,Z);return}if(M&64){X.move(w,R,y,ee);return}if(X===vn){n(q,R,y);for(let N=0;N<$.length;N++)Ce($[N],R,y,Z);n(w.anchor,R,y);return}if(X===Ha){E(w,R,y);return}if(Z!==2&&M&1&&le)if(Z===0)le.beforeEnter(q),n(q,R,y),un(()=>le.enter(q),V);else{const{leave:N,delayLeave:W,afterLeave:Q}=le,K=()=>n(q,R,y),ge=()=>{N(q,()=>{K(),Q&&Q()})};W?W(q,K,ge):ge()}else n(q,R,y)},Le=(w,R,y,Z=!1,V=!1)=>{const{type:q,props:X,ref:le,children:$,dynamicChildren:M,shapeFlag:x,patchFlag:N,dirs:W,cacheIndex:Q}=w;if(N===-2&&(V=!1),le!=null&&ra(le,null,y,w,!0),Q!=null&&(R.renderCache[Q]=void 0),x&256){R.ctx.deactivate(w);return}const K=x&1&&W,ge=!Ur(w);let de;if(ge&&(de=X&&X.onVnodeBeforeUnmount)&&kn(de,R,w),x&6)D(w.component,y,Z);else{if(x&128){w.suspense.unmount(y,Z);return}K&&Xi(w,null,R,"beforeUnmount"),x&64?w.type.remove(w,R,y,ee,Z):M&&!M.hasOnce&&(q!==vn||N>0&&N&64)?z(M,R,y,!1,!0):(q===vn&&N&384||!V&&x&16)&&z($,R,y),Z&&Ze(w)}(ge&&(de=X&&X.onVnodeUnmounted)||K)&&un(()=>{de&&kn(de,R,w),K&&Xi(w,null,R,"unmounted")},y)},Ze=w=>{const{type:R,el:y,anchor:Z,transition:V}=w;if(R===vn){ce(y,Z);return}if(R===Ha){v(w);return}const q=()=>{s(y),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(w.shapeFlag&1&&V&&!V.persisted){const{leave:X,delayLeave:le}=V,$=()=>X(y,q);le?le(w.el,q,$):$()}else q()},ce=(w,R)=>{let y;for(;w!==R;)y=d(w),s(w),w=y;s(R)},D=(w,R,y)=>{const{bum:Z,scope:V,job:q,subTree:X,um:le,m:$,a:M}=w;Hu($),Hu(M),Z&&Vo(Z),V.stop(),q&&(q.flags|=8,Le(X,w,R,y)),le&&un(le,R),un(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},z=(w,R,y,Z=!1,V=!1,q=0)=>{for(let X=q;X<w.length;X++)Le(w[X],R,y,Z,V)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=d(w.anchor||w.el),y=R&&R[Um];return y?d(y):R};let he=!1;const se=(w,R,y)=>{w==null?R._vnode&&Le(R._vnode,null,null,!0):_(R._vnode||null,w,R,null,null,null,y),R._vnode=w,he||(he=!0,Uu(),ff(),he=!1)},ee={p:_,um:Le,m:Ce,r:Ze,mt:oe,mc:U,pc:G,pbc:b,n:F,o:i};return{render:se,hydrate:void 0,createApp:tg(se)}}function ka({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ji({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function hg(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Df(i,e,t=!1){const n=i.children,s=e.children;if(ke(n)&&ke(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Pi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Df(o,a)),a.type===wa&&(a.el=o.el)}}function dg(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Nf(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nf(e)}function Hu(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const fg=Symbol.for("v-scx"),pg=()=>Go(fg);function Oi(i,e,t){return Uf(i,e,t)}function Uf(i,e,t=ft){const{immediate:n,deep:s,flush:r,once:o}=t,a=nn({},t),l=e&&n||!e&&r!=="post";let c;if(jr){if(r==="sync"){const f=pg();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=jn,f.resume=jn,f.pause=jn,f}}const h=Qt;a.call=(f,g,_)=>Kn(f,h,g,_);let u=!1;r==="post"?a.scheduler=f=>{un(f,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(f,g)=>{g?f():Kc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),u&&(f.flags|=2,h&&(f.id=h.uid,f.i=h))};const d=Pm(i,e,a);return jr&&(c?c.push(d):l&&d()),d}function mg(i,e,t){const n=this.proxy,s=Rt(i)?i.includes(".")?Of(n,i):()=>n[i]:i.bind(n,n);let r;qe(e)?r=e:(r=e.handler,t=e);const o=eo(this),a=Uf(s,r.bind(n),t);return o(),a}function Of(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const gg=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Bi(e)}Modifiers`]||i[`${ps(e)}Modifiers`];function _g(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&gg(n,e.slice(7));o&&(o.trim&&(s=t.map(h=>Rt(h)?h.trim():h)),o.number&&(s=t.map(ea)));let a,l=n[a=Na(e)]||n[a=Na(Bi(e))];!l&&r&&(l=n[a=Na(ps(e))]),l&&Kn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Kn(c,i,6,s)}}function Ff(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!qe(i)){const l=c=>{const h=Ff(c,e,!0);h&&(a=!0,nn(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(xt(i)&&n.set(i,null),null):(ke(r)?r.forEach(l=>o[l]=null):nn(o,r),xt(i)&&n.set(i,o),o)}function Aa(i,e){return!i||!xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(i,e[0].toLowerCase()+e.slice(1))||ot(i,ps(e))||ot(i,e))}function Vu(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:g,inheritAttrs:_}=i,p=sa(i);let m,S;try{if(t.shapeFlag&4){const v=s||n,I=v;m=Wn(c.call(I,v,h,u,f,d,g)),S=a}else{const v=e;m=Wn(v.length>1?v(u,{attrs:a,slots:o,emit:l}):v(u,null)),S=e.props?a:xg(a)}}catch(v){Fr.length=0,Ea(v,i,1),m=Fn(Wr)}let E=m;if(S&&_!==!1){const v=Object.keys(S),{shapeFlag:I}=E;v.length&&I&7&&(r&&v.some(Fc)&&(S=vg(S,r)),E=$s(E,S,!1,!0))}return t.dirs&&(E=$s(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Zc(E,t.transition),m=E,sa(p),m}const xg=i=>{let e;for(const t in i)(t==="class"||t==="style"||xa(t))&&((e||(e={}))[t]=i[t]);return e},vg=(i,e)=>{const t={};for(const n in i)(!Fc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function yg(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Gu(n,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==n[d]&&!Aa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Gu(n,o,c):!0:!!o;return!1}function Gu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Aa(t,r))return!0}return!1}function Mg({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Bf=i=>i.__isSuspense;function Sg(i,e){e&&e.pendingBranch?ke(i)?e.effects.push(...i):e.effects.push(i):Dm(i)}const vn=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Wr=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Fr=[];let fn=null;function Sn(i=!1){Fr.push(fn=i?null:[])}function bg(){Fr.pop(),fn=Fr[Fr.length-1]||null}let Xr=1;function Wu(i,e=!1){Xr+=i,i<0&&fn&&e&&(fn.hasOnce=!0)}function zf(i){return i.dynamicChildren=Xr>0?fn||zs:null,bg(),Xr>0&&fn&&fn.push(i),i}function Nn(i,e,t,n,s,r){return zf(_e(i,e,t,n,s,r,!0))}function Eg(i,e,t,n,s){return zf(Fn(i,e,t,n,s,!0))}function kf(i){return i?i.__v_isVNode===!0:!1}function mr(i,e){return i.type===e.type&&i.key===e.key}const Hf=({key:i})=>i??null,Wo=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Rt(i)||Xt(i)||qe(i)?{i:Mn,r:i,k:e,f:!!t}:i:null);function _e(i,e=null,t=null,n=0,s=null,r=i===vn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Hf(e),ref:e&&Wo(e),scopeId:mf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return a?(Qc(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Xr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const Fn=Tg;function Tg(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Ym)&&(i=Wr),kf(i)){const a=$s(i,e,!0);return t&&Qc(a,t),Xr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(i)]=a:fn.push(a)),a.patchFlag=-2,a}if(Og(i)&&(i=i.__vccOpts),e){e=Ag(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=cs(a)),xt(l)&&(qc(l)&&!ke(l)&&(l=nn({},l)),e.style=kc(l))}const o=Rt(i)?1:Bf(i)?128:Om(i)?64:xt(i)?4:qe(i)?2:0;return _e(i,e,t,n,s,o,r,!0)}function Ag(i){return i?qc(i)||Af(i)?nn({},i):i:null}function $s(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?Rg(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Hf(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(Wo(e)):[r,Wo(e)]:Wo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==vn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&$s(i.ssContent),ssFallback:i.ssFallback&&$s(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Zc(h,l.clone(h)),h}function wg(i=" ",e=0){return Fn(wa,null,i,e)}function Wn(i){return i==null||typeof i=="boolean"?Fn(Wr):ke(i)?Fn(vn,null,i.slice()):kf(i)?Pi(i):Fn(wa,null,String(i))}function Pi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:$s(i)}function Qc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Qc(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Af(e)?e._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),n&64?(t=16,e=[wg(e)]):t=8);i.children=e,i.shapeFlag|=t}function Rg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=cs([e.class,n.class]));else if(s==="style")e.style=kc([e.style,n.style]);else if(xa(s)){const r=e[s],o=n[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function kn(i,e,t,n=null){Kn(i,e,7,[t,n])}const Cg=bf();let Pg=0;function Ig(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Cg,r={uid:Pg++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(n,s),emitsOptions:Ff(n,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:n.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_g.bind(null,r),i.ce&&i.ce(r),r}let Qt=null,aa,Hl;{const i=Ma(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};aa=e("__VUE_INSTANCE_SETTERS__",t=>Qt=t),Hl=e("__VUE_SSR_SETTERS__",t=>jr=t)}const eo=i=>{const e=Qt;return aa(i),i.scope.on(),()=>{i.scope.off(),aa(e)}},Xu=()=>{Qt&&Qt.scope.off(),aa(null)};function Vf(i){return i.vnode.shapeFlag&4}let jr=!1;function Lg(i,e=!1,t=!1){e&&Hl(e);const{props:n,children:s}=i.vnode,r=Vf(i);ig(i,n,r,e),ag(i,s,t);const o=r?Dg(i,e):void 0;return e&&Hl(!1),o}function Dg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,qm);const{setup:n}=t;if(n){ki();const s=i.setupContext=n.length>1?Ug(i):null,r=eo(i),o=Qr(n,i,0,[i.props,s]),a=zd(o);if(Hi(),r(),(a||i.sp)&&!Ur(i)&&gf(i),a){if(o.then(Xu,Xu),e)return o.then(l=>{ju(i,l)}).catch(l=>{Ea(l,i,0)});i.asyncDep=o}else ju(i,o)}else Gf(i)}function ju(i,e,t){qe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:xt(e)&&(i.setupState=cf(e)),Gf(i)}function Gf(i,e,t){const n=i.type;i.render||(i.render=n.render||jn);{const s=eo(i);ki();try{Km(i)}finally{Hi(),s()}}}const Ng={get(i,e){return Gt(i,"get",""),i[e]}};function Ug(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Ng),slots:i.slots,emit:i.emit,expose:e}}function Ra(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(cf(Sm(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](i)},has(e,t){return t in e||t in Or}})):i.proxy}function Og(i){return qe(i)&&"__vccOpts"in i}const eu=(i,e)=>Rm(i,e,jr),Fg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Vl=Yu.createPolicy("vue",{createHTML:i=>i})}catch{}const Wf=Vl?i=>Vl.createHTML(i):i=>i,Bg="http://www.w3.org/2000/svg",zg="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,qu=li&&li.createElement("template"),kg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?li.createElementNS(Bg,i):e==="mathml"?li.createElementNS(zg,i):t?li.createElement(i,{is:t}):li.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>li.createTextNode(i),createComment:i=>li.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>li.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=Wf(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=qu.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hg=Symbol("_vtc");function Vg(i,e,t){const n=i[Hg];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Ku=Symbol("_vod"),Gg=Symbol("_vsh"),Wg=Symbol(""),Xg=/(^|;)\s*display\s*:/;function jg(i,e,t){const n=i.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Xo(n,a,"")}else for(const o in e)t[o]==null&&Xo(n,o,"");for(const o in t)o==="display"&&(r=!0),Xo(n,o,t[o])}else if(s){if(e!==t){const o=n[Wg];o&&(t+=";"+o),n.cssText=t,r=Xg.test(t)}}else e&&i.removeAttribute("style");Ku in i&&(i[Ku]=r?n.display:"",i[Gg]&&(n.display="none"))}const Zu=/\s*!important$/;function Xo(i,e,t){if(ke(t))t.forEach(n=>Xo(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Yg(i,e);Zu.test(t)?i.setProperty(ps(n),t.replace(Zu,""),"important"):i[n]=t}}const $u=["Webkit","Moz","ms"],Va={};function Yg(i,e){const t=Va[e];if(t)return t;let n=Bi(e);if(n!=="filter"&&n in i)return Va[e]=n;n=Vd(n);for(let s=0;s<$u.length;s++){const r=$u[s]+n;if(r in i)return Va[e]=r}return e}const Ju="http://www.w3.org/1999/xlink";function Qu(i,e,t,n,s,r=Jp(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Ju,e.slice(6,e.length)):i.setAttributeNS(Ju,e,t):t==null||r&&!Wd(t)?i.removeAttribute(e):i.setAttribute(e,r?"":qn(t)?String(t):t)}function eh(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Wf(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Wd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function rs(i,e,t,n){i.addEventListener(e,t,n)}function qg(i,e,t,n){i.removeEventListener(e,t,n)}const th=Symbol("_vei");function Kg(i,e,t,n,s=null){const r=i[th]||(i[th]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Zg(e);if(n){const c=r[e]=Qg(n,s);rs(i,a,c,l)}else o&&(qg(i,a,o,l),r[e]=void 0)}}const nh=/(?:Once|Passive|Capture)$/;function Zg(i){let e;if(nh.test(i)){e={};let n;for(;n=i.match(nh);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ps(i.slice(2)),e]}let Ga=0;const $g=Promise.resolve(),Jg=()=>Ga||($g.then(()=>Ga=0),Ga=Date.now());function Qg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Kn(e_(n,t.value),e,5,[n])};return t.value=i,t.attached=Jg(),t}function e_(i,e){if(ke(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ih=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,t_=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?Vg(i,n,o):e==="style"?jg(i,t,n):xa(e)?Fc(e)||Kg(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n_(i,e,n,o))?(eh(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qu(i,e,n,o,r,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Rt(n))?eh(i,Bi(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Qu(i,e,n,o))};function n_(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&ih(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ih(e)&&Rt(t)?!1:e in i}const la=i=>{const e=i.props["onUpdate:modelValue"]||!1;return ke(e)?t=>Vo(e,t):e};function i_(i){i.target.composing=!0}function sh(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ws=Symbol("_assign"),Hn={created(i,{modifiers:{lazy:e,trim:t,number:n}},s){i[Ws]=la(s);const r=n||s.props&&s.props.type==="number";rs(i,e?"change":"input",o=>{if(o.target.composing)return;let a=i.value;t&&(a=a.trim()),r&&(a=ea(a)),i[Ws](a)}),t&&rs(i,"change",()=>{i.value=i.value.trim()}),e||(rs(i,"compositionstart",i_),rs(i,"compositionend",sh),rs(i,"change",sh))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,oldValue:t,modifiers:{lazy:n,trim:s,number:r}},o){if(i[Ws]=la(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?ea(i.value):i.value,l=e??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&e===t||s&&i.value.trim()===l)||(i.value=l))}},s_={deep:!0,created(i,{value:e,modifiers:{number:t}},n){const s=va(e);rs(i,"change",()=>{const r=Array.prototype.filter.call(i.options,o=>o.selected).map(o=>t?ea(ca(o)):ca(o));i[Ws](i.multiple?s?new Set(r):r:r[0]),i._assigning=!0,hf(()=>{i._assigning=!1})}),i[Ws]=la(n)},mounted(i,{value:e}){rh(i,e)},beforeUpdate(i,e,t){i[Ws]=la(t)},updated(i,{value:e}){i._assigning||rh(i,e)}};function rh(i,e){const t=i.multiple,n=ke(e);if(!(t&&!n&&!va(e))){for(let s=0,r=i.options.length;s<r;s++){const o=i.options[s],a=ca(o);if(t)if(n){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=em(e,a)>-1}else o.selected=e.has(a);else if(Sa(ca(o),e)){i.selectedIndex!==s&&(i.selectedIndex=s);return}}!t&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function ca(i){return"_value"in i?i._value:i.value}const r_=nn({patchProp:t_},kg);let oh;function o_(){return oh||(oh=cg(r_))}const a_=(...i)=>{const e=o_().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=c_(n);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,l_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function l_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function c_(i){return Rt(i)?document.querySelector(i):i}const Ca=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},u_={class:"model-list"},h_={class:"el-tabs"},d_={class:"el-tabs__header"},f_={class:"el-tabs__nav-wrap"},p_={class:"el-tabs__nav"},m_=["onClick"],g_={class:"model-items"},__=["onDragstart"],x_={class:"model-preview"},v_=["src","alt"],y_={class:"model-name"},M_={__name:"ModelList",emits:["model-drag-start"],setup(i,{emit:e}){const t=[{label:"几何体",name:"geometry"},{label:"模型",name:"model"},{label:"图片",name:"pic"},{label:"视频",name:"video"},{label:"音频",name:"audio"}],n=async()=>[{id:"geo_1",name:"立方体",type:"geometry",preview:"/api/placeholder/100/100",defaultProps:{geometryType:"box",width:1,height:1,depth:1}},{id:"geo_2",name:"球体",type:"geometry",preview:"/api/placeholder/100/100",defaultProps:{geometryType:"sphere",radius:.5,widthSegments:32,heightSegments:16}},{id:"geo_3",name:"圆柱体",type:"geometry",preview:"/api/placeholder/100/100",defaultProps:{geometryType:"cylinder",radiusTop:.5,radiusBottom:.5,height:1,radialSegments:32}},{id:"geo_4",name:"圆锥体",type:"geometry",preview:"/api/placeholder/100/100",defaultProps:{geometryType:"cone",radius:.5,height:1,radialSegments:32}},{id:"geo_5",name:"圆环体",type:"geometry",preview:"/api/placeholder/100/100",defaultProps:{geometryType:"torus",radius:.5,tube:.2,radialSegments:16,tubularSegments:100}},{id:"geo_6",name:"平面",type:"geometry",preview:"/api/placeholder/100/100",defaultProps:{geometryType:"plane",width:1,height:1}},{id:"4",name:"小狗模型",type:"model",preview:"https://picsum.photos/103",defaultProps:{path:"/src/assets/dog.glb",scale:1}},{id:"5",name:"风景图片",type:"pic",preview:"https://picsum.photos/104",defaultProps:{path:"https://picsum.photos/800/600",scale:1}},{id:"6",name:"产品展示图",type:"pic",preview:"https://picsum.photos/105",defaultProps:{path:"https://picsum.photos/800/600?random=1",scale:1}},{id:"7",name:"产品介绍视频",type:"video",preview:"https://picsum.photos/106",defaultProps:{path:"https://www.w3schools.com/html/mov_bbb.mp4",scale:1}},{id:"8",name:"宣传片段",type:"video",preview:"https://picsum.photos/107",defaultProps:{path:"https://www.w3schools.com/html/movie.mp4",scale:1}},{id:"9",name:"背景音乐",type:"audio",preview:"https://picsum.photos/108",defaultProps:{path:"https://www.w3schools.com/html/horse.mp3",scale:1}},{id:"10",name:"语音解说",type:"audio",preview:"https://picsum.photos/109",defaultProps:{path:"https://www.w3schools.com/html/horse.mp3",scale:1}}],s=yn([]),r=yn([]),o=yn("geometry");$c(async()=>{try{const h=await n();s.value=h,r.value=h.filter(u=>u.type==="geometry")}catch(h){console.error("加载模型数据失败:",h)}});const a=h=>{o.value=h,h==="pic"?r.value=s.value.filter(u=>u.type===h||u.type==="arpic"):r.value=s.value.filter(u=>u.type===h)},l=e,c=h=>{const u=JSON.stringify(h);event.dataTransfer.setData("model",u),l("model-drag-start",h)};return(h,u)=>(Sn(),Nn("div",u_,[u[0]||(u[0]=_e("h2",null,"素材列表",-1)),_e("div",h_,[_e("div",d_,[_e("div",f_,[_e("div",p_,[(Sn(),Nn(vn,null,Ol(t,d=>_e("div",{key:d.name,class:cs(["el-tabs__item",{"is-active":o.value===d.name}]),onClick:f=>a(d.name)},ta(d.label),11,m_)),64))])])])]),_e("div",g_,[(Sn(!0),Nn(vn,null,Ol(r.value,d=>(Sn(),Nn("div",{key:d.id,class:"model-item",draggable:"true",onDragstart:f=>c(d)},[_e("div",x_,[_e("img",{src:d.preview,alt:d.name},null,8,v_)]),_e("div",y_,ta(d.name),1)],40,__))),128))])]))}},S_=Ca(M_,[["__scopeId","data-v-5057a4d5"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="174",Xs={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b_=0,ah=1,E_=2,Xf=1,jf=2,ai=3,_i=0,on=1,en=2,Fi=0,js=1,lh=2,ch=3,uh=4,T_=5,os=100,A_=101,w_=102,R_=103,C_=104,P_=200,I_=201,L_=202,D_=203,Gl=204,Wl=205,N_=206,U_=207,O_=208,F_=209,B_=210,z_=211,k_=212,H_=213,V_=214,Xl=0,jl=1,Yl=2,Js=3,ql=4,Kl=5,Zl=6,$l=7,Yf=0,G_=1,W_=2,mi=0,X_=1,j_=2,Y_=3,q_=4,K_=5,Z_=6,$_=7,hh="attached",J_="detached",qf=300,Qs=301,er=302,Jl=303,Ql=304,Pa=306,tr=1e3,Di=1001,ua=1002,tn=1003,Kf=1004,Rr=1005,It=1006,jo=1007,fi=1008,xi=1009,Zf=1010,$f=1011,Yr=1012,nu=1013,ds=1014,Un=1015,to=1016,iu=1017,su=1018,nr=1020,Jf=35902,Qf=1021,ep=1022,bn=1023,tp=1024,np=1025,Ys=1026,ir=1027,ru=1028,ou=1029,ip=1030,au=1031,lu=1033,Yo=33776,qo=33777,Ko=33778,Zo=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,uc=37811,hc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,_c=37818,xc=37819,vc=37820,yc=37821,$o=36492,Mc=36494,Sc=36495,sp=36283,bc=36284,Ec=36285,Tc=36286,rp=2200,Q_=2201,e0=2202,qr=2300,Kr=2301,Wa=2302,Us=2400,Os=2401,ha=2402,cu=2500,t0=2501,n0=0,op=1,Ac=2,i0=3200,s0=3201,ap=0,r0=1,Li="",Tt="srgb",jt="srgb-linear",da="linear",ut="srgb",xs=7680,dh=519,o0=512,a0=513,l0=514,lp=515,c0=516,u0=517,h0=518,d0=519,wc=35044,fh="300 es",pi=2e3,fa=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const Br=Math.PI/180,sr=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function f0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function p0(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function m0(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function g0(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function _0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function x0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function v0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function y0(i,e){return i+Math.random()*(e-i)}function M0(i){return i*(.5-Math.random())}function S0(i){i!==void 0&&(ph=i);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b0(i){return i*Br}function E0(i){return i*sr}function T0(i){return(i&i-1)===0&&i!==0}function A0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function w0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function R0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cp={DEG2RAD:Br,RAD2DEG:sr,generateUUID:Bn,clamp:$e,euclideanModulo:uu,mapLinear:f0,inverseLerp:p0,lerp:zr,damp:m0,pingpong:g0,smoothstep:_0,smootherstep:x0,randInt:v0,randFloat:y0,randFloatSpread:M0,seededRandom:S0,degToRad:b0,radToDeg:E0,isPowerOfTwo:T0,ceilPowerOfTwo:A0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:R0,normalize:ct,denormalize:Ln};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],S=s[1],E=s[4],v=s[7],I=s[2],C=s[5],P=s[8];return r[0]=o*_+a*S+l*I,r[3]=o*p+a*E+l*C,r[6]=o*m+a*v+l*P,r[1]=c*_+h*S+u*I,r[4]=c*p+h*E+u*C,r[7]=c*m+h*v+u*P,r[2]=d*_+f*S+g*I,r[5]=d*p+f*E+g*C,r[8]=d*m+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Ye;function up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function C0(){const i=Zr("canvas");return i.style.display="block",i}const mh={};function ns(i){i in mh||(mh[i]=!0,console.warn(i))}function P0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function I0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function L0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const i={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?da:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jt]:{primaries:e,whitePoint:n,transfer:da,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}const Qe=D0();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vs;class N0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Zr("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U0=0;class hu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?N0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O0=0;class Lt extends Vi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Di,s=Di,r=It,o=fi,a=bn,l=xi,c=Lt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Bn(),this.name="",this.source=new hu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=qf;Lt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(f+1)/2,I=(m+1)/2,C=(h+d)/4,P=(u+_)/4,U=(g+p)/4;return E>v&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=P/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=U/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F0 extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends F0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hp extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B0 extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,S=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const I=Math.sqrt(E),C=Math.atan2(I,m*S);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}const v=a*S;if(l=l*p+d*v,c=c*p+f*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new L,xh=new Mt;class yi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),ho.subVectors(this.max,gr),ys.subVectors(e.a,gr),Ms.subVectors(e.b,gr),Ss.subVectors(e.c,gr),Mi.subVectors(Ms,ys),Si.subVectors(Ss,Ms),Yi.subVectors(ys,Ss);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Yi.z,Yi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Yi.z,0,-Yi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Yi.y,Yi.x,0];return!qa(t,ys,Ms,Ss,ho)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,ys,Ms,Ss,ho))?!1:(fo.crossVectors(Mi,Si),t=[fo.x,fo.y,fo.z],qa(t,ys,Ms,Ss,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,uo=new yi,ys=new L,Ms=new L,Ss=new L,Mi=new L,Si=new L,Yi=new L,gr=new L,ho=new L,fo=new L,qi=new L;function qa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const z0=new yi,_r=new L,Ka=new L;class Zn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Ka)),this.expandByPoint(_r.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new L,Za=new L,po=new L,bi=new L,$a=new L,mo=new L,Ja=new L;class cr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=bi.dot(this.direction),l=-bi.dot(po),c=bi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Za).addScaledVector(po,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){$a.subVectors(t,e),mo.subVectors(n,e),Ja.crossVectors($a,mo);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(bi,mo));if(l<0)return null;const c=a*this.direction.dot($a.cross(bi));if(c<0||l+c>o)return null;const h=-a*bi.dot(Ja);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,p){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,H0)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ei.crossVectors(n,ln),Ei.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ei.crossVectors(n,ln)),Ei.normalize(),go.crossVectors(ln,Ei),s[0]=Ei.x,s[4]=go.x,s[8]=ln.x,s[1]=Ei.y,s[5]=go.y,s[9]=ln.y,s[2]=Ei.z,s[6]=go.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],E=n[7],v=n[11],I=n[15],C=s[0],P=s[4],U=s[8],A=s[12],b=s[1],O=s[5],j=s[9],Y=s[13],oe=s[2],re=s[6],ne=s[10],ie=s[14],G=s[3],pe=s[7],Se=s[11],Ce=s[15];return r[0]=o*C+a*b+l*oe+c*G,r[4]=o*P+a*O+l*re+c*pe,r[8]=o*U+a*j+l*ne+c*Se,r[12]=o*A+a*Y+l*ie+c*Ce,r[1]=h*C+u*b+d*oe+f*G,r[5]=h*P+u*O+d*re+f*pe,r[9]=h*U+u*j+d*ne+f*Se,r[13]=h*A+u*Y+d*ie+f*Ce,r[2]=g*C+_*b+p*oe+m*G,r[6]=g*P+_*O+p*re+m*pe,r[10]=g*U+_*j+p*ne+m*Se,r[14]=g*A+_*Y+p*ie+m*Ce,r[3]=S*C+E*b+v*oe+I*G,r[7]=S*P+E*O+v*re+I*pe,r[11]=S*U+E*j+v*ne+I*Se,r[15]=S*A+E*Y+v*ie+I*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,E=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,I=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,C=t*S+n*E+s*v+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=S*P,e[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*P,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=E*P,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=v*P,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*m-t*u*m)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=I*P,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*p+t*u*p)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,S=l*c,E=l*h,v=l*u,I=n.x,C=n.y,P=n.z;return s[0]=(1-(_+m))*I,s[1]=(f+v)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+m))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(g+E)*P,s[9]=(p-S)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,h=1/o,u=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===pi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h;let g,_;if(a===pi)g=(o+r)*u,_=-2*u;else if(a===fa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bs=new L,Rn=new We,k0=new L(0,0,0),H0=new L(1,1,1),Ei=new L,go=new L,ln=new L,vh=new We,yh=new Mt;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V0=0;const Mh=new L,Es=new Mt,ii=new We,_o=new L,xr=new L,G0=new L,W0=new Mt,Sh=new L(1,0,0),bh=new L(0,1,0),Eh=new L(0,0,1),Th={type:"added"},X0={type:"removed"},Ts={type:"childadded",child:null},Qa={type:"childremoved",child:null};class pt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new L,t=new zn,n=new Mt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ye}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Sh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_o.copy(e):_o.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xr,_o,this.up):ii.lookAt(_o,xr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ii),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Th),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Th),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}pt.DEFAULT_UP=new L(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new L,si=new L,el=new L,ri=new L,As=new L,ws=new L,Ah=new L,tl=new L,nl=new L,il=new L,sl=new nt,rl=new nt,ol=new nt;class Dn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),si.subVectors(n,t),el.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(si),l=Cn.dot(el),c=si.dot(si),h=si.dot(el),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),ol.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),si.subVectors(e,t),Cn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Cn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,n),ws.subVectors(r,n),tl.subVectors(e,n);const l=As.dot(tl),c=ws.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,s);const h=As.dot(nl),u=ws.dot(nl);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(As,o);il.subVectors(e,r);const f=As.dot(il),g=ws.dot(il);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ws,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ah.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ah,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(As,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},xo={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=uu(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round($e(Ht.r*255,0,255))*65536+Math.round($e(Ht.g*255,0,255))*256+Math.round($e(Ht.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Tt){Qe.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,s=Ht.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(xo);const n=zr(Ti.h,xo.h,t),s=zr(Ti.s,xo.s,t),r=zr(Ti.l,xo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Fe;Fe.NAMES=dp;let j0=0;class Yn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=js,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pn extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new L,vo=new Oe;let Y0=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class fp extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pp extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let q0=0;const _n=new We,ll=new pt,Rs=new L,cn=new yi,vr=new yi,Ot=new L;class Dt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?pp:fp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(cn.min,vr.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,vr.max),cn.expandByPoint(Ot)):(cn.expandByPoint(vr.min),cn.expandByPoint(vr.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Ot.add(Rs)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new L,l[U]=new L;const c=new L,h=new L,u=new L,d=new Oe,f=new Oe,g=new Oe,_=new L,p=new L;function m(U,A,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const O=1/(f.x*g.y-g.x*f.y);isFinite(O)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(O),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(O),a[U].add(_),a[A].add(_),a[b].add(_),l[U].add(p),l[A].add(p),l[b].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,A=S.length;U<A;++U){const b=S[U],O=b.start,j=b.count;for(let Y=O,oe=O+j;Y<oe;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const E=new L,v=new L,I=new L,C=new L;function P(U){I.fromBufferAttribute(s,U),C.copy(I);const A=a[U];E.copy(A),E.sub(I.multiplyScalar(I.dot(A))).normalize(),v.crossVectors(C,A);const O=v.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,O)}for(let U=0,A=S.length;U<A;++U){const b=S[U],O=b.start,j=b.count;for(let Y=O,oe=O+j;Y<oe;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wh=new We,Ki=new cr,yo=new Zn,Rh=new L,Mo=new L,So=new L,bo=new L,cl=new L,Eo=new L,Ch=new L,To=new L;class ve extends pt{constructor(e=new Dt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(cl.fromBufferAttribute(u,e),o?Eo.addScaledVector(cl,h):Eo.addScaledVector(cl.sub(t),h))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(yo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(yo,Rh)===null||Ki.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(wh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(wh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,I=E;v<I;v+=3){const C=a.getX(v),P=a.getX(v+1),U=a.getX(v+2);s=Ao(this,m,e,n,c,h,u,C,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),E=a.getX(p+1),v=a.getX(p+2);s=Ao(this,o,e,n,c,h,u,S,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,I=E;v<I;v+=3){const C=v,P=v+1,U=v+2;s=Ao(this,m,e,n,c,h,u,C,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,E=p+1,v=p+2;s=Ao(this,o,e,n,c,h,u,S,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function K0(i,e,t,n,s,r,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:i}}function Ao(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Mo),i.getVertexPosition(l,So),i.getVertexPosition(c,bo);const h=K0(i,e,t,n,Mo,So,bo,Ch);if(h){const u=new L;Dn.getBarycoord(Ch,Mo,So,bo,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new Oe)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new Oe)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Dn.getNormal(Mo,So,bo,d.normal),h.face=d,h.barycoord=u}return h}class Et extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(_,p,m,S,E,v,I,C,P,U,A){const b=v/P,O=I/U,j=v/2,Y=I/2,oe=C/2,re=P+1,ne=U+1;let ie=0,G=0;const pe=new L;for(let Se=0;Se<ne;Se++){const Ce=Se*O-Y;for(let Le=0;Le<re;Le++){const Ze=Le*b-j;pe[_]=Ze*S,pe[p]=Ce*E,pe[m]=oe,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[p]=0,pe[m]=C>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Le/P),u.push(1-Se/U),ie+=1}}for(let Se=0;Se<U;Se++)for(let Ce=0;Ce<P;Ce++){const Le=d+Ce+re*Se,Ze=d+Ce+re*(Se+1),ce=d+(Ce+1)+re*(Se+1),D=d+(Ce+1)+re*Se;l.push(Le,Ze,D),l.push(Ze,ce,D),G+=6}a.addGroup(f,G,A),f+=G,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=rr(i[t]);for(const s in n)e[s]=n[s]}return e}function Z0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const $0={clone:rr,merge:Zt};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gp extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new L,Ph=new Oe,Ih=new Oe;class Jt extends gp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Ih),t.subVectors(Ih,Ph)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Ps=1;class ex extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(Cs,Ps,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Cs,Ps,e,t);r.layers=this.layers,this.add(r);const o=new Jt(Cs,Ps,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Cs,Ps,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Cs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _p extends Lt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tx extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _p(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Et(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Fi});r.uniforms.tEquirect.value=t;const o=new ve(s,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=It),new ex(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ls extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}let ix=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class sx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new L;class fu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lh=new L,Dh=new nt,Nh=new nt,rx=new L,Uh=new We,wo=new L,hl=new Zn,Oh=new We,dl=new cr;class ox extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wo),this.boundingBox.expandByPoint(wo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wo),this.boundingSphere.expandByPoint(wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),e.ray.intersectsSphere(hl)!==!1&&(Oh.copy(s).invert(),dl.copy(e.ray).applyMatrix4(Oh),!(this.boundingBox!==null&&dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===J_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Dh.fromBufferAttribute(s.attributes.skinIndex,e),Nh.fromBufferAttribute(s.attributes.skinWeight,e),Lh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nh.getComponent(r);if(o!==0){const a=Dh.getComponent(r);Uh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rx.copy(Lh).applyMatrix4(Uh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xp extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vp extends Lt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=tn,h=tn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new We,ax=new We;class pu{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ax;Fh.multiplyMatrices(a,t[r]),Fh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new pu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vp(t,e,e,bn,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xp),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Rc extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new We,Bh=new We,Ro=[],zh=new yi,lx=new We,yr=new ve,Mr=new Zn;class cx extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),zh.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(zh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Mr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Bh.multiplyMatrices(n,Is),yr.matrixWorld=Bh,yr.raycast(e,Ro);for(let o=0,a=Ro.length;o<a;o++){const l=Ro[o];l.instanceId=r,l.object=this,t.push(l)}Ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vp(new Float32Array(s*this.count),s,this.count,ru,Un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fl=new L,ux=new L,hx=new Ye;class Ii{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fl.subVectors(n,t).cross(ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hx.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Zn,Co=new L;class mu{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],S=s[13],E=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,p-f,v-m).normalize(),n[1].setComponents(l+r,d+c,p+f,v+m).normalize(),n[2].setComponents(l+o,d+h,p+g,v+S).normalize(),n[3].setComponents(l-o,d-h,p-g,v-S).normalize(),n[4].setComponents(l-a,d-u,p-_,v-E).normalize(),t===pi)n[5].setComponents(l+a,d+u,p+_,v+E).normalize();else if(t===fa)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class no extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pa=new L,ma=new L,kh=new We,Sr=new cr,Po=new Zn,pl=new L,Hh=new L;class In extends pt{constructor(e=new Dt,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pa.fromBufferAttribute(t,s-1),ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;kh.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),S=h.getX(_+1),E=Io(this,e,Sr,l,m,S,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=Io(this,e,Sr,l,_,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=Io(this,e,Sr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Io(this,e,Sr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Io(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(pa.fromBufferAttribute(a,s),ma.fromBufferAttribute(a,r),t.distanceSqToSegment(pa,ma,pl,Hh)>n)return;pl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(pl);if(!(c<e.near||c>e.far))return{distance:c,point:Hh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Vh=new L,Gh=new L;class gu extends In{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dx extends In{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yp extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new We,Cc=new cr,Lo=new Zn,Do=new L;class fx extends pt{constructor(e=new Dt,t=new yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;Wh.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);Do.fromBufferAttribute(u,p),Xh(Do,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Do.fromBufferAttribute(u,g),Xh(Do,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(i,e,t,n,s,r,o){const a=Cc.distanceSqToPoint(i);if(a<t){const l=new L;Cc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ml extends Lt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:It,this.magFilter=r!==void 0?r:It,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Mp extends Lt{constructor(e,t,n,s,r,o,a,l,c,h=Ys){if(h!==Ys&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=ds),n===void 0&&h===ir&&(n=nr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pt extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;S(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function S(){const v=new L,I=new L;let C=0;const P=(t-e)/n;for(let U=0;U<=r;U++){const A=[],b=U/r,O=b*(t-e)+e;for(let j=0;j<=s;j++){const Y=j/s,oe=Y*l+a,re=Math.sin(oe),ne=Math.cos(oe);I.x=O*re,I.y=-b*n+p,I.z=O*ne,u.push(I.x,I.y,I.z),v.set(re,P,ne).normalize(),d.push(v.x,v.y,v.z),f.push(Y,1-b),A.push(g++)}_.push(A)}for(let U=0;U<s;U++)for(let A=0;A<r;A++){const b=_[A][U],O=_[A+1][U],j=_[A+1][U+1],Y=_[A][U+1];(e>0||A!==0)&&(h.push(b,O,Y),C+=3),(t>0||A!==r-1)&&(h.push(O,j,Y),C+=3)}c.addGroup(m,C,0),m+=C}function E(v){const I=g,C=new Oe,P=new L;let U=0;const A=v===!0?e:t,b=v===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;const O=g;for(let j=0;j<=s;j++){const oe=j/s*l+a,re=Math.cos(oe),ne=Math.sin(oe);P.x=A*ne,P.y=p*b,P.z=A*re,u.push(P.x,P.y,P.z),d.push(0,b,0),C.x=re*.5+.5,C.y=ne*.5*b+.5,f.push(C.x,C.y),g++}for(let j=0;j<s;j++){const Y=I+j,oe=O+j;v===!0?h.push(oe,oe+1,Y):h.push(oe+1,oe,Y),U+=3}c.addGroup(m,U,v===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends Pt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ga(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _u extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const E=new L,v=new L,I=new L;for(let C=0;C<t.length;C+=3)f(t[C+0],E),f(t[C+1],v),f(t[C+2],I),l(E,v,I,S)}function l(S,E,v,I){const C=I+1,P=[];for(let U=0;U<=C;U++){P[U]=[];const A=S.clone().lerp(v,U/C),b=E.clone().lerp(v,U/C),O=C-U;for(let j=0;j<=O;j++)j===0&&U===C?P[U][j]=A:P[U][j]=A.clone().lerp(b,j/O)}for(let U=0;U<C;U++)for(let A=0;A<2*(C-U)-1;A++){const b=Math.floor(A/2);A%2===0?(d(P[U][b+1]),d(P[U+1][b]),d(P[U][b])):(d(P[U][b+1]),d(P[U+1][b+1]),d(P[U+1][b]))}}function c(S){const E=new L;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(S),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){const S=new L;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const v=p(S)/2/Math.PI+.5,I=m(S)/Math.PI+.5;o.push(v,1-I)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const E=o[S+0],v=o[S+2],I=o[S+4],C=Math.max(E,v,I),P=Math.min(E,v,I);C>.9&&P<.1&&(E<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,E){const v=S*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){const S=new L,E=new L,v=new L,I=new L,C=new Oe,P=new Oe,U=new Oe;for(let A=0,b=0;A<r.length;A+=9,b+=6){S.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),C.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),I.copy(S).add(E).add(v).divideScalar(3);const O=p(I);_(C,b+0,S,O),_(P,b+2,E,O),_(U,b+4,v,O)}}function _(S,E,v,I){I<0&&S.x===1&&(o[E]=S.x-1),v.x===0&&v.z===0&&(o[E]=I/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.vertices,e.indices,e.radius,e.details)}}class Fs extends _u{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fs(e.radius,e.detail)}}class dn extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const S=m*d-o;for(let E=0;E<c;E++){const v=E*u-r;g.push(v,-S,0),_.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const E=S+c*m,v=S+c*(m+1),I=S+1+c*(m+1),C=S+1+c*m;f.push(E,v,C),f.push(v,I,C)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class $r extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const S=[],E=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){const C=I/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(C+v,1-E),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const E=h[m][S+1],v=h[m][S],I=h[m+1][S],C=h[m+1][S+1];(m!==0||o>0)&&f.push(E,v,C),(m!==n-1||l<Math.PI)&&f.push(v,I,C)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class di extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(_,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ks extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ap,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends Ks{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class px extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mx extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function No(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _x(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function jh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Sp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class io{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xx extends io{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Os:r=e,a=2*t-n;break;case ha:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Os:o=e,l=2*n-t;break;case ha:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+S*o[c+I]+E*o[l+I]+v*o[u+I];return r}}class bp extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class vx extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Kr;class ur extends Jn{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=qr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends Jn{}Ep.prototype.ValueTypeName="color";class or extends Jn{}or.prototype.ValueTypeName="number";class yx extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Mt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ar extends Jn{InterpolantFactoryMethodLinear(e){return new yx(this.times,this.values,this.getValueSize(),e)}}ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends Jn{constructor(e,t,n){super(e,t,n)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=qr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends Jn{}lr.prototype.ValueTypeName="vector";class Pc{constructor(e="",t=-1,n=[],s=cu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=_x(l);l=jh(l,1,h),c=jh(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new or(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];Sp(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const E=d[g];p.push(E.time),m.push(E.morphTarget===_?1:0)}s.push(new or(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(lr,f+".position",d,"pos",s),n(ar,f+".quaternion",d,"rot",s),n(lr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Mx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return or;case"vector":case"vector2":case"vector3":case"vector4":return lr;case"color":return Ep;case"quaternion":return ar;case"bool":case"boolean":return ur;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Sx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Mx(i.type);if(i.times===void 0){const t=[],n=[];Sp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ex=new bx;class ms{constructor(e){this.manager=e!==void 0?e:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class Tx extends Error{constructor(e,t){super(e),this.response=t}}class _a extends ms{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){u.read().then(({done:E,value:v})=>{if(E)m.close();else{_+=v.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,P=h.length;C<P;C++){const U=h[C];U.onProgress&&U.onProgress(I)}m.enqueue(v),S()}},E=>{m.error(E)})}}});return new Response(p)}else throw new Tx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ni.add(e,c);const h=oi[e];delete oi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ax extends ms{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zr("img");function l(){h(),Ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ic extends ms{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,o=new Ax(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class so extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wx extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gl=new We,Yh=new L,qh=new L;class xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mu,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rx extends xu{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cx extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kh=new We,br=new L,_l=new L;class Px extends xu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),n.position.copy(br),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class Ix extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Px}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vu extends gp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lx extends xu{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tp extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Lx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dx extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Nx extends ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(e,l),r.manager.itemStart(e)}}class Ux extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Ox{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Mt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Mt.multiplyQuaternionsFlat(e,o,e,t,e,n),Mt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const yu="\\[\\]\\.:\\/",Fx=new RegExp("["+yu+"]","g"),Mu="[^"+yu+"]",Bx="[^"+yu.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",Mu),kx=/(WCOD+)?/.source.replace("WCOD",Bx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),Gx=new RegExp("^"+zx+kx+Hx+Vx+"$"),Wx=["material","materials","bones","map"];class Xx{constructor(e,t,n){const s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(e){const t=Gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Xx;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jx{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Us,endingEnd:Us};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Q_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case t0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case cu:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===e0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===rp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Os,s.endingEnd=Os):(e?s.endingStart=this.zeroSlopeAtStart?Os:Us:s.endingStart=ha,t?s.endingEnd=this.zeroSlopeAtEnd?Os:Us:s.endingEnd=ha)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Yx=new Float32Array(1);class qx extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Ox(at.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new bp(new Float32Array(2),new Float32Array(2),1,Yx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Pc.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=cu),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new jx(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Pc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Zh=new We;class Ap{constructor(e,t,n=0,s=1/0){this.ray=new cr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(e,t=!0,n=[]){return Lc(e,this,n,t),n.sort($h),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Lc(e[s],this,n,t);return n.sort($h),n}}function $h(i,e){return i.distance-e.distance}function Lc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Lc(r[o],e,t,!0)}}class Jh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kx extends gu{constructor(e=10,t=10,n=4473924,s=8947848){n=new Fe(n),s=new Fe(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Dt;h.setAttribute("position",new mt(l,3)),h.setAttribute("color",new mt(c,3));const u=new no({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zx extends gu{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Dt;s.setAttribute("position",new mt(t,3)),s.setAttribute("color",new mt(n,3));const r=new no({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Fe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wp extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Qh(i,e,t,n){const s=$x(n);switch(t){case Qf:return i*e;case tp:return i*e;case np:return i*e*2;case ru:return i*e/s.components*s.byteLength;case ou:return i*e/s.components*s.byteLength;case ip:return i*e*2/s.components*s.byteLength;case au:return i*e*2/s.components*s.byteLength;case ep:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case lu:return i*e*4/s.components*s.byteLength;case Yo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $o:case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sp:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(i){switch(i){case xi:case Zf:return{byteLength:1,components:1};case Yr:case $f:case to:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case ds:case nu:case Un:return{byteLength:4,components:1};case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jx(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,av=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ev=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$v=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Qx,alphahash_pars_fragment:ev,alphamap_fragment:tv,alphamap_pars_fragment:nv,alphatest_fragment:iv,alphatest_pars_fragment:sv,aomap_fragment:rv,aomap_pars_fragment:ov,batching_pars_vertex:av,batching_vertex:lv,begin_vertex:cv,beginnormal_vertex:uv,bsdfs:hv,iridescence_fragment:dv,bumpmap_pars_fragment:fv,clipping_planes_fragment:pv,clipping_planes_pars_fragment:mv,clipping_planes_pars_vertex:gv,clipping_planes_vertex:_v,color_fragment:xv,color_pars_fragment:vv,color_pars_vertex:yv,color_vertex:Mv,common:Sv,cube_uv_reflection_fragment:bv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Tv,displacementmap_vertex:Av,emissivemap_fragment:wv,emissivemap_pars_fragment:Rv,colorspace_fragment:Cv,colorspace_pars_fragment:Pv,envmap_fragment:Iv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Dv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:Xv,envmap_vertex:Uv,fog_vertex:Ov,fog_pars_vertex:Fv,fog_fragment:Bv,fog_pars_fragment:zv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Gv,lights_pars_begin:Wv,lights_toon_fragment:jv,lights_toon_pars_fragment:Yv,lights_phong_fragment:qv,lights_phong_pars_fragment:Kv,lights_physical_fragment:Zv,lights_physical_pars_fragment:$v,lights_fragment_begin:Jv,lights_fragment_maps:Qv,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:hy,morphcolor_vertex:dy,morphnormal_vertex:fy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:xy,normal_pars_vertex:vy,normal_vertex:yy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:wy,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Uy,shadowmap_vertex:Oy,shadowmask_pars_fragment:Fy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:ky,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:jy,transmission_pars_fragment:Yy,uv_pars_fragment:qy,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:$y,background_vert:Jy,background_frag:Qy,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:sM,depth_frag:rM,distanceRGBA_vert:oM,distanceRGBA_frag:aM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:hM,meshbasic_vert:dM,meshbasic_frag:fM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:vM,meshphong_vert:yM,meshphong_frag:MM,meshphysical_vert:SM,meshphysical_frag:bM,meshtoon_vert:EM,meshtoon_frag:TM,points_vert:AM,points_frag:wM,shadow_vert:RM,shadow_frag:CM,sprite_vert:PM,sprite_frag:IM},be={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Xn={basic:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Zt([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Zt([be.lights,be.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Xn.physical={uniforms:Zt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Uo={r:0,b:0,g:0},$i=new zn,LM=new We;function DM(i,e,t,n,s,r,o){const a=new Fe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const I=g(E);I===null?m(a,l):I&&I.isColor&&(m(I,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,v){const I=g(v);I&&(I.isCubeTexture||I.mapping===Pa)?(h===void 0&&(h=new ve(new Et(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:rr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(v.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler($i)),h.material.toneMapped=Qe.getTransfer(I.colorSpace)!==ut,(u!==I||d!==I.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ve(new dn(2,2),new zi({name:"BackgroundMaterial",uniforms:rr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(I.colorSpace)!==ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,v){E.getRGB(Uo,mp(i)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:_,addToRenderList:p,dispose:S}}function NM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(b,O,j,Y,oe){let re=!1;const ne=u(Y,j,O);r!==ne&&(r=ne,c(r.object)),re=f(b,Y,j,oe),re&&g(b,Y,j,oe),oe!==null&&e.update(oe,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,v(b,O,j,Y),oe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,O,j){const Y=j.wireframe===!0;let oe=n[b.id];oe===void 0&&(oe={},n[b.id]=oe);let re=oe[O.id];re===void 0&&(re={},oe[O.id]=re);let ne=re[Y];return ne===void 0&&(ne=d(l()),re[Y]=ne),ne}function d(b){const O=[],j=[],Y=[];for(let oe=0;oe<t;oe++)O[oe]=0,j[oe]=0,Y[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:Y,object:b,attributes:{},index:null}}function f(b,O,j,Y){const oe=r.attributes,re=O.attributes;let ne=0;const ie=j.getAttributes();for(const G in ie)if(ie[G].location>=0){const Se=oe[G];let Ce=re[G];if(Ce===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Ce=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Ce=b.instanceColor)),Se===void 0||Se.attribute!==Ce||Ce&&Se.data!==Ce.data)return!0;ne++}return r.attributesNum!==ne||r.index!==Y}function g(b,O,j,Y){const oe={},re=O.attributes;let ne=0;const ie=j.getAttributes();for(const G in ie)if(ie[G].location>=0){let Se=re[G];Se===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));const Ce={};Ce.attribute=Se,Se&&Se.data&&(Ce.data=Se.data),oe[G]=Ce,ne++}r.attributes=oe,r.attributesNum=ne,r.index=Y}function _(){const b=r.newAttributes;for(let O=0,j=b.length;O<j;O++)b[O]=0}function p(b){m(b,0)}function m(b,O){const j=r.newAttributes,Y=r.enabledAttributes,oe=r.attributeDivisors;j[b]=1,Y[b]===0&&(i.enableVertexAttribArray(b),Y[b]=1),oe[b]!==O&&(i.vertexAttribDivisor(b,O),oe[b]=O)}function S(){const b=r.newAttributes,O=r.enabledAttributes;for(let j=0,Y=O.length;j<Y;j++)O[j]!==b[j]&&(i.disableVertexAttribArray(j),O[j]=0)}function E(b,O,j,Y,oe,re,ne){ne===!0?i.vertexAttribIPointer(b,O,j,oe,re):i.vertexAttribPointer(b,O,j,Y,oe,re)}function v(b,O,j,Y){_();const oe=Y.attributes,re=j.getAttributes(),ne=O.defaultAttributeValues;for(const ie in re){const G=re[ie];if(G.location>=0){let pe=oe[ie];if(pe===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){const Se=pe.normalized,Ce=pe.itemSize,Le=e.get(pe);if(Le===void 0)continue;const Ze=Le.buffer,ce=Le.type,D=Le.bytesPerElement,z=ce===i.INT||ce===i.UNSIGNED_INT||pe.gpuType===nu;if(pe.isInterleavedBufferAttribute){const F=pe.data,he=F.stride,se=pe.offset;if(F.isInstancedInterleavedBuffer){for(let ee=0;ee<G.locationSize;ee++)m(G.location+ee,F.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ee=0;ee<G.locationSize;ee++)p(G.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ee=0;ee<G.locationSize;ee++)E(G.location+ee,Ce/G.locationSize,ce,Se,he*D,(se+Ce/G.locationSize*ee)*D,z)}else{if(pe.isInstancedBufferAttribute){for(let F=0;F<G.locationSize;F++)m(G.location+F,pe.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let F=0;F<G.locationSize;F++)p(G.location+F);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let F=0;F<G.locationSize;F++)E(G.location+F,Ce/G.locationSize,ce,Se,Ce*D,Ce/G.locationSize*F*D,z)}}else if(ne!==void 0){const Se=ne[ie];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(G.location,Se);break;case 3:i.vertexAttrib3fv(G.location,Se);break;case 4:i.vertexAttrib4fv(G.location,Se);break;default:i.vertexAttrib1fv(G.location,Se)}}}}S()}function I(){U();for(const b in n){const O=n[b];for(const j in O){const Y=O[j];for(const oe in Y)h(Y[oe].object),delete Y[oe];delete O[j]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const j in O){const Y=O[j];for(const oe in Y)h(Y[oe].object),delete Y[oe];delete O[j]}delete n[b.id]}function P(b){for(const O in n){const j=n[O];if(j[b.id]===void 0)continue;const Y=j[b.id];for(const oe in Y)h(Y[oe].object),delete Y[oe];delete j[b.id]}}function U(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function UM(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==xi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:I,maxSamples:C}}function FM(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ii,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,E=S*4;let v=m.clippingState||null;l.value=v,v=h(g,d,E,f);for(let I=0;I!==E;++I)v[I]=t[I];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,v=f;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function BM(i){let e=new WeakMap;function t(o,a){return a===Jl?o.mapping=Qs:a===Ql&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tx(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Bs=4,ed=[.125,.215,.35,.446,.526,.582],as=20,xl=new vu,td=new Fe;let vl=null,yl=0,Ml=0,Sl=!1;const is=(1+Math.sqrt(5))/2,Ls=1/is,nd=[new L(-is,Ls,0),new L(is,Ls,0),new L(-Ls,0,is),new L(Ls,0,is),new L(0,is,-Ls),new L(0,is,Ls),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],zM=new L;class id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=zM}=r;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:to,format:bn,colorSpace:jt,depthBuffer:!1},s=sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kM(r)),this._blurMaterial=HM(r,e,t)}return s}_compileMaterial(e){const t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,s,r){const l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(td),u.toneMapping=mi,u.autoClear=!1;const g=new pn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new ve(new Et,g);let p=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,p=!0):(g.color.copy(td),p=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const v=this._cubeSize;Oo(s,E*v,S>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Qs||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nd[(s-r-1)%nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):as;p>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);const m=[];let S=0;for(let P=0;P<as;++P){const U=P/_,A=Math.exp(-U*U/2);m.push(A),P===0?S+=A:P<p&&(S+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[s],I=3*v*(s>E-Bs?s-E+Bs:0),C=4*(this._cubeSize-v);Oo(t,I,C,3*v,2*v),l.setRenderTarget(t),l.render(u,xl)}}function kM(i){const e=[],t=[],n=[];let s=i;const r=i-Bs+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Bs?l=ed[o-i+Bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),E=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,U=C>2?0:-1,A=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];S.set(A,_*g*C),E.set(d,p*g*C);const b=[C,C,C,C,C,C];v.set(b,m*g*C)}const I=new Dt;I.setAttribute("position",new Bt(S,_)),I.setAttribute("uv",new Bt(E,p)),I.setAttribute("faceIndex",new Bt(v,m)),e.push(I),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sd(i,e,t){const n=new fs(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function HM(i,e,t){const n=new Float32Array(as),s=new L(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function rd(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function od(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===Ql,h=l===Qs||l===er;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new id(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new id(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function GM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function WM(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let E=0,v=S.length;E<v;E+=3){const I=S[E+0],C=S[E+1],P=S[E+2];d.push(I,C,C,P,P,I)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const I=E+0,C=E+1,P=E+2;d.push(I,C,C,P,P,I)}}else return;const p=new(up(d)?pp:fp)(d,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function XM(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S]*_[S];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function YM(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let I=a.attributes.position.count*v,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*C*4*u),U=new hp(P,I,C,u);U.type=Un,U.needsUpdate=!0;const A=v*4;for(let O=0;O<u;O++){const j=m[O],Y=S[O],oe=E[O],re=I*C*4*O;for(let ne=0;ne<j.count;ne++){const ie=ne*A;g===!0&&(s.fromBufferAttribute(j,ne),P[re+ie+0]=s.x,P[re+ie+1]=s.y,P[re+ie+2]=s.z,P[re+ie+3]=0),_===!0&&(s.fromBufferAttribute(Y,ne),P[re+ie+4]=s.x,P[re+ie+5]=s.y,P[re+ie+6]=s.z,P[re+ie+7]=0),p===!0&&(s.fromBufferAttribute(oe,ne),P[re+ie+8]=s.x,P[re+ie+9]=s.y,P[re+ie+10]=s.z,P[re+ie+11]=oe.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new Oe(I,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qM(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Cp=new Lt,ad=new Mp(1,1),Pp=new hp,Ip=new B0,Lp=new _p,ld=[],cd=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ia(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function KM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ZM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function $M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function JM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function QM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),Ut(t,n)}}function eS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),Ut(t,n)}}function tS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),Ut(t,n)}}function nS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function rS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function oS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function lS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function cS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function uS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ad.compareFunction=lp,r=ad):r=Cp,t.setTexture2D(e||r,s)}function hS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ip,s)}function dS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Lp,s)}function fS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pp,s)}function pS(i){switch(i){case 5126:return KM;case 35664:return ZM;case 35665:return $M;case 35666:return JM;case 35674:return QM;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return sS;case 35669:case 35673:return rS;case 5125:return oS;case 36294:return aS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return fS}}function mS(i,e){i.uniform1fv(this.addr,e)}function gS(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function _S(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function xS(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function vS(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yS(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function MS(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function SS(i,e){i.uniform1iv(this.addr,e)}function bS(i,e){i.uniform2iv(this.addr,e)}function ES(i,e){i.uniform3iv(this.addr,e)}function TS(i,e){i.uniform4iv(this.addr,e)}function AS(i,e){i.uniform1uiv(this.addr,e)}function wS(i,e){i.uniform2uiv(this.addr,e)}function RS(i,e){i.uniform3uiv(this.addr,e)}function CS(i,e){i.uniform4uiv(this.addr,e)}function PS(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cp,r[o])}function IS(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ip,r[o])}function LS(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lp,r[o])}function DS(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pp,r[o])}function NS(i){switch(i){case 5126:return mS;case 35664:return gS;case 35665:return _S;case 35666:return xS;case 35674:return vS;case 35675:return yS;case 35676:return MS;case 5124:case 35670:return SS;case 35667:case 35671:return bS;case 35668:case 35672:return ES;case 35669:case 35673:return TS;case 5125:return AS;case 36294:return wS;case 36295:return RS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return DS}}class US{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pS(t.type)}}class OS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NS(t.type)}}class FS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function fd(i,e){i.seq.push(e),i.map[e.id]=e}function BS(i,e,t){const n=i.name,s=n.length;for(bl.lastIndex=0;;){const r=bl.exec(n),o=bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fd(t,c===void 0?new US(a,i,e):new OS(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new FS(a),fd(t,u)),t=u}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);BS(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zS=37297;let kS=0;function HS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const md=new Ye;function VS(i){Qe._getMatrix(md,Qe.workingColorSpace,i);const e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+HS(i.getShaderSource(e),o)}else return s}function GS(i,e){const t=VS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WS(i,e){let t;switch(e){case X_:t="Linear";break;case j_:t="Reinhard";break;case Y_:t="Cineon";break;case q_:t="ACESFilmic";break;case Z_:t="AgX";break;case $_:t="Neutral";break;case K_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new L;function XS(){Qe.getLuminanceCoefficients(Fo);const i=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function YS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Cr(i){return i!==""}function _d(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(KS,$S)}const ZS=new Map;function $S(i,e){let t=Ke[e];if(t===void 0){const n=ZS.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(i){return i.replace(JS,QS)}function QS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qs:case er:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yf:e="ENVMAP_BLENDING_MULTIPLY";break;case G_:e="ENVMAP_BLENDING_MIX";break;case W_:e="ENVMAP_BLENDING_ADD";break}return e}function sb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rb(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eb(t),c=tb(t),h=nb(t),u=ib(t),d=sb(t),f=jS(t),g=YS(r),_=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`)):(p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),m=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==mi?WS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,GS("linearToOutputTexel",t.outputColorSpace),XS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Dc(o),o=_d(o,t),o=xd(o,t),a=Dc(a),a=_d(a,t),a=xd(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+p+o,v=S+m+a,I=pd(s,s.VERTEX_SHADER,E),C=pd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(O){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_).trim(),Y=s.getShaderInfoLog(I).trim(),oe=s.getShaderInfoLog(C).trim();let re=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,C);else{const ie=gd(s,I,"vertex"),G=gd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+j+`
`+ie+`
`+G)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||oe==="")&&(ne=!1);ne&&(O.diagnostics={runnable:re,programLog:j,vertexShader:{log:Y,prefix:p},fragmentShader:{log:oe,prefix:m}})}s.deleteShader(I),s.deleteShader(C),U=new Jo(s,_),A=qS(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,zS)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let ob=0;class ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lb(e),t.set(e,n)),n}}class lb{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}}function cb(i,e,t,n,s,r,o){const a=new du,l=new ab,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function p(A,b,O,j,Y){const oe=j.fog,re=Y.geometry,ne=A.isMeshStandardMaterial?j.environment:null,ie=(A.isMeshStandardMaterial?t:e).get(A.envMap||ne),G=ie&&ie.mapping===Pa?ie.image.height:null,pe=g[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const Se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ce=Se!==void 0?Se.length:0;let Le=0;re.morphAttributes.position!==void 0&&(Le=1),re.morphAttributes.normal!==void 0&&(Le=2),re.morphAttributes.color!==void 0&&(Le=3);let Ze,ce,D,z;if(pe){const lt=Xn[pe];Ze=lt.vertexShader,ce=lt.fragmentShader}else Ze=A.vertexShader,ce=A.fragmentShader,l.update(A),D=l.getVertexShaderID(A),z=l.getFragmentShaderID(A);const F=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),se=Y.isInstancedMesh===!0,ee=Y.isBatchedMesh===!0,ye=!!A.map,w=!!A.matcap,R=!!ie,y=!!A.aoMap,Z=!!A.lightMap,V=!!A.bumpMap,q=!!A.normalMap,X=!!A.displacementMap,le=!!A.emissiveMap,$=!!A.metalnessMap,M=!!A.roughnessMap,x=A.anisotropy>0,N=A.clearcoat>0,W=A.dispersion>0,Q=A.iridescence>0,K=A.sheen>0,ge=A.transmission>0,de=x&&!!A.anisotropyMap,xe=N&&!!A.clearcoatMap,Be=N&&!!A.clearcoatNormalMap,fe=N&&!!A.clearcoatRoughnessMap,Ee=Q&&!!A.iridescenceMap,De=Q&&!!A.iridescenceThicknessMap,ze=K&&!!A.sheenColorMap,Me=K&&!!A.sheenRoughnessMap,He=!!A.specularMap,Xe=!!A.specularColorMap,gt=!!A.specularIntensityMap,B=ge&&!!A.transmissionMap,Te=ge&&!!A.thicknessMap,ae=!!A.gradientMap,ue=!!A.alphaMap,Re=A.alphaTest>0,we=!!A.alphaHash,je=!!A.extensions;let St=mi;A.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(St=i.toneMapping);const zt={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:Ze,fragmentShader:ce,defines:A.defines,customVertexShaderID:D,customFragmentShaderID:z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:ee,batchingColor:ee&&Y._colorsTexture!==null,instancing:se,instancingColor:se&&Y.instanceColor!==null,instancingMorph:se&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:jt,alphaToCoverage:!!A.alphaToCoverage,map:ye,matcap:w,envMap:R,envMapMode:R&&ie.mapping,envMapCubeUVHeight:G,aoMap:y,lightMap:Z,bumpMap:V,normalMap:q,displacementMap:d&&X,emissiveMap:le,normalMapObjectSpace:q&&A.normalMapType===r0,normalMapTangentSpace:q&&A.normalMapType===ap,metalnessMap:$,roughnessMap:M,anisotropy:x,anisotropyMap:de,clearcoat:N,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:fe,dispersion:W,iridescence:Q,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:K,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:He,specularColorMap:Xe,specularIntensityMap:gt,transmission:ge,transmissionMap:B,thicknessMap:Te,gradientMap:ae,opaque:A.transparent===!1&&A.blending===js&&A.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:we,combine:A.combine,mapUv:ye&&_(A.map.channel),aoMapUv:y&&_(A.aoMap.channel),lightMapUv:Z&&_(A.lightMap.channel),bumpMapUv:V&&_(A.bumpMap.channel),normalMapUv:q&&_(A.normalMap.channel),displacementMapUv:X&&_(A.displacementMap.channel),emissiveMapUv:le&&_(A.emissiveMap.channel),metalnessMapUv:$&&_(A.metalnessMap.channel),roughnessMapUv:M&&_(A.roughnessMap.channel),anisotropyMapUv:de&&_(A.anisotropyMap.channel),clearcoatMapUv:xe&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(A.sheenRoughnessMap.channel),specularMapUv:He&&_(A.specularMap.channel),specularColorMapUv:Xe&&_(A.specularColorMap.channel),specularIntensityMapUv:gt&&_(A.specularIntensityMap.channel),transmissionMapUv:B&&_(A.transmissionMap.channel),thicknessMapUv:Te&&_(A.thicknessMap.channel),alphaMapUv:ue&&_(A.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(q||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!re.attributes.uv&&(ye||ue),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:he,skinning:Y.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:ye&&A.map.isVideoTexture===!0&&Qe.getTransfer(A.map.colorSpace)===ut,decodeVideoTextureEmissive:le&&A.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(A.emissiveMap.colorSpace)===ut,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===en,flipSided:A.side===on,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:je&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&A.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)b.push(O),b.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(S(b,A),E(b,A),b.push(i.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function S(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function E(A,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){const b=g[A.type];let O;if(b){const j=Xn[b];O=$0.clone(j.uniforms)}else O=A.uniforms;return O}function I(A,b){let O;for(let j=0,Y=h.length;j<Y;j++){const oe=h[j];if(oe.cacheKey===b){O=oe,++O.usedTimes;break}}return O===void 0&&(O=new rb(i,b,A,r),h.push(O)),O}function C(A){if(--A.usedTimes===0){const b=h.indexOf(A);h[b]=h[h.length-1],h.pop(),A.destroy()}}function P(A){l.remove(A)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:U}}function ub(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||hb),n.length>1&&n.sort(d||Md),s.length>1&&s.sort(d||Md)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function db(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sd,i.set(n,[o])):s>=r.length?(o=new Sd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function pb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mb=0;function gb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _b(i){const e=new fb,t=pb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new We,o=new We;function a(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,S=0,E=0,v=0,I=0,C=0,P=0;c.sort(gb);for(let A=0,b=c.length;A<b;A++){const O=c[A],j=O.color,Y=O.intensity,oe=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=j.r*Y,u+=j.g*Y,d+=j.b*Y;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(O.sh.coefficients[ne],Y);P++}else if(O.isDirectionalLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ie=O.shadow,G=t.get(O);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=re,n.directionalShadowMatrix[f]=O.shadow.matrix,S++}n.directional[f]=ne,f++}else if(O.isSpotLight){const ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(j).multiplyScalar(Y),ne.distance=oe,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,n.spot[_]=ne;const ie=O.shadow;if(O.map&&(n.spotLightMap[I]=O.map,I++,ie.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[_]=ie.matrix,O.castShadow){const G=t.get(O);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=re,v++}_++}else if(O.isRectAreaLight){const ne=e.get(O);ne.color.copy(j).multiplyScalar(Y),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=ne,p++}else if(O.isPointLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const ie=O.shadow,G=t.get(O);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=O.shadow.matrix,E++}n.point[g]=ne,g++}else if(O.isHemisphereLight){const ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(Y),ne.groundColor.copy(O.groundColor).multiplyScalar(Y),n.hemi[m]=ne,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==v||U.numSpotMaps!==I||U.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=v,U.numSpotMaps=I,U.numLightProbes=P,n.version=mb++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const E=c[m];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(E.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function bd(i){const e=new _b(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xb(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bd(i),e.set(s,[a])):r>=o.length?(a=new bd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mb(i,e,t){let n=new mu;const s=new Oe,r=new Oe,o=new nt,a=new px({depthPacking:s0}),l=new mx,c={},h=t.maxTextureSize,u={[_i]:on,[on]:_i,[en]:en},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:vb,fragmentShader:yb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ve(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let m=this.type;this.render=function(C,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const A=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Fi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=m!==ai&&this.type===ai,oe=m===ai&&this.type!==ai;for(let re=0,ne=C.length;re<ne;re++){const ie=C[re],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const pe=G.getFrameExtents();if(s.multiply(pe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,G.mapSize.y=r.y)),G.map===null||Y===!0||oe===!0){const Ce=this.type!==ai?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new fs(s.x,s.y,Ce),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Se=G.getViewportCount();for(let Ce=0;Ce<Se;Ce++){const Le=G.getViewport(Ce);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),j.viewport(o),G.updateMatrices(ie,Ce),n=G.getFrustum(),v(P,U,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===ai&&S(G,U),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(A,b,O)};function S(C,P){const U=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fs(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,U,f,_,null)}function E(C,P,U,A){let b=null;const O=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)b=O;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const j=b.uuid,Y=P.uuid;let oe=c[j];oe===void 0&&(oe={},c[j]=oe);let re=oe[Y];re===void 0&&(re=b.clone(),oe[Y]=re,P.addEventListener("dispose",I)),b=re}if(b.visible=P.visible,b.wireframe=P.wireframe,A===ai?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=i.properties.get(b);j.light=U}return b}function v(C,P,U,A,b){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ai)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const Y=e.update(C),oe=C.material;if(Array.isArray(oe)){const re=Y.groups;for(let ne=0,ie=re.length;ne<ie;ne++){const G=re[ne],pe=oe[G.materialIndex];if(pe&&pe.visible){const Se=E(C,pe,A,b);C.onBeforeShadow(i,C,P,U,Y,Se,G),i.renderBufferDirect(U,null,Y,Se,C,G),C.onAfterShadow(i,C,P,U,Y,Se,G)}}}else if(oe.visible){const re=E(C,oe,A,b);C.onBeforeShadow(i,C,P,U,Y,re,null),i.renderBufferDirect(U,null,Y,re,C,null),C.onAfterShadow(i,C,P,U,Y,re,null)}}const j=C.children;for(let Y=0,oe=j.length;Y<oe;Y++)v(j[Y],P,U,A,b)}function I(C){C.target.removeEventListener("dispose",I);for(const U in c){const A=c[U],b=C.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}const Sb={[Xl]:jl,[Yl]:Zl,[ql]:$l,[Js]:Kl,[jl]:Xl,[Zl]:Yl,[$l]:ql,[Kl]:Js};function bb(i,e){function t(){let B=!1;const Te=new nt;let ae=null;const ue=new nt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!B&&(i.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){B=Re},setClear:function(Re,we,je,St,zt){zt===!0&&(Re*=St,we*=St,je*=St),Te.set(Re,we,je,St),ue.equals(Te)===!1&&(i.clearColor(Re,we,je,St),ue.copy(Te))},reset:function(){B=!1,ae=null,ue.set(-1,0,0,0)}}}function n(){let B=!1,Te=!1,ae=null,ue=null,Re=null;return{setReversed:function(we){if(Te!==we){const je=e.get("EXT_clip_control");Te?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const St=Re;Re=null,this.setClear(St)}Te=we},getReversed:function(){return Te},setTest:function(we){we?F(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(we){ae!==we&&!B&&(i.depthMask(we),ae=we)},setFunc:function(we){if(Te&&(we=Sb[we]),ue!==we){switch(we){case Xl:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Yl:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case ql:i.depthFunc(i.EQUAL);break;case Kl:i.depthFunc(i.GEQUAL);break;case Zl:i.depthFunc(i.GREATER);break;case $l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=we}},setLocked:function(we){B=we},setClear:function(we){Re!==we&&(Te&&(we=1-we),i.clearDepth(we),Re=we)},reset:function(){B=!1,ae=null,ue=null,Re=null,Te=!1}}}function s(){let B=!1,Te=null,ae=null,ue=null,Re=null,we=null,je=null,St=null,zt=null;return{setTest:function(lt){B||(lt?F(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(lt){Te!==lt&&!B&&(i.stencilMask(lt),Te=lt)},setFunc:function(lt,Tn,Qn){(ae!==lt||ue!==Tn||Re!==Qn)&&(i.stencilFunc(lt,Tn,Qn),ae=lt,ue=Tn,Re=Qn)},setOp:function(lt,Tn,Qn){(we!==lt||je!==Tn||St!==Qn)&&(i.stencilOp(lt,Tn,Qn),we=lt,je=Tn,St=Qn)},setLocked:function(lt){B=lt},setClear:function(lt){zt!==lt&&(i.clearStencil(lt),zt=lt)},reset:function(){B=!1,Te=null,ae=null,ue=null,Re=null,we=null,je=null,St=null,zt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,S=null,E=null,v=null,I=null,C=null,P=new Fe(0,0,0),U=0,A=!1,b=null,O=null,j=null,Y=null,oe=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ie=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),ne=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ne=ie>=2);let pe=null,Se={};const Ce=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ze=new nt().fromArray(Ce),ce=new nt().fromArray(Le);function D(B,Te,ae,ue){const Re=new Uint8Array(4),we=i.createTexture();i.bindTexture(B,we),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ae;je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Te+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return we}const z={};z[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(i.DEPTH_TEST),o.setFunc(Js),V(!1),q(ah),F(i.CULL_FACE),y(Fi);function F(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function he(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function se(B,Te){return u[B]!==Te?(i.bindFramebuffer(B,Te),u[B]=Te,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Te),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function ee(B,Te){let ae=f,ue=!1;if(B){ae=d.get(Te),ae===void 0&&(ae=[],d.set(Te,ae));const Re=B.textures;if(ae.length!==Re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let we=0,je=Re.length;we<je;we++)ae[we]=i.COLOR_ATTACHMENT0+we;ae.length=Re.length,ue=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ae)}function ye(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const w={[os]:i.FUNC_ADD,[A_]:i.FUNC_SUBTRACT,[w_]:i.FUNC_REVERSE_SUBTRACT};w[R_]=i.MIN,w[C_]=i.MAX;const R={[P_]:i.ZERO,[I_]:i.ONE,[L_]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[B_]:i.SRC_ALPHA_SATURATE,[O_]:i.DST_COLOR,[N_]:i.DST_ALPHA,[D_]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[F_]:i.ONE_MINUS_DST_COLOR,[U_]:i.ONE_MINUS_DST_ALPHA,[z_]:i.CONSTANT_COLOR,[k_]:i.ONE_MINUS_CONSTANT_COLOR,[H_]:i.CONSTANT_ALPHA,[V_]:i.ONE_MINUS_CONSTANT_ALPHA};function y(B,Te,ae,ue,Re,we,je,St,zt,lt){if(B===Fi){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(F(i.BLEND),_=!0),B!==T_){if(B!==p||lt!==A){if((m!==os||v!==os)&&(i.blendEquation(i.FUNC_ADD),m=os,v=os),lt)switch(B){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.ONE,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,E=null,I=null,C=null,P.set(0,0,0),U=0,p=B,A=lt}return}Re=Re||Te,we=we||ae,je=je||ue,(Te!==m||Re!==v)&&(i.blendEquationSeparate(w[Te],w[Re]),m=Te,v=Re),(ae!==S||ue!==E||we!==I||je!==C)&&(i.blendFuncSeparate(R[ae],R[ue],R[we],R[je]),S=ae,E=ue,I=we,C=je),(St.equals(P)===!1||zt!==U)&&(i.blendColor(St.r,St.g,St.b,zt),P.copy(St),U=zt),p=B,A=!1}function Z(B,Te){B.side===en?he(i.CULL_FACE):F(i.CULL_FACE);let ae=B.side===on;Te&&(ae=!ae),V(ae),B.blending===js&&B.transparent===!1?y(Fi):y(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const ue=B.stencilWrite;a.setTest(ue),ue&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),le(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function q(B){B!==b_?(F(i.CULL_FACE),B!==O&&(B===ah?i.cullFace(i.BACK):B===E_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),O=B}function X(B){B!==j&&(ne&&i.lineWidth(B),j=B)}function le(B,Te,ae){B?(F(i.POLYGON_OFFSET_FILL),(Y!==Te||oe!==ae)&&(i.polygonOffset(Te,ae),Y=Te,oe=ae)):he(i.POLYGON_OFFSET_FILL)}function $(B){B?F(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function M(B){B===void 0&&(B=i.TEXTURE0+re-1),pe!==B&&(i.activeTexture(B),pe=B)}function x(B,Te,ae){ae===void 0&&(pe===null?ae=i.TEXTURE0+re-1:ae=pe);let ue=Se[ae];ue===void 0&&(ue={type:void 0,texture:void 0},Se[ae]=ue),(ue.type!==B||ue.texture!==Te)&&(pe!==ae&&(i.activeTexture(ae),pe=ae),i.bindTexture(B,Te||z[B]),ue.type=B,ue.texture=Te)}function N(){const B=Se[pe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(B){Ze.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ze.copy(B))}function Me(B){ce.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ce.copy(B))}function He(B,Te){let ae=c.get(Te);ae===void 0&&(ae=new WeakMap,c.set(Te,ae));let ue=ae.get(B);ue===void 0&&(ue=i.getUniformBlockIndex(Te,B.name),ae.set(B,ue))}function Xe(B,Te){const ue=c.get(Te).get(B);l.get(Te)!==ue&&(i.uniformBlockBinding(Te,ue,B.__bindingPointIndex),l.set(Te,ue))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,Se={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,S=null,E=null,v=null,I=null,C=null,P=new Fe(0,0,0),U=0,A=!1,b=null,O=null,j=null,Y=null,oe=null,Ze.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:he,bindFramebuffer:se,drawBuffers:ee,useProgram:ye,setBlending:y,setMaterial:Z,setFlipSided:V,setCullFace:q,setLineWidth:X,setPolygonOffset:le,setScissorTest:$,activeTexture:M,bindTexture:x,unbindTexture:N,compressedTexImage2D:W,compressedTexImage3D:Q,texImage2D:Ee,texImage3D:De,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:Be,texStorage3D:fe,texSubImage2D:K,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:ze,viewport:Me,reset:gt}}function Eb(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return f?new OffscreenCanvas(M,x):Zr("canvas")}function _(M,x,N){let W=1;const Q=$(M);if((Q.width>N||Q.height>N)&&(W=N/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const K=Math.floor(W*Q.width),ge=Math.floor(W*Q.height);u===void 0&&(u=g(K,ge));const de=x?g(K,ge):u;return de.width=K,de.height=ge,de.getContext("2d").drawImage(M,0,0,K,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+ge+")."),de}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function p(M){return M.generateMipmaps}function m(M){i.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(M,x,N,W,Q=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=x;if(x===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),x===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),x===i.RGBA){const ge=Q?da:Qe.getTransfer(W);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=ge===ut?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(M,x){let N;return M?x===null||x===ds||x===nr?N=i.DEPTH24_STENCIL8:x===Un?N=i.DEPTH32F_STENCIL8:x===Yr&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ds||x===nr?N=i.DEPTH_COMPONENT24:x===Un?N=i.DEPTH_COMPONENT32F:x===Yr&&(N=i.DEPTH_COMPONENT16),N}function I(M,x){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==tn&&M.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function C(M){const x=M.target;x.removeEventListener("dispose",C),U(x),x.isVideoTexture&&h.delete(x)}function P(M){const x=M.target;x.removeEventListener("dispose",P),b(x)}function U(M){const x=n.get(M);if(x.__webglInit===void 0)return;const N=M.source,W=d.get(N);if(W){const Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(M),Object.keys(W).length===0&&d.delete(N)}n.remove(M)}function A(M){const x=n.get(M);i.deleteTexture(x.__webglTexture);const N=M.source,W=d.get(N);delete W[x.__cacheKey],o.memory.textures--}function b(M){const x=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Q=0;Q<x.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=M.textures;for(let W=0,Q=N.length;W<Q;W++){const K=n.get(N[W]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(N[W])}n.remove(M)}let O=0;function j(){O=0}function Y(){const M=O;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),O+=1,M}function oe(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function re(M,x){const N=n.get(M);if(M.isVideoTexture&&X(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,M,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function ne(M,x){const N=n.get(M);if(M.version>0&&N.__version!==M.version){ce(N,M,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function ie(M,x){const N=n.get(M);if(M.version>0&&N.__version!==M.version){ce(N,M,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function G(M,x){const N=n.get(M);if(M.version>0&&N.__version!==M.version){D(N,M,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const pe={[tr]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},Se={[tn]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Ce={[o0]:i.NEVER,[d0]:i.ALWAYS,[a0]:i.LESS,[lp]:i.LEQUAL,[l0]:i.EQUAL,[h0]:i.GEQUAL,[c0]:i.GREATER,[u0]:i.NOTEQUAL};function Le(M,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===jo||x.magFilter===Rr||x.magFilter===fi||x.minFilter===It||x.minFilter===jo||x.minFilter===Rr||x.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,pe[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,pe[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,pe[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,Se[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,Se[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==Rr&&x.minFilter!==fi||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",C));const W=x.source;let Q=d.get(W);Q===void 0&&(Q={},d.set(W,Q));const K=oe(x);if(K!==M.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[K].usedTimes++;const ge=Q[M.__cacheKey];ge!==void 0&&(Q[M.__cacheKey].usedTimes--,ge.usedTimes===0&&A(x)),M.__cacheKey=K,M.__webglTexture=Q[K].texture}return N}function ce(M,x,N){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);const Q=Ze(M,x),K=x.source;t.bindTexture(W,M.__webglTexture,i.TEXTURE0+N);const ge=n.get(K);if(K.version!==ge.__version||Q===!0){t.activeTexture(i.TEXTURE0+N);const de=Qe.getPrimaries(Qe.workingColorSpace),xe=x.colorSpace===Li?null:Qe.getPrimaries(x.colorSpace),Be=x.colorSpace===Li||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let fe=_(x.image,!1,s.maxTextureSize);fe=le(x,fe);const Ee=r.convert(x.format,x.colorSpace),De=r.convert(x.type);let ze=E(x.internalFormat,Ee,De,x.colorSpace,x.isVideoTexture);Le(W,x);let Me;const He=x.mipmaps,Xe=x.isVideoTexture!==!0,gt=ge.__version===void 0||Q===!0,B=K.dataReady,Te=I(x,fe);if(x.isDepthTexture)ze=v(x.format===ir,x.type),gt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,ze,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,Ee,De,null));else if(x.isDataTexture)if(He.length>0){Xe&&gt&&t.texStorage2D(i.TEXTURE_2D,Te,ze,He[0].width,He[0].height);for(let ae=0,ue=He.length;ae<ue;ae++)Me=He[ae],Xe?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me.width,Me.height,Ee,De,Me.data):t.texImage2D(i.TEXTURE_2D,ae,ze,Me.width,Me.height,0,Ee,De,Me.data);x.generateMipmaps=!1}else Xe?(gt&&t.texStorage2D(i.TEXTURE_2D,Te,ze,fe.width,fe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Ee,De,fe.data)):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,Ee,De,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ze,He[0].width,He[0].height,fe.depth);for(let ae=0,ue=He.length;ae<ue;ae++)if(Me=He[ae],x.format!==bn)if(Ee!==null)if(Xe){if(B)if(x.layerUpdates.size>0){const Re=Qh(Me.width,Me.height,x.format,x.type);for(const we of x.layerUpdates){const je=Me.data.subarray(we*Re/Me.data.BYTES_PER_ELEMENT,(we+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,we,Me.width,Me.height,1,Ee,je)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,fe.depth,Ee,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,ze,Me.width,Me.height,fe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,fe.depth,Ee,De,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,ze,Me.width,Me.height,fe.depth,0,Ee,De,Me.data)}else{Xe&&gt&&t.texStorage2D(i.TEXTURE_2D,Te,ze,He[0].width,He[0].height);for(let ae=0,ue=He.length;ae<ue;ae++)Me=He[ae],x.format!==bn?Ee!==null?Xe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me.width,Me.height,Ee,De,Me.data):t.texImage2D(i.TEXTURE_2D,ae,ze,Me.width,Me.height,0,Ee,De,Me.data)}else if(x.isDataArrayTexture)if(Xe){if(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,ze,fe.width,fe.height,fe.depth),B)if(x.layerUpdates.size>0){const ae=Qh(fe.width,fe.height,x.format,x.type);for(const ue of x.layerUpdates){const Re=fe.data.subarray(ue*ae/fe.data.BYTES_PER_ELEMENT,(ue+1)*ae/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Ee,De,Re)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,De,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,Ee,De,fe.data);else if(x.isData3DTexture)Xe?(gt&&t.texStorage3D(i.TEXTURE_3D,Te,ze,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,De,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,Ee,De,fe.data);else if(x.isFramebufferTexture){if(gt)if(Xe)t.texStorage2D(i.TEXTURE_2D,Te,ze,fe.width,fe.height);else{let ae=fe.width,ue=fe.height;for(let Re=0;Re<Te;Re++)t.texImage2D(i.TEXTURE_2D,Re,ze,ae,ue,0,Ee,De,null),ae>>=1,ue>>=1}}else if(He.length>0){if(Xe&&gt){const ae=$(He[0]);t.texStorage2D(i.TEXTURE_2D,Te,ze,ae.width,ae.height)}for(let ae=0,ue=He.length;ae<ue;ae++)Me=He[ae],Xe?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ee,De,Me):t.texImage2D(i.TEXTURE_2D,ae,ze,Ee,De,Me);x.generateMipmaps=!1}else if(Xe){if(gt){const ae=$(fe);t.texStorage2D(i.TEXTURE_2D,Te,ze,ae.width,ae.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,De,fe)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,De,fe);p(x)&&m(W),ge.__version=K.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function D(M,x,N){if(x.image.length!==6)return;const W=Ze(M,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);const K=n.get(Q);if(Q.version!==K.__version||W===!0){t.activeTexture(i.TEXTURE0+N);const ge=Qe.getPrimaries(Qe.workingColorSpace),de=x.colorSpace===Li?null:Qe.getPrimaries(x.colorSpace),xe=x.colorSpace===Li||ge===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!Be&&!fe?Ee[ue]=_(x.image[ue],!0,s.maxCubemapSize):Ee[ue]=fe?x.image[ue].image:x.image[ue],Ee[ue]=le(x,Ee[ue]);const De=Ee[0],ze=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),He=E(x.internalFormat,ze,Me,x.colorSpace),Xe=x.isVideoTexture!==!0,gt=K.__version===void 0||W===!0,B=Q.dataReady;let Te=I(x,De);Le(i.TEXTURE_CUBE_MAP,x);let ae;if(Be){Xe&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,He,De.width,De.height);for(let ue=0;ue<6;ue++){ae=Ee[ue].mipmaps;for(let Re=0;Re<ae.length;Re++){const we=ae[Re];x.format!==bn?ze!==null?Xe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,we.width,we.height,ze,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,He,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,we.width,we.height,ze,Me,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,He,we.width,we.height,0,ze,Me,we.data)}}}else{if(ae=x.mipmaps,Xe&&gt){ae.length>0&&Te++;const ue=$(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,He,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){Xe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,ze,Me,Ee[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,Ee[ue].width,Ee[ue].height,0,ze,Me,Ee[ue].data);for(let Re=0;Re<ae.length;Re++){const je=ae[Re].image[ue].image;Xe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,je.width,je.height,ze,Me,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,He,je.width,je.height,0,ze,Me,je.data)}}else{Xe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,Me,Ee[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,ze,Me,Ee[ue]);for(let Re=0;Re<ae.length;Re++){const we=ae[Re];Xe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,ze,Me,we.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,He,ze,Me,we.image[ue])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),K.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function z(M,x,N,W,Q,K){const ge=r.convert(N.format,N.colorSpace),de=r.convert(N.type),xe=E(N.internalFormat,ge,de,N.colorSpace),Be=n.get(x),fe=n.get(N);if(fe.__renderTarget=x,!Be.__hasExternalTextures){const Ee=Math.max(1,x.width>>K),De=Math.max(1,x.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,xe,Ee,De,x.depth,0,ge,de,null):t.texImage2D(Q,K,xe,Ee,De,0,ge,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),q(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,fe.__webglTexture,0,V(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,fe.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(M,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){const W=x.depthTexture,Q=W&&W.isDepthTexture?W.type:null,K=v(x.stencilBuffer,Q),ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=V(x);q(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,K,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,M)}else{const W=x.textures;for(let Q=0;Q<W.length;Q++){const K=W[Q],ge=r.convert(K.format,K.colorSpace),de=r.convert(K.type),xe=E(K.internalFormat,ge,de,K.colorSpace),Be=V(x);N&&q(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,xe,x.width,x.height):q(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const Q=W.__webglTexture,K=V(x);if(x.depthTexture.format===Ys)q(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ir)q(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function se(M){const x=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=W}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");he(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),F(x.__webglDepthbuffer[W],M,!1);else{const Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),F(x.__webglDepthbuffer,M,!1);else{const W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(M,x,N){const W=n.get(M);x!==void 0&&z(W.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&se(M)}function ye(M){const x=M.texture,N=n.get(M),W=n.get(x);M.addEventListener("dispose",P);const Q=M.textures,K=M.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,o.memory.textures++),K){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let xe=0;xe<x.mipmaps.length;xe++)N.__webglFramebuffer[de][xe]=i.createFramebuffer()}else N.__webglFramebuffer[de]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[de]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ge)for(let de=0,xe=Q.length;de<xe;de++){const Be=n.get(Q[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&q(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const xe=Q[de];N.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const Be=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Ee=E(xe.internalFormat,Be,fe,xe.colorSpace,M.isXRRenderTarget===!0),De=V(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ee,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,N.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),F(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Le(i.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)z(N.__webglFramebuffer[de][xe],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else z(N.__webglFramebuffer[de],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let de=0,xe=Q.length;de<xe;de++){const Be=Q[de],fe=n.get(Be);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Le(i.TEXTURE_2D,Be),z(N.__webglFramebuffer,M,Be,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),p(Be)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(de=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,W.__webglTexture),Le(de,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)z(N.__webglFramebuffer[xe],M,x,i.COLOR_ATTACHMENT0,de,xe);else z(N.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,de,0);p(x)&&m(de),t.unbindTexture()}M.depthBuffer&&se(M)}function w(M){const x=M.textures;for(let N=0,W=x.length;N<W;N++){const Q=x[N];if(p(Q)){const K=S(M),ge=n.get(Q).__webglTexture;t.bindTexture(K,ge),m(K),t.unbindTexture()}}}const R=[],y=[];function Z(M){if(M.samples>0){if(q(M)===!1){const x=M.textures,N=M.width,W=M.height;let Q=i.COLOR_BUFFER_BIT;const K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(M),de=x.length>1;if(de)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const Be=n.get(x[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,N,W,0,0,N,W,Q,i.NEAREST),l===!0&&(R.length=0,y.length=0,R.push(i.COLOR_ATTACHMENT0+xe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(R.push(K),y.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const Be=n.get(x[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function V(M){return Math.min(s.maxSamples,M.samples)}function q(M){const x=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function X(M){const x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function le(M,x){const N=M.colorSpace,W=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==jt&&N!==Li&&(Qe.getTransfer(N)===ut?(W!==bn||Q!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function $(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=re,this.setTexture2DArray=ne,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=ee,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=z,this.useMultisampledRTT=q}function Tb(i,e){function t(n,s=Li){let r;const o=Qe.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===su)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zf)return i.BYTE;if(n===$f)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===nu)return i.INT;if(n===ds)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===to)return i.HALF_FLOAT;if(n===Qf)return i.ALPHA;if(n===ep)return i.RGB;if(n===bn)return i.RGBA;if(n===tp)return i.LUMINANCE;if(n===np)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===ou)return i.RED_INTEGER;if(n===ip)return i.RG;if(n===au)return i.RG_INTEGER;if(n===lu)return i.RGBA_INTEGER;if(n===Yo||n===qo||n===Ko||n===Zo)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Mc||n===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sp||n===bc||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zi({vertexShader:Ab,fragmentShader:wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cb extends Vi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Rb,p=t.getContextAttributes();let m=null,S=null;const E=[],v=[],I=new Oe;let C=null;const P=new Jt;P.viewport=new nt;const U=new Jt;U.viewport=new nt;const A=[P,U],b=new Ux;let O=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let D=E[ce];return D===void 0&&(D=new ul,E[ce]=D),D.getTargetRaySpace()},this.getControllerGrip=function(ce){let D=E[ce];return D===void 0&&(D=new ul,E[ce]=D),D.getGripSpace()},this.getHand=function(ce){let D=E[ce];return D===void 0&&(D=new ul,E[ce]=D),D.getHandSpace()};function Y(ce){const D=v.indexOf(ce.inputSource);if(D===-1)return;const z=E[D];z!==void 0&&(z.update(ce.inputSource,ce.frame,c||o),z.dispatchEvent({type:ce.type,data:ce.inputSource}))}function oe(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",re);for(let ce=0;ce<E.length;ce++){const D=v[ce];D!==null&&(v[ce]=null,E[ce].disconnect(D))}O=null,j=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,S=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,F=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=p.stencil?ir:Ys,F=p.stencil?nr:ds);const se={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new fs(d.textureWidth,d.textureHeight,{format:bn,type:xi,depthTexture:new Mp(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new fs(f.framebufferWidth,f.framebufferHeight,{format:bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(ce){for(let D=0;D<ce.removed.length;D++){const z=ce.removed[D],F=v.indexOf(z);F>=0&&(v[F]=null,E[F].disconnect(z))}for(let D=0;D<ce.added.length;D++){const z=ce.added[D];let F=v.indexOf(z);if(F===-1){for(let se=0;se<E.length;se++)if(se>=v.length){v.push(z),F=se;break}else if(v[se]===null){v[se]=z,F=se;break}if(F===-1)break}const he=E[F];he&&he.connect(z)}}const ne=new L,ie=new L;function G(ce,D,z){ne.setFromMatrixPosition(D.matrixWorld),ie.setFromMatrixPosition(z.matrixWorld);const F=ne.distanceTo(ie),he=D.projectionMatrix.elements,se=z.projectionMatrix.elements,ee=he[14]/(he[10]-1),ye=he[14]/(he[10]+1),w=(he[9]+1)/he[5],R=(he[9]-1)/he[5],y=(he[8]-1)/he[0],Z=(se[8]+1)/se[0],V=ee*y,q=ee*Z,X=F/(-y+Z),le=X*-y;if(D.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(le),ce.translateZ(X),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),he[10]===-1)ce.projectionMatrix.copy(D.projectionMatrix),ce.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const $=ee+X,M=ye+X,x=V-le,N=q+(F-le),W=w*ye/M*$,Q=R*ye/M*$;ce.projectionMatrix.makePerspective(x,N,W,Q,$,M),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function pe(ce,D){D===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(D.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let D=ce.near,z=ce.far;_.texture!==null&&(_.depthNear>0&&(D=_.depthNear),_.depthFar>0&&(z=_.depthFar)),b.near=U.near=P.near=D,b.far=U.far=P.far=z,(O!==b.near||j!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,j=b.far),P.layers.mask=ce.layers.mask|2,U.layers.mask=ce.layers.mask|4,b.layers.mask=P.layers.mask|U.layers.mask;const F=ce.parent,he=b.cameras;pe(b,F);for(let se=0;se<he.length;se++)pe(he[se],F);he.length===2?G(b,P,U):b.projectionMatrix.copy(P.projectionMatrix),Se(ce,b,F)};function Se(ce,D,z){z===null?ce.matrix.copy(D.matrixWorld):(ce.matrix.copy(z.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(D.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(D.projectionMatrix),ce.projectionMatrixInverse.copy(D.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=sr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Ce=null;function Le(ce,D){if(h=D.getViewerPose(c||o),g=D,h!==null){const z=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let F=!1;z.length!==b.cameras.length&&(b.cameras.length=0,F=!0);for(let ee=0;ee<z.length;ee++){const ye=z[ee];let w=null;if(f!==null)w=f.getViewport(ye);else{const y=u.getViewSubImage(d,ye);w=y.viewport,ee===0&&(e.setRenderTargetTextures(S,y.colorTexture,d.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(S))}let R=A[ee];R===void 0&&(R=new Jt,R.layers.enable(ee),R.viewport=new nt,A[ee]=R),R.matrix.fromArray(ye.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ye.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ee===0&&(b.matrix.copy(R.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),F===!0&&b.cameras.push(R)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const ee=u.getDepthInformation(z[0]);ee&&ee.isValid&&ee.texture&&_.init(e,ee,s.renderState)}}for(let z=0;z<E.length;z++){const F=v[z],he=E[z];F!==null&&he!==void 0&&he.update(F,D,c||o)}Ce&&Ce(ce,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const Ze=new Rp;Ze.setAnimationLoop(Le),this.setAnimationLoop=function(ce){Ce=ce},this.dispose=function(){}}}const Ji=new zn,Pb=new We;function Ib(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),E=S.envMap,v=S.envMapRotation;E&&(p.envMap.value=E,Ji.copy(v),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(Ji)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lb(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const v=E.program;n.uniformBlockBinding(S,v)}function c(S,E){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",p));const I=E.program;n.updateUBOMapping(S,I);const C=e.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){const E=u();S.__bindingPointIndex=E;const v=i.createBuffer(),I=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],v=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,P=v.length;C<P;C++){const U=Array.isArray(v[C])?v[C]:[v[C]];for(let A=0,b=U.length;A<b;A++){const O=U[A];if(f(O,C,A,I)===!0){const j=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let re=0;re<Y.length;re++){const ne=Y[re],ie=_(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,j+oe,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):(ne.toArray(O.__data,oe),oe+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,E,v,I){const C=S.value,P=E+"_"+v;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const U=I[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(S){const E=S.uniforms;let v=0;const I=16;for(let P=0,U=E.length;P<U;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,O=A.length;b<O;b++){const j=A[b],Y=Array.isArray(j.value)?j.value:[j.value];for(let oe=0,re=Y.length;oe<re;oe++){const ne=Y[oe],ie=_(ne),G=v%I,pe=G%ie.boundary,Se=G+pe;v+=pe,Se!==0&&I-Se<ie.storage&&(v+=I-Se),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=v,v+=ie.storage}}}const C=v%I;return C>0&&(v+=I-C),S.__size=v,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Db{constructor(e={}){const{canvas:t=C0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let I=!1,C=0,P=0,U=null,A=-1,b=null;const O=new nt,j=new nt;let Y=null;const oe=new Fe(0);let re=0,ne=t.width,ie=t.height,G=1,pe=null,Se=null;const Ce=new nt(0,0,ne,ie),Le=new nt(0,0,ne,ie);let Ze=!1;const ce=new mu;let D=!1,z=!1;this.transmissionResolutionScale=1;const F=new We,he=new We,se=new L,ee=new nt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return U===null?G:1}let y=n;function Z(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",we,!1),y===null){const k="webgl2";if(y=Z(k,T),y===null)throw Z(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let V,q,X,le,$,M,x,N,W,Q,K,ge,de,xe,Be,fe,Ee,De,ze,Me,He,Xe,gt,B;function Te(){V=new GM(y),V.init(),Xe=new Tb(y,V),q=new OM(y,V,e,Xe),X=new bb(y,V),q.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),le=new jM(y),$=new ub,M=new Eb(y,V,X,$,q,Xe,le),x=new BM(v),N=new VM(v),W=new Jx(y),gt=new NM(y,W),Q=new WM(y,W,le,gt),K=new qM(y,Q,W,le),ze=new YM(y,q,M),fe=new FM($),ge=new cb(v,x,N,V,q,gt,fe),de=new Ib(v,$),xe=new db,Be=new xb(V),De=new DM(v,x,N,X,K,f,l),Ee=new Mb(v,K,q),B=new Lb(y,le,q,X),Me=new UM(y,V,le),He=new XM(y,V,le),le.programs=ge.programs,v.capabilities=q,v.extensions=V,v.properties=$,v.renderLists=xe,v.shadowMap=Ee,v.state=X,v.info=le}Te();const ae=new Cb(v,y);this.xr=ae,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=V.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=V.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(ne,ie,!1))},this.getSize=function(T){return T.set(ne,ie)},this.setSize=function(T,k,J=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,ie=k,t.width=Math.floor(T*G),t.height=Math.floor(k*G),J===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(ne*G,ie*G).floor()},this.setDrawingBufferSize=function(T,k,J){ne=T,ie=k,G=J,t.width=Math.floor(T*J),t.height=Math.floor(k*J),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(Ce)},this.setViewport=function(T,k,J,te){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,k,J,te),X.viewport(O.copy(Ce).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,k,J,te){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,k,J,te),X.scissor(j.copy(Le).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){X.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){Se=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,J=!0){let te=0;if(T){let H=!1;if(U!==null){const me=U.texture.format;H=me===lu||me===au||me===ou}if(H){const me=U.texture.type,Ae=me===xi||me===ds||me===Yr||me===nr||me===iu||me===su,Pe=De.getClearColor(),Ie=De.getClearAlpha(),Ve=Pe.r,Ge=Pe.g,Ne=Pe.b;Ae?(g[0]=Ve,g[1]=Ge,g[2]=Ne,g[3]=Ie,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Ve,_[1]=Ge,_[2]=Ne,_[3]=Ie,y.clearBufferiv(y.COLOR,0,_))}else te|=y.COLOR_BUFFER_BIT}k&&(te|=y.DEPTH_BUFFER_BIT),J&&(te|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",we,!1),De.dispose(),xe.dispose(),Be.dispose(),$.dispose(),x.dispose(),N.dispose(),K.dispose(),gt.dispose(),B.dispose(),ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Eu),ae.removeEventListener("sessionend",Tu),Gi.stop()};function ue(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=le.autoReset,k=Ee.enabled,J=Ee.autoUpdate,te=Ee.needsUpdate,H=Ee.type;Te(),le.autoReset=T,Ee.enabled=k,Ee.autoUpdate=J,Ee.needsUpdate=te,Ee.type=H}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){const k=T.target;k.removeEventListener("dispose",je),St(k)}function St(T){zt(T),$.remove(T)}function zt(T){const k=$.get(T).programs;k!==void 0&&(k.forEach(function(J){ge.releaseProgram(J)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,J,te,H,me){k===null&&(k=ye);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,Pe=Op(T,k,J,te,H);X.setMaterial(te,Ae);let Ie=J.index,Ve=1;if(te.wireframe===!0){if(Ie=Q.getWireframeAttribute(J),Ie===void 0)return;Ve=2}const Ge=J.drawRange,Ne=J.attributes.position;let et=Ge.start*Ve,it=(Ge.start+Ge.count)*Ve;me!==null&&(et=Math.max(et,me.start*Ve),it=Math.min(it,(me.start+me.count)*Ve)),Ie!==null?(et=Math.max(et,0),it=Math.min(it,Ie.count)):Ne!=null&&(et=Math.max(et,0),it=Math.min(it,Ne.count));const At=it-et;if(At<0||At===1/0)return;gt.setup(H,te,Pe,J,Ie);let bt,tt=Me;if(Ie!==null&&(bt=W.get(Ie),tt=He,tt.setIndex(bt)),H.isMesh)te.wireframe===!0?(X.setLineWidth(te.wireframeLinewidth*R()),tt.setMode(y.LINES)):tt.setMode(y.TRIANGLES);else if(H.isLine){let Ue=te.linewidth;Ue===void 0&&(Ue=1),X.setLineWidth(Ue*R()),H.isLineSegments?tt.setMode(y.LINES):H.isLineLoop?tt.setMode(y.LINE_LOOP):tt.setMode(y.LINE_STRIP)}else H.isPoints?tt.setMode(y.POINTS):H.isSprite&&tt.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ue=H._multiDrawStarts,Ft=H._multiDrawCounts,st=H._multiDrawCount,An=Ie?W.get(Ie).bytesPerElement:1,gs=$.get(te).currentProgram.getUniforms();for(let an=0;an<st;an++)gs.setValue(y,"_gl_DrawID",an),tt.render(Ue[an]/An,Ft[an])}else if(H.isInstancedMesh)tt.renderInstances(et,At,H.count);else if(J.isInstancedBufferGeometry){const Ue=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ft=Math.min(J.instanceCount,Ue);tt.renderInstances(et,At,Ft)}else tt.render(et,At)};function lt(T,k,J){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,oo(T,k,J),T.side=_i,T.needsUpdate=!0,oo(T,k,J),T.side=en):oo(T,k,J)}this.compile=function(T,k,J=null){J===null&&(J=T),m=Be.get(J),m.init(k),E.push(m),J.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==J&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const te=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const Pe=me[Ae];lt(Pe,J,H),te.add(Pe)}else lt(me,J,H),te.add(me)}),m=E.pop(),te},this.compileAsync=function(T,k,J=null){const te=this.compile(T,k,J);return new Promise(H=>{function me(){if(te.forEach(function(Ae){$.get(Ae).currentProgram.isReady()&&te.delete(Ae)}),te.size===0){H(T);return}setTimeout(me,10)}V.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Tn=null;function Qn(T){Tn&&Tn(T)}function Eu(){Gi.stop()}function Tu(){Gi.start()}const Gi=new Rp;Gi.setAnimationLoop(Qn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){Tn=T,ae.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},ae.addEventListener("sessionstart",Eu),ae.addEventListener("sessionend",Tu),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,U),m=Be.get(T,E.length),m.init(k),E.push(m),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(he),z=this.localClippingEnabled,D=fe.init(this.clippingPlanes,z),p=xe.get(T,S.length),p.init(),S.push(p),ae.enabled===!0&&ae.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&La(me,k,-1/0,v.sortObjects)}La(T,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(pe,Se),w=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,w&&De.addToRenderList(p,T),this.info.render.frame++,D===!0&&fe.beginShadows();const J=m.state.shadowsArray;Ee.render(J,T,k),D===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=p.opaque,H=p.transmissive;if(m.setupLights(),k.isArrayCamera){const me=k.cameras;if(H.length>0)for(let Ae=0,Pe=me.length;Ae<Pe;Ae++){const Ie=me[Ae];wu(te,H,T,Ie)}w&&De.render(T);for(let Ae=0,Pe=me.length;Ae<Pe;Ae++){const Ie=me[Ae];Au(p,T,Ie,Ie.viewport)}}else H.length>0&&wu(te,H,T,k),w&&De.render(T),Au(p,T,k);U!==null&&P===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(v,T,k),gt.resetDefaultState(),A=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],D===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function La(T,k,J,te){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ce.intersectsSprite(T)){te&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Ae=K.update(T),Pe=T.material;Pe.visible&&p.push(T,Ae,Pe,J,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ce.intersectsObject(T))){const Ae=K.update(T),Pe=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ee.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ee.copy(Ae.boundingSphere.center)),ee.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(Pe)){const Ie=Ae.groups;for(let Ve=0,Ge=Ie.length;Ve<Ge;Ve++){const Ne=Ie[Ve],et=Pe[Ne.materialIndex];et&&et.visible&&p.push(T,Ae,et,J,ee.z,Ne)}}else Pe.visible&&p.push(T,Ae,Pe,J,ee.z,null)}}const me=T.children;for(let Ae=0,Pe=me.length;Ae<Pe;Ae++)La(me[Ae],k,J,te)}function Au(T,k,J,te){const H=T.opaque,me=T.transmissive,Ae=T.transparent;m.setupLightsView(J),D===!0&&fe.setGlobalState(v.clippingPlanes,J),te&&X.viewport(O.copy(te)),H.length>0&&ro(H,k,J),me.length>0&&ro(me,k,J),Ae.length>0&&ro(Ae,k,J),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function wu(T,k,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[te.id]===void 0&&(m.state.transmissionRenderTarget[te.id]=new fs(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?to:xi,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const me=m.state.transmissionRenderTarget[te.id],Ae=te.viewport||O;me.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(oe),re=v.getClearAlpha(),re<1&&v.setClearColor(16777215,.5),v.clear(),w&&De.render(J);const Ie=v.toneMapping;v.toneMapping=mi;const Ve=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),m.setupLightsView(te),D===!0&&fe.setGlobalState(v.clippingPlanes,te),ro(T,J,te),M.updateMultisampleRenderTarget(me),M.updateRenderTargetMipmap(me),V.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ne=0,et=k.length;Ne<et;Ne++){const it=k[Ne],At=it.object,bt=it.geometry,tt=it.material,Ue=it.group;if(tt.side===en&&At.layers.test(te.layers)){const Ft=tt.side;tt.side=on,tt.needsUpdate=!0,Ru(At,J,te,bt,tt,Ue),tt.side=Ft,tt.needsUpdate=!0,Ge=!0}}Ge===!0&&(M.updateMultisampleRenderTarget(me),M.updateRenderTargetMipmap(me))}v.setRenderTarget(Pe),v.setClearColor(oe,re),Ve!==void 0&&(te.viewport=Ve),v.toneMapping=Ie}function ro(T,k,J){const te=k.isScene===!0?k.overrideMaterial:null;for(let H=0,me=T.length;H<me;H++){const Ae=T[H],Pe=Ae.object,Ie=Ae.geometry,Ve=te===null?Ae.material:te,Ge=Ae.group;Pe.layers.test(J.layers)&&Ru(Pe,k,J,Ie,Ve,Ge)}}function Ru(T,k,J,te,H,me){T.onBeforeRender(v,k,J,te,H,me),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,k,J,te,T,me),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,v.renderBufferDirect(J,k,te,H,T,me),H.side=_i,H.needsUpdate=!0,v.renderBufferDirect(J,k,te,H,T,me),H.side=en):v.renderBufferDirect(J,k,te,H,T,me),T.onAfterRender(v,k,J,te,H,me)}function oo(T,k,J){k.isScene!==!0&&(k=ye);const te=$.get(T),H=m.state.lights,me=m.state.shadowsArray,Ae=H.state.version,Pe=ge.getParameters(T,H.state,me,k,J),Ie=ge.getProgramCacheKey(Pe);let Ve=te.programs;te.environment=T.isMeshStandardMaterial?k.environment:null,te.fog=k.fog,te.envMap=(T.isMeshStandardMaterial?N:x).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",je),Ve=new Map,te.programs=Ve);let Ge=Ve.get(Ie);if(Ge!==void 0){if(te.currentProgram===Ge&&te.lightsStateVersion===Ae)return Pu(T,Pe),Ge}else Pe.uniforms=ge.getUniforms(T),T.onBeforeCompile(Pe,v),Ge=ge.acquireProgram(Pe,Ie),Ve.set(Ie,Ge),te.uniforms=Pe.uniforms;const Ne=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=fe.uniform),Pu(T,Pe),te.needsLights=Bp(T),te.lightsStateVersion=Ae,te.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=Ge,te.uniformsList=null,Ge}function Cu(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Jo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Pu(T,k){const J=$.get(T);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Op(T,k,J,te,H){k.isScene!==!0&&(k=ye),M.resetTextureUnits();const me=k.fog,Ae=te.isMeshStandardMaterial?k.environment:null,Pe=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:jt,Ie=(te.isMeshStandardMaterial?N:x).get(te.envMap||Ae),Ve=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ne=!!J.morphAttributes.position,et=!!J.morphAttributes.normal,it=!!J.morphAttributes.color;let At=mi;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=v.toneMapping);const bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tt=bt!==void 0?bt.length:0,Ue=$.get(te),Ft=m.state.lights;if(D===!0&&(z===!0||T!==b)){const Yt=T===b&&te.id===A;fe.setState(te,T,Yt)}let st=!1;te.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ft.state.version||Ue.outputColorSpace!==Pe||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==Ie||te.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==Ge||Ue.morphTargets!==Ne||Ue.morphNormals!==et||Ue.morphColors!==it||Ue.toneMapping!==At||Ue.morphTargetsCount!==tt)&&(st=!0):(st=!0,Ue.__version=te.version);let An=Ue.currentProgram;st===!0&&(An=oo(te,k,H));let gs=!1,an=!1,fr=!1;const vt=An.getUniforms(),mn=Ue.uniforms;if(X.useProgram(An.program)&&(gs=!0,an=!0,fr=!0),te.id!==A&&(A=te.id,an=!0),gs||b!==T){X.buffers.depth.getReversed()?(F.copy(T.projectionMatrix),I0(F),L0(F),vt.setValue(y,"projectionMatrix",F)):vt.setValue(y,"projectionMatrix",T.projectionMatrix),vt.setValue(y,"viewMatrix",T.matrixWorldInverse);const sn=vt.map.cameraPosition;sn!==void 0&&sn.setValue(y,se.setFromMatrixPosition(T.matrixWorld)),q.logarithmicDepthBuffer&&vt.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&vt.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,an=!0,fr=!0)}if(H.isSkinnedMesh){vt.setOptional(y,H,"bindMatrix"),vt.setOptional(y,H,"bindMatrixInverse");const Yt=H.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),vt.setValue(y,"boneTexture",Yt.boneTexture,M))}H.isBatchedMesh&&(vt.setOptional(y,H,"batchingTexture"),vt.setValue(y,"batchingTexture",H._matricesTexture,M),vt.setOptional(y,H,"batchingIdTexture"),vt.setValue(y,"batchingIdTexture",H._indirectTexture,M),vt.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(y,"batchingColorTexture",H._colorsTexture,M));const gn=J.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ze.update(H,J,An),(an||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,vt.setValue(y,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(mn.envMap.value=Ie,mn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&k.environment!==null&&(mn.envMapIntensity.value=k.environmentIntensity),an&&(vt.setValue(y,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Fp(mn,fr),me&&te.fog===!0&&de.refreshFogUniforms(mn,me),de.refreshMaterialUniforms(mn,te,G,ie,m.state.transmissionRenderTarget[T.id]),Jo.upload(y,Cu(Ue),mn,M)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Jo.upload(y,Cu(Ue),mn,M),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&vt.setValue(y,"center",H.center),vt.setValue(y,"modelViewMatrix",H.modelViewMatrix),vt.setValue(y,"normalMatrix",H.normalMatrix),vt.setValue(y,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Yt=te.uniformsGroups;for(let sn=0,Da=Yt.length;sn<Da;sn++){const Wi=Yt[sn];B.update(Wi,An),B.bind(Wi,An)}}return An}function Fp(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Bp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,k,J){$.get(T.texture).__webglTexture=k,$.get(T.depthTexture).__webglTexture=J;const te=$.get(T);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const J=$.get(T);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const zp=y.createFramebuffer();this.setRenderTarget=function(T,k=0,J=0){U=T,C=k,P=J;let te=!0,H=null,me=!1,Ae=!1;if(T){const Ie=$.get(T);if(Ie.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(y.FRAMEBUFFER,null),te=!1;else if(Ie.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Ie.__hasExternalTextures)M.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Ie.__boundDepthTexture!==Ne){if(Ne!==null&&$.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Ge=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?H=Ge[k][J]:H=Ge[k],me=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?H=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[J]:H=Ge,O.copy(T.viewport),j.copy(T.scissor),Y=T.scissorTest}else O.copy(Ce).multiplyScalar(G).floor(),j.copy(Le).multiplyScalar(G).floor(),Y=Ze;if(J!==0&&(H=zp),X.bindFramebuffer(y.FRAMEBUFFER,H)&&te&&X.drawBuffers(T,H),X.viewport(O),X.scissor(j),X.setScissorTest(Y),me){const Ie=$.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,J)}else if(Ae){const Ie=$.get(T.texture),Ve=k;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ie.__webglTexture,J,Ve)}else if(T!==null&&J!==0){const Ie=$.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ie.__webglTexture,J)}A=-1},this.readRenderTargetPixels=function(T,k,J,te,H,me,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){X.bindFramebuffer(y.FRAMEBUFFER,Pe);try{const Ie=T.texture,Ve=Ie.format,Ge=Ie.type;if(!q.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-te&&J>=0&&J<=T.height-H&&y.readPixels(k,J,te,H,Xe.convert(Ve),Xe.convert(Ge),me)}finally{const Ie=U!==null?$.get(U).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,k,J,te,H,me,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){const Ie=T.texture,Ve=Ie.format,Ge=Ie.type;if(!q.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-te&&J>=0&&J<=T.height-H){X.bindFramebuffer(y.FRAMEBUFFER,Pe);const Ne=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ne),y.bufferData(y.PIXEL_PACK_BUFFER,me.byteLength,y.STREAM_READ),y.readPixels(k,J,te,H,Xe.convert(Ve),Xe.convert(Ge),0);const et=U!==null?$.get(U).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,et);const it=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await P0(y,it,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ne),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,me),y.deleteBuffer(Ne),y.deleteSync(it),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,J=0){T.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const te=Math.pow(2,-J),H=Math.floor(T.image.width*te),me=Math.floor(T.image.height*te),Ae=k!==null?k.x:0,Pe=k!==null?k.y:0;M.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,J,0,0,Ae,Pe,H,me),X.unbindTexture()};const kp=y.createFramebuffer(),Hp=y.createFramebuffer();this.copyTextureToTexture=function(T,k,J=null,te=null,H=0,me=null){T.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,T=arguments[1],k=arguments[2],me=arguments[3]||0,J=null),me===null&&(H!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=H,H=0):me=0);let Ae,Pe,Ie,Ve,Ge,Ne,et,it,At;const bt=T.isCompressedTexture?T.mipmaps[me]:T.image;if(J!==null)Ae=J.max.x-J.min.x,Pe=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,Ge=J.min.y,Ne=J.isBox3?J.min.z:0;else{const gn=Math.pow(2,-H);Ae=Math.floor(bt.width*gn),Pe=Math.floor(bt.height*gn),T.isDataArrayTexture?Ie=bt.depth:T.isData3DTexture?Ie=Math.floor(bt.depth*gn):Ie=1,Ve=0,Ge=0,Ne=0}te!==null?(et=te.x,it=te.y,At=te.z):(et=0,it=0,At=0);const tt=Xe.convert(k.format),Ue=Xe.convert(k.type);let Ft;k.isData3DTexture?(M.setTexture3D(k,0),Ft=y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(M.setTexture2DArray(k,0),Ft=y.TEXTURE_2D_ARRAY):(M.setTexture2D(k,0),Ft=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,k.unpackAlignment);const st=y.getParameter(y.UNPACK_ROW_LENGTH),An=y.getParameter(y.UNPACK_IMAGE_HEIGHT),gs=y.getParameter(y.UNPACK_SKIP_PIXELS),an=y.getParameter(y.UNPACK_SKIP_ROWS),fr=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,bt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,bt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ne);const vt=T.isDataArrayTexture||T.isData3DTexture,mn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const gn=$.get(T),Yt=$.get(k),sn=$.get(gn.__renderTarget),Da=$.get(Yt.__renderTarget);X.bindFramebuffer(y.READ_FRAMEBUFFER,sn.__webglFramebuffer),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let Wi=0;Wi<Ie;Wi++)vt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,$.get(T).__webglTexture,H,Ne+Wi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,$.get(k).__webglTexture,me,At+Wi)),y.blitFramebuffer(Ve,Ge,Ae,Pe,et,it,Ae,Pe,y.DEPTH_BUFFER_BIT,y.NEAREST);X.bindFramebuffer(y.READ_FRAMEBUFFER,null),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||$.has(T)){const gn=$.get(T),Yt=$.get(k);X.bindFramebuffer(y.READ_FRAMEBUFFER,kp),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,Hp);for(let sn=0;sn<Ie;sn++)vt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,gn.__webglTexture,H,Ne+sn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,gn.__webglTexture,H),mn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Yt.__webglTexture,me,At+sn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Yt.__webglTexture,me),H!==0?y.blitFramebuffer(Ve,Ge,Ae,Pe,et,it,Ae,Pe,y.COLOR_BUFFER_BIT,y.NEAREST):mn?y.copyTexSubImage3D(Ft,me,et,it,At+sn,Ve,Ge,Ae,Pe):y.copyTexSubImage2D(Ft,me,et,it,Ve,Ge,Ae,Pe);X.bindFramebuffer(y.READ_FRAMEBUFFER,null),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else mn?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(Ft,me,et,it,At,Ae,Pe,Ie,tt,Ue,bt.data):k.isCompressedArrayTexture?y.compressedTexSubImage3D(Ft,me,et,it,At,Ae,Pe,Ie,tt,bt.data):y.texSubImage3D(Ft,me,et,it,At,Ae,Pe,Ie,tt,Ue,bt):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,me,et,it,Ae,Pe,tt,Ue,bt.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,me,et,it,bt.width,bt.height,tt,bt.data):y.texSubImage2D(y.TEXTURE_2D,me,et,it,Ae,Pe,tt,Ue,bt);y.pixelStorei(y.UNPACK_ROW_LENGTH,st),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,An),y.pixelStorei(y.UNPACK_SKIP_PIXELS,gs),y.pixelStorei(y.UNPACK_SKIP_ROWS,an),y.pixelStorei(y.UNPACK_SKIP_IMAGES,fr),me===0&&k.generateMipmaps&&y.generateMipmap(Ft),X.unbindTexture()},this.copyTextureToTexture3D=function(T,k,J=null,te=null,H=0){return T.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,J,te,H)},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){C=0,P=0,U=null,X.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Ed={type:"change"},bu={type:"start"},Dp={type:"end"},Bo=new cr,Td=new Ii,Nb=Math.cos(70*cp.DEG2RAD),Ct=new L,rn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6;class Ub extends wp{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Mt,this._lastTargetPosition=new L,this._quat=new Mt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jh,this._sphericalDelta=new Jh,this._scale=1,this._panOffset=new L,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new L,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fb.bind(this),this._onPointerDown=Ob.bind(this),this._onPointerUp=Bb.bind(this),this._onContextMenu=Xb.bind(this),this._onMouseWheel=Hb.bind(this),this._onKeyDown=Vb.bind(this),this._onTouchStart=Gb.bind(this),this._onTouchMove=Wb.bind(this),this._onMouseDown=zb.bind(this),this._onMouseMove=kb.bind(this),this._interceptControlDown=jb.bind(this),this._interceptControlUp=Yb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ed),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<Nb?this.object.lookAt(this.target):(Td.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(Td,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(Ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ob(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dp),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ht.DOLLY;break;case Xs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}break;case Xs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(bu)}function kb(i){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hb(i){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(i.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dp))}function Vb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Gb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ht.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ht.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(bu)}function Wb(i){switch(this._trackPointer(i),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ht.NONE}}function Xb(i){this.enabled!==!1&&i.preventDefault()}function jb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Tl=new WeakMap;class qb extends ms{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new _a(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt,n).catch(n)}decodeDracoFile(e,t,n,s,r=jt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Tl.has(e)){const l=Tl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Tl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Dt;e.index&&t.setIndex(new Bt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new Bt(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;const n=new Fe;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Qe.toWorkingColorSpace(n,Tt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new _a(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Kb.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Kb(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let S,E;if(c.useUniqueIDs)E=h[p],S=a.GetAttributeByUniqueId(d,E);else{if(E=a.GetAttributeId(d,o[h[p]]),E===-1)continue;S=a.GetAttribute(d,E)}const v=s(o,a,d,p,m,S);p==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,p,_,m);const S=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:S,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Qi=new Ap,Vt=new L,wi=new L,yt=new Mt,Ad={X:new L(1,0,0),Y:new L(0,1,0),Z:new L(0,0,1)},Al={type:"change"},wd={type:"mouseDown",mode:null},Rd={type:"mouseUp",mode:null},Cd={type:"objectChange"};class Zb extends wp{constructor(e,t=null){super(void 0,t);const n=new nE(this);this._root=n;const s=new iE;this._gizmo=s,n.add(s);const r=new sE;this._plane=r,n.add(r);const o=this;function a(E,v){let I=v;Object.defineProperty(o,E,{get:function(){return I!==void 0?I:v},set:function(C){I!==C&&(I=C,r[E]=C,s[E]=C,o.dispatchEvent({type:E+"-changed",value:C}),o.dispatchEvent(Al))}}),o[E]=v,r[E]=v,s[E]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new L,c=new L,h=new Mt,u=new Mt,d=new L,f=new Mt,g=new L,_=new L,p=new L,m=0,S=new L;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",_),a("rotationAxis",p),a("rotationAngle",m),a("eye",S),this._offset=new L,this._startNorm=new L,this._endNorm=new L,this._cameraScale=new L,this._parentPosition=new L,this._parentQuaternion=new Mt,this._parentQuaternionInv=new Mt,this._parentScale=new L,this._worldScaleStart=new L,this._worldQuaternionInv=new Mt,this._worldScale=new L,this._positionStart=new L,this._quaternionStart=new Mt,this._scaleStart=new L,this._getPointer=$b.bind(this),this._onPointerDown=Qb.bind(this),this._onPointerHover=Jb.bind(this),this._onPointerMove=eE.bind(this),this._onPointerUp=tE.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Qi.setFromCamera(e,this.camera);const t=wl(this._gizmo.picker[this.mode],Qi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Qi.setFromCamera(e,this.camera);const t=wl(this._plane,Qi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,wd.mode=this.mode,this.dispatchEvent(wd)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Qi.setFromCamera(e,this.camera);const o=wl(this._plane,Qi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(yt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Vt.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Vt.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),wi.set(a,a,a)}else Vt.copy(this.pointStart),wi.copy(this.pointEnd),Vt.applyQuaternion(this._worldQuaternionInv),wi.applyQuaternion(this._worldQuaternionInv),wi.divide(Vt),t.search("X")===-1&&(wi.x=1),t.search("Y")===-1&&(wi.y=1),t.search("Z")===-1&&(wi.z=1);s.scale.copy(this._scaleStart).multiply(wi),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Vt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Vt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Ad[t]),Vt.copy(Ad[t]),r==="local"&&Vt.applyQuaternion(this.worldQuaternion),Vt.cross(this.eye),Vt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Vt.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(yt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(yt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Al),this.dispatchEvent(Cd)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Rd.mode=this.mode,this.dispatchEvent(Rd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Al),this.dispatchEvent(Cd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Qi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function $b(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Jb(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Qb(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function eE(i){this.enabled&&this.pointerMove(this._getPointer(i))}function tE(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function wl(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const zo=new zn,dt=new L(0,1,0),Pd=new L(0,0,0),Id=new We,ko=new Mt,Qo=new Mt,Vn=new L,Ld=new We,Pr=new L(1,0,0),ss=new L(0,1,0),Ir=new L(0,0,1),Ho=new L,Er=new L,Tr=new L;class nE extends pt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class iE extends pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new pn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new no({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const u=e.clone();u.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const _=new Pt(0,.04,.1,12);_.translate(0,.05,0);const p=new Et(.08,.08,.08);p.translate(0,.04,0);const m=new Dt;m.setAttribute("position",new mt([0,0,0,1,0,0],3));const S=new Pt(.0075,.0075,.5,3);S.translate(0,.25,0);function E(re,ne){const ie=new di(re,.0075,3,64,ne*Math.PI*2);return ie.rotateY(Math.PI/2),ie.rotateX(Math.PI/2),ie}function v(){const re=new Dt;return re.setAttribute("position",new mt([0,0,0,1,1,1],3)),re}const I={X:[[new ve(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new ve(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new ve(S,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ve(_,o),[0,.5,0]],[new ve(_,o),[0,-.5,0],[Math.PI,0,0]],[new ve(S,o)]],Z:[[new ve(_,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ve(S,a),null,[Math.PI/2,0,0]]],XYZ:[[new ve(new Fs(.1,0),u.clone()),[0,0,0]]],XY:[[new ve(new Et(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new ve(new Et(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new Et(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new ve(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new Pt(.2,0,.6,4),n),[0,.3,0]],[new ve(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ve(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ve(new Fs(.2,0),n)]],XY:[[new ve(new Et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ve(new Et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new Et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new ve(new Fs(.01,2),s),null,null,null,"helper"]],END:[[new ve(new Fs(.01,2),s),null,null,null,"helper"]],DELTA:[[new In(v(),s),null,null,null,"helper"]],X:[[new In(m,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new In(m,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new In(m,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},U={XYZE:[[new ve(E(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ve(E(.5,.5),r)]],Y:[[new ve(E(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ve(E(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ve(E(.75,1),d),null,[0,Math.PI/2,0]]]},A={AXIS:[[new In(m,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new ve(new $r(.25,10,8),n)]],X:[[new ve(new di(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ve(new di(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ve(new di(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ve(new di(.75,.1,2,24),n)]]},O={X:[[new ve(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new ve(S,r),[0,0,0],[0,0,-Math.PI/2]],[new ve(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ve(p,o),[0,.5,0]],[new ve(S,o)],[new ve(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ve(p,a),[0,0,.5],[Math.PI/2,0,0]],[new ve(S,a),[0,0,0],[Math.PI/2,0,0]],[new ve(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ve(new Et(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ve(new Et(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new Et(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new Et(.1,.1,.1),u.clone())]]},j={X:[[new ve(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ve(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ve(new Pt(.2,0,.6,4),n),[0,.3,0]],[new ve(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ve(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ve(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ve(new Et(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ve(new Et(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ve(new Et(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ve(new Et(.2,.2,.2),n),[0,0,0]]]},Y={X:[[new In(m,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new In(m,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new In(m,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function oe(re){const ne=new pt;for(const ie in re)for(let G=re[ie].length;G--;){const pe=re[ie][G][0].clone(),Se=re[ie][G][1],Ce=re[ie][G][2],Le=re[ie][G][3],Ze=re[ie][G][4];pe.name=ie,pe.tag=Ze,Se&&pe.position.set(Se[0],Se[1],Se[2]),Ce&&pe.rotation.set(Ce[0],Ce[1],Ce[2]),Le&&pe.scale.set(Le[0],Le[1],Le[2]),pe.updateMatrix();const ce=pe.geometry.clone();ce.applyMatrix4(pe.matrix),pe.geometry=ce,pe.renderOrder=1/0,pe.position.set(0,0,0),pe.rotation.set(0,0,0),pe.scale.set(1,1,1),ne.add(pe)}return ne}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=oe(I)),this.add(this.gizmo.rotate=oe(U)),this.add(this.gizmo.scale=oe(O)),this.add(this.picker.translate=oe(C)),this.add(this.picker.rotate=oe(b)),this.add(this.picker.scale=oe(j)),this.add(this.helper.translate=oe(P)),this.add(this.helper.rotate=oe(A)),this.add(this.helper.scale=oe(Y)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Qo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(yt.setFromEuler(zo.set(0,0,0)),o.quaternion.copy(n).multiply(yt),Math.abs(dt.copy(Pr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(yt.setFromEuler(zo.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(yt),Math.abs(dt.copy(ss).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(yt.setFromEuler(zo.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(yt),Math.abs(dt.copy(Ir).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(yt.setFromEuler(zo.set(0,Math.PI/2,0)),dt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Id.lookAt(Pd,dt,ss)),o.quaternion.multiply(yt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Vt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Vt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Vt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(dt.copy(Pr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(dt.copy(ss).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(dt.copy(Ir).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(dt.copy(Ir).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(dt.copy(Pr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(dt.copy(ss).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ko.copy(n),dt.copy(this.eye).applyQuaternion(yt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Id.lookAt(this.eye,Pd,ss)),o.name==="X"&&(yt.setFromAxisAngle(Pr,Math.atan2(-dt.y,dt.z)),yt.multiplyQuaternions(ko,yt),o.quaternion.copy(yt)),o.name==="Y"&&(yt.setFromAxisAngle(ss,Math.atan2(dt.x,dt.z)),yt.multiplyQuaternions(ko,yt),o.quaternion.copy(yt)),o.name==="Z"&&(yt.setFromAxisAngle(Ir,Math.atan2(dt.y,dt.x)),yt.multiplyQuaternions(ko,yt),o.quaternion.copy(yt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class sE extends ve{constructor(){super(new dn(1e5,1e5,2,2),new pn({visible:!1,wireframe:!0,side:en,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ho.copy(Pr).applyQuaternion(t==="local"?this.worldQuaternion:Qo),Er.copy(ss).applyQuaternion(t==="local"?this.worldQuaternion:Qo),Tr.copy(Ir).applyQuaternion(t==="local"?this.worldQuaternion:Qo),dt.copy(Er),this.mode){case"translate":case"scale":switch(this.axis){case"X":dt.copy(this.eye).cross(Ho),Vn.copy(Ho).cross(dt);break;case"Y":dt.copy(this.eye).cross(Er),Vn.copy(Er).cross(dt);break;case"Z":dt.copy(this.eye).cross(Tr),Vn.copy(Tr).cross(dt);break;case"XY":Vn.copy(Tr);break;case"YZ":Vn.copy(Ho);break;case"XZ":dt.copy(Tr),Vn.copy(Er);break;case"XYZ":case"E":Vn.set(0,0,0);break}break;case"rotate":default:Vn.set(0,0,0)}Vn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ld.lookAt(Vt.set(0,0,0),Vn,dt),this.quaternion.setFromRotationMatrix(Ld)),super.updateMatrixWorld(e)}}function Dd(i,e){if(e===n0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ac||e===op){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ac)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Nd extends ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new bE(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=kr.extractUrlBase(e);o=kr.resolveURL(c,this.path)}else o=kr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _a(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Np){try{o[Je.KHR_BINARY_GLTF]=new EE(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new FE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new aE;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new TE(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new AE;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new wE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function rE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oE{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tp(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ix(h),c.distance=u;break;case"spot":c=new Cx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class aE{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,n){const s=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}}class lE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class cE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}}class uE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class dE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class fE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class pE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class mE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class gE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}}class _E{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class xE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class vE{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yE{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ME{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class SE{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class bE{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new We,p=new L,m=new Mt,S=new L(1,1,1),E=new cx(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),E.setMatrixAt(v,_.compose(p,m,S));for(const v in l)if(v==="_COLOR_0"){const I=l[v];E.instanceColor=new Rc(I.array,I.itemSize,I.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);pt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Np="glTF",Ar=12,Ud={JSON:1313821514,BIN:5130562};class EE{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Np)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ar,r=new DataView(e,Ar);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ud.JSON){const c=new Uint8Array(e,Ar+o,a);this.content=n.decode(c)}else if(l===Ud.BIN){const c=Ar+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Nc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Nc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Zs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(f)},a,c,jt,d)})})}}class AE{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wE{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Up extends io{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,S=1-p,E=m-d+u;for(let v=0;v!==a;v++){const I=o[_+v+a],C=o[_+v+l]*h,P=o[g+v+a],U=o[g+v]*h;r[v]=S*I+E*C+p*P+m*U}return r}}const RE=new Mt;class CE extends Up{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return RE.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Od={9728:tn,9729:It,9984:Kf,9985:jo,9986:Rr,9987:fi},Fd={33071:Di,33648:ua,10497:tr},Rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PE={CUBICSPLINE:void 0,LINEAR:Kr,STEP:qr},Cl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ks({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function es(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function DE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NE(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pl(t.attributes):e=i.indices+":"+Pl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pl(i.targets[n]);return e}function Pl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Uc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function UE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const OE=new We;class FE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ic(this.options.manager):this.textureLoader=new Nx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _a(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return es(r,a,s),ci(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(kr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Rl[s.type],a=Zs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Bt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Rl[s.type],c=Zs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let E=t.cache.get(S);E||(_=new c(a,m*f,s.count*f/h),E=new sx(_,f/h),t.cache.add(S,E)),p=new fu(E,l,d%f/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new Bt(_,l,g);if(s.sparse!==void 0){const m=Rl.SCALAR,S=Zs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,I=new S(o[1],E,s.sparse.count*m),C=new c(o[2],v,s.sparse.count*l);a!==null&&(p=new Bt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let P=0,U=I.length;P<U;P++){const A=I[P];if(p.setX(A,C[P*l]),l>=2&&p.setY(A,C[P*l+1]),l>=3&&p.setZ(A,C[P*l+2]),l>=4&&p.setW(A,C[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Od[d.magFilter]||It,h.minFilter=Od[d.minFilter]||fi,h.wrapS=Fd[d.wrapS]||tr,h.wrapT=Fd[d.wrapT]||tr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==It,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Lt(_);p.needsUpdate=!0,d(p)}),t.load(kr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ci(u,o),u.userData.mimeType=o.mimeType||UE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yp,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new no,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ks}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const u=s[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=en);const h=r.alphaMode||Cl.OPAQUE;if(h===Cl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Cl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==pn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==pn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==pn){const u=r.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&o!==pn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&es(s,u,r),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=NE(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bd(new Dt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?IE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const S=c[f];if(p.mode===xn.TRIANGLES||p.mode===xn.TRIANGLE_STRIP||p.mode===xn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ox(_,S):new ve(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===xn.TRIANGLE_STRIP?m.geometry=Dd(m.geometry,op):p.mode===xn.TRIANGLE_FAN&&(m.geometry=Dd(m.geometry,Ac));else if(p.mode===xn.LINES)m=new gu(_,S);else if(p.mode===xn.LINE_STRIP)m=new In(_,S);else if(p.mode===xn.LINE_LOOP)m=new dx(_,S);else if(p.mode===xn.POINTS)m=new fx(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&DE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ci(m,r),p.extensions&&es(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&es(s,u[0],r),u[0];const d=new ls;r.extensions&&es(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(cp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new vu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let S=0,E=d.length;S<E;S++){const v=d[S],I=f[S],C=g[S],P=_[S],U=p[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const A=n._createAnimationTracks(v,I,C,P,U);if(A)for(let b=0;b<A.length;b++)m.push(A[b])}return new Pc(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,OE)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new xp:c.length>1?h=new ls:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ci(h,r),r.extensions&&es(n,h,r),r.matrix!==void 0){const u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ls;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&es(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Yn||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ri[r.path]===Ri.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ri[r.path]){case Ri.weights:c=or;break;case Ri.rotation:c=ar;break;case Ri.position:case Ri.scale:c=lr;break;default:switch(n.itemSize){case 1:c=or;break;case 2:case 3:default:c=lr;break}break}const h=s.interpolation!==void 0?PE[s.interpolation]:Kr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ri[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Uc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ar?CE:Up;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function BE(i,e,t){const n=e.attributes,s=new yi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Uc(Zs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Uc(Zs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Bd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Nc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ci(i,e),BE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?LE(i,e.targets,t):i})}const zE={class:"view-helper",ref:"viewHelper"},kE={class:"view-helper-container"},HE={class:"transform-controls"},VE={class:"section0"},GE=["value"],WE={class:"section1"},XE={__name:"Scene",props:{sceneObjects:{type:Array,default:()=>[]},selectedObjectId:{type:[String,Number],default:null}},emits:["object-selected","object-created","object-updated","object-deleted","objects-cleared","confirm"],setup(i,{emit:e}){const t=yn(null),n=yn("translate"),s=yn(null),r=i,o=e;let a,l,c,h,u,d,f,g,_,p=null;const m=eu(()=>(console.log("场景中所有素材",r.sceneObjects),r.sceneObjects.filter(D=>!(D.id.toString().includes("recognition_image")||D.name==="识别图"||D.type==="recognition_image")).map(D=>({id:D.id,name:D.name||"未命名素材"})))),S=()=>{a=new ix,a.background=new Fe(15067371),d=new Ap,f=new Oe,l=new Jt(75,t.value.clientWidth/t.value.clientHeight,.1,1e3),l.position.set(0,2.8,6),l.lookAt(0,0,0),c=new Db({antialias:!0,alpha:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1}),c.setSize(t.value.clientWidth,t.value.clientHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=jf,c.toneMapping=mi,c.toneMappingExposure=1,c.outputColorSpace=Tt,t.value.appendChild(c.domElement),h=new Ub(l,c.domElement),u=new Zb(l,c.domElement),u.setSize(1),console.log("初始化TransformControls",u),u.setTranslationSnap(.05),u.setRotationSnap(Math.PI/24),u.setScaleSnap(.05);const D=u.getHelper();D&&(D.visible=!1,console.log("TransformControls helper已创建但暂时隐藏")),console.log("TransformControls初始化完成"),g=new Kx(20,40,3355443,3355443),a.add(g),_=new Zx(5),a.add(_);const z=new Dx(13421772,1);a.add(z);const F=new wx(8432383,5059353,1);a.add(F);const he=new Tp(16777215,.5);he.position.set(0,80,0),he.castShadow=!0,he.shadow.mapSize.width=2048,he.shadow.mapSize.height=2048,he.shadow.camera.near=.5,he.shadow.camera.far=150,a.add(he),u.addEventListener("mouseDown",()=>{h.enabled=!1}),u.addEventListener("mouseUp",()=>{h.enabled=!0}),u.addEventListener("dragging-changed",se=>{var ee,ye,w,R;if(h.enabled=!se.value,!se.value&&p){const y=(ee=p.userData)==null?void 0:ee.type,Z={id:(ye=p.userData)==null?void 0:ye.id,position:{x:Number(p.position.x.toFixed(2)),y:Number(p.position.y.toFixed(2)),z:Number(p.position.z.toFixed(2))},rotation:{x:Number((p.rotation.x*180/Math.PI).toFixed(1)),y:Number(y==="pic"||y==="video"?(-p.rotation.z*180/Math.PI).toFixed(1):(-p.rotation.y*180/Math.PI).toFixed(1)),z:Number(y==="pic"||y==="video"?(p.rotation.y*180/Math.PI).toFixed(1):(-p.rotation.z*180/Math.PI).toFixed(1))},scale:{x:Number(p.scale.x.toFixed(2)),y:Number(p.scale.y.toFixed(2)),z:Number(p.scale.z.toFixed(2))},type:((w=p.userData)==null?void 0:w.type)||"unknown",name:((R=p.userData)==null?void 0:R.name)||"Object"};o("object-updated",Z)}}),u.setMode(n.value),u.addEventListener("change",()=>{var se,ee,ye,w;if(p&&u.object){if(n.value==="translate")p.position.copy(u.object.position);else if(n.value==="rotate")p.rotation.copy(u.object.rotation);else if(n.value==="scale"){const Z=u.object.scale.x,V=u.object.scale.y,q=u.object.scale.z,X=p.scale.x,le=Math.abs(Z-X),$=Math.abs(V-X),M=Math.abs(q-X);let x=X;le>=$&&le>=M?x=Z:$>=le&&$>=M?x=V:x=q,p.scale.set(x,x,x),u.object.scale.set(x,x,x)}p.updateMatrix(),p.updateMatrixWorld(!0);const R=(se=p.userData)==null?void 0:se.type,y={id:(ee=p.userData)==null?void 0:ee.id,position:{x:Number(p.position.x.toFixed(2)),y:Number(p.position.y.toFixed(2)),z:Number(p.position.z.toFixed(2))},rotation:{x:Number((p.rotation.x*180/Math.PI).toFixed(1)),y:Number(R==="pic"||R==="video"?(-p.rotation.z*180/Math.PI).toFixed(1):(-p.rotation.y*180/Math.PI).toFixed(1)),z:Number(R==="pic"||R==="video"?(p.rotation.y*180/Math.PI).toFixed(1):(-p.rotation.z*180/Math.PI).toFixed(1))},scale:{x:Number(p.scale.x.toFixed(2)),y:Number(p.scale.y.toFixed(2)),z:Number(p.scale.z.toFixed(2))},type:((ye=p.userData)==null?void 0:ye.type)||"unknown",name:((w=p.userData)==null?void 0:w.name)||"Object"};o("object-updated",y)}}),u.addEventListener("mouseDown",se=>{se&&se.nativeEvent&&(se.nativeEvent.stopPropagation(),se.nativeEvent.preventDefault())}),u.visible=!0,u.showX=!0,u.showY=!0,u.showZ=!0,u.setSpace("world"),E()},E=()=>{requestAnimationFrame(E),h&&h.update(),a&&a.traverse(D=>{if(D.isMesh&&D.material&&D.material.map){const z=D.material.map;z instanceof ml&&(z.needsUpdate=!0)}}),a&&l&&c&&(c.render(a,l),u&&u.object&&(u.update&&u.update(),u.render&&typeof u.render=="function"&&u.render(c,l)))},v=()=>{t.value&&(l.aspect=t.value.clientWidth/t.value.clientHeight,l.updateProjectionMatrix(),c.setSize(t.value.clientWidth,t.value.clientHeight))},I=D=>{if(n.value!==D&&(n.value=D,u&&u.object)){const z=p.position.clone(),F=p.rotation.clone(),he=p.scale.clone();u.setMode(D),p.position.copy(z),p.rotation.copy(F),p.scale.copy(he),u.detach(),u.attach(p),console.log("切换到模式:",D,"当前缩放:",p.scale)}},C=D=>{D.preventDefault()},P=D=>{D.preventDefault();const z=JSON.parse(D.dataTransfer.getData("model"));A(z)},U=(D,z)=>{const F=r.sceneObjects.filter(he=>he.materialId===z);return F.length===0?D:`${D}(${F.length+1})`},A=D=>{try{if(!D||!D.type||!D.defaultProps){console.error("无效的模型数据:",D);return}const F={id:`${Date.now()}_${Math.random().toString(36).substr(2,9)}`,materialId:D.id,name:U(D.name,D.id),type:D.type,preview:D.preview||"",position:{x:0,y:.5,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},defaultProps:D.defaultProps};if(F.path=D.defaultProps.path,D.type==="geometry"){const ee=D.defaultProps;let ye=null;const w=new Ks({color:65280,roughness:.5,metalness:.3});switch(ee.geometryType){case"box":ye=new Et(ee.width,ee.height,ee.depth);break;case"sphere":ye=new $r(ee.radius,ee.widthSegments,ee.heightSegments);break;case"cylinder":ye=new Pt(ee.radiusTop,ee.radiusBottom,ee.height,ee.radialSegments);break;case"cone":ye=new ga(ee.radius,ee.height,ee.radialSegments);break;case"torus":ye=new di(ee.radius,ee.tube,ee.radialSegments,ee.tubularSegments);break;case"plane":ye=new dn(ee.width,ee.height);break;default:console.error("未知的几何体类型:",ee.geometryType);return}if(ye){const R=new ve(ye,w);R.castShadow=!0,R.receiveShadow=!0;let y=.5;ee.geometryType==="sphere"?y=ee.radius:ee.geometryType==="cylinder"||ee.geometryType==="cone"||ee.geometryType==="box"?y=ee.height/2:ee.geometryType==="plane"&&(R.rotation.x=-Math.PI/2,y=0),R.position.set(0,y,0),R.userData={id:F.id,materialId:F.materialId,type:D.type,name:F.name,geometryType:ee.geometryType,defaultProps:ee},a.add(R),re(R),o("object-created",F)}return}if(D.type==="model"){const ee=D.defaultProps;return new Nd().load(ee.path,w=>{const R=w.scene;R.traverse(Z=>{Z.isMesh&&(Z.castShadow=!0,Z.receiveShadow=!0)});const y=ee.scale||1;R.scale.set(y,y,y),R.position.set(0,0,0),R.userData={id:F.id,materialId:F.materialId,type:D.type,name:F.name,path:ee.path},a.add(R),re(R),o("object-created",F)},w=>{console.log(w.loaded/w.total*100+"% 已加载")},w=>{console.error("加载GLTF模型时出错:",w)}),null}const he=new Ks({color:16774557,roughness:.7,metalness:.2}),se=D.defaultProps;switch(D.type){case"pic":const ye=new Ic().load(D.defaultProps.path,R=>{let y;const Z=F.id.toString().includes("recognition_image")||F.name==="识别图"||D.type==="recognition_image",V=R.image.width/R.image.height;if(Z){const $=1/V;y=new dn(1,$)}else{const $=1/V;y=new dn(1,$)}const q=new pn({map:R,side:en,transparent:!0}),X=new ve(y,q);X.castShadow=!0,X.receiveShadow=!0,X.position.set(0,se.height/2||.5,0),Z?(X.scale.set(1,1,1),X.rotation.set(0,0,0)):X.scale.set(1,1,1),X.userData={id:F.id,materialId:F.materialId,type:D.type,name:F.name,path:D.defaultProps.path,isRecognitionImage:Z},a.add(X),Z||re(X),o("object-created",F)});break;case"video":const w=document.createElement("video");w.src=D.defaultProps.path,w.crossOrigin="anonymous",w.loop=!0,w.muted=!0,w.playsInline=!0,w.autoplay=!0,w.preload="auto",w.addEventListener("loadstart",()=>{console.log("视频开始加载")}),w.addEventListener("canplay",()=>{console.log("视频可以播放")}),w.addEventListener("error",R=>{console.error("视频加载错误:",R)}),w.addEventListener("loadedmetadata",()=>{console.log("视频元数据加载完成",w.videoWidth,w.videoHeight);const R=w.videoWidth/w.videoHeight,y=1,Z=y/R,V=new ml(w);V.minFilter=It,V.magFilter=It,V.generateMipmaps=!1,V.flipY=!0,V.needsUpdate=!0;const q=new dn(y,Z),X=new pn({map:V,side:en,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,color:16777215}),le=new ve(q,X);le.castShadow=!0,le.receiveShadow=!0,le.position.set(0,se.height/2||.5,0),le.userData={id:F.id,materialId:F.materialId,type:D.type,name:F.name,path:D.defaultProps.path},a.add(le),re(le),o("object-created",F),w.play().then(()=>{console.log("视频开始播放"),console.log("视频当前时间:",w.currentTime),console.log("视频是否暂停:",w.paused),V.needsUpdate=!0}).catch($=>{console.error("视频播放失败:",$),setTimeout(()=>{w.play().catch(M=>console.error("手动播放也失败:",M))},1e3)}),w.addEventListener("timeupdate",()=>{V.needsUpdate=!0})});break;case"audio":break;default:console.error("未知的素材类型:",D.type);return}}catch(z){console.error("创建模型时出错:",z)}},b=D=>{const{path:z,position:F,rotation:he,scale:se}=D;new Ic().load(z.includes("?versionId")?z+"&v=1":z+"?v=1",ye=>{let w;const R=D.id.toString().includes("recognition_image")||D.name==="识别图"||D.type==="recognition_image",y=ye.image.width/ye.image.height;if(R){const X=1/y;w=new dn(1,X)}else{const X=1/y;w=new dn(1,X)}const Z=new pn({map:ye,side:en,transparent:!0}),V=new ve(w,Z);V.castShadow=!0,V.receiveShadow=!0,V.position.set(F.x,F.y,F.z),V.rotation.set(he.x*Math.PI/180,he.z*Math.PI/180,-he.y*Math.PI/180),R?(V.scale.set(1,1,1),V.rotation.set(0,0,0)):V.scale.set(se.x,se.y,se.z),V.userData={id:D.id,materialId:D.materialId,type:D.type,name:D.name,path:D.path},a.add(V),j.push({model:V,config:D})},void 0,ye=>{console.error("Error loading image:",ye)})},O=D=>{const{path:z,position:F,rotation:he,scale:se}=D,ee=document.createElement("video");ee.src=z.includes("?versionId")?z+"&v=1":z+"?v=1",ee.crossOrigin="anonymous",ee.loop=!0,ee.muted=!0,ee.playsInline=!0,ee.autoplay=!0,ee.preload="auto",ee.addEventListener("loadstart",()=>{console.log("视频开始加载")}),ee.addEventListener("canplay",()=>{console.log("视频可以播放")}),ee.addEventListener("error",ye=>{console.error("视频加载错误:",ye)}),ee.addEventListener("loadedmetadata",()=>{console.log("视频元数据加载完成",ee.videoWidth,ee.videoHeight);const ye=ee.videoWidth/ee.videoHeight,w=1,R=w/ye,y=new ml(ee);y.minFilter=It,y.magFilter=It,y.generateMipmaps=!1,y.flipY=!0,y.needsUpdate=!0;const Z=new dn(w,R),V=new pn({map:y,side:en,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,color:16777215}),q=new ve(Z,V);q.castShadow=!0,q.receiveShadow=!0,q.position.set(F.x,F.y,F.z),q.rotation.set(he.x*Math.PI/180,he.z*Math.PI/180,-he.y*Math.PI/180),q.scale.set(se.x,se.y,se.z),q.userData={id:D.id,materialId:D.materialId,type:D.type,name:D.name,path:D.path},a.add(q),j.push({model:q,config:D}),ee.play().then(()=>{console.log("视频开始播放"),console.log("视频当前时间:",ee.currentTime),console.log("视频是否暂停:",ee.paused),y.needsUpdate=!0}).catch(X=>{console.error("视频播放失败:",X),setTimeout(()=>{ee.play().catch(le=>console.error("手动播放也失败:",le))},1e3)}),ee.addEventListener("timeupdate",()=>{y.needsUpdate=!0})})};let j=[];const Y=D=>{const{position:z,rotation:F,scale:he,defaultProps:se,id:ee,materialId:ye,name:w}=D;let R=null;const y=new Ks({color:65280,roughness:.5,metalness:.3});switch(se.geometryType){case"box":R=new Et(se.width,se.height,se.depth);break;case"sphere":R=new $r(se.radius,se.widthSegments,se.heightSegments);break;case"cylinder":R=new Pt(se.radiusTop,se.radiusBottom,se.height,se.radialSegments);break;case"cone":R=new ga(se.radius,se.height,se.radialSegments);break;case"torus":R=new di(se.radius,se.tube,se.radialSegments,se.tubularSegments);break;case"plane":R=new dn(se.width,se.height);break;default:console.error("未知的几何体类型:",se.geometryType);return}if(R){const Z=new ve(R,y);Z.castShadow=!0,Z.receiveShadow=!0,Z.position.set(z.x,z.y,z.z),Z.rotation.set(F.x*Math.PI/180,F.y*Math.PI/180,F.z*Math.PI/180),Z.scale.set(he.x,he.y,he.z),Z.userData={id:ee,materialId:ye,type:"geometry",name:w,geometryType:se.geometryType,defaultProps:se},a.add(Z),j.push({model:Z,config:D})}},oe=D=>{const{path:z,position:F,rotation:he,scale:se}=D;console.log("模型位置属性",F);const ee=new qb;ee.setDecoderPath("https://unpkg.com/three@0.150.1/examples/jsm/libs/draco/");const ye=new Nd;ye.setDRACOLoader(ee),ye.load(z,w=>{const R=w.scene;if(R.position.set(F.x,F.y,F.z),R.rotation.order="YXZ",R.rotation.set(he.x*Math.PI/180,-he.y*Math.PI/180,-he.z*Math.PI/180),R.scale.set(se.x,se.y,se.z),a.add(R),j.push({model:R,config:D}),R.userData={id:D.id,materialId:D.materialId,type:D.type,name:D.name,path:D.path},console.log("模型加载完成",D.name),w.animations.length>0){const Z=new qx(R).clipAction(w.animations[0]);Z.setLoop(rp),Z.clampWhenFinished=!0,Z.play(),Z.getMixer().addEventListener("finished",()=>{console.log("动画播放完成",D.name)})}},w=>{},w=>{console.error("Error loading model:",D.name,w)})},re=D=>{var z;if(!(D&&D.userData&&D.userData.isRecognitionImage))if(u&&u.object&&u.detach(),p=D,u&&D){u.setMode(n.value),u.visible=!0,u.enabled=!0,u.attach(D);const F=u.getHelper();F&&(F.parent||(a.add(F),console.log("添加helper到场景")),F.visible=!0,console.log("设置helper.visible = true")),u._gizmo&&(u._gizmo.parent||(a.add(u._gizmo),console.log("添加_gizmo到场景")),u._gizmo.visible=!0,console.log("设置_gizmo.visible = true")),console.log("TransformControls已挂载到对象",D),console.log("TransformControls内部结构:",u),console.log("TransformControls.visible:",u.visible),console.log("TransformControls.enabled:",u.enabled),console.log("TransformControls object:",u.object),console.log("检查TransformControls的children:",u.children);for(let se in u)(se.includes("gizmo")||se.includes("helper")||se.includes("Helper"))&&console.log(`发现可能的gizmo属性: ${se}:`,u[se]);const he=(z=D.userData)==null?void 0:z.id;console.log("看这里的object.id",he),s.value=he,o("object-selected",he)}else{if(u){u.detach(),u._gizmo&&(u._gizmo.visible=!1);const F=u.getHelper();F&&(F.visible=!1)}s.value=null,o("object-selected",null)}},ne=()=>{u&&u.detach(),s.value=null,o("object-selected",null)},ie=D=>{if(D.target.tagName==="BUTTON"||D.target!==c.domElement||u&&u.dragging)return;console.log("处理点击事件");const z=c.domElement.getBoundingClientRect();f.x=(D.clientX-z.left)/z.width*2-1,f.y=-((D.clientY-z.top)/z.height)*2+1,d.setFromCamera(f,l);const F=[];a.traverse(se=>{if(!se.isMesh&&!se.isSkinnedMesh||se.isHelper||se.name.includes("Helper")||se.name.includes("helper")||se.isTransformControlsPlane)return;let ee=se.parent;for(;ee;){if(ee===u||ee.type==="TransformControlsGizmo"||ee.name.includes("TransformControls"))return;ee=ee.parent}se.geometry&&se.material&&F.push(se)}),console.log("可选物体数量:",F.length);const he=d.intersectObjects(F,!1);if(console.log("交叉物体数量:",he.length),he.length>0){let se=he[0].object;console.log("点击到对象:",se);const ee=ye=>ye.userData&&(ye.userData.isRecognitionImage||ye.userData.id.toString().includes("recognition_image")||ye.userData.name==="识别图"||ye.userData.type==="recognition_image");if(se.parent&&se.parent!==a){let ye=se;for(;ye.parent&&ye.parent!==a;)ye=ye.parent;if(ee(ye))return;ye.userData?ye.userData.id?ye.userData.id=ye.userData.id:ye.userData.id=ye.id:ye.userData={id:ye.id},re(ye)}else{if(ee(se))return;se.userData?se.userData.id?se.userData.id=se.userData.id:se.userData.id=se.id:se.userData={id:se.id},re(se)}}else return},G=D=>{if(!c||!c.domElement||u&&u.object||D.target!==c.domElement)return;const z=c.domElement.getBoundingClientRect();if(f.x=(D.clientX-z.left)/z.width*2-1,f.y=-((D.clientY-z.top)/z.height)*2+1,d&&l&&a)try{d.setFromCamera(f,l);const F=[];if(a.traverse(se=>{(se.isHelper||se.name.includes("Helper")||se.name.includes("helper")||se.type==="TransformControlsGizmo"||se.name.includes("TransformControls"))&&F.push(se);let ee=se.parent;for(;ee;){if(ee===u||ee.type==="TransformControlsGizmo"||ee.name.includes("TransformControls")){F.push(se);break}ee=ee.parent}}),d.intersectObjects(F,!1).length>0)return}catch(F){console.error("鼠标移动处理错误:",F)}},pe=()=>{var F;if(!p)return;if(p.position.set(0,0,0),p.rotation.set(0,0,0),p.scale.set(1,1,1),p.userData.type)switch(p.userData.type){case"cube":case"cylinder":p.position.y=p.geometry.parameters.height/2||.5;break;case"sphere":p.position.y=p.geometry.parameters.radius||.5;break;default:p.position.y=.5}u&&u.object&&(u.object.position.copy(p.position),u.object.rotation.copy(p.rotation),u.object.scale.copy(p.scale)),p.updateMatrix(),p.updateMatrixWorld(!0);const D=(F=p.userData)==null?void 0:F.type,z={id:p.id,position:{x:Number(p.position.x.toFixed(2)),y:Number(p.position.y.toFixed(2)),z:Number(p.position.z.toFixed(2))},rotation:{x:Number((p.rotation.x*180/Math.PI).toFixed(1)),y:Number(D==="pic"||D==="video"?(-p.rotation.z*180/Math.PI).toFixed(1):(-p.rotation.y*180/Math.PI).toFixed(1)),z:Number(D==="pic"||D==="video"?(p.rotation.y*180/Math.PI).toFixed(1):(-p.rotation.z*180/Math.PI).toFixed(1))},scale:{x:Number(p.scale.x.toFixed(2)),y:Number(p.scale.y.toFixed(2)),z:Number(p.scale.z.toFixed(2))},type:p.userData.type||"unknown",name:p.userData.name||"Object"};console.log("update444",z),o("object-updated",z),c.render(a,l)};Oi(()=>r.sceneObjects,D=>{!a||!D||D.length===0||D.forEach(z=>{var he;let F=null;a.traverse(se=>{se.userData&&String(se.userData.id)===String(z.id)&&(F=se)}),F&&(z.position&&F.position.set(z.position.x,z.position.y,z.position.z),z.rotation&&(((he=F.userData)==null?void 0:he.type)==="model"?(F.rotation.order="YXZ",F.rotation.set(z.rotation.x*Math.PI/180,-z.rotation.y*Math.PI/180,-z.rotation.z*Math.PI/180)):F.rotation.set(z.rotation.x*Math.PI/180,z.rotation.z*Math.PI/180,-z.rotation.y*Math.PI/180)),z.scale&&F.scale.set(z.scale.x,z.scale.y,z.scale.z),F.updateMatrix(),F.updateMatrixWorld(!0),p&&(String(p.userData.id),String(z.id)),c&&l&&c.render(a,l))})},{deep:!0}),Oi(()=>r.selectedObjectId,D=>{if(!D||!a)return;let z=null;a.traverse(F=>{(F.userData&&String(F.userData.id)===String(D)||String(F.id)===String(D))&&(z=F)}),z&&re(z)}),Oi(s,D=>{if(!D||!a)return;console.log("下拉框选择了素材:",D);let z=null;a.traverse(F=>{F.userData&&String(F.userData.id)===String(D)&&(z=F)}),z&&re(z)}),$c(()=>{console.log("Scene中查看源数据sceneObjects",r.sceneObjects),S(),r.sceneObjects.length>0&&r.sceneObjects.forEach(D=>{D.type==="model"?oe(D):D.type==="pic"?b(D):D.type==="video"?O(D):D.type==="geometry"&&Y(D)}),window.addEventListener("resize",v),window.addEventListener("mousemove",G)});const Se=()=>{if(a&&confirm("确定要清空场景中的所有素材吗？此操作不可撤销。")){const D=[],z=[];a.traverse(F=>{F.userData&&F.userData.id&&(F.userData.type==="model"||F.userData.type==="pic"||F.userData.type==="video"||F.userData.type==="geometry")&&(D.push(F.userData.id),z.push(F))}),z.forEach(F=>{a.remove(F),p===F&&(p=null)}),p=null,s.value=null,u&&u.object&&u.detach(),j=[],o("objects-cleared",D),c.render(a,l),alert("场景已清空")}},Ce=()=>{var z;if(!p)return;const D=((z=p.userData)==null?void 0:z.id)||p.id;a.remove(p),u&&u.object&&u.detach(),p=null,o("object-deleted",D),c.render(a,l)};let Le=!1;const Ze=D=>{if(!l||!h||Le)return;const z=8,F=new L(0,0,0);let he=new L;switch(D){case"x":he.set(z,0,0);break;case"-x":he.set(-8,0,0);break;case"y":he.set(0,z,0);break;case"-y":he.set(0,-8,0);break;case"z":he.set(0,0,-8);break;case"-z":he.set(0,0,z);break;default:return}const se=l.position.clone(),ee=h.target.clone(),ye=800,w=Date.now();Le=!0;const R=()=>{const y=Date.now()-w,Z=Math.min(y/ye,1),V=Z<.5?4*Z*Z*Z:1-Math.pow(-2*Z+2,3)/2;l.position.lerpVectors(se,he,V),h.target.lerpVectors(ee,F,V),l.lookAt(h.target),h.update(),c&&c.render(a,l),Z<1?requestAnimationFrame(R):Le=!1};R()},ce=()=>{o("confirm")};return vf(()=>{window.removeEventListener("resize",v),window.removeEventListener("mousemove",G),c&&c.dispose()}),(D,z)=>(Sn(),Nn("div",{class:"scene-view",ref_key:"sceneContainer",ref:t,onDragover:C,onDrop:P,onClick:ie},[_e("div",zE,[_e("div",kE,[z[10]||(z[10]=_e("div",{class:"axis-line x-line"},null,-1)),z[11]||(z[11]=_e("div",{class:"axis-line y-line"},null,-1)),z[12]||(z[12]=_e("div",{class:"axis-line z-line"},null,-1)),_e("div",{class:"axis-sphere x-axis positive",onClick:z[0]||(z[0]=F=>Ze("x"))}),_e("div",{class:"axis-sphere x-axis negative",onClick:z[1]||(z[1]=F=>Ze("-x"))}),_e("div",{class:"axis-sphere y-axis positive",onClick:z[2]||(z[2]=F=>Ze("y"))}),_e("div",{class:"axis-sphere y-axis negative",onClick:z[3]||(z[3]=F=>Ze("-y"))}),_e("div",{class:"axis-sphere z-axis positive",onClick:z[4]||(z[4]=F=>Ze("z"))}),_e("div",{class:"axis-sphere z-axis negative",onClick:z[5]||(z[5]=F=>Ze("-z"))}),z[13]||(z[13]=_e("div",{class:"center-sphere"},null,-1))])],512),_e("div",HE,[_e("div",VE,[Pn(_e("select",{"onUpdate:modelValue":z[6]||(z[6]=F=>s.value=F),class:"material-select"},[z[14]||(z[14]=_e("option",{value:""},"选择素材",-1)),(Sn(!0),Nn(vn,null,Ol(m.value,F=>(Sn(),Nn("option",{key:F.id,value:F.id},ta(F.name),9,GE))),128))],512),[[s_,s.value]]),_e("div",null,[_e("button",{onClick:pe,class:"reset-button"},"重置"),_e("button",{onClick:Ce,class:"delete-button"},"删除")])]),_e("div",WE,[_e("button",{class:cs({active:n.value==="translate"}),onClick:z[7]||(z[7]=F=>I("translate"))},"移动",2),_e("button",{class:cs({active:n.value==="rotate"}),onClick:z[8]||(z[8]=F=>I("rotate"))},"旋转",2),_e("button",{class:cs({active:n.value==="scale"}),onClick:z[9]||(z[9]=F=>I("scale"))},"缩放",2)]),_e("div",{class:"section2"},[_e("button",{onClick:Se,class:"clear-button"},"清空"),_e("button",{onClick:ne,class:"preview-button"},"预览"),_e("button",{onClick:ce,class:"confirm-button"},"确定")])])],544))}},jE=Ca(XE,[["__scopeId","data-v-885b1bf7"]]),YE={class:"property-panel"},qE={key:0,class:"properties"},KE={class:"property-group"},ZE={class:"property-field"},$E={class:"property-group"},JE={class:"property-field"},QE={class:"property-field"},eT={class:"property-field"},tT={class:"property-group"},nT={class:"property-field"},iT={class:"property-field"},sT={class:"property-field"},rT={class:"property-group"},oT={class:"property-field"},aT={class:"property-field"},lT={class:"property-field"},cT={key:1,class:"no-selection"},uT={__name:"PropertyPanel",props:{selectedObject:{type:Object,default:null}},emits:["update-object"],setup(i,{emit:e}){const t=i,n=e,s=yn(""),r=yn({x:0,y:0,z:0}),o=yn({x:0,y:0,z:0}),a=yn({x:1,y:1,z:1});Oi(()=>t.selectedObject,u=>{u?(s.value=u.name||"",u.position?r.value={...u.position}:r.value={x:0,y:0,z:0},u.rotation?o.value={...u.rotation}:o.value={x:0,y:0,z:0},u.scale?a.value={...u.scale}:a.value={x:1,y:1,z:1}):(s.value="",r.value={x:0,y:0,z:0},o.value={x:0,y:0,z:0},a.value={x:1,y:1,z:1})},{immediate:!0,deep:!0});const l=()=>{t.selectedObject&&n("update-object",{name:s.value})},c=()=>{if(!t.selectedObject)return;const u={},d={};r.value.x!==""&&r.value.x!==null&&r.value.x!==void 0&&(u.x=Number(r.value.x)||0),r.value.y!==""&&r.value.y!==null&&r.value.y!==void 0&&(u.y=Number(r.value.y)||0),r.value.z!==""&&r.value.z!==null&&r.value.z!==void 0&&(u.z=Number(r.value.z)||0),o.value.x!==""&&o.value.x!==null&&o.value.x!==void 0&&(d.x=Number(o.value.x)||0),o.value.y!==""&&o.value.y!==null&&o.value.y!==void 0&&(d.y=Number(o.value.y)||0),o.value.z!==""&&o.value.z!==null&&o.value.z!==void 0&&(d.z=Number(o.value.z)||0),n("update-object",{id:t.selectedObject.id,position:u,rotation:d})},h=()=>{if(!t.selectedObject)return;let u=a.value.x||a.value.y||a.value.z;if(u===""||u===null||u===void 0)return;const d=Number(u);if(isNaN(d))return;const f=Math.max(.01,d);a.value.x=f,a.value.y=f,a.value.z=f,n("update-object",{id:t.selectedObject.id,scale:{x:f,y:f,z:f}})};return(u,d)=>(Sn(),Nn("div",YE,[d[24]||(d[24]=_e("h2",null,"属性面板",-1)),i.selectedObject?(Sn(),Nn("div",qE,[_e("div",KE,[d[10]||(d[10]=_e("h3",null,"基本信息",-1)),_e("div",ZE,[Pn(_e("input",{type:"text",disabled:"","onUpdate:modelValue":d[0]||(d[0]=f=>s.value=f),onChange:l},null,544),[[Hn,s.value]])])]),_e("div",$E,[d[14]||(d[14]=_e("h3",null,"位置",-1)),_e("div",JE,[d[11]||(d[11]=_e("label",null,"X:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[1]||(d[1]=f=>r.value.x=f),step:"0.1",onInput:c},null,544),[[Hn,r.value.x]])]),_e("div",QE,[d[12]||(d[12]=_e("label",null,"Y:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[2]||(d[2]=f=>r.value.y=f),step:"0.1",onInput:c},null,544),[[Hn,r.value.y]])]),_e("div",eT,[d[13]||(d[13]=_e("label",null,"Z:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[3]||(d[3]=f=>r.value.z=f),step:"0.1",onInput:c},null,544),[[Hn,r.value.z]])])]),_e("div",tT,[d[18]||(d[18]=_e("h3",null,"旋转",-1)),_e("div",nT,[d[15]||(d[15]=_e("label",null,"X:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[4]||(d[4]=f=>o.value.x=f),step:"1",onInput:c},null,544),[[Hn,o.value.x]])]),_e("div",iT,[d[16]||(d[16]=_e("label",null,"Y:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[5]||(d[5]=f=>o.value.y=f),step:"1",onInput:c},null,544),[[Hn,o.value.y]])]),_e("div",sT,[d[17]||(d[17]=_e("label",null,"Z:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[6]||(d[6]=f=>o.value.z=f),step:"1",onInput:c},null,544),[[Hn,o.value.z]])])]),_e("div",rT,[d[22]||(d[22]=_e("h3",null,"缩放",-1)),_e("div",oT,[d[19]||(d[19]=_e("label",null,"X:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[7]||(d[7]=f=>a.value.x=f),step:"0.01",min:"0.01",onInput:h},null,544),[[Hn,a.value.x]])]),_e("div",aT,[d[20]||(d[20]=_e("label",null,"Y:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[8]||(d[8]=f=>a.value.y=f),step:"0.01",min:"0.01",onInput:h},null,544),[[Hn,a.value.y]])]),_e("div",lT,[d[21]||(d[21]=_e("label",null,"Z:",-1)),Pn(_e("input",{type:"number","onUpdate:modelValue":d[9]||(d[9]=f=>a.value.z=f),step:"0.01",min:"0.01",onInput:h},null,544),[[Hn,a.value.z]])])])])):(Sn(),Nn("div",cT,d[23]||(d[23]=[_e("p",null,"请选择一个对象",-1)])))]))}},hT=Ca(uT,[["__scopeId","data-v-c206a44a"]]),dT={class:"editor-container"},fT={class:"left-panel"},pT={class:"scene-container"},mT={class:"right-panel"},gT={__name:"Editor",props:{currentMats:{type:Array,default:()=>[]},isTreasure:{type:Boolean,default:()=>!1}},emits:["confirm"],setup(i,{emit:e}){const t=i,n=yn([...t.currentMats]),s=yn(null);Oi(()=>t.currentMats,_=>{console.log("currentMats 发生变化，重新初始化 Editor 数据:",_),n.value=[..._],s.value=null},{immediate:!1,deep:!0});const r=eu(()=>(console.log("当前对象属性发生变化",n.value),s.value&&n.value.find(_=>String(_.id)===String(s.value))||null)),o=_=>{console.log("开始拖拽模型:",_)},a=_=>{s.value=_},l=_=>{console.log("创建新对象:",_),n.value.push(_),s.value=_.id},c=_=>{if(Array.isArray(_)){n.value=_;return}console.log("接收到对象更新:",_);const p=_.id;console.log("查找对象ID:",p,"类型:",typeof p),console.log("当前sceneObjects:",n.value.map(S=>({id:S.id,type:typeof S.id})));const m=n.value.findIndex(S=>String(S.id)===String(p));if(console.log("找到的index:",m,p,n.value),m!==-1){const S={...n.value[m],..._};n.value.splice(m,1,S),console.log("更新后的对象:",n.value[m])}else console.warn("未找到要更新的对象:",p)},h=_=>{if(!s.value)return;const p=n.value.findIndex(S=>String(S.id)===String(s.value));if(p===-1)return;const m={...n.value[p],..._};n.value.splice(p,1,m)},u=_=>{const p=n.value.findIndex(m=>String(m.id)===String(_));p!==-1&&n.value.splice(p,1),String(s.value)===String(_)&&(s.value=null)},d=_=>{console.log("清空所有对象:",_),n.value=[],s.value=null,console.log("场景已清空，当前对象数量:",n.value.length)},f=e,g=()=>{const _=n.value.map(p=>({...p,preview:p.preview||p.src||""}));f("confirm",_)};return(_,p)=>(Sn(),Nn("div",dT,[_e("div",fT,[Fn(S_,{isTreasure:i.isTreasure,onModelDragStart:o},null,8,["isTreasure"])]),_e("div",pT,[Fn(jE,{onObjectSelected:a,onObjectCreated:l,onObjectUpdated:c,onObjectDeleted:u,onObjectsCleared:d,onConfirm:g,"scene-objects":n.value,"selected-object-id":s.value},null,8,["scene-objects","selected-object-id"])]),_e("div",mT,[Fn(hT,{"selected-object":r.value,onUpdateObject:h},null,8,["selected-object"])])]))}},_T=Ca(gT,[["__scopeId","data-v-c7e8c6a9"]]),xT={__name:"App",setup(i){return(e,t)=>(Sn(),Eg(_T))}};a_(xT).mount("#app");
