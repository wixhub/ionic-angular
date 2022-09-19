"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2773],{2773:(M,C,h)=>{h.r(C),h.d(C,{ion_select:()=>_,ion_select_option:()=>D,ion_select_popover:()=>j});var u=h(5861),s=h(7936),f=h(1671),v=h(3756),x=h(4239),O=h(2854);const a=(e,t)=>1!==e.nodeType?void 0:(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(n=>n.value===e.value),_=class{constructor(e){(0,s.r)(this,e),this.ionChange=(0,s.e)(this,"ionChange",7),this.ionCancel=(0,s.e)(this,"ionCancel",7),this.ionDismiss=(0,s.e)(this,"ionDismiss",7),this.ionFocus=(0,s.e)(this,"ionFocus",7),this.ionBlur=(0,s.e)(this,"ionBlur",7),this.ionStyle=(0,s.e)(this,"ionStyle",7),this.inputId="ion-sel-"+F++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}styleChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}connectedCallback(){var e=this;return(0,u.Z)(function*(){e.updateOverlayOptions(),e.emitStyle(),e.mutationO=((e,t,i)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(o=>{i(((e,t)=>{let i;return e.forEach(n=>{for(let o=0;o<n.addedNodes.length;o++)i=a(n.addedNodes[o],t)||i}),i})(o,"ion-select-option"))});return n.observe(e,{childList:!0,subtree:!0}),n})(e.el,0,(0,u.Z)(function*(){e.updateOverlayOptions()}))})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}open(e){var t=this;return(0,u.Z)(function*(){if(t.disabled||t.isExpanded)return;t.isExpanded=!0;const i=t.overlay=yield t.createOverlay(e);if(i.onDidDismiss().then(()=>{t.overlay=void 0,t.isExpanded=!1,t.ionDismiss.emit(),t.setFocus()}),yield i.present(),"popover"===t.interface){let n=t.childOpts.map(l=>l.value).indexOf(t.value);n=n>-1?n:0;const o=i.querySelector(`.select-interface-option:nth-child(${n+1})`);o&&(0,v.f)(o)}return i})()}createOverlay(e){let t=this.interface;return"action-sheet"===t&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"===t&&!e&&(console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`),t="alert"),"action-sheet"===t?this.openActionSheet():"popover"===t?this.openPopover(e):this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,i);break;case"popover":const n=e.querySelector("ion-select-popover");n&&(n.options=this.createPopoverOptions(t,i));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(e,t){const i=e.map(n=>{const o=w(n),l=Array.from(n.classList).filter(c=>"hydrated"!==c).join(" "),p=`${S} ${l}`;return{role:g(t,o,this.compareWith)?"selected":"",text:n.textContent,cssClass:p,handler:()=>{this.value=o}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(e,t,i){return e.map(o=>{const l=w(o),p=Array.from(o.classList).filter(m=>"hydrated"!==m).join(" ");return{type:t,cssClass:`${S} ${p}`,label:o.textContent||"",value:l,checked:g(i,l,this.compareWith),disabled:o.disabled}})}createPopoverOptions(e,t){return e.map(n=>{const o=w(n),l=Array.from(n.classList).filter(c=>"hydrated"!==c).join(" ");return{text:n.textContent||"",cssClass:`${S} ${l}`,value:o,checked:g(t,o,this.compareWith),disabled:n.disabled,handler:c=>{this.value=c,this.multiple||this.close()}}})}openPopover(e){var t=this;return(0,u.Z)(function*(){const i=t.interfaceOptions,n=(0,f.b)(t),o="md"!==n,l=t.multiple,p=t.value;let c=e,m="auto";const b=t.el.closest("ion-item");b&&(b.classList.contains("item-label-floating")||b.classList.contains("item-label-stacked"))&&(c=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:b}}),m="cover");const I=Object.assign(Object.assign({mode:n,event:c,alignment:"center",size:m,showBackdrop:o},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,multiple:l,value:p,options:t.createPopoverOptions(t.childOpts,p)}});return x.c.create(I)})()}openActionSheet(){var e=this;return(0,u.Z)(function*(){const t=(0,f.b)(e),i=e.interfaceOptions,n=Object.assign(Object.assign({mode:t},i),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",i.cssClass]});return x.b.create(n)})()}openAlert(){var e=this;return(0,u.Z)(function*(){const t=e.getLabel(),i=t?t.textContent:null,n=e.interfaceOptions,o=e.multiple?"checkbox":"radio",l=(0,f.b)(e),p=Object.assign(Object.assign({mode:l},n),{header:n.header?n.header:i,inputs:e.createAlertInputs(e.childOpts,o,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:()=>{e.ionCancel.emit()}},{text:e.okText,handler:c=>{e.value=c}}],cssClass:["select-alert",n.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]});return x.a.create(p)})()}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,v.k)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:B(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})}render(){const{disabled:e,el:t,inputId:i,isExpanded:n,name:o,placeholder:l,value:p}=this,c=(0,f.b)(this),{labelText:m,labelId:b}=(0,v.d)(t,i);(0,v.e)(!0,t,o,z(p),e);let T=!1,y=this.getText();""===y&&void 0!==l&&(y=l,T=!0);const K={"select-text":!0,"select-placeholder":T},Z=T?"placeholder":"text",L=void 0!==m?""!==y?`${y}, ${m}`:m:y;return(0,s.h)(s.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":L,class:{[c]:!0,"in-item":(0,O.h)("ion-item",t),"select-disabled":e,"select-expanded":n}},(0,s.h)("div",{"aria-hidden":"true",class:K,part:Z},y),(0,s.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,s.h)("div",{class:"select-icon-inner"})),(0,s.h)("label",{id:b},L),(0,s.h)("button",{type:"button",disabled:e,id:i,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":`${n}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:W=>this.focusEl=W}))}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}}},g=(e,t,i)=>void 0!==e&&(Array.isArray(e)?e.some(n=>A(n,t,i)):A(e,t,i)),w=e=>{const t=e.value;return void 0===t?e.textContent||"":t},z=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},A=(e,t,i)=>"function"==typeof i?i(e,t):"string"==typeof i?e[i]===t[i]:Array.isArray(t)?t.includes(e):e===t,B=(e,t,i)=>void 0===t?"":Array.isArray(t)?t.map(n=>P(e,n,i)).filter(n=>null!==n).join(", "):P(e,t,i)||"",P=(e,t,i)=>{const n=e.find(o=>A(t,w(o),i));return n?n.textContent:null};let F=0;const S="select-interface-option";_.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};const D=class{constructor(e){(0,s.r)(this,e),this.inputId="ion-selopt-"+U++,this.disabled=!1}render(){return(0,s.h)(s.H,{role:"option",id:this.inputId,class:(0,f.b)(this)})}get el(){return(0,s.i)(this)}};let U=0;D.style=":host{display:none}";const j=class{constructor(e){(0,s.r)(this,e),this.options=[]}onSelect(e){this.setChecked(e),this.callOptionHandler(e)}findOptionFromEvent(e){const{options:t}=this;return t.find(i=>i.value===e.target.value)}callOptionHandler(e){const t=this.findOptionFromEvent(e),i=this.getValues(e);t?.handler&&(0,x.s)(t.handler,i)}rbClick(e){this.callOptionHandler(e)}setChecked(e){const{multiple:t}=this,i=this.findOptionFromEvent(e);t&&i&&(i.checked=e.detail.checked)}getValues(e){const{multiple:t,options:i}=this;if(t)return i.filter(o=>o.checked).map(o=>o.value);const n=this.findOptionFromEvent(e);return n?n.value:void 0}renderOptions(e){const{multiple:t}=this;return!0===t?this.renderCheckboxOptions(e):this.renderRadioOptions(e)}renderCheckboxOptions(e){return e.map(t=>(0,s.h)("ion-item",{class:(0,O.g)(t.cssClass)},(0,s.h)("ion-checkbox",{slot:"start",value:t.value,disabled:t.disabled,checked:t.checked}),(0,s.h)("ion-label",null,t.text)))}renderRadioOptions(e){const t=e.filter(i=>i.checked).map(i=>i.value)[0];return(0,s.h)("ion-radio-group",{value:t},e.map(i=>(0,s.h)("ion-item",{class:(0,O.g)(i.cssClass)},(0,s.h)("ion-label",null,i.text),(0,s.h)("ion-radio",{value:i.value,disabled:i.disabled,onClick:n=>this.rbClick(n)}))))}render(){const{header:e,message:t,options:i,subHeader:n}=this,o=void 0!==n||void 0!==t;return(0,s.h)(s.H,{class:(0,f.b)(this)},(0,s.h)("ion-list",null,void 0!==e&&(0,s.h)("ion-list-header",null,e),o&&(0,s.h)("ion-item",null,(0,s.h)("ion-label",{class:"ion-text-wrap"},void 0!==n&&(0,s.h)("h3",null,n),void 0!==t&&(0,s.h)("p",null,t))),this.renderOptions(i)))}};j.style={ios:".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",md:".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}"}},2854:(M,C,h)=>{h.d(C,{c:()=>f,g:()=>x,h:()=>s,o:()=>E});var u=h(5861);const s=(r,a)=>null!==a.closest(r),f=(r,a)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},a):a,x=r=>{const a={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(r).forEach(d=>a[d]=!0),a},O=/^[a-z][a-z0-9+\-.]*:/,E=function(){var r=(0,u.Z)(function*(a,d,k,_){if(null!=a&&"#"!==a[0]&&!O.test(a)){const g=document.querySelector("ion-router");if(g)return d?.preventDefault(),g.push(a,k,_)}return!1});return function(d,k,_,g){return r.apply(this,arguments)}}()}}]);