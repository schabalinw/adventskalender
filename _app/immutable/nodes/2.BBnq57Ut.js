var pt=Object.defineProperty;var Ce=t=>{throw TypeError(t)};var gt=(t,e,a)=>e in t?pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var Oe=(t,e,a)=>gt(t,typeof e!="symbol"?e+"":e,a),xe=(t,e,a)=>e.has(t)||Ce("Cannot "+a);var Z=(t,e,a)=>(xe(t,e,"read from private field"),a?a.call(t):e.get(t)),re=(t,e,a)=>e.has(t)?Ce("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),ke=(t,e,a,i)=>(xe(t,e,"write to private field"),i?i.call(t,a):e.set(t,a),a),je=(t,e,a)=>(xe(t,e,"access private method"),a);import{b as Fe,e as ht,a as S,t as F,d as ze,c as De}from"../chunks/disclose-version.B2bP7Ef1.js";import{h as j,C as he,at as _t,au as mt,av as yt,b as Se,O as Ve,a as be,c as V,U as wt,x as bt,B as de,M as xt,ak as Je,P as kt,Q as Le,R as $e,aw as pe,N as Xe,ap as Qe,z as _e,ax as Ie,ay as Re,az as Ae,aA as zt,aj as $t,aB as Tt,d as et,aC as tt,y as at,ag as Mt,aa as rt,aD as St,a6 as It,G as Be,aE as At,ad as it,ah as Et,af as Nt,aF as Ct,L as He,aG as Ot,E as jt,aH as Ft,aI as Dt,an as nt,j as st,aJ as Lt,n as ie,aK as Rt,aL as Bt,aM as Ht,a9 as Ke,$ as We,p as ot,t as D,e as lt,s as O,v as I,k as r,o as z,as as ve,I as ee,g as Kt,aN as Wt,f as ne,w as B}from"../chunks/runtime.kMrQjw3w.js";import{d as Ut,e as ft,f as Zt,a as se}from"../chunks/store.CrM5hApz.js";import{p as U,a as oe,i as P,o as Pt}from"../chunks/index-client.Dv5qMTUR.js";function Yt(t,e,a){j&&he();var i=t,o=wt,n,s=_t()?mt:yt;Se(()=>{s(o,o=e())&&(n&&Ve(n),n=be(()=>a(i)))}),j&&(i=V)}let ge=null;function Ue(t,e){return e}function qt(t,e,a,i){for(var o=[],n=e.length,s=0;s<n;s++)zt(e[s].e,o,!0);var d=n>0&&o.length===0&&a!==null;if(d){var p=a.parentNode;$t(p),p.append(a),i.clear(),G(t,e[0].prev,e[n-1].next)}Tt(o,()=>{for(var _=0;_<n;_++){var u=e[_];d||(i.delete(u.k),G(t,u.prev,u.next)),et(u.e,!d)}})}function Te(t,e,a,i,o,n=null){var s=t,d={flags:e,items:new Map,first:null},p=(e&tt)!==0;if(p){var _=t;s=j?de(at(_)):_.appendChild(bt())}j&&he();var u=null,g=!1;Se(()=>{var f=a(),y=xt(f)?f:f==null?[]:Je(f),c=y.length;if(g&&c===0)return;g=c===0;let x=!1;if(j){var w=s.data===kt;w!==(c===0)&&(s=Le(),de(s),$e(!1),x=!0)}if(j){for(var l=null,v,m=0;m<c;m++){if(V.nodeType===8&&V.data===Mt){s=V,x=!0,$e(!1);break}var h=y[m],b=i(h,m);v=ct(V,d,l,null,h,b,m,o,e),d.items.set(b,v),l=v}c>0&&de(Le())}if(!j){var k=rt;Gt(y,d,s,o,e,(k.f&pe)!==0,i)}n!==null&&(c===0?u?Xe(u):u=be(()=>n(s)):u!==null&&Ve(u,()=>{u=null})),x&&$e(!0),a()}),j&&(s=V)}function Gt(t,e,a,i,o,n,s){var C,T,L,K;var d=(o&St)!==0,p=(o&(Ie|Ae))!==0,_=t.length,u=e.items,g=e.first,f=g,y,c=null,x,w=[],l=[],v,m,h,b;if(d)for(b=0;b<_;b+=1)v=t[b],m=s(v,b),h=u.get(m),h!==void 0&&((C=h.a)==null||C.measure(),(x??(x=new Set)).add(h));for(b=0;b<_;b+=1){if(v=t[b],m=s(v,b),h=u.get(m),h===void 0){var k=f?f.e.nodes_start:a;c=ct(k,e,c,c===null?e.first:c.next,v,m,b,i,o),u.set(m,c),w=[],l=[],f=c.next;continue}if(p&&Vt(h,v,b,o),h.e.f&pe&&(Xe(h.e),d&&((T=h.a)==null||T.unfix(),(x??(x=new Set)).delete(h))),h!==f){if(y!==void 0&&y.has(h)){if(w.length<l.length){var M=l[0],$;c=M.prev;var E=w[0],N=w[w.length-1];for($=0;$<w.length;$+=1)Ze(w[$],M,a);for($=0;$<l.length;$+=1)y.delete(l[$]);G(e,E.prev,N.next),G(e,c,E),G(e,N,M),f=M,c=N,b-=1,w=[],l=[]}else y.delete(h),Ze(h,f,a),G(e,h.prev,h.next),G(e,h,c===null?e.first:c.next),G(e,c,h),c=h;continue}for(w=[],l=[];f!==null&&f.k!==m;)(n||!(f.e.f&pe))&&(y??(y=new Set)).add(f),l.push(f),f=f.next;if(f===null)continue;h=f}w.push(h),c=h,f=h.next}if(f!==null||y!==void 0){for(var A=y===void 0?[]:Je(y);f!==null;)(n||!(f.e.f&pe))&&A.push(f),f=f.next;var Y=A.length;if(Y>0){var ae=o&tt&&_===0?a:null;if(d){for(b=0;b<Y;b+=1)(L=A[b].a)==null||L.measure();for(b=0;b<Y;b+=1)(K=A[b].a)==null||K.fix()}qt(e,A,ae,u)}}d&&Qe(()=>{var R;if(x!==void 0)for(h of x)(R=h.a)==null||R.apply()}),_e.first=e.first&&e.first.e,_e.last=c&&c.e}function Vt(t,e,a,i){i&Ie&&Re(t.v,e),i&Ae?Re(t.i,a):t.i=a}function ct(t,e,a,i,o,n,s,d,p){var _=ge,u=(p&Ie)!==0,g=(p&At)===0,f=u?g?It(o):Be(o):o,y=p&Ae?Be(s):s,c={i:y,v:f,k:n,a:null,e:null,prev:a,next:i};ge=c;try{return c.e=be(()=>d(t,f,y),j),c.e.prev=a&&a.e,c.e.next=i&&i.e,a===null?e.first=c:(a.next=c,a.e.next=c.e),i!==null&&(i.prev=c,i.e.prev=c.e),c}finally{ge=_}}function Ze(t,e,a){for(var i=t.next?t.next.e.nodes_start:a,o=e?e.e.nodes_start:a,n=t.e.nodes_start;n!==i;){var s=it(n);o.before(n),n=s}}function G(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Jt(t,e,a,i,o){var n=t,s="",d;Se(()=>{if(s===(s=e()??"")){j&&he();return}d!==void 0&&(et(d),d=void 0),s!==""&&(d=be(()=>{if(j){V.data;for(var p=he(),_=p;p!==null&&(p.nodeType!==8||p.data!=="");)_=p,p=it(p);if(p===null)throw Et(),Nt;Fe(V,_),n=de(p);return}var u=s+"",g=ht(u);Fe(at(g),g.lastChild),n.before(g)}))})}function fe(t,e,a,i){var o=t.__attributes??(t.__attributes={});j&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ct]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Xt(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Pe=new Map;function Xt(t){var e=Pe.get(t.nodeName);if(e)return e;Pe.set(t.nodeName,e=[]);for(var a,i=He(t),o=Element.prototype;o!==i;){a=Ot(i);for(var n in a)a[n].set&&e.push(n);i=He(i)}return e}function vt(t,e){var a=t.__className,i=Qt(e);j&&t.className===i?t.__className=i:(a!==i||j&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Qt(t){return t??""}function X(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}const ea=()=>performance.now(),Q={tick:t=>requestAnimationFrame(t),now:()=>ea(),tasks:new Set};function ut(t){Q.tasks.forEach(e=>{e.c(t)||(Q.tasks.delete(e),e.f())}),Q.tasks.size!==0&&Q.tick(ut)}function ta(t){let e;return Q.tasks.size===0&&Q.tick(ut),{promise:new Promise(a=>{Q.tasks.add(e={c:t,f:a})}),abort(){Q.tasks.delete(e)}}}function ue(t,e){t.dispatchEvent(new CustomEvent(e))}function aa(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Ye(t){const e={},a=t.split(";");for(const i of a){const[o,n]=i.split(":");if(!o||n===void 0)break;const s=aa(o.trim());e[s]=n.trim()}return e}const ra=t=>t;function ia(t,e,a){var i=ge,o,n,s,d=null;i.a??(i.a={element:t,measure(){o=this.element.getBoundingClientRect()},apply(){if(s==null||s.abort(),n=this.element.getBoundingClientRect(),o.left!==n.left||o.right!==n.right||o.top!==n.top||o.bottom!==n.bottom){const p=e()(this.element,{from:o,to:n},a==null?void 0:a());s=me(this.element,p,void 0,1,()=>{s==null||s.abort(),s=void 0})}},fix(){if(!t.getAnimations().length){var{position:p,width:_,height:u}=getComputedStyle(t);if(p!=="absolute"&&p!=="fixed"){var g=t.style;d={position:g.position,width:g.width,height:g.height,transform:g.transform},g.position="absolute",g.width=_,g.height=u;var f=t.getBoundingClientRect();if(o.left!==f.left||o.top!==f.top){var y=`translate(${o.left-f.left}px, ${o.top-f.top}px)`;g.transform=g.transform?`${g.transform} ${y}`:y}}}},unfix(){if(d){var p=t.style;p.position=d.position,p.width=d.width,p.height=d.height,p.transform=d.transform}}}),i.a.element=t}function H(t,e,a,i){var o=(t&Rt)!==0,n=(t&Bt)!==0,s=o&&n,d=(t&Ht)!==0,p=s?"both":o?"in":"out",_,u=e.inert,g,f;function y(){var v=rt,m=_e;Ke(null),We(null);try{return _??(_=a()(e,(i==null?void 0:i())??{},{direction:p}))}finally{Ke(v),We(m)}}var c={is_global:d,in(){var v;if(e.inert=u,!o){f==null||f.abort(),(v=f==null?void 0:f.reset)==null||v.call(f);return}n||g==null||g.abort(),ue(e,"introstart"),g=me(e,y(),f,1,()=>{ue(e,"introend"),g==null||g.abort(),g=_=void 0})},out(v){if(!n){v==null||v(),_=void 0;return}e.inert=!0,ue(e,"outrostart"),f=me(e,y(),g,0,()=>{ue(e,"outroend"),v==null||v()})},stop:()=>{g==null||g.abort(),f==null||f.abort()}},x=_e;if((x.transitions??(x.transitions=[])).push(c),o&&Ut){var w=d;if(!w){for(var l=x.parent;l&&l.f&jt;)for(;(l=l.parent)&&!(l.f&Ft););w=!l||(l.f&Dt)!==0}w&&nt(()=>{st(()=>c.in())})}}function me(t,e,a,i,o){var n=i===1;if(Lt(e)){var s,d=!1;return Qe(()=>{if(!d){var w=e({direction:n?"in":"out"});s=me(t,w,a,i,o)}}),{abort:()=>{d=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return o(),{abort:ie,deactivate:ie,reset:ie,t:()=>i};const{delay:p=0,css:_,tick:u,easing:g=ra}=e;var f=[];if(n&&a===void 0&&(u&&u(0,1),_)){var y=Ye(_(0,1));f.push(y,y)}var c=()=>1-i,x=t.animate(f,{duration:p});return x.onfinish=()=>{var w=(a==null?void 0:a.t())??1-i;a==null||a.abort();var l=i-w,v=e.duration*Math.abs(l),m=[];if(v>0){if(_)for(var h=Math.ceil(v/16.666666666666668),b=0;b<=h;b+=1){var k=w+l*g(b/h),M=_(k,1-k);m.push(Ye(M))}c=()=>{var $=x.currentTime;return w+l*g($/v)},u&&ta(()=>{if(x.playState!=="running")return!1;var $=c();return u($,1-$),!0})}x=t.animate(m,{duration:v,fill:"forwards"}),x.onfinish=()=>{c=()=>i,u==null||u(i,1-i),o()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=ie)},deactivate:()=>{o=ie},reset:()=>{i===0&&(u==null||u(1,0))},t:()=>c()}}var J,te,ce,ye,dt;const we=class we{constructor(e){re(this,ye);re(this,J,new WeakMap);re(this,te);re(this,ce);ke(this,ce,e)}observe(e,a){var i=Z(this,J).get(e)||new Set;return i.add(a),Z(this,J).set(e,i),je(this,ye,dt).call(this).observe(e,Z(this,ce)),()=>{var o=Z(this,J).get(e);o.delete(a),o.size===0&&(Z(this,J).delete(e),Z(this,te).unobserve(e))}}};J=new WeakMap,te=new WeakMap,ce=new WeakMap,ye=new WeakSet,dt=function(){return Z(this,te)??ke(this,te,new ResizeObserver(e=>{for(var a of e){we.entries.set(a.target,a);for(var i of Z(this,J).get(a.target)||[])i(a)}}))},Oe(we,"entries",new WeakMap);let Me=we;var na=new Me({box:"border-box"});function sa(t,e,a){var i=na.observe(t,()=>a(t[e]));nt(()=>(st(()=>a(t[e])),i))}const oa=t=>t;function Ee(t){const e=t-1;return e*e*e+1}function qe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function la(t,{delay:e=0,duration:a=400,easing:i=oa}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:i,css:n=>`opacity: ${n*o}`}}function q(t,{delay:e=0,duration:a=400,easing:i=Ee,x:o=0,y:n=0,opacity:s=0}={}){const d=getComputedStyle(t),p=+d.opacity,_=d.transform==="none"?"":d.transform,u=p*(1-s),[g,f]=qe(o),[y,c]=qe(n);return{delay:e,duration:a,easing:i,css:(x,w)=>`
			transform: ${_} translate(${(1-x)*g}${f}, ${(1-x)*y}${c});
			opacity: ${p-u*w}`}}function fa(t,{delay:e=0,duration:a=400,easing:i=Ee,axis:o="y"}={}){const n=getComputedStyle(t),s=+n.opacity,d=o==="y"?"height":"width",p=parseFloat(n[d]),_=o==="y"?["top","bottom"]:["left","right"],u=_.map(l=>`${l[0].toUpperCase()}${l.slice(1)}`),g=parseFloat(n[`padding${u[0]}`]),f=parseFloat(n[`padding${u[1]}`]),y=parseFloat(n[`margin${u[0]}`]),c=parseFloat(n[`margin${u[1]}`]),x=parseFloat(n[`border${u[0]}Width`]),w=parseFloat(n[`border${u[1]}Width`]);return{delay:e,duration:a,easing:i,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*s};${d}: ${l*p}px;padding-${_[0]}: ${l*g}px;padding-${_[1]}: ${l*f}px;margin-${_[0]}: ${l*y}px;margin-${_[1]}: ${l*c}px;border-${_[0]}-width: ${l*x}px;border-${_[1]}-width: ${l*w}px;`}}function ca(t,{delay:e=0,duration:a=400,easing:i=Ee,start:o=0,opacity:n=0}={}){const s=getComputedStyle(t),d=+s.opacity,p=s.transform==="none"?"":s.transform,_=1-o,u=d*(1-n);return{delay:e,duration:a,easing:i,css:(g,f)=>`
			transform: ${p} scale(${1-_*f});
			opacity: ${d-u*f}
		`}}function le(t){const e=t.flat();for(let a=0;a<e.length;a++)if(e[a]!=a)return!1;return!0}function va(t){const e=t-1;return e*e*e+1}function ua(t,{from:e,to:a},i={}){var o=getComputedStyle(t),n=da(t),s=o.transform==="none"?"":o.transform,[d,p]=o.transformOrigin.split(" ").map(parseFloat),_=e.width/a.width,u=e.height/a.height,g=(e.left+_*d-(a.left+d))/n,f=(e.top+u*p-(a.top+p))/n,{delay:y=0,duration:c=w=>Math.sqrt(w)*120,easing:x=va}=i;return{delay:y,duration:typeof c=="function"?c(Math.sqrt(g*g+f*f)):c,easing:x,css:(w,l)=>{var v=l*g,m=l*f,h=w+l*_,b=w+l*u;return`transform: ${s} scale(${h}, ${b}) translate(${v}px, ${m}px);`}}}function da(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,a=1;e!==null;)a*=+getComputedStyle(e).zoom,e=e.parentElement;return a}var pa=(t,e,a)=>e(a),ga=F("<div></div>"),ha=F('<button aria-label="tile" class="svelte-d115jf"><!></button>'),_a=F('<div class="tile svelte-d115jf"><!></div>'),ma=F('<div class="puzzle svelte-d115jf"></div>');function Ge(t,e){ot(e,!0);let a=U(e,"layout",31,()=>oe([[2,3],[1,0]])),i=U(e,"size",3,300),o=U(e,"preview",3,!1),n=z(()=>a()[0].length),s=z(()=>a().length),d=z(()=>r(n)>=r(s)?i():i()/r(s)*r(n)),p=z(()=>r(s)>=r(n)?i():i()/r(n)*r(s)),_=z(()=>le(a()));function u(y){const c=a().flat(),x=Math.max(...c),w=c.findIndex(m=>m==x),[l,v]=[w%r(n),Math.floor(w/r(n))];return v>0&&a()[v-1][l]==y?"top":v<r(s)-1&&a()[v+1][l]==y?"bottom":l>0&&a()[v][l-1]==y?"left":l<r(n)-1&&a()[v][l+1]==y?"right":"none"}function g(y){const c=a().flat(),x=Math.max(...c),w=c.findIndex(k=>k==y),l=c.findIndex(k=>k==x),[v,m]=[w%r(n),Math.floor(w/r(n))],[h,b]=[l%r(n),Math.floor(l/r(n))];(Math.abs(v-h)==1&&m==b||Math.abs(m-b)==1&&v==h)&&(a(a()[m][v]=x,!0),a(a()[b][h]=y,!0))}var f=ma();Te(f,30,()=>a().flat(),y=>y,(y,c,x)=>{var w=_a();const l=z(()=>c==Math.max(...a().flat())),v=z(()=>u(c)),m=z(()=>e.image??""),h=z(()=>r(x)%r(n)),b=z(()=>Math.floor(r(x)/r(n))??""),k=z(()=>c%r(n)),M=z(()=>Math.floor(c/r(n))??""),$=z(()=>`
				background-image: url(${r(m)});
				--x: ${r(h)}; 
				--y: ${r(b)};
				--tile-x: ${r(k)};
				--tile-y: ${r(M)};
			`);var E=O(w);P(E,()=>!o(),N=>{var A=ha();A.__click=[pa,g,c];var Y=O(A);Yt(Y,()=>r(v),ae=>{var C=ga();D(()=>vt(C,`arrow-indicator ${r(v)??""} svelte-d115jf`)),H(1,C,()=>ca,()=>({duration:200})),S(ae,C)}),I(A),D(()=>A.disabled=r(_)||o()||r(l)),S(N,A)}),I(w),D(()=>{fe(w,"style",r($)),X(w,"space",r(l)),X(w,"complete",r(_))}),ia(w,()=>ua,()=>({duration:200*+!o()})),S(y,w)}),I(f),D(()=>{fe(f,"style",`--columns: ${r(n)??""}; --rows: ${r(s)??""}; --width: ${r(d)??""}px; --height: ${r(p)??""}px;`),X(f,"complete",r(_)),X(f,"preview",o())}),S(t,f),lt()}ft(["click"]);const ya=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="109.36738mm"
   height="107.65711mm"
   viewBox="0 0 109.36738 107.65711"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="layer1"
     transform="translate(1.2650599,-59.796101)">
    <g
       id="g28"
       transform="rotate(-120,52.190587,113.32415)">
      <path
         id="path28"
         d="M 76.858157,115.11583 96.521321,134.779 M 76.858157,114.23741 96.521321,94.574242 M 51.316313,114.23741 H 102.4 m -39.073495,22.55909 -7.197223,26.86039 m 7.957957,-27.2996 26.860385,7.19722 M 51.316317,114.23741 76.85816,158.47718 M 25.774477,113.35899 6.1113127,93.695819 M 25.774477,114.23741 6.1113127,133.90058 M 51.316321,114.23741 H 0.23263369 M 64.327471,94.683771 91.187858,87.486556 M 63.566737,94.244561 56.369516,67.384177 m -5.0532,46.853233 25.541845,-44.239772 M 39.306131,91.678315 46.503354,64.817931 M 38.545397,92.117525 11.685012,84.92031 m 39.631307,29.3171 -25.541843,-44.23977 m 12.530686,63.79341 -26.860387,7.19722 m 27.621121,-6.75801 7.197221,26.86039 m 5.053199,-46.85324 -25.541845,44.23977" />
    </g>
  </g>
