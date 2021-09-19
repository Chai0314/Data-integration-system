import $ from"jquery";import Util from"./util";const NAME="alert",VERSION="4.6.0",DATA_KEY="bs.alert",EVENT_KEY=".bs.alert",DATA_API_KEY=".data-api",JQUERY_NO_CONFLICT=$.fn.alert,SELECTOR_DISMISS='[data-dismiss="alert"]',EVENT_CLOSE="close.bs.alert",EVENT_CLOSED="closed.bs.alert",EVENT_CLICK_DATA_API="click.bs.alert.data-api",CLASS_NAME_ALERT="alert",CLASS_NAME_FADE="fade",CLASS_NAME_SHOW="show";class Alert{constructor(e){this._element=e}static get VERSION(){return"4.6.0"}close(e){let t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)}dispose(){$.removeData(this._element,DATA_KEY),this._element=null}_getRootElement(e){const t=Util.getSelectorFromElement(e);let r=!1;return t&&(r=document.querySelector(t)),r||(r=$(e).closest(".alert")[0]),r}_triggerCloseEvent(e){const t=$.Event(EVENT_CLOSE);return $(e).trigger(t),t}_removeElement(e){if($(e).removeClass("show"),!$(e).hasClass("fade"))return void this._destroyElement(e);const t=Util.getTransitionDurationFromElement(e);$(e).one(Util.TRANSITION_END,(t=>this._destroyElement(e,t))).emulateTransitionEnd(t)}_destroyElement(e){$(e).detach().trigger(EVENT_CLOSED).remove()}static _jQueryInterface(e){return this.each((function(){const t=$(this);let r=t.data(DATA_KEY);r||(r=new Alert(this),t.data(DATA_KEY,r)),"close"===e&&r[e](this)}))}static _handleDismiss(e){return function(t){t&&t.preventDefault(),e.close(this)}}}$(document).on(EVENT_CLICK_DATA_API,SELECTOR_DISMISS,Alert._handleDismiss(new Alert)),$.fn.alert=Alert._jQueryInterface,$.fn.alert.Constructor=Alert,$.fn.alert.noConflict=()=>($.fn.alert=JQUERY_NO_CONFLICT,Alert._jQueryInterface);export default Alert;