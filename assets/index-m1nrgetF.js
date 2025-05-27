(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Pv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc={exports:{}},zo={},Ic={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Lv(){if(Hp)return dt;Hp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(F,ne,Le){this.props=F,this.context=ne,this.refs=w,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,ne){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ne,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function N(F,ne,Le){this.props=F,this.context=ne,this.refs=w,this.updater=Le||S}var D=N.prototype=new x;D.constructor=N,E(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(F,ne,Le){var Z,ce={},Se=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)G.call(ne,Z)&&!I.hasOwnProperty(Z)&&(ce[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ce.children=Le;else if(1<Te){for(var Ie=Array(Te),Ze=0;Ze<Te;Ze++)Ie[Ze]=arguments[Ze+2];ce.children=Ie}if(F&&F.defaultProps)for(Z in Te=F.defaultProps,Te)ce[Z]===void 0&&(ce[Z]=Te[Z]);return{$$typeof:s,type:F,key:Se,ref:ve,props:ce,_owner:U.current}}function b(F,ne){return{$$typeof:s,type:F.type,key:ne,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var ne={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Le){return ne[Le]})}var le=/\/+/g;function te(F,ne){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):ne.toString(36)}function ue(F,ne,Le,Z,ce){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case s:case e:ve=!0}}if(ve)return ve=F,ce=ce(ve),F=Z===""?"."+te(ve,0):Z,C(ce)?(Le="",F!=null&&(Le=F.replace(le,"$&/")+"/"),ue(ce,ne,Le,"",function(Ze){return Ze})):ce!=null&&(R(ce)&&(ce=b(ce,Le+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(le,"$&/")+"/")+F)),ne.push(ce)),1;if(ve=0,Z=Z===""?".":Z+":",C(F))for(var Te=0;Te<F.length;Te++){Se=F[Te];var Ie=Z+te(Se,Te);ve+=ue(Se,ne,Le,Ie,ce)}else if(Ie=v(F),typeof Ie=="function")for(F=Ie.call(F),Te=0;!(Se=F.next()).done;)Se=Se.value,Ie=Z+te(Se,Te++),ve+=ue(Se,ne,Le,Ie,ce);else if(Se==="object")throw ne=String(F),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function de(F,ne,Le){if(F==null)return F;var Z=[],ce=0;return ue(F,Z,"","",function(Se){return ne.call(Le,Se,ce++)}),Z}function ie(F){if(F._status===-1){var ne=F._result;ne=ne(),ne.then(function(Le){(F._status===0||F._status===-1)&&(F._status=1,F._result=Le)},function(Le){(F._status===0||F._status===-1)&&(F._status=2,F._result=Le)}),F._status===-1&&(F._status=0,F._result=ne)}if(F._status===1)return F._result.default;throw F._result}var ae={current:null},O={transition:null},oe={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:O,ReactCurrentOwner:U};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:de,forEach:function(F,ne,Le){de(F,function(){ne.apply(this,arguments)},Le)},count:function(F){var ne=0;return de(F,function(){ne++}),ne},toArray:function(F){return de(F,function(ne){return ne})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},dt.Component=y,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=N,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,dt.act=re,dt.cloneElement=function(F,ne,Le){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Z=E({},F.props),ce=F.key,Se=F.ref,ve=F._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=U.current),ne.key!==void 0&&(ce=""+ne.key),F.type&&F.type.defaultProps)var Te=F.type.defaultProps;for(Ie in ne)G.call(ne,Ie)&&!I.hasOwnProperty(Ie)&&(Z[Ie]=ne[Ie]===void 0&&Te!==void 0?Te[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Le;else if(1<Ie){Te=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:s,type:F.type,key:ce,ref:Se,props:Z,_owner:ve}},dt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},dt.createElement=X,dt.createFactory=function(F){var ne=X.bind(null,F);return ne.type=F,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(F){return{$$typeof:f,render:F}},dt.isValidElement=R,dt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ie}},dt.memo=function(F,ne){return{$$typeof:p,type:F,compare:ne===void 0?null:ne}},dt.startTransition=function(F){var ne=O.transition;O.transition={};try{F()}finally{O.transition=ne}},dt.unstable_act=re,dt.useCallback=function(F,ne){return ae.current.useCallback(F,ne)},dt.useContext=function(F){return ae.current.useContext(F)},dt.useDebugValue=function(){},dt.useDeferredValue=function(F){return ae.current.useDeferredValue(F)},dt.useEffect=function(F,ne){return ae.current.useEffect(F,ne)},dt.useId=function(){return ae.current.useId()},dt.useImperativeHandle=function(F,ne,Le){return ae.current.useImperativeHandle(F,ne,Le)},dt.useInsertionEffect=function(F,ne){return ae.current.useInsertionEffect(F,ne)},dt.useLayoutEffect=function(F,ne){return ae.current.useLayoutEffect(F,ne)},dt.useMemo=function(F,ne){return ae.current.useMemo(F,ne)},dt.useReducer=function(F,ne,Le){return ae.current.useReducer(F,ne,Le)},dt.useRef=function(F){return ae.current.useRef(F)},dt.useState=function(F){return ae.current.useState(F)},dt.useSyncExternalStore=function(F,ne,Le){return ae.current.useSyncExternalStore(F,ne,Le)},dt.useTransition=function(){return ae.current.useTransition()},dt.version="18.3.1",dt}var Vp;function od(){return Vp||(Vp=1,Ic.exports=Lv()),Ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Dv(){if(Gp)return zo;Gp=1;var s=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,_={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:_,_owner:a.current}}return zo.Fragment=t,zo.jsx=c,zo.jsxs=c,zo}var Wp;function Uv(){return Wp||(Wp=1,Uc.exports=Dv()),Uc.exports}var Gt=Uv(),Qt=od();const Jr=Pv(Qt);var cl={},Nc={exports:{}},On={},Fc={exports:{}},Oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Iv(){return Xp||(Xp=1,function(s){function e(O,oe){var re=O.length;O.push(oe);e:for(;0<re;){var F=re-1>>>1,ne=O[F];if(0<a(ne,oe))O[F]=oe,O[re]=ne,re=F;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var oe=O[0],re=O.pop();if(re!==oe){O[0]=re;e:for(var F=0,ne=O.length,Le=ne>>>1;F<Le;){var Z=2*(F+1)-1,ce=O[Z],Se=Z+1,ve=O[Se];if(0>a(ce,re))Se<ne&&0>a(ve,ce)?(O[F]=ve,O[Se]=re,F=Se):(O[F]=ce,O[Z]=re,F=Z);else if(Se<ne&&0>a(ve,re))O[F]=ve,O[Se]=re,F=Se;else break e}}return oe}function a(O,oe){var re=O.sortIndex-oe.sortIndex;return re!==0?re:O.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,_=null,v=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(O){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=O)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function C(O){if(w=!1,D(O),!E)if(t(h)!==null)E=!0,ie(G);else{var oe=t(p);oe!==null&&ae(C,oe.startTime-O)}}function G(O,oe){E=!1,w&&(w=!1,x(X),X=-1),S=!0;var re=v;try{for(D(oe),_=t(h);_!==null&&(!(_.expirationTime>oe)||O&&!z());){var F=_.callback;if(typeof F=="function"){_.callback=null,v=_.priorityLevel;var ne=F(_.expirationTime<=oe);oe=s.unstable_now(),typeof ne=="function"?_.callback=ne:_===t(h)&&r(h),D(oe)}else r(h);_=t(h)}if(_!==null)var Le=!0;else{var Z=t(p);Z!==null&&ae(C,Z.startTime-oe),Le=!1}return Le}finally{_=null,v=re,S=!1}}var U=!1,I=null,X=-1,b=5,R=-1;function z(){return!(s.unstable_now()-R<b)}function le(){if(I!==null){var O=s.unstable_now();R=O;var oe=!0;try{oe=I(!0,O)}finally{oe?te():(U=!1,I=null)}}else U=!1}var te;if(typeof N=="function")te=function(){N(le)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=le,te=function(){de.postMessage(null)}}else te=function(){y(le,0)};function ie(O){I=O,U||(U=!0,te())}function ae(O,oe){X=y(function(){O(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ie(G))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var re=v;v=oe;try{return O()}finally{v=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,oe){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var re=v;v=O;try{return oe()}finally{v=re}},s.unstable_scheduleCallback=function(O,oe,re){var F=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,O={id:g++,callback:oe,priorityLevel:O,startTime:re,expirationTime:ne,sortIndex:-1},re>F?(O.sortIndex=re,e(p,O),t(h)===null&&O===t(p)&&(w?(x(X),X=-1):w=!0,ae(C,re-F))):(O.sortIndex=ne,e(h,O),E||S||(E=!0,ie(G))),O},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(O){var oe=v;return function(){var re=v;v=oe;try{return O.apply(this,arguments)}finally{v=re}}}}(Oc)),Oc}var jp;function Nv(){return jp||(jp=1,Fc.exports=Iv()),Fc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Fv(){if(Yp)return On;Yp=1;var s=od(),e=Nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(n){return h.call(_,n)?!0:h.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,N);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,N);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,N);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),O=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,F;function ne(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Le=!1;function Z(n,i){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,L=m.length-1;1<=M&&0<=L&&d[M]!==m[L];)L--;for(;1<=M&&0<=L;M--,L--)if(d[M]!==m[L]){if(M!==1||L!==1)do if(M--,L--,0>L||d[M]!==m[L]){var k=`
`+d[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=L);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function ce(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case U:return"Portal";case b:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ie(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Ze(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ie(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Sn(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=Te(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,o):i.hasOwnProperty("defaultValue")&&wt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function wt(n,i,o){(i!=="number"||Pt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ge=Array.isArray;function P(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ge(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Te(o)}}function pe(n,i){var o=Te(i.value),u=Te(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ne=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function Je(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function nt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,se=null,he=null;function Pe(n){if(n=wo(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wa(i),Ae(n.stateNode,n.type,i))}}function be(n){se?he?he.push(n):he=[n]:se=n}function it(){if(se){var n=se,i=he;if(he=se=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Dt(n,i){return n(i)}function qt(){}var yt=!1;function Ln(n,i,o){if(yt)return n(i,o);yt=!0;try{return Dt(n,i,o)}finally{yt=!1,(se!==null||he!==null)&&(qt(),it())}}function Mn(n,i){var o=n.stateNode;if(o===null)return null;var u=wa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var rs=!1;if(f)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{rs=!1}function Ti(n,i,o,u,d,m,M,L,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(_e){this.onError(_e)}}var wi=!1,Cr=null,br=!1,Zi=null,ia={onError:function(n){wi=!0,Cr=n}};function ss(n,i,o,u,d,m,M,L,k){wi=!1,Cr=null,Ti.apply(ia,arguments)}function ra(n,i,o,u,d,m,M,L,k){if(ss.apply(this,arguments),wi){if(wi){var ee=Cr;wi=!1,Cr=null}else throw Error(t(198));br||(br=!0,Zi=ee)}}function pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function sa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oa(n){if(pi(n)!==n)throw Error(t(188))}function nu(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return oa(d),n;if(m===u)return oa(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,L=d.child;L;){if(L===o){M=!0,o=d,u=m;break}if(L===u){M=!0,u=d,o=m;break}L=L.sibling}if(!M){for(L=m.child;L;){if(L===o){M=!0,o=m,u=d;break}if(L===u){M=!0,u=m,o=d;break}L=L.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function aa(n){return n=nu(n),n!==null?la(n):null}function la(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=la(n);if(i!==null)return i;n=n.sibling}return null}var ua=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,J=e.unstable_requestPaint,$=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Be=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function _t(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,zt=Math.log,Nt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(zt(n)/Nt|0)|0}var Ye=64,Ht=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var L=M&~d;L!==0?u=gt(L):(m&=M,m!==0&&(u=gt(m)))}else M=o&~d,M!==0?u=gt(M):m!==0&&(u=gt(m));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-st(i),d=1<<o,u|=n[o],i&=~d;return u}function Qi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-st(m),L=1<<M,k=d[M];k===-1?(!(L&o)||L&u)&&(d[M]=Qi(L,i)):k<=i&&(n.expiredLanes|=L),m&=~L}}function Ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bt(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function pn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-st(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function nn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-st(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var St=0;function mi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var yd,iu,Sd,Md,Ed,ru=!1,ca=[],Ji=null,er=null,tr=null,lo=new Map,uo=new Map,nr=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function co(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=wo(i),i!==null&&iu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function e_(n,i,o,u,d){switch(i){case"focusin":return Ji=co(Ji,n,i,o,u,d),!0;case"dragenter":return er=co(er,n,i,o,u,d),!0;case"mouseover":return tr=co(tr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return lo.set(m,co(lo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,uo.set(m,co(uo.get(m)||null,n,i,o,u,d)),!0}return!1}function wd(n){var i=Pr(n.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=sa(o),i!==null){n.blockedOn=i,Ed(n.priority,function(){Sd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=ou(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Tt=u,o.target.dispatchEvent(u),Tt=null}else return i=wo(o),i!==null&&iu(i),n.blockedOn=o,!1;i.shift()}return!0}function Ad(n,i,o){fa(n)&&o.delete(i)}function t_(){ru=!1,Ji!==null&&fa(Ji)&&(Ji=null),er!==null&&fa(er)&&(er=null),tr!==null&&fa(tr)&&(tr=null),lo.forEach(Ad),uo.forEach(Ad)}function fo(n,i){n.blockedOn===i&&(n.blockedOn=null,ru||(ru=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,t_)))}function ho(n){function i(d){return fo(d,n)}if(0<ca.length){fo(ca[0],n);for(var o=1;o<ca.length;o++){var u=ca[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ji!==null&&fo(Ji,n),er!==null&&fo(er,n),tr!==null&&fo(tr,n),lo.forEach(i),uo.forEach(i),o=0;o<nr.length;o++)u=nr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)wd(o),o.blockedOn===null&&nr.shift()}var os=C.ReactCurrentBatchConfig,da=!0;function n_(n,i,o,u){var d=St,m=os.transition;os.transition=null;try{St=1,su(n,i,o,u)}finally{St=d,os.transition=m}}function i_(n,i,o,u){var d=St,m=os.transition;os.transition=null;try{St=4,su(n,i,o,u)}finally{St=d,os.transition=m}}function su(n,i,o,u){if(da){var d=ou(n,i,o,u);if(d===null)Eu(n,i,u,ha,o),Td(n,u);else if(e_(d,n,i,o,u))u.stopPropagation();else if(Td(n,u),i&4&&-1<Jg.indexOf(n)){for(;d!==null;){var m=wo(d);if(m!==null&&yd(m),m=ou(n,i,o,u),m===null&&Eu(n,i,u,ha,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Eu(n,i,u,null,o)}}var ha=null;function ou(n,i,o,u){if(ha=null,n=V(u),n=Pr(n),n!==null)if(i=pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=sa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function Rd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case ye:return 1;case Re:return 4;case De:case Be:return 16;case et:return 536870912;default:return 16}default:return 16}}var ir=null,au=null,pa=null;function Cd(){if(pa)return pa;var n,i=au,o=i.length,u,d="value"in ir?ir.value:ir.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return pa=d.slice(n,1<u?1-u:void 0)}function ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function bd(){return!1}function zn(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(o=n[L],this[L]=o?o(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ga:bd,this.isPropagationStopped=bd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=zn(as),po=re({},as,{view:0,detail:0}),r_=zn(po),uu,cu,mo,_a=re({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(uu=n.screenX-mo.screenX,cu=n.screenY-mo.screenY):cu=uu=0,mo=n),uu)},movementY:function(n){return"movementY"in n?n.movementY:cu}}),Pd=zn(_a),s_=re({},_a,{dataTransfer:0}),o_=zn(s_),a_=re({},po,{relatedTarget:0}),fu=zn(a_),l_=re({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=zn(l_),c_=re({},as,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),f_=zn(c_),d_=re({},as,{data:0}),Ld=zn(d_),h_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=m_[n])?!!i[n]:!1}function du(){return g_}var __=re({},po,{key:function(n){if(n.key){var i=h_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?p_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),v_=zn(__),x_=re({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=zn(x_),y_=re({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),S_=zn(y_),M_=re({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),E_=zn(M_),T_=re({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),w_=zn(T_),A_=[9,13,27,32],hu=f&&"CompositionEvent"in window,go=null;f&&"documentMode"in document&&(go=document.documentMode);var R_=f&&"TextEvent"in window&&!go,Ud=f&&(!hu||go&&8<go&&11>=go),Id=" ",Nd=!1;function Fd(n,i){switch(n){case"keyup":return A_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function C_(n,i){switch(n){case"compositionend":return Od(i);case"keypress":return i.which!==32?null:(Nd=!0,Id);case"textInput":return n=i.data,n===Id&&Nd?null:n;default:return null}}function b_(n,i){if(ls)return n==="compositionend"||!hu&&Fd(n,i)?(n=Cd(),pa=au=ir=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ud&&i.locale!=="ko"?null:i.data;default:return null}}var P_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!P_[n.type]:i==="textarea"}function Bd(n,i,o,u){be(u),i=Ma(i,"onChange"),0<i.length&&(o=new lu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var _o=null,vo=null;function L_(n){ih(n,0)}function va(n){var i=hs(n);if(mt(i))return n}function D_(n,i){if(n==="change")return i}var zd=!1;if(f){var pu;if(f){var mu="oninput"in document;if(!mu){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),mu=typeof Hd.oninput=="function"}pu=mu}else pu=!1;zd=pu&&(!document.documentMode||9<document.documentMode)}function Vd(){_o&&(_o.detachEvent("onpropertychange",Gd),vo=_o=null)}function Gd(n){if(n.propertyName==="value"&&va(vo)){var i=[];Bd(i,vo,n,V(n)),Ln(L_,i)}}function U_(n,i,o){n==="focusin"?(Vd(),_o=i,vo=o,_o.attachEvent("onpropertychange",Gd)):n==="focusout"&&Vd()}function I_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return va(vo)}function N_(n,i){if(n==="click")return va(i)}function F_(n,i){if(n==="input"||n==="change")return va(i)}function O_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:O_;function xo(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function Wd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xd(n,i){var o=Wd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wd(o)}}function jd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yd(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Pt(n.document)}return i}function gu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function k_(n){var i=Yd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&jd(o.ownerDocument.documentElement,o)){if(u!==null&&gu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Xd(o,m);var M=Xd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var B_=f&&"documentMode"in document&&11>=document.documentMode,us=null,_u=null,yo=null,vu=!1;function qd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vu||us==null||us!==Pt(u)||(u=us,"selectionStart"in u&&gu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),yo&&xo(yo,u)||(yo=u,u=Ma(_u,"onSelect"),0<u.length&&(i=new lu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=us)))}function xa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var cs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},xu={},$d={};f&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function ya(n){if(xu[n])return xu[n];if(!cs[n])return n;var i=cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in $d)return xu[n]=i[o];return n}var Kd=ya("animationend"),Zd=ya("animationiteration"),Qd=ya("animationstart"),Jd=ya("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){eh.set(n,i),l(i,[n])}for(var yu=0;yu<th.length;yu++){var Su=th[yu],z_=Su.toLowerCase(),H_=Su[0].toUpperCase()+Su.slice(1);rr(z_,"on"+H_)}rr(Kd,"onAnimationEnd"),rr(Zd,"onAnimationIteration"),rr(Qd,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V_=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function nh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ra(u,i,void 0,n),n.currentTarget=null}function ih(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var L=u[M],k=L.instance,ee=L.currentTarget;if(L=L.listener,k!==m&&d.isPropagationStopped())break e;nh(d,L,ee),m=k}else for(M=0;M<u.length;M++){if(L=u[M],k=L.instance,ee=L.currentTarget,L=L.listener,k!==m&&d.isPropagationStopped())break e;nh(d,L,ee),m=k}}}if(br)throw n=Zi,br=!1,Zi=null,n}function Ut(n,i){var o=i[bu];o===void 0&&(o=i[bu]=new Set);var u=n+"__bubble";o.has(u)||(rh(i,n,2,!1),o.add(u))}function Mu(n,i,o){var u=0;i&&(u|=4),rh(o,n,u,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[Sa]){n[Sa]=!0,r.forEach(function(o){o!=="selectionchange"&&(V_.has(o)||Mu(o,!1,n),Mu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,Mu("selectionchange",!1,i))}}function rh(n,i,o,u){switch(Rd(i)){case 1:var d=n_;break;case 4:d=i_;break;default:d=su}o=d.bind(null,i,o,n),d=void 0,!rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Eu(n,i,o,u,d){var m=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var L=u.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;L!==null;){if(M=Pr(L),M===null)return;if(k=M.tag,k===5||k===6){u=m=M;continue e}L=L.parentNode}}u=u.return}Ln(function(){var ee=m,_e=V(o),xe=[];e:{var me=eh.get(n);if(me!==void 0){var Ue=lu,ze=n;switch(n){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":Ue=v_;break;case"focusin":ze="focus",Ue=fu;break;case"focusout":ze="blur",Ue=fu;break;case"beforeblur":case"afterblur":Ue=fu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=S_;break;case Kd:case Zd:case Qd:Ue=u_;break;case Jd:Ue=E_;break;case"scroll":Ue=r_;break;case"wheel":Ue=w_;break;case"copy":case"cut":case"paste":Ue=f_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Dd}var Ve=(i&4)!==0,Xt=!Ve&&n==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=ee,K;H!==null;){K=H;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=Mn(H,q),Ee!=null&&Ve.push(Eo(H,Ee,K)))),Xt)break;H=H.return}0<Ve.length&&(me=new Ue(me,ze,null,o,_e),xe.push({event:me,listeners:Ve}))}}if(!(i&7)){e:{if(me=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",me&&o!==Tt&&(ze=o.relatedTarget||o.fromElement)&&(Pr(ze)||ze[Ri]))break e;if((Ue||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(ze=o.relatedTarget||o.toElement,Ue=ee,ze=ze?Pr(ze):null,ze!==null&&(Xt=pi(ze),ze!==Xt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=ee),Ue!==ze)){if(Ve=Pd,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Dd,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),Xt=Ue==null?me:hs(Ue),K=ze==null?me:hs(ze),me=new Ve(Ee,H+"leave",Ue,o,_e),me.target=Xt,me.relatedTarget=K,Ee=null,Pr(_e)===ee&&(Ve=new Ve(q,H+"enter",ze,o,_e),Ve.target=K,Ve.relatedTarget=Xt,Ee=Ve),Xt=Ee,Ue&&ze)t:{for(Ve=Ue,q=ze,H=0,K=Ve;K;K=fs(K))H++;for(K=0,Ee=q;Ee;Ee=fs(Ee))K++;for(;0<H-K;)Ve=fs(Ve),H--;for(;0<K-H;)q=fs(q),K--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=fs(Ve),q=fs(q)}Ve=null}else Ve=null;Ue!==null&&sh(xe,me,Ue,Ve,!1),ze!==null&&Xt!==null&&sh(xe,Xt,ze,Ve,!0)}}e:{if(me=ee?hs(ee):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Xe=D_;else if(kd(me))if(zd)Xe=F_;else{Xe=I_;var $e=U_}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=N_);if(Xe&&(Xe=Xe(n,ee))){Bd(xe,Xe,o,_e);break e}$e&&$e(n,me,ee),n==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch($e=ee?hs(ee):window,n){case"focusin":(kd($e)||$e.contentEditable==="true")&&(us=$e,_u=ee,yo=null);break;case"focusout":yo=_u=us=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,qd(xe,o,_e);break;case"selectionchange":if(B_)break;case"keydown":case"keyup":qd(xe,o,_e)}var Ke;if(hu)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ls?Fd(n,o)&&(tt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(Ud&&o.locale!=="ko"&&(ls||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ls&&(Ke=Cd()):(ir=_e,au="value"in ir?ir.value:ir.textContent,ls=!0)),$e=Ma(ee,tt),0<$e.length&&(tt=new Ld(tt,n,null,o,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=Od(o),Ke!==null&&(tt.data=Ke)))),(Ke=R_?C_(n,o):b_(n,o))&&(ee=Ma(ee,"onBeforeInput"),0<ee.length&&(_e=new Ld("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:ee}),_e.data=Ke))}ih(xe,i)})}function Eo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ma(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Mn(n,o),m!=null&&u.unshift(Eo(n,m,d)),m=Mn(n,i),m!=null&&u.push(Eo(n,m,d))),n=n.return}return u}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sh(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var L=o,k=L.alternate,ee=L.stateNode;if(k!==null&&k===u)break;L.tag===5&&ee!==null&&(L=ee,d?(k=Mn(o,m),k!=null&&M.unshift(Eo(o,k,L))):d||(k=Mn(o,m),k!=null&&M.push(Eo(o,k,L)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var G_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function oh(n){return(typeof n=="string"?n:""+n).replace(G_,`
`).replace(W_,"")}function Ea(n,i,o){if(i=oh(i),oh(n)!==i&&o)throw Error(t(425))}function Ta(){}var Tu=null,wu=null;function Au(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,X_=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,j_=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(n){return ah.resolve(null).then(n).catch(Y_)}:Ru;function Y_(n){setTimeout(function(){throw n})}function Cu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ho(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ho(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function lh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),gi="__reactFiber$"+ds,To="__reactProps$"+ds,Ri="__reactContainer$"+ds,bu="__reactEvents$"+ds,q_="__reactListeners$"+ds,$_="__reactHandles$"+ds;function Pr(n){var i=n[gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ri]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=lh(n);n!==null;){if(o=n[gi])return o;n=lh(n)}return i}n=o,o=n.parentNode}return null}function wo(n){return n=n[gi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wa(n){return n[To]||null}var Pu=[],ps=-1;function or(n){return{current:n}}function It(n){0>ps||(n.current=Pu[ps],Pu[ps]=null,ps--)}function Lt(n,i){ps++,Pu[ps]=n.current,n.current=i}var ar={},mn=or(ar),Dn=or(!1),Lr=ar;function ms(n,i){var o=n.type.contextTypes;if(!o)return ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Un(n){return n=n.childContextTypes,n!=null}function Aa(){It(Dn),It(mn)}function uh(n,i,o){if(mn.current!==ar)throw Error(t(168));Lt(mn,i),Lt(Dn,o)}function ch(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return re({},o,u)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Lr=mn.current,Lt(mn,n),Lt(Dn,Dn.current),!0}function fh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ch(n,i,Lr),u.__reactInternalMemoizedMergedChildContext=n,It(Dn),It(mn),Lt(mn,n)):It(Dn),Lt(Dn,o)}var Ci=null,Ca=!1,Lu=!1;function dh(n){Ci===null?Ci=[n]:Ci.push(n)}function K_(n){Ca=!0,dh(n)}function lr(){if(!Lu&&Ci!==null){Lu=!0;var n=0,i=St;try{var o=Ci;for(St=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ci=null,Ca=!1}catch(d){throw Ci!==null&&(Ci=Ci.slice(n+1)),ua(ye,lr),d}finally{St=i,Lu=!1}}return null}var gs=[],_s=0,ba=null,Pa=0,jn=[],Yn=0,Dr=null,bi=1,Pi="";function Ur(n,i){gs[_s++]=Pa,gs[_s++]=ba,ba=n,Pa=i}function hh(n,i,o){jn[Yn++]=bi,jn[Yn++]=Pi,jn[Yn++]=Dr,Dr=n;var u=bi;n=Pi;var d=32-st(u)-1;u&=~(1<<d),o+=1;var m=32-st(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,bi=1<<32-st(i)+d|o<<d|u,Pi=m+n}else bi=1<<m|o<<d|u,Pi=n}function Du(n){n.return!==null&&(Ur(n,1),hh(n,1,0))}function Uu(n){for(;n===ba;)ba=gs[--_s],gs[_s]=null,Pa=gs[--_s],gs[_s]=null;for(;n===Dr;)Dr=jn[--Yn],jn[Yn]=null,Pi=jn[--Yn],jn[Yn]=null,bi=jn[--Yn],jn[Yn]=null}var Hn=null,Vn=null,Ft=!1,ni=null;function ph(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function mh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:bi,overflow:Pi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Hn=n,Vn=null,!0):!1;default:return!1}}function Iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nu(n){if(Ft){var i=Vn;if(i){var o=i;if(!mh(n,i)){if(Iu(n))throw Error(t(418));i=sr(o.nextSibling);var u=Hn;i&&mh(n,i)?ph(u,o):(n.flags=n.flags&-4097|2,Ft=!1,Hn=n)}}else{if(Iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Hn=n}}}function gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function La(n){if(n!==Hn)return!1;if(!Ft)return gh(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Au(n.type,n.memoizedProps)),i&&(i=Vn)){if(Iu(n))throw _h(),Error(t(418));for(;i;)ph(n,i),i=sr(i.nextSibling)}if(gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Vn=sr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?sr(n.stateNode.nextSibling):null;return!0}function _h(){for(var n=Vn;n;)n=sr(n.nextSibling)}function vs(){Vn=Hn=null,Ft=!1}function Fu(n){ni===null?ni=[n]:ni.push(n)}var Z_=C.ReactCurrentBatchConfig;function Ao(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var L=d.refs;M===null?delete L[m]:L[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Da(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vh(n){var i=n._init;return i(n._payload)}function xh(n){function i(q,H){if(n){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function o(q,H){if(!n)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function u(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function d(q,H){return q=gr(q,H),q.index=0,q.sibling=null,q}function m(q,H,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=2,H):K):(q.flags|=2,H)):(q.flags|=1048576,H)}function M(q){return n&&q.alternate===null&&(q.flags|=2),q}function L(q,H,K,Ee){return H===null||H.tag!==6?(H=Rc(K,q.mode,Ee),H.return=q,H):(H=d(H,K),H.return=q,H)}function k(q,H,K,Ee){var Xe=K.type;return Xe===I?_e(q,H,K.props.children,Ee,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ie&&vh(Xe)===H.type)?(Ee=d(H,K.props),Ee.ref=Ao(q,H,K),Ee.return=q,Ee):(Ee=nl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Ao(q,H,K),Ee.return=q,Ee)}function ee(q,H,K,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Cc(K,q.mode,Ee),H.return=q,H):(H=d(H,K.children||[]),H.return=q,H)}function _e(q,H,K,Ee,Xe){return H===null||H.tag!==7?(H=Hr(K,q.mode,Ee,Xe),H.return=q,H):(H=d(H,K),H.return=q,H)}function xe(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Rc(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return K=nl(H.type,H.key,H.props,null,q.mode,K),K.ref=Ao(q,null,H),K.return=q,K;case U:return H=Cc(H,q.mode,K),H.return=q,H;case ie:var Ee=H._init;return xe(q,Ee(H._payload),K)}if(Ge(H)||oe(H))return H=Hr(H,q.mode,K,null),H.return=q,H;Da(q,H)}return null}function me(q,H,K,Ee){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:L(q,H,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Xe?k(q,H,K,Ee):null;case U:return K.key===Xe?ee(q,H,K,Ee):null;case ie:return Xe=K._init,me(q,H,Xe(K._payload),Ee)}if(Ge(K)||oe(K))return Xe!==null?null:_e(q,H,K,Ee,null);Da(q,K)}return null}function Ue(q,H,K,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,L(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return q=q.get(Ee.key===null?K:Ee.key)||null,k(H,q,Ee,Xe);case U:return q=q.get(Ee.key===null?K:Ee.key)||null,ee(H,q,Ee,Xe);case ie:var $e=Ee._init;return Ue(q,H,K,$e(Ee._payload),Xe)}if(Ge(Ee)||oe(Ee))return q=q.get(K)||null,_e(H,q,Ee,Xe,null);Da(H,Ee)}return null}function ze(q,H,K,Ee){for(var Xe=null,$e=null,Ke=H,tt=H=0,on=null;Ke!==null&&tt<K.length;tt++){Ke.index>tt?(on=Ke,Ke=null):on=Ke.sibling;var Et=me(q,Ke,K[tt],Ee);if(Et===null){Ke===null&&(Ke=on);break}n&&Ke&&Et.alternate===null&&i(q,Ke),H=m(Et,H,tt),$e===null?Xe=Et:$e.sibling=Et,$e=Et,Ke=on}if(tt===K.length)return o(q,Ke),Ft&&Ur(q,tt),Xe;if(Ke===null){for(;tt<K.length;tt++)Ke=xe(q,K[tt],Ee),Ke!==null&&(H=m(Ke,H,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Ur(q,tt),Xe}for(Ke=u(q,Ke);tt<K.length;tt++)on=Ue(Ke,q,tt,K[tt],Ee),on!==null&&(n&&on.alternate!==null&&Ke.delete(on.key===null?tt:on.key),H=m(on,H,tt),$e===null?Xe=on:$e.sibling=on,$e=on);return n&&Ke.forEach(function(_r){return i(q,_r)}),Ft&&Ur(q,tt),Xe}function Ve(q,H,K,Ee){var Xe=oe(K);if(typeof Xe!="function")throw Error(t(150));if(K=Xe.call(K),K==null)throw Error(t(151));for(var $e=Xe=null,Ke=H,tt=H=0,on=null,Et=K.next();Ke!==null&&!Et.done;tt++,Et=K.next()){Ke.index>tt?(on=Ke,Ke=null):on=Ke.sibling;var _r=me(q,Ke,Et.value,Ee);if(_r===null){Ke===null&&(Ke=on);break}n&&Ke&&_r.alternate===null&&i(q,Ke),H=m(_r,H,tt),$e===null?Xe=_r:$e.sibling=_r,$e=_r,Ke=on}if(Et.done)return o(q,Ke),Ft&&Ur(q,tt),Xe;if(Ke===null){for(;!Et.done;tt++,Et=K.next())Et=xe(q,Et.value,Ee),Et!==null&&(H=m(Et,H,tt),$e===null?Xe=Et:$e.sibling=Et,$e=Et);return Ft&&Ur(q,tt),Xe}for(Ke=u(q,Ke);!Et.done;tt++,Et=K.next())Et=Ue(Ke,q,tt,Et.value,Ee),Et!==null&&(n&&Et.alternate!==null&&Ke.delete(Et.key===null?tt:Et.key),H=m(Et,H,tt),$e===null?Xe=Et:$e.sibling=Et,$e=Et);return n&&Ke.forEach(function(bv){return i(q,bv)}),Ft&&Ur(q,tt),Xe}function Xt(q,H,K,Ee){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Xe=K.key,$e=H;$e!==null;){if($e.key===Xe){if(Xe=K.type,Xe===I){if($e.tag===7){o(q,$e.sibling),H=d($e,K.props.children),H.return=q,q=H;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ie&&vh(Xe)===$e.type){o(q,$e.sibling),H=d($e,K.props),H.ref=Ao(q,$e,K),H.return=q,q=H;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}K.type===I?(H=Hr(K.props.children,q.mode,Ee,K.key),H.return=q,q=H):(Ee=nl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Ao(q,H,K),Ee.return=q,q=Ee)}return M(q);case U:e:{for($e=K.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(q,H.sibling),H=d(H,K.children||[]),H.return=q,q=H;break e}else{o(q,H);break}else i(q,H);H=H.sibling}H=Cc(K,q.mode,Ee),H.return=q,q=H}return M(q);case ie:return $e=K._init,Xt(q,H,$e(K._payload),Ee)}if(Ge(K))return ze(q,H,K,Ee);if(oe(K))return Ve(q,H,K,Ee);Da(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(q,H.sibling),H=d(H,K),H.return=q,q=H):(o(q,H),H=Rc(K,q.mode,Ee),H.return=q,q=H),M(q)):o(q,H)}return Xt}var xs=xh(!0),yh=xh(!1),Ua=or(null),Ia=null,ys=null,Ou=null;function ku(){Ou=ys=Ia=null}function Bu(n){var i=Ua.current;It(Ua),n._currentValue=i}function zu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ss(n,i){Ia=n,Ou=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(In=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Ou!==n)if(n={context:n,memoizedValue:i,next:null},ys===null){if(Ia===null)throw Error(t(308));ys=n,Ia.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return i}var Ir=null;function Hu(n){Ir===null?Ir=[n]:Ir.push(n)}function Sh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Hu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Li(n,u)}function Li(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ur=!1;function Vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Di(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Mt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Li(n,o)}return d=u.interleaved,d===null?(i.next=i,Hu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Li(n,o)}function Na(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}function Eh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Fa(n,i,o,u){var d=n.updateQueue;ur=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var k=L,ee=k.next;k.next=null,M===null?m=ee:M.next=ee,M=k;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=ee:L.next=ee,_e.lastBaseUpdate=k))}if(m!==null){var xe=d.baseState;M=0,_e=ee=k=null,L=m;do{var me=L.lane,Ue=L.eventTime;if((u&me)===me){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ze=n,Ve=L;switch(me=i,Ue=o,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(Ue,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Ue,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:ur=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[L]:me.push(L))}else Ue={eventTime:Ue,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(ee=_e=Ue,k=xe):_e=_e.next=Ue,M|=me;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;me=L,L=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(_e===null&&(k=xe),d.baseState=k,d.firstBaseUpdate=ee,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Or|=M,n.lanes=M,n.memoizedState=xe}}function Th(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ro={},_i=or(Ro),Co=or(Ro),bo=or(Ro);function Nr(n){if(n===Ro)throw Error(t(174));return n}function Gu(n,i){switch(Lt(bo,i),Lt(Co,n),Lt(_i,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}It(_i),Lt(_i,i)}function Ms(){It(_i),It(Co),It(bo)}function wh(n){Nr(bo.current);var i=Nr(_i.current),o=We(i,n.type);i!==o&&(Lt(Co,n),Lt(_i,o))}function Wu(n){Co.current===n&&(It(_i),It(Co))}var kt=or(0);function Oa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xu=[];function ju(){for(var n=0;n<Xu.length;n++)Xu[n]._workInProgressVersionPrimary=null;Xu.length=0}var ka=C.ReactCurrentDispatcher,Yu=C.ReactCurrentBatchConfig,Fr=0,Bt=null,$t=null,rn=null,Ba=!1,Po=!1,Lo=0,Q_=0;function gn(){throw Error(t(321))}function qu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function $u(n,i,o,u,d,m){if(Fr=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=n===null||n.memoizedState===null?nv:iv,n=o(u,d),Po){m=0;do{if(Po=!1,Lo=0,25<=m)throw Error(t(301));m+=1,rn=$t=null,i.updateQueue=null,ka.current=rv,n=o(u,d)}while(Po)}if(ka.current=Va,i=$t!==null&&$t.next!==null,Fr=0,rn=$t=Bt=null,Ba=!1,i)throw Error(t(300));return n}function Ku(){var n=Lo!==0;return Lo=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Bt.memoizedState=rn=n:rn=rn.next=n,rn}function $n(){if($t===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=rn===null?Bt.memoizedState:rn.next;if(i!==null)rn=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},rn===null?Bt.memoizedState=rn=n:rn=rn.next=n}return rn}function Do(n,i){return typeof i=="function"?i(n):i}function Zu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=$t,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var L=M=null,k=null,ee=m;do{var _e=ee.lane;if((Fr&_e)===_e)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(L=k=xe,M=u):k=k.next=xe,Bt.lanes|=_e,Or|=_e}ee=ee.next}while(ee!==null&&ee!==m);k===null?M=u:k.next=L,ti(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Bt.lanes|=m,Or|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Qu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);ti(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Ah(){}function Rh(n,i){var o=Bt,u=$n(),d=i(),m=!ti(u.memoizedState,d);if(m&&(u.memoizedState=d,In=!0),u=u.queue,Ju(Ph.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Uo(9,bh.bind(null,o,u,d,i),void 0,null),sn===null)throw Error(t(349));Fr&30||Ch(o,i,d)}return d}function Ch(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function bh(n,i,o,u){i.value=o,i.getSnapshot=u,Lh(i)&&Dh(n)}function Ph(n,i,o){return o(function(){Lh(i)&&Dh(n)})}function Lh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function Dh(n){var i=Li(n,1);i!==null&&oi(i,n,1,-1)}function Uh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=tv.bind(null,Bt,n),[i.memoizedState,n]}function Uo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Ih(){return $n().memoizedState}function za(n,i,o,u){var d=vi();Bt.flags|=n,d.memoizedState=Uo(1|i,o,void 0,u===void 0?null:u)}function Ha(n,i,o,u){var d=$n();u=u===void 0?null:u;var m=void 0;if($t!==null){var M=$t.memoizedState;if(m=M.destroy,u!==null&&qu(u,M.deps)){d.memoizedState=Uo(i,o,m,u);return}}Bt.flags|=n,d.memoizedState=Uo(1|i,o,m,u)}function Nh(n,i){return za(8390656,8,n,i)}function Ju(n,i){return Ha(2048,8,n,i)}function Fh(n,i){return Ha(4,2,n,i)}function Oh(n,i){return Ha(4,4,n,i)}function kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bh(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4,4,kh.bind(null,i,n),o)}function ec(){}function zh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Hh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Vh(n,i,o){return Fr&21?(ti(o,i)||(o=bt(),Bt.lanes|=o,Or|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=o)}function J_(n,i){var o=St;St=o!==0&&4>o?o:4,n(!0);var u=Yu.transition;Yu.transition={};try{n(!1),i()}finally{St=o,Yu.transition=u}}function Gh(){return $n().memoizedState}function ev(n,i,o){var u=pr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Wh(n))Xh(i,o);else if(o=Sh(n,i,o,u),o!==null){var d=wn();oi(o,n,u,d),jh(o,i,u)}}function tv(n,i,o){var u=pr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wh(n))Xh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,L=m(M,o);if(d.hasEagerState=!0,d.eagerState=L,ti(L,M)){var k=i.interleaved;k===null?(d.next=d,Hu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Sh(n,i,d,u),o!==null&&(d=wn(),oi(o,n,u,d),jh(o,i,u))}}function Wh(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Xh(n,i){Po=Ba=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function jh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}var Va={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},nv={readContext:qn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:Nh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,za(4194308,4,kh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return za(4194308,4,n,i)},useInsertionEffect:function(n,i){return za(4,2,n,i)},useMemo:function(n,i){var o=vi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=vi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=ev.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Uh,useDebugValue:ec,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Uh(!1),i=n[0];return n=J_.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,d=vi();if(Ft){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),sn===null)throw Error(t(349));Fr&30||Ch(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Nh(Ph.bind(null,u,m,n),[n]),u.flags|=2048,Uo(9,bh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=vi(),i=sn.identifierPrefix;if(Ft){var o=Pi,u=bi;o=(u&~(1<<32-st(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Q_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},iv={readContext:qn,useCallback:zh,useContext:qn,useEffect:Ju,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Hh,useReducer:Zu,useRef:Ih,useState:function(){return Zu(Do)},useDebugValue:ec,useDeferredValue:function(n){var i=$n();return Vh(i,$t.memoizedState,n)},useTransition:function(){var n=Zu(Do)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Gh,unstable_isNewReconciler:!1},rv={readContext:qn,useCallback:zh,useContext:qn,useEffect:Ju,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Hh,useReducer:Qu,useRef:Ih,useState:function(){return Qu(Do)},useDebugValue:ec,useDeferredValue:function(n){var i=$n();return $t===null?i.memoizedState=n:Vh(i,$t.memoizedState,n)},useTransition:function(){var n=Qu(Do)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Rh,useId:Gh,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function tc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ga={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=wn(),d=pr(n),m=Di(u,d);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),Na(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=wn(),d=pr(n),m=Di(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(oi(i,n,d,u),Na(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=wn(),u=pr(n),d=Di(o,u);d.tag=2,i!=null&&(d.callback=i),i=cr(n,d,u),i!==null&&(oi(i,n,u,o),Na(i,n,u))}};function Yh(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!xo(o,u)||!xo(d,m):!0}function qh(n,i,o){var u=!1,d=ar,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=Un(i)?Lr:mn.current,u=i.contextTypes,m=(u=u!=null)?ms(n,d):ar),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function $h(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Ga.enqueueReplaceState(i,i.state,null)}function nc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Vu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=Un(i)?Lr:mn.current,d.context=ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(tc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ga.enqueueReplaceState(d,d.state,null),Fa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var o="",u=i;do o+=ce(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ic(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function rc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var sv=typeof WeakMap=="function"?WeakMap:Map;function Kh(n,i,o){o=Di(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ka||(Ka=!0,xc=u),rc(n,i)},o}function Zh(n,i,o){o=Di(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){rc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){rc(n,i),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Qh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new sv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=xv.bind(null,n,i,o),i.then(n,n))}function Jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ep(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Di(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n)}var ov=C.ReactCurrentOwner,In=!1;function Tn(n,i,o,u){i.child=n===null?yh(i,null,o,u):xs(i,n.child,o,u)}function tp(n,i,o,u,d){o=o.render;var m=i.ref;return Ss(i,d),u=$u(n,i,o,u,m,d),o=Ku(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ui(n,i,d)):(Ft&&o&&Du(i),i.flags|=1,Tn(n,i,u,d),i.child)}function np(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Ac(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,ip(n,i,m,u,d)):(n=nl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:xo,o(M,u)&&n.ref===i.ref)return Ui(n,i,d)}return i.flags|=1,n=gr(m,u),n.ref=i.ref,n.return=i,i.child=n}function ip(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(xo(m,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=m,(n.lanes&d)!==0)n.flags&131072&&(In=!0);else return i.lanes=n.lanes,Ui(n,i,d)}return sc(n,i,o,u,d)}function rp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ws,Gn),Gn|=o;else{if(!(o&1073741824))return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(ws,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Lt(ws,Gn),Gn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Lt(ws,Gn),Gn|=u;return Tn(n,i,d,o),i.child}function sp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function sc(n,i,o,u,d){var m=Un(o)?Lr:mn.current;return m=ms(i,m),Ss(i,d),o=$u(n,i,o,u,m,d),u=Ku(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ui(n,i,d)):(Ft&&u&&Du(i),i.flags|=1,Tn(n,i,o,d),i.child)}function op(n,i,o,u,d){if(Un(o)){var m=!0;Ra(i)}else m=!1;if(Ss(i,d),i.stateNode===null)Xa(n,i),qh(i,o,u),nc(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var k=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=qn(ee):(ee=Un(o)?Lr:mn.current,ee=ms(i,ee));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==u||k!==ee)&&$h(i,M,u,ee),ur=!1;var me=i.memoizedState;M.state=me,Fa(i,u,M,d),k=i.memoizedState,L!==u||me!==k||Dn.current||ur?(typeof _e=="function"&&(tc(i,o,_e,u),k=i.memoizedState),(L=ur||Yh(i,o,L,u,me,k,ee))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),M.props=u,M.state=k,M.context=ee,u=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Mh(n,i),L=i.memoizedProps,ee=i.type===i.elementType?L:ii(i.type,L),M.props=ee,xe=i.pendingProps,me=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=qn(k):(k=Un(o)?Lr:mn.current,k=ms(i,k));var Ue=o.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||me!==k)&&$h(i,M,u,k),ur=!1,me=i.memoizedState,M.state=me,Fa(i,u,M,d);var ze=i.memoizedState;L!==xe||me!==ze||Dn.current||ur?(typeof Ue=="function"&&(tc(i,o,Ue,u),ze=i.memoizedState),(ee=ur||Yh(i,o,ee,u,me,ze,k)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,ze,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,ze,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),M.props=u,M.state=ze,M.context=k,u=ee):(typeof M.componentDidUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return oc(n,i,o,u,m,d)}function oc(n,i,o,u,d,m){sp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&fh(i,o,!1),Ui(n,i,m);u=i.stateNode,ov.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=xs(i,n.child,null,m),i.child=xs(i,null,L,m)):Tn(n,i,L,m),i.memoizedState=u.state,d&&fh(i,o,!0),i.child}function ap(n){var i=n.stateNode;i.pendingContext?uh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&uh(n,i.context,!1),Gu(n,i.containerInfo)}function lp(n,i,o,u,d){return vs(),Fu(d),i.flags|=256,Tn(n,i,o,u),i.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function lc(n){return{baseLanes:n,cachePool:null,transitions:null}}function up(n,i,o){var u=i.pendingProps,d=kt.current,m=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=n!==null&&n.memoizedState===null?!1:(d&2)!==0),L?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Lt(kt,d&1),n===null)return Nu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=M):m=il(M,u,0,null),n=Hr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=lc(o),i.memoizedState=ac,n):uc(i,M));if(d=n.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return av(n,i,M,u,L,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,L=d.sibling;var k={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=gr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),L!==null?m=gr(L,m):(m=Hr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?lc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=ac,u}return m=n.child,n=m.sibling,u=gr(m,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function uc(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wa(n,i,o,u){return u!==null&&Fu(u),xs(i,n.child,null,o),n=uc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function av(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=ic(Error(t(422))),Wa(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=il({mode:"visible",children:u.children},d,0,null),m=Hr(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,i.mode&1&&xs(i,n.child,null,M),i.child.memoizedState=lc(M),i.memoizedState=ac,m);if(!(i.mode&1))return Wa(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var L=u.dgst;return u=L,m=Error(t(419)),u=ic(m,u,void 0),Wa(n,i,M,u)}if(L=(M&n.childLanes)!==0,In||L){if(u=sn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Li(n,d),oi(u,n,d,-1))}return wc(),u=ic(Error(t(421))),Wa(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=yv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Vn=sr(d.nextSibling),Hn=i,Ft=!0,ni=null,n!==null&&(jn[Yn++]=bi,jn[Yn++]=Pi,jn[Yn++]=Dr,bi=n.id,Pi=n.overflow,Dr=i),i=uc(i,u.children),i.flags|=4096,i)}function cp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),zu(n.return,i,o)}function cc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function fp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Tn(n,i,u.children,o),u=kt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cp(n,o,i);else if(n.tag===19)cp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Lt(kt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Oa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),cc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}cc(i,!0,o,null,m);break;case"together":cc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ui(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Or|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=gr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=gr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function lv(n,i,o){switch(i.tag){case 3:ap(i),vs();break;case 5:wh(i);break;case 1:Un(i.type)&&Ra(i);break;case 4:Gu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Lt(Ua,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?up(n,i,o):(Lt(kt,kt.current&1),n=Ui(n,i,o),n!==null?n.sibling:null);Lt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return fp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,rp(n,i,o)}return Ui(n,i,o)}var dp,fc,hp,pp;dp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fc=function(){},hp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(_i.current);var m=null;switch(o){case"input":d=B(n,d),u=B(n,u),m=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ta)}ft(o,u);var M;o=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var L=d[ee];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in u){var k=u[ee];if(L=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&k!==L&&(k!=null||L!=null))if(ee==="style")if(L){for(M in L)!L.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&L[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(m||(m=[]),m.push(ee,o)),o=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,L=L?L.__html:void 0,k!=null&&L!==k&&(m=m||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ut("scroll",n),m||L===k||(m=[])):(m=m||[]).push(ee,k))}o&&(m=m||[]).push("style",o);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},pp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Io(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function uv(n,i,o){var u=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Un(i.type)&&Aa(),_n(i),null;case 3:return u=i.stateNode,Ms(),It(Dn),It(mn),ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(La(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ni!==null&&(Mc(ni),ni=null))),fc(n,i),_n(i),null;case 5:Wu(i);var d=Nr(bo.current);if(o=i.type,n!==null&&i.stateNode!=null)hp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=Nr(_i.current),La(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[gi]=i,u[To]=m,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<So.length;d++)Ut(So[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":Sn(u,m),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",u);break;case"textarea":Q(u,m),Ut("invalid",u)}ft(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var L=m[M];M==="children"?typeof L=="string"?u.textContent!==L&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,L,n),d=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(m.suppressHydrationWarning!==!0&&Ea(u.textContent,L,n),d=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ut("scroll",u)}switch(o){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),ge(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ta)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[gi]=i,n[To]=u,dp(n,i,!1,!1),i.stateNode=n;e:{switch(M=nt(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),d=u;break;case"iframe":case"object":case"embed":Ut("load",n),d=u;break;case"video":case"audio":for(d=0;d<So.length;d++)Ut(So[d],n);d=u;break;case"source":Ut("error",n),d=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),d=u;break;case"details":Ut("toggle",n),d=u;break;case"input":Sn(n,u),d=B(n,u),Ut("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":Q(n,u),d=T(n,u),Ut("invalid",n);break;default:d=u}ft(o,d),L=d;for(m in L)if(L.hasOwnProperty(m)){var k=L[m];m==="style"?Je(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ne(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ut(n,k):typeof k=="number"&&ut(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ut("scroll",n):k!=null&&D(n,m,k,M))}switch(o){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),ge(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?P(n,!!u.multiple,m,!1):u.defaultValue!=null&&P(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)pp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(bo.current),Nr(_i.current),La(i)){if(u=i.stateNode,o=i.memoizedProps,u[gi]=i,(m=u.nodeValue!==o)&&(n=Hn,n!==null))switch(n.tag){case 3:Ea(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ea(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return _n(i),null;case 13:if(It(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Vn!==null&&i.mode&1&&!(i.flags&128))_h(),vs(),i.flags|=98560,m=!1;else if(m=La(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else vs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;_n(i),m=!1}else ni!==null&&(Mc(ni),ni=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||kt.current&1?Kt===0&&(Kt=3):wc())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return Ms(),fc(n,i),n===null&&Mo(i.stateNode.containerInfo),_n(i),null;case 10:return Bu(i.type._context),_n(i),null;case 17:return Un(i.type)&&Aa(),_n(i),null;case 19:if(It(kt),m=i.memoizedState,m===null)return _n(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Io(m,!1);else{if(Kt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Oa(n),M!==null){for(i.flags|=128,Io(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(kt,kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&$()>As&&(i.flags|=128,u=!0,Io(m,!1),i.lanes=4194304)}else{if(!u)if(n=Oa(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Io(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Ft)return _n(i),null}else 2*$()-m.renderingStartTime>As&&o!==1073741824&&(i.flags|=128,u=!0,Io(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$(),i.sibling=null,o=kt.current,Lt(kt,u?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return Tc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Gn&1073741824&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function cv(n,i){switch(Uu(i),i.tag){case 1:return Un(i.type)&&Aa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),It(Dn),It(mn),ju(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Wu(i),null;case 13:if(It(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return It(kt),null;case 4:return Ms(),null;case 10:return Bu(i.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var ja=!1,vn=!1,fv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Vt(n,i,u)}else o.current=null}function dc(n,i,o){try{o()}catch(u){Vt(n,i,u)}}var mp=!1;function dv(n,i){if(Tu=da,n=Yd(),gu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,L=-1,k=-1,ee=0,_e=0,xe=n,me=null;t:for(;;){for(var Ue;xe!==o||d!==0&&xe.nodeType!==3||(L=M+d),xe!==m||u!==0&&xe.nodeType!==3||(k=M+u),xe.nodeType===3&&(M+=xe.nodeValue.length),(Ue=xe.firstChild)!==null;)me=xe,xe=Ue;for(;;){if(xe===n)break t;if(me===o&&++ee===d&&(L=M),me===m&&++_e===u&&(k=M),(Ue=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ue}o=L===-1||k===-1?null:{start:L,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(wu={focusedElem:n,selectionRange:o},da=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Xt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ii(i.type,Ve),Xt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Vt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=mp,mp=!1,ze}function No(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&dc(i,o,m)}d=d.next}while(d!==u)}}function Ya(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function hc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function gp(n){var i=n.alternate;i!==null&&(n.alternate=null,gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[To],delete i[bu],delete i[q_],delete i[$_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _p(n){return n.tag===5||n.tag===3||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(n=n.child,n!==null))for(pc(n,i,o),n=n.sibling;n!==null;)pc(n,i,o),n=n.sibling}function mc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(mc(n,i,o),n=n.sibling;n!==null;)mc(n,i,o),n=n.sibling}var cn=null,ri=!1;function fr(n,i,o){for(o=o.child;o!==null;)xp(n,i,o),o=o.sibling}function xp(n,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:vn||Ts(o,i);case 6:var u=cn,d=ri;cn=null,fr(n,i,o),cn=u,ri=d,cn!==null&&(ri?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ri?(n=cn,o=o.stateNode,n.nodeType===8?Cu(n.parentNode,o):n.nodeType===1&&Cu(n,o),ho(n)):Cu(cn,o.stateNode));break;case 4:u=cn,d=ri,cn=o.stateNode.containerInfo,ri=!0,fr(n,i,o),cn=u,ri=d;break;case 0:case 11:case 14:case 15:if(!vn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&(m&2||m&4)&&dc(o,i,M),d=d.next}while(d!==u)}fr(n,i,o);break;case 1:if(!vn&&(Ts(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(L){Vt(o,i,L)}fr(n,i,o);break;case 21:fr(n,i,o);break;case 22:o.mode&1?(vn=(u=vn)||o.memoizedState!==null,fr(n,i,o),vn=u):fr(n,i,o);break;default:fr(n,i,o)}}function yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new fv),i.forEach(function(u){var d=Sv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:cn=L.stateNode,ri=!1;break e;case 3:cn=L.stateNode.containerInfo,ri=!0;break e;case 4:cn=L.stateNode.containerInfo,ri=!0;break e}L=L.return}if(cn===null)throw Error(t(160));xp(m,M,d),cn=null,ri=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ee){Vt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,n),i=i.sibling}function Sp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),xi(n),u&4){try{No(3,n,n.return),Ya(3,n)}catch(Ve){Vt(n,n.return,Ve)}try{No(5,n,n.return)}catch(Ve){Vt(n,n.return,Ve)}}break;case 1:si(i,n),xi(n),u&512&&o!==null&&Ts(o,o.return);break;case 5:if(si(i,n),xi(n),u&512&&o!==null&&Ts(o,o.return),n.flags&32){var d=n.stateNode;try{ut(d,"")}catch(Ve){Vt(n,n.return,Ve)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,L=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{L==="input"&&m.type==="radio"&&m.name!=null&&pt(d,m),nt(L,M);var ee=nt(L,m);for(M=0;M<k.length;M+=2){var _e=k[M],xe=k[M+1];_e==="style"?Je(d,xe):_e==="dangerouslySetInnerHTML"?Ne(d,xe):_e==="children"?ut(d,xe):D(d,_e,xe,ee)}switch(L){case"input":ct(d,m);break;case"textarea":pe(d,m);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?P(d,!!m.multiple,Ue,!1):me!==!!m.multiple&&(m.defaultValue!=null?P(d,!!m.multiple,m.defaultValue,!0):P(d,!!m.multiple,m.multiple?[]:"",!1))}d[To]=m}catch(Ve){Vt(n,n.return,Ve)}}break;case 6:if(si(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ve){Vt(n,n.return,Ve)}}break;case 3:if(si(i,n),xi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(Ve){Vt(n,n.return,Ve)}break;case 4:si(i,n),xi(n);break;case 13:si(i,n),xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(vc=$())),u&4&&yp(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(vn=(ee=vn)||_e,si(i,n),vn=ee):si(i,n),xi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&n.mode&1)for(Fe=n,_e=n.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:No(4,me,me.return);break;case 1:Ts(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Vt(u,o,Ve)}}break;case 5:Ts(me,me.return);break;case 22:if(me.memoizedState!==null){Tp(xe);continue}}Ue!==null?(Ue.return=me,Fe=Ue):Tp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(L=xe.stateNode,k=xe.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,L.style.display=qe("display",M))}catch(Ve){Vt(n,n.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){Vt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:si(i,n),xi(n),u&4&&yp(n);break;case 21:break;default:si(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(_p(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ut(d,""),u.flags&=-33);var m=vp(n);mc(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,L=vp(n);pc(n,L,M);break;default:throw Error(t(161))}}catch(k){Vt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function hv(n,i,o){Fe=n,Mp(n)}function Mp(n,i,o){for(var u=(n.mode&1)!==0;Fe!==null;){var d=Fe,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||ja;if(!M){var L=d.alternate,k=L!==null&&L.memoizedState!==null||vn;L=ja;var ee=vn;if(ja=M,(vn=k)&&!ee)for(Fe=d;Fe!==null;)M=Fe,k=M.child,M.tag===22&&M.memoizedState!==null?wp(d):k!==null?(k.return=M,Fe=k):wp(d);for(;m!==null;)Fe=m,Mp(m),m=m.sibling;Fe=d,ja=L,vn=ee}Ep(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,Fe=m):Ep(n)}}function Ep(n){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:vn||Ya(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!vn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Th(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Th(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ho(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&hc(i)}catch(me){Vt(i,i.return,me)}}if(i===n){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Tp(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function wp(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ya(4,i)}catch(k){Vt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Vt(i,d,k)}}var m=i.return;try{hc(i)}catch(k){Vt(i,m,k)}break;case 5:var M=i.return;try{hc(i)}catch(k){Vt(i,M,k)}}}catch(k){Vt(i,i.return,k)}if(i===n){Fe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Fe=L;break}Fe=i.return}}var pv=Math.ceil,qa=C.ReactCurrentDispatcher,gc=C.ReactCurrentOwner,Kn=C.ReactCurrentBatchConfig,Mt=0,sn=null,jt=null,fn=0,Gn=0,ws=or(0),Kt=0,Fo=null,Or=0,$a=0,_c=0,Oo=null,Nn=null,vc=0,As=1/0,Ii=null,Ka=!1,xc=null,dr=null,Za=!1,hr=null,Qa=0,ko=0,yc=null,Ja=-1,el=0;function wn(){return Mt&6?$():Ja!==-1?Ja:Ja=$()}function pr(n){return n.mode&1?Mt&2&&fn!==0?fn&-fn:Z_.transition!==null?(el===0&&(el=bt()),el):(n=St,n!==0||(n=window.event,n=n===void 0?16:Rd(n.type)),n):1}function oi(n,i,o,u){if(50<ko)throw ko=0,yc=null,Error(t(185));tn(n,o,u),(!(Mt&2)||n!==sn)&&(n===sn&&(!(Mt&2)&&($a|=o),Kt===4&&mr(n,fn)),Fn(n,u),o===1&&Mt===0&&!(i.mode&1)&&(As=$()+500,Ca&&lr()))}function Fn(n,i){var o=n.callbackNode;En(n,i);var u=hn(n,n===sn?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?K_(Rp.bind(null,n)):dh(Rp.bind(null,n)),j_(function(){!(Mt&6)&&lr()}),o=null;else{switch(mi(u)){case 1:o=ye;break;case 4:o=Re;break;case 16:o=De;break;case 536870912:o=et;break;default:o=De}o=Np(o,Ap.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ap(n,i){if(Ja=-1,el=0,Mt&6)throw Error(t(327));var o=n.callbackNode;if(Rs()&&n.callbackNode!==o)return null;var u=hn(n,n===sn?fn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=tl(n,u);else{i=u;var d=Mt;Mt|=2;var m=bp();(sn!==n||fn!==i)&&(Ii=null,As=$()+500,Br(n,i));do try{_v();break}catch(L){Cp(n,L)}while(!0);ku(),qa.current=m,Mt=d,jt!==null?i=0:(sn=null,fn=0,i=Kt)}if(i!==0){if(i===2&&(d=Ai(n),d!==0&&(u=d,i=Sc(n,d))),i===1)throw o=Fo,Br(n,0),mr(n,u),Fn(n,$()),o;if(i===6)mr(n,u);else{if(d=n.current.alternate,!(u&30)&&!mv(d)&&(i=tl(n,u),i===2&&(m=Ai(n),m!==0&&(u=m,i=Sc(n,m))),i===1))throw o=Fo,Br(n,0),mr(n,u),Fn(n,$()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:zr(n,Nn,Ii);break;case 3:if(mr(n,u),(u&130023424)===u&&(i=vc+500-$(),10<i)){if(hn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ru(zr.bind(null,n,Nn,Ii),i);break}zr(n,Nn,Ii);break;case 4:if(mr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-st(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=$()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*pv(u/1960))-u,10<u){n.timeoutHandle=Ru(zr.bind(null,n,Nn,Ii),u);break}zr(n,Nn,Ii);break;case 5:zr(n,Nn,Ii);break;default:throw Error(t(329))}}}return Fn(n,$()),n.callbackNode===o?Ap.bind(null,n):null}function Sc(n,i){var o=Oo;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=tl(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&Mc(i)),n}function Mc(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function mv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ti(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~_c,i&=~$a,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-st(i),u=1<<o;n[o]=-1,i&=~u}}function Rp(n){if(Mt&6)throw Error(t(327));Rs();var i=hn(n,0);if(!(i&1))return Fn(n,$()),null;var o=tl(n,i);if(n.tag!==0&&o===2){var u=Ai(n);u!==0&&(i=u,o=Sc(n,u))}if(o===1)throw o=Fo,Br(n,0),mr(n,i),Fn(n,$()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,Nn,Ii),Fn(n,$()),null}function Ec(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(As=$()+500,Ca&&lr())}}function kr(n){hr!==null&&hr.tag===0&&!(Mt&6)&&Rs();var i=Mt;Mt|=1;var o=Kn.transition,u=St;try{if(Kn.transition=null,St=1,n)return n()}finally{St=u,Kn.transition=o,Mt=i,!(Mt&6)&&lr()}}function Tc(){Gn=ws.current,It(ws)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,X_(o)),jt!==null)for(o=jt.return;o!==null;){var u=o;switch(Uu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:Ms(),It(Dn),It(mn),ju();break;case 5:Wu(u);break;case 4:Ms();break;case 13:It(kt);break;case 19:It(kt);break;case 10:Bu(u.type._context);break;case 22:case 23:Tc()}o=o.return}if(sn=n,jt=n=gr(n.current,null),fn=Gn=i,Kt=0,Fo=null,_c=$a=Or=0,Nn=Oo=null,Ir!==null){for(i=0;i<Ir.length;i++)if(o=Ir[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Ir=null}return n}function Cp(n,i){do{var o=jt;try{if(ku(),ka.current=Va,Ba){for(var u=Bt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ba=!1}if(Fr=0,rn=$t=Bt=null,Po=!1,Lo=0,gc.current=null,o===null||o.return===null){Kt=1,Fo=i,jt=null;break}e:{var m=n,M=o.return,L=o,k=i;if(i=fn,L.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,_e=L,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Jh(M);if(Ue!==null){Ue.flags&=-257,ep(Ue,M,L,m,i),Ue.mode&1&&Qh(m,ee,i),i=Ue,k=ee;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(k),i.updateQueue=Ve}else ze.add(k);break e}else{if(!(i&1)){Qh(m,ee,i),wc();break e}k=Error(t(426))}}else if(Ft&&L.mode&1){var Xt=Jh(M);if(Xt!==null){!(Xt.flags&65536)&&(Xt.flags|=256),ep(Xt,M,L,m,i),Fu(Es(k,L));break e}}m=k=Es(k,L),Kt!==4&&(Kt=2),Oo===null?Oo=[m]:Oo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var q=Kh(m,k,i);Eh(m,q);break e;case 1:L=k;var H=m.type,K=m.stateNode;if(!(m.flags&128)&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(dr===null||!dr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Zh(m,L,i);Eh(m,Ee);break e}}m=m.return}while(m!==null)}Lp(o)}catch(Xe){i=Xe,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function bp(){var n=qa.current;return qa.current=Va,n===null?Va:n}function wc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),sn===null||!(Or&268435455)&&!($a&268435455)||mr(sn,fn)}function tl(n,i){var o=Mt;Mt|=2;var u=bp();(sn!==n||fn!==i)&&(Ii=null,Br(n,i));do try{gv();break}catch(d){Cp(n,d)}while(!0);if(ku(),Mt=o,qa.current=u,jt!==null)throw Error(t(261));return sn=null,fn=0,Kt}function gv(){for(;jt!==null;)Pp(jt)}function _v(){for(;jt!==null&&!W();)Pp(jt)}function Pp(n){var i=Ip(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Lp(n):jt=i,gc.current=null}function Lp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=cv(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,jt=null;return}}else if(o=uv(o,i,Gn),o!==null){jt=o;return}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Kt===0&&(Kt=5)}function zr(n,i,o){var u=St,d=Kn.transition;try{Kn.transition=null,St=1,vv(n,i,o,u)}finally{Kn.transition=d,St=u}return null}function vv(n,i,o,u){do Rs();while(hr!==null);if(Mt&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(un(n,m),n===sn&&(jt=sn=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Za||(Za=!0,Np(De,function(){return Rs(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=Kn.transition,Kn.transition=null;var M=St;St=1;var L=Mt;Mt|=4,gc.current=null,dv(n,o),Sp(o,n),k_(wu),da=!!Tu,wu=Tu=null,n.current=o,hv(o),J(),Mt=L,St=M,Kn.transition=m}else n.current=o;if(Za&&(Za=!1,hr=n,Qa=d),m=n.pendingLanes,m===0&&(dr=null),_t(o.stateNode),Fn(n,$()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ka)throw Ka=!1,n=xc,xc=null,n;return Qa&1&&n.tag!==0&&Rs(),m=n.pendingLanes,m&1?n===yc?ko++:(ko=0,yc=n):ko=0,lr(),null}function Rs(){if(hr!==null){var n=mi(Qa),i=Kn.transition,o=St;try{if(Kn.transition=null,St=16>n?16:n,hr===null)var u=!1;else{if(n=hr,hr=null,Qa=0,Mt&6)throw Error(t(331));var d=Mt;for(Mt|=4,Fe=n.current;Fe!==null;){var m=Fe,M=m.child;if(Fe.flags&16){var L=m.deletions;if(L!==null){for(var k=0;k<L.length;k++){var ee=L[k];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:No(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Ue=_e.return;if(gp(_e),_e===ee){Fe=null;break}if(me!==null){me.return=Ue,Fe=me;break}Fe=Ue}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Xt=Ve.sibling;Ve.sibling=null,Ve=Xt}while(Ve!==null)}}Fe=m}}if(m.subtreeFlags&2064&&M!==null)M.return=m,Fe=M;else e:for(;Fe!==null;){if(m=Fe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:No(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,Fe=q;break e}Fe=m.return}}var H=n.current;for(Fe=H;Fe!==null;){M=Fe;var K=M.child;if(M.subtreeFlags&2064&&K!==null)K.return=M,Fe=K;else e:for(M=H;Fe!==null;){if(L=Fe,L.flags&2048)try{switch(L.tag){case 0:case 11:case 15:Ya(9,L)}}catch(Xe){Vt(L,L.return,Xe)}if(L===M){Fe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Fe=Ee;break e}Fe=L.return}}if(Mt=d,lr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{St=o,Kn.transition=i}}return!1}function Dp(n,i,o){i=Es(o,i),i=Kh(n,i,1),n=cr(n,i,1),i=wn(),n!==null&&(tn(n,1,i),Fn(n,i))}function Vt(n,i,o){if(n.tag===3)Dp(n,n,o);else for(;i!==null;){if(i.tag===3){Dp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){n=Es(o,n),n=Zh(i,n,1),i=cr(i,n,1),n=wn(),i!==null&&(tn(i,1,n),Fn(i,n));break}}i=i.return}}function xv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&o,sn===n&&(fn&o)===o&&(Kt===4||Kt===3&&(fn&130023424)===fn&&500>$()-vc?Br(n,0):_c|=o),Fn(n,i)}function Up(n,i){i===0&&(n.mode&1?(i=Ht,Ht<<=1,!(Ht&130023424)&&(Ht=4194304)):i=1);var o=wn();n=Li(n,i),n!==null&&(tn(n,i,o),Fn(n,o))}function yv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Up(n,o)}function Sv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Up(n,o)}var Ip;Ip=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return In=!1,lv(n,i,o);In=!!(n.flags&131072)}else In=!1,Ft&&i.flags&1048576&&hh(i,Pa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xa(n,i),n=i.pendingProps;var d=ms(i,mn.current);Ss(i,o),d=$u(null,i,u,n,d,o);var m=Ku();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(u)?(m=!0,Ra(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Vu(i),d.updater=Ga,i.stateNode=d,d._reactInternals=i,nc(i,u,n,o),i=oc(null,i,u,!0,m,o)):(i.tag=0,Ft&&m&&Du(i),Tn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Xa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Ev(u),n=ii(u,n),d){case 0:i=sc(null,i,u,n,o);break e;case 1:i=op(null,i,u,n,o);break e;case 11:i=tp(null,i,u,n,o);break e;case 14:i=np(null,i,u,ii(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),sc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),op(n,i,u,d,o);case 3:e:{if(ap(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Mh(n,i),Fa(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(t(423)),i),i=lp(n,i,u,o,d);break e}else if(u!==d){d=Es(Error(t(424)),i),i=lp(n,i,u,o,d);break e}else for(Vn=sr(i.stateNode.containerInfo.firstChild),Hn=i,Ft=!0,ni=null,o=yh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vs(),u===d){i=Ui(n,i,o);break e}Tn(n,i,u,o)}i=i.child}return i;case 5:return wh(i),n===null&&Nu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Au(u,d)?M=null:m!==null&&Au(u,m)&&(i.flags|=32),sp(n,i),Tn(n,i,M,o),i.child;case 6:return n===null&&Nu(i),null;case 13:return up(n,i,o);case 4:return Gu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=xs(i,null,u,o):Tn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),tp(n,i,u,d,o);case 7:return Tn(n,i,i.pendingProps,o),i.child;case 8:return Tn(n,i,i.pendingProps.children,o),i.child;case 12:return Tn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Lt(Ua,u._currentValue),u._currentValue=M,m!==null)if(ti(m.value,M)){if(m.children===d.children&&!Dn.current){i=Ui(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var L=m.dependencies;if(L!==null){M=m.child;for(var k=L.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Di(-1,o&-o),k.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),ee.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),zu(m.return,o,i),L.lanes|=o;break}k=k.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),zu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Tn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ss(i,o),d=qn(d),u=u(d),i.flags|=1,Tn(n,i,u,o),i.child;case 14:return u=i.type,d=ii(u,i.pendingProps),d=ii(u.type,d),np(n,i,u,d,o);case 15:return ip(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Xa(n,i),i.tag=1,Un(u)?(n=!0,Ra(i)):n=!1,Ss(i,o),qh(i,u,d),nc(i,u,d,o),oc(null,i,u,!0,n,o);case 19:return fp(n,i,o);case 22:return rp(n,i,o)}throw Error(t(156,i.tag))};function Np(n,i){return ua(n,i)}function Mv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,u){return new Mv(n,i,o,u)}function Ac(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ev(n){if(typeof n=="function")return Ac(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===de)return 14}return 2}function gr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function nl(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")Ac(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case I:return Hr(o.children,d,m,i);case X:M=8,d|=8;break;case b:return n=Zn(12,o,i,d|2),n.elementType=b,n.lanes=m,n;case te:return n=Zn(13,o,i,d),n.elementType=te,n.lanes=m,n;case ue:return n=Zn(19,o,i,d),n.elementType=ue,n.lanes=m,n;case ae:return il(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case z:M=9;break e;case le:M=11;break e;case de:M=14;break e;case ie:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Hr(n,i,o,u){return n=Zn(7,n,u,i),n.lanes=o,n}function il(n,i,o,u){return n=Zn(22,n,u,i),n.elementType=ae,n.lanes=o,n.stateNode={isHidden:!1},n}function Rc(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function Cc(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bc(n,i,o,u,d,m,M,L,k){return n=new Tv(n,i,o,L,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(m),n}function wv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Fp(n){if(!n)return ar;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Un(o))return ch(n,o,i)}return i}function Op(n,i,o,u,d,m,M,L,k){return n=bc(o,u,!0,n,d,m,M,L,k),n.context=Fp(null),o=n.current,u=wn(),d=pr(o),m=Di(u,d),m.callback=i??null,cr(o,m,d),n.current.lanes=d,tn(n,d,u),Fn(n,u),n}function rl(n,i,o,u){var d=i.current,m=wn(),M=pr(d);return o=Fp(o),i.context===null?i.context=o:i.pendingContext=o,i=Di(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=cr(d,i,M),n!==null&&(oi(n,d,M,m),Na(n,d,M)),M}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Pc(n,i){kp(n,i),(n=n.alternate)&&kp(n,i)}var Bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lc(n){this._internalRoot=n}ol.prototype.render=Lc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},ol.prototype.unmount=Lc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){rl(null,n,null,null)}),i[Ri]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=Md();n={blockedOn:null,target:n,priority:i};for(var o=0;o<nr.length&&i!==0&&i<nr[o].priority;o++);nr.splice(o,0,n),o===0&&wd(n)}};function Dc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Av(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ee=sl(M);m.call(ee)}}var M=Op(i,u,n,0,null,!1,!1,"",zp);return n._reactRootContainer=M,n[Ri]=M.current,Mo(n.nodeType===8?n.parentNode:n),kr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var L=u;u=function(){var ee=sl(k);L.call(ee)}}var k=bc(n,0,!1,null,null,!1,!1,"",zp);return n._reactRootContainer=k,n[Ri]=k.current,Mo(n.nodeType===8?n.parentNode:n),kr(function(){rl(i,k,o,u)}),k}function ll(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var L=d;d=function(){var k=sl(M);L.call(k)}}rl(i,M,n,d)}else M=Av(o,i,n,d,u);return sl(M)}yd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(nn(i,o|1),Fn(i,$()),!(Mt&6)&&(As=$()+500,lr()))}break;case 13:kr(function(){var u=Li(n,1);if(u!==null){var d=wn();oi(u,n,1,d)}}),Pc(n,1)}},iu=function(n){if(n.tag===13){var i=Li(n,134217728);if(i!==null){var o=wn();oi(i,n,134217728,o)}Pc(n,134217728)}},Sd=function(n){if(n.tag===13){var i=pr(n),o=Li(n,i);if(o!==null){var u=wn();oi(o,n,i,u)}Pc(n,i)}},Md=function(){return St},Ed=function(n,i){var o=St;try{return St=n,i()}finally{St=o}},Ae=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=wa(u);if(!d)throw Error(t(90));mt(u),ct(u,d)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},Dt=Ec,qt=kr;var Rv={usingClientEntryPoint:!1,Events:[wo,hs,wa,be,it,Ec]},Bo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cv={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Qe=ul.inject(Cv),He=ul}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv,On.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(i))throw Error(t(200));return wv(n,i,null,o)},On.createRoot=function(n,i){if(!Dc(n))throw Error(t(299));var o=!1,u="",d=Bp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=bc(n,1,!1,null,null,o,!1,u,d),n[Ri]=i.current,Mo(n.nodeType===8?n.parentNode:n),new Lc(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=aa(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return kr(n)},On.hydrate=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!0,o)},On.hydrateRoot=function(n,i,o){if(!Dc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=Bp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Op(i,null,n,1,o??null,d,!1,m,M),n[Ri]=i.current,Mo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ol(i)},On.render=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!1,o)},On.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},On.unstable_batchedUpdates=Ec,On.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!al(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var qp;function Ov(){if(qp)return Nc.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nc.exports=Fv(),Nc.exports}var $p;function kv(){if($p)return cl;$p=1;var s=Ov();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var Bv=kv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="172",Ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zv=0,Kp=1,Hv=2,hg=1,pg=2,Hi=3,ji=0,Bn=1,Vi=2,Ar=0,qs=1,Zp=2,Qp=3,Jp=4,Vv=5,$r=100,Gv=101,Wv=102,Xv=103,jv=104,Yv=200,qv=201,$v=202,Kv=203,yf=204,Sf=205,Zv=206,Qv=207,Jv=208,e0=209,t0=210,n0=211,i0=212,r0=213,s0=214,Mf=0,Ef=1,Tf=2,Zs=3,wf=4,Af=5,Rf=6,Cf=7,ld=0,o0=1,a0=2,Rr=0,l0=1,u0=2,c0=3,f0=4,d0=5,h0=6,p0=7,mg=300,Qs=301,Js=302,bf=303,Pf=304,Jl=306,Xl=1e3,Zr=1001,Lf=1002,di=1003,m0=1004,fl=1005,Si=1006,kc=1007,Qr=1008,Yi=1009,gg=1010,_g=1011,Ko=1012,ud=1013,es=1014,Gi=1015,Jo=1016,cd=1017,fd=1018,eo=1020,vg=35902,xg=1021,yg=1022,fi=1023,Sg=1024,Mg=1025,$s=1026,to=1027,Eg=1028,dd=1029,Tg=1030,hd=1031,pd=1033,kl=33776,Bl=33777,zl=33778,Hl=33779,Df=35840,Uf=35841,If=35842,Nf=35843,Ff=36196,Of=37492,kf=37496,Bf=37808,zf=37809,Hf=37810,Vf=37811,Gf=37812,Wf=37813,Xf=37814,jf=37815,Yf=37816,qf=37817,$f=37818,Kf=37819,Zf=37820,Qf=37821,Vl=36492,Jf=36494,ed=36495,wg=36283,td=36284,nd=36285,id=36286,g0=3200,_0=3201,Ag=0,v0=1,wr="",dn="srgb",no="srgb-linear",jl="linear",Rt="srgb",Cs=7680,em=519,x0=512,y0=513,S0=514,Rg=515,M0=516,E0=517,T0=518,w0=519,tm=35044,nm="300 es",Wi=2e3,Yl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const qo=Math.PI/180,Zo=180/Math.PI;function ro(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function md(s,e){return(s%e+e)%e}function A0(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function R0(s,e,t){return s!==e?(t-s)/(e-s):0}function $o(s,e,t){return(1-t)*s+t*e}function C0(s,e,t,r){return $o(s,e,1-Math.exp(-t*r))}function b0(s,e=1){return e-Math.abs(md(s,e*2)-e)}function P0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function L0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function D0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function U0(s,e){return s+Math.random()*(e-s)}function I0(s){return s*(.5-Math.random())}function N0(s){s!==void 0&&(im=s);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F0(s){return s*qo}function O0(s){return s*Zo}function k0(s){return(s&s-1)===0&&s!==0}function B0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function z0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function H0(s,e,t,r,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),g=c((e+r)/2),_=l((e-r)/2),v=c((e-r)/2),S=l((r-e)/2),E=c((r-e)/2);switch(a){case"XYX":s.set(f*g,h*_,h*v,f*p);break;case"YZY":s.set(h*v,f*g,h*_,f*p);break;case"ZXZ":s.set(h*_,h*v,f*g,f*p);break;case"XZX":s.set(f*g,h*E,h*S,f*p);break;case"YXY":s.set(h*S,f*g,h*E,f*p);break;case"ZYZ":s.set(h*E,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Vs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const V0={DEG2RAD:qo,RAD2DEG:Zo,generateUUID:ro,clamp:ht,euclideanModulo:md,mapLinear:A0,inverseLerp:R0,lerp:$o,damp:C0,pingpong:b0,smoothstep:P0,smootherstep:L0,randInt:D0,randFloat:U0,randFloatSpread:I0,seededRandom:N0,degToRad:F0,radToDeg:O0,isPowerOfTwo:k0,ceilPowerOfTwo:B0,floorPowerOfTwo:z0,setQuaternionFromProperEuler:H0,normalize:An,denormalize:Vs};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,r,a,l,c,f,h,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],w=a[0],y=a[3],x=a[6],N=a[1],D=a[4],C=a[7],G=a[2],U=a[5],I=a[8];return l[0]=c*w+f*N+h*G,l[3]=c*y+f*D+h*U,l[6]=c*x+f*C+h*I,l[1]=p*w+g*N+_*G,l[4]=p*y+g*D+_*U,l[7]=p*x+g*C+_*I,l[2]=v*w+S*N+E*G,l[5]=v*y+S*D+E*U,l[8]=v*x+S*C+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=g*c-f*p,v=f*h-g*l,S=p*l-c*h,E=t*_+r*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(a*p-g*r)*w,e[2]=(f*r-a*c)*w,e[3]=v*w,e[4]=(g*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new ot;function Cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function G0(){const s=Qo("canvas");return s.style.display="block",s}const rm={};function Gs(s){s in rm||(rm[s]=!0,console.warn(s))}function W0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function X0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function j0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),om=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y0(){const s={enabled:!0,workingColorSpace:no,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Rt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Rt&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?jl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[no]:{primaries:e,whitePoint:r,transfer:jl,toXYZ:sm,fromXYZ:om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:sm,fromXYZ:om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const vt=Y0();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Qo("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $0=0;class bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(zc(a[c].image)):l.push(zc(a[c]))}else l=zc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?q0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K0=0;class Pn extends is{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,r=Zr,a=Zr,l=Si,c=Qr,f=fi,h=Yi,p=Pn.DEFAULT_ANISOTROPY,g=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ro(),this.name="",this.source=new bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=mg;Pn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],_=h[8],v=h[1],S=h[5],E=h[9],w=h[2],y=h[6],x=h[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,C=(S+1)/2,G=(x+1)/2,U=(g+v)/4,I=(_+w)/4,X=(E+y)/4;return D>C&&D>G?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=U/r,l=I/r):C>G?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=U/a,l=X/a):G<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),r=I/l,a=X/l),this.set(r,a,l,t),this}let N=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-w)/N,this.z=(v-g)/N,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z0 extends is{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Z0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Pg extends Pn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q0 extends Pn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];const v=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(_!==w||h!==v||p!==S||g!==E){let y=1-f;const x=h*v+p*S+g*E+_*w,N=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const G=Math.sqrt(D),U=Math.atan2(G,x*N);y=Math.sin(y*U)/G,f=Math.sin(f*U)/G}const C=f*N;if(h=h*y+v*C,p=p*y+S*C,g=g*y+E*C,_=_*y+w*C,y===1-f){const G=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=G,p*=G,g*=G,_*=G}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],g=r[a+3],_=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+g*_+h*S-p*v,e[t+1]=h*E+g*v+p*_-f*S,e[t+2]=p*E+g*S+f*v-h*_,e[t+3]=g*E-f*_-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(a/2),_=f(l/2),v=h(r/2),S=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"YZX":this._x=v*g*_+p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_-v*S*E;break;case"XZY":this._x=v*g*_-p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],_=t[10],v=r+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-a*f,this._w=c*g-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),_=Math.sin((1-t)*g)/p,v=Math.sin(t*g)/p;return this._w=c*_+this._w*v,this._x=r*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(am.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),g=2*(f*t-l*a),_=2*(l*r-c*t);return this.x=t+h*p+c*_-f*g,this.y=r+h*g+f*p-l*_,this.z=a+h*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new Y,am=new ns;class so{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(l,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),hl.subVectors(this.max,Ho),Ps.subVectors(e.a,Ho),Ls.subVectors(e.b,Ho),Ds.subVectors(e.c,Ho),vr.subVectors(Ls,Ps),xr.subVectors(Ds,Ls),Vr.subVectors(Ps,Ds);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Vr.z,Vr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Vr.z,0,-Vr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Vr.y,Vr.x,0];return!Vc(t,Ps,Ls,Ds,hl)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Ps,Ls,Ds,hl))?!1:(pl.crossVectors(vr,xr),t=[pl.x,pl.y,pl.z],Vc(t,Ps,Ls,Ds,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ai=new Y,dl=new so,Ps=new Y,Ls=new Y,Ds=new Y,vr=new Y,xr=new Y,Vr=new Y,Ho=new Y,hl=new Y,pl=new Y,Gr=new Y;function Vc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Gr.fromArray(s,l);const f=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),p=t.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const J0=new so,Vo=new Y,Gc=new Y;class ea{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):J0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Gc)),this.expandByPoint(Vo.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new Y,Wc=new Y,ml=new Y,yr=new Y,Xc=new Y,gl=new Y,jc=new Y;class eu{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Wc.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Wc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ml),f=yr.dot(this.direction),h=-yr.dot(ml),p=yr.lengthSq(),g=Math.abs(1-c*c);let _,v,S,E;if(g>0)if(_=c*h-f,v=c*f-h,E=l*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,S=_*(_+c*v+2*f)+v*(c*_+v+2*h)+p}else v=l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*h)+p;else v=-l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*h)+p;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+v*(v+2*h)+p):v<=E?(_=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+v*(v+2*h)+p);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Wc).addScaledVector(ml,v),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),a=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,a,l){Xc.subVectors(t,e),gl.subVectors(r,e),jc.crossVectors(Xc,gl);let c=this.direction.dot(jc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;yr.subVectors(this.origin,e);const h=f*this.direction.dot(gl.crossVectors(yr,gl));if(h<0)return null;const p=f*this.direction.dot(Xc.cross(yr));if(p<0||h+p>c)return null;const g=-f*yr.dot(jc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,r,a,l,c,f,h,p,g,_,v,S,E,w,y){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,g,_,v,S,E,w,y)}set(e,t,r,a,l,c,f,h,p,g,_,v,S,E,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),c=1/Us.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*g,S=c*_,E=f*g,w=f*_;t[0]=h*g,t[4]=-h*_,t[8]=p,t[1]=S+E*p,t[5]=v-w*p,t[9]=-f*h,t[2]=w-v*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const v=h*g,S=h*_,E=p*g,w=p*_;t[0]=v+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=S*f-E,t[6]=w+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*g,S=h*_,E=p*g,w=p*_;t[0]=v-w*f,t[4]=-c*_,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*g,t[9]=w-v*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*g,S=c*_,E=f*g,w=f*_;t[0]=h*g,t[4]=E*p-S,t[8]=v*p+w,t[1]=h*_,t[5]=w*p+v,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*p,E=f*h,w=f*p;t[0]=h*g,t[4]=w-v*_,t[8]=E*_+S,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*_+E,t[10]=v-w*_}else if(e.order==="XZY"){const v=c*h,S=c*p,E=f*h,w=f*p;t[0]=h*g,t[4]=-_,t[8]=p*g,t[1]=v*_+w,t[5]=c*g,t[9]=S*_-E,t[2]=E*_-S,t[6]=f*g,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,t,r){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Sr.crossVectors(r,Wn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Sr.crossVectors(r,Wn)),Sr.normalize(),_l.crossVectors(Wn,Sr),a[0]=Sr.x,a[4]=_l.x,a[8]=Wn.x,a[1]=Sr.y,a[5]=_l.y,a[9]=Wn.y,a[2]=Sr.z,a[6]=_l.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],w=r[6],y=r[10],x=r[14],N=r[3],D=r[7],C=r[11],G=r[15],U=a[0],I=a[4],X=a[8],b=a[12],R=a[1],z=a[5],le=a[9],te=a[13],ue=a[2],de=a[6],ie=a[10],ae=a[14],O=a[3],oe=a[7],re=a[11],F=a[15];return l[0]=c*U+f*R+h*ue+p*O,l[4]=c*I+f*z+h*de+p*oe,l[8]=c*X+f*le+h*ie+p*re,l[12]=c*b+f*te+h*ae+p*F,l[1]=g*U+_*R+v*ue+S*O,l[5]=g*I+_*z+v*de+S*oe,l[9]=g*X+_*le+v*ie+S*re,l[13]=g*b+_*te+v*ae+S*F,l[2]=E*U+w*R+y*ue+x*O,l[6]=E*I+w*z+y*de+x*oe,l[10]=E*X+w*le+y*ie+x*re,l[14]=E*b+w*te+y*ae+x*F,l[3]=N*U+D*R+C*ue+G*O,l[7]=N*I+D*z+C*de+G*oe,l[11]=N*X+D*le+C*ie+G*re,l[15]=N*b+D*te+C*ae+G*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],w=e[7],y=e[11],x=e[15];return E*(+l*h*_-a*p*_-l*f*v+r*p*v+a*f*S-r*h*S)+w*(+t*h*S-t*p*v+l*c*v-a*c*S+a*p*g-l*h*g)+y*(+t*p*_-t*f*S-l*c*_+r*c*S+l*f*g-r*p*g)+x*(-a*f*g-t*h*_+t*f*v+a*c*_-r*c*v+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],w=e[13],y=e[14],x=e[15],N=_*y*p-w*v*p+w*h*S-f*y*S-_*h*x+f*v*x,D=E*v*p-g*y*p-E*h*S+c*y*S+g*h*x-c*v*x,C=g*w*p-E*_*p+E*f*S-c*w*S-g*f*x+c*_*x,G=E*_*h-g*w*h-E*f*v+c*w*v+g*f*y-c*_*y,U=t*N+r*D+a*C+l*G;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=N*I,e[1]=(w*v*l-_*y*l-w*a*S+r*y*S+_*a*x-r*v*x)*I,e[2]=(f*y*l-w*h*l+w*a*p-r*y*p-f*a*x+r*h*x)*I,e[3]=(_*h*l-f*v*l-_*a*p+r*v*p+f*a*S-r*h*S)*I,e[4]=D*I,e[5]=(g*y*l-E*v*l+E*a*S-t*y*S-g*a*x+t*v*x)*I,e[6]=(E*h*l-c*y*l-E*a*p+t*y*p+c*a*x-t*h*x)*I,e[7]=(c*v*l-g*h*l+g*a*p-t*v*p-c*a*S+t*h*S)*I,e[8]=C*I,e[9]=(E*_*l-g*w*l-E*r*S+t*w*S+g*r*x-t*_*x)*I,e[10]=(c*w*l-E*f*l+E*r*p-t*w*p-c*r*x+t*f*x)*I,e[11]=(g*f*l-c*_*l-g*r*p+t*_*p+c*r*S-t*f*S)*I,e[12]=G*I,e[13]=(g*w*a-E*_*a+E*r*v-t*w*v-g*r*y+t*_*y)*I,e[14]=(E*f*a-c*w*a-E*r*h+t*w*h+c*r*y-t*f*y)*I,e[15]=(c*_*a-g*f*a+g*r*h-t*_*h-c*r*v+t*f*v)*I,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+r,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,_=f+f,v=l*p,S=l*g,E=l*_,w=c*g,y=c*_,x=f*_,N=h*p,D=h*g,C=h*_,G=r.x,U=r.y,I=r.z;return a[0]=(1-(w+x))*G,a[1]=(S+C)*G,a[2]=(E-D)*G,a[3]=0,a[4]=(S-C)*U,a[5]=(1-(v+x))*U,a[6]=(y+N)*U,a[7]=0,a[8]=(E+D)*I,a[9]=(y-N)*I,a[10]=(1-(v+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Us.set(a[0],a[1],a[2]).length();const c=Us.set(a[4],a[5],a[6]).length(),f=Us.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const p=1/l,g=1/c,_=1/f;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,t.setFromRotationMatrix(li),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=Wi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),_=(t+e)/(t-e),v=(r+a)/(r-a);let S,E;if(f===Wi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Yl)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=Wi){const h=this.elements,p=1/(t-e),g=1/(r-a),_=1/(c-l),v=(t+e)*p,S=(r+a)*g;let E,w;if(f===Wi)E=(c+l)*_,w=-2*_;else if(f===Yl)E=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Us=new Y,li=new Ot,ex=new Y(0,0,0),tx=new Y(1,1,1),Sr=new Y,_l=new Y,Wn=new Y,lm=new Ot,um=new ns;class Ei{constructor(e=0,t=0,r=0,a=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],_=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-ht(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nx=0;const cm=new Y,Is=new ns,Oi=new Ot,vl=new Y,Go=new Y,ix=new Y,rx=new ns,fm=new Y(1,0,0),dm=new Y(0,1,0),hm=new Y(0,0,1),pm={type:"added"},sx={type:"removed"},Ns={type:"childadded",child:null},Yc={type:"childremoved",child:null};class ln extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new Y,t=new Ei,r=new ns,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,t){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Go,vl,this.up):Oi.lookAt(vl,Go,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Oi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sx),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new Y(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new Y,ki=new Y,qc=new Y,Bi=new Y,Fs=new Y,Os=new Y,mm=new Y,$c=new Y,Kc=new Y,Zc=new Y,Qc=new Wt,Jc=new Wt,ef=new Wt;class ci{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ui.subVectors(a,t),ki.subVectors(r,t),qc.subVectors(e,t);const c=ui.dot(ui),f=ui.dot(ki),h=ui.dot(qc),p=ki.dot(ki),g=ki.dot(qc),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*h-f*g)*v,E=(c*g-f*h)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(c,Bi.y),h.addScaledVector(f,Bi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return Qc.setScalar(0),Jc.setScalar(0),ef.setScalar(0),Qc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,r),ef.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Qc,l.x),c.addScaledVector(Jc,l.y),c.addScaledVector(ef,l.z),c}static isFrontFacing(e,t,r,a){return ui.subVectors(r,t),ki.subVectors(e,t),ui.cross(ki).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return ci.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Fs.subVectors(a,r),Os.subVectors(l,r),$c.subVectors(e,r);const h=Fs.dot($c),p=Os.dot($c);if(h<=0&&p<=0)return t.copy(r);Kc.subVectors(e,a);const g=Fs.dot(Kc),_=Os.dot(Kc);if(g>=0&&_<=g)return t.copy(a);const v=h*_-g*p;if(v<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Fs,c);Zc.subVectors(e,l);const S=Fs.dot(Zc),E=Os.dot(Zc);if(E>=0&&S<=E)return t.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(r).addScaledVector(Os,f);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return mm.subVectors(l,a),f=(_-g)/(_-g+(S-E)),t.copy(a).addScaledVector(mm,f);const x=1/(y+w+v);return c=w*x,f=v*x,t.copy(r).addScaledVector(Fs,c).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function tf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=vt.workingColorSpace){if(e=md(e,1),t=ht(t,0,1),r=ht(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=tf(c,l,e+1/3),this.g=tf(c,l,e),this.b=tf(c,l,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,t=dn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const r=Dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return vt.fromWorkingColorSpace(yn.copy(this),e),Math.round(ht(yn.r*255,0,255))*65536+Math.round(ht(yn.g*255,0,255))*256+Math.round(ht(yn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(yn.copy(this),t);const r=yn.r,a=yn.g,l=yn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=g<=.5?_/(c+f):_/(2-c-f),c){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=dn){vt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,a=yn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(xl);const r=$o(Mr.h,xl.h,t),a=$o(Mr.s,xl.s,t),l=$o(Mr.l,xl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new lt;lt.NAMES=Dg;let ox=0;class qi extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=qs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==ji&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yf&&(r.blendSrc=this.blendSrc),this.blendDst!==Sf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ug extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new Y,yl=new rt;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),a=An(a,this.array),l=An(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class Ig extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ng extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Cn extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ax=0;const Qn=new Ot,nf=new ln,ks=new Y,Xn=new so,Wo=new so,an=new Y;class hi extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cg(e)?Ng:Ig)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return nf.lookAt(e),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Cn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Wo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Xn.min,Wo.min),Xn.expandByPoint(an),an.addVectors(Xn.max,Wo.max),Xn.expandByPoint(an)):(Xn.expandByPoint(Wo.min),Xn.expandByPoint(Wo.max))}Xn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)an.fromBufferAttribute(f,p),h&&(ks.fromBufferAttribute(e,p),an.add(ks)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<r.count;X++)f[X]=new Y,h[X]=new Y;const p=new Y,g=new Y,_=new Y,v=new rt,S=new rt,E=new rt,w=new Y,y=new Y;function x(X,b,R){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),v.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,R),g.sub(p),_.sub(p),S.sub(v),E.sub(v);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),f[X].add(w),f[b].add(w),f[R].add(w),h[X].add(y),h[b].add(y),h[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,b=N.length;X<b;++X){const R=N[X],z=R.start,le=R.count;for(let te=z,ue=z+le;te<ue;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new Y,C=new Y,G=new Y,U=new Y;function I(X){G.fromBufferAttribute(a,X),U.copy(G);const b=f[X];D.copy(b),D.sub(G.multiplyScalar(G.dot(b))).normalize(),C.crossVectors(U,b);const z=C.dot(h[X])<0?-1:1;c.setXYZW(X,D.x,D.y,D.z,z)}for(let X=0,b=N.length;X<b;++X){const R=N[X],z=R.start,le=R.count;for(let te=z,ue=z+le;te<ue;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new Y,l=new Y,c=new Y,f=new Y,h=new Y,p=new Y,g=new Y,_=new Y;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(h.length*g);let S=0,E=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let x=0;x<g;x++)v[E++]=p[S++]}return new Mi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Ot,Wr=new eu,Sl=new ea,_m=new Y,Ml=new Y,El=new Y,Tl=new Y,rf=new Y,wl=new Y,vm=new Y,Al=new Y;class bn extends ln{constructor(e=new hi,t=new Ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){wl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],_=l[h];g!==0&&(rf.fromBufferAttribute(_,e),c?wl.addScaledVector(rf,g):wl.addScaledVector(rf.sub(t),g))}t.add(wl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Sl,_m)===null||Wr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(gm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=v.length;E<w;E++){const y=v[E],x=c[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,G=D;C<G;C+=3){const U=f.getX(C),I=f.getX(C+1),X=f.getX(C+2);a=Rl(this,x,e,r,p,g,_,U,I,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const N=f.getX(y),D=f.getX(y+1),C=f.getX(y+2);a=Rl(this,c,e,r,p,g,_,N,D,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,w=v.length;E<w;E++){const y=v[E],x=c[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,G=D;C<G;C+=3){const U=C,I=C+1,X=C+2;a=Rl(this,x,e,r,p,g,_,U,I,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const N=y,D=y+1,C=y+2;a=Rl(this,c,e,r,p,g,_,N,D,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function lx(s,e,t,r,a,l,c,f){let h;if(e.side===Bn?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===ji,f),h===null)return null;Al.copy(f),Al.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Al);return p<t.near||p>t.far?null:{distance:p,point:Al.clone(),object:s}}function Rl(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,Ml),s.getVertexPosition(h,El),s.getVertexPosition(p,Tl);const g=lx(s,e,t,r,Ml,El,Tl,vm);if(g){const _=new Y;ci.getBarycoord(vm,Ml,El,Tl,_),a&&(g.uv=ci.getInterpolatedAttribute(a,f,h,p,_,new rt)),l&&(g.uv1=ci.getInterpolatedAttribute(l,f,h,p,_,new rt)),c&&(g.normal=ci.getInterpolatedAttribute(c,f,h,p,_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new Y,materialIndex:0};ci.getNormal(Ml,El,Tl,v.normal),g.face=v,g.barycoord=_}return g}class ta extends hi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(_,2));function E(w,y,x,N,D,C,G,U,I,X,b){const R=C/I,z=G/X,le=C/2,te=G/2,ue=U/2,de=I+1,ie=X+1;let ae=0,O=0;const oe=new Y;for(let re=0;re<ie;re++){const F=re*z-te;for(let ne=0;ne<de;ne++){const Le=ne*R-le;oe[w]=Le*N,oe[y]=F*D,oe[x]=ue,p.push(oe.x,oe.y,oe.z),oe[w]=0,oe[y]=0,oe[x]=U>0?1:-1,g.push(oe.x,oe.y,oe.z),_.push(ne/I),_.push(1-re/X),ae+=1}}for(let re=0;re<X;re++)for(let F=0;F<I;F++){const ne=v+F+de*re,Le=v+F+de*(re+1),Z=v+(F+1)+de*(re+1),ce=v+(F+1)+de*re;h.push(ne,Le,ce),h.push(Le,Z,ce),O+=6}f.addGroup(S,O,b),S+=O,v+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Rn(s){const e={};for(let t=0;t<s.length;t++){const r=io(s[t]);for(const a in r)e[a]=r[a]}return e}function ux(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const cx={clone:io,merge:Rn};var fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Og extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new Y,xm=new rt,ym=new rt;class ei extends Og{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,xm,ym),t.subVectors(ym,xm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,zs=1;class hx extends ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(Bs,zs,e,t);a.layers=this.layers,this.add(a);const l=new ei(Bs,zs,e,t);l.layers=this.layers,this.add(l);const c=new ei(Bs,zs,e,t);c.layers=this.layers,this.add(c);const f=new ei(Bs,zs,e,t);f.layers=this.layers,this.add(f);const h=new ei(Bs,zs,e,t);h.layers=this.layers,this.add(h);const p=new ei(Bs,zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Yl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class kg extends Pn{constructor(e,t,r,a,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,r,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class px extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new kg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ta(5,5,5),l=new $i({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ar});l.uniforms.tEquirect.value=t;const c=new bn(a,l),f=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Si),new hx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class Sm extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sf=new Y,mx=new Y,gx=new ot;class Tr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=sf.subVectors(r,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(sf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||gx.getNormalMatrix(e),a=this.coplanarPoint(sf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ea,Cl=new Y;class gd{constructor(e=new Tr,t=new Tr,r=new Tr,a=new Tr,l=new Tr,c=new Tr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],_=a[6],v=a[7],S=a[8],E=a[9],w=a[10],y=a[11],x=a[12],N=a[13],D=a[14],C=a[15];if(r[0].setComponents(h-l,v-p,y-S,C-x).normalize(),r[1].setComponents(h+l,v+p,y+S,C+x).normalize(),r[2].setComponents(h+c,v+g,y+E,C+N).normalize(),r[3].setComponents(h-c,v-g,y-E,C-N).normalize(),r[4].setComponents(h-f,v-_,y-w,C-D).normalize(),t===Wi)r[5].setComponents(h+f,v+_,y+w,C+D).normalize();else if(t===Yl)r[5].setComponents(f,_,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Cl.x=a.normal.x>0?e.max.x:e.min.x,Cl.y=a.normal.y>0?e.max.y:e.min.y,Cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gl extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new Y,$l=new Y,Mm=new Ot,Xo=new eu,bl=new ea,of=new Y,Em=new Y;class _x extends ln{constructor(e=new hi,t=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)ql.fromBufferAttribute(t,a-1),$l.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=ql.distanceTo($l);e.setAttribute("lineDistance",new Cn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(a),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;Mm.copy(a).invert(),Xo.copy(e.ray).applyMatrix4(Mm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const S=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let w=S,y=E-1;w<y;w+=p){const x=g.getX(w),N=g.getX(w+1),D=Pl(this,e,Xo,h,x,N);D&&t.push(D)}if(this.isLineLoop){const w=g.getX(E-1),y=g.getX(S),x=Pl(this,e,Xo,h,w,y);x&&t.push(x)}}else{const S=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let w=S,y=E-1;w<y;w+=p){const x=Pl(this,e,Xo,h,w,w+1);x&&t.push(x)}if(this.isLineLoop){const w=Pl(this,e,Xo,h,E-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Pl(s,e,t,r,a,l){const c=s.geometry.attributes.position;if(ql.fromBufferAttribute(c,a),$l.fromBufferAttribute(c,l),t.distanceSqToSegment(ql,$l,of,Em)>r)return;of.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(of);if(!(h<e.near||h>e.far))return{distance:h,point:Em.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Tm=new Y,wm=new Y;class Am extends _x{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Tm.fromBufferAttribute(t,a),wm.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Tm.distanceTo(wm);e.setAttribute("lineDistance",new Cn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jo extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rm=new Ot,rd=new eu,Ll=new ea,Dl=new Y;class af extends ln{constructor(e=new hi,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;Rm.copy(a).invert(),rd.copy(e.ray).applyMatrix4(Rm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,_=r.attributes.position;if(p!==null){const v=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let E=v,w=S;E<w;E++){const y=p.getX(E);Dl.fromBufferAttribute(_,y),Cm(Dl,y,h,a,e,t,this)}}else{const v=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let E=v,w=S;E<w;E++)Dl.fromBufferAttribute(_,E),Cm(Dl,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Cm(s,e,t,r,a,l,c){const f=rd.distanceSqToPoint(s);if(f<t){const h=new Y;rd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Xs extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Bg extends Pn{constructor(e,t,r,a,l,c,f,h,p,g=$s){if(g!==$s&&g!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===$s&&(r=es),r===void 0&&g===to&&(r=eo),super(null,a,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class na extends hi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,g=h+1,_=e/f,v=t/h,S=[],E=[],w=[],y=[];for(let x=0;x<g;x++){const N=x*v-c;for(let D=0;D<p;D++){const C=D*_-l;E.push(C,-N,0),w.push(0,0,1),y.push(D/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let N=0;N<f;N++){const D=N+p*x,C=N+p*(x+1),G=N+1+p*(x+1),U=N+1+p*x;S.push(D,C,U),S.push(C,G,U)}this.setIndex(S),this.setAttribute("position",new Cn(E,3)),this.setAttribute("normal",new Cn(w,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}class zg extends qi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ag,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vx extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xx extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kl={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Hg{constructor(e,t,r){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(g){f++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const Vg=new Hg;class oo{constructor(e){this.manager=e!==void 0?e:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class yx extends Error{constructor(e,t){super(e),this.response=t}}class Gg extends oo{constructor(e){super(e)}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Kl.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:r,onError:a});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:r,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,h=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=zi[e],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let w=0;const y=new ReadableStream({start(x){N();function N(){_.read().then(({done:D,value:C})=>{if(D)x.close();else{w+=C.byteLength;const G=new ProgressEvent("progress",{lengthComputable:E,loaded:w,total:S});for(let U=0,I=g.length;U<I;U++){const X=g[U];X.onProgress&&X.onProgress(G)}x.enqueue(C),N()}},D=>{x.error(D)})}}});return new Response(y)}else throw new yx(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return p.json();default:if(f===void 0)return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),v=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{Kl.add(e,p);const g=zi[e];delete zi[e];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=zi[e];if(g===void 0)throw this.manager.itemError(e),p;delete zi[e];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sx extends oo{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Kl.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Qo("img");function h(){g(),Kl.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(_){g(),a&&a(_),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class Mx extends oo{constructor(e){super(e)}load(e,t,r,a){const l=new Pn,c=new Sx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class Wg extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const lf=new Ot,bm=new Y,Pm=new Y;class Ex{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gd,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(bm),Pm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pm),t.updateMatrixWorld(),lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _d extends Og{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tx extends Ex{constructor(){super(new _d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lm extends Wg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Tx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wx extends Wg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ax{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,a=e.length;r<a;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Rx extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cx extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Um(s,e,t,r){const a=bx(r);switch(t){case xg:return s*e;case Sg:return s*e;case Mg:return s*e*2;case Eg:return s*e/a.components*a.byteLength;case dd:return s*e/a.components*a.byteLength;case Tg:return s*e*2/a.components*a.byteLength;case hd:return s*e*2/a.components*a.byteLength;case yg:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case pd:return s*e*4/a.components*a.byteLength;case kl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Nf:return Math.max(s,16)*Math.max(e,8)/4;case Df:case If:return Math.max(s,8)*Math.max(e,8)/2;case Ff:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Jf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wg:case td:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bx(s){switch(s){case Yi:case gg:return{byteLength:1,components:1};case Ko:case _g:case Jo:return{byteLength:2,components:1};case cd:case fd:return{byteLength:2,components:4};case es:case ud:case Gi:return{byteLength:4,components:1};case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Px(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const g=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],w=_[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const w=_[S];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
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
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
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
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Xx=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ey=`#define PI 3.141592653589793
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
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ny=`vec3 transformedNormal = objectNormal;
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
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uy=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cy=`PhysicalMaterial material;
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
#endif`,by=`struct PhysicalMaterial {
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
}`,Py=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zy=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mS=`float getShadowMask() {
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
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
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
}`,OS=`#if DEPTH_PACKING == 3200
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
}`,kS=`#define DISTANCE
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
}`,BS=`#define DISTANCE
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#include <common>
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
}`,XS=`uniform vec3 diffuse;
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
}`,jS=`#define LAMBERT
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
}`,YS=`#define LAMBERT
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
}`,qS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,KS=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,QS=`#define PHONG
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
}`,JS=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,uM=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Lx,alphahash_pars_fragment:Dx,alphamap_fragment:Ux,alphamap_pars_fragment:Ix,alphatest_fragment:Nx,alphatest_pars_fragment:Fx,aomap_fragment:Ox,aomap_pars_fragment:kx,batching_pars_vertex:Bx,batching_vertex:zx,begin_vertex:Hx,beginnormal_vertex:Vx,bsdfs:Gx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Yx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:$x,color_fragment:Kx,color_pars_fragment:Zx,color_pars_vertex:Qx,color_vertex:Jx,common:ey,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:oy,colorspace_fragment:ay,colorspace_pars_fragment:ly,envmap_fragment:uy,envmap_common_pars_fragment:cy,envmap_pars_fragment:fy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:Ey,envmap_vertex:hy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:_y,gradientmap_pars_fragment:vy,lightmap_pars_fragment:xy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:Sy,lights_pars_begin:My,lights_toon_fragment:Ty,lights_toon_pars_fragment:wy,lights_phong_fragment:Ay,lights_phong_pars_fragment:Ry,lights_physical_fragment:Cy,lights_physical_pars_fragment:by,lights_fragment_begin:Py,lights_fragment_maps:Ly,lights_fragment_end:Dy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Fy,map_fragment:Oy,map_pars_fragment:ky,map_particle_fragment:By,map_particle_pars_fragment:zy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Vy,morphinstance_vertex:Gy,morphcolor_vertex:Wy,morphnormal_vertex:Xy,morphtarget_pars_vertex:jy,morphtarget_vertex:Yy,normal_fragment_begin:qy,normal_fragment_maps:$y,normal_pars_fragment:Ky,normal_pars_vertex:Zy,normal_vertex:Qy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:oS,project_vertex:aS,dithering_fragment:lS,dithering_pars_fragment:uS,roughnessmap_fragment:cS,roughnessmap_pars_fragment:fS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:_S,skinning_vertex:vS,skinnormal_vertex:xS,specularmap_fragment:yS,specularmap_pars_fragment:SS,tonemapping_fragment:MS,tonemapping_pars_fragment:ES,transmission_fragment:TS,transmission_pars_fragment:wS,uv_pars_fragment:AS,uv_pars_vertex:RS,uv_vertex:CS,worldpos_vertex:bS,background_vert:PS,background_frag:LS,backgroundCube_vert:DS,backgroundCube_frag:US,cube_vert:IS,cube_frag:NS,depth_vert:FS,depth_frag:OS,distanceRGBA_vert:kS,distanceRGBA_frag:BS,equirect_vert:zS,equirect_frag:HS,linedashed_vert:VS,linedashed_frag:GS,meshbasic_vert:WS,meshbasic_frag:XS,meshlambert_vert:jS,meshlambert_frag:YS,meshmatcap_vert:qS,meshmatcap_frag:$S,meshnormal_vert:KS,meshnormal_frag:ZS,meshphong_vert:QS,meshphong_frag:JS,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:uM},Ce={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Rn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Rn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Rn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Rn([Ce.lights,Ce.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};yi.physical={uniforms:Rn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ul={r:0,b:0,g:0},jr=new Ei,cM=new Ot;function fM(s,e,t,r,a,l,c){const f=new lt(0);let h=l===!0?0:1,p,g,_=null,v=0,S=null;function E(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?t:e).get(C)),C}function w(D){let C=!1;const G=E(D);G===null?x(f,h):G&&G.isColor&&(x(G,1),C=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,C){const G=E(C);G&&(G.isCubeTexture||G.mapping===Jl)?(g===void 0&&(g=new bn(new ta(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:io(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),jr.copy(C.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(cM.makeRotationFromEuler(jr)),g.material.toneMapped=vt.getTransfer(G.colorSpace)!==Rt,(_!==G||v!==G.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=G,v=G.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new bn(new na(2,2),new $i({name:"BackgroundMaterial",uniforms:io(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=vt.getTransfer(G.colorSpace)!==Rt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||v!==G.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=G,v=G.version,S=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,C){D.getRGB(Ul,Fg(s)),r.buffers.color.setClear(Ul.r,Ul.g,Ul.b,C,c)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(D,C=1){f.set(D),h=C,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,x(f,h)},render:w,addToRenderList:y,dispose:N}}function dM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,c=!1;function f(R,z,le,te,ue){let de=!1;const ie=_(te,le,z);l!==ie&&(l=ie,p(l.object)),de=S(R,te,le,ue),de&&E(R,te,le,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,C(R,z,le,te),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,z,le){const te=le.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let de=ue[z.id];de===void 0&&(de={},ue[z.id]=de);let ie=de[te];return ie===void 0&&(ie=v(h()),de[te]=ie),ie}function v(R){const z=[],le=[],te=[];for(let ue=0;ue<t;ue++)z[ue]=0,le[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:te,object:R,attributes:{},index:null}}function S(R,z,le,te){const ue=l.attributes,de=z.attributes;let ie=0;const ae=le.getAttributes();for(const O in ae)if(ae[O].location>=0){const re=ue[O];let F=de[O];if(F===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;ie++}return l.attributesNum!==ie||l.index!==te}function E(R,z,le,te){const ue={},de=z.attributes;let ie=0;const ae=le.getAttributes();for(const O in ae)if(ae[O].location>=0){let re=de[O];re===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),ue[O]=F,ie++}l.attributes=ue,l.attributesNum=ie,l.index=te}function w(){const R=l.newAttributes;for(let z=0,le=R.length;z<le;z++)R[z]=0}function y(R){x(R,0)}function x(R,z){const le=l.newAttributes,te=l.enabledAttributes,ue=l.attributeDivisors;le[R]=1,te[R]===0&&(s.enableVertexAttribArray(R),te[R]=1),ue[R]!==z&&(s.vertexAttribDivisor(R,z),ue[R]=z)}function N(){const R=l.newAttributes,z=l.enabledAttributes;for(let le=0,te=z.length;le<te;le++)z[le]!==R[le]&&(s.disableVertexAttribArray(le),z[le]=0)}function D(R,z,le,te,ue,de,ie){ie===!0?s.vertexAttribIPointer(R,z,le,ue,de):s.vertexAttribPointer(R,z,le,te,ue,de)}function C(R,z,le,te){w();const ue=te.attributes,de=le.getAttributes(),ie=z.defaultAttributeValues;for(const ae in de){const O=de[ae];if(O.location>=0){let oe=ue[ae];if(oe===void 0&&(ae==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ae==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const re=oe.normalized,F=oe.itemSize,ne=e.get(oe);if(ne===void 0)continue;const Le=ne.buffer,Z=ne.type,ce=ne.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||oe.gpuType===ud;if(oe.isInterleavedBufferAttribute){const ve=oe.data,Te=ve.stride,Ie=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<O.locationSize;Ze++)x(O.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<O.locationSize;Ze++)y(O.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ze=0;Ze<O.locationSize;Ze++)D(O.location+Ze,F/O.locationSize,Z,re,Te*ce,(Ie+F/O.locationSize*Ze)*ce,Se)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<O.locationSize;ve++)x(O.location+ve,oe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<O.locationSize;ve++)y(O.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ve=0;ve<O.locationSize;ve++)D(O.location+ve,F/O.locationSize,Z,re,F*ce,F/O.locationSize*ve*ce,Se)}}else if(ie!==void 0){const re=ie[ae];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(O.location,re);break;case 3:s.vertexAttrib3fv(O.location,re);break;case 4:s.vertexAttrib4fv(O.location,re);break;default:s.vertexAttrib1fv(O.location,re)}}}}N()}function G(){X();for(const R in r){const z=r[R];for(const le in z){const te=z[le];for(const ue in te)g(te[ue].object),delete te[ue];delete z[le]}delete r[R]}}function U(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const le in z){const te=z[le];for(const ue in te)g(te[ue].object),delete te[ue];delete z[le]}delete r[R.id]}function I(R){for(const z in r){const le=r[z];if(le[R.id]===void 0)continue;const te=le[R.id];for(const ue in te)g(te[ue].object),delete te[ue];delete le[R.id]}}function X(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function hM(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),t.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];t.update(S,r,1)}function h(p,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let E=0;for(let w=0;w<_;w++)E+=g[w]*v[w];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function pM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==fi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const X=I===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Yi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!X)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:G,maxSamples:U}}function mM(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Tr,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||a;return a=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!a||E===null||E.length===0||l&&!y)l?g(null):p();else{const N=l?0:r,D=N*4;let C=x.clippingState||null;h.value=C,C=g(E,v,D,S);for(let G=0;G!==D;++G)C[G]=t[G];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=h.value,E!==!0||y===null){const x=S+w*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,C=S;D!==w;++D,C+=4)c.copy(_[D]).applyMatrix4(N,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function gM(s){let e=new WeakMap;function t(c,f){return f===bf?c.mapping=Qs:f===Pf&&(c.mapping=Js),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===bf||f===Pf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new px(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const js=4,Im=[.125,.215,.35,.446,.526,.582],Kr=20,uf=new _d,Nm=new lt;let cf=null,ff=0,df=0,hf=!1;const qr=(1+Math.sqrt(5))/2,Hs=1/qr,Fm=[new Y(-qr,Hs,0),new Y(qr,Hs,0),new Y(-Hs,0,qr),new Y(Hs,0,qr),new Y(0,qr,-Hs),new Y(0,qr,Hs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Jo,format:fi,colorSpace:no,depthBuffer:!1},a=km(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_M(l)),this._blurMaterial=vM(l,e,t)}return a}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,uf)}_sceneToCubeUV(e,t,r,a){const f=new ei(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(Nm),g.toneMapping=Rr,g.autoClear=!1;const S=new Ug({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),E=new bn(new ta,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(Nm),w=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(f.up.set(0,h[x],0),f.lookAt(p[x],0,0)):N===1?(f.up.set(0,0,h[x]),f.lookAt(0,p[x],0)):(f.up.set(0,h[x],0),f.lookAt(0,0,p[x]));const D=this._cubeSize;Il(a,N*D,x>2?D:0,D,D),g.setRenderTarget(a),w&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Qs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new bn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,uf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Fm[(a-l-1)%Fm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new bn(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),w=l/E,y=isFinite(l)?1+Math.floor(g*w):Kr;y>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const x=[];let N=0;for(let I=0;I<Kr;++I){const X=I/w,b=Math.exp(-X*X/2);x.push(b),I===0?N+=b:I<y&&(N+=2*b)}for(let I=0;I<x.length;I++)x[I]=x[I]/N;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-r;const C=this._sizeLods[a],G=3*C*(a>D-js?a-D+js:0),U=4*(this._cubeSize-C);Il(t,G,U,3*C,2*C),h.setRenderTarget(t),h.render(_,uf)}}function _M(s){const e=[],t=[],r=[];let a=s;const l=s-js+1+Im.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-js?h=Im[c-s+js-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,y=2,x=1,N=new Float32Array(w*E*S),D=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let U=0;U<S;U++){const I=U%3*2/3-1,X=U>2?0:-1,b=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];N.set(b,w*E*U),D.set(v,y*E*U);const R=[U,U,U,U,U,U];C.set(R,x*E*U)}const G=new hi;G.setAttribute("position",new Mi(N,w)),G.setAttribute("uv",new Mi(D,y)),G.setAttribute("faceIndex",new Mi(C,x)),e.push(G),a>js&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function km(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=Jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function vM(s,e,t){const r=new Float32Array(Kr),a=new Y(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:vd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Bm(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function zm(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function vd(){return`

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
	`}function xM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===bf||h===Pf,g=h===Qs||h===Js;if(p||g){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Om(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Om(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function yM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function SM(s,e,t,r){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,E=_.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let D=0,C=N.length;D<C;D+=3){const G=N[D+0],U=N[D+1],I=N[D+2];v.push(G,U,U,I,I,G)}}else if(E!==void 0){const N=E.array;w=E.version;for(let D=0,C=N.length/3-1;D<C;D+=3){const G=D+0,U=D+1,I=D+2;v.push(G,U,U,I,I,G)}}else return;const y=new(Cg(v)?Ng:Ig)(v,1);y.version=w;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function MM(s,e,t){let r;function a(v){r=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,S){s.drawElements(r,S,l,v*c),t.update(S,r,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,v*c,E),t.update(S,r,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,r,1)}function _(v,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,w,0,E);let x=0;for(let N=0;N<E;N++)x+=S[N]*w[N];t.update(x,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function EM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function TM(s,e,t){const r=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let R=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let G=f.attributes.position.count*C,U=1;G>e.maxTextureSize&&(U=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*U*4*_),X=new Pg(I,G,U,_);X.type=Gi,X.needsUpdate=!0;const b=C*4;for(let z=0;z<_;z++){const le=x[z],te=N[z],ue=D[z],de=G*U*4*z;for(let ie=0;ie<le.count;ie++){const ae=ie*b;E===!0&&(a.fromBufferAttribute(le,ie),I[de+ae+0]=a.x,I[de+ae+1]=a.y,I[de+ae+2]=a.z,I[de+ae+3]=0),w===!0&&(a.fromBufferAttribute(te,ie),I[de+ae+4]=a.x,I[de+ae+5]=a.y,I[de+ae+6]=a.z,I[de+ae+7]=0),y===!0&&(a.fromBufferAttribute(ue,ie),I[de+ae+8]=a.x,I[de+ae+9]=a.y,I[de+ae+10]=a.z,I[de+ae+11]=ue.itemSize===4?a.w:1)}}v={count:_,texture:X,size:new rt(G,U)},r.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function wM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return _}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const jg=new Pn,Hm=new Bg(1,1),Yg=new Pg,qg=new Q0,$g=new kg,Vm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),jm=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Vm[a];if(l===void 0&&(l=new Float32Array(a),Vm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function tu(s,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function AM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function PM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;jm.set(r),s.uniformMatrix2fv(this.addr,!1,jm),en(t,r)}}function LM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Xm.set(r),s.uniformMatrix3fv(this.addr,!1,Xm),en(t,r)}}function DM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Wm.set(r),s.uniformMatrix4fv(this.addr,!1,Wm),en(t,r)}}function UM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function OM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function HM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Hm.compareFunction=Rg,l=Hm):l=jg,t.setTexture2D(e||l,a)}function VM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||qg,a)}function GM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||$g,a)}function WM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Yg,a)}function XM(s){switch(s){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return bM;case 35674:return PM;case 35675:return LM;case 35676:return DM;case 5124:case 35670:return UM;case 35667:case 35671:return IM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return kM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}function jM(s,e){s.uniform1fv(this.addr,e)}function YM(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function qM(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function $M(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function KM(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ZM(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function QM(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function JM(s,e){s.uniform1iv(this.addr,e)}function eE(s,e){s.uniform2iv(this.addr,e)}function tE(s,e){s.uniform3iv(this.addr,e)}function nE(s,e){s.uniform4iv(this.addr,e)}function iE(s,e){s.uniform1uiv(this.addr,e)}function rE(s,e){s.uniform2uiv(this.addr,e)}function sE(s,e){s.uniform3uiv(this.addr,e)}function oE(s,e){s.uniform4uiv(this.addr,e)}function aE(s,e,t){const r=this.cache,a=e.length,l=tu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||jg,l[c])}function lE(s,e,t){const r=this.cache,a=e.length,l=tu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||qg,l[c])}function uE(s,e,t){const r=this.cache,a=e.length,l=tu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||$g,l[c])}function cE(s,e,t){const r=this.cache,a=e.length,l=tu(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Yg,l[c])}function fE(s){switch(s){case 5126:return jM;case 35664:return YM;case 35665:return qM;case 35666:return $M;case 35674:return KM;case 35675:return ZM;case 35676:return QM;case 5124:case 35670:return JM;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return cE}}class dE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}}class hE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fE(t.type)}}class pE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Ym(s,e){s.seq.push(e),s.map[e.id]=e}function mE(s,e,t){const r=s.name,a=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),c=pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Ym(t,p===void 0?new dE(f,s,e):new hE(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new pE(f),Ym(t,_)),t=_}}}class Wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);mE(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function qm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const gE=37297;let _E=0;function vE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const $m=new ot;function xE(s){vt._getMatrix($m,vt.workingColorSpace,s);const e=`mat3( ${$m.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(s)){case jl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Km(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+vE(s.getShaderSource(e),c)}else return a}function yE(s,e){const t=xE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SE(s,e){let t;switch(e){case l0:t="Linear";break;case u0:t="Reinhard";break;case c0:t="Cineon";break;case f0:t="ACESFilmic";break;case h0:t="AgX";break;case p0:t="Neutral";break;case d0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new Y;function ME(){vt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function TE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function wE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Yo(s){return s!==""}function Zm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(s){return s.replace(AE,CE)}const RE=new Map;function CE(s,e){let t=at[e];if(t===void 0){const r=RE.get(e);if(r!==void 0)t=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sd(t)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(bE,PE)}function PE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function eg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function DE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function IE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function NE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function FE(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=LE(t),p=DE(t),g=UE(t),_=IE(t),v=NE(t),S=EE(t),E=TE(l),w=a.createProgram();let y,x,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Yo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Yo).join(`
`),x.length>0&&(x+=`
`)):(y=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),x=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?at.tonemapping_pars_fragment:"",t.toneMapping!==Rr?SE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,yE("linearToOutputTexel",t.outputColorSpace),ME(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),c=sd(c),c=Zm(c,t),c=Qm(c,t),f=sd(f),f=Zm(f,t),f=Qm(f,t),c=Jm(c),f=Jm(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+y+c,C=N+x+f,G=qm(a,a.VERTEX_SHADER,D),U=qm(a,a.FRAGMENT_SHADER,C);a.attachShader(w,G),a.attachShader(w,U),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(z){if(s.debug.checkShaderErrors){const le=a.getProgramInfoLog(w).trim(),te=a.getShaderInfoLog(G).trim(),ue=a.getShaderInfoLog(U).trim();let de=!0,ie=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,G,U);else{const ae=Km(a,G,"vertex"),O=Km(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+ae+`
`+O)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(te===""||ue==="")&&(ie=!1);ie&&(z.diagnostics={runnable:de,programLog:le,vertexShader:{log:te,prefix:y},fragmentShader:{log:ue,prefix:x}})}a.deleteShader(G),a.deleteShader(U),X=new Wl(a,w),b=wE(a,w)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,gE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_E++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=U,this}let OE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new BE(e),t.set(e,r)),r}}class BE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function zE(s,e,t,r,a,l,c){const f=new Lg,h=new kE,p=new Set,g=[],_=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,z,le,te){const ue=le.fog,de=te.geometry,ie=b.isMeshStandardMaterial?le.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),O=ae&&ae.mapping===Jl?ae.image.height:null,oe=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=re!==void 0?re.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let Le,Z,ce,Se;if(oe){const yt=yi[oe];Le=yt.vertexShader,Z=yt.fragmentShader}else Le=b.vertexShader,Z=b.fragmentShader,h.update(b),ce=h.getVertexShaderID(b),Se=h.getFragmentShaderID(b);const ve=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,At=!!b.map,mt=!!b.matcap,Pt=!!ae,B=!!b.aoMap,Sn=!!b.lightMap,pt=!!b.bumpMap,ct=!!b.normalMap,je=!!b.displacementMap,wt=!!b.emissiveMap,Ge=!!b.metalnessMap,P=!!b.roughnessMap,T=b.anisotropy>0,Q=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,fe=b.sheen>0,We=b.transmission>0,we=T&&!!b.anisotropyMap,Ne=Q&&!!b.clearcoatMap,ut=Q&&!!b.clearcoatNormalMap,Me=Q&&!!b.clearcoatRoughnessMap,Oe=ge&&!!b.iridescenceMap,qe=ge&&!!b.iridescenceThicknessMap,Je=fe&&!!b.sheenColorMap,ke=fe&&!!b.sheenRoughnessMap,ft=!!b.specularMap,nt=!!b.specularColorMap,Tt=!!b.specularIntensityMap,V=We&&!!b.transmissionMap,Ae=We&&!!b.thicknessMap,se=!!b.gradientMap,he=!!b.alphaMap,Pe=b.alphaTest>0,be=!!b.alphaHash,it=!!b.extensions;let Dt=Rr;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const qt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Le,fragmentShader:Z,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:no,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:mt,envMap:Pt,envMapMode:Pt&&ae.mapping,envMapCubeUVHeight:O,aoMap:B,lightMap:Sn,bumpMap:pt,normalMap:ct,displacementMap:v&&je,emissiveMap:wt,normalMapObjectSpace:ct&&b.normalMapType===v0,normalMapTangentSpace:ct&&b.normalMapType===Ag,metalnessMap:Ge,roughnessMap:P,anisotropy:T,anisotropyMap:we,clearcoat:Q,clearcoatMap:Ne,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:fe,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ft,specularColorMap:nt,specularIntensityMap:Tt,transmission:We,transmissionMap:V,thicknessMap:Ae,gradientMap:se,opaque:b.transparent===!1&&b.blending===qs&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:be,combine:b.combine,mapUv:At&&w(b.map.channel),aoMapUv:B&&w(b.aoMap.channel),lightMapUv:Sn&&w(b.lightMap.channel),bumpMapUv:pt&&w(b.bumpMap.channel),normalMapUv:ct&&w(b.normalMap.channel),displacementMapUv:je&&w(b.displacementMap.channel),emissiveMapUv:wt&&w(b.emissiveMap.channel),metalnessMapUv:Ge&&w(b.metalnessMap.channel),roughnessMapUv:P&&w(b.roughnessMap.channel),anisotropyMapUv:we&&w(b.anisotropyMap.channel),clearcoatMapUv:Ne&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(b.sheenRoughnessMap.channel),specularMapUv:ft&&w(b.specularMap.channel),specularColorMapUv:nt&&w(b.specularColorMap.channel),specularIntensityMapUv:Tt&&w(b.specularIntensityMap.channel),transmissionMapUv:V&&w(b.transmissionMap.channel),thicknessMapUv:Ae&&w(b.thicknessMap.channel),alphaMapUv:he&&w(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ct||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&(At||he),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&vt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&vt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:it&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&b.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(N(R,b),D(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function N(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function D(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=E[b.type];let z;if(R){const le=yi[R];z=cx.clone(le.uniforms)}else z=b.uniforms;return z}function G(b,R){let z;for(let le=0,te=g.length;le<te;le++){const ue=g[le];if(ue.cacheKey===R){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new FE(s,R,b,l),g.push(z)),z}function U(b){if(--b.usedTimes===0){const R=g.indexOf(b);g[R]=g[g.length-1],g.pop(),b.destroy()}}function I(b){h.remove(b)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:G,releaseProgram:U,releaseShaderCache:I,programs:g,dispose:X}}function HE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function VE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ng(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_,v,S,E,w,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:w,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=w,x.group=y),e++,x}function f(_,v,S,E,w,y){const x=c(_,v,S,E,w,y);S.transmission>0?r.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(_,v,S,E,w,y){const x=c(_,v,S,E,w,y);S.transmission>0?r.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(_,v){t.length>1&&t.sort(_||VE),r.length>1&&r.sort(v||tg),a.length>1&&a.sort(v||tg)}function g(){for(let _=e,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function GE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new ng,s.set(r,[c])):a>=l.length?(c=new ng,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function WE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new lt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function XE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jE=0;function YE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qE(s){const e=new WE,t=XE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const a=new Y,l=new Ot,c=new Ot;function f(p){let g=0,_=0,v=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,w=0,y=0,x=0,N=0,D=0,C=0,G=0,U=0,I=0;p.sort(YE);for(let b=0,R=p.length;b<R;b++){const z=p[b],le=z.color,te=z.intensity,ue=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=le.r*te,_+=le.g*te,v+=le.b*te;else if(z.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(z.sh.coefficients[ie],te);I++}else if(z.isDirectionalLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ae=z.shadow,O=t.get(z);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=z.shadow.matrix,N++}r.directional[S]=ie,S++}else if(z.isSpotLight){const ie=e.get(z);ie.position.setFromMatrixPosition(z.matrixWorld),ie.color.copy(le).multiplyScalar(te),ie.distance=ue,ie.coneCos=Math.cos(z.angle),ie.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ie.decay=z.decay,r.spot[w]=ie;const ae=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,ae.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[w]=ae.matrix,z.castShadow){const O=t.get(z);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.spotShadow[w]=O,r.spotShadowMap[w]=de,C++}w++}else if(z.isRectAreaLight){const ie=e.get(z);ie.color.copy(le).multiplyScalar(te),ie.halfWidth.set(z.width*.5,0,0),ie.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ie,y++}else if(z.isPointLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),ie.distance=z.distance,ie.decay=z.decay,z.castShadow){const ae=z.shadow,O=t.get(z);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,O.shadowCameraNear=ae.camera.near,O.shadowCameraFar=ae.camera.far,r.pointShadow[E]=O,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=z.shadow.matrix,D++}r.point[E]=ie,E++}else if(z.isHemisphereLight){const ie=e.get(z);ie.skyColor.copy(z.color).multiplyScalar(te),ie.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[x]=ie,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==N||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==G||X.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+G-U,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=I,X.directionalLength=S,X.pointLength=E,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=N,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=G,X.numLightProbes=I,r.version=jE++)}function h(p,g){let _=0,v=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const D=p[x];if(D.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),_++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(D.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:r}}function ig(s){const e=new qE(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function $E(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new ig(s),e.set(a,[f])):l>=c.length?(f=new ig(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
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
}`;function QE(s,e,t){let r=new gd;const a=new rt,l=new rt,c=new Wt,f=new vx({depthPacking:_0}),h=new xx,p={},g=t.maxTextureSize,_={[ji]:Bn,[Bn]:ji,[Vi]:Vi},v=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new hi;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bn(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let x=this.type;this.render=function(U,I,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Ar),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=x!==Hi&&this.type===Hi,ue=x===Hi&&this.type!==Hi;for(let de=0,ie=U.length;de<ie;de++){const ae=U[de],O=ae.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const oe=O.getFrameExtents();if(a.multiply(oe),l.copy(O.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/oe.x),a.x=l.x*oe.x,O.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/oe.y),a.y=l.y*oe.y,O.mapSize.y=l.y)),O.map===null||te===!0||ue===!0){const F=this.type!==Hi?{minFilter:di,magFilter:di}:{};O.map!==null&&O.map.dispose(),O.map=new ts(a.x,a.y,F),O.map.texture.name=ae.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const re=O.getViewportCount();for(let F=0;F<re;F++){const ne=O.getViewport(F);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),le.viewport(c),O.updateMatrices(ae,F),r=O.getFrustum(),C(I,X,O.camera,ae,this.type)}O.isPointLightShadow!==!0&&this.type===Hi&&N(O,X),O.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(b,R,z)};function N(U,I){const X=e.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ts(a.x,a.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(I,null,X,v,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(I,null,X,S,w,null)}function D(U,I,X,b){let R=null;const z=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const le=R.uuid,te=I.uuid;let ue=p[le];ue===void 0&&(ue={},p[le]=ue);let de=ue[te];de===void 0&&(de=R.clone(),ue[te]=de,I.addEventListener("dispose",G)),R=de}if(R.visible=I.visible,R.wireframe=I.wireframe,b===Hi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=s.properties.get(R);le.light=X}return R}function C(U,I,X,b,R){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===Hi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const te=e.update(U),ue=U.material;if(Array.isArray(ue)){const de=te.groups;for(let ie=0,ae=de.length;ie<ae;ie++){const O=de[ie],oe=ue[O.materialIndex];if(oe&&oe.visible){const re=D(U,oe,b,R);U.onBeforeShadow(s,U,I,X,te,re,O),s.renderBufferDirect(X,null,te,re,U,O),U.onAfterShadow(s,U,I,X,te,re,O)}}}else if(ue.visible){const de=D(U,ue,b,R);U.onBeforeShadow(s,U,I,X,te,de,null),s.renderBufferDirect(X,null,te,de,U,null),U.onAfterShadow(s,U,I,X,te,de,null)}}const le=U.children;for(let te=0,ue=le.length;te<ue;te++)C(le[te],I,X,b,R)}function G(U){U.target.removeEventListener("dispose",G);for(const X in p){const b=p[X],R=U.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const JE={[Mf]:Ef,[Tf]:Rf,[wf]:Cf,[Zs]:Af,[Ef]:Mf,[Rf]:Tf,[Cf]:wf,[Af]:Zs};function eT(s,e){function t(){let V=!1;const Ae=new Wt;let se=null;const he=new Wt(0,0,0,0);return{setMask:function(Pe){se!==Pe&&!V&&(s.colorMask(Pe,Pe,Pe,Pe),se=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,be,it,Dt,qt){qt===!0&&(Pe*=Dt,be*=Dt,it*=Dt),Ae.set(Pe,be,it,Dt),he.equals(Ae)===!1&&(s.clearColor(Pe,be,it,Dt),he.copy(Ae))},reset:function(){V=!1,se=null,he.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,se=null,he=null,Pe=null;return{setReversed:function(be){if(Ae!==be){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Pe;Pe=null,this.setClear(Dt)}Ae=be},getReversed:function(){return Ae},setTest:function(be){be?ve(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(be){se!==be&&!V&&(s.depthMask(be),se=be)},setFunc:function(be){if(Ae&&(be=JE[be]),he!==be){switch(be){case Mf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case Tf:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case wf:s.depthFunc(s.EQUAL);break;case Af:s.depthFunc(s.GEQUAL);break;case Rf:s.depthFunc(s.GREATER);break;case Cf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=be}},setLocked:function(be){V=be},setClear:function(be){Pe!==be&&(Ae&&(be=1-be),s.clearDepth(be),Pe=be)},reset:function(){V=!1,se=null,he=null,Pe=null,Ae=!1}}}function a(){let V=!1,Ae=null,se=null,he=null,Pe=null,be=null,it=null,Dt=null,qt=null;return{setTest:function(yt){V||(yt?ve(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(yt){Ae!==yt&&!V&&(s.stencilMask(yt),Ae=yt)},setFunc:function(yt,Ln,Mn){(se!==yt||he!==Ln||Pe!==Mn)&&(s.stencilFunc(yt,Ln,Mn),se=yt,he=Ln,Pe=Mn)},setOp:function(yt,Ln,Mn){(be!==yt||it!==Ln||Dt!==Mn)&&(s.stencilOp(yt,Ln,Mn),be=yt,it=Ln,Dt=Mn)},setLocked:function(yt){V=yt},setClear:function(yt){qt!==yt&&(s.clearStencil(yt),qt=yt)},reset:function(){V=!1,Ae=null,se=null,he=null,Pe=null,be=null,it=null,Dt=null,qt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,w=!1,y=null,x=null,N=null,D=null,C=null,G=null,U=null,I=new lt(0,0,0),X=0,b=!1,R=null,z=null,le=null,te=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ae=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(O)[1]),ie=ae>=1):O.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ie=ae>=2);let oe=null,re={};const F=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Le=new Wt().fromArray(F),Z=new Wt().fromArray(ne);function ce(V,Ae,se,he){const Pe=new Uint8Array(4),be=s.createTexture();s.bindTexture(V,be),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<se;it++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Ae+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return be}const Se={};Se[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),c.setFunc(Zs),pt(!1),ct(Kp),ve(s.CULL_FACE),B(Ar);function ve(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function Te(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Ie(V,Ae){return _[V]!==Ae?(s.bindFramebuffer(V,Ae),_[V]=Ae,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ae),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let se=S,he=!1;if(V){se=v.get(Ae),se===void 0&&(se=[],v.set(Ae,se));const Pe=V.textures;if(se.length!==Pe.length||se[0]!==s.COLOR_ATTACHMENT0){for(let be=0,it=Pe.length;be<it;be++)se[be]=s.COLOR_ATTACHMENT0+be;se.length=Pe.length,he=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,he=!0);he&&s.drawBuffers(se)}function At(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const mt={[$r]:s.FUNC_ADD,[Gv]:s.FUNC_SUBTRACT,[Wv]:s.FUNC_REVERSE_SUBTRACT};mt[Xv]=s.MIN,mt[jv]=s.MAX;const Pt={[Yv]:s.ZERO,[qv]:s.ONE,[$v]:s.SRC_COLOR,[yf]:s.SRC_ALPHA,[t0]:s.SRC_ALPHA_SATURATE,[Jv]:s.DST_COLOR,[Zv]:s.DST_ALPHA,[Kv]:s.ONE_MINUS_SRC_COLOR,[Sf]:s.ONE_MINUS_SRC_ALPHA,[e0]:s.ONE_MINUS_DST_COLOR,[Qv]:s.ONE_MINUS_DST_ALPHA,[n0]:s.CONSTANT_COLOR,[i0]:s.ONE_MINUS_CONSTANT_COLOR,[r0]:s.CONSTANT_ALPHA,[s0]:s.ONE_MINUS_CONSTANT_ALPHA};function B(V,Ae,se,he,Pe,be,it,Dt,qt,yt){if(V===Ar){w===!0&&(Te(s.BLEND),w=!1);return}if(w===!1&&(ve(s.BLEND),w=!0),V!==Vv){if(V!==y||yt!==b){if((x!==$r||C!==$r)&&(s.blendEquation(s.FUNC_ADD),x=$r,C=$r),yt)switch(V){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,D=null,G=null,U=null,I.set(0,0,0),X=0,y=V,b=yt}return}Pe=Pe||Ae,be=be||se,it=it||he,(Ae!==x||Pe!==C)&&(s.blendEquationSeparate(mt[Ae],mt[Pe]),x=Ae,C=Pe),(se!==N||he!==D||be!==G||it!==U)&&(s.blendFuncSeparate(Pt[se],Pt[he],Pt[be],Pt[it]),N=se,D=he,G=be,U=it),(Dt.equals(I)===!1||qt!==X)&&(s.blendColor(Dt.r,Dt.g,Dt.b,qt),I.copy(Dt),X=qt),y=V,b=!1}function Sn(V,Ae){V.side===Vi?Te(s.CULL_FACE):ve(s.CULL_FACE);let se=V.side===Bn;Ae&&(se=!se),pt(se),V.blending===qs&&V.transparent===!1?B(Ar):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const he=V.stencilWrite;f.setTest(he),he&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function ct(V){V!==zv?(ve(s.CULL_FACE),V!==z&&(V===Kp?s.cullFace(s.BACK):V===Hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),z=V}function je(V){V!==le&&(ie&&s.lineWidth(V),le=V)}function wt(V,Ae,se){V?(ve(s.POLYGON_OFFSET_FILL),(te!==Ae||ue!==se)&&(s.polygonOffset(Ae,se),te=Ae,ue=se)):Te(s.POLYGON_OFFSET_FILL)}function Ge(V){V?ve(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function P(V){V===void 0&&(V=s.TEXTURE0+de-1),oe!==V&&(s.activeTexture(V),oe=V)}function T(V,Ae,se){se===void 0&&(oe===null?se=s.TEXTURE0+de-1:se=oe);let he=re[se];he===void 0&&(he={type:void 0,texture:void 0},re[se]=he),(he.type!==V||he.texture!==Ae)&&(oe!==se&&(s.activeTexture(se),oe=se),s.bindTexture(V,Ae||Se[V]),he.type=V,he.texture=Ae)}function Q(){const V=re[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Le.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function ke(V){Z.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ft(V,Ae){let se=p.get(Ae);se===void 0&&(se=new WeakMap,p.set(Ae,se));let he=se.get(V);he===void 0&&(he=s.getUniformBlockIndex(Ae,V.name),se.set(V,he))}function nt(V,Ae){const he=p.get(Ae).get(V);h.get(Ae)!==he&&(s.uniformBlockBinding(Ae,he,V.__bindingPointIndex),h.set(Ae,he))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},oe=null,re={},_={},v=new WeakMap,S=[],E=null,w=!1,y=null,x=null,N=null,D=null,C=null,G=null,U=null,I=new lt(0,0,0),X=0,b=!1,R=null,z=null,le=null,te=null,ue=null,Le.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ve,disable:Te,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:At,setBlending:B,setMaterial:Sn,setFlipSided:pt,setCullFace:ct,setLineWidth:je,setPolygonOffset:wt,setScissorTest:Ge,activeTexture:P,bindTexture:T,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:nt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:ke,reset:Tt}}function tT(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):Qo("canvas")}function w(P,T,Q){let pe=1;const ge=Ge(P);if((ge.width>Q||ge.height>Q)&&(pe=Q/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);_===void 0&&(_=E(fe,We));const we=T?E(fe,We):_;return we.width=fe,we.height=We,we.getContext("2d").drawImage(P,0,0,fe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+We+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,T,Q,pe,ge=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=T;if(T===s.RED&&(Q===s.FLOAT&&(fe=s.R32F),Q===s.HALF_FLOAT&&(fe=s.R16F),Q===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.R8UI),Q===s.UNSIGNED_SHORT&&(fe=s.R16UI),Q===s.UNSIGNED_INT&&(fe=s.R32UI),Q===s.BYTE&&(fe=s.R8I),Q===s.SHORT&&(fe=s.R16I),Q===s.INT&&(fe=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(fe=s.RG32F),Q===s.HALF_FLOAT&&(fe=s.RG16F),Q===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Q===s.UNSIGNED_INT&&(fe=s.RG32UI),Q===s.BYTE&&(fe=s.RG8I),Q===s.SHORT&&(fe=s.RG16I),Q===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Q===s.UNSIGNED_INT&&(fe=s.RGB32UI),Q===s.BYTE&&(fe=s.RGB8I),Q===s.SHORT&&(fe=s.RGB16I),Q===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Q===s.BYTE&&(fe=s.RGBA8I),Q===s.SHORT&&(fe=s.RGBA16I),Q===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const We=ge?jl:vt.getTransfer(pe);Q===s.FLOAT&&(fe=s.RGBA32F),Q===s.HALF_FLOAT&&(fe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(fe=We===Rt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(P,T){let Q;return P?T===null||T===es||T===eo?Q=s.DEPTH24_STENCIL8:T===Gi?Q=s.DEPTH32F_STENCIL8:T===Ko&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===eo?Q=s.DEPTH_COMPONENT24:T===Gi?Q=s.DEPTH_COMPONENT32F:T===Ko&&(Q=s.DEPTH_COMPONENT16),Q}function G(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==di&&P.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function U(P){const T=P.target;T.removeEventListener("dispose",U),X(T),T.isVideoTexture&&g.delete(T)}function I(P){const T=P.target;T.removeEventListener("dispose",I),R(T)}function X(P){const T=r.get(P);if(T.__webglInit===void 0)return;const Q=P.source,pe=v.get(Q);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&v.delete(Q)}r.remove(P)}function b(P){const T=r.get(P);s.deleteTexture(T.__webglTexture);const Q=P.source,pe=v.get(Q);delete pe[T.__cacheKey],c.memory.textures--}function R(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=P.textures;for(let pe=0,ge=Q.length;pe<ge;pe++){const fe=r.get(Q[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(Q[pe])}r.remove(P)}let z=0;function le(){z=0}function te(){const P=z;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),z+=1,P}function ue(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function de(P,T){const Q=r.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,P,T);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function ie(P,T){const Q=r.get(P);if(P.version>0&&Q.__version!==P.version){Z(Q,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function ae(P,T){const Q=r.get(P);if(P.version>0&&Q.__version!==P.version){Z(Q,P,T);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function O(P,T){const Q=r.get(P);if(P.version>0&&Q.__version!==P.version){ce(Q,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const oe={[Xl]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[Lf]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[m0]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[kc]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},F={[x0]:s.NEVER,[w0]:s.ALWAYS,[y0]:s.LESS,[Rg]:s.LEQUAL,[S0]:s.EQUAL,[T0]:s.GEQUAL,[M0]:s.GREATER,[E0]:s.NOTEQUAL};function ne(P,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===kc||T.magFilter===fl||T.magFilter===Qr||T.minFilter===Si||T.minFilter===kc||T.minFilter===fl||T.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,oe[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,oe[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,oe[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==fl&&T.minFilter!==Qr||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Le(P,T){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U));const pe=T.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const fe=ue(T);if(fe!==P.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ge[fe].usedTimes++;const We=ge[P.__cacheKey];We!==void 0&&(ge[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(T)),P.__cacheKey=fe,P.__webglTexture=ge[fe].texture}return Q}function Z(P,T,Q){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Le(P,T),fe=T.source;t.bindTexture(pe,P.__webglTexture,s.TEXTURE0+Q);const We=r.get(fe);if(fe.version!==We.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);const we=vt.getPrimaries(vt.workingColorSpace),Ne=T.colorSpace===wr?null:vt.getPrimaries(T.colorSpace),ut=T.colorSpace===wr||we===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=w(T.image,!1,a.maxTextureSize);Me=wt(T,Me);const Oe=l.convert(T.format,T.colorSpace),qe=l.convert(T.type);let Je=D(T.internalFormat,Oe,qe,T.colorSpace,T.isVideoTexture);ne(pe,T);let ke;const ft=T.mipmaps,nt=T.isVideoTexture!==!0,Tt=We.__version===void 0||ge===!0,V=fe.dataReady,Ae=G(T,Me);if(T.isDepthTexture)Je=C(T.format===to,T.type),Tt&&(nt?t.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(T.isDataTexture)if(ft.length>0){nt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ae,Je,ft[0].width,ft[0].height);for(let se=0,he=ft.length;se<he;se++)ke=ft[se],nt?V&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Oe,qe,ke.data);T.generateMipmaps=!1}else nt?(Tt&&t.texStorage2D(s.TEXTURE_2D,Ae,Je,Me.width,Me.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):t.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,ft[0].width,ft[0].height,Me.depth);for(let se=0,he=ft.length;se<he;se++)if(ke=ft[se],T.format!==fi)if(Oe!==null)if(nt){if(V)if(T.layerUpdates.size>0){const Pe=Um(ke.width,ke.height,T.format,T.type);for(const be of T.layerUpdates){const it=ke.data.subarray(be*Pe/ke.data.BYTES_PER_ELEMENT,(be+1)*Pe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,be,ke.width,ke.height,1,Oe,it)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Me.depth,Oe,qe,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,Me.depth,0,Oe,qe,ke.data)}else{nt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ae,Je,ft[0].width,ft[0].height);for(let se=0,he=ft.length;se<he;se++)ke=ft[se],T.format!==fi?Oe!==null?nt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Oe,qe,ke.data)}else if(T.isDataArrayTexture)if(nt){if(Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),V)if(T.layerUpdates.size>0){const se=Um(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const Pe=Me.data.subarray(he*se/Me.data.BYTES_PER_ELEMENT,(he+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Oe,qe,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(T.isData3DTexture)nt?(Tt&&t.texStorage3D(s.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(T.isFramebufferTexture){if(Tt)if(nt)t.texStorage2D(s.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let se=Me.width,he=Me.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Je,se,he,0,Oe,qe,null),se>>=1,he>>=1}}else if(ft.length>0){if(nt&&Tt){const se=Ge(ft[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Je,se.width,se.height)}for(let se=0,he=ft.length;se<he;se++)ke=ft[se],nt?V&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe,qe,ke):t.texImage2D(s.TEXTURE_2D,se,Je,Oe,qe,ke);T.generateMipmaps=!1}else if(nt){if(Tt){const se=Ge(Me);t.texStorage2D(s.TEXTURE_2D,Ae,Je,se.width,se.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,qe,Me)}else t.texImage2D(s.TEXTURE_2D,0,Je,Oe,qe,Me);y(T)&&x(pe),We.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,Q){if(T.image.length!==6)return;const pe=Le(P,T),ge=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Q);const fe=r.get(ge);if(ge.version!==fe.__version||pe===!0){t.activeTexture(s.TEXTURE0+Q);const We=vt.getPrimaries(vt.workingColorSpace),we=T.colorSpace===wr?null:vt.getPrimaries(T.colorSpace),Ne=T.colorSpace===wr||We===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!ut&&!Me?Oe[he]=w(T.image[he],!0,a.maxCubemapSize):Oe[he]=Me?T.image[he].image:T.image[he],Oe[he]=wt(T,Oe[he]);const qe=Oe[0],Je=l.convert(T.format,T.colorSpace),ke=l.convert(T.type),ft=D(T.internalFormat,Je,ke,T.colorSpace),nt=T.isVideoTexture!==!0,Tt=fe.__version===void 0||pe===!0,V=ge.dataReady;let Ae=G(T,qe);ne(s.TEXTURE_CUBE_MAP,T);let se;if(ut){nt&&Tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ft,qe.width,qe.height);for(let he=0;he<6;he++){se=Oe[he].mipmaps;for(let Pe=0;Pe<se.length;Pe++){const be=se[Pe];T.format!==fi?Je!==null?nt?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,be.width,be.height,Je,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,be.width,be.height,Je,ke,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,ft,be.width,be.height,0,Je,ke,be.data)}}}else{if(se=T.mipmaps,nt&&Tt){se.length>0&&Ae++;const he=Ge(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Me){nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Je,ke,Oe[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Oe[he].width,Oe[he].height,0,Je,ke,Oe[he].data);for(let Pe=0;Pe<se.length;Pe++){const it=se[Pe].image[he].image;nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,it.width,it.height,Je,ke,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,ft,it.width,it.height,0,Je,ke,it.data)}}else{nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,ke,Oe[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Je,ke,Oe[he]);for(let Pe=0;Pe<se.length;Pe++){const be=se[Pe];nt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Je,ke,be.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,ft,Je,ke,be.image[he])}}}y(T)&&x(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Se(P,T,Q,pe,ge,fe){const We=l.convert(Q.format,Q.colorSpace),we=l.convert(Q.type),Ne=D(Q.internalFormat,We,we,Q.colorSpace),ut=r.get(T),Me=r.get(Q);if(Me.__renderTarget=T,!ut.__hasExternalTextures){const Oe=Math.max(1,T.width>>fe),qe=Math.max(1,T.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Ne,Oe,qe,T.depth,0,We,we,null):t.texImage2D(ge,fe,Ne,Oe,qe,0,We,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,pt(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(P,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=C(T.stencilBuffer,ge),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=pt(T);ct(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,fe,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,P)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],We=l.convert(fe.format,fe.colorSpace),we=l.convert(fe.type),Ne=D(fe.internalFormat,We,we,fe.colorSpace),ut=pt(T);Q&&ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ne,T.width,T.height):ct(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const ge=pe.__webglTexture,fe=pt(T);if(T.depthTexture.format===$s)ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===to)ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const T=r.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,P)}else if(Q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(P,T,Q){const pe=r.get(P);T!==void 0&&Se(pe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ie(P)}function At(P){const T=P.texture,Q=r.get(P),pe=r.get(T);P.addEventListener("dispose",I);const ge=P.textures,fe=P.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,c.memory.textures++),fe){Q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[we]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)Q.__webglFramebuffer[we][Ne]=s.createFramebuffer()}else Q.__webglFramebuffer[we]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)Q.__webglFramebuffer[we]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const ut=r.get(ge[we]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&ct(P)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];Q.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[we]);const ut=l.convert(Ne.format,Ne.colorSpace),Me=l.convert(Ne.type),Oe=D(Ne.internalFormat,ut,Me,Ne.colorSpace,P.isXRRenderTarget===!0),qe=pt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Q.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Se(Q.__webglFramebuffer[we][Ne],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Se(Q.__webglFramebuffer[we],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(T)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const ut=ge[we],Me=r.get(ut);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ne(s.TEXTURE_2D,ut),Se(Q.__webglFramebuffer,P,ut,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),y(ut)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ne(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Se(Q.__webglFramebuffer[Ne],P,T,s.COLOR_ATTACHMENT0,we,Ne);else Se(Q.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,we,0);y(T)&&x(we),t.unbindTexture()}P.depthBuffer&&Ie(P)}function mt(P){const T=P.textures;for(let Q=0,pe=T.length;Q<pe;Q++){const ge=T[Q];if(y(ge)){const fe=N(P),We=r.get(ge).__webglTexture;t.bindTexture(fe,We),x(fe),t.unbindTexture()}}}const Pt=[],B=[];function Sn(P){if(P.samples>0){if(ct(P)===!1){const T=P.textures,Q=P.width,pe=P.height;let ge=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(P),we=T.length>1;if(we)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const ut=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ge,s.NEAREST),h===!0&&(Pt.length=0,B.length=0,Pt.push(s.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(fe),B.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const ut=r.get(T[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(P){return Math.min(a.maxSamples,P.samples)}function ct(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(P){const T=c.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function wt(P,T){const Q=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==no&&Q!==wr&&(vt.getTransfer(Q)===Rt?(pe!==fi||ge!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=de,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=O,this.rebindTextures=Ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function nT(s,e){function t(r,a=wr){let l;const c=vt.getTransfer(a);if(r===Yi)return s.UNSIGNED_BYTE;if(r===cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return s.BYTE;if(r===_g)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===ud)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Jo)return s.HALF_FLOAT;if(r===xg)return s.ALPHA;if(r===yg)return s.RGB;if(r===fi)return s.RGBA;if(r===Sg)return s.LUMINANCE;if(r===Mg)return s.LUMINANCE_ALPHA;if(r===$s)return s.DEPTH_COMPONENT;if(r===to)return s.DEPTH_STENCIL;if(r===Eg)return s.RED;if(r===dd)return s.RED_INTEGER;if(r===Tg)return s.RG;if(r===hd)return s.RG_INTEGER;if(r===pd)return s.RGBA_INTEGER;if(r===kl||r===Bl||r===zl||r===Hl)if(c===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Df||r===Uf||r===If||r===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Df)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===If)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ff||r===Of||r===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ff||r===Of)return c===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bf||r===zf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf||r===Yf||r===qf||r===$f||r===Kf||r===Zf||r===Qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Bf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$f)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vl||r===Jf||r===ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Vl)return c===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wg||r===td||r===nd||r===id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Vl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===td)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===eo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const iT={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
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

}`;class oT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Pn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new $i({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new na(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aT extends is{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,_=null,v=null,S=null,E=null;const w=new oT,y=t.getContextAttributes();let x=null,N=null;const D=[],C=[],G=new rt;let U=null;const I=new ei;I.viewport=new Wt;const X=new ei;X.viewport=new Wt;const b=[I,X],R=new Rx;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=D[Z];return ce===void 0&&(ce=new mf,D[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=D[Z];return ce===void 0&&(ce=new mf,D[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=D[Z];return ce===void 0&&(ce=new mf,D[Z]=ce),ce.getHandSpace()};function te(Z){const ce=C.indexOf(Z.inputSource);if(ce===-1)return;const Se=D[ce];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,p||c),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",de);for(let Z=0;Z<D.length;Z++){const ce=C[Z];ce!==null&&(C[Z]=null,D[Z].disconnect(ce))}z=null,le=null,w.reset(),e.setRenderTarget(x),S=null,v=null,_=null,a=null,N=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(G),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?to:$s,ve=y.stencil?eo:es);const Ie={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Ie),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ts(v.textureWidth,v.textureHeight,{format:fi,type:Yi,depthTexture:new Bg(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ts(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Le.setContext(a),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(Z){for(let ce=0;ce<Z.removed.length;ce++){const Se=Z.removed[ce],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,D[ve].disconnect(Se))}for(let ce=0;ce<Z.added.length;ce++){const Se=Z.added[ce];let ve=C.indexOf(Se);if(ve===-1){for(let Ie=0;Ie<D.length;Ie++)if(Ie>=C.length){C.push(Se),ve=Ie;break}else if(C[Ie]===null){C[Ie]=Se,ve=Ie;break}if(ve===-1)break}const Te=D[ve];Te&&Te.connect(Se)}}const ie=new Y,ae=new Y;function O(Z,ce,Se){ie.setFromMatrixPosition(ce.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);const ve=ie.distanceTo(ae),Te=ce.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),At=Te[14]/(Te[10]+1),mt=(Te[9]+1)/Te[5],Pt=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],Sn=(Ie[8]+1)/Ie[0],pt=Ze*B,ct=Ze*Sn,je=ve/(-B+Sn),wt=je*-B;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ge=Ze+je,P=At+je,T=pt-wt,Q=ct+(ve-wt),pe=mt*At/P*Ge,ge=Pt*At/P*Ge;Z.projectionMatrix.makePerspective(T,Q,pe,ge,Ge,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ce=Z.near,Se=Z.far;w.texture!==null&&(w.depthNear>0&&(ce=w.depthNear),w.depthFar>0&&(Se=w.depthFar)),R.near=X.near=I.near=ce,R.far=X.far=I.far=Se,(z!==R.near||le!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,le=R.far),I.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=I.layers.mask|X.layers.mask;const ve=Z.parent,Te=R.cameras;oe(R,ve);for(let Ie=0;Ie<Te.length;Ie++)oe(Te[Ie],ve);Te.length===2?O(R,I,X):R.projectionMatrix.copy(I.projectionMatrix),re(Z,R,ve)};function re(Z,ce,Se){Se===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(Z){h=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let F=null;function ne(Z,ce){if(g=ce.getViewerPose(p||c),E=ce,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ie=0;Ie<Se.length;Ie++){const Ze=Se[Ie];let At=null;if(S!==null)At=S.getViewport(Ze);else{const Pt=_.getViewSubImage(v,Ze);At=Pt.viewport,Ie===0&&(e.setRenderTargetTextures(N,Pt.colorTexture,v.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(N))}let mt=b[Ie];mt===void 0&&(mt=new ei,mt.layers.enable(Ie),mt.viewport=new Wt,b[Ie]=mt),mt.matrix.fromArray(Ze.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ze.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(At.x,At.y,At.width,At.height),Ie===0&&(R.matrix.copy(mt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(mt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=_.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,a.renderState)}}for(let Se=0;Se<D.length;Se++){const ve=C[Se],Te=D[Se];ve!==null&&Te!==void 0&&Te.update(ve,ce,p||c)}F&&F(Z,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Le=new Xg;Le.setAnimationLoop(ne),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const Yr=new Ei,lT=new Ot;function uT(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Fg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,N,D,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),g(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,N,D):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Bn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Bn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=e.get(x),D=N.envMap,C=N.envMapRotation;D&&(y.envMap.value=D,Yr.copy(C),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(Yr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,N,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=D*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const N=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function cT(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,D){const C=D.program;r.uniformBlockBinding(N,C)}function p(N,D){let C=a[N.id];C===void 0&&(E(N),C=g(N),a[N.id]=C,N.addEventListener("dispose",y));const G=D.program;r.updateUBOMapping(N,G);const U=e.render.frame;l[N.id]!==U&&(v(N),l[N.id]=U)}function g(N){const D=_();N.__bindingPointIndex=D;const C=s.createBuffer(),G=N.__size,U=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function _(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=a[N.id],C=N.uniforms,G=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let U=0,I=C.length;U<I;U++){const X=Array.isArray(C[U])?C[U]:[C[U]];for(let b=0,R=X.length;b<R;b++){const z=X[b];if(S(z,U,b,G)===!0){const le=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let de=0;de<te.length;de++){const ie=te[de],ae=w(ie);typeof ie=="number"||typeof ie=="boolean"?(z.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,le+ue,z.__data)):ie.isMatrix3?(z.__data[0]=ie.elements[0],z.__data[1]=ie.elements[1],z.__data[2]=ie.elements[2],z.__data[3]=0,z.__data[4]=ie.elements[3],z.__data[5]=ie.elements[4],z.__data[6]=ie.elements[5],z.__data[7]=0,z.__data[8]=ie.elements[6],z.__data[9]=ie.elements[7],z.__data[10]=ie.elements[8],z.__data[11]=0):(ie.toArray(z.__data,ue),ue+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,D,C,G){const U=N.value,I=D+"_"+C;if(G[I]===void 0)return typeof U=="number"||typeof U=="boolean"?G[I]=U:G[I]=U.clone(),!0;{const X=G[I];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return G[I]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function E(N){const D=N.uniforms;let C=0;const G=16;for(let I=0,X=D.length;I<X;I++){const b=Array.isArray(D[I])?D[I]:[D[I]];for(let R=0,z=b.length;R<z;R++){const le=b[R],te=Array.isArray(le.value)?le.value:[le.value];for(let ue=0,de=te.length;ue<de;ue++){const ie=te[ue],ae=w(ie),O=C%G,oe=O%ae.boundary,re=O+oe;C+=oe,re!==0&&G-re<ae.storage&&(C+=G-re),le.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=ae.storage}}}const U=C%G;return U>0&&(C+=G-U),N.__size=C,N.__cache={},this}function w(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function x(){for(const N in a)s.deleteBuffer(a[N]);c=[],a={},l={}}return{bind:h,update:p,dispose:x}}class fT{constructor(e={}){const{canvas:t=G0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const N=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Rr,this.toneMappingExposure=1;const C=this;let G=!1,U=0,I=0,X=null,b=-1,R=null;const z=new Wt,le=new Wt;let te=null;const ue=new lt(0);let de=0,ie=t.width,ae=t.height,O=1,oe=null,re=null;const F=new Wt(0,0,ie,ae),ne=new Wt(0,0,ie,ae);let Le=!1;const Z=new gd;let ce=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new Ot,Te=new Ot,Ie=new Y,Ze=new Wt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Pt(){return X===null?O:1}let B=r;function Sn(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ad}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const W="webgl2";if(B=Sn(W,A),B===null)throw Sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ct,je,wt,Ge,P,T,Q,pe,ge,fe,We,we,Ne,ut,Me,Oe,qe,Je,ke,ft,nt,Tt,V;function Ae(){pt=new yM(B),pt.init(),nt=new nT(B,pt),ct=new pM(B,pt,e,nt),je=new eT(B,pt),ct.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),wt=new EM(B),Ge=new HE,P=new tT(B,pt,je,Ge,ct,nt,wt),T=new gM(C),Q=new xM(C),pe=new Px(B),Tt=new dM(B,pe),ge=new SM(B,pe,wt,Tt),fe=new wM(B,ge,pe,wt),Je=new TM(B,ct,P),Me=new mM(Ge),We=new zE(C,T,Q,pt,ct,Tt,Me),we=new uT(C,Ge),Ne=new GE,ut=new $E(pt),qe=new fM(C,T,Q,je,fe,S,h),Oe=new QE(C,fe,ct),V=new cT(B,wt,ct,je),ke=new hM(B,pt,wt),ft=new MM(B,pt,wt),wt.programs=We.programs,C.capabilities=ct,C.extensions=pt,C.properties=Ge,C.renderLists=Ne,C.shadowMap=Oe,C.state=je,C.info=wt}Ae();const se=new aT(C,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(ie,ae,!1))},this.getSize=function(A){return A.set(ie,ae)},this.setSize=function(A,W,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ae=W,t.width=Math.floor(A*O),t.height=Math.floor(W*O),J===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ie*O,ae*O).floor()},this.setDrawingBufferSize=function(A,W,J){ie=A,ae=W,O=J,t.width=Math.floor(A*J),t.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,W,J,$){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,W,J,$),je.viewport(z.copy(F).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,J,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,J,$),je.scissor(le.copy(ne).multiplyScalar(O).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){je.setScissorTest(Le=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,W=!0,J=!0){let $=0;if(A){let j=!1;if(X!==null){const ye=X.texture.format;j=ye===pd||ye===hd||ye===dd}if(j){const ye=X.texture.type,Re=ye===Yi||ye===es||ye===Ko||ye===eo||ye===cd||ye===fd,De=qe.getClearColor(),Be=qe.getClearAlpha(),et=De.r,Qe=De.g,He=De.b;Re?(E[0]=et,E[1]=Qe,E[2]=He,E[3]=Be,B.clearBufferuiv(B.COLOR,0,E)):(w[0]=et,w[1]=Qe,w[2]=He,w[3]=Be,B.clearBufferiv(B.COLOR,0,w))}else $|=B.COLOR_BUFFER_BIT}W&&($|=B.DEPTH_BUFFER_BIT),J&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),qe.dispose(),Ne.dispose(),ut.dispose(),Ge.dispose(),T.dispose(),Q.dispose(),fe.dispose(),Tt.dispose(),V.dispose(),We.dispose(),se.dispose(),se.removeEventListener("sessionstart",rs),se.removeEventListener("sessionend",Ki),Ti.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=wt.autoReset,W=Oe.enabled,J=Oe.autoUpdate,$=Oe.needsUpdate,j=Oe.type;Ae(),wt.autoReset=A,Oe.enabled=W,Oe.autoUpdate=J,Oe.needsUpdate=$,Oe.type=j}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const W=A.target;W.removeEventListener("dispose",it),Dt(W)}function Dt(A){qt(A),Ge.remove(A)}function qt(A){const W=Ge.get(A).programs;W!==void 0&&(W.forEach(function(J){We.releaseProgram(J)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,$,j,ye){W===null&&(W=At);const Re=j.isMesh&&j.matrixWorld.determinant()<0,De=sa(A,W,J,$,j);je.setMaterial($,Re);let Be=J.index,et=1;if($.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let _t=Qe.start*et,st=(Qe.start+Qe.count)*et;ye!==null&&(_t=Math.max(_t,ye.start*et),st=Math.min(st,(ye.start+ye.count)*et)),Be!==null?(_t=Math.max(_t,0),st=Math.min(st,Be.count)):He!=null&&(_t=Math.max(_t,0),st=Math.min(st,He.count));const zt=st-_t;if(zt<0||zt===1/0)return;Tt.setup(j,$,De,J,Be);let Nt,xt=ke;if(Be!==null&&(Nt=pe.get(Be),xt=ft,xt.setIndex(Nt)),j.isMesh)$.wireframe===!0?(je.setLineWidth($.wireframeLinewidth*Pt()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(j.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Pt()),j.isLineSegments?xt.setMode(B.LINES):j.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else j.isPoints?xt.setMode(B.POINTS):j.isSprite&&xt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Ht=j._multiDrawCounts,gt=j._multiDrawCount,hn=Be?pe.get(Be).bytesPerElement:1,Qi=Ge.get($).currentProgram.getUniforms();for(let En=0;En<gt;En++)Qi.setValue(B,"_gl_DrawID",En),xt.render(Ye[En]/hn,Ht[En])}else if(j.isInstancedMesh)xt.renderInstances(_t,zt,j.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ht=Math.min(J.instanceCount,Ye);xt.renderInstances(_t,zt,Ht)}else xt.render(_t,zt)};function yt(A,W,J){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,ss(A,W,J),A.side=ji,A.needsUpdate=!0,ss(A,W,J),A.side=Vi):ss(A,W,J)}this.compile=function(A,W,J=null){J===null&&(J=A),x=ut.get(J),x.init(W),D.push(x),J.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),A!==J&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const $=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const De=ye[Re];yt(De,J,j),$.add(De)}else yt(ye,J,j),$.add(ye)}),D.pop(),x=null,$},this.compileAsync=function(A,W,J=null){const $=this.compile(A,W,J);return new Promise(j=>{function ye(){if($.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){j(A);return}setTimeout(ye,10)}pt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ln=null;function Mn(A){Ln&&Ln(A)}function rs(){Ti.stop()}function Ki(){Ti.start()}const Ti=new Xg;Ti.setAnimationLoop(Mn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Ln=A,se.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},se.addEventListener("sessionstart",rs),se.addEventListener("sessionend",Ki),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,X),x=ut.get(A,D.length),x.init(W),D.push(x),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,Se),y=Ne.get(A,N.length),y.init(),N.push(y),se.enabled===!0&&se.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&wi(ye,W,-1/0,C.sortObjects)}wi(A,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(oe,re),mt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,mt&&qe.addToRenderList(y,A),this.info.render.frame++,ce===!0&&Me.beginShadows();const J=x.state.shadowsArray;Oe.render(J,A,W),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,j=y.transmissive;if(x.setupLights(),W.isArrayCamera){const ye=W.cameras;if(j.length>0)for(let Re=0,De=ye.length;Re<De;Re++){const Be=ye[Re];br($,j,A,Be)}mt&&qe.render(A);for(let Re=0,De=ye.length;Re<De;Re++){const Be=ye[Re];Cr(y,A,Be,Be.viewport)}}else j.length>0&&br($,j,A,W),mt&&qe.render(A),Cr(y,A,W);X!==null&&I===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,W),Tt.resetDefaultState(),b=-1,R=null,D.pop(),D.length>0?(x=D[D.length-1],ce===!0&&Me.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function wi(A,W,J,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){$&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=fe.update(A),De=A.material;De.visible&&y.push(A,Re,De,J,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=fe.update(A),De=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Be=Re.groups;for(let et=0,Qe=Be.length;et<Qe;et++){const He=Be[et],_t=De[He.materialIndex];_t&&_t.visible&&y.push(A,Re,_t,J,Ze.z,He)}}else De.visible&&y.push(A,Re,De,J,Ze.z,null)}}const ye=A.children;for(let Re=0,De=ye.length;Re<De;Re++)wi(ye[Re],W,J,$)}function Cr(A,W,J,$){const j=A.opaque,ye=A.transmissive,Re=A.transparent;x.setupLightsView(J),ce===!0&&Me.setGlobalState(C.clippingPlanes,J),$&&je.viewport(z.copy($)),j.length>0&&Zi(j,W,J),ye.length>0&&Zi(ye,W,J),Re.length>0&&Zi(Re,W,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function br(A,W,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new ts(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Jo:Yi,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ye=x.state.transmissionRenderTarget[$.id],Re=$.viewport||z;ye.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(ue),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),mt&&qe.render(J);const Be=C.toneMapping;C.toneMapping=Rr;const et=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),ce===!0&&Me.setGlobalState(C.clippingPlanes,$),Zi(A,J,$),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,_t=W.length;He<_t;He++){const st=W[He],zt=st.object,Nt=st.geometry,xt=st.material,Ye=st.group;if(xt.side===Vi&&zt.layers.test($.layers)){const Ht=xt.side;xt.side=Bn,xt.needsUpdate=!0,ia(zt,J,$,Nt,xt,Ye),xt.side=Ht,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye))}C.setRenderTarget(De),C.setClearColor(ue,de),et!==void 0&&($.viewport=et),C.toneMapping=Be}function Zi(A,W,J){const $=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ye=A.length;j<ye;j++){const Re=A[j],De=Re.object,Be=Re.geometry,et=$===null?Re.material:$,Qe=Re.group;De.layers.test(J.layers)&&ia(De,W,J,Be,et,Qe)}}function ia(A,W,J,$,j,ye){A.onBeforeRender(C,W,J,$,j,ye),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,W,J,$,A,ye),j.transparent===!0&&j.side===Vi&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,C.renderBufferDirect(J,W,$,j,A,ye),j.side=ji,j.needsUpdate=!0,C.renderBufferDirect(J,W,$,j,A,ye),j.side=Vi):C.renderBufferDirect(J,W,$,j,A,ye),A.onAfterRender(C,W,J,$,j,ye)}function ss(A,W,J){W.isScene!==!0&&(W=At);const $=Ge.get(A),j=x.state.lights,ye=x.state.shadowsArray,Re=j.state.version,De=We.getParameters(A,j.state,ye,W,J),Be=We.getProgramCacheKey(De);let et=$.programs;$.environment=A.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(A.isMeshStandardMaterial?Q:T).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",it),et=new Map,$.programs=et);let Qe=et.get(Be);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===Re)return pi(A,De),Qe}else De.uniforms=We.getUniforms(A),A.onBeforeCompile(De,C),Qe=We.acquireProgram(De,Be),et.set(Be,Qe),$.uniforms=De.uniforms;const He=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),pi(A,De),$.needsLights=nu(A),$.lightsStateVersion=Re,$.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Qe,$.uniformsList=null,Qe}function ra(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Wl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function pi(A,W){const J=Ge.get(A);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function sa(A,W,J,$,j){W.isScene!==!0&&(W=At),P.resetTextureUnits();const ye=W.fog,Re=$.isMeshStandardMaterial?W.environment:null,De=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:no,Be=($.isMeshStandardMaterial?Q:T).get($.envMap||Re),et=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!J.morphAttributes.position,_t=!!J.morphAttributes.normal,st=!!J.morphAttributes.color;let zt=Rr;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(zt=C.toneMapping);const Nt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Nt!==void 0?Nt.length:0,Ye=Ge.get($),Ht=x.state.lights;if(ce===!0&&(Se===!0||A!==R)){const un=A===R&&$.id===b;Me.setState($,A,un)}let gt=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ht.state.version||Ye.outputColorSpace!==De||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==Be||$.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==_t||Ye.morphColors!==st||Ye.toneMapping!==zt||Ye.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,Ye.__version=$.version);let hn=Ye.currentProgram;gt===!0&&(hn=ss($,W,j));let Qi=!1,En=!1,Ai=!1;const bt=hn.getUniforms(),pn=Ye.uniforms;if(je.useProgram(hn.program)&&(Qi=!0,En=!0,Ai=!0),$.id!==b&&(b=$.id,En=!0),Qi||R!==A){je.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),X0(ve),j0(ve),bt.setValue(B,"projectionMatrix",ve)):bt.setValue(B,"projectionMatrix",A.projectionMatrix),bt.setValue(B,"viewMatrix",A.matrixWorldInverse);const nn=bt.map.cameraPosition;nn!==void 0&&nn.setValue(B,Ie.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,En=!0,Ai=!0)}if(j.isSkinnedMesh){bt.setOptional(B,j,"bindMatrix"),bt.setOptional(B,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),bt.setValue(B,"boneTexture",un.boneTexture,P))}j.isBatchedMesh&&(bt.setOptional(B,j,"batchingTexture"),bt.setValue(B,"batchingTexture",j._matricesTexture,P),bt.setOptional(B,j,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",j._indirectTexture,P),bt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",j._colorsTexture,P));const tn=J.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Je.update(j,J,hn),(En||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,bt.setValue(B,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(pn.envMap.value=Be,pn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),En&&(bt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&oa(pn,Ai),ye&&$.fog===!0&&we.refreshFogUniforms(pn,ye),we.refreshMaterialUniforms(pn,$,O,ae,x.state.transmissionRenderTarget[A.id]),Wl.upload(B,ra(Ye),pn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Wl.upload(B,ra(Ye),pn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(B,"center",j.center),bt.setValue(B,"modelViewMatrix",j.modelViewMatrix),bt.setValue(B,"normalMatrix",j.normalMatrix),bt.setValue(B,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let nn=0,St=un.length;nn<St;nn++){const mi=un[nn];V.update(mi,hn),V.bind(mi,hn)}}return hn}function oa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function nu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,J){Ge.get(A.texture).__webglTexture=W,Ge.get(A.depthTexture).__webglTexture=J;const $=Ge.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const J=Ge.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const aa=B.createFramebuffer();this.setRenderTarget=function(A,W=0,J=0){X=A,U=W,I=J;let $=!0,j=null,ye=!1,Re=!1;if(A){const Be=Ge.get(A);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Be.__hasExternalTextures)P.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?j=Qe[W][J]:j=Qe[W],ye=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?j=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[J]:j=Qe,z.copy(A.viewport),le.copy(A.scissor),te=A.scissorTest}else z.copy(F).multiplyScalar(O).floor(),le.copy(ne).multiplyScalar(O).floor(),te=Le;if(J!==0&&(j=aa),je.bindFramebuffer(B.FRAMEBUFFER,j)&&$&&je.drawBuffers(A,j),je.viewport(z),je.scissor(le),je.setScissorTest(te),ye){const Be=Ge.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,J)}else if(Re){const Be=Ge.get(A.texture),et=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,J,et)}else if(A!==null&&J!==0){const Be=Ge.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(A,W,J,$,j,ye,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){je.bindFramebuffer(B.FRAMEBUFFER,De);try{const Be=A.texture,et=Be.format,Qe=Be.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&J>=0&&J<=A.height-j&&B.readPixels(W,J,$,j,nt.convert(et),nt.convert(Qe),ye)}finally{const Be=X!==null?Ge.get(X).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,W,J,$,j,ye,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Be=A.texture,et=Be.format,Qe=Be.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-$&&J>=0&&J<=A.height-j){je.bindFramebuffer(B.FRAMEBUFFER,De);const He=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(W,J,$,j,nt.convert(et),nt.convert(Qe),0);const _t=X!==null?Ge.get(X).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,_t);const st=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await W0(B,st,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(He),B.deleteSync(st),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,J=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-J),j=Math.floor(A.image.width*$),ye=Math.floor(A.image.height*$),Re=W!==null?W.x:0,De=W!==null?W.y:0;P.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Re,De,j,ye),je.unbindTexture()};const la=B.createFramebuffer(),ua=B.createFramebuffer();this.copyTextureToTexture=function(A,W,J=null,$=null,j=0,ye=null){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],W=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(j!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=j,j=0):ye=0);let Re,De,Be,et,Qe,He,_t,st,zt;const Nt=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const tn=Math.pow(2,-j);Re=Math.floor(Nt.width*tn),De=Math.floor(Nt.height*tn),A.isDataArrayTexture?Be=Nt.depth:A.isData3DTexture?Be=Math.floor(Nt.depth*tn):Be=1,et=0,Qe=0,He=0}$!==null?(_t=$.x,st=$.y,zt=$.z):(_t=0,st=0,zt=0);const xt=nt.convert(W.format),Ye=nt.convert(W.type);let Ht;W.isData3DTexture?(P.setTexture3D(W,0),Ht=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ht=B.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ht=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),hn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qi=B.getParameter(B.UNPACK_SKIP_PIXELS),En=B.getParameter(B.UNPACK_SKIP_ROWS),Ai=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He);const bt=A.isDataArrayTexture||A.isData3DTexture,pn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const tn=Ge.get(A),un=Ge.get(W),nn=Ge.get(tn.__renderTarget),St=Ge.get(un.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,nn.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mi=0;mi<Be;mi++)bt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,j,He+mi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,ye,zt+mi)),B.blitFramebuffer(et,Qe,Re,De,_t,st,Re,De,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ge.has(A)){const tn=Ge.get(A),un=Ge.get(W);je.bindFramebuffer(B.READ_FRAMEBUFFER,la),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,ua);for(let nn=0;nn<Be;nn++)bt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tn.__webglTexture,j,He+nn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tn.__webglTexture,j),pn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,ye,zt+nn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,ye),j!==0?B.blitFramebuffer(et,Qe,Re,De,_t,st,Re,De,B.COLOR_BUFFER_BIT,B.NEAREST):pn?B.copyTexSubImage3D(Ht,ye,_t,st,zt+nn,et,Qe,Re,De):B.copyTexSubImage2D(Ht,ye,_t,st,et,Qe,Re,De);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ht,ye,_t,st,zt,Re,De,Be,xt,Ye,Nt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,ye,_t,st,zt,Re,De,Be,xt,Nt.data):B.texSubImage3D(Ht,ye,_t,st,zt,Re,De,Be,xt,Ye,Nt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,_t,st,Re,De,xt,Ye,Nt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,_t,st,Nt.width,Nt.height,xt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,ye,_t,st,Re,De,xt,Ye,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,hn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,En),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ai),ye===0&&W.generateMipmaps&&B.generateMipmap(Ht),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J=null,$=null,j=0){return A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,A=arguments[2],W=arguments[3],j=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,J,$,j)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){U=0,I=0,X=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const rg={type:"change"},xd={type:"start"},Kg={type:"end"},Fl=new eu,sg=new Tr,dT=Math.cos(70*V0.DEG2RAD),Zt=new Y,kn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gf=1e-6;class hT extends Cx{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ns,this._lastTargetPosition=new Y,this._quat=new ns().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dm,this._sphericalDelta=new Dm,this._scale=1,this._panOffset=new Y,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new Y,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mT.bind(this),this._onPointerDown=pT.bind(this),this._onPointerUp=gT.bind(this),this._onContextMenu=ET.bind(this),this._onMouseWheel=xT.bind(this),this._onKeyDown=yT.bind(this),this._onTouchStart=ST.bind(this),this._onTouchMove=MT.bind(this),this._onMouseDown=_T.bind(this),this._onMouseMove=vT.bind(this),this._interceptControlDown=TT.bind(this),this._interceptControlUp=wT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rg),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=kn:r>Math.PI&&(r-=kn),a<-Math.PI?a+=kn:a>Math.PI&&(a-=kn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=Zt.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new Y(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),c=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Fl.origin.copy(this.object.position),Fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fl.direction))<dT?this.object.lookAt(this.target):(sg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fl.intersectPlane(sg,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>gf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gf||this._lastTargetPosition.distanceToSquared(this.target)>gf?(this.dispatchEvent(rg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Zt.copy(a).sub(this.target);let l=Zt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,c=r.width,f=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new rt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function pT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function mT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function gT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kg),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _T(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ct.DOLLY;break;case Ys.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ct.ROTATE}break;case Ys.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(xd)}function vT(s){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function xT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(s.preventDefault(),this.dispatchEvent(xd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Kg))}function yT(s){this.enabled!==!1&&this._handleKeyDown(s)}function ST(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ct.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ct.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(xd)}function MT(s){switch(this._trackPointer(s),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ct.NONE}}function ET(s){this.enabled!==!1&&s.preventDefault()}function TT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const AT=/^[og]\s*(.+)?/,RT=/^mtllib /,CT=/^usemtl /,bT=/^usemap /,og=/\s+/,ag=new Y,_f=new Y,lg=new Y,ug=new Y,Jn=new Y,Ol=new lt;function PT(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(a,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const f={index:this.materials.length,name:a||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const p={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),a&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return a&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},r&&r.name&&typeof r.clone=="function"){const a=r.clone(0);a.inherited=!0,this.object.materials.push(a)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseNormalIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/3)*3},parseUVIndex:function(e,t){const r=parseInt(e,10);return(r>=0?r-1:r+t/2)*2},addVertex:function(e,t,r){const a=this.vertices,l=this.object.geometry.vertices;l.push(a[e+0],a[e+1],a[e+2]),l.push(a[t+0],a[t+1],a[t+2]),l.push(a[r+0],a[r+1],a[r+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){const a=this.normals,l=this.object.geometry.normals;l.push(a[e+0],a[e+1],a[e+2]),l.push(a[t+0],a[t+1],a[t+2]),l.push(a[r+0],a[r+1],a[r+2])},addFaceNormal:function(e,t,r){const a=this.vertices,l=this.object.geometry.normals;ag.fromArray(a,e),_f.fromArray(a,t),lg.fromArray(a,r),Jn.subVectors(lg,_f),ug.subVectors(ag,_f),Jn.cross(ug),Jn.normalize(),l.push(Jn.x,Jn.y,Jn.z),l.push(Jn.x,Jn.y,Jn.z),l.push(Jn.x,Jn.y,Jn.z)},addColor:function(e,t,r){const a=this.colors,l=this.object.geometry.colors;a[e]!==void 0&&l.push(a[e+0],a[e+1],a[e+2]),a[t]!==void 0&&l.push(a[t+0],a[t+1],a[t+2]),a[r]!==void 0&&l.push(a[r+0],a[r+1],a[r+2])},addUV:function(e,t,r){const a=this.uvs,l=this.object.geometry.uvs;l.push(a[e+0],a[e+1]),l.push(a[t+0],a[t+1]),l.push(a[r+0],a[r+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,a,l,c,f,h,p){const g=this.vertices.length;let _=this.parseVertexIndex(e,g),v=this.parseVertexIndex(t,g),S=this.parseVertexIndex(r,g);if(this.addVertex(_,v,S),this.addColor(_,v,S),f!==void 0&&f!==""){const E=this.normals.length;_=this.parseNormalIndex(f,E),v=this.parseNormalIndex(h,E),S=this.parseNormalIndex(p,E),this.addNormal(_,v,S)}else this.addFaceNormal(_,v,S);if(a!==void 0&&a!==""){const E=this.uvs.length;_=this.parseUVIndex(a,E),v=this.parseUVIndex(l,E),S=this.parseUVIndex(c,E),this.addUV(_,v,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let r=0,a=e.length;r<a;r++){const l=this.parseVertexIndex(e[r],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const r=this.vertices.length,a=this.uvs.length;for(let l=0,c=e.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(e[l],r));for(let l=0,c=t.length;l<c;l++)this.addUVLine(this.parseUVIndex(t[l],a))}};return s.startObject("",!1),s}class LT extends oo{constructor(e){super(e),this.materials=null}load(e,t,r,a){const l=this,c=new Gg(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(h){a?a(h):console.error(h),l.manager.itemError(e)}},r,a)}setMaterials(e){return this.materials=e,this}parse(e){const t=new PT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const r=e.split(`
`);let a=[];for(let f=0,h=r.length;f<h;f++){const p=r[f].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(og);switch(_[0]){case"v":t.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Ol.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),dn),t.colors.push(Ol.r,Ol.g,Ol.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":t.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const v=p.slice(1).trim().split(og),S=[];for(let w=0,y=v.length;w<y;w++){const x=v[w];if(x.length>0){const N=x.split("/");S.push(N)}}const E=S[0];for(let w=1,y=S.length-1;w<y;w++){const x=S[w],N=S[w+1];t.addFace(E[0],x[0],N[0],E[1],x[1],N[1],E[2],x[2],N[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let v=[];const S=[];if(p.indexOf("/")===-1)v=_;else for(let E=0,w=_.length;E<w;E++){const y=_[E].split("/");y[0]!==""&&v.push(y[0]),y[1]!==""&&S.push(y[1])}t.addLineGeometry(v,S)}else if(g==="p"){const v=p.slice(1).trim().split(" ");t.addPointGeometry(v)}else if((a=AT.exec(p))!==null){const _=(" "+a[0].slice(1).trim()).slice(1);t.startObject(_)}else if(CT.test(p))t.object.startMaterial(p.substring(7).trim(),t.materialLibraries);else if(RT.test(p))t.materialLibraries.push(p.substring(7).trim());else if(bT.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(a=p.split(" "),a.length>1){const v=a[1].trim().toLowerCase();t.object.smooth=v!=="0"&&v!=="off"}else t.object.smooth=!0;const _=t.object.currentMaterial();_&&(_.smooth=t.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}t.finalize();const l=new Xs;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){const p=t.objects[f],g=p.geometry,_=p.materials,v=g.type==="Line",S=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const w=new hi;w.setAttribute("position",new Cn(g.vertices,3)),g.normals.length>0&&w.setAttribute("normal",new Cn(g.normals,3)),g.colors.length>0&&(E=!0,w.setAttribute("color",new Cn(g.colors,3))),g.hasUVIndices===!0&&w.setAttribute("uv",new Cn(g.uvs,2));const y=[];for(let N=0,D=_.length;N<D;N++){const C=_[N],G=C.name+"_"+C.smooth+"_"+E;let U=t.materials[G];if(this.materials!==null){if(U=this.materials.create(C.name),v&&U&&!(U instanceof Gl)){const I=new Gl;qi.prototype.copy.call(I,U),I.color.copy(U.color),U=I}else if(S&&U&&!(U instanceof jo)){const I=new jo({size:10,sizeAttenuation:!1});qi.prototype.copy.call(I,U),I.color.copy(U.color),I.map=U.map,U=I}}U===void 0&&(v?U=new Gl:S?U=new jo({size:1,sizeAttenuation:!1}):U=new zg,U.name=C.name,U.flatShading=!C.smooth,U.vertexColors=E,t.materials[G]=U),y.push(U)}let x;if(y.length>1){for(let N=0,D=_.length;N<D;N++){const C=_[N];w.addGroup(C.groupStart,C.groupCount,N)}v?x=new Am(w,y):S?x=new af(w,y):x=new bn(w,y)}else v?x=new Am(w,y[0]):S?x=new af(w,y[0]):x=new bn(w,y[0]);x.name=p.name,l.add(x)}else if(t.vertices.length>0){const f=new jo({size:1,sizeAttenuation:!1}),h=new hi;h.setAttribute("position",new Cn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Cn(t.colors,3)),f.vertexColors=!0);const p=new af(h,f);l.add(p)}return l}}class DT extends oo{constructor(e){super(e)}load(e,t,r,a){const l=this,c=this.path===""?Ax.extractUrlBase(e):this.path,f=new Gg(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{t(l.parse(h,c))}catch(p){a?a(p):console.error(p),l.manager.itemError(e)}},r,a)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const r=e.split(`
`);let a={};const l=/\s+/,c={};for(let h=0;h<r.length;h++){let p=r[h];if(p=p.trim(),p.length===0||p.charAt(0)==="#")continue;const g=p.indexOf(" ");let _=g>=0?p.substring(0,g):p;_=_.toLowerCase();let v=g>=0?p.substring(g+1):"";if(v=v.trim(),_==="newmtl")a={name:v},c[v]=a;else if(_==="ka"||_==="kd"||_==="ks"||_==="ke"){const S=v.split(l,3);a[_]=[parseFloat(S[0]),parseFloat(S[1]),parseFloat(S[2])]}else a[_]=v}const f=new UT(this.resourcePath||t,this.materialOptions);return f.setCrossOrigin(this.crossOrigin),f.setManager(this.manager),f.setMaterials(c),f}}class UT{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:ji,this.wrap=this.options.wrap!==void 0?this.options.wrap:Xl}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const r in e){const a=e[r],l={};t[r]=l;for(const c in a){let f=!0,h=a[c];const p=c.toLowerCase();switch(p){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(h=[h[0]/255,h[1]/255,h[2]/255]),this.options&&this.options.ignoreZeroRGBs&&h[0]===0&&h[1]===0&&h[2]===0&&(f=!1);break}f&&(l[p]=h)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,r=this.materialsInfo[e],a={name:e,side:this.side};function l(f,h){return typeof h!="string"||h===""?"":/^https?:\/\//i.test(h)?h:f+h}function c(f,h){if(a[f])return;const p=t.getTextureParams(h,a),g=t.loadTexture(l(t.baseUrl,p.url));g.repeat.copy(p.scale),g.offset.copy(p.offset),g.wrapS=t.wrap,g.wrapT=t.wrap,(f==="map"||f==="emissiveMap")&&(g.colorSpace=dn),a[f]=g}for(const f in r){const h=r[f];let p;if(h!=="")switch(f.toLowerCase()){case"kd":a.color=vt.toWorkingColorSpace(new lt().fromArray(h),dn);break;case"ks":a.specular=vt.toWorkingColorSpace(new lt().fromArray(h),dn);break;case"ke":a.emissive=vt.toWorkingColorSpace(new lt().fromArray(h),dn);break;case"map_kd":c("map",h);break;case"map_ks":c("specularMap",h);break;case"map_ke":c("emissiveMap",h);break;case"norm":c("normalMap",h);break;case"map_bump":case"bump":c("bumpMap",h);break;case"map_d":c("alphaMap",h),a.transparent=!0;break;case"ns":a.shininess=parseFloat(h);break;case"d":p=parseFloat(h),p<1&&(a.opacity=p,a.transparent=!0);break;case"tr":p=parseFloat(h),this.options&&this.options.invertTrProperty&&(p=1-p),p>0&&(a.opacity=1-p,a.transparent=!0);break}}return this.materials[e]=new zg(a),this.materials[e]}getTextureParams(e,t){const r={scale:new rt(1,1),offset:new rt(0,0)},a=e.split(/\s+/);let l;return l=a.indexOf("-bm"),l>=0&&(t.bumpScale=parseFloat(a[l+1]),a.splice(l,2)),l=a.indexOf("-s"),l>=0&&(r.scale.set(parseFloat(a[l+1]),parseFloat(a[l+2])),a.splice(l,4)),l=a.indexOf("-o"),l>=0&&(r.offset.set(parseFloat(a[l+1]),parseFloat(a[l+2])),a.splice(l,4)),r.url=a.join(" ").trim(),r}loadTexture(e,t,r,a,l){const c=this.manager!==void 0?this.manager:Vg;let f=c.getHandler(e);f===null&&(f=new Mx(c)),f.setCrossOrigin&&f.setCrossOrigin(this.crossOrigin);const h=f.load(e,r,a,l);return t!==void 0&&(h.mapping=t),h}}var Zg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cg=Jr.createContext&&Jr.createContext(Zg),IT=["attr","size","title"];function NT(s,e){if(s==null)return{};var t=FT(s,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(t[r]=s[r])}return t}function FT(s,e){if(s==null)return{};var t={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;t[r]=s[r]}return t}function Zl(){return Zl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Zl.apply(this,arguments)}function fg(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),t.push.apply(t,r)}return t}function Ql(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fg(Object(t),!0).forEach(function(r){OT(s,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):fg(Object(t)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(t,r))})}return s}function OT(s,e,t){return e=kT(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function kT(s){var e=BT(s,"string");return typeof e=="symbol"?e:e+""}function BT(s,e){if(typeof s!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var r=t.call(s,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Qg(s){return s&&s.map((e,t)=>Jr.createElement(e.tag,Ql({key:t},e.attr),Qg(e.child)))}function zT(s){return e=>Jr.createElement(HT,Zl({attr:Ql({},s.attr)},e),Qg(s.child))}function HT(s){var e=t=>{var{attr:r,size:a,title:l}=s,c=NT(s,IT),f=a||t.size||"1em",h;return t.className&&(h=t.className),s.className&&(h=(h?h+" ":"")+s.className),Jr.createElement("svg",Zl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:h,style:Ql(Ql({color:s.color||t.color},t.style),s.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Jr.createElement("title",null,l),s.children)};return cg!==void 0?Jr.createElement(cg.Consumer,null,t=>e(t)):e(Zg)}function VT(s){return zT({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16h4v4"},child:[]},{tag:"path",attr:{d:"M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515"},child:[]}]})(s)}const GT="_threeContainer_ppa0l_1",WT="_grabbing_ppa0l_14",XT="_resetButton_ppa0l_18",dg={threeContainer:GT,grabbing:WT,resetButton:XT},jT=({modelScale:s,onSceneReady:e})=>{const t=Qt.useRef(null),r=Qt.useRef(null),a=Qt.useRef(null),l=Qt.useRef(null),c=Qt.useRef(null),f=Qt.useRef(null),h=Qt.useRef(null),p=Qt.useRef(null),g=Qt.useRef(null),_=()=>{if(a.current&&c.current&&h.current){const{position:v,target:S}=h.current,E=a.current.position.clone(),w=c.current.target.clone(),y=1e3,x=Date.now(),N=()=>{const D=Date.now()-x,C=Math.min(D/y,1),G=1-Math.pow(1-C,3);a.current.position.lerpVectors(E,v,G),c.current.target.lerpVectors(w,S,G),c.current.update(),C<1&&requestAnimationFrame(N)};N()}};return Qt.useEffect(()=>{if(!t.current)return;const v=new Sm;r.current=v;const S=new Sm;p.current=S;const E=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,w=`
      varying vec2 vUv;
      uniform vec3 colorA;
      uniform vec3 colorB;
      void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.y), 1.0);
      }
    `,y={colorA:{value:new lt(14743551)},colorB:{value:new lt(16777215)}},x=new na(2,2),N=new $i({vertexShader:E,fragmentShader:w,uniforms:y,depthWrite:!1}),D=new bn(x,N);S.add(D);const C=new _d(-1,1,1,-1,-1,0);g.current=C;const G=new ei(45,window.innerWidth/2/window.innerHeight,.1,1e3);a.current=G,G.position.set(0,0,5);const U=new fT({antialias:!0});l.current=U,U.setSize(window.innerWidth/2,window.innerHeight),U.shadowMap.enabled=!0,U.shadowMap.type=pg,U.autoClear=!1,t.current.appendChild(U.domElement);const I=new hT(G,U.domElement);c.current=I,I.enableDamping=!0,I.dampingFactor=.08,I.rotateSpeed=1,I.minDistance=2,I.maxDistance=10,I.enablePan=!1,I.enableZoom=!0,I.minPolarAngle=0,I.maxPolarAngle=Math.PI,I.minAzimuthAngle=-1/0,I.maxAzimuthAngle=1/0,I.target.set(0,0,0),I.update();const X=U.domElement;X.addEventListener("mousedown",()=>{X.classList.add("grabbing")}),X.addEventListener("mouseup",()=>{X.classList.remove("grabbing")}),X.addEventListener("mouseleave",()=>{X.classList.remove("grabbing")});const b=new wx(16777215,.5);v.add(b);const R=new Lm(16777215,.8);R.position.set(5,5,5),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.camera.near=.5,R.shadow.camera.far=500,R.shadow.camera.left=-10,R.shadow.camera.right=10,R.shadow.camera.top=10,R.shadow.camera.bottom=-10,R.shadow.bias=-1e-4,v.add(R);const z=new Lm(16777215,.3);z.position.set(-5,3,-5),v.add(z);const le=new Hg;le.onProgress=(ie,ae,O)=>{console.log(`Loading file: ${ie}. Loaded ${ae}/${O} files.`)},le.onError=ie=>{console.error("Error loading",ie)};const te=new DT(le);console.log("Loading MTL file..."),te.load("/3d_Product_view//chair-mtl.mtl",ie=>{ie.preload(),console.log("MTL loaded successfully",ie);const ae=new LT(le);ae.setMaterials(ie),console.log("Loading OBJ file..."),ae.load("/3d_Product_view//chair-obj.obj",O=>{console.log("OBJ loaded successfully",O);const oe=new Xs,re=new so().setFromObject(O),F=re.getCenter(new Y),ne=re.getSize(new Y),Le=Math.max(ne.x,ne.y,ne.z),Z=2/Le;oe.userData.maxDim=Le,oe.userData.baseScale=Z,O.position.sub(F),oe.add(O),oe.scale.setScalar(Z),f.current=oe,v.add(oe);const ce=Le*Z*2;h.current={position:new Y(ce,ce/2,ce),target:new Y(0,0,0)},G.position.copy(h.current.position),G.lookAt(h.current.target),I.update(),e&&e({scene:v,model:oe}),U.render(v,G)},O=>{const oe=O.loaded/O.total*100;console.log(`OBJ ${oe.toFixed(2)}% loaded`)},O=>{console.error("Error loading OBJ:",O)})},ie=>{const ae=ie.loaded/ie.total*100;console.log(`MTL ${ae.toFixed(2)}% loaded`)},ie=>{console.error("Error loading MTL:",ie)});const ue=()=>{requestAnimationFrame(ue),I.update(),U.clear(),U.render(p.current,g.current),U.clearDepth(),U.render(v,G)};ue();const de=()=>{if(!t.current||!a.current||!l.current)return;const ie=t.current,ae=ie.clientWidth,O=ie.clientHeight;a.current.aspect=ae/O,a.current.updateProjectionMatrix(),l.current.setSize(ae,O,!1)};return window.addEventListener("resize",de),de(),()=>{var ie;window.removeEventListener("resize",de),(ie=t.current)==null||ie.removeChild(U.domElement),U.dispose(),N.dispose(),x.dispose()}},[]),Qt.useEffect(()=>{if(f.current){const v=f.current.userData.baseScale;f.current.scale.setScalar(v*s)}},[s]),Gt.jsx("div",{ref:t,className:dg.threeContainer,children:Gt.jsx("button",{onClick:_,className:dg.resetButton,title:"Reset View",children:Gt.jsx(VT,{size:24})})})},YT="_texturePanel_11rb5_1",qT="_colorGrid_11rb5_15",$T="_colorOption_11rb5_24",KT="_selected_11rb5_39",vf={texturePanel:YT,colorGrid:qT,colorOption:$T,selected:KT},xf=({title:s,textures:e,onTextureSelect:t})=>Gt.jsxs("div",{className:vf.texturePanel,children:[Gt.jsx("h3",{children:s}),Gt.jsx("div",{className:vf.colorGrid,children:e.map((r,a)=>Gt.jsx("div",{className:vf.colorOption,style:{backgroundColor:r.color},onClick:()=>t(r)},a))})]});function ZT(){const[s,e]=Qt.useState(1),[t,r]=Qt.useState(null),a=Qt.useCallback(_=>{r(_)},[]),l=[{color:"#FF0000"},{color:"#00FF00"},{color:"#0000FF"},{color:"#FFFF00"},{color:"#FF00FF"},{color:"#00FFFF"},{color:"#FFFFFF"},{color:"#000000"}],c=[{color:"#808080"},{color:"#A0522D"},{color:"#CD853F"},{color:"#8B4513"},{color:"#D2691E"},{color:"#F4A460"},{color:"#000000"},{color:"#FFFFFF"}],f=[{color:"#808080"},{color:"#A0522D"},{color:"#CD853F"},{color:"#8B4513"},{color:"#D2691E"},{color:"#F4A460"},{color:"#000000"},{color:"#FFFFFF"}],h=Qt.useCallback(_=>{t!=null&&t.model&&t.model.traverse(v=>{v instanceof bn&&v.name.includes("Box015")&&v.material&&(Array.isArray(v.material)?v.material.forEach(S=>S.color.setStyle(_.color)):v.material.color.setStyle(_.color))})},[t]),p=Qt.useCallback(_=>{t!=null&&t.model&&t.model.traverse(v=>{v instanceof bn&&v.name.includes("Cylinder")&&v.material&&(Array.isArray(v.material)?v.material.forEach(S=>S.color.setStyle(_.color)):v.material.color.setStyle(_.color))})},[t]),g=Qt.useCallback(_=>{t!=null&&t.model&&t.model.traverse(v=>{v instanceof bn&&v.material&&(Array.isArray(v.material)?v.material.forEach(S=>S.color.setStyle(_.color)):v.material.color.setStyle(_.color))})},[t]);return Gt.jsxs("div",{className:"app-container",children:[Gt.jsx("div",{className:"viewer-section",children:Gt.jsx(jT,{modelScale:s,onSceneReady:a})}),Gt.jsxs("div",{className:"controls-section",children:[Gt.jsx("h2",{children:"Controls"}),Gt.jsxs("div",{className:"texture-controls",children:[Gt.jsx(xf,{title:"Cushion Color",textures:l,onTextureSelect:h}),Gt.jsx(xf,{title:"Frame Color",textures:c,onTextureSelect:p}),Gt.jsx(xf,{title:"Full Model Color",textures:f,onTextureSelect:g})]}),Gt.jsxs("div",{className:"scale-control",children:[Gt.jsx("label",{htmlFor:"scale-slider",children:"Model Size"}),Gt.jsx("input",{id:"scale-slider",type:"range",min:"0.5",max:"1.5",step:"0.1",value:s,onChange:_=>e(Number(_.target.value))}),Gt.jsxs("span",{className:"scale-value",children:[(s*100).toFixed(0),"%"]})]})]})]})}Bv.createRoot(document.getElementById("root")).render(Gt.jsx(Qt.StrictMode,{children:Gt.jsx(ZT,{})}));
