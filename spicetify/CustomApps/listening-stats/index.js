"use strict";var ListeningStatsApp=(()=>{var Kf=Object.create;var ba=Object.defineProperty;var jf=Object.getOwnPropertyDescriptor;var Vf=Object.getOwnPropertyNames;var qf=Object.getPrototypeOf,Yf=Object.prototype.hasOwnProperty;var mr=(e,t)=>()=>(e&&(t=e(e=0)),t);var Re=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),tl=(e,t)=>{for(var a in t)ba(e,a,{get:t[a],enumerable:!0})},rl=(e,t,a,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Vf(t))!Yf.call(e,o)&&o!==a&&ba(e,o,{get:()=>t[o],enumerable:!(i=jf(t,o))||i.enumerable});return e};var nl=(e,t,a)=>(a=e!=null?Kf(qf(e)):{},rl(t||!e||!e.__esModule?ba(a,"default",{value:e,enumerable:!0}):a,e)),Xf=e=>rl(ba({},"__esModule",{value:!0}),e);var ve,Pt=mr(()=>{"use strict";ve={PLAY_RECORDED:"listening-stats:play-recorded",SKIP_RECORDED:"listening-stats:skip-recorded",HEALTH_CHANGED:"listening-stats:health-changed",TRACKING_PAUSED:"listening-stats:tracking-paused",TRACKING_RESUMED:"listening-stats:tracking-resumed",PROVIDER_CHANGED:"listening-stats:provider-changed",STATSFM_CONNECTED:"listening-stats:statsfm-connected",STATSFM_DISCONNECTED:"listening-stats:statsfm-disconnected",STATSFM_HEALTH_CHANGED:"listening-stats:statsfm-health-changed",STATSFM_PROFILE_REFRESHED:"listening-stats:statsfm-profile-refreshed",PREFS_CHANGED:"listening-stats:prefs-changed",DASHBOARD_PERIOD_CHANGED:"listening-stats:dashboard-period-changed"}});var ce,st=mr(()=>{"use strict";ce={PLAY_THRESHOLD:"listening-stats:playThreshold",TRACKING_PAUSED:"listening-stats:tracking-paused",SKIP_REPEATS:"listening-stats:skip-repeats",LAST_UPDATE:"listening-stats:lastUpdate",LOGGING:"listening-stats:logging",TRACKING_HEALTH:"listening-stats:tracking-health",LAST_WRITE:"listening-stats:lastWrite",ACTIVE_PROVIDER:"listening-stats:active-provider",PREFERENCES:"listening-stats:preferences",MIGRATION_PENDING:"listening-stats:migration-pending",STATSFM_CONFIG:"listening-stats:statsfm",PROVIDER_WIZARD_SEEN:"listening-stats:provider-wizard-seen",PROVIDER_PERIODS:"listening-stats:provider-periods",STATSFM_HEALTH:"listening-stats:statsfm-health",DISMISSED_BANNER_VERSION:"listening-stats:dismissed-banner-version",LASTFM_API_KEY:"listening-stats:lastfm-api-key",LASTFM_CONFIG:"listening-stats:lastfm-provider",WORLD_CHARTS_SCOPE:"listening-stats:world-charts-scope",WORLD_CHARTS_WINDOW:"listening-stats:world-charts-window",TOUR_SEEN_VERSION:"listening-stats:tour-seen-version",DISMISSED_REMOTE_ANNOUNCEMENT_ID:"listening-stats:dismissed-remote-announcement-id",UPDATE_PROMPT_SNOOZE_UNTIL:"listening-stats:update-prompt-snooze-until"}});function Or(e,t,a){return e===404?{variant:"UserNotFound",message:t,retryable:!1}:e===429||e===0&&t.includes("Circuit open")?{variant:"RateLimited",message:t,retryable:!1,resetAt:a}:e>=500&&e<=599?{variant:"ServiceDown",message:t,retryable:!0}:e===0?{variant:"NetworkError",message:t,retryable:!0}:{variant:"Unknown",message:t,retryable:!0}}var Yr,xa=mr(()=>{"use strict";Yr=class extends Error{constructor(t){super(t.message),this.name="StatsFmError",this.appError=t}}});function gl(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0),a=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0);return{start:t.getTime(),end:a.getTime()}}function nm(){let e=new Date,a=(e.getDay()+6)%7,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()-a,0,0,0,0),o=new Date(i.getFullYear(),i.getMonth(),i.getDate()+7,0,0,0,0);return{start:i.getTime(),end:o.getTime()}}function am(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1,0,0,0,0),a=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:t.getTime(),end:a.getTime()}}function im(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth()-6,1,0,0,0,0),a=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:t.getTime(),end:a.getTime()}}function sm(){let e=Date.now();return{start:e-28*864e5,end:e}}function om(){let e=Date.now();return{start:e-180*864e5,end:e}}function ka(){return{start:0,end:Number.MAX_SAFE_INTEGER}}function vl(e){let t=Dt.findIndex(a=>a.id===e);return t===-1||t===Dt.length-1?null:Dt[t+1]}function An(e){if(e.id==="all-time"||e.id==="sfm-all-time"||e.id==="overall")return null;let{start:t,end:a}=e.getBoundaries(),i=a-t,o=t-i;return o<0?null:{start:o,end:t}}var Dt,En,hl,yl,Zi,Qi,Lr=mr(()=>{"use strict";Dt=[{id:"today",label:"Today",getBoundaries:gl},{id:"this-week",label:"This Week",getBoundaries:nm},{id:"this-month",label:"This Month",getBoundaries:am},{id:"last-6-months",label:"Last 6 Months",getBoundaries:im},{id:"all-time",label:"All Time",getBoundaries:ka}],En=[{id:"sfm-weeks",label:"Last 4 Weeks",getBoundaries:sm},{id:"sfm-months",label:"Last 6 Months",getBoundaries:om},{id:"sfm-all-time",label:"All Time",getBoundaries:ka}],hl=[{id:"sfm-today",label:"Today",getBoundaries:gl},...En];yl=[{id:"7day",label:"7 Days",getBoundaries:()=>({start:Date.now()-7*864e5,end:Date.now()})},{id:"1month",label:"1 Month",getBoundaries:()=>({start:Date.now()-30*864e5,end:Date.now()})},{id:"3month",label:"3 Months",getBoundaries:()=>({start:Date.now()-90*864e5,end:Date.now()})},{id:"6month",label:"6 Months",getBoundaries:()=>({start:Date.now()-180*864e5,end:Date.now()})},{id:"12month",label:"12 Months",getBoundaries:()=>({start:Date.now()-365*864e5,end:Date.now()})},{id:"overall",label:"Overall",getBoundaries:ka}],Zi="world-charts",Qi={id:Zi,label:"World",getBoundaries:ka}});var lm,es,Be,gr=mr(()=>{"use strict";Pt();lm=120*1e3,es=class{constructor(){this.store=new Map}get(t){let a=this.store.get(t);return a?Date.now()>=a.expiry?(this.store.delete(t),null):a.data:null}set(t,a){this.store.set(t,{data:a,expiry:Date.now()+lm})}invalidate(t){t!==void 0?this.store.delete(t):this.store.clear()}setupInvalidationListeners(){window.addEventListener(ve.PLAY_RECORDED,()=>{this.invalidate()})}},Be=new es});var wl=Re((rs,ns)=>{(function(e,t){typeof rs=="object"&&typeof ns<"u"?ns.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.Dexie=t())})(rs,(function(){"use strict";var e=function(r,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,c){s.__proto__=c}||function(s,c){for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(s[u]=c[u])},e(r,n)};function t(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(r,n);function s(){this.constructor=r}r.prototype=n===null?Object.create(n):(s.prototype=n.prototype,new s)}var a=function(){return a=Object.assign||function(n){for(var s,c=1,u=arguments.length;c<u;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(n[p]=s[p])}return n},a.apply(this,arguments)};function i(r,n,s){if(s||arguments.length===2)for(var c=0,u=n.length,p;c<u;c++)(p||!(c in n))&&(p||(p=Array.prototype.slice.call(n,0,c)),p[c]=n[c]);return r.concat(p||Array.prototype.slice.call(n))}typeof SuppressedError=="function"&&SuppressedError;var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,l=Object.keys,d=Array.isArray;typeof Promise<"u"&&!o.Promise&&(o.Promise=Promise);function m(r,n){return typeof n!="object"||l(n).forEach(function(s){r[s]=n[s]}),r}var g=Object.getPrototypeOf,h={}.hasOwnProperty;function b(r,n){return h.call(r,n)}function w(r,n){typeof n=="function"&&(n=n(g(r))),(typeof Reflect>"u"?l:Reflect.ownKeys)(n).forEach(function(s){x(r,s,n[s])})}var k=Object.defineProperty;function x(r,n,s,c){k(r,n,m(s&&b(s,"get")&&typeof s.get=="function"?{get:s.get,set:s.set,configurable:!0}:{value:s,configurable:!0,writable:!0},c))}function P(r){return{from:function(n){return r.prototype=Object.create(n.prototype),x(r.prototype,"constructor",r),{extend:w.bind(null,r.prototype)}}}}var O=Object.getOwnPropertyDescriptor;function $(r,n){var s=O(r,n),c;return s||(c=g(r))&&$(c,n)}var _=[].slice;function z(r,n,s){return _.call(r,n,s)}function Y(r,n){return n(r)}function U(r){if(!r)throw new Error("Assertion Failed")}function W(r){o.setImmediate?setImmediate(r):setTimeout(r,0)}function L(r,n){return r.reduce(function(s,c,u){var p=n(c,u);return p&&(s[p[0]]=p[1]),s},{})}function q(r,n){if(typeof n=="string"&&b(r,n))return r[n];if(!n)return r;if(typeof n!="string"){for(var s=[],c=0,u=n.length;c<u;++c){var p=q(r,n[c]);s.push(p)}return s}var f=n.indexOf(".");if(f!==-1){var v=r[n.substr(0,f)];return v==null?void 0:q(v,n.substr(f+1))}}function X(r,n,s){if(!(!r||n===void 0)&&!("isFrozen"in Object&&Object.isFrozen(r)))if(typeof n!="string"&&"length"in n){U(typeof s!="string"&&"length"in s);for(var c=0,u=n.length;c<u;++c)X(r,n[c],s[c])}else{var p=n.indexOf(".");if(p!==-1){var f=n.substr(0,p),v=n.substr(p+1);if(v==="")s===void 0?d(r)&&!isNaN(parseInt(f))?r.splice(f,1):delete r[f]:r[f]=s;else{var y=r[f];(!y||!b(r,f))&&(y=r[f]={}),X(y,v,s)}}else s===void 0?d(r)&&!isNaN(parseInt(n))?r.splice(n,1):delete r[n]:r[n]=s}}function Q(r,n){typeof n=="string"?X(r,n,void 0):"length"in n&&[].map.call(n,function(s){X(r,s,void 0)})}function Z(r){var n={};for(var s in r)b(r,s)&&(n[s]=r[s]);return n}var ie=[].concat;function Se(r){return ie.apply([],r)}var le="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Se([8,16,32,64].map(function(r){return["Int","Uint","Float"].map(function(n){return n+r+"Array"})}))).filter(function(r){return o[r]}),Ce=new Set(le.map(function(r){return o[r]}));function Fe(r){var n={};for(var s in r)if(b(r,s)){var c=r[s];n[s]=!c||typeof c!="object"||Ce.has(c.constructor)?c:Fe(c)}return n}var Ie=null;function Te(r){Ie=new WeakMap;var n=F(r);return Ie=null,n}function F(r){if(!r||typeof r!="object")return r;var n=Ie.get(r);if(n)return n;if(d(r)){n=[],Ie.set(r,n);for(var s=0,c=r.length;s<c;++s)n.push(F(r[s]))}else if(Ce.has(r.constructor))n=r;else{var u=g(r);n=u===Object.prototype?{}:Object.create(u),Ie.set(r,n);for(var p in r)b(r,p)&&(n[p]=F(r[p]))}return n}var se={}.toString;function V(r){return se.call(r).slice(8,-1)}var N=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ee=typeof N=="symbol"?function(r){var n;return r!=null&&(n=r[N])&&n.apply(r)}:function(){return null};function me(r,n){var s=r.indexOf(n);return s>=0&&r.splice(s,1),s>=0}var De={};function Le(r){var n,s,c,u;if(arguments.length===1){if(d(r))return r.slice();if(this===De&&typeof r=="string")return[r];if(u=Ee(r)){for(s=[];c=u.next(),!c.done;)s.push(c.value);return s}if(r==null)return[r];if(n=r.length,typeof n=="number"){for(s=new Array(n);n--;)s[n]=r[n];return s}return[r]}for(n=arguments.length,s=new Array(n);n--;)s[n]=arguments[n];return s}var je=typeof Symbol<"u"?function(r){return r[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},K=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],fe=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],He=K.concat(fe),pt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function vt(r,n){this.name=r,this.message=n}P(vt).from(Error).extend({toString:function(){return this.name+": "+this.message}});function tt(r,n){return r+". Errors: "+Object.keys(n).map(function(s){return n[s].toString()}).filter(function(s,c,u){return u.indexOf(s)===c}).join(`
`)}function J(r,n,s,c){this.failures=n,this.failedKeys=c,this.successCount=s,this.message=tt(r,n)}P(J).from(vt);function Me(r,n){this.name="BulkError",this.failures=Object.keys(n).map(function(s){return n[s]}),this.failuresByPos=n,this.message=tt(r,this.failures)}P(Me).from(vt);var he=He.reduce(function(r,n){return r[n]=n+"Error",r},{}),ne=vt,ee=He.reduce(function(r,n){var s=n+"Error";function c(u,p){this.name=s,u?typeof u=="string"?(this.message="".concat(u).concat(p?`
 `+p:""),this.inner=p||null):typeof u=="object"&&(this.message="".concat(u.name," ").concat(u.message),this.inner=u):(this.message=pt[n]||s,this.inner=null)}return P(c).from(ne),r[n]=c,r},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Ve=fe.reduce(function(r,n){return r[n+"Error"]=ee[n],r},{});function xr(r,n){if(!r||r instanceof vt||r instanceof TypeError||r instanceof SyntaxError||!r.name||!Ve[r.name])return r;var s=new Ve[r.name](n||r.message,r);return"stack"in r&&x(s,"stack",{get:function(){return this.inner.stack}}),s}var zr=He.reduce(function(r,n){return["Syntax","Type","Range"].indexOf(n)===-1&&(r[n+"Error"]=ee[n]),r},{});zr.ModifyError=J,zr.DexieError=vt,zr.BulkError=Me;function We(){}function kr(r){return r}function Tr(r,n){return r==null||r===kr?n:function(s){return n(r(s))}}function jt(r,n){return function(){r.apply(this,arguments),n.apply(this,arguments)}}function mi(r,n){return r===We?n:function(){var s=r.apply(this,arguments);s!==void 0&&(arguments[0]=s);var c=this.onsuccess,u=this.onerror;this.onsuccess=null,this.onerror=null;var p=n.apply(this,arguments);return c&&(this.onsuccess=this.onsuccess?jt(c,this.onsuccess):c),u&&(this.onerror=this.onerror?jt(u,this.onerror):u),p!==void 0?p:s}}function Ht(r,n){return r===We?n:function(){r.apply(this,arguments);var s=this.onsuccess,c=this.onerror;this.onsuccess=this.onerror=null,n.apply(this,arguments),s&&(this.onsuccess=this.onsuccess?jt(s,this.onsuccess):s),c&&(this.onerror=this.onerror?jt(c,this.onerror):c)}}function Vt(r,n){return r===We?n:function(s){var c=r.apply(this,arguments);m(s,c);var u=this.onsuccess,p=this.onerror;this.onsuccess=null,this.onerror=null;var f=n.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?jt(u,this.onsuccess):u),p&&(this.onerror=this.onerror?jt(p,this.onerror):p),c===void 0?f===void 0?void 0:f:m(c,f)}}function gi(r,n){return r===We?n:function(){return n.apply(this,arguments)===!1?!1:r.apply(this,arguments)}}function un(r,n){return r===We?n:function(){var s=r.apply(this,arguments);if(s&&typeof s.then=="function"){for(var c=this,u=arguments.length,p=new Array(u);u--;)p[u]=arguments[u];return s.then(function(){return n.apply(c,p)})}return n.apply(this,arguments)}}var ge=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qe(r,n){ge=r}var ft={},sr=100,qt=typeof Promise>"u"?[]:(function(){var r=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[r,g(r),r];var n=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[n,g(n),r]})(),St=qt[0],mt=qt[1],ut=qt[2],at=mt&&mt.then,Yt=St&&St.constructor,Hr=!!ut;function dn(){queueMicrotask(Cp)}var Qe=function(r,n){pn.push([r,n]),Vn&&(dn(),Vn=!1)},hi=!0,Vn=!0,Er=[],qn=[],vi=kr,Xt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:We,pgp:!1,env:{},finalize:We},we=Xt,pn=[],Ar=0,Yn=[];function ae(r){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var n=this._PSD=we;if(typeof r!="function"){if(r!==ft)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&bi(this,this._value);return}this._state=null,this._value=null,++n.ref,So(this,r)}var yi={get:function(){var r=we,n=Qn;function s(c,u){var p=this,f=!r.global&&(r!==we||n!==Qn),v=f&&!lr(),y=new ae(function(S,E){wi(p,new wo(To(c,r,f,v),To(u,r,f,v),S,E,r))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return s.prototype=ft,s},set:function(r){x(this,"then",r&&r.prototype===ft?yi:{get:function(){return r},set:yi.set})}};w(ae.prototype,{then:yi,_then:function(r,n){wi(this,new wo(null,null,r,n,we))},catch:function(r){if(arguments.length===1)return this.then(null,r);var n=arguments[0],s=arguments[1];return typeof n=="function"?this.then(null,function(c){return c instanceof n?s(c):Xn(c)}):this.then(null,function(c){return c&&c.name===n?s(c):Xn(c)})},finally:function(r){return this.then(function(n){return ae.resolve(r()).then(function(){return n})},function(n){return ae.resolve(r()).then(function(){return Xn(n)})})},timeout:function(r,n){var s=this;return r<1/0?new ae(function(c,u){var p=setTimeout(function(){return u(new ee.Timeout(n))},r);s.then(c,u).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&x(ae.prototype,Symbol.toStringTag,"Dexie.Promise"),Xt.env=ko();function wo(r,n,s,c,u){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof n=="function"?n:null,this.resolve=s,this.reject=c,this.psd=u}w(ae,{all:function(){var r=Le.apply(null,arguments).map(ea);return new ae(function(n,s){r.length===0&&n([]);var c=r.length;r.forEach(function(u,p){return ae.resolve(u).then(function(f){r[p]=f,--c||n(r)},s)})})},resolve:function(r){if(r instanceof ae)return r;if(r&&typeof r.then=="function")return new ae(function(s,c){r.then(s,c)});var n=new ae(ft,!0,r);return n},reject:Xn,race:function(){var r=Le.apply(null,arguments).map(ea);return new ae(function(n,s){r.map(function(c){return ae.resolve(c).then(n,s)})})},PSD:{get:function(){return we},set:function(r){return we=r}},totalEchoes:{get:function(){return Qn}},newPSD:or,usePSD:Pr,scheduler:{get:function(){return Qe},set:function(r){Qe=r}},rejectionMapper:{get:function(){return vi},set:function(r){vi=r}},follow:function(r,n){return new ae(function(s,c){return or(function(u,p){var f=we;f.unhandleds=[],f.onunhandled=p,f.finalize=jt(function(){var v=this;Ip(function(){v.unhandleds.length===0?u():p(v.unhandleds[0])})},f.finalize),r()},n,s,c)})}}),Yt&&(Yt.allSettled&&x(ae,"allSettled",function(){var r=Le.apply(null,arguments).map(ea);return new ae(function(n){r.length===0&&n([]);var s=r.length,c=new Array(s);r.forEach(function(u,p){return ae.resolve(u).then(function(f){return c[p]={status:"fulfilled",value:f}},function(f){return c[p]={status:"rejected",reason:f}}).then(function(){return--s||n(c)})})})}),Yt.any&&typeof AggregateError<"u"&&x(ae,"any",function(){var r=Le.apply(null,arguments).map(ea);return new ae(function(n,s){r.length===0&&s(new AggregateError([]));var c=r.length,u=new Array(c);r.forEach(function(p,f){return ae.resolve(p).then(function(v){return n(v)},function(v){u[f]=v,--c||s(new AggregateError(u))})})})}),Yt.withResolvers&&(ae.withResolvers=Yt.withResolvers));function So(r,n){try{n(function(s){if(r._state===null){if(s===r)throw new TypeError("A promise cannot be resolved with itself.");var c=r._lib&&Gr();s&&typeof s.then=="function"?So(r,function(u,p){s instanceof ae?s._then(u,p):s.then(u,p)}):(r._state=!0,r._value=s,xo(r)),c&&Kr()}},bi.bind(null,r))}catch(s){bi(r,s)}}function bi(r,n){if(qn.push(n),r._state===null){var s=r._lib&&Gr();n=vi(n),r._state=!1,r._value=n,_p(r),xo(r),s&&Kr()}}function xo(r){var n=r._listeners;r._listeners=[];for(var s=0,c=n.length;s<c;++s)wi(r,n[s]);var u=r._PSD;--u.ref||u.finalize(),Ar===0&&(++Ar,Qe(function(){--Ar===0&&Si()},[]))}function wi(r,n){if(r._state===null){r._listeners.push(n);return}var s=r._state?n.onFulfilled:n.onRejected;if(s===null)return(r._state?n.resolve:n.reject)(r._value);++n.psd.ref,++Ar,Qe(Np,[s,r,n])}function Np(r,n,s){try{var c,u=n._value;!n._state&&qn.length&&(qn=[]),c=ge&&n._consoleTask?n._consoleTask.run(function(){return r(u)}):r(u),!n._state&&qn.indexOf(u)===-1&&Dp(n),s.resolve(c)}catch(p){s.reject(p)}finally{--Ar===0&&Si(),--s.psd.ref||s.psd.finalize()}}function Cp(){Pr(Xt,function(){Gr()&&Kr()})}function Gr(){var r=hi;return hi=!1,Vn=!1,r}function Kr(){var r,n,s;do for(;pn.length>0;)for(r=pn,pn=[],s=r.length,n=0;n<s;++n){var c=r[n];c[0].apply(null,c[1])}while(pn.length>0);hi=!0,Vn=!0}function Si(){var r=Er;Er=[],r.forEach(function(c){c._PSD.onunhandled.call(null,c._value,c)});for(var n=Yn.slice(0),s=n.length;s;)n[--s]()}function Ip(r){function n(){r(),Yn.splice(Yn.indexOf(n),1)}Yn.push(n),++Ar,Qe(function(){--Ar===0&&Si()},[])}function _p(r){Er.some(function(n){return n._value===r._value})||Er.push(r)}function Dp(r){for(var n=Er.length;n;)if(Er[--n]._value===r._value){Er.splice(n,1);return}}function Xn(r){return new ae(ft,!1,r)}function Je(r,n){var s=we;return function(){var c=Gr(),u=we;try{return cr(s,!0),r.apply(this,arguments)}catch(p){n&&n(p)}finally{cr(u,!1),c&&Kr()}}}var dt={awaits:0,echoes:0,id:0},Op=0,Jn=[],Zn=0,Qn=0,Lp=0;function or(r,n,s,c){var u=we,p=Object.create(u);p.parent=u,p.ref=0,p.global=!1,p.id=++Lp,Xt.env,p.env=Hr?{Promise:ae,PromiseProp:{value:ae,configurable:!0,writable:!0},all:ae.all,race:ae.race,allSettled:ae.allSettled,any:ae.any,resolve:ae.resolve,reject:ae.reject}:{},n&&m(p,n),++u.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()};var f=Pr(p,r,s,c);return p.ref===0&&p.finalize(),f}function jr(){return dt.id||(dt.id=++Op),++dt.awaits,dt.echoes+=sr,dt.id}function lr(){return dt.awaits?(--dt.awaits===0&&(dt.id=0),dt.echoes=dt.awaits*sr,!0):!1}(""+at).indexOf("[native code]")===-1&&(jr=lr=We);function ea(r){return dt.echoes&&r&&r.constructor===Yt?(jr(),r.then(function(n){return lr(),n},function(n){return lr(),et(n)})):r}function $p(r){++Qn,(!dt.echoes||--dt.echoes===0)&&(dt.echoes=dt.awaits=dt.id=0),Jn.push(we),cr(r,!0)}function Mp(){var r=Jn[Jn.length-1];Jn.pop(),cr(r,!1)}function cr(r,n){var s=we;if((n?dt.echoes&&(!Zn++||r!==we):Zn&&(!--Zn||r!==we))&&queueMicrotask(n?$p.bind(null,r):Mp),r!==we&&(we=r,s===Xt&&(Xt.env=ko()),Hr)){var c=Xt.env.Promise,u=r.env;(s.global||r.global)&&(Object.defineProperty(o,"Promise",u.PromiseProp),c.all=u.all,c.race=u.race,c.resolve=u.resolve,c.reject=u.reject,u.allSettled&&(c.allSettled=u.allSettled),u.any&&(c.any=u.any))}}function ko(){var r=o.Promise;return Hr?{Promise:r,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:r.all,race:r.race,allSettled:r.allSettled,any:r.any,resolve:r.resolve,reject:r.reject}:{}}function Pr(r,n,s,c,u){var p=we;try{return cr(r,!0),n(s,c,u)}finally{cr(p,!1)}}function To(r,n,s,c){return typeof r!="function"?r:function(){var u=we;s&&jr(),cr(n,!0);try{return r.apply(this,arguments)}finally{cr(u,!1),c&&queueMicrotask(lr)}}}function xi(r){Promise===Yt&&dt.echoes===0?Zn===0?r():enqueueNativeMicroTask(r):setTimeout(r,0)}var et=ae.reject;function ki(r,n,s,c){if(!r.idbdb||!r._state.openComplete&&!we.letThrough&&!r._vip){if(r._state.openComplete)return et(new ee.DatabaseClosed(r._state.dbOpenError));if(!r._state.isBeingOpened){if(!r._state.autoOpen)return et(new ee.DatabaseClosed);r.open().catch(We)}return r._state.dbReadyPromise.then(function(){return ki(r,n,s,c)})}else{var u=r._createTransaction(n,s,r._dbSchema);try{u.create(),r._state.PR1398_maxLoop=3}catch(p){return p.name===he.InvalidState&&r.isOpen()&&--r._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),r.close({disableAutoOpen:!1}),r.open().then(function(){return ki(r,n,s,c)})):et(p)}return u._promise(n,function(p,f){return or(function(){return we.trans=u,c(p,f,u)})}).then(function(p){if(n==="readwrite")try{u.idbtrans.commit()}catch{}return n==="readonly"?p:u._completion.then(function(){return p})})}}var Eo="4.4.2",Rr="\uFFFF",Ti=-1/0,Jt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ao="String expected.",Po=1e3,ta="__dbnames",Ei="readonly",Ai="readwrite";function Nr(r,n){return r?n?function(){return r.apply(this,arguments)&&n.apply(this,arguments)}:r:n}var Ro={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function ra(r){return typeof r=="string"&&!/\./.test(r)?function(n){return n[r]===void 0&&r in n&&(n=Te(n),delete n[r]),n}:function(n){return n}}function No(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ue(r,n){try{var s=Co(r),c=Co(n);if(s!==c)return s==="Array"?1:c==="Array"?-1:s==="binary"?1:c==="binary"?-1:s==="string"?1:c==="string"?-1:s==="Date"?1:c!=="Date"?NaN:-1;switch(s){case"number":case"Date":case"string":return r>n?1:r<n?-1:0;case"binary":return Wp(Io(r),Io(n));case"Array":return Up(r,n)}}catch{}return NaN}function Up(r,n){for(var s=r.length,c=n.length,u=s<c?s:c,p=0;p<u;++p){var f=Ue(r[p],n[p]);if(f!==0)return f}return s===c?0:s<c?-1:1}function Wp(r,n){for(var s=r.length,c=n.length,u=s<c?s:c,p=0;p<u;++p)if(r[p]!==n[p])return r[p]<n[p]?-1:1;return s===c?0:s<c?-1:1}function Co(r){var n=typeof r;if(n!=="object")return n;if(ArrayBuffer.isView(r))return"binary";var s=V(r);return s==="ArrayBuffer"?"binary":s}function Io(r){return r instanceof Uint8Array?r:ArrayBuffer.isView(r)?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r)}function na(r,n,s){var c=r.schema.yProps;return c?(n&&s.numFailures>0&&(n=n.filter(function(u,p){return!s.failures[p]})),Promise.all(c.map(function(u){var p=u.updatesTable;return n?r.db.table(p).where("k").anyOf(n).delete():r.db.table(p).clear()})).then(function(){return s})):s}var fn=(function(){function r(n){this["@@propmod"]=n}return r.prototype.execute=function(n){var s,c=this["@@propmod"];if(c.add!==void 0){var u=c.add;if(d(u))return i(i([],d(n)?n:[],!0),u,!0).sort();if(typeof u=="number")return(Number(n)||0)+u;if(typeof u=="bigint")try{return BigInt(n)+u}catch{return BigInt(0)+u}throw new TypeError("Invalid term ".concat(u))}if(c.remove!==void 0){var p=c.remove;if(d(p))return d(n)?n.filter(function(v){return!p.includes(v)}).sort():[];if(typeof p=="number")return Number(n)-p;if(typeof p=="bigint")try{return BigInt(n)-p}catch{return BigInt(0)-p}throw new TypeError("Invalid subtrahend ".concat(p))}var f=(s=c.replacePrefix)===null||s===void 0?void 0:s[0];return f&&typeof n=="string"&&n.startsWith(f)?c.replacePrefix[1]+n.substring(f.length):n},r})();function _o(r,n){for(var s=l(n),c=s.length,u=!1,p=0;p<c;++p){var f=s[p],v=n[f],y=q(r,f);v instanceof fn?(X(r,f,v.execute(y)),u=!0):y!==v&&(X(r,f,v),u=!0)}return u}var Do=(function(){function r(){}return r.prototype._trans=function(n,s,c){var u=this._tx||we.trans,p=this.name,f=ge&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(n==="readonly"?"read":"write"," ").concat(this.name));function v(E,A,C){if(!C.schema[p])throw new ee.NotFound("Table "+p+" not part of transaction");return s(C.idbtrans,C)}var y=Gr();try{var S=u&&u.db._novip===this.db._novip?u===we.trans?u._promise(n,v,c):or(function(){return u._promise(n,v,c)},{trans:u,transless:we.transless||we}):ki(this.db,n,[this.name],v);return f&&(S._consoleTask=f,S=S.catch(function(E){return console.trace(E),et(E)})),S}finally{y&&Kr()}},r.prototype.get=function(n,s){var c=this;return n&&n.constructor===Object?this.where(n).first(s):n==null?et(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return c.core.get({trans:u,key:n}).then(function(p){return c.hook.reading.fire(p)})}).then(s)},r.prototype.where=function(n){if(typeof n=="string")return new this.db.WhereClause(this,n);if(d(n))return new this.db.WhereClause(this,"[".concat(n.join("+"),"]"));var s=l(n);if(s.length===1)return this.where(s[0]).equals(n[s[0]]);var c=this.schema.indexes.concat(this.schema.primKey).filter(function(E){if(E.compound&&s.every(function(C){return E.keyPath.indexOf(C)>=0})){for(var A=0;A<s.length;++A)if(s.indexOf(E.keyPath[A])===-1)return!1;return!0}return!1}).sort(function(E,A){return E.keyPath.length-A.keyPath.length})[0];if(c&&this.db._maxKey!==Rr){var u=c.keyPath.slice(0,s.length);return this.where(u).equals(u.map(function(E){return n[E]}))}!c&&ge&&console.warn("The query ".concat(JSON.stringify(n)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(s.join("+"),"]"));var p=this.schema.idxByName;function f(E,A){return Ue(E,A)===0}var v=s.reduce(function(E,A){var C=E[0],B=E[1],T=p[A],R=n[A];return[C||T,C||!T?Nr(B,T&&T.multi?function(D){var I=q(D,A);return d(I)&&I.some(function(j){return f(R,j)})}:function(D){return f(R,q(D,A))}):B]},[null,null]),y=v[0],S=v[1];return y?this.where(y.name).equals(n[y.keyPath]).filter(S):c?this.filter(S):this.where(s).equals("")},r.prototype.filter=function(n){return this.toCollection().and(n)},r.prototype.count=function(n){return this.toCollection().count(n)},r.prototype.offset=function(n){return this.toCollection().offset(n)},r.prototype.limit=function(n){return this.toCollection().limit(n)},r.prototype.each=function(n){return this.toCollection().each(n)},r.prototype.toArray=function(n){return this.toCollection().toArray(n)},r.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},r.prototype.orderBy=function(n){return new this.db.Collection(new this.db.WhereClause(this,d(n)?"[".concat(n.join("+"),"]"):n))},r.prototype.reverse=function(){return this.toCollection().reverse()},r.prototype.mapToClass=function(n){var s=this,c=s.db,u=s.name;this.schema.mappedClass=n,n.prototype instanceof No&&(n=(function(y){t(S,y);function S(){return y!==null&&y.apply(this,arguments)||this}return Object.defineProperty(S.prototype,"db",{get:function(){return c},enumerable:!1,configurable:!0}),S.prototype.table=function(){return u},S})(n));for(var p=new Set,f=n.prototype;f;f=g(f))Object.getOwnPropertyNames(f).forEach(function(y){return p.add(y)});var v=function(y){if(!y)return y;var S=Object.create(n.prototype);for(var E in y)if(!p.has(E))try{S[E]=y[E]}catch{}return S};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),n},r.prototype.defineClass=function(){function n(s){m(this,s)}return this.mapToClass(n)},r.prototype.add=function(n,s){var c=this,u=this.schema.primKey,p=u.auto,f=u.keyPath,v=n;return f&&p&&(v=ra(f)(n)),this._trans("readwrite",function(y){return c.core.mutate({trans:y,type:"add",keys:s!=null?[s]:null,values:[v]})}).then(function(y){return y.numFailures?ae.reject(y.failures[0]):y.lastResult}).then(function(y){if(f)try{X(n,f,y)}catch{}return y})},r.prototype.upsert=function(n,s){var c=this,u=this.schema.primKey.keyPath;return this._trans("readwrite",function(p){return c.core.get({trans:p,key:n}).then(function(f){var v=f??{};return _o(v,s),u&&X(v,u,n),c.core.mutate({trans:p,type:"put",values:[v],keys:[n],upsert:!0,updates:{keys:[n],changeSpecs:[s]}}).then(function(y){return y.numFailures?ae.reject(y.failures[0]):!!f})})})},r.prototype.update=function(n,s){if(typeof n=="object"&&!d(n)){var c=q(n,this.schema.primKey.keyPath);return c===void 0?et(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(c).modify(s)}else return this.where(":id").equals(n).modify(s)},r.prototype.put=function(n,s){var c=this,u=this.schema.primKey,p=u.auto,f=u.keyPath,v=n;return f&&p&&(v=ra(f)(n)),this._trans("readwrite",function(y){return c.core.mutate({trans:y,type:"put",values:[v],keys:s!=null?[s]:null})}).then(function(y){return y.numFailures?ae.reject(y.failures[0]):y.lastResult}).then(function(y){if(f)try{X(n,f,y)}catch{}return y})},r.prototype.delete=function(n){var s=this;return this._trans("readwrite",function(c){return s.core.mutate({trans:c,type:"delete",keys:[n]}).then(function(u){return na(s,[n],u)}).then(function(u){return u.numFailures?ae.reject(u.failures[0]):void 0})})},r.prototype.clear=function(){var n=this;return this._trans("readwrite",function(s){return n.core.mutate({trans:s,type:"deleteRange",range:Ro}).then(function(c){return na(n,null,c)})}).then(function(s){return s.numFailures?ae.reject(s.failures[0]):void 0})},r.prototype.bulkGet=function(n){var s=this;return this._trans("readonly",function(c){return s.core.getMany({keys:n,trans:c}).then(function(u){return u.map(function(p){return s.hook.reading.fire(p)})})})},r.prototype.bulkAdd=function(n,s,c){var u=this,p=Array.isArray(s)?s:void 0;c=c||(p?void 0:s);var f=c?c.allKeys:void 0;return this._trans("readwrite",function(v){var y=u.schema.primKey,S=y.auto,E=y.keyPath;if(E&&p)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(p&&p.length!==n.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var A=n.length,C=E&&S?n.map(ra(E)):n;return u.core.mutate({trans:v,type:"add",keys:p,values:C,wantResults:f}).then(function(B){var T=B.numFailures,R=B.results,D=B.lastResult,I=B.failures,j=f?R:D;if(T===0)return j;throw new Me("".concat(u.name,".bulkAdd(): ").concat(T," of ").concat(A," operations failed"),I)})})},r.prototype.bulkPut=function(n,s,c){var u=this,p=Array.isArray(s)?s:void 0;c=c||(p?void 0:s);var f=c?c.allKeys:void 0;return this._trans("readwrite",function(v){var y=u.schema.primKey,S=y.auto,E=y.keyPath;if(E&&p)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(p&&p.length!==n.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var A=n.length,C=E&&S?n.map(ra(E)):n;return u.core.mutate({trans:v,type:"put",keys:p,values:C,wantResults:f}).then(function(B){var T=B.numFailures,R=B.results,D=B.lastResult,I=B.failures,j=f?R:D;if(T===0)return j;throw new Me("".concat(u.name,".bulkPut(): ").concat(T," of ").concat(A," operations failed"),I)})})},r.prototype.bulkUpdate=function(n){var s=this,c=this.core,u=n.map(function(v){return v.key}),p=n.map(function(v){return v.changes}),f=[];return this._trans("readwrite",function(v){return c.getMany({trans:v,keys:u,cache:"clone"}).then(function(y){var S=[],E=[];n.forEach(function(C,B){var T=C.key,R=C.changes,D=y[B];if(D){for(var I=0,j=Object.keys(R);I<j.length;I++){var G=j[I],M=R[G];if(G===s.schema.primKey.keyPath){if(Ue(M,T)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else X(D,G,M)}f.push(B),S.push(T),E.push(D)}});var A=S.length;return c.mutate({trans:v,type:"put",keys:S,values:E,updates:{keys:u,changeSpecs:p}}).then(function(C){var B=C.numFailures,T=C.failures;if(B===0)return A;for(var R=0,D=Object.keys(T);R<D.length;R++){var I=D[R],j=f[Number(I)];if(j!=null){var G=T[I];delete T[I],T[j]=G}}throw new Me("".concat(s.name,".bulkUpdate(): ").concat(B," of ").concat(A," operations failed"),T)})})})},r.prototype.bulkDelete=function(n){var s=this,c=n.length;return this._trans("readwrite",function(u){return s.core.mutate({trans:u,type:"delete",keys:n}).then(function(p){return na(s,n,p)})}).then(function(u){var p=u.numFailures,f=u.lastResult,v=u.failures;if(p===0)return f;throw new Me("".concat(s.name,".bulkDelete(): ").concat(p," of ").concat(c," operations failed"),v)})},r})();function mn(r){var n={},s=function(v,y){if(y){for(var S=arguments.length,E=new Array(S-1);--S;)E[S-1]=arguments[S];return n[v].subscribe.apply(null,E),r}else if(typeof v=="string")return n[v]};s.addEventType=p;for(var c=1,u=arguments.length;c<u;++c)p(arguments[c]);return s;function p(v,y,S){if(typeof v=="object")return f(v);y||(y=gi),S||(S=We);var E={subscribers:[],fire:S,subscribe:function(A){E.subscribers.indexOf(A)===-1&&(E.subscribers.push(A),E.fire=y(E.fire,A))},unsubscribe:function(A){E.subscribers=E.subscribers.filter(function(C){return C!==A}),E.fire=E.subscribers.reduce(y,S)}};return n[v]=s[v]=E,E}function f(v){l(v).forEach(function(y){var S=v[y];if(d(S))p(y,v[y][0],v[y][1]);else if(S==="asap")var E=p(y,kr,function(){for(var C=arguments.length,B=new Array(C);C--;)B[C]=arguments[C];E.subscribers.forEach(function(T){W(function(){T.apply(null,B)})})});else throw new ee.InvalidArgument("Invalid event config")})}}function gn(r,n){return P(n).from({prototype:r}),n}function Fp(r){return gn(Do.prototype,function(s,c,u){this.db=r,this._tx=u,this.name=s,this.schema=c,this.hook=r._allTables[s]?r._allTables[s].hook:mn(null,{creating:[mi,We],reading:[Tr,kr],updating:[Vt,We],deleting:[Ht,We]})})}function Vr(r,n){return!(r.filter||r.algorithm||r.or)&&(n?r.justLimit:!r.replayFilter)}function Pi(r,n){r.filter=Nr(r.filter,n)}function Ri(r,n,s){var c=r.replayFilter;r.replayFilter=c?function(){return Nr(c(),n())}:n,r.justLimit=s&&!c}function Bp(r,n){r.isMatch=Nr(r.isMatch,n)}function aa(r,n){if(r.isPrimKey)return n.primaryKey;var s=n.getIndexByKeyPath(r.index);if(!s)throw new ee.Schema("KeyPath "+r.index+" on object store "+n.name+" is not indexed");return s}function Oo(r,n,s){var c=aa(r,n.schema);return n.openCursor({trans:s,values:!r.keysOnly,reverse:r.dir==="prev",unique:!!r.unique,query:{index:c,range:r.range}})}function ia(r,n,s,c){var u=r.replayFilter?Nr(r.filter,r.replayFilter()):r.filter;if(r.or){var p={},f=function(v,y,S){if(!u||u(y,S,function(C){return y.stop(C)},function(C){return y.fail(C)})){var E=y.primaryKey,A=""+E;A==="[object ArrayBuffer]"&&(A=""+new Uint8Array(E)),b(p,A)||(p[A]=!0,n(v,y,S))}};return Promise.all([r.or._iterate(f,s),Lo(Oo(r,c,s),r.algorithm,f,!r.keysOnly&&r.valueMapper)])}else return Lo(Oo(r,c,s),Nr(r.algorithm,u),n,!r.keysOnly&&r.valueMapper)}function Lo(r,n,s,c){var u=c?function(f,v,y){return s(c(f),v,y)}:s,p=Je(u);return r.then(function(f){if(f)return f.start(function(){var v=function(){return f.continue()};(!n||n(f,function(y){return v=y},function(y){f.stop(y),v=We},function(y){f.fail(y),v=We}))&&p(f.value,f,function(y){return v=y}),v()})})}var zp=(function(){function r(){}return r.prototype._read=function(n,s){var c=this._ctx;return c.error?c.table._trans(null,et.bind(null,c.error)):c.table._trans("readonly",n).then(s)},r.prototype._write=function(n){var s=this._ctx;return s.error?s.table._trans(null,et.bind(null,s.error)):s.table._trans("readwrite",n,"locked")},r.prototype._addAlgorithm=function(n){var s=this._ctx;s.algorithm=Nr(s.algorithm,n)},r.prototype._iterate=function(n,s){return ia(this._ctx,n,s,this._ctx.table.core)},r.prototype.clone=function(n){var s=Object.create(this.constructor.prototype),c=Object.create(this._ctx);return n&&m(c,n),s._ctx=c,s},r.prototype.raw=function(){return this._ctx.valueMapper=null,this},r.prototype.each=function(n){var s=this._ctx;return this._read(function(c){return ia(s,n,c,s.table.core)})},r.prototype.count=function(n){var s=this;return this._read(function(c){var u=s._ctx,p=u.table.core;if(Vr(u,!0))return p.count({trans:c,query:{index:aa(u,p.schema),range:u.range}}).then(function(v){return Math.min(v,u.limit)});var f=0;return ia(u,function(){return++f,!1},c,p).then(function(){return f})}).then(n)},r.prototype.sortBy=function(n,s){var c=n.split(".").reverse(),u=c[0],p=c.length-1;function f(S,E){return E?f(S[c[E]],E-1):S[u]}var v=this._ctx.dir==="next"?1:-1;function y(S,E){var A=f(S,p),C=f(E,p);return Ue(A,C)*v}return this.toArray(function(S){return S.sort(y)}).then(s)},r.prototype.toArray=function(n){var s=this;return this._read(function(c){var u=s._ctx;if(Vr(u,!0)&&u.limit>0){var p=u.valueMapper,f=aa(u,u.table.core.schema);return u.table.core.query({trans:c,limit:u.limit,values:!0,direction:u.dir==="prev"?"prev":void 0,query:{index:f,range:u.range}}).then(function(y){var S=y.result;return p?S.map(p):S})}else{var v=[];return ia(u,function(y){return v.push(y)},c,u.table.core).then(function(){return v})}},n)},r.prototype.offset=function(n){var s=this._ctx;return n<=0?this:(s.offset+=n,Vr(s)?Ri(s,function(){var c=n;return function(u,p){return c===0?!0:c===1?(--c,!1):(p(function(){u.advance(c),c=0}),!1)}}):Ri(s,function(){var c=n;return function(){return--c<0}}),this)},r.prototype.limit=function(n){return this._ctx.limit=Math.min(this._ctx.limit,n),Ri(this._ctx,function(){var s=n;return function(c,u,p){return--s<=0&&u(p),s>=0}},!0),this},r.prototype.until=function(n,s){return Pi(this._ctx,function(c,u,p){return n(c.value)?(u(p),s):!0}),this},r.prototype.first=function(n){return this.limit(1).toArray(function(s){return s[0]}).then(n)},r.prototype.last=function(n){return this.reverse().first(n)},r.prototype.filter=function(n){return Pi(this._ctx,function(s){return n(s.value)}),Bp(this._ctx,n),this},r.prototype.and=function(n){return this.filter(n)},r.prototype.or=function(n){return new this.db.WhereClause(this._ctx.table,n,this)},r.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},r.prototype.desc=function(){return this.reverse()},r.prototype.eachKey=function(n){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(c,u){n(u.key,u)})},r.prototype.eachUniqueKey=function(n){return this._ctx.unique="unique",this.eachKey(n)},r.prototype.eachPrimaryKey=function(n){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(c,u){n(u.primaryKey,u)})},r.prototype.keys=function(n){var s=this._ctx;s.keysOnly=!s.isMatch;var c=[];return this.each(function(u,p){c.push(p.key)}).then(function(){return c}).then(n)},r.prototype.primaryKeys=function(n){var s=this._ctx;if(Vr(s,!0)&&s.limit>0)return this._read(function(u){var p=aa(s,s.table.core.schema);return s.table.core.query({trans:u,values:!1,limit:s.limit,direction:s.dir==="prev"?"prev":void 0,query:{index:p,range:s.range}})}).then(function(u){var p=u.result;return p}).then(n);s.keysOnly=!s.isMatch;var c=[];return this.each(function(u,p){c.push(p.primaryKey)}).then(function(){return c}).then(n)},r.prototype.uniqueKeys=function(n){return this._ctx.unique="unique",this.keys(n)},r.prototype.firstKey=function(n){return this.limit(1).keys(function(s){return s[0]}).then(n)},r.prototype.lastKey=function(n){return this.reverse().firstKey(n)},r.prototype.distinct=function(){var n=this._ctx,s=n.index&&n.table.schema.idxByName[n.index];if(!s||!s.multi)return this;var c={};return Pi(this._ctx,function(u){var p=u.primaryKey.toString(),f=b(c,p);return c[p]=!0,!f}),this},r.prototype.modify=function(n){var s=this,c=this._ctx;return this._write(function(u){var p;typeof n=="function"?p=n:p=function(I){return _o(I,n)};var f=c.table.core,v=f.schema.primaryKey,y=v.outbound,S=v.extractKey,E=200,A=s.db._options.modifyChunkSize;A&&(typeof A=="object"?E=A[f.name]||A["*"]||200:E=A);var C=[],B=0,T=[],R=function(I,j){var G=j.failures,M=j.numFailures;B+=I-M;for(var H=0,oe=l(G);H<oe.length;H++){var te=oe[H];C.push(G[te])}},D=n===$o;return s.clone().primaryKeys().then(function(I){var j=Vr(c)&&c.limit===1/0&&(typeof n!="function"||D)&&{index:c.index,range:c.range},G=function(M){var H=Math.min(E,I.length-M),oe=I.slice(M,M+H);return(D?Promise.resolve([]):f.getMany({trans:u,keys:oe,cache:"immutable"})).then(function(te){var re=[],ye=[],$e=y?[]:null,xe=D?oe:[];if(!D)for(var be=0;be<H;++be){var Ae=te[be],Pe={value:Te(Ae),primKey:I[M+be]};p.call(Pe,Pe.value,Pe)!==!1&&(Pe.value==null?xe.push(I[M+be]):!y&&Ue(S(Ae),S(Pe.value))!==0?(xe.push(I[M+be]),re.push(Pe.value)):(ye.push(Pe.value),y&&$e.push(I[M+be])))}return Promise.resolve(re.length>0&&f.mutate({trans:u,type:"add",values:re}).then(function(Ge){for(var ke in Ge.failures)xe.splice(parseInt(ke),1);R(re.length,Ge)})).then(function(){return(ye.length>0||j&&typeof n=="object")&&f.mutate({trans:u,type:"put",keys:$e,values:ye,criteria:j,changeSpec:typeof n!="function"&&n,isAdditionalChunk:M>0}).then(function(Ge){return R(ye.length,Ge)})}).then(function(){return(xe.length>0||j&&D)&&f.mutate({trans:u,type:"delete",keys:xe,criteria:j,isAdditionalChunk:M>0}).then(function(Ge){return na(c.table,xe,Ge)}).then(function(Ge){return R(xe.length,Ge)})}).then(function(){return I.length>M+H&&G(M+E)})})};return G(0).then(function(){if(C.length>0)throw new J("Error modifying one or more objects",C,B,T);return I.length})})})},r.prototype.delete=function(){var n=this._ctx,s=n.range;return Vr(n)&&!n.table.schema.yProps&&(n.isPrimKey||s.type===3)?this._write(function(c){var u=n.table.core.schema.primaryKey,p=s;return n.table.core.count({trans:c,query:{index:u,range:p}}).then(function(f){return n.table.core.mutate({trans:c,type:"deleteRange",range:p}).then(function(v){var y=v.failures,S=v.numFailures;if(S)throw new J("Could not delete some values",Object.keys(y).map(function(E){return y[E]}),f-S);return f-S})})}):this.modify($o)},r})(),$o=function(r,n){return n.value=null};function Hp(r){return gn(zp.prototype,function(s,c){this.db=r;var u=Ro,p=null;if(c)try{u=c()}catch(S){p=S}var f=s._ctx,v=f.table,y=v.hook.reading.fire;this._ctx={table:v,index:f.index,isPrimKey:!f.index||v.schema.primKey.keyPath&&f.index===v.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:p,or:f.or,valueMapper:y!==kr?y:null}})}function Gp(r,n){return r<n?-1:r===n?0:1}function Kp(r,n){return r>n?-1:r===n?0:1}function At(r,n,s){var c=r instanceof Uo?new r.Collection(r):r;return c._ctx.error=s?new s(n):new TypeError(n),c}function qr(r){return new r.Collection(r,function(){return Mo("")}).limit(0)}function jp(r){return r==="next"?function(n){return n.toUpperCase()}:function(n){return n.toLowerCase()}}function Vp(r){return r==="next"?function(n){return n.toLowerCase()}:function(n){return n.toUpperCase()}}function qp(r,n,s,c,u,p){for(var f=Math.min(r.length,c.length),v=-1,y=0;y<f;++y){var S=n[y];if(S!==c[y])return u(r[y],s[y])<0?r.substr(0,y)+s[y]+s.substr(y+1):u(r[y],c[y])<0?r.substr(0,y)+c[y]+s.substr(y+1):v>=0?r.substr(0,v)+n[v]+s.substr(v+1):null;u(r[y],S)<0&&(v=y)}return f<c.length&&p==="next"?r+s.substr(r.length):f<r.length&&p==="prev"?r.substr(0,s.length):v<0?null:r.substr(0,v)+c[v]+s.substr(v+1)}function sa(r,n,s,c){var u,p,f,v,y,S,E,A=s.length;if(!s.every(function(R){return typeof R=="string"}))return At(r,Ao);function C(R){u=jp(R),p=Vp(R),f=R==="next"?Gp:Kp;var D=s.map(function(I){return{lower:p(I),upper:u(I)}}).sort(function(I,j){return f(I.lower,j.lower)});v=D.map(function(I){return I.upper}),y=D.map(function(I){return I.lower}),S=R,E=R==="next"?"":c}C("next");var B=new r.Collection(r,function(){return ur(v[0],y[A-1]+c)});B._ondirectionchange=function(R){C(R)};var T=0;return B._addAlgorithm(function(R,D,I){var j=R.key;if(typeof j!="string")return!1;var G=p(j);if(n(G,y,T))return!0;for(var M=null,H=T;H<A;++H){var oe=qp(j,G,v[H],y[H],f,S);oe===null&&M===null?T=H+1:(M===null||f(M,oe)>0)&&(M=oe)}return D(M!==null?function(){R.continue(M+E)}:I),!1}),B}function ur(r,n,s,c){return{type:2,lower:r,upper:n,lowerOpen:s,upperOpen:c}}function Mo(r){return{type:1,lower:r,upper:r}}var Uo=(function(){function r(){}return Object.defineProperty(r.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),r.prototype.between=function(n,s,c,u){c=c!==!1,u=u===!0;try{return this._cmp(n,s)>0||this._cmp(n,s)===0&&(c||u)&&!(c&&u)?qr(this):new this.Collection(this,function(){return ur(n,s,!c,!u)})}catch{return At(this,Jt)}},r.prototype.equals=function(n){return n==null?At(this,Jt):new this.Collection(this,function(){return Mo(n)})},r.prototype.above=function(n){return n==null?At(this,Jt):new this.Collection(this,function(){return ur(n,void 0,!0)})},r.prototype.aboveOrEqual=function(n){return n==null?At(this,Jt):new this.Collection(this,function(){return ur(n,void 0,!1)})},r.prototype.below=function(n){return n==null?At(this,Jt):new this.Collection(this,function(){return ur(void 0,n,!1,!0)})},r.prototype.belowOrEqual=function(n){return n==null?At(this,Jt):new this.Collection(this,function(){return ur(void 0,n)})},r.prototype.startsWith=function(n){return typeof n!="string"?At(this,Ao):this.between(n,n+Rr,!0,!0)},r.prototype.startsWithIgnoreCase=function(n){return n===""?this.startsWith(n):sa(this,function(s,c){return s.indexOf(c[0])===0},[n],Rr)},r.prototype.equalsIgnoreCase=function(n){return sa(this,function(s,c){return s===c[0]},[n],"")},r.prototype.anyOfIgnoreCase=function(){var n=Le.apply(De,arguments);return n.length===0?qr(this):sa(this,function(s,c){return c.indexOf(s)!==-1},n,"")},r.prototype.startsWithAnyOfIgnoreCase=function(){var n=Le.apply(De,arguments);return n.length===0?qr(this):sa(this,function(s,c){return c.some(function(u){return s.indexOf(u)===0})},n,Rr)},r.prototype.anyOf=function(){var n=this,s=Le.apply(De,arguments),c=this._cmp;try{s.sort(c)}catch{return At(this,Jt)}if(s.length===0)return qr(this);var u=new this.Collection(this,function(){return ur(s[0],s[s.length-1])});u._ondirectionchange=function(f){c=f==="next"?n._ascending:n._descending,s.sort(c)};var p=0;return u._addAlgorithm(function(f,v,y){for(var S=f.key;c(S,s[p])>0;)if(++p,p===s.length)return v(y),!1;return c(S,s[p])===0?!0:(v(function(){f.continue(s[p])}),!1)}),u},r.prototype.notEqual=function(n){return this.inAnyRange([[Ti,n],[n,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},r.prototype.noneOf=function(){var n=Le.apply(De,arguments);if(n.length===0)return new this.Collection(this);try{n.sort(this._ascending)}catch{return At(this,Jt)}var s=n.reduce(function(c,u){return c?c.concat([[c[c.length-1][1],u]]):[[Ti,u]]},null);return s.push([n[n.length-1],this.db._maxKey]),this.inAnyRange(s,{includeLowers:!1,includeUppers:!1})},r.prototype.inAnyRange=function(n,s){var c=this,u=this._cmp,p=this._ascending,f=this._descending,v=this._min,y=this._max;if(n.length===0)return qr(this);if(!n.every(function(H){return H[0]!==void 0&&H[1]!==void 0&&p(H[0],H[1])<=0}))return At(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var S=!s||s.includeLowers!==!1,E=s&&s.includeUppers===!0;function A(H,oe){for(var te=0,re=H.length;te<re;++te){var ye=H[te];if(u(oe[0],ye[1])<0&&u(oe[1],ye[0])>0){ye[0]=v(ye[0],oe[0]),ye[1]=y(ye[1],oe[1]);break}}return te===re&&H.push(oe),H}var C=p;function B(H,oe){return C(H[0],oe[0])}var T;try{T=n.reduce(A,[]),T.sort(B)}catch{return At(this,Jt)}var R=0,D=E?function(H){return p(H,T[R][1])>0}:function(H){return p(H,T[R][1])>=0},I=S?function(H){return f(H,T[R][0])>0}:function(H){return f(H,T[R][0])>=0};function j(H){return!D(H)&&!I(H)}var G=D,M=new this.Collection(this,function(){return ur(T[0][0],T[T.length-1][1],!S,!E)});return M._ondirectionchange=function(H){H==="next"?(G=D,C=p):(G=I,C=f),T.sort(B)},M._addAlgorithm(function(H,oe,te){for(var re=H.key;G(re);)if(++R,R===T.length)return oe(te),!1;return j(re)?!0:(c._cmp(re,T[R][1])===0||c._cmp(re,T[R][0])===0||oe(function(){C===p?H.continue(T[R][0]):H.continue(T[R][1])}),!1)}),M},r.prototype.startsWithAnyOf=function(){var n=Le.apply(De,arguments);return n.every(function(s){return typeof s=="string"})?n.length===0?qr(this):this.inAnyRange(n.map(function(s){return[s,s+Rr]})):At(this,"startsWithAnyOf() only works with strings")},r})();function Yp(r){return gn(Uo.prototype,function(s,c,u){if(this.db=r,this._ctx={table:s,index:c===":id"?null:c,or:u},this._cmp=this._ascending=Ue,this._descending=function(p,f){return Ue(f,p)},this._max=function(p,f){return Ue(p,f)>0?p:f},this._min=function(p,f){return Ue(p,f)<0?p:f},this._IDBKeyRange=r._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})}function Ut(r){return Je(function(n){return hn(n),r(n.target.error),!1})}function hn(r){r.stopPropagation&&r.stopPropagation(),r.preventDefault&&r.preventDefault()}var vn="storagemutated",Ni="x-storagemutated-1",dr=mn(null,vn),Xp=(function(){function r(){}return r.prototype._lock=function(){return U(!we.global),++this._reculock,this._reculock===1&&!we.global&&(we.lockOwnerFor=this),this},r.prototype._unlock=function(){if(U(!we.global),--this._reculock===0)for(we.global||(we.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var n=this._blockedFuncs.shift();try{Pr(n[1],n[0])}catch{}}return this},r.prototype._locked=function(){return this._reculock&&we.lockOwnerFor!==this},r.prototype.create=function(n){var s=this;if(!this.mode)return this;var c=this.db.idbdb,u=this.db._state.dbOpenError;if(U(!this.idbtrans),!n&&!c)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return U(this._completion._state===null),n=this.idbtrans=n||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):c.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),n.onerror=Je(function(p){hn(p),s._reject(n.error)}),n.onabort=Je(function(p){hn(p),s.active&&s._reject(new ee.Abort(n.error)),s.active=!1,s.on("abort").fire(p)}),n.oncomplete=Je(function(){s.active=!1,s._resolve(),"mutatedParts"in n&&dr.storagemutated.fire(n.mutatedParts)}),this},r.prototype._promise=function(n,s,c){var u=this;if(n==="readwrite"&&this.mode!=="readwrite")return et(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return et(new ee.TransactionInactive);if(this._locked())return new ae(function(f,v){u._blockedFuncs.push([function(){u._promise(n,s,c).then(f,v)},we])});if(c)return or(function(){var f=new ae(function(v,y){u._lock();var S=s(v,y,u);S&&S.then&&S.then(v,y)});return f.finally(function(){return u._unlock()}),f._lib=!0,f});var p=new ae(function(f,v){var y=s(f,v,u);y&&y.then&&y.then(f,v)});return p._lib=!0,p},r.prototype._root=function(){return this.parent?this.parent._root():this},r.prototype.waitFor=function(n){var s=this._root(),c=ae.resolve(n);if(s._waitingFor)s._waitingFor=s._waitingFor.then(function(){return c});else{s._waitingFor=c,s._waitingQueue=[];var u=s.idbtrans.objectStore(s.storeNames[0]);(function f(){for(++s._spinCount;s._waitingQueue.length;)s._waitingQueue.shift()();s._waitingFor&&(u.get(-1/0).onsuccess=f)})()}var p=s._waitingFor;return new ae(function(f,v){c.then(function(y){return s._waitingQueue.push(Je(f.bind(null,y)))},function(y){return s._waitingQueue.push(Je(v.bind(null,y)))}).finally(function(){s._waitingFor===p&&(s._waitingFor=null)})})},r.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},r.prototype.table=function(n){var s=this._memoizedTables||(this._memoizedTables={});if(b(s,n))return s[n];var c=this.schema[n];if(!c)throw new ee.NotFound("Table "+n+" not part of transaction");var u=new this.db.Table(n,c,this);return u.core=this.db.core.table(n),s[n]=u,u},r})();function Jp(r){return gn(Xp.prototype,function(s,c,u,p,f){var v=this;s!=="readonly"&&c.forEach(function(y){var S,E=(S=u[y])===null||S===void 0?void 0:S.yProps;E&&(c=c.concat(E.map(function(A){return A.updatesTable})))}),this.db=r,this.mode=s,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=p,this.idbtrans=null,this.on=mn(this,"complete","error","abort"),this.parent=f||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ae(function(y,S){v._resolve=y,v._reject=S}),this._completion.then(function(){v.active=!1,v.on.complete.fire()},function(y){var S=v.active;return v.active=!1,v.on.error.fire(y),v.parent?v.parent._reject(y):S&&v.idbtrans&&v.idbtrans.abort(),et(y)})})}function Ci(r,n,s,c,u,p,f,v){return{name:r,keyPath:n,unique:s,multi:c,auto:u,compound:p,src:(s&&!f?"&":"")+(c?"*":"")+(u?"++":"")+Wo(n),type:v}}function Wo(r){return typeof r=="string"?r:r?"["+[].join.call(r,"+")+"]":""}function Ii(r,n,s){return{name:r,primKey:n,indexes:s,mappedClass:null,idxByName:L(s,function(c){return[c.name,c]})}}function Zp(r){return r.length===1?r[0]:r}var yn=function(r){try{return r.only([[]]),yn=function(){return[[]]},[[]]}catch{return yn=function(){return Rr},Rr}};function _i(r){return r==null?function(){}:typeof r=="string"?Qp(r):function(n){return q(n,r)}}function Qp(r){var n=r.split(".");return n.length===1?function(s){return s[r]}:function(s){return q(s,r)}}function Fo(r){return[].slice.call(r)}var ef=0;function bn(r){return r==null?":id":typeof r=="string"?r:"[".concat(r.join("+"),"]")}function tf(r,n,s){function c(C,B){var T=Fo(C.objectStoreNames),R=T.length>0?B.objectStore(T[0]):{};return{schema:{name:C.name,tables:T.map(function(D){return B.objectStore(D)}).map(function(D){var I=D.keyPath,j=D.autoIncrement,G=d(I),M=I==null,H={},oe={name:D.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:M,compound:G,keyPath:I,autoIncrement:j,unique:!0,extractKey:_i(I)},indexes:Fo(D.indexNames).map(function(te){return D.index(te)}).map(function(te){var re=te.name,ye=te.unique,$e=te.multiEntry,xe=te.keyPath,be=d(xe),Ae={name:re,compound:be,keyPath:xe,unique:ye,multiEntry:$e,extractKey:_i(xe)};return H[bn(xe)]=Ae,Ae}),getIndexByKeyPath:function(te){return H[bn(te)]}};return H[":id"]=oe.primaryKey,I!=null&&(H[bn(I)]=oe.primaryKey),oe})},hasGetAll:T.length>0&&"getAll"in R&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in R}}function u(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var B=C.lower,T=C.upper,R=C.lowerOpen,D=C.upperOpen,I=B===void 0?T===void 0?null:n.upperBound(T,!!D):T===void 0?n.lowerBound(B,!!R):n.bound(B,T,!!R,!!D);return I}function p(C){var B=C.name;function T(I){var j=I.trans,G=I.type,M=I.keys,H=I.values,oe=I.range;return new Promise(function(te,re){te=Je(te);var ye=j.objectStore(B),$e=ye.keyPath==null,xe=G==="put"||G==="add";if(!xe&&G!=="delete"&&G!=="deleteRange")throw new Error("Invalid operation type: "+G);var be=(M||H||{length:1}).length;if(M&&H&&M.length!==H.length)throw new Error("Given keys array must have same length as given values array.");if(be===0)return te({numFailures:0,failures:{},results:[],lastResult:void 0});var Ae,Pe=[],Ge=[],ke=0,it=function(gt){++ke,hn(gt)};if(G==="deleteRange"){if(oe.type===4)return te({numFailures:ke,failures:Ge,results:[],lastResult:void 0});oe.type===3?Pe.push(Ae=ye.clear()):Pe.push(Ae=ye.delete(u(oe)))}else{var It=xe?$e?[H,M]:[H,null]:[M,null],xt=It[0],_r=It[1];if(xe)for(var bt=0;bt<be;++bt)Pe.push(Ae=_r&&_r[bt]!==void 0?ye[G](xt[bt],_r[bt]):ye[G](xt[bt])),Ae.onerror=it;else for(var bt=0;bt<be;++bt)Pe.push(Ae=ye[G](xt[bt])),Ae.onerror=it}var _t=function(gt){var Dr=gt.target.result;Pe.forEach(function(Wt,ya){return Wt.error!=null&&(Ge[ya]=Wt.error)}),te({numFailures:ke,failures:Ge,results:G==="delete"?M:Pe.map(function(Wt){return Wt.result}),lastResult:Dr})};Ae.onerror=function(gt){it(gt),_t(gt)},Ae.onsuccess=_t})}function R(I){var j=I.trans,G=I.values,M=I.query,H=I.reverse,oe=I.unique;return new Promise(function(te,re){te=Je(te);var ye=M.index,$e=M.range,xe=j.objectStore(B),be=ye.isPrimaryKey?xe:xe.index(ye.name),Ae=H?oe?"prevunique":"prev":oe?"nextunique":"next",Pe=G||!("openKeyCursor"in be)?be.openCursor(u($e),Ae):be.openKeyCursor(u($e),Ae);Pe.onerror=Ut(re),Pe.onsuccess=Je(function(Ge){var ke=Pe.result;if(!ke){te(null);return}ke.___id=++ef,ke.done=!1;var it=ke.continue.bind(ke),It=ke.continuePrimaryKey;It&&(It=It.bind(ke));var xt=ke.advance.bind(ke),_r=function(){throw new Error("Cursor not started")},bt=function(){throw new Error("Cursor not stopped")};ke.trans=j,ke.stop=ke.continue=ke.continuePrimaryKey=ke.advance=_r,ke.fail=Je(re),ke.next=function(){var _t=this,gt=1;return this.start(function(){return gt--?_t.continue():_t.stop()}).then(function(){return _t})},ke.start=function(_t){var gt=new Promise(function(Wt,ya){Wt=Je(Wt),Pe.onerror=Ut(ya),ke.fail=ya,ke.stop=function(Gf){ke.stop=ke.continue=ke.continuePrimaryKey=ke.advance=bt,Wt(Gf)}}),Dr=function(){if(Pe.result)try{_t()}catch(Wt){ke.fail(Wt)}else ke.done=!0,ke.start=function(){throw new Error("Cursor behind last entry")},ke.stop()};return Pe.onsuccess=Je(function(Wt){Pe.onsuccess=Dr,Dr()}),ke.continue=it,ke.continuePrimaryKey=It,ke.advance=xt,Dr(),gt},te(ke)},re)})}function D(I,j){return function(G){return new Promise(function(M,H){var oe;M=Je(M);var te=G.trans,re=G.values,ye=G.limit,$e=G.query,xe=(oe=G.direction)!==null&&oe!==void 0?oe:"next",be=ye===1/0?void 0:ye,Ae=$e.index,Pe=$e.range,Ge=te.objectStore(B),ke=Ae.isPrimaryKey?Ge:Ge.index(Ae.name),it=u(Pe);if(ye===0)return M({result:[]});if(j){var It={query:it,count:be,direction:xe},xt=re?ke.getAll(It):ke.getAllKeys(It);xt.onsuccess=function(gt){return M({result:gt.target.result})},xt.onerror=Ut(H)}else if(I&&xe==="next"){var xt=re?ke.getAll(it,be):ke.getAllKeys(it,be);xt.onsuccess=function(Dr){return M({result:Dr.target.result})},xt.onerror=Ut(H)}else{var _r=0,bt=re||!("openKeyCursor"in ke)?ke.openCursor(it,xe):ke.openKeyCursor(it,xe),_t=[];bt.onsuccess=function(){var gt=bt.result;if(!gt)return M({result:_t});if(_t.push(re?gt.value:gt.primaryKey),++_r===ye)return M({result:_t});gt.continue()},bt.onerror=Ut(H)}})}}return{name:B,schema:C,mutate:T,getMany:function(I){var j=I.trans,G=I.keys;return new Promise(function(M,H){M=Je(M);for(var oe=j.objectStore(B),te=G.length,re=new Array(te),ye=0,$e=0,xe,be=function(ke){var it=ke.target;(re[it._pos]=it.result)!=null,++$e===ye&&M(re)},Ae=Ut(H),Pe=0;Pe<te;++Pe){var Ge=G[Pe];Ge!=null&&(xe=oe.get(G[Pe]),xe._pos=Pe,xe.onsuccess=be,xe.onerror=Ae,++ye)}ye===0&&M(re)})},get:function(I){var j=I.trans,G=I.key;return new Promise(function(M,H){M=Je(M);var oe=j.objectStore(B),te=oe.get(G);te.onsuccess=function(re){return M(re.target.result)},te.onerror=Ut(H)})},query:D(y,S),openCursor:R,count:function(I){var j=I.query,G=I.trans,M=j.index,H=j.range;return new Promise(function(oe,te){var re=G.objectStore(B),ye=M.isPrimaryKey?re:re.index(M.name),$e=u(H),xe=$e?ye.count($e):ye.count();xe.onsuccess=Je(function(be){return oe(be.target.result)}),xe.onerror=Ut(te)})}}}var f=c(r,s),v=f.schema,y=f.hasGetAll,S=f.hasIdb3Features,E=v.tables.map(function(C){return p(C)}),A={};return E.forEach(function(C){return A[C.name]=C}),{stack:"dbcore",transaction:r.transaction.bind(r),table:function(C){var B=A[C];if(!B)throw new Error("Table '".concat(C,"' not found"));return A[C]},MIN_KEY:-1/0,MAX_KEY:yn(n),schema:v}}function rf(r,n){return n.reduce(function(s,c){var u=c.create;return a(a({},s),u(s))},r)}function nf(r,n,s,c){var u=s.IDBKeyRange;s.indexedDB;var p=rf(tf(n,u,c),r.dbcore);return{dbcore:p}}function oa(r,n){var s=n.db,c=nf(r._middlewares,s,r._deps,n);r.core=c.dbcore,r.tables.forEach(function(u){var p=u.name;r.core.schema.tables.some(function(f){return f.name===p})&&(u.core=r.core.table(p),r[p]instanceof r.Table&&(r[p].core=u.core))})}function la(r,n,s,c){s.forEach(function(u){var p=c[u];n.forEach(function(f){var v=$(f,u);(!v||"value"in v&&v.value===void 0)&&(f===r.Transaction.prototype||f instanceof r.Transaction?x(f,u,{get:function(){return this.table(u)},set:function(y){k(this,u,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):f[u]=new r.Table(u,p))})})}function Di(r,n){n.forEach(function(s){for(var c in s)s[c]instanceof r.Table&&delete s[c]})}function af(r,n){return r._cfg.version-n._cfg.version}function sf(r,n,s,c){var u=r._dbSchema;s.objectStoreNames.contains("$meta")&&!u.$meta&&(u.$meta=Ii("$meta",zo("")[0],[]),r._storeNames.push("$meta"));var p=r._createTransaction("readwrite",r._storeNames,u);p.create(s),p._completion.catch(c);var f=p._reject.bind(p),v=we.transless||we;or(function(){if(we.trans=p,we.transless=v,n===0)l(u).forEach(function(y){Li(s,y,u[y].primKey,u[y].indexes)}),oa(r,s),ae.follow(function(){return r.on.populate.fire(p)}).catch(f);else return oa(r,s),lf(r,p,n).then(function(y){return cf(r,y,p,s)}).catch(f)})}function of(r,n){Bo(r._dbSchema,n),n.db.version%10===0&&!n.objectStoreNames.contains("$meta")&&n.db.createObjectStore("$meta").add(Math.ceil(n.db.version/10-1),"version");var s=ua(r,r.idbdb,n);da(r,r._dbSchema,n);for(var c=Oi(s,r._dbSchema),u=function(S){if(S.change.length||S.recreate)return console.warn("Unable to patch indexes of table ".concat(S.name," because it has changes on the type of index or primary key.")),{value:void 0};var E=n.objectStore(S.name);S.add.forEach(function(A){ge&&console.debug("Dexie upgrade patch: Creating missing index ".concat(S.name,".").concat(A.src)),ca(E,A)})},p=0,f=c.change;p<f.length;p++){var v=f[p],y=u(v);if(typeof y=="object")return y.value}}function lf(r,n,s){return n.storeNames.includes("$meta")?n.table("$meta").get("version").then(function(c){return c??s}):ae.resolve(s)}function cf(r,n,s,c){var u=[],p=r._versions,f=r._dbSchema=ua(r,r.idbdb,c),v=p.filter(function(S){return S._cfg.version>=n});if(v.length===0)return ae.resolve();v.forEach(function(S){u.push(function(){var E=f,A=S._cfg.dbschema;da(r,E,c),da(r,A,c),f=r._dbSchema=A;var C=Oi(E,A);C.add.forEach(function(j){Li(c,j[0],j[1].primKey,j[1].indexes)}),C.change.forEach(function(j){if(j.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=c.objectStore(j.name);j.add.forEach(function(M){return ca(G,M)}),j.change.forEach(function(M){G.deleteIndex(M.name),ca(G,M)}),j.del.forEach(function(M){return G.deleteIndex(M)})});var B=S._cfg.contentUpgrade;if(B&&S._cfg.version>n){oa(r,c),s._memoizedTables={};var T=Z(A);C.del.forEach(function(j){T[j]=E[j]}),Di(r,[r.Transaction.prototype]),la(r,[r.Transaction.prototype],l(T),T),s.schema=T;var R=je(B);R&&jr();var D,I=ae.follow(function(){if(D=B(s),D&&R){var j=lr.bind(null,null);D.then(j,j)}});return D&&typeof D.then=="function"?ae.resolve(D):I.then(function(){return D})}}),u.push(function(E){var A=S._cfg.dbschema;uf(A,E),Di(r,[r.Transaction.prototype]),la(r,[r.Transaction.prototype],r._storeNames,r._dbSchema),s.schema=r._dbSchema}),u.push(function(E){r.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(r.idbdb.version/10)===S._cfg.version?(r.idbdb.deleteObjectStore("$meta"),delete r._dbSchema.$meta,r._storeNames=r._storeNames.filter(function(A){return A!=="$meta"})):E.objectStore("$meta").put(S._cfg.version,"version"))})});function y(){return u.length?ae.resolve(u.shift()(s.idbtrans)).then(y):ae.resolve()}return y().then(function(){Bo(f,c)})}function Oi(r,n){var s={del:[],add:[],change:[]},c;for(c in r)n[c]||s.del.push(c);for(c in n){var u=r[c],p=n[c];if(!u)s.add.push([c,p]);else{var f={name:c,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(u.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||u.primKey.auto!==p.primKey.auto)f.recreate=!0,s.change.push(f);else{var v=u.idxByName,y=p.idxByName,S=void 0;for(S in v)y[S]||f.del.push(S);for(S in y){var E=v[S],A=y[S];E?E.src!==A.src&&f.change.push(A):f.add.push(A)}(f.del.length>0||f.add.length>0||f.change.length>0)&&s.change.push(f)}}}return s}function Li(r,n,s,c){var u=r.db.createObjectStore(n,s.keyPath?{keyPath:s.keyPath,autoIncrement:s.auto}:{autoIncrement:s.auto});return c.forEach(function(p){return ca(u,p)}),u}function Bo(r,n){l(r).forEach(function(s){n.db.objectStoreNames.contains(s)||(ge&&console.debug("Dexie: Creating missing table",s),Li(n,s,r[s].primKey,r[s].indexes))})}function uf(r,n){[].slice.call(n.db.objectStoreNames).forEach(function(s){return r[s]==null&&n.db.deleteObjectStore(s)})}function ca(r,n){r.createIndex(n.name,n.keyPath,{unique:n.unique,multiEntry:n.multi})}function ua(r,n,s){var c={},u=z(n.objectStoreNames,0);return u.forEach(function(p){for(var f=s.objectStore(p),v=f.keyPath,y=Ci(Wo(v),v||"",!0,!1,!!f.autoIncrement,v&&typeof v!="string",!0),S=[],E=0;E<f.indexNames.length;++E){var A=f.index(f.indexNames[E]);v=A.keyPath;var C=Ci(A.name,v,!!A.unique,!!A.multiEntry,!1,v&&typeof v!="string",!1);S.push(C)}c[p]=Ii(p,y,S)}),c}function df(r,n,s){r.verno=n.version/10;var c=r._dbSchema=ua(r,n,s);r._storeNames=z(n.objectStoreNames,0),la(r,[r._allTables],l(c),c)}function pf(r,n){var s=ua(r,r.idbdb,n),c=Oi(s,r._dbSchema);return!(c.add.length||c.change.some(function(u){return u.add.length||u.change.length}))}function da(r,n,s){for(var c=s.db.objectStoreNames,u=0;u<c.length;++u){var p=c[u],f=s.objectStore(p);r._hasGetAll="getAll"in f;for(var v=0;v<f.indexNames.length;++v){var y=f.indexNames[v],S=f.index(y).keyPath,E=typeof S=="string"?S:"["+z(S).join("+")+"]";if(n[p]){var A=n[p].idxByName[E];A&&(A.name=y,delete n[p].idxByName[E],n[p].idxByName[y]=A)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(r._hasGetAll=!1)}function zo(r){return r.split(",").map(function(n,s){var c,u=n.split(":"),p=(c=u[1])===null||c===void 0?void 0:c.trim();n=u[0].trim();var f=n.replace(/([&*]|\+\+)/g,""),v=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return Ci(f,v||null,/\&/.test(n),/\*/.test(n),/\+\+/.test(n),d(v),s===0,p)})}var ff=(function(){function r(){}return r.prototype._createTableSchema=function(n,s,c){return Ii(n,s,c)},r.prototype._parseIndexSyntax=function(n){return zo(n)},r.prototype._parseStoresSpec=function(n,s){var c=this;l(n).forEach(function(u){if(n[u]!==null){var p=c._parseIndexSyntax(n[u]),f=p.shift();if(!f)throw new ee.Schema("Invalid schema for table "+u+": "+n[u]);if(f.unique=!0,f.multi)throw new ee.Schema("Primary key cannot be multiEntry*");p.forEach(function(y){if(y.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!y.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")});var v=c._createTableSchema(u,f,p);s[u]=v}})},r.prototype.stores=function(n){var s=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,n):n;var c=s._versions,u={},p={};return c.forEach(function(f){m(u,f._cfg.storesSource),p=f._cfg.dbschema={},f._parseStoresSpec(u,p)}),s._dbSchema=p,Di(s,[s._allTables,s,s.Transaction.prototype]),la(s,[s._allTables,s,s.Transaction.prototype,this._cfg.tables],l(p),p),s._storeNames=l(p),this},r.prototype.upgrade=function(n){return this._cfg.contentUpgrade=un(this._cfg.contentUpgrade||We,n),this},r})();function mf(r){return gn(ff.prototype,function(s){this.db=r,this._cfg={version:s,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var wn=gf();function gf(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var r=new Set,n=new FinalizationRegistry(function(f){r.delete(f)}),s=function(){return Array.from(r).map(function(f){return f.deref()}).filter(function(f){return f!==void 0})},c=function(f){var v=new WeakRef(f._novip);if(r.add(v),n.register(f._novip,v,v),r.size>f._options.maxConnections){var y=r.values().next().value;r.delete(y),n.unregister(y)}},u=function(f){if(f)for(var v=r.values(),y=v.next();!y.done;){var S=y.value;if(S.deref()===f._novip){r.delete(S),n.unregister(S);return}y=v.next()}};return{toArray:s,add:c,remove:u}}else{var p=[],s=function(){return p},c=function(S){p.push(S._novip)},u=function(S){if(S){var E=p.indexOf(S._novip);E!==-1&&p.splice(E,1)}};return{toArray:s,add:c,remove:u}}}function $i(r,n){var s=r._dbNamesDB;return s||(s=r._dbNamesDB=new Zt(ta,{addons:[],indexedDB:r,IDBKeyRange:n}),s.version(1).stores({dbnames:"name"})),s.table("dbnames")}function Mi(r){return r&&typeof r.databases=="function"}function hf(r){var n=r.indexedDB,s=r.IDBKeyRange;return Mi(n)?Promise.resolve(n.databases()).then(function(c){return c.map(function(u){return u.name}).filter(function(u){return u!==ta})}):$i(n,s).toCollection().primaryKeys()}function vf(r,n){var s=r.indexedDB,c=r.IDBKeyRange;!Mi(s)&&n!==ta&&$i(s,c).put({name:n}).catch(We)}function yf(r,n){var s=r.indexedDB,c=r.IDBKeyRange;!Mi(s)&&n!==ta&&$i(s,c).delete(n).catch(We)}function Ui(r){return or(function(){return we.letThrough=!0,r()})}function bf(){var r=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!r||!indexedDB.databases)return Promise.resolve();var n;return new Promise(function(s){var c=function(){return indexedDB.databases().finally(s)};n=setInterval(c,100),c()}).finally(function(){return clearInterval(n)})}var Wi;function Fi(r){return!("from"in r)}var yt=function(r,n){if(this)m(this,arguments.length?{d:1,from:r,to:arguments.length>1?n:r}:{d:0});else{var s=new yt;return r&&"d"in r&&m(s,r),s}};w(yt.prototype,(Wi={add:function(r){return xn(this,r),this},addKey:function(r){return Sn(this,r,r),this},addKeys:function(r){var n=this;return r.forEach(function(s){return Sn(n,s,s)}),this},hasKey:function(r){var n=pa(this).next(r).value;return n&&Ue(n.from,r)<=0&&Ue(n.to,r)>=0}},Wi[N]=function(){return pa(this)},Wi));function Sn(r,n,s){var c=Ue(n,s);if(!isNaN(c)){if(c>0)throw RangeError();if(Fi(r))return m(r,{from:n,to:s,d:1});var u=r.l,p=r.r;if(Ue(s,r.from)<0)return u?Sn(u,n,s):r.l={from:n,to:s,d:1,l:null,r:null},Go(r);if(Ue(n,r.to)>0)return p?Sn(p,n,s):r.r={from:n,to:s,d:1,l:null,r:null},Go(r);Ue(n,r.from)<0&&(r.from=n,r.l=null,r.d=p?p.d+1:1),Ue(s,r.to)>0&&(r.to=s,r.r=null,r.d=r.l?r.l.d+1:1);var f=!r.r;u&&!r.l&&xn(r,u),p&&f&&xn(r,p)}}function xn(r,n){function s(c,u){var p=u.from,f=u.to,v=u.l,y=u.r;Sn(c,p,f),v&&s(c,v),y&&s(c,y)}Fi(n)||s(r,n)}function Ho(r,n){var s=pa(n),c=s.next();if(c.done)return!1;for(var u=c.value,p=pa(r),f=p.next(u.from),v=f.value;!c.done&&!f.done;){if(Ue(v.from,u.to)<=0&&Ue(v.to,u.from)>=0)return!0;Ue(u.from,v.from)<0?u=(c=s.next(v.from)).value:v=(f=p.next(u.from)).value}return!1}function pa(r){var n=Fi(r)?null:{s:0,n:r};return{next:function(s){for(var c=arguments.length>0;n;)switch(n.s){case 0:if(n.s=1,c)for(;n.n.l&&Ue(s,n.n.from)<0;)n={up:n,n:n.n.l,s:1};else for(;n.n.l;)n={up:n,n:n.n.l,s:1};case 1:if(n.s=2,!c||Ue(s,n.n.to)<=0)return{value:n.n,done:!1};case 2:if(n.n.r){n.s=3,n={up:n,n:n.n.r,s:0};continue}case 3:n=n.up}return{done:!0}}}}function Go(r){var n,s,c=(((n=r.r)===null||n===void 0?void 0:n.d)||0)-(((s=r.l)===null||s===void 0?void 0:s.d)||0),u=c>1?"r":c<-1?"l":"";if(u){var p=u==="r"?"l":"r",f=a({},r),v=r[u];r.from=v.from,r.to=v.to,r[u]=v[u],f[u]=v[p],r[p]=f,f.d=Ko(f)}r.d=Ko(r)}function Ko(r){var n=r.r,s=r.l;return(n?s?Math.max(n.d,s.d):n.d:s?s.d:0)+1}function fa(r,n){return l(n).forEach(function(s){r[s]?xn(r[s],n[s]):r[s]=Fe(n[s])}),r}function Bi(r,n){return r.all||n.all||Object.keys(r).some(function(s){return n[s]&&Ho(n[s],r[s])})}var Cr={},zi={},Hi=!1;function ma(r,n){fa(zi,r),Hi||(Hi=!0,setTimeout(function(){Hi=!1;var s=zi;zi={},Gi(s,!1)},0))}function Gi(r,n){n===void 0&&(n=!1);var s=new Set;if(r.all)for(var c=0,u=Object.values(Cr);c<u.length;c++){var p=u[c];jo(p,r,s,n)}else for(var f in r){var v=/^idb\:\/\/(.*)\/(.*)\//.exec(f);if(v){var y=v[1],S=v[2],p=Cr["idb://".concat(y,"/").concat(S)];p&&jo(p,r,s,n)}}s.forEach(function(E){return E()})}function jo(r,n,s,c){for(var u=[],p=0,f=Object.entries(r.queries.query);p<f.length;p++){for(var v=f[p],y=v[0],S=v[1],E=[],A=0,C=S;A<C.length;A++){var B=C[A];Bi(n,B.obsSet)?B.subscribers.forEach(function(I){return s.add(I)}):c&&E.push(B)}c&&u.push([y,E])}if(c)for(var T=0,R=u;T<R.length;T++){var D=R[T],y=D[0],E=D[1];r.queries.query[y]=E}}function wf(r){var n=r._state,s=r._deps.indexedDB;if(n.isBeingOpened||r.idbdb)return n.dbReadyPromise.then(function(){return n.dbOpenError?et(n.dbOpenError):r});n.isBeingOpened=!0,n.dbOpenError=null,n.openComplete=!1;var c=n.openCanceller,u=Math.round(r.verno*10),p=!1;function f(){if(n.openCanceller!==c)throw new ee.DatabaseClosed("db.open() was cancelled")}var v=n.dbReadyResolve,y=null,S=!1,E=function(){return new ae(function(A,C){if(f(),!s)throw new ee.MissingAPI;var B=r.name,T=n.autoSchema||!u?s.open(B):s.open(B,u);if(!T)throw new ee.MissingAPI;T.onerror=Ut(C),T.onblocked=Je(r._fireOnBlocked),T.onupgradeneeded=Je(function(R){if(y=T.transaction,n.autoSchema&&!r._options.allowEmptyDB){T.onerror=hn,y.abort(),T.result.close();var D=s.deleteDatabase(B);D.onsuccess=D.onerror=Je(function(){C(new ee.NoSuchDatabase("Database ".concat(B," doesnt exist")))})}else{y.onerror=Ut(C);var I=R.oldVersion>Math.pow(2,62)?0:R.oldVersion;S=I<1,r.idbdb=T.result,p&&of(r,y),sf(r,I/10,y,C)}},C),T.onsuccess=Je(function(){y=null;var R=r.idbdb=T.result,D=z(R.objectStoreNames);if(D.length>0)try{var I=R.transaction(Zp(D),"readonly");if(n.autoSchema)df(r,R,I);else if(da(r,r._dbSchema,I),!pf(r,I)&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),R.close(),u=R.version+1,p=!0,A(E());oa(r,I)}catch{}wn.add(r),R.onversionchange=Je(function(j){n.vcFired=!0,r.on("versionchange").fire(j)}),R.onclose=Je(function(){r.close({disableAutoOpen:!1})}),S&&vf(r._deps,B),A()},C)}).catch(function(A){switch(A?.name){case"UnknownError":if(n.PR1398_maxLoop>0)return n.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),E();break;case"VersionError":if(u>0)return u=0,E();break}return ae.reject(A)})};return ae.race([c,(typeof navigator>"u"?ae.resolve():bf()).then(E)]).then(function(){return f(),n.onReadyBeingFired=[],ae.resolve(Ui(function(){return r.on.ready.fire(r.vip)})).then(function A(){if(n.onReadyBeingFired.length>0){var C=n.onReadyBeingFired.reduce(un,We);return n.onReadyBeingFired=[],ae.resolve(Ui(function(){return C(r.vip)})).then(A)}})}).finally(function(){n.openCanceller===c&&(n.onReadyBeingFired=null,n.isBeingOpened=!1)}).catch(function(A){n.dbOpenError=A;try{y&&y.abort()}catch{}return c===n.openCanceller&&r._close(),et(A)}).finally(function(){n.openComplete=!0,v()}).then(function(){if(S){var A={};r.tables.forEach(function(C){C.schema.indexes.forEach(function(B){B.name&&(A["idb://".concat(r.name,"/").concat(C.name,"/").concat(B.name)]=new yt(-1/0,[[[]]]))}),A["idb://".concat(r.name,"/").concat(C.name,"/")]=A["idb://".concat(r.name,"/").concat(C.name,"/:dels")]=new yt(-1/0,[[[]]])}),dr(vn).fire(A),Gi(A,!0)}return r})}function Ki(r){var n=function(f){return r.next(f)},s=function(f){return r.throw(f)},c=p(n),u=p(s);function p(f){return function(v){var y=f(v),S=y.value;return y.done?S:!S||typeof S.then!="function"?d(S)?Promise.all(S).then(c,u):c(S):S.then(c,u)}}return p(n)()}function Sf(r,n,s){var c=arguments.length;if(c<2)throw new ee.InvalidArgument("Too few arguments");for(var u=new Array(c-1);--c;)u[c-1]=arguments[c];s=u.pop();var p=Se(u);return[r,p,s]}function Vo(r,n,s,c,u){return ae.resolve().then(function(){var p=we.transless||we,f=r._createTransaction(n,s,r._dbSchema,c);f.explicit=!0;var v={trans:f,transless:p};if(c)f.idbtrans=c.idbtrans;else try{f.create(),f.idbtrans._explicit=!0,r._state.PR1398_maxLoop=3}catch(A){return A.name===he.InvalidState&&r.isOpen()&&--r._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),r.close({disableAutoOpen:!1}),r.open().then(function(){return Vo(r,n,s,null,u)})):et(A)}var y=je(u);y&&jr();var S,E=ae.follow(function(){if(S=u.call(f,f),S)if(y){var A=lr.bind(null,null);S.then(A,A)}else typeof S.next=="function"&&typeof S.throw=="function"&&(S=Ki(S))},v);return(S&&typeof S.then=="function"?ae.resolve(S).then(function(A){return f.active?A:et(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):E.then(function(){return S})).then(function(A){return c&&f._resolve(),f._completion.then(function(){return A})}).catch(function(A){return f._reject(A),et(A)})})}function ga(r,n,s){for(var c=d(r)?r.slice():[r],u=0;u<s;++u)c.push(n);return c}function xf(r){return a(a({},r),{table:function(n){var s=r.table(n),c=s.schema,u={},p=[];function f(R,D,I){var j=bn(R),G=u[j]=u[j]||[],M=R==null?0:typeof R=="string"?1:R.length,H=D>0,oe=a(a({},I),{name:H?"".concat(j,"(virtual-from:").concat(I.name,")"):I.name,lowLevelIndex:I,isVirtual:H,keyTail:D,keyLength:M,extractKey:_i(R),unique:!H&&I.unique});if(G.push(oe),oe.isPrimaryKey||p.push(oe),M>1){var te=M===2?R[0]:R.slice(0,M-1);f(te,D+1,I)}return G.sort(function(re,ye){return re.keyTail-ye.keyTail}),oe}var v=f(c.primaryKey.keyPath,0,c.primaryKey);u[":id"]=[v];for(var y=0,S=c.indexes;y<S.length;y++){var E=S[y];f(E.keyPath,0,E)}function A(R){var D=u[bn(R)];return D&&D[0]}function C(R,D){return{type:R.type===1?2:R.type,lower:ga(R.lower,R.lowerOpen?r.MAX_KEY:r.MIN_KEY,D),lowerOpen:!0,upper:ga(R.upper,R.upperOpen?r.MIN_KEY:r.MAX_KEY,D),upperOpen:!0}}function B(R){var D=R.query.index;return D.isVirtual?a(a({},R),{query:{index:D.lowLevelIndex,range:C(R.query.range,D.keyTail)}}):R}var T=a(a({},s),{schema:a(a({},c),{primaryKey:v,indexes:p,getIndexByKeyPath:A}),count:function(R){return s.count(B(R))},query:function(R){return s.query(B(R))},openCursor:function(R){var D=R.query.index,I=D.keyTail,j=D.isVirtual,G=D.keyLength;if(!j)return s.openCursor(R);function M(H){function oe(re){re!=null?H.continue(ga(re,R.reverse?r.MAX_KEY:r.MIN_KEY,I)):R.unique?H.continue(H.key.slice(0,G).concat(R.reverse?r.MIN_KEY:r.MAX_KEY,I)):H.continue()}var te=Object.create(H,{continue:{value:oe},continuePrimaryKey:{value:function(re,ye){H.continuePrimaryKey(ga(re,r.MAX_KEY,I),ye)}},primaryKey:{get:function(){return H.primaryKey}},key:{get:function(){var re=H.key;return G===1?re[0]:re.slice(0,G)}},value:{get:function(){return H.value}}});return te}return s.openCursor(B(R)).then(function(H){return H&&M(H)})}});return T}})}var kf={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:xf};function ji(r,n,s,c){return s=s||{},c=c||"",l(r).forEach(function(u){if(!b(n,u))s[c+u]=void 0;else{var p=r[u],f=n[u];if(typeof p=="object"&&typeof f=="object"&&p&&f){var v=V(p),y=V(f);v!==y?s[c+u]=n[u]:v==="Object"?ji(p,f,s,c+u+"."):p!==f&&(s[c+u]=n[u])}else p!==f&&(s[c+u]=n[u])}}),l(n).forEach(function(u){b(r,u)||(s[c+u]=n[u])}),s}function Vi(r,n){return n.type==="delete"?n.keys:n.keys||n.values.map(r.extractKey)}var Tf={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(r){return a(a({},r),{table:function(n){var s=r.table(n),c=s.schema.primaryKey,u=a(a({},s),{mutate:function(p){var f=we.trans,v=f.table(n).hook,y=v.deleting,S=v.creating,E=v.updating;switch(p.type){case"add":if(S.fire===We)break;return f._promise("readwrite",function(){return A(p)},!0);case"put":if(S.fire===We&&E.fire===We)break;return f._promise("readwrite",function(){return A(p)},!0);case"delete":if(y.fire===We)break;return f._promise("readwrite",function(){return A(p)},!0);case"deleteRange":if(y.fire===We)break;return f._promise("readwrite",function(){return C(p)},!0)}return s.mutate(p);function A(T){var R=we.trans,D=T.keys||Vi(c,T);if(!D)throw new Error("Keys missing");return T=T.type==="add"||T.type==="put"?a(a({},T),{keys:D}):a({},T),T.type!=="delete"&&(T.values=i([],T.values,!0)),T.keys&&(T.keys=i([],T.keys,!0)),Ef(s,T,D).then(function(I){var j=D.map(function(G,M){var H=I[M],oe={onerror:null,onsuccess:null};if(T.type==="delete")y.fire.call(oe,G,H,R);else if(T.type==="add"||H===void 0){var te=S.fire.call(oe,G,T.values[M],R);G==null&&te!=null&&(G=te,T.keys[M]=G,c.outbound||X(T.values[M],c.keyPath,G))}else{var re=ji(H,T.values[M]),ye=E.fire.call(oe,re,G,H,R);if(ye){var $e=T.values[M];Object.keys(ye).forEach(function(xe){b($e,xe)?$e[xe]=ye[xe]:X($e,xe,ye[xe])})}}return oe});return s.mutate(T).then(function(G){for(var M=G.failures,H=G.results,oe=G.numFailures,te=G.lastResult,re=0;re<D.length;++re){var ye=H?H[re]:D[re],$e=j[re];ye==null?$e.onerror&&$e.onerror(M[re]):$e.onsuccess&&$e.onsuccess(T.type==="put"&&I[re]?T.values[re]:ye)}return{failures:M,results:H,numFailures:oe,lastResult:te}}).catch(function(G){return j.forEach(function(M){return M.onerror&&M.onerror(G)}),Promise.reject(G)})})}function C(T){return B(T.trans,T.range,1e4)}function B(T,R,D){return s.query({trans:T,values:!1,query:{index:c,range:R},limit:D}).then(function(I){var j=I.result;return A({type:"delete",keys:j,trans:T}).then(function(G){return G.numFailures>0?Promise.reject(G.failures[0]):j.length<D?{failures:[],numFailures:0,lastResult:void 0}:B(T,a(a({},R),{lower:j[j.length-1],lowerOpen:!0}),D)})})}}});return u}})}};function Ef(r,n,s){return n.type==="add"?Promise.resolve([]):r.getMany({trans:n.trans,keys:s,cache:"immutable"})}function qo(r,n,s){try{if(!n||n.keys.length<r.length)return null;for(var c=[],u=0,p=0;u<n.keys.length&&p<r.length;++u)Ue(n.keys[u],r[p])===0&&(c.push(s?Te(n.values[u]):n.values[u]),++p);return c.length===r.length?c:null}catch{return null}}var Af={stack:"dbcore",level:-1,create:function(r){return{table:function(n){var s=r.table(n);return a(a({},s),{getMany:function(c){if(!c.cache)return s.getMany(c);var u=qo(c.keys,c.trans._cache,c.cache==="clone");return u?ae.resolve(u):s.getMany(c).then(function(p){return c.trans._cache={keys:c.keys,values:c.cache==="clone"?Te(p):p},p})},mutate:function(c){return c.type!=="add"&&(c.trans._cache=null),s.mutate(c)}})}}}};function Yo(r,n){return r.trans.mode==="readonly"&&!!r.subscr&&!r.trans.explicit&&r.trans.db._options.cache!=="disabled"&&!n.schema.primaryKey.outbound}function Xo(r,n){switch(r){case"query":return n.values&&!n.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var Pf={stack:"dbcore",level:0,name:"Observability",create:function(r){var n=r.schema.name,s=new yt(r.MIN_KEY,r.MAX_KEY);return a(a({},r),{transaction:function(c,u,p){if(we.subscr&&u!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(we.querier));return r.transaction(c,u,p)},table:function(c){var u=r.table(c),p=u.schema,f=p.primaryKey,v=p.indexes,y=f.extractKey,S=f.outbound,E=f.autoIncrement&&v.filter(function(T){return T.compound&&T.keyPath.includes(f.keyPath)}),A=a(a({},u),{mutate:function(T){var R,D,I=T.trans,j=T.mutatedParts||(T.mutatedParts={}),G=function(Ae){var Pe="idb://".concat(n,"/").concat(c,"/").concat(Ae);return j[Pe]||(j[Pe]=new yt)},M=G(""),H=G(":dels"),oe=T.type,te=T.type==="deleteRange"?[T.range]:T.type==="delete"?[T.keys]:T.values.length<50?[Vi(f,T).filter(function(Ae){return Ae}),T.values]:[],re=te[0],ye=te[1],$e=T.trans._cache;if(d(re)){M.addKeys(re);var xe=oe==="delete"||re.length===ye.length?qo(re,$e):null;xe||H.addKeys(re),(xe||ye)&&Rf(G,p,xe,ye)}else if(re){var be={from:(R=re.lower)!==null&&R!==void 0?R:r.MIN_KEY,to:(D=re.upper)!==null&&D!==void 0?D:r.MAX_KEY};H.add(be),M.add(be)}else M.add(s),H.add(s),p.indexes.forEach(function(Ae){return G(Ae.name).add(s)});return u.mutate(T).then(function(Ae){return re&&(T.type==="add"||T.type==="put")&&(M.addKeys(Ae.results),E&&E.forEach(function(Pe){for(var Ge=T.values.map(function(xt){return Pe.extractKey(xt)}),ke=Pe.keyPath.findIndex(function(xt){return xt===f.keyPath}),it=0,It=Ae.results.length;it<It;++it)Ge[it][ke]=Ae.results[it];G(Pe.name).addKeys(Ge)})),I.mutatedParts=fa(I.mutatedParts||{},j),Ae})}}),C=function(T){var R,D,I=T.query,j=I.index,G=I.range;return[j,new yt((R=G.lower)!==null&&R!==void 0?R:r.MIN_KEY,(D=G.upper)!==null&&D!==void 0?D:r.MAX_KEY)]},B={get:function(T){return[f,new yt(T.key)]},getMany:function(T){return[f,new yt().addKeys(T.keys)]},count:C,query:C,openCursor:C};return l(B).forEach(function(T){A[T]=function(R){var D=we.subscr,I=!!D,j=Yo(we,u)&&Xo(T,R),G=j?R.obsSet={}:D;if(I){var M=function(xe){var be="idb://".concat(n,"/").concat(c,"/").concat(xe);return G[be]||(G[be]=new yt)},H=M(""),oe=M(":dels"),te=B[T](R),re=te[0],ye=te[1];if(T==="query"&&re.isPrimaryKey&&!R.values?oe.add(ye):M(re.name||"").add(ye),!re.isPrimaryKey)if(T==="count")oe.add(s);else{var $e=T==="query"&&S&&R.values&&u.query(a(a({},R),{values:!1}));return u[T].apply(this,arguments).then(function(xe){if(T==="query"){if(S&&R.values)return $e.then(function(Ge){var ke=Ge.result;return H.addKeys(ke),xe});var be=R.values?xe.result.map(y):xe.result;R.values?H.addKeys(be):oe.addKeys(be)}else if(T==="openCursor"){var Ae=xe,Pe=R.values;return Ae&&Object.create(Ae,{key:{get:function(){return oe.addKey(Ae.primaryKey),Ae.key}},primaryKey:{get:function(){var Ge=Ae.primaryKey;return oe.addKey(Ge),Ge}},value:{get:function(){return Pe&&H.addKey(Ae.primaryKey),Ae.value}}})}return xe})}}return u[T].apply(this,arguments)}}),A}})}};function Rf(r,n,s,c){function u(p){var f=r(p.name||"");function v(S){return S!=null?p.extractKey(S):null}var y=function(S){return p.multiEntry&&d(S)?S.forEach(function(E){return f.addKey(E)}):f.addKey(S)};(s||c).forEach(function(S,E){var A=s&&v(s[E]),C=c&&v(c[E]);Ue(A,C)!==0&&(A!=null&&y(A),C!=null&&y(C))})}n.indexes.forEach(u)}function Jo(r,n,s){if(s.numFailures===0)return n;if(n.type==="deleteRange")return null;var c=n.keys?n.keys.length:"values"in n&&n.values?n.values.length:1;if(s.numFailures===c)return null;var u=a({},n);return d(u.keys)&&(u.keys=u.keys.filter(function(p,f){return!(f in s.failures)})),"values"in u&&d(u.values)&&(u.values=u.values.filter(function(p,f){return!(f in s.failures)})),u}function Nf(r,n){return n.lower===void 0?!0:n.lowerOpen?Ue(r,n.lower)>0:Ue(r,n.lower)>=0}function Cf(r,n){return n.upper===void 0?!0:n.upperOpen?Ue(r,n.upper)<0:Ue(r,n.upper)<=0}function qi(r,n){return Nf(r,n)&&Cf(r,n)}function Zo(r,n,s,c,u,p){if(!s||s.length===0)return r;var f=n.query.index,v=f.multiEntry,y=n.query.range,S=c.schema.primaryKey,E=S.extractKey,A=f.extractKey,C=(f.lowLevelIndex||f).extractKey,B=s.reduce(function(R,D){var I=R,j=[];if(D.type==="add"||D.type==="put")for(var G=new yt,M=D.values.length-1;M>=0;--M){var H=D.values[M],oe=E(H);if(!G.hasKey(oe)){var te=A(H);(v&&d(te)?te.some(function(be){return qi(be,y)}):qi(te,y))&&(G.addKey(oe),j.push(H))}}switch(D.type){case"add":{var re=new yt().addKeys(n.values?R.map(function(be){return E(be)}):R);I=R.concat(n.values?j.filter(function(be){var Ae=E(be);return re.hasKey(Ae)?!1:(re.addKey(Ae),!0)}):j.map(function(be){return E(be)}).filter(function(be){return re.hasKey(be)?!1:(re.addKey(be),!0)}));break}case"put":{var ye=new yt().addKeys(D.values.map(function(be){return E(be)}));I=R.filter(function(be){return!ye.hasKey(n.values?E(be):be)}).concat(n.values?j:j.map(function(be){return E(be)}));break}case"delete":var $e=new yt().addKeys(D.keys);I=R.filter(function(be){return!$e.hasKey(n.values?E(be):be)});break;case"deleteRange":var xe=D.range;I=R.filter(function(be){return!qi(E(be),xe)});break}return I},r);if(B===r)return r;var T=function(R,D){return Ue(C(R),C(D))||Ue(E(R),E(D))};return B.sort(n.direction==="prev"||n.direction==="prevunique"?function(R,D){return T(D,R)}:T),n.limit&&n.limit<1/0&&(B.length>n.limit?B.length=n.limit:r.length===n.limit&&B.length<n.limit&&(u.dirty=!0)),p?Object.freeze(B):B}function Qo(r,n){return Ue(r.lower,n.lower)===0&&Ue(r.upper,n.upper)===0&&!!r.lowerOpen==!!n.lowerOpen&&!!r.upperOpen==!!n.upperOpen}function If(r,n,s,c){if(r===void 0)return n!==void 0?-1:0;if(n===void 0)return 1;var u=Ue(r,n);if(u===0){if(s&&c)return 0;if(s)return 1;if(c)return-1}return u}function _f(r,n,s,c){if(r===void 0)return n!==void 0?1:0;if(n===void 0)return-1;var u=Ue(r,n);if(u===0){if(s&&c)return 0;if(s)return-1;if(c)return 1}return u}function Df(r,n){return If(r.lower,n.lower,r.lowerOpen,n.lowerOpen)<=0&&_f(r.upper,n.upper,r.upperOpen,n.upperOpen)>=0}function Of(r,n,s,c){var u,p=Cr["idb://".concat(r,"/").concat(n)];if(!p)return[];var f=p.queries[s];if(!f)return[null,!1,p,null];var v=c.query?c.query.index.name:null,y=f[v||""];if(!y)return[null,!1,p,null];switch(s){case"query":var S=(u=c.direction)!==null&&u!==void 0?u:"next",E=y.find(function(B){var T;return B.req.limit===c.limit&&B.req.values===c.values&&((T=B.req.direction)!==null&&T!==void 0?T:"next")===S&&Qo(B.req.query.range,c.query.range)});if(E)return[E,!0,p,y];var A=y.find(function(B){var T,R="limit"in B.req?B.req.limit:1/0;return R>=c.limit&&((T=B.req.direction)!==null&&T!==void 0?T:"next")===S&&(c.values?B.req.values:!0)&&Df(B.req.query.range,c.query.range)});return[A,!1,p,y];case"count":var C=y.find(function(B){return Qo(B.req.query.range,c.query.range)});return[C,!!C,p,y]}}function Lf(r,n,s,c){r.subscribers.add(s),c.addEventListener("abort",function(){r.subscribers.delete(s),r.subscribers.size===0&&$f(r,n)})}function $f(r,n){setTimeout(function(){r.subscribers.size===0&&me(n,r)},3e3)}var Mf={stack:"dbcore",level:0,name:"Cache",create:function(r){var n=r.schema.name,s=a(a({},r),{transaction:function(c,u,p){var f=r.transaction(c,u,p);if(u==="readwrite"){var v=new AbortController,y=v.signal,S=function(E){return function(){if(v.abort(),u==="readwrite"){for(var A=new Set,C=0,B=c;C<B.length;C++){var T=B[C],R=Cr["idb://".concat(n,"/").concat(T)];if(R){var D=r.table(T),I=R.optimisticOps.filter(function(Pe){return Pe.trans===f});if(f._explicit&&E&&f.mutatedParts)for(var j=0,G=Object.values(R.queries.query);j<G.length;j++)for(var M=G[j],H=0,oe=M.slice();H<oe.length;H++){var te=oe[H];Bi(te.obsSet,f.mutatedParts)&&(me(M,te),te.subscribers.forEach(function(Pe){return A.add(Pe)}))}else if(I.length>0){R.optimisticOps=R.optimisticOps.filter(function(Pe){return Pe.trans!==f});for(var re=0,ye=Object.values(R.queries.query);re<ye.length;re++)for(var M=ye[re],$e=0,xe=M.slice();$e<xe.length;$e++){var te=xe[$e];if(te.res!=null&&f.mutatedParts)if(E&&!te.dirty){var be=Object.isFrozen(te.res),Ae=Zo(te.res,te.req,I,D,te,be);te.dirty?(me(M,te),te.subscribers.forEach(function(ke){return A.add(ke)})):Ae!==te.res&&(te.res=Ae,te.promise=ae.resolve({result:Ae}))}else te.dirty&&me(M,te),te.subscribers.forEach(function(ke){return A.add(ke)})}}}}A.forEach(function(Pe){return Pe()})}}};f.addEventListener("abort",S(!1),{signal:y}),f.addEventListener("error",S(!1),{signal:y}),f.addEventListener("complete",S(!0),{signal:y})}return f},table:function(c){var u=r.table(c),p=u.schema.primaryKey,f=a(a({},u),{mutate:function(v){var y=we.trans;if(p.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return u.mutate(v);var S=Cr["idb://".concat(n,"/").concat(c)];if(!S)return u.mutate(v);var E=u.mutate(v);return(v.type==="add"||v.type==="put")&&(v.values.length>=50||Vi(p,v).some(function(A){return A==null}))?E.then(function(A){var C=a(a({},v),{values:v.values.map(function(T,R){var D;if(A.failures[R])return T;var I=!((D=p.keyPath)===null||D===void 0)&&D.includes(".")?Te(T):a({},T);return X(I,p.keyPath,A.results[R]),I})}),B=Jo(S,C,A);S.optimisticOps.push(B),queueMicrotask(function(){return v.mutatedParts&&ma(v.mutatedParts)})}):(S.optimisticOps.push(v),v.mutatedParts&&ma(v.mutatedParts),E.then(function(A){if(A.numFailures>0){me(S.optimisticOps,v);var C=Jo(S,v,A);C&&S.optimisticOps.push(C),v.mutatedParts&&ma(v.mutatedParts)}}),E.catch(function(){me(S.optimisticOps,v),v.mutatedParts&&ma(v.mutatedParts)})),E},query:function(v){var y;if(!Yo(we,u)||!Xo("query",v))return u.query(v);var S=((y=we.trans)===null||y===void 0?void 0:y.db._options.cache)==="immutable",E=we,A=E.requery,C=E.signal,B=Of(n,c,"query",v),T=B[0],R=B[1],D=B[2],I=B[3];if(T&&R)T.obsSet=v.obsSet;else{var j=u.query(v).then(function(G){var M=G.result;if(T&&(T.res=M),S){for(var H=0,oe=M.length;H<oe;++H)Object.freeze(M[H]);Object.freeze(M)}else G.result=Te(M);return G}).catch(function(G){return I&&T&&me(I,T),Promise.reject(G)});T={obsSet:v.obsSet,promise:j,subscribers:new Set,type:"query",req:v,dirty:!1},I?I.push(T):(I=[T],D||(D=Cr["idb://".concat(n,"/").concat(c)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),D.queries.query[v.query.index.name||""]=I)}return Lf(T,I,A,C),T.promise.then(function(G){return{result:Zo(G.result,v,D?.optimisticOps,u,T,S)}})}});return f}});return s}};function ha(r,n){return new Proxy(r,{get:function(s,c,u){return c==="db"?n:Reflect.get(s,c,u)}})}var Zt=(function(){function r(n,s){var c=this;this._middlewares={},this.verno=0;var u=r.dependencies;this._options=s=a({addons:r.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned",maxConnections:Po},s),this._deps={indexedDB:s.indexedDB,IDBKeyRange:s.IDBKeyRange};var p=s.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:We,dbReadyPromise:null,cancelOpen:We,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:s.autoOpen};f.dbReadyPromise=new ae(function(y){f.dbReadyResolve=y}),f.openCanceller=new ae(function(y,S){f.cancelOpen=S}),this._state=f,this.name=n,this.on=mn(this,"populate","blocked","versionchange","close",{ready:[un,We]}),this.once=function(y,S){var E=function(){for(var A=[],C=0;C<arguments.length;C++)A[C]=arguments[C];c.on(y).unsubscribe(E),S.apply(c,A)};return c.on(y,E)},this.on.ready.subscribe=Y(this.on.ready.subscribe,function(y){return function(S,E){r.vip(function(){var A=c._state;if(A.openComplete)A.dbOpenError||ae.resolve().then(S),E&&y(S);else if(A.onReadyBeingFired)A.onReadyBeingFired.push(S),E&&y(S);else{y(S);var C=c;E||y(function B(){C.on.ready.unsubscribe(S),C.on.ready.unsubscribe(B)})}})}}),this.Collection=Hp(this),this.Table=Fp(this),this.Transaction=Jp(this),this.Version=mf(this),this.WhereClause=Yp(this),this.on("versionchange",function(y){y.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(y){!y.newVersion||y.newVersion<y.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(y.oldVersion/10))}),this._maxKey=yn(s.IDBKeyRange),this._createTransaction=function(y,S,E,A){return new c.Transaction(y,S,E,c._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(y){c.on("blocked").fire(y),wn.toArray().filter(function(S){return S.name===c.name&&S!==c&&!S._state.vcFired}).map(function(S){return S.on("versionchange").fire(y)})},this.use(Af),this.use(Mf),this.use(Pf),this.use(kf),this.use(Tf);var v=new Proxy(this,{get:function(y,S,E){if(S==="_vip")return!0;if(S==="table")return function(C){return ha(c.table(C),v)};var A=Reflect.get(y,S,E);return A instanceof Do?ha(A,v):S==="tables"?A.map(function(C){return ha(C,v)}):S==="_createTransaction"?function(){var C=A.apply(this,arguments);return ha(C,v)}:A}});this.vip=v,p.forEach(function(y){return y(c)})}return r.prototype.version=function(n){if(isNaN(n)||n<.1)throw new ee.Type("Given version is not a positive number");if(n=Math.round(n*10)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,n);var s=this._versions,c=s.filter(function(u){return u._cfg.version===n})[0];return c||(c=new this.Version(n),s.push(c),s.sort(af),c.stores({}),this._state.autoSchema=!1,c)},r.prototype._whenReady=function(n){var s=this;return this.idbdb&&(this._state.openComplete||we.letThrough||this._vip)?n():new ae(function(c,u){if(s._state.openComplete)return u(new ee.DatabaseClosed(s._state.dbOpenError));if(!s._state.isBeingOpened){if(!s._state.autoOpen){u(new ee.DatabaseClosed);return}s.open().catch(We)}s._state.dbReadyPromise.then(c,u)}).then(n)},r.prototype.use=function(n){var s=n.stack,c=n.create,u=n.level,p=n.name;p&&this.unuse({stack:s,name:p});var f=this._middlewares[s]||(this._middlewares[s]=[]);return f.push({stack:s,create:c,level:u??10,name:p}),f.sort(function(v,y){return v.level-y.level}),this},r.prototype.unuse=function(n){var s=n.stack,c=n.name,u=n.create;return s&&this._middlewares[s]&&(this._middlewares[s]=this._middlewares[s].filter(function(p){return u?p.create!==u:c?p.name!==c:!1})),this},r.prototype.open=function(){var n=this;return Pr(Xt,function(){return wf(n)})},r.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var n=this._state;if(wn.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}n.isBeingOpened||(n.dbReadyPromise=new ae(function(s){n.dbReadyResolve=s}),n.openCanceller=new ae(function(s,c){n.cancelOpen=c}))},r.prototype.close=function(n){var s=n===void 0?{disableAutoOpen:!0}:n,c=s.disableAutoOpen,u=this._state;c?(u.isBeingOpened&&u.cancelOpen(new ee.DatabaseClosed),this._close(),u.autoOpen=!1,u.dbOpenError=new ee.DatabaseClosed):(this._close(),u.autoOpen=this._options.autoOpen||u.isBeingOpened,u.openComplete=!1,u.dbOpenError=null)},r.prototype.delete=function(n){var s=this;n===void 0&&(n={disableAutoOpen:!0});var c=arguments.length>0&&typeof arguments[0]!="object",u=this._state;return new ae(function(p,f){var v=function(){s.close(n);var y=s._deps.indexedDB.deleteDatabase(s.name);y.onsuccess=Je(function(){yf(s._deps,s.name),p()}),y.onerror=Ut(f),y.onblocked=s._fireOnBlocked};if(c)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(v):v()})},r.prototype.backendDB=function(){return this.idbdb},r.prototype.isOpen=function(){return this.idbdb!==null},r.prototype.hasBeenClosed=function(){var n=this._state.dbOpenError;return n&&n.name==="DatabaseClosed"},r.prototype.hasFailed=function(){return this._state.dbOpenError!==null},r.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(r.prototype,"tables",{get:function(){var n=this;return l(this._allTables).map(function(s){return n._allTables[s]})},enumerable:!1,configurable:!0}),r.prototype.transaction=function(){var n=Sf.apply(this,arguments);return this._transaction.apply(this,n)},r.prototype._transaction=function(n,s,c){var u=this,p=we.trans;(!p||p.db!==this||n.indexOf("!")!==-1)&&(p=null);var f=n.indexOf("?")!==-1;n=n.replace("!","").replace("?","");var v,y;try{if(y=s.map(function(E){var A=E instanceof u.Table?E.name:E;if(typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),n=="r"||n===Ei)v=Ei;else if(n=="rw"||n==Ai)v=Ai;else throw new ee.InvalidArgument("Invalid transaction mode: "+n);if(p){if(p.mode===Ei&&v===Ai)if(f)p=null;else throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");p&&y.forEach(function(E){if(p&&p.storeNames.indexOf(E)===-1)if(f)p=null;else throw new ee.SubTransaction("Table "+E+" not included in parent transaction.")}),f&&p&&!p.active&&(p=null)}}catch(E){return p?p._promise(null,function(A,C){C(E)}):et(E)}var S=Vo.bind(null,this,v,y,p,c);return p?p._promise(v,S,"lock"):we.trans?Pr(we.transless,function(){return u._whenReady(S)}):this._whenReady(S)},r.prototype.table=function(n){if(!b(this._allTables,n))throw new ee.InvalidTable("Table ".concat(n," does not exist"));return this._allTables[n]},r})(),Uf=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Wf=(function(){function r(n){this._subscribe=n}return r.prototype.subscribe=function(n,s,c){return this._subscribe(!n||typeof n=="function"?{next:n,error:s,complete:c}:n)},r.prototype[Uf]=function(){return this},r})(),va;try{va={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{va={indexedDB:null,IDBKeyRange:null}}function el(r){var n=!1,s,c=new Wf(function(u){var p=je(r);function f(I){var j=Gr();try{p&&jr();var G=or(r,I);return p&&(G=G.finally(lr)),G}finally{j&&Kr()}}var v=!1,y,S={},E={},A={get closed(){return v},unsubscribe:function(){v||(v=!0,y&&y.abort(),C&&dr.storagemutated.unsubscribe(R))}};u.start&&u.start(A);var C=!1,B=function(){return xi(D)};function T(){return Bi(E,S)}var R=function(I){fa(S,I),T()&&B()},D=function(){if(!(v||!va.indexedDB)){S={};var I={};y&&y.abort(),y=new AbortController;var j={subscr:I,signal:y.signal,requery:B,querier:r,trans:null},G=f(j);C||(dr(vn,R),C=!0),Promise.resolve(G).then(function(M){n=!0,s=M,!(v||j.signal.aborted)&&(T()?B():(E=I,T()?B():(S={},xi(function(){return!v&&u.next&&u.next(M)}))))},function(M){n=!1,["DatabaseClosedError","AbortError"].includes(M?.name)||v||xi(function(){v||u.error&&u.error(M)})})}};return setTimeout(B,0),A});return c.hasValue=function(){return n},c.getValue=function(){return s},c}var Ir=Zt;w(Ir,a(a({},zr),{delete:function(r){var n=new Ir(r,{addons:[]});return n.delete()},exists:function(r){return new Ir(r,{addons:[]}).open().then(function(n){return n.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(r){try{return hf(Ir.dependencies).then(r)}catch{return et(new ee.MissingAPI)}},defineClass:function(){function r(n){m(this,n)}return r},ignoreTransaction:function(r){return we.trans?Pr(we.transless||Xt,r):r()},vip:Ui,async:function(r){return function(){try{var n=Ki(r.apply(this,arguments));return!n||typeof n.then!="function"?ae.resolve(n):n}catch(s){return et(s)}}},spawn:function(r,n,s){try{var c=Ki(r.apply(s,n||[]));return!c||typeof c.then!="function"?ae.resolve(c):c}catch(u){return et(u)}},currentTransaction:{get:function(){return we.trans||null}},waitFor:function(r,n){var s=ae.resolve(typeof r=="function"?Ir.ignoreTransaction(r):r).timeout(n||6e4);return we.trans?we.trans.waitFor(s):s},Promise:ae,debug:{get:function(){return ge},set:function(r){qe(r)}},derive:P,extend:m,props:w,override:Y,Events:mn,on:dr,liveQuery:el,extendObservabilitySet:fa,getByKeyPath:q,setByKeyPath:X,delByKeyPath:Q,shallowClone:Z,deepClone:Te,getObjectDiff:ji,cmp:Ue,asap:W,minKey:Ti,addons:[],connections:{get:wn.toArray},errnames:he,dependencies:va,cache:Cr,semVer:Eo,version:Eo.split(".").map(function(r){return parseInt(r)}).reduce(function(r,n,s){return r+n/Math.pow(10,s*2)})})),Ir.maxKey=yn(Ir.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(dr(vn,function(r){if(!pr){var n;n=new CustomEvent(Ni,{detail:r}),pr=!0,dispatchEvent(n),pr=!1}}),addEventListener(Ni,function(r){var n=r.detail;pr||Yi(n)}));function Yi(r){var n=pr;try{pr=!0,dr.storagemutated.fire(r),Gi(r,!0)}finally{pr=n}}var pr=!1,fr,Xi=function(){};typeof BroadcastChannel<"u"&&(Xi=function(){fr=new BroadcastChannel(Ni),fr.onmessage=function(r){return r.data&&Yi(r.data)}},Xi(),typeof fr.unref=="function"&&fr.unref(),dr(vn,function(r){pr||fr.postMessage(r)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(r){if(!Zt.disableBfCache&&r.persisted){ge&&console.debug("Dexie: handling persisted pagehide"),fr?.close();for(var n=0,s=wn.toArray();n<s.length;n++){var c=s[n];c.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(r){!Zt.disableBfCache&&r.persisted&&(ge&&console.debug("Dexie: handling persisted pageshow"),Xi(),Yi({all:new yt(-1/0,[[]])}))}));function Ff(r){return new fn({add:r})}function Bf(r){return new fn({remove:r})}function zf(r,n){return new fn({replacePrefix:[r,n]})}ae.rejectionMapper=xr,qe(ge);var Hf=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:Po,Dexie:Zt,Entity:No,PropModification:fn,RangeSet:yt,add:Ff,cmp:Ue,default:Zt,liveQuery:el,mergeRanges:xn,rangesOverlap:Ho,remove:Bf,replacePrefix:zf});return a(Zt,Hf,{default:Zt}),Zt}))});var Rn,hr,Pa=mr(()=>{"use strict";Rn=class{constructor(){this.state="closed";this.failureCount=0;this.openedAt=null;this.extraCooldownMs=0}isOpen(){if(this.state==="open"){let t=Date.now()-(this.openedAt??0),a=3e4+this.extraCooldownMs;return t>=a?(this.state="half-open",!1):!0}return!1}recordSuccess(){this.failureCount=0,this.state="closed",this.openedAt=null,this.extraCooldownMs=0}recordFailure(t){if(this.state==="half-open"){this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=t?t*1e3:0;return}this.failureCount+=1,this.failureCount>=3&&(this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=t?t*1e3:0)}reset(){this.recordSuccess()}getResetAt(){return this.state!=="open"||this.openedAt===null?null:this.openedAt+3e4+this.extraCooldownMs}getState(){return this.state}},hr=new Rn});function us(){try{let e=localStorage.getItem(ce.STATSFM_HEALTH);if(e)return JSON.parse(e).lastSuccessAt}catch{}return null}function Na(e){try{localStorage.setItem(ce.STATSFM_HEALTH,JSON.stringify(e))}catch{}window.dispatchEvent(new CustomEvent(ve.STATSFM_HEALTH_CHANGED,{detail:e}))}async function rt(e,t){if(vr.isOpen())return Na({lastFetchAt:Date.now(),lastSuccessAt:us(),lastError:"Circuit open  -  stats.fm temporarily unavailable",circuitOpen:!0}),{ok:!1,status:0,message:"Circuit open  -  stats.fm temporarily unavailable"};let a=new URL(`${Tm}${e}`);if(t)for(let[l,d]of Object.entries(t))a.searchParams.set(l,d);localStorage.getItem(ce.LOGGING)==="true"&&console.debug("[statsfm]",a.toString());let i=new AbortController,o=setTimeout(()=>i.abort(),1e4);try{let l=await fetch(a.toString(),{headers:{Accept:"application/json"},signal:i.signal});if(clearTimeout(o),!l.ok)return vr.recordFailure(),Na({lastFetchAt:Date.now(),lastSuccessAt:us(),lastError:`HTTP ${l.status}`,circuitOpen:vr.isOpen()}),{ok:!1,status:l.status,message:`HTTP ${l.status}`};let d=await l.json();return vr.recordSuccess(),Na({lastFetchAt:Date.now(),lastSuccessAt:Date.now(),lastError:null,circuitOpen:!1}),{ok:!0,data:d.item??d.items}}catch(l){clearTimeout(o),vr.recordFailure();let d=(l instanceof Error||l instanceof DOMException)&&l.name==="AbortError"?"Request timed out after 10s":String(l);return Na({lastFetchAt:Date.now(),lastSuccessAt:us(),lastError:d,circuitOpen:vr.isOpen()}),(l instanceof Error||l instanceof DOMException)&&l.name==="AbortError"?{ok:!1,status:0,message:"Request timed out after 10s"}:{ok:!1,status:0,message:String(l)}}}async function $r(e){let t=await rt(`/users/${encodeURIComponent(e)}`);return t.ok?{valid:!0,isPlus:t.data.isPlus,displayName:t.data.displayName}:t.status===404?{valid:!1,reason:"not_found"}:t.status===403?{valid:!1,reason:"private"}:t.status===0&&t.message.includes("Circuit open")?{valid:!1,reason:"circuit_open"}:{valid:!1,reason:"network"}}var Tm,vr,Ca=mr(()=>{"use strict";Pt();st();Pa();Tm="https://api.stats.fm/api/v1",vr=new Rn});var Nl={};tl(Nl,{StatsFmProvider:()=>_a,statsfmProvider:()=>tr});function Zr(e){let t=new Date(e);return Number.isFinite(t.getTime())?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`:e.slice(0,10)}function El(e){let t=new Set(Object.entries(e).filter(([,d])=>d.count>0).map(([d])=>Zr(d)).filter(d=>d.length===10));if(t.size===0)return 0;let a=new Date,i=new Date(a.getFullYear(),a.getMonth(),a.getDate()),o=Zr(i.toISOString());if(!t.has(o)&&(i.setDate(i.getDate()-1),!t.has(Zr(i.toISOString()))))return 0;let l=0;for(;t.has(Zr(i.toISOString()));)l++,i.setDate(i.getDate()-1);return l}function Rt(e,t){if(e)return e.startsWith("spotify:")?e:`spotify:${t}:${e}`}function Al(e){return`${Em}:${e}`}function Ot(e){return e.status==="fulfilled"&&e.value.ok?e.value.data:null}function Ia(e){return e.status==="fulfilled"&&!e.value.ok?{status:e.value.status,message:e.value.message}:e.status==="rejected"?{status:0,message:String(e.reason)}:null}function Pm(e){let t=new Map;for(let o of e)for(let l of o.artist.genres)t.set(l,(t.get(l)??0)+ +(o.streams??0));if([...t.values()].some(o=>o>0))return Array.from(t.entries()).sort((o,l)=>l[1]-o[1]).map(([o,l],d)=>({rank:d+1,genre:o,count:l}));let i=new Map;for(let o of e)for(let l of o.artist.genres)i.set(l,(i.get(l)??0)+1);return Array.from(i.entries()).sort((o,l)=>l[1]-o[1]).map(([o,l],d)=>({rank:d+1,genre:o,count:l}))}function Pl(e,t){let a=e??[];if(a.length>0){let i=[...a].sort((l,d)=>d.streams-l.streams).map((l,d)=>({rank:d+1,genre:l.genre.tag,count:+(l.streams??0)}));if(i.reduce((l,d)=>l+d.count,0)>0)return i}return Pm(t)}function Rl(e){let t=new Map;for(let a of e){let i=a.track.albums[0];if(!i)continue;let o=i.name,l=t.get(o),d=a.track.artists[0]?.name??"",m=Rt(i.externalIds?.spotify?.[0],"album")??"",g=a.streams??0;l?l.streams+=g:t.set(o,{albumName:i.name,artistName:d,albumArt:i.image,albumUri:m,streams:g})}return Array.from(t.values()).sort((a,i)=>i.streams-a.streams).map((a,i)=>({rank:i+1,albumUri:a.albumUri||`listening-stats:album:${a.albumName}${a.artistName}`,albumName:a.albumName,artistName:a.artistName,albumArt:a.albumArt,count:a.streams,durationMs:0}))}var Em,Am,_a,tr,Cn=mr(()=>{"use strict";Ca();st();xa();Lr();gr();Em="statsfm",Am=1440*60*1e3;_a=class{constructor(){this.config=null}getProviderInfo(){return{id:"statsfm",name:"stats.fm",description:"Stats from stats.fm",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!1,hasSkipRate:!1,tier:this.config?.isPlus??!1?"plus":"free"}}}getSupportedPeriods(){return this.config?.isPlus?hl:En}async calculateStats(t){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let a=Al(t.id),i=Be.get(a);if(i)return i;let l={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[t.id];if(!l)throw new Error(`Unknown stats.fm period: ${t.id}`);let d={range:l},m=this.config.username,g=this.config.isPlus,h=Intl.DateTimeFormat().resolvedOptions().timeZone,b=An(t),w=b?rt(`/users/${m}/top/artists`,{after:String(b.start),before:String(b.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),[k,x,P,O,$,_,z,Y,U]=await Promise.allSettled([rt(`/users/${m}/top/tracks`,d),rt(`/users/${m}/top/artists`,d),rt(`/users/${m}/top/genres`,d),rt(`/users/${m}/streams/stats`,d),rt(`/users/${m}/streams/recent`,{limit:"12"}),g?rt(`/users/${m}/top/albums`,d):Promise.resolve({ok:!1,status:0,message:"skipped"}),rt(`/users/${m}/streams/stats/per-day`,{range:"lifetime",timeZone:h}),rt(`/users/${m}/streams/stats/dates`,{range:l,timeZone:h}),w]),W=Ia(k),L=Ia(x),q=Ia(O);if(W&&L&&q){let J=vr.getResetAt()??void 0;throw new Yr(Or(W.status,W.message,J))}let X=Ot(k)??[],Q=Ot(x)??[],Z=Ot(P)??[],ie=Ot(U)??[],Se=0;if(b){let J=new Set(Q.map(Me=>Me.artist.externalIds?.spotify?.[0]).filter(Me=>!!Me));if(ie.length>0){let Me=new Set(ie.map(ne=>ne.artist.externalIds?.spotify?.[0]).filter(ne=>!!ne)),he=0;for(let ne of J)Me.has(ne)||he++;Se=he}else Se=J.size}let le=Ot(O),Ce=Ot($)??[],Fe=Ot(_)??[],Ie=Ot(z),Te=Ie?.days?Object.values(Ie.days).filter(J=>J.count>0).length:void 0,F=Ie?.days?El(Ie.days):0,se=Ie?.days?Object.entries(Ie.days).map(([J,Me])=>({date:Zr(J),count:Me.count})).sort((J,Me)=>J.date.localeCompare(Me.date)):void 0,V;if(b&&Ie?.days){let J=0;for(let[Me,he]of Object.entries(Ie.days)){let ne=new Date(Me).getTime();Number.isFinite(ne)&&ne>=b.start&&ne<b.end&&(J+=he.durationMs)}J>0&&(V=J)}let N=Ot(Y),Ee=new Array(24).fill(0);if(N?.hours)for(let[J,Me]of Object.entries(N.hours)){let he=Number(J);he>=0&&he<24&&(Ee[he]=Me.count)}let me=Ee.reduce((J,Me,he,ne)=>Me>ne[J]?he:J,0),De,Le,je=N!=null&&(Object.keys(N.hours??{}).length>0||Object.keys(N.weekDays??{}).length>0);if(je&&N?.weekDays){De=new Array(7).fill(0);for(let[J,Me]of Object.entries(N.weekDays)){let he=Number(J)-1;he>=0&&he<7&&(De[he]=Me.count)}Le=De.reduce((J,Me,he,ne)=>Me>ne[J]?he:J,0)}let K=X.map(J=>{let Me=J.streams??0;return{rank:J.position,trackUri:Rt(J.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${J.track.name}${J.track.artists[0]?.name??""}`,trackName:J.track.name,artistName:J.track.artists[0]?.name??"",artistUri:Rt(J.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${J.track.artists[0]?.name??""}`,albumName:J.track.albums[0]?.name??"",albumUri:Rt(J.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:J.track.albums[0]?.image,count:Me,durationMs:J.playedMs??(J.track.durationMs??0)*Me}}),fe=Q.map(J=>({rank:J.position,artistUri:Rt(J.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${J.artist.name}`,artistName:J.artist.name,count:J.streams??0,durationMs:J.playedMs??0,genres:J.artist.genres,imageUrl:J.artist.image??null})),He=g?Fe.map(J=>({rank:J.position,albumUri:Rt(J.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${J.album.name}${J.album.artists[0]?.name??""}`,albumName:J.album.name,artistName:J.album.artists[0]?.name??"",albumArt:J.album.image,count:J.streams??0,durationMs:0})):Rl(X),pt=Pl(Z,Q),vt=Ce.map(J=>({trackUri:Rt(J.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${J.track.name}${J.track.artists[0]?.name??""}`,trackName:J.track.name,artistName:J.track.artists[0]?.name??"",albumArt:J.track.albums[0]?.image,playedAt:new Date(J.endTime).getTime()||Date.now()})),tt={topTracks:K,topArtists:fe,topAlbums:He,topGenres:pt,totalPlays:le?.count??0,totalDuration:le?.durationMs??0,recentPlays:vt,hourlyDistribution:Ee,peakHour:me,skipRate:0,uniqueTrackCount:le?.cardinality.tracks??0,uniqueArtistCount:le?.cardinality.artists??0,streak:F,listeningDays:Te,weekdayDistribution:De,peakWeekday:Le,hasListeningPatterns:je,dailyPlayCounts:se,newArtistCount:Se,priorPeriodTotalDuration:V,isFreeTier:!g&&K.every(J=>J.count===0)};return Be.set(a,tt),tt}async calculateStatsProgressive(t,a){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let i=Al(t.id),o=Be.get(i);if(o)return a(o,1),a(o,2),a(o,3),o;let d={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[t.id];if(!d)throw new Error(`Unknown stats.fm period: ${t.id}`);let m={range:d},g=this.config.username,h=this.config.isPlus,b=Intl.DateTimeFormat().resolvedOptions().timeZone,w=An(t),k=w?rt(`/users/${g}/top/artists`,{after:String(w.start),before:String(w.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),x=rt(`/users/${g}/streams/stats`,m),P=rt(`/users/${g}/streams/recent`,{limit:"12"}),O=rt(`/users/${g}/top/tracks`,m),$=rt(`/users/${g}/top/artists`,m),_=rt(`/users/${g}/top/genres`,m),z=h?rt(`/users/${g}/top/albums`,m):Promise.resolve({ok:!1,status:0,message:"skipped"}),Y=rt(`/users/${g}/streams/stats/per-day`,{range:"lifetime",timeZone:b}),U=rt(`/users/${g}/streams/stats/dates`,{range:d,timeZone:b}),[W,L]=await Promise.allSettled([x,P]),q=Ot(W),Q=(Ot(L)??[]).map(he=>({trackUri:Rt(he.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${he.track.name}${he.track.artists[0]?.name??""}`,trackName:he.track.name,artistName:he.track.artists[0]?.name??"",albumArt:he.track.albums[0]?.image,playedAt:new Date(he.endTime).getTime()||Date.now()}));a({totalPlays:q?.count??0,totalDuration:q?.durationMs??0,uniqueTrackCount:q?.cardinality.tracks??0,uniqueArtistCount:q?.cardinality.artists??0,skipRate:0,recentPlays:Q},1);let Z=[],ie=[],Se=[],le=null,Ce=[],Fe=[],Ie=[],Te=[],F=[],se,V,N,Ee,me,De=!w,Le=()=>{if(!w){Ee=0,a({newArtistCount:Ee},2);return}if(!De)return;if(ie.length===0){Ee=0,a({newArtistCount:Ee},2);return}let he=new Set(ie.map(ne=>ne.artist.externalIds?.spotify?.[0]).filter(ne=>!!ne));if(Ce.length>0){let ne=new Set(Ce.map(Ve=>Ve.artist.externalIds?.spotify?.[0]).filter(Ve=>!!Ve)),ee=0;for(let Ve of he)ne.has(Ve)||ee++;Ee=ee}else Ee=he.size;a({newArtistCount:Ee},2)},je=[O.then(he=>{Z=he.ok?he.data:[],Fe=Z.map(ne=>{let ee=ne.streams??0;return{rank:ne.position,trackUri:Rt(ne.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${ne.track.name}${ne.track.artists[0]?.name??""}`,trackName:ne.track.name,artistName:ne.track.artists[0]?.name??"",artistUri:Rt(ne.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${ne.track.artists[0]?.name??""}`,albumName:ne.track.albums[0]?.name??"",albumUri:Rt(ne.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:ne.track.albums[0]?.image,count:ee,durationMs:ne.playedMs??(ne.track.durationMs??0)*ee}}),a({topTracks:Fe},2),h||(Te=Rl(Z),a({topAlbums:Te},2))}),Promise.all([$,_]).then(([he,ne])=>{ie=he.ok?he.data:[],Ie=ie.map(Ve=>({rank:Ve.position,artistUri:Rt(Ve.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${Ve.artist.name}`,artistName:Ve.artist.name,count:Ve.streams??0,durationMs:Ve.playedMs??0,genres:Ve.artist.genres,imageUrl:Ve.artist.image??null})),a({topArtists:Ie},2);let ee=ne.ok?ne.data:null;F=Pl(ee,ie),a({topGenres:F},2),Le()}),z.then(he=>{h&&(Se=he.ok?he.data:[],Te=Se.map(ne=>({rank:ne.position,albumUri:Rt(ne.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${ne.album.name}${ne.album.artists[0]?.name??""}`,albumName:ne.album.name,artistName:ne.album.artists[0]?.name??"",albumArt:ne.album.image,count:ne.streams??0,durationMs:0})),a({topAlbums:Te},2))}),Y.then(he=>{if(le=he.ok?he.data:null,V=le?.days?Object.values(le.days).filter(ne=>ne.count>0).length:void 0,se=le?.days?El(le.days):0,N=le?.days?Object.entries(le.days).map(([ne,ee])=>({date:Zr(ne),count:ee.count})).sort((ne,ee)=>ne.date.localeCompare(ee.date)):void 0,w&&le?.days){let ne=0;for(let[ee,Ve]of Object.entries(le.days)){let xr=new Date(ee).getTime();Number.isFinite(xr)&&xr>=w.start&&xr<w.end&&(ne+=Ve.durationMs)}ne>0&&(me=ne)}a({streak:se,listeningDays:V,dailyPlayCounts:N,priorPeriodTotalDuration:me},2)}),k.then(he=>{Ce=he.ok?he.data:[],De=!0,Le()})];await Promise.allSettled(je);let[K]=await Promise.allSettled([U]),fe=Ia(K),He=Ot(K),pt=new Array(24).fill(0);if(He?.hours)for(let[he,ne]of Object.entries(He.hours)){let ee=Number(he);ee>=0&&ee<24&&(pt[ee]=ne.count)}let vt=pt.reduce((he,ne,ee,Ve)=>ne>Ve[he]?ee:he,0),tt,J,Me=He!=null&&(Object.keys(He.hours??{}).length>0||Object.keys(He.weekDays??{}).length>0);if(Me&&He?.weekDays){tt=new Array(7).fill(0);for(let[he,ne]of Object.entries(He.weekDays)){let ee=Number(he)-1;ee>=0&&ee<7&&(tt[ee]=ne.count)}J=tt.reduce((he,ne,ee,Ve)=>ne>Ve[he]?ee:he,0)}return fe?a({hourlyDistribution:new Array(24).fill(0),peakHour:0,hasListeningPatterns:!1},3,Or(fe.status,fe.message)):a({hourlyDistribution:pt,peakHour:vt,weekdayDistribution:tt,peakWeekday:J,hasListeningPatterns:Me},3),{topTracks:Fe,topArtists:Ie,topAlbums:Te,topGenres:F,totalPlays:q?.count??0,totalDuration:q?.durationMs??0,recentPlays:Q,hourlyDistribution:pt,peakHour:vt,skipRate:0,uniqueTrackCount:q?.cardinality.tracks??0,uniqueArtistCount:q?.cardinality.artists??0,streak:se,listeningDays:V,weekdayDistribution:tt,peakWeekday:J,hasListeningPatterns:Me,dailyPlayCounts:N,newArtistCount:Ee,priorPeriodTotalDuration:me,isFreeTier:!h&&Fe.every(he=>he.count===0)}}async init(){let t=localStorage.getItem(ce.STATSFM_CONFIG);if(!t)return;if(this.config=JSON.parse(t),Date.now()-this.config.lastValidated>Am){let i=await $r(this.config.username);i.valid&&(this.config.isPlus=i.isPlus,this.config.lastValidated=Date.now(),localStorage.setItem(ce.STATSFM_CONFIG,JSON.stringify(this.config)))}}destroy(){Be.invalidate()}},tr=new _a});var Qr=Re((jw,Ll)=>{"use strict";var Cm="2.0.0",Im=Number.MAX_SAFE_INTEGER||9007199254740991,_m=16,Dm=250,Om=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Ll.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:_m,MAX_SAFE_BUILD_LENGTH:Dm,MAX_SAFE_INTEGER:Im,RELEASE_TYPES:Om,SEMVER_SPEC_VERSION:Cm,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var _n=Re((Vw,$l)=>{"use strict";var Lm=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};$l.exports=Lm});var en=Re((Kt,Ml)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:gs,MAX_SAFE_BUILD_LENGTH:$m,MAX_LENGTH:Mm}=Qr(),Um=_n();Kt=Ml.exports={};var Wm=Kt.re=[],Fm=Kt.safeRe=[],ue=Kt.src=[],Bm=Kt.safeSrc=[],de=Kt.t={},zm=0,hs="[a-zA-Z0-9-]",Hm=[["\\s",1],["\\d",Mm],[hs,$m]],Gm=e=>{for(let[t,a]of Hm)e=e.split(`${t}*`).join(`${t}{0,${a}}`).split(`${t}+`).join(`${t}{1,${a}}`);return e},_e=(e,t,a)=>{let i=Gm(t),o=zm++;Um(e,o,t),de[e]=o,ue[o]=t,Bm[o]=i,Wm[o]=new RegExp(t,a?"g":void 0),Fm[o]=new RegExp(i,a?"g":void 0)};_e("NUMERICIDENTIFIER","0|[1-9]\\d*");_e("NUMERICIDENTIFIERLOOSE","\\d+");_e("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${hs}*`);_e("MAINVERSION",`(${ue[de.NUMERICIDENTIFIER]})\\.(${ue[de.NUMERICIDENTIFIER]})\\.(${ue[de.NUMERICIDENTIFIER]})`);_e("MAINVERSIONLOOSE",`(${ue[de.NUMERICIDENTIFIERLOOSE]})\\.(${ue[de.NUMERICIDENTIFIERLOOSE]})\\.(${ue[de.NUMERICIDENTIFIERLOOSE]})`);_e("PRERELEASEIDENTIFIER",`(?:${ue[de.NONNUMERICIDENTIFIER]}|${ue[de.NUMERICIDENTIFIER]})`);_e("PRERELEASEIDENTIFIERLOOSE",`(?:${ue[de.NONNUMERICIDENTIFIER]}|${ue[de.NUMERICIDENTIFIERLOOSE]})`);_e("PRERELEASE",`(?:-(${ue[de.PRERELEASEIDENTIFIER]}(?:\\.${ue[de.PRERELEASEIDENTIFIER]})*))`);_e("PRERELEASELOOSE",`(?:-?(${ue[de.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${ue[de.PRERELEASEIDENTIFIERLOOSE]})*))`);_e("BUILDIDENTIFIER",`${hs}+`);_e("BUILD",`(?:\\+(${ue[de.BUILDIDENTIFIER]}(?:\\.${ue[de.BUILDIDENTIFIER]})*))`);_e("FULLPLAIN",`v?${ue[de.MAINVERSION]}${ue[de.PRERELEASE]}?${ue[de.BUILD]}?`);_e("FULL",`^${ue[de.FULLPLAIN]}$`);_e("LOOSEPLAIN",`[v=\\s]*${ue[de.MAINVERSIONLOOSE]}${ue[de.PRERELEASELOOSE]}?${ue[de.BUILD]}?`);_e("LOOSE",`^${ue[de.LOOSEPLAIN]}$`);_e("GTLT","((?:<|>)?=?)");_e("XRANGEIDENTIFIERLOOSE",`${ue[de.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);_e("XRANGEIDENTIFIER",`${ue[de.NUMERICIDENTIFIER]}|x|X|\\*`);_e("XRANGEPLAIN",`[v=\\s]*(${ue[de.XRANGEIDENTIFIER]})(?:\\.(${ue[de.XRANGEIDENTIFIER]})(?:\\.(${ue[de.XRANGEIDENTIFIER]})(?:${ue[de.PRERELEASE]})?${ue[de.BUILD]}?)?)?`);_e("XRANGEPLAINLOOSE",`[v=\\s]*(${ue[de.XRANGEIDENTIFIERLOOSE]})(?:\\.(${ue[de.XRANGEIDENTIFIERLOOSE]})(?:\\.(${ue[de.XRANGEIDENTIFIERLOOSE]})(?:${ue[de.PRERELEASELOOSE]})?${ue[de.BUILD]}?)?)?`);_e("XRANGE",`^${ue[de.GTLT]}\\s*${ue[de.XRANGEPLAIN]}$`);_e("XRANGELOOSE",`^${ue[de.GTLT]}\\s*${ue[de.XRANGEPLAINLOOSE]}$`);_e("COERCEPLAIN",`(^|[^\\d])(\\d{1,${gs}})(?:\\.(\\d{1,${gs}}))?(?:\\.(\\d{1,${gs}}))?`);_e("COERCE",`${ue[de.COERCEPLAIN]}(?:$|[^\\d])`);_e("COERCEFULL",ue[de.COERCEPLAIN]+`(?:${ue[de.PRERELEASE]})?(?:${ue[de.BUILD]})?(?:$|[^\\d])`);_e("COERCERTL",ue[de.COERCE],!0);_e("COERCERTLFULL",ue[de.COERCEFULL],!0);_e("LONETILDE","(?:~>?)");_e("TILDETRIM",`(\\s*)${ue[de.LONETILDE]}\\s+`,!0);Kt.tildeTrimReplace="$1~";_e("TILDE",`^${ue[de.LONETILDE]}${ue[de.XRANGEPLAIN]}$`);_e("TILDELOOSE",`^${ue[de.LONETILDE]}${ue[de.XRANGEPLAINLOOSE]}$`);_e("LONECARET","(?:\\^)");_e("CARETTRIM",`(\\s*)${ue[de.LONECARET]}\\s+`,!0);Kt.caretTrimReplace="$1^";_e("CARET",`^${ue[de.LONECARET]}${ue[de.XRANGEPLAIN]}$`);_e("CARETLOOSE",`^${ue[de.LONECARET]}${ue[de.XRANGEPLAINLOOSE]}$`);_e("COMPARATORLOOSE",`^${ue[de.GTLT]}\\s*(${ue[de.LOOSEPLAIN]})$|^$`);_e("COMPARATOR",`^${ue[de.GTLT]}\\s*(${ue[de.FULLPLAIN]})$|^$`);_e("COMPARATORTRIM",`(\\s*)${ue[de.GTLT]}\\s*(${ue[de.LOOSEPLAIN]}|${ue[de.XRANGEPLAIN]})`,!0);Kt.comparatorTrimReplace="$1$2$3";_e("HYPHENRANGE",`^\\s*(${ue[de.XRANGEPLAIN]})\\s+-\\s+(${ue[de.XRANGEPLAIN]})\\s*$`);_e("HYPHENRANGELOOSE",`^\\s*(${ue[de.XRANGEPLAINLOOSE]})\\s+-\\s+(${ue[de.XRANGEPLAINLOOSE]})\\s*$`);_e("STAR","(<|>)?=?\\s*\\*");_e("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");_e("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Da=Re((qw,Ul)=>{"use strict";var Km=Object.freeze({loose:!0}),jm=Object.freeze({}),Vm=e=>e?typeof e!="object"?Km:e:jm;Ul.exports=Vm});var vs=Re((Yw,Bl)=>{"use strict";var Wl=/^[0-9]+$/,Fl=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let a=Wl.test(e),i=Wl.test(t);return a&&i&&(e=+e,t=+t),e===t?0:a&&!i?-1:i&&!a?1:e<t?-1:1},qm=(e,t)=>Fl(t,e);Bl.exports={compareIdentifiers:Fl,rcompareIdentifiers:qm}});var ht=Re((Xw,Hl)=>{"use strict";var Oa=_n(),{MAX_LENGTH:zl,MAX_SAFE_INTEGER:La}=Qr(),{safeRe:$a,t:Ma}=en(),Ym=Da(),{compareIdentifiers:ys}=vs(),bs=class e{constructor(t,a){if(a=Ym(a),t instanceof e){if(t.loose===!!a.loose&&t.includePrerelease===!!a.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>zl)throw new TypeError(`version is longer than ${zl} characters`);Oa("SemVer",t,a),this.options=a,this.loose=!!a.loose,this.includePrerelease=!!a.includePrerelease;let i=t.trim().match(a.loose?$a[Ma.LOOSE]:$a[Ma.FULL]);if(!i)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>La||this.major<0)throw new TypeError("Invalid major version");if(this.minor>La||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>La||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let l=+o;if(l>=0&&l<La)return l}return o}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Oa("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let a=0;do{let i=this.prerelease[a],o=t.prerelease[a];if(Oa("prerelease compare",a,i,o),i===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(i===void 0)return-1;if(i===o)continue;return ys(i,o)}while(++a)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let a=0;do{let i=this.build[a],o=t.build[a];if(Oa("build compare",a,i,o),i===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(i===void 0)return-1;if(i===o)continue;return ys(i,o)}while(++a)}inc(t,a,i){if(t.startsWith("pre")){if(!a&&i===!1)throw new Error("invalid increment argument: identifier is empty");if(a){let o=`-${a}`.match(this.options.loose?$a[Ma.PRERELEASELOOSE]:$a[Ma.PRERELEASE]);if(!o||o[1]!==a)throw new Error(`invalid identifier: ${a}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",a,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",a,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",a,i),this.inc("pre",a,i);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",a,i),this.inc("pre",a,i);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(i)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(a===this.prerelease.join(".")&&i===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(a){let l=[a,o];i===!1&&(l=[a]),ys(this.prerelease[0],a)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Hl.exports=bs});var yr=Re((Jw,Kl)=>{"use strict";var Gl=ht(),Xm=(e,t,a=!1)=>{if(e instanceof Gl)return e;try{return new Gl(e,t)}catch(i){if(!a)return null;throw i}};Kl.exports=Xm});var Vl=Re((Zw,jl)=>{"use strict";var Jm=yr(),Zm=(e,t)=>{let a=Jm(e,t);return a?a.version:null};jl.exports=Zm});var Yl=Re((Qw,ql)=>{"use strict";var Qm=yr(),eg=(e,t)=>{let a=Qm(e.trim().replace(/^[=v]+/,""),t);return a?a.version:null};ql.exports=eg});var Zl=Re((eS,Jl)=>{"use strict";var Xl=ht(),tg=(e,t,a,i,o)=>{typeof a=="string"&&(o=i,i=a,a=void 0);try{return new Xl(e instanceof Xl?e.version:e,a).inc(t,i,o).version}catch{return null}};Jl.exports=tg});var tc=Re((tS,ec)=>{"use strict";var Ql=yr(),rg=(e,t)=>{let a=Ql(e,null,!0),i=Ql(t,null,!0),o=a.compare(i);if(o===0)return null;let l=o>0,d=l?a:i,m=l?i:a,g=!!d.prerelease.length;if(!!m.prerelease.length&&!g){if(!m.patch&&!m.minor)return"major";if(m.compareMain(d)===0)return m.minor&&!m.patch?"minor":"patch"}let b=g?"pre":"";return a.major!==i.major?b+"major":a.minor!==i.minor?b+"minor":a.patch!==i.patch?b+"patch":"prerelease"};ec.exports=rg});var nc=Re((rS,rc)=>{"use strict";var ng=ht(),ag=(e,t)=>new ng(e,t).major;rc.exports=ag});var ic=Re((nS,ac)=>{"use strict";var ig=ht(),sg=(e,t)=>new ig(e,t).minor;ac.exports=sg});var oc=Re((aS,sc)=>{"use strict";var og=ht(),lg=(e,t)=>new og(e,t).patch;sc.exports=lg});var cc=Re((iS,lc)=>{"use strict";var cg=yr(),ug=(e,t)=>{let a=cg(e,t);return a&&a.prerelease.length?a.prerelease:null};lc.exports=ug});var Lt=Re((sS,dc)=>{"use strict";var uc=ht(),dg=(e,t,a)=>new uc(e,a).compare(new uc(t,a));dc.exports=dg});var fc=Re((oS,pc)=>{"use strict";var pg=Lt(),fg=(e,t,a)=>pg(t,e,a);pc.exports=fg});var gc=Re((lS,mc)=>{"use strict";var mg=Lt(),gg=(e,t)=>mg(e,t,!0);mc.exports=gg});var Ua=Re((cS,vc)=>{"use strict";var hc=ht(),hg=(e,t,a)=>{let i=new hc(e,a),o=new hc(t,a);return i.compare(o)||i.compareBuild(o)};vc.exports=hg});var bc=Re((uS,yc)=>{"use strict";var vg=Ua(),yg=(e,t)=>e.sort((a,i)=>vg(a,i,t));yc.exports=yg});var Sc=Re((dS,wc)=>{"use strict";var bg=Ua(),wg=(e,t)=>e.sort((a,i)=>bg(i,a,t));wc.exports=wg});var Dn=Re((pS,xc)=>{"use strict";var Sg=Lt(),xg=(e,t,a)=>Sg(e,t,a)>0;xc.exports=xg});var Wa=Re((fS,kc)=>{"use strict";var kg=Lt(),Tg=(e,t,a)=>kg(e,t,a)<0;kc.exports=Tg});var ws=Re((mS,Tc)=>{"use strict";var Eg=Lt(),Ag=(e,t,a)=>Eg(e,t,a)===0;Tc.exports=Ag});var Ss=Re((gS,Ec)=>{"use strict";var Pg=Lt(),Rg=(e,t,a)=>Pg(e,t,a)!==0;Ec.exports=Rg});var Fa=Re((hS,Ac)=>{"use strict";var Ng=Lt(),Cg=(e,t,a)=>Ng(e,t,a)>=0;Ac.exports=Cg});var Ba=Re((vS,Pc)=>{"use strict";var Ig=Lt(),_g=(e,t,a)=>Ig(e,t,a)<=0;Pc.exports=_g});var xs=Re((yS,Rc)=>{"use strict";var Dg=ws(),Og=Ss(),Lg=Dn(),$g=Fa(),Mg=Wa(),Ug=Ba(),Wg=(e,t,a,i)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof a=="object"&&(a=a.version),e===a;case"!==":return typeof e=="object"&&(e=e.version),typeof a=="object"&&(a=a.version),e!==a;case"":case"=":case"==":return Dg(e,a,i);case"!=":return Og(e,a,i);case">":return Lg(e,a,i);case">=":return $g(e,a,i);case"<":return Mg(e,a,i);case"<=":return Ug(e,a,i);default:throw new TypeError(`Invalid operator: ${t}`)}};Rc.exports=Wg});var Cc=Re((bS,Nc)=>{"use strict";var Fg=ht(),Bg=yr(),{safeRe:za,t:Ha}=en(),zg=(e,t)=>{if(e instanceof Fg)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let a=null;if(!t.rtl)a=e.match(t.includePrerelease?za[Ha.COERCEFULL]:za[Ha.COERCE]);else{let g=t.includePrerelease?za[Ha.COERCERTLFULL]:za[Ha.COERCERTL],h;for(;(h=g.exec(e))&&(!a||a.index+a[0].length!==e.length);)(!a||h.index+h[0].length!==a.index+a[0].length)&&(a=h),g.lastIndex=h.index+h[1].length+h[2].length;g.lastIndex=-1}if(a===null)return null;let i=a[2],o=a[3]||"0",l=a[4]||"0",d=t.includePrerelease&&a[5]?`-${a[5]}`:"",m=t.includePrerelease&&a[6]?`+${a[6]}`:"";return Bg(`${i}.${o}.${l}${d}${m}`,t)};Nc.exports=zg});var _c=Re((wS,Ic)=>{"use strict";var Hg=yr(),Gg=Qr(),Kg=ht(),jg=(e,t,a)=>{if(!Gg.RELEASE_TYPES.includes(t))return null;let i=Vg(e,a);return i&&qg(i,t)},Vg=(e,t)=>{let a=e instanceof Kg?e.version:e;return Hg(a,t)},qg=(e,t)=>{if(Yg(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},Yg=e=>e.startsWith("pre");Ic.exports=jg});var Oc=Re((SS,Dc)=>{"use strict";var ks=class{constructor(){this.max=1e3,this.map=new Map}get(t){let a=this.map.get(t);if(a!==void 0)return this.map.delete(t),this.map.set(t,a),a}delete(t){return this.map.delete(t)}set(t,a){if(!this.delete(t)&&a!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,a)}return this}};Dc.exports=ks});var $t=Re((xS,Uc)=>{"use strict";var Xg=/\s+/g,Ts=class e{constructor(t,a){if(a=Zg(a),t instanceof e)return t.loose===!!a.loose&&t.includePrerelease===!!a.includePrerelease?t:new e(t.raw,a);if(t instanceof Es)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=a,this.loose=!!a.loose,this.includePrerelease=!!a.includePrerelease,this.raw=t.trim().replace(Xg," "),this.set=this.raw.split("||").map(i=>this.parseRange(i.trim())).filter(i=>i.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let i=this.set[0];if(this.set=this.set.filter(o=>!$c(o[0])),this.set.length===0)this.set=[i];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&ih(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let a=this.set[t];for(let i=0;i<a.length;i++)i>0&&(this.formatted+=" "),this.formatted+=a[i].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){let i=((this.options.includePrerelease&&nh)|(this.options.loose&&ah))+":"+t,o=Lc.get(i);if(o)return o;let l=this.options.loose,d=l?kt[wt.HYPHENRANGELOOSE]:kt[wt.HYPHENRANGE];t=t.replace(d,gh(this.options.includePrerelease)),Xe("hyphen replace",t),t=t.replace(kt[wt.COMPARATORTRIM],eh),Xe("comparator trim",t),t=t.replace(kt[wt.TILDETRIM],th),Xe("tilde trim",t),t=t.replace(kt[wt.CARETTRIM],rh),Xe("caret trim",t);let m=t.split(" ").map(w=>sh(w,this.options)).join(" ").split(/\s+/).map(w=>mh(w,this.options));l&&(m=m.filter(w=>(Xe("loose invalid filter",w,this.options),!!w.match(kt[wt.COMPARATORLOOSE])))),Xe("range list",m);let g=new Map,h=m.map(w=>new Es(w,this.options));for(let w of h){if($c(w))return[w];g.set(w.value,w)}g.size>1&&g.has("")&&g.delete("");let b=[...g.values()];return Lc.set(i,b),b}intersects(t,a){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(i=>Mc(i,a)&&t.set.some(o=>Mc(o,a)&&i.every(l=>o.every(d=>l.intersects(d,a)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new Qg(t,this.options)}catch{return!1}for(let a=0;a<this.set.length;a++)if(hh(this.set[a],t,this.options))return!0;return!1}};Uc.exports=Ts;var Jg=Oc(),Lc=new Jg,Zg=Da(),Es=On(),Xe=_n(),Qg=ht(),{safeRe:kt,t:wt,comparatorTrimReplace:eh,tildeTrimReplace:th,caretTrimReplace:rh}=en(),{FLAG_INCLUDE_PRERELEASE:nh,FLAG_LOOSE:ah}=Qr(),$c=e=>e.value==="<0.0.0-0",ih=e=>e.value==="",Mc=(e,t)=>{let a=!0,i=e.slice(),o=i.pop();for(;a&&i.length;)a=i.every(l=>o.intersects(l,t)),o=i.pop();return a},sh=(e,t)=>(e=e.replace(kt[wt.BUILD],""),Xe("comp",e,t),e=ch(e,t),Xe("caret",e),e=oh(e,t),Xe("tildes",e),e=dh(e,t),Xe("xrange",e),e=fh(e,t),Xe("stars",e),e),Tt=e=>!e||e.toLowerCase()==="x"||e==="*",oh=(e,t)=>e.trim().split(/\s+/).map(a=>lh(a,t)).join(" "),lh=(e,t)=>{let a=t.loose?kt[wt.TILDELOOSE]:kt[wt.TILDE];return e.replace(a,(i,o,l,d,m)=>{Xe("tilde",e,i,o,l,d,m);let g;return Tt(o)?g="":Tt(l)?g=`>=${o}.0.0 <${+o+1}.0.0-0`:Tt(d)?g=`>=${o}.${l}.0 <${o}.${+l+1}.0-0`:m?(Xe("replaceTilde pr",m),g=`>=${o}.${l}.${d}-${m} <${o}.${+l+1}.0-0`):g=`>=${o}.${l}.${d} <${o}.${+l+1}.0-0`,Xe("tilde return",g),g})},ch=(e,t)=>e.trim().split(/\s+/).map(a=>uh(a,t)).join(" "),uh=(e,t)=>{Xe("caret",e,t);let a=t.loose?kt[wt.CARETLOOSE]:kt[wt.CARET],i=t.includePrerelease?"-0":"";return e.replace(a,(o,l,d,m,g)=>{Xe("caret",e,o,l,d,m,g);let h;return Tt(l)?h="":Tt(d)?h=`>=${l}.0.0${i} <${+l+1}.0.0-0`:Tt(m)?l==="0"?h=`>=${l}.${d}.0${i} <${l}.${+d+1}.0-0`:h=`>=${l}.${d}.0${i} <${+l+1}.0.0-0`:g?(Xe("replaceCaret pr",g),l==="0"?d==="0"?h=`>=${l}.${d}.${m}-${g} <${l}.${d}.${+m+1}-0`:h=`>=${l}.${d}.${m}-${g} <${l}.${+d+1}.0-0`:h=`>=${l}.${d}.${m}-${g} <${+l+1}.0.0-0`):(Xe("no pr"),l==="0"?d==="0"?h=`>=${l}.${d}.${m}${i} <${l}.${d}.${+m+1}-0`:h=`>=${l}.${d}.${m}${i} <${l}.${+d+1}.0-0`:h=`>=${l}.${d}.${m} <${+l+1}.0.0-0`),Xe("caret return",h),h})},dh=(e,t)=>(Xe("replaceXRanges",e,t),e.split(/\s+/).map(a=>ph(a,t)).join(" ")),ph=(e,t)=>{e=e.trim();let a=t.loose?kt[wt.XRANGELOOSE]:kt[wt.XRANGE];return e.replace(a,(i,o,l,d,m,g)=>{Xe("xRange",e,i,o,l,d,m,g);let h=Tt(l),b=h||Tt(d),w=b||Tt(m),k=w;return o==="="&&k&&(o=""),g=t.includePrerelease?"-0":"",h?o===">"||o==="<"?i="<0.0.0-0":i="*":o&&k?(b&&(d=0),m=0,o===">"?(o=">=",b?(l=+l+1,d=0,m=0):(d=+d+1,m=0)):o==="<="&&(o="<",b?l=+l+1:d=+d+1),o==="<"&&(g="-0"),i=`${o+l}.${d}.${m}${g}`):b?i=`>=${l}.0.0${g} <${+l+1}.0.0-0`:w&&(i=`>=${l}.${d}.0${g} <${l}.${+d+1}.0-0`),Xe("xRange return",i),i})},fh=(e,t)=>(Xe("replaceStars",e,t),e.trim().replace(kt[wt.STAR],"")),mh=(e,t)=>(Xe("replaceGTE0",e,t),e.trim().replace(kt[t.includePrerelease?wt.GTE0PRE:wt.GTE0],"")),gh=e=>(t,a,i,o,l,d,m,g,h,b,w,k)=>(Tt(i)?a="":Tt(o)?a=`>=${i}.0.0${e?"-0":""}`:Tt(l)?a=`>=${i}.${o}.0${e?"-0":""}`:d?a=`>=${a}`:a=`>=${a}${e?"-0":""}`,Tt(h)?g="":Tt(b)?g=`<${+h+1}.0.0-0`:Tt(w)?g=`<${h}.${+b+1}.0-0`:k?g=`<=${h}.${b}.${w}-${k}`:e?g=`<${h}.${b}.${+w+1}-0`:g=`<=${g}`,`${a} ${g}`.trim()),hh=(e,t,a)=>{for(let i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!a.includePrerelease){for(let i=0;i<e.length;i++)if(Xe(e[i].semver),e[i].semver!==Es.ANY&&e[i].semver.prerelease.length>0){let o=e[i].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var On=Re((kS,Gc)=>{"use strict";var Ln=Symbol("SemVer ANY"),Rs=class e{static get ANY(){return Ln}constructor(t,a){if(a=Wc(a),t instanceof e){if(t.loose===!!a.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),Ps("comparator",t,a),this.options=a,this.loose=!!a.loose,this.parse(t),this.semver===Ln?this.value="":this.value=this.operator+this.semver.version,Ps("comp",this)}parse(t){let a=this.options.loose?Fc[Bc.COMPARATORLOOSE]:Fc[Bc.COMPARATOR],i=t.match(a);if(!i)throw new TypeError(`Invalid comparator: ${t}`);this.operator=i[1]!==void 0?i[1]:"",this.operator==="="&&(this.operator=""),i[2]?this.semver=new zc(i[2],this.options.loose):this.semver=Ln}toString(){return this.value}test(t){if(Ps("Comparator.test",t,this.options.loose),this.semver===Ln||t===Ln)return!0;if(typeof t=="string")try{t=new zc(t,this.options)}catch{return!1}return As(t,this.operator,this.semver,this.options)}intersects(t,a){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new Hc(t.value,a).test(this.value):t.operator===""?t.value===""?!0:new Hc(this.value,a).test(t.semver):(a=Wc(a),a.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!a.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||As(this.semver,"<",t.semver,a)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||As(this.semver,">",t.semver,a)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};Gc.exports=Rs;var Wc=Da(),{safeRe:Fc,t:Bc}=en(),As=xs(),Ps=_n(),zc=ht(),Hc=$t()});var $n=Re((TS,Kc)=>{"use strict";var vh=$t(),yh=(e,t,a)=>{try{t=new vh(t,a)}catch{return!1}return t.test(e)};Kc.exports=yh});var Vc=Re((ES,jc)=>{"use strict";var bh=$t(),wh=(e,t)=>new bh(e,t).set.map(a=>a.map(i=>i.value).join(" ").trim().split(" "));jc.exports=wh});var Yc=Re((AS,qc)=>{"use strict";var Sh=ht(),xh=$t(),kh=(e,t,a)=>{let i=null,o=null,l=null;try{l=new xh(t,a)}catch{return null}return e.forEach(d=>{l.test(d)&&(!i||o.compare(d)===-1)&&(i=d,o=new Sh(i,a))}),i};qc.exports=kh});var Jc=Re((PS,Xc)=>{"use strict";var Th=ht(),Eh=$t(),Ah=(e,t,a)=>{let i=null,o=null,l=null;try{l=new Eh(t,a)}catch{return null}return e.forEach(d=>{l.test(d)&&(!i||o.compare(d)===1)&&(i=d,o=new Th(i,a))}),i};Xc.exports=Ah});var eu=Re((RS,Qc)=>{"use strict";var Ns=ht(),Ph=$t(),Zc=Dn(),Rh=(e,t)=>{e=new Ph(e,t);let a=new Ns("0.0.0");if(e.test(a)||(a=new Ns("0.0.0-0"),e.test(a)))return a;a=null;for(let i=0;i<e.set.length;++i){let o=e.set[i],l=null;o.forEach(d=>{let m=new Ns(d.semver.version);switch(d.operator){case">":m.prerelease.length===0?m.patch++:m.prerelease.push(0),m.raw=m.format();case"":case">=":(!l||Zc(m,l))&&(l=m);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${d.operator}`)}}),l&&(!a||Zc(a,l))&&(a=l)}return a&&e.test(a)?a:null};Qc.exports=Rh});var ru=Re((NS,tu)=>{"use strict";var Nh=$t(),Ch=(e,t)=>{try{return new Nh(e,t).range||"*"}catch{return null}};tu.exports=Ch});var Ga=Re((CS,su)=>{"use strict";var Ih=ht(),iu=On(),{ANY:_h}=iu,Dh=$t(),Oh=$n(),nu=Dn(),au=Wa(),Lh=Ba(),$h=Fa(),Mh=(e,t,a,i)=>{e=new Ih(e,i),t=new Dh(t,i);let o,l,d,m,g;switch(a){case">":o=nu,l=Lh,d=au,m=">",g=">=";break;case"<":o=au,l=$h,d=nu,m="<",g="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Oh(e,t,i))return!1;for(let h=0;h<t.set.length;++h){let b=t.set[h],w=null,k=null;if(b.forEach(x=>{x.semver===_h&&(x=new iu(">=0.0.0")),w=w||x,k=k||x,o(x.semver,w.semver,i)?w=x:d(x.semver,k.semver,i)&&(k=x)}),w.operator===m||w.operator===g||(!k.operator||k.operator===m)&&l(e,k.semver))return!1;if(k.operator===g&&d(e,k.semver))return!1}return!0};su.exports=Mh});var lu=Re((IS,ou)=>{"use strict";var Uh=Ga(),Wh=(e,t,a)=>Uh(e,t,">",a);ou.exports=Wh});var uu=Re((_S,cu)=>{"use strict";var Fh=Ga(),Bh=(e,t,a)=>Fh(e,t,"<",a);cu.exports=Bh});var fu=Re((DS,pu)=>{"use strict";var du=$t(),zh=(e,t,a)=>(e=new du(e,a),t=new du(t,a),e.intersects(t,a));pu.exports=zh});var gu=Re((OS,mu)=>{"use strict";var Hh=$n(),Gh=Lt();mu.exports=(e,t,a)=>{let i=[],o=null,l=null,d=e.sort((b,w)=>Gh(b,w,a));for(let b of d)Hh(b,t,a)?(l=b,o||(o=b)):(l&&i.push([o,l]),l=null,o=null);o&&i.push([o,null]);let m=[];for(let[b,w]of i)b===w?m.push(b):!w&&b===d[0]?m.push("*"):w?b===d[0]?m.push(`<=${w}`):m.push(`${b} - ${w}`):m.push(`>=${b}`);let g=m.join(" || "),h=typeof t.raw=="string"?t.raw:String(t);return g.length<h.length?g:t}});var Su=Re((LS,wu)=>{"use strict";var hu=$t(),Is=On(),{ANY:Cs}=Is,Mn=$n(),_s=Lt(),Kh=(e,t,a={})=>{if(e===t)return!0;e=new hu(e,a),t=new hu(t,a);let i=!1;e:for(let o of e.set){for(let l of t.set){let d=Vh(o,l,a);if(i=i||d!==null,d)continue e}if(i)return!1}return!0},jh=[new Is(">=0.0.0-0")],vu=[new Is(">=0.0.0")],Vh=(e,t,a)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===Cs){if(t.length===1&&t[0].semver===Cs)return!0;a.includePrerelease?e=jh:e=vu}if(t.length===1&&t[0].semver===Cs){if(a.includePrerelease)return!0;t=vu}let i=new Set,o,l;for(let x of e)x.operator===">"||x.operator===">="?o=yu(o,x,a):x.operator==="<"||x.operator==="<="?l=bu(l,x,a):i.add(x.semver);if(i.size>1)return null;let d;if(o&&l){if(d=_s(o.semver,l.semver,a),d>0)return null;if(d===0&&(o.operator!==">="||l.operator!=="<="))return null}for(let x of i){if(o&&!Mn(x,String(o),a)||l&&!Mn(x,String(l),a))return null;for(let P of t)if(!Mn(x,String(P),a))return!1;return!0}let m,g,h,b,w=l&&!a.includePrerelease&&l.semver.prerelease.length?l.semver:!1,k=o&&!a.includePrerelease&&o.semver.prerelease.length?o.semver:!1;w&&w.prerelease.length===1&&l.operator==="<"&&w.prerelease[0]===0&&(w=!1);for(let x of t){if(b=b||x.operator===">"||x.operator===">=",h=h||x.operator==="<"||x.operator==="<=",o){if(k&&x.semver.prerelease&&x.semver.prerelease.length&&x.semver.major===k.major&&x.semver.minor===k.minor&&x.semver.patch===k.patch&&(k=!1),x.operator===">"||x.operator===">="){if(m=yu(o,x,a),m===x&&m!==o)return!1}else if(o.operator===">="&&!Mn(o.semver,String(x),a))return!1}if(l){if(w&&x.semver.prerelease&&x.semver.prerelease.length&&x.semver.major===w.major&&x.semver.minor===w.minor&&x.semver.patch===w.patch&&(w=!1),x.operator==="<"||x.operator==="<="){if(g=bu(l,x,a),g===x&&g!==l)return!1}else if(l.operator==="<="&&!Mn(l.semver,String(x),a))return!1}if(!x.operator&&(l||o)&&d!==0)return!1}return!(o&&h&&!l&&d!==0||l&&b&&!o&&d!==0||k||w)},yu=(e,t,a)=>{if(!e)return t;let i=_s(e.semver,t.semver,a);return i>0?e:i<0||t.operator===">"&&e.operator===">="?t:e},bu=(e,t,a)=>{if(!e)return t;let i=_s(e.semver,t.semver,a);return i<0?e:i>0||t.operator==="<"&&e.operator==="<="?t:e};wu.exports=Kh});var Eu=Re(($S,Tu)=>{"use strict";var Ds=en(),xu=Qr(),qh=ht(),ku=vs(),Yh=yr(),Xh=Vl(),Jh=Yl(),Zh=Zl(),Qh=tc(),ev=nc(),tv=ic(),rv=oc(),nv=cc(),av=Lt(),iv=fc(),sv=gc(),ov=Ua(),lv=bc(),cv=Sc(),uv=Dn(),dv=Wa(),pv=ws(),fv=Ss(),mv=Fa(),gv=Ba(),hv=xs(),vv=Cc(),yv=_c(),bv=On(),wv=$t(),Sv=$n(),xv=Vc(),kv=Yc(),Tv=Jc(),Ev=eu(),Av=ru(),Pv=Ga(),Rv=lu(),Nv=uu(),Cv=fu(),Iv=gu(),_v=Su();Tu.exports={parse:Yh,valid:Xh,clean:Jh,inc:Zh,diff:Qh,major:ev,minor:tv,patch:rv,prerelease:nv,compare:av,rcompare:iv,compareLoose:sv,compareBuild:ov,sort:lv,rsort:cv,gt:uv,lt:dv,eq:pv,neq:fv,gte:mv,lte:gv,cmp:hv,coerce:vv,truncate:yv,Comparator:bv,Range:wv,satisfies:Sv,toComparators:xv,maxSatisfying:kv,minSatisfying:Tv,minVersion:Ev,validRange:Av,outside:Pv,gtr:Rv,ltr:Nv,intersects:Cv,simplifyRange:Iv,subset:_v,SemVer:qh,re:Ds.re,src:Ds.src,tokens:Ds.t,SEMVER_SPEC_VERSION:xu.SEMVER_SPEC_VERSION,RELEASE_TYPES:xu.RELEASE_TYPES,compareIdentifiers:ku.compareIdentifiers,rcompareIdentifiers:ku.rcompareIdentifiers}});var D0={};tl(D0,{findPlaybarMount:()=>Rp,render:()=>I0,unmount:()=>_0});var al="Xndr2",il="listening-stats",wa=`${al}/${il}`,Qt=`https://github.com/${wa}`,L0=`${Qt}/releases/latest/download/listening-stats.zip`,er=`https://raw.githubusercontent.com/${wa}/main`,sl=`https://raw.githubusercontent.com/${wa}/dist/latest-release.json`,ol=`https://cdn.jsdelivr.net/gh/${al}/${il}@dist/latest-release.json`,ll=`https://api.github.com/repos/${wa}`;var cl="listening-stats:remote-announcement-cache",Jf=1800*1e3;function Sa(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Zf(e){let t=e.trim(),a=t.match(/^UPDATE\s*(.*)$/i);if(!a)return null;let i=a[1].trim(),o=i.indexOf("|");if(o>=0){let l=i.slice(0,o).trim(),d=i.slice(o+1).trim();return{dismissId:l||Sa(t),headline:d||"Notice from the Listening Stats maintainers."}}return{dismissId:Sa(t),headline:i||"Notice from the Listening Stats maintainers."}}function Qf(e){let t=e.replace(/^\uFEFF/,"").trim();if(!t)return null;let a=t.indexOf(`
`),i=(a===-1?t:t.slice(0,a)).trim(),o=a===-1?"":t.slice(a+1).trim(),l=Zf(i);if(l)return{dismissId:l.dismissId,title:l.headline,body:o.trim()||"Open the changelog in the app, or run the install script from Settings \u2192 About to update.",actionLabel:"Changelog",actionUrl:`${Qt}/releases`,actionOpensChangelog:!0};if(i.startsWith("# ")){let d=i.slice(2).trim();return{dismissId:Sa(t),title:d,body:o}}return{dismissId:Sa(t),title:"Announcement",body:t}}async function ul(){let e=null;try{let t=sessionStorage.getItem(cl);if(t){let a=JSON.parse(t);a&&typeof a.t=="number"&&typeof a.text=="string"&&Date.now()-a.t<Jf&&(e=a.text)}}catch{}if(e===null)try{let t=await fetch(`${er}/ANNOUNCEMENT.md?t=${Date.now()}`,{cache:"no-store"});if(t.status===404)e="";else if(t.ok)e=await t.text();else return null;try{sessionStorage.setItem(cl,JSON.stringify({t:Date.now(),text:e??""}))}catch{}}catch{return null}return e===null||e===""?null:Qf(e)}Pt();st();xa();var em="https://ws.audioscrobbler.com/2.0/";var tm=["2a96cbd8b46e442fc41c2b86b821562f","c6f59c1e5e7240a4c0d427abd71f3dbb"];function rm(e){return tm.some(t=>e.includes(t))}function kn(e){let t=e?.find(a=>a.size==="large")?.["#text"]?.trim();return t&&!rm(t)?t:void 0}async function Tn(e,t,a){let i=new URL(em);i.searchParams.set("api_key",e),i.searchParams.set("format","json"),i.searchParams.set("method",t);for(let[d,m]of Object.entries(a))i.searchParams.set(d,m);let o=await fetch(i.toString());if(!o.ok)throw o.status===403?new Error("Invalid Last.fm API key"):o.status===429?new Error("Last.fm rate limited"):new Error(`Last.fm API error: ${o.status}`);let l=await o.json();if(l.error)throw new Error(l.message||`Last.fm error ${l.error}`);return l}async function dl(e,t){let i=(await Tn(e,"user.getinfo",{user:t})).user;return{username:i.name,totalScrobbles:parseInt(i.playcount,10)||0,registered:i.registered?.["#text"]||"",imageUrl:kn(i.image)}}async function Ji(e,t,a=50,i=1,o,l){let d={user:t,limit:String(a),page:String(i)};return o!==void 0&&(d.from=String(Math.floor(o/1e3))),l!==void 0&&(d.to=String(Math.floor(l/1e3))),((await Tn(e,"user.getrecenttracks",d)).recenttracks?.track||[]).filter(h=>h.date||h["@attr"]?.nowplaying).map(h=>{let b="#text"in h.artist?h.artist["#text"]:h.artist.name;return{name:h.name,artist:b,album:h.album?.["#text"]||"",albumArt:kn(h.image),playedAt:h.date?.uts?parseInt(h.date.uts,10)*1e3:Date.now()}})}async function pl(e,t,a,i=200){return((await Tn(e,"user.gettoptracks",{user:t,period:a,limit:String(i)})).toptracks?.track||[]).map(d=>({name:d.name,artist:d.artist?.name||"",playCount:parseInt(d.playcount,10)||0,albumArt:kn(d.image)}))}async function fl(e,t,a,i=100){return((await Tn(e,"user.gettopartists",{user:t,period:a,limit:String(i)})).topartists?.artist||[]).map(d=>({name:d.name,playCount:parseInt(d.playcount,10)||0,imageUrl:kn(d.image)}))}async function ml(e,t,a,i=100){return((await Tn(e,"user.gettopalbums",{user:t,period:a,limit:String(i)})).topalbums?.album||[]).map(d=>({name:d.name,artist:d.artist?.name||"",playCount:parseInt(d.playcount,10)||0,imageUrl:kn(d.image)}))}st();Lr();gr();var cm="lastfm",um=20,bl=200,dm=12;function pm(e){return`${cm}:${e}`}function Xr(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function fm(e){let t=new Set(e.map(d=>Xr(d.playedAt)));if(t.size===0)return 0;let a=new Date,i=new Date(a.getFullYear(),a.getMonth(),a.getDate()),o=Xr(i.getTime());if(!t.has(o)&&(i.setDate(i.getDate()-1),!t.has(Xr(i.getTime()))))return 0;let l=0;for(;t.has(Xr(i.getTime()));)l++,i.setDate(i.getDate()-1);return l}var ts=class{constructor(){this.config=null}getProviderInfo(){return{id:"lastfm",name:"Last.fm",description:"Stats from Last.fm scrobbles",capabilities:{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return yl}async calculateStats(t){if(!this.config&&(await this.init(),!this.config))throw new Error("LastfmProvider not configured  -  call init() first");let a=pm(t.id),i=Be.get(a);if(i)return i;let{apiKey:o,username:l}=this.config,d=t.id,[m,g,h,b]=await Promise.allSettled([pl(o,l,d,200),fl(o,l,d,100),ml(o,l,d,100),Ji(o,l,bl,1)]),w=m.status==="fulfilled"?m.value:[],k=g.status==="fulfilled"?g.value:[],x=h.status==="fulfilled"?h.value:[],P=b.status==="fulfilled"?b.value:[],O=P.filter(V=>!Number.isNaN(V.playedAt)),$=w.reduce((V,N)=>V+N.playCount,0)||O.length,z=$*21e4,Y=w.map((V,N)=>({rank:N+1,trackUri:`lfm:track:${V.artist}:${V.name}`,trackName:V.name,artistName:V.artist,artistUri:`lfm:artist:${V.artist}`,albumName:V.album??"",albumUri:"",albumArt:V.albumArt,count:V.playCount,durationMs:0})),U=k.map((V,N)=>({rank:N+1,artistUri:`lfm:artist:${V.name}`,artistName:V.name,count:V.playCount,durationMs:0,imageUrl:V.imageUrl??null})),W=x.map((V,N)=>({rank:N+1,albumUri:`lfm:album:${V.artist}:${V.name}`,albumName:V.name,artistName:V.artist,count:V.playCount,durationMs:0,albumArt:V.imageUrl})),L=[],q=O.slice(0,dm).map(V=>({trackUri:`lfm:track:${V.artist}:${V.name}`,trackName:V.name,artistName:V.artist,albumArt:V.albumArt,playedAt:V.playedAt})),X=new Array(24).fill(0);for(let V of O){let N=new Date(V.playedAt).getHours();X[N]++}let Q=O.length>0?X.indexOf(Math.max(...X)):0,Z=new Array(7).fill(0);for(let V of O){let N=new Date(V.playedAt).getDay(),Ee=N===0?6:N-1;Z[Ee]++}let ie=O.length>0?Z.indexOf(Math.max(...Z)):0,Se=[...P];for(let V=2;V<=um;V++){let N=await Ji(o,l,bl,V);if(N.length===0)break;Se.push(...N)}let le=fm(Se),Ce=new Set(Se.map(V=>Xr(V.playedAt))).size,Fe=new Map;for(let V of Se){let N=Xr(V.playedAt);Fe.set(N,(Fe.get(N)??0)+1)}let Ie=Array.from(Fe.entries()).map(([V,N])=>({date:V,count:N})).sort((V,N)=>V.date.localeCompare(N.date)),Te=w.length,F=k.length,se={topTracks:Y,topArtists:U,topAlbums:W,topGenres:L,totalPlays:$,totalDuration:z,listeningDays:Ce,recentPlays:q,hourlyDistribution:X,peakHour:Q,skipRate:0,uniqueTrackCount:Te,uniqueArtistCount:F,streak:le,weekdayDistribution:Z,peakWeekday:ie,dailyPlayCounts:Ie};return Be.set(a,se),se}async calculateStatsProgressive(t,a){let i=await this.calculateStats(t);return a(i,1),a(i,2),a(i,3),i}async init(){let t=localStorage.getItem(ce.LASTFM_CONFIG);if(t)try{this.config=JSON.parse(t)}catch{this.config=null}else this.config=null}destroy(){Be.invalidate()}},Pn=new ts;var Ta=nl(wl(),1),Sl=Symbol.for("Dexie"),Ea=globalThis[Sl]||(globalThis[Sl]=Ta.default);if(Ta.default.semVer!==Ea.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ta.default.semVer} and ${Ea.semVer}`);var{liveQuery:J0,mergeRanges:Z0,rangesOverlap:Q0,RangeSet:ew,cmp:tw,Entity:rw,PropModification:nw,replacePrefix:aw,add:iw,remove:sw,DexieYProvider:ow}=Ea;var xl=Ea;var mm,as=class extends xl{constructor(t){super("listening-stats"),this.version(4).stores({playEvents:"++id, startedAt, trackUri, artistUri, type"}),this.version(5).stores({playEvents:"++id, startedAt, trackUri, artistUri, type",artists:"uri, updatedAt"}),this.on("versionchange",a=>{if(a.newVersion!==null)return this.close({disableAutoOpen:!0}),t?.(),mm?.(),!1})}},Ke=new as;function Ye(e){if(e==null)return;let t=String(e).trim();if(t){if(/^spotify:image:/i.test(t)){let a=t.replace(/^spotify:image:/i,"").trim();return a?`https://i.scdn.co/image/${a}`:void 0}return t}}var is=class{constructor(t=300*1e3){this.store=new Map;this.ttlMs=t}get(t){let a=this.store.get(t);return!a||Date.now()>a.expiry?null:a.data}getStale(t){let a=this.store.get(t);return a?a.data:null}set(t,a){this.store.set(t,{data:a,expiry:Date.now()+this.ttlMs})}invalidate(t){t!==void 0?this.store.delete(t):this.store.clear()}},Aa=new is;Pa();async function Gt(e){let t=Aa.get(e);if(t!==null)return{ok:!0,data:t};if(hr.isOpen()){let a=Aa.getStale(e);return a!==null?{ok:!0,data:a,stale:!0}:{ok:!1,error:{type:"circuit_open"}}}try{let a=await Spicetify.CosmosAsync.request("GET",e);if(a.status===429){let o=a.headers?.["retry-after"]??a.headers?.["Retry-After"]??"5",l=Number(o)||5;return hr.recordFailure(l),{ok:!1,error:{type:"rate_limited",retryAfter:l}}}if(a.status<200||a.status>=300)return hr.recordFailure(),{ok:!1,error:{type:"http_error",status:a.status}};hr.recordSuccess();let i=a.body;return Aa.set(e,i),{ok:!0,data:i}}catch(a){return hr.recordFailure(),{ok:!1,error:{type:"network_error",message:String(a)}}}}var kl=50,gm=1440*60*1e3,hm=360*60*1e3;function Nn(e){return/^spotify:artist:[a-zA-Z0-9]+$/i.test(e.trim())}function vm(e,t){let a=t-e.updatedAt;return e.imageUrl?.trim()?a<gm:a<hm}async function Ra(e){if(e.length===0)return;let t=[...new Set(e.filter(Nn))];if(t.length===0)return;let a=Date.now(),i=await Ke.artists.where("uri").anyOf(t).toArray(),o=new Set(i.filter(d=>vm(d,a)).map(d=>d.uri)),l=t.filter(d=>!o.has(d));if(l.length!==0)for(let d=0;d<l.length;d+=kl){let m=l.slice(d,d+kl),g=m.map(k=>k.replace(/^spotify:artist:/i,"")).join(","),h=await Gt(`https://api.spotify.com/v1/artists?ids=${g}`);if(!h.ok)continue;let b=[],w=h.data.artists??[];for(let k=0;k<m.length;k++){let x=m[k],P=w[k];if(P){let O=P.images[0]?.url??null;b.push({uri:`spotify:artist:${P.id}`,name:P.name,genres:P.genres??[],imageUrl:Ye(O)??O,updatedAt:Date.now()})}else b.push({uri:x,name:"Unknown",genres:[],imageUrl:null,updatedAt:Date.now()})}b.length>0&&await Ke.artists.bulkPut(b)}}Lr();gr();var ym="local",bm=12,wm=400;async function Sm(e){let t=[...new Set(e.topArtists.map(o=>o.artistUri).filter(Nn))];if(t.length===0)return;let a=await Ke.artists.where("uri").anyOf(t).toArray(),i=new Map(a.map(o=>[o.uri,o]));for(let o of e.topArtists){let l=i.get(o.artistUri),d=Ye(l?.imageUrl??void 0)??l?.imageUrl;d?.trim()&&!o.imageUrl?.trim()&&(o.imageUrl=d)}}function ss(e){return e.type!=="skip"}function xm(e){return`${ym}:${e}`}function Jr(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Tl(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()-1)}function km(e){if(e.length===0)return 0;let t=new Set(e.map(d=>Jr(d.startedAt))),a=new Date,i=new Date(a.getFullYear(),a.getMonth(),a.getDate()),o=Jr(i.getTime());if(!t.has(o)){i=Tl(i);let d=Jr(i.getTime());if(!t.has(d))return 0}let l=0;for(;t.has(Jr(i.getTime()));)l++,i=Tl(i);return l}var os=class{getProviderInfo(){return{id:"local",name:"Local",description:"Stats from locally tracked plays",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return Dt}async calculateStats(t){let a=xm(t.id),i=Be.get(a);if(i)return await Sm(i),i;let{start:o,end:l}=t.getBoundaries(),d=l===Number.MAX_SAFE_INTEGER?await Ke.playEvents.toArray():await Ke.playEvents.where("startedAt").between(o,l).toArray(),m=d.filter(ss),g=An(t),h,b;if(g){let fe=(await Ke.playEvents.where("startedAt").between(g.start,g.end).toArray()).filter(ss),He=new Set(m.map(pt=>pt.artistUri));if(fe.length>0){let pt=new Set(fe.map(tt=>tt.artistUri)),vt=0;for(let tt of He)pt.has(tt)||vt++;h=vt,b=fe.reduce((tt,J)=>tt+J.playedMs,0)}else h=He.size}else h=0;let w=Date.now()-wm*24*60*60*1e3,x=(await Ke.playEvents.where("startedAt").above(w).toArray()).filter(ss),P=km(x),O=new Map,$=new Map,_=new Map;for(let K of m){let fe=O.get(K.trackUri);fe?(fe.count++,fe.durationMs+=K.playedMs):O.set(K.trackUri,{trackUri:K.trackUri,trackName:K.trackName,artistName:K.artistName,artistUri:K.artistUri,albumName:K.albumName,albumUri:K.albumUri,albumArt:Ye(K.albumArt),count:1,durationMs:K.playedMs});let He=$.get(K.artistUri);He?(He.count++,He.durationMs+=K.playedMs):$.set(K.artistUri,{name:K.artistName,uri:K.artistUri,count:1,durationMs:K.playedMs});let pt=_.get(K.albumUri);pt?(pt.count++,pt.durationMs+=K.playedMs):_.set(K.albumUri,{name:K.albumName,uri:K.albumUri,artistName:K.artistName,albumArt:Ye(K.albumArt),count:1,durationMs:K.playedMs})}let z=Array.from(O.values()).sort((K,fe)=>fe.count-K.count).map((K,fe)=>({rank:fe+1,...K})),Y=Array.from($.values()).sort((K,fe)=>fe.count-K.count).map((K,fe)=>({rank:fe+1,artistUri:K.uri,artistName:K.name,count:K.count,durationMs:K.durationMs})),U=Array.from(_.values()).sort((K,fe)=>fe.count-K.count).map((K,fe)=>({rank:fe+1,albumUri:K.uri,albumName:K.name,artistName:K.artistName,albumArt:K.albumArt,count:K.count,durationMs:K.durationMs})),L=[...m].sort((K,fe)=>fe.startedAt-K.startedAt).slice(0,bm).map(K=>({trackUri:K.trackUri,trackName:K.trackName,artistName:K.artistName,albumArt:Ye(K.albumArt),playedAt:K.startedAt})),q=m.reduce((K,fe)=>K+fe.playedMs,0),X=m.length>0?new Set(m.map(K=>Jr(K.startedAt))).size:0,Q=new Array(24).fill(0);for(let K of m){let fe=new Date(K.startedAt).getHours();Q[fe]++}let Z=m.length>0?Q.indexOf(Math.max(...Q)):0,ie=new Array(7).fill(0);for(let K of m){let fe=new Date(K.startedAt).getDay(),He=fe===0?6:fe-1;ie[He]++}let Se=m.length>0?ie.indexOf(Math.max(...ie)):0,le=new Map;for(let K of x){let fe=Jr(K.startedAt);le.set(fe,(le.get(fe)??0)+1)}let Ce=Array.from(le.entries()).map(([K,fe])=>({date:K,count:fe})).sort((K,fe)=>K.date.localeCompare(fe.date)),Fe=d.filter(K=>K.type==="skip").length,Ie=d.length,Te=Ie>0?Fe/Ie:0,F=O.size,se=$.size,V=Y.map(K=>K.artistUri);await Ra(V);let N=await Ke.artists.where("uri").anyOf(V).toArray(),Ee=new Map(N.map(K=>[K.uri,K]));for(let K of Y){let fe=Ee.get(K.artistUri);fe&&(K.genres=fe.genres,K.imageUrl=Ye(fe.imageUrl??void 0)??fe.imageUrl??void 0)}let me=new Map;for(let K of N)for(let fe of K.genres)me.set(fe,(me.get(fe)??0)+1);let De=Array.from(me.entries()).sort((K,fe)=>fe[1]-K[1]).map(([K,fe],He)=>({rank:He+1,genre:K,count:fe})),Le={topTracks:z,topArtists:Y,topAlbums:U,topGenres:De,totalPlays:m.length,totalDuration:q,listeningDays:X,recentPlays:L,hourlyDistribution:Q,peakHour:Z,skipRate:Te,uniqueTrackCount:F,uniqueArtistCount:se,streak:P,weekdayDistribution:ie,peakWeekday:Se,dailyPlayCounts:Ce,newArtistCount:h,priorPeriodTotalDuration:b};Be.set(a,Le);let je=vl(t.id);return je&&this.calculateStats(je).catch(()=>{}),Le}async calculateStatsProgressive(t,a){let i=await this.calculateStats(t);return a(i,1),a(i,2),a(i,3),i}async init(){Be.setupInvalidationListeners()}destroy(){Be.invalidate()}},ls=new os;st();var cs=class{constructor(){this.providers=new Map;this.activeId=null}register(t){let a=t.getProviderInfo();this.providers.set(a.id,t)}getActive(){return this.activeId?this.providers.get(this.activeId)??null:null}getActiveId(){return this.activeId}setActive(t){if(!this.providers.has(t))throw new Error(`Provider "${t}" not registered`);this.activeId=t,localStorage.setItem(ce.ACTIVE_PROVIDER,t)}restoreActive(){let t=localStorage.getItem(ce.ACTIVE_PROVIDER);t&&this.providers.has(t)&&(this.activeId=t)}_resetForTesting(){this.providers.clear(),this.activeId=null}getAll(){return Array.from(this.providers.values()).map(t=>t.getProviderInfo())}},Ne=new cs;Cn();var Rm=["listening-stats:card-order","listening-stats:period","listening-stats:sfm-promo-dismissed","listening-stats:tour-seen","listening-stats:tour-version","listening-stats:lastUpdateCheck","listening-stats:searchCache","listening-stats:dedup-v2-done","listening-stats:rateLimitedUntil","listening-stats:lastfm","listening-stats:pollingData"],Cl="listening-stats:prun-v1-done";function Nm(){try{if(localStorage.getItem(Cl)==="1")return;for(let e of Rm)localStorage.removeItem(e);localStorage.setItem(Cl,"1")}catch{}}var Il=!1;async function _l(){Il||(Il=!0,Nm(),Ne.register(ls),Ne.register(tr),Ne.register(Pn),Ne.restoreActive(),Ne.getActive()||Ne.setActive("local"),await ls.init(),await tr.init(),await Pn.init())}Lr();function ds(){return{overview:"loading",lists:"loading",activity:"loading",consistency:"loading"}}function ps(){return{overview:"resolved",lists:"resolved",activity:"resolved",consistency:"resolved"}}var fs={topTracks:[],topArtists:[],topAlbums:[],topGenres:[],totalPlays:0,totalDuration:0,recentPlays:[],hourlyDistribution:new Array(24).fill(0),peakHour:0,skipRate:0,uniqueTrackCount:0,uniqueArtistCount:0};function Dl(e){switch(e){case 1:return"overview";case 2:return"lists";case 3:return"activity"}}st();function ms(){try{let e=localStorage.getItem(ce.PROVIDER_PERIODS);if(!e)return{};let t=JSON.parse(e);return typeof t=="object"&&t!==null&&!Array.isArray(t)?t:{}}catch{return{}}}function In(e,t){let a=ms()[e];if(a){let i=t.find(o=>o.id===a);if(i)return i}return t[0]}function Ol(e,t){let a=ms();a[e]=t,localStorage.setItem(ce.PROVIDER_PERIODS,JSON.stringify(a))}gr();var Ka=nl(Eu(),1);st();function Os(e){return e.replace(/^v/i,"").trim()}async function Dv(){let e=[sl,ol];for(let t of e)try{let a=await fetch(`${t}?t=${Date.now()}`,{cache:"no-store"});if(!a.ok)continue;let i=await a.json();if(typeof i.tag!="string"||!i.tag)continue;return{tag:i.tag,prerelease:!!i.prerelease}}catch{}return null}async function Au(e){try{let t=await fetch(`${ll}${e}`,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});return t.ok?await t.json():null}catch{return null}}function Ov(e){if(e?.length)return e.find(t=>typeof t.tag_name!="string"||!t.tag_name?!1:(t.assets??[]).some(i=>i.name==="listening-stats.zip"))}async function Pu(e){if(e){let i=await Au("/releases?per_page=15"),o=Ov(i??null);if(o?.tag_name)return{tag:o.tag_name,version:Os(o.tag_name),prerelease:!!o.prerelease}}let t=await Au("/releases/latest");if(t?.tag_name)return{tag:t.tag_name,version:Os(t.tag_name),prerelease:!!t.prerelease};let a=await Dv();return a&&(e||!a.prerelease)?{tag:a.tag,version:Os(a.tag),prerelease:a.prerelease}:null}function Lv(e,t){let a=Ka.default.coerce(e),i=Ka.default.coerce(t);return!a||!i?!1:Ka.default.gt(i,a)}async function Ru(e,t){let a=await Pu(t);return a?{updateAvailable:Lv(e,a.version),localVersion:e,remoteVersion:a.version,remoteTag:a.tag,prerelease:a.prerelease}:{updateAvailable:!1,localVersion:e,remoteVersion:e,remoteTag:null}}function Nu(e){try{let t=Date.now()+e*60*60*1e3;localStorage.setItem(ce.UPDATE_PROMPT_SNOOZE_UNTIL,String(t))}catch{}}function Cu(){try{let e=localStorage.getItem(ce.UPDATE_PROMPT_SNOOZE_UNTIL);if(!e)return!1;let t=Number.parseInt(e,10);return!Number.isNaN(t)&&Date.now()<t}catch{return!1}}st();var $v={"2.6":{title:"v2.6 is here",body:"section streaming, share cards, world charts.",actionLabel:"What's new \u2192"}};function Mv(e){return $v[e]??null}function Uv(e){try{return localStorage.getItem(ce.DISMISSED_BANNER_VERSION)===e}catch{return!1}}function Wv(e){try{return localStorage.getItem(ce.DISMISSED_REMOTE_ANNOUNCEMENT_ID)===e}catch{return!1}}function Iu(e,t){if(t&&!Wv(t.dismissId))return{source:"remote",dismissKey:t.dismissId,title:t.title,body:t.body,actionLabel:t.actionLabel,actionUrl:t.actionUrl,actionOpensChangelog:t.actionOpensChangelog};let a=Mv(e);return a&&!Uv(e)?{source:"local",dismissKey:e,title:a.title,body:a.body,actionLabel:a.actionLabel,actionUrl:a.actionUrl}:null}var Fv=[{id:"overview",label:"Overview"},{id:"top-genres",label:"Top Genres"},{id:"top-lists",label:"Top Lists"},{id:"activity",label:"Activity"},{id:"consistency",label:"Consistency"},{id:"recently-played",label:"Recently Played"}];function ja(e){return Fv.filter(t=>!(t.id==="top-genres"&&!e.hasGenreData||t.id==="activity"&&!e.hasActivityData||t.id==="consistency"&&!e.hasConsistencyData))}function _u(e){return e.hasActivityData?"full":"hidden"}function Du(e){if(e<6e4)return"<1 min";let t=Math.floor(e/6e4);if(t<60)return`${t} min`;let a=Math.floor(t/60),i=t%60;if(a<24)return i>0?`${a}h ${i}m`:`${a}h`;let o=Math.floor(a/24),l=a%24;return l>0?`${o}d ${l}h`:`${o}d`}function Ou(e){let t=Date.now()-e,a=Math.floor(t/1e3);if(a<60)return"just now";let i=Math.floor(a/60);if(i<60)return`${i}m ago`;let o=Math.floor(i/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function ot(e){try{return Spicetify.Locale.formatNumber(e)}catch{return String(e)}}function Ft(e,t){return t?`${e}:00`:e===0?"12am":e<12?`${e}am`:e===12?"12pm":`${e-12}pm`}function Lu(e){return`$${(e*.004).toFixed(2)}`}st();var Un=["overview","top-genres","top-lists","activity","consistency","recently-played"],qa=["top-tracks","top-artists","top-albums"],Mr={local:["tracks","unique-artists","streak","new-artists","peak-hour","skip-rate","est-payout"],statsfm:["unique-artists","new-artists","top-genre","est-payout"]},Wn={tracks:"Tracks","unique-artists":"Unique Artists","listening-days":"Listening Days",streak:"Streak","skip-rate":"Skip Rate","est-payout":"Est. Payout","top-genre":"Top Genre","new-artists":"New Artists","peak-hour":"Peak Hour"},Mu={"top-tracks":"Top Tracks","top-artists":"Top Artists","top-albums":"Top Albums"},Bv=new Set(["hour","weekday","day"]),zv=new Set(["pill","bubble","minimal","off"]),Mt={use24HourTime:!1,itemsPerSection:5,hiddenSections:[],sectionOrder:[...Un],columnOrder:[...qa],overviewOrder:{local:[...Mr.local],statsfm:[...Mr.statsfm]},activityTab:"hour",activeGenre:null,playCountVariant:"pill",playCountShowPeriodStreams:!0,activePage:"dashboard",receiveBetaUpdates:!1,showAnnouncementBanner:!0,announcementBannerHiddenForDismissKey:"",showShareCaption:!0};function $u(){return{...Mt,hiddenSections:[...Mt.hiddenSections],sectionOrder:[...Mt.sectionOrder],columnOrder:[...Mt.columnOrder],overviewOrder:{local:[...Mt.overviewOrder.local],statsfm:[...Mt.overviewOrder.statsfm]}}}function Va(e,t){let a=new Set(t),i=[],o=new Set;if(Array.isArray(e))for(let l of e)typeof l=="string"&&a.has(l)&&!o.has(l)&&(o.add(l),i.push(l));for(let l of t)o.has(l)||i.push(l);return i}function Hv(e){let t=[],a=new Set;if(!Array.isArray(e))return t;for(let i of e)typeof i=="string"&&(a.has(i)||(a.add(i),t.push(i)));return t}function nt(){try{let e=localStorage.getItem(ce.PREFERENCES);if(e){let t=JSON.parse(e),a=$u();return{...a,...t,hiddenSections:Hv(t.hiddenSections??a.hiddenSections),sectionOrder:Va(t.sectionOrder,Un),columnOrder:Va(t.columnOrder,qa),overviewOrder:{local:Va(t.overviewOrder?.local,Mr.local),statsfm:Va(t.overviewOrder?.statsfm,Mr.statsfm)},activityTab:Bv.has(t.activityTab)?t.activityTab:Mt.activityTab,playCountVariant:zv.has(t.playCountVariant)?t.playCountVariant:Mt.playCountVariant,playCountShowPeriodStreams:typeof t.playCountShowPeriodStreams=="boolean"?t.playCountShowPeriodStreams:Mt.playCountShowPeriodStreams,receiveBetaUpdates:typeof t.receiveBetaUpdates=="boolean"?t.receiveBetaUpdates:Mt.receiveBetaUpdates,showAnnouncementBanner:typeof t.showAnnouncementBanner=="boolean"?t.showAnnouncementBanner:Mt.showAnnouncementBanner,announcementBannerHiddenForDismissKey:typeof t.announcementBannerHiddenForDismissKey=="string"?t.announcementBannerHiddenForDismissKey:Mt.announcementBannerHiddenForDismissKey}}}catch{}return $u()}function Oe(e,t){try{let a=nt();a[e]=t,localStorage.setItem(ce.PREFERENCES,JSON.stringify(a))}catch{}}var Gv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Kv(e){let t=new Date;t.setHours(0,0,0,0);let a=new Map;for(let w of e)a.set(w.date,w.count);let i=new Date(t);i.setDate(i.getDate()-364-i.getDay());let o=[],l=new Date(i);for(;l<=t;){let w=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`;o.push({date:new Date(l),count:a.get(w)??0}),l.setDate(l.getDate()+1)}let d=o[0]?.date.getDay()??0;for(let w=0;w<d;w++)o.unshift(null);for(;o.length%7!==0;)o.push(null);let m=o.length/7,g=[];for(let w=0;w<m;w++)g.push(o.slice(w*7,w*7+7));let h=[],b=-1;for(let w=0;w<g.length;w++){let k=g[w].find(x=>x!==null);if(k&&k.date.getDate()<=7){let x=k.date.getMonth();x!==b&&(h.push({col:w,label:Gv[x]}),b=x)}}return{cells:g,monthLabels:h}}function jv(e,t){return e<=0?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${(.15+Math.min(1,e/t)*.85).toFixed(2)})`}function Uu({dailyPlayCounts:e}){let{cells:t,monthLabels:a}=Kv(e),i=t.length,o=Math.max(...t.flat().filter(m=>m!==null).map(m=>m.count),1),d=`repeat(${i}, 16px)`;return Spicetify.React.createElement("div",{className:"heatmap-container"},Spicetify.React.createElement("div",{className:"heatmap-scroll-inner"},Spicetify.React.createElement("div",{className:"heatmap-month-labels",style:{gridTemplateColumns:d}},Array.from({length:i}).map((m,g)=>{let h=a.find(b=>b.col===g);return Spicetify.React.createElement("span",{key:g},h?h.label:"")})),Spicetify.React.createElement("div",{className:"heatmap-grid",style:{gridTemplateColumns:d}},t.map((m,g)=>Spicetify.React.createElement("div",{key:g,className:"heatmap-week"},m.map((h,b)=>Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{key:b,label:h?`${h.date.toDateString()} - ${h.count} plays`:"",placement:"top"},Spicetify.React.createElement("div",{className:"heatmap-cell",style:{background:h?jv(h.count,o):"transparent"}}))))))),Spicetify.React.createElement("div",{className:"heatmap-legend"},Spicetify.React.createElement("span",null,"Less"),[.05,.25,.5,.75,1].map(m=>Spicetify.React.createElement("span",{key:m,className:"heatmap-legend-swatch",style:{background:m===.05?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${m})`}})),Spicetify.React.createElement("span",null,"More")))}function lt({width:e="100%",height:t="12px",radius:a=4,style:i,className:o,...l}){return Spicetify.React.createElement("div",{...l,className:`skeleton-shimmer${o?` ${o}`:""}`,style:{width:e,height:t,borderRadius:a,...i}})}function Ls({size:e=20,style:t}){return Spicetify.React.createElement(lt,{width:e,height:e,radius:"50%",style:t})}function Ya({width:e="70%"}){return Spicetify.React.createElement(lt,{width:e,height:"10px",radius:4})}var{useState:Vv}=Spicetify.React,Wu=Array.from({length:24},(e,t)=>t),qv=Array.from({length:7},(e,t)=>t),Yv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Fu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Xv=[{value:"hour",label:"By hour"},{value:"weekday",label:"By week"},{value:"day",label:"By month"}];function $s({loading:e=!1,hourlyDistribution:t,peakHour:a,weekdayDistribution:i,peakWeekday:o,dailyPlayCounts:l,streak:d,showStreak:m}){let g=nt(),[h,b]=Vv(()=>g.activityTab);if(e)return Spicetify.React.createElement("div",{className:"section-card","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),Spicetify.React.createElement("div",{className:"activity-chart"},Wu.map(x=>Spicetify.React.createElement(lt,{key:x,className:"activity-bar",height:`${20+x%6*10}%`}))));let w=x=>{b(x),Oe("activityTab",x)},k=null;return h==="hour"&&t[a]>0?k=Ft(a,g.use24HourTime):h==="weekday"&&i[o]>0&&(k=Fu[o]),Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("div",{className:"activity-chart-header"},Spicetify.React.createElement("header",{className:"section-heading",style:{marginBottom:0}},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),k&&Spicetify.React.createElement("div",{className:"activity-chart-peak"},"Peak: ",Spicetify.React.createElement("span",null,k))),Spicetify.React.createElement("div",{className:"activity-tabs"},Xv.map(x=>Spicetify.React.createElement("button",{type:"button",key:x.value,className:`activity-tab${h===x.value?" active":""}`,onClick:()=>w(x.value)},x.label))),h==="hour"&&Jv(t,a,g.use24HourTime),h==="weekday"&&Zv(i,o),h==="day"&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement(Uu,{dailyPlayCounts:l??[]}),m&&d!=null&&d>0&&Spicetify.React.createElement("div",{className:"streak-callout"},"You've listened on ",Spicetify.React.createElement("strong",null,d," days")," in a row \xB7 longest stretch this year.")))}function Jv(e,t,a){let i=Math.max(...e,1);return Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"activity-chart"},Wu.map(o=>{let l=e[o],d=l>0?Math.max(l/i*100,5):0,m=o===t&&l>0;return Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{key:o,label:`${Ft(o,a)}: ${l} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${m?" peak":""}`,style:{height:`${d}%`}}))})),Spicetify.React.createElement("div",{className:"activity-chart-labels"},Spicetify.React.createElement("span",null,Ft(0,a)),Spicetify.React.createElement("span",null,Ft(6,a)),Spicetify.React.createElement("span",null,Ft(12,a)),Spicetify.React.createElement("span",null,Ft(18,a)),Spicetify.React.createElement("span",null,Ft(0,a))))}function Zv(e,t){let a=Math.max(...e,1);return Spicetify.React.createElement("div",{className:"weekday-chart"},qv.map(i=>{let o=e[i],l=o>0?Math.max(o/a*100,5):0,d=i===t&&o>0;return Spicetify.React.createElement("div",{key:i,className:"weekday-column"},Spicetify.React.createElement("div",{className:"weekday-bar-area"},Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{label:`${Fu[i]}: ${o} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${d?" peak":""}`,style:{height:`${l}%`}}))),Spicetify.React.createElement("span",{className:"weekday-label"},Yv[i]))}))}function Qv(){return Spicetify.React.createElement("svg",{className:"announcement-banner-icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false"},Spicetify.React.createElement("path",{d:"M3 12V15H5V12H3ZM7 8V19H9V8H7ZM11 5V22H13V5H11ZM15 8V19H17V8H15ZM19 12V15H21V12H19Z"}))}function Bu({title:e,body:t,titleOnly:a=!1,actionLabel:i,actionUrl:o,onActionClick:l,onDismiss:d}){return Spicetify.React.createElement("div",{className:"announcement-banner"},Spicetify.React.createElement(Qv,null),Spicetify.React.createElement("span",{className:"announcement-banner-text"},a?Spicetify.React.createElement("strong",null,e):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("strong",null,e)," \u2013 ",t)),i&&(l?Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-link announcement-banner-link-btn",onClick:l},i):Spicetify.React.createElement("a",{className:"announcement-banner-link",href:o??"#",target:o&&o!=="#"?"_blank":void 0,rel:o&&o!=="#"?"noopener noreferrer":void 0},i)),Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-dismiss",onClick:d,"aria-label":"Dismiss"},"\xD7"))}var zu="https://discord.gg/XtqbFAHk6a",Hu="https://buymeacoffee.com/xndr_";var{memo:ey}=Spicetify.React;function ty({version:e,onCheckForUpdates:t}){return Spicetify.React.createElement("footer",{className:"stats-app-footer"},Spicetify.React.createElement("span",{className:"stats-app-footer-credit"},"Made with love by Xndr"),Spicetify.React.createElement("span",{className:"stats-app-footer-links","aria-label":"Community links"},Spicetify.React.createElement("a",{className:"stats-app-footer-link",href:zu,target:"_blank",rel:"noopener noreferrer"},"Discord"),Spicetify.React.createElement("a",{className:"stats-app-footer-link",href:Hu,target:"_blank",rel:"noopener noreferrer"},"Buy me a coffee")),Spicetify.React.createElement("span",{className:"stats-app-footer-meta"},Spicetify.React.createElement("span",{className:"stats-app-footer-version"},"v",e),Spicetify.React.createElement("button",{type:"button",className:"stats-app-footer-install-link",onClick:t},"Check for updates")))}var Gu=ey(ty);function Ku(e){return new Date(e).toISOString().slice(0,10)}function ry(e,t){let{start:a,end:i}=t.getBoundaries();if(i===Number.MAX_SAFE_INTEGER)return e.slice(-30);let o=i-1,l=Ku(a),d=Ku(o);return e.filter(m=>m.date>=l&&m.date<=d)}function ny(e){let t=new Date(e);if(!Number.isFinite(t.getTime())){let a=e.slice(0,10);t=new Date(`${a}T00:00:00`)}return Number.isFinite(t.getTime())?t.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}):e.slice(0,10)}function Ms({loading:e=!1,totalPlays:t,totalDuration:a,listeningDays:i,dailyPlayCounts:o,streak:l,activePeriod:d,activeProviderId:m="statsfm"}){if(e)return Spicetify.React.createElement("div",{className:"section-card consistency-section","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Array.from({length:4}).map((U,W)=>Spicetify.React.createElement("div",{key:W,className:"consistency-metric"},Spicetify.React.createElement(Ya,{width:"55%"}),Spicetify.React.createElement(lt,{width:"45%",height:24,style:{marginTop:8}}),Spicetify.React.createElement(Ya,{width:"70%"})))));let g=ry(o??[],d),h=g.length,b=g.length>0?g.filter(U=>U.count>0).length:i??0,w=b>0?t/b:0,k=b>0?a/6e4/b:0,x=h>0?Math.round(b/h*100):0,P=g.slice(-14),O=Math.max(...P.map(U=>U.count),1),$=d.id==="today"||d.id==="sfm-today",_=m==="local",z=Spicetify.ReactComponent.TooltipWrapper,Y=({label:U,value:W,sub:L,tooltip:q,accent:X})=>Spicetify.React.createElement(z,{label:q},Spicetify.React.createElement("div",{className:`consistency-metric${X?" consistency-metric--accent":""}`},Spicetify.React.createElement("div",{className:"consistency-metric-label"},U),Spicetify.React.createElement("div",{className:"consistency-metric-value"},W),Spicetify.React.createElement("div",{className:"consistency-metric-sub"},L)));return Spicetify.React.createElement("div",{className:"section-card consistency-section"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Spicetify.React.createElement(Y,{label:"Listening days",value:b,sub:`out of ${h||b} days`,tooltip:"Number of days in this period with at least one stream."}),Spicetify.React.createElement(Y,{label:"Avg plays / active day",value:Math.round(w),sub:"streams when active",tooltip:"Average stream count only across days where you listened."}),Spicetify.React.createElement(Y,{label:"Avg minutes / active day",value:Math.round(k),sub:"listening time",tooltip:"Average listening duration in minutes across active days."}),Spicetify.React.createElement(Y,{label:"Current streak",value:l!=null&&l>0?`${l}d`:"-",sub:"consecutive days",tooltip:"Consecutive calendar days with at least one play (local timezone)."})),!$&&Spicetify.React.createElement("div",{className:"consistency-footer"},Spicetify.React.createElement(z,{label:`You listened on ${b} of ${h||b} days in this period.`},Spicetify.React.createElement("div",{className:"consistency-coverage"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Active-day coverage"),Spicetify.React.createElement("div",{className:"consistency-coverage-row"},Spicetify.React.createElement("div",{className:"consistency-coverage-track"},Spicetify.React.createElement("div",{className:"consistency-coverage-fill",style:{width:`${x}%`}})),Spicetify.React.createElement("span",null,x,"%")))),_?Spicetify.React.createElement("div",{className:"consistency-week-split"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Weekday vs weekend"),(()=>{let U=g.filter(Z=>Z.count>0),W=U.filter(Z=>{let ie=new Date(`${Z.date}T00:00:00`).getDay();return ie>=1&&ie<=5}).length,L=U.length-W,q=Math.max(W+L,1),X=Math.round(W/q*100),Q=100-X;return Spicetify.React.createElement("div",{className:"consistency-week-split-row"},Spicetify.React.createElement(z,{label:`${W} active weekdays (${X}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekdays"),Spicetify.React.createElement("strong",null,X,"%"))),Spicetify.React.createElement(z,{label:`${L} active weekend days (${Q}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekend"),Spicetify.React.createElement("strong",null,Q,"%"))))})()):P.length>0&&Spicetify.React.createElement("div",{className:"consistency-sparkline"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Last 14 days"),Spicetify.React.createElement("div",{className:"consistency-sparkline-bars"},P.map(U=>{let W=U.count>0&&U.count===O;return Spicetify.React.createElement(z,{key:U.date,label:`${ny(U.date)}: ${U.count} plays`,placement:"top"},Spicetify.React.createElement("div",{className:"consistency-sparkline-bar-wrap"},Spicetify.React.createElement("div",{className:`consistency-sparkline-bar${W?" peak":""}`,style:{height:`${Math.max(U.count/O*100,U.count>0?8:2)}%`}})))})))))}function Us({onOpenSettings:e}){return Spicetify.React.createElement("div",{className:"empty-state",role:"status"},Spicetify.React.createElement("h2",{style:{fontSize:"var(--font-size-md, 14px)",fontWeight:700,color:"var(--spice-text)",marginBottom:"var(--space-sm, 8px)"}},"No listening data yet"),Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-md, 14px)",color:"var(--spice-subtext)",marginBottom:"var(--space-md, 16px)"}},"Play some tracks and check back. Make sure tracking is enabled in Settings."),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:e},"Open Settings"))}Pt();var ju='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.37-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.68 7.68 0 0 0-1.68.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64L4.57 11a8.3 8.3 0 0 0-.07.97 8.3 8.3 0 0 0 .07 1l-2.1 1.63a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1.01a7.35 7.35 0 0 0 1.68.99l.38 2.65c.05.24.25.42.49.42h4c.25 0 .44-.18.49-.42l.37-2.65a7.58 7.58 0 0 0 1.69-.99l2.49 1.01a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.66Z"/></svg>',tn='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z"/></svg>',Vu='<svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor" aria-hidden="true"><circle cx="3" cy="3" r="1.1"/><circle cx="9" cy="3" r="1.1"/><circle cx="15" cy="3" r="1.1"/><circle cx="3" cy="7" r="1.1"/><circle cx="9" cy="7" r="1.1"/><circle cx="15" cy="7" r="1.1"/></svg>',qu='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',Yu='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',Xu='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';function Xa(e){Oe("activeGenre",e),window.dispatchEvent(new CustomEvent(ve.PREFS_CHANGED))}function Ws(){Xa(null)}function Ju({activeGenre:e,onClear:t}){return e?Spicetify.React.createElement("div",{className:"filter-pill"},Spicetify.React.createElement("span",{className:"filter-pill-icon","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Yu}}),Spicetify.React.createElement("span",null,"Filtering by"),Spicetify.React.createElement("strong",{className:"filter-pill-genre"},e),Spicetify.React.createElement("button",{className:"filter-pill-close",type:"button",onClick:t,"aria-label":"Clear genre filter"},"\xD7")):null}st();var Ja=[{id:"health",label:"Health Indicator",text:"This dot shows your tracking status. Green means data is flowing, yellow means it\u2019s been a while, and red means something needs attention. Works for both local and stats.fm tracking.",selector:'[data-tour-target="health"], .header-provider-pill'},{id:"period",label:"Time Window & World",text:"Pick a time range and every section on the dashboard updates to match. Use the World tab at the end for global charts from stats.fm. Available periods depend on your tracking provider.",selector:'[data-tour-target="period"], .period-tabs'}],Za={overview:{id:"overview",label:"Overview Cards",text:"Your headline stats for the selected period include total plays, unique artists, listening streak, and more. The cards shown depend on your provider and tier.",selector:'[data-section-id="overview"]'},lists:{id:"lists",label:"Top Lists",text:"Your most-played tracks, artists, and albums ranked side by side. Click any item to jump straight to it in Spotify.",selector:'[data-section-id="top-lists"]'},activity:{id:"activity",label:"Activity Charts",text:"Hourly and daily listening patterns visualized as charts. Discover your peak hours and most active days of the week.",selector:'[data-section-id="activity"]'},consistency:{id:"consistency",label:"Consistency",text:"See how regularly you listened in this period, including active days, average intensity, and your longest silent gap.",selector:'[data-section-id="consistency"]'}},Qa=[{id:"share",label:"Share Card",text:"Generate a shareable image of your stats. Download it as a PNG or copy it straight to your clipboard.",selector:'[data-tour-target="share"], [aria-label="Share card"]'},{id:"gear",label:"Settings",text:"Customize everything by reordering or hiding sections, switching tracking providers, managing your data, and connecting Last.fm for world charts.",selector:'[data-tour-target="settings"], [aria-label="Open settings"]'}];function Fs(e){if(!e)return[...Ja,Za.overview,Za.lists,Za.activity,...Qa];if(e.activePage==="world")return[Ja[0],Ja[1],Qa[1]];let t=e.sectionIds.map(i=>Za[i]).filter(i=>!!i),a=e.hasShare?Qa:Qa.filter(i=>i.id!=="share");return[...Ja,...t,...a]}var ei=Fs();function Zu(e){let t=e.match(/^(\d+)/);return t?t[1]:"0"}function Qu(e){let t=localStorage.getItem(ce.TOUR_SEEN_VERSION);return t?t!==Zu(e):!0}function ed(e){localStorage.setItem(ce.TOUR_SEEN_VERSION,Zu(e))}var{useRef:ay,useLayoutEffect:iy,useState:sy}=Spicetify.React,td=280,rd=12,rn=8,oy=210;function ly(e,t){let a=window.innerHeight,i=window.innerWidth,o=e.top+e.height+rd,l=e.top-t-rd,d;o+t<=a-rn?d=o:l>=rn?d=l:d=rn;let m=e.left+e.width/2-td/2;return m=Math.max(rn,Math.min(m,i-td-rn)),{position:"fixed",top:d,left:m,zIndex:10001,maxHeight:`calc(100vh - ${rn*2}px)`,overflowY:"auto"}}function nd({step:e,steps:t=ei,onNext:a,onBack:i,onSkip:o,targetRect:l}){let d=ay(null),[m,g]=sy(void 0),h=t[e],b=e===t.length-1,w=l!=null;return iy(()=>{if(!w){g(void 0);return}let x=d.current?.offsetHeight||oy;g(ly(l,x))},[w,l,e]),Spicetify.React.createElement("div",{ref:d,className:`tour-popover${w?" tour-popover--positioned":""}`,style:m},Spicetify.React.createElement("div",{className:"tour-step-counter"},"Step ",e+1," of ",t.length),Spicetify.React.createElement("div",{className:"tour-label"},h.label),Spicetify.React.createElement("div",{className:"tour-text"},h.text),Spicetify.React.createElement("div",{className:"tour-footer"},i?Spicetify.React.createElement("button",{type:"button",className:"tour-btn-back",onClick:i},"Back"):Spicetify.React.createElement("button",{type:"button",className:"tour-btn-skip",onClick:o},"Skip"),Spicetify.React.createElement("div",{className:"tour-dots"},t.map((x,P)=>Spicetify.React.createElement("span",{key:P,className:`tour-dot${P===e?" active":""}`}))),Spicetify.React.createElement("button",{type:"button",className:"tour-btn-next",onClick:a},b?"Finish":"Next")))}var{useState:ad,useLayoutEffect:id,useCallback:ti,useRef:sd,useEffect:od}=Spicetify.React,ri=6;function cy(e){let t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function ld(e){let t=document.querySelector(e);if(!t)return null;let a=t.getBoundingClientRect();return a.width===0&&a.height===0?null:{top:a.top,left:a.left,width:a.width,height:a.height}}function cd({active:e,version:t,steps:a=ei,onComplete:i}){let[o,l]=ad(0),d=sd(0),[m,g]=ad(null),h=sd([]);od(()=>()=>{h.current.forEach(clearTimeout)},[]);let b=ti(()=>{ed(t),i()},[t,i]),w=ti(_=>{let z=a[_];if(!z)return;h.current.forEach(clearTimeout),h.current=[],cy(z.selector);let Y=()=>g(ld(z.selector));Y(),h.current.push(window.setTimeout(Y,160),window.setTimeout(Y,320))},[a]),k=ti(()=>{if(d.current>=a.length-1)b();else{let _=d.current+1;d.current=_,l(_),w(_)}},[b,w,a.length]),x=ti(()=>{let _=Math.max(0,d.current-1);d.current=_,l(_),w(_)},[w]);if(id(()=>{if(e){if(a.length===0){b();return}d.current=0,l(0),w(0)}},[e,w,a.length,b]),od(()=>{if(!e)return;let _=()=>{let z=a[d.current];z&&g(ld(z.selector))};return window.addEventListener("resize",_),window.addEventListener("scroll",_,!0),()=>{window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0)}},[e,a]),id(()=>{if(!e)return;let _=z=>{z.key==="ArrowRight"?k():z.key==="ArrowLeft"?x():z.key==="Escape"&&b()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[e,k,x,b]),!e)return null;let P=m!==null,O=P?{position:"fixed",top:m.top-ri,left:m.left-ri,width:m.width+ri*2,height:m.height+ri*2,borderRadius:8,boxShadow:"0 0 0 9999px rgba(0,0,0,0.55)",pointerEvents:"none",zIndex:1e4}:void 0,$=Spicetify.React.createElement("div",{className:`tour-overlay${P?" tour-overlay--targeted":""}`},P&&Spicetify.React.createElement("div",{className:"tour-spotlight",style:O}),Spicetify.React.createElement(nd,{step:o,steps:a,onNext:k,onBack:o>0?x:void 0,onSkip:b,targetRect:m}));return Spicetify.ReactDOM.createPortal($,document.body)}Pt();st();function Bs({periods:e,activePeriod:t,onPeriodChange:a}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist"},e.map(i=>Spicetify.React.createElement("button",{type:"button",key:i.id,className:`period-tab ${i.id===t.id?"active":""}`,role:"tab","aria-selected":i.id===t.id,onClick:()=>a(i)},i.label)))}var{useState:zs,useEffect:Hs}=Spicetify.React,uy=2*6e4;function dy(e){let t=Math.max(0,Math.ceil(e/1e3)),a=Math.floor(t/60),i=t%60;return a<=0?`${i}s`:i===0?`${a}m`:`${a}m ${i}s`}function py(e){if(!e||e.lastWriteAt===null)return"red";let t=(Date.now()-e.lastWriteAt)/6e4;return t<5?"green":t<60?"yellow":"red"}function fy(e){if(!e||e.lastSuccessAt===null||e.circuitOpen||e.lastError!==null)return"red";let t=(Date.now()-e.lastSuccessAt)/6e4;return t<30?"green":t<120?"yellow":"red"}function my(e,t,a){return e==="statsfm"?fy(a):py(t)}function gy(e){if(!e||e.lastWriteAt===null)return"No plays recorded yet";if(!e.healthy&&e.lastError)return`Tracking error: ${e.lastError}`;let t=(Date.now()-e.lastWriteAt)/6e4,a=e.lastTrackName?` - ${e.lastTrackName.length>40?`${e.lastTrackName.slice(0,40)}...`:e.lastTrackName}`:"";return t<1?`Last play just now${a}`:t<60?`Last play ${Math.floor(t)}m ago${a}`:`Last play ${Math.floor(t/60)}h ago${a}`}function hy(e){if(!e||e.lastFetchAt===null)return"No data fetched yet";if(e.circuitOpen)return"stats.fm unavailable: circuit open";if(e.lastError!==null)return`API error: ${e.lastError.length>60?`${e.lastError.slice(0,60)}\u2026`:e.lastError}`;if(e.lastSuccessAt===null)return"No data fetched yet";let t=Math.max(0,uy-(Date.now()-e.lastSuccessAt)),a=t>0?` \xB7 refresh in ${dy(t)}`:" \xB7 refresh due now",i=(Date.now()-e.lastSuccessAt)/6e4;return i<1?`API healthy, just refreshed${a}`:i<60?`API healthy, refreshed ${Math.floor(i)}m ago${a}`:`Data stale, last refresh ${Math.floor(i/60)}h ago${a}`}function Gs({providerName:e,activeProviderId:t,onSettingsClick:a,onShareClick:i,periods:o,activePeriod:l,onPeriodChange:d}){let[m,g]=zs(()=>{try{let O=localStorage.getItem(ce.TRACKING_HEALTH);if(O)return JSON.parse(O)}catch{}return null});Hs(()=>{let O=()=>{try{let $=localStorage.getItem(ce.TRACKING_HEALTH);$&&g(JSON.parse($))}catch{}};return window.addEventListener(ve.HEALTH_CHANGED,O),()=>{window.removeEventListener(ve.HEALTH_CHANGED,O)}},[]);let[h,b]=zs(()=>{try{let O=localStorage.getItem(ce.STATSFM_HEALTH);if(O)return JSON.parse(O)}catch{}return null});Hs(()=>{let O=()=>{try{let $=localStorage.getItem(ce.STATSFM_HEALTH);$&&b(JSON.parse($))}catch{}};return window.addEventListener(ve.STATSFM_HEALTH_CHANGED,O),()=>{window.removeEventListener(ve.STATSFM_HEALTH_CHANGED,O)}},[]);let[w,k]=zs(()=>Ne.getActive()?.getProviderInfo().capabilities??null);Hs(()=>{let O=()=>{k(Ne.getActive()?.getProviderInfo().capabilities??null)};return O(),window.addEventListener(ve.PROVIDER_CHANGED,O),window.addEventListener(ve.STATSFM_PROFILE_REFRESHED,O),()=>{window.removeEventListener(ve.PROVIDER_CHANGED,O),window.removeEventListener(ve.STATSFM_PROFILE_REFRESHED,O)}},[t]);let x=my(t,m,h),P=t==="statsfm"?hy(h):gy(m);return Spicetify.React.createElement("header",{className:"stats-header"},Spicetify.React.createElement("div",{className:"stats-header-left"},Spicetify.React.createElement("h1",{className:"stats-header-title"},"Listening Stats"),Spicetify.React.createElement("div",{"data-tour-target":"health"},Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{label:P,placement:"bottom"},Spicetify.React.createElement("div",{className:"header-provider-pill"},Spicetify.React.createElement("span",{className:`health-dot health-${x}`,"aria-label":`Health: ${x} - ${P}`}),Spicetify.React.createElement("span",{className:"header-provider-name"},e),w?.tier==="plus"&&Spicetify.React.createElement("span",{className:"tier-badge tier-badge--plus"},"Plus"))))),Spicetify.React.createElement("div",{className:"stats-header-right"},o&&l&&d&&Spicetify.React.createElement("div",{"data-tour-target":"period"},Spicetify.React.createElement(Bs,{periods:o,activePeriod:l,onPeriodChange:d})),i&&Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:i,"aria-label":"Share card","data-tour-target":"share",dangerouslySetInnerHTML:{__html:Xu}}),Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:a,"aria-label":"Open settings","data-tour-target":"settings",dangerouslySetInnerHTML:{__html:ju}})))}var{useState:vy,useEffect:yy}=Spicetify.React,by={UserNotFound:{title:"We couldn't find that stats.fm user",body:"Double-check the username in Settings.",cta:"settings"},NetworkError:{title:"Couldn't reach stats.fm",body:"Your connection might be flaky.",cta:"retry"},ServiceDown:{title:"stats.fm is having a moment",body:"Their side, not yours.",cta:"retry"},RateLimited:{title:"Too many requests",body:"We'll back off automatically.",cta:null},InvalidApiKey:{title:"Invalid Last.fm API key",body:"Check your key in Settings.",cta:"settings"},Unknown:{title:"Something went sideways",body:"It happens. Try once more?",cta:"retry"}};function wy(e){let[t,a]=vy(()=>e?Math.max(0,Math.ceil((e-Date.now())/1e3)):0);return yy(()=>{if(!e)return;let i=setInterval(()=>{let o=Math.max(0,Math.ceil((e-Date.now())/1e3));a(o),o<=0&&clearInterval(i)},1e3);return()=>clearInterval(i)},[e]),t}function nn({error:e,onRetry:t,onOpenSettings:a}){let i=by[e.variant],o=wy(e.resetAt),l=i.cta==="settings"?a:t,d=i.cta==="settings"?"Open Settings":"Retry";return Spicetify.React.createElement("div",{className:"inline-error-card",role:"status"},Spicetify.React.createElement("div",{className:"inline-error-content"},Spicetify.React.createElement("div",{className:"inline-error-title"},i.title),Spicetify.React.createElement("div",{className:"inline-error-body"},i.body),e.resetAt!==void 0&&o>0&&Spicetify.React.createElement("div",{className:"inline-error-countdown"},"retry in 0:",o.toString().padStart(2,"0"))),i.cta&&Spicetify.React.createElement("button",{type:"button",className:"inline-error-cta",onClick:l},d))}var{useState:Sy,useEffect:xy,useMemo:ky}=Spicetify.React;function Ty({totalDuration:e,priorPeriodTotalDuration:t,totalPlays:a,uniqueArtistCount:i,periodLabel:o,periodKey:l}){let d=ky(()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),[m,g]=Sy(d?e:0);xy(()=>{if(d){g(e);return}let P=0,O=0,$=_=>{O||(O=_);let z=Math.min(1,(_-O)/900),Y=1-(1-z)**3;g(Math.round(e*Y)),z<1&&(P=requestAnimationFrame($))};return g(0),P=requestAnimationFrame($),()=>cancelAnimationFrame(P)},[l,e,d]);let h=Math.floor(m/36e5),b=Math.floor(m%36e5/6e4),w=t,k=w!=null&&w>0,x=k?Math.round((e-w)/w*100):null;return Spicetify.React.createElement("div",{className:"overview-hero-cell",style:{background:"radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button),.16), transparent 52%), var(--spice-card)",border:"1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12)",borderRadius:8,padding:20,minHeight:184,position:"relative",overflow:"hidden",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"space-between"}},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--spice-text)",fontSize:12,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"}},Spicetify.React.createElement("span",{dangerouslySetInnerHTML:{__html:qu}}),Spicetify.React.createElement("span",null,"Total time - ",o)),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:14,marginTop:"auto"}},Spicetify.React.createElement("span",{"data-testid":"hero-hours",style:{fontSize:80,fontWeight:800,letterSpacing:"-0.04em",lineHeight:1,fontVariantNumeric:"tabular-nums"}},h),Spicetify.React.createElement("span",{style:{fontSize:28,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"h"),Spicetify.React.createElement("span",{"data-testid":"hero-minutes",style:{fontSize:48,fontWeight:700,letterSpacing:"-0.03em",fontVariantNumeric:"tabular-nums"}},b.toString().padStart(2,"0")),Spicetify.React.createElement("span",{style:{fontSize:22,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"m"),k&&x!=null&&Spicetify.React.createElement("span",{"data-testid":"hero-delta",style:{marginLeft:"auto",fontSize:12,color:"var(--spice-button)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:4}},x>=0?"\u2191":"\u2193"," ",Math.abs(x),"% vs prev")),Spicetify.React.createElement("div",{"data-testid":"hero-sublabel",style:{marginTop:14,display:"flex",alignItems:"center",gap:6,fontSize:12,color:"rgba(var(--spice-rgb-text), 0.55)"}},Spicetify.React.createElement("span",null,ot(a)," plays \xB7 "),Spicetify.React.createElement("span",null,ot(i)," artists")))}function Ey(){return Spicetify.React.createElement("div",{className:"overview-section","aria-hidden":"true"},Spicetify.React.createElement(lt,{className:"overview-hero-cell",height:184}),Spicetify.React.createElement("div",{className:"overview-right-block"},Array.from({length:4}).map((e,t)=>Spicetify.React.createElement(lt,{key:t,className:"overview-card",height:60}))),Spicetify.React.createElement("div",{className:"overview-bottom-row"},Array.from({length:3}).map((e,t)=>Spicetify.React.createElement(lt,{key:t,className:"overview-card",height:60}))))}function ni({stats:e,activePeriod:t,loading:a=!1}){if(a||!e)return Spicetify.React.createElement(Ey,null);let i=nt(),l=(Ne.getActive()?.getProviderInfo().id??"local")==="statsfm"?"statsfm":"local",d=l==="statsfm",m={tracks:{value:ot(e.totalPlays),tooltip:"Total number of tracks played in the selected period",sub:"plays"},"unique-artists":{value:ot(e.uniqueArtistCount),tooltip:"Number of distinct artists played in the selected period"},streak:void 0,"new-artists":{value:ot(e.newArtistCount??0),tooltip:"Artists you played in this period that you didn't play in the previous period (or no plays in the prior window)",sub:"discovered"},"peak-hour":{value:Ft(e.peakHour,i.use24HourTime),tooltip:"Your most active listening hour in this period",sub:"most active"},"skip-rate":d?void 0:{value:`${Math.round(e.skipRate*100)}%`,tooltip:"Percentage of tracks skipped before the play threshold"},"est-payout":{value:Lu(e.totalPlays),tooltip:"Estimated streaming payout at $0.004 per play (approximate only)",sub:"indie scale"},"top-genre":{value:e.topGenres[0]?.genre??"-",tooltip:"Your most-played genre in this period"},"listening-days":{value:e.listeningDays!=null&&e.listeningDays>0?ot(e.listeningDays):"-",tooltip:"Number of days with at least one play in the selected period"}},h=i.overviewOrder[l].filter($=>m[$]!==void 0&&!i.hiddenSections.includes($)),b=h.slice(0,4),w=h.slice(4,7),k=Math.max(1,Math.min(2,b.length)),x=Math.max(1,Math.min(3,w.length)),P=$=>{let _=m[$];if(!_)return null;let z=Wn[$]??$;return Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{key:$,label:_.tooltip},Spicetify.React.createElement("div",{className:"overview-card","data-card-id":$},Spicetify.React.createElement("div",{className:"overview-card-label"},z),Spicetify.React.createElement("div",{className:"overview-card-row"},Spicetify.React.createElement("span",{className:"overview-card-value",style:_.accent?{color:_.accent}:void 0},_.value),_.sub&&Spicetify.React.createElement("span",{className:"overview-card-sub"},_.sub))))},O=w.length>0;return Spicetify.React.createElement("div",{className:`overview-section${O?"":" overview-section--compact"}`},Spicetify.React.createElement(Ty,{totalDuration:e.totalDuration,priorPeriodTotalDuration:e.priorPeriodTotalDuration,totalPlays:e.totalPlays,uniqueArtistCount:e.uniqueArtistCount,periodLabel:t.label,periodKey:t.id}),b.length>0&&Spicetify.React.createElement("div",{className:"overview-right-block",style:{gridTemplateColumns:`repeat(${k}, minmax(0, 1fr))`}},b.map(P)),O&&Spicetify.React.createElement("div",{className:"overview-bottom-row",style:{gridTemplateColumns:`repeat(${x}, minmax(0, 1fr))`}},w.map(P)))}function Et(e){let t=e.split(":");t.length>=3&&Spicetify.Platform.History.push(`/${t[1]}/${t[2]}`)}function Ks(e,t,a){let i=new Blob([e],{type:a}),o=URL.createObjectURL(i),l=document.createElement("a");l.href=o,l.download=t,l.click(),URL.revokeObjectURL(o)}function js({recentPlays:e=[],loading:t=!1}){return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Last 24h"),Spicetify.React.createElement("h2",{className:"section-title"},"Recently Played")),Spicetify.React.createElement("div",{className:"recently-played"},t?Array.from({length:6}).map((a,i)=>Spicetify.React.createElement("div",{key:i,className:"recently-played-item","aria-hidden":"true"},Spicetify.React.createElement(lt,{className:"recently-played-skeleton-art",width:132,height:132,radius:6}),Spicetify.React.createElement(lt,{className:"recently-played-skeleton-text",width:100,height:10,radius:2,style:{marginTop:8}}),Spicetify.React.createElement(lt,{className:"recently-played-skeleton-subtext",width:70,height:10,radius:2,style:{marginTop:6}}))):e.map(a=>{let i=Ye(a.albumArt);return Spicetify.React.createElement("div",{key:`${a.trackUri}-${a.playedAt}`,className:"recently-played-item",onClick:()=>Et(a.trackUri)},i?Spicetify.React.createElement("img",{src:i,alt:"",className:"recently-played-art"}):Spicetify.React.createElement("div",{className:"recently-played-art"}),Spicetify.React.createElement("div",{className:"recently-played-name"},a.trackName),Spicetify.React.createElement("div",{className:"recently-played-artist"},a.artistName),Spicetify.React.createElement("div",{className:"recently-played-time"},Ou(a.playedAt)))})))}Ca();Pt();st();gr();Cn();var{useState:ai}=Spicetify.React,Ay={not_found:"Username not found. Check your stats.fm customId.",private:"Your profile is private. Make it public in stats.fm settings.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function ud({onComplete:e}){let[t,a]=ai("provider"),[i,o]=ai(""),[l,d]=ai(!1),[m,g]=ai(null),h=()=>{Ne.setActive("local"),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)),e()},b=async()=>{if(!i.trim())return;d(!0),g(null);let w=await $r(i.trim());if(!w.valid){g(Ay[w.reason]??"Connection failed. Try again."),d(!1);return}let k={username:i.trim(),isPlus:w.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(ce.STATSFM_CONFIG,JSON.stringify(k)),await tr.init(),Be.invalidate(),Ne.setActive("statsfm"),window.dispatchEvent(new CustomEvent(ve.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)),d(!1),e()};return Spicetify.React.createElement("div",{className:"wizard-page"},Spicetify.React.createElement("div",{className:"wizard-modal wizard-modal--page","aria-label":"Choose your provider"},t==="provider"?Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Welcome to Listening Stats"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Choose how you want to track your listening history."),Spicetify.React.createElement("div",{className:"wizard-provider-cards"},Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:h},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"Local Tracking"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Stats tracked on this device. No account required."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Start with Local")),Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:()=>a("statsfm")},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"stats.fm"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Import your listening history from your stats.fm profile."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Use stats.fm")))):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Connect stats.fm"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Use your stats.fm customId. Your profile must be public for this to work."),Spicetify.React.createElement("div",{className:"provider-status-card wizard-statsfm-help"},Spicetify.React.createElement("div",{className:"settings-label"},"How to find your customId"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Open stats.fm, visit your profile, and copy the customId from the profile URL."),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Example: stats.fm/user/",Spicetify.React.createElement("strong",null,"your-custom-id"))),Spicetify.React.createElement("div",{className:"wizard-statsfm-form"},Spicetify.React.createElement("input",{type:"text",value:i,onChange:w=>o(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!l&&b()},placeholder:"Enter your stats.fm customId",disabled:l,"aria-label":"stats.fm customId",className:"wizard-statsfm-input"}),Spicetify.React.createElement("div",{className:"wizard-statsfm-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>a("provider"),disabled:l},"Back"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>{b()},disabled:l||!i.trim()},l?"Connecting...":"Connect stats.fm")),m&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},m)))))}st();function Py(e){let t=/^spotify:album:([a-zA-Z0-9]+)$/.exec(e.trim());return t?t[1]:null}function dd(e){let t=/^spotify:track:([a-zA-Z0-9]+)$/.exec(e.trim());return t?t[1]:null}function Ry(e){for(let t of e.topTracks){let a=Ye(t.albumArt);a&&(t.albumArt=a)}for(let t of e.topArtists){let a=Ye(t.imageUrl??void 0);a&&(t.imageUrl=a)}for(let t of e.topAlbums??[]){let a=Ye(t.albumArt);a&&(t.albumArt=a)}for(let t of e.recentPlays??[]){let a=Ye(t.albumArt);a&&(t.albumArt=a)}}function Ny(e,t){let a=[],i=new Set;for(let o of e)if(!i.has(o.trackUri)&&(i.add(o.trackUri),a.push(o),a.length>=t))break;return a}function Cy(e){let t=new Map;for(let a of e.recentPlays??[]){let i=a.albumArt?.trim();i&&t.set(a.trackUri,i)}for(let a of e.topTracks)if(!a.albumArt?.trim()){let i=t.get(a.trackUri);i&&(a.albumArt=i)}}function Iy(e){for(let t of e.topAlbums??[]){let a=t.albumArt?.trim();if(a)for(let i of e.topTracks)!i.albumArt?.trim()&&i.albumUri===t.albumUri&&(i.albumArt=a)}}async function _y(e){let t=e.filter(o=>(!o.albumArt||!String(o.albumArt).trim())&&o.albumUri?.startsWith("spotify:album:"));if(t.length===0)return;let a=new Map;for(let o of t){let l=Py(o.albumUri);if(!l)continue;let d=a.get(l)??[];d.push(o),a.set(l,d)}let i=[...a.keys()];for(let o=0;o<i.length;o+=20){let l=i.slice(o,o+20),d=l.join(","),m=await Gt(`https://api.spotify.com/v1/albums?ids=${encodeURIComponent(d)}`);if(!m.ok)continue;let g=new Map;for(let h of m.data.albums??[]){if(!h?.id)continue;let b=h.images?.[0]?.url;b&&g.set(h.id,b)}for(let h of l){let b=g.get(h);if(b)for(let w of a.get(h)??[])w.albumArt=b}}}async function Dy(e){let t=e.filter(o=>(!o.albumArt||!String(o.albumArt).trim())&&dd(o.trackUri));if(t.length===0)return;let a=new Map;for(let o of t){let l=dd(o.trackUri);if(!l)continue;let d=a.get(l)??[];d.push(o),a.set(l,d)}let i=[...a.keys()];for(let o=0;o<i.length;o+=50){let l=i.slice(o,o+50),d=l.join(","),m=await Gt(`https://api.spotify.com/v1/tracks?ids=${encodeURIComponent(d)}`);if(m.ok)for(let g=0;g<l.length;g++){let h=l[g],w=m.data.tracks?.[g]?.album?.images?.[0]?.url;if(!(!w||!h))for(let k of a.get(h)??[])k.albumArt=w}}}async function Oy(e){let t=e.topArtists.filter(a=>(!a.imageUrl||!String(a.imageUrl).trim())&&Nn(a.artistUri??""));if(t.length!==0)for(let a=0;a<t.length;a+=50){let i=t.slice(a,a+50),o=i.map(m=>m.artistUri.replace(/^spotify:artist:/i,"")).join(","),l=await Gt(`https://api.spotify.com/v1/artists?ids=${encodeURIComponent(o)}`);if(!l.ok)continue;let d=l.data.artists??[];for(let m=0;m<i.length;m++){let g=i[m],b=d[m]?.images?.[0]?.url;if(!b?.trim())continue;let w=Ye(b)??b;w.trim()&&(g.imageUrl=w)}}}function Ly(e){let t=new Map;for(let a of e.topTracks){let i=a.albumArt?.trim(),o=a.artistUri?.trim();!i||!o||t.has(o)||t.set(o,i)}for(let a of e.topArtists){if(a.imageUrl?.trim())continue;let i=a.artistUri?.trim()??"",o=i?t.get(i):void 0;if(o){let l=Ye(o)??o;l.trim()&&(a.imageUrl=l)}}}function $y(e){let t=new Map;for(let a of e.topTracks){let i=a.albumArt?.trim(),o=a.artistName?.trim().toLowerCase();!i||!o||t.has(o)||t.set(o,i)}for(let a of e.topArtists){if(a.imageUrl?.trim())continue;let i=a.artistName?.trim().toLowerCase();if(!i)continue;let o=t.get(i);if(o){let l=Ye(o)??o;l.trim()&&(a.imageUrl=l)}}}async function pd(e){try{Ry(e);let t=Ny(e.topTracks,50);Cy(e),Iy(e),await _y(t),await Dy(t);let a=[...new Set(e.topArtists.map(i=>i.artistUri).filter(Boolean))];if(a.length>0){await Ra(a);let i=await Ke.artists.where("uri").anyOf(a).toArray(),o=new Map(i.map(l=>[l.uri,l]));for(let l of e.topArtists){let d=o.get(l.artistUri),m=Ye(d?.imageUrl??void 0)??d?.imageUrl;m?.trim()&&(!l.imageUrl||!String(l.imageUrl).trim())&&(l.imageUrl=m)}}await Oy(e),Ly(e),$y(e)}catch{}}var{useState:rr,useCallback:Vs,useEffect:fd,useMemo:My}=Spicetify.React,Uy=[{id:"top5",label:"Top 5"},{id:"time",label:"Total time"},{id:"genre",label:"Genre"},{id:"streak",label:"Streak"},{id:"throwback",label:"Throwback"},{id:"wrapped",label:"Wrapped"}],Wy=[{id:"square",label:"Square"},{id:"story",label:"Story"}],Fy={square:{width:1080,height:1080},story:{width:1080,height:1920}};function By(){try{let t=localStorage.getItem(ce.STATSFM_CONFIG);if(t){let i=JSON.parse(t)?.username;if(i&&String(i).trim())return String(i).trim()}}catch{}let e=Spicetify.User?.username;return e&&String(e).trim()?String(e).trim():""}function gd({stats:e,activePeriod:t,onClose:a,initialVariant:i}){let[o,l]=rr(i??"top5"),[d,m]=rr("square"),[g,h]=rr(!1),[b,w]=rr(!0),[k,x]=rr(!0),[P,O]=rr(!1),[$,_]=rr(""),[z,Y]=rr(!1),[U,W]=rr(null),L=Spicetify.ReactComponent.Toggle,q=By(),X=t.label,Q=t.getBoundaries(),Z=Math.max(1,Math.round((Q.end-Q.start)/864e5)),ie=Ne.getActiveId()??"local",Se=Ne.getActive()?.getProviderInfo().capabilities,le=My(()=>Uy.filter(F=>!(F.id==="genre"&&(ie==="local"||!Se?.hasGenreData)||F.id==="streak"&&!Se?.hasStreakData)),[Se,ie]);fd(()=>{le.some(F=>F.id===o)||l(le[0]?.id??"top5")},[le,o]),fd(()=>{let F=!1,se="";return(async()=>{Y(!0),W(null);try{let N=await Ys(e,o,d,X,q,{followTheme:g,showUsername:b,showPeriodLabel:k,activeProviderId:ie,periodDayCount:Z});if(F)return;se=URL.createObjectURL(N),_(se)}catch{F||W("Could not render preview")}finally{F||Y(!1)}})(),()=>{F=!0,se&&URL.revokeObjectURL(se)}},[e,o,d,X,q,g,b,k,ie,Z]);let Ce=F=>l(F),Fe=Vs(F=>{F.target.classList.contains("share-overlay")&&a()},[a]),Ie=Vs(async()=>{if(!P){O(!0);try{await cb(e,o,d,X,q,{followTheme:g,showUsername:b,showPeriodLabel:k,activeProviderId:ie,periodDayCount:Z}),Spicetify.showNotification("Share card downloaded!")}catch{Spicetify.showNotification("Could not export share card.",!0)}finally{O(!1)}}},[e,o,d,X,q,g,b,k,ie,Z,P]),Te=Vs(async()=>{if(!P){O(!0);try{await ub(e,o,d,X,q,{followTheme:g,showUsername:b,showPeriodLabel:k,activeProviderId:ie,periodDayCount:Z}),Spicetify.showNotification("Copied to clipboard!")}catch{Spicetify.showNotification("Could not copy share card.",!0)}finally{O(!1)}}},[e,o,d,X,q,g,b,k,ie,Z,P]);return Spicetify.ReactDOM.createPortal(Spicetify.React.createElement("div",{className:"share-overlay",onClick:Fe},Spicetify.React.createElement("div",{className:"share-modal"},Spicetify.React.createElement("div",{className:"share-modal-header"},Spicetify.React.createElement("h2",{className:"share-modal-title"},"Share Cards"),Spicetify.React.createElement("button",{type:"button",className:"share-modal-close stats-header-icon-btn",onClick:a,"aria-label":"Close share modal",dangerouslySetInnerHTML:{__html:tn}})),Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Card type"),Spicetify.React.createElement("div",{className:"share-tabs-row"},le.map(F=>Spicetify.React.createElement("button",{type:"button",key:F.id,className:`share-variant-tab${o===F.id?" active":""}`,onClick:()=>Ce(F.id)},F.label)))),Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Layout"),Spicetify.React.createElement("div",{className:"share-tabs-row"},Wy.map(F=>Spicetify.React.createElement("button",{type:"button",key:F.id,className:`share-size-tab${d===F.id?" active":""}`,onClick:()=>m(F.id)},F.label)))),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Follow theme"),Spicetify.React.createElement(L,{value:g,onSelected:h})),Spicetify.React.createElement("div",{className:"share-preview-container"},z&&Spicetify.React.createElement("div",{className:"share-preview-status"},"Rendering preview\u2026"),U&&Spicetify.React.createElement("div",{className:"share-preview-status"},U),!!$&&!z&&Spicetify.React.createElement("img",{src:$,alt:"Share card preview",className:"share-preview-image","data-testid":"share-card-preview-image"})),Spicetify.React.createElement("div",{className:"share-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-copy-btn",onClick:Te,disabled:P},P?"Working\u2026":"Copy image"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-download-btn",onClick:Ie,disabled:P},P?"Working\u2026":"Save PNG")),Spicetify.React.createElement("div",{className:"share-control-row",style:{marginTop:8}},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Show @username"),Spicetify.React.createElement(L,{value:b,onSelected:w})),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Show period label"),Spicetify.React.createElement(L,{value:k,onSelected:x})))),document.body)}var pe='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',md=[30,215,96],Ur=72,zy="#0c160e",Hy="#122318",Gy="#0a1d12";function ze(e,t=1){return t===1?`rgb(${e[0]},${e[1]},${e[2]})`:`rgba(${e[0]},${e[1]},${e[2]},${t})`}function ii(e){if(!e)return null;let t=e.trim(),a=t.match(/^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);if(a)return[Number(a[1]),Number(a[2]),Number(a[3])];let i=t.replace("#","");return/^[\da-f]{6}$/i.test(i)?[Number.parseInt(i.slice(0,2),16),Number.parseInt(i.slice(2,4),16),Number.parseInt(i.slice(4,6),16)]:null}function Ky(e){if(!e)return{accent:md,bgA:zy,bgB:Hy,bgC:Gy,text:"#ffffff",mutedText:"rgba(255,255,255,0.7)",dimText:"rgba(255,255,255,0.55)",chunkBg:"rgba(255,255,255,0.04)",chunkBorder:"rgba(255,255,255,0.08)",specKickerMuted:"rgba(255,255,255,0.6)",specFooterCaption:"rgba(255,255,255,0.5)",specWatermarkTitle:"rgba(255,255,255,0.6)",specWatermarkCaption:"rgba(255,255,255,0.55)",specWrappedMetaMuted:"rgba(255,255,255,0.62)",specWrappedFootnoteMuted:"rgba(255,255,255,0.45)",specChunkCapsLabelMuted:"rgba(255,255,255,0.55)",specGenrePctMuted:"rgba(255,255,255,0.65)",specMutedBody:"rgba(255,255,255,0.6)"};let t=getComputedStyle(document.documentElement),a=ii(t.getPropertyValue("--spice-button"))??ii(t.getPropertyValue("--spice-text"))??md,i=ii(t.getPropertyValue("--spice-main"))??[12,22,14],o=ii(t.getPropertyValue("--spice-text"))??[255,255,255],l=ze(o,.62),d=ze(o,.56);return{accent:a,bgA:`rgb(${Math.max(0,i[0]-10)}, ${Math.max(0,i[1]-10)}, ${Math.max(0,i[2]-10)})`,bgB:`rgb(${i[0]}, ${i[1]}, ${i[2]})`,bgC:`rgb(${Math.max(0,i[0]-6)}, ${Math.max(0,i[1]-6)}, ${Math.max(0,i[2]-6)})`,text:ze(o),mutedText:ze(o,.72),dimText:d,chunkBg:ze(o,.06),chunkBorder:ze(o,.14),specKickerMuted:l,specFooterCaption:ze(o,.5),specWatermarkTitle:l,specWatermarkCaption:ze(o,.55),specWrappedMetaMuted:l,specWrappedFootnoteMuted:ze(o,.45),specChunkCapsLabelMuted:ze(o,.55),specGenrePctMuted:ze(o,.65),specMutedBody:ze(o,.6)}}function jy(e){let t=Ye(e);return t?new Promise(a=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>a(i),i.onerror=()=>a(null),setTimeout(()=>a(null),5e3),i.src=t}):Promise.resolve(null)}function qs(e,t,a,i,o,l){e.beginPath(),e.moveTo(t+l,a),e.arcTo(t+i,a,t+i,a+o,l),e.arcTo(t+i,a+o,t,a+o,l),e.arcTo(t,a+o,t,a,l),e.arcTo(t,a,t+i,a,l),e.closePath()}function Wr(e,t,a,i,o,l){qs(e,t,a,i,o,l),e.fill()}function Ze(e,t,a){if(a<=8)return"\u2026";if(e.measureText(t).width<=a)return t;let i=t;for(;i.length>0&&e.measureText(`${i}\u2026`).width>a;)i=i.slice(0,-1);return`${i}\u2026`}var Nt=20;async function an(e,t,a,i,o,l){if(!t)return!1;let d=await jy(t);return d?(e.save(),qs(e,a,i,o,o,l),e.clip(),e.drawImage(d,a,i,o,o),e.restore(),!0):!1}function sn(e,t,a,i,o){e.fillStyle="rgba(255,255,255,0.06)",Wr(e,t,a,i,i,o),e.fillStyle="rgba(255,255,255,0.2)",e.font=`${Math.round(i*.4)}px ${pe}`,e.textAlign="center",e.textBaseline="middle",e.fillText("\u266B",t+i/2,a+i/2),e.textAlign="left",e.textBaseline="alphabetic"}function br(e,t,a,i,o,l){let d=e.letterSpacing;e.fillStyle=l,e.font=`700 ${o}px ${pe}`,e.letterSpacing="0.08em",e.fillText(t.toUpperCase(),a,i),e.letterSpacing=d}function ar(e,t,a,i,o,l=!1,d=36){e.fillStyle=o.specKickerMuted??o.mutedText;let m=e.letterSpacing;return e.letterSpacing="0.1em",e.font=`700 ${d}px ${pe}`,e.fillText(l?t:t.toUpperCase(),a,i),e.letterSpacing=m,i+d+18}function Vy(e){let t=(Math.floor(e)%24+24)%24,a=t%12||12,i=t<12||t===24?"AM":"PM";return`${a} ${i}`}function qy(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);if(!t)return e;let a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=Number(t[2]),o=Number(t[3]);return i<1||i>12?e:`${a[i-1]} ${o}`}function Yy(e,t,a,i){let l=160*(Math.PI/180),d=Math.sin(l),m=-Math.cos(l),g=Math.hypot(t,a)/2,h=t/2,b=a/2,w=h-d*g,k=b-m*g,x=h+d*g,P=b+m*g,O=e.createLinearGradient(w,k,x,P);O.addColorStop(0,i.bgA),O.addColorStop(.5,i.bgB),O.addColorStop(1,i.bgC),e.fillStyle=O,e.fillRect(0,0,t,a);let $=e.createRadialGradient(t,0,0,t,0,t*.8);$.addColorStop(0,ze(i.accent,.35)),$.addColorStop(1,ze(i.accent,0)),e.fillStyle=$,e.fillRect(0,0,t,a);let _=e.createRadialGradient(0,a,0,0,a,a*.7);_.addColorStop(0,ze(i.accent,.15)),_.addColorStop(1,ze(i.accent,0)),e.fillStyle=_,e.fillRect(0,0,t,a)}function Xy(e,t,a,i){let o=Ur,l=52;e.fillStyle=ze(i.accent),e.beginPath(),e.arc(o+18,l+18,18,0,Math.PI*2),e.fill();let d=e.letterSpacing;if(e.fillStyle=i.specWatermarkTitle??i.dimText,e.font=`600 28px ${pe}`,e.letterSpacing="0.04em",e.textBaseline="middle",e.fillText("LISTENING STATS \xB7 SPICETIFY",o+48,l+18),e.letterSpacing=d,a){e.fillStyle=i.specWatermarkCaption??i.dimText,e.font=`500 26px ${pe}`;let m=e.measureText("LISTENING STATS \xB7 SPICETIFY").width,g=o+48+m,h=t-Ur,b=Math.max(60,h-g-28),w=Ze(e,a,b);e.textAlign="right",e.fillText(w,h,l+18),e.textAlign="left"}e.textBaseline="alphabetic"}function Jy(e,t,a,i,o){e.fillStyle=o.specFooterCaption??o.dimText,e.font=`28px ${pe}`,e.fillText(i,Ur,a-52)}function Zy(e,t){return e==="time"?t==="story"?1320:420:e==="genre"?t==="story"?1280:560:e==="throwback"?t==="story"?1180:780:e==="top5"?t==="story"?1460:720:e==="streak"?t==="story"?1180:560:e==="wrapped"?t==="story"?1380:620:t==="story"?620:560}async function Qy(e,t,a,i,o,l,d,m){let g=a==="story",h=m?.listTitle??"My top 5",b=m?.includeStoryInsight!==!1,w=m?.wrappedStoryTight===!0&&g,k=m?.wrappedSquareTight===!0&&!g;l=ar(e,h,o,l,i),l+=g?w?36:48:k?24:32;let x=t.topTracks.slice(0,5);if(x.length===0)return l;let P=k?44:w?48:56,O=g?w?102:124:k?68:96,$=Nt+8,_=g?w?28:32:k?22:28,z=w?16:k?15:18,Y=x.every(Te=>Te.count===0);e.font=`700 ${_}px ${pe}`;let U=0;for(let Te of x)Te.count>0&&(U=Math.max(U,e.measureText(`${Te.count}`).width));e.font=`600 ${z}px ${pe}`;let W=e.letterSpacing;e.letterSpacing="0.06em";let L=Y?0:e.measureText("PLAYS").width;e.letterSpacing=W;let q=Math.ceil(U+14+L+Ur/2),X=o+P+$+O+$,Q=Math.max(72,o+d-q-Nt-X),Z=Te=>Te+Math.round(O*.38),ie=Te=>Te+Math.round(O*.78),Se=g?w?22:36:k?12:24,le=g?w?52:64:k?48:64,Ce=g?w?38:44:k?30:40,Fe=g?w?26:30:k?22:28,Ie=g?w?8:10:k?6:8;for(let Te=0;Te<x.length;Te++){let F=x[Te],se=l+Te*(O+Se);e.fillStyle=ze(i.accent),e.font=`800 ${le}px ${pe}`,e.textAlign="right",e.fillText(`${Te+1}`,o+P,se+O/2+18),e.textAlign="left";let V=o+P+$;await an(e,F.albumArt,V,se,O,Ie)||sn(e,V,se,O,Ie),e.fillStyle=i.text,e.font=`600 ${Ce}px ${pe}`,e.fillText(Ze(e,F.trackName,Q),X,Z(se)),e.fillStyle=i.dimText,e.font=`${Fe}px ${pe}`,e.fillText(Ze(e,F.artistName,Q),X,ie(se));let N=o+d;e.fillStyle=i.text,e.font=`700 ${_}px ${pe}`,e.textAlign="right",e.fillText(F.count>0?`${F.count}`:"",N,Z(se)),e.fillStyle=i.dimText,e.font=`600 ${z}px ${pe}`,e.letterSpacing="0.06em",F.count>0&&e.fillText("PLAYS",N,ie(se)),e.letterSpacing=W,e.textAlign="left"}if(l+=x.length*(O+Se),g&&t.totalPlays>0&&b){let Te=x.reduce((K,fe)=>K+fe.count,0),F=Math.round(Te/t.totalPlays*100),se=224;nr(e,o-8,l+48,d+16,se,i);let V=o+24,N=l+48;br(e,"Top 5 share",V,N+44,24,i.specChunkCapsLabelMuted??i.dimText),e.font=`28px ${pe}`;let Ee=e.measureText(`${ot(Te)} plays`).width;e.font=`22px ${pe}`;let me=e.measureText(`of ${ot(t.totalPlays)} total`).width,De=Math.max(Ee,me),Le=o+d-16,je=Math.max(120,Le-De-Nt-V);e.fillStyle=i.text,e.font=`700 36px ${pe}`,e.fillText(Ze(e,`${F}% of all plays`,je),V,N+114),e.fillStyle=i.mutedText,e.font=`28px ${pe}`,e.textAlign="right",e.fillText(`${ot(Te)} plays`,o+d-16,N+104),e.fillStyle=i.dimText,e.font=`22px ${pe}`,e.fillText(`of ${ot(t.totalPlays)} total`,o+d-16,N+144),e.textAlign="left",l+=48+se}return l}async function eb(e,t,a,i,o,l,d,m,g){let h=o.trim().length>0?`${o} \xB7 I listened`:"Listening time";m=ar(e,h,d,m,i,!0,a==="story"?34:30);let b=a==="story";m+=b?80:32;let w=Math.floor(t.totalDuration/36e5),k=b?380:300,x=b?96:72,P=m+Math.floor(k*.78);e.textAlign="left",e.textBaseline="alphabetic",e.font=`900 ${k}px ${pe}`,e.fillStyle=ze(i.accent),e.fillText(`${w}`,d,P),e.fillStyle=i.text,e.font=`700 ${x}px ${pe}`;let O=P+Math.floor(x*1.05)+(b?28:22);e.fillText("hours",d,O),m=O+Math.floor(x*.35)+(b?48:40);let $=t.topArtists[0]?.artistName??"";if($){e.fillStyle=i.mutedText,e.font=`40px ${pe}`;let se="Mostly to ",V=e.measureText(se).width;e.fillText(se,d,m),e.fillStyle=ze(i.accent),e.font=`bold 40px ${pe}`;let N=Math.max(40,d+g-(d+V));e.fillText(Ze(e,`${$}.`,N),d+V,m),m+=72}if(!b)return;let _=Math.max(1,l??t.listeningDays??28),z=Math.round(w/24),Y=Math.round(w*60/_),U=24,W=(g-U)/2,L=m+64,q=220,X=i.specMutedBody??i.mutedText,Q=i.specChunkCapsLabelMuted??i.dimText,Z=32;nr(e,d,L,W,q,i),nr(e,d+W+U,L,W,q,i),br(e,"Equivalent to",d+Z,L+44,24,Q),e.fillStyle=i.text,e.font=`800 56px ${pe}`,e.fillText(`${z} days`,d+Z,L+116),e.fillStyle=X,e.font=`26px ${pe}`,e.fillText(Ze(e,"of nonstop play",W-2*Z),d+Z,L+162);let ie=d+W+U+Z;if(br(e,"Daily average",ie,L+44,24,Q),e.fillStyle=i.text,e.font=`800 56px ${pe}`,e.fillText(`${Y} min`,ie,L+116),e.fillStyle=X,e.font=`26px ${pe}`,e.fillText(t.totalPlays>0?Ze(e,`across ${ot(t.totalPlays)} plays`,W-2*Z):"",ie,L+162),t.topArtists.length===0)return;let Se=L+q+28,le=Math.min(3,t.topArtists.length),Ce=82,Fe=108+le*Ce;nr(e,d-8,Se,g+16,Fe,i);let Ie=d+24,Te=i.specKickerMuted??i.mutedText;br(e,"Top artists",Ie+8,Se+40,26,Te);let F=Se+40+30+24;for(let se=0;se<le;se++){let V=t.topArtists[se],N=Ie+36,Ee=64,me=Ie+36+22;e.fillStyle=ze(i.accent),e.font=`800 38px ${pe}`,e.textAlign="right",e.fillText(`${se+1}`,N,F+42),e.textAlign="left",await an(e,V.imageUrl??void 0,me,F,Ee,Ee/2)||sn(e,me,F,Ee,Ee/2);let De=me+Ee+22,Le=V.count>0?`${ot(V.count)} ${V.count===1?"play":"plays"}`:"";e.font=`28px ${pe}`,e.textAlign="right",e.fillStyle=i.dimText;let je=e.measureText(Le).width+24;e.textAlign="left";let K=Math.max(80,d+g-De-je);e.fillStyle=i.text,e.font=`600 36px ${pe}`,e.fillText(Ze(e,V.artistName,K),De,F+42),e.fillStyle=i.dimText,e.font=`28px ${pe}`,e.textAlign="right",e.fillText(Le,d+g-24,F+42),e.textAlign="left",F+=Ce}}async function tb(e,t,a,i,o,l,d){let m=a==="story"?6:5,g=t.topGenres.slice(0,m);if(g.length===0)return;let h=g[0].count||1,b=g.reduce((F,se)=>F+se.count,0),w=b>0?Math.round(h/b*100):0;if(b===0)return;l=ar(e,`I was ${w}% ${g[0].genre}`,o,l,i);let k=a==="story";l+=k?54:40;let x=k?36:32,P=k?36:28,O=k?320:300,$=k?120:100,_=k?72:64,z=k?40:36,Y=Math.max(160,Math.min(O,d-$-_-Nt-28)),U=i.specGenrePctMuted??i.mutedText;for(let F=0;F<g.length;F++){let se=g[F],V=l+F*(x+P),N=b>0?se.count/b:0;e.fillStyle=i.text,e.font=`600 ${z}px ${pe}`,e.fillText(Ze(e,se.genre,Y),o,V+x-4);let Ee=o+Y+Nt,me=Math.max(_,d-$-(Ee-o)-Nt);e.fillStyle="rgba(255,255,255,0.1)",Wr(e,Ee,V,me,x,x/2),e.fillStyle=ze(i.accent,1-F*.13),Wr(e,Ee,V,me*(se.count/h),x,x/2),e.fillStyle=U,e.font=`600 ${k?34:32}px ${pe}`,e.textAlign="right",e.fillText(`${Math.round(N*100)}%`,o+d,V+x-4),e.textAlign="left"}if(l+=g.length*(x+P),!k||t.topTracks.length===0)return;l+=72;let W=g.slice(0,3),L=k?100:92,q=70+W.length*L;nr(e,o-8,l,d+16,q,i);let X=i.specKickerMuted??i.mutedText;br(e,"Genre leaders",o+24,l+48,26,X);let Q=l+100,Z=200;e.font=`700 24px ${pe}`;for(let F of W)Z=Math.max(Z,Math.ceil(e.measureText(F.genre.toUpperCase()).width)+24);let ie=o+d-20;Z=Math.min(Z,Math.floor(d*.42));let Se=64,le=o+24+Se+Nt,Ce=Math.max(100,ie-Z-Nt-le),Fe=F=>F+30,Ie=F=>F+62,Te=F=>F+44;for(let F=0;F<W.length;F++){let se=W[F],V=t.topTracks[F];if(!V)break;await an(e,V.albumArt,o+24,Q,Se,8)||sn(e,o+24,Q,Se,8),e.fillStyle=i.text,e.font=`600 32px ${pe}`,e.fillText(Ze(e,V.trackName,Ce),le,Fe(Q)),e.fillStyle=i.dimText,e.font=`24px ${pe}`,e.fillText(Ze(e,V.artistName,Ce),le,Ie(Q)),e.fillStyle=ze(i.accent),e.font=`700 24px ${pe}`,e.textAlign="right",e.fillText(se.genre.toUpperCase(),ie,Te(Q)),e.textAlign="left",Q+=L}}async function rb(e,t,a,i,o,l,d){let m=t.streak??0;if(m===0)return;let g=a==="story";l=ar(e,`${m}-day streak`,o,l,i,!1,g?40:36),l+=g?54:32;let h=g?12:8,b=7,w=12,k=(t.dailyPlayCounts??[]).slice(-(h*b)),x=Math.max(1,...k.map(le=>le.count),1),P=Math.floor((d-w*(h-1))/h);for(let le=0;le<h;le++)for(let Ce=0;Ce<b;Ce++){let Fe=le*b+Ce,Ie=k[Fe]?.count??0,Te=Math.min(1,Ie/x);e.fillStyle=ze(i.accent,.08+Te*.92),Wr(e,o+le*(P+w),l+Ce*(P+w),P,P,6)}l+=b*(P+w)+(g?48:24),e.fillStyle=i.mutedText,e.font=`${g?40:34}px ${pe}`;let O="Listened every day for ";e.fillText(O,o,l);let $=e.measureText(O).width;if(e.fillStyle=i.text,e.font=`bold ${g?40:34}px ${pe}`,e.fillText(Ze(e,`${m} days.`,Math.max(24,o+d-o-$)),o+$,l),!g||k.length===0)return;l+=80;let _=k.reduce((le,Ce)=>le+Ce.count*3,0),z=k.length?Math.round(_/k.length):0,Y=k[0];if(!Y)return;let U=k.reduce((le,Ce)=>Ce.count>le.count?Ce:le,Y),W=24,L=(d-W)/2,q=218;nr(e,o,l,L,q,i),nr(e,o+L+W,l,L,q,i);let X=i.specChunkCapsLabelMuted??i.dimText,Q=i.specMutedBody??i.mutedText;br(e,"Daily average",o+28,l+44,24,X),e.fillStyle=i.text,e.font=`800 56px ${pe}`,e.fillText(`${z} min`,o+28,l+116),e.fillStyle=Q,e.font=`26px ${pe}`,e.fillText(Ze(e,`over the last ${k.length} days`,L-56),o+28,l+162),br(e,"Longest streak",o+L+W+28,l+44,24,X),e.fillStyle=ze(i.accent),e.font=`800 56px ${pe}`,e.fillText(`${m} days`,o+L+W+28,l+116),e.fillStyle=Q,e.font=`26px ${pe}`,e.fillText(Ze(e,"your best run this year",L-56),o+L+W+28,l+162),l+=q+28,nr(e,o-8,l,d+16,176,i),br(e,"Best day",o+28,l+52,24,X),e.fillStyle=i.text,e.font=`700 36px ${pe}`;let Z=qy(U.date),ie=`${U.count} ${U.count===1?"play":"plays"}`;e.font=`800 36px ${pe}`;let Se=e.measureText(ie).width+Nt;e.font=`700 36px ${pe}`,e.fillText(Ze(e,Z,Math.max(80,d-28-Se)),o+28,l+112),e.fillStyle=ze(i.accent),e.font=`800 36px ${pe}`,e.textAlign="right",e.fillText(ie,o+d-16,l+114),e.textAlign="left"}async function nb(e,t,a,i,o,l,d,m){let g=t.topTracks[0];if(!g)return;let h=a==="story";l=ar(e,"Most-played",o,l,i),l+=28;let b=h?940:500,w=Math.floor((m-b)/2);await an(e,g.albumArt,w,l,b,20)||sn(e,w,l,b,20),l+=b+(h?96:72),e.textAlign="left",e.fillStyle=i.text,e.font=`800 ${h?96:64}px ${pe}`,e.fillText(Ze(e,g.trackName,d),o,l),l+=h?110:70,e.fillStyle=i.mutedText,e.font=`${h?44:32}px ${pe}`;let k=g.count>0?g.count===1?"1 play":`${g.count} plays`:"";if(e.fillText(Ze(e,k?`${g.artistName} \xB7 ${k}`:g.artistName,d),o,l),!h||t.totalPlays<=0)return;l+=76;let x=200;nr(e,o-8,l,d+16,x,i);let P=o-8,$=(d+16)/3,_=l+54,z=Math.round(g.count/t.totalPlays*100),Y=i.specChunkCapsLabelMuted??i.dimText,U=e.letterSpacing;e.fillStyle=Y,e.font=`700 22px ${pe}`,e.letterSpacing="0.08em",e.textAlign="center",e.fillText("PLAYS",P+$*.5,_),e.fillText("SHARE",P+$*1.5,_),e.fillText("RANK",P+$*2.5,_),e.letterSpacing=U,e.fillStyle=ze(i.accent),e.font=`800 52px ${pe}`,e.fillText(`${g.count}`,P+$*.5,_+86),e.fillStyle=i.text,e.fillText(`${z}%`,P+$*1.5,_+86),e.fillText("#1",P+$*2.5,_+86),e.textAlign="left",e.strokeStyle=i.chunkBorder,e.lineWidth=2,e.beginPath();let W=P+$,L=P+2*$;e.moveTo(W,l+28),e.lineTo(W,l+x-28),e.moveTo(L,l+28),e.lineTo(L,l+x-28),e.stroke()}async function ab(e,t,a,i,o,l,d){if(t.length===0)return o;o=ar(e,"Top tracks",i,o,a,!1,d.tileSz<=52?18:22),o+=d.tileSz<=52?14:18;let{rankW:m,tileSz:g,rowGap:h,rankNumPx:b,titlePx:w,subPx:k,cntPx:x,playsLblPx:P,artRadius:O}=d,$=10;e.font=`700 ${x}px ${pe}`;let _=0;for(let Q of t)Q.count>0&&(_=Math.max(_,e.measureText(`${Q.count}`).width));e.font=`600 ${P}px ${pe}`;let z=e.letterSpacing;e.letterSpacing="0.06em";let Y=e.measureText("PLAYS").width;e.letterSpacing=z;let U=Math.ceil(_+10+Y+Ur/2),W=i+m+$+g+$,L=Math.max(48,i+l-U-Nt-W),q=Q=>Q+Math.round(g*.34),X=Q=>Q+Math.round(g*.72);for(let Q=0;Q<t.length;Q++){let Z=t[Q],ie=o+Q*(g+h);e.fillStyle=ze(a.accent),e.font=`800 ${b}px ${pe}`,e.textAlign="right",e.fillText(`${Q+1}`,i+m,ie+g/2+Math.round(b*.12)),e.textAlign="left";let Se=i+m+$;await an(e,Z.albumArt,Se,ie,g,O)||sn(e,Se,ie,g,O),e.fillStyle=a.text,e.font=`600 ${w}px ${pe}`,e.fillText(Ze(e,Z.trackName,L),W,q(ie)),e.fillStyle=a.dimText,e.font=`${k}px ${pe}`,e.fillText(Ze(e,Z.artistName,L),W,X(ie));let le=i+l;e.fillStyle=a.text,e.font=`700 ${x}px ${pe}`,e.textAlign="right",Z.count>0&&e.fillText(`${Z.count}`,le,q(ie)),e.fillStyle=a.dimText,e.font=`600 ${P}px ${pe}`,e.letterSpacing="0.06em",Z.count>0&&e.fillText("PLAYS",le,X(ie)),e.letterSpacing=z,e.textAlign="left"}return o+t.length*(g+h)}async function ib(e,t,a,i,o,l,d){if(t.length===0)return o;o=ar(e,"Top artists",i,o,a,!1,d.tileSz<=52?18:22),o+=d.tileSz<=52?14:18;let{rankW:m,tileSz:g,rowGap:h,rankNumPx:b,titlePx:w,subPx:k,artRadius:x}=d,P=10,O=i+m+P+g+P,$=Math.max(48,i+l-Nt-O),_=Y=>Y+Math.round(g*.34),z=Y=>Y+Math.round(g*.72);for(let Y=0;Y<t.length;Y++){let U=t[Y],W=o+Y*(g+h);e.fillStyle=ze(a.accent),e.font=`800 ${b}px ${pe}`,e.textAlign="right",e.fillText(`${Y+1}`,i+m,W+g/2+Math.round(b*.12)),e.textAlign="left";let L=i+m+P;await an(e,U.imageUrl??void 0,L,W,g,x)||sn(e,L,W,g,x),e.fillStyle=a.text,e.font=`600 ${w}px ${pe}`,e.fillText(Ze(e,U.artistName,$),O,_(W)),e.fillStyle=a.dimText,e.font=`${k}px ${pe}`;let q=U.count>0?U.count===1?"1 play":`${ot(U.count)} plays`:"";e.fillText(Ze(e,q,$),O,z(W))}return o+t.length*(g+h)}async function sb(e,t,a,i,o,l,d){if(t.length===0)return o;let m=t[0].count||1,g=t.reduce(($,_)=>$+_.count,0);if(g===0)return o;o=ar(e,"Top genres",i,o,a,!1,d.labelPx+4),o+=d.rowGap>12?16:12;let{barH:h,rowGap:b,labelMax:w,labelPx:k,pctPx:x}=d,P=a.specGenrePctMuted??a.dimText,O=72;for(let $=0;$<t.length;$++){let _=t[$],z=o+$*(h+b),Y=g>0?_.count/g:0;e.fillStyle=a.text,e.font=`600 ${k}px ${pe}`,e.fillText(Ze(e,_.genre,w),i,z+h-3);let U=i+w+Nt,W=Math.max(48,l-O-(U-i)-Nt);e.fillStyle="rgba(255,255,255,0.1)",Wr(e,U,z,W,h,h/2),e.fillStyle=ze(a.accent,1-$*.15),Wr(e,U,z,W*(_.count/m),h,h/2),e.fillStyle=P,e.font=`600 ${x}px ${pe}`,e.textAlign="right",e.fillText(`${Math.round(Y*100)}%`,i+l,z+h-3),e.textAlign="left"}return o+t.length*(h+b)}async function ob(e,t,a,i,o,l,d,m,g,h){let b=a==="story",w=o.trim().length>0?`${o} \xB7 Wrapped`:"Wrapped",k=Math.floor(t.totalDuration/36e5),x=Vy(t.peakHour),P=g?t.streak??0:0,O=t.totalPlays>0?`${ot(t.totalPlays)} plays \xB7 ${t.uniqueArtistCount} artists \xB7 peak ${x}`:"";if(P>0&&t.totalPlays>0&&(O+=` \xB7 ${P}-day streak`),e.textAlign="left",e.textBaseline="alphabetic",d=ar(e,w,l,d,i,!0,b?26:20),d+=b?16:12,b){let Q=d+Math.floor(146.64000000000001);e.font=`900 188px ${pe}`,e.fillStyle=ze(i.accent),e.fillText(`${k}`,l,Q),e.fillStyle=i.text,e.font=`700 48px ${pe}`;let Z=Q+Math.floor(48*1.02)+18;e.fillText("hours",l,Z),d=Z+Math.floor(48*.28)+28}else{e.font=`900 112px ${pe}`,e.fillStyle=ze(i.accent);let Q=e.measureText(`${k}`).width,Z=d+Math.floor(112*.78);e.fillText(`${k}`,l,Z),e.fillStyle=i.text,e.font=`700 32px ${pe}`,e.fillText("hours",l+Q+14,Z),d=Z+Math.floor(Math.max(112,32)*.22)+18}e.fillStyle=i.mutedText;let $=b?26:19;e.font=`${$}px ${pe}`,e.fillText(Ze(e,O,m),l,d),d+=b?34:24;let _=b?t.topTracks.slice(0,4):t.topTracks.slice(0,3),z=b?t.topArtists.slice(0,4):t.topArtists.slice(0,3),Y=b?t.topGenres.slice(0,3):t.topGenres.slice(0,2),L=b?{rankW:44,tileSz:70,rowGap:10,rankNumPx:42,titlePx:30,subPx:22,cntPx:24,playsLblPx:15,artRadius:8}:{rankW:32,tileSz:46,rowGap:7,rankNumPx:26,titlePx:18,subPx:15,cntPx:17,playsLblPx:12,artRadius:6};d=await ab(e,_,i,l,d,m,L),d+=b?16:12,d=await ib(e,z,i,l,d,m,L),Y.length>0&&(d+=b?16:10,d=await sb(e,Y,i,l,d,m,b?{barH:22,rowGap:12,labelMax:220,labelPx:26,pctPx:24}:{barH:16,rowGap:8,labelMax:160,labelPx:18,pctPx:17}))}function nr(e,t,a,i,o,l){e.fillStyle=l.chunkBg,Wr(e,t,a,i,o,20),e.strokeStyle=l.chunkBorder,e.lineWidth=2,qs(e,t,a,i,o,20),e.stroke()}async function lb(e,t,a,i,o,l){let d=Fy[a],m=d.width,g=d.height,h=document.createElement("canvas");h.width=m,h.height=g;let b=h.getContext("2d");if(!b)throw new Error("Canvas 2D context unavailable");await pd(e);let w=Ky(!!l?.followTheme),x=(l?.activeProviderId??"local")==="local",P=!x&&t==="streak"?"top5":t,O=[];l?.showUsername!==!1&&o&&O.push(`@${o}`),l?.showPeriodLabel!==!1&&O.push(i);let $=O.length>0?O.join(" \xB7 "):"";Yy(b,m,g,w),Xy(b,m,$,w);let _=Math.max(1,l?.periodDayCount??e.listeningDays??28),z=Ur,Y=P==="wrapped"?168:180,U=P==="wrapped"&&a==="square"?108:P==="wrapped"&&a==="story"?96:140,W=P==="wrapped"?a==="story"?96:92:72,L=g-Y-U,q=Zy(P,a),X=Math.max(0,L-q),Z=Y+Math.floor(X*(P==="wrapped"?.06:.35)),ie=m-Ur*2;switch(P){case"top5":await Qy(b,e,a,w,z,Z,ie);break;case"time":await eb(b,e,a,w,i,_,z,Z,ie);break;case"genre":await tb(b,e,a,w,z,Z,ie);break;case"streak":await rb(b,e,a,w,z,Z,ie);break;case"throwback":await nb(b,e,a,w,z,Z,ie,m);break;case"wrapped":{let Se=Math.max(0,Y-24);b.save(),b.beginPath(),b.rect(0,Se,m,g-W-Se),b.clip(),await ob(b,e,a,w,i,z,Z,ie,x,$),b.restore();break}}return Jy(b,m,g,$,w),h}async function Ys(e,t,a,i,o,l){let d=await lb(e,t,a,i,o,l);return new Promise((m,g)=>{d.toBlob(h=>{if(!h){g(new Error("PNG blob creation failed"));return}m(h)},"image/png")})}async function cb(e,t,a,i,o,l){let d=await Ys(e,t,a,i,o,l),m=URL.createObjectURL(d),g=document.createElement("a");g.href=m,g.download="listening-stats-share.png",g.click(),URL.revokeObjectURL(m)}async function ub(e,t,a,i,o,l){let d=await Ys(e,t,a,i,o,l);if(!navigator.clipboard?.write)throw new Error("Clipboard API not available");await navigator.clipboard.write([new ClipboardItem({"image/png":d})])}Pt();var{useCallback:db}=Spicetify.React;function hd({version:e,onOpenUpdates:t,onPrefsChanged:a,onReceiveBetaUpdatesChanged:i}){let o=Spicetify.ReactComponent.Toggle,l=nt(),d=db(m=>{Oe("receiveBetaUpdates",m),window.dispatchEvent(new CustomEvent(ve.PREFS_CHANGED)),a(),i?.()},[a,i]);return Spicetify.React.createElement("div",{className:"settings-about"},Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Listening Stats"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Version ",e))),Spicetify.React.createElement("div",{className:"settings-row settings-about-beta-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Prereleases"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Same setting as in the updates window - affects version checks and which install command is copied there.")),o?Spicetify.React.createElement(o,{value:l.receiveBetaUpdates,onSelected:d}):Spicetify.React.createElement("input",{type:"checkbox",checked:l.receiveBetaUpdates,onChange:m=>d(m.currentTarget.checked)})),Spicetify.React.createElement("p",{className:"settings-about-short-lead"},"Changelog, install commands, and release checks are in ",Spicetify.React.createElement("strong",null,"Check for updates")," (footer or below)."),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-check-updates",onClick:t},"Check for updates\u2026"),Spicetify.React.createElement("p",{className:"settings-about-hint"},"Source:"," ",Spicetify.React.createElement("a",{className:"settings-inline-link",href:Qt,target:"_blank",rel:"noopener noreferrer"},Qt.replace("https://",""))))}var vd="listening-stats-lastfm-cache",wr="charts";function Xs(){return new Promise((e,t)=>{let a=indexedDB.open(vd,1);a.onupgradeneeded=()=>{let i=a.result;i.objectStoreNames.contains(wr)||i.createObjectStore(wr,{keyPath:"key"})},a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error)})}var Js=class{constructor(t=600*1e3){this.ttlMs=t}async get(t){try{let a=await Xs(),i=await new Promise((o,l)=>{let g=a.transaction(wr,"readonly").objectStore(wr).get(t);g.onsuccess=()=>o(g.result),g.onerror=()=>l(g.error)});return a.close(),!i||Date.now()>i.expiry?null:i.data}catch{return null}}async set(t,a){try{let i=await Xs(),o={key:t,data:a,expiry:Date.now()+this.ttlMs};await new Promise((l,d)=>{let h=i.transaction(wr,"readwrite").objectStore(wr).put(o);h.onsuccess=()=>l(),h.onerror=()=>d(h.error)}),i.close()}catch{}}async invalidate(){try{let t=await Xs();await new Promise((a,i)=>{let d=t.transaction(wr,"readwrite").objectStore(wr).clear();d.onsuccess=()=>a(),d.onerror=()=>i(d.error)}),t.close()}catch{}}async deleteDatabase(){try{await new Promise((t,a)=>{let i=indexedDB.deleteDatabase(vd);i.onsuccess=()=>t(),i.onerror=()=>a(i.error),i.onblocked=()=>t()})}catch{}}},si=new Js;Pt();Lr();gr();async function pb(e){let a=new TextEncoder().encode(e.toLowerCase()),i=await globalThis.crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(i)).map(l=>l.toString(16).padStart(2,"0")).join("").slice(0,12)}async function Zs(e,t,a){let i=e+t+a,o=await pb(i);return{trackUri:`listening-stats:track:${o}`,artistUri:`listening-stats:artist:${o}`,albumUri:`listening-stats:album:${o}`}}Pa();var fb=2e3,mb=1e3;function gb(e){return new Promise(t=>setTimeout(t,e))}async function yd(e){let a=(await Ke.playEvents.where("trackUri").startsWith("listening-stats:").toArray()).filter(l=>l.resolvedAt===null||l.resolvedAt===void 0);if(a.length===0)return;let i=[...new Set(a.map(l=>l.trackUri))],o=new Map;for(let l of a)o.has(l.trackUri)||o.set(l.trackUri,{trackName:l.trackName,artistName:l.artistName});for(let l of i){if(hr.isOpen())break;let d=o.get(l);if(!d)continue;let{trackName:m,artistName:g}=d,b=`https://api.spotify.com/v1/search?q=${encodeURIComponent(`track:${m} artist:${g}`)}&type=track&limit=5`,w=await Gt(b);if(w.ok){let x=w.data.tracks.items.find(P=>P.name.toLowerCase()===m.toLowerCase()&&P.artists[0]?.name.toLowerCase()===g.toLowerCase());x?await Ke.playEvents.where("trackUri").equals(l).modify({trackUri:`spotify:track:${x.id}`,artistUri:`spotify:artist:${x.artists[0].id}`,albumUri:`spotify:album:${x.album.id}`,albumArt:x.album.images[0]?.url??null,resolvedAt:Date.now()}):await Ke.playEvents.where("trackUri").equals(l).modify({resolvedAt:0})}else{if(w.error.type==="rate_limited"||w.error.type==="circuit_open")break;await Ke.playEvents.where("trackUri").equals(l).modify({resolvedAt:0})}await gb(e?.delayMs??fb+Math.random()*mb)}}var hb="Track,Artist,Album,Duration (ms),Played (ms),Started At,Ended At",on=10;function vb(e){let t=[],a="",i=!1;for(let o=0;o<e.length;o++){let l=e[o];l==='"'?i&&e[o+1]==='"'?(a+='"',o++):i=!i:l===","&&!i?(t.push(a),a=""):a+=l}return t.push(a),t}async function bd(e){let t=e.split(`
`).map(m=>m.trim()).filter(m=>m.length>0);if(t.length===0)return{events:[],errors:0,errorDetails:[]};let a=t[0];if(a!==hb)throw a.startsWith("Period,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Raw History (CSV)" in v1 to get importable data.'):a.startsWith("Rank,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Raw History (CSV)" in v1 to get importable data.'):new Error(`Import failed: unrecognized CSV format (expected v1 export). Got: "${a.slice(0,60)}"`);let i=[],o=0,l=[],d=t.slice(1);for(let m=0;m<d.length;m++){let g=m+2,h=d[m],b=vb(h);if(b.length<7){o++,l.length<on&&l.push(`Row ${g}: expected 7 fields, got ${b.length}`);continue}let[w,k,x,P,O,$,_]=b,z=parseInt(P,10),Y=parseInt(O,10),U=new Date($).getTime(),W=new Date(_).getTime();if(Number.isNaN(z)||Number.isNaN(Y)){o++,l.length<on&&l.push(`Row ${g}: invalid numeric field (duration or played ms)`);continue}if(!Number.isFinite(U)||Number.isNaN(U)||U<=0){o++,l.length<on&&l.push(`Row ${g}: invalid timestamp (Started At: "${$}")`);continue}if(!Number.isFinite(W)||Number.isNaN(W)||W<=0){o++,l.length<on&&l.push(`Row ${g}: invalid timestamp (Ended At: "${_}")`);continue}let L=await Zs(w,k,x);i.push({trackName:w,artistName:k,albumName:x,durationMs:z,playedMs:Y,startedAt:U,endedAt:W,type:"play",...L})}return{events:i,errors:o,errorDetails:l}}async function wd(e){let t;try{t=JSON.parse(e)}catch{throw new Error("Import failed: file is not valid JSON")}if(!Array.isArray(t))throw typeof t=="object"&&t!==null&&"topTracks"in t?new Error("Import failed: JSON must be a raw play events array, not a stats export"):new Error("Import failed: JSON must be a raw play events array, not a stats export");let a=[],i=0,o=[];for(let l=0;l<t.length;l++){let d=t[l],m=l+1;if(typeof d.trackName!="string"||typeof d.artistName!="string"||typeof d.startedAt!="number"||typeof d.endedAt!="number"||typeof d.durationMs!="number"||typeof d.playedMs!="number"){i++,o.length<on&&o.push(`Row ${m}: missing required field(s)`);continue}let g=d.trackName,h=d.artistName,b=typeof d.albumName=="string"?d.albumName:"",w=d.durationMs,k=d.playedMs,x=d.startedAt,P=d.endedAt,O,$,_;if(typeof d.trackUri=="string"&&d.trackUri)O=d.trackUri,$=typeof d.artistUri=="string"?d.artistUri:"",_=typeof d.albumUri=="string"?d.albumUri:"";else{let Y=await Zs(g,h,b);O=Y.trackUri,$=Y.artistUri,_=Y.albumUri}let z={trackName:g,artistName:h,albumName:b,durationMs:w,playedMs:k,startedAt:x,endedAt:P,trackUri:O,artistUri:$,albumUri:_,type:"play"};typeof d.albumArt=="string"&&d.albumArt&&(z.albumArt=d.albumArt),a.push(z)}return{events:a,errors:i,errorDetails:o}}async function Sd(e){if(e.length===0)return{imported:0,skipped:0,errors:0,errorDetails:[]};let t=e.map(g=>g.startedAt),a=await Ke.playEvents.where("startedAt").anyOf(t).toArray(),i=new Set(a.map(g=>`${g.startedAt}:${g.trackName}`)),o=[],l=0;for(let g of e){let h=`${g.startedAt}:${g.trackName}`;i.has(h)?l++:(o.push(g),i.add(h))}let d=0,m=[];if(o.length>0)try{await Ke.playEvents.bulkAdd(o)}catch(g){if(g!==null&&typeof g=="object"&&"failures"in g&&g.failures!==null&&typeof g.failures=="object"){let h=g.failures;d=Object.keys(h).length,m.length<on&&m.push(`bulkAdd: ${d} item(s) failed to insert`)}else throw g}return o.length-d>0&&yd().catch(g=>{console.warn("[listening-stats] URI resolution error:",g)}),{imported:o.length-d,skipped:l,errors:d,errorDetails:m}}var{useState:oi,useRef:yb}=Spicetify.React;function xd({onRefresh:e}){let[t,a]=oi(!1),[i,o]=oi("idle"),[l,d]=oi({current:0,total:0}),[m,g]=oi(null),h=yb(null),b=()=>{Be.invalidate(),e(),Spicetify.showNotification("Stats refreshed")},w=async _=>{let z=_.target.files?.[0];if(!z)return;h.current&&(h.current.value="");let Y=z.name.endsWith(".csv"),U=z.name.endsWith(".json");if(!Y&&!U){Spicetify.showNotification("Unsupported file type. Use .csv or .json.",!0);return}o("importing"),d({current:0,total:0});try{let W=await z.text(),L;if(Y?L=await bd(W):L=await wd(W),L.events.length===0&&L.errors===0){Spicetify.showNotification("Import failed: file contains no events",!0),o("idle");return}d({current:0,total:L.events.length});let q=500,X=0,Q=0,Z=L.errors,ie=[...L.errorDetails];for(let Se=0;Se<L.events.length;Se+=q){let le=L.events.slice(Se,Se+q),Ce=await Sd(le);X+=Ce.imported,Q+=Ce.skipped,Z+=Ce.errors,ie=ie.concat(Ce.errorDetails),d({current:Math.min(Se+q,L.events.length),total:L.events.length}),await new Promise(Fe=>setTimeout(Fe,0))}Be.invalidate(),window.dispatchEvent(new CustomEvent(ve.PLAY_RECORDED)),g({imported:X,skipped:Q,errors:Z,errorDetails:ie.slice(0,10)}),o("complete")}catch(W){let L=W instanceof Error?W.message:"Unknown import error";Spicetify.showNotification(L,!0),o("idle"),console.error("[DataTab] Import error:",W)}},k=()=>{o("idle"),g(null)},x=async()=>{try{let _=Ne.getActive(),z=_?.getSupportedPeriods().find(U=>U.id.endsWith("all-time")||U.label==="All Time")??Dt[4],Y=await _?.calculateStats(z);if(!Y){Spicetify.showNotification("No active provider",!0);return}Ks(JSON.stringify(Y,null,2),"listening-stats.json","application/json")}catch(_){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export JSON error:",_)}},P=async()=>{try{let _=Ne.getActive(),z=_?.getSupportedPeriods().find(L=>L.id.endsWith("all-time")||L.label==="All Time")??Dt[4],Y=await _?.calculateStats(z);if(!Y){Spicetify.showNotification("No active provider",!0);return}let U=`Rank,Track,Artist,Album,Plays,Duration
`,W=Y.topTracks.map(L=>`${L.rank},"${L.trackName.replace(/"/g,'""')}","${L.artistName.replace(/"/g,'""')}","${L.albumName.replace(/"/g,'""')}",${L.count},${L.durationMs}`).join(`
`);Ks(U+W,"listening-stats.csv","text/csv")}catch(_){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export CSV error:",_)}},O=async()=>{try{let _={trackUri:"spotify:track:test",trackName:"Test Track",artistName:"Test Artist",artistUri:"spotify:artist:test",albumName:"Test Album",albumUri:"spotify:album:test",durationMs:3e4,playedMs:3e4,startedAt:Date.now(),endedAt:Date.now(),type:"play"},z=await Ke.playEvents.add(_);await Ke.playEvents.delete(z),Spicetify.showNotification("Write test passed")}catch(_){Spicetify.showNotification("Write test failed. Check console.",!0),console.error("[DataTab] Test write error:",_)}},$=async()=>{try{await Ke.delete(),Be.invalidate(),await si.deleteDatabase(),localStorage.clear(),sessionStorage.clear(),Spicetify.showNotification("All data wiped"),a(!1),window.location.reload()}catch(_){Spicetify.showNotification("Wipe failed. Check console.",!0),console.error("[DataTab] Wipe error:",_)}};return Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},Spicetify.React.createElement("input",{ref:h,type:"file",accept:".csv,.json",style:{display:"none"},onChange:w,"aria-label":"Import play history file"}),i==="idle"&&Spicetify.React.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Import play history"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Accepts .csv or .json from a v1 export")),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>h.current?.click()},"Import Data")),i==="importing"&&Spicetify.React.createElement("div",{className:"import-progress"},Spicetify.React.createElement("span",{className:"import-progress-label"},"Importing... ",l.current," / ",l.total),Spicetify.React.createElement("progress",{className:"import-progress-bar",value:l.current,max:l.total})),i==="complete"&&m&&Spicetify.React.createElement("div",{className:"import-result-card"},Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--success"},m.imported),Spicetify.React.createElement("span",{className:"import-result-label"},"imported")),Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--neutral"},m.skipped),Spicetify.React.createElement("span",{className:"import-result-label"},"skipped as duplicates")),m.errors>0&&Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--error"},m.errors),Spicetify.React.createElement("span",{className:"import-result-label"},"errors")),m.errors>0&&m.errorDetails.length>0&&Spicetify.React.createElement("div",{className:"import-result-errors"},m.errorDetails.slice(0,3).map((_,z)=>Spicetify.React.createElement("div",{key:z,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}},_.length>80?`${_.slice(0,80)}\u2026`:_))),Spicetify.React.createElement("div",{className:"import-result-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:k},"Dismiss Results")))),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Refresh statistics cache"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:b},"Refresh Stats")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Export data as JSON"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:x},"Export JSON")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Export top tracks as CSV"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:P},"Export CSV")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Test IndexedDB write"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Verify database write access")),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:O},"Test Write")),Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},t?Spicetify.React.createElement("div",{style:{width:"100%"}},Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-sm, 14px)",color:"var(--spice-text)",marginBottom:"12px"}},"This permanently deletes all play history and cannot be undone. Are you sure?"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px"}},Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:$},"Delete Everything"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>a(!1)},"Keep My Data"))):Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:()=>a(!0)},"Wipe All Data")))}Pt();var{useState:bb,useRef:Fn,useEffect:kd,useCallback:ir}=Spicetify.React,wb=8;function Bn(e){let{order:t,onReorder:a}=e,i=e.orientation??"vertical",[o,l]=bb({isDragging:!1,activeId:null,dropSlotIndex:null}),d=Fn(null),m=Fn(0),g=Fn(0),h=Fn(new Map),b=Fn(t);kd(()=>{b.current=t},[t]);let w=ir((U,W)=>{W?h.current.set(U,W):h.current.delete(U)},[]),k=ir((U,W)=>{let L=b.current;if(i==="grid"){for(let q=0;q<L.length;q++){let X=h.current.get(L[q]);if(!X)continue;let Q=X.getBoundingClientRect();if(U>=Q.left&&U<=Q.right&&W>=Q.top&&W<=Q.bottom){let Z=(Q.left+Q.right)/2;return U<Z?q:q+1}}return L.length-1}for(let q=0;q<L.length;q++){let X=h.current.get(L[q]);if(!X)continue;let Q=X.getBoundingClientRect();if(i==="horizontal"){let Z=(Q.left+Q.right)/2;if(U<Z)return q}else{let Z=(Q.top+Q.bottom)/2;if(W<Z)return q}}return L.length-1},[i]),x=ir(()=>{d.current=null,m.current=0,g.current=0,l({isDragging:!1,activeId:null,dropSlotIndex:null})},[]),P=ir(U=>{if(!d.current)return;let W=U.clientX-d.current.x,L=U.clientY-d.current.y;m.current=W,g.current=L,l(q=>{let X=Math.hypot(W,L);return q.isDragging?{...q,dropSlotIndex:k(U.clientX,U.clientY)}:X<wb?q:{isDragging:!0,activeId:q.activeId,dropSlotIndex:k(U.clientX,U.clientY)}})},[k]),O=ir(()=>{l(U=>{if(U.isDragging&&U.activeId&&U.dropSlotIndex!=null){let W=b.current,L=W.indexOf(U.activeId);if(L>=0&&L!==U.dropSlotIndex){let q=[...W],[X]=q.splice(L,1);q.splice(U.dropSlotIndex,0,X),a(q)}}return{isDragging:!1,activeId:null,dropSlotIndex:null}}),d.current=null,m.current=0,g.current=0},[a]),$=ir(()=>x(),[x]),_=ir(U=>{U.key==="Escape"&&x()},[x]);kd(()=>(window.addEventListener("pointermove",P),window.addEventListener("pointerup",O),window.addEventListener("pointercancel",$),window.addEventListener("keydown",_),()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",O),window.removeEventListener("pointercancel",$),window.removeEventListener("keydown",_)}),[P,O,$,_]);let z=ir(U=>W=>{b.current.includes(U)&&(d.current={x:W.clientX,y:W.clientY},m.current=0,g.current=0,l({isDragging:!1,activeId:U,dropSlotIndex:null}))},[]),Y=ir(U=>{if(!o.isDragging||o.activeId!==U)return;let W;return i==="horizontal"?W=`translate3d(${m.current}px, 0, 0)`:i==="grid"?W=`translate3d(${m.current}px, ${g.current}px, 0)`:W=`translate3d(0, ${g.current}px, 0)`,{transform:W,opacity:.4}},[o.isDragging,o.activeId,i]);return{dragState:o,onItemPointerDown:z,registerItem:w,getItemStyle:Y}}var{React:Ck}=Spicetify;function Td({id:e,label:t,dragHandleProps:a,style:i,children:o}){return Spicetify.React.createElement("div",{className:"sortable-row","data-row-id":e,style:i},Spicetify.React.createElement("button",{type:"button",className:"settings-drag-handle","aria-label":`Drag ${t}`,onPointerDown:l=>a.onPointerDown(l.nativeEvent),dangerouslySetInnerHTML:{__html:Vu}}),Spicetify.React.createElement("div",{className:"sortable-row-label"},t),Spicetify.React.createElement("div",{className:"sortable-row-toggle"},o))}var{React:_k}=Spicetify;function Ed({id:e,label:t,tileDragProps:a,style:i,children:o}){return Spicetify.React.createElement("div",{className:"sortable-tile","data-tile-id":e,style:i,onPointerDown:d=>a.onPointerDown(d.nativeEvent)},Spicetify.React.createElement("div",{className:"sortable-tile-label"},t),Spicetify.React.createElement("div",{className:"sortable-tile-toggle",onPointerDown:d=>d.stopPropagation()},o))}var{useState:Qs,useRef:Sb,useCallback:zn,useEffect:xb}=Spicetify.React,kb={overview:"Overview","top-genres":"Top Genres","top-lists":"Top Lists",activity:"Activity",consistency:"Consistency","recently-played":"Recently Played"},Tb=[3,5,10];function Ad({onPrefsChanged:e,onRestartTour:t,announcementDismissKey:a=null}){let[i,o]=Qs(()=>nt()),[l,d]=Qs(null),m=Sb(new Map),g=zn(()=>{e(),window.dispatchEvent(new CustomEvent(ve.PREFS_CHANGED))},[e]),h=N=>{Oe("itemsPerSection",N),o({...i,itemsPerSection:N}),g()},b=N=>{Oe("playCountVariant",N),N==="off"&&Oe("playCountShowPeriodStreams",!1),o({...i,playCountVariant:N,...N==="off"?{playCountShowPeriodStreams:!1}:{}}),g()},w=N=>{Oe("playCountShowPeriodStreams",N),o({...i,playCountShowPeriodStreams:N}),g()},k=N=>{Oe("use24HourTime",N),o({...i,use24HourTime:N}),g()},x=N=>{N?(Oe("showAnnouncementBanner",!0),Oe("announcementBannerHiddenForDismissKey","")):(Oe("showAnnouncementBanner",!1),Oe("announcementBannerHiddenForDismissKey",a??"")),o(nt()),g()},P=()=>{d({hiddenSections:[...i.hiddenSections],sectionOrder:[...i.sectionOrder],columnOrder:[...i.columnOrder],overviewOrder:{local:[...i.overviewOrder.local],statsfm:[...i.overviewOrder.statsfm]}});let N=[...Un],Ee=[...qa],me={local:[...Mr.local],statsfm:[...Mr.statsfm]};Oe("hiddenSections",[]),Oe("sectionOrder",N),Oe("columnOrder",Ee),Oe("overviewOrder",me),o(De=>({...De,hiddenSections:[],sectionOrder:N,columnOrder:Ee,overviewOrder:me})),g()},O=()=>{l&&(Oe("hiddenSections",l.hiddenSections),Oe("sectionOrder",l.sectionOrder),Oe("columnOrder",l.columnOrder),Oe("overviewOrder",l.overviewOrder),o(N=>({...N,hiddenSections:l.hiddenSections,sectionOrder:l.sectionOrder,columnOrder:l.columnOrder,overviewOrder:l.overviewOrder})),d(null),g())},$=(N,Ee)=>{let me=Ee?i.hiddenSections.filter(De=>De!==N):[...i.hiddenSections,N];Oe("hiddenSections",me),o({...i,hiddenSections:me}),g()},_=zn(N=>{let Ee=i.sectionOrder.filter(De=>!N.includes(De)),me=[...N,...Ee];Oe("sectionOrder",me),o(De=>({...De,sectionOrder:me})),g()},[i.sectionOrder,g]),[z,Y]=Qs(()=>Ne.getActiveId()==="statsfm"?"statsfm":"local"),U=Ne.getActive()?.getProviderInfo().capabilities??{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"},W=new Set(Un),L=new Set(ja(U).map(N=>N.id)),q=i.sectionOrder.filter(N=>W.has(N)&&L.has(N)),X=Bn({order:q,onReorder:_});xb(()=>{let N=()=>{let Ee=Ne.getActiveId();Y(Ee==="statsfm"?"statsfm":"local")};return window.addEventListener(ve.PROVIDER_CHANGED,N),()=>window.removeEventListener(ve.PROVIDER_CHANGED,N)},[]);let Q=i.overviewOrder[z],Z=Q.slice(0,4),ie=Q.slice(4),Se=zn(N=>{let Ee=[...N,...i.overviewOrder[z].slice(4)],me={...i.overviewOrder,[z]:Ee};Oe("overviewOrder",me),o(De=>({...De,overviewOrder:me})),g()},[i.overviewOrder,z,g]),le=Bn({order:Z,orientation:"grid",onReorder:Se}),Ce=zn(N=>{let Ee=[...i.overviewOrder[z].slice(0,4),...N],me={...i.overviewOrder,[z]:Ee};Oe("overviewOrder",me),o(De=>({...De,overviewOrder:me})),g()},[i.overviewOrder,z,g]),Fe=Bn({order:ie,orientation:"horizontal",onReorder:Ce}),Ie=zn(N=>{Oe("columnOrder",N),o(Ee=>({...Ee,columnOrder:N})),g()},[g]),Te=Bn({order:i.columnOrder,orientation:"horizontal",onReorder:Ie}),F=i.hiddenSections.includes("top-lists"),se=Spicetify.ReactComponent.Toggle,V=(N,Ee,me,De)=>{let Le=!i.hiddenSections.includes(N),je=Ee[N]??N,K=me.dragState.isDragging&&me.dragState.dropSlotIndex!=null&&De[me.dragState.dropSlotIndex]===N&&me.dragState.activeId!==N;return Spicetify.React.createElement("div",{key:N,ref:fe=>me.registerItem(N,fe),style:K?{outline:"2px solid var(--spice-button-active)",outlineOffset:"-2px",borderRadius:"6px"}:void 0},Spicetify.React.createElement(Ed,{id:N,label:je,tileDragProps:{onPointerDown:me.onItemPointerDown(N)},style:me.getItemStyle(N)},se?Spicetify.React.createElement(se,{value:Le,onSelected:fe=>$(N,fe)}):Spicetify.React.createElement("input",{type:"checkbox",checked:Le,onChange:fe=>$(N,fe.currentTarget.checked)})))};return Spicetify.React.createElement("div",{className:"display-tab"},Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Items per section"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px"}},Tb.map(N=>Spicetify.React.createElement("button",{key:N,type:"button",className:i.itemsPerSection===N?"btn-primary":"btn-secondary",onClick:()=>h(N),style:{padding:"4px 12px",minWidth:"40px"}},N)))),l&&Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-sublabel"},"Layout reset to defaults"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"undo-reset-layout",onClick:O,style:{padding:"4px 12px"}},"Undo")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"24-hour time"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Show timestamps in 24-hour format")),se?Spicetify.React.createElement(se,{value:i.use24HourTime,onSelected:k}):Spicetify.React.createElement("input",{type:"checkbox",checked:i.use24HourTime,onChange:N=>k(N.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Announcement banner"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Show the banner when one is available (GitHub or version splash). Turning off hides it until the announcement changes or you turn this back on.")),se?Spicetify.React.createElement(se,{value:i.showAnnouncementBanner,onSelected:x}):Spicetify.React.createElement("input",{type:"checkbox",checked:i.showAnnouncementBanner,onChange:N=>x(N.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Playbar play count"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Widget style for now-playing track count")),Spicetify.React.createElement("div",{"data-testid":"play-count-variant",style:{display:"flex",gap:"8px"}},["pill","bubble","minimal","off"].map(N=>Spicetify.React.createElement("button",{key:N,type:"button",className:i.playCountVariant===N?"btn-primary":"btn-secondary",onClick:()=>b(N),style:{padding:"4px 12px",minWidth:"40px"}},N==="off"?"Off":N.charAt(0).toUpperCase()+N.slice(1))))),i.playCountVariant!=="off"&&Spicetify.React.createElement("div",{className:"settings-row","data-testid":"play-count-extra-context"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Extra play context"),Spicetify.React.createElement("div",{className:"settings-sublabel"},z==="statsfm"?Spicetify.React.createElement(Spicetify.React.Fragment,null,"Also show streams for your current dashboard period (stats.fm top tracks)."):Spicetify.React.createElement(Spicetify.React.Fragment,null,"When this track has ",Spicetify.React.createElement("strong",null,"no qualifying plays")," in your database yet, show a"," ",Spicetify.React.createElement("strong",null,"New play")," hint on the playbar (skips excluded)."))),se?Spicetify.React.createElement(se,{value:i.playCountShowPeriodStreams,onSelected:w}):Spicetify.React.createElement("input",{type:"checkbox",checked:i.playCountShowPeriodStreams,onChange:N=>w(N.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Layout"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Reset section and card arrangement to defaults")),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"reset-layout",onClick:P,style:{padding:"4px 12px"}},"Reset layout")),Spicetify.React.createElement("div",{style:{marginTop:"4px"},"data-drag-active":X.dragState.isDragging?"true":"false"},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Visible sections"),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":X.dragState.isDragging&&X.dragState.dropSlotIndex===0?"true":"false"}),q.map((N,Ee)=>{let me=!i.hiddenSections.includes(N),De=kb[N]??N;return Spicetify.React.createElement(Spicetify.React.Fragment,{key:N},Spicetify.React.createElement("div",{ref:Le=>{Le?m.current.set(N,Le):m.current.delete(N),X.registerItem(N,Le)}},Spicetify.React.createElement(Td,{id:N,label:De,dragHandleProps:{onPointerDown:X.onItemPointerDown(N)},style:X.getItemStyle(N)},se?Spicetify.React.createElement(se,{value:me,onSelected:Le=>$(N,Le)}):Spicetify.React.createElement("input",{type:"checkbox",checked:me,onChange:Le=>$(N,Le.currentTarget.checked)}))),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":X.dragState.isDragging&&X.dragState.dropSlotIndex===Ee+1?"true":"false"}))})),Spicetify.React.createElement("div",{style:{marginTop:"16px"},key:z},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Overview details"),Spicetify.React.createElement("div",{className:"overview-settings-top"},Spicetify.React.createElement("div",{className:"overview-settings-hero","data-testid":"overview-settings-hero"},Spicetify.React.createElement("div",{className:"sortable-tile-label"},"Total Time"),Spicetify.React.createElement("div",{className:"overview-settings-hero-sub"},"Fixed")),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--2x2"},Z.map(N=>V(N,Wn,le,Z)))),ie.length>0&&Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3","data-testid":"overview-bottom-row"},ie.map(N=>V(N,Wn,Fe,ie)))),Spicetify.React.createElement("div",{"data-testid":"top-lists-columns-subsection",style:{marginTop:"16px",opacity:F?.4:1,pointerEvents:F?"none":"auto"}},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Top Lists columns"),F&&Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"4px"}},"Top Lists is hidden. Re-enable it above to manage individual columns."),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3"},i.columnOrder.map(N=>V(N,Mu,Te,i.columnOrder)))),t&&Spicetify.React.createElement("div",{className:"settings-row",style:{marginTop:"16px"}},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Guided tour"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Walk through dashboard features")),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"restart-tour",onClick:t,style:{padding:"4px 12px"}},"Restart")))}Ca();Pt();st();gr();Cn();var{useState:Bt}=Spicetify.React,Pd={not_found:"Username not found. Check your stats.fm customId.",private:"Profile is private. Visit stats.fm settings and set your profile to public.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function Rd(){let e=localStorage.getItem(ce.STATSFM_CONFIG);return e?JSON.parse(e):null}function Eb(){let e=localStorage.getItem(ce.LASTFM_CONFIG);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function Ab(e){let a=e.getAll().find(l=>l.id==="statsfm")?.capabilities.tier==="plus"?"plus":"free";return{tier:a,tierClass:a==="plus"?"tier-badge--plus":"tier-badge--free",tierLabel:a==="plus"?"Plus":"Free"}}function Nd(){let[e,t]=Bt(""),[a,i]=Bt(()=>Rd()?"connected":"idle"),[o,l]=Bt(()=>Rd()),[d,m]=Bt(null),[g,h]=Bt(!1),[b,w]=Bt(null),[k,x]=Bt(()=>Eb()),[P,O]=Bt(!1),[$,_]=Bt(""),[z,Y]=Bt(""),[U,W]=Bt(null),L=async()=>{if(!e.trim())return;i("connecting"),m(null);let F=await $r(e.trim());if(!F.valid){m(Pd[F.reason]??"Connection failed. Check the console for details."),i("error");return}let se={username:e.trim(),isPlus:F.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(ce.STATSFM_CONFIG,JSON.stringify(se)),await tr.init(),Be.invalidate(),Ne.setActive("statsfm"),window.dispatchEvent(new CustomEvent(ve.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)),l(se),i("connected")},q=()=>{localStorage.removeItem(ce.STATSFM_CONFIG),Be.invalidate(),Ne.setActive("local"),window.dispatchEvent(new CustomEvent(ve.STATSFM_DISCONNECTED)),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)),i("idle"),t(""),l(null),m(null)},X=async()=>{if(!o)return;let F=o.isPlus;h(!0),w(null);let se=await $r(o.username);if(!se.valid){w(Pd[se.reason]??"Validation failed. Check the console for details."),h(!1);return}let V={...o,isPlus:se.isPlus,lastValidated:Date.now()};localStorage.setItem(ce.STATSFM_CONFIG,JSON.stringify(V)),await tr.init(),l(V),h(!1),window.dispatchEvent(new CustomEvent(ve.STATSFM_PROFILE_REFRESHED)),F!==se.isPlus&&(Be.invalidate(),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)))},Q=async()=>{let F=z.trim()||localStorage.getItem(ce.LASTFM_API_KEY)||"";if(!(!F||!$.trim())){O(!0),W(null);try{let se=await dl(F,$.trim()),V={apiKey:F,username:se.username};localStorage.setItem(ce.LASTFM_CONFIG,JSON.stringify(V)),localStorage.setItem(ce.LASTFM_API_KEY,F),await Pn.init(),await si.invalidate(),Be.invalidate(),Ne.setActive("lastfm"),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)),x(V),O(!1)}catch(se){W(String(se)),O(!1)}}},Z=()=>{localStorage.removeItem(ce.LASTFM_CONFIG),Be.invalidate(),Ne.setActive("local"),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED)),x(null),_(""),Y(""),W(null)},ie=F=>{Be.invalidate(),Ne.setActive(F),window.dispatchEvent(new CustomEvent(ve.PROVIDER_CHANGED))},Se=Ne.getAll(),le=Ne.getActiveId(),Ce=o!==null,Fe=k!==null,{tierClass:Ie,tierLabel:Te}=Ab(Ne);return Spicetify.React.createElement("div",null,Spicetify.React.createElement("h3",{className:"section-header"},"Active Provider"),Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"12px"}},"Select the data source for your listening statistics"),Spicetify.React.createElement("div",{role:"radiogroup","aria-label":"Active provider"},Se.map(F=>{let se=F.id==="statsfm"&&!Ce||F.id==="lastfm"&&!Fe;return Spicetify.React.createElement("div",{key:F.id,className:`provider-radio-row ${le===F.id?"active":""}`,role:"radio","aria-checked":le===F.id,"aria-label":F.name,onClick:()=>{se||le!==F.id&&ie(F.id)},style:se?{opacity:.5,pointerEvents:"none"}:void 0},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},F.name),Spicetify.React.createElement("div",{className:"settings-sublabel"},F.description)))})),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"16px"}},"stats.fm Account"),(a==="idle"||a==="connecting"||a==="error")&&Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Use your stats.fm customId, not your display name"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:e,onChange:F=>t(F.target.value),onKeyDown:F=>{F.key==="Enter"&&a!=="connecting"&&L()},placeholder:"Enter your stats.fm username",disabled:a==="connecting","aria-label":"stats.fm username",style:{flex:1,padding:"8px 12px",borderRadius:"4px",border:"1px solid var(--spice-misc)",background:"var(--spice-main)",color:"var(--spice-text)",fontSize:"var(--font-size-sm, 14px)"}}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:L,disabled:a==="connecting","aria-busy":a==="connecting",style:a==="connecting"?{opacity:.6}:void 0},a==="connecting"?"Connecting...":"Connect Account")),a==="error"&&d&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},d)),a==="connected"&&o&&Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},o.username),Spicetify.React.createElement("span",{className:`tier-badge ${Ie}`},Te)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Connected since ",new Date(o.connectedAt).toLocaleDateString()),Spicetify.React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px",alignItems:"center"}},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:X,disabled:g,"aria-busy":g,"aria-label":"Re-validate stats.fm tier status",style:g?{opacity:.6}:void 0},g?"Re-validating...":"Re-validate"),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:q,"aria-label":"Disconnect stats.fm account"},"Disconnect")),b&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},b)),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"16px"}},"Last.fm Account"),k?Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},k.username)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Last.fm API key is configured and active."),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:Z,style:{marginTop:"8px",alignSelf:"flex-start"}},"Disconnect")):Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Connect your Last.fm account to use it as a stats provider (also enables World Charts data)."),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:$,onChange:F=>_(F.target.value),onKeyDown:F=>{F.key==="Enter"&&!P&&Q()},placeholder:"Enter your Last.fm username",disabled:P,"aria-label":"Last.fm username",style:{flex:1,padding:"8px 12px",borderRadius:"4px",border:"1px solid var(--spice-misc)",background:"var(--spice-main)",color:"var(--spice-text)",fontSize:"var(--font-size-sm, 14px)"}}),Spicetify.React.createElement("input",{type:"text",value:z,onChange:F=>Y(F.target.value),onKeyDown:F=>{F.key==="Enter"&&!P&&Q()},placeholder:"Enter your Last.fm API key",disabled:P,"aria-label":"Last.fm provider API key",style:{flex:1,padding:"8px 12px",borderRadius:"4px",border:"1px solid var(--spice-misc)",background:"var(--spice-main)",color:"var(--spice-text)",fontSize:"var(--font-size-sm, 14px)"}}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:Q,disabled:P||!$.trim()||!(z.trim()||localStorage.getItem(ce.LASTFM_API_KEY)),"aria-busy":P,style:P?{opacity:.6}:void 0},P?"Connecting...":"Connect Account")),U&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},U)))}st();var Pb=3e4;function Cd(){try{let e=localStorage.getItem(ce.PLAY_THRESHOLD);if(e!==null){let t=parseInt(e,10);if(!Number.isNaN(t)&&t>=0&&t<=6e4)return t}}catch{}return Pb}function Id(e){try{let t=Math.max(0,Math.min(6e4,e));localStorage.setItem(ce.PLAY_THRESHOLD,String(t))}catch{}}function _d(){try{return localStorage.getItem(ce.TRACKING_PAUSED)==="1"}catch{return!1}}function Dd(e){try{e?localStorage.setItem(ce.TRACKING_PAUSED,"1"):localStorage.removeItem(ce.TRACKING_PAUSED)}catch{}}function Od(){try{return localStorage.getItem(ce.SKIP_REPEATS)==="1"}catch{return!1}}function Ld(e){try{e?localStorage.setItem(ce.SKIP_REPEATS,"1"):localStorage.removeItem(ce.SKIP_REPEATS)}catch{}}Pt();st();function $d({stops:e,value:t,onSelect:a,formatLabel:i,labelAt:o}){let l=Math.max(0,e.indexOf(t)),d=100/e.length,m={position:"absolute",top:"2px",bottom:"2px",left:`${l*d}%`,width:`${d}%`,borderRadius:"3px",background:"var(--spice-button)",opacity:.85,transition:"left 0.2s ease, width 0.2s ease",pointerEvents:"none"},g=Spicetify.React;return g.createElement("div",{className:"segmented-control"},g.createElement("div",{className:"segmented-control-indicator",style:m}),...e.map((h,b)=>{let w=!o||o.includes(h)||b===l,k=i?i(h):`${h/1e3}s`;return g.createElement("div",{key:h,className:`segmented-control-stop${b===l?" active":""}`,onClick:()=>a(h),title:k},w?k:null)}))}var Rb=[0,5e3,1e4,15e3,2e4,25e3,3e4,35e3,4e4,45e3,5e4,55e3,6e4],{useState:li}=Spicetify.React;function Nb(){return localStorage.getItem(ce.LOGGING)==="true"}function Cb(e){localStorage.setItem(ce.LOGGING,String(e))}function Md({onPrefsChanged:e}){let[t,a]=li(()=>_d()),[i,o]=li(()=>Od()),[l,d]=li(()=>Cd()),[m,g]=li(()=>Nb()),h=P=>{a(P),Dd(P),window.dispatchEvent(new CustomEvent(P?ve.TRACKING_PAUSED:ve.TRACKING_RESUMED)),e()},b=P=>{o(P),Ld(P),e()},w=P=>{d(P),Id(P),e()},k=P=>{g(P),Cb(P),e()},x=Spicetify.ReactComponent.Toggle;return Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Pause Tracking"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Temporarily stop recording plays")),x?Spicetify.React.createElement(x,{value:t,onSelected:h}):Spicetify.React.createElement("input",{type:"checkbox",checked:t,onChange:P=>h(P.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Skip Repeats"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Don't count consecutive plays of the same track")),x?Spicetify.React.createElement(x,{value:i,onSelected:b}):Spicetify.React.createElement("input",{type:"checkbox",checked:i,onChange:P=>b(P.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"stretch"}},Spicetify.React.createElement("div",{style:{marginBottom:"8px"}},Spicetify.React.createElement("div",{className:"settings-label"},"Play Threshold"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Minimum time to count a track as played")),Spicetify.React.createElement($d,{stops:Rb,value:l,onSelect:w,labelAt:[0,15e3,3e4,45e3,6e4]})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Console Logging"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Log tracked events to browser console")),x?Spicetify.React.createElement(x,{value:m,onSelected:k}):Spicetify.React.createElement("input",{type:"checkbox",checked:m,onChange:P=>k(P.currentTarget.checked)})))}var{useState:Ib,useEffect:_b}=Spicetify.React,Db={tracking:"Tracking",display:"Display",data:"Data Management",providers:"Providers",about:"About"};function Ud({onClose:e,onRefresh:t,onPrefsChanged:a,onRestartTour:i,onOpenUpdates:o,onReceiveBetaUpdatesChanged:l,initialTab:d="tracking",appVersion:m,announcementDismissKey:g=null}){let[h,b]=Ib(d);_b(()=>{let k=x=>{x.key==="Escape"&&e()};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[e]);let{createPortal:w}=Spicetify.ReactDOM;return w(Spicetify.React.createElement("div",{className:"settings-overlay",onClick:k=>{k.target.classList.contains("settings-overlay")&&e()}},Spicetify.React.createElement("div",{className:"settings-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Settings"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:e,"aria-label":"Close settings",dangerouslySetInnerHTML:{__html:tn}})),Spicetify.React.createElement("div",{className:"settings-tabs",role:"tablist"},["tracking","display","data","providers","about"].map(k=>Spicetify.React.createElement("button",{type:"button",key:k,className:`settings-tab ${h===k?"active":""}`,role:"tab","aria-selected":h===k,onClick:()=>b(k)},Db[k]))),h==="tracking"&&Spicetify.React.createElement(Md,{onPrefsChanged:a}),h==="display"&&Spicetify.React.createElement(Ad,{onPrefsChanged:a,onRestartTour:i,announcementDismissKey:g}),h==="data"&&Spicetify.React.createElement(xd,{onRefresh:t}),h==="providers"&&Spicetify.React.createElement(Nd,null),h==="about"&&Spicetify.React.createElement(hd,{version:m,onOpenUpdates:o,onPrefsChanged:a,onReceiveBetaUpdatesChanged:l}))),document.body)}function Wd({topGenres:e,onGenreClick:t,activeGenre:a}){if(!e||e.length===0)return null;let i=e.slice(0,6),o=e.reduce((l,d)=>l+d.count,0)||1;return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Composition"),Spicetify.React.createElement("h2",{className:"section-title"},"Top Genres")),Spicetify.React.createElement("div",{className:"top-genres-list"},i.map((l,d)=>{let m=o>0?l.count/o*100:0;return Spicetify.React.createElement("div",{key:l.genre,className:"top-genres-row"},Spicetify.React.createElement("button",{className:`top-genres-name${a===l.genre?" top-genres-name--active":""}`,onClick:()=>t?.(l.genre),type:"button"},l.genre),Spicetify.React.createElement("div",{className:"top-genres-bar-track"},Spicetify.React.createElement("div",{className:`top-genres-bar${d===0?" peak":""}`,style:{width:`${m}%`}})),Spicetify.React.createElement("span",{className:"top-genres-pct"},Math.round(l.count/o*100),"%"))})))}var{React:bT}=Spicetify;function Hn(e){return e===1?"rank-gold":e===2?"rank-silver":e===3?"rank-bronze":""}function eo(){return Spicetify.React.createElement("div",null,Array.from({length:5}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"top-list-row",style:{marginBottom:6}},Spicetify.React.createElement(Ls,{size:20}),Spicetify.React.createElement(lt,{width:44,height:44}),Spicetify.React.createElement("div",{style:{flex:1}},Spicetify.React.createElement(lt,{width:"80%",height:11,style:{marginBottom:6}}),Spicetify.React.createElement(lt,{width:"55%",height:9})))))}function Fd({stats:e,loading:t,loadingByColumn:a,hiddenSections:i,onGenreClick:o,activeGenre:l}){let d=nt(),m=d.columnOrder.filter(h=>!i.includes(h));if(m.length===0)return null;let g={"top-tracks":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-tracks",key:"top-tracks"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Most played"),Spicetify.React.createElement("h2",{className:"section-title"},"Tracks")),t||a?.tracks?Spicetify.React.createElement(eo,null):e?.topTracks.slice(0,d.itemsPerSection).map(h=>{let b=Ye(h.albumArt);return Spicetify.React.createElement("div",{key:h.trackUri||`unknown-track-${h.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Et(h.trackUri),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&Et(h.trackUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Hn(h.rank)}`},h.rank),b?Spicetify.React.createElement("img",{src:b,alt:"",className:"track-art"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.trackName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.artistName)),!e?.isFreeTier||h.durationMs>0?Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",color:"rgba(var(--spice-rgb-text), 0.55)",flexShrink:0}},Spicetify.React.createElement("span",{style:{fontSize:11,fontVariantNumeric:"tabular-nums"}},Du(h.durationMs))):null)})),"top-artists":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-artists",key:"top-artists"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Artists")),t||a?.artists?Spicetify.React.createElement(eo,null):e?.topArtists.slice(0,d.itemsPerSection).map(h=>{let b=h.genres?.[0],w=Ye(h.imageUrl??void 0);return Spicetify.React.createElement("div",{key:h.artistUri||`unknown-artist-${h.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Et(h.artistUri),onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&Et(h.artistUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Hn(h.rank)}`},h.rank),w?Spicetify.React.createElement("img",{src:w,alt:"",className:"track-art track-art--round"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.artistName),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},(!e?.isFreeTier||h.count>0)&&Spicetify.React.createElement("span",{style:{fontVariantNumeric:"tabular-nums"}},ot(h.count)," plays"),b&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("span",{style:{opacity:.4}},"\xB7"),Spicetify.React.createElement("span",{role:"button",tabIndex:0,onClick:k=>{k.stopPropagation(),o?.(b)},onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&(k.stopPropagation(),o?.(b))},style:{color:l===b?"var(--spice-button)":"rgba(var(--spice-rgb-text), 0.7)",cursor:"pointer"}},b)))))})),"top-albums":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-albums",key:"top-albums"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Albums")),t||a?.albums?Spicetify.React.createElement(eo,null):e?.topAlbums.slice(0,d.itemsPerSection).map(h=>{let b=Ye(h.albumArt);return Spicetify.React.createElement("div",{key:h.albumUri||`unknown-album-${h.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Et(h.albumUri),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&Et(h.albumUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Hn(h.rank)}`},h.rank),b?Spicetify.React.createElement("img",{src:b,alt:"",className:"track-art"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h.albumName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontVariantNumeric:"tabular-nums"}},h.artistName,(!e?.isFreeTier||h.count>0)&&Spicetify.React.createElement(Spicetify.React.Fragment,null," \xB7"," ",ot(h.count)," plays"))))}))};return Spicetify.React.createElement("div",{className:"top-lists-grid"},m.map(h=>g[h]?.()??null))}var Bd=`curl -fsSL ${er}/install.sh | bash`,zd=`irm ${er}/install.ps1 | iex`,Hd=`LISTENING_STATS_PRERELEASE=1 curl -fsSL ${er}/install.sh | bash`,Gd=`$env:LISTENING_STATS_PRERELEASE = "1"; irm ${er}/install.ps1 | iex`;async function Kd(){try{let e=await fetch(`${er}/CHANGELOG.md?t=${Date.now()}`,{cache:"no-store"});return e.ok?await e.text():null}catch{return null}}function jd(e){let t=e.replace(/\r\n/g,`
`).split(`
`),a=[],i=!1;function o(){i&&(a.push("</p>"),i=!1)}function l(d){let m=Ob(d);return m=m.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),m=m.replace(/`([^`]+)`/g,"<code>$1</code>"),m=m.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),m}for(let d of t){let g=d.trimEnd().trim();if(g===""){o();continue}let h=g.match(/^##+\s+(.*)$/);if(h){o(),a.push(`<h3>${l(h[1]??"")}</h3>`);continue}i?a.push("<br />"):(a.push("<p>"),i=!0),a.push(l(g))}return o(),a.join("")}function Ob(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var{useState:to,useEffect:ro,useCallback:Vd,useRef:Lb}=Spicetify.React;async function $b(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select();let a=document.execCommand("copy");return document.body.removeChild(t),a}catch{return!1}}function qd({open:e,onClose:t,updateInfo:a,appVersion:i,receiveBetaUpdates:o,onReceiveBetaUpdatesChange:l}){let d=Spicetify.ReactComponent.Toggle,[m,g]=to(null),[h,b]=to(null),[w,k]=to(null),x=Lb(null),P=o?Hd:Bd,O=o?Gd:zd;ro(()=>{if(!e)return;let L=!1;return g(null),b(null),k(null),Kd().then(q=>{L||(q===null?b("Could not load changelog."):g(q))}),()=>{L=!0}},[e]),ro(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]),ro(()=>{k(null),x.current!==null&&(window.clearTimeout(x.current),x.current=null)},[o]);let $=Vd(()=>{Nu(24),t()},[t]),_=Vd(async L=>{await $b(L==="bash"?P:O)?(x.current!==null&&window.clearTimeout(x.current),k(L),x.current=window.setTimeout(()=>{k(null),x.current=null},2500),Spicetify.showNotification(L==="bash"?"Copied (macOS / Linux).":"Copied (Windows).")):Spicetify.showNotification("Could not copy.",!0)},[P,O]),{createPortal:z}=Spicetify.ReactDOM;if(!e)return null;let Y=m!==null?jd(m.slice(0,12e4)):"",U=a!=null&&a.remoteTag===null,W=a==null?"Could not compare versions.":U?`No release metadata (this build is v${i}).`:a.updateAvailable?`Update available: ${a.remoteVersion} (you have ${a.localVersion}).`:`Up to date (${a.localVersion}).`;return z(Spicetify.React.createElement("div",{className:"settings-overlay update-overlay",onClick:L=>{L.target.classList.contains("settings-overlay")&&t()}},Spicetify.React.createElement("div",{className:"settings-modal update-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Updates"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:t,"aria-label":"Close",dangerouslySetInnerHTML:{__html:tn}})),Spicetify.React.createElement("p",{className:"update-modal-status"},W),a?.updateAvailable&&a.prerelease?Spicetify.React.createElement("p",{className:"update-modal-note"},"That release is a GitHub pre-release."):null,Spicetify.React.createElement("div",{className:"update-modal-actions update-modal-actions-top"},a?.updateAvailable?Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:$},"Remind me later"):null,Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:t},"Close")),Spicetify.React.createElement("div",{className:"settings-row update-modal-pref-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Prereleases"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Include prereleases when checking for updates.")),d?Spicetify.React.createElement(d,{value:o,onSelected:l}):Spicetify.React.createElement("input",{type:"checkbox",checked:o,onChange:L=>l(L.currentTarget.checked)})),Spicetify.React.createElement("p",{className:"update-modal-note update-modal-install-short"},o?"Commands install the newest GitHub release that includes the zip (may be a pre-release). Bash needs jq or python3.":"Quit Spotify, paste one command, then restart Spotify."),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"macOS / Linux"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{_("bash")}},w==="bash"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},P)),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"Windows"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{_("powershell")}},w==="powershell"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},O)),Spicetify.React.createElement("p",{className:"settings-about-hint update-modal-repo-hint"},Spicetify.React.createElement("a",{className:"settings-inline-link",href:Qt,target:"_blank",rel:"noopener noreferrer"},"GitHub")," \xB7 ",Spicetify.React.createElement("a",{className:"settings-inline-link",href:`${Qt}/releases`,target:"_blank",rel:"noopener noreferrer"},"Releases")),Spicetify.React.createElement("h3",{className:"update-modal-changelog-title"},"Changelog"),h?Spicetify.React.createElement("p",{className:"update-modal-changelog-error"},h):null,Spicetify.React.createElement("div",{className:"update-modal-changelog markdown-lite",dangerouslySetInnerHTML:{__html:Y}}))),document.body)}st();xa();var Yd="https://mytopspotify.io/spotify-top-songs.json",Mb="https://mytopspotify.io/spotify-top-artists.json",no={Accept:"application/json","User-Agent":"Mozilla/5.0 (compatible; ListeningStats/2.x; +https://github.com/Xndr2/listening-stats)"};function Ub(e){if(!e?.trim())return"-";let t=e.replace(/[^\d]/g,"");if(!t)return e.trim();let a=Number(t);return Number.isFinite(a)?a>=1e6?`${(a/1e6).toFixed(1)}M listeners`:a>=1e3?`${Math.round(a/1e3)}K listeners`:`${a} listeners`:e.trim()}function Xd(e,t){return`${e.trim().toLowerCase()}|${t.trim().toLowerCase()}`}async function Jd(){let e=new Map,t=new Map;try{let a=await fetch(Yd,{headers:no});if(!a.ok)return{bySpotifyId:e,byTitleArtist:t};let o=(await a.json()).data??[];for(let l of o)l.image&&(l.spotifyId&&e.set(l.spotifyId,l.image),t.set(Xd(l.name,l.artist),l.image))}catch{}return{bySpotifyId:e,byTitleArtist:t}}function Zd(e,t){return e.map(a=>{if(a.artUrl)return a;if(a.spotifyTrackId){let o=t.bySpotifyId.get(a.spotifyTrackId);if(o)return{...a,artUrl:o}}let i=t.byTitleArtist.get(Xd(a.title,a.artist));return i?{...a,artUrl:i}:a})}async function Qd(){let e=await fetch(Yd,{headers:no});if(!e.ok)throw new Error(`mytop songs HTTP ${e.status}`);return((await e.json()).data??[]).slice(0,8).map((i,o)=>{let l=o+1;return{id:`mytop-t-${i.spotifyId??`mytop-t-${l}-${i.name}`}`,title:i.name,artist:i.artist,country:"GL",plays:"",delta:null,...i.spotifyId?{spotifyTrackId:i.spotifyId}:{},...i.image?{artUrl:i.image}:{}}})}async function ep(){let e=await fetch(Mb,{headers:no});if(!e.ok)throw new Error(`mytop artists HTTP ${e.status}`);return((await e.json()).data??[]).slice(0,8).map((i,o)=>({id:`mytop-a-${i.position??o+1}-${i.name}`,title:i.name,artist:"",country:"GL",plays:Ub(i.listeners),delta:null,...i.image?{artUrl:i.image}:{}}))}var Wb="https://api.stats.fm/api/v1",ao=10;function Gn(e){return e.toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g," ").trim()}function tp(e){return e.split(",")[0]?.trim()??""}function rp(e){return e?.trim()?`spotify:track:${e.trim()}`:null}function Fb(e){return e?.trim()?`spotify:artist:${e.trim()}`:null}function Bb(e){return e?.trim()?`spotify:album:${e.trim()}`:null}function zb(e){let t=rp(e.spotifyTrackId);if(!t)return!1;let a=Spicetify.Player;return typeof a.playUri=="function"?(a.playUri(t),!0):(Et(t),!0)}function io(e){e.spotifyTrackId&&zb(e)||ln(e,"track")}function ln(e,t){if(t==="track"){let i=rp(e.spotifyTrackId);if(i){Et(i);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(`${e.title} ${e.artist}`.trim())}`);return}if(t==="artist"){let i=Fb(e.spotifyArtistId);if(i){Et(i);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(e.title)}`);return}let a=Bb(e.spotifyAlbumId);if(a){Et(a);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(`${e.title} ${e.artist}`.trim())}`)}function ci(e){return e.spotifyTrackId?"Play in Spotify":"Open in Spotify search"}async function Hb(e){let t=await fetch(`${Wb}/tracks/${e}`,{headers:{Accept:"application/json"}});if(!t.ok)return null;let a=await t.json();return((a.item??a).externalIds?.spotify??[])[0]??null}function Gb(e,t,a){if(!e.length)return null;let i=Gn(t),o=Gn(tp(a)),l=e.find(m=>Gn(m.name)===i&&m.artists.some(g=>{let h=Gn(g.name);return h===o||h.includes(o)||o.includes(h)}));if(l)return l.id;let d=e.find(m=>Gn(m.name)===i);return d?d.id:e[0]?.id??null}async function Kb(e,t){let a=tp(t),i=a?[`track:${e} artist:${a}`,`${e} ${a}`]:[e];for(let o of i){let l=await Gt(`https://api.spotify.com/v1/search?q=${encodeURIComponent(o)}&type=track&limit=8`);if(!l.ok)continue;let d=Gb(l.data.tracks?.items??[],e,t);if(d)return d}return null}async function jb(e){if(e.spotifyTrackId)return e.spotifyTrackId;if(e.statsFmTrackId!=null){let t=await Hb(e.statsFmTrackId);if(t)return t}return e.artist?.trim()?Kb(e.title,e.artist):null}async function np(e,t){let a=Math.min(t?.max??ao,e.length),i=e.map(o=>({...o}));for(let o=0;o<a;o++){let l=i[o];if(l.spotifyTrackId)continue;let d=await jb(l);d&&(i[o]={...l,spotifyTrackId:d})}return i}var Vb="https://api.stats.fm/api/v1",qb=50,so={today:"today",week:"weeks"},Yb=["today","week"];function Kn(e){return Yb.includes(e)}function oo(e){return{ok:!1,status:503,message:`${e==="month"?"This month":e==="lifetime"?"All-time":e} charts are not available from stats.fm (only Today and This Week are supported).`}}var ap=[{id:"w1",title:"Espresso",artist:"Sabrina Carpenter",country:"GL",plays:"12.4M",delta:2,indicator:"UP"},{id:"w2",title:"Beautiful Things",artist:"Benson Boone",country:"GL",plays:"9.8M",delta:null,indicator:"NONE"},{id:"w3",title:"Houdini",artist:"Dua Lipa",country:"GL",plays:"8.2M",delta:5,indicator:"UP"},{id:"w4",title:"Lose Control",artist:"Teddy Swims",country:"GL",plays:"7.9M",delta:-1,indicator:"DOWN"},{id:"w5",title:"Cruel Summer",artist:"Taylor Swift",country:"GL",plays:"7.1M",delta:-3,indicator:"DOWN"},{id:"w6",title:"Stick Season",artist:"Noah Kahan",country:"GL",plays:"6.4M",delta:1,indicator:"UP"},{id:"w7",title:"Bad Habit",artist:"Steve Lacy",country:"GL",plays:"5.9M",delta:-2,indicator:"DOWN"},{id:"w8",title:"Pedro",artist:"Jaxomy & Agatino",country:"GL",plays:"5.3M",delta:8,indicator:"NEW"},{id:"w9",title:"Bird of a Feather",artist:"Billie Eilish",country:"GL",plays:"5.0M",delta:1,indicator:"UP"},{id:"w10",title:"A Bar Song",artist:"Shaboozey",country:"GL",plays:"4.8M",delta:null,indicator:"NONE"}],Xb=[{id:"a1",title:"Taylor Swift",artist:"",country:"GL",plays:"95.2M",delta:null,indicator:"NONE",genres:["pop"]},{id:"a2",title:"The Weeknd",artist:"",country:"GL",plays:"82.1M",delta:1,indicator:"UP",genres:["r&b"]},{id:"a3",title:"Bad Bunny",artist:"",country:"GL",plays:"71.4M",delta:-1,indicator:"DOWN",genres:["latin"]},{id:"a4",title:"Drake",artist:"",country:"GL",plays:"63.8M",delta:2,indicator:"UP",genres:["hip-hop/rap","rap"]},{id:"a5",title:"Sabrina Carpenter",artist:"",country:"GL",plays:"58.3M",delta:5,indicator:"NEW",genres:["pop"]},{id:"a6",title:"Billie Eilish",artist:"",country:"GL",plays:"52.7M",delta:-2,indicator:"DOWN",genres:["alternative"]},{id:"a7",title:"Dua Lipa",artist:"",country:"GL",plays:"47.9M",delta:3,indicator:"UP",genres:["pop"]},{id:"a8",title:"BTS",artist:"",country:"GL",plays:"44.1M",delta:-1,indicator:"DOWN",genres:["k-pop"]},{id:"a9",title:"Kendrick Lamar",artist:"",country:"GL",plays:"41.0M",delta:2,indicator:"UP",genres:["hip-hop/rap"]},{id:"a10",title:"Ariana Grande",artist:"",country:"GL",plays:"39.5M",delta:null,indicator:"NONE",genres:["pop"]}],Jb=[{id:"al1",title:"THE TORTURED POETS DEPARTMENT",artist:"Taylor Swift",country:"GL",plays:"4.2M",delta:1,indicator:"UP",albumYear:2024},{id:"al2",title:"HIT ME HARD AND SOFT",artist:"Billie Eilish",country:"GL",plays:"3.8M",delta:null,indicator:"NONE",albumYear:2024},{id:"al3",title:"Short n' Sweet",artist:"Sabrina Carpenter",country:"GL",plays:"3.5M",delta:3,indicator:"NEW",albumYear:2024},{id:"al4",title:"GNX",artist:"Kendrick Lamar",country:"GL",plays:"3.1M",delta:-1,indicator:"DOWN",albumYear:2024},{id:"al5",title:"CHROMAKOPIA",artist:"Tyler, The Creator",country:"GL",plays:"2.9M",delta:2,indicator:"UP",albumYear:2024},{id:"al6",title:"Radical Optimism",artist:"Dua Lipa",country:"GL",plays:"2.6M",delta:-2,indicator:"DOWN",albumYear:2024},{id:"al7",title:"EUSEXUA",artist:"FKA twigs",country:"GL",plays:"2.4M",delta:null,indicator:"NONE",albumYear:2025},{id:"al8",title:"ICEMAN",artist:"Drake",country:"GL",plays:"2.2M",delta:1,indicator:"UP",albumYear:2025},{id:"al9",title:"BRAT",artist:"Charli xcx",country:"GL",plays:"2.0M",delta:-1,indicator:"DOWN",albumYear:2024},{id:"al10",title:"Romance",artist:"Fontaines D.C.",country:"GL",plays:"1.8M",delta:null,indicator:"NONE",albumYear:2024}];function lo(e){if(e==null)return null;let t=String(e).toUpperCase();return t==="UP"||t.includes("UP")?"UP":t==="DOWN"||t.includes("DOWN")?"DOWN":t==="NEW"||t.includes("NEW")?"NEW":null}function co(e){return e==="UP"?1:e==="DOWN"?-1:e==="NEW"?3:null}function uo(e){return e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(e)}function Zb(e){if(e==null)return;let t=e>1e12?e:e*1e3,a=new Date(t).getFullYear(),i=new Date().getFullYear();if(!(!Number.isFinite(a)||a<1900||a>i+1))return a}function ip(e){if(!e)return"";let t=Math.round(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Qb(e){let t=e.track.albums??[],a=o=>{if(o?.startsWith("http"))return o.includes("i.scdn.co"),o};for(let o of t){let l=a(o.image);if(l)return l}let i=e.track.artists[0];return a(i?.image)}function po(e,t){let a=new URL(`${Vb}/charts/top/${e}`);return a.searchParams.set("range",t),a.searchParams.set("limit",String(qb)),a.toString()}function e0(e){let t=e.track.artists.map(l=>l.name).join(", "),a=Qb(e),i=e.track.externalIds?.spotify?.[0],o=lo(e.indicator);return{id:`sfm-t-${e.position}-${e.track.name}`,title:e.track.name,artist:t,country:"GL",plays:uo(e.streams),delta:co(o),indicator:o,statsFmTrackId:e.track.id,...i?{spotifyTrackId:i}:{},...a?{artUrl:a}:{},...e.track.durationMs!=null?{durationMs:e.track.durationMs}:{},...e.track.explicit?{explicit:!0}:{}}}function t0(e){let t=e.artist.image,a=lo(e.indicator),i=e.artist.genres?.slice(0,2),o=e.artist.externalIds?.spotify?.[0];return{id:`sfm-a-${e.position}-${e.artist.name}`,title:e.artist.name,artist:"",country:"GL",plays:uo(e.streams),delta:co(a),indicator:a,...t?{artUrl:t}:{},...i?.length?{genres:i}:{},...o?{spotifyArtistId:o}:{}}}function r0(e){let t=e.album.image,a=lo(e.indicator),i=e.album.artists?.[0]?.name??"",o=Zb(e.album.releaseDate),l=e.album.externalIds?.spotify?.[0];return{id:`sfm-al-${e.position}-${e.album.name}`,title:e.album.name,artist:i,country:"GL",plays:uo(e.streams),delta:co(a),indicator:a,...t?{artUrl:t}:{},...o?{albumYear:o}:{},...l?{spotifyAlbumId:l}:{}}}async function n0(e){let t=await fetch(po("tracks",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(i=>e0(i))}async function a0(e){let t=await fetch(po("artists",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(i=>t0(i))}async function i0(e){let t=await fetch(po("albums",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(i=>r0(i))}async function sp(e,t){if(!Kn(t))return oo(t);let a=so[t]??"today";try{let i=await n0(a);if(i.length===0)throw new Error("empty");let o={bySpotifyId:new Map,byTitleArtist:new Map};try{o=await Jd()}catch{}let l=Zd(i,o),d=await np(l,{max:ao});return d.length===0?{ok:!0,data:[...ap],source:"mock"}:{ok:!0,data:d,source:"statsfm"}}catch{try{let i=await Qd();if(i.length)return{ok:!0,data:i,source:"mytopspotify"}}catch{}return{ok:!0,data:[...ap],source:"mock"}}}async function op(e,t){if(!Kn(t))return oo(t);let a=so[t]??"today";try{let i=await a0(a);if(i.length===0)throw new Error("empty");return{ok:!0,data:i,source:"statsfm"}}catch{try{let i=await ep();if(i.length)return{ok:!0,data:i,source:"mytopspotify"}}catch{}return{ok:!0,data:[...Xb],source:"mock"}}}async function lp(e,t){if(!Kn(t))return oo(t);let a=so[t]??"today";try{let i=await i0(a);if(i.length===0)throw new Error("empty");return{ok:!0,data:i,source:"statsfm"}}catch{return{ok:!0,data:[...Jb],source:"mock"}}}function cp(){return Spicetify.React.createElement(Spicetify.React.Fragment,null,Array.from({length:3}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"section-card",style:{paddingBottom:12}},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"40%",height:14,margin:"14px 18px 10px"}}),Spicetify.React.createElement("div",null,Array.from({length:6}).map((a,i)=>Spicetify.React.createElement("div",{key:i,style:{display:"flex",gap:12,alignItems:"center",padding:"8px 12px"}},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:20,height:20,borderRadius:4,flexShrink:0}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer skeleton-tile",style:{width:40,height:40,borderRadius:4,flexShrink:0}}),Spicetify.React.createElement("div",{style:{flex:1}},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"75%",height:"12px",marginBottom:"6px",borderRadius:"4px"}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"50%",height:"10px",borderRadius:"4px"}}))))))))}var{useMemo:s0}=Spicetify.React,di=[{value:"today",label:"Today"},{value:"week",label:"This Week"}],up={background:"radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button),.16), transparent 52%), var(--spice-card)",border:"1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12)",borderRadius:8,padding:20,minHeight:184,position:"relative",overflow:"hidden",boxSizing:"border-box"};function o0(e,t){let a=0;for(let i=0;i<e.length;i++)a=a*31+e.charCodeAt(i)>>>0;return{a:`oklch(0.70 0.14 ${a%360})`,b:`oklch(0.40 0.10 ${(a+60)%360})`,init:t.replace(/[^A-Za-z0-9]/g,"").slice(0,2).toUpperCase()}}function fo({value:e}){return e?Spicetify.React.createElement("span",{className:"world-chart-indicator","data-dir":e==="UP"?"up":e==="DOWN"?"down":"new","aria-label":e==="NEW"?"New entry":e==="UP"?"Up":"Down"},Spicetify.React.createElement("span",{className:"world-chart-indicator-glyph"},e==="NEW"?"\u25CF":e==="UP"?"\u25B2":"\u25BC"),e==="NEW"?Spicetify.React.createElement("span",null,"NEW"):null):null}function mo({src:e,alt:t,size:a=44,round:i,fallbackSeed:o,fallbackLabel:l}){let d=s0(()=>e?null:o0(o,l),[e,o,l]);return e?Spicetify.React.createElement("img",{src:e,alt:t,className:"track-art",loading:"lazy",style:{width:a,height:a,borderRadius:i?"50%":4,flexShrink:0}}):Spicetify.React.createElement("div",{className:"track-art track-art--fallback",style:{width:a,height:a,borderRadius:i?"50%":4,flexShrink:0,background:d?`linear-gradient(135deg, ${d.a}, ${d.b})`:void 0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:Math.max(11,a*.28),color:"rgba(255,255,255,0.92)"},"aria-hidden":!0},d?.init)}function dp({value:e,onChange:t}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist","aria-label":"Time range","data-testid":"world-window-tabs"},di.map(a=>Spicetify.React.createElement("button",{type:"button",key:a.value,className:`period-tab ${e===a.value?"active":""}`,role:"tab","aria-selected":e===a.value,onClick:()=>t(a.value)},a.label)))}function l0({item:e,size:t=28}){let a=ci(e),i=o=>{o.stopPropagation(),io(e)};return Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{label:a,placement:"top"},Spicetify.React.createElement("button",{type:"button",className:"world-chart-playbtn",style:{width:t,height:t},"aria-label":a,onClick:i},Spicetify.React.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor","aria-hidden":"true",role:"presentation"},Spicetify.React.createElement("path",{d:"M2.5 1.5L8 5L2.5 8.5Z"}))))}function pp(e,t){if(t==="track")return{title:e.title,sub:e.artist,art:e.artUrl};if(t==="artist")return{title:e.title,sub:`${e.plays} streams`,art:e.artUrl,genres:e.genres};let a=e.albumYear?` \xB7 ${e.albumYear}`:"";return{title:e.title,sub:`${e.artist}${a}`,art:e.artUrl}}function c0(e,t){let a=pp(e,t).art;if(t==="track")return{title:e.title,sub:e.artist,stat:e.plays,art:a};if(t==="artist"){let o=e.genres?.slice(0,2).join(" \xB7 ");return{title:e.title,sub:o||"Artist",stat:e.plays,art:a}}let i=e.albumYear?` \xB7 ${e.albumYear}`:"";return{title:e.title,sub:e.artist?`${e.artist}${i}`:"",stat:e.plays,art:a}}function ui({label:e,item:t,kind:a}){let i=c0(t,a);return Spicetify.React.createElement("button",{type:"button",className:"world-aside-card",onClick:()=>ln(t,a)},Spicetify.React.createElement("span",{className:"world-aside-card-label"},e),Spicetify.React.createElement("div",{className:"world-aside-card-row"},Spicetify.React.createElement(mo,{src:i.art,alt:i.title,size:44,round:a==="artist",fallbackSeed:i.title+i.sub,fallbackLabel:i.title}),Spicetify.React.createElement("div",{className:"world-aside-card-text"},Spicetify.React.createElement("div",{className:"world-aside-card-title"},i.title),i.sub?Spicetify.React.createElement("div",{className:"world-aside-card-sub"},i.sub):null,Spicetify.React.createElement("div",{className:"world-aside-card-stat"},i.stat))),t.indicator?Spicetify.React.createElement("div",{className:"world-aside-card-foot"},Spicetify.React.createElement(fo,{value:t.indicator})):null)}function fp({item:e,winLabel:t,runnersUp:a,topArtist:i,topAlbum:o}){let l=t.replace(/^This /,"this "),d=a.length>0||i!=null||o!=null;return Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:`overview-hero-cell world-hero-main world-hero-section${d?"":" world-hero-section--solo"}`,style:up},Spicetify.React.createElement("div",{className:"world-hero-main-inner"},Spicetify.React.createElement("button",{type:"button",className:"world-hero-art-btn",onClick:()=>ln(e,"track"),"aria-label":`Open ${e.title}`},Spicetify.React.createElement(mo,{src:e.artUrl,alt:e.title,size:148,fallbackSeed:e.title+e.artist,fallbackLabel:e.title})),Spicetify.React.createElement("div",{className:"world-hero-copy"},Spicetify.React.createElement("div",{className:"section-kicker"},"#1 \xB7 ",l),Spicetify.React.createElement("h2",{className:"section-title world-hero-title","data-testid":"world-hero-title"},e.title),Spicetify.React.createElement("p",{className:"world-hero-artist"},e.artist),Spicetify.React.createElement("div",{className:"world-hero-stats"},Spicetify.React.createElement("div",{className:"overview-card"},Spicetify.React.createElement("div",{className:"overview-card-label"},"Streams"),Spicetify.React.createElement("div",{className:"overview-card-value",style:{color:"var(--spice-button)"}},e.plays)),e.indicator?Spicetify.React.createElement("div",{className:"overview-card"},Spicetify.React.createElement("div",{className:"overview-card-label"},"Movement"),Spicetify.React.createElement("div",{className:"overview-card-value"},Spicetify.React.createElement(fo,{value:e.indicator}))):null,e.durationMs?Spicetify.React.createElement("div",{className:"overview-card"},Spicetify.React.createElement("div",{className:"overview-card-label"},"Duration"),Spicetify.React.createElement("div",{className:"overview-card-value"},ip(e.durationMs))):null),Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{label:ci(e),placement:"top"},Spicetify.React.createElement("button",{type:"button",className:"btn-primary world-hero-play","data-testid":"world-hero-play","aria-label":ci(e),onClick:()=>io(e)},"Play"))))),d?Spicetify.React.createElement("div",{className:"world-hero-aside"},a[0]?Spicetify.React.createElement(ui,{label:"#2 Track",item:a[0],kind:"track"}):null,a[1]?Spicetify.React.createElement(ui,{label:"#3 Track",item:a[1],kind:"track"}):null,i?Spicetify.React.createElement(ui,{label:"Top artist",item:i,kind:"artist"}):null,o?Spicetify.React.createElement(ui,{label:"Top album",item:o,kind:"album"}):null):null)}function u0({rank:e,item:t,kind:a}){let i=pp(t,a);return Spicetify.React.createElement("div",{className:"top-list-row",role:"button",tabIndex:0,onClick:()=>ln(t,a),onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&ln(t,a)}},Spicetify.React.createElement("span",{className:`rank-number ${Hn(e)}`},e),Spicetify.React.createElement(mo,{src:i.art,alt:i.title,size:44,round:a==="artist",fallbackSeed:i.title+i.sub,fallbackLabel:i.title}),Spicetify.React.createElement("div",{style:{flex:1,minWidth:0}},Spicetify.React.createElement("div",{className:"world-chart-row-title"},i.title),Spicetify.React.createElement("div",{className:"world-chart-row-sub"},a==="artist"&&i.genres?.length?Spicetify.React.createElement("span",{className:"world-genrechips"},i.genres.map(o=>Spicetify.React.createElement("span",{key:o,className:"world-genrechip"},o))):i.sub)),a==="track"?Spicetify.React.createElement(l0,{item:t,size:28}):null,Spicetify.React.createElement("div",{className:"world-chart-row-stats"},Spicetify.React.createElement("span",null,t.plays),Spicetify.React.createElement(fo,{value:t.indicator})))}function pi({kicker:e,title:t,podium:a,rows:i,kind:o}){let l=[...a,...i];return Spicetify.React.createElement("section",{className:"section-card","data-section":o==="track"?"tracks":o==="artist"?"artists":"albums"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},e),Spicetify.React.createElement("h2",{className:"section-title"},t)),l.map((d,m)=>Spicetify.React.createElement(u0,{key:d.id,rank:m+1,item:d,kind:o})))}function mp(){return Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"overview-hero-cell world-hero-main",style:{...up,minHeight:184},"aria-hidden":!0}),Spicetify.React.createElement("div",{className:"world-hero-aside","aria-hidden":!0},Array.from({length:4}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"world-aside-card",style:{minHeight:88}}))))}var{useState:Fr,useEffect:d0,useCallback:p0}=Spicetify.React,f0=new Set(di.map(e=>e.value)),Br=3,m0=7,go=Br+m0;function g0(){let e=localStorage.getItem(ce.WORLD_CHARTS_WINDOW);return e&&f0.has(e)&&Kn(e)?e:"today"}function h0(e,t,a){if(e==="statsfm"&&t==="statsfm"&&a==="statsfm")return"Global charts \xB7 stats.fm";let i=(o,l)=>o==="statsfm"?`${l} \xB7 stats.fm`:o==="mytopspotify"?`${l} \xB7 mytopspotify.io (daily)`:`${l} \xB7 demo`;return[i(e,"Tracks"),i(t,"Artists"),i(a,"Albums")].join(" \xB7 ")}function gp(){let[e,t]=Fr(g0),[a,i]=Fr([]),[o,l]=Fr([]),[d,m]=Fr([]),[g,h]=Fr(!0),[b,w]=Fr(null),[k,x]=Fr("Global charts \xB7 stats.fm"),P=di.find(L=>L.value===e)?.label??"Today",O=p0(async L=>{h(!0),w(null);let[q,X,Q]=await Promise.all([sp("world",L),op("world",L),lp("world",L)]),Z="mock",ie="mock",Se="mock";q.ok?(i(q.data),Z=q.source??"statsfm"):(w(Or(q.status,q.message)),i([])),X.ok?(l(X.data),ie=X.source??"statsfm"):l([]),Q.ok?(m(Q.data),Se=Q.source??"statsfm"):m([]),x(h0(Z,ie,Se)),h(!1)},[]);d0(()=>{O(e)},[e,O]);let $=L=>{t(L),localStorage.setItem(ce.WORLD_CHARTS_WINDOW,L)},_=()=>{O(e)},z=a[0],Y=a.slice(0,go),U=o.slice(0,go),W=d.slice(0,go);return Spicetify.React.createElement("div",{className:"world-charts-page stats-page-content"},Spicetify.React.createElement("header",{className:"section-heading world-page-header"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("span",{className:"section-kicker","data-testid":"world-page-kicker"},"What the planet is playing"),Spicetify.React.createElement("h1",{className:"section-title"},"World")),Spicetify.React.createElement(dp,{value:e,onChange:$})),g&&Spicetify.React.createElement("div",{className:"world-page-grid"},Spicetify.React.createElement(mp,null),Spicetify.React.createElement(cp,null)),!g&&b&&Spicetify.React.createElement(nn,{error:b,onRetry:_,onOpenSettings:()=>{}}),!g&&!b&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"world-page-grid"},z?Spicetify.React.createElement(fp,{item:z,winLabel:P,runnersUp:a.slice(1,3),topArtist:o[0],topAlbum:d[0]}):null,Spicetify.React.createElement(pi,{kicker:"Top",title:"Tracks",podium:Y.slice(0,Br),rows:Y.slice(Br),kind:"track"}),Spicetify.React.createElement(pi,{kicker:"Top",title:"Artists",podium:U.slice(0,Br),rows:U.slice(Br),kind:"artist"}),Spicetify.React.createElement(pi,{kicker:"Top",title:"Albums",podium:W.slice(0,Br),rows:W.slice(Br),kind:"album"})),Spicetify.React.createElement("div",{className:"world-charts-source"},k)))}function v0(e,t){return`${e}:${t}`}function y0(){return!localStorage.getItem(ce.PROVIDER_WIZARD_SEEN)}function b0(){localStorage.setItem(ce.PROVIDER_WIZARD_SEEN,"1")}function hp(){return Ne.getActive()?.getSupportedPeriods()??Dt}var{useState:ct,useEffect:Sr,useCallback:zt,useRef:w0,useMemo:ho}=Spicetify.React;function S0(){let[e,t]=ct(Dt),[a,i]=ct(Dt[0]),[o,l]=ct(null),[d,m]=ct(ds()),[g,h]=ct({tracks:!0,artists:!0,albums:!0}),[b,w]=ct({}),k=w0(0),[x,P]=ct(""),[O,$]=ct(!1),[_,z]=ct(!1),[Y,U]=ct(0),[W,L]=ct(()=>localStorage.getItem(ce.ACTIVE_PROVIDER)??"local"),[q,X]=ct(y0),[Q,Z]=ct("tracking"),[ie,Se]=ct(()=>Qu("2.0.3")),[le,Ce]=ct(()=>nt().activePage),[Fe,Ie]=ct(!1),[Te,F]=ct(null),[se,V]=ct(null),[N,Ee]=ct(!1),me=zt(async(ge,qe=!1)=>{let ft=++k.current,sr=Ne.getActiveId()??"local",qt=v0(sr,ge.id);P(`${sr}:${ge.id}`),qe||(m(ds()),h({tracks:!0,artists:!0,albums:!0}),l(null)),w({});try{if(!qe){let mt=Be.get(qt);if(mt){l(mt),m(ps()),h({tracks:!1,artists:!1,albums:!1});return}}let St=Ne.getActive();if(!St)throw new Error("No active provider");if(St.calculateStatsProgressive){let mt=!1,ut=await St.calculateStatsProgressive(ge,(at,Yt,Hr)=>{if(ft!==k.current)return;let dn=Dl(Yt);"topTracks"in at&&h(Qe=>({...Qe,tracks:!1})),"topArtists"in at&&h(Qe=>({...Qe,artists:!1})),"topAlbums"in at&&h(Qe=>({...Qe,albums:!1})),("dailyPlayCounts"in at||"listeningDays"in at)&&m(Qe=>({...Qe,consistency:"resolved"})),Hr?(mt=!0,w(Qe=>({...Qe,[dn]:Hr})),m(Qe=>({...Qe,[dn]:"error"}))):(l(Qe=>Qe?{...Qe,...at}:{...fs,...at}),m(Qe=>({...Qe,[dn]:"resolved"})))});if(ft!==k.current)return;l(at=>({...at??fs,...ut})),h({tracks:!1,artists:!1,albums:!1}),m(at=>({overview:at.overview==="error"?"error":"resolved",lists:at.lists==="error"?"error":"resolved",activity:at.activity==="error"?"error":"resolved",consistency:at.consistency==="error"?"error":"resolved"})),mt||Be.set(qt,ut)}else{let mt=await St.calculateStats(ge);if(ft!==k.current)return;Be.set(qt,mt),l(mt),m(ps()),h({tracks:!1,artists:!1,albums:!1})}}catch(St){if(ft!==k.current)return;let mt=St instanceof Yr?St.appError:Or(0,St instanceof Error?St.message:"Failed to load stats");w({overview:mt,lists:mt,activity:mt}),m({overview:"error",lists:"error",activity:"error",consistency:"error"})}},[]),De=ho(()=>[...e,Qi],[e]),Le=ho(()=>le==="world"?Qi:a,[le,a]);Sr(()=>{_l().then(()=>{let ge=hp();t(ge);let qe=In(Ne.getActiveId()??"local",ge);i(qe),z(!0)})},[]),Sr(()=>{!_||le==="world"||me(a)},[a,_,me,le]),Sr(()=>{let ge=()=>{let qe=Ne.getActiveId()??"local",ft=hp();t(ft);let sr=In(qe,ft);i(sr),L(qe),Be.invalidate(),Ws()};return window.addEventListener(ve.PROVIDER_CHANGED,ge),()=>window.removeEventListener(ve.PROVIDER_CHANGED,ge)},[]),Sr(()=>{let ge=()=>{le!=="world"&&(Be.invalidate(),me(a,!0))};return window.addEventListener(ve.PLAY_RECORDED,ge),()=>window.removeEventListener(ve.PLAY_RECORDED,ge)},[a,me,le]),Sr(()=>{let ge=()=>U(qe=>qe+1);return window.addEventListener(ve.PREFS_CHANGED,ge),()=>window.removeEventListener(ve.PREFS_CHANGED,ge)},[]),Sr(()=>{ul().then(F).catch(()=>{})},[]);let je=zt(async()=>{let ge=nt(),qe=await Ru("2.0.3",ge.receiveBetaUpdates);return V(qe),qe},[]);Sr(()=>{if(!_)return;let ge=!1;return(async()=>{let qe=await je();ge||qe.updateAvailable&&!Cu()&&Ee(!0)})(),()=>{ge=!0}},[_,je]);let K=zt(async()=>{$(!1),await je(),Ee(!0)},[je]),fe=Ne.getActive()?.getProviderInfo().name??"Local",He=Ne.getActive()?.getProviderInfo().capabilities??null,vt=He??{hasActivityData:!1,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!1,hasSkipRate:!1,tier:"n/a"},tt=new Set(ja(vt).map(ge=>ge.id)),J=nt(),Me=He?.hasStreakData||W==="statsfm",he=ge=>J.hiddenSections.includes(ge),ne=zt(()=>{U(ge=>ge+1)},[]),ee=zt(ge=>{Oe("receiveBetaUpdates",ge),window.dispatchEvent(new CustomEvent(ve.PREFS_CHANGED)),ne(),je()},[ne,je]),Ve=zt(ge=>{if(ge.id===Zi){Ie(!1),Ce("world"),Oe("activePage","world");return}Ce("dashboard"),Oe("activePage","dashboard"),i(ge),Ol(Ne.getActiveId()??"local",ge.id),window.dispatchEvent(new CustomEvent(ve.DASHBOARD_PERIOD_CHANGED,{detail:{periodId:ge.id}}))},[]),xr=zt(async()=>{if(Ne.getActiveId()==="statsfm"){let{statsfmProvider:ge}=await Promise.resolve().then(()=>(Cn(),Nl));await ge.init(),window.dispatchEvent(new CustomEvent(ve.STATSFM_PROFILE_REFRESHED))}await me(a)},[a,me]),zr=zt(()=>{b0(),X(!1)},[]),We=zt((ge="tracking")=>{Z(ge),$(!0)},[]),kr=zt(()=>{$(!1),Se(!0)},[]),Tr=ge=>d[ge]==="loading"||d[ge]==="pending",jt=ge=>{switch(ge){case"overview":return Tr("overview")?Spicetify.React.createElement(ni,{loading:!0,activePeriod:a}):b.overview?Spicetify.React.createElement(nn,{error:b.overview,onRetry:()=>me(a),onOpenSettings:()=>We("providers")}):o?Spicetify.React.createElement(ni,{stats:o,activePeriod:a}):null;case"top-genres":return Tr("lists")||!o||!He?.hasGenreData||o.topGenres.length===0?null:Spicetify.React.createElement(Wd,{topGenres:o.topGenres,onGenreClick:Xa,activeGenre:J.activeGenre});case"top-lists":{let qe=Tr("lists");return b.lists?Spicetify.React.createElement(nn,{error:b.lists,onRetry:()=>me(a),onOpenSettings:()=>We("providers")}):!qe&&!o?null:Spicetify.React.createElement(Fd,{stats:o??null,loading:qe,loadingByColumn:g,hiddenSections:J.hiddenSections,onGenreClick:Xa,activeGenre:J.activeGenre})}case"activity":return!He||_u(He)==="hidden"?null:b.activity?Spicetify.React.createElement(nn,{error:b.activity,onRetry:()=>me(a),onOpenSettings:()=>We("providers")}):Tr("activity")?Spicetify.React.createElement($s,{loading:!0,hourlyDistribution:[],peakHour:0,weekdayDistribution:[],peakWeekday:0,showStreak:!1}):o?Spicetify.React.createElement($s,{hourlyDistribution:o.hourlyDistribution,peakHour:o.peakHour,weekdayDistribution:o.weekdayDistribution??Array(7).fill(0),peakWeekday:o.peakWeekday??0,dailyPlayCounts:o.dailyPlayCounts,streak:o.streak,showStreak:Me}):null;case"consistency":return d.consistency==="loading"||d.consistency==="pending"?Spicetify.React.createElement(Ms,{loading:!0,activePeriod:a,activeProviderId:W,totalPlays:0,totalDuration:0}):o?Spicetify.React.createElement(Ms,{totalPlays:o.totalPlays,totalDuration:o.totalDuration,listeningDays:o.listeningDays,dailyPlayCounts:o.dailyPlayCounts,streak:o.streak,activePeriod:a,activeProviderId:W}):null;case"recently-played":return Tr("overview")?Spicetify.React.createElement(js,{loading:!0}):o?Spicetify.React.createElement(js,{recentPlays:o.recentPlays}):null;default:return null}},mi=()=>{let ge=d.overview==="resolved"||d.overview==="error",qe=d.lists==="resolved"||d.lists==="error",ft=Object.values(b).every(ut=>ut==null);if(ge&&qe&&ft&&o&&o.totalPlays===0&&o.topTracks.length===0)return Spicetify.React.createElement(Us,{onOpenSettings:()=>We()});let qt=J.sectionOrder.filter(ut=>tt.has(ut)&&!he(ut)),St=Object.entries(d).filter(([,ut])=>ut==="loading"||ut==="pending").map(([ut])=>ut),mt=St.length>0;return Spicetify.React.createElement("div",{className:"stats-page-content"},mt&&Spicetify.React.createElement("div",{className:"loading-status-banner",role:"status","aria-live":"polite"},Spicetify.React.createElement("span",{className:"loading-status-dot"}),Spicetify.React.createElement("span",null,"Loading ",x," - waiting on ",St.join(", "))),qt.map(ut=>{let at=jt(ut);return at?Spicetify.React.createElement("div",{key:ut,"data-section-id":ut},at):null}))},Ht=ho(()=>Iu("2.0.3",Te),[Te]);Sr(()=>{if(!Ht)return;let ge=nt();if(ge.showAnnouncementBanner)return;let qe=Ht.dismissKey,ft=ge.announcementBannerHiddenForDismissKey;qe!==ft&&(Oe("showAnnouncementBanner",!0),Oe("announcementBannerHiddenForDismissKey",""),window.dispatchEvent(new CustomEvent(ve.PREFS_CHANGED)),ne())},[Ht,ne]);let Vt=J.showAnnouncementBanner?Ht:null,gi=zt(()=>{Ht&&(Oe("showAnnouncementBanner",!1),Oe("announcementBannerHiddenForDismissKey",Ht.dismissKey),window.dispatchEvent(new CustomEvent(ve.PREFS_CHANGED)),ne())},[Ht,ne]),un=()=>le==="world"?Spicetify.React.createElement(gp,null):mi();return Spicetify.React.createElement("div",{className:"stats-page","data-version":"2.0.3"},q?Spicetify.React.createElement("div",{className:"stats-page-scroll"},Spicetify.React.createElement(ud,{onComplete:zr})):Spicetify.React.createElement("div",{className:"stats-page-scroll"},Spicetify.React.createElement("div",{className:"stats-page-sticky"},Spicetify.React.createElement(Ju,{activeGenre:J.activeGenre,onClear:Ws}),Spicetify.React.createElement(Gs,{providerName:fe,activeProviderId:W,onSettingsClick:()=>We(),onShareClick:o&&le!=="world"?()=>Ie(!0):void 0,periods:De,activePeriod:Le,onPeriodChange:Ve})),Vt&&Spicetify.React.createElement(Bu,{title:Vt.title,body:Vt.body,titleOnly:Vt.actionOpensChangelog===!0,actionLabel:Vt.actionLabel,actionUrl:Vt.actionUrl,onActionClick:Vt.actionOpensChangelog?()=>{K()}:void 0,onDismiss:gi}),un(),Spicetify.React.createElement(Gu,{version:"2.0.3",onCheckForUpdates:()=>{K()}})),O&&Spicetify.React.createElement(Ud,{onClose:()=>$(!1),onRefresh:xr,onPrefsChanged:ne,onRestartTour:kr,onOpenUpdates:()=>{K()},onReceiveBetaUpdatesChanged:()=>{je()},initialTab:Q,appVersion:"2.0.3",announcementDismissKey:Ht?.dismissKey??null}),Spicetify.React.createElement(cd,{active:ie&&!q,version:"2.0.3",steps:Fs({activePage:le,hasShare:!!o,sectionIds:J.sectionOrder.filter(ge=>tt.has(ge)&&!he(ge))}),onComplete:()=>Se(!1)}),Fe&&o&&Spicetify.React.createElement(gd,{stats:o,activePeriod:a,onClose:()=>Ie(!1)}),Spicetify.React.createElement(qd,{open:N,onClose:()=>Ee(!1),updateInfo:se,appVersion:"2.0.3",receiveBetaUpdates:J.receiveBetaUpdates,onReceiveBetaUpdatesChange:ee}))}var vp=S0;st();var x0="https://api.stats.fm/api/v1",vo=100,k0=4e3;function T0(e){let t=e.match(/^spotify:track:(.+)$/i);return t?t[1]:null}function E0(e){return{"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[e]??null}async function yp(e,t,a){let i=T0(t);if(!i||!e.trim())return null;for(let o=0;o<k0;o+=vo){let l=new URL(`${x0}/users/${encodeURIComponent(e.trim())}/top/tracks`);l.searchParams.set("range",a),l.searchParams.set("limit",String(vo)),l.searchParams.set("offset",String(o));let d;try{d=await fetch(l.toString(),{headers:{Accept:"application/json"}})}catch{return null}if(!d.ok)return null;let m=await d.json(),g=m.items??m.item??[];if(!Array.isArray(g)||g.length===0)return null;for(let h of g)if(h.track?.externalIds?.spotify?.[0]===i)return h.streams;if(g.length<vo)return null}return null}async function bp(e,t){return yp(e,t,"lifetime")}async function wp(e,t,a){let i=E0(a);return i?yp(e,t,i):null}function Sp(){try{let e=localStorage.getItem(ce.STATSFM_CONFIG);if(!e)return null;let t=JSON.parse(e);return typeof t.username=="string"?t.username:null}catch{return null}}Pt();Lr();var{React:Ct}=Spicetify;function A0(e){return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function xp({count:e,variant:t,firstPlayedAt:a,periodStreams:i,periodLabel:o,showFirstListen:l=!1}){if(t==="off"||e<1&&!l)return null;let d="No plays in your tracked history for this track yet (skips excluded). Count updates after a qualifying listen.";if(l&&e<1){let w=(k,x,P)=>Ct.createElement("div",{className:k,title:P},x);return t==="bubble"?w("play-count-bubble",[Ct.createElement("div",{key:"i",className:"play-count-bubble-icon"},"\u25B6"),Ct.createElement("span",{key:"b",className:"play-count-badge play-count-badge--new"},"NEW")],d):t==="minimal"?w("play-count-minimal","New",d):w("play-count-pill play-count-pill--first",[Ct.createElement("span",{key:"d",className:"play-count-dot"}),Ct.createElement("span",{key:"t"},"New play")],d)}let g=`Played ${e} ${e===1?"time":"times"}`;a!=null&&(g+=` \xB7 first on ${A0(a)}`),i!=null&&o&&(g+=` \xB7 ${i} in ${o} (stats.fm top tracks)`);let h=e===1?"1 play":`${e} plays`,b=i!=null&&o?Ct.createElement("span",{style:{marginLeft:6,fontSize:"0.85em",fontWeight:500,color:"rgba(var(--spice-rgb-text), 0.55)"}},`\xB7 ${i} ${o}`):null;if(t==="bubble")return Ct.createElement("div",{className:"play-count-bubble",title:g},Ct.createElement("div",{className:"play-count-bubble-icon"},"\u25B6"),Ct.createElement("span",{className:"play-count-badge"},e),i!=null&&o?Ct.createElement("span",{style:{marginLeft:4,fontSize:10,color:"rgba(var(--spice-rgb-text), 0.55)"}},`${i}`):null);if(t==="minimal"){let w=i!=null&&o?` (${i} ${o})`:"";return Ct.createElement("div",{className:"play-count-minimal",title:g},`\xD7${e}${w}`)}return Ct.createElement("div",{className:"play-count-pill",title:g},Ct.createElement("span",{className:"play-count-dot"}),h,b)}var{React:bo}=Spicetify,{useState:yo,useEffect:cn,useCallback:P0}=bo;function R0(){let[e,t]=yo(null),[a,i]=yo(()=>Spicetify.Player.data?.item?.uri??null),[o,l]=yo(0),d=P0(async m=>{try{let g=nt(),h=await Ke.playEvents.where("trackUri").equals(m).filter(k=>k.type!=="skip").sortBy("startedAt"),b=h.length,w=h[0]?.startedAt??null;if(Ne.getActiveId()==="statsfm"){let k=Sp();if(k){let x=await bp(k,m),P=null,O=null;if(g.playCountShowPeriodStreams){let z=Ne.getActive()?.getSupportedPeriods()??En;if(z.length>0){let Y=In("statsfm",z);O=Y.label,P=await wp(k,m,Y.id)}}let $=x??b,_=x!=null?null:w;t({count:$,firstPlayedAt:_,periodStreams:P,periodLabel:O});return}}t({count:b,firstPlayedAt:w,periodStreams:void 0,periodLabel:void 0})}catch{t(null)}},[]);return cn(()=>{a?d(a):t(null)},[a,d,o]),cn(()=>{let m=()=>{let g=Spicetify.Player.data?.item?.uri??null;i(g)};return Spicetify.Player.addEventListener("songchange",m),()=>Spicetify.Player.removeEventListener("songchange",m)},[]),cn(()=>{let m=()=>{a&&d(a)};return window.addEventListener(ve.PLAY_RECORDED,m),()=>window.removeEventListener(ve.PLAY_RECORDED,m)},[a,d]),cn(()=>{let m=()=>l(g=>g+1);return window.addEventListener(ve.PROVIDER_CHANGED,m),()=>window.removeEventListener(ve.PROVIDER_CHANGED,m)},[]),cn(()=>{let m=()=>l(g=>g+1);return window.addEventListener(ve.DASHBOARD_PERIOD_CHANGED,m),()=>window.removeEventListener(ve.DASHBOARD_PERIOD_CHANGED,m)},[]),cn(()=>{let m=()=>l(g=>g+1);return window.addEventListener(ve.PREFS_CHANGED,m),()=>window.removeEventListener(ve.PREFS_CHANGED,m)},[]),e}function kp(){let e=R0(),t=nt();if(t.playCountVariant==="off"||!e)return null;let a=t.playCountShowPeriodStreams&&e.count<1;return e.count<1&&!a?null:bo.createElement("div",{className:"play-count-widget-anchor"},bo.createElement(xp,{count:e.count,variant:t.playCountVariant,firstPlayedAt:e.firstPlayedAt,periodStreams:e.periodStreams??void 0,periodLabel:e.periodLabel??void 0,showFirstListen:a}))}var Tp=`:root {
	--font-size-sm: 12px;
	--font-size-md: 14px;
	--font-size-lg: 20px;
	--font-size-2xl: 28px;

	--line-height-display: 1.2;
	--line-height-heading: 1.2;
	--line-height-label: 1.4;
	--line-height-body: 1.5;

	--space-xs: 4px;
	--space-sm: 8px;
	--space-md: 16px;
	--space-lg: 24px;
	--space-xl: 32px;
	--space-2xl: 48px;

	--rank-gold: #ffd700;
	--rank-silver: #c0c0c0;
	--rank-bronze: #cd7f32;
}

/* Hide Spicetify topbar only when our page is active */
body:has(.stats-page) .main-topBar-container {
	display: none;
}

/* Page shell: flex column fills custom-app height; scroll is on inner so sticky works. */
.stats-page {
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
	height: 100%;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.stats-page-scroll {
	flex: 1 1 auto;
	min-height: 0;
	overflow-x: clip;
	overflow-y: auto;
	/* No top padding: sticky header must sit flush with scrollport top */
	padding: 0 var(--space-xl, 32px) var(--space-lg, 24px);
	box-sizing: border-box;
}

.stats-page-sticky {
	position: sticky;
	top: 0;
	z-index: 100;
	margin: 0 calc(-1 * var(--space-xl, 32px)) var(--space-md, 16px);
	padding: var(--space-lg, 24px) var(--space-xl, 32px) var(--space-md, 16px);
	/* Solid bar: themes may set --spice-main with alpha; rgb triple is opaque */
	background: var(--spice-main);
	background-color: rgb(var(--spice-rgb-main));
	border-bottom: 1px solid rgba(var(--spice-rgb-text, 255 255 255), 0.06);
	box-sizing: border-box;
}

/* Filter Pill */
.filter-pill {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 14px;
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	border-radius: 999px;
	font-size: 13px;
	margin-bottom: var(--space-sm, 8px);
}

.filter-pill-icon {
	display: inline-flex;
	width: 13px;
	height: 13px;
	color: var(--spice-button);
}

.filter-pill-genre {
	color: var(--spice-button);
}

.filter-pill-close {
	appearance: none;
	border: 0;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	color: rgba(var(--spice-rgb-text), 0.7);
	width: 18px;
	height: 18px;
	border-radius: 50%;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	line-height: 1;
	padding: 0;
}

.filter-pill-close:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.18);
	color: var(--spice-text);
}

/* Announcement Banner */
.announcement-banner {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 16px;
	margin-bottom: var(--space-md, 16px);
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.25);
	border-radius: 8px;
}

.announcement-banner-icon {
	color: var(--spice-button);
	width: 20px;
	height: 20px;
	flex-shrink: 0;
}

.announcement-banner-text {
	font-size: 13px;
	color: var(--spice-text);
	flex: 1;
}

.announcement-banner-link {
	color: var(--spice-button);
	font-size: 12px;
	font-weight: 600;
	text-decoration: none;
	white-space: nowrap;
}

button.announcement-banner-link-btn {
	appearance: none;
	margin: 0;
	padding: 0;
	border: none;
	background: transparent;
	font: inherit;
	font-size: 12px;
	font-weight: 600;
	color: var(--spice-button);
	cursor: pointer;
	text-decoration: underline;
	text-underline-offset: 2px;
	white-space: nowrap;
}

button.announcement-banner-link-btn:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.announcement-banner-dismiss {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.5);
	cursor: pointer;
	padding: 4px;
	font-size: 16px;
	line-height: 1;
}

/* Header */
.stats-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-lg, 24px);
	padding: 8px 0 12px;
	flex-wrap: wrap;
}

.stats-header-title {
	margin: 0;
	font-size: 32px;
	font-weight: 800;
	letter-spacing: -0.02em;
	line-height: 1;
	display: flex;
	align-items: center;
	color: var(--spice-text);
}

.stats-header-left {
	display: flex;
	align-items: center;
	gap: 14px;
	min-width: 0;
	flex-wrap: wrap;
	flex: 1 1 420px;
	row-gap: 6px;
}

.header-provider-pill {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.header-provider-name {
	font-size: 12px;
	font-weight: 400;
	color: rgba(var(--spice-rgb-text), 0.7);
	line-height: 1.2;
}

.stats-header-right {
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
	flex: 1 1 340px;
	justify-content: flex-end;
	flex-wrap: wrap;
	row-gap: 8px;
}

.stats-header-icon-btn {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: var(--spice-text);
	width: 36px;
	height: 36px;
	border-radius: 999px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition:
		background 0.15s,
		border-color 0.15s;
	padding: 0;
}

.stats-header-icon-btn:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.stats-header-icon-btn svg {
	width: 20px;
	height: 20px;
}

.loading-status-banner {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin: 0 0 12px;
	padding: 8px 12px;
	border-radius: 10px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.78);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.loading-status-dot {
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: var(--spice-button);
	box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.8);
	animation: loading-status-pulse 1.4s ease-out infinite;
}

@keyframes loading-status-pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.6);
	}
	100% {
		box-shadow: 0 0 0 8px rgba(var(--spice-rgb-button), 0);
	}
}

/* Period tabs */
.period-tabs {
	display: flex;
	flex-direction: row;
	gap: var(--space-xs, 4px);
	min-height: 36px;
	align-items: center;
	flex-wrap: wrap;
}

.period-tab {
	cursor: pointer;
	padding: 5px 12px;
	color: rgba(var(--spice-rgb-text), 0.6);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 500;
	transition:
		background 0.15s,
		color 0.15s;
}

.period-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.period-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	font-weight: 600;
}

/* Overview cards */
.overview-cards {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}

.overview-card {
	background: var(--spice-card);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	border-radius: 8px;
	padding: 12px 14px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 6px;
	transition:
		background 0.15s,
		border-color 0.15s;
	cursor: default;
}

.overview-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.overview-card-row {
	display: flex;
	align-items: baseline;
	gap: 5px;
}

.overview-card-sub {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.overview-section {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: auto auto;
	gap: var(--space-md, 16px);
	align-items: stretch;
}

.overview-section--compact {
	grid-template-rows: auto;
}
.overview-hero-cell {
	grid-column: 1 / span 3;
	grid-row: 1;
}
.overview-right-block {
	grid-column: 4 / span 2;
	grid-row: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-md, 16px);
}
.overview-bottom-row {
	grid-column: 1 / span 5;
	grid-row: 2;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--space-md, 16px);
}

/* Top Genres */
.top-genres-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.top-genres-row {
	display: grid;
	grid-template-columns: 140px 1fr 44px;
	gap: 12px;
	align-items: center;
}

.top-genres-name {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.85);
	text-align: left;
	cursor: pointer;
	font-size: 13px;
	padding: 0;
	font-weight: 500;
	font-family: inherit;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.top-genres-name:hover {
	color: var(--spice-text);
}

.top-genres-name--active {
	color: var(--spice-button);
}

.top-genres-bar-track {
	height: 8px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 4px;
	overflow: hidden;
}

.top-genres-bar {
	height: 8px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-button), 0.4);
	transition: width 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.top-genres-bar.peak {
	background: var(--spice-button);
}

.top-genres-pct {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-variant-numeric: tabular-nums;
	text-align: right;
}

.overview-card-label {
	font-size: 10.5px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.overview-card-value {
	font-size: 22px;
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1;
	color: var(--spice-text);
	font-variant-numeric: tabular-nums;
}

/* Section card wrapper */
.section-card {
	background: var(--spice-card);
	border-radius: 8px;
	padding: 20px;
	overflow: hidden;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	box-sizing: border-box;
}

.stats-page-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

/* Top lists grid - 3 columns side by side, responsive */
.top-lists-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: var(--space-md, 16px);
}

@media (max-width: 1200px) {
	.top-lists-grid {
		grid-template-columns: 1fr;
	}

	.overview-cards {
		flex-wrap: wrap;
	}

	.overview-card {
		min-width: 80px;
	}
}

@media (max-width: 780px) {
	.overview-section {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.overview-hero-cell {
		grid-column: 1;
		grid-row: 1;
	}
	.overview-right-block {
		grid-column: 1;
		grid-row: 2;
		grid-template-columns: 1fr 1fr;
	}
	.overview-bottom-row {
		grid-column: 1;
		grid-row: 3;
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media (max-width: 600px) {
	.stats-page-scroll {
		padding: 0 var(--space-md, 16px) var(--space-lg, 24px);
	}

	.stats-page-sticky {
		margin: 0 calc(-1 * var(--space-md, 16px)) var(--space-md, 16px);
		padding: var(--space-lg, 24px) var(--space-md, 16px) var(--space-md, 16px);
	}

	.stats-header-title {
		font-size: 22px;
	}

	.stats-header {
		flex-wrap: wrap;
	}

	.overview-cards {
		gap: var(--space-sm, 8px);
	}

	.overview-card {
		min-width: 70px;
		padding: 12px;
	}

	.period-tabs {
		flex-wrap: wrap;
		height: auto;
		gap: var(--space-xs, 4px);
	}

	.settings-modal {
		width: calc(100vw - 32px);
		max-width: 620px;
	}

	.recently-played-item {
		flex: 0 0 100px;
	}

	.recently-played-art {
		width: 100px;
		height: 100px;
	}

	.overview-right-block,
	.overview-bottom-row {
		grid-template-columns: 1fr 1fr;
	}

	.top-genres-row {
		grid-template-columns: 100px 1fr 36px;
		gap: 8px;
	}
}

/* Section headings */
.section-heading {
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin-bottom: var(--space-md, 16px);
}

.section-kicker {
	font-size: 11px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.section-title {
	margin: 0;
	font-size: var(--font-size-lg, 20px);
	line-height: var(--line-height-heading, 1.2);
	font-weight: 700;
	letter-spacing: -0.01em;
}

.section-header {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	line-height: var(--line-height-heading, 1.2);
	margin: 0 0 var(--space-sm, 8px);
	color: var(--spice-subtext);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

/* Top list rows */
.top-list-row {
	display: flex;
	align-items: center;
	height: 64px;
	box-sizing: border-box;
	padding: 8px 6px;
	cursor: pointer;
	gap: 12px;
	border-radius: 6px;
	transition: background 0.15s;
	overflow: hidden;
}

.top-list-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

/* Rank badges */
.rank-number {
	width: 28px;
	text-align: center;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-subtext);
	flex-shrink: 0;
}

.rank-gold,
.rank-silver,
.rank-bronze {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: #1a1a1a;
	flex-shrink: 0;
}

.rank-gold {
	background: var(--rank-gold, #ffd700);
}
.rank-silver {
	background: var(--rank-silver, #c0c0c0);
}
.rank-bronze {
	background: var(--rank-bronze, #cd7f32);
}

/* Activity chart */
.activity-chart-wrapper {
	position: relative;
}

.activity-chart-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
}

.activity-chart-peak {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.activity-chart-peak span {
	color: var(--spice-button);
	font-weight: 700;
}

.activity-chart {
	display: flex;
	align-items: flex-end;
	gap: 2px;
	height: 160px;
	padding: 8px 0;
}

.activity-bar {
	flex: 1;
	background: rgba(var(--spice-rgb-button), 0.4);
	border-radius: 6px 6px 0 0;
	min-width: 4px;
	transition: height 0.2s ease;
	cursor: pointer;
}

.activity-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.7);
}

.activity-bar.peak {
	background: var(--spice-button);
}

.activity-chart-labels {
	display: flex;
	justify-content: space-between;
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.consistency-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 10px;
}

.consistency-metric {
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
}

.consistency-metric-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
}

.consistency-metric-value {
	margin-top: 6px;
	font-size: 24px;
	font-weight: 700;
	line-height: 1;
}

.consistency-metric-sub {
	margin-top: 6px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.62);
}

.consistency-metric--accent {
	border-color: rgba(var(--spice-rgb-button), 0.3);
	background: rgba(var(--spice-rgb-button), 0.06);
}

.consistency-metric--accent .consistency-metric-value {
	color: #1ed760;
}

.consistency-footer {
	margin-top: 12px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
}

.consistency-coverage-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
	margin-bottom: 6px;
}

.consistency-coverage-row {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
}

.consistency-coverage-track {
	flex: 1;
	height: 8px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.15);
	overflow: hidden;
}

.consistency-coverage-fill {
	height: 100%;
	background: var(--spice-button);
}

.consistency-sparkline-bars {
	height: 44px;
	display: flex;
	align-items: flex-end;
	gap: 3px;
}

.consistency-sparkline-bar-wrap {
	flex: 1;
	display: flex;
	align-items: flex-end;
	height: 100%;
	min-height: 44px;
}

.consistency-sparkline-bar {
	width: 100%;
	border-radius: 3px 3px 0 0;
	background: rgba(var(--spice-rgb-button), 0.65);
	transition: background 0.15s ease;
}

.consistency-sparkline-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.85);
}

.consistency-sparkline-bar.peak {
	background: var(--spice-button);
}

.consistency-week-split-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.consistency-week-chip {
	padding: 10px 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.consistency-week-chip strong {
	font-size: 15px;
	color: var(--spice-text);
}

/* Recently played */
.recently-played {
	display: flex;
	gap: 14px;
	overflow-x: auto;
	padding-bottom: 4px;
	margin-right: -24px;
	padding-right: 24px;
}

.recently-played::-webkit-scrollbar {
	display: none;
}

.recently-played-item {
	flex: 0 0 132px;
	width: 132px;
	min-width: 132px;
	max-width: 132px;
	cursor: pointer;
}

.recently-played-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
	object-fit: cover;
	background: var(--spice-main);
}

.recently-played-name {
	margin-top: 8px;
	display: block;
	width: 100%;
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-artist {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-time {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.4);
	margin-top: 2px;
}

/* Loading skeletons */
.skeleton-shimmer {
	background: var(--spice-card);
	animation: shimmer 1.5s infinite;
	border-radius: 4px;
}

@keyframes shimmer {
	0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
}

.skeleton-text {
	height: 14px;
	margin: 4px 0;
}

.skeleton-card {
	height: 80px;
	border-radius: 8px;
}

/* Recently played skeleton */
.recently-played-skeleton-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
}

.recently-played-skeleton-text {
	width: 100px;
	height: 10px;
	border-radius: 2px;
	margin-top: 8px;
}

.recently-played-skeleton-subtext {
	width: 70px;
	height: 8px;
	border-radius: 2px;
	margin-top: 4px;
}

/* Empty state */
.empty-state {
	text-align: center;
	padding: 48px 16px;
	color: var(--spice-subtext);
}

.empty-state-icon {
	font-size: 48px; /* Exception: decorative emoji icon, not in type scale */
	margin-bottom: 16px;
	opacity: 0.5;
}

.empty-state-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-text);
	margin-bottom: 8px;
}

.empty-state-message {
	font-size: var(--font-size-md, 14px);
}

/* Error state */
.error-state {
	padding: 16px;
	color: var(--spice-subtext);
	border-radius: 8px;
	background: var(--spice-card);
}

.error-state-message {
	margin-bottom: 12px;
}

/* Inline error card */
.inline-error-card {
	display: flex;
	align-items: flex-start;
	gap: 14px;
	padding: 18px 20px;
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.18);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.02);
}

.inline-error-content {
	flex: 1;
	min-width: 0;
}

.inline-error-title {
	font-size: 13px;
	font-weight: 600;
}

.inline-error-body {
	font-size: var(--font-size-sm);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-top: 2px;
}

.inline-error-countdown {
	margin-top: 8px;
	font-size: var(--font-size-sm);
	color: var(--spice-button);
	font-variant-numeric: tabular-nums;
	font-weight: 600;
}

.inline-error-cta {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc), 0.16);
	background: transparent;
	color: var(--spice-text);
	padding: 7px 14px;
	font-size: var(--font-size-sm);
	font-weight: 600;
	border-radius: 999px;
	cursor: pointer;
	flex-shrink: 0;
	align-self: center;
}

/* Settings overlay/modal */
.settings-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.settings-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 620px;
	max-width: calc(100vw - 32px);
	max-height: 80vh;
	overflow-y: auto;
	padding: 24px;
}

.settings-modal.update-modal {
	width: 560px;
	max-height: 85vh;
}

.update-modal-status {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
	margin: 0 0 12px;
	line-height: 1.45;
}

.update-modal-note {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin: 0 0 8px;
	line-height: 1.45;
}

.update-modal-install-hint {
	margin-bottom: 16px;
	padding: 12px;
	border-radius: 8px;
	background: rgba(var(--spice-rgb-button), 0.06);
	border: 1px solid rgba(var(--spice-rgb-button), 0.15);
}

.update-modal-copy-row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px;
}

.update-modal-releases-link {
	margin-left: auto;
	font-size: var(--font-size-sm, 12px);
}

.update-modal-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.update-modal-actions-top {
	margin-bottom: 16px;
}

.update-modal-pref-row {
	margin-bottom: 4px;
}

.update-modal-install-short {
	margin: 8px 0 12px;
}

.update-modal-changelog-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 8px;
	padding-top: 8px;
	border-top: 1px solid var(--spice-misc);
}

.update-modal-changelog-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error, #e83b3b);
	margin: 0 0 8px;
}

.update-modal-changelog {
	max-height: min(40vh, 320px);
	overflow: auto;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.5;
}

.markdown-lite h3 {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 16px 0 8px;
}

.markdown-lite h3:first-child {
	margin-top: 0;
}

.markdown-lite p {
	margin: 0 0 8px;
}

.markdown-lite code {
	font-family: ui-monospace, monospace;
	font-size: 11px;
	padding: 1px 4px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-text), 0.08);
}

.markdown-lite a {
	color: var(--spice-button);
}

.settings-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.settings-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
}

/* Settings tabs */
.settings-tabs {
	display: flex;
	gap: 8px;
	border-bottom: 1px solid var(--spice-misc);
	margin-bottom: 16px;
}

.settings-tab {
	cursor: pointer;
	padding: 8px 12px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	white-space: nowrap;
}

.settings-tab:hover {
	color: var(--spice-text);
}

.settings-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Settings rows */
.settings-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 0;
	border-bottom: 1px solid var(--spice-misc);
}

.settings-row:last-child {
	border-bottom: none;
}

.settings-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.settings-sublabel {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 2px;
}

/* Health indicator */
.health-indicator {
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.health-dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	display: inline-block;
	flex-shrink: 0;
	cursor: default;
}

.health-green {
	background: #1ed760;
}

.health-yellow {
	background: #f59b23;
}

.health-red {
	background: #e83b3b;
}

/* Legacy settings-btn kept for backwards compatibility */
.settings-btn {
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;
	color: var(--spice-subtext);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition:
		color 0.15s,
		background 0.15s;
	width: 32px;
	height: 32px;
}

.settings-btn:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.settings-btn svg {
	width: 20px;
	height: 20px;
}

/* Primary/destructive buttons */
.btn-primary {
	background: var(--spice-button);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-primary:hover {
	opacity: 0.85;
}

.btn-destructive {
	background: var(--spice-notification-error);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-destructive:hover {
	opacity: 0.85;
}

.btn-secondary {
	background: none;
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
}

.btn-secondary:hover {
	color: var(--spice-text);
	border-color: var(--spice-text);
}

/* Album art thumbnail */
.track-art {
	width: 44px;
	height: 44px;
	border-radius: 4px;
	object-fit: cover;
	background: var(--spice-card);
	flex-shrink: 0;
}

.track-art--round {
	border-radius: 50%;
}

/* Genre chips on TopLists rows */
.genre-chips {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-xs);
	margin-top: var(--space-xs);
}

.genre-chip {
	display: inline-block;
	padding: var(--space-xs) var(--space-sm);
	border-radius: 999px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	color: var(--spice-subtext);
	font-size: var(--font-size-sm);
	font-weight: 400;
	line-height: var(--line-height-label);
	white-space: nowrap;
}

/* Import progress */
.import-progress {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-progress-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-subtext);
}

.import-progress-bar {
	width: 100%;
	height: 4px;
	-webkit-appearance: none;
	appearance: none;
	border-radius: 2px;
	background: var(--spice-misc);
}

.import-progress-bar::-webkit-progress-bar {
	background: var(--spice-misc);
	border-radius: 2px;
}

.import-progress-bar::-webkit-progress-value {
	background: var(--spice-button);
	border-radius: 2px;
}

/* Import result card */
.import-result-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-result-row {
	display: flex;
	align-items: baseline;
	gap: 4px;
	font-size: var(--font-size-md, 14px);
}

.import-result-count {
	font-weight: 700;
}

.import-result-count--success {
	color: var(--spice-button);
}

.import-result-count--neutral {
	color: var(--spice-subtext);
}

.import-result-count--error {
	color: var(--spice-notification-error);
}

.import-result-label {
	color: var(--spice-subtext);
}

.import-result-errors {
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.import-result-actions {
	margin-top: 8px;
	display: flex;
	justify-content: flex-end;
}

/* Provider tab */

.provider-status-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.tier-badge {
	display: inline-block;
	border-radius: 4px;
	padding: 2px 8px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	line-height: 1.4;
}

.tier-badge--free {
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
}

.tier-badge--plus {
	color: var(--spice-button);
	background: rgba(var(--spice-rgb-button), 0.15);
}

.provider-radio-row {
	display: flex;
	align-items: center;
	min-height: 44px;
	padding: 8px 12px;
	cursor: pointer;
	gap: 12px;
	border-radius: 4px;
	border-left: 2px solid transparent;
	transition: background 0.1s;
}

.provider-radio-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.provider-radio-row.active {
	border-left: 2px solid var(--spice-button);
}

.provider-radio-row.active .settings-label {
	color: var(--spice-text);
}

.provider-connect-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error);
	margin-top: 4px;
}

/* Provider unavailable section */
.provider-unavailable-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 48px 16px;
}

.provider-unavailable-msg {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 8px;
}

/* Activity tabs */
.activity-tabs {
	display: flex;
	gap: 0;
	margin-bottom: 12px;
}

.activity-tab {
	cursor: pointer;
	padding: 4px 8px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	transition: color 0.15s;
}

.activity-tab:hover {
	color: var(--spice-text);
}

.activity-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Weekday chart */
.weekday-chart {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
	height: 160px;
	padding: 8px 0;
}

.weekday-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
}

.weekday-bar-area {
	flex: 1;
	display: flex;
	align-items: flex-end;
	width: 100%;
	min-height: 0;
}

.weekday-bar-area .activity-bar {
	width: 100%;
}

.weekday-label {
	margin-top: 6px;
	font-size: 11px;
	color: var(--spice-subtext);
	text-align: center;
}

/* Calendar heatmap */
.heatmap-container {
	position: relative;
	padding-top: 18px;
	overflow-x: auto;
	overflow-y: visible;
}

.heatmap-scroll-inner {
	min-width: min-content;
}

.heatmap-month-labels {
	display: grid;
	gap: 3px;
	font-size: 10px;
	color: rgba(var(--spice-rgb-text), 0.5);
	height: 16px;
	margin-bottom: 4px;
}

.heatmap-grid {
	display: grid;
	gap: 3px;
}

.heatmap-week {
	display: grid;
	grid-template-rows: repeat(7, 16px);
	gap: 3px;
}

.heatmap-cell {
	width: 16px;
	height: 16px;
	border-radius: 3px;
}

.heatmap-legend {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 6px;
	margin-top: 10px;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.heatmap-legend-swatch {
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 3px;
}

/* Streak callout */
.streak-callout {
	margin-top: 14px;
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

/* Setup wizard */
.wizard-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 520px;
	max-width: calc(100vw - 48px);
	padding: 24px;
	text-align: center;
}

.wizard-page {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: var(--space-md, 16px) 0 var(--space-xl, 32px);
}

.wizard-modal--page {
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.wizard-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0 0 8px 0;
	line-height: 1.2;
}

.wizard-subtitle {
	font-size: var(--font-size-md, 14px);
	font-weight: 400;
	color: var(--spice-subtext);
	margin: 0 0 24px 0;
	line-height: 1.5;
}

.wizard-provider-cards {
	display: flex;
	flex-direction: row;
	gap: 16px;
}

.wizard-provider-card {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 24px;
	background: transparent;
	border: 1px solid var(--spice-misc);
	border-radius: 8px;
	cursor: pointer;
	min-height: 44px;
	transition: background 0.1s;
	text-align: center;
	color: inherit;
	font-family: inherit;
}

.wizard-provider-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.wizard-provider-name {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-text);
	line-height: 1.2;
}

.wizard-provider-desc {
	font-size: var(--font-size-sm, 12px);
	font-weight: 400;
	color: var(--spice-subtext);
	line-height: 1.4;
}

.wizard-provider-cta {
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: var(--spice-button);
	margin-top: auto;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.wizard-statsfm-help {
	text-align: left;
	gap: 6px;
	margin-bottom: 14px;
}

.wizard-statsfm-form {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.wizard-statsfm-input {
	width: 100%;
	padding: 10px 12px;
	border-radius: 4px;
	border: 1px solid var(--spice-misc);
	background: var(--spice-main);
	color: var(--spice-text);
	font-size: var(--font-size-md, 14px);
}

.wizard-statsfm-actions {
	display: flex;
	justify-content: space-between;
	gap: 8px;
}

/* Segmented control */
.segmented-control {
	display: flex;
	position: relative;
	background: var(--spice-card);
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	height: 36px;
	align-items: center;
	width: 100%;
}

.segmented-control-stop {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	z-index: 1;
	transition: color 0.15s;
	user-select: none;
	padding: 0 2px;
	min-width: 0;
}

.segmented-control-stop.active {
	color: var(--spice-text);
	font-weight: 700;
}

.segmented-control-indicator {
	position: absolute;
	top: 2px;
	bottom: 2px;
	border-radius: 3px;
	background: var(--spice-button);
	opacity: 0.85;
	transition:
		left 0.2s ease,
		width 0.2s ease;
	pointer-events: none;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Settings sortable rows + tiles
   Scoped under .display-tab (DisplayTab root). NEW system does NOT
   restore any torn-down dashboard drag CSS. No portal, no ancestor
   transforms, no edge-scroll. Drop line for rows, outline for tiles.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.display-tab .sortable-row {
	display: flex;
	align-items: center;
	min-height: 40px;
	padding: 0;
	gap: 8px;
	position: relative;
	user-select: none;
	touch-action: none;
}

.display-tab .sortable-row-label {
	flex: 1 1 auto;
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.display-tab .sortable-row-toggle {
	flex: 0 0 auto;
}

.display-tab .settings-drag-handle {
	flex: 0 0 auto;
	width: 24px;
	height: 24px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	background: transparent;
	border: none;
	cursor: grab;
	color: var(--spice-subtext);
	border-radius: 4px;
}
.display-tab .settings-drag-handle:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 128, 128, 128), 0.12);
}
.display-tab .settings-drag-handle:active {
	cursor: grabbing;
}

/* Drop-slot indicator line between rows (Decision 5).
   At rest (no active drag in this list): invisible.
   During an active drag in the list (parent has data-drag-active="true"):
   ALL drop-lines show subtle (opacity 0.25) so user can see every drop slot.
   The targeted slot's line glows full opacity + box-shadow. */
.display-tab .settings-drop-line {
	height: 2px;
	margin: 0;
	background: var(--spice-button-active);
	opacity: 0;
	transition:
		opacity 100ms ease,
		box-shadow 100ms ease;
	pointer-events: none;
}
.display-tab [data-drag-active="true"] .settings-drop-line {
	opacity: 0.25;
}
.display-tab [data-drag-active="true"] .settings-drop-line[data-active="true"] {
	opacity: 1;
	box-shadow: 0 0 6px var(--spice-button-active);
}

/* Mini-grid tiles (Overview 2x2, Top Lists 1x3).
   overflow: hidden clips the dragged tile's translate3d so it can't escape
   the modal; drop logic uses live pointer position so reorder still works
   when the visible tile is clipped at the container edge. */
.display-tab .sortable-grid {
	display: grid;
	gap: 8px;
	margin-top: 8px;
	overflow: hidden;
}
.display-tab .sortable-grid--2x2 {
	grid-template-columns: 1fr 1fr;
}
.display-tab .sortable-grid--1x3 {
	grid-template-columns: 1fr 1fr 1fr;
}

/* Overview settings: mirrors actual overview layout (hero + 2x2 right block + 1x3 bottom row) */
.display-tab .overview-settings-top {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 8px;
	margin-top: 8px;
}
.display-tab .overview-settings-top .sortable-grid {
	margin-top: 0;
}
.display-tab .overview-settings-hero {
	border: 1px dashed var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	opacity: 0.6;
}
.display-tab .overview-settings-hero-sub {
	font-size: 10px;
	opacity: 0.5;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.display-tab .sortable-tile {
	min-height: 80px;
	padding: 12px;
	border: 1px solid var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	cursor: grab;
	user-select: none;
	touch-action: none;
	position: relative;
}
.display-tab .sortable-tile:active {
	cursor: grabbing;
}

.display-tab .sortable-tile-label {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-text);
	text-align: center;
}

.display-tab .sortable-tile-toggle {
	/* Stops drag activation; cursor reverts to default for this hit zone. */
	cursor: default;
}

/* Tile drop target outline (Decision 5, inset so grid does not shift) */
.display-tab .sortable-tile[data-drop-target="true"] {
	outline: 2px solid var(--spice-button-active);
	outline-offset: -2px;
}

.play-count-widget-anchor {
	display: flex;
	align-items: center;
	pointer-events: auto;
	margin-left: 8px;
	flex-shrink: 0;
}

.play-count-pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-button), 0.14);
	color: var(--spice-button);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	font-size: 11px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-pill:hover {
	background: rgba(var(--spice-rgb-button), 0.22);
}

.play-count-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--spice-button);
}

.play-count-bubble {
	position: relative;
	cursor: pointer;
}
.play-count-bubble-icon {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background: rgba(var(--spice-rgb-button), 0.28);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--spice-button);
	font-size: 12px;
	box-shadow:
		0 0 0 1px rgba(var(--spice-rgb-button), 0.45),
		inset 0 1px 0 rgba(255, 255, 255, 0.12);
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.45);
}
.play-count-badge {
	position: absolute;
	top: -3px;
	right: -4px;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	background: var(--spice-button);
	color: #000;
	border-radius: 999px;
	font-size: 10px;
	font-weight: 800;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #000;
	font-variant-numeric: tabular-nums;
}

.play-count-minimal {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: rgba(255, 255, 255, 0.7);
	font-size: 11px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	padding: 3px 7px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.06);
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-minimal:hover {
	background: rgba(255, 255, 255, 0.1);
}

.page-tabs {
	display: flex;
	gap: var(--space-xs, 4px);
	margin-left: var(--space-sm, 8px);
	flex-wrap: nowrap;
	min-width: 0;
	flex-shrink: 0;
}

.page-tab {
	appearance: none;
	border: none;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 4px 10px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s;
	white-space: nowrap;
}

.page-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc), 0.06);
}

.page-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc), 0.1);
}

.play-count-badge--new {
	font-size: 8px;
	letter-spacing: 0.04em;
	padding: 0 3px;
	min-width: 22px;
}

.play-count-pill--first {
	color: rgba(var(--spice-rgb-text), 0.92);
	border-color: rgba(var(--spice-rgb-button), 0.35);
}

.world-charts-page {
	padding: 0;
}

.world-charts-hero {
	margin-bottom: var(--space-lg, 24px);
}

.world-page-notice {
	margin-bottom: var(--space-md, 16px);
	padding: var(--space-sm, 8px) var(--space-md, 16px);
	border-radius: 8px;
	font-size: var(--font-size-sm, 12px);
	line-height: var(--line-height-body, 1.5);
	color: rgba(var(--spice-rgb-text), 0.85);
	background: rgba(var(--spice-rgb-button), 0.1);
	border: 1px solid rgba(var(--spice-rgb-button), 0.28);
}

/* World tab */
.world-page-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: var(--space-md, 16px);
	align-items: stretch;
}

.world-hero-main {
	grid-column: 1 / span 2;
}

.world-hero-aside {
	grid-column: 3;
	align-self: stretch;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(0, 1fr);
	gap: var(--space-md, 16px);
}

.world-page-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: var(--space-md, 16px);
	flex-wrap: wrap;
	margin-bottom: 0;
}

.world-page-header .section-title {
	font-size: clamp(28px, 3vw, 36px);
}

.world-hero-section--solo {
	grid-column: 1 / -1;
}

.world-hero-main-inner {
	display: flex;
	gap: var(--space-md, 16px);
	align-items: flex-start;
}

.world-hero-art-btn {
	appearance: none;
	border: 0;
	padding: 0;
	background: transparent;
	cursor: pointer;
	border-radius: 4px;
	flex-shrink: 0;
}

.world-hero-art-btn:hover {
	opacity: 0.92;
}

.world-hero-art-btn:focus-visible {
	outline: 2px solid rgba(var(--spice-rgb-button), 0.7);
	outline-offset: 2px;
}

.world-hero-copy {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.world-hero-title {
	margin: 0;
	font-size: clamp(22px, 2.8vw, 32px);
}

.world-hero-artist {
	margin: 0;
	font-size: 15px;
	color: rgba(var(--spice-rgb-text), 0.72);
	font-weight: 500;
}

.world-hero-stats {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 8px;
}

.world-hero-stats .overview-card {
	flex: 0 1 auto;
	min-width: 88px;
	padding: 10px 12px;
}

.world-hero-play {
	margin-top: 12px;
	align-self: flex-start;
}

.world-aside-card {
	appearance: none;
	font: inherit;
	color: inherit;
	text-align: left;
	width: 100%;
	min-width: 0;
	min-height: 100%;
	padding: 12px;
	box-sizing: border-box;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	background: var(--spice-card);
	display: flex;
	flex-direction: column;
	gap: 8px;
	cursor: pointer;
	transition:
		background 0.15s,
		border-color 0.15s;
}

.world-aside-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.18);
}

.world-aside-card:focus-visible {
	outline: 2px solid rgba(var(--spice-rgb-button), 0.7);
	outline-offset: 2px;
}

.world-aside-card-label {
	font-size: 10.5px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
	line-height: 1.2;
}

.world-aside-card-row {
	display: flex;
	gap: 10px;
	align-items: center;
	min-width: 0;
	flex: 1;
}

.world-aside-card-text {
	min-width: 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.world-aside-card-title {
	font-size: 13px;
	font-weight: 600;
	line-height: 1.25;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.world-aside-card-sub {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-aside-card-stat {
	font-size: 15px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	color: var(--spice-text);
	line-height: 1.2;
	margin-top: 2px;
}

.world-aside-card-foot {
	margin-top: auto;
	padding-top: 2px;
}

.world-chart-row-title {
	font-size: 14px;
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-row-sub {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-row-stats {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 2px;
	font-size: 12px;
	font-weight: 600;
	flex-shrink: 0;
	min-width: 52px;
}

.world-chart-indicator {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 600;
}

.world-chart-indicator-glyph {
	font-size: 9px;
}

.world-chart-indicator[data-dir="up"] {
	color: oklch(0.78 0.16 145);
}

.world-chart-indicator[data-dir="down"] {
	color: oklch(0.72 0.16 28);
}

.world-chart-indicator[data-dir="new"] {
	color: oklch(0.85 0.18 92);
}

.world-chart-playbtn {
	appearance: none;
	border: 0;
	cursor: pointer;
	font: inherit;
	background: var(--spice-button);
	color: var(--spice-button-text, #000);
	border-radius: 999px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	transition:
		transform 0.1s,
		background 0.15s;
}

.world-chart-playbtn:hover {
	background: var(--spice-button-active, var(--spice-button));
	transform: scale(1.06);
}

.world-genrechips {
	display: inline-flex;
	gap: 6px;
}

.world-genrechip {
	display: inline-block;
	padding: 1px 7px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-text), 0.07);
	color: rgba(var(--spice-rgb-text), 0.75);
	font-size: 10.5px;
	font-weight: 500;
}

@media (max-width: 1200px) {
	.world-page-grid {
		grid-template-columns: 1fr;
	}

	.world-hero-main,
	.world-hero-section--solo {
		grid-column: 1;
	}
}

@media (max-width: 1100px) {
	.world-hero-aside {
		display: none;
	}

	.world-hero-main,
	.world-hero-section--solo {
		grid-column: 1 / -1;
	}

	.world-hero-main-inner {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.world-hero-stats {
		justify-content: center;
	}

	.world-hero-play {
		align-self: center;
	}
}

@media (max-width: 780px) {
	.world-page-header {
		flex-direction: column;
		align-items: flex-start;
	}
}

/* Legacy world layout (unused components may still reference w-*) */

.world-charts-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: var(--space-md, 16px);
}

.world-charts-layout {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: var(--space-md, 16px);
	align-items: start;
}

.world-charts-section.section-card {
	margin-bottom: 0;
}

.world-charts-tabs {
	display: flex;
	gap: var(--space-sm, 8px);
	flex-shrink: 0;
}

.world-charts-tab-group {
	display: flex;
	gap: 2px;
	background: rgba(var(--spice-rgb-misc), 0.06);
	border-radius: 6px;
	padding: 2px;
}

.world-charts-tab {
	appearance: none;
	border: none;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 5px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s;
}

.world-charts-tab:hover {
	color: var(--spice-text);
}

.world-charts-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc), 0.12);
}

.world-charts-section {
	margin-bottom: 0;
}

.world-charts-grid {
	display: flex;
	flex-direction: column;
	gap: 0;
	width: 100%;
	max-width: none;
}

.world-chart-item {
	display: flex;
	align-items: center;
	gap: var(--space-sm, 8px);
	min-height: 44px;
	box-sizing: border-box;
	padding: var(--space-xs, 4px) var(--space-sm, 8px);
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.15s;
}

.world-chart-item:hover {
	background: rgba(var(--spice-rgb-misc), 0.06);
}

.world-chart-item:focus-visible {
	outline: 2px solid var(--spice-button);
	outline-offset: -2px;
}

.world-chart-tile {
	width: 40px;
	height: 40px;
	border-radius: 6px;
	flex-shrink: 0;
}

.world-chart-tile--round {
	border-radius: 50%;
}

.world-chart-info {
	flex: 1;
	min-width: 0;
}

.world-chart-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	line-height: var(--line-height-label, 1.4);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-artist {
	font-size: var(--font-size-sm, 12px);
	line-height: var(--line-height-label, 1.4);
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-stats {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 2px;
	flex-shrink: 0;
	min-width: 72px;
	text-align: right;
}

.world-chart-plays {
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	color: rgba(var(--spice-rgb-text), 0.75);
	font-variant-numeric: tabular-nums;
}

.world-chart-delta {
	font-size: 10px;
	font-variant-numeric: tabular-nums;
}

.world-chart-delta[data-direction="up"] {
	color: var(--spice-button);
}

.world-chart-delta[data-direction="down"] {
	color: #e87b5c;
}

.world-chart-delta[data-direction="neutral"] {
	color: rgba(var(--spice-rgb-text), 0.4);
}

.world-charts-source {
	margin-top: var(--space-md, 16px);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.45);
}

.world-charts-empty {
	text-align: center;
	padding: var(--space-2xl, 48px) var(--space-lg, 24px);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.03);
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.12);
}

.world-charts-empty-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin-bottom: var(--space-sm, 8px);
}

.world-charts-empty-body {
	font-size: var(--font-size-md, 14px);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-bottom: var(--space-md, 16px);
	max-width: 320px;
	margin-inline: auto;
}

@media (max-width: 960px) {
	.world-charts-layout {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 780px) {
	.world-charts-header {
		flex-direction: column;
	}
}

.tour-overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.55);
}

.tour-overlay--targeted {
	background: transparent;
	pointer-events: none;
}

.tour-spotlight {
	pointer-events: none;
	border: 2px solid var(--spice-button);
	animation: tour-pulse 1.8s ease-in-out infinite;
}

@keyframes tour-pulse {
	0%,
	100% {
		border-color: var(--spice-button);
	}
	50% {
		border-color: rgba(255, 255, 255, 0.4);
	}
}

.tour-popover {
	width: 280px;
	max-width: calc(100vw - 16px);
	padding: 14px;
	background: #1f1f1f;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
	text-align: left;
	pointer-events: auto;
}

.tour-popover--positioned {
	position: fixed;
}

.tour-step-counter {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--spice-button);
	margin-bottom: 4px;
}

.tour-label {
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	margin-bottom: 4px;
}

.tour-text {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.5;
}

.tour-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 14px;
}

.tour-btn-skip,
.tour-btn-back {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(255, 255, 255, 0.5);
	font-size: 12px;
	cursor: pointer;
	padding: 0;
}

.tour-btn-next {
	appearance: none;
	border: 0;
	background: var(--spice-button);
	color: #000;
	font-size: 12px;
	font-weight: 700;
	padding: 5px 12px;
	border-radius: 999px;
	cursor: pointer;
}

.tour-dots {
	display: flex;
	gap: 4px;
}

.tour-dot {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.2);
}

.tour-dot.active {
	background: var(--spice-button);
}

.share-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.share-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: min(720px, calc(100vw - 48px));
	max-width: calc(100vw - 48px);
	max-height: 90vh;
	overflow-y: auto;
	padding: 24px;
}

.share-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.share-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0;
}

.share-tabs-row {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
}

.share-control-group {
	margin-bottom: 12px;
}

.share-control-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.55);
	margin-bottom: 6px;
}

.share-control-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin: 6px 0 12px;
}

.share-toggle-row {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: var(--spice-text);
}

.share-control-help {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
}

.share-variant-tab,
.share-size-tab {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 5px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s,
		border-color 0.15s;
}

.share-variant-tab:hover,
.share-size-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.share-variant-tab.active,
.share-size-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.2);
}

.share-size-tab:disabled {
	opacity: 0.35;
	cursor: not-allowed;
	pointer-events: none;
}

.share-preview-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: min(58vh, 640px);
	min-height: 320px;
	overflow: auto;
	padding: 16px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-main), 0.3);
}

.share-preview-image {
	max-width: 100%;
	max-height: min(54vh, 600px);
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 10px;
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.share-preview-status {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

.share-actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	margin-top: 12px;
}

.share-action-btn {
	min-width: 140px;
}

/* App footer */
.stats-app-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--space-sm, 8px);
	margin-top: var(--space-xl, 32px);
	padding-top: var(--space-md, 16px);
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
}

.stats-app-footer-links {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--space-sm, 8px);
}

.stats-app-footer-link {
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: none;
}

.stats-app-footer-link:hover {
	color: var(--spice-button-active, var(--spice-button));
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-credit {
	font-style: italic;
}

.stats-app-footer-meta {
	display: inline-flex;
	align-items: center;
	gap: 12px;
}

.stats-app-footer-version {
	font-variant-numeric: tabular-nums;
	color: rgba(var(--spice-rgb-text), 0.45);
}

.stats-app-footer-install-link {
	appearance: none;
	border: none;
	background: none;
	cursor: pointer;
	padding: 0;
	font: inherit;
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-install-link:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.settings-about-short-lead {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.5;
	margin: 12px 0 0;
}

.settings-about-check-updates {
	margin-top: 12px;
	padding: 6px 14px;
}

.settings-about-beta-row {
	padding-top: 4px;
}

.update-modal-install-section {
	margin-top: 8px;
	padding-top: 16px;
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.update-modal-section-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 8px;
}

.update-modal-lead {
	margin-top: 0;
}

.update-modal-beta-hint {
	margin-top: 12px;
}

.update-modal-repo-hint {
	margin-bottom: 0;
}

.settings-about-install {
	margin-top: 8px;
	padding-top: 16px;
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.settings-about-install-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 10px;
}

.settings-about-install-lead {
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.82);
	line-height: 1.55;
	margin: 0 0 14px;
}

.settings-about-code {
	font-family: ui-monospace, monospace;
	font-size: 11px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	padding: 1px 5px;
	border-radius: 4px;
}

.settings-about-install-steps {
	margin: 0 0 16px;
	padding-left: 20px;
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.85);
	line-height: 1.55;
}

.settings-about-install-steps li {
	margin-bottom: 8px;
}

.settings-about-command-block {
	margin-bottom: 14px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: rgba(var(--spice-rgb-main), 0.35);
	overflow: hidden;
}

.settings-about-command-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 8px 10px;
	border-bottom: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.settings-about-command-label {
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	color: var(--spice-subtext);
}

.settings-about-copy-btn {
	flex-shrink: 0;
	padding: 4px 12px;
	font-size: 12px;
}

.settings-about-command-pre {
	margin: 0;
	padding: 12px;
	font-family: ui-monospace, monospace;
	font-size: 11px;
	line-height: 1.45;
	color: rgba(var(--spice-rgb-text), 0.92);
	white-space: pre-wrap;
	word-break: break-all;
	max-height: 120px;
	overflow: auto;
}

.settings-about-install-note {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.55;
	margin: 0 0 8px;
}

.settings-about-hint {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 16px;
	line-height: 1.5;
}

.settings-inline-link {
	color: var(--spice-button);
}
`;function Ep(){let e=document.getElementById("listening-stats-styles");e&&e.remove();let t=document.createElement("style");t.id="listening-stats-styles",t.textContent=Tp,document.head.appendChild(t)}var{React:Ap}=Spicetify,Pp=!1,jn=null,fi=null,C0=[".main-nowPlayingWidget-nowPlaying",".main-nowPlayingBar-left",'[data-testid="now-playing-widget"]'];function Rp(){for(let e of C0){let t=document.querySelector(e);if(t)return t}return null}function I0(){if(Ep(),!Pp){Pp=!0;let e=document.createElement("div");e.id="listening-stats-widget-root",e.style.display="contents",document.body.appendChild(e);let t=()=>{let a=Rp();a&&e.parentElement!==a&&a.appendChild(e)};t(),jn=new MutationObserver(()=>{t()}),jn.observe(document.body,{childList:!0,subtree:!0}),fi=setInterval(t,2e3),Spicetify.ReactDOM.render(Ap.createElement(kp),e)}return Ap.createElement(vp)}function _0(){jn&&(jn.disconnect(),jn=null),fi&&(clearInterval(fi),fi=null)}return Xf(D0);})();
var { render, unmount } = ListeningStatsApp;
