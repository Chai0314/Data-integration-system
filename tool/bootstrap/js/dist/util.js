/*! For license information please see util.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).Util=e(t.jQuery)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r="transitionend";var o={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=n.default(t).css("transition-duration"),r=n.default(t).css("transition-delay"),o=parseFloat(e),i=parseFloat(r);return o||i?(e=e.split(",")[0],r=r.split(",")[0],1e3*(parseFloat(e)+parseFloat(r))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){n.default(t).trigger(r)},supportsTransitionEnd:function(){return Boolean(r)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r],a=e[r],u=a&&o.isElement(a)?"element":null==(l=a)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(i).test(u))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+u+'" but expected type "'+i+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?o.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if(void 0===n.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=n.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return o.jQueryDetection(),n.default.fn.emulateTransitionEnd=function(t){var e=this,r=!1;return n.default(this).one(o.TRANSITION_END,(function(){r=!0})),setTimeout((function(){r||o.triggerTransitionEnd(e)}),t),this},n.default.event.special[o.TRANSITION_END]={bindType:r,delegateType:r,handle:function(t){if(n.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},o}));