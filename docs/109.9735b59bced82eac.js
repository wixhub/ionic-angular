"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[109],{109:(G,I,_)=>{_.r(I),_.d(I,{startInputShims:()=>Y});var w=_(5861),y=_(8935),v=_(3756);const L=new WeakMap,b=(t,n,e,o=0)=>{L.has(t)!==e&&(e?B(t,n,o):M(t,n))},A=t=>t===t.getRootNode().activeElement,B=(t,n,e)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),L.set(t,r);const s="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${e}px,0) scale(0)`},M=(t,n)=>{const e=L.get(t);e&&(L.delete(t),e.remove()),t.style.pointerEvents="",n.style.transform=""},D="input, textarea, [no-blur], [contenteditable]",U=function(){var t=(0,w.Z)(function*(n,e,o,r,i){if(!o&&!r)return;const s=((t,n,e)=>((t,n,e,o)=>{const r=t.top,i=t.bottom,s=n.top,a=s+15,f=.75*Math.min(n.bottom,o-e)-i,h=a-r,d=Math.round(f<0?-f:h>0?-h:0),c=Math.min(d,r-s),S=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,S)),scrollPadding:e,inputSafeY:4-(r-a)}})((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),n.getBoundingClientRect(),e,t.ownerDocument.defaultView.innerHeight))(n,o||r,i);if(o&&Math.abs(s.scrollAmount)<4)e.focus();else if(b(n,e,!0,s.inputSafeY),e.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let u;const a=function(){var f=(0,w.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",a),o&&(yield(0,y.c)(o,0,s.scrollAmount,s.scrollDuration)),b(n,e,!1,s.inputSafeY),e.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",a)};if(o){const f=yield(0,y.g)(o);if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===e.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",a),void(u=setTimeout(a,1e3))}a()}});return function(e,o,r,i,s){return t.apply(this,arguments)}}(),T="$ionPaddingTimer",P=(t,n)=>{var e,o;if("INPUT"!==t.tagName||t.parentElement&&"ION-INPUT"===t.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(e=t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,y.f)(t);if(null===r)return;const i=r[T];i&&clearTimeout(i),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[T]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},Y=t=>{const n=document,e=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),r=t.getBoolean("hideCaretOnScroll",!0),i=t.getBoolean("inputBlurring",!0),s=t.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),a=new WeakMap,l=new WeakMap,f=function(){var d=(0,w.Z)(function*(c){yield new Promise(g=>(0,v.c)(c,g));const p=c.shadowRoot||c,S=p.querySelector("input")||p.querySelector("textarea"),m=(0,y.f)(c),C=m?null:c.closest("ion-footer");if(S){if(m&&r&&!a.has(c)){const g=((t,n,e)=>{if(!e||!n)return()=>{};const o=u=>{A(n)&&b(t,n,u)},r=()=>b(t,n,!1),i=()=>o(!0),s=()=>o(!1);return(0,v.a)(e,"ionScrollStart",i),(0,v.a)(e,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(e,"ionScrollStart",i),(0,v.b)(e,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(c,S,m);a.set(c,g)}if("date"!==S.type&&"datetime-local"!==S.type&&(m||C)&&o&&!l.has(c)){const g=((t,n,e,o,r)=>{let i;const s=a=>{i=(0,v.p)(a)},u=a=>{if(!i)return;const l=(0,v.p)(a);!((t,n,e)=>{if(n&&e){const o=n.x-e.x,r=n.y-e.y;return o*o+r*r>t*t}return!1})(6,i,l)&&!A(n)&&U(t,n,e,o,r)};return t.addEventListener("touchstart",s,{capture:!0,passive:!0}),t.addEventListener("touchend",u,!0),()=>{t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",u,!0)}})(c,S,m,C,e);l.set(c,g)}}});return function(p){return d.apply(this,arguments)}}();i&&(()=>{let t=!0,n=!1;const e=document;(0,v.a)(e,"ionScrollStart",()=>{n=!0}),e.addEventListener("focusin",()=>{t=!0},!0),e.addEventListener("touchend",s=>{if(n)return void(n=!1);const u=e.activeElement;if(!u||u.matches(D))return;const a=s.target;a!==u&&(a.matches(D)||a.closest(D)||(t=!1,setTimeout(()=>{t||u.blur()},50)))},!1)})(),s&&(t=>{const n=document;n.addEventListener("focusin",r=>{P(r.target,t)}),n.addEventListener("focusout",r=>{P(r.target,0)})})(e);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(r){const c=a.get(d);c&&c(),a.delete(d)}if(o){const c=l.get(d);c&&c(),l.delete(d)}})(d.detail)})}}}]);