"use strict";var c=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var j=c(function(H,x){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-negative-zerof/dist');function O(v,u,q,f,n){var i,s,r,a,e;if(v<=0)return f;if(q<0?s=(1-v)*q:s=0,n<0?r=(1-v)*n:r=0,i=u[s],f[r]=i,r+=n,e=1,m(i)===!1)for(e;e<v;e++){if(s+=q,a=u[s],m(a)){i=a;break}(a<i||a===i&&E(a))&&(i=a),f[r]=i,r+=n}if(m(i))for(e;e<v;e++)f[r]=i,r+=n;return f}x.exports=O
});var g=c(function(I,b){
var l=require('@stdlib/math-base-assert-is-nanf/dist'),h=require('@stdlib/math-base-assert-is-negative-zerof/dist');function w(v,u,q,f,n,i,s){var r,a,e,t,o;if(v<=0)return n;if(a=f,e=s,r=u[a],n[e]=r,e+=i,o=1,l(r)===!1)for(o;o<v;o++){if(a+=q,t=u[a],l(t)){r=t;break}(t<r||t===r&&h(t))&&(r=t),n[e]=r,e+=i}if(l(r))for(o;o<v;o++)n[e]=r,e+=i;return n}b.exports=w
});var Z=c(function(J,R){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),A=g();z(k,"ndarray",A);R.exports=k
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=Z(),p,_=C(B(__dirname,"./native.js"));D(_)?p=F:p=_;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
