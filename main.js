(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,"ul {\n    display: flex;\n    list-style: none;\n}\n\nli {\n    margin: 0px 5px;\n}",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=c[d]||0,l="".concat(d," ").concat(u);c[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var s=r(e,o),d=0;d<c.length;d++){var u=t(c[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){const n=document.createElement("img");n.src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302188674_518573220270654_8000495395238477754_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dAiIa8QnnDUAX-1JE49&_nc_ht=scontent-sea1-1.xx&oh=00_AfAZ5BcEJ0LP8Y26YWWPOcwund_f8XMcKx_6unCIkZn83Q&oe=63E163DA",e.appendChild(n);const t=document.createElement("h1");t.innerHTML="Welcome to El Gallito mexican food truck!",e.appendChild(t);const r=document.createElement("p");r.innerHTML="El Gallito is a mexican food truck located on Carr Road. We are open from 10AM to 9PM.",e.appendChild(r)}var n=t(379),r=t.n(n),o=t(795),c=t.n(o),a=t(569),i=t.n(a),s=t(565),d=t.n(s),u=t(216),l=t.n(u),p=t(589),f=t.n(p),m=t(28),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=l(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=document.getElementById("content");function _(e){for(;e.firstChild;)e.removeChild(e.lastChild)}e(v),document.getElementById("home").addEventListener("click",(function(){_(v),e(v)})),document.getElementById("menu").addEventListener("click",(function(){_(v),function(e){const n=document.createElement("img");n.src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302188674_518573220270654_8000495395238477754_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dAiIa8QnnDUAX-1JE49&_nc_ht=scontent-sea1-1.xx&oh=00_AfAZ5BcEJ0LP8Y26YWWPOcwund_f8XMcKx_6unCIkZn83Q&oe=63E163DA",e.appendChild(n);const t=document.createElement("h1");t.innerHTML="Menu",e.appendChild(t);const r=document.createElement("p");r.innerHTML="We have Tacos, Burritos, Quesadillas, Tortas, and much more!",e.appendChild(r)}(v)})),document.getElementById("contact").addEventListener("click",(function(){_(v),function(e){const n=document.createElement("img");n.src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302188674_518573220270654_8000495395238477754_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dAiIa8QnnDUAX-1JE49&_nc_ht=scontent-sea1-1.xx&oh=00_AfAZ5BcEJ0LP8Y26YWWPOcwund_f8XMcKx_6unCIkZn83Q&oe=63E163DA",e.appendChild(n);const t=document.createElement("h1");t.innerHTML="Contact us",e.appendChild(t);const r=document.createElement("p");r.innerHTML="Our phone number is 1-800-999-999",e.appendChild(r)}(v)}))})()})();