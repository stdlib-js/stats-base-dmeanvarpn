// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import t,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumpw@v0.1.0-esm/index.mjs";function a(r,n,a,s,N,i){var d,f,m,o,u,l,p,j,v;if(f=s<0?(1-r)*s:0,m=i<0?-i:0,r<=0)return N[m]=NaN,N[m+i]=NaN,N;if(j=r-n,1===r||0===s)return N[m]=a[f],N[m+i]=j<=0?NaN:0,N;if(d=t(r,a,s)/r,e(d))return N[m]=NaN,N[m+i]=NaN,N;for(o=0,u=0,v=0;v<r;v++)o+=(l=a[f]-d)*l,u+=l,f+=s;return p=u/r,N[m]=d+p,N[m+i]=j<=0?NaN:o/j-p*(u/j),N}function s(r,t,a,s,N,i,d,f){var m,o,u,l,p,j,v,b,h;if(o=N,u=f,r<=0)return i[u]=NaN,i[u+d]=NaN,i;if(b=r-t,1===r||0===s)return i[u]=a[o],i[u+d]=b<=0?NaN:0,i;if(m=n(r,a,s,N)/r,e(m))return i[u]=NaN,i[u+d]=NaN,i;for(l=0,p=0,h=0;h<r;h++)l+=(j=a[o]-m)*j,p+=j,o+=s;return v=p/r,i[u]=m+v,i[u+d]=b<=0?NaN:l/b-v*(p/b),i}r(a,"ndarray",s);export{a as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
