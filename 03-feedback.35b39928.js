!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i=o("hKHmD"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f.default(e,t,n[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var l,c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",s=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,O=y||g||Function("return this")(),j=Object.prototype.toString,h=Math.max,w=Math.min,x=function(){return O.Date.now()};function S(e,t,n){var r,o,i,u,a,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(d);function p(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function m(e){return l=e,a=setTimeout(y,t),c?p(e):u}function b(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function y(){var e=x();if(b(e))return g(e);a=setTimeout(y,function(e){var n=t-(e-f);return s?w(n,i-(e-l)):n}(e))}function g(e){return a=void 0,v&&r?p(e):(r=o=void 0,u)}function O(){var e=x(),n=b(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return m(f);if(s)return a=setTimeout(y,t),p(f)}return void 0===a&&(a=setTimeout(y,t)),u}return t=T(t)||0,_(n)&&(c=!!n.leading,i=(s="maxWait"in n)?h(T(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(x())},O}function _(t){var n=void 0===t?"undefined":e(c)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(_(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=_(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=p.test(t);return r||m.test(t)?b(t.slice(2),r?2:8):v.test(t)?NaN:+t}l=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return _(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var D,E=document.querySelector(".feedback-form"),M=E.querySelector('input[name="email"]'),N=E.querySelector('textarea[name="message"]'),P="feedback-form-state",q=function(){var e=localStorage.getItem(P);return e?JSON.parse(e):{}},I=e(l)((function(e){localStorage.setItem(P,JSON.stringify(e))}),500);E.addEventListener("input",(function(t){var n=t.target,r=n.name,o=n.value,a=q(),f=e(u)({},a,e(i)({},r,o));I(f)})),E.addEventListener("submit",(function(e){e.preventDefault();var t=q();localStorage.removeItem(P),M.value="",N.value="",console.log(t)})),D=q(),M.value=D.email||"",N.value=D.message||""}();
//# sourceMappingURL=03-feedback.35b39928.js.map