"use strict";(self.webpackChunkreact_amis_admin=self.webpackChunkreact_amis_admin||[]).push([[7650],{53585:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(26877),o=r(85426),i=r(73064),c=r(55026),a=r(66949),u=r(33486),l=r(67294);r(56469);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(i,e);var t,r,n,o=d(i);function i(){var e;p(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=o.call.apply(o,[this].concat(r))).rendererName="my-renderer",e.$schema="/schemas/UnkownSchema.json",e.name="\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668",e.description="\u8fd9\u53ea\u662f\u4e2a\u793a\u4f8b",e.tags=["\u529f\u80fd"],e.icon="fa fa-server",e.previewSchema={type:"my-renderer",tip:"demo"},e.scaffold={type:"my-renderer",tip:"233"},e.panelTitle="\u81ea\u5b9a\u4e49\u7ec4\u4ef6",e.panelControls=[{type:"tabs",tabsMode:"tiled",className:"editor-prop-config-tabs",contentClassName:"no-border p-l-none p-r-none",tabs:[{title:"\u5e38\u89c4",controls:[{name:"tip",label:"\u5b57\u6bb5\u540d",type:"text"}]},{title:"\u5916\u89c2",controls:[]},{title:"\u663e\u9690",controls:[]},{title:"\u5176\u4ed6",controls:[]}]}],e}return t=i,r&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(i.BasePlugin);(0,i.registerEditorPlugin)(m);var v=r(85893);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(e){var t=e.location,r=w(o.Z.useModel("app"),2),s=r[0],f=r[1];(0,l.useEffect)((function(){var e=t.search.substr(3);f.initPage({pathname:e})}),[t]);var p=function(){c.ZP.success("\u4fdd\u5b58\u6210\u529f")},y=function(){u.m8.push(t.search.substr(3))};return s.schema?(0,v.jsx)(n.Layout,{header:(0,v.jsxs)("div",{className:"editor-header clearfix box-shadow bg-dark",children:[(0,v.jsxs)("div",{className:"logo clearfix",children:[(0,v.jsx)("img",{src:a}),(0,v.jsx)("span",{children:"amis"})]}),(0,v.jsxs)("div",{className:"editor-preview",children:["\u9884\u89c8"," ",(0,v.jsx)(n.Switch,{value:s.preview,onChange:function(e){return f.update({preview:e})},className:"m-l-xs",inline:!0})]}),(0,v.jsxs)("div",{className:"editor-preview",children:["\u79fb\u52a8\u7aef"," ",(0,v.jsx)(n.Switch,{value:s.isMobile,onChange:function(e){return f.update({isMobile:e})},className:"m-l-xs",inline:!0})]}),(0,v.jsxs)("div",{className:"editor-header-btns",children:[(0,v.jsx)("div",{className:(0,n.classnames)("btn-item"),onClick:p,children:"\u4fdd\u5b58"}),(0,v.jsx)("div",{className:"btn-item",onClick:y,children:"\u9000\u51fa"})]})]}),children:(0,v.jsx)(i.Editor,{theme:"cxd",preview:s.preview,value:s.schema,onChange:function(e){return f.updateSchema({schema:e})},className:"is-fixed",isMobile:s.isMobile})}):(0,v.jsx)(n.Spinner,{})}},56469:function(e,t,r){var n=r(67294),o=r(26877),i=r(85893);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(c,e);var t,r,n,o=s(c);function c(){return a(this,c),o.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props.tip;return(0,i.jsxs)("div",{children:["\u8fd9\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff1a",e]})}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);(0,o.Renderer)({type:"my-renderer",autoVar:!0})(y)}}]);