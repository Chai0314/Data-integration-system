import $ from"jquery";const TRANSITION_END="transitionend",MAX_UID=1e6,MILLISECONDS_MULTIPLIER=1e3;function toType(t){return null==t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()}function getSpecialTransitionEndEvent(){return{bindType:TRANSITION_END,delegateType:TRANSITION_END,handle(t){if($(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function transitionEndEmulator(t){let e=!1;return $(this).one(Util.TRANSITION_END,(()=>{e=!0})),setTimeout((()=>{e||Util.triggerTransitionEnd(this)}),t),this}function setTransitionEndSupport(){$.fn.emulateTransitionEnd=transitionEndEmulator,$.event.special[Util.TRANSITION_END]=getSpecialTransitionEndEvent()}const Util={TRANSITION_END:"bsTransitionEnd",getUID(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement(t){let e=t.getAttribute("data-target");if(!e||"#"===e){const n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement(t){if(!t)return 0;let e=$(t).css("transition-duration"),n=$(t).css("transition-delay");const r=parseFloat(e),o=parseFloat(n);return r||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:t=>t.offsetHeight,triggerTransitionEnd(t){$(t).trigger(TRANSITION_END)},supportsTransitionEnd:()=>Boolean(TRANSITION_END),isElement:t=>(t[0]||t).nodeType,typeCheckConfig(t,e,n){for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const o=n[r],i=e[r],a=i&&Util.isElement(i)?"element":toType(i);if(!new RegExp(o).test(a))throw new Error(`${t.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${o}".`)}},findShadowRoot(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?Util.findShadowRoot(t.parentNode):null},jQueryDetection(){if(void 0===$)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");const t=$.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};Util.jQueryDetection(),setTransitionEndSupport();export default Util;