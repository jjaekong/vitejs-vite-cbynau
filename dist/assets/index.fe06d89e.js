const iw=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};iw();function Au(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const rw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ow=Au(rw);function bg(t){return!!t||t===""}function Su(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?lw(s):Su(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qe(t))return t;if(Ue(t))return t}}const aw=/;(?![^(]*\))/g,cw=/:(.+)/;function lw(t){const e={};return t.split(aw).forEach(n=>{if(n){const s=n.split(cw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cu(t){let e="";if(Qe(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const s=Cu(t[n]);s&&(e+=s+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function uw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=xa(t[s],e[s]);return n}function xa(t,e){if(t===e)return!0;let n=Sd(t),s=Sd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=wr(t),s=wr(e),n||s)return t===e;if(n=ie(t),s=ie(e),n||s)return n&&s?uw(t,e):!1;if(n=Ue(t),s=Ue(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xa(t[o],e[o]))return!1}}return String(t)===String(e)}function Tg(t,e){return t.findIndex(n=>xa(n,e))}const ir=t=>Qe(t)?t:t==null?"":ie(t)||Ue(t)&&(t.toString===Sg||!pe(t.toString))?JSON.stringify(t,Ig,2):String(t),Ig=(t,e)=>e&&e.__v_isRef?Ig(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Fa(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ie(e)&&!Cg(e)?String(e):e,Me={},ri=[],Kt=()=>{},hw=()=>!1,dw=/^on[^a-z]/,$a=t=>dw.test(t),Ou=t=>t.startsWith("onUpdate:"),ut=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fw=Object.prototype.hasOwnProperty,Se=(t,e)=>fw.call(t,e),ie=Array.isArray,oi=t=>Wr(t)==="[object Map]",Fa=t=>Wr(t)==="[object Set]",Sd=t=>Wr(t)==="[object Date]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",wr=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Ag=t=>Ue(t)&&pe(t.then)&&pe(t.catch),Sg=Object.prototype.toString,Wr=t=>Sg.call(t),pw=t=>Wr(t).slice(8,-1),Cg=t=>Wr(t)==="[object Object]",Du=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gw=/-(\w)/g,on=Va(t=>t.replace(gw,(e,n)=>n?n.toUpperCase():"")),mw=/\B([A-Z])/g,Mi=Va(t=>t.replace(mw,"-$1").toLowerCase()),Ua=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),$c=Va(t=>t?`on${Ua(t)}`:""),br=(t,e)=>!Object.is(t,e),Vo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ta=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Il=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cd;const yw=()=>Cd||(Cd=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Jt;class vw{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Jt&&(this.parent=Jt,this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function _w(t,e=Jt){e&&e.active&&e.effects.push(t)}const ku=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Og=t=>(t.w&Qn)>0,Ng=t=>(t.n&Qn)>0,Ew=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qn},ww=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Og(i)&&!Ng(i)?i.delete(t):e[n++]=i,i.w&=~Qn,i.n&=~Qn}e.length=n}},Al=new WeakMap;let er=0,Qn=1;const Sl=30;let jt;const Ts=Symbol(""),Cl=Symbol("");class Ru{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_w(this,s)}run(){if(!this.active)return this.fn();let e=jt,n=Wn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Wn=!0,Qn=1<<++er,er<=Sl?Ew(this):Od(this),this.fn()}finally{er<=Sl&&ww(this),Qn=1<<--er,jt=this.parent,Wn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(Od(this),this.onStop&&this.onStop(),this.active=!1)}}function Od(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wn=!0;const Dg=[];function Pi(){Dg.push(Wn),Wn=!1}function xi(){const t=Dg.pop();Wn=t===void 0?!0:t}function At(t,e,n){if(Wn&&jt){let s=Al.get(t);s||Al.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ku()),kg(i)}}function kg(t,e){let n=!1;er<=Sl?Ng(t)||(t.n|=Qn,n=!Og(t)):n=!t.has(jt),n&&(t.add(jt),jt.deps.push(t))}function Tn(t,e,n,s,i,r){const o=Al.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?Du(n)&&a.push(o.get("length")):(a.push(o.get(Ts)),oi(t)&&a.push(o.get(Cl)));break;case"delete":ie(t)||(a.push(o.get(Ts)),oi(t)&&a.push(o.get(Cl)));break;case"set":oi(t)&&a.push(o.get(Ts));break}if(a.length===1)a[0]&&Ol(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ol(ku(c))}}function Ol(t,e){const n=ie(t)?t:[...t];for(const s of n)s.computed&&Nd(s);for(const s of n)s.computed||Nd(s)}function Nd(t,e){(t!==jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bw=Au("__proto__,__v_isRef,__isVue"),Rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wr)),Tw=Lu(),Iw=Lu(!1,!0),Aw=Lu(!0),Dd=Sw();function Sw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ne(this);for(let r=0,o=this.length;r<o;r++)At(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pi();const s=Ne(this)[e].apply(this,n);return xi(),s}}),t}function Lu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?jw:$g:e?xg:Pg).get(s))return s;const o=ie(s);if(!t&&o&&Se(Dd,i))return Reflect.get(Dd,i,r);const a=Reflect.get(s,i,r);return(wr(i)?Rg.has(i):bw(i))||(t||At(s,"get",i),e)?a:at(a)?o&&Du(i)?a:a.value:Ue(a)?t?Fg(a):$i(a):a}}const Cw=Lg(),Ow=Lg(!0);function Lg(t=!1){return function(n,s,i,r){let o=n[s];if(Tr(o)&&at(o)&&!at(i))return!1;if(!t&&!Tr(i)&&(Nl(i)||(i=Ne(i),o=Ne(o)),!ie(n)&&at(o)&&!at(i)))return o.value=i,!0;const a=ie(n)&&Du(s)?Number(s)<n.length:Se(n,s),c=Reflect.set(n,s,i,r);return n===Ne(r)&&(a?br(i,o)&&Tn(n,"set",s,i):Tn(n,"add",s,i)),c}}function Nw(t,e){const n=Se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Tn(t,"delete",e,void 0),s}function Dw(t,e){const n=Reflect.has(t,e);return(!wr(e)||!Rg.has(e))&&At(t,"has",e),n}function kw(t){return At(t,"iterate",ie(t)?"length":Ts),Reflect.ownKeys(t)}const Mg={get:Tw,set:Cw,deleteProperty:Nw,has:Dw,ownKeys:kw},Rw={get:Aw,set(t,e){return!0},deleteProperty(t,e){return!0}},Lw=ut({},Mg,{get:Iw,set:Ow}),Mu=t=>t,Ba=t=>Reflect.getPrototypeOf(t);function _o(t,e,n=!1,s=!1){t=t.__v_raw;const i=Ne(t),r=Ne(e);n||(e!==r&&At(i,"get",e),At(i,"get",r));const{has:o}=Ba(i),a=s?Mu:n?$u:Ir;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Eo(t,e=!1){const n=this.__v_raw,s=Ne(n),i=Ne(t);return e||(t!==i&&At(s,"has",t),At(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function wo(t,e=!1){return t=t.__v_raw,!e&&At(Ne(t),"iterate",Ts),Reflect.get(t,"size",t)}function kd(t){t=Ne(t);const e=Ne(this);return Ba(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function Rd(t,e){e=Ne(e);const n=Ne(this),{has:s,get:i}=Ba(n);let r=s.call(n,t);r||(t=Ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?br(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Ld(t){const e=Ne(this),{has:n,get:s}=Ba(e);let i=n.call(e,t);i||(t=Ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Tn(e,"delete",t,void 0),r}function Md(){const t=Ne(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function bo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Ne(o),c=e?Mu:t?$u:Ir;return!t&&At(a,"iterate",Ts),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function To(t,e,n){return function(...s){const i=this.__v_raw,r=Ne(i),o=oi(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Mu:e?$u:Ir;return!e&&At(r,"iterate",c?Cl:Ts),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function Mw(){const t={get(r){return _o(this,r)},get size(){return wo(this)},has:Eo,add:kd,set:Rd,delete:Ld,clear:Md,forEach:bo(!1,!1)},e={get(r){return _o(this,r,!1,!0)},get size(){return wo(this)},has:Eo,add:kd,set:Rd,delete:Ld,clear:Md,forEach:bo(!1,!0)},n={get(r){return _o(this,r,!0)},get size(){return wo(this,!0)},has(r){return Eo.call(this,r,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:bo(!0,!1)},s={get(r){return _o(this,r,!0,!0)},get size(){return wo(this,!0)},has(r){return Eo.call(this,r,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=To(r,!1,!1),n[r]=To(r,!0,!1),e[r]=To(r,!1,!0),s[r]=To(r,!0,!0)}),[t,n,e,s]}const[Pw,xw,$w,Fw]=Mw();function Pu(t,e){const n=e?t?Fw:$w:t?xw:Pw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Se(n,i)&&i in s?n:s,i,r)}const Vw={get:Pu(!1,!1)},Uw={get:Pu(!1,!0)},Bw={get:Pu(!0,!1)},Pg=new WeakMap,xg=new WeakMap,$g=new WeakMap,jw=new WeakMap;function Hw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kw(t){return t.__v_skip||!Object.isExtensible(t)?0:Hw(pw(t))}function $i(t){return Tr(t)?t:xu(t,!1,Mg,Vw,Pg)}function Ww(t){return xu(t,!1,Lw,Uw,xg)}function Fg(t){return xu(t,!0,Rw,Bw,$g)}function xu(t,e,n,s,i){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Kw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ai(t){return Tr(t)?ai(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function Nl(t){return!!(t&&t.__v_isShallow)}function Vg(t){return ai(t)||Tr(t)}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function Ug(t){return ta(t,"__v_skip",!0),t}const Ir=t=>Ue(t)?$i(t):t,$u=t=>Ue(t)?Fg(t):t;function Bg(t){Wn&&jt&&(t=Ne(t),kg(t.dep||(t.dep=ku())))}function jg(t,e){t=Ne(t),t.dep&&Ol(t.dep)}function at(t){return!!(t&&t.__v_isRef===!0)}function qw(t){return Hg(t,!1)}function zw(t){return Hg(t,!0)}function Hg(t,e){return at(t)?t:new Gw(t,e)}class Gw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ne(e),this._value=n?e:Ir(e)}get value(){return Bg(this),this._value}set value(e){e=this.__v_isShallow?e:Ne(e),br(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ir(e),jg(this))}}function ci(t){return at(t)?t.value:t}const Yw={get:(t,e,n)=>ci(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return at(i)&&!at(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Kg(t){return ai(t)?t:new Proxy(t,Yw)}class Qw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ru(e,()=>{this._dirty||(this._dirty=!0,jg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Ne(this);return Bg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xw(t,e,n=!1){let s,i;const r=pe(t);return r?(s=t,i=Kt):(s=t.get,i=t.set),new Qw(s,i,r||!i,n)}function qn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ja(r,e,n)}return i}function Mt(t,e,n,s){if(pe(t)){const r=qn(t,e,n,s);return r&&Ag(r)&&r.catch(o=>{ja(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Mt(t[r],e,n,s));return i}function ja(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){qn(c,null,10,[t,o,a]);return}}Jw(t,n,i,s)}function Jw(t,e,n,s=!0){console.error(t)}let na=!1,Dl=!1;const Tt=[];let dn=0;const rr=[];let tr=null,Qs=0;const or=[];let $n=null,Xs=0;const Wg=Promise.resolve();let Fu=null,kl=null;function qg(t){const e=Fu||Wg;return t?e.then(this?t.bind(this):t):e}function Zw(t){let e=dn+1,n=Tt.length;for(;e<n;){const s=e+n>>>1;Ar(Tt[s])<t?e=s+1:n=s}return e}function zg(t){(!Tt.length||!Tt.includes(t,na&&t.allowRecurse?dn+1:dn))&&t!==kl&&(t.id==null?Tt.push(t):Tt.splice(Zw(t.id),0,t),Gg())}function Gg(){!na&&!Dl&&(Dl=!0,Fu=Wg.then(Xg))}function eb(t){const e=Tt.indexOf(t);e>dn&&Tt.splice(e,1)}function Yg(t,e,n,s){ie(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Gg()}function tb(t){Yg(t,tr,rr,Qs)}function nb(t){Yg(t,$n,or,Xs)}function Ha(t,e=null){if(rr.length){for(kl=e,tr=[...new Set(rr)],rr.length=0,Qs=0;Qs<tr.length;Qs++)tr[Qs]();tr=null,Qs=0,kl=null,Ha(t,e)}}function Qg(t){if(Ha(),or.length){const e=[...new Set(or)];if(or.length=0,$n){$n.push(...e);return}for($n=e,$n.sort((n,s)=>Ar(n)-Ar(s)),Xs=0;Xs<$n.length;Xs++)$n[Xs]();$n=null,Xs=0}}const Ar=t=>t.id==null?1/0:t.id;function Xg(t){Dl=!1,na=!0,Ha(t),Tt.sort((n,s)=>Ar(n)-Ar(s));const e=Kt;try{for(dn=0;dn<Tt.length;dn++){const n=Tt[dn];n&&n.active!==!1&&qn(n,null,14)}}finally{dn=0,Tt.length=0,Qg(),na=!1,Fu=null,(Tt.length||rr.length||or.length)&&Xg(t)}}function sb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Me;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Me;d&&(i=n.map(p=>p.trim())),h&&(i=n.map(Il))}let a,c=s[a=$c(e)]||s[a=$c(on(e))];!c&&r&&(c=s[a=$c(Mi(e))]),c&&Mt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(l,t,6,i)}}function Jg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!pe(t)){const c=l=>{const u=Jg(l,e,!0);u&&(a=!0,ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(s.set(t,null),null):(ie(r)?r.forEach(c=>o[c]=null):ut(o,r),s.set(t,o),o)}function Ka(t,e){return!t||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Mi(e))||Se(t,e))}let Lt=null,Wa=null;function sa(t){const e=Lt;return Lt=t,Wa=t&&t.type.__scopeId||null,e}function ib(t){Wa=t}function rb(){Wa=null}function Vu(t,e=Lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Wd(-1);const r=sa(e),o=t(...i);return sa(r),s._d&&Wd(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Fc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:v}=t;let _,w;const R=sa(t);try{if(n.shapeFlag&4){const x=i||s;_=Zt(u.call(x,x,h,r,p,d,m)),w=c}else{const x=e;_=Zt(x.length>1?x(r,{attrs:c,slots:a,emit:l}):x(r,null)),w=e.props?c:ob(c)}}catch(x){cr.length=0,ja(x,t,1),_=He(Wt)}let U=_;if(w&&v!==!1){const x=Object.keys(w),{shapeFlag:X}=U;x.length&&X&7&&(o&&x.some(Ou)&&(w=ab(w,o)),U=Xn(U,w))}return n.dirs&&(U=Xn(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),_=U,sa(R),_}const ob=t=>{let e;for(const n in t)(n==="class"||n==="style"||$a(n))&&((e||(e={}))[n]=t[n]);return e},ab=(t,e)=>{const n={};for(const s in t)(!Ou(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Pd(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ka(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pd(s,o,l):!0:!!o;return!1}function Pd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ka(n,r))return!0}return!1}function lb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ub=t=>t.__isSuspense;function hb(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):nb(t)}function Uo(t,e){if(Ye){let n=Ye.provides;const s=Ye.parent&&Ye.parent.provides;s===n&&(n=Ye.provides=Object.create(s)),n[t]=e}}function zn(t,e,n=!1){const s=Ye||Lt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&pe(e)?e.call(s.proxy):e}}const xd={};function Bo(t,e,n){return Zg(t,e,n)}function Zg(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Me){const a=Ye;let c,l=!1,u=!1;if(at(t)?(c=()=>t.value,l=Nl(t)):ai(t)?(c=()=>t,s=!0):ie(t)?(u=!0,l=t.some(w=>ai(w)||Nl(w)),c=()=>t.map(w=>{if(at(w))return w.value;if(ai(w))return ys(w);if(pe(w))return qn(w,a,2)})):pe(t)?e?c=()=>qn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Mt(t,a,3,[d])}:c=Kt,e&&s){const w=c;c=()=>ys(w())}let h,d=w=>{h=_.onStop=()=>{qn(w,a,4)}};if(Cr)return d=Kt,e?n&&Mt(e,a,3,[c(),u?[]:void 0,d]):c(),Kt;let p=u?[]:xd;const m=()=>{if(!!_.active)if(e){const w=_.run();(s||l||(u?w.some((R,U)=>br(R,p[U])):br(w,p)))&&(h&&h(),Mt(e,a,3,[w,p===xd?void 0:p,d]),p=w)}else _.run()};m.allowRecurse=!!e;let v;i==="sync"?v=m:i==="post"?v=()=>yt(m,a&&a.suspense):v=()=>tb(m);const _=new Ru(c,v);return e?n?m():p=_.run():i==="post"?yt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Nu(a.scope.effects,_)}}function db(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?em(s,t):()=>s[t]:t.bind(s,s);let r;pe(e)?r=e:(r=e.handler,n=e);const o=Ye;fi(this);const a=Zg(i,r.bind(s),n);return o?fi(o):Is(),a}function em(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ys(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),at(t))ys(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)ys(t[n],e);else if(Fa(t)||oi(t))t.forEach(n=>{ys(n,e)});else if(Cg(t))for(const n in t)ys(t[n],e);return t}function fb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rm(()=>{t.isMounted=!0}),om(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],pb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},setup(t,{slots:e}){const n=Zb(),s=fb();let i;return()=>{const r=e.default&&nm(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==Wt){o=v;break}}const a=Ne(t),{mode:c}=a;if(s.isLeaving)return Vc(o);const l=$d(o);if(!l)return Vc(o);const u=Rl(l,a,s,n);Ll(l,u);const h=n.subTree,d=h&&$d(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();i===void 0?i=v:v!==i&&(i=v,p=!0)}if(d&&d.type!==Wt&&(!ps(l,d)||p)){const v=Rl(d,a,s,n);if(Ll(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update()},Vc(o);c==="in-out"&&l.type!==Wt&&(v.delayLeave=(_,w,R)=>{const U=tm(s,d);U[String(d.key)]=d,_._leaveCb=()=>{w(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=R})}return o}}},gb=pb;function tm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:_,onAfterAppear:w,onAppearCancelled:R}=e,U=String(t.key),x=tm(n,t),X=(Q,q)=>{Q&&Mt(Q,s,9,q)},J=(Q,q)=>{const j=q[1];X(Q,q),ie(Q)?Q.every(ge=>ge.length<=1)&&j():Q.length<=1&&j()},se={mode:r,persisted:o,beforeEnter(Q){let q=a;if(!n.isMounted)if(i)q=v||a;else return;Q._leaveCb&&Q._leaveCb(!0);const j=x[U];j&&ps(t,j)&&j.el._leaveCb&&j.el._leaveCb(),X(q,[Q])},enter(Q){let q=c,j=l,ge=u;if(!n.isMounted)if(i)q=_||c,j=w||l,ge=R||u;else return;let Ce=!1;const z=Q._enterCb=F=>{Ce||(Ce=!0,F?X(ge,[Q]):X(j,[Q]),se.delayedLeave&&se.delayedLeave(),Q._enterCb=void 0)};q?J(q,[Q,z]):z()},leave(Q,q){const j=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return q();X(h,[Q]);let ge=!1;const Ce=Q._leaveCb=z=>{ge||(ge=!0,q(),z?X(m,[Q]):X(p,[Q]),Q._leaveCb=void 0,x[j]===t&&delete x[j])};x[j]=t,d?J(d,[Q,Ce]):Ce()},clone(Q){return Rl(Q,e,n,s)}};return se}function Vc(t){if(qa(t))return t=Xn(t),t.children=null,t}function $d(t){return qa(t)?t.children?t.children[0]:void 0:t}function Ll(t,e){t.shapeFlag&6&&t.component?Ll(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nm(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===bt?(o.patchFlag&128&&i++,s=s.concat(nm(o.children,e,a))):(e||o.type!==Wt)&&s.push(a!=null?Xn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function sm(t){return pe(t)?{setup:t,name:t.name}:t}const jo=t=>!!t.type.__asyncLoader,qa=t=>t.type.__isKeepAlive;function mb(t,e){im(t,"a",e)}function yb(t,e){im(t,"da",e)}function im(t,e,n=Ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(za(e,s,n),n){let i=n.parent;for(;i&&i.parent;)qa(i.parent.vnode)&&vb(s,e,n,i),i=i.parent}}function vb(t,e,n,s){const i=za(e,t,s,!0);am(()=>{Nu(s[e],i)},n)}function za(t,e,n=Ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pi(),fi(n);const a=Mt(e,n,t,o);return Is(),xi(),a});return s?i.unshift(r):i.push(r),r}}const On=t=>(e,n=Ye)=>(!Cr||t==="sp")&&za(t,e,n),_b=On("bm"),rm=On("m"),Eb=On("bu"),wb=On("u"),om=On("bum"),am=On("um"),bb=On("sp"),Tb=On("rtg"),Ib=On("rtc");function Ab(t,e=Ye){za("ec",t,e)}function ar(t,e){const n=Lt;if(n===null)return t;const s=Xa(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Me]=e[r];pe(o)&&(o={mounted:o,updated:o}),o.deep&&ys(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function us(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Pi(),Mt(c,n,8,[t.el,a,t,e]),xi())}}const cm="components";function Fn(t,e){return Cb(cm,t,!0,e)||t}const Sb=Symbol();function Cb(t,e,n=!0,s=!1){const i=Lt||Ye;if(i){const r=i.type;if(t===cm){const a=iT(r,!1);if(a&&(a===e||a===on(e)||a===Ua(on(e))))return r}const o=Fd(i[t]||r[t],e)||Fd(i.appContext[t],e);return!o&&s?r:o}}function Fd(t,e){return t&&(t[e]||t[on(e)]||t[Ua(on(e))])}function Ob(t,e,n,s){let i;const r=n&&n[s];if(ie(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ue(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Ml=t=>t?Em(t)?Xa(t)||t.proxy:Ml(t.parent):null,ia=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$emit:t=>t.emit,$options:t=>um(t),$forceUpdate:t=>t.f||(t.f=()=>zg(t.update)),$nextTick:t=>t.n||(t.n=qg.bind(t.proxy)),$watch:t=>db.bind(t)}),Nb={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==Me&&Se(s,e))return o[e]=1,s[e];if(i!==Me&&Se(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Se(l,e))return o[e]=3,r[e];if(n!==Me&&Se(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const u=ia[e];let h,d;if(u)return e==="$attrs"&&At(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Me&&Se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==Me&&Se(i,e)?(i[e]=n,!0):s!==Me&&Se(s,e)?(s[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Me&&Se(t,o)||e!==Me&&Se(e,o)||(a=r[0])&&Se(a,o)||Se(s,o)||Se(ia,o)||Se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Pl=!0;function Db(t){const e=um(t),n=t.proxy,s=t.ctx;Pl=!1,e.beforeCreate&&Vd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:_,beforeDestroy:w,beforeUnmount:R,destroyed:U,unmounted:x,render:X,renderTracked:J,renderTriggered:se,errorCaptured:Q,serverPrefetch:q,expose:j,inheritAttrs:ge,components:Ce,directives:z,filters:F}=e;if(l&&kb(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const b in o){const V=o[b];pe(V)&&(s[b]=V.bind(n))}if(i){const b=i.call(n,n);Ue(b)&&(t.data=$i(b))}if(Pl=!0,r)for(const b in r){const V=r[b],Y=pe(V)?V.bind(n,n):pe(V.get)?V.get.bind(n,n):Kt,me=!pe(V)&&pe(V.set)?V.set.bind(n):Kt,Te=kt({get:Y,set:me});Object.defineProperty(s,b,{enumerable:!0,configurable:!0,get:()=>Te.value,set:ye=>Te.value=ye})}if(a)for(const b in a)lm(a[b],s,n,b);if(c){const b=pe(c)?c.call(n):c;Reflect.ownKeys(b).forEach(V=>{Uo(V,b[V])})}u&&Vd(u,t,"c");function $(b,V){ie(V)?V.forEach(Y=>b(Y.bind(n))):V&&b(V.bind(n))}if($(_b,h),$(rm,d),$(Eb,p),$(wb,m),$(mb,v),$(yb,_),$(Ab,Q),$(Ib,J),$(Tb,se),$(om,R),$(am,x),$(bb,q),ie(j))if(j.length){const b=t.exposed||(t.exposed={});j.forEach(V=>{Object.defineProperty(b,V,{get:()=>n[V],set:Y=>n[V]=Y})})}else t.exposed||(t.exposed={});X&&t.render===Kt&&(t.render=X),ge!=null&&(t.inheritAttrs=ge),Ce&&(t.components=Ce),z&&(t.directives=z)}function kb(t,e,n=Kt,s=!1){ie(t)&&(t=xl(t));for(const i in t){const r=t[i];let o;Ue(r)?"default"in r?o=zn(r.from||i,r.default,!0):o=zn(r.from||i):o=zn(r),at(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Vd(t,e,n){Mt(ie(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function lm(t,e,n,s){const i=s.includes(".")?em(n,s):()=>n[s];if(Qe(t)){const r=e[t];pe(r)&&Bo(i,r)}else if(pe(t))Bo(i,t.bind(n));else if(Ue(t))if(ie(t))t.forEach(r=>lm(r,e,n,s));else{const r=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(r)&&Bo(i,r,t)}}function um(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>ra(c,l,o,!0)),ra(c,e,o)),r.set(e,c),c}function ra(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ra(t,r,n,!0),i&&i.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Rb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rb={data:Ud,props:ds,emits:ds,methods:ds,computed:ds,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ds,directives:ds,watch:Mb,provide:Ud,inject:Lb};function Ud(t,e){return e?t?function(){return ut(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Lb(t,e){return ds(xl(t),xl(e))}function xl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?ut(ut(Object.create(null),t),e):e}function Mb(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function Pb(t,e,n,s=!1){const i={},r={};ta(r,Ga,1),t.propsDefaults=Object.create(null),hm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ww(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function xb(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ne(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ka(t.emitsOptions,d))continue;const p=e[d];if(c)if(Se(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const m=on(d);i[m]=$l(c,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{hm(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!Se(e,h)&&((u=Mi(h))===h||!Se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=$l(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Se(e,h)&&!0)&&(delete r[h],l=!0)}l&&Tn(t,"set","$attrs")}function hm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fo(c))continue;const l=e[c];let u;i&&Se(i,u=on(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ka(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=Ne(n),l=a||Me;for(let u=0;u<r.length;u++){const h=r[u];n[h]=$l(i,c,h,l[h],t,!Se(l,h))}}return o}function $l(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&pe(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(fi(i),s=l[n]=c.call(null,e),Is())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Mi(n))&&(s=!0))}return s}function dm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!pe(t)){const u=h=>{c=!0;const[d,p]=dm(h,e,!0);ut(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,ri),ri;if(ie(r))for(let u=0;u<r.length;u++){const h=on(r[u]);Bd(h)&&(o[h]=Me)}else if(r)for(const u in r){const h=on(u);if(Bd(h)){const d=r[u],p=o[h]=ie(d)||pe(d)?{type:d}:d;if(p){const m=Kd(Boolean,p.type),v=Kd(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||Se(p,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Bd(t){return t[0]!=="$"}function jd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Hd(t,e){return jd(t)===jd(e)}function Kd(t,e){return ie(e)?e.findIndex(n=>Hd(n,t)):pe(e)&&Hd(e,t)?0:-1}const fm=t=>t[0]==="_"||t==="$stable",Uu=t=>ie(t)?t.map(Zt):[Zt(t)],$b=(t,e,n)=>{if(e._n)return e;const s=Vu((...i)=>Uu(e(...i)),n);return s._c=!1,s},pm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(fm(i))continue;const r=t[i];if(pe(r))e[i]=$b(i,r,s);else if(r!=null){const o=Uu(r);e[i]=()=>o}}},gm=(t,e)=>{const n=Uu(e);t.slots.default=()=>n},Fb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ne(e),ta(e,"_",n)):pm(e,t.slots={})}else t.slots={},e&&gm(t,e);ta(t.slots,Ga,1)},Vb=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ut(i,e),!n&&a===1&&delete i._):(r=!e.$stable,pm(e,i)),o=e}else e&&(gm(t,e),o={default:1});if(r)for(const a in i)!fm(a)&&!(a in o)&&delete i[a]};function mm(){return{app:null,config:{isNativeTag:hw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ub=0;function Bb(t,e){return function(s,i=null){pe(s)||(s=Object.assign({},s)),i!=null&&!Ue(i)&&(i=null);const r=mm(),o=new Set;let a=!1;const c=r.app={_uid:Ub++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:oT,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&pe(l.install)?(o.add(l),l.install(c,...u)):pe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=He(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Xa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Fl(t,e,n,s,i=!1){if(ie(t)){t.forEach((d,p)=>Fl(d,e&&(ie(e)?e[p]:e),n,s,i));return}if(jo(s)&&!i)return;const r=s.shapeFlag&4?Xa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Qe(l)?(u[l]=null,Se(h,l)&&(h[l]=null)):at(l)&&(l.value=null)),pe(c))qn(c,a,12,[o,u]);else{const d=Qe(c),p=at(c);if(d||p){const m=()=>{if(t.f){const v=d?u[c]:c.value;i?ie(v)&&Nu(v,r):ie(v)?v.includes(r)||v.push(r):d?(u[c]=[r],Se(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Se(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,yt(m,n)):m()}}}const yt=hb;function jb(t){return Hb(t)}function Hb(t,e){const n=yw();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Kt,cloneNode:m,insertStaticContent:v}=t,_=(f,g,y,I=null,T=null,L=null,B=!1,O=null,M=!!g.dynamicChildren)=>{if(f===g)return;f&&!ps(f,g)&&(I=K(f),Ie(f,T,L,!0),f=null),g.patchFlag===-2&&(M=!1,g.dynamicChildren=null);const{type:C,ref:Z,shapeFlag:G}=g;switch(C){case Bu:w(f,g,y,I);break;case Wt:R(f,g,y,I);break;case Ho:f==null&&U(g,y,I,B);break;case bt:z(f,g,y,I,T,L,B,O,M);break;default:G&1?J(f,g,y,I,T,L,B,O,M):G&6?F(f,g,y,I,T,L,B,O,M):(G&64||G&128)&&C.process(f,g,y,I,T,L,B,O,M,_e)}Z!=null&&T&&Fl(Z,f&&f.ref,L,g||f,!g)},w=(f,g,y,I)=>{if(f==null)s(g.el=a(g.children),y,I);else{const T=g.el=f.el;g.children!==f.children&&l(T,g.children)}},R=(f,g,y,I)=>{f==null?s(g.el=c(g.children||""),y,I):g.el=f.el},U=(f,g,y,I)=>{[f.el,f.anchor]=v(f.children,g,y,I,f.el,f.anchor)},x=({el:f,anchor:g},y,I)=>{let T;for(;f&&f!==g;)T=d(f),s(f,y,I),f=T;s(g,y,I)},X=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),i(f),f=y;i(g)},J=(f,g,y,I,T,L,B,O,M)=>{B=B||g.type==="svg",f==null?se(g,y,I,T,L,B,O,M):j(f,g,T,L,B,O,M)},se=(f,g,y,I,T,L,B,O)=>{let M,C;const{type:Z,props:G,shapeFlag:ee,transition:oe,patchFlag:Ee,dirs:De}=f;if(f.el&&m!==void 0&&Ee===-1)M=f.el=m(f.el);else{if(M=f.el=o(f.type,L,G&&G.is,G),ee&8?u(M,f.children):ee&16&&q(f.children,M,null,I,T,L&&Z!=="foreignObject",B,O),De&&us(f,null,I,"created"),G){for(const xe in G)xe!=="value"&&!Fo(xe)&&r(M,xe,null,G[xe],L,f.children,I,T,D);"value"in G&&r(M,"value",null,G.value),(C=G.onVnodeBeforeMount)&&Xt(C,I,f)}Q(M,f,f.scopeId,B,I)}De&&us(f,null,I,"beforeMount");const Re=(!T||T&&!T.pendingBranch)&&oe&&!oe.persisted;Re&&oe.beforeEnter(M),s(M,g,y),((C=G&&G.onVnodeMounted)||Re||De)&&yt(()=>{C&&Xt(C,I,f),Re&&oe.enter(M),De&&us(f,null,I,"mounted")},T)},Q=(f,g,y,I,T)=>{if(y&&p(f,y),I)for(let L=0;L<I.length;L++)p(f,I[L]);if(T){let L=T.subTree;if(g===L){const B=T.vnode;Q(f,B,B.scopeId,B.slotScopeIds,T.parent)}}},q=(f,g,y,I,T,L,B,O,M=0)=>{for(let C=M;C<f.length;C++){const Z=f[C]=O?Vn(f[C]):Zt(f[C]);_(null,Z,g,y,I,T,L,B,O)}},j=(f,g,y,I,T,L,B)=>{const O=g.el=f.el;let{patchFlag:M,dynamicChildren:C,dirs:Z}=g;M|=f.patchFlag&16;const G=f.props||Me,ee=g.props||Me;let oe;y&&hs(y,!1),(oe=ee.onVnodeBeforeUpdate)&&Xt(oe,y,g,f),Z&&us(g,f,y,"beforeUpdate"),y&&hs(y,!0);const Ee=T&&g.type!=="foreignObject";if(C?ge(f.dynamicChildren,C,O,y,I,Ee,L):B||Y(f,g,O,null,y,I,Ee,L,!1),M>0){if(M&16)Ce(O,g,G,ee,y,I,T);else if(M&2&&G.class!==ee.class&&r(O,"class",null,ee.class,T),M&4&&r(O,"style",G.style,ee.style,T),M&8){const De=g.dynamicProps;for(let Re=0;Re<De.length;Re++){const xe=De[Re],Bt=G[xe],Ws=ee[xe];(Ws!==Bt||xe==="value")&&r(O,xe,Bt,Ws,T,f.children,y,I,D)}}M&1&&f.children!==g.children&&u(O,g.children)}else!B&&C==null&&Ce(O,g,G,ee,y,I,T);((oe=ee.onVnodeUpdated)||Z)&&yt(()=>{oe&&Xt(oe,y,g,f),Z&&us(g,f,y,"updated")},I)},ge=(f,g,y,I,T,L,B)=>{for(let O=0;O<g.length;O++){const M=f[O],C=g[O],Z=M.el&&(M.type===bt||!ps(M,C)||M.shapeFlag&70)?h(M.el):y;_(M,C,Z,null,I,T,L,B,!0)}},Ce=(f,g,y,I,T,L,B)=>{if(y!==I){for(const O in I){if(Fo(O))continue;const M=I[O],C=y[O];M!==C&&O!=="value"&&r(f,O,C,M,B,g.children,T,L,D)}if(y!==Me)for(const O in y)!Fo(O)&&!(O in I)&&r(f,O,y[O],null,B,g.children,T,L,D);"value"in I&&r(f,"value",y.value,I.value)}},z=(f,g,y,I,T,L,B,O,M)=>{const C=g.el=f?f.el:a(""),Z=g.anchor=f?f.anchor:a("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:oe}=g;oe&&(O=O?O.concat(oe):oe),f==null?(s(C,y,I),s(Z,y,I),q(g.children,y,Z,T,L,B,O,M)):G>0&&G&64&&ee&&f.dynamicChildren?(ge(f.dynamicChildren,ee,y,T,L,B,O),(g.key!=null||T&&g===T.subTree)&&ym(f,g,!0)):Y(f,g,y,Z,T,L,B,O,M)},F=(f,g,y,I,T,L,B,O,M)=>{g.slotScopeIds=O,f==null?g.shapeFlag&512?T.ctx.activate(g,y,I,B,M):P(g,y,I,T,L,B,M):$(f,g,M)},P=(f,g,y,I,T,L,B)=>{const O=f.component=Jb(f,I,T);if(qa(f)&&(O.ctx.renderer=_e),eT(O),O.asyncDep){if(T&&T.registerDep(O,b),!f.el){const M=O.subTree=He(Wt);R(null,M,g,y)}return}b(O,f,g,y,T,L,B)},$=(f,g,y)=>{const I=g.component=f.component;if(cb(f,g,y))if(I.asyncDep&&!I.asyncResolved){V(I,g,y);return}else I.next=g,eb(I.update),I.update();else g.el=f.el,I.vnode=g},b=(f,g,y,I,T,L,B)=>{const O=()=>{if(f.isMounted){let{next:Z,bu:G,u:ee,parent:oe,vnode:Ee}=f,De=Z,Re;hs(f,!1),Z?(Z.el=Ee.el,V(f,Z,B)):Z=Ee,G&&Vo(G),(Re=Z.props&&Z.props.onVnodeBeforeUpdate)&&Xt(Re,oe,Z,Ee),hs(f,!0);const xe=Fc(f),Bt=f.subTree;f.subTree=xe,_(Bt,xe,h(Bt.el),K(Bt),f,T,L),Z.el=xe.el,De===null&&lb(f,xe.el),ee&&yt(ee,T),(Re=Z.props&&Z.props.onVnodeUpdated)&&yt(()=>Xt(Re,oe,Z,Ee),T)}else{let Z;const{el:G,props:ee}=g,{bm:oe,m:Ee,parent:De}=f,Re=jo(g);if(hs(f,!1),oe&&Vo(oe),!Re&&(Z=ee&&ee.onVnodeBeforeMount)&&Xt(Z,De,g),hs(f,!0),G&&re){const xe=()=>{f.subTree=Fc(f),re(G,f.subTree,f,T,null)};Re?g.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=Fc(f);_(null,xe,y,I,f,T,L),g.el=xe.el}if(Ee&&yt(Ee,T),!Re&&(Z=ee&&ee.onVnodeMounted)){const xe=g;yt(()=>Xt(Z,De,xe),T)}(g.shapeFlag&256||De&&jo(De.vnode)&&De.vnode.shapeFlag&256)&&f.a&&yt(f.a,T),f.isMounted=!0,g=y=I=null}},M=f.effect=new Ru(O,()=>zg(C),f.scope),C=f.update=()=>M.run();C.id=f.uid,hs(f,!0),C()},V=(f,g,y)=>{g.component=f;const I=f.vnode.props;f.vnode=g,f.next=null,xb(f,g.props,I,y),Vb(f,g.children,y),Pi(),Ha(void 0,f.update),xi()},Y=(f,g,y,I,T,L,B,O,M=!1)=>{const C=f&&f.children,Z=f?f.shapeFlag:0,G=g.children,{patchFlag:ee,shapeFlag:oe}=g;if(ee>0){if(ee&128){Te(C,G,y,I,T,L,B,O,M);return}else if(ee&256){me(C,G,y,I,T,L,B,O,M);return}}oe&8?(Z&16&&D(C,T,L),G!==C&&u(y,G)):Z&16?oe&16?Te(C,G,y,I,T,L,B,O,M):D(C,T,L,!0):(Z&8&&u(y,""),oe&16&&q(G,y,I,T,L,B,O,M))},me=(f,g,y,I,T,L,B,O,M)=>{f=f||ri,g=g||ri;const C=f.length,Z=g.length,G=Math.min(C,Z);let ee;for(ee=0;ee<G;ee++){const oe=g[ee]=M?Vn(g[ee]):Zt(g[ee]);_(f[ee],oe,y,null,T,L,B,O,M)}C>Z?D(f,T,L,!0,!1,G):q(g,y,I,T,L,B,O,M,G)},Te=(f,g,y,I,T,L,B,O,M)=>{let C=0;const Z=g.length;let G=f.length-1,ee=Z-1;for(;C<=G&&C<=ee;){const oe=f[C],Ee=g[C]=M?Vn(g[C]):Zt(g[C]);if(ps(oe,Ee))_(oe,Ee,y,null,T,L,B,O,M);else break;C++}for(;C<=G&&C<=ee;){const oe=f[G],Ee=g[ee]=M?Vn(g[ee]):Zt(g[ee]);if(ps(oe,Ee))_(oe,Ee,y,null,T,L,B,O,M);else break;G--,ee--}if(C>G){if(C<=ee){const oe=ee+1,Ee=oe<Z?g[oe].el:I;for(;C<=ee;)_(null,g[C]=M?Vn(g[C]):Zt(g[C]),y,Ee,T,L,B,O,M),C++}}else if(C>ee)for(;C<=G;)Ie(f[C],T,L,!0),C++;else{const oe=C,Ee=C,De=new Map;for(C=Ee;C<=ee;C++){const wt=g[C]=M?Vn(g[C]):Zt(g[C]);wt.key!=null&&De.set(wt.key,C)}let Re,xe=0;const Bt=ee-Ee+1;let Ws=!1,Td=0;const Yi=new Array(Bt);for(C=0;C<Bt;C++)Yi[C]=0;for(C=oe;C<=G;C++){const wt=f[C];if(xe>=Bt){Ie(wt,T,L,!0);continue}let Qt;if(wt.key!=null)Qt=De.get(wt.key);else for(Re=Ee;Re<=ee;Re++)if(Yi[Re-Ee]===0&&ps(wt,g[Re])){Qt=Re;break}Qt===void 0?Ie(wt,T,L,!0):(Yi[Qt-Ee]=C+1,Qt>=Td?Td=Qt:Ws=!0,_(wt,g[Qt],y,null,T,L,B,O,M),xe++)}const Id=Ws?Kb(Yi):ri;for(Re=Id.length-1,C=Bt-1;C>=0;C--){const wt=Ee+C,Qt=g[wt],Ad=wt+1<Z?g[wt+1].el:I;Yi[C]===0?_(null,Qt,y,Ad,T,L,B,O,M):Ws&&(Re<0||C!==Id[Re]?ye(Qt,y,Ad,2):Re--)}}},ye=(f,g,y,I,T=null)=>{const{el:L,type:B,transition:O,children:M,shapeFlag:C}=f;if(C&6){ye(f.component.subTree,g,y,I);return}if(C&128){f.suspense.move(g,y,I);return}if(C&64){B.move(f,g,y,_e);return}if(B===bt){s(L,g,y);for(let G=0;G<M.length;G++)ye(M[G],g,y,I);s(f.anchor,g,y);return}if(B===Ho){x(f,g,y);return}if(I!==2&&C&1&&O)if(I===0)O.beforeEnter(L),s(L,g,y),yt(()=>O.enter(L),T);else{const{leave:G,delayLeave:ee,afterLeave:oe}=O,Ee=()=>s(L,g,y),De=()=>{G(L,()=>{Ee(),oe&&oe()})};ee?ee(L,Ee,De):De()}else s(L,g,y)},Ie=(f,g,y,I=!1,T=!1)=>{const{type:L,props:B,ref:O,children:M,dynamicChildren:C,shapeFlag:Z,patchFlag:G,dirs:ee}=f;if(O!=null&&Fl(O,null,y,f,!0),Z&256){g.ctx.deactivate(f);return}const oe=Z&1&&ee,Ee=!jo(f);let De;if(Ee&&(De=B&&B.onVnodeBeforeUnmount)&&Xt(De,g,f),Z&6)H(f.component,y,I);else{if(Z&128){f.suspense.unmount(y,I);return}oe&&us(f,null,g,"beforeUnmount"),Z&64?f.type.remove(f,g,y,T,_e,I):C&&(L!==bt||G>0&&G&64)?D(C,g,y,!1,!0):(L===bt&&G&384||!T&&Z&16)&&D(M,g,y),I&&Ve(f)}(Ee&&(De=B&&B.onVnodeUnmounted)||oe)&&yt(()=>{De&&Xt(De,g,f),oe&&us(f,null,g,"unmounted")},y)},Ve=f=>{const{type:g,el:y,anchor:I,transition:T}=f;if(g===bt){E(y,I);return}if(g===Ho){X(f);return}const L=()=>{i(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:B,delayLeave:O}=T,M=()=>B(y,L);O?O(f.el,L,M):M()}else L()},E=(f,g)=>{let y;for(;f!==g;)y=d(f),i(f),f=y;i(g)},H=(f,g,y)=>{const{bum:I,scope:T,update:L,subTree:B,um:O}=f;I&&Vo(I),T.stop(),L&&(L.active=!1,Ie(B,f,g,y)),O&&yt(O,g),yt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(f,g,y,I=!1,T=!1,L=0)=>{for(let B=L;B<f.length;B++)Ie(f[B],g,y,I,T)},K=f=>f.shapeFlag&6?K(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ae=(f,g,y)=>{f==null?g._vnode&&Ie(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,y),Qg(),g._vnode=f},_e={p:_,um:Ie,m:ye,r:Ve,mt:P,mc:q,pc:Y,pbc:ge,n:K,o:t};let le,re;return e&&([le,re]=e(_e)),{render:ae,hydrate:le,createApp:Bb(ae,le)}}function hs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ym(t,e,n=!1){const s=t.children,i=e.children;if(ie(s)&&ie(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Vn(i[r]),a.el=o.el),n||ym(o,a))}}function Kb(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Wb=t=>t.__isTeleport,bt=Symbol(void 0),Bu=Symbol(void 0),Wt=Symbol(void 0),Ho=Symbol(void 0),cr=[];let Ht=null;function Ze(t=!1){cr.push(Ht=t?null:[])}function qb(){cr.pop(),Ht=cr[cr.length-1]||null}let Sr=1;function Wd(t){Sr+=t}function vm(t){return t.dynamicChildren=Sr>0?Ht||ri:null,qb(),Sr>0&&Ht&&Ht.push(t),t}function _t(t,e,n,s,i,r){return vm(A(t,e,n,s,i,r,!0))}function ju(t,e,n,s,i){return vm(He(t,e,n,s,i,!0))}function Vl(t){return t?t.__v_isVNode===!0:!1}function ps(t,e){return t.type===e.type&&t.key===e.key}const Ga="__vInternal",_m=({key:t})=>t!=null?t:null,Ko=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||at(t)||pe(t)?{i:Lt,r:t,k:e,f:!!n}:t:null;function A(t,e=null,n=null,s=0,i=null,r=t===bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_m(e),ref:e&&Ko(e),scopeId:Wa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Ku(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),Sr>0&&!o&&Ht&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ht.push(c),c}const He=zb;function zb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Sb)&&(t=Wt),Vl(t)){const a=Xn(t,e,!0);return n&&Ku(a,n),Sr>0&&!r&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(t)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(rT(t)&&(t=t.__vccOpts),e){e=Gb(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Cu(a)),Ue(c)&&(Vg(c)&&!ie(c)&&(c=ut({},c)),e.style=Su(c))}const o=Qe(t)?1:ub(t)?128:Wb(t)?64:Ue(t)?4:pe(t)?2:0;return A(t,e,n,s,i,o,r,!0)}function Gb(t){return t?Vg(t)||Ga in t?ut({},t):t:null}function Xn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Yb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_m(a),ref:e&&e.ref?n&&i?ie(i)?i.concat(Ko(e)):[i,Ko(e)]:Ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xn(t.ssContent),ssFallback:t.ssFallback&&Xn(t.ssFallback),el:t.el,anchor:t.anchor}}function Hu(t=" ",e=0){return He(Bu,null,t,e)}function Ya(t,e){const n=He(Ho,null,t);return n.staticCount=e,n}function Qa(t="",e=!1){return e?(Ze(),ju(Wt,null,t)):He(Wt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?He(Wt):ie(t)?He(bt,null,t.slice()):typeof t=="object"?Vn(t):He(Bu,null,String(t))}function Vn(t){return t.el===null||t.memo?t:Xn(t)}function Ku(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ku(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ga in e)?e._ctx=Lt:i===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),s&64?(n=16,e=[Hu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Cu([e.class,s.class]));else if(i==="style")e.style=Su([e.style,s.style]);else if($a(i)){const r=e[i],o=s[i];o&&r!==o&&!(ie(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Xt(t,e,n,s=null){Mt(t,e,7,[n,s])}const Qb=mm();let Xb=0;function Jb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Qb,r={uid:Xb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(s,i),emitsOptions:Jg(s,i),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sb.bind(null,r),t.ce&&t.ce(r),r}let Ye=null;const Zb=()=>Ye||Lt,fi=t=>{Ye=t,t.scope.on()},Is=()=>{Ye&&Ye.scope.off(),Ye=null};function Em(t){return t.vnode.shapeFlag&4}let Cr=!1;function eT(t,e=!1){Cr=e;const{props:n,children:s}=t.vnode,i=Em(t);Pb(t,n,i,e),Fb(t,s);const r=i?tT(t,e):void 0;return Cr=!1,r}function tT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ug(new Proxy(t.ctx,Nb));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?sT(t):null;fi(t),Pi();const r=qn(s,t,0,[t.props,i]);if(xi(),Is(),Ag(r)){if(r.then(Is,Is),e)return r.then(o=>{qd(t,o,e)}).catch(o=>{ja(o,t,0)});t.asyncDep=r}else qd(t,r,e)}else wm(t,e)}function qd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Kg(e)),wm(t,n)}let zd;function wm(t,e,n){const s=t.type;if(!t.render){if(!e&&zd&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ut(ut({isCustomElement:r,delimiters:a},o),c);s.render=zd(i,l)}}t.render=s.render||Kt}fi(t),Pi(),Db(t),xi(),Is()}function nT(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function sT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=nT(t))},slots:t.slots,emit:t.emit,expose:e}}function Xa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kg(Ug(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ia)return ia[n](t)}}))}function iT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function rT(t){return pe(t)&&"__vccOpts"in t}const kt=(t,e)=>Xw(t,e,Cr);function bm(t,e,n){const s=arguments.length;return s===2?Ue(e)&&!ie(e)?Vl(e)?He(t,null,[e]):He(t,e):He(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vl(n)&&(n=[n]),He(t,e,n))}const oT="3.2.37",aT="http://www.w3.org/2000/svg",gs=typeof document!="undefined"?document:null,Gd=gs&&gs.createElement("template"),cT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?gs.createElementNS(aT,t):gs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>gs.createTextNode(t),createComment:t=>gs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Gd.innerHTML=s?`<svg>${t}</svg>`:t;const a=Gd.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uT(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){for(const r in n)Ul(s,r,n[r]);if(e&&!Qe(e))for(const r in e)n[r]==null&&Ul(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Yd=/\s*!important$/;function Ul(t,e,n){if(ie(n))n.forEach(s=>Ul(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hT(t,e);Yd.test(n)?t.setProperty(Mi(s),n.replace(Yd,""),"important"):t[s]=n}}const Qd=["Webkit","Moz","ms"],Uc={};function hT(t,e){const n=Uc[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return Uc[e]=s;s=Ua(s);for(let i=0;i<Qd.length;i++){const r=Qd[i]+s;if(r in t)return Uc[e]=r}return e}const Xd="http://www.w3.org/1999/xlink";function dT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xd,e.slice(6,e.length)):t.setAttributeNS(Xd,e,n);else{const r=ow(e);n==null||r&&!bg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function fT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Tm,pT]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Bl=0;const gT=Promise.resolve(),mT=()=>{Bl=0},yT=()=>Bl||(gT.then(mT),Bl=Tm());function ms(t,e,n,s){t.addEventListener(e,n,s)}function vT(t,e,n,s){t.removeEventListener(e,n,s)}function _T(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=ET(e);if(s){const l=r[e]=wT(s,i);ms(t,a,l,c)}else o&&(vT(t,a,o,c),r[e]=void 0)}}const Jd=/(?:Once|Passive|Capture)$/;function ET(t){let e;if(Jd.test(t)){e={};let n;for(;n=t.match(Jd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Mi(t.slice(2)),e]}function wT(t,e){const n=s=>{const i=s.timeStamp||Tm();(pT||i>=n.attached-1)&&Mt(bT(s,n.value),e,5,[s])};return n.value=t,n.attached=yT(),n}function bT(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Zd=/^on[a-z]/,TT=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?lT(t,s,i):e==="style"?uT(t,n,s):$a(e)?Ou(e)||_T(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IT(t,e,s,i))?fT(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dT(t,e,s,i))};function IT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Zd.test(e)&&pe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zd.test(e)&&Qe(n)?!1:e in t}const AT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gb.props;const oa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Vo(e,n):e};function ST(t){t.target.composing=!0}function ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=oa(i);const r=s||i.props&&i.props.type==="number";ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Il(a)),t._assign(a)}),n&&ms(t,"change",()=>{t.value=t.value.trim()}),e||(ms(t,"compositionstart",ST),ms(t,"compositionend",ef),ms(t,"change",ef))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=oa(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Il(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},CT={deep:!0,created(t,e,n){t._assign=oa(n),ms(t,"change",()=>{const s=t._modelValue,i=OT(t),r=t.checked,o=t._assign;if(ie(s)){const a=Tg(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Fa(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Im(t,r))})},mounted:tf,beforeUpdate(t,e,n){t._assign=oa(n),tf(t,e,n)}};function tf(t,{value:e,oldValue:n},s){t._modelValue=e,ie(e)?t.checked=Tg(e,s.props.value)>-1:Fa(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=xa(e,Im(t,!0)))}function OT(t){return"_value"in t?t._value:t.value}function Im(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const NT=ut({patchProp:TT},cT);let nf;function DT(){return nf||(nf=jb(NT))}const kT=(...t)=>{const e=DT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=RT(s);if(!i)return;const r=e._component;!pe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function RT(t){return Qe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Js=typeof window!="undefined";function LT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Le=Object.assign;function Bc(t,e){const n={};for(const s in e){const i=e[s];n[s]=qt(i)?i.map(t):t(i)}return n}const lr=()=>{},qt=Array.isArray,MT=/\/$/,PT=t=>t.replace(MT,"");function jc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=VT(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function xT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $T(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&pi(e.matched[s],n.matched[i])&&Am(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Am(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FT(t[n],e[n]))return!1;return!0}function FT(t,e){return qt(t)?rf(t,e):qt(e)?rf(e,t):t===e}function rf(t,e){return qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function VT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Or;(function(t){t.pop="pop",t.push="push"})(Or||(Or={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function UT(t){if(!t)if(Js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),PT(t)}const BT=/^[^#]+#/;function jT(t,e){return t.replace(BT,"#")+e}function HT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ja=()=>({left:window.pageXOffset,top:window.pageYOffset});function KT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=HT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function of(t,e){return(history.state?history.state.position-e:-1)+t}const jl=new Map;function WT(t,e){jl.set(t,e)}function qT(t){const e=jl.get(t);return jl.delete(t),e}let zT=()=>location.protocol+"//"+location.host;function Sm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),sf(c,"")}return sf(n,t)+s+i}function GT(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=Sm(t,location),m=n.value,v=e.value;let _=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}_=v?d.position-v.position:0}else s(p);i.forEach(w=>{w(n.value,m,{delta:_,type:Or.pop,direction:_?_>0?ur.forward:ur.back:ur.unknown})})};function c(){o=n.value}function l(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(Le({},d.state,{scroll:Ja()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function af(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ja():null}}function YT(t){const{history:e,location:n}=window,s={value:Sm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:zT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=Le({},e.state,af(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=Le({},i.value,e.state,{forward:c,scroll:Ja()});r(u.current,u,!0);const h=Le({},af(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function QT(t){t=UT(t);const e=YT(t),n=GT(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Le({location:"",base:t,go:s,createHref:jT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function XT(t){return typeof t=="string"||t&&typeof t=="object"}function Cm(t){return typeof t=="string"||typeof t=="symbol"}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Om=Symbol("");var cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cf||(cf={}));function gi(t,e){return Le(new Error,{type:t,[Om]:!0},e)}function Mn(t,e){return t instanceof Error&&Om in t&&(e==null||!!(t.type&e))}const lf="[^/]+?",JT={sensitive:!1,strict:!1,start:!0,end:!0},ZT=/[.+*?^${}()[\]/\\]/g;function e0(t,e){const n=Le({},JT,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(ZT,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:v,optional:_,regexp:w}=d;r.push({name:m,repeatable:v,optional:_});const R=w||lf;if(R!==lf){p+=10;try{new RegExp(`(${R})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+x.message)}}let U=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(U=_&&l.length<2?`(?:/${U})`:"/"+U),_&&(U+="?"),i+=U,p+=20,_&&(p+=-8),v&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=r[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:_}=p,w=m in l?l[m]:"";if(qt(w)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=qt(w)?w.join("/"):w;if(!R)if(_)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u}return{re:o,score:s,keys:r,parse:a,stringify:c}}function t0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=t0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(uf(s))return 1;if(uf(i))return-1}return i.length-s.length}function uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const s0={type:0,value:""},i0=/[a-zA-Z0-9_]/;function r0(t){if(!t)return[[]];if(t==="/")return[[s0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){!l||(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:i0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function o0(t,e,n){const s=e0(r0(t.path),n),i=Le(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function a0(t,e){const n=[],s=new Map;e=df({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,m=l0(u);m.aliasOf=d&&d.record;const v=df(e,u),_=[m];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of U)_.push(Le({},m,{components:d?d.record.components:m.components,path:x,aliasOf:d?d.record:m}))}let w,R;for(const U of _){const{path:x}=U;if(h&&x[0]!=="/"){const X=h.record.path,J=X[X.length-1]==="/"?"":"/";U.path=h.record.path+(x&&J+x)}if(w=o0(U,h,v),d?d.alias.push(w):(R=R||w,R!==w&&R.alias.push(w),p&&u.name&&!hf(w)&&o(u.name)),m.children){const X=m.children;for(let J=0;J<X.length;J++)r(X[J],w,d&&d.children[J])}d=d||w,c(w)}return R?()=>{o(R)}:lr}function o(u){if(Cm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&n0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Nm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!hf(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw gi(1,{location:u});v=d.record.name,p=Le(c0(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(R=>R.re.test(m)),d&&(p=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw gi(1,{location:u,currentLocation:h});v=d.record.name,p=Le({},h.params,u.params),m=d.stringify(p)}const _=[];let w=d;for(;w;)_.unshift(w.record),w=w.parent;return{name:v,path:m,params:p,matched:_,meta:h0(_)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function c0(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function l0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:u0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function u0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function hf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function h0(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function df(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Nm(t,e){return e.children.some(n=>n===t||Nm(t,n))}const Dm=/#/g,d0=/&/g,f0=/\//g,p0=/=/g,g0=/\?/g,km=/\+/g,m0=/%5B/g,y0=/%5D/g,Rm=/%5E/g,v0=/%60/g,Lm=/%7B/g,_0=/%7C/g,Mm=/%7D/g,E0=/%20/g;function Wu(t){return encodeURI(""+t).replace(_0,"|").replace(m0,"[").replace(y0,"]")}function w0(t){return Wu(t).replace(Lm,"{").replace(Mm,"}").replace(Rm,"^")}function Hl(t){return Wu(t).replace(km,"%2B").replace(E0,"+").replace(Dm,"%23").replace(d0,"%26").replace(v0,"`").replace(Lm,"{").replace(Mm,"}").replace(Rm,"^")}function b0(t){return Hl(t).replace(p0,"%3D")}function T0(t){return Wu(t).replace(Dm,"%23").replace(g0,"%3F")}function I0(t){return t==null?"":T0(t).replace(f0,"%2F")}function aa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function A0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(km," "),o=r.indexOf("="),a=aa(o<0?r:r.slice(0,o)),c=o<0?null:aa(r.slice(o+1));if(a in e){let l=e[a];qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ff(t){let e="";for(let n in t){const s=t[n];if(n=b0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(s)?s.map(r=>r&&Hl(r)):[s&&Hl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function S0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=qt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const C0=Symbol(""),pf=Symbol(""),qu=Symbol(""),Pm=Symbol(""),Kl=Symbol("");function Qi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Un(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(gi(4,{from:n,to:e})):h instanceof Error?a(h):XT(h)?a(gi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Hc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(O0(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Un(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=LT(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Un(d,n,s,r,o)()}))}}return i}function O0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gf(t){const e=zn(qu),n=zn(Pm),s=kt(()=>e.resolve(ci(t.to))),i=kt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(pi.bind(null,u));if(d>-1)return d;const p=mf(c[l-2]);return l>1&&mf(u)===p&&h[h.length-1].path!==p?h.findIndex(pi.bind(null,c[l-2])):d}),r=kt(()=>i.value>-1&&R0(n.params,s.value.params)),o=kt(()=>i.value>-1&&i.value===n.matched.length-1&&Am(n.params,s.value.params));function a(c={}){return k0(c)?e[ci(t.replace)?"replace":"push"](ci(t.to)).catch(lr):Promise.resolve()}return{route:s,href:kt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const N0=sm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gf,setup(t,{slots:e}){const n=$i(gf(t)),{options:s}=zn(qu),i=kt(()=>({[yf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:bm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),D0=N0;function k0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function R0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!qt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function mf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yf=(t,e,n)=>t!=null?t:e!=null?e:n,L0=sm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=zn(Kl),i=kt(()=>t.route||s.value),r=zn(pf,0),o=kt(()=>{let l=ci(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=kt(()=>i.value.matched[o.value]);Uo(pf,kt(()=>o.value+1)),Uo(C0,a),Uo(Kl,i);const c=qw();return Bo(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!pi(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=a.value,h=u&&u.components[t.name],d=t.name;if(!h)return vf(n.default,{Component:h,route:l});const p=u.props[t.name],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,_=bm(h,Le({},m,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[d]=null)},ref:c}));return vf(n.default,{Component:_,route:l})||_}}});function vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M0=L0;function P0(t){const e=a0(t.routes,t),n=t.parseQuery||A0,s=t.stringifyQuery||ff,i=t.history,r=Qi(),o=Qi(),a=Qi(),c=zw(Ln);let l=Ln;Js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bc.bind(null,E=>""+E),h=Bc.bind(null,I0),d=Bc.bind(null,aa);function p(E,H){let D,K;return Cm(E)?(D=e.getRecordMatcher(E),K=H):K=E,e.addRoute(K,D)}function m(E){const H=e.getRecordMatcher(E);H&&e.removeRoute(H)}function v(){return e.getRoutes().map(E=>E.record)}function _(E){return!!e.getRecordMatcher(E)}function w(E,H){if(H=Le({},H||c.value),typeof E=="string"){const re=jc(n,E,H.path),f=e.resolve({path:re.path},H),g=i.createHref(re.fullPath);return Le(re,f,{params:d(f.params),hash:aa(re.hash),redirectedFrom:void 0,href:g})}let D;if("path"in E)D=Le({},E,{path:jc(n,E.path,H.path).path});else{const re=Le({},E.params);for(const f in re)re[f]==null&&delete re[f];D=Le({},E,{params:h(E.params)}),H.params=h(H.params)}const K=e.resolve(D,H),ae=E.hash||"";K.params=u(d(K.params));const _e=xT(s,Le({},E,{hash:w0(ae),path:K.path})),le=i.createHref(_e);return Le({fullPath:_e,hash:ae,query:s===ff?S0(E.query):E.query||{}},K,{redirectedFrom:void 0,href:le})}function R(E){return typeof E=="string"?jc(n,E,c.value.path):Le({},E)}function U(E,H){if(l!==E)return gi(8,{from:H,to:E})}function x(E){return se(E)}function X(E){return x(Le(R(E),{replace:!0}))}function J(E){const H=E.matched[E.matched.length-1];if(H&&H.redirect){const{redirect:D}=H;let K=typeof D=="function"?D(E):D;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=R(K):{path:K},K.params={}),Le({query:E.query,hash:E.hash,params:"path"in K?{}:E.params},K)}}function se(E,H){const D=l=w(E),K=c.value,ae=E.state,_e=E.force,le=E.replace===!0,re=J(D);if(re)return se(Le(R(re),{state:ae,force:_e,replace:le}),H||D);const f=D;f.redirectedFrom=H;let g;return!_e&&$T(s,K,D)&&(g=gi(16,{to:f,from:K}),me(K,K,!0,!1)),(g?Promise.resolve(g):q(f,K)).catch(y=>Mn(y)?Mn(y,2)?y:Y(y):b(y,f,K)).then(y=>{if(y){if(Mn(y,2))return se(Le(R(y.to),{state:ae,force:_e,replace:le}),H||f)}else y=ge(f,K,!0,le,ae);return j(f,K,y),y})}function Q(E,H){const D=U(E,H);return D?Promise.reject(D):Promise.resolve()}function q(E,H){let D;const[K,ae,_e]=x0(E,H);D=Hc(K.reverse(),"beforeRouteLeave",E,H);for(const re of K)re.leaveGuards.forEach(f=>{D.push(Un(f,E,H))});const le=Q.bind(null,E,H);return D.push(le),qs(D).then(()=>{D=[];for(const re of r.list())D.push(Un(re,E,H));return D.push(le),qs(D)}).then(()=>{D=Hc(ae,"beforeRouteUpdate",E,H);for(const re of ae)re.updateGuards.forEach(f=>{D.push(Un(f,E,H))});return D.push(le),qs(D)}).then(()=>{D=[];for(const re of E.matched)if(re.beforeEnter&&!H.matched.includes(re))if(qt(re.beforeEnter))for(const f of re.beforeEnter)D.push(Un(f,E,H));else D.push(Un(re.beforeEnter,E,H));return D.push(le),qs(D)}).then(()=>(E.matched.forEach(re=>re.enterCallbacks={}),D=Hc(_e,"beforeRouteEnter",E,H),D.push(le),qs(D))).then(()=>{D=[];for(const re of o.list())D.push(Un(re,E,H));return D.push(le),qs(D)}).catch(re=>Mn(re,8)?re:Promise.reject(re))}function j(E,H,D){for(const K of a.list())K(E,H,D)}function ge(E,H,D,K,ae){const _e=U(E,H);if(_e)return _e;const le=H===Ln,re=Js?history.state:{};D&&(K||le?i.replace(E.fullPath,Le({scroll:le&&re&&re.scroll},ae)):i.push(E.fullPath,ae)),c.value=E,me(E,H,D,le),Y()}let Ce;function z(){Ce||(Ce=i.listen((E,H,D)=>{if(!Ve.listening)return;const K=w(E),ae=J(K);if(ae){se(Le(ae,{replace:!0}),K).catch(lr);return}l=K;const _e=c.value;Js&&WT(of(_e.fullPath,D.delta),Ja()),q(K,_e).catch(le=>Mn(le,12)?le:Mn(le,2)?(se(le.to,K).then(re=>{Mn(re,20)&&!D.delta&&D.type===Or.pop&&i.go(-1,!1)}).catch(lr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),b(le,K,_e))).then(le=>{le=le||ge(K,_e,!1),le&&(D.delta?i.go(-D.delta,!1):D.type===Or.pop&&Mn(le,20)&&i.go(-1,!1)),j(K,_e,le)}).catch(lr)}))}let F=Qi(),P=Qi(),$;function b(E,H,D){Y(E);const K=P.list();return K.length?K.forEach(ae=>ae(E,H,D)):console.error(E),Promise.reject(E)}function V(){return $&&c.value!==Ln?Promise.resolve():new Promise((E,H)=>{F.add([E,H])})}function Y(E){return $||($=!E,z(),F.list().forEach(([H,D])=>E?D(E):H()),F.reset()),E}function me(E,H,D,K){const{scrollBehavior:ae}=t;if(!Js||!ae)return Promise.resolve();const _e=!D&&qT(of(E.fullPath,0))||(K||!D)&&history.state&&history.state.scroll||null;return qg().then(()=>ae(E,H,_e)).then(le=>le&&KT(le)).catch(le=>b(le,E,H))}const Te=E=>i.go(E);let ye;const Ie=new Set,Ve={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:_,getRoutes:v,resolve:w,options:t,push:x,replace:X,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:P.add,isReady:V,install(E){const H=this;E.component("RouterLink",D0),E.component("RouterView",M0),E.config.globalProperties.$router=H,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ci(c)}),Js&&!ye&&c.value===Ln&&(ye=!0,x(i.location).catch(ae=>{}));const D={};for(const ae in Ln)D[ae]=kt(()=>c.value[ae]);E.provide(qu,H),E.provide(Pm,$i(D)),E.provide(Kl,c);const K=E.unmount;Ie.add(E),E.unmount=function(){Ie.delete(E),Ie.size<1&&(l=Ln,Ce&&Ce(),Ce=null,c.value=Ln,ye=!1,$=!1),K()}}};return Ve}function qs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function x0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>pi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>pi(l,c))||i.push(c))}return[n,s,i]}var gt="top",St="bottom",Ct="right",mt="left",Za="auto",Fi=[gt,St,Ct,mt],Os="start",mi="end",xm="clippingParents",zu="viewport",Zs="popper",$m="reference",Wl=Fi.reduce(function(t,e){return t.concat([e+"-"+Os,e+"-"+mi])},[]),Gu=[].concat(Fi,[Za]).reduce(function(t,e){return t.concat([e,e+"-"+Os,e+"-"+mi])},[]),Fm="beforeRead",Vm="read",Um="afterRead",Bm="beforeMain",jm="main",Hm="afterMain",Km="beforeWrite",Wm="write",qm="afterWrite",zm=[Fm,Vm,Um,Bm,jm,Hm,Km,Wm,qm];function an(t){return t?(t.nodeName||"").toLowerCase():null}function Gt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function yi(t){var e=Gt(t).Element;return t instanceof e||t instanceof Element}function Pt(t){var e=Gt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Yu(t){if(typeof ShadowRoot=="undefined")return!1;var e=Gt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function $0(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!Pt(r)||!an(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function F0(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!Pt(i)||!an(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(c){i.removeAttribute(c)}))})}}var Qu={name:"applyStyles",enabled:!0,phase:"write",fn:$0,effect:F0,requires:["computeStyles"]};function en(t){return t.split("-")[0]}var As=Math.max,ca=Math.min,vi=Math.round;function _i(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),s=1,i=1;if(Pt(t)&&e){var r=t.offsetHeight,o=t.offsetWidth;o>0&&(s=vi(n.width)/o||1),r>0&&(i=vi(n.height)/r||1)}return{width:n.width/s,height:n.height/i,top:n.top/i,right:n.right/s,bottom:n.bottom/i,left:n.left/s,x:n.left/s,y:n.top/i}}function Xu(t){var e=_i(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function Gm(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Yu(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function In(t){return Gt(t).getComputedStyle(t)}function V0(t){return["table","td","th"].indexOf(an(t))>=0}function rs(t){return((yi(t)?t.ownerDocument:t.document)||window.document).documentElement}function ec(t){return an(t)==="html"?t:t.assignedSlot||t.parentNode||(Yu(t)?t.host:null)||rs(t)}function _f(t){return!Pt(t)||In(t).position==="fixed"?null:t.offsetParent}function U0(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&Pt(t)){var s=In(t);if(s.position==="fixed")return null}var i=ec(t);for(Yu(i)&&(i=i.host);Pt(i)&&["html","body"].indexOf(an(i))<0;){var r=In(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function qr(t){for(var e=Gt(t),n=_f(t);n&&V0(n)&&In(n).position==="static";)n=_f(n);return n&&(an(n)==="html"||an(n)==="body"&&In(n).position==="static")?e:n||U0(t)||e}function Ju(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function hr(t,e,n){return As(t,ca(e,n))}function B0(t,e,n){var s=hr(t,e,n);return s>n?n:s}function Ym(){return{top:0,right:0,bottom:0,left:0}}function Qm(t){return Object.assign({},Ym(),t)}function Xm(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var j0=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Qm(typeof e!="number"?e:Xm(e,Fi))};function H0(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=en(n.placement),c=Ju(a),l=[mt,Ct].indexOf(a)>=0,u=l?"height":"width";if(!(!r||!o)){var h=j0(i.padding,n),d=Xu(r),p=c==="y"?gt:mt,m=c==="y"?St:Ct,v=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],_=o[c]-n.rects.reference[c],w=qr(r),R=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,U=v/2-_/2,x=h[p],X=R-d[u]-h[m],J=R/2-d[u]/2+U,se=hr(x,J,X),Q=c;n.modifiersData[s]=(e={},e[Q]=se,e.centerOffset=se-J,e)}}function K0(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!Gm(e.elements.popper,i)||(e.elements.arrow=i))}var Jm={name:"arrow",enabled:!0,phase:"main",fn:H0,effect:K0,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ei(t){return t.split("-")[1]}var W0={top:"auto",right:"auto",bottom:"auto",left:"auto"};function q0(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:vi(e*i)/i||0,y:vi(n*i)/i||0}}function Ef(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,p=d===void 0?0:d,m=o.y,v=m===void 0?0:m,_=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=_.x,v=_.y;var w=o.hasOwnProperty("x"),R=o.hasOwnProperty("y"),U=mt,x=gt,X=window;if(l){var J=qr(n),se="clientHeight",Q="clientWidth";if(J===Gt(n)&&(J=rs(n),In(J).position!=="static"&&a==="absolute"&&(se="scrollHeight",Q="scrollWidth")),J=J,i===gt||(i===mt||i===Ct)&&r===mi){x=St;var q=h&&J===X&&X.visualViewport?X.visualViewport.height:J[se];v-=q-s.height,v*=c?1:-1}if(i===mt||(i===gt||i===St)&&r===mi){U=Ct;var j=h&&J===X&&X.visualViewport?X.visualViewport.width:J[Q];p-=j-s.width,p*=c?1:-1}}var ge=Object.assign({position:a},l&&W0),Ce=u===!0?q0({x:p,y:v}):{x:p,y:v};if(p=Ce.x,v=Ce.y,c){var z;return Object.assign({},ge,(z={},z[x]=R?"0":"",z[U]=w?"0":"",z.transform=(X.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",z))}return Object.assign({},ge,(e={},e[x]=R?v+"px":"",e[U]=w?p+"px":"",e.transform="",e))}function z0(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:en(e.placement),variation:Ei(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ef(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ef(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Zu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:z0,data:{}},Io={passive:!0};function G0(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,c=Gt(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach(function(u){u.addEventListener("scroll",n.update,Io)}),a&&c.addEventListener("resize",n.update,Io),function(){r&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Io)}),a&&c.removeEventListener("resize",n.update,Io)}}var eh={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:G0,data:{}},Y0={left:"right",right:"left",bottom:"top",top:"bottom"};function qo(t){return t.replace(/left|right|bottom|top/g,function(e){return Y0[e]})}var Q0={start:"end",end:"start"};function wf(t){return t.replace(/start|end/g,function(e){return Q0[e]})}function th(t){var e=Gt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function nh(t){return _i(rs(t)).left+th(t).scrollLeft}function X0(t){var e=Gt(t),n=rs(t),s=e.visualViewport,i=n.clientWidth,r=n.clientHeight,o=0,a=0;return s&&(i=s.width,r=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=s.offsetLeft,a=s.offsetTop)),{width:i,height:r,x:o+nh(t),y:a}}function J0(t){var e,n=rs(t),s=th(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=As(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=As(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+nh(t),c=-s.scrollTop;return In(i||n).direction==="rtl"&&(a+=As(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function sh(t){var e=In(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function Zm(t){return["html","body","#document"].indexOf(an(t))>=0?t.ownerDocument.body:Pt(t)&&sh(t)?t:Zm(ec(t))}function dr(t,e){var n;e===void 0&&(e=[]);var s=Zm(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=Gt(s),o=i?[r].concat(r.visualViewport||[],sh(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(dr(ec(o)))}function ql(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Z0(t){var e=_i(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function bf(t,e){return e===zu?ql(X0(t)):yi(e)?Z0(e):ql(J0(rs(t)))}function eI(t){var e=dr(ec(t)),n=["absolute","fixed"].indexOf(In(t).position)>=0,s=n&&Pt(t)?qr(t):t;return yi(s)?e.filter(function(i){return yi(i)&&Gm(i,s)&&an(i)!=="body"}):[]}function tI(t,e,n){var s=e==="clippingParents"?eI(t):[].concat(e),i=[].concat(s,[n]),r=i[0],o=i.reduce(function(a,c){var l=bf(t,c);return a.top=As(l.top,a.top),a.right=ca(l.right,a.right),a.bottom=ca(l.bottom,a.bottom),a.left=As(l.left,a.left),a},bf(t,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function ey(t){var e=t.reference,n=t.element,s=t.placement,i=s?en(s):null,r=s?Ei(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case gt:c={x:o,y:e.y-n.height};break;case St:c={x:o,y:e.y+e.height};break;case Ct:c={x:e.x+e.width,y:a};break;case mt:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?Ju(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(r){case Os:c[l]=c[l]-(e[u]/2-n[u]/2);break;case mi:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function wi(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.boundary,o=r===void 0?xm:r,a=n.rootBoundary,c=a===void 0?zu:a,l=n.elementContext,u=l===void 0?Zs:l,h=n.altBoundary,d=h===void 0?!1:h,p=n.padding,m=p===void 0?0:p,v=Qm(typeof m!="number"?m:Xm(m,Fi)),_=u===Zs?$m:Zs,w=t.rects.popper,R=t.elements[d?_:u],U=tI(yi(R)?R:R.contextElement||rs(t.elements.popper),o,c),x=_i(t.elements.reference),X=ey({reference:x,element:w,strategy:"absolute",placement:i}),J=ql(Object.assign({},w,X)),se=u===Zs?J:x,Q={top:U.top-se.top+v.top,bottom:se.bottom-U.bottom+v.bottom,left:U.left-se.left+v.left,right:se.right-U.right+v.right},q=t.modifiersData.offset;if(u===Zs&&q){var j=q[i];Object.keys(Q).forEach(function(ge){var Ce=[Ct,St].indexOf(ge)>=0?1:-1,z=[gt,St].indexOf(ge)>=0?"y":"x";Q[ge]+=j[z]*Ce})}return Q}function nI(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?Gu:c,u=Ei(s),h=u?a?Wl:Wl.filter(function(m){return Ei(m)===u}):Fi,d=h.filter(function(m){return l.indexOf(m)>=0});d.length===0&&(d=h);var p=d.reduce(function(m,v){return m[v]=wi(t,{placement:v,boundary:i,rootBoundary:r,padding:o})[en(v)],m},{});return Object.keys(p).sort(function(m,v){return p[m]-p[v]})}function sI(t){if(en(t)===Za)return[];var e=qo(t);return[wf(t),e,wf(e)]}function iI(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,v=n.allowedAutoPlacements,_=e.options.placement,w=en(_),R=w===_,U=c||(R||!m?[qo(_)]:sI(_)),x=[_].concat(U).reduce(function(Ve,E){return Ve.concat(en(E)===Za?nI(e,{placement:E,boundary:u,rootBoundary:h,padding:l,flipVariations:m,allowedAutoPlacements:v}):E)},[]),X=e.rects.reference,J=e.rects.popper,se=new Map,Q=!0,q=x[0],j=0;j<x.length;j++){var ge=x[j],Ce=en(ge),z=Ei(ge)===Os,F=[gt,St].indexOf(Ce)>=0,P=F?"width":"height",$=wi(e,{placement:ge,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),b=F?z?Ct:mt:z?St:gt;X[P]>J[P]&&(b=qo(b));var V=qo(b),Y=[];if(r&&Y.push($[Ce]<=0),a&&Y.push($[b]<=0,$[V]<=0),Y.every(function(Ve){return Ve})){q=ge,Q=!1;break}se.set(ge,Y)}if(Q)for(var me=m?3:1,Te=function(E){var H=x.find(function(D){var K=se.get(D);if(K)return K.slice(0,E).every(function(ae){return ae})});if(H)return q=H,"break"},ye=me;ye>0;ye--){var Ie=Te(ye);if(Ie==="break")break}e.placement!==q&&(e.modifiersData[s]._skip=!0,e.placement=q,e.reset=!0)}}var ty={name:"flip",enabled:!0,phase:"main",fn:iI,requiresIfExists:["offset"],data:{_skip:!1}};function Tf(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function If(t){return[gt,Ct,St,mt].some(function(e){return t[e]>=0})}function rI(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=wi(e,{elementContext:"reference"}),a=wi(e,{altBoundary:!0}),c=Tf(o,s),l=Tf(a,i,r),u=If(c),h=If(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var ny={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rI};function oI(t,e,n){var s=en(t),i=[mt,gt].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[mt,Ct].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function aI(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Gu.reduce(function(u,h){return u[h]=oI(h,e.rects,r),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[s]=o}var sy={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:aI};function cI(t){var e=t.state,n=t.name;e.modifiersData[n]=ey({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var ih={name:"popperOffsets",enabled:!0,phase:"read",fn:cI,data:{}};function lI(t){return t==="x"?"y":"x"}function uI(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,p=d===void 0?!0:d,m=n.tetherOffset,v=m===void 0?0:m,_=wi(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),w=en(e.placement),R=Ei(e.placement),U=!R,x=Ju(w),X=lI(x),J=e.modifiersData.popperOffsets,se=e.rects.reference,Q=e.rects.popper,q=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,j=typeof q=="number"?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),ge=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ce={x:0,y:0};if(!!J){if(r){var z,F=x==="y"?gt:mt,P=x==="y"?St:Ct,$=x==="y"?"height":"width",b=J[x],V=b+_[F],Y=b-_[P],me=p?-Q[$]/2:0,Te=R===Os?se[$]:Q[$],ye=R===Os?-Q[$]:-se[$],Ie=e.elements.arrow,Ve=p&&Ie?Xu(Ie):{width:0,height:0},E=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ym(),H=E[F],D=E[P],K=hr(0,se[$],Ve[$]),ae=U?se[$]/2-me-K-H-j.mainAxis:Te-K-H-j.mainAxis,_e=U?-se[$]/2+me+K+D+j.mainAxis:ye+K+D+j.mainAxis,le=e.elements.arrow&&qr(e.elements.arrow),re=le?x==="y"?le.clientTop||0:le.clientLeft||0:0,f=(z=ge==null?void 0:ge[x])!=null?z:0,g=b+ae-f-re,y=b+_e-f,I=hr(p?ca(V,g):V,b,p?As(Y,y):Y);J[x]=I,Ce[x]=I-b}if(a){var T,L=x==="x"?gt:mt,B=x==="x"?St:Ct,O=J[X],M=X==="y"?"height":"width",C=O+_[L],Z=O-_[B],G=[gt,mt].indexOf(w)!==-1,ee=(T=ge==null?void 0:ge[X])!=null?T:0,oe=G?C:O-se[M]-Q[M]-ee+j.altAxis,Ee=G?O+se[M]+Q[M]-ee-j.altAxis:Z,De=p&&G?B0(oe,O,Ee):hr(p?oe:C,O,p?Ee:Z);J[X]=De,Ce[X]=De-O}e.modifiersData[s]=Ce}}var iy={name:"preventOverflow",enabled:!0,phase:"main",fn:uI,requiresIfExists:["offset"]};function hI(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function dI(t){return t===Gt(t)||!Pt(t)?th(t):hI(t)}function fI(t){var e=t.getBoundingClientRect(),n=vi(e.width)/t.offsetWidth||1,s=vi(e.height)/t.offsetHeight||1;return n!==1||s!==1}function pI(t,e,n){n===void 0&&(n=!1);var s=Pt(e),i=Pt(e)&&fI(e),r=rs(e),o=_i(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!n)&&((an(e)!=="body"||sh(r))&&(a=dI(e)),Pt(e)?(c=_i(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=nh(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function gI(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function mI(t){var e=gI(t);return zm.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function yI(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function vI(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Af={placement:"bottom",modifiers:[],strategy:"absolute"};function Sf(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function tc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Af:i;return function(a,c,l){l===void 0&&(l=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Af,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(w){var R=typeof w=="function"?w(u.options):w;v(),u.options=Object.assign({},r,u.options,R),u.scrollParents={reference:yi(a)?dr(a):a.contextElement?dr(a.contextElement):[],popper:dr(c)};var U=mI(vI([].concat(s,u.options.modifiers)));return u.orderedModifiers=U.filter(function(x){return x.enabled}),m(),p.update()},forceUpdate:function(){if(!d){var w=u.elements,R=w.reference,U=w.popper;if(!!Sf(R,U)){u.rects={reference:pI(R,qr(U),u.options.strategy==="fixed"),popper:Xu(U)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(j){return u.modifiersData[j.name]=Object.assign({},j.data)});for(var x=0;x<u.orderedModifiers.length;x++){if(u.reset===!0){u.reset=!1,x=-1;continue}var X=u.orderedModifiers[x],J=X.fn,se=X.options,Q=se===void 0?{}:se,q=X.name;typeof J=="function"&&(u=J({state:u,options:Q,name:q,instance:p})||u)}}}},update:yI(function(){return new Promise(function(_){p.forceUpdate(),_(u)})}),destroy:function(){v(),d=!0}};if(!Sf(a,c))return p;p.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function m(){u.orderedModifiers.forEach(function(_){var w=_.name,R=_.options,U=R===void 0?{}:R,x=_.effect;if(typeof x=="function"){var X=x({state:u,name:w,instance:p,options:U}),J=function(){};h.push(X||J)}})}function v(){h.forEach(function(_){return _()}),h=[]}return p}}var _I=tc(),EI=[eh,ih,Zu,Qu],wI=tc({defaultModifiers:EI}),bI=[eh,ih,Zu,Qu,sy,ty,iy,Jm,ny],rh=tc({defaultModifiers:bI}),ry=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:tc,detectOverflow:wi,createPopperBase:_I,createPopper:rh,createPopperLite:wI,top:gt,bottom:St,right:Ct,left:mt,auto:Za,basePlacements:Fi,start:Os,end:mi,clippingParents:xm,viewport:zu,popper:Zs,reference:$m,variationPlacements:Wl,placements:Gu,beforeRead:Fm,read:Vm,afterRead:Um,beforeMain:Bm,main:jm,afterMain:Hm,beforeWrite:Km,write:Wm,afterWrite:qm,modifierPhases:zm,applyStyles:Qu,arrow:Jm,computeStyles:Zu,eventListeners:eh,flip:ty,hide:ny,offset:sy,popperOffsets:ih,preventOverflow:iy},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const TI=1e6,II=1e3,zl="transitionend",AI=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),SI=t=>{do t+=Math.floor(Math.random()*TI);while(document.getElementById(t));return t},oy=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},ay=t=>{const e=oy(t);return e&&document.querySelector(e)?e:null},vn=t=>{const e=oy(t);return e?document.querySelector(e):null},CI=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*II)},cy=t=>{t.dispatchEvent(new Event(zl))},_n=t=>!t||typeof t!="object"?!1:(typeof t.jquery!="undefined"&&(t=t[0]),typeof t.nodeType!="undefined"),Jn=t=>_n(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,Vi=t=>{if(!_n(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Zn=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled!="undefined"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",ly=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?ly(t.parentNode):null},la=()=>{},zr=t=>{t.offsetHeight},uy=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Kc=[],OI=t=>{document.readyState==="loading"?(Kc.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Kc)e()}),Kc.push(t)):t()},Vt=()=>document.documentElement.dir==="rtl",Ut=t=>{OI(()=>{const e=uy();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},fn=t=>{typeof t=="function"&&t()},hy=(t,e,n=!0)=>{if(!n){fn(t);return}const s=5,i=CI(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(zl,o),fn(t))};e.addEventListener(zl,o),setTimeout(()=>{r||cy(e)},i)},oh=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},NI=/[^.]*(?=\..*)\.|.*/,DI=/\..*/,kI=/::\d+$/,Wc={};let Cf=1;const dy={mouseenter:"mouseover",mouseleave:"mouseout"},RI=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function fy(t,e){return e&&`${e}::${Cf++}`||t.uidEvent||Cf++}function py(t){const e=fy(t);return t.uidEvent=e,Wc[e]=Wc[e]||{},Wc[e]}function LI(t,e){return function n(s){return s.delegateTarget=t,n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function MI(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return i.delegateTarget=o,s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function gy(t,e,n=null){return Object.values(t).find(s=>s.originalHandler===e&&s.delegationSelector===n)}function my(t,e,n){const s=typeof e=="string",i=s?n:e;let r=yy(t);return RI.has(r)||(r=t),[s,i,r]}function Of(t,e,n,s,i){if(typeof e!="string"||!t)return;if(n||(n=s,s=null),e in dy){const p=m=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return m.call(this,v)};s?s=p(s):n=p(n)}const[r,o,a]=my(e,n,s),c=py(t),l=c[a]||(c[a]={}),u=gy(l,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=fy(o,e.replace(NI,"")),d=r?MI(t,n,s):LI(t,n);d.delegationSelector=r?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,l[h]=d,t.addEventListener(a,d,r)}function Gl(t,e,n,s,i){const r=gy(e[n],s,i);!r||(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function PI(t,e,n,s){const i=e[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];Gl(t,e,n,o.originalHandler,o.delegationSelector)}}function yy(t){return t=t.replace(DI,""),dy[t]||t}const S={on(t,e,n,s){Of(t,e,n,s,!1)},one(t,e,n,s){Of(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=my(e,n,s),a=o!==e,c=py(t),l=e.startsWith(".");if(typeof r!="undefined"){if(!c||!c[o])return;Gl(t,c,o,r,i?n:null);return}if(l)for(const h of Object.keys(c))PI(t,c,h,e.slice(1));const u=c[o]||{};for(const h of Object.keys(u)){const d=h.replace(kI,"");if(!a||e.includes(d)){const p=u[h];Gl(t,c,o,p.originalHandler,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=uy(),i=yy(e),r=e!==i;let o=null,a=!0,c=!0,l=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=new Event(e,{bubbles:a,cancelable:!0});if(typeof n!="undefined")for(const h of Object.keys(n))Object.defineProperty(u,h,{get(){return n[h]}});return l&&u.preventDefault(),c&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}},Pn=new Map,qc={set(t,e,n){Pn.has(t)||Pn.set(t,new Map);const s=Pn.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return Pn.has(t)&&Pn.get(t).get(e)||null},remove(t,e){if(!Pn.has(t))return;const n=Pn.get(t);n.delete(e),n.size===0&&Pn.delete(t)}};function Nf(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function zc(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const En={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${zc(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${zc(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Nf(t.dataset[s])}return e},getDataAttribute(t,e){return Nf(t.getAttribute(`data-bs-${zc(e)}`))}};class Gr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=_n(n)?En.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},..._n(n)?En.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=e[s],o=_n(r)?"element":AI(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const xI="5.2.0-beta1";class Yt extends Gr{constructor(e,n){super(),e=Jn(e),e&&(this._element=e,this._config=this._getConfig(n),qc.set(this._element,this.constructor.DATA_KEY,this))}dispose(){qc.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){hy(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return qc.get(Jn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return xI}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const nc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Zn(this))return;const r=vn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},$I="alert",FI="bs.alert",vy=`.${FI}`,VI=`close${vy}`,UI=`closed${vy}`,BI="fade",jI="show";class sc extends Yt{static get NAME(){return $I}close(){if(S.trigger(this._element,VI).defaultPrevented)return;this._element.classList.remove(jI);const n=this._element.classList.contains(BI);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,UI),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=sc.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}nc(sc,"close");Ut(sc);const HI="button",KI="bs.button",WI=`.${KI}`,qI=".data-api",zI="active",Df='[data-bs-toggle="button"]',GI=`click${WI}${qI}`;class ic extends Yt{static get NAME(){return HI}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(zI))}static jQueryInterface(e){return this.each(function(){const n=ic.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,GI,Df,t=>{t.preventDefault();const e=t.target.closest(Df);ic.getOrCreateInstance(e).toggle()});Ut(ic);const we={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Zn(n)&&Vi(n))}},YI="swipe",Ui=".bs.swipe",QI=`touchstart${Ui}`,XI=`touchmove${Ui}`,JI=`touchend${Ui}`,ZI=`pointerdown${Ui}`,eA=`pointerup${Ui}`,tA="touch",nA="pen",sA="pointer-event",iA=40,rA={leftCallback:null,rightCallback:null,endCallback:null},oA={leftCallback:"(function|null)",rightCallback:"(function|null)",endCallback:"(function|null)"};class ua extends Gr{constructor(e,n){super(),this._element=e,!(!e||!ua.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return rA}static get DefaultType(){return oA}static get NAME(){return YI}dispose(){S.off(this._element,Ui)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),fn(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=iA)return;const n=e/this._deltaX;this._deltaX=0,n&&fn(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,ZI,e=>this._start(e)),S.on(this._element,eA,e=>this._end(e)),this._element.classList.add(sA)):(S.on(this._element,QI,e=>this._start(e)),S.on(this._element,XI,e=>this._move(e)),S.on(this._element,JI,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===nA||e.pointerType===tA)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const aA="carousel",cA="bs.carousel",os=`.${cA}`,_y=".data-api",lA="ArrowLeft",uA="ArrowRight",hA=500,Xi="next",zs="prev",ei="left",zo="right",dA=`slide${os}`,Gc=`slid${os}`,fA=`keydown${os}`,pA=`mouseenter${os}`,gA=`mouseleave${os}`,mA=`dragstart${os}`,yA=`load${os}${_y}`,vA=`click${os}${_y}`,Ey="carousel",Ao="active",_A="slide",EA="carousel-item-end",wA="carousel-item-start",bA="carousel-item-next",TA="carousel-item-prev",wy=".active",by=".carousel-item",IA=wy+by,AA=".carousel-item img",SA=".carousel-indicators",CA="[data-bs-slide], [data-bs-slide-to]",OA='[data-bs-ride="carousel"]',NA={[lA]:zo,[uA]:ei},DA={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kA={interval:"(number|boolean)",keyboard:"boolean",ride:"(boolean|string)",pause:"(string|boolean)",touch:"boolean",wrap:"boolean"};class Yr extends Yt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=we.findOne(SA,this._element),this._addEventListeners(),this._config.ride===Ey&&this.cycle()}static get Default(){return DA}static get DefaultType(){return kA}static get NAME(){return aA}next(){this._slide(Xi)}nextWhenVisible(){!document.hidden&&Vi(this._element)&&this.next()}prev(){this._slide(zs)}pause(){this._isSliding&&cy(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){S.one(this._element,Gc,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,Gc,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Xi:zs;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,fA,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,pA,()=>this.pause()),S.on(this._element,gA,()=>this._maybeEnableCycle())),this._config.touch&&ua.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of we.find(AA,this._element))S.on(s,mA,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ei)),rightCallback:()=>this._slide(this._directionToOrder(zo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),hA+this._config.interval))}};this._swipeHelper=new ua(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=NA[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=we.findOne(wy,this._indicatorsElement);n.classList.remove(Ao),n.removeAttribute("aria-current");const s=we.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Ao),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Xi,r=n||oh(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=p=>S.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(dA).defaultPrevented||!s||!r)return;const l=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?wA:EA,h=i?bA:TA;r.classList.add(h),zr(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Ao),s.classList.remove(Ao,h,u),this._isSliding=!1,a(Gc)};this._queueCallback(d,s,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(_A)}_getActive(){return we.findOne(IA,this._element)}_getItems(){return we.find(by,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Vt()?e===ei?zs:Xi:e===ei?Xi:zs}_orderToDirection(e){return Vt()?e===zs?ei:zo:e===zs?zo:ei}static jQueryInterface(e){return this.each(function(){const n=Yr.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,vA,CA,function(t){const e=vn(this);if(!e||!e.classList.contains(Ey))return;t.preventDefault();const n=Yr.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(En.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,yA,()=>{const t=we.find(OA);for(const e of t)Yr.getOrCreateInstance(e)});Ut(Yr);const RA="collapse",LA="bs.collapse",Qr=`.${LA}`,MA=".data-api",PA=`show${Qr}`,xA=`shown${Qr}`,$A=`hide${Qr}`,FA=`hidden${Qr}`,VA=`click${Qr}${MA}`,Yc="show",ni="collapse",So="collapsing",UA="collapsed",BA=`:scope .${ni} .${ni}`,jA="collapse-horizontal",HA="width",KA="height",WA=".collapse.show, .collapse.collapsing",Yl='[data-bs-toggle="collapse"]',qA={toggle:!0,parent:null},zA={toggle:"boolean",parent:"(null|element)"};class Nr extends Yt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=we.find(Yl);for(const i of s){const r=ay(i),o=we.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return qA}static get DefaultType(){return zA}static get NAME(){return RA}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(WA).filter(a=>a!==this._element).map(a=>Nr.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,PA).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(ni),this._element.classList.add(So),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(So),this._element.classList.add(ni,Yc),this._element.style[s]="",S.trigger(this._element,xA)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,$A).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,zr(this._element),this._element.classList.add(So),this._element.classList.remove(ni,Yc);for(const i of this._triggerArray){const r=vn(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(So),this._element.classList.add(ni),S.trigger(this._element,FA)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Yc)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Jn(e.parent),e}_getDimension(){return this._element.classList.contains(jA)?HA:KA}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Yl);for(const n of e){const s=vn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=we.find(BA,this._config.parent);return we.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(!!e.length)for(const s of e)s.classList.toggle(UA,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=Nr.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]=="undefined")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,VA,Yl,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=ay(this),n=we.find(e);for(const s of n)Nr.getOrCreateInstance(s,{toggle:!1}).toggle()});Ut(Nr);const kf="dropdown",GA="bs.dropdown",Fs=`.${GA}`,ah=".data-api",YA="Escape",Rf="Tab",QA="ArrowUp",Lf="ArrowDown",XA=2,JA=`hide${Fs}`,ZA=`hidden${Fs}`,eS=`show${Fs}`,tS=`shown${Fs}`,Ty=`click${Fs}${ah}`,Iy=`keydown${Fs}${ah}`,nS=`keyup${Fs}${ah}`,ti="show",sS="dropup",iS="dropend",rS="dropstart",oS="dropup-center",aS="dropdown-center",rc='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',cS=`${rc}.${ti}`,Ay=".dropdown-menu",lS=".navbar",uS=".navbar-nav",hS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",dS=Vt()?"top-end":"top-start",fS=Vt()?"top-start":"top-end",pS=Vt()?"bottom-end":"bottom-start",gS=Vt()?"bottom-start":"bottom-end",mS=Vt()?"left-start":"right-start",yS=Vt()?"right-start":"left-start",vS="top",_S="bottom",ES={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},wS={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class tn extends Yt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=we.findOne(Ay,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ES}static get DefaultType(){return wS}static get NAME(){return kf}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Zn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,eS,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(uS))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",la);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ti),this._element.classList.add(ti),S.trigger(this._element,tS,e)}}hide(){if(Zn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,JA,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",la);this._popper&&this._popper.destroy(),this._menu.classList.remove(ti),this._element.classList.remove(ti),this._element.setAttribute("aria-expanded","false"),En.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,ZA,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!_n(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${kf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof ry=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:_n(this._config.reference)?e=Jn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=rh(e,this._menu,n)}_isShown(){return this._menu.classList.contains(ti)}_getPlacement(){const e=this._parent;if(e.classList.contains(iS))return mS;if(e.classList.contains(rS))return yS;if(e.classList.contains(oS))return vS;if(e.classList.contains(aS))return _S;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(sS)?n?fS:dS:n?gS:pS}_detectNavbar(){return this._element.closest(lS)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(En.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=we.find(hS,this._menu).filter(i=>Vi(i));!s.length||oh(s,n,e===Lf,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=tn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===XA||e.type==="keyup"&&e.key!==Rf)return;const n=we.find(cS);for(const s of n){const i=tn.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Rf||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===YA,i=[QA,Lf].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=we.findOne(rc,e.delegateTarget.parentNode),o=tn.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,Iy,rc,tn.dataApiKeydownHandler);S.on(document,Iy,Ay,tn.dataApiKeydownHandler);S.on(document,Ty,tn.clearMenus);S.on(document,nS,tn.clearMenus);S.on(document,Ty,rc,function(t){t.preventDefault(),tn.getOrCreateInstance(this).toggle()});Ut(tn);const Mf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Pf=".sticky-top",Co="padding-right",xf="margin-right";class Ql{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Co,n=>n+e),this._setElementAttributes(Mf,Co,n=>n+e),this._setElementAttributes(Pf,xf,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Co),this._resetElementAttributes(Mf,Co),this._resetElementAttributes(Pf,xf)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&En.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=En.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}En.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(_n(e)){n(e);return}for(const s of we.find(e,this._element))n(s)}}const Sy="backdrop",bS="fade",$f="show",Ff=`mousedown.bs.${Sy}`,TS={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},IS={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class Cy extends Gr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return TS}static get DefaultType(){return IS}static get NAME(){return Sy}show(e){if(!this._config.isVisible){fn(e);return}this._append();const n=this._getElement();this._config.isAnimated&&zr(n),n.classList.add($f),this._emulateAnimation(()=>{fn(e)})}hide(e){if(!this._config.isVisible){fn(e);return}this._getElement().classList.remove($f),this._emulateAnimation(()=>{this.dispose(),fn(e)})}dispose(){!this._isAppended||(S.off(this._element,Ff),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(bS),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Jn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,Ff,()=>{fn(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){hy(e,this._getElement(),this._config.isAnimated)}}const AS="focustrap",SS="bs.focustrap",ha=`.${SS}`,CS=`focusin${ha}`,OS=`keydown.tab${ha}`,NS="Tab",DS="forward",Vf="backward",kS={trapElement:null,autofocus:!0},RS={trapElement:"element",autofocus:"boolean"};class Oy extends Gr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return kS}static get DefaultType(){return RS}static get NAME(){return AS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,ha),S.on(document,CS,e=>this._handleFocusin(e)),S.on(document,OS,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,S.off(document,ha))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=we.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Vf?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===NS&&(this._lastTabNavDirection=e.shiftKey?Vf:DS)}}const LS="modal",MS="bs.modal",hn=`.${MS}`,PS=".data-api",xS="Escape",$S=`hide${hn}`,FS=`hidePrevented${hn}`,Ny=`hidden${hn}`,Dy=`show${hn}`,VS=`shown${hn}`,US=`resize${hn}`,BS=`click.dismiss${hn}`,jS=`keydown.dismiss${hn}`,HS=`click${hn}${PS}`,Uf="modal-open",KS="fade",Bf="show",Qc="modal-static",WS=".modal.show",qS=".modal-dialog",zS=".modal-body",GS='[data-bs-toggle="modal"]',YS={backdrop:!0,keyboard:!0,focus:!0},QS={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class bi extends Yt{constructor(e,n){super(e,n),this._dialog=we.findOne(qS,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ql,this._addEventListeners()}static get Default(){return YS}static get DefaultType(){return QS}static get NAME(){return LS}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,Dy,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Uf),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,$S).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Bf),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])S.off(e,hn);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Cy({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Oy({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=we.findOne(zS,this._dialog);n&&(n.scrollTop=0),zr(this._element),this._element.classList.add(Bf);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,VS,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,jS,e=>{if(e.key===xS){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),S.on(window,US,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,BS,e=>{if(e.target===e.currentTarget){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Uf),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,Ny)})}_isAnimated(){return this._element.classList.contains(KS)}_triggerBackdropTransition(){if(S.trigger(this._element,FS).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Qc)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Qc),this._queueCallback(()=>{this._element.classList.remove(Qc),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=Vt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=Vt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=bi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]=="undefined")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,HS,GS,function(t){const e=vn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,Dy,i=>{i.defaultPrevented||S.one(e,Ny,()=>{Vi(this)&&this.focus()})});const n=we.findOne(WS);n&&bi.getInstance(n).hide(),bi.getOrCreateInstance(e).toggle(this)});nc(bi);Ut(bi);const XS="offcanvas",JS="bs.offcanvas",Nn=`.${JS}`,ky=".data-api",ZS=`load${Nn}${ky}`,eC="Escape",jf="show",Hf="showing",Kf="hiding",tC="offcanvas-backdrop",Ry=".offcanvas.show",nC=`show${Nn}`,sC=`shown${Nn}`,iC=`hide${Nn}`,Wf=`hidePrevented${Nn}`,Ly=`hidden${Nn}`,rC=`resize${Nn}`,oC=`click${Nn}${ky}`,aC=`keydown.dismiss${Nn}`,cC='[data-bs-toggle="offcanvas"]',lC={backdrop:!0,keyboard:!0,scroll:!1},uC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class es extends Yt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return lC}static get DefaultType(){return uC}static get NAME(){return XS}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,nC,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ql().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hf);const s=()=>{this._config.scroll||this._focustrap.activate(),this._element.classList.add(jf),this._element.classList.remove(Hf),S.trigger(this._element,sC,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,iC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Kf),this._backdrop.hide();const n=()=>{this._element.classList.remove(jf,Kf),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ql().reset(),S.trigger(this._element,Ly)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,Wf);return}this.hide()},n=Boolean(this._config.backdrop);return new Cy({className:tC,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new Oy({trapElement:this._element})}_addEventListeners(){S.on(this._element,aC,e=>{if(e.key===eC){if(!this._config.keyboard){S.trigger(this._element,Wf);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=es.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,oC,cC,function(t){const e=vn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Zn(this))return;S.one(e,Ly,()=>{Vi(this)&&this.focus()});const n=we.findOne(Ry);n&&n!==e&&es.getInstance(n).hide(),es.getOrCreateInstance(e).toggle(this)});S.on(window,ZS,()=>{for(const t of we.find(Ry))es.getOrCreateInstance(t).show()});S.on(window,rC,()=>{for(const t of we.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&es.getOrCreateInstance(t).hide()});nc(es);Ut(es);const hC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),dC=/^aria-[\w-]*$/i,fC=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,pC=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,gC=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?hC.has(n)?Boolean(fC.test(t.nodeValue)||pC.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},My={"*":["class","dir","id","lang","role",dC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function mC(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)gC(u,l)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const yC="TemplateFactory",vC={extraClass:"",template:"<div></div>",content:{},html:!1,sanitize:!0,sanitizeFn:null,allowList:My},_C={extraClass:"(string|function)",template:"string",content:"object",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object"},EC={selector:"(string|element)",entry:"(string|element|function|null)"};class wC extends Gr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return vC}static get DefaultType(){return _C}static get NAME(){return yC}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},EC)}_setContent(e,n,s){const i=we.findOne(s,e);if(!!i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(_n(n)){this._putElementInTemplate(Jn(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?mC(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const bC="tooltip",TC=new Set(["sanitize","allowList","sanitizeFn"]),Xc="fade",IC="modal",Oo="show",AC=".tooltip-inner",qf=`.${IC}`,zf="hide.bs.modal",Ji="hover",Jc="focus",SC="click",CC="manual",OC="hide",NC="hidden",DC="show",kC="shown",RC="inserted",LC="click",MC="focusin",PC="focusout",xC="mouseenter",$C="mouseleave",FC={AUTO:"auto",TOP:"top",RIGHT:Vt()?"left":"right",BOTTOM:"bottom",LEFT:Vt()?"right":"left"},VC={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:My,popperConfig:null},UC={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"};class Bi extends Yt{constructor(e,n){if(typeof ry=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this.tip=null,this._setListeners()}static get Default(){return VC}static get DefaultType(){return UC}static get NAME(){return bC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(!!this._isEnabled){if(e){const n=this._initializeOnDelegatedTarget(e);n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter():n._leave();return}if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(qf),zf,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(DC)),s=(ly(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(RC))),this._popper?this._popper.update():this._createPopper(i),i.classList.add(Oo),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",la);const o=()=>{const a=this._isHovered;this._isHovered=!1,S.trigger(this._element,this.constructor.eventName(kC)),a&&this._leave()};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(OC)).defaultPrevented)return;const n=this._getTipElement();if(n.classList.remove(Oo),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",la);this._activeTrigger[SC]=!1,this._activeTrigger[Jc]=!1,this._activeTrigger[Ji]=!1,this._isHovered=!1;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||n.remove(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(NC)),this._disposePopper())};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Xc,Oo),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=SI(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Xc),n}setContent(e){let n=!1;this.tip&&(n=this._isShown(),this.tip.remove(),this.tip=null),this._disposePopper(),this.tip=this._createTipElement(e),n&&this.show()}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new wC({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[AC]:this._getTitle()}}_getTitle(){return this._config.title}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xc)}_isShown(){return this.tip&&this.tip.classList.contains(Oo)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=FC[n.toUpperCase()];this._popper=rh(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(LC),this._config.selector,s=>this.toggle(s));else if(n!==CC){const s=n===Ji?this.constructor.eventName(xC):this.constructor.eventName(MC),i=n===Ji?this.constructor.eventName($C):this.constructor.eventName(PC);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Jc:Ji]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Jc:Ji]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(qf),zf,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._config.originalTitle;!e||(!this._element.getAttribute("aria-label")&&!this._element.textContent&&this._element.setAttribute("aria-label",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=En.getDataAttributes(this._element);for(const s of Object.keys(n))TC.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Jn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),e.originalTitle=this._element.getAttribute("title")||"",e.title=this._resolvePossibleFunction(e.title)||e.originalTitle,typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const n=Bi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Ut(Bi);const BC="popover",jC=".popover-header",HC=".popover-body",KC={...Bi.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},WC={...Bi.DefaultType,content:"(null|string|element|function)"};class ch extends Bi{static get Default(){return KC}static get DefaultType(){return WC}static get NAME(){return BC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[jC]:this._getTitle(),[HC]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=ch.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Ut(ch);const qC="scrollspy",zC="bs.scrollspy",lh=`.${zC}`,GC=".data-api",YC=`activate${lh}`,Gf=`click${lh}`,QC=`load${lh}${GC}`,XC="dropdown-item",Gs="active",JC='[data-bs-spy="scroll"]',Zc="[href]",ZC=".nav, .list-group",Yf=".nav-link",eO=".nav-item",tO=".list-group-item",nO=`${Yf}, ${eO} > ${Yf}, ${tO}`,sO=".dropdown",iO=".dropdown-toggle",rO={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},oO={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class oc extends Yt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return rO}static get DefaultType(){return oO}static get NAME(){return qC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Jn(e.target)||document.body,e}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(S.off(this._config.target,Gf),S.on(this._config.target,Gf,Zc,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=we.find(Zc,this._config.target);for(const n of e){if(!n.hash||Zn(n))continue;const s=we.findOne(n.hash,this._element);Vi(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Gs),this._activateParents(e),S.trigger(this._element,YC,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(XC)){we.findOne(iO,e.closest(sO)).classList.add(Gs);return}for(const n of we.parents(e,ZC))for(const s of we.prev(n,nO))s.classList.add(Gs)}_clearActiveClass(e){e.classList.remove(Gs);const n=we.find(`${Zc}.${Gs}`,e);for(const s of n)s.classList.remove(Gs)}static jQueryInterface(e){return this.each(function(){const n=oc.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,QC,()=>{for(const t of we.find(JC))oc.getOrCreateInstance(t)});Ut(oc);const aO="tab",cO="bs.tab",Vs=`.${cO}`,lO=`hide${Vs}`,uO=`hidden${Vs}`,hO=`show${Vs}`,dO=`shown${Vs}`,fO=`click${Vs}`,pO=`keydown${Vs}`,gO=`load${Vs}`,mO="ArrowLeft",Qf="ArrowRight",yO="ArrowUp",Xf="ArrowDown",Bn="active",Jf="fade",el="show",vO="dropdown",_O=".dropdown-toggle",EO=".dropdown-menu",wO=".dropdown-item",tl=":not(.dropdown-toggle)",bO='.list-group, .nav, [role="tablist"]',TO=".nav-item, .list-group-item",IO=`.nav-link${tl}, .list-group-item${tl}, [role="tab"]${tl}`,Py='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',nl=`${IO}, ${Py}`,AO=`.${Bn}[data-bs-toggle="tab"], .${Bn}[data-bs-toggle="pill"], .${Bn}[data-bs-toggle="list"]`;class Ti extends Yt{constructor(e){super(e),this._parent=this._element.closest(bO),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,pO,n=>this._keydown(n)))}static get NAME(){return aO}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,lO,{relatedTarget:e}):null;S.trigger(e,hO,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(Bn),this._activate(vn(e));const s=e.classList.contains(Jf),i=()=>{s&&e.classList.add(el),e.getAttribute("role")==="tab"&&(e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,dO,{relatedTarget:n}))};this._queueCallback(i,e,s)}_deactivate(e,n){if(!e)return;e.classList.remove(Bn),e.blur(),this._deactivate(vn(e));const s=e.classList.contains(Jf),i=()=>{s&&e.classList.remove(el),e.getAttribute("role")==="tab"&&(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,uO,{relatedTarget:n}))};this._queueCallback(i,e,s)}_keydown(e){if(![mO,Qf,yO,Xf].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[Qf,Xf].includes(e.key),s=oh(this._getChildren().filter(i=>!Zn(i)),e.target,n,!0);s&&Ti.getOrCreateInstance(s).show()}_getChildren(){return we.find(nl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=vn(e);!n||(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(vO))return;const i=(r,o)=>{const a=we.findOne(r,s);a&&a.classList.toggle(o,n)};i(_O,Bn),i(EO,el),i(wO,Bn),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(Bn)}_getInnerElement(e){return e.matches(nl)?e:we.findOne(nl,e)}_getOuterElement(e){return e.closest(TO)||e}static jQueryInterface(e){return this.each(function(){const n=Ti.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,fO,Py,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Zn(this)&&Ti.getOrCreateInstance(this).show()});S.on(window,gO,()=>{for(const t of we.find(AO))Ti.getOrCreateInstance(t)});Ut(Ti);const SO="toast",CO="bs.toast",as=`.${CO}`,OO=`mouseover${as}`,NO=`mouseout${as}`,DO=`focusin${as}`,kO=`focusout${as}`,RO=`hide${as}`,LO=`hidden${as}`,MO=`show${as}`,PO=`shown${as}`,xO="fade",Zf="hide",No="show",Do="showing",$O={animation:"boolean",autohide:"boolean",delay:"number"},FO={animation:!0,autohide:!0,delay:5e3};class ac extends Yt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return FO}static get DefaultType(){return $O}static get NAME(){return SO}show(){if(S.trigger(this._element,MO).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(xO);const n=()=>{this._element.classList.remove(Do),S.trigger(this._element,PO),this._maybeScheduleHide()};this._element.classList.remove(Zf),zr(this._element),this._element.classList.add(No,Do),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,RO).defaultPrevented)return;const n=()=>{this._element.classList.add(Zf),this._element.classList.remove(Do,No),S.trigger(this._element,LO)};this._element.classList.add(Do),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(No),super.dispose()}isShown(){return this._element.classList.contains(No)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=n;break;case"focusin":case"focusout":this._hasKeyboardInteraction=n;break}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,OO,e=>this._onInteraction(e,!0)),S.on(this._element,NO,e=>this._onInteraction(e,!1)),S.on(this._element,DO,e=>this._onInteraction(e,!0)),S.on(this._element,kO,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=ac.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}nc(ac);Ut(ac);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},VO=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},UO=function(t){const e=xy(t);return $y.encodeByteArray(e,!0)},Fy=function(t){return UO(t).replace(/\./g,"")},BO=function(t){try{return $y.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vy(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function uh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HO(){return Xe().indexOf("Electron/")>=0}function By(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KO(){return Xe().indexOf("MSAppHost/")>=0}function jy(){return typeof indexedDB=="object"}function Hy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function WO(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qO,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?zO(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,s)}}function zO(t,e){return t.replace(GO,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const GO=/\{\$([^}]+)}/g;function YO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ep(r)&&ep(o)){if(!Dr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ep(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function QO(t,e){const n=new XO(t,e);return n.subscribe.bind(n)}class XO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");JO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=sl),i.error===void 0&&(i.error=sl),i.complete===void 0&&(i.complete=sl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=1e3,eN=2,tN=4*60*60*1e3,nN=.5;function tp(t,e=ZO,n=eN){const s=e*Math.pow(n,t),i=Math.round(nN*s*(Math.random()-.5)*2);return Math.min(tN,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jO;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rN(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iN(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iN(t){return t===fs?void 0:t}function rN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const aN={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},cN=Oe.INFO,lN={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},uN=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=lN[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=cN,this._logHandler=uN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const hN=(t,e)=>e.some(n=>t instanceof n);let np,sp;function dN(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fN(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ky=new WeakMap,Xl=new WeakMap,Wy=new WeakMap,il=new WeakMap,hh=new WeakMap;function pN(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Gn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ky.set(n,t)}).catch(()=>{}),hh.set(e,t),e}function gN(t){if(Xl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xl.set(t,e)}let Jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mN(t){Jl=t(Jl)}function yN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rl(this),e,...n);return Wy.set(s,e.sort?e.sort():[e]),Gn(s)}:fN().includes(t)?function(...e){return t.apply(rl(this),e),Gn(Ky.get(this))}:function(...e){return Gn(t.apply(rl(this),e))}}function vN(t){return typeof t=="function"?yN(t):(t instanceof IDBTransaction&&gN(t),hN(t,dN())?new Proxy(t,Jl):t)}function Gn(t){if(t instanceof IDBRequest)return pN(t);if(il.has(t))return il.get(t);const e=vN(t);return e!==t&&(il.set(t,e),hh.set(e,t)),e}const rl=t=>hh.get(t);function qy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Gn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _N=["get","getKey","getAll","getAllKeys","count"],EN=["put","add","delete","clear"],ol=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=EN.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_N.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ol.set(e,r),r}mN(t=>({...t,get:(e,n,s)=>ip(e,n)||t.get(e,n,s),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bN(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zl="@firebase/app",rp="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new cc("@firebase/app"),TN="@firebase/app-compat",IN="@firebase/analytics-compat",AN="@firebase/analytics",SN="@firebase/app-check-compat",CN="@firebase/app-check",ON="@firebase/auth",NN="@firebase/auth-compat",DN="@firebase/database",kN="@firebase/database-compat",RN="@firebase/functions",LN="@firebase/functions-compat",MN="@firebase/installations",PN="@firebase/installations-compat",xN="@firebase/messaging",$N="@firebase/messaging-compat",FN="@firebase/performance",VN="@firebase/performance-compat",UN="@firebase/remote-config",BN="@firebase/remote-config-compat",jN="@firebase/storage",HN="@firebase/storage-compat",KN="@firebase/firestore",WN="@firebase/firestore-compat",qN="firebase",zN="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="[DEFAULT]",GN={[Zl]:"fire-core",[TN]:"fire-core-compat",[AN]:"fire-analytics",[IN]:"fire-analytics-compat",[CN]:"fire-app-check",[SN]:"fire-app-check-compat",[ON]:"fire-auth",[NN]:"fire-auth-compat",[DN]:"fire-rtdb",[kN]:"fire-rtdb-compat",[RN]:"fire-fn",[LN]:"fire-fn-compat",[MN]:"fire-iid",[PN]:"fire-iid-compat",[xN]:"fire-fcm",[$N]:"fire-fcm-compat",[FN]:"fire-perf",[VN]:"fire-perf-compat",[UN]:"fire-rc",[BN]:"fire-rc-compat",[jN]:"fire-gcs",[HN]:"fire-gcs-compat",[KN]:"fire-fst",[WN]:"fire-fst-compat","fire-js":"fire-js",[qN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Map,eu=new Map;function YN(t,e){try{t.container.addComponent(e)}catch(n){dh.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(eu.has(e))return dh.debug(`There were multiple attempts to register component ${e}.`),!1;eu.set(e,t);for(const n of da.values())YN(n,t);return!0}function Bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ns=new Us("app","Firebase",QN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ns.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=zN;function JN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:zy,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ns.create("bad-app-name",{appName:String(s)});const i=da.get(s);if(i){if(Dr(t,i.options)&&Dr(n,i.config))return i;throw Ns.create("duplicate-app",{appName:s})}const r=new oN(s);for(const a of eu.values())r.addComponent(a);const o=new XN(t,n,r);return da.set(s,o),o}function fh(t=zy){const e=da.get(t);if(!e)throw Ns.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=GN[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dh.warn(a.join(" "));return}cn(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="firebase-heartbeat-database",eD=1,kr="firebase-heartbeat-store";let al=null;function Gy(){return al||(al=qy(ZN,eD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}}).catch(t=>{throw Ns.create("storage-open",{originalErrorMessage:t.message})})),al}async function tD(t){var e;try{return(await Gy()).transaction(kr).objectStore(kr).get(Yy(t))}catch(n){throw Ns.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function op(t,e){var n;try{const i=(await Gy()).transaction(kr,"readwrite");return await i.objectStore(kr).put(e,Yy(t)),i.done}catch(s){throw Ns.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Yy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=1024,sD=30*24*60*60*1e3;class iD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oD(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ap();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=sD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ap(),{heartbeatsToSend:n,unsentEntries:s}=rD(this._heartbeatsCache.heartbeats),i=Fy(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ap(){return new Date().toISOString().substring(0,10)}function rD(t,e=nD){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),cp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jy()?Hy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cp(t){return Fy(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){cn(new zt("platform-logger",e=>new wN(e),"PRIVATE")),cn(new zt("heartbeat",e=>new iD(e),"PRIVATE")),xt(Zl,rp,t),xt(Zl,rp,"esm2017"),xt("fire-js","")}aD("");var cD="firebase",lD="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(cD,lD,"app");const Qy="@firebase/installations",ph="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=1e4,Jy=`w:${ph}`,Zy="FIS_v2",uD="https://firebaseinstallations.googleapis.com/v1",hD=60*60*1e3,dD="installations",fD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ds=new Us(dD,fD,pD);function ev(t){return t instanceof Dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv({projectId:t}){return`${uD}/projects/${t}/installations`}function nv(t){return{token:t.token,requestStatus:2,expiresIn:mD(t.expiresIn),creationTime:Date.now()}}async function sv(t,e){const s=(await e.json()).error;return Ds.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function iv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gD(t,{refreshToken:e}){const n=iv(t);return n.append("Authorization",yD(e)),n}async function rv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mD(t){return Number(t.replace("s","000"))}function yD(t){return`${Zy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=tv(t),i=iv(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Zy,appId:t.appId,sdkVersion:Jy},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rv(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:nv(l.authToken)}}else throw await sv("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=/^[cdef][\w-]{21}$/,tu="";function wD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=bD(t);return ED.test(n)?n:tu}catch{return tu}}function bD(t){return _D(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;function cv(t,e){const n=lc(t);lv(n,e),TD(n,e)}function lv(t,e){const n=av.get(t);if(!!n)for(const s of n)s(e)}function TD(t,e){const n=ID();n&&n.postMessage({key:t,fid:e}),AD()}let vs=null;function ID(){return!vs&&"BroadcastChannel"in self&&(vs=new BroadcastChannel("[Firebase] FID Change"),vs.onmessage=t=>{lv(t.data.key,t.data.fid)}),vs}function AD(){av.size===0&&vs&&(vs.close(),vs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="firebase-installations-database",CD=1,ks="firebase-installations-store";let cl=null;function gh(){return cl||(cl=qy(SD,CD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ks)}}})),cl}async function fa(t,e){const n=lc(t),i=(await gh()).transaction(ks,"readwrite"),r=i.objectStore(ks),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&cv(t,e.fid),e}async function uv(t){const e=lc(t),s=(await gh()).transaction(ks,"readwrite");await s.objectStore(ks).delete(e),await s.done}async function uc(t,e){const n=lc(t),i=(await gh()).transaction(ks,"readwrite"),r=i.objectStore(ks),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&cv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(t){let e;const n=await uc(t.appConfig,s=>{const i=OD(s),r=ND(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===tu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OD(t){const e=t||{fid:wD(),registrationStatus:0};return hv(e)}function ND(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ds.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=DD(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kD(t)}:{installationEntry:e}}async function DD(t,e){try{const n=await vD(t,e);return fa(t.appConfig,n)}catch(n){throw ev(n)&&n.customData.serverCode===409?await uv(t.appConfig):await fa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kD(t){let e=await lp(t.appConfig);for(;e.registrationStatus===1;)await ov(100),e=await lp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await mh(t);return s||n}return e}function lp(t){return uc(t,e=>{if(!e)throw Ds.create("installation-not-found");return hv(e)})}function hv(t){return RD(t)?{fid:t.fid,registrationStatus:0}:t}function RD(t){return t.registrationStatus===1&&t.registrationTime+Xy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD({appConfig:t,heartbeatServiceProvider:e},n){const s=MD(t,n),i=gD(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Jy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rv(()=>fetch(s,a));if(c.ok){const l=await c.json();return nv(l)}else throw await sv("Generate Auth Token",c)}function MD(t,{fid:e}){return`${tv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(t,e=!1){let n;const s=await uc(t.appConfig,r=>{if(!dv(r))throw Ds.create("not-registered");const o=r.authToken;if(!e&&$D(o))return r;if(o.requestStatus===1)return n=PD(t,e),r;{if(!navigator.onLine)throw Ds.create("app-offline");const a=VD(r);return n=xD(t,a),a}});return n?await n:s.authToken}async function PD(t,e){let n=await up(t.appConfig);for(;n.authToken.requestStatus===1;)await ov(100),n=await up(t.appConfig);const s=n.authToken;return s.requestStatus===0?yh(t,e):s}function up(t){return uc(t,e=>{if(!dv(e))throw Ds.create("not-registered");const n=e.authToken;return UD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xD(t,e){try{const n=await LD(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await fa(t.appConfig,s),n}catch(n){if(ev(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uv(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fa(t.appConfig,s)}throw n}}function dv(t){return t!==void 0&&t.registrationStatus===2}function $D(t){return t.requestStatus===2&&!FD(t)}function FD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hD}function VD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UD(t){return t.requestStatus===1&&t.requestTime+Xy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t){const e=t,{installationEntry:n,registrationPromise:s}=await mh(e);return s?s.catch(console.error):yh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e=!1){const n=t;return await HD(n),(await yh(n,e)).token}async function HD(t){const{registrationPromise:e}=await mh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t){if(!t||!t.options)throw ll("App Configuration");if(!t.name)throw ll("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ll(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ll(t){return Ds.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="installations",WD="installations-internal",qD=t=>{const e=t.getProvider("app").getImmediate(),n=KD(e),s=Bs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},zD=t=>{const e=t.getProvider("app").getImmediate(),n=Bs(e,fv).getImmediate();return{getId:()=>BD(n),getToken:i=>jD(n,i)}};function GD(){cn(new zt(fv,qD,"PUBLIC")),cn(new zt(WD,zD,"PRIVATE"))}GD();xt(Qy,ph);xt(Qy,ph,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="analytics",YD="firebase_id",QD="origin",XD=60*1e3,JD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ZD(t,e){const n=document.createElement("script");n.src=`${pv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function ek(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tk(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await gv(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){It.error(a)}t("config",i,r)}async function nk(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await gv(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){It.error(r)}}function sk(t,e,n,s){async function i(r,o,a){try{r==="event"?await nk(t,e,n,o,a):r==="config"?await tk(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(c){It.error(c)}}return i}function ik(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=sk(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function rk(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(pv))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},$t=new Us("analytics","Analytics",ok);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=30,ck=1e3;class lk{constructor(e={},n=ck){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mv=new lk;function uk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function hk(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:uk(s)},r=JD.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function dk(t,e=mv,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw $t.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gk;return setTimeout(async()=>{a.abort()},n!==void 0?n:XD),yv({appId:s,apiKey:i,measurementId:r},o,a,e)}async function yv(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=mv){var r,o;const{appId:a,measurementId:c}=t;try{await fk(s,e)}catch(l){if(c)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(r=l)===null||r===void 0?void 0:r.message}]`),{appId:a,measurementId:c};throw l}try{const l=await hk(t);return i.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!pk(u)){if(i.deleteThrottleMetadata(a),c)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?tp(n,i.intervalMillis,ak):tp(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),It.debug(`Calling attemptFetch again in ${h} millis`),yv(t,d,s,i)}}function fk(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pk(t){if(!(t instanceof Dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mk(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(){var t;if(jy())try{await Hy()}catch(e){return It.warn($t.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return It.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vk(t,e,n,s,i,r,o){var a;const c=dk(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>It.error(p)),e.push(c);const l=yk().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);rk()||ZD(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[QD]="firebase",d.update=!0,h!=null&&(d[YD]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.app=e}_delete(){return delete fr[this.app.options.appId],Promise.resolve()}}let fr={},hp=[];const dp={};let ul="dataLayer",Ek="gtag",fp,vv,pp=!1;function wk(){const t=[];if(uh()&&t.push("This is a browser extension environment."),WO()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function bk(t,e,n){wk();const s=t.options.appId;if(!s)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(fr[s]!=null)throw $t.create("already-exists",{id:s});if(!pp){ek(ul);const{wrappedGtag:r,gtagCore:o}=ik(fr,hp,dp,ul,Ek);vv=r,fp=o,pp=!0}return fr[s]=vk(t,hp,dp,e,fp,ul,n),new _k(t)}function Tk(t=fh()){t=Ot(t);const e=Bs(t,pa);return e.isInitialized()?e.getImmediate():Ik(t)}function Ik(t,e={}){const n=Bs(t,pa);if(n.isInitialized()){const i=n.getImmediate();if(Dr(e,n.getOptions()))return i;throw $t.create("already-initialized")}return n.initialize({options:e})}function Ak(t,e,n,s){t=Ot(t),mk(vv,fr[t.app.options.appId],e,n,s).catch(i=>It.error(i))}const gp="@firebase/analytics",mp="0.8.0";function Sk(){cn(new zt(pa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bk(s,i,n)},"PUBLIC")),cn(new zt("analytics-internal",t,"PRIVATE")),xt(gp,mp),xt(gp,mp,"esm2017");function t(e){try{const n=e.getProvider(pa).getImmediate();return{logEvent:(s,i,r)=>Ak(n,s,i,r)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}Sk();function vh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function _v(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ck=_v,Ev=new Us("auth","Firebase",_v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new cc("@firebase/auth");function Go(t,...e){yp.logLevel<=Oe.ERROR&&yp.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw _h(t,...e)}function nn(t,...e){return _h(t,...e)}function wv(t,e,n){const s=Object.assign(Object.assign({},Ck()),{[e]:n});return new Us("auth","Firebase",s).create(e,{appName:t.name})}function Ok(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ln(t,"argument-error"),wv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _h(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ev.create(t,...e)}function he(t,e,...n){if(!t)throw _h(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function An(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=new Map;function mn(t){An(t instanceof Function,"Expected a class definition");let e=vp.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t,e){const n=Bs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Dr(r,e!=null?e:{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function Dk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kk(){return _p()==="http:"||_p()==="https:"}function _p(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kk()||uh()||"connection"in navigator)?navigator.onLine:!0}function Lk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Vy()||Uy()}get(){return Rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new Zr(3e4,6e4);function xk(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function eo(t,e,n,s,i={}){return Tv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bv.fetch()(Iv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Tv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mk),e);try{const i=new Fk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ko(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wv(t,u,l);ln(t,u)}}catch(i){if(i instanceof Dn)throw i;ln(t,"network-request-failed")}}async function $k(t,e,n,s,i={}){const r=await eo(t,e,n,s,i);return"mfaPendingCredential"in r&&ln(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Iv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Eh(t.config,i):`${t.config.apiScheme}://${i}`}class Fk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),Pk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=nn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return eo(t,"POST","/v1/accounts:delete",e)}async function Uk(t,e){return eo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bk(t,e=!1){const n=Ot(t),s=await n.getIdToken(e),i=wh(s);he(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:pr(hl(i.auth_time)),issuedAtTime:pr(hl(i.iat)),expirationTime:pr(hl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function hl(t){return Number(t)*1e3}function wh(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const r=BO(s);return r?JSON.parse(r):(Go("Failed to decode base64 JWT payload"),null)}catch(r){return Go("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function jk(t){const e=wh(t);return he(e,"internal-error"),he(typeof e.exp!="undefined","internal-error"),he(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&Hk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ii(t,Uk(n,{idToken:s}));he(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zk(r.providerUserInfo):[],a=qk(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Av(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Wk(t){const e=Ot(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function zk(t){return t.map(e=>{var{providerId:n}=e,s=vh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e){const n=await Tv(t,{},async()=>{const s=Xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Iv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken!="undefined","internal-error"),he(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return he(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Gk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Rr;return s&&(he(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(he(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(he(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){he(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ss{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Av(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bk(this,e)}reload(){return Wk(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ii(this,Vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:x,isAnonymous:X,providerData:J,stsTokenManager:se}=n;he(U&&se,e,"internal-error");const Q=Rr.fromJSON(this.name,se);he(typeof U=="string",e,"internal-error"),xn(h,e.name),xn(d,e.name),he(typeof x=="boolean",e,"internal-error"),he(typeof X=="boolean",e,"internal-error"),xn(p,e.name),xn(m,e.name),xn(v,e.name),xn(_,e.name),xn(w,e.name),xn(R,e.name);const q=new Ss({uid:U,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:X,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:Q,createdAt:w,lastLoginAt:R});return J&&Array.isArray(J)&&(q.providerData=J.map(j=>Object.assign({},j))),_&&(q._redirectEventId=_),q}static async _fromIdTokenResponse(e,n,s=!1){const i=new Rr;i.updateFromServerResponse(n);const r=new Ss({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ga(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sv.type="NONE";const Ep=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Yo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new li(mn(Ep),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||mn(Ep);const o=Yo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ss._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new li(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new li(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kv(e))return"Blackberry";if(Rv(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||Ov(e))&&!e.includes("edge/"))return"Chrome";if(Dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cv(t=Xe()){return/firefox\//i.test(t)}function bh(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ov(t=Xe()){return/crios\//i.test(t)}function Nv(t=Xe()){return/iemobile/i.test(t)}function Dv(t=Xe()){return/android/i.test(t)}function kv(t=Xe()){return/blackberry/i.test(t)}function Rv(t=Xe()){return/webos/i.test(t)}function hc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yk(t=Xe()){var e;return hc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qk(){return By()&&document.documentMode===10}function Lv(t=Xe()){return hc(t)||Dv(t)||Rv(t)||kv(t)||/windows phone/i.test(t)||Nv(t)}function Xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e=[]){let n;switch(t){case"Browser":n=wp(Xe());break;case"Worker":n=`${wp(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bp(this),this.idTokenSubscription=new bp(this),this.beforeStateQueue=new Jk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ev,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ga(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ot(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return he(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Th(t){return Ot(t)}class bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=QO(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e){return $k(t,"POST","/v1/accounts:signInWithIdp",xk(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="http://localhost";class Rs extends Pv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=vh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Rs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends to{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends to{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends to{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ss._fromIdTokenResponse(e,s,i),o=Tp(s);return new Ai({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Tp(s);return new Ai({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Dn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ma.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ma(e,n,s,i)}}function xv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ma._fromErrorAndOperation(t,r,e,s):r})}async function tR(t,e,n=!1){const s=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await Ii(t,xv(i,r,e,t),n);he(o.idToken,i,"internal-error");const a=wh(o.idToken);he(a,i,"internal-error");const{sub:c}=a;return he(t.uid===c,i,"user-mismatch"),Ai._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ln(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e,n=!1){const s="signIn",i=await xv(t,s,e),r=await Ai._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e){return eo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ot(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ii(s,iR(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function oR(t,e,n,s){return Ot(t).onAuthStateChanged(e,n,s)}function aR(t){return Ot(t).signOut()}const ya="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(){const t=Xe();return bh(t)||hc(t)}const lR=1e3,uR=10;class Fv extends $v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cR()&&Xk(),this.fallbackToPolling=Lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Qk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uR):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fv.type="LOCAL";const hR=Fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv extends $v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vv.type="SESSION";const Uv=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await dR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Ah("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function pR(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){return typeof sn().WorkerGlobalScope!="undefined"&&typeof sn().importScripts=="function"}async function gR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yR(){return Bv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firebaseLocalStorageDb",vR=1,va="firebaseLocalStorage",Hv="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function _R(){const t=indexedDB.deleteDatabase(jv);return new no(t).toPromise()}function su(){const t=indexedDB.open(jv,vR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(va,{keyPath:Hv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(va)?e(s):(s.close(),await _R(),e(await su()))})})}async function Ip(t,e,n){const s=fc(t,!0).put({[Hv]:e,value:n});return new no(s).toPromise()}async function ER(t,e){const n=fc(t,!1).get(e),s=await new no(n).toPromise();return s===void 0?null:s.value}function Ap(t,e){const n=fc(t,!0).delete(e);return new no(n).toPromise()}const wR=800,bR=3;class Kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gR(),!this.activeServiceWorker)return;this.sender=new fR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await su();return await Ip(e,ya,"1"),await Ap(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ip(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ER(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fc(i,!1).getAll();return new no(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kv.type="LOCAL";const TR=Kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AR(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=nn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",IR().appendChild(s)})}function SR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Zr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e){return e?mn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends Pv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CR(t){return sR(t.auth,new Sh(t),t.bypassAuthState)}function OR(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),nR(n,new Sh(t),t.bypassAuthState)}async function NR(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),tR(n,new Sh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CR;case"linkViaPopup":case"linkViaRedirect":return NR;case"reauthViaPopup":case"reauthViaRedirect":return OR;default:ln(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=new Zr(2e3,1e4);async function kR(t,e,n){const s=Th(t);Ok(t,e,Ih);const i=Wv(s,n);return new _s(s,"signInViaPopup",e,i).executeNotNull()}class _s extends qv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,DR.get())};e()}}_s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="pendingRedirect",Qo=new Map;class LR extends qv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qo.get(this.auth._key());if(!e){try{const s=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qo.set(this.auth._key(),e)}return this.bypassAuthState||Qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(t,e){const n=$R(e),s=xR(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function PR(t,e){Qo.set(t._key(),e)}function xR(t){return mn(t._redirectPersistence)}function $R(t){return Yo(RR,t.config.apiKey,t.name)}async function FR(t,e,n=!1){const s=Th(t),i=Wv(s,e),o=await new LR(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=10*60*1e3;class UR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!zv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sp(e))}saveEventToCache(e){this.cachedEventUids.add(Sp(e)),this.lastProcessedEventTime=Date.now()}}function Sp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e={}){return eo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KR=/^https?/;async function WR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jR(t);for(const n of e)try{if(qR(n))return}catch{}ln(t,"unauthorized-domain")}function qR(t){const e=nu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!KR.test(n))return!1;if(HR.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Zr(3e4,6e4);function Cp(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GR(t){return new Promise((e,n)=>{var s,i,r;function o(){Cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cp(),n(nn(t,"network-request-failed"))},timeout:zR.get()})}if(!((i=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=sn().gapi)===null||r===void 0)&&r.load)o();else{const a=SR("iframefcb");return sn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},AR(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function YR(t){return Xo=Xo||GR(t),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new Zr(5e3,15e3),XR="__/auth/iframe",JR="emulator/auth/iframe",ZR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t1(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,JR):`https://${t.config.authDomain}/${XR}`,s={apiKey:e.apiKey,appName:t.name,v:Jr},i=e1.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xr(s).slice(1)}`}async function n1(t){const e=await YR(t),n=sn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:t1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZR,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=sn().setTimeout(()=>{r(o)},QR.get());function c(){sn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i1=500,r1=600,o1="_blank",a1="http://localhost";class Op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c1(t,e,n,s=i1,i=r1){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},s1),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Xe().toLowerCase();n&&(a=Ov(l)?o1:n),Cv(l)&&(e=e||a1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(Yk(l)&&a!=="_self")return l1(e||"",a),new Op(null);const h=window.open(e||"",a,u);he(h,t,"popup-blocked");try{h.focus()}catch{}return new Op(h)}function l1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="__/auth/handler",h1="emulator/auth/handler";function Np(t,e,n,s,i,r){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Jr,eventId:i};if(e instanceof Ih){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof to){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${d1(t)}?${Xr(a).slice(1)}`}function d1({config:t}){return t.emulator?Eh(t,h1):`https://${t.authDomain}/${u1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="webStorageSupport";class f1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uv,this._completeRedirectFn=FR,this._overrideRedirectResult=PR}async _openPopup(e,n,s,i){var r;An((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Np(e,n,s,nu(),i);return c1(e,o,Ah())}async _openRedirect(e,n,s,i){return await this._originValidation(e),pR(Np(e,n,s,nu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(An(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await n1(e),s=new UR(e);return n.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[dl];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lv()||bh()||hc()}}const p1=f1;var Dp="@firebase/auth",kp="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function y1(t){cn(new zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{he(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),he(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(t)},u=new Zk(a,c,l);return Dk(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cn(new zt("auth-internal",e=>{const n=Th(e.getProvider("auth").getImmediate());return(s=>new g1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Dp,kp,m1(t)),xt(Dp,kp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t=fh()){const e=Bs(t,"auth");return e.isInitialized()?e.getImmediate():Nk(t,{popupRedirectResolver:p1,persistence:[TR,hR,Uv]})}y1("Browser");var v1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},W,Ch=Ch||{},ue=v1||self;function _a(){}function iu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function so(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _1(t){return Object.prototype.hasOwnProperty.call(t,fl)&&t[fl]||(t[fl]=++E1)}var fl="closure_uid_"+(1e9*Math.random()>>>0),E1=0;function w1(t,e,n){return t.call.apply(t.bind,arguments)}function b1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=w1:nt=b1,nt.apply(null,arguments)}function Ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function cs(){this.s=this.s,this.o=this.o}var T1=0;cs.prototype.s=!1;cs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),T1!=0)&&_1(this)};cs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Yv=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function I1(t){e:{var e=gL;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rp(t){return Array.prototype.concat.apply([],arguments)}function Oh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ea(t){return/^[\s\xa0]*$/.test(t)}var Lp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dt(t,e){return t.indexOf(e)!=-1}function pl(t,e){return t<e?-1:t>e?1:0}var ft;e:{var Mp=ue.navigator;if(Mp){var Pp=Mp.userAgent;if(Pp){ft=Pp;break e}}ft=""}function Nh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Qv(t){const e={};for(const n in t)e[n]=t[n];return e}var xp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<xp.length;r++)n=xp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Dh(t){return Dh[" "](t),t}Dh[" "]=_a;function A1(t){var e=O1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var S1=dt(ft,"Opera"),Si=dt(ft,"Trident")||dt(ft,"MSIE"),Jv=dt(ft,"Edge"),ru=Jv||Si,Zv=dt(ft,"Gecko")&&!(dt(ft.toLowerCase(),"webkit")&&!dt(ft,"Edge"))&&!(dt(ft,"Trident")||dt(ft,"MSIE"))&&!dt(ft,"Edge"),C1=dt(ft.toLowerCase(),"webkit")&&!dt(ft,"Edge");function e_(){var t=ue.document;return t?t.documentMode:void 0}var wa;e:{var gl="",ml=function(){var t=ft;if(Zv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jv)return/Edge\/([\d\.]+)/.exec(t);if(Si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(C1)return/WebKit\/(\S+)/.exec(t);if(S1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ml&&(gl=ml?ml[1]:""),Si){var yl=e_();if(yl!=null&&yl>parseFloat(gl)){wa=String(yl);break e}}wa=gl}var O1={};function N1(){return A1(function(){let t=0;const e=Lp(String(wa)).split("."),n=Lp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=pl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||pl(i[2].length==0,r[2].length==0)||pl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var ou;if(ue.document&&Si){var $p=e_();ou=$p||parseInt(wa,10)||void 0}else ou=void 0;var D1=ou,k1=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",_a,e),ue.removeEventListener("test",_a,e)}catch{}return t}();function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};function Lr(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zv){e:{try{Dh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:R1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lr.Z.h.call(this)}}rt(Lr,lt);var R1={2:"touch",3:"pen",4:"mouse"};Lr.prototype.h=function(){Lr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var io="closure_listenable_"+(1e6*Math.random()|0),L1=0;function M1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++L1,this.ca=this.fa=!1}function gc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function mc(t){this.src=t,this.g={},this.h=0}mc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=cu(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new M1(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function au(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Gv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(gc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var kh="closure_lm_"+(1e6*Math.random()|0),vl={};function t_(t,e,n,s,i){if(s&&s.once)return s_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)t_(t,e[r],n,s,i);return null}return n=Mh(n),t&&t[io]?t.N(e,n,so(s)?!!s.capture:!!s,i):n_(t,e,n,!1,s,i)}function n_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=so(i)?!!i.capture:!!i,a=Lh(t);if(a||(t[kh]=a=new mc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=P1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)k1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(r_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function P1(){function t(n){return e.call(t.src,t.listener,n)}var e=x1;return t}function s_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)s_(t,e[r],n,s,i);return null}return n=Mh(n),t&&t[io]?t.O(e,n,so(s)?!!s.capture:!!s,i):n_(t,e,n,!0,s,i)}function i_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)i_(t,e[r],n,s,i);else s=so(s)?!!s.capture:!!s,n=Mh(n),t&&t[io]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=cu(r,n,s,i),-1<n&&(gc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cu(e,n,s,i)),(n=-1<t?e[t]:null)&&Rh(n))}function Rh(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[io])au(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(r_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Lh(e))?(au(n,t),n.h==0&&(n.src=null,e[kh]=null)):gc(t)}}}function r_(t){return t in vl?vl[t]:vl[t]="on"+t}function x1(t,e){if(t.ca)t=!0;else{e=new Lr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Rh(t),t=n.call(s,e)}return t}function Lh(t){return t=t[kh],t instanceof mc?t:null}var _l="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mh(t){return typeof t=="function"?t:(t[_l]||(t[_l]=function(e){return t.handleEvent(e)}),t[_l])}function Je(){cs.call(this),this.i=new mc(this),this.P=this,this.I=null}rt(Je,cs);Je.prototype[io]=!0;Je.prototype.removeEventListener=function(t,e,n,s){i_(this,t,e,n,s)};function st(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var i=e;e=new lt(s,t),Xv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Lo(o,s,!0,e)&&i}if(o=e.g=t,i=Lo(o,s,!0,e)&&i,i=Lo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Lo(o,s,!1,e)&&i}Je.prototype.M=function(){if(Je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)gc(n[s]);delete t.g[e],t.h--}}this.I=null};Je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Lo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&au(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ph=ue.JSON.stringify;function $1(){var t=a_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class F1{constructor(){this.h=this.g=null}add(e,n){const s=o_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var o_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new V1,t=>t.reset());class V1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function U1(t){ue.setTimeout(()=>{throw t},0)}function xh(t,e){lu||B1(),uu||(lu(),uu=!0),a_.add(t,e)}var lu;function B1(){var t=ue.Promise.resolve(void 0);lu=function(){t.then(j1)}}var uu=!1,a_=new F1;function j1(){for(var t;t=$1();){try{t.h.call(t.g)}catch(n){U1(n)}var e=o_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uu=!1}function yc(t,e){Je.call(this),this.h=t||1,this.g=e||ue,this.j=nt(this.kb,this),this.l=Date.now()}rt(yc,Je);W=yc.prototype;W.da=!1;W.S=null;W.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),st(this,"tick"),this.da&&($h(this),this.start()))}};W.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $h(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}W.M=function(){yc.Z.M.call(this),$h(this),delete this.g};function Fh(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function c_(t){t.g=Fh(()=>{t.g=null,t.i&&(t.i=!1,c_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class H1 extends cs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:c_(this)}M(){super.M(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(t){cs.call(this),this.h=t,this.g={}}rt(Mr,cs);var Fp=[];function l_(t,e,n,s){Array.isArray(n)||(n&&(Fp[0]=n.toString()),n=Fp);for(var i=0;i<n.length;i++){var r=t_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function u_(t){Nh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rh(e)},t),t.g={}}Mr.prototype.M=function(){Mr.Z.M.call(this),u_(this)};Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Aa=function(){this.g=!1};function K1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function W1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function si(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+z1(t,n)+(s?" "+s:"")})}function q1(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function z1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ph(n)}catch{return e}}var js={},Vp=null;function _c(){return Vp=Vp||new Je}js.Ma="serverreachability";function h_(t){lt.call(this,js.Ma,t)}rt(h_,lt);function Pr(t){const e=_c();st(e,new h_(e))}js.STAT_EVENT="statevent";function d_(t,e){lt.call(this,js.STAT_EVENT,t),this.stat=e}rt(d_,lt);function pt(t){const e=_c();st(e,new d_(e,t))}js.Na="timingevent";function f_(t,e){lt.call(this,js.Na,t),this.size=e}rt(f_,lt);function ro(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var Ec={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},p_={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vh(){}Vh.prototype.h=null;function Up(t){return t.h||(t.h=t.i())}function g_(){}var oo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Uh(){lt.call(this,"d")}rt(Uh,lt);function Bh(){lt.call(this,"c")}rt(Bh,lt);var hu;function wc(){}rt(wc,Vh);wc.prototype.g=function(){return new XMLHttpRequest};wc.prototype.i=function(){return{}};hu=new wc;function ao(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Mr(this),this.P=G1,t=ru?125:void 0,this.W=new yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new m_}function m_(){this.i=null,this.g="",this.h=!1}var G1=45e3,du={},ba={};W=ao.prototype;W.setTimeout=function(t){this.P=t};function fu(t,e,n){t.K=1,t.v=Tc(Sn(e)),t.s=n,t.U=!0,y_(t,null)}function y_(t,e){t.F=Date.now(),co(t),t.A=Sn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),I_(n.h,"t",s),t.C=0,n=t.l.H,t.h=new m_,t.g=K_(t.l,n?e:null,!t.s),0<t.O&&(t.L=new H1(nt(t.Ia,t,t.g),t.O)),l_(t.V,t.g,"readystatechange",t.gb),e=t.H?Qv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Pr(),K1(t.j,t.u,t.A,t.m,t.X,t.s)}W.gb=function(t){t=t.target;const e=this.L;e&&yn(t)==3?e.l():this.Ia(t)};W.Ia=function(t){try{if(t==this.g)e:{const u=yn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ru||this.g&&(this.h.h||this.g.ga()||Kp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Pr(3):Pr(2)),bc(this);var n=this.g.ba();this.N=n;t:if(v_(this)){var s=Kp(this.g);t="";var i=s.length,r=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Es(this),gr(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,W1(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ea(a)){var l=a;break t}}l=null}if(n=l)si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pu(this,n);else{this.i=!1,this.o=3,pt(12),Es(this),gr(this);break e}}this.U?(__(this,u,o),ru&&this.i&&u==3&&(l_(this.V,this.W,"tick",this.fb),this.W.start())):(si(this.j,this.m,o,null),pu(this,o)),u==4&&Es(this),this.i&&!this.I&&(u==4?U_(this.l,this):(this.i=!1,co(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Es(this),gr(this)}}}catch{}finally{}};function v_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function __(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Y1(t,n),i==ba){e==4&&(t.o=4,pt(14),s=!1),si(t.j,t.m,null,"[Incomplete Response]");break}else if(i==du){t.o=4,pt(15),si(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else si(t.j,t.m,i,null),pu(t,i);v_(t)&&i!=ba&&i!=du&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qh(e),e.L=!0,pt(11))):(si(t.j,t.m,n,"[Invalid Chunked Response]"),Es(t),gr(t))}W.fb=function(){if(this.g){var t=yn(this.g),e=this.g.ga();this.C<e.length&&(bc(this),__(this,t,e),this.i&&t!=4&&co(this))}};function Y1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ba:(n=Number(e.substring(n,s)),isNaN(n)?du:(s+=1,s+n>e.length?ba:(e=e.substr(s,n),t.C=s+n,e)))}W.cancel=function(){this.I=!0,Es(this)};function co(t){t.Y=Date.now()+t.P,E_(t,t.P)}function E_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ro(nt(t.eb,t),e)}function bc(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}W.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(q1(this.j,this.A),this.K!=2&&(Pr(),pt(17)),Es(this),this.o=2,gr(this)):E_(this,this.Y-t)};function gr(t){t.l.G==0||t.I||U_(t.l,t)}function Es(t){bc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$h(t.W),u_(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gu(n.i,t))){if(n.I=t.N,!t.J&&gu(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Sa(n),Sc(n);else break e;Yh(n),pt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ro(nt(n.ab,n),6e3));if(1>=C_(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ws(n,11)}else if((t.J||n.g==t)&&Sa(n),!Ea(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;!r.g&&(dt(m,"spdy")||dt(m,"quic")||dt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Kh(r,r.h),r.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.sa=v,$e(s.F,s.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=H_(s,s.H?s.la:null,s.W),o.J){O_(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(bc(a),co(a)),s.g=o}else F_(s);0<n.l.length&&Cc(n)}else l[0]!="stop"&&l[0]!="close"||ws(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ws(n,7):Gh(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Pr(4)}catch{}}function Q1(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(iu(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function jh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(iu(t)||typeof t=="string")Yv(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(iu(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Q1(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function ji(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ji)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}W=ji.prototype;W.R=function(){Hh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};W.T=function(){return Hh(this),this.g.concat()};function Hh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ls(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],Ls(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}W.get=function(t,e){return Ls(this.h,t)?this.h[t]:e};W.set=function(t,e){Ls(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};W.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function Ls(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var w_=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function X1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ms(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ms){this.g=e!==void 0?e:t.g,Ta(this,t.j),this.s=t.s,Ia(this,t.i),Aa(this,t.m),this.l=t.l,e=t.h;var n=new xr;n.i=e.i,e.g&&(n.g=new ji(e.g),n.h=e.h),Bp(this,n),this.o=t.o}else t&&(n=String(t).match(w_))?(this.g=!!e,Ta(this,n[1]||"",!0),this.s=mr(n[2]||""),Ia(this,n[3]||"",!0),Aa(this,n[4]),this.l=mr(n[5]||"",!0),Bp(this,n[6]||"",!0),this.o=mr(n[7]||"")):(this.g=!!e,this.h=new xr(null,this.g))}Ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nr(e,jp,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(nr(e,jp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(nr(n,n.charAt(0)=="/"?nL:tL,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nr(n,iL)),t.join("")};function Sn(t){return new Ms(t)}function Ta(t,e,n){t.j=n?mr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ia(t,e,n){t.i=n?mr(e,!0):e}function Aa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bp(t,e,n){e instanceof xr?(t.h=e,rL(t.h,t.g)):(n||(e=nr(e,sL)),t.h=new xr(e,t.g))}function $e(t,e,n){t.h.set(e,n)}function Tc(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function J1(t){return t instanceof Ms?Sn(t):new Ms(t,void 0)}function Z1(t,e,n,s){var i=new Ms(null,void 0);return t&&Ta(i,t),e&&Ia(i,e),n&&Aa(i,n),s&&(i.l=s),i}function mr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jp=/[#\/\?@]/g,tL=/[#\?:]/g,nL=/[#\?]/g,sL=/[#\?@]/g,iL=/#/g;function xr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ls(t){t.g||(t.g=new ji,t.h=0,t.i&&X1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=xr.prototype;W.add=function(t,e){ls(this),this.i=null,t=Hi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function b_(t,e){ls(t),e=Hi(t,e),Ls(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ls(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Hh(t)))}function T_(t,e){return ls(t),e=Hi(t,e),Ls(t.g.h,e)}W.forEach=function(t,e){ls(this),this.g.forEach(function(n,s){Yv(n,function(i){t.call(e,i,s,this)},this)},this)};W.T=function(){ls(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};W.R=function(t){ls(this);var e=[];if(typeof t=="string")T_(this,t)&&(e=Rp(e,this.g.get(Hi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rp(e,t[n])}return e};W.set=function(t,e){return ls(this),this.i=null,t=Hi(this,t),T_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function I_(t,e,n){b_(t,e),0<n.length&&(t.i=null,t.g.set(Hi(t,e),Oh(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Hi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rL(t,e){e&&!t.j&&(ls(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(b_(this,s),I_(this,i,n))},t)),t.j=e}var oL=class{constructor(t,e){this.h=t,this.g=e}};function A_(t){this.l=t||aL,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ea&&ue.g.Ea()&&ue.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aL=10;function S_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function C_(t){return t.h?1:t.g?t.g.size:0}function gu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Kh(t,e){t.g?t.g.add(e):t.h=e}function O_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}A_.prototype.cancel=function(){if(this.i=N_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function N_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Oh(t.i)}function Wh(){}Wh.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)};Wh.prototype.parse=function(t){return ue.JSON.parse(t,void 0)};function cL(){this.g=new Wh}function lL(t,e,n){const s=n||"";try{jh(t,function(i,r){let o=i;so(i)&&(o=Ph(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function uL(t,e){const n=new vc;if(ue.Image){const s=new Image;s.onload=Ro(Mo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ro(Mo,n,s,"TestLoadImage: error",!1,e),s.onabort=Ro(Mo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ro(Mo,n,s,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Mo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function lo(t){this.l=t.$b||null,this.j=t.ib||!1}rt(lo,Vh);lo.prototype.g=function(){return new Ic(this.l,this.j)};lo.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){Je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=qh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(Ic,Je);var qh=0;W=Ic.prototype;W.open=function(t,e){if(this.readyState!=qh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$r(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ue).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=qh};W.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ue.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;D_(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function D_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}W.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?uo(this):$r(this),this.readyState==3&&D_(this)}};W.Ua=function(t){this.g&&(this.response=this.responseText=t,uo(this))};W.Ta=function(t){this.g&&(this.response=t,uo(this))};W.ha=function(){this.g&&uo(this)};function uo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$r(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $r(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hL=ue.JSON.parse;function Ke(t){Je.call(this),this.headers=new ji,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=k_,this.K=this.L=!1}rt(Ke,Je);var k_="",dL=/^https?$/i,fL=["POST","PUT"];W=Ke.prototype;W.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hu.g(),this.C=this.u?Up(this.u):Up(hu),this.g.onreadystatechange=nt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Hp(this,r);return}t=n||"";const i=new ji(this.headers);s&&jh(s,function(r,o){i.set(o,r)}),s=I1(i.T()),n=ue.FormData&&t instanceof ue.FormData,!(0<=Gv(fL,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{M_(this),0<this.B&&((this.K=pL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.pa,this)):this.A=Fh(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Hp(this,r)}};function pL(t){return Si&&N1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function gL(t){return t.toLowerCase()=="content-type"}W.pa=function(){typeof Ch!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Hp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,R_(t),Ac(t)}function R_(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),Ac(this))};W.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ac(this,!0)),Ke.Z.M.call(this)};W.Fa=function(){this.s||(this.F||this.v||this.l?L_(this):this.cb())};W.cb=function(){L_(this)};function L_(t){if(t.h&&typeof Ch!="undefined"&&(!t.C[1]||yn(t)!=4||t.ba()!=2)){if(t.v&&yn(t)==4)Fh(t.Fa,0,t);else if(st(t,"readystatechange"),yn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(w_)[1]||null;if(!i&&ue.self&&ue.self.location){var r=ue.self.location.protocol;i=r.substr(0,r.length-1)}s=!dL.test(i?i.toLowerCase():"")}n=s}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",R_(t)}}finally{Ac(t)}}}}function Ac(t,e){if(t.g){M_(t);const n=t.g,s=t.C[0]?_a:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=s}catch{}}}function M_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}W.ba=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};W.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hL(e)}};function Kp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case k_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}W.Da=function(){return this.m};W.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function mL(t){let e="";return Nh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function zh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mL(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function Zi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function P_(t){this.za=0,this.l=[],this.h=new vc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Zi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Zi("baseRetryDelayMs",5e3,t),this.$a=Zi("retryDelaySeedMs",1e4,t),this.Ya=Zi("forwardChannelMaxRetries",2,t),this.ra=Zi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new A_(t&&t.concurrentRequestLimit),this.Ca=new cL,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}W=P_.prototype;W.ma=8;W.G=1;function Gh(t){if(x_(t),t.G==3){var e=t.V++,n=Sn(t.F);$e(n,"SID",t.J),$e(n,"RID",e),$e(n,"TYPE","terminate"),ho(t,n),e=new ao(t,t.h,e,void 0),e.K=2,e.v=Tc(Sn(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(e.v.toString(),"")),!n&&ue.Image&&(new Image().src=e.v,n=!0),n||(e.g=K_(e.l,null),e.g.ea(e.v)),e.F=Date.now(),co(e)}j_(t)}W.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Sc(t){t.g&&(Qh(t),t.g.cancel(),t.g=null)}function x_(t){Sc(t),t.u&&(ue.clearTimeout(t.u),t.u=null),Sa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function El(t,e){t.l.push(new oL(t.Za++,e)),t.G==3&&Cc(t)}function Cc(t){S_(t.i)||t.m||(t.m=!0,xh(t.Ha,t),t.C=0)}function yL(t,e){return C_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ro(nt(t.Ha,t,e),B_(t,t.C)),t.C++,!0)}W.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ao(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Qv(r),Xv(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$_(this,i,e),n=Sn(this.F),$e(n,"RID",t),$e(n,"CVER",22),this.D&&$e(n,"X-HTTP-Session-Id",this.D),ho(this,n),this.o&&r&&zh(n,this.o,r),Kh(this.i,i),this.Ra&&$e(n,"TYPE","init"),this.ja?($e(n,"$req",e),$e(n,"SID","null"),i.$=!0,fu(i,n,null)):fu(i,n,e),this.G=2}}else this.G==3&&(t?Wp(this,t):this.l.length==0||S_(this.i)||Wp(this))};function Wp(t,e){var n;e?n=e.m:n=t.V++;const s=Sn(t.F);$e(s,"SID",t.J),$e(s,"RID",n),$e(s,"AID",t.U),ho(t,s),t.o&&t.s&&zh(s,t.o,t.s),n=new ao(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$_(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Kh(t.i,n),fu(n,s,e)}function ho(t,e){t.j&&jh({},function(n,s){$e(e,s,n)})}function $_(t,e,n){n=Math.min(t.l.length,n);var s=t.j?nt(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{lL(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function F_(t){t.g||t.u||(t.Y=1,xh(t.Ga,t),t.A=0)}function Yh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ro(nt(t.Ga,t),B_(t,t.A)),t.A++,!0)}W.Ga=function(){if(this.u=null,V_(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ro(nt(this.bb,this),t)}};W.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),Sc(this),V_(this))};function Qh(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function V_(t){t.g=new ao(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Sn(t.oa);$e(e,"RID","rpc"),$e(e,"SID",t.J),$e(e,"CI",t.N?"0":"1"),$e(e,"AID",t.U),ho(t,e),$e(e,"TYPE","xmlhttp"),t.o&&t.s&&zh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tc(Sn(e)),n.s=null,n.U=!0,y_(n,t)}W.ab=function(){this.v!=null&&(this.v=null,Sc(this),Yh(this),pt(19))};function Sa(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function U_(t,e){var n=null;if(t.g==e){Sa(t),Qh(t),t.g=null;var s=2}else if(gu(t.i,e))n=e.D,O_(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=_c(),st(s,new f_(s,n)),Cc(t)}else F_(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&yL(t,e)||s==2&&Yh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ws(t,5);break;case 4:ws(t,10);break;case 3:ws(t,6);break;default:ws(t,2)}}}function B_(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ws(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=nt(t.jb,t);n||(n=new Ms("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||Ta(n,"https"),Tc(n)),uL(n.toString(),s)}else pt(2);t.G=0,t.j&&t.j.va(e),j_(t),x_(t)}W.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))};function j_(t){t.G=0,t.I=-1,t.j&&((N_(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Oh(t.l),t.l.length=0),t.j.ua())}function H_(t,e,n){let s=J1(n);if(s.i!="")e&&Ia(s,e+"."+s.i),Aa(s,s.m);else{const i=ue.location;s=Z1(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Nh(t.aa,function(i,r){$e(s,r,i)}),e=t.D,n=t.sa,e&&n&&$e(s,e,n),$e(s,"VER",t.ma),ho(t,s),s}function K_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ke(new lo({ib:!0})):new Ke(t.qa),e.L=t.H,e}function W_(){}W=W_.prototype;W.xa=function(){};W.wa=function(){};W.va=function(){};W.ua=function(){};W.Oa=function(){};function Ca(){if(Si&&!(10<=Number(D1)))throw Error("Environmental error: no available transport.")}Ca.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){Je.call(this),this.g=new P_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ea(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}rt(Nt,Je);Nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),xh(nt(t.hb,t,e))),pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=H_(t,null,t.W),Cc(t)};Nt.prototype.close=function(){Gh(this.g)};Nt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,El(this.g,e)}else this.v?(e={},e.__data__=Ph(t),El(this.g,e)):El(this.g,t)};Nt.prototype.M=function(){this.g.j=null,delete this.j,Gh(this.g),delete this.g,Nt.Z.M.call(this)};function q_(t){Uh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(q_,Uh);function z_(){Bh.call(this),this.status=1}rt(z_,Bh);function Ki(t){this.g=t}rt(Ki,W_);Ki.prototype.xa=function(){st(this.g,"a")};Ki.prototype.wa=function(t){st(this.g,new q_(t))};Ki.prototype.va=function(t){st(this.g,new z_)};Ki.prototype.ua=function(){st(this.g,"b")};Ca.prototype.createWebChannel=Ca.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;Ec.NO_ERROR=0;Ec.TIMEOUT=8;Ec.HTTP_ERROR=6;p_.COMPLETE="complete";g_.EventType=oo;oo.OPEN="a";oo.CLOSE="b";oo.ERROR="c";oo.MESSAGE="d";Je.prototype.listen=Je.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.La;Ke.prototype.getLastErrorCode=Ke.prototype.Da;Ke.prototype.getStatus=Ke.prototype.ba;Ke.prototype.getResponseJson=Ke.prototype.Qa;Ke.prototype.getResponseText=Ke.prototype.ga;Ke.prototype.send=Ke.prototype.ea;var vL=function(){return new Ca},_L=function(){return _c()},wl=Ec,EL=p_,wL=js,qp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},bL=lo,Po=g_,TL=Ke;const zp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new cc("@firebase/firestore");function Gp(){return Ps.logLevel}function te(t,...e){if(Ps.logLevel<=Oe.DEBUG){const n=e.map(Xh);Ps.debug(`Firestore (${Wi}): ${t}`,...n)}}function ts(t,...e){if(Ps.logLevel<=Oe.ERROR){const n=e.map(Xh);Ps.error(`Firestore (${Wi}): ${t}`,...n)}}function Yp(t,...e){if(Ps.logLevel<=Oe.WARN){const n=e.map(Xh);Ps.warn(`Firestore (${Wi}): ${t}`,...n)}}function Xh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function Pe(t,e){t||de()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class SL{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new IL(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new vt(e)}}class CL{constructor(e,n,s){this.type="FirstParty",this.user=vt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class OL{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new CL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DL{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.p=n.token,new NL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=kL(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ke(t,e){return t<e?-1:t>e?1:0}function Ci(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new We(0,0))}static max(){return new ve(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(),s===void 0?s=e.length-n:s>e.length-n&&de(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Fr{construct(e,n,s){return new Fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const RL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Fr{construct(e,n,s){return new ot(e,n,s)}static isValidIdentifier(e){return RL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ce(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ce(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ce(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ce(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Fe.fromString(e))}static fromName(e){return new ne(Fe.fromString(e).popFirst(5))}static empty(){return new ne(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Fe(e.slice()))}}function LL(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new ns(i,ne.empty(),e)}function ML(t){return new ns(t.readTime,t.key,-1)}class ns{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ns(ve.min(),ne.empty(),-1)}static max(){return new ns(ve.max(),ne.empty(),-1)}}function PL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $L{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==xL)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,s)=>{n(e)})}static reject(e){return new N((n,s)=>{s(e)})}static waitFor(e){return new N((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=N.resolve(!1);for(const s of e)n=n.next(i=>i?N.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new N((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new N((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jh.ot=-1;class ze{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:et.RED,this.left=i!=null?i:et.EMPTY,this.right=r!=null?r:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new et(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(t,e,n,s,i){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xp(this.data.getIterator())}getIteratorFrom(e){return new Xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new rn([])}unionWith(e){let n=new qe(ot.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const FL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=FL.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function X_(t){const e=t.mapValue.fields.__previous_value__;return Q_(e)?X_(e):e}function Vr(t){const e=ss(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){return t==null}function Oa(t){return t===0&&1/t==-1/0}function UL(t){return typeof t=="number"&&Number.isInteger(t)&&!Oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q_(t)?4:BL(t)?9007199254740991:10:de()}function un(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vr(t).isEqual(Vr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ss(s.timestampValue),o=ss(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Oi(s.bytesValue).isEqual(Oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=je(s.doubleValue),o=je(i.doubleValue);return r===o?Oa(r)===Oa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ci(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Qp(r)!==Qp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!un(r[a],o[a])))return!1;return!0}(t,e);default:return de()}}function Ur(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=xs(t),s=xs(e);if(n!==s)return ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=je(i.integerValue||i.doubleValue),a=je(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(Vr(t),Vr(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Oi(i),a=Oi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ke(o[c],a[c]);if(l!==0)return l}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ke(je(i.latitude),je(r.latitude));return o!==0?o:ke(je(i.longitude),je(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Di(o[c],a[c]);if(l)return l}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===$o.mapValue&&r===$o.mapValue)return 0;if(i===$o.mapValue)return 1;if(r===$o.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ke(a[u],l[u]);if(h!==0)return h;const d=Di(o[a[u]],c[l[u]]);if(d!==0)return d}return ke(a.length,l.length)}(t.mapValue,e.mapValue);default:throw de()}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=ss(t),s=ss(e),i=ke(n.seconds,s.seconds);return i!==0?i:ke(n.nanos,s.nanos)}function hi(t){return mu(t)}function mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ss(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ne.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=mu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${mu(s.fields[a])}`;return r+"}"}(t.mapValue):de();var e,n}function yu(t){return!!t&&"integerValue"in t}function Zh(t){return!!t&&"arrayValue"in t}function Zp(t){return!!t&&"nullValue"in t}function eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jo(t){return!!t&&"mapValue"in t}function yr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=yr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yr(n)}setAll(e){let n=ot.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=yr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Jo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){qi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Rt(yr(this.value))}}function J_(t){const e=[];return qi(t.fields,(n,s)=>{const i=new ot([n]);if(Jo(s)){const r=J_(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,ve.min(),ve.min(),Rt.empty(),0)}static newFoundDocument(e,n,s){return new tt(e,1,n,ve.min(),s,0)}static newNoDocument(e,n){return new tt(e,2,n,ve.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ve.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function tg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new jL(t,e,n,s,i,r,o)}function ed(t){const e=fe(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+hi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>hi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>hi(s)).join(",")),e.ut=n}return e.ut}function HL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${hi(s.value)}`;var s}).join(", ")}]`),Oc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>hi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>hi(n)).join(",")),`Target(${e})`}function td(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!XL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!un(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sg(t.startAt,e.startAt)&&sg(t.endAt,e.endAt)}function vu(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Et extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new KL(e,n,s):n==="array-contains"?new zL(e,s):n==="in"?new GL(e,s):n==="not-in"?new YL(e,s):n==="array-contains-any"?new QL(e,s):new Et(e,n,s)}static ct(e,n,s){return n==="in"?new WL(e,s):new qL(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Di(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.at(Di(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class KL extends Et{constructor(e,n,s){super(e,n,s),this.key=ne.fromName(s.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.at(n)}}class WL extends Et{constructor(e,n){super(e,"in",n),this.keys=Z_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qL extends Et{constructor(e,n){super(e,"not-in",n),this.keys=Z_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Z_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ne.fromName(s.referenceValue))}class zL extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zh(n)&&Ur(n.arrayValue,this.value)}}class GL extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class YL extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class QL extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ur(this.value.arrayValue,s))}}class Na{constructor(e,n){this.position=e,this.inclusive=n}}class vr{constructor(e,n="asc"){this.field=e,this.dir=n}}function XL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ng(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ne.comparator(ne.fromName(o.referenceValue),n.key):s=Di(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function JL(t,e,n,s,i,r,o,a){return new Nc(t,e,n,s,i,r,o,a)}function nd(t){return new Nc(t)}function ZL(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function tM(t){for(const e of t.filters)if(e.ht())return e.field;return null}function nM(t){return t.collectionGroup!==null}function Br(t){const e=fe(t);if(e.lt===null){e.lt=[];const n=tM(e),s=eM(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new vr(n)),e.lt.push(new vr(ot.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new vr(ot.keyField(),r))}}}return e.lt}function $s(t){const e=fe(t);if(!e.ft)if(e.limitType==="F")e.ft=tg(e.path,e.collectionGroup,Br(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Br(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new vr(r.field,o))}const s=e.endAt?new Na(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Na(e.startAt.position,e.startAt.inclusive):null;e.ft=tg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.ft}function sM(t,e,n){return new Nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return td($s(t),$s(e))&&t.limitType===e.limitType}function eE(t){return`${ed($s(t))}|lt:${t.limitType}`}function _u(t){return`Query(target=${HL($s(t))}; limitType=${t.limitType})`}function sd(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ne.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ng(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Br(n),s)||n.endAt&&!function(i,r,o){const a=ng(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Br(n),s))}(t,e)}function iM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tE(t){return(e,n)=>{let s=!1;for(const i of Br(t)){const r=rM(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function rM(t,e,n){const s=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Di(a,c):de()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oa(e)?"-0":e}}function sE(t){return{integerValue:""+t}}function oM(t,e){return UL(e)?sE(e):nE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function aM(t,e,n){return t instanceof Da?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof jr?rE(t,e):t instanceof Hr?oE(t,e):function(s,i){const r=iE(s,i),o=ig(r)+ig(s._t);return yu(r)&&yu(s._t)?sE(o):nE(s.wt,o)}(t,e)}function cM(t,e,n){return t instanceof jr?rE(t,e):t instanceof Hr?oE(t,e):n}function iE(t,e){return t instanceof ka?yu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Da extends kc{}class jr extends kc{constructor(e){super(),this.elements=e}}function rE(t,e){const n=aE(e);for(const s of t.elements)n.some(i=>un(i,s))||n.push(s);return{arrayValue:{values:n}}}class Hr extends kc{constructor(e){super(),this.elements=e}}function oE(t,e){let n=aE(e);for(const s of t.elements)n=n.filter(i=>!un(i,s));return{arrayValue:{values:n}}}class ka extends kc{constructor(e,n){super(),this.wt=e,this._t=n}}function ig(t){return je(t.integerValue||t.doubleValue)}function aE(t){return Zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lM(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof jr&&s instanceof jr||n instanceof Hr&&s instanceof Hr?Ci(n.elements,s.elements,un):n instanceof ka&&s instanceof ka?un(n._t,s._t):n instanceof Da&&s instanceof Da}(t.transform,e.transform)}class uM{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rc{}function cE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uE(t.key,wn.none()):new go(t.key,t.data,wn.none());{const n=t.data,s=Rt.empty();let i=new qe(ot.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Hs(t.key,s,new rn(i.toArray()),wn.none())}}function hM(t,e,n){t instanceof go?function(s,i,r){const o=s.value.clone(),a=og(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hs?function(s,i,r){if(!Zo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=og(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(lE(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function _r(t,e,n,s){return t instanceof go?function(i,r,o,a){if(!Zo(i.precondition,r))return o;const c=i.value.clone(),l=ag(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Hs?function(i,r,o,a){if(!Zo(i.precondition,r))return o;const c=ag(i.fieldTransforms,a,r),l=r.data;return l.setAll(lE(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Zo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function dM(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=iE(s.transform,i||null);r!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,r))}return n||null}function rg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ci(n,s,(i,r)=>lM(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends Rc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hs extends Rc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function og(t,e,n){const s=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,cM(o,a,n[i]))}return s}function ag(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,aM(r,o,e))}return s}class uE extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fM extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,Ae;function gM(t){switch(t){default:return de();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function hE(t){if(t===void 0)return ts("GRPC error has no .code"),k.UNKNOWN;switch(t){case Be.OK:return k.OK;case Be.CANCELLED:return k.CANCELLED;case Be.UNKNOWN:return k.UNKNOWN;case Be.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Be.INTERNAL:return k.INTERNAL;case Be.UNAVAILABLE:return k.UNAVAILABLE;case Be.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Be.NOT_FOUND:return k.NOT_FOUND;case Be.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Be.ABORTED:return k.ABORTED;case Be.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Be.DATA_LOSS:return k.DATA_LOSS;default:return de()}}(Ae=Be||(Be={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Y_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=new ze(ne.comparator);function Cn(){return mM}const dE=new ze(ne.comparator);function sr(...t){let e=dE;for(const n of t)e=e.insert(n.key,n);return e}function fE(t){let e=dE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function bs(){return Er()}function pE(){return Er()}function Er(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yM=new ze(ne.comparator),vM=new qe(ne.comparator);function be(...t){let e=vM;for(const n of t)e=e.add(n);return e}const _M=new qe(ke);function gE(){return _M}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Lc(ve.min(),s,gE(),Cn(),be())}}class mo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new mo(it.EMPTY_BYTE_STRING,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,i){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=i}}class mE{constructor(e,n){this.targetId=e,this.It=n}}class yE{constructor(e,n,s=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class cg{constructor(){this.Tt=0,this.Et=ug(),this.At=it.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=be(),n=be(),s=be();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:de()}}),new mo(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=ug()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class EM{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Cn(),this.Bt=lg(),this.Lt=new qe(ke)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,s=e.It.count,i=this.Ht(n);if(i){const r=i.target;if(vu(r))if(s===0){const o=new ne(r.path);this.Kt(n,o,tt.newNoDocument(o,ve.min()))}else Pe(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&vu(a.target)){const c=new ne(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,tt.newNoDocument(c,e))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=be();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new Lc(e,n,this.Lt,this.$t,s);return this.$t=Cn(),this.Bt=lg(),this.Lt=new qe(ke),i}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new cg,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new qe(ke),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new cg),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function lg(){return new ze(ne.comparator)}function ug(){return new ze(ne.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class TM{constructor(e,n){this.databaseId=e,this.dt=n}}function Ra(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vE(t,e){return t.dt?e.toBase64():e.toUint8Array()}function IM(t,e){return Ra(t,e.toTimestamp())}function bn(t){return Pe(!!t),ve.fromTimestamp(function(e){const n=ss(e);return new We(n.seconds,n.nanos)}(t))}function id(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _E(t){const e=Fe.fromString(t);return Pe(bE(e)),e}function Eu(t,e){return id(t.databaseId,e.path)}function bl(t,e){const n=_E(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(EE(n))}function wu(t,e){return id(t.databaseId,e)}function AM(t){const e=_E(t);return e.length===4?Fe.emptyPath():EE(e)}function bu(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EE(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hg(t,e,n){return{name:Eu(t,e),fields:n.value.mapValue.fields}}function SM(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.dt?(Pe(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(Pe(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:hE(c.code);return new ce(l,c.message||"")}(o);n=new yE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=bl(t,s.document.name),r=bn(s.document.updateTime),o=new Rt({mapValue:{fields:s.document.fields}}),a=tt.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ea(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=bl(t,s.document),r=s.readTime?bn(s.readTime):ve.min(),o=tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ea([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=bl(t,s.document),r=s.removedTargetIds||[];n=new ea([],r,i,null)}else{if(!("filter"in e))return de();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new pM(i),o=s.targetId;n=new mE(o,r)}}return n}function CM(t,e){let n;if(e instanceof go)n={update:hg(t,e.key,e.value)};else if(e instanceof uE)n={delete:Eu(t,e.key)};else if(e instanceof Hs)n={update:hg(t,e.key,e.data),updateMask:$M(e.fieldMask)};else{if(!(e instanceof fM))return de();n={verify:Eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Da)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ka)return{fieldPath:r.field.canonicalString(),increment:o._t};throw de()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IM(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function OM(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?bn(s.updateTime):bn(i);return r.isEqual(ve.min())&&(r=bn(i)),new uM(r,s.transformResults||[])}(n,e))):[]}function NM(t,e){return{documents:[wu(t,e.path)]}}function DM(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(eg(h.value))return{unaryFilter:{field:Ys(h.field),op:"IS_NAN"}};if(Zp(h.value))return{unaryFilter:{field:Ys(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(eg(h.value))return{unaryFilter:{field:Ys(h.field),op:"IS_NOT_NAN"}};if(Zp(h.value))return{unaryFilter:{field:Ys(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(h.field),op:MM(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ys(u.field),direction:LM(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.dt||Oc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function kM(t){let e=AM(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=wE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new vr(ii(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Oc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Na(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Na(d,h)}(n.endAt)),JL(e,i,o,r,a,"F",c,l)}function RM(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return de()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function wE(t){return t?t.unaryFilter!==void 0?[xM(t)]:t.fieldFilter!==void 0?[PM(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>wE(e)).reduce((e,n)=>e.concat(n)):de():[]}function LM(t){return wM[t]}function MM(t){return bM[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function ii(t){return ot.fromServerFormat(t.fieldPath)}function PM(t){return Et.create(ii(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(t.fieldFilter.op),t.fieldFilter.value)}function xM(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ii(t.unaryFilter.field);return Et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ii(t.unaryFilter.field);return Et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(t.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ii(t.unaryFilter.field);return Et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return de()}}function $M(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&hM(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=_r(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=_r(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=pE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=cE(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,(n,s)=>rg(n,s))&&Ci(this.baseMutations,e.baseMutations,(n,s)=>rg(n,s))}}class rd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Pe(e.mutations.length===s.length);let i=yM;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new rd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s,i,r=ve.min(),o=ve.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e){this.ne=e}}function BM(t){const e=kM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sM(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.ze=new HM}addToCollectionParentIndex(e,n){return this.ze.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(ns.min())}updateCollectionGroup(e,n,s){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class HM{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new qe(Fe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new qe(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new ki(0)}static Rn(){return new ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?N.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&_r(s.mutation,i,rn.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,be()).next(()=>s))}getLocalViewOfDocuments(e,n,s=be()){const i=bs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=sr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,be()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Cn();const o=Er(),a=Er();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Hs)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),_r(u.mutation,l,u.mutation.getFieldMask(),We.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new WM(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Er();let i=new ze((o,a)=>o-a),r=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||rn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||be()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=pE();u.forEach(d=>{if(!r.has(d)){const p=cE(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return N.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ne.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):N.resolve(bs());let a=-1,c=r;return o.next(l=>N.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?N.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,be())).next(u=>({batchId:a,changes:fE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(s=>{let i=sr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=sr();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const c=function(l,u){return new Nc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=sr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&_r(l.mutation,c,rn.empty(),We.now()),sd(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):N.resolve(tt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return N.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:bn(s.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:BM(s.bundledQuery),readTime:bn(s.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.overlays=new ze(ne.comparator),this.Xn=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const s=bs();return N.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ie(e,n,r)}),N.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),N.resolve()}getOverlaysForCollection(e,n,s){const i=bs(),r=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=bs(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=bs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return N.resolve(a)}ie(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new VM(n,s));let r=this.Xn.get(n);r===void 0&&(r=be(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.Zn=new qe(Ge.ts),this.es=new qe(Ge.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Ge(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Ge(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new ne(new Fe([])),s=new Ge(n,e),i=new Ge(n,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new ne(new Fe([])),s=new Ge(n,e),i=new Ge(n,e+1);let r=be();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ge(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ge{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return ne.comparator(e.key,n.key)||ke(e.ls,n.ls)}static ns(e,n){return ke(e.ls,n.ls)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new qe(Ge.ts)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FM(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Ge(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new qe(ke);return n.forEach(i=>{const r=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),N.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ne.isDocumentKey(r)||(r=r.child(""));const o=new Ge(new ne(r),0);let a=new qe(ke);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),N.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return N.forEach(n.mutations,i=>{const r=new Ge(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Ge(n,0),i=this.ds.firstAfterOrEqual(s);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.ps=e,this.docs=new ze(ne.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return N.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=Cn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),N.resolve(s)}getAllFromCollection(e,n,s){let i=Cn();const r=new ne(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||PL(ML(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,s,i){de()}Is(e,n){return N.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XM(this)}getSize(e){return N.resolve(this.size)}}class XM extends KM{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),N.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.persistence=e,this.Ts=new zi(n=>ed(n),td),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Es=0,this.As=new od,this.targetCount=0,this.Rs=ki.An()}forEachTarget(e,n){return this.Ts.forEach((s,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),N.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.vn(n),N.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(r).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return N.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),N.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),N.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return N.resolve(s)}containsKey(e,n){return N.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Jh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new JM(this),this.indexManager=new jM,this.remoteDocumentCache=function(s){return new QM(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new UM(n),this.Ds=new zM(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new YM(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const i=new eP(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,n){return N.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class eP extends $L{constructor(e){super(),this.currentSequenceNumber=e}}class ad{constructor(e){this.persistence=e,this.ks=new od,this.Os=null}static Ms(e){return new ad(e)}get Fs(){if(this.Os)return this.Os;throw de()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),N.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),N.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Fs,s=>{const i=ne.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i,ve.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return N.or([()=>N.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(e,n){let s=be(),i=be();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new cd(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ci(e,n).next(r=>r||this.xi(e,n,i,s)).next(r=>r||this.Ni(e,n))}Ci(e,n){return N.resolve(null)}xi(e,n,s,i){return ZL(n)||i.isEqual(ve.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(e,n):(Gp()<=Oe.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_u(n)),this.Mi(e,o,n,LL(i,-1)))})}ki(e,n){let s=new qe(tE(e));return n.forEach((i,r)=>{sd(e,r)&&(s=s.add(r))}),s}Oi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,n){return Gp()<=Oe.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",_u(n)),this.Di.getDocumentsMatchingQuery(e,n,ns.min())}Mi(e,n,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,s,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new ze(ke),this.Bi=new zi(r=>ed(r),td),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qM(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function sP(t,e,n,s){return new nP(t,e,n,s)}async function TE(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=be();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function iP(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=N.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);Pe(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=be();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function IE(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function rP(t,e){const n=fe(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(it.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,v,_){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,u)&&a.push(n.Vs.updateTargetData(r,p))});let c=Cn(),l=be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(oP(r,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(ve.min())){const u=n.Vs.getLastRemoteSnapshotVersion(r).next(h=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return N.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.$i=i,r))}function oP(t,e,n){let s=be(),i=be();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Cn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function aP(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cP(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,e).next(r=>r?(i=r,N.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new Cs(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Tu(t,e,n){const s=fe(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!po(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function dg(t,e,n){const s=fe(t);let i=ve.min(),r=be();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=fe(a),h=u.Bi.get(l);return h!==void 0?N.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,$s(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?i:ve.min(),n?r:be())).next(a=>(lP(s,iM(e),a),{documents:a,ji:r})))}function lP(t,e,n){let s=ve.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Li.set(e,s)}class fg{constructor(){this.activeTargetIds=gE()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uP{constructor(){this.Fr=new fg,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new fg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,i,r){const o=this.oo(e,n);te("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(te("RestConnection","Received: ",c),c),c=>{throw Yp("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,i,r,o){return this.ro(e,n,s,i,r)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,n){const s=dP[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,i){return new Promise((r,o)=>{const a=new TL;a.listenOnce(EL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case wl.NO_ERROR:const l=a.getResponseJson();te("Connection","XHR received:",JSON.stringify(l)),r(l);break;case wl.TIMEOUT:te("Connection",'RPC "'+e+'" timed out'),o(new ce(k.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const u=a.getStatus();if(te("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(m)>=0?m:k.UNKNOWN}(h.status);o(new ce(d,h.message))}else o(new ce(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ce(k.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{te("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(e,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=vL(),o=_L(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new bL({})),this.uo(a.initMessageHeaders,n,s),Vy()||Uy()||HO()||By()||KO()||uh()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");te("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new fP({jr:m=>{h?te("Connection","Not sending because WebChannel is closed:",m):(u||(te("Connection","Opening WebChannel transport."),l.open(),u=!0),te("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),p=(m,v,_)=>{m.listen(v,w=>{try{_(w)}catch(R){setTimeout(()=>{throw R},0)}})};return p(l,Po.EventType.OPEN,()=>{h||te("Connection","WebChannel transport opened.")}),p(l,Po.EventType.CLOSE,()=>{h||(h=!0,te("Connection","WebChannel transport closed"),d.eo())}),p(l,Po.EventType.ERROR,m=>{h||(h=!0,Yp("Connection","WebChannel transport errored:",m),d.eo(new ce(k.UNAVAILABLE,"The operation could not be completed")))}),p(l,Po.EventType.MESSAGE,m=>{var v;if(!h){const _=m.data[0];Pe(!!_);const w=_,R=w.error||((v=w[0])===null||v===void 0?void 0:v.error);if(R){te("Connection","WebChannel received error:",R);const U=R.status;let x=function(J){const se=Be[J];if(se!==void 0)return hE(se)}(U),X=R.message;x===void 0&&(x=k.INTERNAL,X="Unknown error status: "+U+" with message "+R.message),h=!0,d.eo(new ce(x,X)),l.close()}else te("Connection","WebChannel received:",_),d.no(_)}}),p(o,wL.STAT_EVENT,m=>{m.stat===qp.PROXY?te("Connection","Detected buffering proxy"):m.stat===qp.NOPROXY&&te("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Tl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new TM(t,!0)}class AE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new AE(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{e(()=>{const i=new ce(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gP extends SE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=SM(this.wt,e),s=function(i){if(!("targetChange"in i))return ve.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?ve.min():r.readTime?bn(r.readTime):ve.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=bu(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=vu(a)?{documents:NM(i,a)}:{query:DM(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=vE(i,r.resumeToken):r.snapshotVersion.compareTo(ve.min())>0&&(o.readTime=Ra(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=RM(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=bu(this.wt),n.removeTarget=e,this.Mo(n)}}class mP extends SE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=OM(e.writeResults,e.commitTime),s=bn(e.commitTime);return this.listener.Jo(s,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=bu(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>CM(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new ce(k.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(k.UNKNOWN,i.toString())})}ao(e,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ce(k.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class vP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(ts(n),this.su=!1):te("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{Ks(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=fe(a);c.lu.add(4),await yo(c),c._u.set("Unknown"),c.lu.delete(4),await Pc(c)}(this))})}),this._u=new vP(s,i)}}async function Pc(t){if(Ks(t))for(const e of t.fu)await e(!0)}async function yo(t){for(const e of t.fu)await e(!1)}function CE(t,e){const n=fe(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),hd(n)?ud(n):Gi(n).Co()&&ld(n,e))}function OE(t,e){const n=fe(t),s=Gi(n);n.hu.delete(e),s.Co()&&NE(n,e),n.hu.size===0&&(s.Co()?s.ko():Ks(n)&&n._u.set("Unknown"))}function ld(t,e){t.wu.Nt(e.targetId),Gi(t).Qo(e)}function NE(t,e){t.wu.Nt(e),Gi(t).jo(e)}function ud(t){t.wu=new EM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Gi(t).start(),t._u.iu()}function hd(t){return Ks(t)&&!Gi(t).Do()&&t.hu.size>0}function Ks(t){return fe(t).lu.size===0}function DE(t){t.wu=void 0}async function EP(t){t.hu.forEach((e,n)=>{ld(t,e)})}async function wP(t,e){DE(t),hd(t)?(t._u.uu(e),ud(t)):t._u.set("Unknown")}async function bP(t,e,n){if(t._u.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await La(t,s)}else if(e instanceof ea?t.wu.Ut(e):e instanceof mE?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ve.min()))try{const s=await IE(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),NE(i,a);const l=new Cs(c.target,a,1,c.sequenceNumber);ld(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await La(t,s)}}async function La(t,e,n){if(!po(e))throw e;t.lu.add(1),await yo(t),t._u.set("Offline"),n||(n=()=>IE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Pc(t)})}function kE(t,e){return e().catch(n=>La(t,n,e))}async function xc(t){const e=fe(t),n=is(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;TP(e);)try{const i=await aP(e.localStore,s);if(i===null){e.au.length===0&&n.ko();break}s=i.batchId,IP(e,i)}catch(i){await La(e,i)}RE(e)&&LE(e)}function TP(t){return Ks(t)&&t.au.length<10}function IP(t,e){t.au.push(e);const n=is(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function RE(t){return Ks(t)&&!is(t).Do()&&t.au.length>0}function LE(t){is(t).start()}async function AP(t){is(t).Xo()}async function SP(t){const e=is(t);for(const n of t.au)e.Ho(n.mutations)}async function CP(t,e,n){const s=t.au.shift(),i=rd.from(s,e,n);await kE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xc(t)}async function OP(t,e){e&&is(t).zo&&await async function(n,s){if(i=s.code,gM(i)&&i!==k.ABORTED){const r=n.au.shift();is(n).No(),await kE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await xc(n)}var i}(t,e),RE(t)&&LE(t)}async function gg(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Ks(n);n.lu.add(3),await yo(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Pc(n)}async function NP(t,e){const n=fe(t);e?(n.lu.delete(2),await Pc(n)):e||(n.lu.add(2),await yo(n),n._u.set("Unknown"))}function Gi(t){return t.mu||(t.mu=function(e,n,s){const i=fe(e);return i.tu(),new gP(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:EP.bind(null,t),Jr:wP.bind(null,t),Go:bP.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),hd(t)?ud(t):t._u.set("Unknown")):(await t.mu.stop(),DE(t))})),t.mu}function is(t){return t.gu||(t.gu=function(e,n,s){const i=fe(e);return i.tu(),new mP(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:AP.bind(null,t),Jr:OP.bind(null,t),Yo:SP.bind(null,t),Jo:CP.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await xc(t)):(await t.gu.stop(),t.au.length>0&&(te("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new dd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fd(t,e){if(ts("AsyncQueue",`${e}: ${t}`),po(t))return new ce(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ne.comparator(n.key,s.key):(n,s)=>ne.comparator(n.key,s.key),this.keyedMap=sr(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new di(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new di;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.yu=new ze(ne.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):de():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ri{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Ri(e,n,di.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this.Iu=void 0,this.listeners=[]}}class kP{constructor(){this.queries=new zi(e=>eE(e),Dc),this.onlineState="Unknown",this.Tu=new Set}}async function RP(t,e){const n=fe(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new DP),i)try{r.Iu=await n.onListen(s)}catch(o){const a=fd(o,`Initialization of query '${_u(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&pd(n)}async function LP(t,e){const n=fe(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function MP(t,e){const n=fe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&pd(n)}function PP(t,e,n){const s=fe(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function pd(t){t.Tu.forEach(e=>{e.next()})}class xP{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ri(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.key=e}}class PE{constructor(e){this.key=e}}class $P{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=be(),this.mutatedKeys=be(),this.Lu=tE(e),this.Uu=new di(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new mg,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=sd(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?m!==v&&(s.track({type:3,doc:p}),_=!0):this.Qu(d,p)||(s.track({type:2,doc:p}),_=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),_=!0):d&&!p&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return p(h)-p(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new Ri(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new mg,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=be(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new PE(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new ME(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=be();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Ri.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class FP{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class VP{constructor(e){this.key=e,this.Xu=!1}}class UP{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new zi(a=>eE(a),Dc),this.ec=new Map,this.nc=new Set,this.sc=new ze(ne.comparator),this.ic=new Map,this.rc=new od,this.oc={},this.uc=new Map,this.cc=ki.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function BP(t,e){const n=XP(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await cP(n.localStore,$s(e));n.isPrimaryClient&&CE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await jP(n,e,s,a==="current")}return i}async function jP(t,e,n,s){t.hc=(u,h,d)=>async function(p,m,v,_){let w=m.view.Ku(v);w.Oi&&(w=await dg(p.localStore,m.query,!1).then(({documents:x})=>m.view.Ku(x,w)));const R=_&&_.targetChanges.get(m.targetId),U=m.view.applyChanges(w,p.isPrimaryClient,R);return vg(p,m.targetId,U.zu),U.snapshot}(t,u,h,d);const i=await dg(t.localStore,e,!0),r=new $P(e,i.ji),o=r.Ku(i.documents),a=mo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);vg(t,n,c.zu);const l=new FP(e,n,r);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function HP(t,e){const n=fe(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!Dc(r,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Tu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),OE(n.remoteStore,s.targetId),Iu(n,s.targetId)}).catch(fo)):(Iu(n,s.targetId),await Tu(n.localStore,s.targetId,!0))}async function KP(t,e,n){const s=JP(t);try{const i=await function(r,o){const a=fe(r),c=We.now(),l=o.reduce((d,p)=>d.add(p.key),be());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Cn(),m=be();return a.Ui.getEntries(d,l).next(v=>{p=v,p.forEach((_,w)=>{w.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const _=[];for(const w of o){const R=dM(w,u.get(w.key).overlayedDocument);R!=null&&_.push(new Hs(w.key,R,J_(R.value.mapValue),wn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:fE(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new ze(ke)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,n),await vo(s,i.changes),await xc(s.remoteStore)}catch(i){const r=fd(i,"Failed to persist write");n.reject(r)}}async function xE(t,e){const n=fe(t);try{const s=await rP(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?Pe(o.Xu):i.removedDocuments.size>0&&(Pe(o.Xu),o.Xu=!1))}),await vo(n,s,e)}catch(s){await fo(s)}}function yg(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=fe(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&pd(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WP(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new ze(ne.comparator);o=o.insert(r,tt.newNoDocument(r,ve.min()));const a=be().add(r),c=new Lc(ve.min(),new Map,new qe(ke),o,a);await xE(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),gd(s)}else await Tu(s.localStore,e,!1).then(()=>Iu(s,e,n)).catch(fo)}async function qP(t,e){const n=fe(t),s=e.batch.batchId;try{const i=await iP(n.localStore,e);FE(n,s,null),$E(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await vo(n,i)}catch(i){await fo(i)}}async function zP(t,e,n){const s=fe(t);try{const i=await function(r,o){const a=fe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);FE(s,e,n),$E(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await vo(s,i)}catch(i){await fo(i)}}function $E(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function FE(t,e,n){const s=fe(t);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}function Iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||VE(t,s)})}function VE(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(OE(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),gd(t))}function vg(t,e,n){for(const s of n)s instanceof ME?(t.rc.addReference(s.key,e),GP(t,s)):s instanceof PE?(te("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||VE(t,s.key)):de()}function GP(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(te("SyncEngine","New document in limbo: "+n),t.nc.add(s),gd(t))}function gd(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new ne(Fe.fromString(e)),s=t.cc.next();t.ic.set(s,new VP(n)),t.sc=t.sc.insert(n,s),CE(t.remoteStore,new Cs($s(nd(n.path)),s,2,Jh.ot))}}async function vo(t,e,n){const s=fe(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=cd.Vi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const l=fe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(c,h=>N.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>N.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!po(u))throw u;te("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,m)}}}(s.localStore,r))}async function YP(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await TE(n.localStore,e);n.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new ce(k.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vo(n,s.Ki)}}function QP(t,e){const n=fe(t),s=n.ic.get(e);if(s&&s.Xu)return be().add(s.key);{let i=be();const r=n.ec.get(e);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function XP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WP.bind(null,e),e.Zu.Go=MP.bind(null,e.eventManager),e.Zu.lc=PP.bind(null,e.eventManager),e}function JP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zP.bind(null,e),e}class ZP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return sP(this.persistence,new tP,e.initialUser,this.wt)}_c(e){return new ZM(ad.Ms,this.wt)}dc(e){return new uP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ex{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YP.bind(null,this.syncEngine),await NP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kP}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new pP(i));var i;return function(r,o,a,c){return new yP(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>yg(this.syncEngine,a,0),o=pg.V()?new pg:new hP,new _P(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new UP(s,i,r,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);te("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await yo(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=G_.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{te("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(te("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=fd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function sx(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await TE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ix(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rx(t);te("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>gg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>gg(e.remoteStore,r)),t.onlineComponents=e}async function rx(t){return t.offlineComponents||(te("FirestoreClient","Using default OfflineComponentProvider"),await sx(t,new ZP)),t.offlineComponents}async function UE(t){return t.onlineComponents||(te("FirestoreClient","Using default OnlineComponentProvider"),await ix(t,new ex)),t.onlineComponents}function ox(t){return UE(t).then(e=>e.syncEngine)}async function ax(t){const e=await UE(t),n=e.eventManager;return n.onListen=BP.bind(null,e.syncEngine),n.onUnlisten=HP.bind(null,e.syncEngine),n}function cx(t,e,n={}){const s=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new tx({next:h=>{r.enqueueAndForget(()=>LP(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new ce(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new ce(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xP(nd(o.path),l,{includeMetadataChanges:!0,Du:!0});return RP(i,u)}(await ax(t),t.asyncQueue,e,n,s)),s.promise}const _g=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e,n){if(!n)throw new ce(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ux(t,e,n,s){if(e===!0&&s===!0)throw new ce(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Eg(t){if(!ne.isDocumentKey(t))throw new ce(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function md(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Ma(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=md(t);throw new ce(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ux("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,e instanceof Ni?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ce(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(i.options.projectId)}(e))}get app(){if(!this._app)throw new ce(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new AL;switch(n.type){case"gapi":const s=n.client;return Pe(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new OL(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ce(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_g.get(e);n&&(te("ComponentProvider","Removing Datastore"),_g.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class yd{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yd(this.firestore,e,this._query)}}class Kr extends yd{constructor(e,n,s){super(e,n,nd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new ne(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function jE(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=G_.I()),lx("doc","path",e),t instanceof BE){const s=Fe.fromString(e,...n);return Eg(s),new Ft(t,null,new ne(s))}{if(!(t instanceof Ft||t instanceof Kr))throw new ce(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return Eg(s),new Ft(t.firestore,t instanceof Kr?t.converter:null,new ne(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new AE(this,"async_queue_retry"),this.Kc=()=>{const n=Tl();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Tl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Tl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Yn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!po(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ts("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=dd.createAndSchedule(this,e,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&de()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class vd extends BE{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new hx,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||WE(this),this._firestoreClient.terminate()}}function HE(t=fh()){return Bs(t,"firestore").getImmediate()}function KE(t){return t._firestoreClient||WE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WE(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new VL(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new nx(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(it.fromBase64String(e))}catch(n){throw new ce(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=/^__.*__$/;class fx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}function zE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class wd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.sa(e),i}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Pa(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(zE(this.Zc)&&dx.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class px{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Mc(e)}aa(e,n,s,i=!1){return new wd({Zc:e,methodName:n,ca:s,path:ot.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function gx(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new px(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mx(t,e,n,s,i,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,i);XE("Data must be an object, but it was:",o,s);const a=YE(s,o);let c,l;if(r.merge)c=new rn(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=yx(e,h,n);if(!o.contains(d))throw new ce(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_x(u,d)||u.push(d)}c=new rn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new fx(new Rt(a),c,l)}function GE(t,e){if(QE(t=Ot(t)))return XE("Unsupported field value:",e,t),YE(t,e);if(t instanceof qE)return function(n,s){if(!zE(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=GE(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return oM(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=We.fromDate(n);return{timestampValue:Ra(s.wt,i)}}if(n instanceof We){const i=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ra(s.wt,i)}}if(n instanceof Ed)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Li)return{bytesValue:vE(s.wt,n._byteString)};if(n instanceof Ft){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:id(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${md(n)}`)}(t,e)}function YE(t,e){const n={};return Y_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(t,(s,i)=>{const r=GE(i,e.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function QE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Ed||t instanceof Li||t instanceof Ft||t instanceof qE)}function XE(t,e,n){if(!QE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=md(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function yx(t,e,n){if((e=Ot(e))instanceof _d)return e._internalPath;if(typeof e=="string")return JE(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const vx=new RegExp("[~\\*/\\[\\]]");function JE(t,e,n){if(e.search(vx)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _d(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ce(k.INVALID_ARGUMENT,a+t+c)}function _x(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ex(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ew("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ex extends ZE{data(){return super.data()}}function ew(t,e){return typeof e=="string"?JE(t,e):e instanceof _d?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tw extends ZE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ew("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class bx extends tw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){const s={};return qi(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Ed(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=X_(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Vr(e));default:return null}}convertTimestamp(e){const n=ss(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Fe.fromString(e);Pe(bE(s));const i=new Ni(s.get(1),s.get(3)),r=new ne(s.popFirst(5));return i.isEqual(n)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){t=Ma(t,Ft);const e=Ma(t.firestore,vd);return cx(KE(e),t._key).then(n=>Ox(e,t,n))}class Ax extends Tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function Sx(t,e,n){t=Ma(t,Ft);const s=Ma(t.firestore,vd),i=Ix(t.converter,e,n);return Cx(s,[mx(gx(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function Cx(t,e){return function(n,s){const i=new Yn;return n.asyncQueue.enqueueAndForget(async()=>KP(await ox(n),s,i)),i.promise}(KE(t),e)}function Ox(t,e,n){const s=n.docs.get(e._key),i=new Ax(t);return new tw(t,i,e._key,s,new wx(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Wi=n})(Jr),cn(new zt("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new vd(i,new SL(n.getProvider("auth-internal")),new DL(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),xt(zp,"3.4.12",t),xt(zp,"3.4.12","esm2017")})();const ct=$i({user:null,setUser:function(t){this.user=t!==null?Object.assign(this.user===null?{}:this.user,t):null}});var kn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Nx={data(){return{store:ct}},beforeCreate(){const t=pc();oR(t,async e=>{if(e){console.log("fb user ==>",e),ct.setUser({displayName:e.displayName,photoURL:e.photoURL,email:e.email,emailVerified:e.emailVerified,uid:e.uid,isAnonymous:e.isAnonymous});const n=HE(),s=jE(n,"users",e.uid),i=await nw(s);if(i.exists()){const r=i.data();ct.setUser(r)}}else ct.setUser(null);this.$refs.loading.style.display="none"})},mounted(){console.log("ENV ==> ",this.ENV)}},Dx={id:"loading",ref:"loading"},kx=A("div",{class:"spinner-border text-dark",role:"status"},[A("span",{class:"visually-hidden"},"Loading...")],-1),Rx=[kx];function Lx(t,e,n,s,i,r){const o=Fn("router-view");return Ze(),_t(bt,null,[He(o),A("div",Dx,Rx,512)],64)}var Mx=kn(Nx,[["render",Lx]]),Px=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},xx={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Px,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",p="year",m="date",v="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},U=function(z,F,P){var $=String(z);return!$||$.length>=F?z:""+Array(F+1-$.length).join(P)+z},x={s:U,z:function(z){var F=-z.utcOffset(),P=Math.abs(F),$=Math.floor(P/60),b=P%60;return(F<=0?"+":"-")+U($,2,"0")+":"+U(b,2,"0")},m:function z(F,P){if(F.date()<P.date())return-z(P,F);var $=12*(P.year()-F.year())+(P.month()-F.month()),b=F.clone().add($,h),V=P-b<0,Y=F.clone().add($+(V?-1:1),h);return+(-($+(P-b)/(V?b-Y:Y-b))||0)},a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:h,y:p,w:u,d:l,D:m,h:c,m:a,s:o,ms:r,Q:d}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},X="en",J={};J[X]=R;var se=function(z){return z instanceof ge},Q=function z(F,P,$){var b;if(!F)return X;if(typeof F=="string"){var V=F.toLowerCase();J[V]&&(b=V),P&&(J[V]=P,b=V);var Y=F.split("-");if(!b&&Y.length>1)return z(Y[0])}else{var me=F.name;J[me]=F,b=me}return!$&&b&&(X=b),b||!$&&X},q=function(z,F){if(se(z))return z.clone();var P=typeof F=="object"?F:{};return P.date=z,P.args=arguments,new ge(P)},j=x;j.l=Q,j.i=se,j.w=function(z,F){return q(z,{locale:F.$L,utc:F.$u,x:F.$x,$offset:F.$offset})};var ge=function(){function z(P){this.$L=Q(P.locale,null,!0),this.parse(P)}var F=z.prototype;return F.parse=function(P){this.$d=function($){var b=$.date,V=$.utc;if(b===null)return new Date(NaN);if(j.u(b))return new Date;if(b instanceof Date)return new Date(b);if(typeof b=="string"&&!/Z$/i.test(b)){var Y=b.match(_);if(Y){var me=Y[2]-1||0,Te=(Y[7]||"0").substring(0,3);return V?new Date(Date.UTC(Y[1],me,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,Te)):new Date(Y[1],me,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,Te)}}return new Date(b)}(P),this.$x=P.x||{},this.init()},F.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},F.$utils=function(){return j},F.isValid=function(){return this.$d.toString()!==v},F.isSame=function(P,$){var b=q(P);return this.startOf($)<=b&&b<=this.endOf($)},F.isAfter=function(P,$){return q(P)<this.startOf($)},F.isBefore=function(P,$){return this.endOf($)<q(P)},F.$g=function(P,$,b){return j.u(P)?this[$]:this.set(b,P)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(P,$){var b=this,V=!!j.u($)||$,Y=j.p(P),me=function(K,ae){var _e=j.w(b.$u?Date.UTC(b.$y,ae,K):new Date(b.$y,ae,K),b);return V?_e:_e.endOf(l)},Te=function(K,ae){return j.w(b.toDate()[K].apply(b.toDate("s"),(V?[0,0,0,0]:[23,59,59,999]).slice(ae)),b)},ye=this.$W,Ie=this.$M,Ve=this.$D,E="set"+(this.$u?"UTC":"");switch(Y){case p:return V?me(1,0):me(31,11);case h:return V?me(1,Ie):me(0,Ie+1);case u:var H=this.$locale().weekStart||0,D=(ye<H?ye+7:ye)-H;return me(V?Ve-D:Ve+(6-D),Ie);case l:case m:return Te(E+"Hours",0);case c:return Te(E+"Minutes",1);case a:return Te(E+"Seconds",2);case o:return Te(E+"Milliseconds",3);default:return this.clone()}},F.endOf=function(P){return this.startOf(P,!1)},F.$set=function(P,$){var b,V=j.p(P),Y="set"+(this.$u?"UTC":""),me=(b={},b[l]=Y+"Date",b[m]=Y+"Date",b[h]=Y+"Month",b[p]=Y+"FullYear",b[c]=Y+"Hours",b[a]=Y+"Minutes",b[o]=Y+"Seconds",b[r]=Y+"Milliseconds",b)[V],Te=V===l?this.$D+($-this.$W):$;if(V===h||V===p){var ye=this.clone().set(m,1);ye.$d[me](Te),ye.init(),this.$d=ye.set(m,Math.min(this.$D,ye.daysInMonth())).$d}else me&&this.$d[me](Te);return this.init(),this},F.set=function(P,$){return this.clone().$set(P,$)},F.get=function(P){return this[j.p(P)]()},F.add=function(P,$){var b,V=this;P=Number(P);var Y=j.p($),me=function(Ie){var Ve=q(V);return j.w(Ve.date(Ve.date()+Math.round(Ie*P)),V)};if(Y===h)return this.set(h,this.$M+P);if(Y===p)return this.set(p,this.$y+P);if(Y===l)return me(1);if(Y===u)return me(7);var Te=(b={},b[a]=s,b[c]=i,b[o]=n,b)[Y]||1,ye=this.$d.getTime()+P*Te;return j.w(ye,this)},F.subtract=function(P,$){return this.add(-1*P,$)},F.format=function(P){var $=this,b=this.$locale();if(!this.isValid())return b.invalidDate||v;var V=P||"YYYY-MM-DDTHH:mm:ssZ",Y=j.z(this),me=this.$H,Te=this.$m,ye=this.$M,Ie=b.weekdays,Ve=b.months,E=function(ae,_e,le,re){return ae&&(ae[_e]||ae($,V))||le[_e].slice(0,re)},H=function(ae){return j.s(me%12||12,ae,"0")},D=b.meridiem||function(ae,_e,le){var re=ae<12?"AM":"PM";return le?re.toLowerCase():re},K={YY:String(this.$y).slice(-2),YYYY:this.$y,M:ye+1,MM:j.s(ye+1,2,"0"),MMM:E(b.monthsShort,ye,Ve,3),MMMM:E(Ve,ye),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:E(b.weekdaysMin,this.$W,Ie,2),ddd:E(b.weekdaysShort,this.$W,Ie,3),dddd:Ie[this.$W],H:String(me),HH:j.s(me,2,"0"),h:H(1),hh:H(2),a:D(me,Te,!0),A:D(me,Te,!1),m:String(Te),mm:j.s(Te,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:Y};return V.replace(w,function(ae,_e){return _e||K[ae]||Y.replace(":","")})},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(P,$,b){var V,Y=j.p($),me=q(P),Te=(me.utcOffset()-this.utcOffset())*s,ye=this-me,Ie=j.m(this,me);return Ie=(V={},V[p]=Ie/12,V[h]=Ie,V[d]=Ie/3,V[u]=(ye-Te)/6048e5,V[l]=(ye-Te)/864e5,V[c]=ye/i,V[a]=ye/s,V[o]=ye/n,V)[Y]||ye,b?Ie:j.a(Ie)},F.daysInMonth=function(){return this.endOf(h).$D},F.$locale=function(){return J[this.$L]},F.locale=function(P,$){if(!P)return this.$L;var b=this.clone(),V=Q(P,$,!0);return V&&(b.$L=V),b},F.clone=function(){return j.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},z}(),Ce=ge.prototype;return q.prototype=Ce,[["$ms",r],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",p],["$D",m]].forEach(function(z){Ce[z[1]]=function(F){return this.$g(F,z[0],z[1])}}),q.extend=function(z,F){return z.$i||(z(F,ge,q),z.$i=!0),q},q.locale=Q,q.isDayjs=se,q.unix=function(z){return q(1e3*z)},q.en=J[X],q.Ls=J,q.p={},q})})(xx);const $x={data(){return{store:ct,displayName:null,file:null,isOrganizer:!1}},computed:{user:()=>ct.user},watch:{user:function(){this.fetchUserData()},"user.role":function(){this.fetchUserRoleData()}},created(){this.fetchUserData(),this.fetchUserRoleData()},methods:{fetchUserData(){this.user&&(this.displayName=this.user.displayName)},fetchUserRoleData(){this.user&&(this.user.role?this.isOrganizer=this.user.role.isOrganizer:this.isOrganizer=!1)},editProfile(){const t=pc();rR(t.currentUser,{displayName:this.displayName}).then(()=>{ct.setUser({displayName:this.displayName})})}}},Fx={key:0,class:"modal fade",id:"edit-profile",tabindex:"-1","data-bs-backdrop":"static",ref:"edit-profile"},Vx={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},Ux={class:"modal-content"},Bx=A("div",{class:"modal-header"},[A("h5",{class:"modal-title"},"\uD504\uB85C\uD544 \uC218\uC815"),A("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),jx={class:"modal-body"},Hx={class:"mb-3 text-center"},Kx=["src"],Wx=A("div",{class:"mb-3"},[A("label",{for:"photo",class:"form-label"},"\uC0AC\uC9C4:"),A("input",{class:"form-control form-control",type:"file",id:"photo"})],-1),qx={class:"mb-3"},zx=A("label",{class:"form-label",for:"displayName"},"\uC774\uB984 \uB610\uB294 \uB2C9\uB124\uC784:",-1),Gx=A("div",{class:"form-text"}," \uC774\uB984(\uB2C9\uB124\uC784)\uC740 \uC624\uC9C1 \uD55C \uBC88 \uB9CC \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",-1),Yx={class:"mb-3"},Qx=A("h6",{class:"form-label"},"\uC5ED\uD560",-1),Xx={class:"form-check form-switch"},Jx=A("label",{class:"form-check-label",for:"role-organizer"},"\uC624\uAC70\uB098\uC774\uC800",-1),Zx=A("div",{class:"form-text"}," \uC5ED\uD560\uC740 30\uC77C \uB9C8\uB2E4 \uD55C \uBC88 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",-1),e$=A("div",{class:"form-text"}," \uC624\uAC70\uB098\uC774\uC800 \uC5ED\uD560\uC744 \uD65C\uC131\uD654\uD558\uBA74, \uBC00\uB871\uAC00\uB97C \uC0DD\uC131\uD558\uACE0 \uBC00\uB871\uAC00 \uC774\uBCA4\uD2B8\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",-1),t$={class:"modal-footer"},n$=A("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," \uCDE8\uC18C ",-1);function s$(t,e,n,s,i,r){return r.user?(Ze(),_t("div",Fx,[A("div",Vx,[A("div",Ux,[Bx,A("div",jx,[A("form",null,[A("div",Hx,[A("img",{class:"rounded-circle avatar",src:r.user.photoURL},null,8,Kx)]),Wx,A("div",qx,[zx,ar(A("input",{type:"text",class:"form-control form-control",id:"displayName","onUpdate:modelValue":e[0]||(e[0]=o=>i.displayName=o)},null,512),[[Wo,i.displayName]]),Gx]),A("div",Yx,[Qx,A("div",Xx,[ar(A("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"role-organizer","onUpdate:modelValue":e[1]||(e[1]=o=>i.isOrganizer=o)},null,512),[[CT,i.isOrganizer]]),Jx]),Zx,e$])])]),A("div",t$,[n$,A("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...o)=>r.editProfile&&r.editProfile(...o))}," \uC218\uC815\uD558\uAE30 ")])])])],512)):Qa("",!0)}var i$=kn($x,[["render",s$]]);const r$={},o$={class:"modal fade",id:"global-settings",tabindex:"-1",ref:"global-settings"},a$=Ya('<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">\uC124\uC815</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><form><div class="mb-3"><label for="" class="form-label">\uAD6D\uAC00:</label><input class="form-control form-control" type="text" id=""></div><div class="mb-3"><label for="" class="form-label">\uC5B8\uC5B4:</label><input class="form-control form-control" type="text" id=""></div></form></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> \uCDE8\uC18C </button><button type="button" class="btn btn-primary">\uC800\uC7A5</button></div></div></div>',1),c$=[a$];function l$(t,e){return Ze(),_t("div",o$,c$,512)}var u$=kn(r$,[["render",l$]]);const h$={props:{milonga:{type:Object,require:!0}}},d$={class:"row g-0 flex-nowrap"},f$=A("div",{class:"col-2"},[A("div",{class:"date d-flex flex-column align-items-center justify-content-center h-100"},[A("b",{style:{"font-size":"1.2rem"}},"14"),A("small",{style:{"font-size":"0.8rem",color:"var(--bs-gray-600)"}},"\uBAA9\uC694\uC77C")])],-1),p$={class:"col-auto"},g$={class:"card-body py-1 ps-2"},m$={class:"card-title"},y$={class:"badge text-bg-primary"},v$=A("div",null,[A("dl",{class:"d-flex mb-0",style:{"font-size":"0.8rem",color:"var(--bs-gray-600)"}},[A("dt",{class:"me-2",style:{"word-break":"keep-all"}},"\uC2DC\uAC04"),A("dd",{class:"mb-0"},"8 pm ~ 1 am (4 hours)")]),A("dl",{class:"d-flex mb-0",style:{"font-size":"0.8rem",color:"var(--bs-gray-600)"}},[A("dt",{class:"me-2",style:{"word-break":"keep-all"}},"\uC7A5\uC18C"),A("dd",{class:"mb-0"},"\uC624\uCD08")]),A("dl",{class:"d-flex mb-0",style:{"font-size":"0.7rem",color:"var(--bs-gray-600)"}},[A("dt",{class:"me-2",style:{"word-break":"keep-all"}},"DJ"),A("dd",{class:"mb-0"},"\uC5D0\uD53C\uD1A4")])],-1),_$={class:"col-2 ms-auto"},E$=["src"];function w$(t,e,n,s,i,r){const o=Fn("router-link");return Ze(),ju(o,{to:"/milonga/gricel/event/2022-07-18T1900",class:"card text-decoration-none text-dark border-0 bg-transparent"},{default:Vu(()=>[A("div",d$,[f$,A("div",p$,[A("div",g$,[A("h6",m$,[A("span",y$,ir(n.milonga.city),1),Hu(" "+ir(n.milonga.name),1)]),v$])]),A("div",_$,[A("img",{class:"img-fluid",src:n.milonga.poster,loading:"lazy"},null,8,E$)])])]),_:1})}var b$=kn(h$,[["render",w$]]);const T$={data(){return{store:ct,logo:null,name:null,id:null,description:null}},computed:{user:()=>ct.user}},I$={key:0,class:"modal fade",id:"new-milonga",tabindex:"-1"},A$={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},S$={class:"modal-content"},C$=A("div",{class:"modal-header"},[A("h5",{class:"modal-title"},"\uC0C8 \uBC00\uB871\uAC00"),A("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),O$={class:"modal-body"},N$={class:"mb-3 text-center"},D$=["src"],k$=A("div",{class:"mb-3"},[A("label",{for:"logo",class:"form-label"},"\uB85C\uACE0:"),A("input",{class:"form-control form-control",type:"file",id:"logo"})],-1),R$={class:"mb-3"},L$=A("label",{class:"form-label",for:"name"},"\uBC00\uB871\uAC00 \uC774\uB984:",-1),M$={class:"mb-3"},P$=A("label",{class:"form-label",for:"id"},"\uBC00\uB871\uAC00 \uC544\uC774\uB514:",-1),x$={class:"mb-3"},$$=A("label",{class:"form-label",for:"description"},"\uBC00\uB871\uAC00 \uC18C\uAC1C:",-1),F$=A("div",{class:"modal-footer"},[A("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," \uCDE8\uC18C "),A("button",{type:"button",class:"btn btn-primary"},"\uC800\uC7A5")],-1);function V$(t,e,n,s,i,r){return r.user?(Ze(),_t("div",I$,[A("div",A$,[A("div",S$,[C$,A("div",O$,[A("form",null,[A("div",N$,[A("img",{class:"rounded-circle avatar",src:i.logo},null,8,D$)]),k$,A("div",R$,[L$,ar(A("input",{type:"text",class:"form-control form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>i.name=o)},null,512),[[Wo,i.name]])]),A("div",M$,[P$,ar(A("input",{type:"text",class:"form-control form-control",id:"id","onUpdate:modelValue":e[1]||(e[1]=o=>i.id=o)},null,512),[[Wo,i.id]])]),A("div",x$,[$$,ar(A("input",{type:"text",class:"form-control form-control",id:"description","onUpdate:modelValue":e[2]||(e[2]=o=>i.description=o)},null,512),[[Wo,i.description]])])])]),F$])])])):Qa("",!0)}var U$=kn(T$,[["render",V$]]);const B$={data(){return{store:ct}},computed:{user:()=>ct.user}},j$={key:0,class:"modal fade",id:"new-milonga-event",tabindex:"-1"},H$=Ya('<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">\uC0C8 \uBC00\uB871\uAC00 \uC774\uBCA4\uD2B8</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p>Modal body text goes here.</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button><button type="button" class="btn btn-primary">Save changes</button></div></div></div>',1),K$=[H$];function W$(t,e,n,s,i,r){return r.user?(Ze(),_t("div",j$,K$)):Qa("",!0)}var q$=kn(B$,[["render",W$]]);const z$={components:{EditProfileModal:i$,GlobalSettingsModal:u$,MilongaEventCard:b$,NewMilongaModal:U$,NewMilongaEventModal:q$},data(){return{store:ct,milongaEvents:[{city:"\uD64D\uB300",name:"\uB8E8\uBBF8\uB178\uC18C",poster:"https://picsum.photos/200/300"},{city:"\uBD80\uC0B0",name:"\uB545\uAC90\uBBF8 \uC815\uBAA8",poster:"https://picsum.photos/300/300"},{city:"\uD64D\uB300",name:"\uADF8\uB9AC\uC140",poster:"https://picsum.photos/200/400"},{city:"\uD64D\uB300",name:"\uBAA9\uB728\uB77C",poster:"https://picsum.photos/200/350"},{city:"\uD64D\uB300",name:"\uBAA9\uB8E8\uC4F0",poster:"https://picsum.photos/250/300"}]}},computed:{user:()=>ct.user},methods:{logout(){const t=pc();aR(t).then(()=>{ct.setUser(null)}).catch(e=>{})}}},bd=t=>(ib("data-v-0a4436f7"),t=t(),rb(),t),G$={id:"home",role:"document",style:{"padding-top":"4rem"}},Y$={id:"toolbar",class:"d-flex align-items-center p-3 position-fixed w-100 top-0",style:{"z-index":"1000",height:"4rem"}},Q$=bd(()=>A("h1",{class:"logo m-0",style:{"font-size":"1.2rem"}},"LLGG",-1)),X$=bd(()=>A("a",{class:"settings ms-2 text-dark",href:"#global-settings",style:{"font-size":"1.2rem"},"data-bs-toggle":"modal"},[A("i",{class:"bi bi-gear"})],-1)),J$={class:"ms-auto d-flex"},Z$={key:0,class:"dropdown me-2"},eF=Ya('<button type="button" class="avatar d-block btn btn-dark p-0 rounded-circle border-0 bg-transparent text-dark" data-bs-toggle="dropdown" style="width:2rem;height:2rem;font-size:2rem;line-height:1;" data-v-0a4436f7><i class="bi bi-plus" data-v-0a4436f7></i></button><div class="dropdown-menu" data-v-0a4436f7><a class="dropdown-item" href="#new-milonga" data-bs-toggle="modal" data-v-0a4436f7>\uC0C8\uB85C\uC6B4 \uBC00\uB871\uAC00</a><a class="dropdown-item" href="#new-milonga-event" data-bs-toggle="modal" data-v-0a4436f7>\uC0C8\uB85C\uC6B4 \uBC00\uB871\uAC00 \uC774\uBCA4\uD2B8</a></div>',2),tF=[eF],nF={key:1,class:"dropdown"},sF={type:"button",class:"avatar d-block btn btn-dark p-0 rounded-circle border-0","data-bs-toggle":"dropdown",style:{width:"2rem",height:"2rem"}},iF=["src"],rF={key:1,class:"bi bi-person"},oF={class:"dropdown-menu shadow"},aF={class:"px-3 py-1"},cF={class:"username"},lF={class:"email"},uF=Ya('<hr class="dropdown-divider" data-v-0a4436f7><a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal" data-v-0a4436f7>\uD504\uB85C\uD544 \uC124\uC815</a><hr class="dropdown-divider" data-v-0a4436f7><a class="dropdown-item" href="#" data-v-0a4436f7>\uC88B\uC544\uC694\uD55C \uBC00\uB871\uAC00 \uC774\uBCA4\uD2B8 <span class="badge text-bg-primary" data-v-0a4436f7>10</span></a><a class="dropdown-item" href="#" data-v-0a4436f7>\uCC38\uC11D\uD55C \uBC00\uB871\uAC00 \uC774\uBCA4\uD2B8 <span class="badge text-bg-primary" data-v-0a4436f7>1</span></a><hr class="dropdown-divider" data-v-0a4436f7><h6 class="dropdown-header" data-v-0a4436f7>\uC624\uAC70\uB098\uC774\uC800</h6><a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal" data-v-0a4436f7>\uB0B4 \uBC00\uB871\uAC00</a><a class="dropdown-item" href="#edit-profile" data-bs-toggle="modal" data-v-0a4436f7>\uB0B4 \uBC00\uB871\uAC00 \uC774\uBCA4\uD2B8</a><hr class="dropdown-divider" data-v-0a4436f7>',10),hF=Hu("LOGIN"),dF={class:"p-3"},fF=bd(()=>A("header",{class:"d-flex pb-2 align-items-end border-bottom"},[A("h1",{class:"mb-0 fw-bold"},"\uC624\uB298"),A("time",{class:"ms-auto fw-bold",style:{"font-size":"0.9rem",color:"var(--bs-gray-600)"}},"22\uB144 7\uC6D4 15\uC77C")],-1)),pF={class:"list-unstyled mb-0"},gF={class:"border-bottom py-2"};function mF(t,e,n,s,i,r){const o=Fn("router-link"),a=Fn("MilongaEventCard"),c=Fn("EditProfileModal"),l=Fn("GlobalSettingsModal"),u=Fn("NewMilongaModal"),h=Fn("NewMilongaEventModal");return Ze(),_t(bt,null,[A("div",G$,[A("header",Y$,[Q$,X$,A("div",J$,[r.user?(Ze(),_t("div",Z$,tF)):Qa("",!0),r.user?(Ze(),_t("div",nF,[A("button",sF,[r.user.photoURL?(Ze(),_t("img",{key:0,src:r.user.photoURL,class:"rounded-circle w-100 h-100",style:{"object-fit":"cover"},loading:"lazy"},null,8,iF)):(Ze(),_t("i",rF))]),A("div",oF,[A("div",aF,[A("div",cF,ir(r.user.displayName),1),A("div",lF,ir(r.user.email),1)]),uF,A("a",{class:"dropdown-item text-danger",href:"#",onClick:e[0]||(e[0]=(...d)=>r.logout&&r.logout(...d))},"\uB85C\uADF8\uC544\uC6C3")])])):(Ze(),ju(o,{key:2,class:"btn btn-light btn-sm login ms-auto",to:"/login"},{default:Vu(()=>[hF]),_:1}))])]),A("section",dF,[fF,A("ul",pF,[(Ze(!0),_t(bt,null,Ob(i.milongaEvents,d=>(Ze(),_t("li",gF,[He(a,{milonga:d},null,8,["milonga"])]))),256))])]),A("div",null,"user => "+ir(r.user),1)]),He(c),He(l),He(u),He(h)],64)}var yF=kn(z$,[["render",mF],["__scopeId","data-v-0a4436f7"]]);const vF={data(){return{store:ct}},methods:{loginWithGoogle(){const t=new pn,e=pc();kR(e,t).then(async n=>{if(n.user){const s=HE(),i=jE(s,"users",n.user.uid);if((await nw(i)).exists())this.$router.push("/");else{const o={isOrganizer:!1,orgernizerChangeDate:null,isDJ:!1,djChangeDate:null,isDancer:!1,dancerChangeDate:null,isInstructor:!1,instructorChangeDate:null};Sx(i,{nameChangeDate:null,role:o},{merge:!0}).then(()=>{ct.setUser({nameChangeDate:null,role:o}),this.$router.push("/")}).catch(a=>{})}}}).catch(n=>{})},loginWithFacebook(){}}},_F={id:"login",role:"document"},EF={class:"p-3"},wF=A("h1",{class:"fw-bolder text-center mb-4"},"\uB85C\uADF8\uC778",-1),bF={class:"list-unstyled mb-0"},TF={class:"mb-2"},IF={class:"mb-2"};function AF(t,e,n,s,i,r){return Ze(),_t("div",_F,[A("section",EF,[wF,A("ul",bF,[A("li",TF,[A("button",{class:"btn btn-outline-dark w-100",onClick:e[0]||(e[0]=(...o)=>r.loginWithGoogle&&r.loginWithGoogle(...o))}," \uAD6C\uAE00\uB85C \uB85C\uADF8\uC778 ")]),A("li",IF,[A("button",{class:"btn btn-outline-primary w-100",onClick:e[1]||(e[1]=(...o)=>r.loginWithFacebook&&r.loginWithFacebook(...o))}," \uD398\uC774\uC2A4\uBD81\uC73C\uB85C \uB85C\uADF8\uC778 ")])])])])}var SF=kn(vF,[["render",AF]]);const CF={};function OF(t,e){return Ze(),_t("div",null,"milonga event")}var NF=kn(CF,[["render",OF]]);const DF={apiKey:"AIzaSyA8jSD2bgTOVYGrCxbLYYCZpHRZI10zh_Y",authDomain:"mi-tango-247.firebaseapp.com",projectId:"mi-tango-247",storageBucket:"mi-tango-247.appspot.com",messagingSenderId:"376880262117",appId:"1:376880262117:web:b3e0a9420c7d53eccd1d0c",measurementId:"G-5LEG2SG11N"},kF=JN(DF);Tk(kF);const RF=P0({history:QT(),routes:[{path:"/",component:yF},{path:"/milonga/:milongaId/event/:milongaEventId",component:NF},{path:"/login",component:SF}]}),sw=kT(Mx).use(RF).mount("#app");sw.config.globalProperties.ENV="production";sw.config.globalProperties.foo="bar";
