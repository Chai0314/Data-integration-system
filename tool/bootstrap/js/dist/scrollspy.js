/*! For license information please see scrollspy.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).ScrollSpy=e(t.jQuery,t.Util)}(this,(function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=i(t),r=i(e);function s(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},n.apply(this,arguments)}var o="scrollspy",a="bs.scrollspy",f=l.default.fn[o],c={offset:10,method:"auto",target:""},u={offset:"number",method:"string",target:"(string|element)"},h="active",g=".nav, .list-group",d="position",_=function(){function t(t,e){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,l.default(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var e,i,f=t.prototype;return f.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":d,i="auto"===this._config.method?e:this._config.method,s=i===d?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var e,n=r.default.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var o=e.getBoundingClientRect();if(o.width||o.height)return[l.default(e)[i]().top+s,n]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},f.dispose=function(){l.default.removeData(this._element,a),l.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},f._getConfig=function(t){if("string"!=typeof(t=n({},c,"object"==typeof t&&t?t:{})).target&&r.default.isElement(t.target)){var e=l.default(t.target).attr("id");e||(e=r.default.getUID(o),l.default(t.target).attr("id",e)),t.target="#"+e}return r.default.typeCheckConfig(o,t,u),t},f._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},f._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},f._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},f._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){var l=this._targets[this._targets.length-1];this._activeTarget!==l&&this._activate(l)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}},f._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=l.default([].slice.call(document.querySelectorAll(e.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass(h),i.addClass(h)):(i.addClass(h),i.parents(g).prev(".nav-link, .list-group-item").addClass(h),i.parents(g).prev(".nav-item").children(".nav-link").addClass(h)),l.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},f._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains(h)})).forEach((function(t){return t.classList.remove(h)}))},t._jQueryInterface=function(e){return this.each((function(){var i=l.default(this).data(a);if(i||(i=new t(this,"object"==typeof e&&e),l.default(this).data(a,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}}))},e=t,i=[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return c}}],null&&s(e.prototype,null),i&&s(e,i),t}();return l.default(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var i=l.default(t[e]);_._jQueryInterface.call(i,i.data())}})),l.default.fn[o]=_._jQueryInterface,l.default.fn[o].Constructor=_,l.default.fn[o].noConflict=function(){return l.default.fn[o]=f,_._jQueryInterface},_}));