"use strict";var c=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var p=c(function(F,j){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),k=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(e,i,t,o,a,s,q){var r,f,u,n,v;if(e<=0)return a;if(f=o,u=q,r=i[f],a[u]=r,u+=s,v=1,m(r)===!1)for(v;v<e;v++){if(f+=t,n=i[f],m(n)){r=n;break}(n<r||n===r&&k(n))&&(r=n),a[u]=r,u+=s}if(m(r))for(v;v<e;v++)a[u]=r,u+=s;return a}j.exports=E
});var d=c(function(G,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),O=p();function Z(e,i,t,o,a){var s=l(e,t),q=l(e,a);return O(e,i,t,s,o,a,q)}y.exports=Z
});var b=c(function(H,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),w=p();h(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=b(),x,g=A(z(__dirname,"./native.js"));B(g)?x=C:x=g;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