</svg>
`;var wa=F('<div class="snowflake svelte-11ba1x9"><div class="wave-wrapper svelte-11ba1x9"><!></div></div>');function ba(t,e){let a=U(e,"color",3,"#fff"),i=U(e,"lifeTime",3,5e3),o=U(e,"size",3,1),n=U(e,"speed",3,1),s=U(e,"x",3,0),d=U(e,"fallOffset",3,0),p=U(e,"waveOffset",3,0);var _=wa(),u=O(_),g=O(u);Jt(g,()=>ya),I(u),I(_),D(()=>fe(_,"style",`
		--color: ${a()??""};
		--life-time: ${i()??""}ms;
		--size: ${o()??""};
		--speed: ${n()??""};
		--x: ${s()??""}%;
		--fall-offset: ${d()??""}ms;
		--wave-offset: ${p()??""}ms;
	`)),S(t,_)}const W={1:{image:"images/01.jpg",layout:[[4,0,5],[2,7,6],[3,1,8]],caption:"Miau! Und so beginnt die Adventszeit."},2:{image:"images/02.jpg",layout:[[0,9,7,2],[5,8,10,4],[3,6,1,11]],caption:"Zweimal miau für das zweite Türchen."},3:{image:"images/03.jpg",layout:[[5,0,4,2],[1,6,3,7]],caption:"Heute etwas einfacher!"},4:{image:"images/04.jpg",layout:[[5,4,3],[9,1,2],[10,0,7],[8,6,11]],caption:"Super! P.S. Ist das Molly oder Frida?"},5:{image:"images/05.jpg",layout:[[5,3,6],[7,0,4],[1,2,8]],caption:"Und rechtzeitig schlafen gehen!"},6:{image:"images/06.jpg",layout:[[1,8,6,14],[3,12,2,10],[0,4,11,5],[9,7,13,15]],caption:"Kleiner Tipp: Nicht bei Bastet nachmachen!"},7:{image:"images/07.jpg",layout:[[5,4,3],[9,1,2],[10,0,7],[8,6,11]],caption:"Bastet schläft auch mit Augen auf."},8:{image:"images/08.jpg",layout:[[5,3,6],[7,0,4],[1,2,8]],caption:"Einen schönen Zweiten Advent!"},9:{image:"images/09.jpg",layout:[[1,8,6,14],[3,12,2,10],[0,4,11,5],[9,7,13,15]],caption:"Och nö, Montag..."},10:{image:"images/10.jpg",layout:[[5,4,3],[9,1,2],[10,0,7],[8,6,11]],caption:"Genug gespielt. Krieg ich was zu essen, bitte bitte?"},11:{image:"images/11.jpg",layout:[[5,3,6],[7,0,4],[1,2,8]],caption:"Bastets Blick, wenn sie mal wieder in der Küche einen Korb bekommt."},12:{image:"images/12.jpg",layout:[[9,1,8,5],[4,7,18,11],[17,10,14,6],[12,3,15,2],[13,0,16,19]],caption:"Zwiebeln schneiden."},13:{image:"images/13.jpg",layout:[[1,8,6,14],[3,12,2,10],[0,4,11,5],[9,7,13,15]],caption:"Die Dreifaltigkeit des Katzenseins: Fressen, Schlafen und die Sonne."},14:{image:"images/14.jpg",layout:[[0,9,7,2],[5,8,10,4],[3,6,1,11]],caption:"Yippie! Wieder Wochenende!"},15:{image:"images/15.jpg",layout:[[0,9,7,2],[5,8,10,4],[3,6,1,11]],caption:"Bastet verschläft wider allen Erwartens den Dritten Advent."},16:{image:"images/16.jpg",layout:[[1,8,6,14],[3,12,2,10],[0,4,11,5],[9,7,13,15]],caption:"Letzte Woche vor den Ferien!"},17:{image:"images/17.jpg",layout:[[5,4,3],[9,1,2],[10,0,7],[8,6,11]],caption:"Spoiler: Dies ist der Höhepunkt der in diesem Kalender ersichtlichen körperlichen Aktivität von Bastet."},18:{image:"images/18.jpg",layout:[[5,4,3],[9,1,2],[10,0,7],[8,6,11]],caption:"Und wann gibt es wieder Essen?"},19:{image:"images/19.jpg",layout:[[1,8,6,14],[3,12,2,10],[0,4,11,5],[9,7,13,15]],caption:"Bastet philosophiert vor dem Katzenklo."},20:{image:"images/20.jpg",layout:[[0,9,7,2],[5,8,10,4],[3,6,1,11]],caption:"Katze auf dem Kopf."},21:{image:"images/21.jpg",layout:[[5,3,6],[7,0,4],[1,2,8]],caption:"Höhepunkt des Tages."},22:{image:"images/22.jpg",layout:[[5,4,3],[9,1,2],[10,0,7],[8,6,11]],caption:"Schnupper schnupper... Ist das der vierte Advent?"},23:{image:"images/23.jpg",layout:[[0,9,7,2],[5,8,10,4],[3,6,1,11]],caption:"Bastet träumt bestimmt vom Frühstück."},24:{image:"images/24.jpg",layout:[[1,6,13,4,8],[26,2,3,7,9],[11,0,16,14,28],[5,10,12,25,24],[18,15,23,22,27],[21,20,17,19,29]],caption:"Frohe Weihnachten!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"}};function xa(t,e){ee(e,0)}function ka(t,e){ee(e,0)}var za=F('<button class="puzzle-wrapper svelte-ayrr85"><!></button>'),$a=F("<div> </div>"),Ta=(t,e,a)=>e(r(a)),Ma=F('<div class="day-number svelte-ayrr85"> </div> <button class="restart-puzzle-button svelte-ayrr85" aria-label="restart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg></button>',1),Sa=F('<div class="day svelte-ayrr85"><div class="hint svelte-ayrr85"><!></div> <!> <!></div>'),Ia=F('<h1 class="svelte-ayrr85"><span class="svelte-ayrr85">Ein kleiner</span> <br> Adventskalender</h1> <div class="calendar svelte-ayrr85"></div>',1),Aa=F('<div class="message svelte-ayrr85"> </div>'),Ea=F('<h1 class="svelte-ayrr85"> </h1> <div class="puzzle-container svelte-ayrr85"><!></div> <!> <button class="back-button svelte-ayrr85">Zurück zum Kalender</button>',1),Na=F('<div class="image-view-modal svelte-ayrr85"><img alt="" class="viewed-image svelte-ayrr85"> <div class="viewed-image-caption svelte-ayrr85"> </div> <button class="close-viewed-image-button svelte-ayrr85">Schließen</button></div>'),Ca=F('<main class="svelte-ayrr85"><!> <div class="snowflake-container svelte-ayrr85"></div> <!></main>');function Ra(t,e){ot(e,!0);const a=[7,14,9,23,15,2,20,3,12,17,19,5,11,24,8,18,4,21,6,13,10,1,16,22];let i=ve(oe({}));const o=new Date;let n=ve(0),s=ve(0),d=ve(0),p=z(()=>r(n)>1e3?20:10),_=z(()=>r(n)>600?400:250),u=z(()=>r(s)!=0);function g(l){r(i)[l]&&le(r(i)[l])&&(r(i)[l]=structuredClone(W[l].layout)),ee(s,oe(l))}function f(l){ee(d,oe(l))}Pt(()=>{for(let m=1;m<=24;(m+=1)-1)W[m]&&(r(i)[m]=W[m].layout);const l=localStorage.getItem("puzzle-data");l&&(r(i)[1]=JSON.parse(l)[1].layout,localStorage.removeItem("puzzle-data"));const v=localStorage.getItem("puzzles");v&&ee(i,oe(Object.assign(r(i),JSON.parse(v)))),r(i)[4]&&!le(r(i)[4])&&(r(i)[4]=W[4].layout),Kt(()=>{localStorage.setItem("puzzles",JSON.stringify(r(i)))})});var y=Ca();Zt(l=>{Wt.title="Adventskalender"});var c=O(y);P(c,()=>r(s)==0,l=>{var v=Ia(),m=ne(v),h=B(m,2);Te(h,21,()=>a,Ue,(b,k)=>{var M=Sa();const $=z(()=>r(k)>o.getDate()),E=z(()=>r(i)[r(k)]?le(r(i)[r(k)]):!1);var N=O(M),A=O(N);P(A,()=>r($),C=>{var T=ze("Noch ist es zu früh!");S(C,T)},C=>{var T=De(),L=ne(T);P(L,()=>r(E),K=>{var R=ze("Zum Anzeigen klicken!");S(K,R)},K=>{var R=ze("Zum Puzzeln klicken!");S(K,R)},!0),S(C,T)}),I(N);var Y=B(N,2);P(Y,()=>W[r(k)]&&r(i)[r(k)],C=>{var T=za(),L=z(()=>r(E)?()=>f(r(k)):()=>g(r(k)));T.__click=function(...R){var Ne;(Ne=r(L))==null||Ne.apply(this,R)};var K=O(T);Ge(K,{get image(){return W[r(k)].image},get layout(){return r(i)[r(k)]},set layout(R){r(i)[r(k)]=R},preview:!0,size:100}),I(T),D(()=>{T.disabled=r($),X(T,"frame",r(E))}),S(C,T)});var ae=B(Y,2);P(ae,()=>!r(E),C=>{var T=$a(),L=O(T,!0);I(T),D(()=>{vt(T,`door type-${r(k)%4+1} svelte-ayrr85`),se(L,r(k))}),S(C,T)},C=>{var T=Ma(),L=ne(T),K=O(L,!0);I(L);var R=B(L,2);R.__click=[Ta,g,k],D(()=>se(K,r(k))),S(C,T)}),I(M),D(()=>{fe(M,"style",`animation-delay: ${r(k)*10}ms;`),X(M,"locked",r($)),X(M,"complete",r(E))}),S(b,M)}),I(h),H(1,m,()=>q,()=>({duration:500,y:25})),H(1,h,()=>q,()=>({duration:500,y:50})),S(l,v)},l=>{var v=Ea(),m=ne(v),h=O(m);I(m);var b=B(m,2),k=O(b);Ge(k,{get image(){return W[r(s)].image},get layout(){return r(i)[r(s)]},set layout(E){r(i)[r(s)]=E},get size(){return r(_)}}),I(b);var M=B(b,2);P(M,()=>r(i)[r(s)]&&le(r(i)[r(s)]),E=>{var N=Aa(),A=O(N,!0);I(N),D(()=>se(A,W[r(s)].caption)),H(1,N,()=>fa,()=>({duration:200,delay:2e3,axis:"y"})),S(E,N)});var $=B(M,2);$.__click=[xa,s],D(()=>se(h,`${r(s)??""}. Türchen`)),H(1,m,()=>q,()=>({duration:500,y:25})),H(1,b,()=>q,()=>({duration:500,y:50})),H(1,$,()=>q,()=>({duration:500,y:60})),S(l,v)});var x=B(c,2);Te(x,21,()=>[...Array(r(p)).keys()],Ue,(l,v)=>{var m=De();const h=z(()=>r(v)<r(p)/4||r(v)>r(p)-r(p)/4);var b=ne(m);P(b,()=>!r(u)||r(h),k=>{var M=z(()=>r(u)?"var(--tone-7)":"var(--tone-0)"),$=z(()=>1-.2*(r(v)%3)),E=z(()=>100/r(p)*r(v)),N=z(()=>r(v)%3*1500+r(v)*200),A=z(()=>100*r(v));ba(k,{get color(){return r(M)},lifeTime:5e3,get size(){return r($)},speed:1,get x(){return r(E)},get fallOffset(){return r(N)},get waveOffset(){return r(A)}})}),S(l,m)}),I(x);var w=B(x,2);P(w,()=>r(d)!=0,l=>{var v=Na();v.__click=[ka,d];var m=O(v),h=B(m,2),b=O(h,!0);I(h);var k=B(h,2);I(v),D(()=>{fe(m,"src",W[r(d)].image),se(b,W[r(d)].caption)}),H(3,m,()=>q,()=>({duration:400,y:50})),H(3,h,()=>q,()=>({duration:400,y:75})),H(3,k,()=>q,()=>({duration:400,y:100})),H(3,v,()=>la,()=>({duration:200})),S(l,v)}),I(y),D(()=>X(y,"puzzle-view",r(u))),sa(y,"offsetWidth",l=>ee(n,l)),S(t,y),lt()}ft(["click"]);export{Ra as component};