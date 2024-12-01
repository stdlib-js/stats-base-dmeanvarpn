"use strict";var w=function(a,m){return function(){return m||a((m={exports:{}}).exports,m),m.exports}};var _=w(function(S,R){
var A=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/blas-ext-base-dsumpw/dist');function C(a,m,l,q,e,r){var i,s,v,p,n,N,c,f,y;if(q<0?s=(1-a)*q:s=0,r<0?v=-r:v=0,a<=0)return e[v]=NaN,e[v+r]=NaN,e;if(f=a-m,a===1||q===0)return e[v]=l[s],f<=0?e[v+r]=NaN:e[v+r]=0,e;if(i=B(a,l,q)/a,A(i))return e[v]=NaN,e[v+r]=NaN,e;for(p=0,n=0,y=0;y<a;y++)N=l[s]-i,p+=N*N,n+=N,s+=q;return c=n/a,e[v]=i+c,f<=0?e[v+r]=NaN:e[v+r]=p/f-c*(n/f),e}R.exports=C
});var b=w(function(T,E){
var D=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function G(a,m,l,q,e,r,i,s){var v,p,n,N,c,f,y,M,j;if(p=e,n=s,a<=0)return r[n]=NaN,r[n+i]=NaN,r;if(M=a-m,a===1||q===0)return r[n]=l[p],M<=0?r[n+i]=NaN:r[n+i]=0,r;if(v=F(a,l,q,e)/a,D(v))return r[n]=NaN,r[n+i]=NaN,r;for(N=0,c=0,j=0;j<a;j++)f=l[p]-v,N+=f*f,c+=f,p+=q;return y=c/a,r[n]=v+y,M<=0?r[n+i]=NaN:r[n+i]=N/M-y*(c/M),r}E.exports=G
});var k=w(function(U,h){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=_(),I=b();H(g,"ndarray",I);h.exports=g
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=k(),x,z=K(J(__dirname,"./native.js"));L(z)?x=P:x=z;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
