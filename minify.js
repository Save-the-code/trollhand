"use strict";const w=window,q=document,d=q.getElementById,c=q.getElementsByClassName,n=q.getElementsByName,t=q.getElementsByTagName,dc=function(t){return d(t).className},dd=function(t){return d(t).getAttribute("id")},dv=function(t){return d(t).value},di=function(t){return d(t).innerHTML},ds=function(t,n){return d(t).style[n]},dl=function(t){return void 0===d(t)?0:1},dC=function(t,n){return d(t).className=n},dV=function(t,n){return d(t).value=n},dI=function(t,n){return d(t).innerHTML=n},dS=function(t,n,r){return d(t).style[n]=r},cc=function(t){return c(t)[0].className},cd=function(t){return c(t)[0].getAttribute("id")},cv=function(t){return c(t)[0].value},ci=function(t){return c(t)[0].innerHTML},cs=function(t,n){return c(t)[0].style[n]},cl=function(t){return c(t).length},cC=function(t,n){if(void 0===c(t))return!1;for(let r=0;cl(t)>r;r++)c(t)[r].className=n;return!0},cV=function(t,n){if(void 0===c(t))return!1;for(let r=0;cl(t)>r;r++)c(t)[r].value=n;return!0},cI=function(t,n){if(void 0===c(t))return!1;for(let r=0;cl(t)>r;r++)c(t)[r].innerHTML=n;return!0},cS=function(t,n,r){if(void 0===c(t))return!1;for(let e=0;cl(t)>e;e++)c(t)[e].style[n]=r;return!0},nc=function(t){return n(t)[0].className},nd=function(t){return n(t)[0].getAttribute("id")},nv=function(t){return n(t)[0].value},ni=function(t){return n(t)[0].innerHTML},ns=function(t,r){return n(t)[0].style[r]},nl=function(t){return n(t).length},nC=function(t,r){if(void 0===n(t))return!1;for(let e=0;nl(t)>e;e++)n(t)[e].className=r;return!0},nV=function(t,r){if(void 0===n(t))return!1;for(let e=0;nl(t)>e;e++)n(t)[e].value=r;return!0},nI=function(t,r){if(void 0===n(t))return!1;for(let e=0;nl(t)>e;e++)n(t)[e].innerHTML=r;return!0},nS=function(t,r,e){if(void 0===n(t))return!1;for(let u=0;nl(t)>u;u++)n(t)[u].style[r]=e;return!0},tc=function(n){return t(n)[0].className},td=function(n){return t(n)[0].getAttribute("id")},tv=function(n){return t(n)[0].value},ti=function(n){return t(n)[0].innerHTML},ts=function(n,r){return t(n)[0].style[r]},tl=function(n){return t(n).length},tC=function(n,r){if(void 0===t(n))return!1;for(let e=0;tl(n)>e;e++)t(n)[e].className=r;return!0},tV=function(n,r){if(void 0===t(n))return!1;for(let e=0;tl(n)>e;e++)t(n)[e].value=r;return!0},tI=function(n,r){if(void 0===t(n))return!1;for(let e=0;tl(n)>e;e++)t(n)[e].innerHTML=r;return!0},tS=function(n,r,e){if(void 0===t(n))return!1;for(let u=0;tl(n)>u;u++)t(n)[u].style[r]=e;return!0};String.prototype.T=function(){return this.toString()},String.prototype.F=function(){return parseFloat(this)},String.prototype.I=function(){return parseInt(this)},String.prototype.P=function(){return parseInt(this).toString()},String.prototype.R=function(t,n){return this.replace(t,n)},Number.prototype.T=function(){return this.toString()},Number.prototype.F=function(){return parseFloat(this)},Number.prototype.I=function(){return parseInt(this)},Number.prototype.P=function(){return parseInt(this).toString()};
