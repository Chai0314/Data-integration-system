/*! For license information please see carousel.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Carousel=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(e),l=i(t);function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s.apply(this,arguments)}var r="carousel",o="bs.carousel",u="."+o,c=n.default.fn[r],h={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},d={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},f="next",_="prev",v="slid"+u,m="active",g=".active.carousel-item",p={TOUCH:"touch",PEN:"pen"},y=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t,i,c=e.prototype;return c.next=function(){this._isSliding||this._slide(f)},c.nextWhenVisible=function(){var e=n.default(this._element);!document.hidden&&e.is(":visible")&&"hidden"!==e.css("visibility")&&this.next()},c.prev=function(){this._isSliding||this._slide(_)},c.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(l.default.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},c.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},c.to=function(e){var t=this;this._activeElement=this._element.querySelector(g);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)n.default(this._element).one(v,(function(){return t.to(e)}));else{if(i===e)return this.pause(),void this.cycle();var l=e>i?f:_;this._slide(l,this._items[e])}},c.dispose=function(){n.default(this._element).off(u),n.default.removeData(this._element,o),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},c._getConfig=function(e){return e=s({},h,e),l.default.typeCheckConfig(r,e,d),e},c._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},c._addEventListeners=function(){var e=this;this._config.keyboard&&n.default(this._element).on("keydown.bs.carousel",(function(t){return e._keydown(t)})),"hover"===this._config.pause&&n.default(this._element).on("mouseenter.bs.carousel",(function(t){return e.pause(t)})).on("mouseleave.bs.carousel",(function(t){return e.cycle(t)})),this._config.touch&&this._addTouchEventListeners()},c._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function(t){e._pointerEvent&&p[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&p[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout((function(t){return e.cycle(t)}),500+e._config.interval))};n.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(e){return e.preventDefault()})),this._pointerEvent?(n.default(this._element).on("pointerdown.bs.carousel",(function(e){return t(e)})),n.default(this._element).on("pointerup.bs.carousel",(function(e){return i(e)})),this._element.classList.add("pointer-event")):(n.default(this._element).on("touchstart.bs.carousel",(function(e){return t(e)})),n.default(this._element).on("touchmove.bs.carousel",(function(t){return function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)})),n.default(this._element).on("touchend.bs.carousel",(function(e){return i(e)})))}},c._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},c._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},c._getItemByDirection=function(e,t){var i=e===f,n=e===_,l=this._getItemIndex(t),a=this._items.length-1;if((n&&0===l||i&&l===a)&&!this._config.wrap)return t;var s=(l+(e===_?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},c._triggerSlideEvent=function(e,t){var i=this._getItemIndex(e),l=this._getItemIndex(this._element.querySelector(g)),a=n.default.Event("slide.bs.carousel",{relatedTarget:e,direction:t,from:l,to:i});return n.default(this._element).trigger(a),a},c._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));n.default(t).removeClass(m);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&n.default(i).addClass(m)}},c._updateInterval=function(){var e=this._activeElement||this._element.querySelector(g);if(e){var t=parseInt(e.getAttribute("data-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}},c._slide=function(e,t){var i,a,s,r=this,o=this._element.querySelector(g),u=this._getItemIndex(o),c=t||o&&this._getItemByDirection(e,o),h=this._getItemIndex(c),d=Boolean(this._interval);if(e===f?(i="carousel-item-left",a="carousel-item-next",s="left"):(i="carousel-item-right",a="carousel-item-prev",s="right"),c&&n.default(c).hasClass(m))this._isSliding=!1;else if(!this._triggerSlideEvent(c,s).isDefaultPrevented()&&o&&c){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(c),this._activeElement=c;var _=n.default.Event(v,{relatedTarget:c,direction:s,from:u,to:h});if(n.default(this._element).hasClass("slide")){n.default(c).addClass(a),l.default.reflow(c),n.default(o).addClass(i),n.default(c).addClass(i);var p=l.default.getTransitionDurationFromElement(o);n.default(o).one(l.default.TRANSITION_END,(function(){n.default(c).removeClass(i+" "+a).addClass(m),n.default(o).removeClass("active "+a+" "+i),r._isSliding=!1,setTimeout((function(){return n.default(r._element).trigger(_)}),0)})).emulateTransitionEnd(p)}else n.default(o).removeClass(m),n.default(c).addClass(m),this._isSliding=!1,n.default(this._element).trigger(_);d&&this.cycle()}},e._jQueryInterface=function(t){return this.each((function(){var i=n.default(this).data(o),l=s({},h,n.default(this).data());"object"==typeof t&&(l=s({},l,t));var a="string"==typeof t?t:l.slide;if(i||(i=new e(this,l),n.default(this).data(o,i)),"number"==typeof t)i.to(t);else if("string"==typeof a){if(void 0===i[a])throw new TypeError('No method named "'+a+'"');i[a]()}else l.interval&&l.ride&&(i.pause(),i.cycle())}))},e._dataApiClickHandler=function(t){var i=l.default.getSelectorFromElement(this);if(i){var a=n.default(i)[0];if(a&&n.default(a).hasClass("carousel")){var r=s({},n.default(a).data(),n.default(this).data()),u=this.getAttribute("data-slide-to");u&&(r.interval=!1),e._jQueryInterface.call(n.default(a),r),u&&n.default(a).data(o).to(u),t.preventDefault()}}},t=e,i=[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return h}}],null&&a(t.prototype,null),i&&a(t,i),e}();return n.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",y._dataApiClickHandler),n.default(window).on("load.bs.carousel.data-api",(function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),t=0,i=e.length;t<i;t++){var l=n.default(e[t]);y._jQueryInterface.call(l,l.data())}})),n.default.fn[r]=y._jQueryInterface,n.default.fn[r].Constructor=y,n.default.fn[r].noConflict=function(){return n.default.fn[r]=c,y._jQueryInterface},y}));