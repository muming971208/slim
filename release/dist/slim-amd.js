define(function(){"use strict";function t(){}var e=function(t){throw new Error(t)},n=window.console.warn,r=function(t,n){t&&e(n)},o=function(t,e){t&&n(e)},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},f={},c={on:function(t,e){f[t]||(f[t]=[]),f[t].push(e)},off:function(t,e){var n=f[t];if(Array.isArray(n)){var r=n.indexOf(e);-1!==r&&n.splice(r,1)}},emit:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=f[t];o(!i,"there are no handler for event ["+t+"]"),i&&i.forEach(function(t){t.apply(void 0,a(n))})}},s=function(t){return"[object Object]"===Object.prototype.toString.call(t)},_=function(t){return"string"==typeof t},d="Function",y=function(t){return Object.keys(t).forEach(function(e){var n=t[e];r("function"!=typeof n,"Reducer for key ["+e+"] must be type of [fnT] but got ["+(void 0===n?"undefined":i(n))+"]")}),t},l=function(t){return Object.keys(t).forEach(function(e){var n=t[e];r("function"!=typeof n,O.shouldBe("Alias."+e,d,void 0===n?"undefined":i(n)))}),t},p=function(t){if(!t)return[];var e=Array.isArray(t)?t:[t];return e.forEach(function(t){v(t)}),e},v=function(t){r(!s(t),O.shouldBe("Plugin","Object",void 0===t?"undefined":i(t)));var e=t.before,n=t.after;e&&r("function"!=typeof e,O.shouldBe("Plugin.before",d,void 0===e?"undefined":i(e))),n&&r("function"!=typeof n,O.shouldBe("Plugin.after",d,void 0===n?"undefined":i(n)))},h=function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e&&e.forEach(function(e){g.apply(void 0,[t,e].concat(r))})},g=function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e[t]&&e[t].apply(e,r)},O={typeError:function(t){return"type of state expect to [Object] but got ["+t+"]"},shouldBe:function(t,e,n){return t+" should be type of ["+e+"] but got ["+n+"]"},cantCall:function(t){return"You may not call "+t+" while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."},cantAssign:function(){return"You may not be able to assign values ​​directly to state. Please return a new state for reducing or edit with state in reducer."}},S=function(t){return JSON.parse(JSON.stringify(t))},E=function(t){return s(t)?t:JSON.parse(t)},m=[],b=null,w=!1,A=void 0,L=function(t){var e=t.reducers,n=void 0===e?{}:e,f=t.state,d=void 0===f?{}:f,v=t.plugin,g=t.aliases,S=void 0===g?{}:g,E=t.mode,L=void 0===E?"strict":E;if(!s(d))throw new TypeError(O.typeError(void 0===d?"undefined":i(d)));w="strict"===L;var I=c.on,N=c.off,V=c.emit,D=T(d),M=y(u({},n,{__SLIM_DEVTOOL_SET__:function(t,e){return e}})),R=[].concat(m,a(p(v)));S=l(S);var j=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),u=1;u<e;u++)n[u-1]=arguments[u];r(!_(t),O.shouldBe("Actions","string",void 0===t?"undefined":i(t))),r(b,"Reducers may not dispatch actions.");try{if(b=t,o(!M[t],"You may not has not registered ["+t+"] in store"),h("before",R),M[t]){var a=M[t].apply(M,[D].concat(n));a&&a!==D&&(D=T(a),A.state=D)}h("after",R)}finally{b=null}return A};return A={on:I,off:N,emit:V,dispatch:j,getState:function(t){return r(b,O.cantCall("store.getState()")),o(t&&!S.hasOwnProperty(t),"Alias of key ["+t+"] is not exist. Please register it with when createStore."),t?S[t]?S[t](D):void 0:D},state:D},h("init",R),A},T=function(t){var e=function(t){return s(t)?n(t):Array.isArray(t)?n(t,!0):t},n=function(t,n){var o={set:function(t,n,o){return r(!b,O.cantAssign()),Reflect.set(t,n,e(S(o)))},get:function(t,e){return Reflect.get(t,e)}},i=u({},o,{set:function(t,n,r){if("__proto__"===n)return Reflect.set(t,n,r);if(b)return Reflect.set(t,n,e(S(r)));throw new Error(O.cantAssign())}});for(var a in t)t[a]=e(t[a]);return new Proxy(t,n?i:o)};return w?n(t):t},I=function(t){v(t),m.push(t)},N=void 0;try{N=require("./package.json").version}catch(t){N=require("../../package.json").version}var V="production"!==process.env.NODE_ENV;o(V&&"string"==typeof t.name&&"isCrushed"!==t.name,'You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Slim. ');return{__VERSION__:N,createStore:function(){return V&&I({init:function(t){window.addEventListener("message",function(e){var n=E(e.data),r=n.type,o=n.state;"__SLIM_DEVTOOL_ANSWER__"===r?t.emit("__SLIM_DEVTOOL_ANSWER__",E(o)):"__SLIM_DEVTOOL_INIT__"===r&&window.postMessage({version:N,type:"__SLIM_DEVTOOL_INIT_ANSWER__",state:JSON.stringify(t.getState())},"*")})},after:function(t,e){-1===["__SLIM_DEVTOOL_INIT__","__SLIM_DEVTOOL_INIT_ANSWER__","__SLIM_DEVTOOL_ANSWER__","__SLIM_DEVTOOL_SET__","__SLIM_DEVTOOL__"].indexOf(e)&&window.postMessage({version:N,type:"__SLIM_DEVTOOL__",state:JSON.stringify(t),actionType:e},"*")}}),L}(),use:I}});