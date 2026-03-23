(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var qf={exports:{}},Co={};var m0;function aS(){if(m0)return Co;m0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var g0;function rS(){return g0||(g0=1,qf.exports=aS()),qf.exports}var Bt=rS(),Yf={exports:{}},re={};var _0;function sS(){if(_0)return re;_0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||T}x.prototype.isReactComponent={},x.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function P(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||T}var N=P.prototype=new D;N.constructor=P,C(N,x.prototype),N.isPureReactComponent=!0;var X=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function w(O,Y,_t){var At=_t.ref;return{$$typeof:o,type:O,key:Y,ref:At!==void 0?At:null,props:_t}}function pt(O,Y){return w(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_t){return Y[_t]})}var it=/\/+/g;function lt(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Y,_t,At,Ft){var et=typeof O;(et==="undefined"||et==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case e:vt=!0;break;case v:return vt=O._init,L(vt(O._payload),Y,_t,At,Ft)}}if(vt)return Ft=Ft(O),vt=At===""?"."+lt(O,0):At,X(Ft)?(_t="",vt!=null&&(_t=vt.replace(it,"$&/")+"/"),L(Ft,Y,_t,"",function(Kt){return Kt})):Ft!=null&&(H(Ft)&&(Ft=pt(Ft,_t+(Ft.key==null||O&&O.key===Ft.key?"":(""+Ft.key).replace(it,"$&/")+"/")+vt)),Y.push(Ft)),1;vt=0;var Tt=At===""?".":At+":";if(X(O))for(var Xt=0;Xt<O.length;Xt++)At=O[Xt],et=Tt+lt(At,Xt),vt+=L(At,Y,_t,et,Ft);else if(Xt=E(O),typeof Xt=="function")for(O=Xt.call(O),Xt=0;!(At=O.next()).done;)At=At.value,et=Tt+lt(At,Xt++),vt+=L(At,Y,_t,et,Ft);else if(et==="object"){if(typeof O.then=="function")return L(J(O),Y,_t,At,Ft);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(O,Y,_t){if(O==null)return O;var At=[],Ft=0;return L(O,At,"","",function(et){return Y.call(_t,et,Ft++)}),At}function ot(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(_t){(O._status===0||O._status===-1)&&(O._status=1,O._result=_t)},function(_t){(O._status===0||O._status===-1)&&(O._status=2,O._result=_t)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var ht=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:F,forEach:function(O,Y,_t){F(O,function(){Y.apply(this,arguments)},_t)},count:function(O){var Y=0;return F(O,function(){Y++}),Y},toArray:function(O){return F(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=S,re.Children=Et,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,Y,_t){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=C({},O.props),Ft=O.key;if(Y!=null)for(et in Y.key!==void 0&&(Ft=""+Y.key),Y)!b.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(At[et]=Y[et]);var et=arguments.length-2;if(et===1)At.children=_t;else if(1<et){for(var vt=Array(et),Tt=0;Tt<et;Tt++)vt[Tt]=arguments[Tt+2];At.children=vt}return w(O.type,Ft,At)},re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},re.createElement=function(O,Y,_t){var At,Ft={},et=null;if(Y!=null)for(At in Y.key!==void 0&&(et=""+Y.key),Y)b.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ft[At]=Y[At]);var vt=arguments.length-2;if(vt===1)Ft.children=_t;else if(1<vt){for(var Tt=Array(vt),Xt=0;Xt<vt;Xt++)Tt[Xt]=arguments[Xt+2];Ft.children=Tt}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)Ft[At]===void 0&&(Ft[At]=vt[At]);return w(O,et,Ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:p,render:O}},re.isValidElement=H,re.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ot}},re.memo=function(O,Y){return{$$typeof:d,type:O,compare:Y===void 0?null:Y}},re.startTransition=function(O){var Y=B.T,_t={};B.T=_t;try{var At=O(),Ft=B.S;Ft!==null&&Ft(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(z,ht)}catch(et){ht(et)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),B.T=Y}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(O){return B.H.use(O)},re.useActionState=function(O,Y,_t){return B.H.useActionState(O,Y,_t)},re.useCallback=function(O,Y){return B.H.useCallback(O,Y)},re.useContext=function(O){return B.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,Y){return B.H.useDeferredValue(O,Y)},re.useEffect=function(O,Y){return B.H.useEffect(O,Y)},re.useEffectEvent=function(O){return B.H.useEffectEvent(O)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(O,Y,_t){return B.H.useImperativeHandle(O,Y,_t)},re.useInsertionEffect=function(O,Y){return B.H.useInsertionEffect(O,Y)},re.useLayoutEffect=function(O,Y){return B.H.useLayoutEffect(O,Y)},re.useMemo=function(O,Y){return B.H.useMemo(O,Y)},re.useOptimistic=function(O,Y){return B.H.useOptimistic(O,Y)},re.useReducer=function(O,Y,_t){return B.H.useReducer(O,Y,_t)},re.useRef=function(O){return B.H.useRef(O)},re.useState=function(O){return B.H.useState(O)},re.useSyncExternalStore=function(O,Y,_t){return B.H.useSyncExternalStore(O,Y,_t)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.4",re}var v0;function Td(){return v0||(v0=1,Yf.exports=sS()),Yf.exports}var Rs=Td(),jf={exports:{}},Do={},Zf={exports:{}},Kf={};var x0;function oS(){return x0||(x0=1,(function(o){function e(L,F){var ot=L.length;L.push(F);t:for(;0<ot;){var ht=ot-1>>>1,Et=L[ht];if(0<l(Et,F))L[ht]=F,L[ot]=Et,ot=ht;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var F=L[0],ot=L.pop();if(ot!==F){L[0]=ot;t:for(var ht=0,Et=L.length,O=Et>>>1;ht<O;){var Y=2*(ht+1)-1,_t=L[Y],At=Y+1,Ft=L[At];if(0>l(_t,ot))At<Et&&0>l(Ft,_t)?(L[ht]=Ft,L[At]=ot,ht=At):(L[ht]=_t,L[Y]=ot,ht=Y);else if(At<Et&&0>l(Ft,ot))L[ht]=Ft,L[At]=ot,ht=At;else break t}}return F}function l(L,F){var ot=L.sortIndex-F.sortIndex;return ot!==0?ot:L.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,_=3,E=!1,T=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var F=i(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=L)r(d),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(d)}}function X(L){if(C=!1,N(L),!T)if(i(m)!==null)T=!0,z||(z=!0,$());else{var F=i(d);F!==null&&J(X,F.startTime-L)}}var z=!1,B=-1,b=5,w=-1;function pt(){return M?!0:!(o.unstable_now()-w<b)}function H(){if(M=!1,z){var L=o.unstable_now();w=L;var F=!0;try{t:{T=!1,C&&(C=!1,D(B),B=-1),E=!0;var ot=_;try{e:{for(N(L),S=i(m);S!==null&&!(S.expirationTime>L&&pt());){var ht=S.callback;if(typeof ht=="function"){S.callback=null,_=S.priorityLevel;var Et=ht(S.expirationTime<=L);if(L=o.unstable_now(),typeof Et=="function"){S.callback=Et,N(L),F=!0;break e}S===i(m)&&r(m),N(L)}else r(m);S=i(m)}if(S!==null)F=!0;else{var O=i(d);O!==null&&J(X,O.startTime-L),F=!1}}break t}finally{S=null,_=ot,E=!1}F=void 0}}finally{F?$():z=!1}}}var $;if(typeof P=="function")$=function(){P(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=H,$=function(){lt.postMessage(null)}}else $=function(){x(H,0)};function J(L,F){B=x(function(){L(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(L){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var ot=_;_=F;try{return L()}finally{_=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ot=_;_=L;try{return F()}finally{_=ot}},o.unstable_scheduleCallback=function(L,F,ot){var ht=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ht+ot:ht):ot=ht,L){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,L={id:v++,callback:F,priorityLevel:L,startTime:ot,expirationTime:Et,sortIndex:-1},ot>ht?(L.sortIndex=ot,e(d,L),i(m)===null&&L===i(d)&&(C?(D(B),B=-1):C=!0,J(X,ot-ht))):(L.sortIndex=Et,e(m,L),T||E||(T=!0,z||(z=!0,$()))),L},o.unstable_shouldYield=pt,o.unstable_wrapCallback=function(L){var F=_;return function(){var ot=_;_=F;try{return L.apply(this,arguments)}finally{_=ot}}}})(Kf)),Kf}var S0;function lS(){return S0||(S0=1,Zf.exports=oS()),Zf.exports}var Qf={exports:{}},Tn={};var M0;function cS(){if(M0)return Tn;M0=1;var o=Td();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,v)},Tn.flushSync=function(m){var d=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=v,r.d.f()}},Tn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Tn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Tn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);r.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Tn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,d){return m(d)},Tn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var y0;function uS(){if(y0)return Qf.exports;y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=cS(),Qf.exports}var E0;function fS(){if(E0)return Do;E0=1;var o=lS(),e=Td(),i=uS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,A=c.child;A;){if(A===a){g=!0,a=c,s=f;break}if(A===s){g=!0,s=c,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,s=c;break}if(A===s){g=!0,s=f,a=c;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case z:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var J=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ht=[],Et=-1;function O(t){return{current:t}}function Y(t){0>Et||(t.current=ht[Et],ht[Et]=null,Et--)}function _t(t,n){Et++,ht[Et]=t.current,t.current=n}var At=O(null),Ft=O(null),et=O(null),vt=O(null);function Tt(t,n){switch(_t(et,n),_t(Ft,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bg(n),t=zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(At),_t(At,t)}function Xt(){Y(At),Y(Ft),Y(et)}function Kt(t){t.memoizedState!==null&&_t(vt,t);var n=At.current,a=zg(n,t.type);n!==a&&(_t(Ft,t),_t(At,a))}function $t(t){Ft.current===t&&(Y(At),Y(Ft)),vt.current===t&&(Y(vt),To._currentValue=ot)}var Ke,_e;function pe(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+_e}var De=!1;function oe(t,n){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var nt=st}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(st){nt=st}t.call(gt.prototype)}}else{try{throw Error()}catch(st){nt=st}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&nt&&typeof st.stack=="string")return[st.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var I=g.split(`
`),Q=A.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===Q.length)for(s=I.length-1,c=Q.length-1;1<=s&&0<=c&&I[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==Q[c]){var ft=`
`+I[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Ze(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Ze(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var We=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,kt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Zt=o.log,te=o.unstable_setDisableYieldValue,yt=null,St=null;function Nt(t){if(typeof Zt=="function"&&te(t),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,t)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ot(t)/ce|0)|0}var Rt=256,bt=262144,Pt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=Mt(s):(g&=A,g!==0?c=Mt(g):a||(a=A&~t,a!==0&&(c=Mt(a))))):(A=s&~f,A!==0?c=Mt(A):g!==0?c=Mt(g):a||(a=s&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function zt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Lt(a),gt=1<<ft;A[ft]=0,I[ft]=-1;var nt=Q[ft];if(nt!==null)for(Q[ft]=null,ft=0;ft<nt.length;ft++){var st=nt[ft];st!==null&&(st.lane&=-536870913)}a&=~gt}s!==0&&Bs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Bs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Lt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ur(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Lt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function qo(t,n){var a=n&-n;return a=(a&42)!==0?1:Lr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ai(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Or(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var di=Math.random().toString(36).slice(2),nn="__reactFiber$"+di,hn="__reactProps$"+di,Gi="__reactContainer$"+di,Sa="__reactEvents$"+di,Yo="__reactListeners$"+di,jo="__reactHandles$"+di,Zo="__reactResources$"+di,er="__reactMarker$"+di;function zs(t){delete t[nn],delete t[hn],delete t[Sa],delete t[Yo],delete t[jo]}function Ma(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qg(t);t!==null;){if(a=t[nn])return a;t=qg(t)}return n}t=a,a=t.parentNode}return null}function ya(t){if(t=t[nn]||t[Gi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function R(t){var n=t[Zo];return n||(n=t[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[er]=!0}var rt=new Set,tt={};function Z(t,n){Dt(t,n),Dt(t+"Capture",n)}function Dt(t,n){for(tt[t]=n,t=0;t<n.length;t++)rt.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wt={},Wt={};function jt(t){return We.call(Wt,t)?!0:We.call(wt,t)?!1:It.test(t)?Wt[t]=!0:(wt[t]=!0,!1)}function ee(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function be(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=qe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function ie(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(t,n,a,s,c,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?pi(t,g,ue(n)):a!=null?pi(t,g,ue(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function Xn(t,n,a,s,c,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){be(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),be(t)}function pi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function kn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Le(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function an(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(J(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),be(t)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mi(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&mi(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&mi(t,f,n[f])}function Pr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return ev.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Vc=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Ir=null;function Id(t){var n=ya(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(wn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[hn]||null;if(!c)throw Error(r(90));wn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&dn(s)}break t;case"textarea":Le(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&kn(t,!!a.multiple,n,!1)}}}var kc=!1;function Bd(t,n,a){if(kc)return t(n,a);kc=!0;try{var s=t(n);return s}finally{if(kc=!1,(Fr!==null||Ir!==null)&&(Il(),Fr&&(n=Fr,t=Ir,Ir=Fr=null,Id(n),t)))for(n=0;n<t.length;n++)Id(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(ki)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Wc=!1}var Ea=null,qc=null,Qo=null;function zd(){if(Qo)return Qo;var t,n=qc,a=n.length,s,c="value"in Ea?Ea.value:Ea.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Qo=c.slice(t,1<s?1-s:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Hd(){return!1}function Pn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Hd,this.isPropagationStopped=Hd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Pn(ir),Vs=S({},ir,{view:0,detail:0}),nv=Pn(Vs),Yc,jc,Xs,el=S({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Yc=t.screenX-Xs.screenX,jc=t.screenY-Xs.screenY):jc=Yc=0,Xs=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Gd=Pn(el),iv=S({},el,{dataTransfer:0}),av=Pn(iv),rv=S({},Vs,{relatedTarget:0}),Zc=Pn(rv),sv=S({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Pn(sv),lv=S({},ir,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Pn(lv),uv=S({},ir,{data:0}),Vd=Pn(uv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=dv[t])?!!n[t]:!1}function Kc(){return pv}var mv=S({},Vs,{key:function(t){if(t.key){var n=fv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=Pn(mv),_v=S({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Pn(_v),vv=S({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),xv=Pn(vv),Sv=S({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Pn(Sv),yv=S({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Pn(yv),Tv=S({},ir,{newState:0,oldState:0}),bv=Pn(Tv),Av=[9,13,27,32],Qc=ki&&"CompositionEvent"in window,ks=null;ki&&"documentMode"in document&&(ks=document.documentMode);var Rv=ki&&"TextEvent"in window&&!ks,kd=ki&&(!Qc||ks&&8<ks&&11>=ks),Wd=" ",qd=!1;function Yd(t,n){switch(t){case"keyup":return Av.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function Cv(t,n){switch(t){case"compositionend":return jd(n);case"keypress":return n.which!==32?null:(qd=!0,Wd);case"textInput":return t=n.data,t===Wd&&qd?null:t;default:return null}}function Dv(t,n){if(Br)return t==="compositionend"||!Qc&&Yd(t,n)?(t=zd(),Qo=qc=Ea=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!wv[t.type]:n==="textarea"}function Kd(t,n,a,s){Fr?Ir?Ir.push(s):Ir=[s]:Fr=s,n=kl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function Uv(t){Lg(t,0)}function nl(t){var n=nr(t);if(dn(n))return t}function Qd(t,n){if(t==="change")return n}var Jd=!1;if(ki){var Jc;if(ki){var $c="oninput"in document;if(!$c){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),$c=typeof $d.oninput=="function"}Jc=$c}else Jc=!1;Jd=Jc&&(!document.documentMode||9<document.documentMode)}function tp(){Ws&&(Ws.detachEvent("onpropertychange",ep),qs=Ws=null)}function ep(t){if(t.propertyName==="value"&&nl(qs)){var n=[];Kd(n,qs,t,Xc(t)),Bd(Uv,n)}}function Lv(t,n,a){t==="focusin"?(tp(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(qs)}function Ov(t,n){if(t==="click")return nl(n)}function Pv(t,n){if(t==="input"||t==="change")return nl(n)}function Fv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Fv;function Ys(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!We.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Iv=ki&&"documentMode"in document&&11>=document.documentMode,zr=null,eu=null,js=null,nu=!1;function sp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||zr==null||zr!==Vt(s)||(s=zr,"selectionStart"in s&&tu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=kl(eu,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=zr)))}function ar(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},iu={},op={};ki&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function rr(t){if(iu[t])return iu[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return iu[t]=n[a];return t}var lp=rr("animationend"),cp=rr("animationiteration"),up=rr("animationstart"),Bv=rr("transitionrun"),zv=rr("transitionstart"),Hv=rr("transitioncancel"),fp=rr("transitionend"),hp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function gi(t,n){hp.set(t,n),Z(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Gr=0,ru=0;function al(){for(var t=Gr,n=ru=Gr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&dp(a,c,f)}}function rl(t,n,a,s){ei[Gr++]=t,ei[Gr++]=n,ei[Gr++]=a,ei[Gr++]=s,ru|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function su(t,n,a,s){return rl(t,n,a,s),sl(t)}function sr(t,n){return rl(t,null,null,n),sl(t)}function dp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Lt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function sl(t){if(50<_o)throw _o=0,gf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function Gv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new Gv(t,n,a,s)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")ou(t)&&(g=1);else if(typeof t=="string")g=qx(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return or(a.children,c,f,n);case M:g=8,c|=24;break;case x:return t=qn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case X:return t=qn(13,a,n,c),t.elementType=X,t.lanes=f,t;case z:return t=qn(19,a,n,c),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case D:g=9;break t;case N:g=11;break t;case B:g=14;break t;case b:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function or(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function lu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function mp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},gp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Xr=[],kr=0,ll=null,Zs=0,ii=[],ai=0,Ta=null,Ri=1,Ci="";function qi(t,n){Xr[kr++]=Zs,Xr[kr++]=ll,ll=t,Zs=n}function _p(t,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=Ta,Ta=t;var s=Ri;t=Ci;var c=32-Lt(s)-1;s&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ri=1<<32-Lt(n)+c|a<<c|s,Ci=f+t}else Ri=1<<f|a<<c|s,Ci=t}function uu(t){t.return!==null&&(qi(t,1),_p(t,1,0))}function fu(t){for(;t===ll;)ll=Xr[--kr],Xr[kr]=null,Zs=Xr[--kr],Xr[kr]=null;for(;t===Ta;)Ta=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function vp(t,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=Ta,Ri=n.id,Ci=n.overflow,Ta=t}var xn=null,Xe=null,Se=!1,ba=null,ri=!1,hu=Error(r(519));function Aa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ni(n,t)),hu}function xp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nn]=t,n[hn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)ge(xo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Xn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),an(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Fg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Aa(t,!0)}function Sp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:xn=xn.return}}function Wr(t){if(t!==xn)return!1;if(!Se)return Sp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&Xe&&Aa(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=Wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=Wg(t)}else n===27?(n=Xe,Ha(t.type)?(t=Ff,Ff=null,Xe=t):Xe=n):Xe=xn?oi(t.stateNode.nextSibling):null;return!0}function lr(){Xe=xn=null,Se=!1}function du(){var t=ba;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),ba=null),t}function Ks(t){ba===null?ba=[t]:ba.push(t)}var pu=O(null),cr=null,Yi=null;function Ra(t,n,a){_t(pu,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=pu.current,Y(pu)}function mu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),mu(f.return,a,t),s||(g=null);break t}f=A.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),mu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=c.type;Wn(c.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&gu(n,t,a,s),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){cr=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Mp(cr,t)}function ul(t,n){return cr===null&&ur(t),Mp(t,n)}function Mp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(r(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var Vv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Xv=o.unstable_scheduleCallback,kv=o.unstable_NormalPriority,sn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Vv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&Xv(kv,function(){t.controller.abort()})}var Js=null,vu=0,Yr=0,jr=null;function Wv(t,n){if(Js===null){var a=Js=[];vu=0,Yr=yf(),jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return vu++,n.then(yp,yp),n}function yp(){if(--vu===0&&Js!==null){jr!==null&&(jr.status="fulfilled");var t=Js;Js=null,Yr=0,jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ep=L.S;L.S=function(t,n){sg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wv(t,n),Ep!==null&&Ep(t,n)};var fr=O(null);function xu(){var t=fr.current;return t!==null?t:Ve.pooledCache}function fl(t,n){n===null?_t(fr,fr.current):_t(fr,n.pool)}function Tp(){var t=xu();return t===null?null:{parent:sn._currentValue,pool:t}}var Zr=Error(r(460)),Su=Error(r(474)),hl=Error(r(542)),dl={then:function(){}};function bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw dr=n,Zr}}function hr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,Zr):a}}var dr=null;function Rp(){if(dr===null)throw Error(r(459));var t=dr;return dr=null,t}function Cp(t){if(t===Zr||t===hl)throw Error(r(483))}var Kr=null,$s=0;function pl(t){var n=$s;return $s+=1,Kr===null&&(Kr=[]),Ap(Kr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){function n(j,V){if(t){var K=j.deletions;K===null?(j.deletions=[V],j.flags|=16):K.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function s(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Wi(j,V),j.index=0,j.sibling=null,j}function f(j,V,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<V?(j.flags|=67108866,V):K):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,K,mt){return V===null||V.tag!==6?(V=lu(K,j.mode,mt),V.return=j,V):(V=c(V,K),V.return=j,V)}function I(j,V,K,mt){var Qt=K.type;return Qt===C?ft(j,V,K.props.children,mt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&hr(Qt)===V.type)?(V=c(V,K.props),to(V,K),V.return=j,V):(V=ol(K.type,K.key,K.props,null,j.mode,mt),to(V,K),V.return=j,V)}function Q(j,V,K,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=cu(K,j.mode,mt),V.return=j,V):(V=c(V,K.children||[]),V.return=j,V)}function ft(j,V,K,mt,Qt){return V===null||V.tag!==7?(V=or(K,j.mode,mt,Qt),V.return=j,V):(V=c(V,K),V.return=j,V)}function gt(j,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lu(""+V,j.mode,K),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=ol(V.type,V.key,V.props,null,j.mode,K),to(K,V),K.return=j,K;case T:return V=cu(V,j.mode,K),V.return=j,V;case b:return V=hr(V),gt(j,V,K)}if(J(V)||$(V))return V=or(V,j.mode,K,null),V.return=j,V;if(typeof V.then=="function")return gt(j,pl(V),K);if(V.$$typeof===P)return gt(j,ul(j,V),K);ml(j,V)}return null}function nt(j,V,K,mt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:A(j,V,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?I(j,V,K,mt):null;case T:return K.key===Qt?Q(j,V,K,mt):null;case b:return K=hr(K),nt(j,V,K,mt)}if(J(K)||$(K))return Qt!==null?null:ft(j,V,K,mt,null);if(typeof K.then=="function")return nt(j,V,pl(K),mt);if(K.$$typeof===P)return nt(j,V,ul(j,K),mt);ml(j,K)}return null}function st(j,V,K,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(K)||null,A(V,j,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return j=j.get(mt.key===null?K:mt.key)||null,I(V,j,mt,Qt);case T:return j=j.get(mt.key===null?K:mt.key)||null,Q(V,j,mt,Qt);case b:return mt=hr(mt),st(j,V,K,mt,Qt)}if(J(mt)||$(mt))return j=j.get(K)||null,ft(V,j,mt,Qt,null);if(typeof mt.then=="function")return st(j,V,K,pl(mt),Qt);if(mt.$$typeof===P)return st(j,V,K,ul(V,mt),Qt);ml(V,mt)}return null}function Gt(j,V,K,mt){for(var Qt=null,Ae=null,Yt=V,fe=V=0,xe=null;Yt!==null&&fe<K.length;fe++){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=nt(j,Yt,K[fe],mt);if(Re===null){Yt===null&&(Yt=xe);break}t&&Yt&&Re.alternate===null&&n(j,Yt),V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(fe===K.length)return a(j,Yt),Se&&qi(j,fe),Qt;if(Yt===null){for(;fe<K.length;fe++)Yt=gt(j,K[fe],mt),Yt!==null&&(V=f(Yt,V,fe),Ae===null?Qt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&qi(j,fe),Qt}for(Yt=s(Yt);fe<K.length;fe++)xe=st(Yt,j,fe,K[fe],mt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?fe:xe.key),V=f(xe,V,fe),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return t&&Yt.forEach(function(Wa){return n(j,Wa)}),Se&&qi(j,fe),Qt}function Jt(j,V,K,mt){if(K==null)throw Error(r(151));for(var Qt=null,Ae=null,Yt=V,fe=V=0,xe=null,Re=K.next();Yt!==null&&!Re.done;fe++,Re=K.next()){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Wa=nt(j,Yt,Re.value,mt);if(Wa===null){Yt===null&&(Yt=xe);break}t&&Yt&&Wa.alternate===null&&n(j,Yt),V=f(Wa,V,fe),Ae===null?Qt=Wa:Ae.sibling=Wa,Ae=Wa,Yt=xe}if(Re.done)return a(j,Yt),Se&&qi(j,fe),Qt;if(Yt===null){for(;!Re.done;fe++,Re=K.next())Re=gt(j,Re.value,mt),Re!==null&&(V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&qi(j,fe),Qt}for(Yt=s(Yt);!Re.done;fe++,Re=K.next())Re=st(Yt,j,fe,Re.value,mt),Re!==null&&(t&&Re.alternate!==null&&Yt.delete(Re.key===null?fe:Re.key),V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&Yt.forEach(function(iS){return n(j,iS)}),Se&&qi(j,fe),Qt}function He(j,V,K,mt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===C){if(V.tag===7){a(j,V.sibling),mt=c(V,K.props.children),mt.return=j,j=mt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&hr(Qt)===V.type){a(j,V.sibling),mt=c(V,K.props),to(mt,K),mt.return=j,j=mt;break t}a(j,V);break}else n(j,V);V=V.sibling}K.type===C?(mt=or(K.props.children,j.mode,mt,K.key),mt.return=j,j=mt):(mt=ol(K.type,K.key,K.props,null,j.mode,mt),to(mt,K),mt.return=j,j=mt)}return g(j);case T:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(j,V.sibling),mt=c(V,K.children||[]),mt.return=j,j=mt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}mt=cu(K,j.mode,mt),mt.return=j,j=mt}return g(j);case b:return K=hr(K),He(j,V,K,mt)}if(J(K))return Gt(j,V,K,mt);if($(K)){if(Qt=$(K),typeof Qt!="function")throw Error(r(150));return K=Qt.call(K),Jt(j,V,K,mt)}if(typeof K.then=="function")return He(j,V,pl(K),mt);if(K.$$typeof===P)return He(j,V,ul(j,K),mt);ml(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(j,V.sibling),mt=c(V,K),mt.return=j,j=mt):(a(j,V),mt=lu(K,j.mode,mt),mt.return=j,j=mt),g(j)):a(j,V)}return function(j,V,K,mt){try{$s=0;var Qt=He(j,V,K,mt);return Kr=null,Qt}catch(Yt){if(Yt===Zr||Yt===hl)throw Yt;var Ae=qn(29,Yt,null,j.mode);return Ae.lanes=mt,Ae.return=j,Ae}}}var pr=Dp(!0),wp=Dp(!1),Ca=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=sl(t),dp(t,null,a),n}return rl(t,s,n,a),sl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ur(t,a)}}function Eu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function no(){if(Tu){var t=jr;if(t!==null)throw t}}function io(t,n,a,s){Tu=!1;var c=t.updateQueue;Ca=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=Q:A.next=Q,ft.lastBaseUpdate=I))}if(f!==null){var gt=c.baseState;g=0,ft=Q=I=null,A=f;do{var nt=A.lane&-536870913,st=nt!==A.lane;if(st?(ve&nt)===nt:(s&nt)===nt){nt!==0&&nt===Yr&&(Tu=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=t,Jt=A;nt=n;var He=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){gt=Gt.call(He,gt,nt);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,nt=typeof Gt=="function"?Gt.call(He,gt,nt):Gt,nt==null)break t;gt=S({},gt,nt);break t;case 2:Ca=!0}}nt=A.callback,nt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[nt]:st.push(nt))}else st={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(Q=ft=st,I=gt):ft=ft.next=st,g|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;st=A,A=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ft===null&&(I=gt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Pa|=g,t.lanes=g,t.memoizedState=gt}}function Up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var Qr=O(null),gl=O(0);function Np(t,n){t=ia,_t(gl,t),_t(Qr,n),ia=t|n.baseLanes}function bu(){_t(gl,ia),_t(Qr,Qr.current)}function Au(){ia=gl.current,Y(Qr),Y(gl)}var Yn=O(null),si=null;function Ua(t){var n=t.alternate;_t($e,$e.current&1),_t(Yn,t),si===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(si=t)}function Ru(t){_t($e,$e.current),_t(Yn,t),si===null&&(si=t)}function Op(t){t.tag===22?(_t($e,$e.current),_t(Yn,t),si===null&&(si=t)):La()}function La(){_t($e,$e.current),_t(Yn,Yn.current)}function jn(t){Y(Yn),si===t&&(si=null),Y($e)}var $e=O(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,le=null,Be=null,on=null,vl=!1,Jr=!1,mr=!1,xl=0,ao=0,$r=null,Yv=0;function Qe(){throw Error(r(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Du(t,n,a,s,c,f){return Zi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?_m:ku,mr=!1,f=a(s,c),mr=!1,Jr&&(f=Fp(n,a,s,c)),Pp(t),f}function Pp(t){L.H=oo;var n=Be!==null&&Be.next!==null;if(Zi=0,on=Be=le=null,vl=!1,ao=0,$r=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&cl(t)&&(ln=!0))}function Fp(t,n,a,s){le=t;var c=0;do{if(Jr&&($r=null),ao=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=vm,f=n(a,s)}while(Jr);return f}function jv(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(le.flags|=1024),n}function wu(){var t=xl!==0;return xl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}Zi=0,on=Be=le=null,Jr=!1,ao=xl=0,$r=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=t:on=on.next=t,on}function tn(){if(Be===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=on===null?le.memoizedState:on.next;if(n!==null)on=n,Be=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},on===null?le.memoizedState=on=t:on=on.next=t}return on}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,$r===null&&($r=[]),t=Ap($r,t,n),n=le,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?_m:ku),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===P)return Sn(t)}throw Error(r(438,String(t)))}function Nu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=pt;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=tn();return Ou(n,Be,t)}function Ou(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=g=null,I=null,Q=n,ft=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(ve&gt)===gt:(Zi&gt)===gt){var nt=Q.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===Yr&&(ft=!0);else if((Zi&nt)===nt){Q=Q.next,nt===Yr&&(ft=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=gt,g=f):I=I.next=gt,le.lanes|=nt,Pa|=nt;gt=Q.action,mr&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else nt={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=nt,g=f):I=I.next=nt,le.lanes|=gt,Pa|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=A,!Wn(f,t.memoizedState)&&(ln=!0,ft&&(a=jr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Pu(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ip(t,n,a){var s=le,c=tn(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Be||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Bu(Hp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,ts(9,{destroy:void 0},zp.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(Zi&127)!==0||Bp(s,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Sl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function zp(t,n,a,s){n.value=a,n.getSnapshot=s,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Vp(t){var n=sr(t,2);n!==null&&Hn(n,t,2)}function Fu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),mr){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function Xp(t,n,a,s){return t.baseState=a,Ou(t,Be,typeof s=="function"?s:Ki)}function Zv(t,n,a,s,c){if(bl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var A=a(c,s),I=L.S;I!==null&&I(g,A),Wp(t,n,A)}catch(Q){Iu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,s),Wp(t,n,f)}catch(Q){Iu(t,n,Q)}}function Wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qp(t,n,s)},function(s){return Iu(t,n,s)}):qp(t,n,a)}function qp(t,n,a){n.status="fulfilled",n.value=a,Yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kp(t,a)))}function Iu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==s)}t.action=null}function Yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jp(t,n){return n}function Zp(t,n){if(Se){var a=Ve.formState;if(a!==null){t:{var s=le;if(Se){if(Xe){e:{for(var c=Xe,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=oi(c.nextSibling),s=c.data==="F!";break t}}Aa(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:n},a.queue=s,a=pm.bind(null,le,s),s.dispatch=a,s=Fu(!1),f=Xu.bind(null,le,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Zv.bind(null,le,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Kp(t){var n=tn();return Qp(n,Be,t)}function Qp(t,n,a){if(n=Ou(t,n,jp)[0],t=yl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(g){throw g===Zr?hl:g}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,ts(9,{destroy:void 0},Kv.bind(null,c,a),null)),[s,f,t]}function Kv(t,n){t.action=n}function Jp(t){var n=tn(),a=Be;if(a!==null)return Qp(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ts(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=Sl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function $p(){return tn().memoizedState}function El(t,n,a,s){var c=Ln();le.flags|=t,c.memoizedState=ts(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(t,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&Cu(s,Be.memoizedState.deps)?c.memoizedState=ts(n,f,a,s):(le.flags|=t,c.memoizedState=ts(1|n,f,a,s))}function tm(t,n){El(8390656,8,t,n)}function Bu(t,n){Tl(2048,8,t,n)}function Qv(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Sl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=tn().memoizedState;return Qv({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return Tl(4,2,t,n)}function im(t,n){return Tl(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rm(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,am.bind(null,n,t),a)}function zu(){}function sm(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cu(n,s[1]))return s[0];if(s=t(),mr){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Hu(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=lg(),le.lanes|=t,Pa|=t,a)}function lm(t,n,a,s){return Wn(a,n)?a:Qr.current!==null?(t=Hu(t,a,s),Wn(t,n)||(ln=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(ve&261930)===0?(ln=!0,t.memoizedState=a):(t=lg(),le.lanes|=t,Pa|=t,n)}function cm(t,n,a,s,c){var f=F.p;F.p=f!==0&&8>f?f:8;var g=L.T,A={};L.T=A,Xu(t,!1,n,a);try{var I=c(),Q=L.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=qv(I,s);so(t,n,ft,Qn(t))}else so(t,n,s,Qn(t))}catch(gt){so(t,n,{then:function(){},status:"rejected",reason:gt},Qn())}finally{F.p=f,g!==null&&A.types!==null&&(g.types=A.types),L.T=g}}function Jv(){}function Gu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=um(t).queue;cm(t,c,n,ot,a===null?Jv:function(){return fm(t),a(s)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=um(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Qn())}function Vu(){return Sn(To)}function hm(){return tn().memoizedState}function dm(){return tn().memoizedState}function $v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Da(a);var s=wa(n,t,a);s!==null&&(Hn(s,n,a),eo(s,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function tx(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?mm(n,a):(a=su(t,n,a,s),a!==null&&(Hn(a,t,s),gm(a,n,s)))}function pm(t,n,a){var s=Qn();so(t,n,a,s)}function so(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(c.hasEagerState=!0,c.eagerState=A,Wn(A,g))return rl(t,n,c,0),Ve===null&&al(),!1}catch{}if(a=su(t,n,c,s),a!==null)return Hn(a,t,s),gm(a,n,s),!0}return!1}function Xu(t,n,a,s){if(s={lane:2,revertLane:yf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(n)throw Error(r(479))}else n=su(t,a,s,2),n!==null&&Hn(n,t,2)}function bl(t){var n=t.alternate;return t===le||n!==null&&n===le}function mm(t,n){Jr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ur(t,a)}}var oo={readContext:Sn,use:Ml,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};oo.useEffectEvent=Qe;var _m={readContext:Sn,use:Ml,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(mr){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(mr){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=tx.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Fu(t);var n=t.queue,a=pm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(t,n){var a=Ln();return Hu(a,t,n)},useTransition:function(){var t=Fu(!1);return t=cm.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,c=Ln();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ve&127)!==0||Bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Hp.bind(null,s,f,t),[t]),s.flags|=2048,ts(9,{destroy:void 0},zp.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Ve.identifierPrefix;if(Se){var a=Ci,s=Ri;a=(s&~(1<<32-Lt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Ln().memoizedState=$v.bind(null,le)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:Sn,use:Ml,useCallback:sm,useContext:Sn,useEffect:Bu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:yl,useRef:$p,useState:function(){return yl(Ki)},useDebugValue:zu,useDeferredValue:function(t,n){var a=tn();return lm(a,Be.memoizedState,t,n)},useTransition:function(){var t=yl(Ki)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Vu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=tn();return Xp(a,Be,t,n)},useMemoCache:Nu,useCacheRefresh:dm};ku.useEffectEvent=em;var vm={readContext:Sn,use:Ml,useCallback:sm,useContext:Sn,useEffect:Bu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Pu,useRef:$p,useState:function(){return Pu(Ki)},useDebugValue:zu,useDeferredValue:function(t,n){var a=tn();return Be===null?Hu(a,t,n):lm(a,Be.memoizedState,t,n)},useTransition:function(){var t=Pu(Ki)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Vu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=tn();return Be!==null?Xp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:dm};vm.useEffectEvent=em;function Wu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Da(s);c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Hn(n,t,s),eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Hn(n,t,s),eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=wa(t,s,a),n!==null&&(Hn(n,t,a),eo(n,t,a))}};function xm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function Sm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&qu.enqueueReplaceState(n,n.state,null)}function gr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Mm(t){il(t)}function ym(t){console.error(t)}function Em(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function bm(t){return t=Da(t),t.tag=3,t}function Am(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,s),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function ex(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Bl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),xf(t,s,c)),!1;case 22:return a.flags|=65536,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),xf(t,s,c)),!1}throw Error(r(435,a.tag))}return xf(t,s,c),Bl(),!1}if(Se)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==hu&&(t=Error(r(422),{cause:s}),Ks(ni(t,a)))):(s!==hu&&(n=Error(r(423),{cause:s}),Ks(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Yu(t.stateNode,s,c),Eu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),go===null?go=[f]:go.push(f),Je!==4&&(Je=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Yu(a.stateNode,s,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bm(c),Am(c,t,a,s),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(r(461)),ln=!1;function Mn(t,n,a,s){n.child=t===null?wp(n,null,a,s):pr(n,t.child,a,s)}function Rm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return ur(n),s=Du(t,n,a,g,f,c),A=wu(),t!==null&&!ln?(Uu(t,n,c),Qi(t,n,c)):(Se&&A&&uu(n),n.flags|=1,Mn(t,n,s,c),n.child)}function Cm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(t,n,f,s,c)):(t=ol(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&t.ref===n.ref)return Qi(t,n,c)}return n.flags|=1,t=Wi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Dm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ys(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,nf(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Qi(t,n,c)}return Zu(t,n,a,s,c)}function wm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Um(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Np(n,f):bu(),Op(n);else return s=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(fl(n,f.cachePool),Np(n,f),La(),n.memoizedState=null):(t!==null&&fl(n,null),bu(),La());return Mn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,s,c){var f=xu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),bu(),Op(n),t!==null&&qr(t,n,s,!0),n.childLanes=c,null}function Rl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lm(t,n,a){return pr(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function nx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=Rl(n,s),n.lanes=536870912,lo(null,t);if(Ru(n),(t=Xe)?(t=kg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return Rl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||qr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=Ve,s!==null&&(g=qo(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,sr(t,g),Hn(s,t,g),ju;Bl(),n=Lm(t,n,a)}else t=f.treeContext,Xe=oi(g.nextSibling),xn=n,Se=!0,ba=null,ri=!1,t!==null&&vp(n,t),n=Rl(n,s),n.flags|=4096;return n}return t=Wi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,s,c){return ur(n),a=Du(t,n,a,s,void 0,c),s=wu(),t!==null&&!ln?(Uu(t,n,c),Qi(t,n,c)):(Se&&s&&uu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Nm(t,n,a,s,c,f){return ur(n),n.updateQueue=null,a=Fp(n,s,a,c),Pp(t),s=wu(),t!==null&&!ln?(Uu(t,n,f),Qi(t,n,f)):(Se&&s&&uu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Om(t,n,a,s,c){if(ur(n),n.stateNode===null){var f=Vr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Vr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&qu.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,I=gr(a,A);f.props=I;var Q=f.context,ft=a.contextType;g=Vr,typeof ft=="object"&&ft!==null&&(g=Sn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Q!==g)&&Sm(n,f,s,g),Ca=!1;var nt=n.memoizedState;f.state=nt,io(n,s,f,c),no(),Q=n.memoizedState,A||nt!==Q||Ca?(typeof gt=="function"&&(Wu(n,a,gt,s),Q=n.memoizedState),(I=Ca||xm(n,a,I,s,nt,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,yu(t,n),g=n.memoizedProps,ft=gr(a,g),f.props=ft,gt=n.pendingProps,nt=f.context,Q=a.contextType,I=Vr,typeof Q=="object"&&Q!==null&&(I=Sn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||nt!==I)&&Sm(n,f,s,I),Ca=!1,nt=n.memoizedState,f.state=nt,io(n,s,f,c),no();var st=n.memoizedState;g!==gt||nt!==st||Ca||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof A=="function"&&(Wu(n,a,A,s),st=n.memoizedState),(ft=Ca||xm(n,a,ft,s,nt,st,I)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=I,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Cl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=pr(n,t.child,null,c),n.child=pr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Qi(t,n,c),t}function Pm(t,n,a,s){return lr(),n.flags|=256,Mn(t,n,a,s),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Tp()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Fm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Ua(n):La(),(t=Xe)?(t=kg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw Aa(n);return Pf(t)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,c?(La(),c=n.mode,A=Dl({mode:"hidden",children:A},c),s=or(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,g,a),n.memoizedState=Ku,lo(null,s)):(Ua(n),$u(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),A=s.fallback,c=n.mode,s=Dl({mode:"visible",children:s.children},c),A=or(A,c,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,pr(n,t.child,null,a),s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,g,a),n.memoizedState=Ku,n=lo(null,s));else if(Ua(n),Pf(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Ks({value:s,source:null,stack:null}),n=tf(t,n,a)}else if(ln||qr(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=Ve,g!==null&&(s=qo(g,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,sr(t,s),Hn(g,t,s),ju;Of(A)||Bl(),n=tf(t,n,a)}else Of(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Xe=oi(A.nextSibling),xn=n,Se=!0,ba=null,ri=!1,t!==null&&vp(n,t),n=$u(n,s.children),n.flags|=4096);return n}return c?(La(),A=s.fallback,c=n.mode,I=t.child,Q=I.sibling,s=Wi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,Q!==null?A=Wi(Q,A):(A=or(A,c,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,lo(null,s),s=n.child,A=t.child.memoizedState,A===null?A=Qu(a):(c=A.cachePool,c!==null?(I=sn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Tp(),A={baseLanes:A.baseLanes|a,cachePool:c}),s.memoizedState=A,s.childLanes=Ju(t,g,a),n.memoizedState=Ku,lo(t.child,s)):(Ua(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return pr(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Im(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Bm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=$e.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,_t($e,g),Mn(t,n,s,a),s=Se?Zs:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,a,n);else if(t.tag===19)Im(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,s);break;case"together":ef(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function ix(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Ra(n,sn,t.memoizedState.cache),lr();break;case 27:case 5:Kt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(t,n,a):(Ua(n),t=Qi(t,n,a),t!==null?t.sibling:null);Ua(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t($e,$e.current),s)break;return null;case 22:return n.lanes=0,wm(t,n,a,n.pendingProps);case 24:Ra(n,sn,t.memoizedState.cache)}return Qi(t,n,a)}function zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return ln=!1,ix(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Se&&(n.flags&1048576)!==0&&_p(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=hr(n.elementType),n.type=t,typeof t=="function")ou(t)?(s=gr(t,s),n.tag=1,n=Om(null,n,t,s,a)):(n.tag=0,n=Zu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Rm(null,n,t,s,a);break t}else if(c===B){n.tag=14,n=Cm(null,n,t,s,a);break t}}throw n=lt(t)||t,Error(r(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=gr(s,n.pendingProps),Om(t,n,s,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,yu(t,n),io(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ra(n,sn,s),s!==f.cache&&gu(n,[sn],a,!0),no(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(t,n,s,a);break t}else if(s!==c){c=ni(Error(r(424)),n),Ks(c),n=Pm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xe=oi(t.firstChild),xn=n,Se=!0,ba=null,ri=!0,a=wp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lr(),s===c){n=Qi(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=Wl(et.current).createElement(a),s[nn]=n,s[hn]=t,yn(s,a,t),k(s),n.stateNode=s):n.memoizedState=Kg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Se&&(s=n.stateNode=Yg(n.type,n.pendingProps,et.current),xn=n,ri=!0,c=Xe,Ha(n.type)?(Ff=c,Xe=oi(s.firstChild)):Xe=c),Mn(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=s=Xe)&&(s=Nx(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,xn=n,Xe=oi(s.firstChild),ri=!1,c=!0):c=!1),c||Aa(n)),Kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Uf(c,f)?s=null:g!==null&&Uf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Du(t,n,jv,null,null,a),To._currentValue=c),Cl(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=Xe)&&(a=Ox(a,n.pendingProps,ri),a!==null?(n.stateNode=a,xn=n,Xe=null,t=!0):t=!1),t||Aa(n)),null;case 13:return Fm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=pr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ra(n,n.type,s.value),Mn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ur(n),c=Sn(c),s=s(c),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return Dm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return nx(t,n,a);case 22:return wm(t,n,a,n.pendingProps);case 24:return ur(n),s=Sn(sn),t===null?(c=xu(),c===null&&(c=Ve,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),Ra(n,sn,c)):((t.lanes&a)!==0&&(yu(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,sn,s)):(s=f.cache,Ra(n,sn,s),s!==c.cache&&gu(n,[sn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function af(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw dr=dl,Su}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e0(n))if(hg())t.flags|=8192;else throw dr=dl,Su}function wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,as|=n)}function co(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ax(t,n,a){var s=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ji(sn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(ke(n),Hm(n,f)):(ke(n),af(n,c,null,s,a))):f?f!==t.memoizedState?(Ji(n),ke(n),Hm(n,f)):(ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ji(n),ke(n),af(n,c,t,s,a)),null;case 27:if($t(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}t=At.current,Wr(n)?xp(n):(t=Yg(c,s,a),n.stateNode=t,Ji(n))}return ke(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(f=At.current,Wr(n))xp(n);else{var g=Wl(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[nn]=n,f[hn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ji(n)}}return ke(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=et.current,Wr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Fg(t.nodeValue,a)),t||Aa(n,!0)}else t=Wl(t).createTextNode(s),t[nn]=n,n.stateNode=t}return ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Wr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[nn]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Wr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nn]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),ke(n),null);case 4:return Xt(),t===null&&Af(n.stateNode.containerInfo),ke(n),null;case 10:return ji(n.type),ke(n),null;case 19:if(Y($e),s=n.memoizedState,s===null)return ke(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)co(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,co(s,!1),t=f.updateQueue,n.updateQueue=t,wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return _t($e,$e.current&1|2),Se&&qi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Pl&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304)}else{if(!c)if(t=_l(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,wl(n,t),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return ke(n),null}else 2*y()-s.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=$e.current,_t($e,c?a&1|2:a&1),Se&&qi(n,s.treeForkCount),t):(ke(n),null);case 22:case 23:return jn(n),Au(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Y(fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(sn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function rx(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(sn),Xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y($e),null;case 4:return Xt(),null;case 10:return ji(n.type),null;case 22:case 23:return jn(n),Au(),t!==null&&Y(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(sn),null;case 25:return null;default:return null}}function Gm(t,n){switch(fu(n),n.tag){case 3:ji(sn),Xt();break;case 26:case 27:case 5:$t(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:Y($e);break;case 10:ji(n.type);break;case 22:case 23:jn(n),Au(),t!==null&&Y(fr);break;case 24:ji(sn)}}function uo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(A){Pe(n,n.return,A)}}function Na(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,c=n;var I=a,Q=A;try{Q()}catch(ft){Pe(c,I,ft)}}}s=s.next}while(s!==f)}}catch(ft){Pe(n,n.return,ft)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(s){Pe(t,t.return,s)}}}function Xm(t,n,a){a.props=gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function Di(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function km(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function rf(t,n,a){try{var s=t.stateNode;Rx(s,t.type,a,n),s[hn]=n}catch(c){Pe(t,t.return,c)}}function Wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(s!==4&&(s===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Ul(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[nn]=t,n[hn]=a}catch(f){Pe(t,t.return,f)}}var $i=!1,cn=!1,lf=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,_n=null;function sx(t,n){if(t=t.containerInfo,Df=Jl,t=rp(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,I=-1,Q=0,ft=0,gt=t,nt=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(A=g+c),gt!==f||s!==0&&gt.nodeType!==3||(I=g+s),gt.nodeType===3&&(g+=gt.nodeValue.length),(st=gt.firstChild)!==null;)nt=gt,gt=st;for(;;){if(gt===t)break e;if(nt===a&&++Q===c&&(A=g),nt===f&&++ft===s&&(I=g),(st=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=st}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},Jl=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=gr(a.type,c);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Pe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function jm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&uo(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Pe(a,a.return,g)}else{var c=gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Pe(a,a.return,g)}}s&64&&Vm(a),s&512&&fo(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(g){Pe(a,a.return,g)}}break;case 27:n===null&&s&4&&qm(a);case 26:case 5:ea(t,a),n===null&&s&4&&km(a),s&512&&fo(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&Qm(t,a);break;case 13:ea(t,a),s&4&&Jm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mx.bind(null,a),Px(t,a))));break;case 22:if(s=a.memoizedState!==null||$i,!s){n=n!==null&&n.memoizedState!==null||cn,c=$i;var f=cn;$i=s,(cn=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),$i=c,cn=f}break;case 30:break;default:ea(t,a)}}function Zm(t){var n=t.alternate;n!==null&&(t.alternate=null,Zm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function ta(t,n,a){for(a=a.child;a!==null;)Km(t,n,a),a=a.sibling}function Km(t,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:cn||Di(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Di(a,n);var s=je,c=Fn;Ha(a.type)&&(je=a.stateNode,Fn=!1),ta(t,n,a),Mo(a.stateNode),je=s,Fn=c;break;case 5:cn||Di(a,n);case 6:if(s=je,c=Fn,je=null,ta(t,n,a),je=s,Fn=c,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,Vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hs(t)):Vg(je,a.stateNode));break;case 4:s=je,c=Fn,je=a.stateNode.containerInfo,Fn=!0,ta(t,n,a),je=s,Fn=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),ta(t,n,a);break;case 1:cn||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ta(t,n,a),cn=s;break;default:ta(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hs(t)}catch(a){Pe(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hs(t)}catch(a){Pe(n,n.return,a)}}function ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ym),n;default:throw Error(r(435,t.tag))}}function Ll(t,n){var a=ox(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=gx.bind(null,t,s);s.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Ha(A.type)){je=A.stateNode,Fn=!1;break t}break;case 5:je=A.stateNode,Fn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(je===null)throw Error(r(160));Km(f,g,c),je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var _i=null;function $m(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Bn(t),s&4&&(Na(3,t,t.return),uo(3,t),Na(5,t,t.return));break;case 1:In(n,t),Bn(t),s&512&&(cn||a===null||Di(a,a.return)),s&64&&$i&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(In(n,t),Bn(t),s&512&&(cn||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[nn]=t,k(f),s=f;break t;case"link":var g=$g("link","href",c).get(s+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=$g("meta","content",c).get(s+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[nn]=t,k(f),s=f}t.stateNode=s}else t0(c,t.type,t.stateNode);else t.stateNode=Jg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t0(c,t.type,t.stateNode):Jg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Bn(t),s&512&&(cn||a===null||Di(a,a.return)),a!==null&&s&4&&rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Bn(t),s&512&&(cn||a===null||Di(a,a.return)),t.flags&32){c=t.stateNode;try{Un(c,"")}catch(Gt){Pe(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,rf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(lf=!0);break;case 6:if(In(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){Pe(t,t.return,Gt)}}break;case 3:if(jl=null,c=_i,_i=ql(n.containerInfo),In(n,t),_i=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(Gt){Pe(t,t.return,Gt)}lf&&(lf=!1,tg(t));break;case 4:s=_i,_i=ql(t.stateNode.containerInfo),In(n,t),Bn(t),_i=s;break;case 12:In(n,t),Bn(t);break;case 31:In(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ll(t,s)));break;case 13:In(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ll(t,s)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=$i,ft=cn;if($i=Q||c,cn=ft||I,In(n,t),cn=ft,$i=Q,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||$i||cn||_r(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=I.stateNode;var gt=I.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){Pe(I,I.return,Gt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Gt){Pe(I,I.return,Gt)}}}else if(n.tag===18){if(a===null){I=n;try{var st=I.stateNode;c?Xg(st,!0):Xg(I.stateNode,!1)}catch(Gt){Pe(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ll(t,a))));break;case 19:In(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ll(t,s)));break;case 30:break;case 21:break;default:In(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);Ul(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Un(g,""),a.flags&=-33);var A=sf(t);Ul(t,A,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=sf(t);of(t,Q,I);break;default:throw Error(r(161))}}catch(ft){Pe(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(t,n.alternate,n),n=n.sibling}function _r(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),_r(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),_r(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),uo(4,f);break;case 1:if(na(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pe(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Up(I[c],A)}catch(Q){Pe(s,s.return,Q)}}a&&g&64&&Vm(f),fo(f,f.return);break;case 27:qm(f);case 26:case 5:na(c,f,a),a&&s===null&&g&4&&km(f),fo(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&g&4&&Qm(c,f);break;case 13:na(c,f,a),a&&g&4&&Jm(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),fo(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,a,s),n=n.sibling}function eg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&uo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Pe(n,n.return,I)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):ho(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,es(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(g,n);break;case 24:vi(t,n,a,s),c&2048&&uf(n.alternate,n);break;default:vi(t,n,a,s)}}function es(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,I=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:es(f,g,A,I,c),uo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?es(f,g,A,I,c):ho(f,g):(ft._visibility|=2,es(f,g,A,I,c)),c&&Q&2048&&cf(g.alternate,g);break;case 24:es(f,g,A,I,c),c&&Q&2048&&uf(g.alternate,g);break;default:es(f,g,A,I,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&cf(s.alternate,s);break;case 24:ho(a,s),c&2048&&uf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function ns(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)ng(t,n,a),t=t.sibling}function ng(t,n,a){switch(t.tag){case 26:ns(t,n,a),t.flags&po&&t.memoizedState!==null&&Yx(a,_i,t.memoizedState,t.memoizedProps);break;case 5:ns(t,n,a);break;case 3:case 4:var s=_i;_i=ql(t.stateNode.containerInfo),ns(t,n,a),_i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,ns(t,n,a),po=s):ns(t,n,a));break;default:ns(t,n,a)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,rg(s,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Na(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nl(t)):mo(t);break;default:mo(t)}}function Nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,rg(s,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}t=t.sibling}}function rg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(Zm(s),s===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var lx={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(sn).controller.signal}},cx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,me=null,ve=0,Oe=0,Zn=null,Oa=!1,is=!1,ff=!1,ia=0,Je=0,Pa=0,vr=0,hf=0,Kn=0,as=0,go=null,zn=null,df=!1,Ol=0,sg=0,Pl=1/0,Fl=null,Fa=null,pn=0,Ia=null,rs=null,aa=0,pf=0,mf=null,og=null,_o=0,gf=null;function Qn(){return(we&2)!==0&&ve!==0?ve&-ve:L.T!==null?yf():Ai()}function lg(){if(Kn===0)if((ve&536870912)===0||Se){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===Ve&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(ss(t,0),Ba(t,ve,Kn,!1)),Cn(t,a),((we&2)===0||t!==Ve)&&(t===Ve&&((we&2)===0&&(vr|=a),Je===4&&Ba(t,ve,Kn,!1)),wi(t))}function cg(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||zt(t,n),c=s?hx(t,n):vf(t,n,!0),f=s;do{if(c===0){is&&!s&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ux(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;c=go;var I=A.current.memoizedState.isDehydrated;if(I&&(ss(A,g).flags|=256),g=vf(A,g,!1),g!==2){if(ff&&!I){A.errorRecoveryDisabledLanes|=f,vr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ss(t,0),Ba(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ba(s,n,Kn,!Oa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ol+300-y(),10<c)){if(Ba(s,n,Kn,!Oa),ct(s,0,!0)!==0)break t;aa=n,s.timeoutHandle=Hg(ug.bind(null,s,a,zn,Fl,df,n,Kn,vr,as,Oa,f,"Throttled",-0,0),c);break t}ug(s,a,zn,Fl,df,n,Kn,vr,as,Oa,f,null,-0,0)}}break}while(!0);wi(t)}function ug(t,n,a,s,c,f,g,A,I,Q,ft,gt,nt,st){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ng(n,f,gt);var Gt=(f&62914560)===f?Ol-y():(f&4194048)===f?sg-y():0;if(Gt=jx(gt,Gt),Gt!==null){aa=f,t.cancelPendingCommit=Gt(vg.bind(null,t,n,f,a,s,c,g,A,I,ft,gt,null,nt,st)),Ba(t,f,g,!Q);return}}vg(t,n,f,a,s,c,g,A,I)}function ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,s){n&=~hf,n&=~vr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Bs(t,a,n)}function Il(){return(we&6)===0?(vo(0),!1):!0}function _f(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Yi=cr=null,Lu(t),Kr=null,$s=0,t=me;for(;t!==null;)Gm(t.alternate,t),t=t.return;me=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,wx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,_f(),Ve=t,me=a=Wi(t.current,null),ve=n,Oe=0,Zn=null,Oa=!1,is=zt(t,n),ff=!1,as=Kn=hf=vr=Pa=Je=0,zn=go=null,df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Lt(s),f=1<<c;n|=t[c],s&=~f}return ia=n,al(),a}function fg(t,n){le=null,L.H=oo,n===Zr||n===hl?(n=Rp(),Oe=3):n===Su?(n=Rp(),Oe=4):Oe=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,me===null&&(Je=1,Al(t,ni(n,t.current)))}function hg(){var t=Yn.current;return t===null?!0:(ve&4194048)===ve?si===null:(ve&62914560)===ve||(ve&536870912)!==0?t===si:!1}function dg(){var t=L.H;return L.H=oo,t===null?oo:t}function pg(){var t=L.A;return L.A=lx,t}function Bl(){Je=4,Oa||(ve&4194048)!==ve&&Yn.current!==null||(is=!0),(Pa&134217727)===0&&(vr&134217727)===0||Ve===null||Ba(Ve,ve,Kn,!1)}function vf(t,n,a){var s=we;we|=2;var c=dg(),f=pg();(Ve!==t||ve!==n)&&(Fl=null,ss(t,n)),n=!1;var g=Je;t:do try{if(Oe!==0&&me!==null){var A=me,I=Zn;switch(Oe){case 8:_f(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=Oe;if(Oe=0,Zn=null,os(t,A,I,Q),a&&is){g=0;break t}break;default:Q=Oe,Oe=0,Zn=null,os(t,A,I,Q)}}fx(),g=Je;break}catch(ft){fg(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Yi=cr=null,we=s,L.H=c,L.A=f,me===null&&(Ve=null,ve=0,al()),g}function fx(){for(;me!==null;)mg(me)}function hx(t,n){var a=we;we|=2;var s=dg(),c=pg();Ve!==t||ve!==n?(Fl=null,Pl=y()+500,ss(t,n)):is=zt(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=Zn;e:switch(Oe){case 1:Oe=0,Zn=null,os(t,n,f,1);break;case 2:case 9:if(bp(f)){Oe=0,Zn=null,gg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==t||(Oe=7),wi(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:bp(f)?(Oe=0,Zn=null,gg(n)):(Oe=0,Zn=null,os(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?e0(g):A.stateNode.complete){Oe=0,Zn=null;var I=A.sibling;if(I!==null)me=I;else{var Q=A.return;Q!==null?(me=Q,zl(Q)):me=null}break e}}Oe=0,Zn=null,os(t,n,f,5);break;case 6:Oe=0,Zn=null,os(t,n,f,6);break;case 8:_f(),Je=6;break t;default:throw Error(r(462))}}dx();break}catch(ft){fg(t,ft)}while(!0);return Yi=cr=null,L.H=s,L.A=c,we=a,me!==null?0:(Ve=null,ve=0,al(),Je)}function dx(){for(;me!==null&&!qt();)mg(me)}function mg(t){var n=zm(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?zl(t):me=n}function gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Lu(n);default:Gm(a,n),n=me=pp(n,ia),n=zm(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?zl(t):me=n}function os(t,n,a,s){Yi=cr=null,Lu(n),Kr=null,$s=0;var c=n.return;try{if(ex(t,c,n,a,ve)){Je=1,Al(t,ni(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,Al(t,ni(a,t.current)),me=null;return}n.flags&32768?(Se||s===1?t=!0:is||(ve&536870912)!==0?t=!1:(Oa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),_g(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){_g(n,Oa);return}t=n.return;var a=ax(n.alternate,n,ia);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function _g(t,n){do{var a=rx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function vg(t,n,a,s,c,f,g,A,I){t.cancelPendingCommit=null;do Hl();while(pn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ru,hi(t,a,f,g,A,I),t===Ve&&(me=Ve=null,ve=0),rs=n,Ia=t,aa=a,pf=f,mf=c,og=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_x(ut,function(){return Eg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=F.p,F.p=2,g=we,we|=4;try{sx(t,n,a)}finally{we=g,F.p=c,L.T=s}}pn=1,xg(),Sg(),Mg()}}function xg(){if(pn===1){pn=0;var t=Ia,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=F.p;F.p=2;var c=we;we|=4;try{$m(n,t);var f=wf,g=rp(t.containerInfo),A=f.focusedElem,I=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&ap(A.ownerDocument.documentElement,A)){if(I!==null&&tu(A)){var Q=I.start,ft=I.end;if(ft===void 0&&(ft=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(ft,A.value.length);else{var gt=A.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var st=nt.getSelection(),Gt=A.textContent.length,Jt=Math.min(I.start,Gt),He=I.end===void 0?Jt:Math.min(I.end,Gt);!st.extend&&Jt>He&&(g=He,He=Jt,Jt=g);var j=ip(A,Jt),V=ip(A,He);if(j&&V&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(j.node,j.offset),st.removeAllRanges(),Jt>He?(st.addRange(K),st.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),st.addRange(K))}}}}for(gt=[],st=A;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Jl=!!Df,wf=Df=null}finally{we=c,F.p=s,L.T=a}}t.current=n,pn=2}}function Sg(){if(pn===2){pn=0;var t=Ia,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=F.p;F.p=2;var c=we;we|=4;try{jm(t,n.alternate,n)}finally{we=c,F.p=s,L.T=a}}pn=3}}function Mg(){if(pn===4||pn===3){pn=0,U();var t=Ia,n=rs,a=aa,s=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,rs=Ia=null,yg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Fa=null),Nr(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=F.p,F.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var A=s[g];f(A.value,{componentStack:A.stack})}}finally{L.T=n,F.p=c}}(aa&3)!==0&&Hl(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?_o++:(_o=0,gf=t):_o=0,vo(0)}}function yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Hl(){return xg(),Sg(),Mg(),Eg()}function Eg(){if(pn!==5)return!1;var t=Ia,n=pf;pf=0;var a=Nr(aa),s=L.T,c=F.p;try{F.p=32>a?32:a,L.T=null,a=mf,mf=null;var f=Ia,g=aa;if(pn=0,rs=Ia=null,aa=0,(we&6)!==0)throw Error(r(331));var A=we;if(we|=4,ag(f.current),eg(f,f.current,g,a),we=A,vo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{F.p=c,L.T=s,yg(t,n)}}function Tg(t,n,a){n=ni(a,n),n=Yu(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(Cn(t,2),wi(t))}function Pe(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))){t=ni(a,t),a=bm(2),s=wa(n,a,2),s!==null&&(Am(a,s,n,t),Cn(s,2),wi(s));break}}n=n.return}}function xf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new cx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ff=!0,c.add(a),t=px.bind(null,t,n,a),n.then(t,t))}function px(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>y()-Ol?(we&2)===0&&ss(t,0):hf|=a,as===ve&&(as=0)),wi(t)}function bg(t,n){n===0&&(n=Ne()),t=sr(t,n),t!==null&&(Cn(t,n),wi(t))}function mx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function gx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),bg(t,a)}function _x(t,n){return ye(t,n)}var Gl=null,ls=null,Sf=!1,Vl=!1,Mf=!1,za=0;function wi(t){t!==ls&&t.next===null&&(ls===null?Gl=ls=t:ls=ls.next=t),Vl=!0,Sf||(Sf=!0,xx())}function vo(t,n){if(!Mf&&Vl){Mf=!0;do for(var a=!1,s=Gl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Lt(42|t)+1)-1,f&=c&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(s,f))}else f=ve,f=ct(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||zt(s,f)||(a=!0,Dg(s,f));s=s.next}while(a);Mf=!1}}function vx(){Ag()}function Ag(){Vl=Sf=!1;var t=0;za!==0&&Dx()&&(t=za);for(var n=y(),a=null,s=Gl;s!==null;){var c=s.next,f=Rg(s,n);f===0?(s.next=null,a===null?Gl=c:a.next=c,c===null&&(ls=a)):(a=s,(t!==0||(f&3)!==0)&&(Vl=!0)),s=c}pn!==0&&pn!==5||vo(t),za!==0&&(za=0)}function Rg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Lt(f),A=1<<g,I=c[g];I===-1?((A&a)===0||(A&s)!==0)&&(c[g]=ne(A,n)):I<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=ve,a=ct(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||zt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ue(s),Nr(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return s=Cg.bind(null,t),a=ye(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=ve;return s=ct(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(cg(t,s,n),Rg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function Dg(t,n){if(Hl())return null;cg(t,n,!0)}function xx(){Ux(function(){(we&6)!==0?ye(dt,vx):Ag()})}function yf(){if(za===0){var t=Yr;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),za=t}return za}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Sx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=wg((c[hn]||null).action),g=s.submitter;g&&(n=(n=g[hn]||null)?wg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new tl("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(za!==0){var I=g?Ug(c,g):new FormData(c);Gu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=g?Ug(c,g):new FormData(c),Gu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],Mx=Tf.toLowerCase(),yx=Tf[0].toUpperCase()+Tf.slice(1);gi(Mx,"on"+yx)}gi(lp,"onAnimationEnd"),gi(cp,"onAnimationIteration"),gi(up,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Bv,"onTransitionRun"),gi(zv,"onTransitionStart"),gi(Hv,"onTransitionCancel"),gi(fp,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(ft){il(ft)}c.currentTarget=null,f=I}else for(g=0;g<s.length;g++){if(A=s[g],I=A.instance,Q=A.currentTarget,A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(ft){il(ft)}c.currentTarget=null,f=I}}}}function ge(t,n){var a=n[Sa];a===void 0&&(a=n[Sa]=new Set);var s=t+"__bubble";a.has(s)||(Ng(n,t,2,!1),a.add(s))}function bf(t,n,a){var s=0;n&&(s|=4),Ng(a,t,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Xl]){t[Xl]=!0,rt.forEach(function(a){a!=="selectionchange"&&(Ex.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,bf("selectionchange",!1,n))}}function Ng(t,n,a,s){switch(l0(n)){case 2:var c=Qx;break;case 8:c=Jx;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===c)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;A!==null;){if(g=Ma(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=f=g;continue t}A=A.parentNode}}s=s.return}Bd(function(){var Q=f,ft=Xc(a),gt=[];t:{var nt=hp.get(t);if(nt!==void 0){var st=tl,Gt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":st=gv;break;case"focusin":Gt="focus",st=Zc;break;case"focusout":Gt="blur",st=Zc;break;case"beforeblur":case"afterblur":st=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=xv;break;case lp:case cp:case up:st=ov;break;case fp:st=Mv;break;case"scroll":case"scrollend":st=nv;break;case"wheel":st=Ev;break;case"copy":case"cut":case"paste":st=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Xd;break;case"toggle":case"beforetoggle":st=bv}var Jt=(n&4)!==0,He=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=Q,K;V!==null;){var mt=V;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||j===null||(mt=Hs(V,j),mt!=null&&Jt.push(So(V,mt,K))),He)break;V=V.return}0<Jt.length&&(nt=new st(nt,Gt,null,a,ft),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",nt&&a!==Vc&&(Gt=a.relatedTarget||a.fromElement)&&(Ma(Gt)||Gt[Gi]))break t;if((st||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,st?(Gt=a.relatedTarget||a.toElement,st=Q,Gt=Gt?Ma(Gt):null,Gt!==null&&(He=u(Gt),Jt=Gt.tag,Gt!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(st=null,Gt=Q),st!==Gt)){if(Jt=Gd,mt="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Xd,mt="onPointerLeave",j="onPointerEnter",V="pointer"),He=st==null?nt:nr(st),K=Gt==null?nt:nr(Gt),nt=new Jt(mt,V+"leave",st,a,ft),nt.target=He,nt.relatedTarget=K,mt=null,Ma(ft)===Q&&(Jt=new Jt(j,V+"enter",Gt,a,ft),Jt.target=K,Jt.relatedTarget=He,mt=Jt),He=mt,st&&Gt)e:{for(Jt=Tx,j=st,V=Gt,K=0,mt=j;mt;mt=Jt(mt))K++;mt=0;for(var Qt=V;Qt;Qt=Jt(Qt))mt++;for(;0<K-mt;)j=Jt(j),K--;for(;0<mt-K;)V=Jt(V),mt--;for(;K--;){if(j===V||V!==null&&j===V.alternate){Jt=j;break e}j=Jt(j),V=Jt(V)}Jt=null}else Jt=null;st!==null&&Og(gt,nt,st,Jt,!1),Gt!==null&&He!==null&&Og(gt,He,Gt,Jt,!0)}}t:{if(nt=Q?nr(Q):window,st=nt.nodeName&&nt.nodeName.toLowerCase(),st==="select"||st==="input"&&nt.type==="file")var Ae=Qd;else if(Zd(nt))if(Jd)Ae=Pv;else{Ae=Nv;var Yt=Lv}else st=nt.nodeName,!st||st.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?Q&&Pr(Q.elementType)&&(Ae=Qd):Ae=Ov;if(Ae&&(Ae=Ae(t,Q))){Kd(gt,Ae,a,ft);break t}Yt&&Yt(t,nt,Q),t==="focusout"&&Q&&nt.type==="number"&&Q.memoizedProps.value!=null&&pi(nt,"number",nt.value)}switch(Yt=Q?nr(Q):window,t){case"focusin":(Zd(Yt)||Yt.contentEditable==="true")&&(zr=Yt,eu=Q,js=null);break;case"focusout":js=eu=zr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,sp(gt,a,ft);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":sp(gt,a,ft)}var fe;if(Qc)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Br?Yd(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(kd&&a.locale!=="ko"&&(Br||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Br&&(fe=zd()):(Ea=ft,qc="value"in Ea?Ea.value:Ea.textContent,Br=!0)),Yt=kl(Q,xe),0<Yt.length&&(xe=new Vd(xe,t,null,a,ft),gt.push({event:xe,listeners:Yt}),fe?xe.data=fe:(fe=jd(a),fe!==null&&(xe.data=fe)))),(fe=Rv?Cv(t,a):Dv(t,a))&&(xe=kl(Q,"onBeforeInput"),0<xe.length&&(Yt=new Vd("onBeforeInput","beforeinput",null,a,ft),gt.push({event:Yt,listeners:xe}),Yt.data=fe)),Sx(gt,t,Q,a,ft)}Lg(gt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(t,a),c!=null&&s.unshift(So(t,c,f)),c=Hs(t,n),c!=null&&s.push(So(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Tx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var A=a,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===s)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,c?(Q=Hs(a,f),Q!=null&&g.unshift(So(a,Q,I))):c||(Q=Hs(a,f),Q!=null&&g.push(So(a,Q,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var bx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(bx,`
`).replace(Ax,"")}function Fg(t,n){return n=Pg(n),Pg(t)===n}function ze(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(t,""+s);break;case"className":ae(t,"class",s);break;case"tabIndex":ae(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,a,s);break;case"style":Vi(t,s,f);break;case"data":if(n!=="object"){ae(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Xi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ee(t,"popover",s);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ee(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tv.get(a)||a,ee(t,a,s))}}function Cf(t,n,a,s,c,f){switch(a){case"style":Vi(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Un(t,s):(typeof s=="number"||typeof s=="bigint")&&Un(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ee(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,f,g,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),s&&ze(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=g=c=null,I=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":g=ft;break;case"checked":I=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ze(t,n,s,ft,a,null)}}Xn(t,f,A,I,Q,g,c,!1);return;case"select":ge("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:ze(t,n,c,A,a,null)}n=f,a=g,t.multiple=!!s,n!=null?kn(t,!!s,n,!1):a!=null&&kn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:ze(t,n,g,A,a,null)}an(t,s,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":ze(t,n,I,s,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)ge(xo[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,Q,s,a,null)}return;default:if(Pr(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Cf(t,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&ze(t,n,A,s,a,null))}function Rx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,A=null,I=null,Q=null,ft=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=gt;default:s.hasOwnProperty(st)||ze(t,n,st,null,s,gt)}}for(var nt in s){var st=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(st!=null||gt!=null))switch(nt){case"type":f=st;break;case"name":c=st;break;case"checked":Q=st;break;case"defaultChecked":ft=st;break;case"value":g=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==gt&&ze(t,n,nt,st,s,gt)}}wn(t,g,A,I,Q,ft,f,c);return;case"select":st=g=A=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":st=I;default:s.hasOwnProperty(f)||ze(t,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==I&&ze(t,n,c,f,s,I)}n=A,a=g,s=st,nt!=null?kn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?kn(t,!!a,n,!0):kn(t,!!a,a?[]:"",!1));return;case"textarea":st=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(t,n,A,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ze(t,n,g,c,s,f)}Le(t,nt,st);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!s.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:ze(t,n,Gt,null,s,nt));for(I in s)nt=s[I],st=a[I],s.hasOwnProperty(I)&&nt!==st&&(nt!=null||st!=null)&&(I==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":ze(t,n,I,nt,s,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&ze(t,n,Jt,null,s,nt);for(Q in s)if(nt=s[Q],st=a[Q],s.hasOwnProperty(Q)&&nt!==st&&(nt!=null||st!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:ze(t,n,Q,nt,s,st)}return;default:if(Pr(n)){for(var He in a)nt=a[He],a.hasOwnProperty(He)&&nt!==void 0&&!s.hasOwnProperty(He)&&Cf(t,n,He,void 0,s,nt);for(ft in s)nt=s[ft],st=a[ft],!s.hasOwnProperty(ft)||nt===st||nt===void 0&&st===void 0||Cf(t,n,ft,nt,s,st);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!s.hasOwnProperty(j)&&ze(t,n,j,null,s,nt);for(gt in s)nt=s[gt],st=a[gt],!s.hasOwnProperty(gt)||nt===st||nt==null&&st==null||ze(t,n,gt,nt,s,st)}function Ig(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,A=c.duration;if(f&&A&&Ig(g)){for(g=0,A=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],Q=I.startTime;if(Q>A)break;var ft=I.transferSize,gt=I.initiatorType;ft&&Ig(gt)&&(I=I.responseEnd,g+=ft*(I<A?1:(A-Q)/(I-Q)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Df=null,wf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function Dx(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(Lx)}:Hg;function Lx(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function Vg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),hs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[er]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);hs(n)}function Xg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[er])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Ox(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Px(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ff=null;function Wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Yg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zs(t)}var li=new Map,jg=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=F.d;F.d={f:Fx,r:Ix,D:Bx,C:zx,L:Hx,m:Gx,X:Xx,S:Vx,M:kx};function Fx(){var t=ra.f(),n=Il();return t||n}function Ix(t){var n=ya(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):ra.r(t)}var cs=typeof document>"u"?null:document;function Zg(t,n,a){var s=cs;if(s&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),k(n),s.head.appendChild(n)))}}function Bx(t){ra.D(t),Zg("dns-prefetch",t,null)}function zx(t,n){ra.C(t,n),Zg("preconnect",t,n)}function Hx(t,n,a){ra.L(t,n,a);var s=cs;if(s&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=us(t);break;case"script":f=fs(t)}li.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),yn(n,"link",t),k(n),s.head.appendChild(n)))}}function Gx(t,n){ra.m(t,n);var a=cs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(t)}if(!li.has(f)&&(t=S({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),yn(s,"link",t),k(s),a.head.appendChild(s)}}}function Vx(t,n,a){ra.S(t,n,a);var s=cs;if(s&&t){var c=R(s).hoistableStyles,f=us(t);n=n||"default";var g=c.get(f);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(yo(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&If(t,a);var I=g=s.createElement("link");k(I),yn(I,"link",t),I._p=new Promise(function(Q,ft){I.onload=Q,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Yl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},c.set(f,g)}}}function Xx(t,n){ra.X(t,n);var a=cs;if(a&&t){var s=R(a).hoistableScripts,c=fs(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=S({src:t,async:!0},n),(n=li.get(c))&&Bf(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function kx(t,n){ra.M(t,n);var a=cs;if(a&&t){var s=R(a).hoistableScripts,c=fs(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=li.get(c))&&Bf(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kg(t,n,a,s){var c=(c=et.current)?ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=R(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var f=R(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(yo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||Wx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=R(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+ie(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function Wx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),k(n),t.head.appendChild(n))}function fs(t){return'[src="'+ie(t)+'"]'}function Eo(t){return"script[async]"+t}function Jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,k(s),s;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),k(s),yn(s,"style",c),Yl(s,a.precedence,t),n.instance=s;case"stylesheet":c=us(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;s=Qg(a),(c=li.get(c))&&If(s,c),f=(t.ownerDocument||t).createElement("link"),k(f);var g=f;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),yn(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=fs(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,k(c),c):(s=a,(c=li.get(f))&&(s=S({},a),Bf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,t));return n.instance}function Yl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function $g(t,n,a){if(jl===null){var s=new Map,c=jl=new Map;c.set(a,s)}else c=jl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[er]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(f):s.set(g,[f])}}return s}function t0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(s.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,s=Qg(s),(c=li.get(c))&&If(s,c),f=f.createElement("link"),k(f);var g=f;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function jx(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&zf===0&&(zf=62500*Cx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(Zx,t),Kl=null,Zl.call(t))}function Zx(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var s=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function Kx(t,n,a,s,c,f,g,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function n0(t,n,a,s,c,f,g,A,I,Q,ft,gt){return t=new Kx(t,n,a,g,I,Q,ft,gt,A),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),t}function i0(t){return t?(t=Vr,t):Vr}function a0(t,n,a,s,c,f){c=i0(c),s.context===null?s.context=c:s.pendingContext=c,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(t,s,n),a!==null&&(Hn(a,t,n),eo(a,t,n))}function r0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){r0(t,n),(t=t.alternate)&&r0(t,n)}function s0(t){if(t.tag===13||t.tag===31){var n=sr(t,67108864);n!==null&&Hn(n,t,67108864),Hf(t,67108864)}}function o0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Lr(n);var a=sr(t,n);a!==null&&Hn(a,t,n),Hf(t,n)}}var Jl=!0;function Qx(t,n,a,s){var c=L.T;L.T=null;var f=F.p;try{F.p=2,Gf(t,n,a,s)}finally{F.p=f,L.T=c}}function Jx(t,n,a,s){var c=L.T;L.T=null;var f=F.p;try{F.p=8,Gf(t,n,a,s)}finally{F.p=f,L.T=c}}function Gf(t,n,a,s){if(Jl){var c=Vf(s);if(c===null)Rf(t,n,s,$l,a),c0(t,s);else if(tS(c,t,n,a,s))s.stopPropagation();else if(c0(t,s),n&4&&-1<$x.indexOf(t)){for(;c!==null;){var f=ya(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-Lt(g);A.entanglements[1]|=I,g&=~I}wi(f),(we&6)===0&&(Pl=y()+500,vo(0))}}break;case 31:case 13:A=sr(f,2),A!==null&&Hn(A,f,2),Il(),Hf(f,2)}if(f=Vf(s),f===null&&Rf(t,n,s,$l,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Rf(t,n,s,null,a)}}function Vf(t){return t=Xc(t),Xf(t)}var $l=null;function Xf(t){if($l=null,t=Ma(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case xt:return 8;case ut:case kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var kf=!1,Ga=null,Va=null,Xa=null,bo=new Map,Ao=new Map,ka=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ya(n),n!==null&&s0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function tS(t,n,a,s,c){switch(n){case"focusin":return Ga=Ro(Ga,t,n,a,s,c),!0;case"dragenter":return Va=Ro(Va,t,n,a,s,c),!0;case"mouseover":return Xa=Ro(Xa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ro(bo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,s,c)),!0}return!1}function u0(t){var n=Ma(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Or(t.priority,function(){o0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Or(t.priority,function(){o0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Vc=s,a.target.dispatchEvent(s),Vc=null}else return n=ya(a),n!==null&&s0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){tc(t)&&a.delete(n)}function eS(){kf=!1,Ga!==null&&tc(Ga)&&(Ga=null),Va!==null&&tc(Va)&&(Va=null),Xa!==null&&tc(Xa)&&(Xa=null),bo.forEach(f0),Ao.forEach(f0)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,kf||(kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,eS)))}var nc=null;function h0(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Xf(s||a)===null)continue;break}var f=ya(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function hs(t){function n(I){return ec(I,t)}Ga!==null&&ec(Ga,t),Va!==null&&ec(Va,t),Xa!==null&&ec(Xa,t),bo.forEach(n),Ao.forEach(n);for(var a=0;a<ka.length;a++){var s=ka[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)u0(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[hn]||null;if(typeof f=="function")g||h0(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[hn]||null)A=g.formAction;else if(Xf(c)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),h0(a)}}}function d0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}ic.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();a0(a,s,t,n,null,null)},ic.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a0(t.current,2,null,t,null,null),Il(),n[Gi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ai();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&u0(t)}};var p0=e.version;if(p0!=="19.2.4")throw Error(r(527,p0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var nS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{yt=ac.inject(nS),St=ac}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Mm,f=ym,g=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=n0(t,1,!1,null,null,a,s,null,c,f,g,d0),t[Gi]=n.current,Af(t),new Wf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Mm,g=ym,A=Em,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=n0(t,1,!0,n,a??null,s,c,I,f,g,A,d0),n.context=i0(null),a=n.current,s=Qn(),s=Lr(s),c=Da(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,Cn(n,a),wi(n),t[Gi]=n.current,Af(t),new ic(n)},Do.version="19.2.4",Do}var T0;function hS(){if(T0)return jf.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=fS(),jf.exports}var dS=hS();const bd="183",pS=0,b0=1,mS=2,Cc=1,gS=2,Io=3,tr=0,Vn=1,fa=2,da=0,Cs=1,A0=2,R0=3,C0=4,_S=5,Ar=100,vS=101,xS=102,SS=103,MS=104,yS=200,ES=201,TS=202,bS=203,Lh=204,Nh=205,AS=206,RS=207,CS=208,DS=209,wS=210,US=211,LS=212,NS=213,OS=214,Oh=0,Ph=1,Fh=2,ws=3,Ih=4,Bh=5,zh=6,Hh=7,S_=0,PS=1,FS=2,Fi=0,M_=1,y_=2,E_=3,T_=4,b_=5,A_=6,R_=7,C_=300,wr=301,Us=302,Jf=303,$f=304,Bc=306,Gh=1e3,ha=1001,Vh=1002,En=1003,IS=1004,rc=1005,Rn=1006,th=1007,Cr=1008,fi=1009,D_=1010,w_=1011,zo=1012,Ad=1013,zi=1014,Oi=1015,ga=1016,Rd=1017,Cd=1018,Ho=1020,U_=35902,L_=35899,N_=1021,O_=1022,Ti=1023,_a=1026,Dr=1027,P_=1028,Dd=1029,Ls=1030,wd=1031,Ud=1033,Dc=33776,wc=33777,Uc=33778,Lc=33779,Xh=35840,kh=35841,Wh=35842,qh=35843,Yh=36196,jh=37492,Zh=37496,Kh=37488,Qh=37489,Jh=37490,$h=37491,td=37808,ed=37809,nd=37810,id=37811,ad=37812,rd=37813,sd=37814,od=37815,ld=37816,cd=37817,ud=37818,fd=37819,hd=37820,dd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,xd=36285,Sd=36286,BS=3200,zS=0,HS=1,Ja="",ui="srgb",Ns="srgb-linear",Oc="linear",Fe="srgb",ds=7680,D0=519,GS=512,VS=513,XS=514,Ld=515,kS=516,WS=517,Nd=518,qS=519,w0=35044,U0="300 es",Pi=2e3,Pc=2001;function YS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jS(){const o=Fc("canvas");return o.style.display="block",o}const L0={};function N0(...o){const e="THREE."+o.shift();console.log(e,...o)}function F_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function se(...o){o=F_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ce(...o){o=F_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Ic(...o){const e=o.join(" ");e in L0||(L0[e]=!0,se(...o))}function ZS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const KS={[Oh]:Ph,[Fh]:zh,[Ih]:Hh,[ws]:Bh,[Ph]:Oh,[zh]:Fh,[Hh]:Ih,[Bh]:ws};class Ps{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=Math.PI/180,Md=180/Math.PI;function Vo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function QS(o,e){return(o%e+e)%e}function nh(o,e,i){return(1-i)*o+i*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,i=0){Ie.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,p){let m=r[l+0],d=r[l+1],v=r[l+2],S=r[l+3],_=u[h+0],E=u[h+1],T=u[h+2],C=u[h+3];if(S!==C||m!==_||d!==E||v!==T){let M=m*_+d*E+v*T+S*C;M<0&&(_=-_,E=-E,T=-T,C=-C,M=-M);let x=1-p;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);x=Math.sin(x*D)/P,p=Math.sin(p*D)/P,m=m*x+_*p,d=d*x+E*p,v=v*x+T*p,S=S*x+C*p}else{m=m*x+_*p,d=d*x+E*p,v=v*x+T*p,S=S*x+C*p;const D=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=D,d*=D,v*=D,S*=D}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,u,h){const p=r[l],m=r[l+1],d=r[l+2],v=r[l+3],S=u[h],_=u[h+1],E=u[h+2],T=u[h+3];return e[i]=p*T+v*S+m*E-d*_,e[i+1]=m*T+v*_+d*S-p*E,e[i+2]=d*T+v*E+p*_-m*S,e[i+3]=v*T-p*S-m*_-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),v=p(l/2),S=p(u/2),_=m(r/2),E=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=_*v*S+d*E*T,this._y=d*E*S-_*v*T,this._z=d*v*T+_*E*S,this._w=d*v*S-_*E*T;break;case"YXZ":this._x=_*v*S+d*E*T,this._y=d*E*S-_*v*T,this._z=d*v*T-_*E*S,this._w=d*v*S+_*E*T;break;case"ZXY":this._x=_*v*S-d*E*T,this._y=d*E*S+_*v*T,this._z=d*v*T+_*E*S,this._w=d*v*S-_*E*T;break;case"ZYX":this._x=_*v*S-d*E*T,this._y=d*E*S+_*v*T,this._z=d*v*T-_*E*S,this._w=d*v*S+_*E*T;break;case"YZX":this._x=_*v*S+d*E*T,this._y=d*E*S+_*v*T,this._z=d*v*T-_*E*S,this._w=d*v*S-_*E*T;break;case"XZY":this._x=_*v*S-d*E*T,this._y=d*E*S-_*v*T,this._z=d*v*T+_*E*S,this._w=d*v*S+_*E*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],_=r+p+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-d)*E,this._z=(h-l)*E}else if(r>p&&r>S){const E=2*Math.sqrt(1+r-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-r-S);this._w=(u-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-r-p);this._w=(h-l)/E,this._x=(u+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=r*v+h*p+l*d-u*m,this._y=l*v+h*m+u*p-r*d,this._z=u*v+h*d+r*m-l*p,this._w=h*v-r*p-l*m-u*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(O0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*r),v=2*(p*i-u*l),S=2*(u*r-h*i);return this.x=i+m*d+h*S-p*v,this.y=r+m*v+p*d-u*S,this.z=l+m*S+u*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*h-r*m,this.z=r*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new at,O0=new Fs;class he{constructor(e,i,r,l,u,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,p,m,d)}set(e,i,r,l,u,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],v=r[4],S=r[7],_=r[2],E=r[5],T=r[8],C=l[0],M=l[3],x=l[6],D=l[1],P=l[4],N=l[7],X=l[2],z=l[5],B=l[8];return u[0]=h*C+p*D+m*X,u[3]=h*M+p*P+m*z,u[6]=h*x+p*N+m*B,u[1]=d*C+v*D+S*X,u[4]=d*M+v*P+S*z,u[7]=d*x+v*N+S*B,u[2]=_*C+E*D+T*X,u[5]=_*M+E*P+T*z,u[8]=_*x+E*N+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-r*u*v+r*p*m+l*u*d-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,_=p*m-v*u,E=d*u-h*m,T=i*S+r*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(l*d-v*r)*C,e[2]=(p*r-l*h)*C,e[3]=_*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=E*C,e[7]=(r*m-d*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,p){const m=Math.cos(u),d=Math.sin(u);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new he,P0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JS(){const o={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Oc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ic("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ic("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ns]:{primaries:e,whitePoint:r,transfer:Oc,toXYZ:P0,fromXYZ:F0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:P0,fromXYZ:F0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Te=JS();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class $S{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ps===void 0&&(ps=Fc("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Fc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=pa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tM=0;class Od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?u.push(rh(l[h].image)):u.push(rh(l[h]))}else u=rh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$S.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let eM=0;const sh=new at;class On extends Ps{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=ha,l=ha,u=Rn,h=Cr,p=Ti,m=fi,d=On.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Vo(),this.name="",this.source=new Od(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case ha:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case ha:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=C_;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,d=m[0],v=m[4],S=m[8],_=m[1],E=m[5],T=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(S-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+C)<.1&&Math.abs(T+M)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,N=(E+1)/2,X=(x+1)/2,z=(v+_)/4,B=(S+C)/4,b=(T+M)/4;return P>N&&P>X?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=z/r,u=B/r):N>X?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=z/l,u=b/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=B/u,l=b/u),this.set(r,l,u,i),this}let D=Math.sqrt((M-T)*(M-T)+(S-C)*(S-C)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(S-C)/D,this.z=(_-v)/D,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nM extends Ps{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new On(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends nM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class I_ extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,i,r,l,u,h,p,m,d,v,S,_,E,T,C,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,p,m,d,v,S,_,E,T,C,M)}set(e,i,r,l,u,h,p,m,d,v,S,_,E,T,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=_,x[3]=E,x[7]=T,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),h=1/ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const _=h*v,E=h*S,T=p*v,C=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+T*d,i[5]=_-C*d,i[9]=-p*m,i[2]=C-_*d,i[6]=T+E*d,i[10]=h*m}else if(e.order==="YXZ"){const _=m*v,E=m*S,T=d*v,C=d*S;i[0]=_+C*p,i[4]=T*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-T,i[6]=C+_*p,i[10]=h*m}else if(e.order==="ZXY"){const _=m*v,E=m*S,T=d*v,C=d*S;i[0]=_-C*p,i[4]=-h*S,i[8]=T+E*p,i[1]=E+T*p,i[5]=h*v,i[9]=C-_*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const _=h*v,E=h*S,T=p*v,C=p*S;i[0]=m*v,i[4]=T*d-E,i[8]=_*d+C,i[1]=m*S,i[5]=C*d+_,i[9]=E*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const _=h*m,E=h*d,T=p*m,C=p*d;i[0]=m*v,i[4]=C-_*S,i[8]=T*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+T,i[10]=_-C*S}else if(e.order==="XZY"){const _=h*m,E=h*d,T=p*m,C=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=_*S+C,i[5]=h*v,i[9]=E*S-T,i[2]=T*S-E,i[6]=p*v,i[10]=C*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,rM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),qa.crossVectors(r,Jn),qa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),qa.crossVectors(r,Jn)),qa.normalize(),sc.crossVectors(Jn,qa),l[0]=qa.x,l[4]=sc.x,l[8]=Jn.x,l[1]=qa.y,l[5]=sc.y,l[9]=Jn.y,l[2]=qa.z,l[6]=sc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],v=r[1],S=r[5],_=r[9],E=r[13],T=r[2],C=r[6],M=r[10],x=r[14],D=r[3],P=r[7],N=r[11],X=r[15],z=l[0],B=l[4],b=l[8],w=l[12],pt=l[1],H=l[5],$=l[9],it=l[13],lt=l[2],J=l[6],L=l[10],F=l[14],ot=l[3],ht=l[7],Et=l[11],O=l[15];return u[0]=h*z+p*pt+m*lt+d*ot,u[4]=h*B+p*H+m*J+d*ht,u[8]=h*b+p*$+m*L+d*Et,u[12]=h*w+p*it+m*F+d*O,u[1]=v*z+S*pt+_*lt+E*ot,u[5]=v*B+S*H+_*J+E*ht,u[9]=v*b+S*$+_*L+E*Et,u[13]=v*w+S*it+_*F+E*O,u[2]=T*z+C*pt+M*lt+x*ot,u[6]=T*B+C*H+M*J+x*ht,u[10]=T*b+C*$+M*L+x*Et,u[14]=T*w+C*it+M*F+x*O,u[3]=D*z+P*pt+N*lt+X*ot,u[7]=D*B+P*H+N*J+X*ht,u[11]=D*b+P*$+N*L+X*Et,u[15]=D*w+P*it+N*F+X*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],_=e[10],E=e[14],T=e[3],C=e[7],M=e[11],x=e[15],D=m*E-d*_,P=p*E-d*S,N=p*_-m*S,X=h*E-d*v,z=h*_-m*v,B=h*S-p*v;return i*(C*D-M*P+x*N)-r*(T*D-M*X+x*z)+l*(T*P-C*X+x*B)-u*(T*N-C*z+M*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],_=e[10],E=e[11],T=e[12],C=e[13],M=e[14],x=e[15],D=i*p-r*h,P=i*m-l*h,N=i*d-u*h,X=r*m-l*p,z=r*d-u*p,B=l*d-u*m,b=v*C-S*T,w=v*M-_*T,pt=v*x-E*T,H=S*M-_*C,$=S*x-E*C,it=_*x-E*M,lt=D*it-P*$+N*H+X*pt-z*w+B*b;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/lt;return e[0]=(p*it-m*$+d*H)*J,e[1]=(l*$-r*it-u*H)*J,e[2]=(C*B-M*z+x*X)*J,e[3]=(_*z-S*B-E*X)*J,e[4]=(m*pt-h*it-d*w)*J,e[5]=(i*it-l*pt+u*w)*J,e[6]=(M*N-T*B-x*P)*J,e[7]=(v*B-_*N+E*P)*J,e[8]=(h*$-p*pt+d*b)*J,e[9]=(r*pt-i*$-u*b)*J,e[10]=(T*z-C*N+x*D)*J,e[11]=(S*N-v*z-E*D)*J,e[12]=(p*w-h*H-m*b)*J,e[13]=(i*H-r*w+l*b)*J,e[14]=(C*P-T*X-M*D)*J,e[15]=(v*X-S*P+_*D)*J,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,p=e.y,m=e.z,d=u*h,v=u*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+r,v*m-l*h,0,d*m-l*p,v*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,p=i._z,m=i._w,d=u+u,v=h+h,S=p+p,_=u*d,E=u*v,T=u*S,C=h*v,M=h*S,x=p*S,D=m*d,P=m*v,N=m*S,X=r.x,z=r.y,B=r.z;return l[0]=(1-(C+x))*X,l[1]=(E+N)*X,l[2]=(T-P)*X,l[3]=0,l[4]=(E-N)*z,l[5]=(1-(_+x))*z,l[6]=(M+D)*z,l[7]=0,l[8]=(T+P)*B,l[9]=(M-D)*B,l[10]=(1-(_+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let h=ms.set(l[0],l[1],l[2]).length();const p=ms.set(l[4],l[5],l[6]).length(),m=ms.set(l[8],l[9],l[10]).length();u<0&&(h=-h),xi.copy(this);const d=1/h,v=1/p,S=1/m;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=S,xi.elements[9]*=S,xi.elements[10]*=S,i.setFromRotationMatrix(xi),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,h,p=Pi,m=!1){const d=this.elements,v=2*u/(i-e),S=2*u/(r-l),_=(i+e)/(i-e),E=(r+l)/(r-l);let T,C;if(m)T=u/(h-u),C=h*u/(h-u);else if(p===Pi)T=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(p===Pc)T=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,u,h,p=Pi,m=!1){const d=this.elements,v=2/(i-e),S=2/(r-l),_=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,C;if(m)T=1/(h-u),C=h/(h-u);else if(p===Pi)T=-2/(h-u),C=-(h+u)/(h-u);else if(p===Pc)T=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ms=new at,xi=new fn,aM=new at(0,0,0),rM=new at(1,1,1),qa=new at,sc=new at,Jn=new at,I0=new fn,B0=new Fs;class va{constructor(e=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return I0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return B0.setFromEuler(this),this.setFromQuaternion(B0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const z0=new at,gs=new Fs,sa=new fn,oc=new at,Uo=new at,oM=new at,lM=new Fs,H0=new at(1,0,0),G0=new at(0,1,0),V0=new at(0,0,1),X0={type:"added"},cM={type:"removed"},_s={type:"childadded",child:null},oh={type:"childremoved",child:null};class ti extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new at,i=new va,r=new Fs,l=new at(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new he}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(G0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,i){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(G0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?oc.copy(e):oc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Uo,oc,this.up):sa.lookAt(oc,Uo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(sa),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),_s.child=e,this.dispatchEvent(_s),_s.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cM),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),_=h(e.skeletons),E=h(e.animations),T=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new at(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(d,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],_=v.position.distanceTo(S.position),E=.02,T=.005;d.inputState.pinching&&_>E+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=E-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},cc={h:0,s:0,l:0};function ch(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ge{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=QS(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ch(h,u,e+1/3),this.g=ch(h,u,e),this.b=ch(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=z_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Te.workingToColorSpace(An.copy(this),e),Math.round(Me(An.r*255,0,255))*65536+Math.round(Me(An.g*255,0,255))*256+Math.round(Me(An.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,h=Math.max(r,l,u),p=Math.min(r,l,u);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case r:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-r)/S+2;break;case u:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ui){Te.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ya),this.setHSL(Ya.h+e,Ya.s+i,Ya.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ya),e.getHSL(cc);const r=nh(Ya.h,cc.h,i),l=nh(Ya.s,cc.s,i),u=nh(Ya.l,cc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ge;Ge.NAMES=z_;class fM extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Si=new at,oa=new at,uh=new at,la=new at,vs=new at,xs=new at,k0=new at,fh=new at,hh=new at,dh=new at,ph=new en,mh=new en,gh=new en;class Ei{constructor(e=new at,i=new at,r=new at){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Si.subVectors(l,i),oa.subVectors(r,i),uh.subVectors(e,i);const h=Si.dot(Si),p=Si.dot(oa),m=Si.dot(uh),d=oa.dot(oa),v=oa.dot(uh),S=h*d-p*p;if(S===0)return u.set(0,0,0),null;const _=1/S,E=(d*m-p*v)*_,T=(h*v-p*m)*_;return u.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,i,r,l,u,h,p,m){return this.getBarycoord(e,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,la.x),m.addScaledVector(h,la.y),m.addScaledVector(p,la.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,i),mh.fromBufferAttribute(e,r),gh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ph,u.x),h.addScaledVector(mh,u.y),h.addScaledVector(gh,u.z),h}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),oa.subVectors(e,i),Si.cross(oa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Si.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,p;vs.subVectors(l,r),xs.subVectors(u,r),fh.subVectors(e,r);const m=vs.dot(fh),d=xs.dot(fh);if(m<=0&&d<=0)return i.copy(r);hh.subVectors(e,l);const v=vs.dot(hh),S=xs.dot(hh);if(v>=0&&S<=v)return i.copy(l);const _=m*S-v*d;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(vs,h);dh.subVectors(e,u);const E=vs.dot(dh),T=xs.dot(dh);if(T>=0&&E<=T)return i.copy(u);const C=E*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(r).addScaledVector(xs,p);const M=v*T-E*S;if(M<=0&&S-v>=0&&E-T>=0)return k0.subVectors(u,l),p=(S-v)/(S-v+(E-T)),i.copy(l).addScaledVector(k0,p);const x=1/(M+C+_);return h=C*x,p=_*x,i.copy(r).addScaledVector(vs,h).addScaledVector(xs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=u.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),fc.subVectors(this.max,Lo),Ss.subVectors(e.a,Lo),Ms.subVectors(e.b,Lo),ys.subVectors(e.c,Lo),ja.subVectors(Ms,Ss),Za.subVectors(ys,Ms),xr.subVectors(Ss,ys);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-xr.z,xr.y,ja.z,0,-ja.x,Za.z,0,-Za.x,xr.z,0,-xr.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-xr.y,xr.x,0];return!_h(i,Ss,Ms,ys,fc)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,Ss,Ms,ys,fc))?!1:(hc.crossVectors(ja,Za),i=[hc.x,hc.y,hc.z],_h(i,Ss,Ms,ys,fc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new at,new at,new at,new at,new at,new at,new at,new at],Mi=new at,uc=new Xo,Ss=new at,Ms=new at,ys=new at,ja=new at,Za=new at,xr=new at,Lo=new at,fc=new at,hc=new at,Sr=new at;function _h(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){Sr.fromArray(o,u);const p=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=e.dot(Sr),d=i.dot(Sr),v=r.dot(Sr);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const un=new at,dc=new Ie;let hM=0;class Bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w0,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(e),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}}class H_ extends Bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class G_ extends Bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ma extends Bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const dM=new Xo,No=new at,vh=new at;class Pd{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(vh)),this.expandByPoint(No.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pM=0;const ci=new fn,xh=new ti,Es=new at,$n=new Xo,Oo=new Xo,vn=new at;class xa extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YS(e)?G_:H_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ma(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const p=i[u];Oo.setFromBufferAttribute(p),this.morphTargetsRelative?(vn.addVectors($n.min,Oo.min),$n.expandByPoint(vn),vn.addVectors($n.max,Oo.max),$n.expandByPoint(vn)):($n.expandByPoint(Oo.min),$n.expandByPoint(Oo.max))}$n.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)vn.fromBufferAttribute(p,d),m&&(Es.fromBufferAttribute(e,d),vn.add(Es)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new at,m[b]=new at;const d=new at,v=new at,S=new at,_=new Ie,E=new Ie,T=new Ie,C=new at,M=new at;function x(b,w,pt){d.fromBufferAttribute(r,b),v.fromBufferAttribute(r,w),S.fromBufferAttribute(r,pt),_.fromBufferAttribute(u,b),E.fromBufferAttribute(u,w),T.fromBufferAttribute(u,pt),v.sub(d),S.sub(d),E.sub(_),T.sub(_);const H=1/(E.x*T.y-T.x*E.y);isFinite(H)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(H),M.copy(S).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(H),p[b].add(C),p[w].add(C),p[pt].add(C),m[b].add(M),m[w].add(M),m[pt].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let b=0,w=D.length;b<w;++b){const pt=D[b],H=pt.start,$=pt.count;for(let it=H,lt=H+$;it<lt;it+=3)x(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const P=new at,N=new at,X=new at,z=new at;function B(b){X.fromBufferAttribute(l,b),z.copy(X);const w=p[b];P.copy(w),P.sub(X.multiplyScalar(X.dot(w))).normalize(),N.crossVectors(z,w);const H=N.dot(m[b])<0?-1:1;h.setXYZW(b,P.x,P.y,P.z,H)}for(let b=0,w=D.length;b<w;++b){const pt=D[b],H=pt.start,$=pt.count;for(let it=H,lt=H+$;it<lt;it+=3)B(e.getX(it+0)),B(e.getX(it+1)),B(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const l=new at,u=new at,h=new at,p=new at,m=new at,d=new at,v=new at,S=new at;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),p.add(v),m.add(v),d.add(v),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,_=new d.constructor(m.length*v);let E=0,T=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*v;for(let x=0;x<v;x++)_[T++]=d[E++]}return new Bi(_,v,S)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xa,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,r);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let v=0,S=d.length;v<S;v++){const _=d[v],E=e(_,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,_=d.length;S<_;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const u=e.morphAttributes;for(const d in u){const v=[],S=u[d];for(let _=0,E=S.length;_<E;_++)v.push(S[_].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mM=0;class zc extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Cs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ua=new at,Sh=new at,pc=new at,Ka=new at,Mh=new at,mc=new at,yh=new at;class gM{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Sh.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(pc),p=Ka.dot(this.direction),m=-Ka.dot(pc),d=Ka.lengthSq(),v=Math.abs(1-h*h);let S,_,E,T;if(v>0)if(S=h*m-p,_=h*p-m,T=u*v,S>=0)if(_>=-T)if(_<=T){const C=1/v;S*=C,_*=C,E=S*(S+h*_+2*p)+_*(h*S+_+2*m)+d}else _=u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;else _=-u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;else _<=-T?(S=Math.max(0,-(-h*u+p)),_=S>0?-u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+d):_<=T?(S=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+d):(S=Math.max(0,-(h*u+p)),_=S>0?u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+d);else _=h>0?-u:u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Sh).addScaledVector(pc,_),E}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const r=ua.dot(this.direction),l=ua.dot(ua)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return d>=0?(r=(e.min.x-_.x)*d,l=(e.max.x-_.x)*d):(r=(e.max.x-_.x)*d,l=(e.min.x-_.x)*d),v>=0?(u=(e.min.y-_.y)*v,h=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,h=(e.min.y-_.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(p=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,r,l,u){Mh.subVectors(i,e),mc.subVectors(r,e),yh.crossVectors(Mh,mc);let h=this.direction.dot(yh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Ka.subVectors(this.origin,e);const m=p*this.direction.dot(mc.crossVectors(Ka,mc));if(m<0)return null;const d=p*this.direction.dot(Mh.cross(Ka));if(d<0||m+d>h)return null;const v=-p*Ka.dot(yh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class V_ extends zc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const W0=new fn,Mr=new gM,gc=new Pd,q0=new at,_c=new at,vc=new at,xc=new at,Eh=new at,Sc=new at,Y0=new at,Mc=new at;class Hi extends ti{constructor(e=new xa,i=new V_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Sc.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const v=p[m],S=u[m];v!==0&&(Eh.fromBufferAttribute(S,e),h?Sc.addScaledVector(Eh,v):Sc.addScaledVector(Eh.sub(i),v))}i.add(Sc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(u),Mr.copy(e.ray).recast(e.near),!(gc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(gc,q0)===null||Mr.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(W0.copy(u).invert(),Mr.copy(e.ray).applyMatrix4(W0),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,_=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,C=_.length;T<C;T++){const M=_[T],x=h[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,X=P;N<X;N+=3){const z=p.getX(N),B=p.getX(N+1),b=p.getX(N+2);l=yc(this,x,e,r,d,v,S,z,B,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=T,x=C;M<x;M+=3){const D=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=yc(this,h,e,r,d,v,S,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=_.length;T<C;T++){const M=_[T],x=h[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,X=P;N<X;N+=3){const z=N,B=N+1,b=N+2;l=yc(this,x,e,r,d,v,S,z,B,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=T,x=C;M<x;M+=3){const D=M,P=M+1,N=M+2;l=yc(this,h,e,r,d,v,S,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function _M(o,e,i,r,l,u,h,p){let m;if(e.side===Vn?m=r.intersectTriangle(h,u,l,!0,p):m=r.intersectTriangle(l,u,h,e.side===tr,p),m===null)return null;Mc.copy(p),Mc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Mc);return d<i.near||d>i.far?null:{distance:d,point:Mc.clone(),object:o}}function yc(o,e,i,r,l,u,h,p,m,d){o.getVertexPosition(p,_c),o.getVertexPosition(m,vc),o.getVertexPosition(d,xc);const v=_M(o,e,i,r,_c,vc,xc,Y0);if(v){const S=new at;Ei.getBarycoord(Y0,_c,vc,xc,S),l&&(v.uv=Ei.getInterpolatedAttribute(l,p,m,d,S,new Ie)),u&&(v.uv1=Ei.getInterpolatedAttribute(u,p,m,d,S,new Ie)),h&&(v.normal=Ei.getInterpolatedAttribute(h,p,m,d,S,new at),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new at,materialIndex:0};Ei.getNormal(_c,vc,xc,_.normal),v.face=_,v.barycoord=S}return v}class vM extends On{constructor(e=null,i=1,r=1,l,u,h,p,m,d=En,v=En,S,_){super(null,h,p,m,d,v,l,u,S,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new at,xM=new at,SM=new he;class br{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Th.subVectors(r,i).cross(xM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||SM.getNormalMatrix(e),l=this.coplanarPoint(Th).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Pd,MM=new Ie(.5,.5),Ec=new at;class X_{constructor(e=new br,i=new br,r=new br,l=new br,u=new br,h=new br){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Pi,r=!1){const l=this.planes,u=e.elements,h=u[0],p=u[1],m=u[2],d=u[3],v=u[4],S=u[5],_=u[6],E=u[7],T=u[8],C=u[9],M=u[10],x=u[11],D=u[12],P=u[13],N=u[14],X=u[15];if(l[0].setComponents(d-h,E-v,x-T,X-D).normalize(),l[1].setComponents(d+h,E+v,x+T,X+D).normalize(),l[2].setComponents(d+p,E+S,x+C,X+P).normalize(),l[3].setComponents(d-p,E-S,x-C,X-P).normalize(),r)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(d-m,E-_,x-M,X-N).normalize();else if(l[4].setComponents(d-m,E-_,x-M,X-N).normalize(),i===Pi)l[5].setComponents(d+m,E+_,x+M,X+N).normalize();else if(i===Pc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const i=MM.distanceTo(e.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ec.x=l.normal.x>0?e.max.x:e.min.x,Ec.y=l.normal.y>0?e.max.y:e.min.y,Ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k_ extends On{constructor(e=[],i=wr,r,l,u,h,p,m,d,v){super(e,i,r,l,u,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Go extends On{constructor(e,i,r=zi,l,u,h,p=En,m=En,d,v=_a,S=1){if(v!==_a&&v!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:S};super(_,l,u,h,p,m,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Od(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class yM extends Go{constructor(e,i=zi,r=wr,l,u,h=En,p=En,m,d=_a){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,r,l,u,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ko extends xa{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const p=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],d=[],v=[],S=[];let _=0,E=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ma(d,3)),this.setAttribute("normal",new ma(v,3)),this.setAttribute("uv",new ma(S,2));function T(C,M,x,D,P,N,X,z,B,b,w){const pt=N/B,H=X/b,$=N/2,it=X/2,lt=z/2,J=B+1,L=b+1;let F=0,ot=0;const ht=new at;for(let Et=0;Et<L;Et++){const O=Et*H-it;for(let Y=0;Y<J;Y++){const _t=Y*pt-$;ht[C]=_t*D,ht[M]=O*P,ht[x]=lt,d.push(ht.x,ht.y,ht.z),ht[C]=0,ht[M]=0,ht[x]=z>0?1:-1,v.push(ht.x,ht.y,ht.z),S.push(Y/B),S.push(1-Et/b),F+=1}}for(let Et=0;Et<b;Et++)for(let O=0;O<B;O++){const Y=_+O+J*Et,_t=_+O+J*(Et+1),At=_+(O+1)+J*(Et+1),Ft=_+(O+1)+J*Et;m.push(Y,_t,Ft),m.push(_t,At,Ft),ot+=6}p.addGroup(E,ot,w),E+=ot,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wo extends xa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,v=m+1,S=e/p,_=i/m,E=[],T=[],C=[],M=[];for(let x=0;x<v;x++){const D=x*_-h;for(let P=0;P<d;P++){const N=P*S-u;T.push(N,-D,0),C.push(0,0,1),M.push(P/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<p;D++){const P=D+d*x,N=D+d*(x+1),X=D+1+d*(x+1),z=D+1+d*x;E.push(P,N,z),E.push(N,X,z)}this.setIndex(E),this.setAttribute("position",new ma(T,3)),this.setAttribute("normal",new ma(C,3)),this.setAttribute("uv",new ma(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Os(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Os(o[i]);for(const l in r)e[l]=r[l]}return e}function EM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const TM={clone:Os,merge:Nn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends zc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class RM extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CM extends zc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends zc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tc=new at,bc=new Fs,Ui=new at;class Y_ extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,bc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,bc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Tc,bc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,bc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new at,j0=new Ie,Z0=new Ie;class yi extends Y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,j0,Z0),i.subVectors(Z0,j0)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(eh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Fd extends Y_{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ts=-90,bs=1;class wM extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Ts,bs,e,i);l.layers=this.layers,this.add(l);const u=new yi(Ts,bs,e,i);u.layers=this.layers,this.add(u);const h=new yi(Ts,bs,e,i);h.layers=this.layers,this.add(h);const p=new yi(Ts,bs,e,i);p.layers=this.layers,this.add(p);const m=new yi(Ts,bs,e,i);m.layers=this.layers,this.add(m);const d=new yi(Ts,bs,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,p,m]=i;for(const d of i)this.remove(d);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,p,m,d,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,_,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class UM extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function K0(o,e,i,r){const l=LM(r);switch(i){case N_:return o*e;case P_:return o*e/l.components*l.byteLength;case Dd:return o*e/l.components*l.byteLength;case Ls:return o*e*2/l.components*l.byteLength;case wd:return o*e*2/l.components*l.byteLength;case O_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Ud:return o*e*4/l.components*l.byteLength;case Dc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kh:case qh:return Math.max(o,16)*Math.max(e,8)/4;case Xh:case Wh:return Math.max(o,8)*Math.max(e,8)/2;case Yh:case jh:case Kh:case Qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Zh:case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case pd:case md:case gd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xd:case Sd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LM(o){switch(o){case fi:case D_:return{byteLength:1,components:1};case zo:case w_:case ga:return{byteLength:2,components:1};case Rd:case Cd:return{byteLength:2,components:4};case zi:case Ad:case Oi:return{byteLength:4,components:1};case U_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);function j_(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function NM(o){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function r(p,m,d){const v=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,v);else{S.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<S.length;E++){const T=S[_],C=S[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,S[_]=C)}S.length=_+1;for(let E=0,T=S.length;E<T;E++){const C=S[E];o.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:h}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
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
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`#ifdef USE_BATCHING
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
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YM=`#ifdef USE_IRIDESCENCE
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
#endif`,jM=`#ifdef USE_BUMPMAP
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
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,iy=`#define PI 3.141592653589793
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
} // validated`,ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,My=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,Ay=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uy=`PhysicalMaterial material;
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
#endif`,Ly=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
}`,Ny=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xy=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
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
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OE=`uniform sampler2D t2D;
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
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
}`,HE=`#if DEPTH_PACKING == 3200
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
}`,GE=`#define DISTANCE
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
}`,VE=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,jE=`uniform vec3 diffuse;
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
}`,ZE=`#define LAMBERT
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
}`,KE=`#define LAMBERT
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
}`,QE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,$E=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,eT=`#define PHONG
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
}`,nT=`#define PHONG
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
}`,iT=`#define STANDARD
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
}`,aT=`#define STANDARD
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
}`,rT=`#define TOON
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
}`,sT=`#define TOON
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
}`,oT=`uniform float size;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 color;
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
}`,fT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:OM,alphahash_pars_fragment:PM,alphamap_fragment:FM,alphamap_pars_fragment:IM,alphatest_fragment:BM,alphatest_pars_fragment:zM,aomap_fragment:HM,aomap_pars_fragment:GM,batching_pars_vertex:VM,batching_vertex:XM,begin_vertex:kM,beginnormal_vertex:WM,bsdfs:qM,iridescence_fragment:YM,bumpmap_pars_fragment:jM,clipping_planes_fragment:ZM,clipping_planes_pars_fragment:KM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:JM,color_fragment:$M,color_pars_fragment:ty,color_pars_vertex:ey,color_vertex:ny,common:iy,cube_uv_reflection_fragment:ay,defaultnormal_vertex:ry,displacementmap_pars_vertex:sy,displacementmap_vertex:oy,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:uy,colorspace_pars_fragment:fy,envmap_fragment:hy,envmap_common_pars_fragment:dy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ay,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:xy,fog_pars_fragment:Sy,gradientmap_pars_fragment:My,lightmap_pars_fragment:yy,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:Ty,lights_pars_begin:by,lights_toon_fragment:Ry,lights_toon_pars_fragment:Cy,lights_phong_fragment:Dy,lights_phong_pars_fragment:wy,lights_physical_fragment:Uy,lights_physical_pars_fragment:Ly,lights_fragment_begin:Ny,lights_fragment_maps:Oy,lights_fragment_end:Py,logdepthbuf_fragment:Fy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:zy,map_fragment:Hy,map_pars_fragment:Gy,map_particle_fragment:Vy,map_particle_pars_fragment:Xy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Wy,morphinstance_vertex:qy,morphcolor_vertex:Yy,morphnormal_vertex:jy,morphtarget_pars_vertex:Zy,morphtarget_vertex:Ky,normal_fragment_begin:Qy,normal_fragment_maps:Jy,normal_pars_fragment:$y,normal_pars_vertex:tE,normal_vertex:eE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:aE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:fE,dithering_pars_fragment:hE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:SE,skinning_vertex:ME,skinnormal_vertex:yE,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:bE,tonemapping_pars_fragment:AE,transmission_fragment:RE,transmission_pars_fragment:CE,uv_pars_fragment:DE,uv_pars_vertex:wE,uv_vertex:UE,worldpos_vertex:LE,background_vert:NE,background_frag:OE,backgroundCube_vert:PE,backgroundCube_frag:FE,cube_vert:IE,cube_frag:BE,depth_vert:zE,depth_frag:HE,distance_vert:GE,distance_frag:VE,equirect_vert:XE,equirect_frag:kE,linedashed_vert:WE,linedashed_frag:qE,meshbasic_vert:YE,meshbasic_frag:jE,meshlambert_vert:ZE,meshlambert_frag:KE,meshmatcap_vert:QE,meshmatcap_frag:JE,meshnormal_vert:$E,meshnormal_frag:tT,meshphong_vert:eT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:aT,meshtoon_vert:rT,meshtoon_frag:sT,points_vert:oT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:fT,sprite_frag:hT},Ut={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ni={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ge(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:Nn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ac={r:0,b:0,g:0},Er=new va,dT=new fn;function pT(o,e,i,r,l,u){const h=new Ge(0);let p=l===!0?0:1,m,d,v=null,S=0,_=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const N=D.backgroundBlurriness>0;P=e.get(P,N)}return P}function T(D){let P=!1;const N=E(D);N===null?M(h,p):N&&N.isColor&&(M(N,1),P=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,u):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Bc)?(d===void 0&&(d=new Hi(new ko(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Os(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(X,z,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Er.copy(P.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(dT.makeRotationFromEuler(Er)),d.material.toneMapped=Te.getTransfer(N.colorSpace)!==Fe,(v!==N||S!==N.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,v=N,S=N.version,_=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Hi(new Wo(2,2),new bi({name:"BackgroundMaterial",uniforms:Os(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Te.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,S=N.version,_=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,P){D.getRGB(Ac,q_(o)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,P,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),p=P,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(h,p)},render:T,addToRenderList:C,dispose:x}}function mT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,h=!1;function p(H,$,it,lt,J){let L=!1;const F=S(H,lt,it,$);u!==F&&(u=F,d(u.object)),L=E(H,lt,it,J),L&&T(H,lt,it,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,N(H,$,it,lt),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function S(H,$,it,lt){const J=lt.wireframe===!0;let L=r[$.id];L===void 0&&(L={},r[$.id]=L);const F=H.isInstancedMesh===!0?H.id:0;let ot=L[F];ot===void 0&&(ot={},L[F]=ot);let ht=ot[it.id];ht===void 0&&(ht={},ot[it.id]=ht);let Et=ht[J];return Et===void 0&&(Et=_(m()),ht[J]=Et),Et}function _(H){const $=[],it=[],lt=[];for(let J=0;J<i;J++)$[J]=0,it[J]=0,lt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:it,attributeDivisors:lt,object:H,attributes:{},index:null}}function E(H,$,it,lt){const J=u.attributes,L=$.attributes;let F=0;const ot=it.getAttributes();for(const ht in ot)if(ot[ht].location>=0){const O=J[ht];let Y=L[ht];if(Y===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;F++}return u.attributesNum!==F||u.index!==lt}function T(H,$,it,lt){const J={},L=$.attributes;let F=0;const ot=it.getAttributes();for(const ht in ot)if(ot[ht].location>=0){let O=L[ht];O===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),J[ht]=Y,F++}u.attributes=J,u.attributesNum=F,u.index=lt}function C(){const H=u.newAttributes;for(let $=0,it=H.length;$<it;$++)H[$]=0}function M(H){x(H,0)}function x(H,$){const it=u.newAttributes,lt=u.enabledAttributes,J=u.attributeDivisors;it[H]=1,lt[H]===0&&(o.enableVertexAttribArray(H),lt[H]=1),J[H]!==$&&(o.vertexAttribDivisor(H,$),J[H]=$)}function D(){const H=u.newAttributes,$=u.enabledAttributes;for(let it=0,lt=$.length;it<lt;it++)$[it]!==H[it]&&(o.disableVertexAttribArray(it),$[it]=0)}function P(H,$,it,lt,J,L,F){F===!0?o.vertexAttribIPointer(H,$,it,J,L):o.vertexAttribPointer(H,$,it,lt,J,L)}function N(H,$,it,lt){C();const J=lt.attributes,L=it.getAttributes(),F=$.defaultAttributeValues;for(const ot in L){const ht=L[ot];if(ht.location>=0){let Et=J[ot];if(Et===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const O=Et.normalized,Y=Et.itemSize,_t=e.get(Et);if(_t===void 0)continue;const At=_t.buffer,Ft=_t.type,et=_t.bytesPerElement,vt=Ft===o.INT||Ft===o.UNSIGNED_INT||Et.gpuType===Ad;if(Et.isInterleavedBufferAttribute){const Tt=Et.data,Xt=Tt.stride,Kt=Et.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<ht.locationSize;$t++)x(ht.location+$t,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<ht.locationSize;$t++)M(ht.location+$t);o.bindBuffer(o.ARRAY_BUFFER,At);for(let $t=0;$t<ht.locationSize;$t++)P(ht.location+$t,Y/ht.locationSize,Ft,O,Xt*et,(Kt+Y/ht.locationSize*$t)*et,vt)}else{if(Et.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)x(ht.location+Tt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)M(ht.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<ht.locationSize;Tt++)P(ht.location+Tt,Y/ht.locationSize,Ft,O,Y*et,Y/ht.locationSize*Tt*et,vt)}}else if(F!==void 0){const O=F[ot];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(ht.location,O);break;case 3:o.vertexAttrib3fv(ht.location,O);break;case 4:o.vertexAttrib4fv(ht.location,O);break;default:o.vertexAttrib1fv(ht.location,O)}}}}D()}function X(){w();for(const H in r){const $=r[H];for(const it in $){const lt=$[it];for(const J in lt){const L=lt[J];for(const F in L)v(L[F].object),delete L[F];delete lt[J]}}delete r[H]}}function z(H){if(r[H.id]===void 0)return;const $=r[H.id];for(const it in $){const lt=$[it];for(const J in lt){const L=lt[J];for(const F in L)v(L[F].object),delete L[F];delete lt[J]}}delete r[H.id]}function B(H){for(const $ in r){const it=r[$];for(const lt in it){const J=it[lt];if(J[H.id]===void 0)continue;const L=J[H.id];for(const F in L)v(L[F].object),delete L[F];delete J[H.id]}}}function b(H){for(const $ in r){const it=r[$],lt=H.isInstancedMesh===!0?H.id:0,J=it[lt];if(J!==void 0){for(const L in J){const F=J[L];for(const ot in F)v(F[ot].object),delete F[ot];delete J[L]}delete it[lt],Object.keys(it).length===0&&delete r[$]}}}function w(){pt(),h=!0,u!==l&&(u=l,d(u.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:w,resetDefaultState:pt,dispose:X,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function gT(o,e,i){let r;function l(d){r=d}function u(d,v){o.drawArrays(r,d,v),i.update(v,r,1)}function h(d,v,S){S!==0&&(o.drawArraysInstanced(r,d,v,S),i.update(v,r,S))}function p(d,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,v,0,S);let E=0;for(let T=0;T<S;T++)E+=v[T];i.update(E,r,1)}function m(d,v,S,_){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<d.length;T++)h(d[T],v[T],_[T]);else{E.multiDrawArraysInstancedWEBGL(r,d,0,v,0,_,0,S);let T=0;for(let C=0;C<S;C++)T+=v[C]*_[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function _T(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ti&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const b=B===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==fi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Oi&&!b)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(se("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),z=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,maxSamples:X,samples:z}}function vT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new br,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||r!==0||l;return l=_,r=S.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,_){i=v(S,_,0)},this.setState=function(S,_,E){const T=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,x=o.get(S);if(!l||T===null||T.length===0||u&&!M)u?v(null):d();else{const D=u?0:r,P=D*4;let N=x.clippingState||null;m.value=N,N=v(T,_,P,E);for(let X=0;X!==P;++X)N[X]=i[X];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,_,E,T){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,T!==!0||M===null){const x=E+C*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,N=E;P!==C;++P,N+=4)h.copy(S[P]).applyMatrix4(D,p),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const $a=4,Q0=[.125,.215,.35,.446,.526,.582],Rr=20,xT=256,Po=new Fd,J0=new Ge;let bh=null,Ah=0,Rh=0,Ch=!1;const ST=new at;class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:p=ST}=u;bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ga,format:Ti,colorSpace:Ns,depthBuffer:!1},l=t_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MT(u)),this._blurMaterial=ET(u,e,i),this._ggxMaterial=yT(u,e,i)}return l}_compileMaterial(e){const i=new Hi(new xa,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,u){const m=new yi(90,1,i,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,E=S.toneMapping;S.getClearColor(J0),S.toneMapping=Fi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new ko,new V_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(J0),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,d[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):N===1?(m.up.set(0,0,d[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,d[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const X=this._cubeSize;As(l,N*X,P>2?X:0,X,X),S.setRenderTarget(l),x&&S.render(C,m),S.render(e,m)}S.toneMapping=E,S.autoClear=_,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===wr||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),_=0+d*1.25,E=S*_,{_lodMax:T}=this,C=this._sizeLods[r],M=3*C*(r>T-$a?r-T+$a:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,As(u,M,x,3*C,2*C),l.setRenderTarget(u),l.render(p,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,As(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(p,Po)}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const _=d.uniforms,E=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Rr-1),C=u/T,M=isFinite(u)?1+Math.floor(v*C):Rr;M>Rr&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Rr}`);const x=[];let D=0;for(let B=0;B<Rr;++B){const b=B/C,w=Math.exp(-b*b/2);x.push(w),B===0?D+=w:B<M&&(D+=2*w)}for(let B=0;B<x.length;B++)x[B]=x[B]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=T,_.mipInt.value=P-r;const N=this._sizeLods[l],X=3*N*(l>P-$a?l-P+$a:0),z=4*(this._cubeSize-N);As(i,X,z,3*N,2*N),m.setRenderTarget(i),m.render(S,Po)}}function MT(o){const e=[],i=[],r=[];let l=o;const u=o-$a+1+Q0.length;for(let h=0;h<u;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-$a?m=Q0[h-o+$a-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,_=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,T=6,C=3,M=2,x=1,D=new Float32Array(C*T*E),P=new Float32Array(M*T*E),N=new Float32Array(x*T*E);for(let z=0;z<E;z++){const B=z%3*2/3-1,b=z>2?0:-1,w=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];D.set(w,C*T*z),P.set(_,M*T*z);const pt=[z,z,z,z,z,z];N.set(pt,x*T*z)}const X=new xa;X.setAttribute("position",new Bi(D,C)),X.setAttribute("uv",new Bi(P,M)),X.setAttribute("faceIndex",new Bi(N,x)),r.push(new Hi(X,null)),l>$a&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function t_(o,e,i){const r=new Ii(o,e,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function yT(o,e,i){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function ET(o,e,i){const r=new Float32Array(Rr),l=new at(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function e_(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function n_(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}class Z_ extends Ii{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new k_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new bi({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:da});u.uniforms.tEquirect.value=i;const h=new Hi(l,u),p=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Rn),new wM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}function TT(o){let e=new WeakMap,i=new WeakMap,r=null;function l(_,E=!1){return _==null?null:E?h(_):u(_)}function u(_){if(_&&_.isTexture){const E=_.mapping;if(E===Jf||E===$f)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new Z_(T.height);return C.fromEquirectangularTexture(o,_),e.set(_,C),_.addEventListener("dispose",d),p(C.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,T=E===Jf||E===$f,C=E===wr||E===Us;if(T||C){let M=i.get(_);const x=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new $0(o)),M=T?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return T&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new $0(o)),M=T?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",v),M.texture):null}}}return _}function p(_,E){return E===Jf?_.mapping=wr:E===$f&&(_.mapping=Us),_}function m(_){let E=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&E++;return E===T}function d(_){const E=_.target;E.removeEventListener("dispose",d);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(_){const E=_.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function bT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ic("WebGLRenderer: "+r+" extension not supported."),l}}}function AT(o,e,i,r){const l={},u=new WeakMap;function h(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",h),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function d(S){const _=[],E=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const D=E.array;C=E.version;for(let P=0,N=D.length;P<N;P+=3){const X=D[P+0],z=D[P+1],B=D[P+2];_.push(X,z,z,B,B,X)}}else{const D=T.array;C=T.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const X=P+0,z=P+1,B=P+2;_.push(X,z,z,B,B,X)}}const M=new(T.count>=65535?G_:H_)(_,1);M.version=C;const x=u.get(S);x&&e.remove(x),u.set(S,M)}function v(S){const _=u.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&d(S)}else d(S);return u.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function RT(o,e,i){let r;function l(_){r=_}let u,h;function p(_){u=_.type,h=_.bytesPerElement}function m(_,E){o.drawElements(r,E,u,_*h),i.update(E,r,1)}function d(_,E,T){T!==0&&(o.drawElementsInstanced(r,E,u,_*h,T),i.update(E,r,T))}function v(_,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,_,0,T);let M=0;for(let x=0;x<T;x++)M+=E[x];i.update(M,r,1)}function S(_,E,T,C){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)d(_[x]/h,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,_,0,C,0,T);let x=0;for(let D=0;D<T;D++)x+=E[D]*C[D];i.update(x,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function CT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function DT(o,e,i){const r=new WeakMap,l=new en;function u(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let _=r.get(p);if(_===void 0||_.count!==S){let pt=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",pt)};var E=pt;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let X=p.attributes.position.count*N,z=1;X>e.maxTextureSize&&(z=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const B=new Float32Array(X*z*4*S),b=new I_(B,X,z,S);b.type=Oi,b.needsUpdate=!0;const w=N*4;for(let H=0;H<S;H++){const $=x[H],it=D[H],lt=P[H],J=X*z*4*H;for(let L=0;L<$.count;L++){const F=L*w;T===!0&&(l.fromBufferAttribute($,L),B[J+F+0]=l.x,B[J+F+1]=l.y,B[J+F+2]=l.z,B[J+F+3]=0),C===!0&&(l.fromBufferAttribute(it,L),B[J+F+4]=l.x,B[J+F+5]=l.y,B[J+F+6]=l.z,B[J+F+7]=0),M===!0&&(l.fromBufferAttribute(lt,L),B[J+F+8]=l.x,B[J+F+9]=l.y,B[J+F+10]=l.z,B[J+F+11]=lt.itemSize===4?l.w:1)}}_={count:S,texture:b,size:new Ie(X,z)},r.set(p,_),p.addEventListener("dispose",pt)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function wT(o,e,i,r,l){let u=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,_=e.get(d,S);if(u.get(_)!==v&&(e.update(_),u.set(_,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return _}function p(){u=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const UT={[M_]:"LINEAR_TONE_MAPPING",[y_]:"REINHARD_TONE_MAPPING",[E_]:"CINEON_TONE_MAPPING",[T_]:"ACES_FILMIC_TONE_MAPPING",[A_]:"AGX_TONE_MAPPING",[R_]:"NEUTRAL_TONE_MAPPING",[b_]:"CUSTOM_TONE_MAPPING"};function LT(o,e,i,r,l){const u=new Ii(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Ii(e,i,{type:ga,depthBuffer:!1,stencilBuffer:!1}),p=new xa;p.setAttribute("position",new ma([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ma([0,2,0,0,2,0],2));const m=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Hi(p,m),v=new Fd(-1,1,1,-1,0,1);let S=null,_=null,E=!1,T,C=null,M=[],x=!1;this.setSize=function(D,P){u.setSize(D,P),h.setSize(D,P);for(let N=0;N<M.length;N++){const X=M[N];X.setSize&&X.setSize(D,P)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,N=u.height;for(let X=0;X<M.length;X++){const z=M[X];z.setSize&&z.setSize(P,N)}},this.begin=function(D,P){if(E||D.toneMapping===Fi&&M.length===0)return!1;if(C=P,P!==null){const N=P.width,X=P.height;(u.width!==N||u.height!==X)&&this.setSize(N,X)}return x===!1&&D.setRenderTarget(u),T=D.toneMapping,D.toneMapping=Fi,!0},this.hasRenderPass=function(){return x},this.end=function(D,P){D.toneMapping=T,E=!0;let N=u,X=h;for(let z=0;z<M.length;z++){const B=M[z];if(B.enabled!==!1&&(B.render(D,X,N,P),B.needsSwap!==!1)){const b=N;N=X,X=b}}if(S!==D.outputColorSpace||_!==D.toneMapping){S=D.outputColorSpace,_=D.toneMapping,m.defines={},Te.getTransfer(S)===Fe&&(m.defines.SRGB_TRANSFER="");const z=UT[_];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(d,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),p.dispose(),m.dispose()}}const K_=new On,yd=new Go(1,1),Q_=new I_,J_=new iM,$_=new k_,i_=[],a_=[],r_=new Float32Array(16),s_=new Float32Array(9),o_=new Float32Array(4);function Is(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=i_[l];if(u===void 0&&(u=new Float32Array(l),i_[l]=u),e!==0){r.toArray(u,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(u,p)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Gc(o,e){let i=a_[e];i===void 0&&(i=new Int32Array(e),a_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function NT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function IT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;o_.set(r),o.uniformMatrix2fv(this.addr,!1,o_),gn(i,r)}}function BT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;s_.set(r),o.uniformMatrix3fv(this.addr,!1,s_),gn(i,r)}}function zT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;r_.set(r),o.uniformMatrix4fv(this.addr,!1,r_),gn(i,r)}}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function kT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function jT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(yd.compareFunction=i.isReversedDepthBuffer()?Nd:Ld,u=yd):u=K_,i.setTexture2D(e||u,l)}function ZT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J_,l)}function KT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$_,l)}function QT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Q_,l)}function JT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return FT;case 35674:return IT;case 35675:return BT;case 35676:return zT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return XT;case 5125:return kT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}function $T(o,e){o.uniform1fv(this.addr,e)}function tb(o,e){const i=Is(e,this.size,2);o.uniform2fv(this.addr,i)}function eb(o,e){const i=Is(e,this.size,3);o.uniform3fv(this.addr,i)}function nb(o,e){const i=Is(e,this.size,4);o.uniform4fv(this.addr,i)}function ib(o,e){const i=Is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ab(o,e){const i=Is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rb(o,e){const i=Is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function sb(o,e){o.uniform1iv(this.addr,e)}function ob(o,e){o.uniform2iv(this.addr,e)}function lb(o,e){o.uniform3iv(this.addr,e)}function cb(o,e){o.uniform4iv(this.addr,e)}function ub(o,e){o.uniform1uiv(this.addr,e)}function fb(o,e){o.uniform2uiv(this.addr,e)}function hb(o,e){o.uniform3uiv(this.addr,e)}function db(o,e){o.uniform4uiv(this.addr,e)}function pb(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=yd:h=K_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,u[p])}function mb(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||J_,u[h])}function gb(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||$_,u[h])}function _b(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Q_,u[h])}function vb(o){switch(o){case 5126:return $T;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return ab;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}class xb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=JT(i.type)}}class Sb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vb(i.type)}}class Mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function l_(o,e){o.seq.push(e),o.map[e.id]=e}function yb(o,e,i){const r=o.name,l=r.length;for(Dh.lastIndex=0;;){const u=Dh.exec(r),h=Dh.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){l_(i,d===void 0?new xb(p,o,e):new Sb(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new Mb(p),l_(i,S)),i=S}}}class Nc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);yb(p,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function c_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Eb=37297;let Tb=0;function bb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const u_=new he;function Ab(o){Te._getMatrix(u_,Te.workingColorSpace,o);const e=`mat3( ${u_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Oc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function f_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+bb(o.getShaderSource(e),p)}else return u}function Rb(o,e){const i=Ab(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Cb={[M_]:"Linear",[y_]:"Reinhard",[E_]:"Cineon",[T_]:"ACESFilmic",[A_]:"AgX",[R_]:"Neutral",[b_]:"Custom"};function Db(o,e){const i=Cb[e];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new at;function wb(){Te.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),e=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Lb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Nb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Bo(o){return o!==""}function h_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(o){return o.replace(Ob,Fb)}const Pb=new Map;function Fb(o,e){let i=de[e];if(i===void 0){const r=Pb.get(e);if(r!==void 0)i=de[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ed(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(o){return o.replace(Ib,Bb)}function Bb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function m_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zb={[Cc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function Hb(o){return zb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gb={[wr]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function Vb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Gb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Xb={[Us]:"ENVMAP_MODE_REFRACTION"};function kb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Xb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Wb={[S_]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[FS]:"ENVMAP_BLENDING_ADD"};function qb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Wb[o.combine]||"ENVMAP_BLENDING_NONE"}function Yb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function jb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=Hb(i),d=Vb(i),v=kb(i),S=qb(i),_=Yb(i),E=Ub(i),T=Lb(u),C=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(M=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?de.tonemapping_pars_fragment:"",i.toneMapping!==Fi?Db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Rb("linearToOutputTexel",i.outputColorSpace),wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Ed(h),h=h_(h,i),h=d_(h,i),p=Ed(p),p=h_(p,i),p=d_(p,i),h=p_(h),p=p_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+M+h,N=D+x+p,X=c_(l,l.VERTEX_SHADER,P),z=c_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,X),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",it=l.getShaderInfoLog(X)||"",lt=l.getShaderInfoLog(z)||"",J=$.trim(),L=it.trim(),F=lt.trim();let ot=!0,ht=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,z);else{const Et=f_(l,X,"vertex"),O=f_(l,z,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+Et+`
`+O)}else J!==""?se("WebGLProgram: Program Info Log:",J):(L===""||F==="")&&(ht=!1);ht&&(H.diagnostics={runnable:ot,programLog:J,vertexShader:{log:L,prefix:M},fragmentShader:{log:F,prefix:x}})}l.deleteShader(X),l.deleteShader(z),b=new Nc(l,C),w=Nb(l,C)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(C,Eb)),pt},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Tb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=z,this}let Zb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Qb(e),i.set(e,r)),r}}class Qb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function Jb(o,e,i,r,l,u){const h=new B_,p=new Kb,m=new Set,d=[],v=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,w,pt,H,$){const it=H.fog,lt=$.geometry,J=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=e.get(b.envMap||J,L),ot=F&&F.mapping===Bc?F.image.height:null,ht=E[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&se("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,O=Et!==void 0?Et.length:0;let Y=0;lt.morphAttributes.position!==void 0&&(Y=1),lt.morphAttributes.normal!==void 0&&(Y=2),lt.morphAttributes.color!==void 0&&(Y=3);let _t,At,Ft,et;if(ht){const Ee=Ni[ht];_t=Ee.vertexShader,At=Ee.fragmentShader}else _t=b.vertexShader,At=b.fragmentShader,p.update(b),Ft=p.getVertexShaderID(b),et=p.getFragmentShaderID(b);const vt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Xt=$.isInstancedMesh===!0,Kt=$.isBatchedMesh===!0,$t=!!b.map,Ke=!!b.matcap,_e=!!F,pe=!!b.aoMap,De=!!b.lightMap,oe=!!b.bumpMap,Ze=!!b.normalMap,G=!!b.displacementMap,We=!!b.emissiveMap,ye=!!b.metalnessMap,Ue=!!b.roughnessMap,qt=b.anisotropy>0,U=b.clearcoat>0,y=b.dispersion>0,q=b.iridescence>0,dt=b.sheen>0,xt=b.transmission>0,ut=qt&&!!b.anisotropyMap,kt=U&&!!b.clearcoatMap,Ct=U&&!!b.clearcoatNormalMap,Zt=U&&!!b.clearcoatRoughnessMap,te=q&&!!b.iridescenceMap,yt=q&&!!b.iridescenceThicknessMap,St=dt&&!!b.sheenColorMap,Nt=dt&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Ot=!!b.specularColorMap,ce=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,Rt=xt&&!!b.thicknessMap,bt=!!b.gradientMap,Pt=!!b.alphaMap,Mt=b.alphaTest>0,ct=!!b.alphaHash,zt=!!b.extensions;let ne=Fi;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Ne={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:At,defines:b.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&$._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&$.instanceColor!==null,instancingMorph:Xt&&$.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ns,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:Ke,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:ot,aoMap:pe,lightMap:De,bumpMap:oe,normalMap:Ze,displacementMap:G,emissiveMap:We,normalMapObjectSpace:Ze&&b.normalMapType===HS,normalMapTangentSpace:Ze&&b.normalMapType===zS,metalnessMap:ye,roughnessMap:Ue,anisotropy:qt,anisotropyMap:ut,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:y,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:yt,sheen:dt,sheenColorMap:St,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:ct,combine:b.combine,mapUv:$t&&T(b.map.channel),aoMapUv:pe&&T(b.aoMap.channel),lightMapUv:De&&T(b.lightMap.channel),bumpMapUv:oe&&T(b.bumpMap.channel),normalMapUv:Ze&&T(b.normalMap.channel),displacementMapUv:G&&T(b.displacementMap.channel),emissiveMapUv:We&&T(b.emissiveMap.channel),metalnessMapUv:ye&&T(b.metalnessMap.channel),roughnessMapUv:Ue&&T(b.roughnessMap.channel),anisotropyMapUv:ut&&T(b.anisotropyMap.channel),clearcoatMapUv:kt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(b.sheenRoughnessMap.channel),specularMapUv:Lt&&T(b.specularMap.channel),specularColorMapUv:Ot&&T(b.specularColorMap.channel),specularIntensityMapUv:ce&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Rt&&T(b.thicknessMap.channel),alphaMapUv:Pt&&T(b.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ze||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!lt.attributes.uv&&($t||Pt),fog:!!it,useFog:b.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||lt.attributes.normal===void 0&&Ze===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:$.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&pt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fa,flipSided:b.side===Vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ne.vertexUv1s=m.has(1),Ne.vertexUv2s=m.has(2),Ne.vertexUv3s=m.has(3),m.clear(),Ne}function M(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const pt in b.defines)w.push(pt),w.push(b.defines[pt]);return b.isRawShaderMaterial===!1&&(x(w,b),D(w,b),w.push(o.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function D(b,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),b.push(h.mask)}function P(b){const w=E[b.type];let pt;if(w){const H=Ni[w];pt=TM.clone(H.uniforms)}else pt=b.uniforms;return pt}function N(b,w){let pt=v.get(w);return pt!==void 0?++pt.usedTimes:(pt=new jb(o,w,b,l),d.push(pt),v.set(w,pt)),pt}function X(b){if(--b.usedTimes===0){const w=d.indexOf(b);d[w]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function z(b){p.remove(b)}function B(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:X,releaseShaderCache:z,programs:d,dispose:B}}function $b(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function r(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function tA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function g_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function __(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,T,C,M,x){let D=o[e];return D===void 0?(D={id:_.id,object:_,geometry:E,material:T,materialVariant:h(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:x},o[e]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=T,D.materialVariant=h(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=M,D.group=x),e++,D}function m(_,E,T,C,M,x){const D=p(_,E,T,C,M,x);T.transmission>0?r.push(D):T.transparent===!0?l.push(D):i.push(D)}function d(_,E,T,C,M,x){const D=p(_,E,T,C,M,x);T.transmission>0?r.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function v(_,E){i.length>1&&i.sort(_||tA),r.length>1&&r.sort(E||g_),l.length>1&&l.sort(E||g_)}function S(){for(let _=e,E=o.length;_<E;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:d,finish:S,sort:v}}function eA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new __,o.set(r,[h])):l>=u.length?(h=new __,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function nA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Ge};break;case"SpotLight":i={position:new at,direction:new at,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function iA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let aA=0;function rA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sA(o){const e=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new at);const l=new at,u=new fn,h=new fn;function p(d){let v=0,S=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let E=0,T=0,C=0,M=0,x=0,D=0,P=0,N=0,X=0,z=0,B=0;d.sort(rA);for(let w=0,pt=d.length;w<pt;w++){const H=d[w],$=H.color,it=H.intensity,lt=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ls?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=$.r*it,S+=$.g*it,_+=$.b*it;else if(H.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],it);B++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,ot=i.get(H);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,r.directionalShadow[E]=ot,r.directionalShadowMap[E]=J,r.directionalShadowMatrix[E]=H.shadow.matrix,D++}r.directional[E]=L,E++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy($).multiplyScalar(it),L.distance=lt,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[C]=L;const F=H.shadow;if(H.map&&(r.spotLightMap[X]=H.map,X++,F.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[C]=F.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,r.spotShadow[C]=ot,r.spotShadowMap[C]=J,N++}C++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy($).multiplyScalar(it),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=L,M++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const F=H.shadow,ot=i.get(H);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,ot.shadowCameraNear=F.camera.near,ot.shadowCameraFar=F.camera.far,r.pointShadow[T]=ot,r.pointShadowMap[T]=J,r.pointShadowMatrix[T]=H.shadow.matrix,P++}r.point[T]=L,T++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(it),L.groundColor.copy(H.groundColor).multiplyScalar(it),r.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==M||b.hemiLength!==x||b.numDirectionalShadows!==D||b.numPointShadows!==P||b.numSpotShadows!==N||b.numSpotMaps!==X||b.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+X-z,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=B,b.directionalLength=E,b.pointLength=T,b.spotLength=C,b.rectAreaLength=M,b.hemiLength=x,b.numDirectionalShadows=D,b.numPointShadows=P,b.numSpotShadows=N,b.numSpotMaps=X,b.numLightProbes=B,r.version=aA++)}function m(d,v){let S=0,_=0,E=0,T=0,C=0;const M=v.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const P=d[x];if(P.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(P.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(P.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:r}}function v_(o){const e=new sA(o),i=[],r=[];function l(v){d.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h}}function oA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let p;return h===void 0?(p=new v_(o),e.set(l,[p])):u>=h.length?(p=new v_(o),h.push(p)):p=h[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
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
}`,uA=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],fA=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],x_=new fn,Fo=new at,wh=new at;function hA(o,e,i){let r=new X_;const l=new Ie,u=new Ie,h=new en,p=new CM,m=new DM,d={},v=i.maxTextureSize,S={[tr]:Vn,[Vn]:tr,[fa]:fa},_=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new xa;T.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hi(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let x=this.type;this.render=function(z,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===gS&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cc);const w=o.getRenderTarget(),pt=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(da),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const it=x!==this.type;it&&B.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(J=>J.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,J=z.length;lt<J;lt++){const L=z[lt],F=L.shadow;if(F===void 0){se("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ot=F.getFrameExtents();l.multiply(ot),u.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ot.x),l.x=u.x*ot.x,F.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ot.y),l.y=u.y*ot.y,F.mapSize.y=u.y));const ht=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ht,F.map===null||it===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Io){if(L.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ii(l.x,l.y,{format:Ls,type:ga,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new Go(l.x,l.y,Oi),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=_a,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En}else L.isPointLight?(F.map=new Z_(l.x),F.map.depthTexture=new yM(l.x,zi)):(F.map=new Ii(l.x,l.y),F.map.depthTexture=new Go(l.x,l.y,zi)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=_a,this.type===Cc?(F.map.depthTexture.compareFunction=ht?Nd:Ld,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En);F.camera.updateProjectionMatrix()}const Et=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const Y=F.getViewport(O);h.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),$.viewport(h)}if(L.isPointLight){const Y=F.camera,_t=F.matrix,At=L.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),Fo.setFromMatrixPosition(L.matrixWorld),Y.position.copy(Fo),wh.copy(Y.position),wh.add(uA[O]),Y.up.copy(fA[O]),Y.lookAt(wh),Y.updateMatrixWorld(),_t.makeTranslation(-Fo.x,-Fo.y,-Fo.z),x_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(x_,Y.coordinateSystem,Y.reversedDepth)}else F.updateMatrices(L);r=F.getFrustum(),N(B,b,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===Io&&D(F,b),F.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(w,pt,H)};function D(z,B){const b=e.update(C);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ii(l.x,l.y,{format:Ls,type:ga})),_.uniforms.shadow_pass.value=z.map.depthTexture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(B,null,b,_,C,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(B,null,b,E,C,null)}function P(z,B,b,w){let pt=null;const H=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)pt=H;else if(pt=b.isPointLight===!0?m:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=pt.uuid,it=B.uuid;let lt=d[$];lt===void 0&&(lt={},d[$]=lt);let J=lt[it];J===void 0&&(J=pt.clone(),lt[it]=J,B.addEventListener("dispose",X)),pt=J}if(pt.visible=B.visible,pt.wireframe=B.wireframe,w===Io?pt.side=B.shadowSide!==null?B.shadowSide:B.side:pt.side=B.shadowSide!==null?B.shadowSide:S[B.side],pt.alphaMap=B.alphaMap,pt.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,pt.map=B.map,pt.clipShadows=B.clipShadows,pt.clippingPlanes=B.clippingPlanes,pt.clipIntersection=B.clipIntersection,pt.displacementMap=B.displacementMap,pt.displacementScale=B.displacementScale,pt.displacementBias=B.displacementBias,pt.wireframeLinewidth=B.wireframeLinewidth,pt.linewidth=B.linewidth,b.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const $=o.properties.get(pt);$.light=b}return pt}function N(z,B,b,w,pt){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&pt===Io)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const it=e.update(z),lt=z.material;if(Array.isArray(lt)){const J=it.groups;for(let L=0,F=J.length;L<F;L++){const ot=J[L],ht=lt[ot.materialIndex];if(ht&&ht.visible){const Et=P(z,ht,w,pt);z.onBeforeShadow(o,z,B,b,it,Et,ot),o.renderBufferDirect(b,null,it,Et,z,ot),z.onAfterShadow(o,z,B,b,it,Et,ot)}}}else if(lt.visible){const J=P(z,lt,w,pt);z.onBeforeShadow(o,z,B,b,it,J,null),o.renderBufferDirect(b,null,it,J,z,null),z.onAfterShadow(o,z,B,b,it,J,null)}}const $=z.children;for(let it=0,lt=$.length;it<lt;it++)N($[it],B,b,w,pt)}function X(z){z.target.removeEventListener("dispose",X);for(const b in d){const w=d[b],pt=z.target.uuid;pt in w&&(w[pt].dispose(),delete w[pt])}}}function dA(o,e){function i(){let W=!1;const Rt=new en;let bt=null;const Pt=new en(0,0,0,0);return{setMask:function(Mt){bt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),bt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ct,zt,ne,Ne){Ne===!0&&(Mt*=ne,ct*=ne,zt*=ne),Rt.set(Mt,ct,zt,ne),Pt.equals(Rt)===!1&&(o.clearColor(Mt,ct,zt,ne),Pt.copy(Rt))},reset:function(){W=!1,bt=null,Pt.set(-1,0,0,0)}}}function r(){let W=!1,Rt=!1,bt=null,Pt=null,Mt=null;return{setReversed:function(ct){if(Rt!==ct){const zt=e.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ct){ct?vt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ct){bt!==ct&&!W&&(o.depthMask(ct),bt=ct)},setFunc:function(ct){if(Rt&&(ct=KS[ct]),Pt!==ct){switch(ct){case Oh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case Fh:o.depthFunc(o.LESS);break;case ws:o.depthFunc(o.LEQUAL);break;case Ih:o.depthFunc(o.EQUAL);break;case Bh:o.depthFunc(o.GEQUAL);break;case zh:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Rt&&(ct=1-ct),o.clearDepth(ct))},reset:function(){W=!1,bt=null,Pt=null,Mt=null,Rt=!1}}}function l(){let W=!1,Rt=null,bt=null,Pt=null,Mt=null,ct=null,zt=null,ne=null,Ne=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!W&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,Cn,hi){(bt!==Ee||Pt!==Cn||Mt!==hi)&&(o.stencilFunc(Ee,Cn,hi),bt=Ee,Pt=Cn,Mt=hi)},setOp:function(Ee,Cn,hi){(ct!==Ee||zt!==Cn||ne!==hi)&&(o.stencilOp(Ee,Cn,hi),ct=Ee,zt=Cn,ne=hi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){W=!1,Rt=null,bt=null,Pt=null,Mt=null,ct=null,zt=null,ne=null,Ne=null}}}const u=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},_=new WeakMap,E=[],T=null,C=!1,M=null,x=null,D=null,P=null,N=null,X=null,z=null,B=new Ge(0,0,0),b=0,w=!1,pt=null,H=null,$=null,it=null,lt=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ot)[1]),L=F>=1):ot.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),L=F>=2);let ht=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),_t=new en().fromArray(O),At=new en().fromArray(Y);function Ft(W,Rt,bt,Pt){const Mt=new Uint8Array(4),ct=o.createTexture();o.bindTexture(W,ct),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<bt;zt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ct}const et={};et[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(ws),oe(!1),Ze(b0),vt(o.CULL_FACE),pe(da);function vt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Tt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Xt(W,Rt){return S[W]!==Rt?(o.bindFramebuffer(W,Rt),S[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(W,Rt){let bt=E,Pt=!1;if(W){bt=_.get(Rt),bt===void 0&&(bt=[],_.set(Rt,bt));const Mt=W.textures;if(bt.length!==Mt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,zt=Mt.length;ct<zt;ct++)bt[ct]=o.COLOR_ATTACHMENT0+ct;bt.length=Mt.length,Pt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(bt)}function $t(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const Ke={[Ar]:o.FUNC_ADD,[vS]:o.FUNC_SUBTRACT,[xS]:o.FUNC_REVERSE_SUBTRACT};Ke[SS]=o.MIN,Ke[MS]=o.MAX;const _e={[yS]:o.ZERO,[ES]:o.ONE,[TS]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[wS]:o.SRC_ALPHA_SATURATE,[CS]:o.DST_COLOR,[AS]:o.DST_ALPHA,[bS]:o.ONE_MINUS_SRC_COLOR,[Nh]:o.ONE_MINUS_SRC_ALPHA,[DS]:o.ONE_MINUS_DST_COLOR,[RS]:o.ONE_MINUS_DST_ALPHA,[US]:o.CONSTANT_COLOR,[LS]:o.ONE_MINUS_CONSTANT_COLOR,[NS]:o.CONSTANT_ALPHA,[OS]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Rt,bt,Pt,Mt,ct,zt,ne,Ne,Ee){if(W===da){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),W!==_S){if(W!==M||Ee!==w){if((x!==Ar||N!==Ar)&&(o.blendEquation(o.FUNC_ADD),x=Ar,N=Ar),Ee)switch(W){case Cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A0:o.blendFunc(o.ONE,o.ONE);break;case R0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case C0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}D=null,P=null,X=null,z=null,B.set(0,0,0),b=0,M=W,w=Ee}return}Mt=Mt||Rt,ct=ct||bt,zt=zt||Pt,(Rt!==x||Mt!==N)&&(o.blendEquationSeparate(Ke[Rt],Ke[Mt]),x=Rt,N=Mt),(bt!==D||Pt!==P||ct!==X||zt!==z)&&(o.blendFuncSeparate(_e[bt],_e[Pt],_e[ct],_e[zt]),D=bt,P=Pt,X=ct,z=zt),(ne.equals(B)===!1||Ne!==b)&&(o.blendColor(ne.r,ne.g,ne.b,Ne),B.copy(ne),b=Ne),M=W,w=!1}function De(W,Rt){W.side===fa?Tt(o.CULL_FACE):vt(o.CULL_FACE);let bt=W.side===Vn;Rt&&(bt=!bt),oe(bt),W.blending===Cs&&W.transparent===!1?pe(da):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Pt=W.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){pt!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),pt=W)}function Ze(W){W!==pS?(vt(o.CULL_FACE),W!==H&&(W===b0?o.cullFace(o.BACK):W===mS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),H=W}function G(W){W!==$&&(L&&o.lineWidth(W),$=W)}function We(W,Rt,bt){W?(vt(o.POLYGON_OFFSET_FILL),(it!==Rt||lt!==bt)&&(it=Rt,lt=bt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,bt))):Tt(o.POLYGON_OFFSET_FILL)}function ye(W){W?vt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=o.TEXTURE0+J-1),ht!==W&&(o.activeTexture(W),ht=W)}function qt(W,Rt,bt){bt===void 0&&(ht===null?bt=o.TEXTURE0+J-1:bt=ht);let Pt=Et[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[bt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(ht!==bt&&(o.activeTexture(bt),ht=bt),o.bindTexture(W,Rt||et[W]),Pt.type=W,Pt.texture=Rt)}function U(){const W=Et[ht];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function St(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Nt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W,Rt){let bt=d.get(Rt);bt===void 0&&(bt=new WeakMap,d.set(Rt,bt));let Pt=bt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Rt,W.name),bt.set(W,Pt))}function Ot(W,Rt){const Pt=d.get(Rt).get(W);m.get(Rt)!==Pt&&(o.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ht=null,Et={},S={},_=new WeakMap,E=[],T=null,C=!1,M=null,x=null,D=null,P=null,N=null,X=null,z=null,B=new Ge(0,0,0),b=0,w=!1,pt=null,H=null,$=null,it=null,lt=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:vt,disable:Tt,bindFramebuffer:Xt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:De,setFlipSided:oe,setCullFace:Ze,setLineWidth:G,setPolygonOffset:We,setScissorTest:ye,activeTexture:Ue,bindTexture:qt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:te,texImage3D:yt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:kt,scissor:St,viewport:Nt,reset:ce}}function pA(o,e,i,r,l,u,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ie,v=new WeakMap;let S;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,y){return E?new OffscreenCanvas(U,y):Fc("canvas")}function C(U,y,q){let dt=1;const xt=qt(U);if((xt.width>q||xt.height>q)&&(dt=q/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*xt.width),kt=Math.floor(dt*xt.height);S===void 0&&(S=T(ut,kt));const Ct=y?T(ut,kt):S;return Ct.width=ut,Ct.height=kt,Ct.getContext("2d").drawImage(U,0,0,ut,kt),se("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+kt+")."),Ct}else return"data"in U&&se("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,y,q,dt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=y;if(y===o.RED&&(q===o.FLOAT&&(ut=o.R32F),q===o.HALF_FLOAT&&(ut=o.R16F),q===o.UNSIGNED_BYTE&&(ut=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.R8UI),q===o.UNSIGNED_SHORT&&(ut=o.R16UI),q===o.UNSIGNED_INT&&(ut=o.R32UI),q===o.BYTE&&(ut=o.R8I),q===o.SHORT&&(ut=o.R16I),q===o.INT&&(ut=o.R32I)),y===o.RG&&(q===o.FLOAT&&(ut=o.RG32F),q===o.HALF_FLOAT&&(ut=o.RG16F),q===o.UNSIGNED_BYTE&&(ut=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),q===o.UNSIGNED_INT&&(ut=o.RG32UI),q===o.BYTE&&(ut=o.RG8I),q===o.SHORT&&(ut=o.RG16I),q===o.INT&&(ut=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),q===o.UNSIGNED_INT&&(ut=o.RGB32UI),q===o.BYTE&&(ut=o.RGB8I),q===o.SHORT&&(ut=o.RGB16I),q===o.INT&&(ut=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),q===o.BYTE&&(ut=o.RGBA8I),q===o.SHORT&&(ut=o.RGBA16I),q===o.INT&&(ut=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),y===o.RGBA){const kt=xt?Oc:Te.getTransfer(dt);q===o.FLOAT&&(ut=o.RGBA32F),q===o.HALF_FLOAT&&(ut=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ut=kt===Fe?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function N(U,y){let q;return U?y===null||y===zi||y===Ho?q=o.DEPTH24_STENCIL8:y===Oi?q=o.DEPTH32F_STENCIL8:y===zo&&(q=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===Ho?q=o.DEPTH_COMPONENT24:y===Oi?q=o.DEPTH_COMPONENT32F:y===zo&&(q=o.DEPTH_COMPONENT16),q}function X(U,y){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function z(U){const y=U.target;y.removeEventListener("dispose",z),b(y),y.isVideoTexture&&v.delete(y)}function B(U){const y=U.target;y.removeEventListener("dispose",B),pt(y)}function b(U){const y=r.get(U);if(y.__webglInit===void 0)return;const q=U.source,dt=_.get(q);if(dt){const xt=dt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(U),Object.keys(dt).length===0&&_.delete(q)}r.remove(U)}function w(U){const y=r.get(U);o.deleteTexture(y.__webglTexture);const q=U.source,dt=_.get(q);delete dt[y.__cacheKey],h.memory.textures--}function pt(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(y.__webglFramebuffer[dt]))for(let xt=0;xt<y.__webglFramebuffer[dt].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[dt][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[dt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[dt])}else{if(Array.isArray(y.__webglFramebuffer))for(let dt=0;dt<y.__webglFramebuffer.length;dt++)o.deleteFramebuffer(y.__webglFramebuffer[dt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let dt=0;dt<y.__webglColorRenderbuffer.length;dt++)y.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[dt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=U.textures;for(let dt=0,xt=q.length;dt<xt;dt++){const ut=r.get(q[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(q[dt])}r.remove(U)}let H=0;function $(){H=0}function it(){const U=H;return U>=l.maxTextures&&se("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function lt(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function J(U,y){const q=r.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const dt=U.image;if(dt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,U,y);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function L(U,y){const q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,y);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function F(U,y){const q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function ot(U,y){const q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){vt(q,U,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const ht={[Gh]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[Vh]:o.MIRRORED_REPEAT},Et={[En]:o.NEAREST,[IS]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[th]:o.LINEAR_MIPMAP_NEAREST,[Cr]:o.LINEAR_MIPMAP_LINEAR},O={[GS]:o.NEVER,[qS]:o.ALWAYS,[VS]:o.LESS,[Ld]:o.LEQUAL,[XS]:o.EQUAL,[Nd]:o.GEQUAL,[kS]:o.GREATER,[WS]:o.NOTEQUAL};function Y(U,y){if(y.type===Oi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===th||y.magFilter===rc||y.magFilter===Cr||y.minFilter===Rn||y.minFilter===th||y.minFilter===rc||y.minFilter===Cr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ht[y.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ht[y.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ht[y.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[y.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==rc&&y.minFilter!==Cr||y.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function _t(U,y){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",z));const dt=y.source;let xt=_.get(dt);xt===void 0&&(xt={},_.set(dt,xt));const ut=lt(y);if(ut!==U.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),xt[ut].usedTimes++;const kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&w(y)),U.__cacheKey=ut,U.__webglTexture=xt[ut].texture}return q}function At(U,y,q){return Math.floor(Math.floor(U/q)/y)}function Ft(U,y,q,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,dt,y.data);else{ut.sort((yt,St)=>yt.start-St.start);let kt=0;for(let yt=1;yt<ut.length;yt++){const St=ut[kt],Nt=ut[yt],Lt=St.start+St.count,Ot=At(Nt.start,y.width,4),ce=At(St.start,y.width,4);Nt.start<=Lt+1&&Ot===ce&&At(Nt.start+Nt.count-1,y.width,4)===Ot?St.count=Math.max(St.count,Nt.start+Nt.count-St.start):(++kt,ut[kt]=Nt)}ut.length=kt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let yt=0,St=ut.length;yt<St;yt++){const Nt=ut[yt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),ce=Lt%y.width,W=Math.floor(Lt/y.width),Rt=Ot,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Rt,bt,q,dt,y.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function et(U,y,q){let dt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=o.TEXTURE_3D);const xt=_t(U,y),ut=y.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+q);const kt=r.get(ut);if(ut.version!==kt.__version||xt===!0){i.activeTexture(o.TEXTURE0+q);const Ct=Te.getPrimaries(Te.workingColorSpace),Zt=y.colorSpace===Ja?null:Te.getPrimaries(y.colorSpace),te=y.colorSpace===Ja||Ct===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let yt=C(y.image,!1,l.maxTextureSize);yt=Ue(y,yt);const St=u.convert(y.format,y.colorSpace),Nt=u.convert(y.type);let Lt=P(y.internalFormat,St,Nt,y.colorSpace,y.isVideoTexture);Y(dt,y);let Ot;const ce=y.mipmaps,W=y.isVideoTexture!==!0,Rt=kt.__version===void 0||xt===!0,bt=ut.dataReady,Pt=X(y,yt);if(y.isDepthTexture)Lt=N(y.format===Dr,y.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Lt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,null));else if(y.isDataTexture)if(ce.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Ot=ce[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data);y.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height),bt&&Ft(y,yt,St,Nt)):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,ce[0].width,ce[0].height,yt.depth);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)if(Ot=ce[Mt],y.format!==Ti)if(St!==null)if(W){if(bt)if(y.layerUpdates.size>0){const zt=K0(Ot.width,Ot.height,y.format,y.type);for(const ne of y.layerUpdates){const Ne=Ot.data.subarray(ne*zt/Ot.data.BYTES_PER_ELEMENT,(ne+1)*zt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Ot.width,Ot.height,1,St,Ne)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Nt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,St,Nt,Ot.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Ot=ce[Mt],y.format!==Ti?St!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,Ot.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data)}else if(y.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,yt.width,yt.height,yt.depth),bt)if(y.layerUpdates.size>0){const Mt=K0(yt.width,yt.height,y.format,y.type);for(const ct of y.layerUpdates){const zt=yt.data.subarray(ct*Mt/yt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,yt.width,yt.height,1,St,Nt,zt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(y.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Pt,Lt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(y.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height);else{let Mt=yt.width,ct=yt.height;for(let zt=0;zt<Pt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Lt,Mt,ct,0,St,Nt,null),Mt>>=1,ct>>=1}}else if(ce.length>0){if(W&&Rt){const Mt=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Ot=ce[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Nt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Lt,St,Nt,Ot);y.generateMipmaps=!1}else if(W){if(Rt){const Mt=qt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Nt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Lt,St,Nt,yt);M(y)&&x(dt),kt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function vt(U,y,q){if(y.image.length!==6)return;const dt=_t(U,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+q);const ut=r.get(xt);if(xt.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+q);const kt=Te.getPrimaries(Te.workingColorSpace),Ct=y.colorSpace===Ja?null:Te.getPrimaries(y.colorSpace),Zt=y.colorSpace===Ja||kt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!te&&!yt?St[ct]=C(y.image[ct],!0,l.maxCubemapSize):St[ct]=yt?y.image[ct].image:y.image[ct],St[ct]=Ue(y,St[ct]);const Nt=St[0],Lt=u.convert(y.format,y.colorSpace),Ot=u.convert(y.type),ce=P(y.internalFormat,Lt,Ot,y.colorSpace),W=y.isVideoTexture!==!0,Rt=ut.__version===void 0||dt===!0,bt=xt.dataReady;let Pt=X(y,Nt);Y(o.TEXTURE_CUBE_MAP,y);let Mt;if(te){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,Nt.width,Nt.height);for(let ct=0;ct<6;ct++){Mt=St[ct].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ne=Mt[zt];y.format!==Ti?Lt!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ne.width,ne.height,Lt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,ce,ne.width,ne.height,0,ne.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,ne.width,ne.height,Lt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,ce,ne.width,ne.height,0,Lt,Ot,ne.data)}}}else{if(Mt=y.mipmaps,W&&Rt){Mt.length>0&&Pt++;const ct=qt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(yt){W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,Lt,Ot,St[ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,St[ct].width,St[ct].height,0,Lt,Ot,St[ct].data);for(let zt=0;zt<Mt.length;zt++){const Ne=Mt[zt].image[ct].image;W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Ne.width,Ne.height,Lt,Ot,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,ce,Ne.width,Ne.height,0,Lt,Ot,Ne.data)}}else{W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Ot,St[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Lt,Ot,St[ct]);for(let zt=0;zt<Mt.length;zt++){const ne=Mt[zt];W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Lt,Ot,ne.image[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,ce,Lt,Ot,ne.image[ct])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Tt(U,y,q,dt,xt,ut){const kt=u.convert(q.format,q.colorSpace),Ct=u.convert(q.type),Zt=P(q.internalFormat,kt,Ct,q.colorSpace),te=r.get(y),yt=r.get(q);if(yt.__renderTarget=y,!te.__hasExternalTextures){const St=Math.max(1,y.width>>ut),Nt=Math.max(1,y.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Zt,St,Nt,y.depth,0,kt,Ct,null):i.texImage2D(xt,ut,Zt,St,Nt,0,kt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,xt,yt.__webglTexture,0,G(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,xt,yt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(U,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),y.depthBuffer){const dt=y.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ut=N(y.stencilBuffer,xt),kt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ut,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ut,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ut,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const dt=y.textures;for(let xt=0;xt<dt.length;xt++){const ut=dt[xt],kt=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),Zt=P(ut.internalFormat,kt,Ct,ut.colorSpace);We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Zt,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Zt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(U,y,q){const dt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y.depthTexture);const te=u.convert(y.depthTexture.format),yt=u.convert(y.depthTexture.type);let St;y.depthTexture.format===_a?St=o.DEPTH_COMPONENT24:y.depthTexture.format===Dr&&(St=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,y.width,y.height,0,te,yt,null)}}else J(y.depthTexture,0);const ut=xt.__webglTexture,kt=G(y),Ct=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Zt=y.depthTexture.format===Dr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===_a)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Ct,ut,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Ct,ut,0);else if(y.depthTexture.format===Dr)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Ct,ut,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function $t(U){const y=r.get(U),q=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),dt){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=dt}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Kt(y.__webglFramebuffer[dt],U,dt);else{const dt=U.texture.mipmaps;dt&&dt.length>0?Kt(y.__webglFramebuffer[0],U,0):Kt(y.__webglFramebuffer,U,0)}else if(q){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]===void 0)y.__webglDepthbuffer[dt]=o.createRenderbuffer(),Xt(y.__webglDepthbuffer[dt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Xt(y.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,y,q){const dt=r.get(U);y!==void 0&&Tt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&$t(U)}function _e(U){const y=U.texture,q=r.get(U),dt=r.get(y);U.addEventListener("dispose",B);const xt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=y.version,h.memory.textures++),ut){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<y.mipmaps.length;Zt++)q.__webglFramebuffer[Ct][Zt]=o.createFramebuffer()}else q.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<y.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=r.get(xt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&We(U)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Zt=xt[Ct];q.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const te=u.convert(Zt.format,Zt.colorSpace),yt=u.convert(Zt.type),St=P(Zt.internalFormat,te,yt,Zt.colorSpace,U.isXRRenderTarget===!0),Nt=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,St,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y);for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Ct][Zt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else Tt(q.__webglFramebuffer[Ct],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=xt[Ct],yt=r.get(te);let St=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),Y(St,te),Tt(q.__webglFramebuffer,U,te,o.COLOR_ATTACHMENT0+Ct,St,0),M(te)&&x(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),Y(Ct,y),y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Zt],U,y,o.COLOR_ATTACHMENT0,Ct,Zt);else Tt(q.__webglFramebuffer,U,y,o.COLOR_ATTACHMENT0,Ct,0);M(y)&&x(Ct),i.unbindTexture()}U.depthBuffer&&$t(U)}function pe(U){const y=U.textures;for(let q=0,dt=y.length;q<dt;q++){const xt=y[q];if(M(xt)){const ut=D(U),kt=r.get(xt).__webglTexture;i.bindTexture(ut,kt),x(ut),i.unbindTexture()}}}const De=[],oe=[];function Ze(U){if(U.samples>0){if(We(U)===!1){const y=U.textures,q=U.width,dt=U.height;let xt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=r.get(U),Ct=y.length>1;if(Ct)for(let te=0;te<y.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let te=0;te<y.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const yt=r.get(y[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,q,dt,0,0,q,dt,xt,o.NEAREST),m===!0&&(De.length=0,oe.length=0,De.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(De.push(ut),oe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<y.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const yt=r.get(y[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function We(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(U){const y=h.render.frame;v.get(U)!==y&&(v.set(U,y),U.update())}function Ue(U,y){const q=U.colorSpace,dt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Ns&&q!==Ja&&(Te.getTransfer(q)===Fe?(dt!==Ti||xt!==fi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),y}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=it,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=ot,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mA(o,e){function i(r,l=Ja){let u;const h=Te.getTransfer(l);if(r===fi)return o.UNSIGNED_BYTE;if(r===Rd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===U_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===L_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===D_)return o.BYTE;if(r===w_)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===Ad)return o.INT;if(r===zi)return o.UNSIGNED_INT;if(r===Oi)return o.FLOAT;if(r===ga)return o.HALF_FLOAT;if(r===N_)return o.ALPHA;if(r===O_)return o.RGB;if(r===Ti)return o.RGBA;if(r===_a)return o.DEPTH_COMPONENT;if(r===Dr)return o.DEPTH_STENCIL;if(r===P_)return o.RED;if(r===Dd)return o.RED_INTEGER;if(r===Ls)return o.RG;if(r===wd)return o.RG_INTEGER;if(r===Ud)return o.RGBA_INTEGER;if(r===Dc||r===wc||r===Uc||r===Lc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xh||r===kh||r===Wh||r===qh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Xh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Yh||r===jh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Kh)return u.COMPRESSED_R11_EAC;if(r===Qh)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Jh)return u.COMPRESSED_RG11_EAC;if(r===$h)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pd||r===md||r===gd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===pd)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_d||r===vd||r===xd||r===Sd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===_d)return u.COMPRESSED_RED_RGTC1_EXT;if(r===vd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const gA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_A=`
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

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new W_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new bi({vertexShader:gA,fragmentShader:_A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xA extends Ps{constructor(e,i){super();const r=this;let l=null,u=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,_=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",M=new vA,x={},D=i.getContextAttributes();let P=null,N=null;const X=[],z=[],B=new Ie;let b=null;const w=new yi;w.viewport=new en;const pt=new yi;pt.viewport=new en;const H=[w,pt],$=new UM;let it=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let vt=X[et];return vt===void 0&&(vt=new lh,X[et]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(et){let vt=X[et];return vt===void 0&&(vt=new lh,X[et]=vt),vt.getGripSpace()},this.getHand=function(et){let vt=X[et];return vt===void 0&&(vt=new lh,X[et]=vt),vt.getHandSpace()};function J(et){const vt=z.indexOf(et.inputSource);if(vt===-1)return;const Tt=X[vt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,d||h),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",F);for(let et=0;et<X.length;et++){const vt=z[et];vt!==null&&(z[et]=null,X[et].disconnect(vt))}it=null,lt=null,M.reset();for(const et in x)delete x[et];e.setRenderTarget(P),E=null,_=null,S=null,l=null,N=null,Ft.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",L),l.addEventListener("inputsourceschange",F),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Xt=null,Kt=null;D.depth&&(Kt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=D.stencil?Dr:_a,Xt=D.stencil?Ho:zi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};S=this.getBinding(),_=S.createProjectionLayer($t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Ii(_.textureWidth,_.textureHeight,{format:Ti,type:fi,depthTexture:new Go(_.textureWidth,_.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Ii(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(et){for(let vt=0;vt<et.removed.length;vt++){const Tt=et.removed[vt],Xt=z.indexOf(Tt);Xt>=0&&(z[Xt]=null,X[Xt].disconnect(Tt))}for(let vt=0;vt<et.added.length;vt++){const Tt=et.added[vt];let Xt=z.indexOf(Tt);if(Xt===-1){for(let $t=0;$t<X.length;$t++)if($t>=z.length){z.push(Tt),Xt=$t;break}else if(z[$t]===null){z[$t]=Tt,Xt=$t;break}if(Xt===-1)break}const Kt=X[Xt];Kt&&Kt.connect(Tt)}}const ot=new at,ht=new at;function Et(et,vt,Tt){ot.setFromMatrixPosition(vt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const Xt=ot.distanceTo(ht),Kt=vt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Ke=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],De=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ze=($t[8]+1)/$t[0],G=Ke*oe,We=Ke*Ze,ye=Xt/(-oe+Ze),Ue=ye*-oe;if(vt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ue),et.translateZ(ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Kt[10]===-1)et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const qt=Ke+ye,U=_e+ye,y=G-Ue,q=We+(Xt-Ue),dt=pe*_e/U*qt,xt=De*_e/U*qt;et.projectionMatrix.makePerspective(y,q,dt,xt,qt,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function O(et,vt){vt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(vt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let vt=et.near,Tt=et.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),$.near=pt.near=w.near=vt,$.far=pt.far=w.far=Tt,(it!==$.near||lt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),it=$.near,lt=$.far),$.layers.mask=et.layers.mask|6,w.layers.mask=$.layers.mask&-5,pt.layers.mask=$.layers.mask&-3;const Xt=et.parent,Kt=$.cameras;O($,Xt);for(let $t=0;$t<Kt.length;$t++)O(Kt[$t],Xt);Kt.length===2?Et($,w,pt):$.projectionMatrix.copy(w.projectionMatrix),Y(et,$,Xt)};function Y(et,vt,Tt){Tt===null?et.matrix.copy(vt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(vt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Md*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(et){m=et,_!==null&&(_.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(et){return x[et]};let _t=null;function At(et,vt){if(v=vt.getViewerPose(d||h),T=vt,v!==null){const Tt=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Xt=!1;Tt.length!==$.cameras.length&&($.cameras.length=0,Xt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let De=null;if(E!==null)De=E.getViewport(pe);else{const Ze=S.getViewSubImage(_,pe);De=Ze.viewport,_e===0&&(e.setRenderTargetTextures(N,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(N))}let oe=H[_e];oe===void 0&&(oe=new yi,oe.layers.enable(_e),oe.viewport=new en,H[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(De.x,De.y,De.width,De.height),_e===0&&($.matrix.copy(oe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Xt===!0&&$.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const _e=S.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(Kt&&Kt.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let De=x[pe];De||(De=new W_,x[pe]=De);const oe=S.getCameraImage(pe);De.sourceTexture=oe}}}}for(let Tt=0;Tt<X.length;Tt++){const Xt=z[Tt],Kt=X[Tt];Xt!==null&&Kt!==void 0&&Kt.update(Xt,vt,d||h)}_t&&_t(et,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),T=null}const Ft=new j_;Ft.setAnimationLoop(At),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const Tr=new va,SA=new fn;function MA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,q_(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,P,N){x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),S(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&E(M,x,N)):x.isMeshMatcapMaterial?(u(M,x),T(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,D,P):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Vn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Vn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,N=D.envMapRotation;P&&(M.envMap.value=P,Tr.copy(N),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Tr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,D,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yA(o,e,i,r){let l={},u={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const N=P.program;r.uniformBlockBinding(D,N)}function d(D,P){let N=l[D.id];N===void 0&&(T(D),N=v(D),l[D.id]=N,D.addEventListener("dispose",M));const X=P.program;r.updateUBOMapping(D,X);const z=e.render.frame;u[D.id]!==z&&(_(D),u[D.id]=z)}function v(D){const P=S();D.__bindingPointIndex=P;const N=o.createBuffer(),X=D.__size,z=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function S(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=l[D.id],N=D.uniforms,X=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let z=0,B=N.length;z<B;z++){const b=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,pt=b.length;w<pt;w++){const H=b[w];if(E(H,z,w,X)===!0){const $=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let J=0;J<it.length;J++){const L=it[J],F=C(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,$+lt,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,lt),lt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,P,N,X){const z=D.value,B=P+"_"+N;if(X[B]===void 0)return typeof z=="number"||typeof z=="boolean"?X[B]=z:X[B]=z.clone(),!0;{const b=X[B];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return X[B]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function T(D){const P=D.uniforms;let N=0;const X=16;for(let B=0,b=P.length;B<b;B++){const w=Array.isArray(P[B])?P[B]:[P[B]];for(let pt=0,H=w.length;pt<H;pt++){const $=w[pt],it=Array.isArray($.value)?$.value:[$.value];for(let lt=0,J=it.length;lt<J;lt++){const L=it[lt],F=C(L),ot=N%X,ht=ot%F.boundary,Et=ot+ht;N+=ht,Et!==0&&X-Et<F.storage&&(N+=X-Et),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=F.storage}}}const z=N%X;return z>0&&(N+=X-z),D.__size=N,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},u={}}return{bind:m,update:d,dispose:x}}const EA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function TA(){return Li===null&&(Li=new vM(EA,16,16,Ls,ga),Li.name="DFG_LUT",Li.minFilter=Rn,Li.magFilter=Rn,Li.wrapS=ha,Li.wrapT=ha,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class bA{constructor(e={}){const{canvas:i=jS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=fi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const C=E,M=new Set([Ud,wd,Dd]),x=new Set([fi,zi,zo,Ho,Rd,Cd]),D=new Uint32Array(4),P=new Int32Array(4);let N=null,X=null;const z=[],B=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let pt=!1;this._outputColorSpace=ui;let H=0,$=0,it=null,lt=-1,J=null;const L=new en,F=new en;let ot=null;const ht=new Ge(0);let Et=0,O=i.width,Y=i.height,_t=1,At=null,Ft=null;const et=new en(0,0,O,Y),vt=new en(0,0,O,Y);let Tt=!1;const Xt=new X_;let Kt=!1,$t=!1;const Ke=new fn,_e=new at,pe=new en,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return it===null?_t:1}let G=r;function We(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),G===null){const k="webgl2";if(G=We(k,R),G===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let ye,Ue,qt,U,y,q,dt,xt,ut,kt,Ct,Zt,te,yt,St,Nt,Lt,Ot,ce,W,Rt,bt,Pt;function Mt(){ye=new bT(G),ye.init(),Rt=new mA(G,ye),Ue=new _T(G,ye,e,Rt),qt=new dA(G,ye),Ue.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),U=new CT(G),y=new $b,q=new pA(G,ye,qt,y,Ue,Rt,U),dt=new TT(w),xt=new NM(G),bt=new mT(G,xt),ut=new AT(G,xt,U,bt),kt=new wT(G,ut,xt,bt,U),Ot=new DT(G,Ue,q),St=new vT(y),Ct=new Jb(w,dt,ye,Ue,bt,St),Zt=new MA(w,y),te=new eA,yt=new oA(ye),Lt=new pT(w,dt,qt,kt,T,m),Nt=new hA(w,kt,Ue),Pt=new yA(G,U,Ue,qt),ce=new gT(G,ye,U),W=new RT(G,ye,U),U.programs=Ct.programs,w.capabilities=Ue,w.extensions=ye,w.properties=y,w.renderLists=te,w.shadowMap=Nt,w.state=qt,w.info=U}Mt(),C!==fi&&(b=new LT(C,i.width,i.height,l,u));const ct=new xA(w,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,k,rt=!0){if(ct.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),rt===!0&&(i.style.width=R+"px",i.style.height=k+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*_t,Y*_t).floor()},this.setDrawingBufferSize=function(R,k,rt){O=R,Y=k,_t=rt,i.width=Math.floor(R*rt),i.height=Math.floor(k*rt),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(C===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,k,rt,tt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,k,rt,tt),qt.viewport(L.copy(et).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,k,rt,tt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,k,rt,tt),qt.scissor(F.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){qt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,rt=!0){let tt=0;if(R){let Z=!1;if(it!==null){const Dt=it.texture.format;Z=M.has(Dt)}if(Z){const Dt=it.texture.type,It=x.has(Dt),wt=Lt.getClearColor(),Wt=Lt.getClearAlpha(),jt=wt.r,ee=wt.g,ae=wt.b;It?(D[0]=jt,D[1]=ee,D[2]=ae,D[3]=Wt,G.clearBufferuiv(G.COLOR,0,D)):(P[0]=jt,P[1]=ee,P[2]=ae,P[3]=Wt,G.clearBufferiv(G.COLOR,0,P))}else tt|=G.COLOR_BUFFER_BIT}k&&(tt|=G.DEPTH_BUFFER_BIT),rt&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),Lt.dispose(),te.dispose(),yt.dispose(),y.dispose(),dt.dispose(),kt.dispose(),bt.dispose(),Pt.dispose(),Ct.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Lr),ct.removeEventListener("sessionend",Nr),Ai.stop()};function zt(R){R.preventDefault(),N0("WebGLRenderer: Context Lost."),pt=!0}function ne(){N0("WebGLRenderer: Context Restored."),pt=!1;const R=U.autoReset,k=Nt.enabled,rt=Nt.autoUpdate,tt=Nt.needsUpdate,Z=Nt.type;Mt(),U.autoReset=R,Nt.enabled=k,Nt.autoUpdate=rt,Nt.needsUpdate=tt,Nt.type=Z}function Ne(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const k=R.target;k.removeEventListener("dispose",Ee),Cn(k)}function Cn(R){hi(R),y.remove(R)}function hi(R){const k=y.get(R).programs;k!==void 0&&(k.forEach(function(rt){Ct.releaseProgram(rt)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,rt,tt,Z,Dt){k===null&&(k=De);const It=Z.isMesh&&Z.matrixWorld.determinant()<0,wt=Zo(R,k,rt,tt,Z);qt.setMaterial(tt,It);let Wt=rt.index,jt=1;if(tt.wireframe===!0){if(Wt=ut.getWireframeAttribute(rt),Wt===void 0)return;jt=2}const ee=rt.drawRange,ae=rt.attributes.position;let Ht=ee.start*jt,ue=(ee.start+ee.count)*jt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*jt),ue=Math.min(ue,(Dt.start+Dt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,Wt.count)):ae!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,ae.count));const qe=ue-Ht;if(qe<0||qe===1/0)return;bt.setup(Z,tt,wt,rt,Wt);let Ye,be=ce;if(Wt!==null&&(Ye=xt.get(Wt),be=W,be.setIndex(Ye)),Z.isMesh)tt.wireframe===!0?(qt.setLineWidth(tt.wireframeLinewidth*Ze()),be.setMode(G.LINES)):be.setMode(G.TRIANGLES);else if(Z.isLine){let dn=tt.linewidth;dn===void 0&&(dn=1),qt.setLineWidth(dn*Ze()),Z.isLineSegments?be.setMode(G.LINES):Z.isLineLoop?be.setMode(G.LINE_LOOP):be.setMode(G.LINE_STRIP)}else Z.isPoints?be.setMode(G.POINTS):Z.isSprite&&be.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ic("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const dn=Z._multiDrawStarts,Vt=Z._multiDrawCounts,Dn=Z._multiDrawCount,ie=Wt?xt.get(Wt).bytesPerElement:1,wn=y.get(tt).currentProgram.getUniforms();for(let Xn=0;Xn<Dn;Xn++)wn.setValue(G,"_gl_DrawID",Xn),be.render(dn[Xn]/ie,Vt[Xn])}else if(Z.isInstancedMesh)be.renderInstances(Ht,qe,Z.count);else if(rt.isInstancedBufferGeometry){const dn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vt=Math.min(rt.instanceCount,dn);be.renderInstances(Ht,qe,Vt)}else be.render(Ht,qe)};function Bs(R,k,rt){R.transparent===!0&&R.side===fa&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Sa(R,k,rt),R.side=tr,R.needsUpdate=!0,Sa(R,k,rt),R.side=fa):Sa(R,k,rt)}this.compile=function(R,k,rt=null){rt===null&&(rt=R),X=yt.get(rt),X.init(k),B.push(X),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(X.pushLight(Z),Z.castShadow&&X.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(X.pushLight(Z),Z.castShadow&&X.pushShadow(Z))}),X.setupLights();const tt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const wt=Dt[It];Bs(wt,rt,Z),tt.add(wt)}else Bs(Dt,rt,Z),tt.add(Dt)}),X=B.pop(),tt},this.compileAsync=function(R,k,rt=null){const tt=this.compile(R,k,rt);return new Promise(Z=>{function Dt(){if(tt.forEach(function(It){y.get(It).currentProgram.isReady()&&tt.delete(It)}),tt.size===0){Z(R);return}setTimeout(Dt,10)}ye.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ur=null;function qo(R){Ur&&Ur(R)}function Lr(){Ai.stop()}function Nr(){Ai.start()}const Ai=new j_;Ai.setAnimationLoop(qo),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Ur=R,ct.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ct.addEventListener("sessionstart",Lr),ct.addEventListener("sessionend",Nr),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const rt=ct.enabled===!0&&ct.isPresenting===!0,tt=b!==null&&(it===null||rt)&&b.begin(w,it);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,k,it),X=yt.get(R,B.length),X.init(k),B.push(X),Ke.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xt.setFromProjectionMatrix(Ke,Pi,k.reversedDepth),$t=this.localClippingEnabled,Kt=St.init(this.clippingPlanes,$t),N=te.get(R,z.length),N.init(),z.push(N),ct.enabled===!0&&ct.isPresenting===!0){const It=w.xr.getDepthSensingMesh();It!==null&&Or(It,k,-1/0,w.sortObjects)}Or(R,k,0,w.sortObjects),N.finish(),w.sortObjects===!0&&N.sort(At,Ft),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&Lt.addToRenderList(N,R),this.info.render.frame++,Kt===!0&&St.beginShadows();const Z=X.state.shadowsArray;if(Nt.render(Z,R,k),Kt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&b.hasRenderPass())===!1){const It=N.opaque,wt=N.transmissive;if(X.setupLights(),k.isArrayCamera){const Wt=k.cameras;if(wt.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const ae=Wt[jt];nn(It,wt,R,ae)}oe&&Lt.render(R);for(let jt=0,ee=Wt.length;jt<ee;jt++){const ae=Wt[jt];di(N,R,ae,ae.viewport)}}else wt.length>0&&nn(It,wt,R,k),oe&&Lt.render(R),di(N,R,k)}it!==null&&$===0&&(q.updateMultisampleRenderTarget(it),q.updateRenderTargetMipmap(it)),tt&&b.end(w),R.isScene===!0&&R.onAfterRender(w,R,k),bt.resetDefaultState(),lt=-1,J=null,B.pop(),B.length>0?(X=B[B.length-1],Kt===!0&&St.setGlobalState(w.clippingPlanes,X.state.camera)):X=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function Or(R,k,rt,tt){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)X.pushLight(R),R.castShadow&&X.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){tt&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const It=kt.update(R),wt=R.material;wt.visible&&N.push(R,It,wt,rt,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const It=kt.update(R),wt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),pe.copy(It.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(wt)){const Wt=It.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const ae=Wt[jt],Ht=wt[ae.materialIndex];Ht&&Ht.visible&&N.push(R,It,Ht,rt,pe.z,ae)}}else wt.visible&&N.push(R,It,wt,rt,pe.z,null)}}const Dt=R.children;for(let It=0,wt=Dt.length;It<wt;It++)Or(Dt[It],k,rt,tt)}function di(R,k,rt,tt){const{opaque:Z,transmissive:Dt,transparent:It}=R;X.setupLightsView(rt),Kt===!0&&St.setGlobalState(w.clippingPlanes,rt),tt&&qt.viewport(L.copy(tt)),Z.length>0&&hn(Z,k,rt),Dt.length>0&&hn(Dt,k,rt),It.length>0&&hn(It,k,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function nn(R,k,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(X.state.transmissionRenderTarget[tt.id]===void 0){const Ht=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");X.state.transmissionRenderTarget[tt.id]=new Ii(1,1,{generateMipmaps:!0,type:Ht?ga:fi,minFilter:Cr,samples:Math.max(4,Ue.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=X.state.transmissionRenderTarget[tt.id],It=tt.viewport||L;Dt.setSize(It.z*w.transmissionResolutionScale,It.w*w.transmissionResolutionScale);const wt=w.getRenderTarget(),Wt=w.getActiveCubeFace(),jt=w.getActiveMipmapLevel();w.setRenderTarget(Dt),w.getClearColor(ht),Et=w.getClearAlpha(),Et<1&&w.setClearColor(16777215,.5),w.clear(),oe&&Lt.render(rt);const ee=w.toneMapping;w.toneMapping=Fi;const ae=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),X.setupLightsView(tt),Kt===!0&&St.setGlobalState(w.clippingPlanes,tt),hn(R,rt,tt),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,qe=k.length;ue<qe;ue++){const Ye=k[ue],{object:be,geometry:dn,material:Vt,group:Dn}=Ye;if(Vt.side===fa&&be.layers.test(tt.layers)){const ie=Vt.side;Vt.side=Vn,Vt.needsUpdate=!0,Gi(be,rt,tt,dn,Vt,Dn),Vt.side=ie,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}w.setRenderTarget(wt,Wt,jt),w.setClearColor(ht,Et),ae!==void 0&&(tt.viewport=ae),w.toneMapping=ee}function hn(R,k,rt){const tt=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Dt=R.length;Z<Dt;Z++){const It=R[Z],{object:wt,geometry:Wt,group:jt}=It;let ee=It.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),wt.layers.test(rt.layers)&&Gi(wt,k,rt,Wt,ee,jt)}}function Gi(R,k,rt,tt,Z,Dt){R.onBeforeRender(w,k,rt,tt,Z,Dt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,k,rt,tt,R,Dt),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,w.renderBufferDirect(rt,k,tt,Z,R,Dt),Z.side=tr,Z.needsUpdate=!0,w.renderBufferDirect(rt,k,tt,Z,R,Dt),Z.side=fa):w.renderBufferDirect(rt,k,tt,Z,R,Dt),R.onAfterRender(w,k,rt,tt,Z,Dt)}function Sa(R,k,rt){k.isScene!==!0&&(k=De);const tt=y.get(R),Z=X.state.lights,Dt=X.state.shadowsArray,It=Z.state.version,wt=Ct.getParameters(R,Z.state,Dt,k,rt),Wt=Ct.getProgramCacheKey(wt);let jt=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,tt.fog=k.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=dt.get(R.envMap||tt.environment,ee),tt.envMapRotation=tt.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Ee),jt=new Map,tt.programs=jt);let ae=jt.get(Wt);if(ae!==void 0){if(tt.currentProgram===ae&&tt.lightsStateVersion===It)return jo(R,wt),ae}else wt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(wt,w),ae=Ct.acquireProgram(wt,Wt),jt.set(Wt,ae),tt.uniforms=wt.uniforms;const Ht=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=St.uniform),jo(R,wt),tt.needsLights=zs(R),tt.lightsStateVersion=It,tt.needsLights&&(Ht.ambientLightColor.value=Z.state.ambient,Ht.lightProbe.value=Z.state.probe,Ht.directionalLights.value=Z.state.directional,Ht.directionalLightShadows.value=Z.state.directionalShadow,Ht.spotLights.value=Z.state.spot,Ht.spotLightShadows.value=Z.state.spotShadow,Ht.rectAreaLights.value=Z.state.rectArea,Ht.ltc_1.value=Z.state.rectAreaLTC1,Ht.ltc_2.value=Z.state.rectAreaLTC2,Ht.pointLights.value=Z.state.point,Ht.pointLightShadows.value=Z.state.pointShadow,Ht.hemisphereLights.value=Z.state.hemi,Ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Z.state.spotLightMatrix,Ht.spotLightMap.value=Z.state.spotLightMap,Ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=ae,tt.uniformsList=null,ae}function Yo(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function jo(R,k){const rt=y.get(R);rt.outputColorSpace=k.outputColorSpace,rt.batching=k.batching,rt.batchingColor=k.batchingColor,rt.instancing=k.instancing,rt.instancingColor=k.instancingColor,rt.instancingMorph=k.instancingMorph,rt.skinning=k.skinning,rt.morphTargets=k.morphTargets,rt.morphNormals=k.morphNormals,rt.morphColors=k.morphColors,rt.morphTargetsCount=k.morphTargetsCount,rt.numClippingPlanes=k.numClippingPlanes,rt.numIntersection=k.numClipIntersection,rt.vertexAlphas=k.vertexAlphas,rt.vertexTangents=k.vertexTangents,rt.toneMapping=k.toneMapping}function Zo(R,k,rt,tt,Z){k.isScene!==!0&&(k=De),q.resetTextureUnits();const Dt=k.fog,It=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?k.environment:null,wt=it===null?w.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ns,Wt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,jt=dt.get(tt.envMap||It,Wt),ee=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ae=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ht=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,qe=!!rt.morphAttributes.color;let Ye=Fi;tt.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ye=w.toneMapping);const be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,dn=be!==void 0?be.length:0,Vt=y.get(tt),Dn=X.state.lights;if(Kt===!0&&($t===!0||R!==J)){const rn=R===J&&tt.id===lt;St.setState(tt,R,rn)}let ie=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Dn.state.version||Vt.outputColorSpace!==wt||Z.isBatchedMesh&&Vt.batching===!1||!Z.isBatchedMesh&&Vt.batching===!0||Z.isBatchedMesh&&Vt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Vt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Vt.instancing===!1||!Z.isInstancedMesh&&Vt.instancing===!0||Z.isSkinnedMesh&&Vt.skinning===!1||!Z.isSkinnedMesh&&Vt.skinning===!0||Z.isInstancedMesh&&Vt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Vt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Vt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Vt.instancingMorph===!1&&Z.morphTexture!==null||Vt.envMap!==jt||tt.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==St.numPlanes||Vt.numIntersection!==St.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==ae||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==qe||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==dn)&&(ie=!0):(ie=!0,Vt.__version=tt.version);let wn=Vt.currentProgram;ie===!0&&(wn=Sa(tt,k,Z));let Xn=!1,pi=!1,kn=!1;const Le=wn.getUniforms(),an=Vt.uniforms;if(qt.useProgram(wn.program)&&(Xn=!0,pi=!0,kn=!0),tt.id!==lt&&(lt=tt.id,pi=!0),Xn||J!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Le.setValue(G,"projectionMatrix",R.projectionMatrix),Le.setValue(G,"viewMatrix",R.matrixWorldInverse);const mi=Le.map.cameraPosition;mi!==void 0&&mi.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Le.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Le.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,pi=!0,kn=!0)}if(Vt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Le.setValue(G,"directionalShadowMap",Dn.state.directionalShadowMap,q),Dn.state.spotShadowMap.length>0&&Le.setValue(G,"spotShadowMap",Dn.state.spotShadowMap,q),Dn.state.pointShadowMap.length>0&&Le.setValue(G,"pointShadowMap",Dn.state.pointShadowMap,q)),Z.isSkinnedMesh){Le.setOptional(G,Z,"bindMatrix"),Le.setOptional(G,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Le.setValue(G,"boneTexture",rn.boneTexture,q))}Z.isBatchedMesh&&(Le.setOptional(G,Z,"batchingTexture"),Le.setValue(G,"batchingTexture",Z._matricesTexture,q),Le.setOptional(G,Z,"batchingIdTexture"),Le.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Le.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Le.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ot.update(Z,rt,wn),(pi||Vt.receiveShadow!==Z.receiveShadow)&&(Vt.receiveShadow=Z.receiveShadow,Le.setValue(G,"receiveShadow",Z.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=TA()),pi&&(Le.setValue(G,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&er(an,kn),Dt&&tt.fog===!0&&Zt.refreshFogUniforms(an,Dt),Zt.refreshMaterialUniforms(an,tt,_t,Y,X.state.transmissionRenderTarget[R.id]),Nc.upload(G,Yo(Vt),an,q)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Nc.upload(G,Yo(Vt),an,q),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Le.setValue(G,"center",Z.center),Le.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Le.setValue(G,"normalMatrix",Z.normalMatrix),Le.setValue(G,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const rn=tt.uniformsGroups;for(let mi=0,Vi=rn.length;mi<Vi;mi++){const Pr=rn[mi];Pt.update(Pr,wn),Pt.bind(Pr,wn)}}return wn}function er(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function zs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(R,k,rt){const tt=y.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=k,y.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const rt=y.get(R);rt.__webglFramebuffer=k,rt.__useDefaultFramebuffer=k===void 0};const Ma=G.createFramebuffer();this.setRenderTarget=function(R,k=0,rt=0){it=R,H=k,$=rt;let tt=null,Z=!1,Dt=!1;if(R){const wt=y.get(R);if(wt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,wt.__webglFramebuffer),L.copy(R.viewport),F.copy(R.scissor),ot=R.scissorTest,qt.viewport(L),qt.scissor(F),qt.setScissorTest(ot),lt=-1;return}else if(wt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(wt.__hasExternalTextures)q.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&y.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const jt=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?tt=jt[k][rt]:tt=jt[k],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?tt=y.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?tt=jt[rt]:tt=jt,L.copy(R.viewport),F.copy(R.scissor),ot=R.scissorTest}else L.copy(et).multiplyScalar(_t).floor(),F.copy(vt).multiplyScalar(_t).floor(),ot=Tt;if(rt!==0&&(tt=Ma),qt.bindFramebuffer(G.FRAMEBUFFER,tt)&&qt.drawBuffers(R,tt),qt.viewport(L),qt.scissor(F),qt.setScissorTest(ot),Z){const wt=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,rt)}else if(Dt){const wt=k;for(let Wt=0;Wt<R.textures.length;Wt++){const jt=y.get(R.textures[Wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,rt,wt)}}else if(R!==null&&rt!==0){const wt=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,rt)}lt=-1},this.readRenderTargetPixels=function(R,k,rt,tt,Z,Dt,It,wt=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);try{const jt=R.textures[wt],ee=jt.format,ae=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt),!Ue.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ae)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-tt&&rt>=0&&rt<=R.height-Z&&G.readPixels(k,rt,tt,Z,Rt.convert(ee),Rt.convert(ae),Dt)}finally{const jt=it!==null?y.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,k,rt,tt,Z,Dt,It,wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt)if(k>=0&&k<=R.width-tt&&rt>=0&&rt<=R.height-Z){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);const jt=R.textures[wt],ee=jt.format,ae=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt),!Ue.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(k,rt,tt,Z,Rt.convert(ee),Rt.convert(ae),0);const ue=it!==null?y.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,ue);const qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ZS(G,qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(Ht),G.deleteSync(qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,rt=0){const tt=Math.pow(2,-rt),Z=Math.floor(R.image.width*tt),Dt=Math.floor(R.image.height*tt),It=k!==null?k.x:0,wt=k!==null?k.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,It,wt,Z,Dt),qt.unbindTexture()};const ya=G.createFramebuffer(),nr=G.createFramebuffer();this.copyTextureToTexture=function(R,k,rt=null,tt=null,Z=0,Dt=0){let It,wt,Wt,jt,ee,ae,Ht,ue,qe;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(rt!==null)It=rt.max.x-rt.min.x,wt=rt.max.y-rt.min.y,Wt=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,ee=rt.min.y,ae=rt.isBox3?rt.min.z:0;else{const an=Math.pow(2,-Z);It=Math.floor(Ye.width*an),wt=Math.floor(Ye.height*an),R.isDataArrayTexture?Wt=Ye.depth:R.isData3DTexture?Wt=Math.floor(Ye.depth*an):Wt=1,jt=0,ee=0,ae=0}tt!==null?(Ht=tt.x,ue=tt.y,qe=tt.z):(Ht=0,ue=0,qe=0);const be=Rt.convert(k.format),dn=Rt.convert(k.type);let Vt;k.isData3DTexture?(q.setTexture3D(k,0),Vt=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),Vt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),Vt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const Dn=G.getParameter(G.UNPACK_ROW_LENGTH),ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),wn=G.getParameter(G.UNPACK_SKIP_PIXELS),Xn=G.getParameter(G.UNPACK_SKIP_ROWS),pi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ae);const kn=R.isDataArrayTexture||R.isData3DTexture,Le=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const an=y.get(R),Un=y.get(k),rn=y.get(an.__renderTarget),mi=y.get(Un.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Vi=0;Vi<Wt;Vi++)kn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(R).__webglTexture,Z,ae+Vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(k).__webglTexture,Dt,qe+Vi)),G.blitFramebuffer(jt,ee,It,wt,Ht,ue,It,wt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||y.has(R)){const an=y.get(R),Un=y.get(k);qt.bindFramebuffer(G.READ_FRAMEBUFFER,ya),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,nr);for(let rn=0;rn<Wt;rn++)kn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,an.__webglTexture,Z,ae+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,an.__webglTexture,Z),Le?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,Dt,qe+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,Dt),Z!==0?G.blitFramebuffer(jt,ee,It,wt,Ht,ue,It,wt,G.COLOR_BUFFER_BIT,G.NEAREST):Le?G.copyTexSubImage3D(Vt,Dt,Ht,ue,qe+rn,jt,ee,It,wt):G.copyTexSubImage2D(Vt,Dt,Ht,ue,jt,ee,It,wt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Le?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Vt,Dt,Ht,ue,qe,It,wt,Wt,be,dn,Ye.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,Dt,Ht,ue,qe,It,wt,Wt,be,Ye.data):G.texSubImage3D(Vt,Dt,Ht,ue,qe,It,wt,Wt,be,dn,Ye):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,It,wt,be,dn,Ye.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,Ye.width,Ye.height,be,Ye.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,It,wt,be,dn,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,wn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pi),Dt===0&&k.generateMipmaps&&G.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){H=0,$=0,it=null,qt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const AA="/portfolio/assets/pylogo-DxV6ZWX8.png",RA="/portfolio/assets/JavaScript-logo-B2gqmNKf.png",CA="/portfolio/assets/tslogo-wQomhaba.png",DA="/portfolio/assets/swiftlogo-Bcb1g5mD.png",wA="/portfolio/assets/csharplogo-zyXeKlM_.png",UA="/portfolio/assets/pekoe1-9YI3fIoX.jpg",LA="/portfolio/assets/pekoe2-Cl4n6HMf.jpg",Uh="/portfolio/assets/github-D4LWCc6B.png",NA="/portfolio/assets/linkedin-CEOENUlf.svg",OA="/portfolio/assets/iglogo-C8zgaBoN.webp";function PA(){const o=Rs.useRef(null),e=Rs.useRef(0),[i,r]=Rs.useState(null);return Rs.useEffect(()=>{const l=()=>{e.current=window.scrollY};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),Rs.useEffect(()=>{const l=new bA;l.setSize(window.innerWidth,window.innerHeight),l.domElement.style.cssText="position:fixed;top:0;left:0;z-index:-1",o.current.appendChild(l.domElement);const u=new fM,h=new Fd(-1,1,1,-1,0,1),p=new Wo(2,2),m=new bi({uniforms:{cr:{value:-.35},ci:{value:.2},resolution:{value:new Ie(window.innerWidth,window.innerHeight)}},vertexShader:`
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float cr;
        uniform float ci;
        uniform vec2 resolution;

        void main() {
          vec2 uv = (gl_FragCoord.xy / resolution) * 4.0 - 2.0;
          float sx = uv.x;
          float sy = uv.y;

          int i = 0;

          for (int j = 0; j < 100; j++) {
            float real = sx * sx - sy * sy;
            float imag = 2.0 * sx * sy;
            sx = real + cr;
            sy = imag + ci;
            if (sx * sx + sy * sy > 4.0) {
              i = j;
              break;
            }
            i = j;
          }

          float t = float(i) / 100.0;

          vec3 a = vec3(1, 1, 1);
          vec3 b = vec3(0.78, 0.85, 0.98);
          vec3 c = vec3(0.0, 0.0, 0.0);
          vec3 dark = vec3(0.65, 0.78, 0.68);

          vec3 col = mix(a, b, t);
          col = mix(col, c, t * t);
          if (i == 99) col = dark;

          gl_FragColor = vec4(col, 1.0);
        }
      `}),d=new Hi(p,m);u.add(d);let v=-.75,S=.2;const _=()=>{l.setSize(window.innerWidth,window.innerHeight),m.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",_),l.setAnimationLoop(()=>{const E=document.body.scrollHeight-window.innerHeight,T=Math.pow(e.current/E,2),C=-.8+T*.8,M=.2+T*.5;v+=(C-v)*.05,S+=(M-S)*.05,m.uniforms.cr.value=v,m.uniforms.ci.value=S,l.render(u,h)}),()=>{window.removeEventListener("resize",_),l.setAnimationLoop(null),l.dispose(),o.current?.removeChild(l.domElement)}},[]),Bt.jsxs(Bt.Fragment,{children:[Bt.jsx("div",{ref:o}),Bt.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:10,display:"flex",gap:"2rem",padding:"1rem",backgroundColor:"rgb(250, 250, 250)",borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},children:[Bt.jsx("a",{href:"#about",children:"About"}),Bt.jsx("a",{href:"#projects",children:"Projects"}),Bt.jsx("a",{href:"#contact",children:"Contact Me"})]}),Bt.jsxs("div",{style:{position:"relative",zIndex:1,marginBottom:"4rem"},children:[Bt.jsx("h1",{className:"title",children:"Jayden Seto"}),Bt.jsx("p",{className:"title",children:"Student | Computer Science Major @ SheridanCollege | Software Developer"})]}),Bt.jsxs("div",{style:{display:"flex",gap:"2rem",justifyContent:"space-around",flexWrap:"wrap",position:"relative",zIndex:1},children:[Bt.jsxs("div",{className:"aboutMe",id:"about",children:[Bt.jsx("h2",{className:"title",children:"About Me"}),Bt.jsx("p",{className:"title",children:"Hello! I'm Jayden Seto, a passionate Computer Science student with a strong interest in software development and web technologies. I enjoy building innovative applications and solving complex problems through code."})]}),Bt.jsxs("div",{className:"aboutMe",children:[Bt.jsx("h2",{children:"Programming Languages"}),Bt.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"1rem",justifyContent:"center"},children:[Bt.jsx("img",{className:"logo",src:AA,alt:"Python"}),Bt.jsx("img",{className:"logo",src:CA,alt:"TypeScript"}),Bt.jsx("img",{className:"logo",src:RA,alt:"JavaScript"}),Bt.jsx("img",{className:"logo",src:DA,alt:"SwiftUI"}),Bt.jsx("img",{className:"logo",src:wA,alt:"C#"})]})]}),Bt.jsxs("div",{className:"aboutMe",children:[Bt.jsx("h2",{children:"Interests & Hobbies"}),Bt.jsx("p",{children:"I love music!"}),Bt.jsx("p",{children:"I love fashion!"}),Bt.jsx("p",{children:"I love my dog!"}),Bt.jsx("p",{children:"I love community!"}),Bt.jsx("p",{children:"I love Dark Souls 1!"}),Bt.jsx("p",{children:"I love Dark Souls 2!"}),Bt.jsx("p",{children:"I love Dark Souls 3!"}),Bt.jsx("p",{children:"I love Sekiro!"}),Bt.jsx("p",{children:"I love Bloodborne!"}),Bt.jsx("p",{children:"I love Elden Ring!"}),Bt.jsx("p",{children:"I love hiking and camping!"}),Bt.jsx("p",{children:"I love thrifting and rock climbing!"})]}),Bt.jsx("div",{className:"aboutMe images",children:Bt.jsx("img",{className:"image",src:i==="python"?LA:UA,alt:"Python",onMouseEnter:()=>r("python"),onMouseLeave:()=>r(null)})}),Bt.jsx("div",{id:"projects",children:Bt.jsx("h1",{className:"title",children:" Wanna see some projects?"})}),Bt.jsxs("div",{className:"aboutMe",children:[Bt.jsx("h3",{children:"Customer Churn Prediction Model"}),Bt.jsx("p",{children:"(Python, PyTorch, Pandas, Scikit-learn)"}),Bt.jsx("p",{children:"Built a neural network to predict customer churn on a dataset of 7,000+ telecom customers. Handled data preprocessing, class imbalance, and model tuning using precision, recall, and ROC-AUC metrics. Includes a batch prediction pipeline to flag at-risk accounts."}),Bt.jsx("a",{href:"https://github.com/Jayden-gts/churn",children:Bt.jsx("img",{className:"logo",src:Uh,alt:"github logo"})})]}),Bt.jsxs("div",{className:"aboutMe",children:[Bt.jsx("h3",{children:"Shifu - Wellness Companion"}),Bt.jsx("p",{children:"(C# ASP.NET Core, EF Core, SQLite)"}),Bt.jsx("p",{children:"Built a full-stack web application with C# ASP.NET Core and SQLite featuring role-based authentication for users, mentors, and admins. Includes a web scraper for auto-populating a community events board, real-time mentor chat, journaling, and profile management."}),Bt.jsx("a",{href:"https://github.com/Jayden-gts/Shifu---Wellness",children:Bt.jsx("img",{className:"logo",src:Uh,alt:"github logo"})})]}),Bt.jsxs("div",{className:"aboutMe",children:[Bt.jsx("h3",{children:"This website!"}),Bt.jsx("p",{children:"(TypeScript, React)"}),Bt.jsx("p",{children:"This website is all about me, featuring a cool fractal background that reacts to your scroll! Built with React and TypeScript, it showcases my projects, skills, and interests in a sleek, responsive design. Check out the code on GitHub!"}),Bt.jsx("a",{href:"https://github.com/Jayden-gts/portfolio",children:Bt.jsx("img",{className:"logo",src:Uh,alt:"github logo"})})]}),Bt.jsxs("div",{className:"aboutMe",id:"contact",children:[Bt.jsx("h2",{children:"Contact Me!"}),Bt.jsx("p",{children:"Email: otesjayden@live.com"}),Bt.jsx("p",{children:Bt.jsx("a",{href:"https://www.linkedin.com/in/jayden-seto/",children:Bt.jsx("img",{className:"logo",src:NA,alt:"linkedin logo"})})}),Bt.jsx("a",{href:"https://www.instagram.com/uhhhjayden/",children:Bt.jsx("img",{className:"logo",src:OA,alt:"instagram logo"})})]})]})]})}dS.createRoot(document.getElementById("root")).render(Bt.jsx(Rs.StrictMode,{children:Bt.jsx(PA,{})}));
