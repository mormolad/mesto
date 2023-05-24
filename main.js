(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._idOwnerCard=e.owner._id,this._idOwnerPage=o,this._idCard=e._id,this._selectorTemplate=n,this._handleCardClick=r,this._sampleCard=this._getTemplate(),this._imageCard=this._sampleCard.querySelector(".card__mask-card"),this._nameCard=this._sampleCard.querySelector(".card__mesto"),this._likesOfNumber=this._sampleCard.querySelector(".card__numberOfLike"),this._buttonDelCard=this._sampleCard.querySelector(".card__del-card"),this._buttonLike=this._sampleCard.querySelector(".card__like"),this._likesOfNumber.textContent=this._likes.length,this._popupDel=i,this._api=u}var n,r;return n=t,(r=[{key:"_setListener",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._hendlerLike()})),this._imageCard.addEventListener("click",(function(){t._handleCardClick({name:t._name,link:t._link})}))}},{key:"_getTemplate",value:function(){return this._template=document.querySelector(this._selectorTemplate).content.querySelector(".card"),this._template.cloneNode(!0)}},{key:"_hendlerLike",value:function(){var t=this;this._checkOwnerLike()?this._api.deleteLike(this._idCard).then((function(e){t._renderButtonLikeClick(),t._likes=e.likes,t._likesOfNumber.textContent=t._likes.length})):this._api.setLike(this._idCard).then((function(e){t._renderButtonLikeClick(),t._likes=e.likes,t._likesOfNumber.textContent=t._likes.length}))}},{key:"_renderButtonLikeClick",value:function(){this._checkOwnerLike()?this._buttonLike.classList.remove("card__like_state_active"):this._buttonLike.classList.add("card__like_state_active")}},{key:"_renderButtonLike",value:function(){this._checkOwnerLike()?this._buttonLike.classList.add("card__like_state_active"):this._buttonLike.classList.remove("card__like_state_active"),this._likesOfNumber.textContent=this._likes.length}},{key:"_checkOwnerLike",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._idOwnerPage}))}},{key:"_setButtonDeleteCard",value:function(){var t=this;this._idOwnerCard===this._idOwnerPage?this._buttonDelCard.addEventListener("click",(function(e){t._popupDel.open(t._idCard,e.target.parentNode)})):this._buttonDelCard.remove("card__del-card")}},{key:"render",value:function(){return this._imageCard.src=this._link,this._imageCard.alt=this._name,this._nameCard.textContent=this._name,this._renderButtonLike(),this._setListener(),this._setButtonDeleteCard(),this._sampleCard}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();const r=n;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c,a,s,l=function(){function t(e,n){var r,o,i,c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(){c._inputs.forEach((function(t){t.addEventListener("input",(function(){c._toggleInputState(t),c._toggleButtonState()}))}))},(o=u(o="_setEventListners"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputSectionSelector=e.inputSectionSelector,this._inputErrorSelector=e.inputErrorSelector,this._inputErrorClass=e.inputErrorClass,this._inactiveButtonClass=e.inactiveButtonClass,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){t.innerText=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(t,e){t.innerText="",e.classList.remove(this._inputErrorClass)}},{key:"_toggleInputState",value:function(t){var e=this._getSpanError(t);t.validity.valid?this._hideError(e,t):this._showError(e,t)}},{key:"_getSpanError",value:function(t){return t.closest(this._inputSectionSelector).querySelector(this._inputErrorSelector)}},{key:"_enableButton",value:function(){this._buttonSubmit.removeAttribute("disabled"),this._buttonSubmit.classList.remove(this._inactiveButtonClass)}},{key:"_disableButton",value:function(){this._buttonSubmit.setAttribute("disabled",!0),this._buttonSubmit.classList.add(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._inputs.some((function(t){return!1===t.validity.valid}))?this._disableButton():this._enableButton()}},{key:"resetErrorInputs",value:function(){var t=this;this._inputs.forEach((function(e){t._hideError(t._getSpanError(e),e)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}const p=(c={formSelector:".popup__content",inputSelector:".popup__field",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disable",inputSectionSelector:".popup__form-section",inputErrorSelector:".popup__message-error",inputErrorClass:"popup__field_state-invalid"},s="popup__submit_disable",(a=function(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}(a="inactiveButtonClass"))in c?Object.defineProperty(c,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[a]=s,c);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var b=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardsContainer=document.querySelector(e)}var e,n;return e=t,(n=[{key:"renderCards",value:function(t){var e=this,n=t.items,r=t.renderer;n.forEach((function(t){e.addItem(r(t))}))}},{key:"addItem",value:function(t){this._cardsContainer.prepend(t)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_(r.key),r)}}function _(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close-popup"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_enable"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){window.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_enable")}},{key:"_closePopupClickOnOverlay",value:function(t){t.currentTarget===t.target&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){t._closePopupClickOnOverlay(e)})),this._buttonClose.addEventListener("click",(function(){t.close()}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function w(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imagePopupImages=e._popup.querySelector("#popup-image__image-popup"),e._titlePopupImages=e._popup.querySelector("#popup-image__title"),e}return e=u,(n=[{key:"open",value:function(t){this._imagePopupImages.src=t.link,this._imagePopupImages.alt=t.name,this._titlePopupImages.textContent=t.name,E(j(u.prototype),"open",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function T(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===C(e)?e:String(e)}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).form=n._popup.querySelector(".popup__content"),n._submitForm=e,n._inputList=n.form.querySelectorAll(".popup__field"),n._buttonSubmit=n.form.querySelector(".popup__submit"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.getAttribute("name")]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;this.form.addEventListener("submit",(function(e){e.preventDefault(),t._buttonSubmit.innerText="Сохранение...",t._submitForm(t._getInputValues()),t.close(),t._buttonSubmit.innerText="Сохранить"})),B(q(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this.form.reset(),B(q(u.prototype),"close",this).call(this)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,A(r.key),r)}}function A(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===D(e)?e:String(e)}var N=function(){function t(e,n){var r=e.selectorName,o=e.selectorEmployment,i=e.selectorAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._employment=document.querySelector(o),this._avatar=document.querySelector(i),this._api=n}var e,n;return e=t,(n=[{key:"setUserInfo",value:function(t){var e=t.name,n=t.employment;this._name.textContent=e,this._employment.textContent=n}},{key:"setAvatar",value:function(t){this._avatar.src=t}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,J(r.key),r)}}function J(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===U(e)?e:String(e)}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.url,this.headers=e.headers}var e,n;return e=t,(n=[{key:"getInfoUser",value:function(){return fetch("".concat(this.url,"users/me"),{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"getCard",value:function(){return fetch("".concat(this.url,"cards"),{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"setUserData",value:function(t){return fetch("".concat(this.url,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"setNewCadr",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this.url,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this.url,"cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this.url,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"setLike",value:function(t){return fetch("".concat(this.url,"cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}},{key:"setAvatar",value:function(t){return fetch("".concat(this.url,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,z(r.key),r)}}function z(t){var e=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===G(e)?e:String(e)}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(this,arguments)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(o){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).form=n._popup.querySelector(".popup__content"),n._api=e,n}return e=u,(n=[{key:"setEventListeners",value:function(t,e){var n=this;this.form.addEventListener("submit",(function(r){r.preventDefault(),n._api.deleteCard(t).then((function(){e.remove(),M(Q(u.prototype),"close",n).call(n)}))})),M(Q(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(t,e){this.setEventListeners(t,e),M(Q(u.prototype),"open",this).call(this)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S),X=document.querySelector("#profile__edit-button"),Y=document.querySelector("#profile__add-button"),Z=document.querySelector("#profile__edit-avatar"),$="#card-item",tt=new F({url:"https://mesto.nomoreparties.co/v1/cohort-66/",headers:{"Content-Type":"application/json",authorization:"4d34c841-0266-4e27-9ed8-f76bb6fb7087"}}),et=new b(".cards"),nt=new I("#popup-add-card",(function(t){var e=t.inputPlaceName,n=t.inputURLImage;tt.setNewCadr({name:e,link:n}).then((function(t){var e=ht(t,$,mt,t.owner._id);et.addItem(e)}))})),rt=new I("#popup-add-new-avatar",(function(t){tt.setAvatar(t.inputURLAvatar).then((function(t){yt.setAvatar(t.avatar)}))})),ot=new P("#popup-image"),it=new W(".popup_delete",tt),ut=new I("#popup-edit-user",(function(t){var e=t.inputUserName,n=t.inputUserEmployment;tt.setUserData({name:e,about:n}).then(yt.setUserInfo({name:e,employment:n}))})),ct=rt.form.querySelector("#input-url-new-avatar"),at=ut.form.querySelector("#input-user-name"),st=ut.form.querySelector("#input-user-employment"),lt=new l(p,ut.form),ft=new l(p,nt.form),pt=new l(p,rt.form),yt=new N({selectorName:"#profile__username",selectorEmployment:"#profile__employment",selectorAvatar:".profile__avatar"},tt),ht=function(t,e,n,o){return new r(t,e,n,o,it,tt).render()};function mt(t){ot.open(t)}lt.enableValidation(),ft.enableValidation(),pt.enableValidation(),tt.getInfoUser().then((function(t){yt.setUserInfo({name:t.name,employment:t.about}),yt.setAvatar(t.avatar)})),tt.getCard().then((function(t){var e=t;tt.getInfoUser().then((function(t){et.renderCards({items:e.reverse(),renderer:function(e){return ht(e,$,mt,t._id)}})}))})),nt.setEventListeners(),Y.addEventListener("click",(function(){ft.resetErrorInputs(),nt.open()})),ut.setEventListeners(),rt.setEventListeners(),X.addEventListener("click",(function(){tt.getInfoUser().then((function(t){at.value=t.name,st.value=t.about,lt.resetErrorInputs()})),ut.open()})),ot.setEventListeners(),Z.addEventListener("click",(function(){tt.getInfoUser().then((function(t){ct.value=t.avatar,pt.resetErrorInputs()})),rt.open()}))})();