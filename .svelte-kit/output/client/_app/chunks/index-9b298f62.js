function P(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t&&typeof t=="object"&&typeof t.then=="function"}function D(t){return t()}function H(){return Object.create(null)}function y(t){t.forEach(D)}function V(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function yt(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function X(t){return Object.keys(t).length===0}function gt(t,e,n,i){if(t){const c=O(t,e,n,i);return t[0](c)}}function O(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(e.dirty.length,c.length);for(let u=0;u<l;u+=1)s[u]=e.dirty[u]|c[u];return s}return e.dirty|c}return e.dirty}function xt(t,e,n,i,c,s){if(c){const l=O(e,n,i,s);t.p(l,c)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function Y(){E=!0}function Z(){E=!1}function tt(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,f=(c>0&&e[n[c]].claim_order<=o?c+1:tt(1,c,_=>e[n[_]].claim_order,o))-1;i[r]=n[f]+1;const a=f+1;n[a]=r,c=Math.max(a,c)}const s=[],l=[];let u=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);u>=r;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);s.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<s.length&&l[r].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[r],f)}}function nt(t,e){if(E){for(et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function it(t,e,n){t.insertBefore(e,n||null)}function ct(t,e,n){E&&!n?nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function vt(){return S(" ")}function Et(){return S("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,c=!1){F(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const r=n(u);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const r=n(u);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function R(t,e,n,i){return I(t,c=>c.nodeName===e,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||s.push(u.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(e))}function Nt(t,e,n){return R(t,e,n,G)}function Tt(t,e,n){return R(t,e,n,z)}function lt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function St(t){return lt(t," ")}function L(t,e,n){for(let i=n;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===e)return i}return t.length}function jt(t,e){const n=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",n);if(n===i)return new q(void 0,e);F(t);const c=t.splice(n,i-n+1);v(c[0]),v(c[c.length-1]);const s=c.slice(1,c.length-1);for(const l of s)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(s,e)}function Ct(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Mt(t,e){t.value=e==null?"":e}function Ht(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,i,e),c}function Lt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class ut{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=z(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class q extends ut{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)ct(this.t,this.n[n],e)}}let p;function d(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function qt(t){g().$$.on_mount.push(t)}function Bt(t){g().$$.after_update.push(t)}function Pt(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=st(e,n,{cancelable:i});return c.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}function Dt(t,e){return g().$$.context.set(t,e),e}function Ot(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],B=[],$=[],A=[],W=Promise.resolve();let N=!1;function J(){N||(N=!0,W.then(j))}function Gt(){return J(),W}function T(t){$.push(t)}function zt(t){A.push(t)}const w=new Set;let x=0;function j(){const t=p;do{for(;x<m.length;){const e=m[x];x++,d(e),ot(e.$$)}for(d(null),m.length=0,x=0;B.length;)B.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];w.has(n)||(w.add(n),n())}$.length=0}while(m.length);for(;A.length;)A.pop()();N=!1,w.clear(),d(t)}function ot(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const k=new Set;let h;function at(){h={r:0,c:[],p:h}}function ft(){h.r||y(h.c),h=h.p}function K(t,e){t&&t.i&&(k.delete(t),t.i(e))}function dt(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Ft(t,e){const n=e.token={};function i(c,s,l,u){if(e.token!==n)return;e.resolved=u;let r=e.ctx;l!==void 0&&(r=r.slice(),r[l]=u);const o=c&&(e.current=c)(r);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==s&&a&&(at(),dt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),ft())}):e.block.d(1),o.c(),K(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[s]=o),f&&j()}if(U(t)){const c=g();if(t.then(s=>{d(c),i(e.then,1,e.value,s),d(null)},s=>{if(d(c),i(e.catch,2,e.error,s),d(null),!e.hasCatch)throw s}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function It(t,e,n){const i=e.slice(),{resolved:c}=t;t.current===t.then&&(i[t.value]=c),t.current===t.catch&&(i[t.error]=c),t.block.p(i,n)}function Rt(t,e){const n={},i={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=e[s];if(u){for(const r in l)r in u||(i[r]=1);for(const r in u)c[r]||(n[r]=u[r],c[r]=1);t[s]=u}else for(const r in l)c[r]=1}for(const l in i)l in n||(n[l]=void 0);return n}function Wt(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),i||T(()=>{const r=s.map(D).filter(V);l?l.push(...r):y(r),t.$$.on_mount=[]}),u.forEach(T)}function ht(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(m.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ut(t,e,n,i,c,s,l,u=[-1]){const r=p;d(t);const o=t.$$={fragment:null,ctx:null,props:s,update:P,not_equal:c,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||r.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...C)=>{const M=C.length?C[0]:_;return o.ctx&&c(o.ctx[a],o.ctx[a]=M)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](M),f&&mt(t,a)),_}):[],o.update(),f=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){Y();const a=rt(e.target);o.fragment&&o.fragment.l(a),a.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&K(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),Z(),j()}d(r)}class Vt{$destroy(){ht(this,1),this.$destroy=P}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as A,Wt as B,ht as C,Q as D,Gt as E,gt as F,xt as G,$t as H,bt as I,nt as J,z as K,Tt as L,yt as M,Mt as N,wt as O,B as P,Jt as Q,zt as R,Vt as S,Pt as T,Ft as U,It as V,Ot as W,q as X,jt as Y,Lt as Z,kt as _,rt as a,At as b,Nt as c,v as d,G as e,Ht as f,ct as g,lt as h,Ut as i,Ct as j,vt as k,Et as l,St as m,P as n,at as o,dt as p,ft as q,K as r,pt as s,S as t,Dt as u,Bt as v,qt as w,Kt as x,Qt as y,_t as z};
