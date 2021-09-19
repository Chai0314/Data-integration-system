import $ from"jquery";import Util from"./util";const NAME="collapse",VERSION="4.6.0",DATA_KEY="bs.collapse",EVENT_KEY=".bs.collapse",DATA_API_KEY=".data-api",JQUERY_NO_CONFLICT=$.fn[NAME],Default={toggle:!0,parent:""},DefaultType={toggle:"boolean",parent:"(string|element)"},EVENT_SHOW="show.bs.collapse",EVENT_SHOWN="shown.bs.collapse",EVENT_HIDE="hide.bs.collapse",EVENT_HIDDEN="hidden.bs.collapse",EVENT_CLICK_DATA_API="click.bs.collapse.data-api",CLASS_NAME_SHOW="show",CLASS_NAME_COLLAPSE="collapse",CLASS_NAME_COLLAPSING="collapsing",CLASS_NAME_COLLAPSED="collapsed",DIMENSION_WIDTH="width",DIMENSION_HEIGHT="height",SELECTOR_ACTIVES=".show, .collapsing",SELECTOR_DATA_TOGGLE='[data-toggle="collapse"]';class Collapse{constructor(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll(`[data-toggle="collapse"][href="#${e.id}"],[data-toggle="collapse"][data-target="#${e.id}"]`));const l=[].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));for(let t=0,s=l.length;t<s;t++){const s=l[t],i=Util.getSelectorFromElement(s),n=[].slice.call(document.querySelectorAll(i)).filter((t=>t===e));null!==i&&n.length>0&&(this._selector=i,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get VERSION(){return"4.6.0"}static get Default(){return Default}toggle(){$(this._element).hasClass("show")?this.hide():this.show()}show(){if(this._isTransitioning||$(this._element).hasClass("show"))return;let e,t;if(this._parent&&(e=[].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter((e=>"string"==typeof this._config.parent?e.getAttribute("data-parent")===this._config.parent:e.classList.contains("collapse"))),0===e.length&&(e=null)),e&&(t=$(e).not(this._selector).data(DATA_KEY),t&&t._isTransitioning))return;const l=$.Event(EVENT_SHOW);if($(this._element).trigger(l),l.isDefaultPrevented())return;e&&(Collapse._jQueryInterface.call($(e).not(this._selector),"hide"),t||$(e).data(DATA_KEY,null));const s=this._getDimension();$(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[s]=0,this._triggerArray.length&&$(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);const i=`scroll${s[0].toUpperCase()+s.slice(1)}`,n=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,(()=>{$(this._element).removeClass("collapsing").addClass("collapse show"),this._element.style[s]="",this.setTransitioning(!1),$(this._element).trigger(EVENT_SHOWN)})).emulateTransitionEnd(n),this._element.style[s]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!$(this._element).hasClass("show"))return;const e=$.Event(EVENT_HIDE);if($(this._element).trigger(e),e.isDefaultPrevented())return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Util.reflow(this._element),$(this._element).addClass("collapsing").removeClass("collapse show");const l=this._triggerArray.length;if(l>0)for(let e=0;e<l;e++){const t=this._triggerArray[e],l=Util.getSelectorFromElement(t);null!==l&&($([].slice.call(document.querySelectorAll(l))).hasClass("show")||$(t).addClass("collapsed").attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="";const s=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,(()=>{this.setTransitioning(!1),$(this._element).removeClass("collapsing").addClass("collapse").trigger(EVENT_HIDDEN)})).emulateTransitionEnd(s)}setTransitioning(e){this._isTransitioning=e}dispose(){$.removeData(this._element,DATA_KEY),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(e){return(e={...Default,...e}).toggle=Boolean(e.toggle),Util.typeCheckConfig(NAME,e,DefaultType),e}_getDimension(){return $(this._element).hasClass("width")?"width":"height"}_getParent(){let e;Util.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);const t=`[data-toggle="collapse"][data-parent="${this._config.parent}"]`,l=[].slice.call(e.querySelectorAll(t));return $(l).each(((e,t)=>{this._addAriaAndCollapsedClass(Collapse._getTargetFromElement(t),[t])})),e}_addAriaAndCollapsedClass(e,t){const l=$(e).hasClass("show");t.length&&$(t).toggleClass("collapsed",!l).attr("aria-expanded",l)}static _getTargetFromElement(e){const t=Util.getSelectorFromElement(e);return t?document.querySelector(t):null}static _jQueryInterface(e){return this.each((function(){const t=$(this);let l=t.data(DATA_KEY);const s={...Default,...t.data(),..."object"==typeof e&&e?e:{}};if(!l&&s.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(s.toggle=!1),l||(l=new Collapse(this,s),t.data(DATA_KEY,l)),"string"==typeof e){if(void 0===l[e])throw new TypeError(`No method named "${e}"`);l[e]()}}))}}$(document).on(EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();const t=$(this),l=Util.getSelectorFromElement(this),s=[].slice.call(document.querySelectorAll(l));$(s).each((function(){const e=$(this),l=e.data(DATA_KEY)?"toggle":t.data();Collapse._jQueryInterface.call(e,l)}))})),$.fn[NAME]=Collapse._jQueryInterface,$.fn[NAME].Constructor=Collapse,$.fn[NAME].noConflict=()=>($.fn[NAME]=JQUERY_NO_CONFLICT,Collapse._jQueryInterface);export default Collapse;