// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanvarpn=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,e.get),y&&f&&f.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(r){return r!=r}var s=/./;function b(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var g,m="function"==typeof Symbol?Symbol.toStringTag:"";g=d()?function(r){var t,e,n,o,u;if(null==r)return j.call(r);e=r[m],u=m,t=null!=(o=r)&&_.call(o,u);try{r[m]=void 0}catch(t){return j.call(r)}return n=j.call(r),t?r[m]=e:delete r[m],n}:function(r){return j.call(r)};var w=g,N=Boolean.prototype.toString;var h=d();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return N.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function S(r){return b(r)||O(r)}function E(){return new Function("return this;")()}p(S,"isPrimitive",b),p(S,"isObject",O);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var B=function(r){if(arguments.length){if(!b(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(P)return P;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),q=B.document&&B.document.childNodes,x=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,V=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",V),C=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var F=C;function G(r){return null!==r&&"object"==typeof r}var L=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!F(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(G);function M(r){var t,e,n,o;if(("Object"===(e=w(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(G,"isObjectLikeArray",L);var R="function"==typeof s||"object"==typeof x||"function"==typeof q?function(r){return M(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?M(r).toLowerCase():t};var $,D,I=Object.getPrototypeOf;D=Object.getPrototypeOf,$="function"===R(D)?I:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=$;function U(r){return null==r?null:(r=Object(r),J(r))}function X(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===w(r))return!0;r=U(r)}return!1}var z=Math.floor;function H(r,t,e,n){var o,u,i,f,a,c,l,p,y,s,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b+=t[o],o+=e;return b}if(r<=128){for(u=t[o],i=t[o+e],f=t[o+2*e],a=t[o+3*e],c=t[o+4*e],l=t[o+5*e],p=t[o+6*e],y=t[o+7*e],o+=8*e,s=r%8,d=8;d<r-s;d+=8)u+=t[o],i+=t[o+e],f+=t[o+2*e],a+=t[o+3*e],c+=t[o+4*e],l+=t[o+5*e],p+=t[o+6*e],y+=t[o+7*e],o+=8*e;for(b=u+i+(f+a)+(c+l+(p+y));d<r;d++)b+=t[o],o+=e;return b}return v=z(r/2),H(v-=v%8,t,e,o)+H(r-v,t,e,o+v*e)}function K(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o+=t[n],n+=e;return o}return H(r,t,e,n)}p(K,"ndarray",H);var Q,W=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return X(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Y=Q=X(W)?K:W;const{ndarray:Z}=Q;function rr(r,t,e,n,o,u){var i,f,a,c,l,p,s,b,v;if(f=n<0?(1-r)*n:0,a=u<0?-u:0,r<=0)return o[a]=NaN,o[a+u]=NaN,o;if(b=r-t,1===r||0===n)return o[a]=e[f],o[a+u]=b<=0?NaN:0,o;if(y(i=Y(r,e,n)/r))return o[a]=NaN,o[a+u]=NaN,o;for(c=0,l=0,v=0;v<r;v++)c+=(p=e[f]-i)*p,l+=p,f+=n;return s=l/r,o[a]=i+s,o[a+u]=b<=0?NaN:c/b-s*(l/b),o}return p(rr,"ndarray",(function(r,t,e,n,o,u,i,f){var a,c,l,p,s,b,v,d,j;if(c=o,l=f,r<=0)return u[l]=NaN,u[l+i]=NaN,u;if(d=r-t,1===r||0===n)return u[l]=e[c],u[l+i]=d<=0?NaN:0,u;if(y(a=Z(r,e,n,o)/r))return u[l]=NaN,u[l+i]=NaN,u;for(p=0,s=0,j=0;j<r;j++)p+=(b=e[c]-a)*b,s+=b,c+=n;return v=s/r,u[l]=a+v,u[l+i]=d<=0?NaN:p/d-v*(s/d),u})),rr}));
//# sourceMappingURL=index.js.map