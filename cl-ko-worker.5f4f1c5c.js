"use strict";(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[6525,7600],{9129:(e,t,r)=>{r.d(t,{M:()=>n});let n=([e,t],r,n)=>e.map((e,t)=>t).filter(a=>(function e(t,[r,n],a,i){let o=a.findIndex(e=>1===e.length);if(!i(t,a,o))return!1;let u=[...a],s=u[o][0];u[o]=[s,t];let l=o+1;return l===u.length||function([t,r],n,a){let i=n.findIndex(e=>!e.length),[o,...u]=r,s=[...n];return s[i]=[o],t.some(r=>e(r,[t,u],s,a))}([r.filter(e=>e!==t),n],u,i)})(e[a],[e,t],r,n))},35955:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(80411);let a=e=>{let t=(0,n.Z)(e),r=(e,r)=>e.country!==r.country&&e.group!==r.group&&!t(e)(r),a=(e,t)=>0===e.length||1===e.length&&r(t,e[0]);return(e,t,r)=>a(t[r],e)}},80411:(e,t,r)=>{r.d(t,{Z:()=>d});var n,a=r(7979),i=r(46338);let o=[{countries:["Russia","Ukraine"],predicate:(n=Number.MAX_SAFE_INTEGER,e=>e>=2014&&e<=n)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}],u={predicate:i.Z},s=o.map(e=>({...u,...e})),l=e=>{let t=s.filter(t=>t.predicate(e)),r=t.map(e=>e.countries),n=r.map(e=>e.toReversed()),a=function(e){let t=new Map;for(let[r,n]of e)t.has(r)||t.set(r,new Set),t.get(r).add(n);return t}([...r,...n]);return a.get.bind(a)},d=e=>{let t=l(e);return e=>{let r=t(e.country);return void 0===r?a.Z:e=>r.has(e.country)}}},87600:(e,t,r)=>{r.r(t);var n=r(30845),a=r(9129),i=r(35955);let o=([e])=>JSON.stringify({year:e}),u=(0,n.Z)(i.Z,(e,t)=>o(e)===o(t));addEventListener("message",e=>{let{messageId:t,data:{season:r,pots:n,matchups:i}}=e.data,o=u(r),s=(0,a.M)(n,i,o);postMessage({messageId:t,data:{possiblePairings:s}})})}}]);