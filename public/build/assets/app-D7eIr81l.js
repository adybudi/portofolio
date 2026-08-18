function rf(n,e){return function(){return n.apply(e,arguments)}}const{toString:zh}=Object.prototype,{getPrototypeOf:er}=Object,{iterator:Vr,toStringTag:sf}=Symbol,Hs=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Nr=(n,e)=>{let t=n;const i=[];for(;t!=null&&t!==Object.prototype;){if(i.indexOf(t)!==-1)return!1;if(i.push(t),Hs(t,e))return!0;t=er(t)}return!1},Hh=(n,e)=>n!=null&&Nr(n,e)?n[e]:void 0,bl=(n=>e=>{const t=zh.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),jt=n=>(n=n.toLowerCase(),e=>bl(e)===n),ia=n=>e=>typeof e===n,{isArray:gi}=Array,xi=ia("undefined");function ar(n){return n!==null&&!xi(n)&&n.constructor!==null&&!xi(n.constructor)&&Ht(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const af=jt("ArrayBuffer");function Vh(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&af(n.buffer),e}const Gh=ia("string"),Ht=ia("function"),of=ia("number"),or=n=>n!==null&&typeof n=="object",kh=n=>n===!0||n===!1,Ps=n=>{if(!or(n))return!1;const e=er(n);return(e===null||e===Object.prototype||er(e)===null)&&!Nr(n,sf)&&!Nr(n,Vr)},Wh=n=>{if(!or(n)||ar(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Xh=jt("Date"),qh=jt("File"),Yh=n=>!!(n&&typeof n.uri<"u"),$h=n=>n&&typeof n.getParts<"u",Kh=jt("Blob"),Zh=jt("FileList"),Jh=jt("Set"),Qh=n=>or(n)&&Ht(n.pipe);function jh(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const wc=jh(),Rc=typeof wc.FormData<"u"?wc.FormData:void 0,ep=n=>{if(!n)return!1;if(Rc&&n instanceof Rc)return!0;const e=er(n);if(!e||e===Object.prototype||!Ht(n.append))return!1;const t=bl(n);return t==="formdata"||t==="object"&&Ht(n.toString)&&n.toString()==="[object FormData]"},tp=jt("URLSearchParams"),[np,ip,rp,sp]=["ReadableStream","Request","Response","Headers"].map(jt),ap=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gr(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),gi(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(ar(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,n[o],o,n)}}function lf(n,e){if(ar(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cf=n=>!xi(n)&&n!==li;function uo(...n){const{caseless:e,skipUndefined:t}=cf(this)&&this||{},i={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const o=e&&typeof a=="string"&&lf(i,a)||a,l=Hs(i,o)?i[o]:void 0;Ps(l)&&Ps(s)?i[o]=uo(l,s):Ps(s)?i[o]=uo({},s):gi(s)?i[o]=s.slice():(!t||!xi(s))&&(i[o]=s)};for(let s=0,a=n.length;s<a;s++){const o=n[s];if(!o||ar(o)||(Gr(o,r),typeof o!="object"||gi(o)))continue;const l=Object.getOwnPropertySymbols(o);for(let c=0;c<l.length;c++){const u=l[c];xp.call(o,u)&&r(o[u],u)}}return i}const op=(n,e,t,{allOwnKeys:i}={})=>(Gr(e,(r,s)=>{t&&Ht(r)?Object.defineProperty(n,s,{__proto__:null,value:rf(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),lp=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),cp=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(n.prototype,t)},up=(n,e,t,i)=>{let r,s,a;const o={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)a=r[s],(!i||i(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&er(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},fp=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},dp=n=>{if(!n)return null;if(gi(n))return n;let e=n.length;if(!of(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},hp=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&er(Uint8Array)),pp=(n,e)=>{const i=(n&&n[Vr]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},mp=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},_p=jt("HTMLFormElement"),gp=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:xp}=Object.prototype,vp=jt("RegExp"),uf=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Gr(t,(r,s)=>{let a;(a=e(r,s,n))!==!1&&(i[s]=a||r)}),Object.defineProperties(n,i)},Sp=n=>{uf(n,(e,t)=>{if(Ht(n)&&["arguments","caller","callee"].includes(t))return!1;const i=n[t];if(Ht(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Mp=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return gi(n)?i(n):i(String(n).split(e)),t},Ep=()=>{},yp=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function bp(n){return!!(n&&Ht(n.append)&&n[sf]==="FormData"&&n[Vr])}const Tp=n=>{const e=new WeakSet,t=i=>{if(or(i)){if(e.has(i))return;if(ar(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(Jh(i)){r=[];for(const s of i){const a=t(s);!xi(a)&&r.push(a)}}else r=gi(i)?[]:{},Gr(i,(s,a)=>{const o=t(s);!xi(o)&&(r[a]=o)});return e.delete(i),r}}return i};return t(n)},Ap=jt("AsyncFunction"),wp=n=>n&&(or(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),ff=((n,e)=>n?setImmediate:e?((t,i)=>(li.addEventListener("message",({source:r,data:s})=>{r===li&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),li.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Ht(li.postMessage)),Rp=typeof queueMicrotask<"u"?queueMicrotask.bind(li):typeof process<"u"&&process.nextTick||ff,df=n=>n!=null&&Ht(n[Vr]),Cp=n=>n!=null&&Nr(n,Vr)&&df(n),D={isArray:gi,isArrayBuffer:af,isBuffer:ar,isFormData:ep,isArrayBufferView:Vh,isString:Gh,isNumber:of,isBoolean:kh,isObject:or,isPlainObject:Ps,isEmptyObject:Wh,isReadableStream:np,isRequest:ip,isResponse:rp,isHeaders:sp,isUndefined:xi,isDate:Xh,isFile:qh,isReactNativeBlob:Yh,isReactNative:$h,isBlob:Kh,isRegExp:vp,isFunction:Ht,isStream:Qh,isURLSearchParams:tp,isTypedArray:hp,isFileList:Zh,forEach:Gr,merge:uo,extend:op,trim:ap,stripBOM:lp,inherits:cp,toFlatObject:up,kindOf:bl,kindOfTest:jt,endsWith:fp,toArray:dp,forEachEntry:pp,matchAll:mp,isHTMLForm:_p,hasOwnProperty:Hs,hasOwnProp:Hs,hasOwnInPrototypeChain:Nr,getSafeProp:Hh,reduceDescriptors:uf,freezeMethods:Sp,toObjectSet:Mp,toCamelCase:gp,noop:Ep,toFiniteNumber:yp,findKey:lf,global:li,isContextDefined:cf,isSpecCompliantForm:bp,toJSONObject:Tp,isAsyncFn:Ap,isThenable:wp,setImmediate:ff,asap:Rp,isIterable:df,isSafeIterable:Cp},Pp=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dp=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const o=D.hasOwnProp(e,t);!t||o&&D.hasOwnProp(Pp,t)||(t==="set-cookie"?o?e[t].push(i):e[t]=[i]:e[t]=o?e[t]+", "+i:i)}),e};function Lp(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}const Ip=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Up=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Tl(n,e){return D.isArray(n)?n.map(t=>Tl(t,e)):Lp(String(n).replace(e,""))}const Np=n=>Tl(n,Ip),Op=n=>Tl(n,Up);function hf(n){const e=Object.create(null);return D.forEach(n.toJSON(),(t,i)=>{e[i]=Op(t)}),e}const Cc=Symbol("internals");function _r(n){return n&&String(n).trim().toLowerCase()}function Ds(n){return n===!1||n==null?n:D.isArray(n)?n.map(Ds):Np(String(n))}function Fp(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Bp=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Sa(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}function zp(n){const e=n.length-1;if(e<1||n.charCodeAt(0)!==34||n.charCodeAt(e)!==34)return n;let t="";for(let i=1;i<e;i++){const r=n.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return n;t+=n[i]}return t}function Hp(n){const e=Object.create(null),t=String(n);let i=0,r=!1,s=!1;function a(o){const l=Sa(t.slice(i,o)),c=l.indexOf("=");if(c<1)return;const u=Sa(l.slice(0,c));if(!Bp.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const d=Sa(l.slice(c+1));e[h]=zp(d)}for(let o=0;o<t.length;o++){const l=t.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),i=o+1)}return a(t.length),e}const Vp=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Ma(n,e,t,i,r){if(D.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!D.isString(e)){if(D.isString(i))return e.indexOf(i)!==-1;if(D.isRegExp(i))return i.test(e)}}function Gp(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function kp(n,e){const t=D.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let Lt=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(o,l,c){const u=_r(l);if(!u)return;const h=D.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Ds(o))}const a=(o,l)=>D.forEach(o,(c,u)=>s(c,u,l));if(D.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(D.isString(e)&&(e=e.trim())&&!Vp(e))a(Dp(e),t);else if(D.isObject(e)&&D.isSafeIterable(e)){let o=Object.create(null),l,c;for(const u of e){if(!D.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],D.hasOwnProp(o,c)?(l=o[c],o[c]=D.isArray(l)?[...l,u[1]]:[l,u[1]]):o[c]=u[1]}a(o,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=_r(e),e){const i=D.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Fp(r);if(D.isFunction(t))return t.call(this,r,i);if(D.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=_r(e),e){const i=D.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Ma(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(a){if(a=_r(a),a){const o=D.findKey(i,a);o&&(!t||Ma(i,i[o],o,t))&&(delete i[o],r=!0)}}return D.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Ma(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return D.forEach(this,(r,s)=>{const a=D.findKey(i,s);if(a){t[a]=Ds(r),delete t[s];return}const o=e?Gp(s):String(s).trim();o!==s&&delete t[s],t[o]=Ds(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return D.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&D.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return D.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Hp(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Cc]=this[Cc]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=_r(a);i[o]||(kp(r,a),i[o]=!0)}return D.isArray(e)?e.forEach(s):s(e),this}};Lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Lt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});D.freezeMethods(Lt);const Vs="[REDACTED ****]";function Wp(n){if(D.hasOwnProp(n,"toJSON"))return!0;let e=Object.getPrototypeOf(n);for(;e&&e!==Object.prototype;){if(D.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Xp(n,e){const t=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||D.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof Lt&&(s=s.toJSON()),i.push(s);let a;if(D.isArray(s))a=[],s.forEach((o,l)=>{const c=r(o);D.isUndefined(c)||(a[l]=c)});else{if(!D.isPlainObject(s)&&Wp(s))return i.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const c=t.has(o.toLowerCase())?Vs:r(l);D.isUndefined(c)||(a[o]=c)}}return i.pop(),a};return r(n)}function Pc(n){try{return String(n)}catch{return""}}function qp(n){return n.errors.map(t=>{try{return t&&t.message?Pc(t.message):Pc(t)}catch{return""}}).filter(Boolean).join("; ")||n.name||"AggregateError"}let pe=class pf extends Error{static from(e,t,i,r,s,a){let o=e.message;!o&&D.isArray(e.errors)&&e.errors.length&&(o=qp(e));const l=new pf(o,t||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,t,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,t=e&&D.hasOwnProp(e,"redact")?e.redact:void 0,i=D.isArray(t)&&t.length>0?Xp(e,t):D.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};pe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";pe.ERR_BAD_OPTION="ERR_BAD_OPTION";pe.ECONNABORTED="ECONNABORTED";pe.ETIMEDOUT="ETIMEDOUT";pe.ECONNREFUSED="ECONNREFUSED";pe.ERR_NETWORK="ERR_NETWORK";pe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";pe.ERR_DEPRECATED="ERR_DEPRECATED";pe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";pe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";pe.ERR_CANCELED="ERR_CANCELED";pe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";pe.ERR_INVALID_URL="ERR_INVALID_URL";pe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Yp=null,mf=100;function fo(n){return D.isPlainObject(n)||D.isArray(n)}function _f(n){return D.endsWith(n,"[]")?n.slice(0,-2):n}function Ea(n,e,t){return n?n.concat(e).map(function(r,s){return r=_f(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function $p(n){return D.isArray(n)&&!n.some(fo)}const Kp=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function ra(n,e,t){if(!D.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=D.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,b){return!D.isUndefined(b[E])});const i=t.metaTokens,r=t.visitor||x,s=t.dots,a=t.indexes,o=t.Blob||typeof Blob<"u"&&Blob,l=t.maxDepth===void 0?mf:t.maxDepth,c=o&&D.isSpecCompliantForm(e),u=[];if(!D.isFunction(r))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(D.isDate(f))return f.toISOString();if(D.isBoolean(f))return f.toString();if(!c&&D.isBlob(f))throw new pe("Blob is not supported. Use a Buffer instead.");if(D.isArrayBuffer(f)||D.isTypedArray(f)){if(c&&typeof o=="function")return new o([f]);throw new pe("Blob is not supported. Use a Buffer instead.",pe.ERR_NOT_SUPPORT)}return f}function d(f){if(f>l)throw new pe("Object is too deeply nested ("+f+" levels). Max depth: "+l,pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(f,E){if(l===1/0)return JSON.stringify(f);const b=[];return JSON.stringify(f,function(w,y){if(!D.isObject(y))return y;for(;b.length&&b[b.length-1]!==this;)b.pop();return b.push(y),d(E+b.length-1),y})}function x(f,E,b){let v=f;if(D.isReactNative(e)&&D.isReactNativeBlob(f))return e.append(Ea(b,E,s),h(f)),!1;if(f&&!b&&typeof f=="object"){if(D.endsWith(E,"{}"))E=i?E:E.slice(0,-2),f=m(f,1);else if(D.isArray(f)&&$p(f)||(D.isFileList(f)||D.endsWith(E,"[]"))&&(v=D.toArray(f)))return E=_f(E),v.forEach(function(y,R){!(D.isUndefined(y)||y===null)&&e.append(a===!0?Ea([E],R,s):a===null?E:E+"[]",h(y))}),!1}return fo(f)?!0:(e.append(Ea(b,E,s),h(f)),!1)}const M=Object.assign(Kp,{defaultVisitor:x,convertValue:h,isVisitable:fo});function p(f,E,b=0){if(!D.isUndefined(f)){if(d(b),u.indexOf(f)!==-1)throw new Error("Circular reference detected in "+E.join("."));u.push(f),D.forEach(f,function(w,y){(!(D.isUndefined(w)||w===null)&&r.call(e,w,D.isString(y)?y.trim():y,E,M))===!0&&p(w,E?E.concat(y):[y],b+1)}),u.pop()}}if(!D.isObject(n))throw new TypeError("data must be an object");return p(n),e}function Dc(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Al(n,e){this._pairs=[],n&&ra(n,this,e)}const gf=Al.prototype;gf.append=function(e,t){this._pairs.push([e,t])};gf.toString=function(e){const t=e?i=>e.call(this,i,Dc):Dc;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Zp(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function xf(n,e,t){if(!e)return n;n=n||"";const i=D.isFunction(t)?{serialize:t}:t,r=D.getSafeProp(i,"encode")||Zp,s=D.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=D.isURLSearchParams(e)?e.toString():new Al(e,i).toString(r),a){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class Lc{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(i){i!==null&&e(i)})}}const wl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Jp=typeof URLSearchParams<"u"?URLSearchParams:Al,Qp=typeof FormData<"u"?FormData:null,jp=typeof Blob<"u"?Blob:null,em={isBrowser:!0,classes:{URLSearchParams:Jp,FormData:Qp,Blob:jp},protocols:["http","https","file","blob","url","data"]},Rl=typeof window<"u"&&typeof document<"u",ho=typeof navigator=="object"&&navigator||void 0,tm=Rl&&(!ho||["ReactNative","NativeScript","NS"].indexOf(ho.product)<0),nm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",im=Rl&&window.location.href||"http://localhost",rm=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rl,hasStandardBrowserEnv:tm,hasStandardBrowserWebWorkerEnv:nm,navigator:ho,origin:im},Symbol.toStringTag,{value:"Module"})),Tt={...rm,...em};function sm(n,e){return ra(n,new Tt.classes.URLSearchParams,{visitor:function(t,i,r,s){return Tt.isNode&&D.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Ic=mf;function vf(n){if(n>Ic)throw new pe("FormData field is too deeply nested ("+n+" levels). Max depth: "+Ic,pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function am(n){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=t.exec(n))!==null;)vf(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function om(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Sf(n){function e(t,i,r,s){vf(s);let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&D.isArray(r)?r.length:a,l?(D.hasOwnProp(r,a)?r[a]=D.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!o):((!D.hasOwnProp(r,a)||!D.isObject(r[a]))&&(r[a]=[]),e(t,i,r[a],s)&&D.isArray(r[a])&&(r[a]=om(r[a])),!o)}if(D.isFormData(n)&&D.isFunction(n.entries)){const t={};return D.forEachEntry(n,(i,r)=>{e(am(i),r,t,0)}),t}return null}const Pi=(n,e)=>n!=null&&D.hasOwnProp(n,e)?n[e]:void 0;function lm(n,e,t){if(D.isString(n))try{return(e||JSON.parse)(n),D.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const kr={transitional:wl,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=D.isObject(e);if(s&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return r?JSON.stringify(Sf(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=Pi(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return sm(e,l).toString();if((o=D.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Pi(this,"env"),u=c&&c.FormData;return ra(o?{"files[]":e}:e,u&&new u,l)}}return s||r?(t.setContentType("application/json",!1),lm(e)):e}],transformResponse:[function(e){const t=Pi(this,"transitional")||kr.transitional,i=t&&t.forcedJSONParsing,r=Pi(this,"responseType"),s=r==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(i&&!r||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,Pi(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?pe.from(l,pe.ERR_BAD_RESPONSE,this,null,Pi(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch","query"],n=>{kr.headers[n]={}});function ya(n,e){const t=this||kr,i=e||t,r=Lt.from(i.headers);let s=i.data;return D.forEach(n,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Mf(n){return!!(n&&n.__CANCEL__)}let Wr=class extends pe{constructor(e,t,i){super(e??"canceled",pe.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function Ef(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new pe("Request failed with status code "+t.status,t.status>=400&&t.status<500?pe.ERR_BAD_REQUEST:pe.ERR_BAD_RESPONSE,t.config,t.request,t))}function cm(n){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return e&&e[1]||""}function um(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];a||(a=c),t[r]=l,i[r]=c;let h=s,d=0;for(;h!==r;)d+=t[h++],h=h%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-a<e)return;const m=u&&c-u;return m?Math.round(d*1e3/m):void 0}}function fm(n,e){let t=0,i=1e3/e,r,s;const a=(c,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...c)};return[(...c)=>{const u=Date.now(),h=u-t;h>=i?a(c,u):(r=c,s||(s=setTimeout(()=>{s=null,a(r)},i-h)))},()=>r&&a(r)]}const Gs=(n,e,t=3)=>{let i=0;const r=um(50,250);return fm(s=>{if(!s||typeof s.loaded!="number")return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),c=Math.max(0,l-i),u=r(c);i=Math.max(i,l);const h={loaded:l,total:o,progress:o?l/o:void 0,bytes:c,rate:u||void 0,estimated:u&&o?(o-l)/u:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};n(h)},t)},Uc=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},Nc=(n,e=D.asap)=>(...t)=>e(()=>n(...t)),dm=Tt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Tt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Tt.origin),Tt.navigator&&/(msie|trident)/i.test(Tt.navigator.userAgent)):()=>!0,hm=Tt.hasStandardBrowserEnv?{write(n,e,t,i,r,s,a){if(typeof document>"u")return;const o=[`${n}=${encodeURIComponent(e)}`];D.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),D.isString(i)&&o.push(`path=${i}`),D.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),D.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const i=e[t].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===n)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function pm(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function mm(n,e){if(!e)return n;let t=n.length;for(;t>0&&n.charCodeAt(t-1)===47;)t--;return n.slice(0,t)+"/"+e.replace(/^\/+/,"")}const _m=/^https?:(?!\/\/)/i,gm=/[\t\n\r]/g;function xm(n){let e=0;for(;e<n.length&&n.charCodeAt(e)<=32;)e++;return n.slice(e)}function vm(n){return xm(n).replace(gm,"")}function Sm(n){return n&&n.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,i="")=>`${t}${i}${Vs}`)}function Mm(n){const e=n.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Vs}@`),t=e.indexOf("#"),r=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Vs}`);return t===-1?r:`${r}#${Sm(e.slice(t+1))}`}function Oc(n,e){if(typeof n=="string"){const t=vm(n);if(_m.test(t))throw new pe(`Invalid URL ${JSON.stringify(Mm(t))}: missing "//" after protocol`,pe.ERR_INVALID_URL,e)}}function yf(n,e,t,i){Oc(e,i);let r=!pm(e);return n&&(r||t===!1)?(Oc(n,i),mm(n,e)):e}const Fc=n=>n instanceof Lt?{...n}:n,Em=n=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(n).concat(Object.getOwnPropertySymbols(n).filter(e=>Object.getOwnPropertyDescriptor(n,e).enumerable)):Object.keys(n);function vi(n,e){n=n||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,h,d,m){return D.isPlainObject(u)&&D.isPlainObject(h)?D.merge.call({caseless:m},u,h):D.isPlainObject(h)?D.merge({},h):D.isArray(h)?h.slice():h}function r(u,h,d,m){if(D.isUndefined(h)){if(!D.isUndefined(u))return i(void 0,u,d,m)}else return i(u,h,d,m)}function s(u,h){if(!D.isUndefined(h))return i(void 0,h)}function a(u,h){if(D.isUndefined(h)){if(!D.isUndefined(u))return i(void 0,u)}else return i(void 0,h)}function o(u){const h=D.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!D.isUndefined(h))if(D.isPlainObject(h)){if(D.hasOwnProp(h,u))return h[u]}else return;const d=D.hasOwnProp(n,"transitional")?n.transitional:void 0;if(D.isPlainObject(d)&&D.hasOwnProp(d,u))return d[u]}function l(u,h,d){if(D.hasOwnProp(e,d))return i(u,h);if(D.hasOwnProp(n,d))return i(void 0,u)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:l,headers:(u,h,d)=>r(Fc(u),Fc(h),d,!0)};return D.forEach(Em({...n,...e}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const d=D.hasOwnProp(c,h)?c[h]:r,m=D.hasOwnProp(n,h)?n[h]:void 0,x=D.hasOwnProp(e,h)?e[h]:void 0,M=d(m,x,h);D.isUndefined(M)&&d!==l||(t[h]=M)}),D.hasOwnProp(e,"validateStatus")&&D.isUndefined(e.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(D.hasOwnProp(n,"validateStatus")?t.validateStatus=i(void 0,n.validateStatus):delete t.validateStatus),t}const ym=["content-type","content-length"];function bm(n,e,t){if(t!=="content-only"){n.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{ym.includes(i.toLowerCase())&&n.set(i,r)})}const Tm=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function bf(n){const e=vi({},n),t=d=>D.hasOwnProp(e,d)?e[d]:void 0,i=t("data");let r=t("withXSRFToken");const s=t("xsrfHeaderName"),a=t("xsrfCookieName");let o=t("headers");const l=t("auth"),c=t("baseURL"),u=t("allowAbsoluteUrls"),h=t("url");if(e.headers=o=Lt.from(o),e.url=xf(yf(c,h,u,e),t("params"),t("paramsSerializer")),l){const d=D.getSafeProp(l,"username")||"",m=D.getSafeProp(l,"password")||"";try{o.set("Authorization","Basic "+btoa(d+":"+(m?Tm(m):"")))}catch(x){throw pe.from(x,pe.ERR_BAD_OPTION_VALUE,n)}}if(D.isFormData(i)&&(Tt.hasStandardBrowserEnv||Tt.hasStandardBrowserWebWorkerEnv||D.isReactNative(i)?o.setContentType(void 0):D.isFunction(i.getHeaders)&&bm(o,i.getHeaders(),t("formDataHeaderPolicy"))),Tt.hasStandardBrowserEnv&&(D.isFunction(r)&&(r=r(e)),r===!0||r==null&&dm(e.url))){const m=s&&a&&hm.read(a);m&&o.set(s,m)}return e}const Am=typeof XMLHttpRequest<"u",wm=Am&&function(n){return new Promise(function(t,i){const r=bf(n);let s=r.data;const a=Lt.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,u,h,d,m,x;function M(){m&&m(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function f(){if(!p)return;const b=Lt.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:b,config:n,request:p};Ef(function(R){t(R),M()},function(R){i(R),M()},w),p=null}"onloadend"in p?p.onloadend=f:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(f)},p.onabort=function(){p&&(i(new pe("Request aborted",pe.ECONNABORTED,n,p)),M(),p=null)},p.onerror=function(v){const w=v&&v.message?v.message:"Network Error",y=new pe(w,pe.ERR_NETWORK,n,p);y.event=v||null,i(y),M(),p=null},p.ontimeout=function(){let v=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const w=r.transitional||wl;r.timeoutErrorMessage&&(v=r.timeoutErrorMessage),i(new pe(v,w.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,n,p)),M(),p=null},s===void 0&&a.setContentType(null),"setRequestHeader"in p&&D.forEach(hf(a),function(v,w){p.setRequestHeader(w,v)}),D.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),o&&o!=="json"&&(p.responseType=r.responseType),c&&([d,x]=Gs(c,!0),p.addEventListener("progress",d)),l&&p.upload&&([h,m]=Gs(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=b=>{p&&(i(!b||b.type?new Wr(null,n,p):b),p.abort(),M(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const E=cm(r.url);if(E&&!Tt.protocols.includes(E)){i(new pe("Unsupported protocol "+E+":",pe.ERR_BAD_REQUEST,n)),M();return}p.send(s||null)})},Rm=(n,e)=>{if(n=n?n.filter(Boolean):[],!e&&!n.length)return;const t=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,a();const c=l instanceof Error?l:this.reason;t.abort(c instanceof pe?c:new Wr(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new pe(`timeout of ${e}ms exceeded`,pe.ETIMEDOUT))},e);const a=()=>{n&&(s&&clearTimeout(s),s=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),n=null)};n.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=t;return o.unsubscribe=()=>D.asap(a),o},Cm=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},Pm=async function*(n,e){for await(const t of Dm(n))yield*Cm(t,e)},Dm=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},Bc=(n,e,t,i)=>{const r=Pm(n,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let h=u.byteLength;if(t){let d=s+=h;t(d)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},zc=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,Tf=(n,e,t)=>e+2<t&&zc(n.charCodeAt(e+1))&&zc(n.charCodeAt(e+2)),Hc=n=>n<=57?n-48:(n&223)-55,Lm=n=>n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===43||n===47||n===45||n===95,Im=n=>n===9||n===10||n===12||n===13||n===32,Um=n=>{const e=Math.floor(n/4),t=n%4;return e*3+(t===2?1:t===3?2:0)},Nm=n=>{const e=n.length;let t=0;return e>0&&n.charCodeAt(e-1)===61&&(t++,e>1&&n.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},Om=n=>{const e=n.length;let t=0,i=0,r=!1;for(let s=0;s<e;s++){let a=n.charCodeAt(s);if(a===37&&Tf(n,s,e)&&(a=Hc(n.charCodeAt(s+1))*16+Hc(n.charCodeAt(s+2)),s+=2),!Im(a)){if(a===61){i++;continue}if(!Lm(a)||i>0){r=!0;continue}t++}}return r||i>2||i>0&&(t+i)%4!==0||t%4===1?Nm(n):Um(t)},Fm=(n,e)=>{if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const t=n.indexOf(",");if(t<0)return 0;const i=n.slice(5,t),r=n.slice(t+1);if(/;base64/i.test(i))return e(r);let a=0;for(let o=0,l=r.length;o<l;o++){const c=r.charCodeAt(o);if(c===37&&Tf(r,o,l))a+=1,o+=2;else if(c<128)a+=1;else if(c<2048)a+=2;else if(c>=55296&&c<=56319&&o+1<l){const u=r.charCodeAt(o+1);u>=56320&&u<=57343?(a+=4,o++):a+=3}else a+=3}return a};function Bm(n){const e=typeof n=="string"?n.indexOf("#"):-1;return Fm(e===-1?n:n.slice(0,e),Om)}const Cl="1.19.0",Vc=64*1024,{isFunction:Zr}=D,zm=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Gc=n=>{if(!D.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},kc=(n,...e)=>{try{return!!n(...e)}catch{return!1}},Hm=n=>{const e=n.indexOf("://");let t=n;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},Vm=n=>{const e=D.global!==void 0&&D.global!==null?D.global:globalThis,{ReadableStream:t,TextEncoder:i}=e;n=D.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},n);const{fetch:r,Request:s,Response:a}=n,o=r?Zr(r):typeof fetch=="function",l=Zr(s),c=Zr(a);if(!o)return!1;const u=o&&Zr(t),h=o&&(typeof i=="function"?(f=>E=>f.encode(E))(new i):async f=>new Uint8Array(await new s(f).arrayBuffer())),d=l&&u&&kc(()=>{let f=!1;const E=new s(Tt.origin,{body:new t,method:"POST",get duplex(){return f=!0,"half"}}),b=E.headers.has("Content-Type");return E.body!=null&&E.body.cancel(),f&&!b}),m=c&&u&&kc(()=>D.isReadableStream(new a("").body)),x={stream:m&&(f=>f.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!x[f]&&(x[f]=(E,b)=>{let v=E&&E[f];if(v)return v.call(E);throw new pe(`Response type '${f}' is not supported`,pe.ERR_NOT_SUPPORT,b)})});const M=async f=>{if(f==null)return 0;if(D.isBlob(f))return f.size;if(D.isSpecCompliantForm(f))return(await new s(Tt.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(D.isArrayBufferView(f)||D.isArrayBuffer(f))return f.byteLength;if(D.isURLSearchParams(f)&&(f=f+""),D.isString(f))return(await h(f)).byteLength},p=async(f,E)=>{const b=D.toFiniteNumber(f.getContentLength());return b??M(E)};return async f=>{let{url:E,method:b,data:v,signal:w,cancelToken:y,timeout:R,onDownloadProgress:g,onUploadProgress:T,responseType:P,headers:C,withCredentials:F="same-origin",fetchOptions:$,maxContentLength:K,maxBodyLength:B}=bf(f);const Y=D.isNumber(K)&&K>-1,V=D.isNumber(B)&&B>-1,Q=W=>D.hasOwnProp(f,W)?f[W]:void 0;let te=r||fetch;P=P?(P+"").toLowerCase():"text";let se=Rm([w,y&&y.toAbortSignal()],R),ie=null;const xe=se&&se.unsubscribe&&(()=>{se.unsubscribe()});let Ve,je=null;const We=()=>new pe("Request body larger than maxBodyLength limit",pe.ERR_BAD_REQUEST,f,ie);try{let W;const ne=Q("auth");if(ne){const fe=D.getSafeProp(ne,"username")||"",Xe=D.getSafeProp(ne,"password")||"";W={username:fe,password:Xe}}if(Hm(E)){const fe=new URL(E,Tt.origin);if(!W&&(fe.username||fe.password)){const Xe=Gc(fe.username),et=Gc(fe.password);W={username:Xe,password:et}}(fe.username||fe.password)&&(fe.username="",fe.password="",E=fe.href)}if(W&&(C.delete("authorization"),C.set("Authorization","Basic "+btoa(zm((W.username||"")+":"+(W.password||""))))),Y&&typeof E=="string"&&E.startsWith("data:")&&Bm(E)>K)throw new pe("maxContentLength size of "+K+" exceeded",pe.ERR_BAD_RESPONSE,f,ie);if(V&&b!=="get"&&b!=="head"){const fe=await M(v);if(typeof fe=="number"&&isFinite(fe)&&(Ve=fe,fe>B))throw We()}const ee=V&&(D.isReadableStream(v)||D.isStream(v)),Pe=(fe,Xe,et)=>Bc(fe,Vc,st=>{if(V&&st>B)throw je=We();Xe&&Xe(st)},et);if(d&&b!=="get"&&b!=="head"&&(T||ee)){if(Ve=Ve??await p(C,v),Ve!==0||ee){let fe=new s(E,{method:"POST",body:v,duplex:"half"}),Xe;if(D.isFormData(v)&&(Xe=fe.headers.get("content-type"))&&C.setContentType(Xe),fe.body){const[et,st]=T&&Uc(Ve,Gs(Nc(T)))||[];v=Pe(fe.body,et,st)}}}else if(ee&&!l&&u&&b!=="get"&&b!=="head")v=Pe(v);else if(ee&&l&&!d&&b!=="get"&&b!=="head")throw new pe("Stream request bodies are not supported by the current fetch implementation",pe.ERR_NOT_SUPPORT,f,ie);D.isString(F)||(F=F?"include":"omit");const Le=l&&"credentials"in s.prototype;if(D.isFormData(v)){const fe=C.getContentType();fe&&/^multipart\/form-data/i.test(fe)&&!/boundary=/i.test(fe)&&C.delete("content-type")}C.set("User-Agent","axios/"+Cl,!1);const Re={...$,signal:se,method:b.toUpperCase(),headers:hf(C.normalize()),body:v,duplex:"half",credentials:Le?F:void 0};ie=l&&new s(E,Re);let Ke=await(l?te(ie,$):te(E,Re));const ze=Lt.from(Ke.headers);if(Y){const fe=D.toFiniteNumber(ze.getContentLength());if(fe!=null&&fe>K)throw new pe("maxContentLength size of "+K+" exceeded",pe.ERR_BAD_RESPONSE,f,ie)}const Ze=m&&(P==="stream"||P==="response");if(m&&Ke.body&&(g||Y||Ze&&xe)){const fe={};["status","statusText","headers"].forEach(at=>{fe[at]=Ke[at]});const Xe=D.toFiniteNumber(ze.getContentLength()),[et,st]=g&&Uc(Xe,Gs(Nc(g),!0))||[];let vt=0;const ut=at=>{if(Y&&(vt=at,vt>K))throw new pe("maxContentLength size of "+K+" exceeded",pe.ERR_BAD_RESPONSE,f,ie);et&&et(at)};Ke=new a(Bc(Ke.body,Vc,ut,()=>{st&&st(),xe&&xe()}),fe)}P=P||"text";let Oe=await x[D.findKey(x,P)||"text"](Ke,f);if(Y&&!m&&!Ze){let fe;if(Oe!=null&&(typeof Oe.byteLength=="number"?fe=Oe.byteLength:typeof Oe.size=="number"?fe=Oe.size:typeof Oe=="string"&&(fe=typeof i=="function"?new i().encode(Oe).byteLength:Oe.length)),typeof fe=="number"&&fe>K)throw new pe("maxContentLength size of "+K+" exceeded",pe.ERR_BAD_RESPONSE,f,ie)}return!Ze&&xe&&xe(),await new Promise((fe,Xe)=>{Ef(fe,Xe,{data:Oe,headers:Lt.from(Ke.headers),status:Ke.status,statusText:Ke.statusText,config:f,request:ie})})}catch(W){if(xe&&xe(),se&&se.aborted&&se.reason instanceof pe){const ne=se.reason;throw ne.config=f,ie&&(ne.request=ie),W!==ne&&Object.defineProperty(ne,"cause",{__proto__:null,value:W,writable:!0,enumerable:!1,configurable:!0}),ne}if(je)throw ie&&!je.request&&(je.request=ie),je;if(W instanceof pe)throw ie&&!W.request&&(W.request=ie),W;if(W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)){const ne=new pe("Network Error",pe.ERR_NETWORK,f,ie,W&&W.response);throw Object.defineProperty(ne,"cause",{__proto__:null,value:W.cause||W,writable:!0,enumerable:!1,configurable:!0}),ne}throw pe.from(W,W&&W.code,f,ie,W&&W.response)}}},Gm=new Map,Af=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let a=s.length,o=a,l,c,u=Gm;for(;o--;)l=s[o],c=u.get(l),c===void 0&&u.set(l,c=o?new Map:Vm(e)),u=c;return c};Af();const Pl={http:Yp,xhr:wm,fetch:{get:Af}};D.forEach(Pl,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:e})}});const Wc=n=>`- ${n}`,km=n=>D.isFunction(n)||n===null||n===!1;function Wm(n,e){n=D.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let a=0;a<t;a++){i=n[a];let o;if(r=i,!km(i)&&(r=Pl[(o=String(i)).toLowerCase()],r===void 0))throw new pe(`Unknown adapter '${o}'`);if(r&&(D.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(Wc).join(`
`):" "+Wc(a[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+o,pe.ERR_NOT_SUPPORT)}return r}const wf={getAdapter:Wm,adapters:Pl};function ba(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Wr(null,n)}function Ta(n){return ba(n),n.headers=Lt.from(n.headers),n.data=ya.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),wf.getAdapter(n.adapter||kr.adapter,n)(n).then(function(i){ba(n),n.response=i;try{i.data=ya.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=Lt.from(i.headers),i},function(i){if(!Mf(i)&&(ba(n),i&&i.response)){n.response=i.response;try{i.response.data=ya.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=Lt.from(i.response.headers)}return Promise.reject(i)})}const sa={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{sa[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Xc={};sa.transitional=function(e,t,i){function r(s,a){return"[Axios v"+Cl+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new pe(r(a," has been removed"+(t?" in "+t:"")),pe.ERR_DEPRECATED);return t&&!Xc[a]&&(Xc[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};sa.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Xm(n,e,t){if(typeof n!="object"||n===null)throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=n[s],l=o===void 0||a(o,s,n);if(l!==!0)throw new pe("option "+s+" must be "+l,pe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new pe("Unknown option "+s,pe.ERR_BAD_OPTION)}}const Ls={assertOptions:Xm,validators:sa},Rt=Ls.validators;let di=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Lc,response:new Lc}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const a=r.stack.indexOf(`
`);return a===-1?"":r.stack.slice(a+1)})();try{if(!i.stack)i.stack=s;else if(s){const a=s.indexOf(`
`),o=a===-1?-1:s.indexOf(`
`,a+1),l=o===-1?"":s.slice(o+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=vi(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&Ls.assertOptions(i,{silentJSONParsing:Rt.transitional(Rt.boolean),forcedJSONParsing:Rt.transitional(Rt.boolean),clarifyTimeoutError:Rt.transitional(Rt.boolean),legacyInterceptorReqResOrdering:Rt.transitional(Rt.boolean),advertiseZstdAcceptEncoding:Rt.transitional(Rt.boolean),validateStatusUndefinedResolves:Rt.transitional(Rt.boolean)},!1),r!=null&&(D.isFunction(r)?t.paramsSerializer={serialize:r}:Ls.assertOptions(r,{encode:Rt.function,serialize:Rt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ls.assertOptions(t,{baseUrl:Rt.spelling("baseURL"),withXsrfToken:Rt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&D.merge(s.common,s[t.method]);s&&D.forEach(["delete","get","head","post","put","patch","query","common"],x=>{delete s[x]}),t.headers=Lt.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(M){if(typeof M.runWhen=="function"&&M.runWhen(t)===!1)return;l=l&&M.synchronous;const p=t.transitional||wl;p&&p.legacyInterceptorReqResOrdering?o.unshift(M.fulfilled,M.rejected):o.push(M.fulfilled,M.rejected)});const c=[];this.interceptors.response.forEach(function(M){c.push(M.fulfilled,M.rejected)});let u,h=0,d;if(!l){const x=[Ta.bind(this),void 0];for(x.unshift(...o),x.push(...c),d=x.length,u=Promise.resolve(t);h<d;)u=u.then(x[h++],x[h++]);return u}d=o.length;let m=t;for(;h<d;){const x=o[h++],M=o[h++];try{m=x?x(m):m}catch(p){if(!M){u=Promise.reject(p);break}try{const f=M.call(this,p);D.isThenable(f)&&(u=Promise.resolve(f).then(()=>Ta.call(this,m)))}catch(f){u=Promise.reject(f)}break}}if(!u)try{u=Ta.call(this,m)}catch(x){u=Promise.reject(x)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=vi(this.defaults,e);const t=yf(e.baseURL,e.url,e.allowAbsoluteUrls,e);return xf(t,e.params,e.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(e){di.prototype[e]=function(t,i){return this.request(vi(i||{},{method:e,url:t,data:i&&D.hasOwnProp(i,"data")?i.data:void 0}))}});D.forEach(["post","put","patch","query"],function(e){function t(i){return function(s,a,o){return this.request(vi(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}di.prototype[e]=t(),e!=="query"&&(di.prototype[e+"Form"]=t(!0))});let qm=class Rf{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new Wr(s,a,o),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Rf(function(r){e=r}),cancel:e}}};function Ym(n){return function(t){return n.apply(null,t)}}function $m(n){return D.isObject(n)&&n.isAxiosError===!0}const po={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(po).forEach(([n,e])=>{po[e]=n});function Cf(n){const e=new di(n),t=rf(di.prototype.request,e);return D.extend(t,di.prototype,e,{allOwnKeys:!0}),D.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Cf(vi(n,r))},t}const xt=Cf(kr);xt.Axios=di;xt.CanceledError=Wr;xt.CancelToken=qm;xt.isCancel=Mf;xt.VERSION=Cl;xt.toFormData=ra;xt.AxiosError=pe;xt.Cancel=xt.CanceledError;xt.all=function(e){return Promise.all(e)};xt.spread=Ym;xt.isAxiosError=$m;xt.mergeConfig=vi;xt.AxiosHeaders=Lt;xt.formToJSON=n=>Sf(D.isHTMLForm(n)?new FormData(n):n);xt.getAdapter=wf.getAdapter;xt.HttpStatusCode=po;xt.default=xt;const{Axios:Oy,AxiosError:Fy,CanceledError:By,isCancel:zy,CancelToken:Hy,VERSION:Vy,all:Gy,Cancel:ky,isAxiosError:Wy,spread:Xy,toFormData:qy,AxiosHeaders:Yy,HttpStatusCode:$y,formToJSON:Ky,getAdapter:Zy,mergeConfig:Jy,create:Qy}=xt;window.axios=xt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var mo=!1,_o=!1,hi=[],go=-1,Dl=!1;function Km(n){Qm(n)}function Zm(){Dl=!0}function Jm(){Dl=!1,Pf()}function Qm(n){hi.includes(n)||hi.push(n),Pf()}function jm(n){let e=hi.indexOf(n);e!==-1&&e>go&&hi.splice(e,1)}function Pf(){if(!_o&&!mo){if(Dl)return;mo=!0,queueMicrotask(e_)}}function e_(){mo=!1,_o=!0;for(let n=0;n<hi.length;n++)hi[n](),go=n;hi.length=0,go=-1,_o=!1}var lr,Ai,cr,Df,xo=!0;function t_(n){xo=!1,n(),xo=!0}function n_(n){lr=n.reactive,cr=n.release,Ai=e=>n.effect(e,{scheduler:t=>{xo?Km(t):t()}}),Df=n.raw}function qc(n){Ai=n}function i_(n){let e=()=>{};return[i=>{let r=Ai(i);return n._x_effects||(n._x_effects=new Set,n._x_runEffects=()=>{n._x_effects.forEach(s=>s())}),n._x_effects.add(r),e=()=>{r!==void 0&&(n._x_effects.delete(r),cr(r))},r},()=>{e()}]}function Lf(n,e){let t=!0,i,r,s=Ai(()=>{let a=n(),o=JSON.stringify(a);if(!t&&(typeof a=="object"||a!==i)){let l=typeof i=="object"?JSON.parse(r):i;queueMicrotask(()=>{e(a,l)})}i=a,r=o,t=!1});return()=>cr(s)}async function r_(n){Zm();try{await n(),await Promise.resolve()}finally{Jm()}}var If=[],Uf=[],Nf=[];function s_(n){Nf.push(n)}function Ll(n,e){typeof e=="function"?(n._x_cleanups||(n._x_cleanups=[]),n._x_cleanups.push(e)):(e=n,Uf.push(e))}function Of(n){If.push(n)}function Ff(n,e,t){n._x_attributeCleanups||(n._x_attributeCleanups={}),n._x_attributeCleanups[e]||(n._x_attributeCleanups[e]=[]),n._x_attributeCleanups[e].push(t)}function Bf(n,e){n._x_attributeCleanups&&Object.entries(n._x_attributeCleanups).forEach(([t,i])=>{(e===void 0||e.includes(t))&&(i.forEach(r=>r()),delete n._x_attributeCleanups[t])})}function a_(n){for(n._x_effects?.forEach(jm);n._x_cleanups?.length;)n._x_cleanups.pop()()}var Il=new MutationObserver(Fl),Ul=!1;function Nl(){Il.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ul=!0}function zf(){o_(),Il.disconnect(),Ul=!1}var gr=[];function o_(){let n=Il.takeRecords();gr.push(()=>n.length>0&&Fl(n));let e=gr.length;queueMicrotask(()=>{if(gr.length===e)for(;gr.length>0;)gr.shift()()})}function gt(n){if(!Ul)return n();zf();let e=n();return Nl(),e}var Ol=!1,ks=[];function l_(){Ol=!0}function c_(){Ol=!1,Fl(ks),ks=[]}function Fl(n){if(Ol){ks=ks.concat(n);return}let e=[],t=new Set,i=new Map,r=new Map;for(let s=0;s<n.length;s++)if(!n[s].target._x_ignoreMutationObserver&&(n[s].type==="childList"&&(n[s].removedNodes.forEach(a=>{a.nodeType===1&&a._x_marker&&t.add(a)}),n[s].addedNodes.forEach(a=>{if(a.nodeType===1){if(t.has(a)){t.delete(a);return}a._x_marker||e.push(a)}})),n[s].type==="attributes")){let a=n[s].target,o=n[s].attributeName,l=n[s].oldValue,c=()=>{i.has(a)||i.set(a,[]),i.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{r.has(a)||r.set(a,[]),r.get(a).push(o)};a.hasAttribute(o)&&l===null?c():a.hasAttribute(o)?(u(),c()):u()}r.forEach((s,a)=>{Bf(a,s)}),i.forEach((s,a)=>{If.forEach(o=>o(a,s))});for(let s of t)e.some(a=>a.contains(s))||Uf.forEach(a=>a(s));for(let s of e)s.isConnected&&Nf.forEach(a=>a(s));e=null,t=null,i=null,r=null}function Hf(n){return Mi(Si(n))}function Xr(n,e,t){return n._x_dataStack=[e,...Si(t||n)],()=>{n._x_dataStack=n._x_dataStack.filter(i=>i!==e)}}function Si(n){return n._x_dataStack?n._x_dataStack:typeof ShadowRoot=="function"&&n instanceof ShadowRoot?Si(n.host):n.parentNode?Si(n.parentNode):[]}function Mi(n){return new Proxy({objects:n},u_)}function Vf(n,e){return n===null||n===Object.prototype?null:Object.prototype.hasOwnProperty.call(n,e)?n:Vf(Object.getPrototypeOf(n),e)}var u_={ownKeys({objects:n}){return Array.from(new Set(n.flatMap(e=>Object.keys(e))))},has({objects:n},e){return e==Symbol.unscopables?!1:n.some(t=>Object.prototype.hasOwnProperty.call(t,e)||Reflect.has(t,e))},get({objects:n},e,t){return e=="toJSON"?f_:Reflect.get(n.find(i=>Reflect.has(i,e))||{},e,t)},set({objects:n},e,t,i){let r;for(const a of n)if(r=Vf(a,e),r)break;r||(r=n[n.length-1]);const s=Object.getOwnPropertyDescriptor(r,e);return s?.set&&s?.get?s.set.call(i,t)||!0:Reflect.set(r,e,t)}};function f_(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function Bl(n){let e=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,t=(i,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let l=r===""?s:`${r}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?i[s]=a.initialize(n,l,s):e(a)&&a!==i&&!(a instanceof Element)&&t(a,l)})};return t(n)}function Gf(n,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(i,r,s){return n(this.initialValue,()=>d_(i,r),a=>vo(i,r,a),r,s)}};return e(t),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let r=t.initialize.bind(t);t.initialize=(s,a,o)=>{let l=i.initialize(s,a,o);return t.initialValue=l,r(s,a,o)}}else t.initialValue=i;return t}}function d_(n,e){return e.split(".").reduce((t,i)=>t[i],n)}function vo(n,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)n[e[0]]=t;else{if(e.length===0)throw error;return n[e[0]]||(n[e[0]]={}),vo(n[e[0]],e.slice(1),t)}}var kf={};function on(n,e){kf[n]=e}function Or(n,e){let t=h_(e);return Object.entries(kf).forEach(([i,r])=>{Object.defineProperty(n,`$${i}`,{get(){return r(e,t)},enumerable:!1})}),n}function h_(n){let[e,t]=Zf(n),i={interceptor:Gf,...e};return Ll(n,t),i}function p_(n,e,t,...i){try{return t(...i)}catch(r){Fr(r,n,e)}}function Fr(...n){return Wf(...n)}var Wf=__;function m_(n){Wf=n}function __(n,e,t=void 0){n=Object.assign(n??{message:"No error message given."},{el:e,expression:t}),console.warn(`Alpine Expression Error: ${n.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw n},0)}var Zi=!0;function Xf(n){let e=Zi;Zi=!1;let t=n();return Zi=e,t}function pi(n,e,t={}){let i;return Ot(n,e)(r=>i=r,t),i}function Ot(...n){return qf(...n)}var qf=()=>{};function g_(n){qf=n}var Yf;function x_(n){Yf=n}function v_(n,e){let t={};Or(t,n);let i=[t,...Si(n)],r=typeof e=="function"?S_(i,e):E_(i,e,n);return p_.bind(null,n,e,r)}function S_(n,e){return(t=()=>{},{scope:i={},params:r=[],context:s}={})=>{if(!Zi){Br(t,e,Mi([i,...n]),r);return}let a=e.apply(Mi([i,...n]),r);Br(t,a)}}var Aa={};function M_(n,e){if(Aa[n])return Aa[n];let t=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(n.trim())||/^(let|const)\s/.test(n.trim())?`(async()=>{ ${n} })()`:n,s=(()=>{try{let a=new t(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${n}`}),a}catch(a){return Fr(a,e,n),Promise.resolve()}})();return Aa[n]=s,s}function E_(n,e,t){let i=M_(e,t);return(r=()=>{},{scope:s={},params:a=[],context:o}={})=>{i.result=void 0,i.finished=!1;let l=Mi([s,...n]);if(typeof i=="function"){let c=i.call(o,i,l).catch(u=>Fr(u,t,e));i.finished?(Br(r,i.result,l,a,t),i.result=void 0):c.then(u=>{Br(r,u,l,a,t)}).catch(u=>Fr(u,t,e)).finally(()=>i.result=void 0)}}}function Br(n,e,t,i,r){if(Zi&&typeof e=="function"){let s=e.apply(t,i);s instanceof Promise?s.then(a=>Br(n,a,t,i)).catch(a=>Fr(a,r,e)):n(s)}else typeof e=="object"&&e instanceof Promise?e.then(s=>n(s)):n(e)}function y_(...n){return Yf(...n)}function b_(n,e,t={}){let i={};Or(i,n);let r=[i,...Si(n)],s=Mi([t.scope??{},...r]),a=t.params??[];if(e.includes("await")){let o=Object.getPrototypeOf(async function(){}).constructor,l=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e;return new o(["scope"],`with (scope) { let __result = ${l}; return __result }`).call(t.context,s)}else{let o=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(()=>{ ${e} })()`:e,c=new Function(["scope"],`with (scope) { let __result = ${o}; return __result }`).call(t.context,s);return typeof c=="function"&&Zi?c.apply(s,a):c}}var zl="x-";function ur(n=""){return zl+n}function T_(n){zl=n}var Ws={};function Mt(n,e){return Ws[n]=e,{before(t){if(!Ws[t]){console.warn(String.raw`Cannot find directive \`${t}\`. \`${n}\` will use the default order of execution`);return}const i=ci.indexOf(t);ci.splice(i>=0?i:ci.indexOf("DEFAULT"),0,n)}}}function A_(n){return Object.keys(Ws).includes(n)}function Hl(n,e,t){if(e=Array.from(e),n._x_virtualDirectives){let s=Object.entries(n._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),a=$f(s);s=s.map(o=>a.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),e=e.concat(s)}let i={};return e.map(jf((s,a)=>i[s]=a)).filter(td).map(C_(i,t)).sort(P_).map(s=>R_(n,s))}function $f(n){return Array.from(n).map(jf()).filter(e=>!td(e))}var So=!1,Cr=new Map,Kf=Symbol();function w_(n){So=!0;let e=Symbol();Kf=e,Cr.set(e,[]);let t=()=>{for(;Cr.get(e).length;)Cr.get(e).shift()();Cr.delete(e)},i=()=>{So=!1,t()};n(t),i()}function Zf(n){let e=[],t=o=>e.push(o),[i,r]=i_(n);return e.push(r),[{Alpine:dr,effect:i,cleanup:t,evaluateLater:Ot.bind(Ot,n),evaluate:pi.bind(pi,n)},()=>e.forEach(o=>o())]}function R_(n,e){let t=()=>{},i=Ws[e.type]||t,[r,s]=Zf(n);Ff(n,e.original,s);let a=()=>{n._x_ignore||n._x_ignoreSelf||(i.inline&&i.inline(n,e,r),i=i.bind(i,n,e,r),So?Cr.get(Kf).push(i):i())};return a.runCleanups=s,a}var Jf=(n,e)=>({name:t,value:i})=>(t.startsWith(n)&&(t=t.replace(n,e)),{name:t,value:i}),Qf=n=>n;function jf(n=()=>{}){return({name:e,value:t})=>{let{name:i,value:r}=ed.reduce((s,a)=>a(s),{name:e,value:t});return i!==e&&n(i,e),{name:i,value:r}}}var ed=[];function Vl(n){ed.push(n)}function td({name:n}){return nd().test(n)}var nd=()=>new RegExp(`^${zl}([^:^.]+)\\b`);function C_(n,e){return({name:t,value:i})=>{t===i&&(i="");let r=t.match(nd()),s=t.match(/:([a-zA-Z0-9\-_:]+)/),a=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=e||n[t]||t;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:i,original:o}}}var Mo="DEFAULT",ci=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",Mo,"teleport"];function P_(n,e){let t=ci.indexOf(n.type)===-1?Mo:n.type,i=ci.indexOf(e.type)===-1?Mo:e.type;return ci.indexOf(t)-ci.indexOf(i)}function Ir(n,e,t={},i={}){return n.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0,...i}))}function Ei(n,e){if(typeof ShadowRoot=="function"&&n instanceof ShadowRoot){Array.from(n.children).forEach(r=>Ei(r,e));return}let t=!1;if(e(n,()=>t=!0),t)return;let i=n.firstElementChild;for(;i;)Ei(i,e),i=i.nextElementSibling}function Sn(n,...e){console.warn(`Alpine Warning: ${n}`,...e)}var Yc=!1;function D_(){Yc&&Sn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Yc=!0,document.body||Sn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Ir(document,"alpine:init"),Ir(document,"alpine:initializing"),Nl(),s_(e=>In(e,Ei)),Ll(e=>fr(e)),Of((e,t)=>{Hl(e,t).forEach(i=>i())});let n=e=>!aa(e.parentElement,!0);Array.from(document.querySelectorAll(sd().join(","))).filter(n).forEach(e=>{In(e)}),Ir(document,"alpine:initialized"),setTimeout(()=>{N_()})}var Gl=[],id=[];function rd(){return Gl.map(n=>n())}function sd(){return Gl.concat(id).map(n=>n())}function ad(n){Gl.push(n)}function od(n){id.push(n)}function aa(n,e=!1){return Pn(n,t=>{if((e?sd():rd()).some(r=>t.matches(r)))return!0})}function Pn(n,e){if(n){if(e(n))return n;if(n._x_teleportBack)return Pn(n._x_teleportBack,e);if(n.parentNode instanceof ShadowRoot)return Pn(n.parentNode.host,e);if(n.parentElement)return Pn(n.parentElement,e)}}function L_(n){return rd().some(e=>n.matches(e))}var ld=[];function I_(n){ld.push(n)}var U_=1;function In(n,e=Ei,t=()=>{}){Pn(n,i=>i._x_ignore)||w_(()=>{e(n,(i,r)=>{i._x_marker||(t(i,r),ld.forEach(s=>s(i,r)),Hl(i,i.attributes).forEach(s=>s()),i._x_ignore||(i._x_marker=U_++),i._x_ignore&&r())})})}function fr(n,e=Ei){e(n,t=>{a_(t),Bf(t),delete t._x_marker})}function N_(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,t,i])=>{A_(t)||i.some(r=>{if(document.querySelector(r))return Sn(`found "${r}", but missing ${e} plugin`),!0})})}var Eo=[],kl=!1;function Wl(n=()=>{}){return queueMicrotask(()=>{kl||setTimeout(()=>{yo()})}),new Promise(e=>{Eo.push(()=>{n(),e()})})}function yo(){for(kl=!1;Eo.length;)Eo.shift()()}function O_(){kl=!0}function Xl(n,e){return Array.isArray(e)?$c(n,e.join(" ")):typeof e=="object"&&e!==null?F_(n,e):typeof e=="function"?Xl(n,e()):$c(n,e)}function bo(n){return n.split(/\s/).filter(Boolean)}function $c(n,e){let t=r=>bo(r).filter(s=>!n.classList.contains(s)).filter(Boolean),i=r=>(n.classList.add(...r),()=>{n.classList.remove(...r)});return e=e===!0?e="":e||"",i(t(e))}function F_(n,e){let t=Object.entries(e).flatMap(([a,o])=>o?bo(a):!1).filter(Boolean),i=Object.entries(e).flatMap(([a,o])=>o?!1:bo(a)).filter(Boolean),r=[],s=[];return i.forEach(a=>{n.classList.contains(a)&&(n.classList.remove(a),s.push(a))}),t.forEach(a=>{n.classList.contains(a)||(n.classList.add(a),r.push(a))}),()=>{s.forEach(a=>n.classList.add(a)),r.forEach(a=>n.classList.remove(a))}}function oa(n,e){return typeof e=="object"&&e!==null?B_(n,e):z_(n,e)}function B_(n,e){let t={};return Object.entries(e).forEach(([i,r])=>{t[i]=n.style[i],i.startsWith("--")||(i=H_(i)),n.style.setProperty(i,r)}),setTimeout(()=>{n.style.length===0&&n.removeAttribute("style")}),()=>{oa(n,t)}}function z_(n,e){let t=n.getAttribute("style",e);return n.setAttribute("style",e),()=>{n.setAttribute("style",t||"")}}function H_(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function To(n,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,n.apply(this,arguments))}}Mt("transition",(n,{value:e,modifiers:t,expression:i},{evaluate:r})=>{typeof i=="function"&&(i=r(i)),i!==!1&&(!i||typeof i=="boolean"?G_(n,t,e):V_(n,i,e))});function V_(n,e,t){cd(n,Xl,""),{enter:r=>{n._x_transition.enter.during=r},"enter-start":r=>{n._x_transition.enter.start=r},"enter-end":r=>{n._x_transition.enter.end=r},leave:r=>{n._x_transition.leave.during=r},"leave-start":r=>{n._x_transition.leave.start=r},"leave-end":r=>{n._x_transition.leave.end=r}}[t](e)}function G_(n,e,t){cd(n,oa);let i=!e.includes("in")&&!e.includes("out")&&!t,r=i||e.includes("in")||["enter"].includes(t),s=i||e.includes("out")||["leave"].includes(t);e.includes("in")&&!i&&(e=e.filter((f,E)=>E<e.indexOf("out"))),e.includes("out")&&!i&&(e=e.filter((f,E)=>E>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),o=a||e.includes("opacity"),l=a||e.includes("scale"),c=o?0:1,u=l?xr(e,"scale",95)/100:1,h=xr(e,"delay",0)/1e3,d=xr(e,"origin","center"),m="opacity, transform",x=xr(e,"duration",150)/1e3,M=xr(e,"duration",75)/1e3,p="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(n._x_transition.enter.during={transformOrigin:d,transitionDelay:`${h}s`,transitionProperty:m,transitionDuration:`${x}s`,transitionTimingFunction:p},n._x_transition.enter.start={opacity:c,transform:`scale(${u})`},n._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(n._x_transition.leave.during={transformOrigin:d,transitionDelay:`${h}s`,transitionProperty:m,transitionDuration:`${M}s`,transitionTimingFunction:p},n._x_transition.leave.start={opacity:1,transform:"scale(1)"},n._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function cd(n,e,t={}){n._x_transition||(n._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(i=()=>{},r=()=>{}){Ao(n,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,r)},out(i=()=>{},r=()=>{}){Ao(n,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(n,e,t,i){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>r(t);if(e){n._x_transition&&(n._x_transition.enter||n._x_transition.leave)?n._x_transition.enter&&(Object.entries(n._x_transition.enter.during).length||Object.entries(n._x_transition.enter.start).length||Object.entries(n._x_transition.enter.end).length)?n._x_transition.in(t):s():n._x_transition?n._x_transition.in(t):s();return}n._x_hidePromise=n._x_transition?new Promise((a,o)=>{n._x_transition.out(()=>{},()=>a(i)),n._x_transitioning&&n._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let a=ud(n);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(n)):r(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([u])=>u?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(n).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function ud(n){let e=n.parentNode;if(e)return e._x_hidePromise?e:ud(e)}function Ao(n,e,{during:t,start:i,end:r}={},s=()=>{},a=()=>{}){if(n._x_transitioning&&n._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(i).length===0&&Object.keys(r).length===0){s(),a();return}let o,l,c;k_(n,{start(){o=e(n,i)},during(){l=e(n,t)},before:s,end(){o(),c=e(n,r)},after:a,cleanup(){l(),c()}})}function k_(n,e){let t,i,r,s=To(()=>{gt(()=>{t=!0,i||e.before(),r||(e.end(),yo()),e.after(),n.isConnected&&e.cleanup(),delete n._x_transitioning})});n._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:To(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},gt(()=>{e.start(),e.during()}),O_(),requestAnimationFrame(()=>{if(t)return;let a=Number(getComputedStyle(n).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(n).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(n).animationDuration.replace("s",""))*1e3),gt(()=>{e.before()}),i=!0,requestAnimationFrame(()=>{t||(gt(()=>{e.end()}),yo(),setTimeout(n._x_transitioning.finish,a+o),r=!0)})})}function xr(n,e,t){if(n.indexOf(e)===-1)return t;const i=n[n.indexOf(e)+1];if(!i||e==="scale"&&isNaN(i))return t;if(e==="duration"||e==="delay"){let r=i.match(/([0-9]+)ms/);if(r)return r[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(n[n.indexOf(e)+2])?[i,n[n.indexOf(e)+2]].join(" "):i}var Kn=!1;function Qn(n,e=()=>{}){return(...t)=>Kn?e(...t):n(...t)}function W_(n){return(...e)=>Kn&&n(...e)}var fd=[];function la(n){fd.push(n)}function X_(n,e){fd.forEach(t=>t(n,e)),Kn=!0,dd(()=>{In(e,(t,i)=>{i(t,()=>{})})}),Kn=!1}var wo=!1;function q_(n,e){e._x_dataStack||(e._x_dataStack=n._x_dataStack),Kn=!0,wo=!0,dd(()=>{Y_(e)}),Kn=!1,wo=!1}function Y_(n){let e=!1;In(n,(i,r)=>{Ei(i,(s,a)=>{if(e&&L_(s))return a();e=!0,r(s,a)})})}function dd(n){let e=Ai;qc((t,i)=>{let r=e(t);return cr(r),()=>{}}),n(),qc(e)}function hd(n,e,t,i=[]){switch(n._x_bindings||(n._x_bindings=lr({})),n._x_bindings[e]=t,e=i.includes("camel")?tg(e):e,e){case"value":$_(n,t);break;case"style":Z_(n,t);break;case"class":K_(n,t);break;case"selected":case"checked":J_(n,e,t);break;default:pd(n,e,t);break}}function $_(n,e){if(ql(n))n.attributes.value===void 0&&(n.value=e);else if(Xs(n))Number.isInteger(e)?n.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?n.value=String(e):Array.isArray(e)?n.checked=e.some(t=>ng(t,n.value)):n.checked=!!e;else if(n.tagName==="SELECT")eg(n,e);else{if(n.value===e)return;n.value=e===void 0?"":e}}function K_(n,e){n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedClasses=Xl(n,e)}function Z_(n,e){n._x_undoAddedStyles&&n._x_undoAddedStyles(),n._x_undoAddedStyles=oa(n,e)}function J_(n,e,t){pd(n,e,t),j_(n,e,t)}function pd(n,e,t){[null,void 0,!1].includes(t)&&rg(e)?n.removeAttribute(e):(md(e)&&(t=e),Q_(n,e,t))}function Q_(n,e,t){n.getAttribute(e)!=t&&n.setAttribute(e,t)}function j_(n,e,t){n[e]!==t&&(n[e]=t)}function eg(n,e){const t=[].concat(e).map(i=>i+"");Array.from(n.options).forEach(i=>{i.selected=t.includes(i.value)})}function tg(n){return n.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function ng(n,e){return n==e}function Is(n){return[1,"1","true","on","yes",!0].includes(n)?!0:[0,"0","false","off","no",!1].includes(n)?!1:n?!!n:null}var ig=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function md(n){return ig.has(n)}function rg(n){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(n)}function sg(n,e,t){return n._x_bindings&&n._x_bindings[e]!==void 0?n._x_bindings[e]:_d(n,e,t)}function ag(n,e,t,i=!0){if(n._x_bindings&&n._x_bindings[e]!==void 0)return n._x_bindings[e];if(n._x_inlineBindings&&n._x_inlineBindings[e]!==void 0){let r=n._x_inlineBindings[e];return r.extract=i,Xf(()=>pi(n,r.expression))}return _d(n,e,t)}function _d(n,e,t){let i=n.getAttribute(e);return i===null?typeof t=="function"?t():t:i===""?!0:md(e)?!![e,"true"].includes(i):i}function Xs(n){return n.type==="checkbox"||n.localName==="ui-checkbox"||n.localName==="ui-switch"}function ql(n){return n.type==="radio"||n.localName==="ui-radio"}function gd(n,e){let t;return function(){const i=this,r=arguments,s=function(){t=null,n.apply(i,r)};clearTimeout(t),t=setTimeout(s,e)}}function xd(n,e){let t;return function(){let i=this,r=arguments;t||(n.apply(i,r),t=!0,setTimeout(()=>t=!1,e))}}function vd({get:n,set:e},{get:t,set:i}){let r=!0,s,a=Ai(()=>{let o=n(),l=t();if(r)i(wa(o)),r=!1;else{let c=JSON.stringify(o),u=JSON.stringify(l);c!==s?i(wa(o)):c!==u&&e(wa(l))}s=JSON.stringify(n()),JSON.stringify(t())});return()=>{cr(a)}}function wa(n){return typeof n=="object"?JSON.parse(JSON.stringify(n)):n}function og(n){(Array.isArray(n)?n:[n]).forEach(t=>t(dr))}var ri={},Kc=!1;function lg(n,e){if(Kc||(ri=lr(ri),Kc=!0),e===void 0)return ri[n];ri[n]=e,Bl(ri[n]),typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&ri[n].init()}function cg(){return ri}var Sd={};function ug(n,e){let t=typeof e!="function"?()=>e:e;return n instanceof Element?Md(n,t()):(Sd[n]=t,()=>{})}function fg(n){return Object.entries(Sd).forEach(([e,t])=>{Object.defineProperty(n,e,{get(){return(...i)=>t(...i)}})}),n}function Md(n,e,t){let i=[];for(;i.length;)i.pop()();let r=Object.entries(e).map(([a,o])=>({name:a,value:o})),s=$f(r);return r=r.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),Hl(n,r,t).map(a=>{i.push(a.runCleanups),a()}),()=>{for(;i.length;)i.pop()()}}var Ed={};function dg(n,e){Ed[n]=e}function hg(n,e){return Object.entries(Ed).forEach(([t,i])=>{Object.defineProperty(n,t,{get(){return(...r)=>i.bind(e)(...r)},enumerable:!1})}),n}var pg={get reactive(){return lr},get release(){return cr},get effect(){return Ai},get raw(){return Df},get transaction(){return r_},version:"3.15.12",flushAndStopDeferringMutations:c_,dontAutoEvaluateFunctions:Xf,disableEffectScheduling:t_,startObservingMutations:Nl,stopObservingMutations:zf,setReactivityEngine:n_,onAttributeRemoved:Ff,onAttributesAdded:Of,closestDataStack:Si,skipDuringClone:Qn,onlyDuringClone:W_,addRootSelector:ad,addInitSelector:od,setErrorHandler:m_,interceptClone:la,addScopeToNode:Xr,deferMutations:l_,mapAttributes:Vl,evaluateLater:Ot,interceptInit:I_,initInterceptors:Bl,injectMagics:Or,setEvaluator:g_,setRawEvaluator:x_,mergeProxies:Mi,extractProp:ag,findClosest:Pn,onElRemoved:Ll,closestRoot:aa,destroyTree:fr,interceptor:Gf,transition:Ao,setStyles:oa,mutateDom:gt,directive:Mt,entangle:vd,throttle:xd,debounce:gd,evaluate:pi,evaluateRaw:y_,initTree:In,nextTick:Wl,prefixed:ur,prefix:T_,plugin:og,magic:on,store:lg,start:D_,clone:q_,cloneNode:X_,bound:sg,$data:Hf,watch:Lf,walk:Ei,data:dg,bind:ug},dr=pg;function mg(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return r=>!!t[r]}var _g=Object.freeze({}),gg=Object.prototype.hasOwnProperty,ca=(n,e)=>gg.call(n,e),mi=Array.isArray,Ur=n=>yd(n)==="[object Map]",xg=n=>typeof n=="string",Yl=n=>typeof n=="symbol",ua=n=>n!==null&&typeof n=="object",vg=Object.prototype.toString,yd=n=>vg.call(n),bd=n=>yd(n).slice(8,-1),$l=n=>xg(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sg=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Mg=Sg(n=>n.charAt(0).toUpperCase()+n.slice(1)),Td=(n,e)=>n!==e&&(n===n||e===e),Ro=new WeakMap,vr=[],hn,_i=Symbol("iterate"),Co=Symbol("Map key iterate");function Eg(n){return n&&n._isEffect===!0}function yg(n,e=_g){Eg(n)&&(n=n.raw);const t=Ag(n,e);return e.lazy||t(),t}function bg(n){n.active&&(Ad(n),n.options.onStop&&n.options.onStop(),n.active=!1)}var Tg=0;function Ag(n,e){const t=function(){if(!t.active)return n();if(!vr.includes(t)){Ad(t);try{return Rg(),vr.push(t),hn=t,n()}finally{vr.pop(),wd(),hn=vr[vr.length-1]}}};return t.id=Tg++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=n,t.deps=[],t.options=e,t}function Ad(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}var tr=!0,Kl=[];function wg(){Kl.push(tr),tr=!1}function Rg(){Kl.push(tr),tr=!0}function wd(){const n=Kl.pop();tr=n===void 0?!0:n}function sn(n,e,t){if(!tr||hn===void 0)return;let i=Ro.get(n);i||Ro.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=new Set),r.has(hn)||(r.add(hn),hn.deps.push(r),hn.options.onTrack&&hn.options.onTrack({effect:hn,target:n,type:e,key:t}))}function Zn(n,e,t,i,r,s){const a=Ro.get(n);if(!a)return;const o=new Set,l=u=>{u&&u.forEach(h=>{(h!==hn||h.allowRecurse)&&o.add(h)})};if(e==="clear")a.forEach(l);else if(t==="length"&&mi(n))a.forEach((u,h)=>{(h==="length"||h>=i)&&l(u)});else switch(t!==void 0&&l(a.get(t)),e){case"add":mi(n)?$l(t)&&l(a.get("length")):(l(a.get(_i)),Ur(n)&&l(a.get(Co)));break;case"delete":mi(n)||(l(a.get(_i)),Ur(n)&&l(a.get(Co)));break;case"set":Ur(n)&&l(a.get(_i));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:n,key:t,type:e,newValue:i,oldValue:r,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(c)}var Cg=mg("__proto__,__v_isRef,__isVue"),Rd=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(Yl)),Pg=Cd(),Dg=Cd(!0),Zc=Lg();function Lg(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=ct(this);for(let s=0,a=this.length;s<a;s++)sn(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(ct)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){wg();const i=ct(this)[e].apply(this,t);return wd(),i}}),n}function Cd(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_raw"&&s===(n?e?qg:Id:e?Xg:Ld).get(i))return i;const a=mi(i);if(!n&&a&&ca(Zc,r))return Reflect.get(Zc,r,s);const o=Reflect.get(i,r,s);return(Yl(r)?Rd.has(r):Cg(r))||(n||sn(i,"get",r),e)?o:Po(o)?!a||!$l(r)?o.value:o:ua(o)?n?Ud(o):jl(o):o}}var Ig=Ug();function Ug(n=!1){return function(t,i,r,s){let a=t[i];if(!n&&(r=ct(r),a=ct(a),!mi(t)&&Po(a)&&!Po(r)))return a.value=r,!0;const o=mi(t)&&$l(i)?Number(i)<t.length:ca(t,i),l=Reflect.set(t,i,r,s);return t===ct(s)&&(o?Td(r,a)&&Zn(t,"set",i,r,a):Zn(t,"add",i,r)),l}}function Ng(n,e){const t=ca(n,e),i=n[e],r=Reflect.deleteProperty(n,e);return r&&t&&Zn(n,"delete",e,void 0,i),r}function Og(n,e){const t=Reflect.has(n,e);return(!Yl(e)||!Rd.has(e))&&sn(n,"has",e),t}function Fg(n){return sn(n,"iterate",mi(n)?"length":_i),Reflect.ownKeys(n)}var Bg={get:Pg,set:Ig,deleteProperty:Ng,has:Og,ownKeys:Fg},zg={get:Dg,set(n,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,n),!0},deleteProperty(n,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,n),!0}},Zl=n=>ua(n)?jl(n):n,Jl=n=>ua(n)?Ud(n):n,Ql=n=>n,fa=n=>Reflect.getPrototypeOf(n);function Jr(n,e,t=!1,i=!1){n=n.__v_raw;const r=ct(n),s=ct(e);e!==s&&!t&&sn(r,"get",e),!t&&sn(r,"get",s);const{has:a}=fa(r),o=i?Ql:t?Jl:Zl;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Qr(n,e=!1){const t=this.__v_raw,i=ct(t),r=ct(n);return n!==r&&!e&&sn(i,"has",n),!e&&sn(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function jr(n,e=!1){return n=n.__v_raw,!e&&sn(ct(n),"iterate",_i),Reflect.get(n,"size",n)}function Jc(n){n=ct(n);const e=ct(this);return fa(e).has.call(e,n)||(e.add(n),Zn(e,"add",n,n)),this}function Qc(n,e){e=ct(e);const t=ct(this),{has:i,get:r}=fa(t);let s=i.call(t,n);s?Dd(t,i,n):(n=ct(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Td(e,a)&&Zn(t,"set",n,e,a):Zn(t,"add",n,e),this}function jc(n){const e=ct(this),{has:t,get:i}=fa(e);let r=t.call(e,n);r?Dd(e,t,n):(n=ct(n),r=t.call(e,n));const s=i?i.call(e,n):void 0,a=e.delete(n);return r&&Zn(e,"delete",n,void 0,s),a}function eu(){const n=ct(this),e=n.size!==0,t=Ur(n)?new Map(n):new Set(n),i=n.clear();return e&&Zn(n,"clear",void 0,void 0,t),i}function es(n,e){return function(i,r){const s=this,a=s.__v_raw,o=ct(a),l=e?Ql:n?Jl:Zl;return!n&&sn(o,"iterate",_i),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ts(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),a=Ur(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ql:e?Jl:Zl;return!e&&sn(s,"iterate",l?Co:_i),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zn(n){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${Mg(n)} operation ${t}failed: target is readonly.`,ct(this))}return n==="delete"?!1:this}}function Hg(){const n={get(s){return Jr(this,s)},get size(){return jr(this)},has:Qr,add:Jc,set:Qc,delete:jc,clear:eu,forEach:es(!1,!1)},e={get(s){return Jr(this,s,!1,!0)},get size(){return jr(this)},has:Qr,add:Jc,set:Qc,delete:jc,clear:eu,forEach:es(!1,!0)},t={get(s){return Jr(this,s,!0)},get size(){return jr(this,!0)},has(s){return Qr.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:es(!0,!1)},i={get(s){return Jr(this,s,!0,!0)},get size(){return jr(this,!0)},has(s){return Qr.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ts(s,!1,!1),t[s]=ts(s,!0,!1),e[s]=ts(s,!1,!0),i[s]=ts(s,!0,!0)}),[n,t,e,i]}var[Vg,Gg]=Hg();function Pd(n,e){const t=n?Gg:Vg;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ca(t,r)&&r in i?t:i,r,s)}var kg={get:Pd(!1)},Wg={get:Pd(!0)};function Dd(n,e,t){const i=ct(t);if(i!==t&&e.call(n,i)){const r=bd(n);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Ld=new WeakMap,Xg=new WeakMap,Id=new WeakMap,qg=new WeakMap;function Yg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $g(n){return n.__v_skip||!Object.isExtensible(n)?0:Yg(bd(n))}function jl(n){return n&&n.__v_isReadonly?n:Nd(n,!1,Bg,kg,Ld)}function Ud(n){return Nd(n,!0,zg,Wg,Id)}function Nd(n,e,t,i,r){if(!ua(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=$g(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function ct(n){return n&&ct(n.__v_raw)||n}function Po(n){return!!(n&&n.__v_isRef===!0)}on("nextTick",()=>Wl);on("dispatch",n=>Ir.bind(Ir,n));on("watch",(n,{evaluateLater:e,cleanup:t})=>(i,r)=>{let s=e(i),o=Lf(()=>{let l;return s(c=>l=c),l},r);t(o)});on("store",cg);on("data",n=>Hf(n));on("root",n=>aa(n));on("refs",n=>(n._x_refs_proxy||(n._x_refs_proxy=Mi(Kg(n))),n._x_refs_proxy));function Kg(n){let e=[];return Pn(n,t=>{t._x_refs&&e.push(t._x_refs)}),e}var Ra={};function Od(n){return Ra[n]||(Ra[n]=0),++Ra[n]}function Zg(n,e){return Pn(n,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function Jg(n,e){n._x_ids||(n._x_ids={}),n._x_ids[e]||(n._x_ids[e]=Od(e))}on("id",(n,{cleanup:e})=>(t,i=null)=>{let r=`${t}${i?`-${i}`:""}`;return Qg(n,r,e,()=>{let s=Zg(n,t),a=s?s._x_ids[t]:Od(t);return i?`${t}-${a}-${i}`:`${t}-${a}`})});la((n,e)=>{n._x_id&&(e._x_id=n._x_id)});function Qg(n,e,t,i){if(n._x_id||(n._x_id={}),n._x_id[e])return n._x_id[e];let r=i();return n._x_id[e]=r,t(()=>{delete n._x_id[e]}),r}on("el",n=>n);Fd("Focus","focus","focus");Fd("Persist","persist","persist");function Fd(n,e,t){on(e,i=>Sn(`You can't use [$${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}Mt("modelable",(n,{expression:e},{effect:t,evaluateLater:i,cleanup:r})=>{let s=i(e),a=()=>{let u;return s(h=>u=h),u},o=i(`${e} = __placeholder`),l=u=>o(()=>{},{scope:{__placeholder:u}}),c=a();l(c),queueMicrotask(()=>{if(!n._x_model)return;n._x_removeModelListeners.default();let u=n._x_model.get,h=n._x_model.setWithModifiers,d=vd({get(){return u()},set(m){h(m)}},{get(){return a()},set(m){l(m)}});r(d)})});Mt("teleport",(n,{modifiers:e,expression:t},{cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&Sn("x-teleport can only be used on a <template> tag",n);let r=tu(t),s=n.content.cloneNode(!0).firstElementChild;n._x_teleport=s,s._x_teleportBack=n,n.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),n._x_forwardEvents&&n._x_forwardEvents.forEach(o=>{s.addEventListener(o,l=>{l.stopPropagation(),n.dispatchEvent(new l.constructor(l.type,l))})}),Xr(s,{},n);let a=(o,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(o,l):c.includes("append")?l.parentNode.insertBefore(o,l.nextSibling):l.appendChild(o)};gt(()=>{Qn(()=>{a(s,r,e),In(s)})()}),n._x_teleportPutBack=()=>{let o=tu(t);gt(()=>{a(n._x_teleport,o,e)})},i(()=>gt(()=>{s.remove(),fr(s)}))});var jg=document.createElement("div");function tu(n){let e=Qn(()=>document.querySelector(n),()=>jg)();return e||Sn(`Cannot find x-teleport element for selector: "${n}"`),e}var Bd=()=>{};Bd.inline=(n,{modifiers:e},{cleanup:t})=>{e.includes("self")?n._x_ignoreSelf=!0:n._x_ignore=!0,t(()=>{e.includes("self")?delete n._x_ignoreSelf:delete n._x_ignore})};Mt("ignore",Bd);Mt("effect",Qn((n,{expression:e},{effect:t})=>{t(Ot(n,e))}));function Ki(n,e,t,i){let r=n,s=l=>i(l),a={},o=(l,c)=>u=>c(l,u);return t.includes("dot")&&(e=e0(e)),t.includes("camel")&&(e=t0(e)),t.includes("capture")&&(a.capture=!0),t.includes("window")&&(r=window),t.includes("document")&&(r=document),t.includes("passive")&&(a.passive=t[t.indexOf("passive")+1]!=="false"),s=zd(t,s),t.includes("prevent")&&(s=o(s,(l,c)=>{c.preventDefault(),l(c)})),t.includes("stop")&&(s=o(s,(l,c)=>{c.stopPropagation(),l(c)})),t.includes("once")&&(s=o(s,(l,c)=>{l(c),r.removeEventListener(e,s,a)})),(t.includes("away")||t.includes("outside"))&&(r=document,s=o(s,(l,c)=>{n.contains(c.target)||c.target.isConnected!==!1&&(n.offsetWidth<1&&n.offsetHeight<1||n._x_isShown!==!1&&l(c))})),t.includes("self")&&(s=o(s,(l,c)=>{c.target===n&&l(c)})),e==="submit"&&(s=o(s,(l,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(u=>u()),l(c)})),(i0(e)||Hd(e))&&(s=o(s,(l,c)=>{r0(c,t)||l(c)})),r.addEventListener(e,s,a),()=>{r.removeEventListener(e,s,a)}}function zd(n,e){if(n.includes("debounce")){let t=n[n.indexOf("debounce")+1]||"invalid-wait",i=qs(t.split("ms")[0])?Number(t.split("ms")[0]):250;e=gd(e,i)}if(n.includes("throttle")){let t=n[n.indexOf("throttle")+1]||"invalid-wait",i=qs(t.split("ms")[0])?Number(t.split("ms")[0]):250;e=xd(e,i)}return e}function e0(n){return n.replace(/-/g,".")}function t0(n){return n.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function qs(n){return!Array.isArray(n)&&!isNaN(n)}function n0(n){return[" ","_"].includes(n)?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function i0(n){return["keydown","keyup"].includes(n)}function Hd(n){return["contextmenu","click","mouse"].some(e=>n.includes(e))}function r0(n,e){let t=e.filter(s=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,qs((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.includes("throttle")){let s=t.indexOf("throttle");t.splice(s,qs((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&nu(n.key).includes(t[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!r.includes(s)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),n[`${a}Key`])).length===r.length&&(Hd(n.type)||nu(n.key).includes(t[0])))}function nu(n){if(!n)return[];n=n0(n);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[n]=n,Object.keys(e).map(t=>{if(e[t]===n)return t}).filter(t=>t)}Mt("model",(n,{modifiers:e,expression:t},{effect:i,cleanup:r})=>{let s=n;e.includes("parent")&&(s=Pn(n,M=>M!==n));let a=Ot(s,t),o;typeof t=="string"?o=Ot(s,`${t} = __placeholder`):typeof t=="function"&&typeof t()=="string"?o=Ot(s,`${t()} = __placeholder`):o=()=>{};let l=()=>{let M;return a(p=>M=p),iu(M)?M.get():M},c=M=>{let p;a(f=>p=f),iu(p)?p.set(M):o(()=>{},{scope:{__placeholder:M}})};typeof t=="string"&&n.type==="radio"&&gt(()=>{n.hasAttribute("name")||n.setAttribute("name",t)});let u=e.includes("change")||e.includes("lazy"),h=e.includes("blur"),d=e.includes("enter"),m=u||h||d,x;if(Kn)x=()=>{};else if(m){let M=[],p=f=>c(ns(n,e,f,l()));if(u&&M.push(Ki(n,"change",e,p)),h&&(M.push(Ki(n,"blur",e,p)),n.form)){let f=n.form,E=()=>p({target:n});f._x_pendingModelUpdates||(f._x_pendingModelUpdates=[]),f._x_pendingModelUpdates.push(E),r(()=>{f._x_pendingModelUpdates&&f._x_pendingModelUpdates.splice(f._x_pendingModelUpdates.indexOf(E),1)})}d&&M.push(Ki(n,"keydown",e,f=>{f.key==="Enter"&&p(f)})),x=()=>M.forEach(f=>f())}else{let M=n.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(n.type)?"change":"input";x=Ki(n,M,e,p=>{c(ns(n,e,p,l()))})}if(e.includes("fill")&&([void 0,null,""].includes(l())||Xs(n)&&Array.isArray(l())||n.tagName.toLowerCase()==="select"&&n.multiple)&&c(ns(n,e,{target:n},l())),n._x_removeModelListeners||(n._x_removeModelListeners={}),n._x_removeModelListeners.default=x,r(()=>n._x_removeModelListeners.default()),n.form){let M=Ki(n.form,"reset",[],p=>{Wl(()=>n._x_model&&n._x_model.set(ns(n,e,{target:n},l())))});r(()=>M())}n._x_model={get(){return l()},set(M){c(M)},setWithModifiers:zd(e,c)},n._x_forceModelUpdate=M=>{M===void 0&&typeof t=="string"&&t.match(/\./)&&(M=""),gt(()=>{Xs(n)?Array.isArray(M)?n.checked=M.some(p=>p==n.value):n.checked=!!M:ql(n)?typeof M=="boolean"?n.checked=Is(n.value)===M:n.checked=n.value==M:hd(n,"value",M)})},i(()=>{let M=l();e.includes("unintrusive")&&document.activeElement.isSameNode(n)||n._x_forceModelUpdate(M)})});function ns(n,e,t,i){return gt(()=>{if(t instanceof CustomEvent&&t.detail!==void 0)return t.detail!==null&&t.detail!==void 0?t.detail:t.target.value;if(Xs(n))if(Array.isArray(i)){let r=null;return e.includes("number")?r=Ca(t.target.value):e.includes("boolean")?r=Is(t.target.value):r=t.target.value,t.target.checked?i.includes(r)?i:i.concat([r]):i.filter(s=>!s0(s,r))}else return t.target.checked;else{if(n.tagName.toLowerCase()==="select"&&n.multiple)return e.includes("number")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return Ca(s)}):e.includes("boolean")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return Is(s)}):Array.from(t.target.selectedOptions).map(r=>r.value||r.text);{let r;return ql(n)?t.target.checked?r=t.target.value:r=i:r=t.target.value,e.includes("number")?Ca(r):e.includes("boolean")?Is(r):e.includes("trim")?r.trim():r}}})}function Ca(n){let e=n?parseFloat(n):null;return a0(e)?e:n}function s0(n,e){return n==e}function a0(n){return!Array.isArray(n)&&!isNaN(n)}function iu(n){return n!==null&&typeof n=="object"&&typeof n.get=="function"&&typeof n.set=="function"}Mt("cloak",n=>queueMicrotask(()=>gt(()=>n.removeAttribute(ur("cloak")))));od(()=>`[${ur("init")}]`);Mt("init",Qn((n,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));Mt("text",(n,{expression:e},{effect:t,evaluateLater:i})=>{let r=i(e);t(()=>{r(s=>{gt(()=>{n.textContent=s})})})});Mt("html",(n,{expression:e},{effect:t,evaluateLater:i})=>{let r=i(e);t(()=>{r(s=>{gt(()=>{n.innerHTML=s??"",n._x_ignoreSelf=!0,In(n),delete n._x_ignoreSelf})})})});Vl(Jf(":",Qf(ur("bind:"))));var Vd=(n,{value:e,modifiers:t,expression:i,original:r},{effect:s,cleanup:a})=>{if(!e){let l={};fg(l),Ot(n,i)(u=>{Md(n,u,r)},{scope:l});return}if(e==="key")return o0(n,i);if(n._x_inlineBindings&&n._x_inlineBindings[e]&&n._x_inlineBindings[e].extract)return;let o=Ot(n,i);s(()=>o(l=>{l===void 0&&typeof i=="string"&&i.match(/\./)&&(l=""),gt(()=>hd(n,e,l,t))})),a(()=>{n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedStyles&&n._x_undoAddedStyles()})};Vd.inline=(n,{value:e,modifiers:t,expression:i})=>{e&&(n._x_inlineBindings||(n._x_inlineBindings={}),n._x_inlineBindings[e]={expression:i,extract:!1})};Mt("bind",Vd);function o0(n,e){n._x_keyExpression=e}ad(()=>`[${ur("data")}]`);Mt("data",(n,{expression:e},{cleanup:t})=>{if(l0(n))return;e=e===""?"{}":e;let i={};Or(i,n);let r={};hg(r,i);let s=pi(n,e,{scope:r});(s===void 0||s===!0)&&(s={}),Or(s,n);let a=lr(s);Bl(a);let o=Xr(n,a);a.init&&pi(n,a.init),t(()=>{a.destroy&&pi(n,a.destroy),o()})});la((n,e)=>{n._x_dataStack&&(e._x_dataStack=n._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function l0(n){return Kn?wo?!0:n.hasAttribute("data-has-alpine-state"):!1}Mt("show",(n,{modifiers:e,expression:t},{effect:i})=>{let r=Ot(n,t);n._x_doHide||(n._x_doHide=()=>{gt(()=>{n.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),n._x_doShow||(n._x_doShow=()=>{gt(()=>{n.style.length===1&&n.style.display==="none"?n.removeAttribute("style"):n.style.removeProperty("display")})});let s=()=>{n._x_doHide(),n._x_isShown=!1},a=()=>{n._x_doShow(),n._x_isShown=!0},o=()=>setTimeout(a),l=To(h=>h?a():s(),h=>{typeof n._x_toggleAndCascadeWithTransitions=="function"?n._x_toggleAndCascadeWithTransitions(n,h,a,s):h?o():s()}),c,u=!0;i(()=>r(h=>{!u&&h===c||(e.includes("immediate")&&(h?o():s()),l(h),c=h,u=!1)}))});Mt("for",(n,{expression:e},{effect:t,cleanup:i})=>{let r=f0(e),s=Ot(n,r.items),a=Ot(n,n._x_keyExpression||"index");n._x_lookup=new Map,t(()=>u0(n,r,s,a)),i(()=>{n._x_lookup.forEach(o=>gt(()=>{fr(o),o.remove()})),delete n._x_lookup})});function c0(n){return e=>{Object.entries(e).forEach(([t,i])=>{n[t]=i})}}function u0(n,e,t,i){t(r=>{h0(r)&&(r=Array.from({length:r},(c,u)=>u+1)),r==null&&(r=[]),r instanceof Set&&(r=Array.from(r)),r instanceof Map&&(r=Array.from(r));let s=n._x_lookup,a=new Map;n._x_lookup=a;let o=p0(r),l=Object.entries(r).map(([c,u])=>{o||(c=parseInt(c));let h=d0(e,u,c,r),d;return i(m=>{typeof m=="object"&&Sn("x-for key cannot be an object, it must be a string or an integer",n),s.has(m)&&(a.set(m,s.get(m)),s.delete(m)),d=m},{scope:{index:c,...h}}),[d,h]});gt(()=>{s.forEach(h=>{fr(h),h.remove()});let c=new Set,u=n;l.forEach(([h,d])=>{if(a.has(h)){let M=a.get(h);M._x_refreshXForScope(d),u.nextElementSibling!==M&&(u.nextElementSibling&&M.replaceWith(u.nextElementSibling),u.after(M)),u=M,M._x_currentIfEl&&(M.nextElementSibling!==M._x_currentIfEl&&u.after(M._x_currentIfEl),u=M._x_currentIfEl);return}n.content.children.length>1&&Sn("x-for templates require a single root element, additional elements will be ignored.",n);let m=document.importNode(n.content,!0).firstElementChild,x=lr(d);Xr(m,x,n),m._x_refreshXForScope=c0(x),a.set(h,m),c.add(m),u.after(m),u=m}),Qn(()=>c.forEach(h=>In(h)))()})})}function f0(n){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=n.match(i);if(!r)return;let s={};s.items=r[2].trim();let a=r[1].replace(t,"").trim(),o=a.match(e);return o?(s.item=a.replace(e,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function d0(n,e,t,i){let r={};return/^\[.*\]$/.test(n.item)&&Array.isArray(e)?n.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{r[a]=e[o]}):/^\{.*\}$/.test(n.item)&&!Array.isArray(e)&&typeof e=="object"?n.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=e[a]}):r[n.item]=e,n.index&&(r[n.index]=t),n.collection&&(r[n.collection]=i),r}function h0(n){return typeof n!="object"&&!isNaN(n)}function p0(n){return typeof n=="object"&&!Array.isArray(n)}function Gd(){}Gd.inline=(n,{expression:e},{cleanup:t})=>{let i=aa(n);i&&(i._x_refs||(i._x_refs={}),i._x_refs[e]=n,t(()=>delete i._x_refs[e]))};Mt("ref",Gd);Mt("if",(n,{expression:e},{effect:t,cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&Sn("x-if can only be used on a <template> tag",n);let r=Ot(n,e),s=()=>{if(n._x_currentIfEl)return n._x_currentIfEl;let o=n.content.cloneNode(!0).firstElementChild;return Xr(o,{},n),gt(()=>{n.after(o),Qn(()=>In(o))()}),n._x_currentIfEl=o,n._x_undoIf=()=>{gt(()=>{fr(o),o.remove()}),delete n._x_currentIfEl},o},a=()=>{n._x_undoIf&&(n._x_undoIf(),delete n._x_undoIf)};t(()=>r(o=>{o?s():a()})),i(()=>n._x_undoIf&&n._x_undoIf())});Mt("id",(n,{expression:e},{evaluate:t})=>{t(e).forEach(r=>Jg(n,r))});la((n,e)=>{n._x_ids&&(e._x_ids=n._x_ids)});Vl(Jf("@",Qf(ur("on:"))));Mt("on",Qn((n,{value:e,modifiers:t,expression:i},{cleanup:r})=>{let s=i?Ot(n,i):()=>{};n.tagName.toLowerCase()==="template"&&(n._x_forwardEvents||(n._x_forwardEvents=[]),n._x_forwardEvents.includes(e)||n._x_forwardEvents.push(e));let a=Ki(n,e,t,o=>{s(()=>{},{scope:{$event:o},params:[o]})});r(()=>a())}));da("Collapse","collapse","collapse");da("Intersect","intersect","intersect");da("Focus","trap","focus");da("Mask","mask","mask");function da(n,e,t){Mt(e,i=>Sn(`You can't use [x-${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}dr.setEvaluator(v_);dr.setRawEvaluator(b_);dr.setReactivityEngine({reactive:jl,effect:yg,release:bg,raw:ct});var m0=dr,kd=m0;const ec="185",_0=0,ru=1,g0=2,Us=1,x0=2,Pr=3,Jn=0,Vt=1,Rn=2,Dn=0,Ji=1,Do=2,su=3,au=4,v0=5,ai=100,S0=101,M0=102,E0=103,y0=104,b0=200,T0=201,A0=202,w0=203,Lo=204,Io=205,R0=206,C0=207,P0=208,D0=209,L0=210,I0=211,U0=212,N0=213,O0=214,Uo=0,No=1,Oo=2,nr=3,Fo=4,Bo=5,zo=6,Ho=7,Wd=0,F0=1,B0=2,xn=0,Xd=1,qd=2,Yd=3,$d=4,Kd=5,Zd=6,Jd=7,Qd=300,yi=301,ir=302,Pa=303,Da=304,ha=306,Vo=1e3,Cn=1001,Go=1002,At=1003,z0=1004,is=1005,Dt=1006,La=1007,ui=1008,Zt=1009,jd=1010,eh=1011,zr=1012,tc=1013,Mn=1014,_n=1015,Un=1016,nc=1017,ic=1018,Hr=1020,th=35902,nh=35899,ih=1021,rh=1022,rn=1023,Nn=1026,fi=1027,sh=1028,rc=1029,bi=1030,sc=1031,ac=1033,Ns=33776,Os=33777,Fs=33778,Bs=33779,ko=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,$o=37492,Ko=37496,Zo=37488,Jo=37489,Ys=37490,Qo=37491,jo=37808,el=37809,tl=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,ul=37819,fl=37820,dl=37821,hl=36492,pl=36494,ml=36495,_l=36283,gl=36284,$s=36285,xl=36286,H0=3200,ou=0,V0=1,qn="",Kt="srgb",Ks="srgb-linear",Zs="linear",Qe="srgb",Di=7680,lu=519,G0=512,k0=513,W0=514,oc=515,X0=516,q0=517,lc=518,Y0=519,vl=35044,cu="300 es",gn=2e3,Js=2001;function $0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function K0(){const n=Qs("canvas");return n.style.display="block",n}const uu={};function js(...n){const e="THREE."+n.shift();console.log(e,...n)}function ah(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=ah(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=ah(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qi(...n){const e=n.join(" ");e in uu||(uu[e]=!0,De(...n))}function Z0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const J0={[Uo]:No,[Oo]:zo,[Fo]:Ho,[nr]:Bo,[No]:Uo,[zo]:Oo,[Ho]:Fo,[Bo]:nr};class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,Sl=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function ke(n,e,t){return Math.max(e,Math.min(t,n))}function Q0(n,e){return(n%e+e)%e}function Ua(n,e,t){return(1-t)*n+t*e}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hc=class hc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;let Fe=hc;class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],M=s[a+3];if(h!==M||l!==d||c!==m||u!==x){let p=l*d+c*m+u*x+h*M;p<0&&(d=-d,m=-m,x=-x,M=-M,p=-p);let f=1-o;if(p<.9995){const E=Math.acos(p),b=Math.sin(E);f=Math.sin(f*E)/b,o=Math.sin(o*E)/b,l=l*f+d*o,c=c*f+m*o,u=u*f+x*o,h=h*f+M*o}else{l=l*f+d*o,c=c*f+m*o,u=u*f+x*o,h=h*f+M*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*m-c*d,e[t+1]=l*x+u*d+c*h-o*m,e[t+2]=c*x+u*m+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"YXZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"ZXY":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"ZYX":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"YZX":this._x=d*u*h+c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h-d*m*x;break;case"XZY":this._x=d*u*h-c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h+d*m*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pc=class pc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pc.prototype.isVector3=!0;let N=pc;const Na=new N,fu=new hr,mc=class mc{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],x=i[8],M=r[0],p=r[3],f=r[6],E=r[1],b=r[4],v=r[7],w=r[2],y=r[5],R=r[8];return s[0]=a*M+o*E+l*w,s[3]=a*p+o*b+l*y,s[6]=a*f+o*v+l*R,s[1]=c*M+u*E+h*w,s[4]=c*p+u*b+h*y,s[7]=c*f+u*v+h*R,s[2]=d*M+m*E+x*w,s[5]=d*p+m*b+x*y,s[8]=d*f+m*v+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mc.prototype.isMatrix3=!0;let Ie=mc;const Oa=new Ie,du=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const n={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=Ln(r.r),r.g=Ln(r.g),r.b=Ln(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?Zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ks]:{primaries:e,whitePoint:i,transfer:Zs,toXYZ:du,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:du,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const Ge=j0();function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class ex{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Li===void 0&&(Li=Qs("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ln(t[i]/255)*255):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tx=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fa(r[a].image)):s.push(Fa(r[a]))}else s=Fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ex.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let nx=0;const Ba=new N;class It extends wi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Cn,r=Cn,s=Dt,a=ui,o=rn,l=Zt,c=It.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=$n(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Qd;It.DEFAULT_ANISOTROPY=1;const _c=class _c{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],x=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(m+1)/2,w=(f+1)/2,y=(u+d)/4,R=(h+M)/4,g=(x+p)/4;return b>v&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=y/i,s=R/i):v>w?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=y/r,s=g/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=g/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-x)*(p-x)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-x)/E,this.y=(h-M)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_c.prototype.isVector4=!0;let ht=_c;class ix extends wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new It(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends ix{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oh extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const na=class na{constructor(e,t,i,r,s,a,o,l,c,u,h,d,m,x,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,M,p)}set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,M,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=x,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new na().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,x=o*u,M=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,x=c*u,M=c*h;t[0]=d+M*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,x=c*u,M=c*h;t[0]=d-M*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,x=o*u,M=o*h;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=M-d*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+x,t[10]=d-M*h}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+M,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sx,e,ax)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Hn.crossVectors(i,Wt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Hn.crossVectors(i,Wt)),Hn.normalize(),rs.crossVectors(Wt,Hn),r[0]=Hn.x,r[4]=rs.x,r[8]=Wt.x,r[1]=Hn.y,r[5]=rs.y,r[9]=Wt.y,r[2]=Hn.z,r[6]=rs.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],x=i[2],M=i[6],p=i[10],f=i[14],E=i[3],b=i[7],v=i[11],w=i[15],y=r[0],R=r[4],g=r[8],T=r[12],P=r[1],C=r[5],F=r[9],$=r[13],K=r[2],B=r[6],Y=r[10],V=r[14],Q=r[3],te=r[7],se=r[11],ie=r[15];return s[0]=a*y+o*P+l*K+c*Q,s[4]=a*R+o*C+l*B+c*te,s[8]=a*g+o*F+l*Y+c*se,s[12]=a*T+o*$+l*V+c*ie,s[1]=u*y+h*P+d*K+m*Q,s[5]=u*R+h*C+d*B+m*te,s[9]=u*g+h*F+d*Y+m*se,s[13]=u*T+h*$+d*V+m*ie,s[2]=x*y+M*P+p*K+f*Q,s[6]=x*R+M*C+p*B+f*te,s[10]=x*g+M*F+p*Y+f*se,s[14]=x*T+M*$+p*V+f*ie,s[3]=E*y+b*P+v*K+w*Q,s[7]=E*R+b*C+v*B+w*te,s[11]=E*g+b*F+v*Y+w*se,s[15]=E*T+b*$+v*V+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],x=e[3],M=e[7],p=e[11],f=e[15],E=l*m-c*d,b=o*m-c*h,v=o*d-l*h,w=a*m-c*u,y=a*d-l*u,R=a*h-o*u;return t*(M*E-p*b+f*v)-i*(x*E-p*w+f*y)+r*(x*b-M*w+f*R)-s*(x*v-M*y+p*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],x=e[12],M=e[13],p=e[14],f=e[15],E=t*o-i*a,b=t*l-r*a,v=t*c-s*a,w=i*l-r*o,y=i*c-s*o,R=r*c-s*l,g=u*M-h*x,T=u*p-d*x,P=u*f-m*x,C=h*p-d*M,F=h*f-m*M,$=d*f-m*p,K=E*$-b*F+v*C+w*P-y*T+R*g;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/K;return e[0]=(o*$-l*F+c*C)*B,e[1]=(r*F-i*$-s*C)*B,e[2]=(M*R-p*y+f*w)*B,e[3]=(d*y-h*R-m*w)*B,e[4]=(l*P-a*$-c*T)*B,e[5]=(t*$-r*P+s*T)*B,e[6]=(p*v-x*R-f*b)*B,e[7]=(u*R-d*v+m*b)*B,e[8]=(a*F-o*P+c*g)*B,e[9]=(i*P-t*F-s*g)*B,e[10]=(x*y-M*v+f*E)*B,e[11]=(h*v-u*y-m*E)*B,e[12]=(o*T-a*C-l*g)*B,e[13]=(t*C-i*T+r*g)*B,e[14]=(M*b-x*w-p*E)*B,e[15]=(u*w-h*b+d*E)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,x=s*h,M=a*u,p=a*h,f=o*h,E=l*c,b=l*u,v=l*h,w=i.x,y=i.y,R=i.z;return r[0]=(1-(M+f))*w,r[1]=(m+v)*w,r[2]=(x-b)*w,r[3]=0,r[4]=(m-v)*y,r[5]=(1-(d+f))*y,r[6]=(p+E)*y,r[7]=0,r[8]=(x+b)*R,r[9]=(p-E)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),l=Ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),en.copy(this);const c=1/a,u=1/o,h=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=gn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let x,M;if(l)x=s/(a-s),M=a*s/(a-s);else if(o===gn)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Js)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,M;if(l)x=1/(a-s),M=a/(a-s);else if(o===gn)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===Js)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};na.prototype.isMatrix4=!0;let pt=na;const Ii=new N,en=new pt,sx=new N(0,0,0),ax=new N(1,1,1),Hn=new N,rs=new N,Wt=new N,pu=new pt,mu=new hr;class Ti{constructor(e=0,t=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ox=0;const _u=new N,Ui=new hr,yn=new pt,ss=new N,Sr=new N,lx=new N,cx=new hr,gu=new N(1,0,0),xu=new N(0,1,0),vu=new N(0,0,1),Su={type:"added"},ux={type:"removed"},Ni={type:"childadded",child:null},za={type:"childremoved",child:null};class Ft extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new N,t=new Ti,i=new hr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ie}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ss.copy(e):ss.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Sr,ss,this.up):yn.lookAt(ss,Sr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(yn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ux),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},as={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ge.workingColorSpace){if(e=Q0(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Va(a,s,e+1/3),this.g=Va(a,s,e),this.b=Va(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ge.workingToColorSpace(Pt.copy(this),e),Math.round(ke(Pt.r*255,0,255))*65536+Math.round(ke(Pt.g*255,0,255))*256+Math.round(ke(Pt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Kt){Ge.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(as);const i=Ua(Vn.h,as.h,t),r=Ua(Vn.s,as.s,t),s=Ua(Vn.l,as.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new $e;$e.NAMES=ch;class uh extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new N,bn=new N,Ga=new N,Tn=new N,Oi=new N,Fi=new N,Mu=new N,ka=new N,Wa=new N,Xa=new N,qa=new ht,Ya=new ht,$a=new ht;class Jt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),bn.subVectors(i,t),Ga.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(bn),l=tn.dot(Ga),c=bn.dot(bn),u=bn.dot(Ga),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return qa.setScalar(0),Ya.setScalar(0),$a.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qa,s.x),a.addScaledVector(Ya,s.y),a.addScaledVector($a,s.z),a}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),bn.subVectors(e,t),tn.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),tn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,i),Fi.subVectors(s,i),ka.subVectors(e,i);const l=Oi.dot(ka),c=Fi.dot(ka);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,r);const u=Oi.dot(Wa),h=Fi.dot(Wa);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Oi,a);Xa.subVectors(e,s);const m=Oi.dot(Xa),x=Fi.dot(Xa);if(x>=0&&m<=x)return t.copy(s);const M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Fi,o);const p=u*x-m*h;if(p<=0&&h-u>=0&&m-x>=0)return Mu.subVectors(s,r),o=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(Mu,o);const f=1/(p+M+d);return a=M*f,o=d*f,t.copy(i).addScaledVector(Oi,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),os.copy(i.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),ls.subVectors(this.max,Mr),Bi.subVectors(e.a,Mr),zi.subVectors(e.b,Mr),Hi.subVectors(e.c,Mr),Gn.subVectors(zi,Bi),kn.subVectors(Hi,zi),ei.subVectors(Bi,Hi);let t=[0,-Gn.z,Gn.y,0,-kn.z,kn.y,0,-ei.z,ei.y,Gn.z,0,-Gn.x,kn.z,0,-kn.x,ei.z,0,-ei.x,-Gn.y,Gn.x,0,-kn.y,kn.x,0,-ei.y,ei.x,0];return!Ka(t,Bi,zi,Hi,ls)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Bi,zi,Hi,ls))?!1:(cs.crossVectors(Gn,kn),t=[cs.x,cs.y,cs.z],Ka(t,Bi,zi,Hi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],nn=new N,os=new qr,Bi=new N,zi=new N,Hi=new N,Gn=new N,kn=new N,ei=new N,Mr=new N,ls=new N,cs=new N,ti=new N;function Ka(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ti.fromArray(n,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const St=new N,us=new Fe;let dx=0;class Qt extends wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dh extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const hx=new qr,Er=new N,Za=new N;class pa{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Za)),this.expandByPoint(Er.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let px=0;const $t=new pt,Ja=new Ft,Vi=new N,Xt=new qr,yr=new qr,bt=new N;class Gt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?dh:fh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Xt.min,yr.min),Xt.expandByPoint(bt),bt.addVectors(Xt.max,yr.max),Xt.expandByPoint(bt)):(Xt.expandByPoint(yr.min),Xt.expandByPoint(yr.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),bt.add(Vi)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new N,l[g]=new N;const c=new N,u=new N,h=new N,d=new Fe,m=new Fe,x=new Fe,M=new N,p=new N;function f(g,T,P){c.fromBufferAttribute(i,g),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,g),m.fromBufferAttribute(s,T),x.fromBufferAttribute(s,P),u.sub(c),h.sub(c),m.sub(d),x.sub(d);const C=1/(m.x*x.y-x.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(C),o[g].add(M),o[T].add(M),o[P].add(M),l[g].add(p),l[T].add(p),l[P].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let g=0,T=E.length;g<T;++g){const P=E[g],C=P.start,F=P.count;for(let $=C,K=C+F;$<K;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const b=new N,v=new N,w=new N,y=new N;function R(g){w.fromBufferAttribute(r,g),y.copy(w);const T=o[g];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),v.crossVectors(y,T);const C=v.dot(l[g])<0?-1:1;a.setXYZW(g,b.x,b.y,b.z,C)}for(let g=0,T=E.length;g<T;++g){const P=E[g],C=P.start,F=P.count;for(let $=C,K=C+F;$<K;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let f=0;f<u;f++)d[x++]=c[m++]}return new Qt(d,u,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new N;class ea{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ea(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _x=0;class pr extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ji,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Io,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hh extends pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const br=new N,ki=new N,Wi=new N,Xi=new Fe,Tr=new Fe,ph=new pt,fs=new N,Ar=new N,ds=new N,Eu=new Fe,Qa=new Fe,yu=new Fe;class gx extends Ft{constructor(e=new hh){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mx(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new ea(i,3,0,!1)),Gi.setAttribute("uv",new ea(i,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),ph.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Wi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;hs(fs.set(-.5,-.5,0),Wi,a,ki,r,s),hs(Ar.set(.5,-.5,0),Wi,a,ki,r,s),hs(ds.set(.5,.5,0),Wi,a,ki,r,s),Eu.set(0,0),Qa.set(1,0),yu.set(1,1);let o=e.ray.intersectTriangle(fs,Ar,ds,!1,br);if(o===null&&(hs(Ar.set(-.5,.5,0),Wi,a,ki,r,s),Qa.set(0,1),o=e.ray.intersectTriangle(fs,ds,Ar,!1,br),o===null))return;const l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:Jt.getInterpolation(br,fs,Ar,ds,Eu,Qa,yu,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hs(n,e,t,i,r,s){Xi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Tr.x=s*Xi.x-r*Xi.y,Tr.y=r*Xi.x+s*Xi.y):Tr.copy(Xi),n.copy(e),n.x+=Tr.x,n.y+=Tr.y,n.applyMatrix4(ph)}const wn=new N,ja=new N,ps=new N,Wn=new N,eo=new N,ms=new N,to=new N;class mh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ps),o=Wn.dot(this.direction),l=-Wn.dot(ps),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const M=1/u;h*=M,d*=M,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ja).addScaledVector(ps,d),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,s){eo.subVectors(t,e),ms.subVectors(i,e),to.crossVectors(eo,ms);let a=this.direction.dot(to),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(ms.crossVectors(Wn,ms));if(l<0)return null;const c=o*this.direction.dot(eo.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(to);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ta extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bu=new pt,ni=new mh,_s=new pa,Tu=new N,gs=new N,xs=new N,vs=new N,no=new N,Ss=new N,Au=new N,Ms=new N;class an extends Ft{constructor(e=new Gt,t=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(no.fromBufferAttribute(h,e),a?Ss.addScaledVector(no,u):Ss.addScaledVector(no.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(_s.containsPoint(ni.origin)===!1&&(ni.intersectSphere(_s,Tu)===null||ni.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(bu.copy(s).invert(),ni.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){const p=d[x],f=a[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=E,w=b;v<w;v+=3){const y=o.getX(v),R=o.getX(v+1),g=o.getX(v+2);r=Es(this,f,e,i,c,u,h,y,R,g),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=x,f=M;p<f;p+=3){const E=o.getX(p),b=o.getX(p+1),v=o.getX(p+2);r=Es(this,a,e,i,c,u,h,E,b,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){const p=d[x],f=a[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=E,w=b;v<w;v+=3){const y=v,R=v+1,g=v+2;r=Es(this,f,e,i,c,u,h,y,R,g),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=x,f=M;p<f;p+=3){const E=p,b=p+1,v=p+2;r=Es(this,a,e,i,c,u,h,E,b,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function xx(n,e,t,i,r,s,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Jn,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:n}}function Es(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,gs),n.getVertexPosition(l,xs),n.getVertexPosition(c,vs);const u=xx(n,e,t,i,gs,xs,vs,Au);if(u){const h=new N;Jt.getBarycoord(Au,gs,xs,vs,h),r&&(u.uv=Jt.getInterpolatedAttribute(r,o,l,c,h,new Fe)),s&&(u.uv1=Jt.getInterpolatedAttribute(s,o,l,c,h,new Fe)),a&&(u.normal=Jt.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Jt.getNormal(gs,xs,vs,d.normal),u.face=d,u.barycoord=h}return u}class vx extends It{constructor(e=null,t=1,i=1,r,s,a,o,l,c=At,u=At,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const io=new N,Sx=new N,Mx=new Ie;class si{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=io.subVectors(i,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(io),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mx.getNormalMatrix(e),r=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new pa,Ex=new Fe(.5,.5),ys=new N;class _h{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,a=new si){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],m=s[7],x=s[8],M=s[9],p=s[10],f=s[11],E=s[12],b=s[13],v=s[14],w=s[15];if(r[0].setComponents(c-a,m-u,f-x,w-E).normalize(),r[1].setComponents(c+a,m+u,f+x,w+E).normalize(),r[2].setComponents(c+o,m+h,f+M,w+b).normalize(),r[3].setComponents(c-o,m-h,f-M,w-b).normalize(),i)r[4].setComponents(l,d,p,v).normalize(),r[5].setComponents(c-l,m-d,f-p,w-v).normalize();else if(r[4].setComponents(c-l,m-d,f-p,w-v).normalize(),t===gn)r[5].setComponents(c+l,m+d,f+p,w+v).normalize();else if(t===Js)r[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Ex.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gh extends pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new pt,Ml=new mh,bs=new pa,Ts=new N;class yx extends Ft{constructor(e=new Gt,t=new gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(r),bs.radius+=s,e.ray.intersectsSphere(bs)===!1)return;wu.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(wu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,M=m;x<M;x++){const p=c.getX(x);Ts.fromBufferAttribute(h,p),Ru(Ts,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,M=m;x<M;x++)Ts.fromBufferAttribute(h,x),Ru(Ts,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ru(n,e,t,i,r,s,a){const o=Ml.distanceSqToPoint(n);if(o<t){const l=new N;Ml.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xh extends It{constructor(e=[],t=yi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bx extends It{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rr extends It{constructor(e,t,i=Mn,r,s,a,o=At,l=At,c,u=Nn,h=1){if(u!==Nn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tx extends rr{constructor(e,t=Mn,i=yi,r,s,a=At,o=At,l,c=Nn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vh extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yr extends Gt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function x(M,p,f,E,b,v,w,y,R,g,T){const P=v/R,C=w/g,F=v/2,$=w/2,K=y/2,B=R+1,Y=g+1;let V=0,Q=0;const te=new N;for(let se=0;se<Y;se++){const ie=se*C-$;for(let xe=0;xe<B;xe++){const Ve=xe*P-F;te[M]=Ve*E,te[p]=ie*b,te[f]=K,c.push(te.x,te.y,te.z),te[M]=0,te[p]=0,te[f]=y>0?1:-1,u.push(te.x,te.y,te.z),h.push(xe/R),h.push(1-se/g),V+=1}}for(let se=0;se<g;se++)for(let ie=0;ie<R;ie++){const xe=d+ie+B*se,Ve=d+ie+B*(se+1),je=d+(ie+1)+B*(se+1),We=d+(ie+1)+B*se;l.push(xe,Ve,We),l.push(Ve,je,We),Q+=6}o.addGroup(m,Q,T),m+=Q,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uc extends Gt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new N,v=new N,w=new N;for(let y=0;y<t.length;y+=3)m(t[y+0],b),m(t[y+1],v),m(t[y+2],w),l(b,v,w,E)}function l(E,b,v,w){const y=w+1,R=[];for(let g=0;g<=y;g++){R[g]=[];const T=E.clone().lerp(v,g/y),P=b.clone().lerp(v,g/y),C=y-g;for(let F=0;F<=C;F++)F===0&&g===y?R[g][F]=T:R[g][F]=T.clone().lerp(P,F/C)}for(let g=0;g<y;g++)for(let T=0;T<2*(y-g)-1;T++){const P=Math.floor(T/2);T%2===0?(d(R[g][P+1]),d(R[g+1][P]),d(R[g][P])):(d(R[g][P+1]),d(R[g+1][P+1]),d(R[g+1][P]))}}function c(E){const b=new N;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(E),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function u(){const E=new N;for(let b=0;b<s.length;b+=3){E.x=s[b+0],E.y=s[b+1],E.z=s[b+2];const v=p(E)/2/Math.PI+.5,w=f(E)/Math.PI+.5;a.push(v,1-w)}x(),h()}function h(){for(let E=0;E<a.length;E+=6){const b=a[E+0],v=a[E+2],w=a[E+4],y=Math.max(b,v,w),R=Math.min(b,v,w);y>.9&&R<.1&&(b<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),w<.2&&(a[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,b){const v=E*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function x(){const E=new N,b=new N,v=new N,w=new N,y=new Fe,R=new Fe,g=new Fe;for(let T=0,P=0;T<s.length;T+=9,P+=6){E.set(s[T+0],s[T+1],s[T+2]),b.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),y.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),g.set(a[P+4],a[P+5]),w.copy(E).add(b).add(v).divideScalar(3);const C=p(w);M(y,P+0,E,C),M(R,P+2,b,C),M(g,P+4,v,C)}}function M(E,b,v,w){w<0&&E.x===1&&(a[b]=E.x-1),v.x===0&&v.z===0&&(a[b]=w/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.vertices,e.indices,e.radius,e.detail)}}class fc extends uc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fc(e.radius,e.detail)}}class ma extends Gt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],x=[],M=[],p=[];for(let f=0;f<u;f++){const E=f*d-a;for(let b=0;b<c;b++){const v=b*h-s;x.push(v,-E,0),M.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const b=E+c*f,v=E+c*(f+1),w=E+1+c*(f+1),y=E+1+c*f;m.push(b,v,y),m.push(v,w,y)}this.setIndex(m),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(M,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class dc extends Gt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],h=[],d=new N,m=new N,x=new N;for(let M=0;M<=i;M++){const p=a+M/i*o;for(let f=0;f<=r;f++){const E=f/r*s;m.x=(e+t*Math.cos(p))*Math.cos(E),m.y=(e+t*Math.cos(p))*Math.sin(E),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),d.x=e*Math.cos(E),d.y=e*Math.sin(E),x.subVectors(m,d).normalize(),u.push(x.x,x.y,x.z),h.push(f/r),h.push(M/i)}}for(let M=1;M<=i;M++)for(let p=1;p<=r;p++){const f=(r+1)*M+p-1,E=(r+1)*(M-1)+p-1,b=(r+1)*(M-1)+p,v=(r+1)*M+p;l.push(f,E,v),l.push(E,b,v)}this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Cu(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Cu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const r in i)e[r]=i[r]}return e}function Cu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ax(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const wx={clone:sr,merge:Nt};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Px extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dx extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const As=new N,ws=new hr,fn=new N;class Mh extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(As,ws,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,ws,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(As,ws,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,ws,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new N,Pu=new Fe,Du=new Fe;class qt extends Mh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Du),t.subVectors(Du,Pu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Eh extends Mh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=-90,Yi=1;class Ix extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new qt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new qt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new qt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const l=new qt(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new qt(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ux extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const gc=class gc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};gc.prototype.isMatrix2=!0;let Lu=gc;function Iu(n,e,t,i){const r=Ox(i);switch(t){case ih:return n*e;case sh:return n*e/r.components*r.byteLength;case rc:return n*e/r.components*r.byteLength;case bi:return n*e*2/r.components*r.byteLength;case sc:return n*e*2/r.components*r.byteLength;case rh:return n*e*3/r.components*r.byteLength;case rn:return n*e*4/r.components*r.byteLength;case ac:return n*e*4/r.components*r.byteLength;case Ns:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:case qo:return Math.max(n,16)*Math.max(e,8)/4;case ko:case Xo:return Math.max(n,8)*Math.max(e,8)/2;case Yo:case $o:case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Ys:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hl:case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _l:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $s:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ox(n){switch(n){case Zt:case jd:return{byteLength:1,components:1};case zr:case eh:case Un:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Mn:case tc:case _n:return{byteLength:4,components:1};case th:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);function yh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Fx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<h.length;m++){const x=h[d],M=h[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,h[d]=M)}h.length=d+1;for(let m=0,x=h.length;m<x;m++){const M=h[m];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
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
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ov=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",mv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cv=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,Pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ov=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
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
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,yS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,bS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IS=`#ifdef USE_TRANSMISSION
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zS=`uniform sampler2D t2D;
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
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
}`,XS=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qS=`#define DISTANCE
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
}`,YS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`uniform float scale;
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
}`,JS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nM=`#define MATCAP
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
}`,iM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
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
}`,oM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,lM=`#define STANDARD
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
}`,cM=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,uM=`#define TOON
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
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,dM=`uniform float size;
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,_M=`uniform float rotation;
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
}`,gM=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Bx,alphahash_pars_fragment:zx,alphamap_fragment:Hx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,alphatest_pars_fragment:kx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:qx,batching_vertex:Yx,begin_vertex:$x,beginnormal_vertex:Kx,bsdfs:Zx,iridescence_fragment:Jx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:tv,clipping_planes_vertex:nv,color_fragment:iv,color_pars_fragment:rv,color_pars_vertex:sv,color_vertex:av,common:ov,cube_uv_reflection_fragment:lv,defaultnormal_vertex:cv,displacementmap_pars_vertex:uv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:hv,colorspace_fragment:pv,colorspace_pars_fragment:mv,envmap_fragment:_v,envmap_common_pars_fragment:gv,envmap_pars_fragment:xv,envmap_pars_vertex:vv,envmap_physical_pars_fragment:Pv,envmap_vertex:Sv,fog_vertex:Mv,fog_pars_vertex:Ev,fog_fragment:yv,fog_pars_fragment:bv,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:wv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Cv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Nv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Fv,lights_fragment_maps:Bv,lights_fragment_end:zv,lightprobes_pars_fragment:Hv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:$v,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:Zv,morphinstance_vertex:Jv,morphcolor_vertex:Qv,morphnormal_vertex:jv,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:aS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:cS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:fS,opaque_fragment:dS,packing:hS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:_S,dithering_pars_fragment:gS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:MS,shadowmap_vertex:ES,shadowmask_pars_fragment:yS,skinbase_vertex:bS,skinning_pars_vertex:TS,skinning_vertex:AS,skinnormal_vertex:wS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:PS,tonemapping_pars_fragment:DS,transmission_fragment:LS,transmission_pars_fragment:IS,uv_pars_fragment:US,uv_pars_vertex:NS,uv_vertex:OS,worldpos_vertex:FS,background_vert:BS,background_frag:zS,backgroundCube_vert:HS,backgroundCube_frag:VS,cube_vert:GS,cube_frag:kS,depth_vert:WS,depth_frag:XS,distance_vert:qS,distance_frag:YS,equirect_vert:$S,equirect_frag:KS,linedashed_vert:ZS,linedashed_frag:JS,meshbasic_vert:QS,meshbasic_frag:jS,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:aM,meshphong_frag:oM,meshphysical_vert:lM,meshphysical_frag:cM,meshtoon_vert:uM,meshtoon_frag:fM,points_vert:dM,points_frag:hM,shadow_vert:pM,shadow_frag:mM,sprite_vert:_M,sprite_frag:gM},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},pn={basic:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Nt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Nt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Nt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Nt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Nt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Nt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Nt([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Nt([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};pn.physical={uniforms:Nt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Rs={r:0,b:0,g:0},xM=new pt,bh=new Ie;bh.set(-1,0,0,0,1,0,0,0,1);function vM(n,e,t,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function m(E){let b=E.isScene===!0?E.background:null;if(b&&b.isTexture){const v=E.backgroundBlurriness>0;b=e.get(b,v)}return b}function x(E){let b=!1;const v=m(E);v===null?p(a,o):v&&v.isColor&&(p(v,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(E,b){const v=m(b);v&&(v.isCubeTexture||v.mapping===ha)?(c===void 0&&(c=new an(new Yr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:sr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bh),c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Qe,(u!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new an(new ma(2,2),new En({name:"BackgroundMaterial",uniforms:sr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,b){E.getRGB(Rs,Sh(n)),t.buffers.color.setClear(Rs.r,Rs.g,Rs.b,b,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:x,addToRenderList:M,dispose:f}}function SM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(C,F,$,K,B){let Y=!1;const V=h(C,K,$,F);s!==V&&(s=V,c(s.object)),Y=m(C,K,$,B),Y&&x(C,K,$,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(C,F,$,K),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,F,$,K){const B=K.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const V=C.isInstancedMesh===!0?C.id:0;let Q=Y[V];Q===void 0&&(Q={},Y[V]=Q);let te=Q[$.id];te===void 0&&(te={},Q[$.id]=te);let se=te[B];return se===void 0&&(se=d(l()),te[B]=se),se}function d(C){const F=[],$=[],K=[];for(let B=0;B<t;B++)F[B]=0,$[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:K,object:C,attributes:{},index:null}}function m(C,F,$,K){const B=s.attributes,Y=F.attributes;let V=0;const Q=$.getAttributes();for(const te in Q)if(Q[te].location>=0){const ie=B[te];let xe=Y[te];if(xe===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),ie===void 0||ie.attribute!==xe||xe&&ie.data!==xe.data)return!0;V++}return s.attributesNum!==V||s.index!==K}function x(C,F,$,K){const B={},Y=F.attributes;let V=0;const Q=$.getAttributes();for(const te in Q)if(Q[te].location>=0){let ie=Y[te];ie===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));const xe={};xe.attribute=ie,ie&&ie.data&&(xe.data=ie.data),B[te]=xe,V++}s.attributes=B,s.attributesNum=V,s.index=K}function M(){const C=s.newAttributes;for(let F=0,$=C.length;F<$;F++)C[F]=0}function p(C){f(C,0)}function f(C,F){const $=s.newAttributes,K=s.enabledAttributes,B=s.attributeDivisors;$[C]=1,K[C]===0&&(n.enableVertexAttribArray(C),K[C]=1),B[C]!==F&&(n.vertexAttribDivisor(C,F),B[C]=F)}function E(){const C=s.newAttributes,F=s.enabledAttributes;for(let $=0,K=F.length;$<K;$++)F[$]!==C[$]&&(n.disableVertexAttribArray($),F[$]=0)}function b(C,F,$,K,B,Y,V){V===!0?n.vertexAttribIPointer(C,F,$,B,Y):n.vertexAttribPointer(C,F,$,K,B,Y)}function v(C,F,$,K){M();const B=K.attributes,Y=$.getAttributes(),V=F.defaultAttributeValues;for(const Q in Y){const te=Y[Q];if(te.location>=0){let se=B[Q];if(se===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){const ie=se.normalized,xe=se.itemSize,Ve=e.get(se);if(Ve===void 0)continue;const je=Ve.buffer,We=Ve.type,W=Ve.bytesPerElement,ne=We===n.INT||We===n.UNSIGNED_INT||se.gpuType===tc;if(se.isInterleavedBufferAttribute){const ee=se.data,Pe=ee.stride,Le=se.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<te.locationSize;Re++)f(te.location+Re,ee.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<te.locationSize;Re++)p(te.location+Re);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Re=0;Re<te.locationSize;Re++)b(te.location+Re,xe/te.locationSize,We,ie,Pe*W,(Le+xe/te.locationSize*Re)*W,ne)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<te.locationSize;ee++)f(te.location+ee,se.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<te.locationSize;ee++)p(te.location+ee);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ee=0;ee<te.locationSize;ee++)b(te.location+ee,xe/te.locationSize,We,ie,xe*W,xe/te.locationSize*ee*W,ne)}}else if(V!==void 0){const ie=V[Q];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(te.location,ie);break;case 3:n.vertexAttrib3fv(te.location,ie);break;case 4:n.vertexAttrib4fv(te.location,ie);break;default:n.vertexAttrib1fv(te.location,ie)}}}}E()}function w(){T();for(const C in i){const F=i[C];for(const $ in F){const K=F[$];for(const B in K){const Y=K[B];for(const V in Y)u(Y[V].object),delete Y[V];delete K[B]}}delete i[C]}}function y(C){if(i[C.id]===void 0)return;const F=i[C.id];for(const $ in F){const K=F[$];for(const B in K){const Y=K[B];for(const V in Y)u(Y[V].object),delete Y[V];delete K[B]}}delete i[C.id]}function R(C){for(const F in i){const $=i[F];for(const K in $){const B=$[K];if(B[C.id]===void 0)continue;const Y=B[C.id];for(const V in Y)u(Y[V].object),delete Y[V];delete B[C.id]}}}function g(C){for(const F in i){const $=i[F],K=C.isInstancedMesh===!0?C.id:0,B=$[K];if(B!==void 0){for(const Y in B){const V=B[Y];for(const Q in V)u(V[Q].object),delete V[Q];delete B[Y]}delete $[K],Object.keys($).length===0&&delete i[F]}}}function T(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function MM(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function EM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!g)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,maxSamples:w,samples:y}}function yM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new si,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,b=E*4;let v=f.clippingState||null;l.value=v,v=u(x,d,b,m);for(let w=0;w!==b;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,x){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,x!==!0||p===null){const f=m+M*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,v=m;b!==M;++b,v+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}const Yn=4,Uu=[.125,.215,.35,.446,.526,.582],oi=20,bM=256,wr=new Eh,Nu=new $e;let ro=null,so=0,ao=0,oo=!1;const TM=new N;class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=TM}=s;ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,ao),this._renderer.xr.enabled=oo,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Un,format:rn,colorSpace:Ks,depthBuffer:!1},r=Fu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AM(s)),this._blurMaterial=RM(s,e,t),this._ggxMaterial=wM(s,e,t)}return r}_compileMaterial(e){const t=new an(new Gt,e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,i,r,s){const l=new qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Nu),h.toneMapping=xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new Yr,new ta({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,f=!0):(p.color.copy(Nu),f=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const w=this._cubeSize;$i(r,v*w,b>2?w:0,w,w),h.setRenderTarget(r),f&&h.render(M,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yi||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,m=h*d,{_lodMax:x}=this,M=this._sizeLods[i],p=3*M*(i>x-Yn?i-x+Yn:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,$i(s,p,f,3*M,2*M),r.setRenderTarget(s),r.render(o,wr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,$i(e,p,f,3*M,2*M),r.setRenderTarget(e),r.render(o,wr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*oi-1),M=s/x,p=isFinite(s)?1+Math.floor(u*M):oi;p>oi&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const f=[];let E=0;for(let R=0;R<oi;++R){const g=R/M,T=Math.exp(-g*g/2);f.push(T),R===0?E+=T:R<p&&(E+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-i;const v=this._sizeLods[r],w=3*v*(r>b-Yn?r-b+Yn:0),y=4*(this._cubeSize-v);$i(t,w,y,3*v,2*v),l.setRenderTarget(t),l.render(h,wr)}}function AM(n){const e=[],t=[],i=[];let r=n;const s=n-Yn+1+Uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Yn?l=Uu[a-n+Yn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,M=3,p=2,f=1,E=new Float32Array(M*x*m),b=new Float32Array(p*x*m),v=new Float32Array(f*x*m);for(let y=0;y<m;y++){const R=y%3*2/3-1,g=y>2?0:-1,T=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];E.set(T,M*x*y),b.set(d,p*x*y);const P=[y,y,y,y,y,y];v.set(P,f*x*y)}const w=new Gt;w.setAttribute("position",new Qt(E,M)),w.setAttribute("uv",new Qt(b,p)),w.setAttribute("faceIndex",new Qt(v,f)),i.push(new an(w,null)),r>Yn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Fu(n,e,t){const i=new vn(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $i(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wM(n,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function RM(n,e,t){const i=new Float32Array(oi),r=new N(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Bu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function zu(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}class Th extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yr(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Dn});s.uniforms.tEquirect.value=t;const a=new an(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Dt),new Ix(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function CM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Pa||m===Da)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const M=new Th(x.height);return M.fromEquirectangularTexture(n,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,x=m===Pa||m===Da,M=m===yi||m===ir;if(x||M){let p=t.get(d);const f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Ou(n)),p=x?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const E=d.image;return x&&E&&E.height>0||M&&E&&l(E)?(i===null&&(i=new Ou(n)),p=x?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,m){return m===Pa?d.mapping=yi:m===Da&&(d.mapping=ir),d}function l(d){let m=0;const x=6;for(let M=0;M<x;M++)d[M]!==void 0&&m++;return m===x}function c(d){const m=d.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function PM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qi("WebGLRenderer: "+i+" extension not supported."),r}}}function DM(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,x=h.attributes.position;let M=0;if(x===void 0)return;if(m!==null){const E=m.array;M=m.version;for(let b=0,v=E.length;b<v;b+=3){const w=E[b+0],y=E[b+1],R=E[b+2];d.push(w,y,y,R,R,w)}}else{const E=x.array;M=x.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const w=b+0,y=b+1,R=b+2;d.push(w,y,y,R,R,w)}}const p=new(x.count>=65535?dh:fh)(d,1);p.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function LM(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*a,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let M=0;for(let p=0;p<m;p++)M+=d[p];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function IM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function UM(n,e,t){const i=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),p===!0&&(v=3);let w=o.attributes.position.count*v,y=1;w>e.maxTextureSize&&(y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*y*4*h),g=new oh(R,w,y,h);g.type=_n,g.needsUpdate=!0;const T=v*4;for(let C=0;C<h;C++){const F=f[C],$=E[C],K=b[C],B=w*y*4*C;for(let Y=0;Y<F.count;Y++){const V=Y*T;x===!0&&(r.fromBufferAttribute(F,Y),R[B+V+0]=r.x,R[B+V+1]=r.y,R[B+V+2]=r.z,R[B+V+3]=0),M===!0&&(r.fromBufferAttribute($,Y),R[B+V+4]=r.x,R[B+V+5]=r.y,R[B+V+6]=r.z,R[B+V+7]=0),p===!0&&(r.fromBufferAttribute(K,Y),R[B+V+8]=r.x,R[B+V+9]=r.y,R[B+V+10]=r.z,R[B+V+11]=K.itemSize===4?r.w:1)}}d={count:h,texture:g,size:new Fe(w,y)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function NM(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const OM={[Xd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[Yd]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[Jd]:"NEUTRAL_TONE_MAPPING",[Kd]:"CUSTOM_TONE_MAPPING"};function FM(n,e,t,i,r,s){const a=new vn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new rr(e,t):void 0}),o=new vn(e,t,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new Gt;l.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const c=new Px({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new an(l,c),h=new Eh(-1,1,1,-1,0,1);let d=null,m=null,x=!1,M,p=null,f=[],E=!1;this.setSize=function(b,v){a.setSize(b,v),o.setSize(b,v);for(let w=0;w<f.length;w++){const y=f[w];y.setSize&&y.setSize(b,v)}},this.setEffects=function(b){f=b,E=f.length>0&&f[0].isRenderPass===!0;const v=a.width,w=a.height;for(let y=0;y<f.length;y++){const R=f[y];R.setSize&&R.setSize(v,w)}},this.begin=function(b,v){if(x||b.toneMapping===xn&&f.length===0)return!1;if(p=v,v!==null){const w=v.width,y=v.height;(a.width!==w||a.height!==y)&&this.setSize(w,y)}return E===!1&&b.setRenderTarget(a),M=b.toneMapping,b.toneMapping=xn,!0},this.hasRenderPass=function(){return E},this.end=function(b,v){b.toneMapping=M,x=!0;let w=a,y=o;for(let R=0;R<f.length;R++){const g=f[R];if(g.enabled!==!1&&(g.render(b,y,w,v),g.needsSwap!==!1)){const T=w;w=y,y=T}}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,c.defines={},Ge.getTransfer(d)===Qe&&(c.defines.SRGB_TRANSFER="");const R=OM[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(u,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Ah=new It,El=new rr(1,1),wh=new oh,Rh=new rx,Ch=new xh,Hu=[],Vu=[],Gu=new Float32Array(16),ku=new Float32Array(9),Wu=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Hu[r];if(s===void 0&&(s=new Float32Array(r),Hu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function GM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Wu.set(i),n.uniformMatrix2fv(this.addr,!1,Wu),yt(t,i)}}function kM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;ku.set(i),n.uniformMatrix3fv(this.addr,!1,ku),yt(t,i)}}function WM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),yt(t,i)}}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function KM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function jM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(El.compareFunction=t.isReversedDepthBuffer()?lc:oc,s=El):s=Ah,t.setTexture2D(e||s,r)}function eE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rh,r)}function tE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ch,r)}function nE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wh,r)}function iE(n){switch(n){case 5126:return BM;case 35664:return zM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return kM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return nE}}function rE(n,e){n.uniform1fv(this.addr,e)}function sE(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function aE(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function oE(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function lE(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cE(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uE(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fE(n,e){n.uniform1iv(this.addr,e)}function dE(n,e){n.uniform2iv(this.addr,e)}function hE(n,e){n.uniform3iv(this.addr,e)}function pE(n,e){n.uniform4iv(this.addr,e)}function mE(n,e){n.uniform1uiv(this.addr,e)}function _E(n,e){n.uniform2uiv(this.addr,e)}function gE(n,e){n.uniform3uiv(this.addr,e)}function xE(n,e){n.uniform4uiv(this.addr,e)}function vE(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=El:a=Ah;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function SE(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Rh,s[a])}function ME(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ch,s[a])}function EE(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||wh,s[a])}function yE(n){switch(n){case 5126:return rE;case 35664:return sE;case 35665:return aE;case 35666:return oE;case 35674:return lE;case 35675:return cE;case 35676:return uE;case 5124:case 35670:return fE;case 35667:case 35671:return dE;case 35668:case 35672:return hE;case 35669:case 35673:return pE;case 5125:return mE;case 36294:return _E;case 36295:return gE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return EE}}class bE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iE(t.type)}}class TE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yE(t.type)}}class AE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Xu(n,e){n.seq.push(e),n.map[e.id]=e}function wE(n,e,t){const i=n.name,r=i.length;for(lo.lastIndex=0;;){const s=lo.exec(i),a=lo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xu(t,c===void 0?new bE(o,n,e):new TE(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new AE(o),Xu(t,h)),t=h}}}class zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function qu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const RE=37297;let CE=0;function PE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Yu=new Ie;function DE(n){Ge._getMatrix(Yu,Ge.workingColorSpace,n);const e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(n)){case Zs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+PE(n.getShaderSource(e),o)}else return s}function LE(n,e){const t=DE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const IE={[Xd]:"Linear",[qd]:"Reinhard",[Yd]:"Cineon",[$d]:"ACESFilmic",[Zd]:"AgX",[Jd]:"Neutral",[Kd]:"Custom"};function UE(n,e){const t=IE[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cs=new N;function NE(){Ge.getLuminanceCoefficients(Cs);const n=Cs.x.toFixed(4),e=Cs.y.toFixed(4),t=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function FE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lr(n){return n!==""}function Ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(zE,VE)}const HE=new Map;function VE(n,e){let t=Be[e];if(t===void 0){const i=HE.get(e);if(i!==void 0)t=Be[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yl(t)}const GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(GE,kE)}function kE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WE={[Us]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function XE(n){return WE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qE={[yi]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function YE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $E={[ir]:"ENVMAP_MODE_REFRACTION"};function KE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$E[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZE={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[F0]:"ENVMAP_BLENDING_MIX",[B0]:"ENVMAP_BLENDING_ADD"};function JE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ZE[n.combine]||"ENVMAP_BLENDING_NONE"}function QE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=XE(t),c=YE(t),u=KE(t),h=JE(t),d=QE(t),m=OE(t),x=FE(s),M=r.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Lr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Lr).join(`
`),f.length>0&&(f+=`
`)):(p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),f=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Be.tonemapping_pars_fragment:"",t.toneMapping!==xn?UE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,LE("linearToOutputTexel",t.outputColorSpace),NE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=yl(a),a=Ku(a,t),a=Zu(a,t),o=yl(o),o=Ku(o,t),o=Zu(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+p+a,v=E+f+o,w=qu(r,r.VERTEX_SHADER,b),y=qu(r,r.FRAGMENT_SHADER,v);r.attachShader(M,w),r.attachShader(M,y),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",$=r.getShaderInfoLog(w)||"",K=r.getShaderInfoLog(y)||"",B=F.trim(),Y=$.trim(),V=K.trim();let Q=!0,te=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,w,y);else{const se=$u(r,w,"vertex"),ie=$u(r,y,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+se+`
`+ie)}else B!==""?De("WebGLProgram: Program Info Log:",B):(Y===""||V==="")&&(te=!1);te&&(C.diagnostics={runnable:Q,programLog:B,vertexShader:{log:Y,prefix:p},fragmentShader:{log:V,prefix:f}})}r.deleteShader(w),r.deleteShader(y),g=new zs(r,M),T=BE(r,M)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,RE)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CE++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=y,this}let ey=0;class ty{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ny(e),t.set(e,i)),i}}class ny{constructor(e){this.id=ey++,this.code=e,this.usedTimes=0}}function iy(n){return n===bi||n===Ys||n===$s}function ry(n,e,t,i,r,s){const a=new lh,o=new ty,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function M(g,T,P,C,F,$){const K=C.fog,B=F.geometry,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Q=e.get(g.envMap||Y,V),te=Q&&Q.mapping===ha?Q.image.height:null,se=m[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&De("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=ie!==void 0?ie.length:0;let Ve=0;B.morphAttributes.position!==void 0&&(Ve=1),B.morphAttributes.normal!==void 0&&(Ve=2),B.morphAttributes.color!==void 0&&(Ve=3);let je,We,W,ne;if(se){const Me=pn[se];je=Me.vertexShader,We=Me.fragmentShader}else{je=g.vertexShader,We=g.fragmentShader;const Me=o.getVertexShaderStage(g),ft=o.getFragmentShaderStage(g);o.update(g,Me,ft),W=Me.id,ne=ft.id}const ee=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,Ke=!!g.map,ze=!!g.matcap,Ze=!!Q,Oe=!!g.aoMap,fe=!!g.lightMap,Xe=!!g.bumpMap&&g.wireframe===!1,et=!!g.normalMap,st=!!g.displacementMap,vt=!!g.emissiveMap,ut=!!g.metalnessMap,at=!!g.roughnessMap,I=g.anisotropy>0,zt=g.clearcoat>0,Je=g.dispersion>0,A=g.iridescence>0,_=g.sheen>0,O=g.transmission>0,G=I&&!!g.anisotropyMap,X=zt&&!!g.clearcoatMap,re=zt&&!!g.clearcoatNormalMap,oe=zt&&!!g.clearcoatRoughnessMap,q=A&&!!g.iridescenceMap,J=A&&!!g.iridescenceThicknessMap,le=_&&!!g.sheenColorMap,be=_&&!!g.sheenRoughnessMap,de=!!g.specularMap,ce=!!g.specularColorMap,we=!!g.specularIntensityMap,Ce=O&&!!g.transmissionMap,Ue=O&&!!g.thicknessMap,L=!!g.gradientMap,ae=!!g.alphaMap,Z=g.alphaTest>0,ue=!!g.alphaHash,ge=!!g.extensions;let j=xn;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=n.toneMapping);const ye={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:je,fragmentShader:We,defines:g.defines,customVertexShaderID:W,customFragmentShaderID:ne,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ke,matcap:ze,envMap:Ze,envMapMode:Ze&&Q.mapping,envMapCubeUVHeight:te,aoMap:Oe,lightMap:fe,bumpMap:Xe,normalMap:et,displacementMap:st,emissiveMap:vt,normalMapObjectSpace:et&&g.normalMapType===V0,normalMapTangentSpace:et&&g.normalMapType===ou,packedNormalMap:et&&g.normalMapType===ou&&iy(g.normalMap.format),metalnessMap:ut,roughnessMap:at,anisotropy:I,anisotropyMap:G,clearcoat:zt,clearcoatMap:X,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,dispersion:Je,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:J,sheen:_,sheenColorMap:le,sheenRoughnessMap:be,specularMap:de,specularColorMap:ce,specularIntensityMap:we,transmission:O,transmissionMap:Ce,thicknessMap:Ue,gradientMap:L,opaque:g.transparent===!1&&g.blending===Ji&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:Z,alphaHash:ue,combine:g.combine,mapUv:Ke&&x(g.map.channel),aoMapUv:Oe&&x(g.aoMap.channel),lightMapUv:fe&&x(g.lightMap.channel),bumpMapUv:Xe&&x(g.bumpMap.channel),normalMapUv:et&&x(g.normalMap.channel),displacementMapUv:st&&x(g.displacementMap.channel),emissiveMapUv:vt&&x(g.emissiveMap.channel),metalnessMapUv:ut&&x(g.metalnessMap.channel),roughnessMapUv:at&&x(g.roughnessMap.channel),anisotropyMapUv:G&&x(g.anisotropyMap.channel),clearcoatMapUv:X&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(g.sheenRoughnessMap.channel),specularMapUv:de&&x(g.specularMap.channel),specularColorMapUv:ce&&x(g.specularColorMap.channel),specularIntensityMapUv:we&&x(g.specularIntensityMap.channel),transmissionMapUv:Ce&&x(g.transmissionMap.channel),thicknessMapUv:Ue&&x(g.thicknessMap.channel),alphaMapUv:ae&&x(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(et||I),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Ke||ae),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&et===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Pe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:j,decodeVideoTexture:Ke&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===Qe,decodeVideoTextureEmissive:vt&&g.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(g.emissiveMap.colorSpace)===Qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Rn,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&g.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(f(T,g),E(T,g),T.push(n.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function f(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function E(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function b(g){const T=m[g.type];let P;if(T){const C=pn[T];P=wx.clone(C.uniforms)}else P=g.uniforms;return P}function v(g,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new jE(n,T,g,r),c.push(P),u.set(T,P)),P}function w(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function y(g){o.remove(g)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:w,releaseShaderCache:y,programs:c,dispose:R}}function sy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ay(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,x,M,p,f){let E=n[e];return E===void 0?(E={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:p,group:f},n[e]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=x,E.materialVariant=a(d),E.groupOrder=M,E.renderOrder=d.renderOrder,E.z=p,E.group=f),e++,E}function l(d,m,x,M,p,f){const E=o(d,m,x,M,p,f);x.transmission>0?i.push(E):x.transparent===!0?r.push(E):t.push(E)}function c(d,m,x,M,p,f){const E=o(d,m,x,M,p,f);x.transmission>0?i.unshift(E):x.transparent===!0?r.unshift(E):t.unshift(E)}function u(d,m,x){t.length>1&&t.sort(d||ay),i.length>1&&i.sort(m||ju),r.length>1&&r.sort(m||ju),x&&(t.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,m=n.length;d<m;d++){const x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function oy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ef,n.set(i,[a])):r>=s.length?(a=new ef,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ly(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new $e};break;case"SpotLight":t={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uy=0;function fy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dy(n){const e=new ly,t=cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new pt,a=new pt;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,x=0,M=0,p=0,f=0,E=0,b=0,v=0,w=0,y=0,R=0;c.sort(fy);for(let T=0,P=c.length;T<P;T++){const C=c[T],F=C.color,$=C.intensity,K=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===bi?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*$,h+=F.g*$,d+=F.b*$;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],$);R++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,Q=t.get(C);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=C.shadow.matrix,E++}i.directional[m]=Y,m++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(F).multiplyScalar($),Y.distance=K,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[M]=Y;const V=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,V.updateMatrices(C),C.castShadow&&y++),i.spotLightMatrix[M]=V.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,i.spotShadow[M]=Q,i.spotShadowMap[M]=B,v++}M++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(F).multiplyScalar($),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=Y,p++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const V=C.shadow,Q=t.get(C);Q.shadowIntensity=V.intensity,Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,i.pointShadow[x]=Q,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=C.shadow.matrix,b++}i.point[x]=Y,x++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar($),Y.groundColor.copy(C.groundColor).multiplyScalar($),i.hemi[f]=Y,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const g=i.hash;(g.directionalLength!==m||g.pointLength!==x||g.spotLength!==M||g.rectAreaLength!==p||g.hemiLength!==f||g.numDirectionalShadows!==E||g.numPointShadows!==b||g.numSpotShadows!==v||g.numSpotMaps!==w||g.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+w-y,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,g.directionalLength=m,g.pointLength=x,g.spotLength=M,g.rectAreaLength=p,g.hemiLength=f,g.numDirectionalShadows=E,g.numPointShadows=b,g.numSpotShadows=v,g.numSpotMaps=w,g.numLightProbes=R,i.version=uy++)}function l(c,u){let h=0,d=0,m=0,x=0,M=0;const p=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const b=c[f];if(b.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),h++}else if(b.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const v=i.hemi[M];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:i}}function tf(n){const e=new dy(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function hy(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new tf(n),e.set(r,[o])):s>=a.length?(o=new tf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_y=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],gy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],nf=new pt,Rr=new N,co=new N;function xy(n,e,t){let i=new _h;const r=new Fe,s=new Fe,a=new ht,o=new Dx,l=new Lx,c={},u=t.maxTextureSize,h={[Jn]:Vt,[Vt]:Jn,[Rn]:Rn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:py,fragmentShader:my}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Gt;x.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new an(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let f=this.type;this.render=function(y,R,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===x0&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Us);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Dn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=f!==this.type;$&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(B=>B.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,B=y.length;K<B;K++){const Y=y[K],V=Y.shadow;if(V===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Q=V.getFrameExtents();r.multiply(Q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,V.mapSize.y=s.y));const te=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=te,V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Pr){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new vn(r.x,r.y,{format:bi,type:Un,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new rr(r.x,r.y,_n),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Nn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=At,V.map.depthTexture.magFilter=At}else Y.isPointLight?(V.map=new Th(r.x),V.map.depthTexture=new Tx(r.x,Mn)):(V.map=new vn(r.x,r.y),V.map.depthTexture=new rr(r.x,r.y,Mn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Nn,this.type===Us?(V.map.depthTexture.compareFunction=te?lc:oc,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=At,V.map.depthTexture.magFilter=At);V.camera.updateProjectionMatrix()}const se=V.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<se;ie++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(V.map),n.clear());const xe=V.getViewport(ie);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(a)}if(Y.isPointLight){const xe=V.camera,Ve=V.matrix,je=Y.distance||xe.far;je!==xe.far&&(xe.far=je,xe.updateProjectionMatrix()),Rr.setFromMatrixPosition(Y.matrixWorld),xe.position.copy(Rr),co.copy(xe.position),co.add(_y[ie]),xe.up.copy(gy[ie]),xe.lookAt(co),xe.updateMatrixWorld(),Ve.makeTranslation(-Rr.x,-Rr.y,-Rr.z),nf.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(nf,xe.coordinateSystem,xe.reversedDepth)}else V.updateMatrices(Y);i=V.getFrustum(),v(R,g,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Pr&&E(V,g),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(T,P,C)};function E(y,R){const g=e.update(M);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new vn(r.x,r.y,{format:bi,type:Un})),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(R,null,g,d,M,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(R,null,g,m,M,null)}function b(y,R,g,T){let P=null;const C=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)P=C;else if(P=g.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,$=R.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let B=K[$];B===void 0&&(B=P.clone(),K[$]=B,R.addEventListener("dispose",w)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Pr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=g}return P}function v(y,R,g,T,P){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===Pr)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);const $=e.update(y),K=y.material;if(Array.isArray(K)){const B=$.groups;for(let Y=0,V=B.length;Y<V;Y++){const Q=B[Y],te=K[Q.materialIndex];if(te&&te.visible){const se=b(y,te,T,P);y.onBeforeShadow(n,y,R,g,$,se,Q),n.renderBufferDirect(g,null,$,se,y,Q),y.onAfterShadow(n,y,R,g,$,se,Q)}}}else if(K.visible){const B=b(y,K,T,P);y.onBeforeShadow(n,y,R,g,$,B,null),n.renderBufferDirect(g,null,$,B,y,null),y.onAfterShadow(n,y,R,g,$,B,null)}}const F=y.children;for(let $=0,K=F.length;$<K;$++)v(F[$],R,g,T,P)}function w(y){y.target.removeEventListener("dispose",w);for(const g in c){const T=c[g],P=y.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function vy(n,e){function t(){let L=!1;const ae=new ht;let Z=null;const ue=new ht(0,0,0,0);return{setMask:function(ge){Z!==ge&&!L&&(n.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){L=ge},setClear:function(ge,j,ye,Me,ft){ft===!0&&(ge*=Me,j*=Me,ye*=Me),ae.set(ge,j,ye,Me),ue.equals(ae)===!1&&(n.clearColor(ge,j,ye,Me),ue.copy(ae))},reset:function(){L=!1,Z=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,Z=null,ue=null,ge=null;return{setReversed:function(j){if(ae!==j){const ye=e.get("EXT_clip_control");j?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ae=j;const Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return ae},setTest:function(j){j?ee(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(j){Z!==j&&!L&&(n.depthMask(j),Z=j)},setFunc:function(j){if(ae&&(j=J0[j]),ue!==j){switch(j){case Uo:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Oo:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case zo:n.depthFunc(n.GREATER);break;case Ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=j}},setLocked:function(j){L=j},setClear:function(j){ge!==j&&(ge=j,ae&&(j=1-j),n.clearDepth(j))},reset:function(){L=!1,Z=null,ue=null,ge=null,ae=!1}}}function r(){let L=!1,ae=null,Z=null,ue=null,ge=null,j=null,ye=null,Me=null,ft=null;return{setTest:function(ot){L||(ot?ee(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!L&&(n.stencilMask(ot),ae=ot)},setFunc:function(ot,ln,cn){(Z!==ot||ue!==ln||ge!==cn)&&(n.stencilFunc(ot,ln,cn),Z=ot,ue=ln,ge=cn)},setOp:function(ot,ln,cn){(j!==ot||ye!==ln||Me!==cn)&&(n.stencilOp(ot,ln,cn),j=ot,ye=ln,Me=cn)},setLocked:function(ot){L=ot},setClear:function(ot){ft!==ot&&(n.clearStencil(ot),ft=ot)},reset:function(){L=!1,ae=null,Z=null,ue=null,ge=null,j=null,ye=null,Me=null,ft=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},m=new WeakMap,x=[],M=null,p=!1,f=null,E=null,b=null,v=null,w=null,y=null,R=null,g=new $e(0,0,0),T=0,P=!1,C=null,F=null,$=null,K=null,B=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=Q>=1):te.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=Q>=2);let se=null,ie={};const xe=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),je=new ht().fromArray(xe),We=new ht().fromArray(Ve);function W(L,ae,Z,ue){const ge=new Uint8Array(4),j=n.createTexture();n.bindTexture(L,j),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<Z;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ae+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return j}const ne={};ne[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(nr),Xe(!1),et(ru),ee(n.CULL_FACE),Oe(Dn);function ee(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Pe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Le(L,ae){return d[L]!==ae?(n.bindFramebuffer(L,ae),d[L]=ae,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(L,ae){let Z=x,ue=!1;if(L){Z=m.get(ae),Z===void 0&&(Z=[],m.set(ae,Z));const ge=L.textures;if(Z.length!==ge.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let j=0,ye=ge.length;j<ye;j++)Z[j]=n.COLOR_ATTACHMENT0+j;Z.length=ge.length,ue=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Z)}function Ke(L){return M!==L?(n.useProgram(L),M=L,!0):!1}const ze={[ai]:n.FUNC_ADD,[S0]:n.FUNC_SUBTRACT,[M0]:n.FUNC_REVERSE_SUBTRACT};ze[E0]=n.MIN,ze[y0]=n.MAX;const Ze={[b0]:n.ZERO,[T0]:n.ONE,[A0]:n.SRC_COLOR,[Lo]:n.SRC_ALPHA,[L0]:n.SRC_ALPHA_SATURATE,[P0]:n.DST_COLOR,[R0]:n.DST_ALPHA,[w0]:n.ONE_MINUS_SRC_COLOR,[Io]:n.ONE_MINUS_SRC_ALPHA,[D0]:n.ONE_MINUS_DST_COLOR,[C0]:n.ONE_MINUS_DST_ALPHA,[I0]:n.CONSTANT_COLOR,[U0]:n.ONE_MINUS_CONSTANT_COLOR,[N0]:n.CONSTANT_ALPHA,[O0]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(L,ae,Z,ue,ge,j,ye,Me,ft,ot){if(L===Dn){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(ee(n.BLEND),p=!0),L!==v0){if(L!==f||ot!==P){if((E!==ai||w!==ai)&&(n.blendEquation(n.FUNC_ADD),E=ai,w=ai),ot)switch(L){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case su:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}b=null,v=null,y=null,R=null,g.set(0,0,0),T=0,f=L,P=ot}return}ge=ge||ae,j=j||Z,ye=ye||ue,(ae!==E||ge!==w)&&(n.blendEquationSeparate(ze[ae],ze[ge]),E=ae,w=ge),(Z!==b||ue!==v||j!==y||ye!==R)&&(n.blendFuncSeparate(Ze[Z],Ze[ue],Ze[j],Ze[ye]),b=Z,v=ue,y=j,R=ye),(Me.equals(g)===!1||ft!==T)&&(n.blendColor(Me.r,Me.g,Me.b,ft),g.copy(Me),T=ft),f=L,P=!1}function fe(L,ae){L.side===Rn?Pe(n.CULL_FACE):ee(n.CULL_FACE);let Z=L.side===Vt;ae&&(Z=!Z),Xe(Z),L.blending===Ji&&L.transparent===!1?Oe(Dn):Oe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){C!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),C=L)}function et(L){L!==_0?(ee(n.CULL_FACE),L!==F&&(L===ru?n.cullFace(n.BACK):L===g0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),F=L}function st(L){L!==$&&(V&&n.lineWidth(L),$=L)}function vt(L,ae,Z){L?(ee(n.POLYGON_OFFSET_FILL),(K!==ae||B!==Z)&&(K=ae,B=Z,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,Z))):Pe(n.POLYGON_OFFSET_FILL)}function ut(L){L?ee(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function at(L){L===void 0&&(L=n.TEXTURE0+Y-1),se!==L&&(n.activeTexture(L),se=L)}function I(L,ae,Z){Z===void 0&&(se===null?Z=n.TEXTURE0+Y-1:Z=se);let ue=ie[Z];ue===void 0&&(ue={type:void 0,texture:void 0},ie[Z]=ue),(ue.type!==L||ue.texture!==ae)&&(se!==Z&&(n.activeTexture(Z),se=Z),n.bindTexture(L,ae||ne[L]),ue.type=L,ue.texture=ae)}function zt(){const L=ie[se];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function _(){try{n.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function O(){try{n.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function q(){try{n.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function J(){try{n.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function le(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function be(L,ae){h[L]!==ae&&(n.pixelStorei(L,ae),h[L]=ae)}function de(L){je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function ce(L){We.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function we(L,ae){let Z=c.get(ae);Z===void 0&&(Z=new WeakMap,c.set(ae,Z));let ue=Z.get(L);ue===void 0&&(ue=n.getUniformBlockIndex(ae,L.name),Z.set(L,ue))}function Ce(L,ae){const ue=c.get(ae).get(L);l.get(ae)!==ue&&(n.uniformBlockBinding(ae,ue,L.__bindingPointIndex),l.set(ae,ue))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},se=null,ie={},d={},m=new WeakMap,x=[],M=null,p=!1,f=null,E=null,b=null,v=null,w=null,y=null,R=null,g=new $e(0,0,0),T=0,P=!1,C=null,F=null,$=null,K=null,B=null,je.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Pe,bindFramebuffer:Le,drawBuffers:Re,useProgram:Ke,setBlending:Oe,setMaterial:fe,setFlipSided:Xe,setCullFace:et,setLineWidth:st,setPolygonOffset:vt,setScissorTest:ut,activeTexture:at,bindTexture:I,unbindTexture:zt,compressedTexImage2D:Je,compressedTexImage3D:A,texImage2D:q,texImage3D:J,pixelStorei:be,getParameter:le,updateUBOMapping:we,uniformBlockBinding:Ce,texStorage2D:re,texStorage3D:oe,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:de,viewport:ce,reset:Ue}}function Sy(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,h=new Set;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return x?new OffscreenCanvas(A,_):Qs("canvas")}function p(A,_,O){let G=1;const X=Je(A);if((X.width>O||X.height>O)&&(G=O/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(G*X.width),oe=Math.floor(G*X.height);d===void 0&&(d=M(re,oe));const q=_?M(re,oe):d;return q.width=re,q.height=oe,q.getContext("2d").drawImage(A,0,0,re,oe),De("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+oe+")."),q}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function f(A){return A.generateMipmaps}function E(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,_,O,G,X,re=!1){if(A!==null){if(n[A]!==void 0)return n[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8),O===n.UNSIGNED_SHORT&&oe&&(q=oe.R16_EXT),O===n.SHORT&&oe&&(q=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),_===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8),O===n.UNSIGNED_SHORT&&oe&&(q=oe.RG16_EXT),O===n.SHORT&&oe&&(q=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&oe&&(q=oe.RGB16_EXT),O===n.SHORT&&oe&&(q=oe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),_===n.RGBA){const J=re?Zs:Ge.getTransfer(X);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=J===Qe?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&oe&&(q=oe.RGBA16_EXT),O===n.SHORT&&oe&&(q=oe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function w(A,_){let O;return A?_===null||_===Mn||_===Hr?O=n.DEPTH24_STENCIL8:_===_n?O=n.DEPTH32F_STENCIL8:_===zr&&(O=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mn||_===Hr?O=n.DEPTH_COMPONENT24:_===_n?O=n.DEPTH_COMPONENT32F:_===zr&&(O=n.DEPTH_COMPONENT16),O}function y(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function g(A){const _=A.target;_.removeEventListener("dispose",g),C(_)}function T(A){const _=i.get(A);if(_.__webglInit===void 0)return;const O=A.source,G=m.get(O);if(G){const X=G[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(A),Object.keys(G).length===0&&m.delete(O)}i.remove(A)}function P(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const O=A.source,G=m.get(O);delete G[_.__cacheKey],a.memory.textures--}function C(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let X=0;X<_.__webglFramebuffer[G].length;X++)n.deleteFramebuffer(_.__webglFramebuffer[G][X]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let G=0,X=O.length;G<X;G++){const re=i.get(O[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(A)}let F=0;function $(){F=0}function K(){return F}function B(A){F=A}function Y(){const A=F;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Q(A,_){const O=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const G=A.image;if(G===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function te(A,_){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Pe(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function se(A,_){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Pe(O,A,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function ie(A,_){const O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Le(O,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const xe={[Vo]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},Ve={[At]:n.NEAREST,[z0]:n.NEAREST_MIPMAP_NEAREST,[is]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},je={[G0]:n.NEVER,[Y0]:n.ALWAYS,[k0]:n.LESS,[oc]:n.LEQUAL,[W0]:n.EQUAL,[lc]:n.GEQUAL,[X0]:n.GREATER,[q0]:n.NOTEQUAL};function We(A,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===La||_.magFilter===is||_.magFilter===ui||_.minFilter===Dt||_.minFilter===La||_.minFilter===is||_.minFilter===ui)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,xe[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,xe[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,xe[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ve[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ve[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,je[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===At||_.minFilter!==is&&_.minFilter!==ui||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function W(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const G=_.source;let X=m.get(G);X===void 0&&(X={},m.set(G,X));const re=V(_);if(re!==A.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[re].usedTimes++;const oe=X[A.__cacheKey];oe!==void 0&&(X[A.__cacheKey].usedTimes--,oe.usedTimes===0&&P(_)),A.__cacheKey=re,A.__webglTexture=X[re].texture}return O}function ne(A,_,O){return Math.floor(Math.floor(A/O)/_)}function ee(A,_,O,G){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{re.sort((be,de)=>be.start-de.start);let oe=0;for(let be=1;be<re.length;be++){const de=re[oe],ce=re[be],we=de.start+de.count,Ce=ne(ce.start,_.width,4),Ue=ne(de.start,_.width,4);ce.start<=we+1&&Ce===Ue&&ne(ce.start+ce.count-1,_.width,4)===Ce?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,re[oe]=ce)}re.length=oe+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let be=0,de=re.length;be<de;be++){const ce=re[be],we=Math.floor(ce.start/4),Ce=Math.ceil(ce.count/4),Ue=we%_.width,L=Math.floor(we/_.width),ae=Ce,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ue,L,ae,Z,O,G,_.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Pe(A,_,O){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const X=W(A,_),re=_.source;t.bindTexture(G,A.__webglTexture,n.TEXTURE0+O);const oe=i.get(re);if(re.version!==oe.__version||X===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=Ge.getPrimaries(Ge.workingColorSpace),ue=_.colorSpace===qn?null:Ge.getPrimaries(_.colorSpace),ge=_.colorSpace===qn||Z===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let J=p(_.image,!1,r.maxTextureSize);J=zt(_,J);const le=s.convert(_.format,_.colorSpace),be=s.convert(_.type);let de=v(_.internalFormat,le,be,_.normalized,_.colorSpace,_.isVideoTexture);We(G,_);let ce;const we=_.mipmaps,Ce=_.isVideoTexture!==!0,Ue=oe.__version===void 0||X===!0,L=re.dataReady,ae=y(_,J);if(_.isDepthTexture)de=w(_.format===fi,_.type),Ue&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,de,J.width,J.height,0,le,be,null));else if(_.isDataTexture)if(we.length>0){Ce&&Ue&&t.texStorage2D(n.TEXTURE_2D,ae,de,we[0].width,we[0].height);for(let Z=0,ue=we.length;Z<ue;Z++)ce=we[Z],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(n.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,be,ce.data);_.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(n.TEXTURE_2D,ae,de,J.width,J.height),L&&ee(_,J,le,be)):t.texImage2D(n.TEXTURE_2D,0,de,J.width,J.height,0,le,be,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,de,we[0].width,we[0].height,J.depth);for(let Z=0,ue=we.length;Z<ue;Z++)if(ce=we[Z],_.format!==rn)if(le!==null)if(Ce){if(L)if(_.layerUpdates.size>0){const ge=Iu(ce.width,ce.height,_.format,_.type);for(const j of _.layerUpdates){const ye=ce.data.subarray(j*ge/ce.data.BYTES_PER_ELEMENT,(j+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,j,ce.width,ce.height,1,le,ye)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,be,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,le,be,ce.data)}else{Ce&&Ue&&t.texStorage2D(n.TEXTURE_2D,ae,de,we[0].width,we[0].height);for(let Z=0,ue=we.length;Z<ue;Z++)ce=we[Z],_.format!==rn?le!==null?Ce?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,de,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(n.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,be,ce.data)}else if(_.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,de,J.width,J.height,J.depth),L)if(_.layerUpdates.size>0){const Z=Iu(J.width,J.height,_.format,_.type);for(const ue of _.layerUpdates){const ge=J.data.subarray(ue*Z/J.data.BYTES_PER_ELEMENT,(ue+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,J.width,J.height,1,le,be,ge)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,be,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,le,be,J.data);else if(_.isData3DTexture)Ce?(Ue&&t.texStorage3D(n.TEXTURE_3D,ae,de,J.width,J.height,J.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,be,J.data)):t.texImage3D(n.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,le,be,J.data);else if(_.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(n.TEXTURE_2D,ae,de,J.width,J.height);else{let Z=J.width,ue=J.height;for(let ge=0;ge<ae;ge++)t.texImage2D(n.TEXTURE_2D,ge,de,Z,ue,0,le,be,null),Z>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),h.add(_),Z.onpaint=ue=>{const ge=ue.changedElements;for(const j of h)ge.includes(j.image)&&(j.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{const ge=n.RGBA,j=n.RGBA,ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,j,ye,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ce&&Ue){const Z=Je(we[0]);t.texStorage2D(n.TEXTURE_2D,ae,de,Z.width,Z.height)}for(let Z=0,ue=we.length;Z<ue;Z++)ce=we[Z],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,le,be,ce):t.texImage2D(n.TEXTURE_2D,Z,de,le,be,ce);_.generateMipmaps=!1}else if(Ce){if(Ue){const Z=Je(J);t.texStorage2D(n.TEXTURE_2D,ae,de,Z.width,Z.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,be,J)}else t.texImage2D(n.TEXTURE_2D,0,de,le,be,J);f(_)&&E(G),oe.__version=re.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Le(A,_,O){if(_.image.length!==6)return;const G=W(A,_),X=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const re=i.get(X);if(X.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+O);const oe=Ge.getPrimaries(Ge.workingColorSpace),q=_.colorSpace===qn?null:Ge.getPrimaries(_.colorSpace),J=_.colorSpace===qn||oe===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!le&&!be?de[j]=p(_.image[j],!0,r.maxCubemapSize):de[j]=be?_.image[j].image:_.image[j],de[j]=zt(_,de[j]);const ce=de[0],we=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type),Ue=v(_.internalFormat,we,Ce,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ae=re.__version===void 0||G===!0,Z=X.dataReady;let ue=y(_,ce);We(n.TEXTURE_CUBE_MAP,_);let ge;if(le){L&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ue,ce.width,ce.height);for(let j=0;j<6;j++){ge=de[j].mipmaps;for(let ye=0;ye<ge.length;ye++){const Me=ge[ye];_.format!==rn?we!==null?L?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,Ue,Me.width,Me.height,0,Me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,Me.width,Me.height,we,Ce,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,Ue,Me.width,Me.height,0,we,Ce,Me.data)}}}else{if(ge=_.mipmaps,L&&ae){ge.length>0&&ue++;const j=Je(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(be){L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,we,Ce,de[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,de[j].width,de[j].height,0,we,Ce,de[j].data);for(let ye=0;ye<ge.length;ye++){const ft=ge[ye].image[j].image;L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,ft.width,ft.height,we,Ce,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,Ue,ft.width,ft.height,0,we,Ce,ft.data)}}else{L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,Ce,de[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,we,Ce,de[j]);for(let ye=0;ye<ge.length;ye++){const Me=ge[ye];L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,we,Ce,Me.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,Ue,we,Ce,Me.image[j])}}}f(_)&&E(n.TEXTURE_CUBE_MAP),re.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Re(A,_,O,G,X,re){const oe=s.convert(O.format,O.colorSpace),q=s.convert(O.type),J=v(O.internalFormat,oe,q,O.normalized,O.colorSpace),le=i.get(_),be=i.get(O);if(be.__renderTarget=_,!le.__hasExternalTextures){const de=Math.max(1,_.width>>re),ce=Math.max(1,_.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,J,de,ce,_.depth,0,oe,q,null):t.texImage2D(X,re,J,de,ce,0,oe,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),at(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,be.__webglTexture,0,ut(_)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,be.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(A,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const G=_.depthTexture,X=G&&G.isDepthTexture?G.type:null,re=w(_.stencilBuffer,X),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;at(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(_),re,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(_),re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,A)}else{const G=_.textures;for(let X=0;X<G.length;X++){const re=G[X],oe=s.convert(re.format,re.colorSpace),q=s.convert(re.type),J=v(re.internalFormat,oe,q,re.normalized,re.colorSpace);at(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(_),J,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(_),J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(A,_,O){const G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),We(n.TEXTURE_CUBE_MAP,_.depthTexture);const le=s.convert(_.depthTexture.format),be=s.convert(_.depthTexture.type);let de;_.depthTexture.format===Nn?de=n.DEPTH_COMPONENT24:_.depthTexture.format===fi&&(de=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,_.width,_.height,0,le,be,null)}}else Q(_.depthTexture,0);const re=X.__webglTexture,oe=ut(_),q=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,J=_.depthTexture.format===fi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)at(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,re,0);else if(_.depthTexture.format===fi)at(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(A){const _=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)ze(_.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?ze(_.__webglFramebuffer[0],A,0):ze(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Ke(_.__webglDepthbuffer[G],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ke(_.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(A,_,O){const G=i.get(A);_!==void 0&&Re(G.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ze(A)}function fe(A){const _=A.texture,O=i.get(A),G=i.get(_);A.addEventListener("dispose",g);const X=A.textures,re=A.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),re){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[q][J]=n.createFramebuffer()}else O.__webglFramebuffer[q]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)O.__webglFramebuffer[q]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(oe)for(let q=0,J=X.length;q<J;q++){const le=i.get(X[q]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&at(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const J=X[q];O.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[q]);const le=s.convert(J.format,J.colorSpace),be=s.convert(J.type),de=v(J.internalFormat,le,be,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ce=ut(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,de,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,O.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),We(n.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Re(O.__webglFramebuffer[q][J],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else Re(O.__webglFramebuffer[q],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(_)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let q=0,J=X.length;q<J;q++){const le=X[q],be=i.get(le);let de=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,be.__webglTexture),We(de,le),Re(O.__webglFramebuffer,A,le,n.COLOR_ATTACHMENT0+q,de,0),f(le)&&E(de)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),We(q,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Re(O.__webglFramebuffer[J],A,_,n.COLOR_ATTACHMENT0,q,J);else Re(O.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,q,0);f(_)&&E(q),t.unbindTexture()}A.depthBuffer&&Ze(A)}function Xe(A){const _=A.textures;for(let O=0,G=_.length;O<G;O++){const X=_[O];if(f(X)){const re=b(A),oe=i.get(X).__webglTexture;t.bindTexture(re,oe),E(re),t.unbindTexture()}}}const et=[],st=[];function vt(A){if(A.samples>0){if(at(A)===!1){const _=A.textures,O=A.width,G=A.height;let X=n.COLOR_BUFFER_BIT;const re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(A),q=_.length>1;if(q)for(let le=0;le<_.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<_.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const be=i.get(_[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,O,G,0,0,O,G,X,n.NEAREST),l===!0&&(et.length=0,st.length=0,et.push(n.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(et.push(re),st.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,st)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<_.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const be=i.get(_[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ut(A){return Math.min(r.maxSamples,A.samples)}function at(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function zt(A,_){const O=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ks&&O!==qn&&(Ge.getTransfer(O)===Qe?(G!==rn||X!==Zt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",O)),_}function Je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.getTextureUnits=K,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=te,this.setTexture3D=se,this.setTextureCube=ie,this.rebindTextures=Oe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function My(n,e){function t(i,r=qn){let s;const a=Ge.getTransfer(r);if(i===Zt)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jd)return n.BYTE;if(i===eh)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===ih)return n.ALPHA;if(i===rh)return n.RGB;if(i===rn)return n.RGBA;if(i===Nn)return n.DEPTH_COMPONENT;if(i===fi)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===rc)return n.RED_INTEGER;if(i===bi)return n.RG;if(i===sc)return n.RG_INTEGER;if(i===ac)return n.RGBA_INTEGER;if(i===Ns||i===Os||i===Fs||i===Bs)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ko||i===Wo||i===Xo||i===qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yo||i===$o||i===Ko||i===Zo||i===Jo||i===Ys||i===Qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yo||i===$o)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ko)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zo)return s.COMPRESSED_R11_EAC;if(i===Jo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ys)return s.COMPRESSED_RG11_EAC;if(i===Qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jo||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===el)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===pl||i===ml)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hl)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_l||i===gl||i===$s||i===xl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_l)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
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

}`;class by{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:Ey,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ty extends wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,x=null;const M=typeof XRWebGLBinding<"u",p=new by,f={},E=t.getContextAttributes();let b=null,v=null;const w=[],y=[],R=new Fe;let g=null;const T=new qt;T.viewport=new ht;const P=new qt;P.viewport=new ht;const C=[T,P],F=new Ux;let $=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=w[W];return ne===void 0&&(ne=new Ha,w[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=w[W];return ne===void 0&&(ne=new Ha,w[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=w[W];return ne===void 0&&(ne=new Ha,w[W]=ne),ne.getHandSpace()};function B(W){const ne=y.indexOf(W.inputSource);if(ne===-1)return;const ee=w[ne];ee!==void 0&&(ee.update(W.inputSource,W.frame,c||a),ee.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let W=0;W<w.length;W++){const ne=y[W];ne!==null&&(y[W]=null,w[W].disconnect(ne))}$=null,K=null,p.reset();for(const W in f)delete f[W];e.setRenderTarget(b),m=null,d=null,h=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Pe=null,Le=null;E.depth&&(Le=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?fi:Nn,Pe=E.stencil?Hr:Mn);const Re={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new vn(d.textureWidth,d.textureHeight,{format:rn,type:Zt,depthTexture:new rr(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new vn(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(W){for(let ne=0;ne<W.removed.length;ne++){const ee=W.removed[ne],Pe=y.indexOf(ee);Pe>=0&&(y[Pe]=null,w[Pe].disconnect(ee))}for(let ne=0;ne<W.added.length;ne++){const ee=W.added[ne];let Pe=y.indexOf(ee);if(Pe===-1){for(let Re=0;Re<w.length;Re++)if(Re>=y.length){y.push(ee),Pe=Re;break}else if(y[Re]===null){y[Re]=ee,Pe=Re;break}if(Pe===-1)break}const Le=w[Pe];Le&&Le.connect(ee)}}const Q=new N,te=new N;function se(W,ne,ee){Q.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(ee.matrixWorld);const Pe=Q.distanceTo(te),Le=ne.projectionMatrix.elements,Re=ee.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),ze=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],Oe=(Le[9]-1)/Le[5],fe=(Le[8]-1)/Le[0],Xe=(Re[8]+1)/Re[0],et=Ke*fe,st=Ke*Xe,vt=Pe/(-fe+Xe),ut=vt*-fe;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ut),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Le[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const at=Ke+vt,I=ze+vt,zt=et-ut,Je=st+(Pe-ut),A=Ze*ze/I*at,_=Oe*ze/I*at;W.projectionMatrix.makePerspective(zt,Je,A,_,at,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ie(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,ee=W.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),F.near=P.near=T.near=ne,F.far=P.far=T.far=ee,($!==F.near||K!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),$=F.near,K=F.far),F.layers.mask=W.layers.mask|6,T.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Pe=W.parent,Le=F.cameras;ie(F,Pe);for(let Re=0;Re<Le.length;Re++)ie(Le[Re],Pe);Le.length===2?se(F,T,P):F.projectionMatrix.copy(T.projectionMatrix),xe(W,F,Pe)};function xe(W,ne,ee){ee===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(W){return f[W]};let Ve=null;function je(W,ne){if(u=ne.getViewerPose(c||a),x=ne,u!==null){const ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Pe=!1;ee.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let ze=0;ze<ee.length;ze++){const Ze=ee[ze];let Oe=null;if(m!==null)Oe=m.getViewport(Ze);else{const Xe=h.getViewSubImage(d,Ze);Oe=Xe.viewport,ze===0&&(e.setRenderTargetTextures(v,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(v))}let fe=C[ze];fe===void 0&&(fe=new qt,fe.layers.enable(ze),fe.viewport=new ht,C[ze]=fe),fe.matrix.fromArray(Ze.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ze.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ze===0&&(F.matrix.copy(fe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(fe)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const ze=h.getDepthInformation(ee[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(Le&&Le.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<ee.length;ze++){const Ze=ee[ze].camera;if(Ze){let Oe=f[Ze];Oe||(Oe=new vh,f[Ze]=Oe);const fe=h.getCameraImage(Ze);Oe.sourceTexture=fe}}}}for(let ee=0;ee<w.length;ee++){const Pe=y[ee],Le=w[ee];Pe!==null&&Le!==void 0&&Le.update(Pe,ne,c||a)}Ve&&Ve(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const We=new yh;We.setAnimationLoop(je),this.setAnimationLoop=function(W){Ve=W},this.dispose=function(){}}}const Ay=new pt,Ph=new Ie;Ph.set(-1,0,0,0,1,0,0,0,1);function wy(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Sh(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,b,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),M(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Vt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Vt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),b=E.envMap,v=E.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ph),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ry(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){const y=w.program;i.uniformBlockBinding(v,y)}function c(v,w){let y=r[v.id];y===void 0&&(p(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",E));const R=w.program;i.updateUBOMapping(v,R);const g=e.render.frame;s[v.id]!==g&&(d(v),s[v.id]=g)}function u(v){const w=h();v.__bindingPointIndex=w;const y=n.createBuffer(),R=v.__size,g=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const w=r[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let g=0,T=y.length;g<T;g++){const P=y[g];if(Array.isArray(P))for(let C=0,F=P.length;C<F;C++)m(P[C],g,C,R);else m(P,g,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,w,y,R){if(M(v,w,y,R)===!0){const g=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let C=0;C<T.length;C++){const F=T[C],$=f(F);x(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,v.__data)}}function x(v,w,y){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,y)}function M(v,w,y,R){const g=v.value,T=w+"_"+y;if(R[T]===void 0)return typeof g=="number"||typeof g=="boolean"?R[T]=g:ArrayBuffer.isView(g)?R[T]=g.slice():R[T]=g.clone(),!0;{const P=R[T];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return R[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function p(v){const w=v.uniforms;let y=0;const R=16;for(let T=0,P=w.length;T<P;T++){const C=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,$=C.length;F<$;F++){const K=C[F],B=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,V=B.length;Y<V;Y++){const Q=B[Y],te=f(Q),se=y%R,ie=se%te.boundary,xe=se+ie;y+=ie,xe!==0&&R-xe<te.storage&&(y+=R-xe),K.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=te.storage}}}const g=y%R;return g>0&&(y+=R-g),v.__size=y,v.__cache={},this}function f(v){const w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),w}function E(v){const w=v.target;w.removeEventListener("dispose",E);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function b(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:b}}const Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function Py(){return dn===null&&(dn=new vx(Cy,16,16,bi,Un),dn.name="DFG_LUT",dn.minFilter=Dt,dn.magFilter=Dt,dn.wrapS=Cn,dn.wrapT=Cn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class Dh{constructor(e={}){const{canvas:t=K0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const M=m,p=new Set([ac,sc,rc]),f=new Set([Zt,Mn,zr,Hr,nc,ic]),E=new Uint32Array(4),b=new Int32Array(4),v=new N;let w=null,y=null;const R=[],g=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,F=null,$=null,K=null,B=null;this._outputColorSpace=Kt;let Y=0,V=0,Q=null,te=-1,se=null;const ie=new ht,xe=new ht;let Ve=null;const je=new $e(0);let We=0,W=t.width,ne=t.height,ee=1,Pe=null,Le=null;const Re=new ht(0,0,W,ne),Ke=new ht(0,0,W,ne);let ze=!1;const Ze=new _h;let Oe=!1,fe=!1;const Xe=new pt,et=new N,st=new ht,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function at(){return Q===null?ee:1}let I=i;function zt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",ln,!1),I===null){const U="webgl2";if(I=zt(U,S),I===null)throw zt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw qe("WebGLRenderer: "+S.message),S}let Je,A,_,O,G,X,re,oe,q,J,le,be,de,ce,we,Ce,Ue,L,ae,Z,ue,ge,j;function ye(){Je=new PM(I),Je.init(),ue=new My(I,Je),A=new EM(I,Je,e,ue),_=new vy(I,Je),A.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),$=I.createFramebuffer(),K=I.createFramebuffer(),B=I.createFramebuffer(),O=new IM(I),G=new sy,X=new Sy(I,Je,_,G,A,ue,O),re=new CM(P),oe=new Fx(I),ge=new SM(I,oe),q=new DM(I,oe,O,ge),J=new NM(I,q,oe,ge,O),L=new UM(I,A,X),we=new yM(G),le=new ry(P,re,Je,A,ge,we),be=new wy(P,G),de=new oy,ce=new hy(Je),Ue=new vM(P,re,_,J,x,l),Ce=new xy(P,J,A),j=new Ry(I,O,A,_),ae=new MM(I,Je,O),Z=new LM(I,Je,O),O.programs=le.programs,P.capabilities=A,P.extensions=Je,P.properties=G,P.renderLists=de,P.shadowMap=Ce,P.state=_,P.info=O}ye(),M!==Zt&&(T=new FM(M,t.width,t.height,o,r,s));const Me=new Ty(P,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(W,ne,!1))},this.getSize=function(S){return S.set(W,ne)},this.setSize=function(S,U,k=!0){if(Me.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,ne=U,t.width=Math.floor(S*ee),t.height=Math.floor(U*ee),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*ee,ne*ee).floor()},this.setDrawingBufferSize=function(S,U,k){W=S,ne=U,ee=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(M===Zt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,U,k,z){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,U,k,z),_.viewport(ie.copy(Re).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(Ke)},this.setScissor=function(S,U,k,z){S.isVector4?Ke.set(S.x,S.y,S.z,S.w):Ke.set(S,U,k,z),_.scissor(xe.copy(Ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(S){_.setScissorTest(ze=S)},this.setOpaqueSort=function(S){Pe=S},this.setTransparentSort=function(S){Le=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,k=!0){let z=0;if(S){let H=!1;if(Q!==null){const _e=Q.texture.format;H=p.has(_e)}if(H){const _e=Q.texture.type,Se=f.has(_e),me=Ue.getClearColor(),Ee=Ue.getClearAlpha(),Te=me.r,Ne=me.g,He=me.b;Se?(E[0]=Te,E[1]=Ne,E[2]=He,E[3]=Ee,I.clearBufferuiv(I.COLOR,0,E)):(b[0]=Te,b[1]=Ne,b[2]=He,b[3]=Ee,I.clearBufferiv(I.COLOR,0,b))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),Ue.dispose(),de.dispose(),ce.dispose(),G.dispose(),re.dispose(),J.dispose(),ge.dispose(),j.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",vc),Me.removeEventListener("sessionend",Sc),jn.stop()};function ft(S){S.preventDefault(),js("WebGLRenderer: Context Lost."),C=!0}function ot(){js("WebGLRenderer: Context Restored."),C=!1;const S=O.autoReset,U=Ce.enabled,k=Ce.autoUpdate,z=Ce.needsUpdate,H=Ce.type;ye(),O.autoReset=S,Ce.enabled=U,Ce.autoUpdate=k,Ce.needsUpdate=z,Ce.type=H}function ln(S){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function cn(S){const U=S.target;U.removeEventListener("dispose",cn),Lh(U)}function Lh(S){Ih(S),G.remove(S)}function Ih(S){const U=G.get(S).programs;U!==void 0&&(U.forEach(function(k){le.releaseProgram(k)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,z,H,_e){U===null&&(U=vt);const Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=Oh(S,U,k,z,H);_.setMaterial(z,Se);let Ee=k.index,Te=1;if(z.wireframe===!0){if(Ee=q.getWireframeAttribute(k),Ee===void 0)return;Te=2}const Ne=k.drawRange,He=k.attributes.position;let Ae=Ne.start*Te,tt=(Ne.start+Ne.count)*Te;_e!==null&&(Ae=Math.max(Ae,_e.start*Te),tt=Math.min(tt,(_e.start+_e.count)*Te)),Ee!==null?(Ae=Math.max(Ae,0),tt=Math.min(tt,Ee.count)):He!=null&&(Ae=Math.max(Ae,0),tt=Math.min(tt,He.count));const mt=tt-Ae;if(mt<0||mt===1/0)return;ge.setup(H,z,me,k,Ee);let dt,it=ae;if(Ee!==null&&(dt=oe.get(Ee),it=Z,it.setIndex(dt)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*at()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(H.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),_.setLineWidth(wt*at()),H.isLineSegments?it.setMode(I.LINES):H.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else H.isPoints?it.setMode(I.POINTS):H.isSprite&&it.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const wt=H._multiDrawStarts,ve=H._multiDrawCounts,kt=H._multiDrawCount,Ye=Ee?oe.get(Ee).bytesPerElement:1,Yt=G.get(z).currentProgram.getUniforms();for(let un=0;un<kt;un++)Yt.setValue(I,"_gl_DrawID",un),it.render(wt[un]/Ye,ve[un])}else if(H.isInstancedMesh)it.renderInstances(Ae,mt,H.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ve=Math.min(k.instanceCount,wt);it.renderInstances(Ae,mt,ve)}else it.render(Ae,mt)};function xc(S,U,k){S.transparent===!0&&S.side===Rn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Kr(S,U,k),S.side=Jn,S.needsUpdate=!0,Kr(S,U,k),S.side=Rn):Kr(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),y=ce.get(k),y.init(U),g.push(y),k.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),S!==k&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights();const z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Se=0;Se<_e.length;Se++){const me=_e[Se];xc(me,k,H),z.add(me)}else xc(_e,k,H),z.add(_e)}),y=g.pop(),z},this.compileAsync=function(S,U,k=null){const z=this.compile(S,U,k);return new Promise(H=>{function _e(){if(z.forEach(function(Se){G.get(Se).currentProgram.isReady()&&z.delete(Se)}),z.size===0){H(S);return}setTimeout(_e,10)}Je.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let xa=null;function Uh(S){xa&&xa(S)}function vc(){jn.stop()}function Sc(){jn.start()}const jn=new yh;jn.setAnimationLoop(Uh),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(S){xa=S,Me.setAnimationLoop(S),S===null?jn.stop():jn.start()},Me.addEventListener("sessionstart",vc),Me.addEventListener("sessionend",Sc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;F!==null&&F.renderStart(S,U);const k=Me.enabled===!0&&Me.isPresenting===!0,z=T!==null&&(Q===null||k)&&T.begin(P,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(U),U=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,Q),y=ce.get(S,g.length),y.init(U),y.state.textureUnits=X.getTextureUnits(),g.push(y),Xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ze.setFromProjectionMatrix(Xe,gn,U.reversedDepth),fe=this.localClippingEnabled,Oe=we.init(this.clippingPlanes,fe),w=de.get(S,R.length),w.init(),R.push(w),Me.enabled===!0&&Me.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&va(Se,U,-1/0,P.sortObjects)}va(S,U,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(Pe,Le,U.reversedDepth),ut=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ut&&Ue.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&we.beginShadows();const H=y.state.shadowsArray;if(Ce.render(H,S,U),Oe===!0&&we.endShadows(),(z&&T.hasRenderPass())===!1){const Se=w.opaque,me=w.transmissive;if(y.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(me.length>0)for(let Te=0,Ne=Ee.length;Te<Ne;Te++){const He=Ee[Te];Ec(Se,me,S,He)}ut&&Ue.render(S);for(let Te=0,Ne=Ee.length;Te<Ne;Te++){const He=Ee[Te];Mc(w,S,He,He.viewport)}}else me.length>0&&Ec(Se,me,S,U),ut&&Ue.render(S),Mc(w,S,U)}Q!==null&&V===0&&(X.updateMultisampleRenderTarget(Q),X.updateRenderTargetMipmap(Q)),z&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),ge.resetDefaultState(),te=-1,se=null,g.pop(),g.length>0?(y=g[g.length-1],X.setTextureUnits(y.state.textureUnits),Oe===!0&&we.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function va(S,U,k,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ze.intersectsSprite(S)){z&&st.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Xe);const Se=J.update(S),me=S.material;me.visible&&w.push(S,Se,me,k,st.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ze.intersectsObject(S))){const Se=J.update(S),me=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),st.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),st.copy(Se.boundingSphere.center)),st.applyMatrix4(S.matrixWorld).applyMatrix4(Xe)),Array.isArray(me)){const Ee=Se.groups;for(let Te=0,Ne=Ee.length;Te<Ne;Te++){const He=Ee[Te],Ae=me[He.materialIndex];Ae&&Ae.visible&&w.push(S,Se,Ae,k,st.z,He)}}else me.visible&&w.push(S,Se,me,k,st.z,null)}}const _e=S.children;for(let Se=0,me=_e.length;Se<me;Se++)va(_e[Se],U,k,z)}function Mc(S,U,k,z){const{opaque:H,transmissive:_e,transparent:Se}=S;y.setupLightsView(k),Oe===!0&&we.setGlobalState(P.clippingPlanes,k),z&&_.viewport(ie.copy(z)),H.length>0&&$r(H,U,k),_e.length>0&&$r(_e,U,k),Se.length>0&&$r(Se,U,k),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ec(S,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){const Ae=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new vn(1,1,{generateMipmaps:!0,type:Ae?Un:Zt,minFilter:ui,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const _e=y.state.transmissionRenderTarget[z.id],Se=z.viewport||ie;_e.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(je),We=P.getClearAlpha(),We<1&&P.setClearColor(16777215,.5),P.clear(),ut&&Ue.render(k);const Ne=P.toneMapping;P.toneMapping=xn;const He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),Oe===!0&&we.setGlobalState(P.clippingPlanes,z),$r(S,k,z),X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let tt=0,mt=U.length;tt<mt;tt++){const dt=U[tt],{object:it,geometry:wt,material:ve,group:kt}=dt;if(ve.side===Rn&&it.layers.test(z.layers)){const Ye=ve.side;ve.side=Vt,ve.needsUpdate=!0,yc(it,k,z,wt,ve,kt),ve.side=Ye,ve.needsUpdate=!0,Ae=!0}}Ae===!0&&(X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e))}P.setRenderTarget(me,Ee,Te),P.setClearColor(je,We),He!==void 0&&(z.viewport=He),P.toneMapping=Ne}function $r(S,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,_e=S.length;H<_e;H++){const Se=S[H],{object:me,geometry:Ee,group:Te}=Se;let Ne=Se.material;Ne.allowOverride===!0&&z!==null&&(Ne=z),me.layers.test(k.layers)&&yc(me,U,k,Ee,Ne,Te)}}function yc(S,U,k,z,H,_e){S.onBeforeRender(P,U,k,z,H,_e),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,U,k,z,S,_e),H.transparent===!0&&H.side===Rn&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,P.renderBufferDirect(k,U,z,H,S,_e),H.side=Jn,H.needsUpdate=!0,P.renderBufferDirect(k,U,z,H,S,_e),H.side=Rn):P.renderBufferDirect(k,U,z,H,S,_e),S.onAfterRender(P,U,k,z,H,_e)}function Kr(S,U,k){U.isScene!==!0&&(U=vt);const z=G.get(S),H=y.state.lights,_e=y.state.shadowsArray,Se=H.state.version,me=le.getParameters(S,H.state,_e,U,k,y.state.lightProbeGridArray),Ee=le.getProgramCacheKey(me);let Te=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Ne=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=re.get(S.envMap||z.environment,Ne),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",cn),Te=new Map,z.programs=Te);let He=Te.get(Ee);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===Se)return Tc(S,me),He}else me.uniforms=le.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,k,me),S.onBeforeCompile(me,P),He=le.acquireProgram(me,Ee),Te.set(Ee,He),z.uniforms=me.uniforms;const Ae=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=we.uniform),Tc(S,me),z.needsLights=Bh(S),z.lightsStateVersion=Se,z.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=y.state.lightProbeGridArray.length>0,z.currentProgram=He,z.uniformsList=null,He}function bc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=zs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Tc(S,U){const k=G.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Nh(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let k=0,z=S.length;k<z;k++){const H=S[k];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function Oh(S,U,k,z,H){U.isScene!==!0&&(U=vt),X.resetTextureUnits();const _e=U.fog,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,me=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ge.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=re.get(z.envMap||Se,Ee),Ne=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,mt=!!k.morphAttributes.color;let dt=xn;z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(dt=P.toneMapping);const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,wt=it!==void 0?it.length:0,ve=G.get(z),kt=y.state.lights;if(Oe===!0&&(fe===!0||S!==se)){const lt=S===se&&z.id===te;we.setState(z,S,lt)}let Ye=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==kt.state.version||ve.outputColorSpace!==me||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Te||z.fog===!0&&ve.fog!==_e||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==we.numPlanes||ve.numIntersection!==we.numIntersection)||ve.vertexAlphas!==Ne||ve.vertexTangents!==He||ve.morphTargets!==Ae||ve.morphNormals!==tt||ve.morphColors!==mt||ve.toneMapping!==dt||ve.morphTargetsCount!==wt||!!ve.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,ve.__version=z.version);let Yt=ve.currentProgram;Ye===!0&&(Yt=Kr(z,U,H),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Yt,ve));let un=!1,On=!1,Ri=!1;const rt=Yt.getUniforms(),_t=ve.uniforms;if(_.useProgram(Yt.program)&&(un=!0,On=!0,Ri=!0),z.id!==te&&(te=z.id,On=!0),ve.needsLights){const lt=Nh(y.state.lightProbeGridArray,H);ve.lightProbeGrid!==lt&&(ve.lightProbeGrid=lt,On=!0)}if(un||se!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),rt.setValue(I,"projectionMatrix",S.projectionMatrix),rt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Bn=rt.map.cameraPosition;Bn!==void 0&&Bn.setValue(I,et.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&rt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),se!==S&&(se=S,On=!0,Ri=!0)}if(ve.needsLights&&(kt.state.directionalShadowMap.length>0&&rt.setValue(I,"directionalShadowMap",kt.state.directionalShadowMap,X),kt.state.spotShadowMap.length>0&&rt.setValue(I,"spotShadowMap",kt.state.spotShadowMap,X),kt.state.pointShadowMap.length>0&&rt.setValue(I,"pointShadowMap",kt.state.pointShadowMap,X)),H.isSkinnedMesh){rt.setOptional(I,H,"bindMatrix"),rt.setOptional(I,H,"bindMatrixInverse");const lt=H.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),rt.setValue(I,"boneTexture",lt.boneTexture,X))}H.isBatchedMesh&&(rt.setOptional(I,H,"batchingTexture"),rt.setValue(I,"batchingTexture",H._matricesTexture,X),rt.setOptional(I,H,"batchingIdTexture"),rt.setValue(I,"batchingIdTexture",H._indirectTexture,X),rt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&rt.setValue(I,"batchingColorTexture",H._colorsTexture,X));const Fn=k.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&L.update(H,k,Yt),(On||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,rt.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(_t.envMapIntensity.value=U.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=Py()),On){if(rt.setValue(I,"toneMappingExposure",P.toneMappingExposure),ve.needsLights&&Fh(_t,Ri),_e&&z.fog===!0&&be.refreshFogUniforms(_t,_e),be.refreshMaterialUniforms(_t,z,ee,ne,y.state.transmissionRenderTarget[S.id]),ve.needsLights&&ve.lightProbeGrid){const lt=ve.lightProbeGrid;_t.probesSH.value=lt.texture,_t.probesMin.value.copy(lt.boundingBox.min),_t.probesMax.value.copy(lt.boundingBox.max),_t.probesResolution.value.copy(lt.resolution)}zs.upload(I,bc(ve),_t,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(zs.upload(I,bc(ve),_t,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(I,"center",H.center),rt.setValue(I,"modelViewMatrix",H.modelViewMatrix),rt.setValue(I,"normalMatrix",H.normalMatrix),rt.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const lt=z.uniformsGroups;for(let Bn=0,Ci=lt.length;Bn<Ci;Bn++){const Ac=lt[Bn];j.update(Ac,Yt),j.bind(Ac,Yt)}}return Yt}function Fh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Bh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,U,k){const z=G.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=U,G.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const k=G.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){Q=S,Y=U,V=k;let z=null,H=!1,_e=!1;if(S){const me=G.get(S);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),ie.copy(S.viewport),xe.copy(S.scissor),Ve=S.scissorTest,_.viewport(ie),_.scissor(xe),_.setScissorTest(Ve),te=-1;return}else if(me.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(me.__hasExternalTextures)X.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(me.__boundDepthTexture!==Ne){if(Ne!==null&&G.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Te=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?z=Te[U][k]:z=Te[U],H=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?z=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[k]:z=Te,ie.copy(S.viewport),xe.copy(S.scissor),Ve=S.scissorTest}else ie.copy(Re).multiplyScalar(ee).floor(),xe.copy(Ke).multiplyScalar(ee).floor(),Ve=ze;if(k!==0&&(z=$),_.bindFramebuffer(I.FRAMEBUFFER,z)&&_.drawBuffers(S,z),_.viewport(ie),_.scissor(xe),_.setScissorTest(Ve),H){const me=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,k)}else if(_e){const me=U;for(let Ee=0;Ee<S.textures.length;Ee++){const Te=G.get(S.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,Te.__webglTexture,k,me)}}else if(S!==null&&k!==0){const me=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,k)}te=-1},this.readRenderTargetPixels=function(S,U,k,z,H,_e,Se,me=0){if(!(S&&S.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){_.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Te=S.textures[me],Ne=Te.format,He=Te.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(Ne)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(He)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&k>=0&&k<=S.height-H&&I.readPixels(U,k,z,H,ue.convert(Ne),ue.convert(He),_e)}finally{const Te=Q!==null?G.get(Q).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,z,H,_e,Se,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(U>=0&&U<=S.width-z&&k>=0&&k<=S.height-H){_.bindFramebuffer(I.FRAMEBUFFER,Ee);const Te=S.textures[me],Ne=Te.format,He=Te.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(U,k,z,H,ue.convert(Ne),ue.convert(He),0);const tt=Q!==null?G.get(Q).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,tt);const mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Z0(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Ae),I.deleteSync(mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,k=0){const z=Math.pow(2,-k),H=Math.floor(S.image.width*z),_e=Math.floor(S.image.height*z),Se=U!==null?U.x:0,me=U!==null?U.y:0;X.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,Se,me,H,_e),_.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,z=null,H=0,_e=0){let Se,me,Ee,Te,Ne,He,Ae,tt,mt;const dt=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(k!==null)Se=k.max.x-k.min.x,me=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,Te=k.min.x,Ne=k.min.y,He=k.isBox3?k.min.z:0;else{const _t=Math.pow(2,-H);Se=Math.floor(dt.width*_t),me=Math.floor(dt.height*_t),S.isDataArrayTexture?Ee=dt.depth:S.isData3DTexture?Ee=Math.floor(dt.depth*_t):Ee=1,Te=0,Ne=0,He=0}z!==null?(Ae=z.x,tt=z.y,mt=z.z):(Ae=0,tt=0,mt=0);const it=ue.convert(U.format),wt=ue.convert(U.type);let ve;U.isData3DTexture?(X.setTexture3D(U,0),ve=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(X.setTexture2DArray(U,0),ve=I.TEXTURE_2D_ARRAY):(X.setTexture2D(U,0),ve=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const kt=_.getParameter(I.UNPACK_ROW_LENGTH),Ye=_.getParameter(I.UNPACK_IMAGE_HEIGHT),Yt=_.getParameter(I.UNPACK_SKIP_PIXELS),un=_.getParameter(I.UNPACK_SKIP_ROWS),On=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),_.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const Ri=S.isDataArrayTexture||S.isData3DTexture,rt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const _t=G.get(S),Fn=G.get(U),lt=G.get(_t.__renderTarget),Bn=G.get(Fn.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,lt.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Ci=0;Ci<Ee;Ci++)Ri&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(S).__webglTexture,H,He+Ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(U).__webglTexture,_e,mt+Ci)),I.blitFramebuffer(Te,Ne,Se,me,Ae,tt,Se,me,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||G.has(S)){const _t=G.get(S),Fn=G.get(U);_.bindFramebuffer(I.READ_FRAMEBUFFER,K),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let lt=0;lt<Ee;lt++)Ri?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,H,He+lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,H),rt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fn.__webglTexture,_e,mt+lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fn.__webglTexture,_e),H!==0?I.blitFramebuffer(Te,Ne,Se,me,Ae,tt,Se,me,I.COLOR_BUFFER_BIT,I.NEAREST):rt?I.copyTexSubImage3D(ve,_e,Ae,tt,mt+lt,Te,Ne,Se,me):I.copyTexSubImage2D(ve,_e,Ae,tt,Te,Ne,Se,me);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(ve,_e,Ae,tt,mt,Se,me,Ee,it,wt,dt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,_e,Ae,tt,mt,Se,me,Ee,it,dt.data):I.texSubImage3D(ve,_e,Ae,tt,mt,Se,me,Ee,it,wt,dt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Ae,tt,Se,me,it,wt,dt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Ae,tt,dt.width,dt.height,it,dt.data):I.texSubImage2D(I.TEXTURE_2D,_e,Ae,tt,Se,me,it,wt,dt);_.pixelStorei(I.UNPACK_ROW_LENGTH,kt),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Yt),_.pixelStorei(I.UNPACK_SKIP_ROWS,un),_.pixelStorei(I.UNPACK_SKIP_IMAGES,On),_e===0&&U.generateMipmaps&&I.generateMipmap(ve),_.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Y=0,V=0,Q=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function Dy(){const n=document.getElementById("hero-3d-canvas");if(!n)return;const e=new uh,t=new qt(60,n.clientWidth/n.clientHeight,1,1e3);t.position.z=400;const i=new Dh({alpha:!0,antialias:!0});i.setSize(n.clientWidth,n.clientHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=1200,s=new Gt,a=new Float32Array(r*3),o=new Float32Array(r);let l=0;const c=40,u=30,h=25;for(let y=0;y<c;y++)for(let R=0;R<u;R++){const g=(y-c/2)*h,T=(R-u/2)*h,P=Math.sin(y*.3)*20+Math.cos(R*.3)*20;a[l*3]=g,a[l*3+1]=P,a[l*3+2]=T,o[l]=P,l++}s.setAttribute("position",new Qt(a,3));const d=new gh({color:38599,size:3.5,transparent:!0,opacity:.75,blending:Do}),m=new yx(s,d);e.add(m);let x=0,M=0,p=0,f=0;const E=y=>{x=(y.clientX-window.innerWidth/2)*.15,M=(y.clientY-window.innerHeight/2)*.15};window.addEventListener("mousemove",E,{passive:!0});let b=new Nx;function v(){requestAnimationFrame(v);const y=b.getElapsedTime();p+=(x-p)*.05,f+=(M-f)*.05,t.position.x=p*.8,t.position.y=-f*.8+100,t.lookAt(e.position);const R=s.attributes.position,g=R.array;for(let T=0;T<r;T++){const P=g[T*3],C=g[T*3+2];g[T*3+1]=o[T]+Math.sin(y*2+P*.02+C*.02)*15}R.needsUpdate=!0,i.render(e,t)}v();const w=()=>{n&&(t.aspect=n.clientWidth/n.clientHeight,t.updateProjectionMatrix(),i.setSize(n.clientWidth,n.clientHeight))};window.addEventListener("resize",w,{passive:!0})}function Ly(){const n=document.getElementById("tech-3d-canvas");if(!n)return;const e=n.clientWidth||300,t=n.clientHeight||300,i=new uh,r=new qt(50,e/t,.1,1e3);r.position.z=220;const s=new Dh({alpha:!0,antialias:!0});s.setSize(e,t),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(s.domElement);const a=new Dr;i.add(a);const o=new fc(75,2),l=new ta({color:38599,wireframe:!0,transparent:!0,opacity:.25}),c=new an(o,l);a.add(c);const u=new dc(85,.8,16,100),h=new ta({color:4770532,transparent:!0,opacity:.6}),d=new an(u,h);d.rotation.x=Math.PI/3,a.add(d);const m=["LARAVEL","PHP 8+","JAVASCRIPT","TAILWIND","ALPINE.JS","MYSQL","REDIS","DOCKER","REST API","AWS CLOUD","THREE.JS","GIT"];function x(y){const R=document.createElement("canvas");R.width=256,R.height=64;const g=R.getContext("2d");g.fillStyle="rgba(0, 150, 199, 0.15)",g.strokeStyle="#0096c7",g.lineWidth=2,g.fillRect(4,4,248,56),g.strokeRect(4,4,248,56),g.font='bold 22px "Plus Jakarta Sans", sans-serif',g.fillStyle="#ffffff",g.textAlign="center",g.textBaseline="middle",g.fillText(y,128,32);const T=new bx(R);T.needsUpdate=!0;const P=new hh({map:T,transparent:!0,opacity:.9}),C=new gx(P);return C.scale.set(40,10,1),C}const M=Math.PI*(3-Math.sqrt(5)),p=m.length;m.forEach((y,R)=>{const g=1-R/(p-1)*2,T=Math.sqrt(1-g*g),P=M*R,C=95,F=Math.cos(P)*T*C,$=Math.sin(P)*T*C,K=x(y);K.position.set(F,g*C,$),a.add(K)});let f=!1,E={x:0,y:0},b={x:0,y:.005};n.addEventListener("pointerdown",y=>{f=!0,E={x:y.clientX,y:y.clientY}}),window.addEventListener("pointermove",y=>{if(!f)return;const R={x:y.clientX-E.x,y:y.clientY-E.y};b.y=R.x*.005,b.x=R.y*.005,a.rotation.y+=b.y,a.rotation.x+=b.x,E={x:y.clientX,y:y.clientY}}),window.addEventListener("pointerup",()=>{f=!1});function v(){requestAnimationFrame(v),f||(a.rotation.y+=.004,a.rotation.x*=.95,d.rotation.z+=.002),s.render(i,r)}v();const w=()=>{if(!n)return;const y=n.clientWidth,R=n.clientHeight;r.aspect=y/R,r.updateProjectionMatrix(),s.setSize(y,R)};window.addEventListener("resize",w,{passive:!0})}window.Alpine=kd;kd.start();document.addEventListener("DOMContentLoaded",()=>{Dy(),Ly()});
