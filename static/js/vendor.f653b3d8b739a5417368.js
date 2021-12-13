webpackJsonp([0],{"/ocq":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(t){0}return t}var u=function(t){return null==t||"object"==typeof t?t:String(t)};function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}),e):e}function h(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))}),r.join("&")}return a(e)+"="+a(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function f(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=p(s)}catch(t){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:g(e,i),matched:t?function(t){var e=[];for(;t;)e.unshift(t),t=t.parent;return e}(t):[]};return n&&(o.redirectedFrom=g(n,i)),Object.freeze(o)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=p(t[n]);return e}return t}var m=f(null,{path:"/"});function g(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;return void 0===i&&(i=""),(n||"/")+(e||h)(r)+i}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&v(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&v(t.query,e.query)&&v(t.params,e.params))))}function v(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every(function(n,i){var s=t[n];if(r[i]!==n)return!1;var o=e[n];return null==s||null==o?s===o:"object"==typeof s&&"object"==typeof o?v(s,o):String(s)===String(o)})}function w(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var b={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,s=e.parent,o=e.data;o.routerView=!0;for(var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;s&&s._routerRoot!==s;){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&_(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],y=g&&g.components[c];if(!g||!y)return l[c]=null,a();l[c]={component:y},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),w(u)};var v=g.props&&g.props[c];return v&&(r(l[c],{route:u,configProps:v}),_(y,o,u,v)),a(y,o,i)}};function _(t,e,n,i){var s=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(n,i);if(s){s=e.props=r({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function T(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function E(t){return t.replace(/\/+/g,"/")}var I=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},S=$,A=O,C=function(t,e){return R(O(t,e),e)},k=R,x=j,D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t,e){for(var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";null!=(n=D.exec(t));){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],y=n[7];o&&(r.push(o),o="");var v=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,T=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:b,repeat:w,partial:v,asterisk:!!y,pattern:T?P(T):y?".*":"[^"+L(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function N(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",F(e)));return function(e,r){for(var i="",s=e||{},o=(r||{}).pretty?N:encodeURIComponent,a=0;a<t.length;a++){var c=t[a];if("string"!=typeof c){var u,l=s[c.name];if(null==l){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(I(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(u=o(l[h]),!n[a].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===h?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):o(l),!n[a].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function P(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){return t.keys=e,t}function F(t){return t&&t.sensitive?"":"i"}function j(t,e,n){I(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"==typeof a)s+=L(a);else{var c=L(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),s+=u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var l=L(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",M(new RegExp("^"+s,F(n)),e)}function $(t,e,n){return I(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return M(t,e)}(t,e):I(t)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push($(t[i],e,n).source);return M(new RegExp("(?:"+r.join("|")+")",F(n)),e)}(t,e,n):function(t,e,n){return j(O(t,n),e,n)}(t,e,n)}S.parse=A,S.compile=C,S.tokensToFunction=k,S.tokensToRegExp=x;var V=Object.create(null);function U(t,e,n){e=e||{};try{var r=V[t]||(V[t]=S.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function q(t,e,n,i){var s="string"==typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){var o=(s=r({},t)).params;return o&&"object"==typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&e){(s=r({},s))._normalized=!0;var a=r(r({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=U(c,a,e.path)}else 0;return s}var h=function(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}(s.path||""),d=e&&e.path||"/",f=h.path?T(h.path,d,n||s.append):d,p=function(t,e,n){void 0===e&&(e={});var r,i=n||l;try{r=i(t||"")}catch(t){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(u):u(o)}return r}(h.query,s.query,i&&i.options.parseQuery),m=s.hash||h.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:f,query:p,hash:m}}var B,K=[String,Object],z=[String,Array],H=function(){},G={name:"RouterLink",props:{to:{type:K,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:z,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,p=null==l?"router-link-active":l,m=null==h?"router-link-exact-active":h,g=null==this.activeClass?p:this.activeClass,v=null==this.exactActiveClass?m:this.exactActiveClass,w=a.redirectedFrom?f(null,q(a.redirectedFrom),null,n):a;u[v]=y(i,w,this.exactPath),u[g]=this.exact||this.exactPath?u[v]:function(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var n in e)if(!(n in t))return!1;return!0}(t.query,e.query)}(i,w);var b=u[v]?this.ariaCurrentValue:null,_=function(t){W(t)&&(e.replace?n.replace(o,H):n.push(o,H))},T={click:W};Array.isArray(this.event)?this.event.forEach(function(t){T[t]=_}):T[this.event]=_;var E={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[g],isExactActive:u[v]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)E.on=T,E.attrs={href:c,"aria-current":b};else{var S=function t(e){if(e)for(var n,r=0;r<e.length;r++){if("a"===(n=e[r]).tag)return n;if(n.children&&(n=t(n.children)))return n}}(this.$slots.default);if(S){S.isStatic=!1;var A=S.data=r({},S.data);for(var C in A.on=A.on||{},A.on){var k=A.on[C];C in T&&(A.on[C]=Array.isArray(k)?k:[k])}for(var x in T)x in A.on?A.on[x].push(T[x]):A.on[x]=_;var D=S.data.attrs=r({},S.data.attrs);D.href=c,D["aria-current"]=b}else E.on=T}return t(this.tag,E,this.$slots.default)}};function W(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Q(t){if(!Q.installed||B!==t){Q.installed=!0,B=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",b),t.component("RouterLink",G);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var Y="undefined"!=typeof window;function J(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){!function t(e,n,r,i,s,o){var a=i.path;var c=i.name;0;var u=i.pathToRegexpOptions||{};var l=function(t,e,n){n||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return E(e.path+"/"+t)}(a,s,u.strict);"boolean"==typeof i.caseSensitive&&(u.sensitive=i.caseSensitive);var h={path:l,regex:function(t,e){var n=S(t,[],e);return n}(l,u),components:i.components||{default:i.component},alias:i.alias?"string"==typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:c,parent:s,matchAs:o,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&i.children.forEach(function(i){var s=o?E(o+"/"+i.path):void 0;t(e,n,r,i,h,s)});n[h.path]||(e.push(h.path),n[h.path]=h);if(void 0!==i.alias)for(var d=Array.isArray(i.alias)?i.alias:[i.alias],f=0;f<d.length;++f){var p=d[f];0;var m={path:p,children:i.children};t(e,n,r,m,s,h.path||"/")}c&&(r[c]||(r[c]=h))}(s,o,a,t,i)});for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function X(t,e){var n=J(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t,n,o){var a=q(t,n,!1,e),u=a.name;if(u){var l=s[u];if(!l)return c(null,a);var h=l.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof a.params&&(a.params={}),n&&"object"==typeof n.params)for(var d in n.params)!(d in a.params)&&h.indexOf(d)>-1&&(a.params[d]=n.params[d]);return a.path=U(l.path,a.params),c(l,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(Z(m.regex,a.path,a.params))return c(m,a,o)}}return c(null,a)}function a(t,n){var r=t.redirect,i="function"==typeof r?r(f(t,n,null,e)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return c(null,n);var a=i,u=a.name,l=a.path,h=n.query,d=n.hash,p=n.params;if(h=a.hasOwnProperty("query")?a.query:h,d=a.hasOwnProperty("hash")?a.hash:d,p=a.hasOwnProperty("params")?a.params:p,u){s[u];return o({_normalized:!0,name:u,query:h,hash:d,params:p},void 0,n)}if(l){var m=function(t,e){return T(t,e.parent?e.parent.path:"/",!0)}(l,t);return o({_normalized:!0,path:U(m,p),query:h,hash:d},void 0,n)}return c(null,n)}function c(t,n,r){return t&&t.redirect?a(t,r||n):t&&t.matchAs?function(t,e,n){var r=o({_normalized:!0,path:U(n,e.params)});if(r){var i=r.matched,s=i[i.length-1];return e.params=r.params,c(s,e)}return c(null,e)}(0,n,t.matchAs):f(t,n,r,e)}return{match:o,addRoute:function(t,e){var n="object"!=typeof t?s[t]:void 0;J([e||t],r,i,s,n),n&&n.alias.length&&J(n.alias.map(function(t){return{path:t,children:[e]}}),r,i,s,n)},getRoutes:function(){return r.map(function(t){return i[t]})},addRoutes:function(t){J(t,r,i,s)}}}function Z(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"==typeof r[i]?c(r[i]):r[i])}return!0}var tt=Y&&window.performance&&window.performance.now?window.performance:Date;function et(){return tt.now().toFixed(3)}var nt=et();function rt(){return nt}function it(t){return nt=t}var st=Object.create(null);function ot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=rt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",ut),function(){window.removeEventListener("popstate",ut)}}function at(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick(function(){var s=function(){var t=rt();if(t)return st[t]}(),o=i.call(t,e,n,r?s:null);o&&("function"==typeof o.then?o.then(function(t){pt(t,s)}).catch(function(t){0}):pt(o,s))})}}function ct(){var t=rt();t&&(st[t]={x:window.pageXOffset,y:window.pageYOffset})}function ut(t){ct(),t.state&&t.state.key&&it(t.state.key)}function lt(t){return dt(t.x)||dt(t.y)}function ht(t){return{x:dt(t.x)?t.x:window.pageXOffset,y:dt(t.y)?t.y:window.pageYOffset}}function dt(t){return"number"==typeof t}var ft=/^#\d/;function pt(t,e){var n,r="object"==typeof t;if(r&&"string"==typeof t.selector){var i=ft.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var s=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}(i,s={x:dt((n=s).x)?n.x:0,y:dt(n.y)?n.y:0})}else lt(t)&&(e=ht(t))}else r&&lt(t)&&(e=ht(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var mt,gt=Y&&((-1===(mt=window.navigator.userAgent).indexOf("Android 2.")&&-1===mt.indexOf("Android 4.0")||-1===mt.indexOf("Mobile Safari")||-1!==mt.indexOf("Chrome")||-1!==mt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function yt(t,e){ct();var n=window.history;try{if(e){var i=r({},n.state);i.key=rt(),n.replaceState(i,"",t)}else n.pushState({key:it(et())},"",t)}catch(n){window.location[e?"replace":"assign"](t)}}function vt(t){yt(t,!0)}function wt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],function(){r(i+1)}):r(i+1)};r(0)}var bt={redirected:2,aborted:4,cancelled:8,duplicated:16};function _t(t,e){return Et(t,e,bt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return It.forEach(function(n){n in t&&(e[n]=t[n])}),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function Tt(t,e){return Et(t,e,bt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Et(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var It=["params","query","hash"];function St(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function At(t,e){return St(t)&&t._isRouter&&(null==e||t.type===e)}function Ct(t){return function(e,n,r){var i=!1,s=0,o=null;kt(t,function(t,e,n,a){if("function"==typeof t&&void 0===t.cid){i=!0,s++;var c,u=Ot(function(e){var i;((i=e).__esModule||Dt&&"Module"===i[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:B.extend(e),n.components[a]=e,--s<=0&&r()}),l=Ot(function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=St(t)?t:new Error(e),r(o))});try{c=t(u,l)}catch(t){l(t)}if(c)if("function"==typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"==typeof h.then&&h.then(u,l)}}}),i||r()}}function kt(t,e){return xt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function xt(t){return Array.prototype.concat.apply([],t)}var Dt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Ot(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Nt=function(t,e){this.router=t,this.base=function(t){if(!t)if(Y){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Rt(t,e,n,r){var i=kt(t,function(t,r,i,s){var o=function(t,e){"function"!=typeof t&&(t=B.extend(t));return t.options[e]}(t,e);if(o)return Array.isArray(o)?o.map(function(t){return n(t,r,i,s)}):n(o,r,i,s)});return xt(r?i.reverse():i)}function Lt(t,e){if(e)return function(){return t.apply(e,arguments)}}Nt.prototype.listen=function(t){this.cb=t},Nt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Nt.prototype.onError=function(t){this.errorCbs.push(t)},Nt.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach(function(e){e(t)}),t}var s=this.current;this.confirmTransition(r,function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach(function(t){t&&t(r,s)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(t){t(r)}))},function(t){n&&n(t),t&&!i.ready&&(At(t,bt.redirected)&&s===m||(i.ready=!0,i.readyErrorCbs.forEach(function(e){e(t)})))})},Nt.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var s,o,a=function(t){!At(t)&&St(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):console.error(t)),n&&n(t)},c=t.matched.length-1,u=i.matched.length-1;if(y(t,i)&&c===u&&t.matched[c]===i.matched[u])return this.ensureURL(),t.hash&&at(this.router,i,t,!1),a(((o=Et(s=i,t,bt.duplicated,'Avoided redundant navigation to current location: "'+s.fullPath+'".')).name="NavigationDuplicated",o));var l=function(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}(this.current.matched,t.matched),h=l.updated,d=l.deactivated,f=l.activated,p=function(e,n){if(r.pending!==t)return a(Tt(i,t));try{e(t,i,function(e){!1===e?(r.ensureURL(!0),a(function(t,e){return Et(t,e,bt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(i,t))):St(e)?(r.ensureURL(!0),a(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(a(_t(i,t)),"object"==typeof e&&e.replace?r.replace(e):r.push(e)):n(e)})}catch(t){a(t)}};wt([].concat(function(t){return Rt(t,"beforeRouteLeave",Lt,!0)}(d),this.router.beforeHooks,function(t){return Rt(t,"beforeRouteUpdate",Lt)}(h),f.map(function(t){return t.beforeEnter}),Ct(f)),p,function(){wt(function(t){return Rt(t,"beforeRouteEnter",function(t,e,n,r){return function(t,e,n){return function(r,i,s){return t(r,i,function(t){"function"==typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)})}}(t,n,r)})}(f).concat(r.router.resolveHooks),p,function(){if(r.pending!==t)return a(Tt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){w(t)})})})},Nt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Nt.prototype.setupListeners=function(){},Nt.prototype.teardown=function(){this.listeners.forEach(function(t){t()}),this.listeners=[],this.current=m,this.pending=null};var Pt=function(t){function e(e,n){t.call(this,e,n),this._startLocation=Mt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=gt&&n;r&&this.listeners.push(ot());var i=function(){var n=t.current,i=Mt(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,function(t){r&&at(e,t,n,!0)})};window.addEventListener("popstate",i),this.listeners.push(function(){window.removeEventListener("popstate",i)})}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){yt(E(r.base+t.fullPath)),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){vt(E(r.base+t.fullPath)),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(Mt(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?yt(e):vt(e)}},e.prototype.getCurrentLocation=function(){return Mt(this.base)},e}(Nt);function Mt(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(E(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Ft=function(t){function e(e,n,r){t.call(this,e,n),r&&function(t){var e=Mt(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}(this.base)||jt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,n=gt&&e;n&&this.listeners.push(ot());var r=function(){var e=t.current;jt()&&t.transitionTo($t(),function(r){n&&at(t.router,r,e,!0),gt||qt(r.fullPath)})},i=gt?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push(function(){window.removeEventListener(i,r)})}},e.prototype.push=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){Ut(t.fullPath),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,i=this.current;this.transitionTo(t,function(t){qt(t.fullPath),at(r.router,t,i,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;$t()!==e&&(t?Ut(e):qt(e))},e.prototype.getCurrentLocation=function(){return $t()},e}(Nt);function jt(){var t=$t();return"/"===t.charAt(0)||(qt("/"+t),!1)}function $t(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function Vt(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function Ut(t){gt?yt(Vt(t)):window.location.hash=t}function qt(t){gt?vt(Vt(t)):window.location.replace(Vt(t))}var Bt=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach(function(e){e&&e(r,t)})},function(t){At(t,bt.duplicated)&&(e.index=n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Nt),Kt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=X(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!gt&&!1!==t.fallback,this.fallback&&(e="hash"),Y||(e="abstract"),this.mode=e,e){case"history":this.history=new Pt(this,t.base);break;case"hash":this.history=new Ft(this,t.base,this.fallback);break;case"abstract":this.history=new Bt(this,t.base);break;default:0}},zt={currentRoute:{configurable:!0}};function Ht(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}Kt.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},zt.currentRoute.get=function(){return this.history&&this.history.current},Kt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()}),!this.app){this.app=t;var n=this.history;if(n instanceof Pt||n instanceof Ft){var r=function(t){n.setupListeners(),function(t){var r=n.current,i=e.options.scrollBehavior;gt&&i&&"fullPath"in t&&at(e,t,r,!1)}(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},Kt.prototype.beforeEach=function(t){return Ht(this.beforeHooks,t)},Kt.prototype.beforeResolve=function(t){return Ht(this.resolveHooks,t)},Kt.prototype.afterEach=function(t){return Ht(this.afterHooks,t)},Kt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Kt.prototype.onError=function(t){this.history.onError(t)},Kt.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!=typeof Promise)return new Promise(function(e,n){r.history.push(t,e,n)});this.history.push(t,e,n)},Kt.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!=typeof Promise)return new Promise(function(e,n){r.history.replace(t,e,n)});this.history.replace(t,e,n)},Kt.prototype.go=function(t){this.history.go(t)},Kt.prototype.back=function(){this.go(-1)},Kt.prototype.forward=function(){this.go(1)},Kt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Kt.prototype.resolve=function(t,e,n){var r=q(t,e=e||this.history.current,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(t,e,n){var r="hash"===n?"#"+e:e;return t?E(t+"/"+r):r}(this.history.base,s,this.mode),normalizedTo:r,resolved:i}},Kt.prototype.getRoutes=function(){return this.matcher.getRoutes()},Kt.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Kt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Kt.prototype,zt),Kt.install=Q,Kt.version="3.5.3",Kt.isNavigationFailure=At,Kt.NavigationFailureType=bt,Kt.START_LOCATION=m,Y&&window.Vue&&window.Vue.use(Kt),e.a=Kt},"28tl":function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a}),n.d(e,"b",function(){return _}),n.d(e,"c",function(){return b}),n.d(e,"d",function(){return E}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return A}),n.d(e,"g",function(){return I}),n.d(e,"h",function(){return o}),n.d(e,"i",function(){return x}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return d}),n.d(e,"m",function(){return p}),n.d(e,"n",function(){return m}),n.d(e,"o",function(){return v}),n.d(e,"p",function(){return l}),n.d(e,"q",function(){return f}),n.d(e,"r",function(){return y}),n.d(e,"s",function(){return g});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0,o=++e<t.length?n[t.charAt(e)]:64,a=++e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){return function(t){const e=r(t);return i.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=o(t[n],e[n]));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){return"object"==typeof self&&self.self===self}function d(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return u().indexOf("Electron/")>=0}function m(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(T,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new b(r,o,n)}}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function I(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(S(n)&&S(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function S(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){const n=new C(t,e);return n.subscribe.bind(n)}class C{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=k),void 0===r.error&&(r.error=k),void 0===r.complete&&(r.complete=k);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t){return t&&t._delegate?t._delegate:t}}).call(e,n("DuR2"))},"7+uW":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function a(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function f(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var g=m("slot,component",!0),y=m("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var w=Object.prototype.hasOwnProperty;function b(t,e){return w.call(t,e)}function _(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var T=/-(\w)/g,E=_(function(t){return t.replace(T,function(t,e){return e?e.toUpperCase():""})}),I=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,A=_(function(t){return t.replace(S,"-$1").toLowerCase()});var C=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function k(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function x(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&x(e,t[n]);return e}function O(t,e,n){}var N=function(t,e,n){return!1},R=function(t){return t};function L(t,e){if(t===e)return!0;var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),c=Object.keys(e);return o.length===c.length&&o.every(function(n){return L(t[n],e[n])})}catch(t){return!1}}function P(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",j=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:O,parsePlatformTagName:R,mustUseProp:N,async:!0,_lifecycleHooks:$},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function B(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+U.source+".$_\\d]");var z,H="__proto__"in{},G="undefined"!=typeof window,W="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Q=W&&WXEnvironment.platform.toLowerCase(),Y=G&&window.navigator.userAgent.toLowerCase(),J=Y&&/msie|trident/.test(Y),X=Y&&Y.indexOf("msie 9.0")>0,Z=Y&&Y.indexOf("edge/")>0,tt=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),et=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/)),nt={}.watch,rt=!1;if(G)try{var it={};Object.defineProperty(it,"passive",{get:function(){rt=!0}}),window.addEventListener("test-passive",null,it)}catch(t){}var st=function(){return void 0===z&&(z=!G&&!W&&void 0!==t&&(t.process&&"server"===t.process.env.VUE_ENV)),z},ot=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"==typeof t&&/native code/.test(t.toString())}var ct,ut="undefined"!=typeof Symbol&&at(Symbol)&&"undefined"!=typeof Reflect&&at(Reflect.ownKeys);ct="undefined"!=typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=O,ht=0,dt=function(){this.id=ht++,this.subs=[]};dt.prototype.addSub=function(t){this.subs.push(t)},dt.prototype.removeSub=function(t){v(this.subs,t)},dt.prototype.depend=function(){dt.target&&dt.target.addDep(this)},dt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},dt.target=null;var ft=[];function pt(t){ft.push(t),dt.target=t}function mt(){ft.pop(),dt.target=ft[ft.length-1]}var gt=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yt={child:{configurable:!0}};yt.child.get=function(){return this.componentInstance},Object.defineProperties(gt.prototype,yt);var vt=function(t){void 0===t&&(t="");var e=new gt;return e.text=t,e.isComment=!0,e};function wt(t){return new gt(void 0,void 0,void 0,String(t))}function bt(t){var e=new gt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,Tt=Object.create(_t);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=_t[t];B(Tt,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&o.observeArray(i),o.dep.notify(),s})});var Et=Object.getOwnPropertyNames(Tt),It=!0;function St(t){It=t}var At=function(t){var e;this.value=t,this.dep=new dt,this.vmCount=0,B(t,"__ob__",this),Array.isArray(t)?(H?(e=Tt,t.__proto__=e):function(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];B(t,s,e[s])}}(t,Tt,Et),this.observeArray(t)):this.walk(t)};function Ct(t,e){var n;if(a(t)&&!(t instanceof gt))return b(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:It&&!st()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function kt(t,e,n,r,i){var s=new dt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return dt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,i=e.length;r<i;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!=e&&r!=r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Ct(e),s.notify())}})}}function xt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(kt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Dt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)kt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e])};var Ot=V.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,r,i,s=ut?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)"__ob__"!==(n=s[o])&&(r=t[n],i=e[n],b(t,n)?r!==i&&u(r)&&u(i)&&Nt(r,i):xt(t,n,i));return t}function Rt(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return r?Nt(r,i):i}:e?t?function(){return Nt("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function Pt(t,e,n,r){var i=Object.create(t||null);return e?x(i,e):i}Ot.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!=typeof e?t:Rt(t,e)},$.forEach(function(t){Ot[t]=Lt}),j.forEach(function(t){Ot[t+"s"]=Pt}),Ot.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in x(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return x(i,t),e&&x(i,e),i},Ot.provide=Rt;var Mt=function(t,e){return void 0===e?t:e};function Ft(t,e,n){if("function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,s={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(s[E(i)]={type:null});else if(u(n))for(var o in n)i=n[o],s[E(o)]=u(i)?i:{type:i};t.props=s}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var s in n){var o=n[s];r[s]=u(o)?x({from:s},o):{from:o}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e),!e._base&&(e.extends&&(t=Ft(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ft(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)b(t,s)||a(s);function a(r){var i=Ot[r]||Mt;o[r]=i(t[r],e[r],n,r)}return o}function jt(t,e,n,r){if("string"==typeof n){var i=t[e];if(b(i,n))return i[n];var s=E(n);if(b(i,s))return i[s];var o=I(s);return b(i,o)?i[o]:i[n]||i[s]||i[o]}}function $t(t,e,n,r){var i=e[t],s=!b(n,t),o=n[t],a=Bt(Boolean,i.type);if(a>-1)if(s&&!b(i,"default"))o=!1;else if(""===o||o===A(t)){var c=Bt(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=function(t,e,n){if(!b(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==Ut(e.type)?r.call(t):r}(r,i,t);var u=It;St(!0),Ct(o),St(u)}return o}var Vt=/^\s*function (\w+)/;function Ut(t){var e=t&&t.toString().match(Vt);return e?e[1]:""}function qt(t,e){return Ut(t)===Ut(e)}function Bt(t,e){if(!Array.isArray(e))return qt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(qt(e[n],t))return n;return-1}function Kt(t,e,n){pt();try{if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{if(!1===i[s].call(r,t,e,n))return}catch(t){Ht(t,r,"errorCaptured hook")}}Ht(t,e,n)}finally{mt()}}function zt(t,e,n,r,i){var s;try{(s=n?t.apply(e,n):t.call(e))&&!s._isVue&&d(s)&&!s._handled&&(s.catch(function(t){return Kt(t,r,i+" (Promise/async)")}),s._handled=!0)}catch(t){Kt(t,r,i)}return s}function Ht(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(e){e!==t&&Gt(e,null,"config.errorHandler")}Gt(t,e,n)}function Gt(t,e,n){if(!G&&!W||"undefined"==typeof console)throw t;console.error(t)}var Wt,Qt=!1,Yt=[],Jt=!1;function Xt(){Jt=!1;var t=Yt.slice(0);Yt.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!=typeof Promise&&at(Promise)){var Zt=Promise.resolve();Wt=function(){Zt.then(Xt),tt&&setTimeout(O)},Qt=!0}else if(J||"undefined"==typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Wt="undefined"!=typeof setImmediate&&at(setImmediate)?function(){setImmediate(Xt)}:function(){setTimeout(Xt,0)};else{var te=1,ee=new MutationObserver(Xt),ne=document.createTextNode(String(te));ee.observe(ne,{characterData:!0}),Wt=function(){te=(te+1)%2,ne.data=String(te)},Qt=!0}function re(t,e){var n;if(Yt.push(function(){if(t)try{t.call(e)}catch(t){Kt(t,e,"nextTick")}else n&&n(e)}),Jt||(Jt=!0,Wt()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}var ie=new ct;function se(t){!function t(e,n){var r,i;var s=Array.isArray(e);if(!s&&!a(e)||Object.isFrozen(e)||e instanceof gt)return;if(e.__ob__){var o=e.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(s)for(r=e.length;r--;)t(e[r],n);else for(i=Object.keys(e),r=i.length;r--;)t(e[i[r]],n)}(t,ie),ie.clear()}var oe=_(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function ae(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return zt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)zt(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function ce(t,e,n,i,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=oe(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=ae(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&i((h=oe(c)).name,e[c],h.capture)}function ue(t,e,n){var o;t instanceof gt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),v(o.fns,c)}r(a)?o=ae([c]):i(a.fns)&&s(a.merged)?(o=a).fns.push(c):o=ae([a,c]),o.merged=!0,t[e]=o}function le(t,e,n,r,s){if(i(e)){if(b(e,n))return t[n]=e[n],s||delete e[n],!0;if(b(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function he(t){return o(t)?[wt(t)]:Array.isArray(t)?function t(e,n){var a=[];var c,u,l,h;for(c=0;c<e.length;c++)r(u=e[c])||"boolean"==typeof u||(l=a.length-1,h=a[l],Array.isArray(u)?u.length>0&&(de((u=t(u,(n||"")+"_"+c))[0])&&de(h)&&(a[l]=wt(h.text+u[0].text),u.shift()),a.push.apply(a,u)):o(u)?de(h)?a[l]=wt(h.text+u):""!==u&&a.push(wt(u)):de(u)&&de(h)?a[l]=wt(h.text+u.text):(s(e._isVList)&&i(u.tag)&&r(u.key)&&i(n)&&(u.key="__vlist"+n+"_"+c+"__"),a.push(u)));return a}(t):void 0}function de(t){return i(t)&&i(t.text)&&!1===t.isComment}function fe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){for(var o=t[s].from,a=e;a;){if(a._provided&&b(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"==typeof c?c.call(e):c}else 0}}return n}}function pe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(me)&&delete n[u];return n}function me(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ge(t){return t.isComment&&t.asyncFactory}function ye(t,e,r){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=ve(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=we(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),B(i,"$stable",o),B(i,"$key",a),B(i,"$hasNormal",s),i}function ve(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({}),e=(t=t&&"object"==typeof t&&!Array.isArray(t)?[t]:he(t))&&t[0];return t&&(!e||1===t.length&&e.isComment&&!ge(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function we(t,e){return function(){return t[e]}}function be(t,e){var n,r,s,o,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,s=t.length;r<s;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(a(t))if(ut&&t[Symbol.iterator]){n=[];for(var u=t[Symbol.iterator](),l=u.next();!l.done;)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,s=o.length;r<s;r++)c=o[r],n[r]=e(t[c],c,r);return i(n)||(n=[]),n._isVList=!0,n}function _e(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=x(x({},r),n)),i=s(n)||("function"==typeof e?e():e)):i=this.$slots[t]||("function"==typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Te(t){return jt(this.$options,"filters",t)||R}function Ee(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,i){var s=V.keyCodes[e]||n;return i&&r&&!V.keyCodes[e]?Ee(i,r):s?Ee(s,t):r?A(r)!==e:void 0===t}function Se(t,e,n,r,i){if(n)if(a(n)){var s;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||V.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=E(o),u=A(o);c in s||u in s||(s[o]=n[o],i&&((t.on||(t.on={}))["update:"+o]=function(t){n[o]=t}))};for(var c in n)o(c)}else;return t}function Ae(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(ke(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r)}function Ce(t,e,n){return ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&xe(t[r],e+"_"+r,n);else xe(t,e,n)}function xe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function De(t,e){if(e)if(u(e)){var n=t.on=t.on?x({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Oe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Oe(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Ne(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Re(t,e){return"string"==typeof t?e+t:t}function Le(t){t._o=Ce,t._n=p,t._s=f,t._l=be,t._t=_e,t._q=L,t._i=P,t._m=Ae,t._f=Te,t._k=Ie,t._b=Se,t._v=wt,t._e=vt,t._u=Oe,t._g=De,t._d=Ne,t._p=Re}function Pe(t,e,r,i,o){var a,c=this,u=o.options;b(i,"_uid")?(a=Object.create(i))._original=i:(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=fe(u.inject,i),this.slots=function(){return c.$slots||ye(t.scopedSlots,c.$slots=pe(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ye(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ye(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=Ke(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return Ke(a,t,e,n,r,h)}}function Me(t,e,n,r,i){var s=bt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function Fe(t,e){for(var n in e)t[E(n)]=e[n]}Le(Pe.prototype);var je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;je.prepatch(n,n)}else{(t.componentInstance=function(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new t.componentOptions.Ctor(n)}(t,Ze)).$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var r=e.componentOptions;!function(t,e,r,i,s){0;var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=s,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=$t(f,p,e,t)}St(!0),t.$options.propsData=e}r=r||n;var m=t.$options._parentListeners;t.$options._parentListeners=r,Xe(t,r,m),u&&(t.$slots=pe(s,i.context),t.$forceUpdate());0}(e.componentInstance=t.componentInstance,r.propsData,r.listeners,e,r.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,rn(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,on.push(e)):nn(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(n&&(e._directInactive=!0,en(e)))return;if(!e._inactive){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);rn(e,"deactivated")}}(e,!0):e.$destroy())}},$e=Object.keys(je);function Ve(t,e,o,c,u){if(!r(t)){var l=o.$options._base;if(a(t)&&(t=l.extend(t)),"function"==typeof t){var h;if(r(t.cid)&&void 0===(t=function(t,e){if(s(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=He;n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n);if(s(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],c=!0,u=null,l=null;n.$on("hook:destroyed",function(){return v(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},f=M(function(n){t.resolved=Ge(n,e),c?o.length=0:h(!0)}),p=M(function(e){i(t.errorComp)&&(t.error=!0,h(!0))}),m=t(f,p);return a(m)&&(d(m)?r(t.resolved)&&m.then(f,p):d(m.component)&&(m.component.then(f,p),i(m.error)&&(t.errorComp=Ge(m.error,e)),i(m.loading)&&(t.loadingComp=Ge(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))},m.delay||200)),i(m.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&p(null)},m.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}(h=t,l)))return function(t,e,n,r,i){var s=vt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}(h,e,o,c,u);e=e||{},An(t),i(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[r],a=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}(t.options,e);var f=function(t,e,n){var s=e.options.props;if(!r(s)){var o={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in s){var l=A(u);le(o,c,u,l,!0)||le(o,a,u,l,!1)}return o}}(e,t);if(s(t.options.functional))return function(t,e,r,s,o){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=$t(l,u,e||n);else i(r.attrs)&&Fe(c,r.attrs),i(r.props)&&Fe(c,r.props);var h=new Pe(r,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof gt)return Me(d,r,h.parent,a);if(Array.isArray(d)){for(var f=he(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=Me(f[m],r,h.parent,a);return p}}(t,f,e,o,c);var p=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var m=e.slot;e={},m&&(e.slot=m)}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<$e.length;n++){var r=$e[n],i=e[r],s=je[r];i===s||i&&i._merged||(e[r]=i?Ue(s,i):s)}}(e);var g=t.options.name||u;return new gt("vue-component-"+t.cid+(g?"-"+g:""),e,void 0,void 0,void 0,o,{Ctor:t,propsData:f,listeners:p,tag:u,children:c},h)}}}function Ue(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}var qe=1,Be=2;function Ke(t,e,n,c,u,l){return(Array.isArray(n)||o(n))&&(u=c,c=n,n=void 0),s(l)&&(u=Be),function(t,e,n,o,c){if(i(n)&&i(n.__ob__))return vt();i(n)&&i(n.is)&&(e=n.is);if(!e)return vt();0;Array.isArray(o)&&"function"==typeof o[0]&&((n=n||{}).scopedSlots={default:o[0]},o.length=0);c===Be?o=he(o):c===qe&&(o=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(o));var u,l;if("string"==typeof e){var h;l=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),u=V.isReservedTag(e)?new gt(V.parsePlatformTagName(e),n,o,void 0,void 0,t):n&&n.pre||!i(h=jt(t.$options,"components",e))?new gt(e,n,o,void 0,void 0,t):Ve(h,n,t,o,e)}else u=Ve(e,n,t,o);return Array.isArray(u)?u:i(u)?(i(l)&&function t(e,n,o){e.ns=n;"foreignObject"===e.tag&&(n=void 0,o=!0);if(i(e.children))for(var a=0,c=e.children.length;a<c;a++){var u=e.children[a];i(u.tag)&&(r(u.ns)||s(o)&&"svg"!==u.tag)&&t(u,n,o)}}(u,l),i(n)&&function(t){a(t.style)&&se(t.style);a(t.class)&&se(t.class)}(n),u):vt()}(t,e,n,c,u)}var ze,He=null;function Ge(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),a(t)?e.extend(t):t}function We(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||ge(n)))return n}}function Qe(t,e){ze.$on(t,e)}function Ye(t,e){ze.$off(t,e)}function Je(t,e){var n=ze;return function r(){null!==e.apply(null,arguments)&&n.$off(t,r)}}function Xe(t,e,n){ze=t,ce(e,n||{},Qe,Ye,Je,t),ze=void 0}var Ze=null;function tn(t){var e=Ze;return Ze=t,function(){Ze=e}}function en(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function nn(t,e){if(e){if(t._directInactive=!1,en(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)nn(t.$children[n]);rn(t,"activated")}}function rn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)zt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),mt()}var sn=[],on=[],an={},cn=!1,un=!1,ln=0;var hn=0,dn=Date.now;if(G&&!J){var fn=window.performance;fn&&"function"==typeof fn.now&&dn()>document.createEvent("Event").timeStamp&&(dn=function(){return fn.now()})}function pn(){var t,e;for(hn=dn(),un=!0,sn.sort(function(t,e){return t.id-e.id}),ln=0;ln<sn.length;ln++)(t=sn[ln]).before&&t.before(),e=t.id,an[e]=null,t.run();var n=on.slice(),r=sn.slice();ln=sn.length=on.length=0,an={},cn=un=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,nn(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&rn(r,"updated")}}(r),ot&&V.devtools&&ot.emit("flush")}var mn=0,gn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ct,this.newDepIds=new ct,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=O)),this.value=this.lazy?void 0:this.get()};gn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;Kt(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&se(t),mt(),this.cleanupDeps()}return t},gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},gn.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==an[e]){if(an[e]=!0,un){for(var n=sn.length-1;n>ln&&sn[n].id>t.id;)n--;sn.splice(n+1,0,t)}else sn.push(t);cn||(cn=!0,re(pn))}}(this)},gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';zt(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},gn.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var yn={enumerable:!0,configurable:!0,get:O,set:O};function vn(t,e,n){yn.get=function(){return this[e][n]},yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,yn)}function wn(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||St(!1);var o=function(s){i.push(s);var o=$t(s,e,n,t);kt(r,s,o),s in t||vn(t,"_props",s)};for(var a in e)o(a);St(!0)}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]="function"!=typeof e[n]?O:C(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;u(e=t._data="function"==typeof e?function(t,e){pt();try{return t.call(e,e)}catch(t){return Kt(t,e,"data()"),{}}finally{mt()}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var s=n[i];0,r&&b(r,s)||q(s)||vn(t,"_data",s)}Ct(e,!0)}(t):Ct(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=st();for(var i in e){var s=e[i],o="function"==typeof s?s:s.get;0,r||(n[i]=new gn(t,o||O,O,bn)),i in t||_n(t,i,s)}}(t,e.computed),e.watch&&e.watch!==nt&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)In(t,n,r[i]);else In(t,n,r)}}(t,e.watch)}var bn={lazy:!0};function _n(t,e,n){var r=!st();"function"==typeof n?(yn.get=r?Tn(e):En(n),yn.set=O):(yn.get=n.get?r&&!1!==n.cache?Tn(e):En(n.get):O,yn.set=n.set||O),Object.defineProperty(t,e,yn)}function Tn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),dt.target&&e.depend(),e.value}}function En(t){return function(){return t.call(this,this)}}function In(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}var Sn=0;function An(t){var e=t.options;if(t.super){var n=An(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}(t);r&&x(t.extendOptions,r),(e=t.options=Ft(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Cn(t){this._init(t)}function kn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return(o.prototype=Object.create(n.prototype)).constructor=o,o.cid=e++,o.options=Ft(n.options,t),o.super=n,o.options.props&&function(t){var e=t.options.props;for(var n in e)vn(t.prototype,"_props",n)}(o),o.options.computed&&function(t){var e=t.options.computed;for(var n in e)_n(t.prototype,n,e[n])}(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,j.forEach(function(t){o[t]=n[t]}),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=x({},o.options),i[r]=o,o}}function xn(t){return t&&(t.Ctor.options.name||t.tag)}function Dn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function On(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Nn(n,s,r,i)}}}function Nn(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,v(n,e)}!function(t){t.prototype._init=function(t){var e=this;e._uid=Sn++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=Ft(An(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Xe(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=pe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return Ke(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ke(t,e,n,r,i,!0)};var s=r&&r.data;kt(t,"$attrs",s&&s.attrs||n,null,!0),kt(t,"$listeners",e._parentListeners||n,null,!0)}(e),rn(e,"beforeCreate"),function(t){var e=fe(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){kt(t,n,e[n])}),St(!0))}(e),wn(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),rn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(Cn),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=xt,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,n){if(u(e))return In(this,t,e,n);(n=n||{}).user=!0;var r=new gn(this,t,e,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';pt(),zt(e,this,[r.value],this,i),mt()}return function(){r.teardown()}}}(Cn),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;for(var a=o.length;a--;)if((s=o[a])===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?k(n):n;for(var r=k(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)zt(n[s],e,r,e,i)}return e}}(Cn),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=tn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){rn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),rn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}(Cn),function(t){Le(t.prototype),t.prototype.$nextTick=function(t){return re(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=ye(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{He=e,t=r.call(e._renderProxy,e.$createElement)}catch(n){Kt(n,e,"render"),t=e._vnode}finally{He=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof gt||(t=vt()),t.parent=i,t}}(Cn);var Rn=[String,RegExp,Array],Ln={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Rn,exclude:Rn,max:[String,Number]},methods:{cacheVNode:function(){var t=this.cache,e=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,s=n.componentInstance,o=n.componentOptions;t[r]={name:xn(o),tag:i,componentInstance:s},e.push(r),this.max&&e.length>parseInt(this.max)&&Nn(t,e[0],e,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Nn(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",function(e){On(t,function(t){return Dn(e,t)})}),this.$watch("exclude",function(e){On(t,function(t){return!Dn(e,t)})})},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=We(t),n=e&&e.componentOptions;if(n){var r=xn(n),i=this.include,s=this.exclude;if(i&&(!r||!Dn(i,r))||s&&r&&Dn(s,r))return e;var o=this.cache,a=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;o[c]?(e.componentInstance=o[c].componentInstance,v(a,c),a.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:lt,extend:x,mergeOptions:Ft,defineReactive:kt},t.set=xt,t.delete=Dt,t.nextTick=re,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),j.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,x(t.options.components,Ln),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Ft(this.options,t),this}}(t),kn(t),function(t){j.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Cn),Object.defineProperty(Cn.prototype,"$isServer",{get:st}),Object.defineProperty(Cn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cn,"FunctionalRenderContext",{value:Pe}),Cn.version="2.6.14";var Pn=m("style,class"),Mn=m("input,textarea,option,select,progress"),Fn=function(t,e,n){return"value"===n&&Mn(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},jn=m("contenteditable,draggable,spellcheck"),$n=m("events,caret,typing,plaintext-only"),Vn=function(t,e){return zn(e)||"false"===e?"false":"contenteditable"===t&&$n(e)?e:"true"},Un=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),qn="http://www.w3.org/1999/xlink",Bn=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kn=function(t){return Bn(t)?t.slice(6,t.length):""},zn=function(t){return null==t||!1===t};function Hn(t){for(var e=t.data,n=t,r=t;i(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=Gn(r.data,e));for(;i(n=n.parent);)n&&n.data&&(e=Gn(e,n.data));return function(t,e){if(i(t)||i(e))return Wn(t,Qn(e));return""}(e.staticClass,e.class)}function Gn(t,e){return{staticClass:Wn(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Wn(t,e){return t?e?t+" "+e:t:e||""}function Qn(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,s=t.length;r<s;r++)i(e=Qn(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):a(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var Yn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jn=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Xn=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zn=function(t){return Jn(t)||Xn(t)};function tr(t){return Xn(t)?"svg":"math"===t?"math":void 0}var er=Object.create(null);var nr=m("text,number,password,search,email,tel,url");function rr(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var ir=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Yn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setStyleScope:function(t,e){t.setAttribute(e,"")}}),sr={create:function(t,e){or(e)},update:function(t,e){t.data.ref!==e.data.ref&&(or(t,!0),or(e))},destroy:function(t){or(t,!0)}};function or(t,e){var n=t.data.ref;if(i(n)){var r=t.context,s=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?v(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var ar=new gt("",{},[]),cr=["create","activate","update","remove","destroy"];function ur(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,s=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===s||nr(r)&&nr(s)}(t,e)||s(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function lr(t,e,n){var r,s,o={};for(r=e;r<=n;++r)i(s=t[r].key)&&(o[s]=r);return o}var hr={create:dr,update:dr,destroy:function(t){dr(t,ar)}};function dr(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,s=t===ar,o=e===ar,a=pr(t.data.directives,t.context),c=pr(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,gr(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(gr(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)gr(u[n],"inserted",e,t)};s?ue(e,"insert",h):h()}l.length&&ue(e,"postpatch",function(){for(var n=0;n<l.length;n++)gr(l[n],"componentUpdated",e,t)});if(!s)for(n in a)c[n]||gr(a[n],"unbind",t,t,o)}(t,e)}var fr=Object.create(null);function pr(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)(r=t[n]).modifiers||(r.modifiers=fr),i[mr(r)]=r,r.def=jt(e.$options,"directives",r.name);return i}function mr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function gr(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(r){Kt(r,n.context,"directive "+t.name+" "+e+" hook")}}var yr=[sr,hr];function vr(t,e){var n=e.componentOptions;if(!(i(n)&&!1===n.Ctor.options.inheritAttrs||r(t.data.attrs)&&r(e.data.attrs))){var s,o,a=e.elm,c=t.data.attrs||{},u=e.data.attrs||{};for(s in i(u.__ob__)&&(u=e.data.attrs=x({},u)),u)o=u[s],c[s]!==o&&wr(a,s,o,e.data.pre);for(s in(J||Z)&&u.value!==c.value&&wr(a,"value",u.value),c)r(u[s])&&(Bn(s)?a.removeAttributeNS(qn,Kn(s)):jn(s)||a.removeAttribute(s))}}function wr(t,e,n,r){r||t.tagName.indexOf("-")>-1?br(t,e,n):Un(e)?zn(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):jn(e)?t.setAttribute(e,Vn(e,n)):Bn(e)?zn(n)?t.removeAttributeNS(qn,Kn(e)):t.setAttributeNS(qn,e,n):br(t,e,n)}function br(t,e,n){if(zn(n))t.removeAttribute(e);else{if(J&&!X&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var _r={create:vr,update:vr};function Tr(t,e){var n=e.elm,s=e.data,o=t.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Hn(e),c=n._transitionClasses;i(c)&&(a=Wn(a,Qn(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Er,Ir,Sr,Ar,Cr,kr,xr={create:Tr,update:Tr},Dr=/[\w).+\-_$\]]/;function Or(t){var e,n,r,i,s,o=!1,a=!1,c=!1,u=!1,l=0,h=0,d=0,f=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),o)39===e&&92!==n&&(o=!1);else if(a)34===e&&92!==n&&(a=!1);else if(c)96===e&&92!==n&&(c=!1);else if(u)47===e&&92!==n&&(u=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||h||d){switch(e){case 34:a=!0;break;case 39:o=!0;break;case 96:c=!0;break;case 40:d++;break;case 41:d--;break;case 91:h++;break;case 93:h--;break;case 123:l++;break;case 125:l--}if(47===e){for(var p=r-1,m=void 0;p>=0&&" "===(m=t.charAt(p));p--);m&&Dr.test(m)||(u=!0)}}else void 0===i?(f=r+1,i=t.slice(0,r).trim()):g();function g(){(s||(s=[])).push(t.slice(f,r).trim()),f=r+1}if(void 0===i?i=t.slice(0,r).trim():0!==f&&g(),s)for(r=0;r<s.length;r++)i=Nr(i,s[r]);return i}function Nr(t,e){var n=e.indexOf("(");if(n<0)return'_f("'+e+'")('+t+")";var r=e.slice(0,n),i=e.slice(n+1);return'_f("'+r+'")('+t+(")"!==i?","+i:i)}function Rr(t,e){console.error("[Vue compiler]: "+t)}function Lr(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function Pr(t,e,n,r,i){(t.props||(t.props=[])).push(zr({name:e,value:n,dynamic:i},r)),t.plain=!1}function Mr(t,e,n,r,i){(i?t.dynamicAttrs||(t.dynamicAttrs=[]):t.attrs||(t.attrs=[])).push(zr({name:e,value:n,dynamic:i},r)),t.plain=!1}function Fr(t,e,n,r){t.attrsMap[e]=n,t.attrsList.push(zr({name:e,value:n},r))}function jr(t,e,n,r,i,s,o,a){(t.directives||(t.directives=[])).push(zr({name:e,rawName:n,value:r,arg:i,isDynamicArg:s,modifiers:o},a)),t.plain=!1}function $r(t,e,n){return n?"_p("+e+',"'+t+'")':t+e}function Vr(t,e,r,i,s,o,a,c){var u;(i=i||n).right?c?e="("+e+")==='click'?'contextmenu':("+e+")":"click"===e&&(e="contextmenu",delete i.right):i.middle&&(c?e="("+e+")==='click'?'mouseup':("+e+")":"click"===e&&(e="mouseup")),i.capture&&(delete i.capture,e=$r("!",e,c)),i.once&&(delete i.once,e=$r("~",e,c)),i.passive&&(delete i.passive,e=$r("&",e,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=zr({value:r.trim(),dynamic:c},a);i!==n&&(l.modifiers=i);var h=u[e];Array.isArray(h)?s?h.unshift(l):h.push(l):u[e]=h?s?[l,h]:[h,l]:l,t.plain=!1}function Ur(t,e){return t.rawAttrsMap[":"+e]||t.rawAttrsMap["v-bind:"+e]||t.rawAttrsMap[e]}function qr(t,e,n){var r=Br(t,":"+e)||Br(t,"v-bind:"+e);if(null!=r)return Or(r);if(!1!==n){var i=Br(t,e);if(null!=i)return JSON.stringify(i)}}function Br(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,s=0,o=i.length;s<o;s++)if(i[s].name===e){i.splice(s,1);break}return n&&delete t.attrsMap[e],r}function Kr(t,e){for(var n=t.attrsList,r=0,i=n.length;r<i;r++){var s=n[r];if(e.test(s.name))return n.splice(r,1),s}}function zr(t,e){return e&&(null!=e.start&&(t.start=e.start),null!=e.end&&(t.end=e.end)),t}function Hr(t,e,n){var r=n||{},i=r.number,s="$$v";r.trim&&(s="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(s="_n("+s+")");var o=Gr(e,s);t.model={value:"("+e+")",expression:JSON.stringify(e),callback:"function ($$v) {"+o+"}"}}function Gr(t,e){var n=function(t){if(t=t.trim(),Er=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<Er-1)return(Ar=t.lastIndexOf("."))>-1?{exp:t.slice(0,Ar),key:'"'+t.slice(Ar+1)+'"'}:{exp:t,key:null};Ir=t,Ar=Cr=kr=0;for(;!Qr();)Yr(Sr=Wr())?Xr(Sr):91===Sr&&Jr(Sr);return{exp:t.slice(0,Cr),key:t.slice(Cr+1,kr)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function Wr(){return Ir.charCodeAt(++Ar)}function Qr(){return Ar>=Er}function Yr(t){return 34===t||39===t}function Jr(t){var e=1;for(Cr=Ar;!Qr();)if(Yr(t=Wr()))Xr(t);else if(91===t&&e++,93===t&&e--,0===e){kr=Ar;break}}function Xr(t){for(var e=t;!Qr()&&(t=Wr())!==e;);}var Zr,ti="__r",ei="__c";function ni(t,e,n){var r=Zr;return function i(){null!==e.apply(null,arguments)&&si(t,i,n,r)}}var ri=Qt&&!(et&&Number(et[1])<=53);function ii(t,e,n,r){if(ri){var i=hn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Zr.addEventListener(t,e,rt?{capture:n,passive:r}:n)}function si(t,e,n,r){(r||Zr).removeEventListener(t,e._wrapper||e,n)}function oi(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},s=t.data.on||{};Zr=e.elm,function(t){if(i(t[ti])){var e=J?"change":"input";t[e]=[].concat(t[ti],t[e]||[]),delete t[ti]}i(t[ei])&&(t.change=[].concat(t[ei],t.change||[]),delete t[ei])}(n),ce(n,s,ii,si,ni,e.context),Zr=void 0}}var ai,ci={create:oi,update:oi};function ui(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=x({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);li(o,u)&&(o.value=u)}else if("innerHTML"===n&&Xn(o.tagName)&&r(o.innerHTML)){(ai=ai||document.createElement("div")).innerHTML="<svg>"+s+"</svg>";for(var l=ai.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(t){}}}}function li(t,e){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return p(n)!==p(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(t,e))}var hi={create:ui,update:ui},di=_(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e});function fi(t){var e=pi(t.style);return t.staticStyle?x(t.staticStyle,e):e}function pi(t){return Array.isArray(t)?D(t):"string"==typeof t?di(t):t}var mi,gi=/^--/,yi=/\s*!important$/,vi=function(t,e,n){if(gi.test(e))t.style.setProperty(e,n);else if(yi.test(n))t.style.setProperty(A(e),n.replace(yi,""),"important");else{var r=bi(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},wi=["Webkit","Moz","ms"],bi=_(function(t){if(mi=mi||document.createElement("div").style,"filter"!==(t=E(t))&&t in mi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<wi.length;n++){var r=wi[n]+e;if(r in mi)return r}});function _i(t,e){var n=e.data,s=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=pi(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?x({},d):d;var f=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=fi(i.data))&&x(r,n);(n=fi(t.data))&&x(r,n);for(var s=t;s=s.parent;)s.data&&(n=fi(s.data))&&x(r,n);return r}(e,!0);for(a in h)r(f[a])&&vi(c,a,"");for(a in f)(o=f[a])!==h[a]&&vi(c,a,null==o?"":o)}}var Ti={create:_i,update:_i},Ei=/\s+/;function Ii(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ei).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Si(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ei).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function Ai(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&x(e,Ci(t.name||"v")),x(e,t),e}return"string"==typeof t?Ci(t):void 0}}var Ci=_(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),ki=G&&!X,xi="transition",Di="animation",Oi="transition",Ni="transitionend",Ri="animation",Li="animationend";ki&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Oi="WebkitTransition",Ni="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ri="WebkitAnimation",Li="webkitAnimationEnd"));var Pi=G?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Mi(t){Pi(function(){Pi(t)})}function Fi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ii(t,e))}function ji(t,e){t._transitionClasses&&v(t._transitionClasses,e),Si(t,e)}function $i(t,e,n){var r=Ui(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===xi?Ni:Li,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout(function(){c<o&&u()},s+1),t.addEventListener(a,l)}var Vi=/\b(transform|all)(,|$)/;function Ui(t,e){var n,r=window.getComputedStyle(t),i=(r[Oi+"Delay"]||"").split(", "),s=(r[Oi+"Duration"]||"").split(", "),o=qi(i,s),a=(r[Ri+"Delay"]||"").split(", "),c=(r[Ri+"Duration"]||"").split(", "),u=qi(a,c),l=0,h=0;return e===xi?o>0&&(n=xi,l=o,h=s.length):e===Di?u>0&&(n=Di,l=u,h=c.length):h=(n=(l=Math.max(o,u))>0?o>u?xi:Di:null)?n===xi?s.length:c.length:0,{type:n,timeout:l,propCount:h,hasTransform:n===xi&&Vi.test(r[Oi+"Property"])}}function qi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return Bi(e)+Bi(t[n])}))}function Bi(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Ki(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Ai(t.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){for(var o=s.css,c=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,m=s.appearActiveClass,g=s.beforeEnter,y=s.enter,v=s.afterEnter,w=s.enterCancelled,b=s.beforeAppear,_=s.appear,T=s.afterAppear,E=s.appearCancelled,I=s.duration,S=Ze,A=Ze.$vnode;A&&A.parent;)S=A.context,A=A.parent;var C=!S._isMounted||!t.isRootInsert;if(!C||_||""===_){var k=C&&d?d:u,x=C&&m?m:h,D=C&&f?f:l,O=C&&b||g,N=C&&"function"==typeof _?_:y,R=C&&T||v,L=C&&E||w,P=p(a(I)?I.enter:I);0;var F=!1!==o&&!X,j=Gi(N),$=n._enterCb=M(function(){F&&(ji(n,D),ji(n,x)),$.cancelled?(F&&ji(n,k),L&&L(n)):R&&R(n),n._enterCb=null});t.data.show||ue(t,"insert",function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,$)}),O&&O(n),F&&(Fi(n,k),Fi(n,x),Mi(function(){ji(n,k),$.cancelled||(Fi(n,D),j||(Hi(P)?setTimeout($,P):$i(n,c,$)))})),t.data.show&&(e&&e(),N&&N(n,$)),F||j||$()}}}function zi(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Ai(t.data.transition);if(r(s)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=s.css,c=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,m=s.afterLeave,g=s.leaveCancelled,y=s.delayLeave,v=s.duration,w=!1!==o&&!X,b=Gi(f),_=p(a(v)?v.leave:v);0;var T=n._leaveCb=M(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(ji(n,l),ji(n,h)),T.cancelled?(w&&ji(n,u),g&&g(n)):(e(),m&&m(n)),n._leaveCb=null});y?y(E):E()}function E(){T.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),w&&(Fi(n,u),Fi(n,h),Mi(function(){ji(n,u),T.cancelled||(Fi(n,l),b||(Hi(_)?setTimeout(T,_):$i(n,c,T)))})),f&&f(n,T),w||b||T())}}function Hi(t){return"number"==typeof t&&!isNaN(t)}function Gi(t){if(r(t))return!1;var e=t.fns;return i(e)?Gi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wi(t,e){!0!==e.data.show&&Ki(e)}var Qi=function(t){var e,n,a={},c=t.modules,u=t.nodeOps;for(e=0;e<cr.length;++e)for(a[cr[e]]=[],n=0;n<c.length;++n)i(c[n][cr[e]])&&a[cr[e]].push(c[n][cr[e]]);function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,r,o,c,l){if(i(t.elm)&&i(c)&&(t=c[l]=bt(t)),t.isRootInsert=!o,!function(t,e,n,r){var o=t.data;if(i(o)){var c=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1),i(t.componentInstance))return d(t,e),f(n,t.elm,r),s(c)&&function(t,e,n,r){for(var s,o=t;o.componentInstance;)if(o=o.componentInstance._vnode,i(s=o.data)&&i(s=s.transition)){for(s=0;s<a.activate.length;++s)a.activate[s](ar,o);e.push(o);break}f(n,t.elm,r)}(t,e,n,r),!0}}(t,e,n,r)){var h=t.data,m=t.children,g=t.tag;i(g)?(t.elm=t.ns?u.createElementNS(t.ns,g):u.createElement(g,t),v(t),p(t,m,e),i(h)&&y(t,e),f(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),f(n,t.elm,r)):(t.elm=u.createTextNode(t.text),f(n,t.elm,r))}}function d(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,g(t)?(y(t,e),v(t)):(or(t),e.push(t))}function f(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function p(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)h(e[r],n,t.elm,null,!0,e,r);else o(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function g(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return i(t.tag)}function y(t,n){for(var r=0;r<a.create.length;++r)a.create[r](ar,t);i(e=t.data.hook)&&(i(e.create)&&e.create(ar,t),i(e.insert)&&n.push(t))}function v(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else for(var n=t;n;)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent;i(e=Ze)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function w(t,e,n,r,i,s){for(;r<=i;++r)h(n[r],s,t,e,!1,n,r)}function b(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function _(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(T(r),b(r)):l(r.elm))}}function T(t,e){if(i(e)||i(t.data)){var n,r=a.remove.length+1;for(i(e)?e.listeners+=r:e=function(t,e){function n(){0==--n.listeners&&l(t)}return n.listeners=e,n}(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&T(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function E(t,e,n,r){for(var s=n;s<r;s++){var o=e[s];if(i(o)&&ur(t,o))return s}}function I(t,e,n,o,c,l){if(t!==e){i(e.elm)&&i(o)&&(e=o[c]=bt(e));var d=e.elm=t.elm;if(s(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?C(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var m=t.children,y=e.children;if(i(p)&&g(e)){for(f=0;f<a.update.length;++f)a.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}r(e.text)?i(m)&&i(y)?m!==y&&function(t,e,n,s,o){for(var a,c,l,d=0,f=0,p=e.length-1,m=e[0],g=e[p],y=n.length-1,v=n[0],b=n[y],T=!o;d<=p&&f<=y;)r(m)?m=e[++d]:r(g)?g=e[--p]:ur(m,v)?(I(m,v,s,n,f),m=e[++d],v=n[++f]):ur(g,b)?(I(g,b,s,n,y),g=e[--p],b=n[--y]):ur(m,b)?(I(m,b,s,n,y),T&&u.insertBefore(t,m.elm,u.nextSibling(g.elm)),m=e[++d],b=n[--y]):ur(g,v)?(I(g,v,s,n,f),T&&u.insertBefore(t,g.elm,m.elm),g=e[--p],v=n[++f]):(r(a)&&(a=lr(e,d,p)),r(c=i(v.key)?a[v.key]:E(v,e,d,p))?h(v,s,t,m.elm,!1,n,f):ur(l=e[c],v)?(I(l,v,s,n,f),e[c]=void 0,T&&u.insertBefore(t,l.elm,m.elm)):h(v,s,t,m.elm,!1,n,f),v=n[++f]);d>p?w(t,r(n[y+1])?null:n[y+1].elm,n,f,y,s):f>y&&_(e,d,p)}(d,m,y,n,l):i(y)?(i(t.text)&&u.setTextContent(d,""),w(d,null,y,0,y.length-1,n)):i(m)?_(m,0,m.length-1):i(t.text)&&u.setTextContent(d,""):t.text!==e.text&&u.setTextContent(d,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function S(t,e,n){if(s(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var A=m("attrs,class,staticClass,staticStyle,key");function C(t,e,n,r){var o,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(e,!0),i(o=e.componentInstance)))return d(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!C(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else p(e,u,n);if(i(c)){var m=!1;for(var g in c)if(!A(g)){m=!0,y(e,n);break}!m&&c.class&&se(c.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,o){if(!r(e)){var c,l=!1,d=[];if(r(t))l=!0,h(e,d);else{var f=i(t.nodeType);if(!f&&ur(t,e))I(t,e,d,null,null,o);else{if(f){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),s(n)&&C(t,e,d))return S(e,d,!0),t;c=t,t=new gt(u.tagName(c).toLowerCase(),{},[],void 0,c)}var p=t.elm,m=u.parentNode(p);if(h(e,d,p._leaveCb?null:m,u.nextSibling(p)),i(e.parent))for(var y=e.parent,v=g(e);y;){for(var w=0;w<a.destroy.length;++w)a.destroy[w](y);if(y.elm=e.elm,v){for(var T=0;T<a.create.length;++T)a.create[T](ar,y);var E=y.data.hook.insert;if(E.merged)for(var A=1;A<E.fns.length;A++)E.fns[A]()}else or(y);y=y.parent}i(m)?_([t],0,0):i(t.tag)&&b(t)}}return S(e,d,l),e.elm}i(t)&&b(t)}}({nodeOps:ir,modules:[_r,xr,ci,hi,Ti,G?{create:Wi,activate:Wi,remove:function(t,e){!0!==t.data.show?zi(t,e):e()}}:{}].concat(yr)});X&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&rs(t,"input")});var Yi={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ue(n,"postpatch",function(){Yi.componentUpdated(t,e,n)}):Ji(t,e,n.context),t._vOptions=[].map.call(t.options,ts)):("textarea"===n.tag||nr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",es),t.addEventListener("compositionend",ns),t.addEventListener("change",ns),X&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Ji(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ts);if(i.some(function(t,e){return!L(t,r[e])}))(t.multiple?e.value.some(function(t){return Zi(t,i)}):e.value!==e.oldValue&&Zi(e.value,i))&&rs(t,"change")}}};function Ji(t,e,n){Xi(t,e,n),(J||Z)&&setTimeout(function(){Xi(t,e,n)},0)}function Xi(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=P(r,ts(o))>-1,o.selected!==s&&(o.selected=s);else if(L(ts(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Zi(t,e){return e.every(function(e){return!L(e,t)})}function ts(t){return"_value"in t?t._value:t.value}function es(t){t.target.composing=!0}function ns(t){t.target.composing&&(t.target.composing=!1,rs(t.target,"input"))}function rs(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function is(t){return!t.componentInstance||t.data&&t.data.transition?t:is(t.componentInstance._vnode)}var ss={model:Yi,show:{bind:function(t,e,n){var r=e.value,i=(n=is(n)).data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Ki(n,function(){t.style.display=s})):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=is(n)).data&&n.data.transition?(n.data.show=!0,r?Ki(n,function(){t.style.display=t.__vOriginalDisplay}):zi(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},os={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function as(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?as(We(e.children)):t}function cs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[E(s)]=i[s];return e}function us(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var ls=function(t){return t.tag||ge(t)},hs=function(t){return"show"===t.name},ds={name:"transition",props:os,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ls)).length){0;var r=this.mode;0;var i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return i;var s=as(i);if(!s)return i;if(this._leaving)return us(t,i);var a="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?a+"comment":a+s.tag:o(s.key)?0===String(s.key).indexOf(a)?s.key:a+s.key:s.key;var c=(s.data||(s.data={})).transition=cs(this),u=this._vnode,l=as(u);if(s.data.directives&&s.data.directives.some(hs)&&(s.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(s,l)&&!ge(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=x({},c);if("out-in"===r)return this._leaving=!0,ue(h,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),us(t,i);if("in-out"===r){if(ge(s))return u;var d,f=function(){d()};ue(c,"afterEnter",f),ue(c,"enterCancelled",f),ue(h,"delayLeave",function(t){d=t})}}return i}}},fs=x({tag:String,moveClass:String},os);function ps(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ms(t){t.data.newPos=t.elm.getBoundingClientRect()}function gs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}delete fs.mode;var ys={Transition:ds,TransitionGroup:{props:fs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=tn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=cs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(ps),t.forEach(ms),t.forEach(gs),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;Fi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ni,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ni,t),n._moveCb=null,ji(n,e))})}}))},methods:{hasMove:function(t,e){if(!ki)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Si(n,t)}),Ii(n,e),n.style.display="none",this.$el.appendChild(n);var r=Ui(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Cn.config.mustUseProp=Fn,Cn.config.isReservedTag=Zn,Cn.config.isReservedAttr=Pn,Cn.config.getTagNamespace=tr,Cn.config.isUnknownElement=function(t){if(!G)return!0;if(Zn(t))return!1;if(t=t.toLowerCase(),null!=er[t])return er[t];var e=document.createElement(t);return t.indexOf("-")>-1?er[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:er[t]=/HTMLUnknownElement/.test(e.toString())},x(Cn.options.directives,ss),x(Cn.options.components,ys),Cn.prototype.__patch__=G?Qi:O,Cn.prototype.$mount=function(t,e){return function(t,e,n){return t.$el=e,t.$options.render||(t.$options.render=vt),rn(t,"beforeMount"),new gn(t,function(){t._update(t._render(),n)},O,{before:function(){t._isMounted&&!t._isDestroyed&&rn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,rn(t,"mounted")),t}(this,t=t&&G?rr(t):void 0,e)},G&&setTimeout(function(){V.devtools&&ot&&ot.emit("init",Cn)},0);var vs=/\{\{((?:.|\r?\n)+?)\}\}/g,ws=/[-.*+?^${}()|[\]\/\\]/g,bs=_(function(t){var e=t[0].replace(ws,"\\$&"),n=t[1].replace(ws,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")});function _s(t,e){var n=e?bs(e):vs;if(n.test(t)){for(var r,i,s,o=[],a=[],c=n.lastIndex=0;r=n.exec(t);){(i=r.index)>c&&(a.push(s=t.slice(c,i)),o.push(JSON.stringify(s)));var u=Or(r[1].trim());o.push("_s("+u+")"),a.push({"@binding":u}),c=i+r[0].length}return c<t.length&&(a.push(s=t.slice(c)),o.push(JSON.stringify(s))),{expression:o.join("+"),tokens:a}}}var Ts={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=Br(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=qr(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}};var Es,Is={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=Br(t,"style");n&&(t.staticStyle=JSON.stringify(di(n)));var r=qr(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},Ss=function(t){return(Es=Es||document.createElement("div")).innerHTML=t,Es.textContent},As=m("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Cs=m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ks=m("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),xs=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ds=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Os="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+U.source+"]*",Ns="((?:"+Os+"\\:)?"+Os+")",Rs=new RegExp("^<"+Ns),Ls=/^\s*(\/?)>/,Ps=new RegExp("^<\\/"+Ns+"[^>]*>"),Ms=/^<!DOCTYPE [^>]+>/i,Fs=/^<!\--/,js=/^<!\[/,$s=m("script,style,textarea",!0),Vs={},Us={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},qs=/&(?:lt|gt|quot|amp|#39);/g,Bs=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Ks=m("pre,textarea",!0),zs=function(t,e){return t&&Ks(t)&&"\n"===e[0]};function Hs(t,e){var n=e?Bs:qs;return t.replace(n,function(t){return Us[t]})}var Gs,Ws,Qs,Ys,Js,Xs,Zs,to,eo=/^@|^v-on:/,no=/^v-|^@|^:|^#/,ro=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,io=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,so=/^\(|\)$/g,oo=/^\[.*\]$/,ao=/:(.*)$/,co=/^:|^\.|^v-bind:/,uo=/\.[^.\]]+(?=[^\]]*$)/g,lo=/^v-slot(:|$)|^#/,ho=/[\r\n]/,fo=/[ \f\t\r\n]+/g,po=_(Ss),mo="_empty_";function go(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),rawAttrsMap:{},parent:n,children:[]}}function yo(t,e){Gs=e.warn||Rr,Xs=e.isPreTag||N,Zs=e.mustUseProp||N,to=e.getTagNamespace||N;var n=e.isReservedTag||N;(function(t){return!(!(t.component||t.attrsMap[":is"]||t.attrsMap["v-bind:is"])&&(t.attrsMap.is?n(t.attrsMap.is):n(t.tag)))}),Qs=Lr(e.modules,"transformNode"),Ys=Lr(e.modules,"preTransformNode"),Js=Lr(e.modules,"postTransformNode"),Ws=e.delimiters;var r,i,s=[],o=!1!==e.preserveWhitespace,a=e.whitespace,c=!1,u=!1;function l(t){if(h(t),c||t.processed||(t=vo(t,e)),s.length||t===r||r.if&&(t.elseif||t.else)&&bo(r,{exp:t.elseif,block:t}),i&&!t.forbidden)if(t.elseif||t.else)o=t,(a=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(i.children))&&a.if&&bo(a,{exp:o.elseif,block:o});else{if(t.slotScope){var n=t.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[n]=t}i.children.push(t),t.parent=i}var o,a;t.children=t.children.filter(function(t){return!t.slotScope}),h(t),t.pre&&(c=!1),Xs(t.tag)&&(u=!1);for(var l=0;l<Js.length;l++)Js[l](t,e)}function h(t){if(!u)for(var e;(e=t.children[t.children.length-1])&&3===e.type&&" "===e.text;)t.children.pop()}return function(t,e){for(var n,r,i=[],s=e.expectHTML,o=e.isUnaryTag||N,a=e.canBeLeftOpenTag||N,c=0;t;){if(n=t,r&&$s(r)){var u=0,l=r.toLowerCase(),h=Vs[l]||(Vs[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),d=t.replace(h,function(t,n,r){return u=r.length,$s(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),zs(l,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});c+=t.length-d.length,t=d,A(l,c-u,c)}else{var f=t.indexOf("<");if(0===f){if(Fs.test(t)){var p=t.indexOf("--\x3e");if(p>=0){e.shouldKeepComment&&e.comment(t.substring(4,p),c,c+p+3),E(p+3);continue}}if(js.test(t)){var m=t.indexOf("]>");if(m>=0){E(m+2);continue}}var g=t.match(Ms);if(g){E(g[0].length);continue}var y=t.match(Ps);if(y){var v=c;E(y[0].length),A(y[1],v,c);continue}var w=I();if(w){S(w),zs(w.tagName,t)&&E(1);continue}}var b=void 0,_=void 0,T=void 0;if(f>=0){for(_=t.slice(f);!(Ps.test(_)||Rs.test(_)||Fs.test(_)||js.test(_)||(T=_.indexOf("<",1))<0);)f+=T,_=t.slice(f);b=t.substring(0,f)}f<0&&(b=t),b&&E(b.length),e.chars&&b&&e.chars(b,c-b.length,c)}if(t===n){e.chars&&e.chars(t);break}}function E(e){c+=e,t=t.substring(e)}function I(){var e=t.match(Rs);if(e){var n,r,i={tagName:e[1],attrs:[],start:c};for(E(e[0].length);!(n=t.match(Ls))&&(r=t.match(Ds)||t.match(xs));)r.start=c,E(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],E(n[0].length),i.end=c,i}}function S(t){var n=t.tagName,c=t.unarySlash;s&&("p"===r&&ks(n)&&A(r),a(n)&&r===n&&A(n));for(var u=o(n)||!!c,l=t.attrs.length,h=new Array(l),d=0;d<l;d++){var f=t.attrs[d],p=f[3]||f[4]||f[5]||"",m="a"===n&&"href"===f[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;h[d]={name:f[1],value:Hs(p,m)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:h,start:t.start,end:t.end}),r=n),e.start&&e.start(n,h,u,t.start,t.end)}function A(t,n,s){var o,a;if(null==n&&(n=c),null==s&&(s=c),t)for(a=t.toLowerCase(),o=i.length-1;o>=0&&i[o].lowerCasedTag!==a;o--);else o=0;if(o>=0){for(var u=i.length-1;u>=o;u--)e.end&&e.end(i[u].tag,n,s);i.length=o,r=o&&i[o-1].tag}else"br"===a?e.start&&e.start(t,[],!0,n,s):"p"===a&&(e.start&&e.start(t,[],!1,n,s),e.end&&e.end(t,n,s))}A()}(t,{warn:Gs,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,outputSourceRange:e.outputSourceRange,start:function(t,n,o,a,h){var d=i&&i.ns||to(t);J&&"svg"===d&&(n=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Eo.test(r.name)||(r.name=r.name.replace(Io,""),e.push(r))}return e}(n));var f,p=go(t,n,i);d&&(p.ns=d),"style"!==(f=p).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||st()||(p.forbidden=!0);for(var m=0;m<Ys.length;m++)p=Ys[m](p,e)||p;c||(!function(t){null!=Br(t,"v-pre")&&(t.pre=!0)}(p),p.pre&&(c=!0)),Xs(p.tag)&&(u=!0),c?function(t){var e=t.attrsList,n=e.length;if(n)for(var r=t.attrs=new Array(n),i=0;i<n;i++)r[i]={name:e[i].name,value:JSON.stringify(e[i].value)},null!=e[i].start&&(r[i].start=e[i].start,r[i].end=e[i].end);else t.pre||(t.plain=!0)}(p):p.processed||(wo(p),function(t){var e=Br(t,"v-if");if(e)t.if=e,bo(t,{exp:e,block:t});else{null!=Br(t,"v-else")&&(t.else=!0);var n=Br(t,"v-else-if");n&&(t.elseif=n)}}(p),function(t){null!=Br(t,"v-once")&&(t.once=!0)}(p)),r||(r=p),o?l(p):(i=p,s.push(p))},end:function(t,e,n){var r=s[s.length-1];s.length-=1,i=s[s.length-1],l(r)},chars:function(t,e,n){if(i&&(!J||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var r,s,l,h=i.children;if(t=u||t.trim()?"script"===(r=i).tag||"style"===r.tag?t:po(t):h.length?a?"condense"===a&&ho.test(t)?"":" ":o?" ":"":"")u||"condense"!==a||(t=t.replace(fo," ")),!c&&" "!==t&&(s=_s(t,Ws))?l={type:2,expression:s.expression,tokens:s.tokens,text:t}:" "===t&&h.length&&" "===h[h.length-1].text||(l={type:3,text:t}),l&&h.push(l)}},comment:function(t,e,n){if(i){var r={type:3,text:t,isComment:!0};0,i.children.push(r)}}}),r}function vo(t,e){var n,r;!function(t){var e=qr(t,"key");if(e){t.key=e}}(t),t.plain=!t.key&&!t.scopedSlots&&!t.attrsList.length,(r=qr(n=t,"ref"))&&(n.ref=r,n.refInFor=function(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(n)),function(t){var e;"template"===t.tag?(e=Br(t,"scope"),t.slotScope=e||Br(t,"slot-scope")):(e=Br(t,"slot-scope"))&&(t.slotScope=e);var n=qr(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,t.slotTargetDynamic=!(!t.attrsMap[":slot"]&&!t.attrsMap["v-bind:slot"]),"template"===t.tag||t.slotScope||Mr(t,"slot",n,Ur(t,"slot")));if("template"===t.tag){var r=Kr(t,lo);if(r){0;var i=_o(r),s=i.name,o=i.dynamic;t.slotTarget=s,t.slotTargetDynamic=o,t.slotScope=r.value||mo}}else{var a=Kr(t,lo);if(a){0;var c=t.scopedSlots||(t.scopedSlots={}),u=_o(a),l=u.name,h=u.dynamic,d=c[l]=go("template",[],t);d.slotTarget=l,d.slotTargetDynamic=h,d.children=t.children.filter(function(t){if(!t.slotScope)return t.parent=d,!0}),d.slotScope=a.value||mo,t.children=[],t.plain=!1}}}(t),function(t){"slot"===t.tag&&(t.slotName=qr(t,"name"))}(t),function(t){var e;(e=qr(t,"is"))&&(t.component=e);null!=Br(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var i=0;i<Qs.length;i++)t=Qs[i](t,e)||t;return function(t){var e,n,r,i,s,o,a,c,u=t.attrsList;for(e=0,n=u.length;e<n;e++){if(r=i=u[e].name,s=u[e].value,no.test(r))if(t.hasBindings=!0,(o=To(r.replace(no,"")))&&(r=r.replace(uo,"")),co.test(r))r=r.replace(co,""),s=Or(s),(c=oo.test(r))&&(r=r.slice(1,-1)),o&&(o.prop&&!c&&"innerHtml"===(r=E(r))&&(r="innerHTML"),o.camel&&!c&&(r=E(r)),o.sync&&(a=Gr(s,"$event"),c?Vr(t,'"update:"+('+r+")",a,null,!1,0,u[e],!0):(Vr(t,"update:"+E(r),a,null,!1,0,u[e]),A(r)!==E(r)&&Vr(t,"update:"+A(r),a,null,!1,0,u[e])))),o&&o.prop||!t.component&&Zs(t.tag,t.attrsMap.type,r)?Pr(t,r,s,u[e],c):Mr(t,r,s,u[e],c);else if(eo.test(r))r=r.replace(eo,""),(c=oo.test(r))&&(r=r.slice(1,-1)),Vr(t,r,s,o,!1,0,u[e],c);else{var l=(r=r.replace(no,"")).match(ao),h=l&&l[1];c=!1,h&&(r=r.slice(0,-(h.length+1)),oo.test(h)&&(h=h.slice(1,-1),c=!0)),jr(t,r,i,s,h,c,o,u[e])}else Mr(t,r,JSON.stringify(s),u[e]),!t.component&&"muted"===r&&Zs(t.tag,t.attrsMap.type,r)&&Pr(t,r,"true",u[e])}}(t),t}function wo(t){var e;if(e=Br(t,"v-for")){var n=function(t){var e=t.match(ro);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(so,""),i=r.match(io);i?(n.alias=r.replace(io,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(e);n&&x(t,n)}}function bo(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function _o(t){var e=t.name.replace(lo,"");return e||"#"!==t.name[0]&&(e="default"),oo.test(e)?{name:e.slice(1,-1),dynamic:!0}:{name:'"'+e+'"',dynamic:!1}}function To(t){var e=t.match(uo);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}var Eo=/^xmlns:NS\d+/,Io=/^NS\d+:/;function So(t){return go(t.tag,t.attrsList.slice(),t.parent)}var Ao=[Ts,Is,{preTransformNode:function(t,e){if("input"===t.tag){var n,r=t.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=qr(t,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Br(t,"v-if",!0),s=i?"&&("+i+")":"",o=null!=Br(t,"v-else",!0),a=Br(t,"v-else-if",!0),c=So(t);wo(c),Fr(c,"type","checkbox"),vo(c,e),c.processed=!0,c.if="("+n+")==='checkbox'"+s,bo(c,{exp:c.if,block:c});var u=So(t);Br(u,"v-for",!0),Fr(u,"type","radio"),vo(u,e),bo(c,{exp:"("+n+")==='radio'"+s,block:u});var l=So(t);return Br(l,"v-for",!0),Fr(l,":type",n),vo(l,e),bo(c,{exp:i,block:l}),o?c.else=!0:a&&(c.elseif=a),c}}}}];var Co,ko,xo={expectHTML:!0,modules:Ao,directives:{model:function(t,e,n){n;var r=e.value,i=e.modifiers,s=t.tag,o=t.attrsMap.type;if(t.component)return Hr(t,r,i),!1;if("select"===s)!function(t,e,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Gr(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Vr(t,"change",r,null,!0)}(t,r,i);else if("input"===s&&"checkbox"===o)!function(t,e,n){var r=n&&n.number,i=qr(t,"value")||"null",s=qr(t,"true-value")||"true",o=qr(t,"false-value")||"false";Pr(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===s?":("+e+")":":_q("+e+","+s+")")),Vr(t,"change","var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+s+"):("+o+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Gr(e,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Gr(e,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Gr(e,"$$c")+"}",null,!0)}(t,r,i);else if("input"===s&&"radio"===o)!function(t,e,n){var r=n&&n.number,i=qr(t,"value")||"null";Pr(t,"checked","_q("+e+","+(i=r?"_n("+i+")":i)+")"),Vr(t,"change",Gr(e,i),null,!0)}(t,r,i);else if("input"===s||"textarea"===s)!function(t,e,n){var r=t.attrsMap.type,i=n||{},s=i.lazy,o=i.number,a=i.trim,c=!s&&"range"!==r,u=s?"change":"range"===r?ti:"input",l="$event.target.value";a&&(l="$event.target.value.trim()"),o&&(l="_n("+l+")");var h=Gr(e,l);c&&(h="if($event.target.composing)return;"+h),Pr(t,"value","("+e+")"),Vr(t,u,h,null,!0),(a||o)&&Vr(t,"blur","$forceUpdate()")}(t,r,i);else if(!V.isReservedTag(s))return Hr(t,r,i),!1;return!0},text:function(t,e){e.value&&Pr(t,"textContent","_s("+e.value+")",e)},html:function(t,e){e.value&&Pr(t,"innerHTML","_s("+e.value+")",e)}},isPreTag:function(t){return"pre"===t},isUnaryTag:As,mustUseProp:Fn,canBeLeftOpenTag:Cs,isReservedTag:Zn,getTagNamespace:tr,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(Ao)},Do=_(function(t){return m("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(t?","+t:""))});function Oo(t,e){t&&(Co=Do(e.staticKeys||""),ko=e.isReservedTag||N,function t(e){e.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||g(t.tag)||!ko(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Co)))}(e);if(1===e.type){if(!ko(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];t(i),i.static||(e.static=!1)}if(e.ifConditions)for(var s=1,o=e.ifConditions.length;s<o;s++){var a=e.ifConditions[s].block;t(a),a.static||(e.static=!1)}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var r=0,i=e.children.length;r<i;r++)t(e.children[r],n||!!e.for);if(e.ifConditions)for(var s=1,o=e.ifConditions.length;s<o;s++)t(e.ifConditions[s].block,n)}}(t,!1))}var No=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Ro=/\([^)]*?\);*$/,Lo=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Po={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Mo={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Fo=function(t){return"if("+t+")return null;"},jo={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Fo("$event.target !== $event.currentTarget"),ctrl:Fo("!$event.ctrlKey"),shift:Fo("!$event.shiftKey"),alt:Fo("!$event.altKey"),meta:Fo("!$event.metaKey"),left:Fo("'button' in $event && $event.button !== 0"),middle:Fo("'button' in $event && $event.button !== 1"),right:Fo("'button' in $event && $event.button !== 2")};function $o(t,e){var n=e?"nativeOn:":"on:",r="",i="";for(var s in t){var o=Vo(t[s]);t[s]&&t[s].dynamic?i+=s+","+o+",":r+='"'+s+'":'+o+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Vo(t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Vo(t)}).join(",")+"]";var e=Lo.test(t.value),n=No.test(t.value),r=Lo.test(t.value.replace(Ro,""));if(t.modifiers){var i="",s="",o=[];for(var a in t.modifiers)if(jo[a])s+=jo[a],Po[a]&&o.push(a);else if("exact"===a){var c=t.modifiers;s+=Fo(["ctrl","shift","alt","meta"].filter(function(t){return!c[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else o.push(a);return o.length&&(i+=function(t){return"if(!$event.type.indexOf('key')&&"+t.map(Uo).join("&&")+")return null;"}(o)),s&&(i+=s),"function($event){"+i+(e?"return "+t.value+".apply(null, arguments)":n?"return ("+t.value+").apply(null, arguments)":r?"return "+t.value:t.value)+"}"}return e||n?t.value:"function($event){"+(r?"return "+t.value:t.value)+"}"}function Uo(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=Po[t],r=Mo[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var qo={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:O},Bo=function(t){this.options=t,this.warn=t.warn||Rr,this.transforms=Lr(t.modules,"transformCode"),this.dataGenFns=Lr(t.modules,"genData"),this.directives=x(x({},qo),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!!t.component||!e(t.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ko(t,e){var n=new Bo(e);return{render:"with(this){return "+(t?"script"===t.tag?"null":zo(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function zo(t,e){if(t.parent&&(t.pre=t.pre||t.parent.pre),t.staticRoot&&!t.staticProcessed)return Ho(t,e);if(t.once&&!t.onceProcessed)return Go(t,e);if(t.for&&!t.forProcessed)return Qo(t,e);if(t.if&&!t.ifProcessed)return Wo(t,e);if("template"!==t.tag||t.slotTarget||e.pre){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=Zo(t,e),i="_t("+n+(r?",function(){return "+r+"}":""),s=t.attrs||t.dynamicAttrs?na((t.attrs||[]).concat(t.dynamicAttrs||[]).map(function(t){return{name:E(t.name),value:t.value,dynamic:t.dynamic}})):null,o=t.attrsMap["v-bind"];!s&&!o||r||(i+=",null");s&&(i+=","+s);o&&(i+=(s?"":",null")+","+o);return i+")"}(t,e);var n;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:Zo(e,n,!0);return"_c("+t+","+Yo(e,n)+(r?","+r:"")+")"}(t.component,t,e);else{var r;(!t.plain||t.pre&&e.maybeComponent(t))&&(r=Yo(t,e));var i=t.inlineTemplate?null:Zo(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var s=0;s<e.transforms.length;s++)n=e.transforms[s](t,n);return n}return Zo(t,e)||"void 0"}function Ho(t,e){t.staticProcessed=!0;var n=e.pre;return t.pre&&(e.pre=t.pre),e.staticRenderFns.push("with(this){return "+zo(t,e)+"}"),e.pre=n,"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function Go(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return Wo(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+zo(t,e)+","+e.onceId+++","+n+")":zo(t,e)}return Ho(t,e)}function Wo(t,e,n,r){return t.ifProcessed=!0,function t(e,n,r,i){if(!e.length)return i||"_e()";var s=e.shift();return s.exp?"("+s.exp+")?"+o(s.block)+":"+t(e,n,r,i):""+o(s.block);function o(t){return r?r(t,n):t.once?Go(t,n):zo(t,n)}}(t.ifConditions.slice(),e,n,r)}function Qo(t,e,n,r){var i=t.for,s=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+s+o+a+"){return "+(n||zo)(t,e)+"})"}function Yo(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,i,s,o,a="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){s=n[r],o=!0;var u=e.directives[s.name];u&&(o=!!u(t,s,e.warn)),o&&(c=!0,a+='{name:"'+s.name+'",rawName:"'+s.rawName+'"'+(s.value?",value:("+s.value+"),expression:"+JSON.stringify(s.value):"")+(s.arg?",arg:"+(s.isDynamicArg?s.arg:'"'+s.arg+'"'):"")+(s.modifiers?",modifiers:"+JSON.stringify(s.modifiers):"")+"},")}if(c)return a.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:"+na(t.attrs)+","),t.props&&(n+="domProps:"+na(t.props)+","),t.events&&(n+=$o(t.events,!1)+","),t.nativeEvents&&(n+=$o(t.nativeEvents,!0)+","),t.slotTarget&&!t.slotScope&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=function(t,e,n){var r=t.for||Object.keys(e).some(function(t){var n=e[t];return n.slotTargetDynamic||n.if||n.for||Jo(n)}),i=!!t.if;if(!r)for(var s=t.parent;s;){if(s.slotScope&&s.slotScope!==mo||s.for){r=!0;break}s.if&&(i=!0),s=s.parent}var o=Object.keys(e).map(function(t){return Xo(e[t],n)}).join(",");return"scopedSlots:_u(["+o+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(t){var e=5381,n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(o):"")+")"}(t,t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var s=function(t,e){var n=t.children[0];0;if(n&&1===n.type){var r=Ko(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);s&&(n+=s+",")}return n=n.replace(/,$/,"")+"}",t.dynamicAttrs&&(n="_b("+n+',"'+t.tag+'",'+na(t.dynamicAttrs)+")"),t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function Jo(t){return 1===t.type&&("slot"===t.tag||t.children.some(Jo))}function Xo(t,e){var n=t.attrsMap["slot-scope"];if(t.if&&!t.ifProcessed&&!n)return Wo(t,e,Xo,"null");if(t.for&&!t.forProcessed)return Qo(t,e,Xo);var r=t.slotScope===mo?"":String(t.slotScope),i="function("+r+"){return "+("template"===t.tag?t.if&&n?"("+t.if+")?"+(Zo(t,e)||"undefined")+":undefined":Zo(t,e)||"undefined":zo(t,e))+"}",s=r?"":",proxy:true";return"{key:"+(t.slotTarget||'"default"')+",fn:"+i+s+"}"}function Zo(t,e,n,r,i){var s=t.children;if(s.length){var o=s[0];if(1===s.length&&o.for&&"template"!==o.tag&&"slot"!==o.tag){var a=n?e.maybeComponent(o)?",1":",0":"";return""+(r||zo)(o,e)+a}var c=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(ta(i)||i.ifConditions&&i.ifConditions.some(function(t){return ta(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(s,e.maybeComponent):0,u=i||ea;return"["+s.map(function(t){return u(t,e)}).join(",")+"]"+(c?","+c:"")}}function ta(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function ea(t,e){return 1===t.type?zo(t,e):3===t.type&&t.isComment?(r=t,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=t).type?n.expression:ra(JSON.stringify(n.text)))+")";var n,r}function na(t){for(var e="",n="",r=0;r<t.length;r++){var i=t[r],s=ra(i.value);i.dynamic?n+=i.name+","+s+",":e+='"'+i.name+'":'+s+","}return e="{"+e.slice(0,-1)+"}",n?"_d("+e+",["+n.slice(0,-1)+"])":e}function ra(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function ia(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),O}}function sa(t){var e=Object.create(null);return function(n,r,i){(r=x({},r)).warn;delete r.warn;var s=r.delimiters?String(r.delimiters)+n:n;if(e[s])return e[s];var o=t(n,r);var a={},c=[];return a.render=ia(o.render,c),a.staticRenderFns=o.staticRenderFns.map(function(t){return ia(t,c)}),e[s]=a}}var oa,aa,ca=(oa=function(t,e){var n=yo(t.trim(),e);!1!==e.optimize&&Oo(n,e);var r=Ko(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),i=[],s=[],o=function(t,e,n){(n?s:i).push(t)};if(n)for(var a in n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=x(Object.create(t.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=o;var c=oa(e.trim(),r);return c.errors=i,c.tips=s,c}return{compile:e,compileToFunctions:sa(e)}})(xo),ua=(ca.compile,ca.compileToFunctions);function la(t){return(aa=aa||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',aa.innerHTML.indexOf("&#10;")>0}var ha=!!G&&la(!1),da=!!G&&la(!0),fa=_(function(t){var e=rr(t);return e&&e.innerHTML}),pa=Cn.prototype.$mount;Cn.prototype.$mount=function(t,e){if((t=t&&rr(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=fa(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){0;var i=ua(r,{outputSourceRange:!1,shouldDecodeNewlines:ha,shouldDecodeNewlinesForHref:da,delimiters:n.delimiters,comments:n.comments},this),s=i.render,o=i.staticRenderFns;n.render=s,n.staticRenderFns=o}}return pa.call(this,t,e)},Cn.compile=ua,e.a=Cn}).call(e,n("DuR2"))},"9lTP":function(t,e,n){"use strict";var r=n("Rzxn"),i=n("fQOS"),s=n("28tl"),o=n("xq9A");const a="@firebase/firestore-compat",c="0.1.10";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new i.g("invalid-argument",`Invalid options passed to function ${t}(): You cannot `+'specify both "merge" and "mergeFields".');return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"==typeof Uint8Array)throw new i.g("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i.r)())throw new i.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return h(),new d(i.b.fromBase64String(t))}static fromUint8Array(t){return l(),new d(i.b.fromUint8Array(t))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of e)if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class p{enableIndexedDbPersistence(t,e){return Object(i.F)(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(i.G)(t._delegate)}clearIndexedDbPersistence(t){return Object(i.x)(t._delegate)}}class m{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof i.m||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(i.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&delete(t=Object.assign(Object.assign({},e),t)).merge,this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(i.A)(this._delegate,t,e,n)}enableNetwork(){return Object(i.H)(this._delegate)}disableNetwork(){return Object(i.D)(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(i.t)("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i._11)(this._delegate)}onSnapshotsInSync(t){return Object(i.Y)(this._delegate,t)}get app(){if(!this._appCompat)throw new i.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new x(this,Object(i.y)(this._delegate,t))}catch(t){throw _(t,"collection()","Firestore.collection()")}}doc(t){try{return new b(this,Object(i.E)(this._delegate,t))}catch(t){throw _(t,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new A(this,Object(i.z)(this._delegate,t))}catch(t){throw _(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(i._3)(this._delegate,e=>t(new y(this,e)))}batch(){return Object(i.K)(this._delegate),new v(new i.l(this._delegate,t=>Object(i.L)(this._delegate,t)))}loadBundle(t){return Object(i.V)(this._delegate,t)}namedQuery(t){return Object(i.W)(this._delegate,t).then(t=>t?new A(this,t):null)}}class g extends i.a{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new i.b(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return b.forKey(e,this.firestore,null)}}class y{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new g(t)}get(t){const e=D(t);return this._delegate.get(e).then(t=>new I(this._firestore,new i.e(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=D(t);return n?(u("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=D(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=D(t);return this._delegate.delete(e),this}}class v{constructor(t){this._delegate=t}set(t,e,n){const r=D(t);return n?(u("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=D(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=D(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class w{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new i.i(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new S(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=w.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let i=r.get(e);return i||(i=new w(t,new g(t),e),r.set(e,i)),i}}w.INSTANCES=new WeakMap;class b{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new g(t)}static forPath(t,e,n){if(t.length%2!=0)throw new i.g("invalid-argument","Invalid document reference. Document references must have an even number of segments, but "+`${t.canonicalString()} has ${t.length}`);return new b(e,new i.d(e._delegate,n,new i.n(t)))}static forKey(t,e,n){return new b(e,new i.d(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new x(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new x(this.firestore,Object(i.y)(this._delegate,t))}catch(t){throw _(t,"collection()","DocumentReference.collection()")}}isEqual(t){return(t=Object(s.i)(t))instanceof i.d&&Object(i._2)(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(i._5)(this._delegate,t,e):Object(i._5)(this._delegate,t)}catch(t){throw _(t,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(i._10)(this._delegate,t):Object(i._10)(this._delegate,t,e,...n)}catch(t){throw _(t,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i.B)(this._delegate)}onSnapshot(...t){const e=T(t),n=E(t,t=>new I(this.firestore,new i.e(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(i.X)(this._delegate,e,n)}get(t){let e;return(e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i.N)(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i.O)(this._delegate):Object(i.M)(this._delegate)).then(t=>new I(this.firestore,new i.e(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new b(this.firestore,t?this._delegate.withConverter(w.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function _(t,e,n){return t.message=t.message.replace(e,n),t}function T(t){for(const e of t)if("object"==typeof e&&!f(e))return e;return{}}function E(t,e){var n,r;let i;return{next:t=>{i.next&&i.next(e(t))},error:null===(n=(i=f(t[0])?t[0]:f(t[1])?t[1]:"function"==typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]}).error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class I{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new b(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(i._7)(this._delegate,t._delegate)}}class S extends I{data(t){const e=this._delegate.data(t);return Object(i.q)(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class A{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new g(t)}where(t,e,n){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i._12)(t,e,n)))}catch(t){throw _(t,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i.Z)(t,e)))}catch(t){throw _(t,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i.T)(t)))}catch(t){throw _(t,"limit()","Query.limit()")}}limitToLast(t){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i.U)(t)))}catch(t){throw _(t,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i._9)(...t)))}catch(t){throw _(t,"startAt()","Query.startAt()")}}startAfter(...t){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i._8)(...t)))}catch(t){throw _(t,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i.J)(...t)))}catch(t){throw _(t,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new A(this.firestore,Object(i._0)(this._delegate,Object(i.I)(...t)))}catch(t){throw _(t,"endAt()","Query.endAt()")}}isEqual(t){return Object(i._1)(this._delegate,t._delegate)}get(t){let e;return(e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i.Q)(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i.R)(this._delegate):Object(i.P)(this._delegate)).then(t=>new k(this.firestore,new i.j(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=T(t),n=E(t,t=>new k(this.firestore,new i.j(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(i.X)(this._delegate,e,n)}withConverter(t){return new A(this.firestore,t?this._delegate.withConverter(w.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new S(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class k{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new A(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new S(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new S(this._firestore,n))})}isEqual(t){return Object(i._7)(this._delegate,t._delegate)}}class x extends A{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new b(this.firestore,t):null}doc(t){try{return new b(this.firestore,void 0===t?Object(i.E)(this._delegate):Object(i.E)(this._delegate,t))}catch(t){throw _(t,"doc()","CollectionReference.doc()")}}add(t){return Object(i.u)(this._delegate,t).then(t=>new b(this.firestore,t))}isEqual(t){return Object(i._2)(this._delegate,t._delegate)}withConverter(t){return new x(this.firestore,t?this._delegate.withConverter(w.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function D(t){return Object(i.p)(t,i.d)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(...t){this._delegate=new i.f(...t)}static documentId(){return new O(i.o.keyField().canonicalString())}isEqual(t){return(t=Object(s.i)(t))instanceof i.f&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(i._4)();return t._methodName="FieldValue.serverTimestamp",new N(t)}static delete(){const t=Object(i.C)();return t._methodName="FieldValue.delete",new N(t)}static arrayUnion(...t){const e=Object(i.w)(...t);return e._methodName="FieldValue.arrayUnion",new N(e)}static arrayRemove(...t){const e=Object(i.v)(...t);return e._methodName="FieldValue.arrayRemove",new N(e)}static increment(t){const e=Object(i.S)(t);return e._methodName="FieldValue.increment",new N(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={Firestore:m,GeoPoint:i.h,Timestamp:i.k,Blob:d,Transaction:y,WriteBatch:v,DocumentReference:b,DocumentSnapshot:I,Query:A,QueryDocumentSnapshot:S,QuerySnapshot:k,CollectionReference:x,FieldPath:O,FieldValue:N,setLogLevel:function(t){Object(i._6)(t)},CACHE_SIZE_UNLIMITED:i.c};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var L,P;L=r.a,P=((t,e)=>new m(t,e,new p)),L.INTERNAL.registerComponent(new o.a("firestore-compat",t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("firestore").getImmediate();return P(e,n)},"PUBLIC").setServiceProps(Object.assign({},R))),L.registerVersion(a,c)},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},"E/LO":function(t,e,n){"use strict";var r=n("Rzxn");n.d(e,"a",function(){return r.a});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.a.registerVersion("firebase","9.6.1","app-compat")},Rzxn:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("28tl"),i=n("xq9A"),s=n("a7sP"),o=n("gZMR");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s._addComponent)(t,new i.a("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s.deleteApp)(this._delegate)))}_getService(t,e=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){Object(s._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.b("app-compat","Firebase",c);const l=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function t(){const e=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){const e={},n={__esModule:!0,initializeApp:function(i,o={}){const a=s.initializeApp(i,o);if(Object(r.d)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c},app:i,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(e){const o=e.name,a=o.replace("-compat","");if(s._registerComponent(e)&&"PUBLIC"===e.type){const s=(t=i())=>{if("function"!=typeof t[a])throw u.create("invalid-app-argument",{appName:o});return t[a]()};void 0!==e.serviceProps&&Object(r.h)(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,o);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null},removeApp:function(t){delete e[t]},useAsService:function(t,e){return"serverAuth"===e?null:e},modularAPIs:s}};function i(t){if(t=t||s._DEFAULT_ENTRY_NAME,!Object(r.d)(e,t))throw u.create("no-app",{appName:t});return e[t]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(e).map(t=>e[t])}}),i.App=t,n}(a);return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:t,extendNamespace:function(t){Object(r.h)(e,t)},createSubscribe:r.f,ErrorFactory:r.b,deepExtend:r.h}),e}(),h=new o.b("@firebase/app-compat"),d="@firebase/app-compat",f="0.1.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(r.k)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const p=l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m;Object(s.registerVersion)(d,f,m)},"VU/8":function(t,e){t.exports=function(t,e,n,r,i,s){var o,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,a=t.default);var u,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):r&&(u=r),u){var h=l.functional,d=h?l.render:l.beforeCreate;h?(l._injectStyles=u,l.render=function(t,e){return u.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:a,options:l}}},W2nU:function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var t=a(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},a7sP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SDK_VERSION",function(){return E}),n.d(e,"_DEFAULT_ENTRY_NAME",function(){return l}),n.d(e,"_addComponent",function(){return p}),n.d(e,"_addOrOverwriteComponent",function(){return m}),n.d(e,"_apps",function(){return d}),n.d(e,"_clearComponents",function(){return w}),n.d(e,"_components",function(){return f}),n.d(e,"_getProvider",function(){return y}),n.d(e,"_registerComponent",function(){return g}),n.d(e,"_removeServiceInstance",function(){return v}),n.d(e,"deleteApp",function(){return C}),n.d(e,"getApp",function(){return S}),n.d(e,"getApps",function(){return A}),n.d(e,"initializeApp",function(){return I}),n.d(e,"onLog",function(){return x}),n.d(e,"registerVersion",function(){return k}),n.d(e,"setLogLevel",function(){return D});var r=n("xq9A"),i=n("gZMR"),s=n("28tl");n.d(e,"FirebaseError",function(){return s.c});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const a="@firebase/app",c="0.7.11",u=new i.b("@firebase/app"),l="[DEFAULT]",h={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function p(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function m(t,e){t.container.addOrOverwriteComponent(e)}function g(t){const e=t.name;if(f.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;f.set(e,t);for(const e of d.values())p(e,t);return!0}function y(t,e){return t.container.getProvider(e)}function v(t,e,n=l){y(t,e).clearInstance(n)}function w(){f.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},_=new s.b("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="9.6.1";function I(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:l,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw _.create("bad-app-name",{appName:String(i)});const o=d.get(i);if(o){if(Object(s.g)(t,o.options)&&Object(s.g)(n,o.config))return o;throw _.create("duplicate-app",{appName:i})}const a=new r.b(i);for(const t of f.values())a.addComponent(t);const c=new T(t,n,a);return d.set(i,c),c}function S(t=l){const e=d.get(t);if(!e)throw _.create("no-app",{appName:t});return e}function A(){return Array.from(d.values())}async function C(t){const e=t.name;d.has(e)&&(d.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function k(t,e,n){var i;let s=null!==(i=h[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}g(new r.a(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function x(t,e){if(null!==t&&"function"!=typeof t)throw _.create("invalid-log-argument");Object(i.d)(t,e)}function D(t){Object(i.c)(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;O="",g(new r.a("platform-logger",t=>new o(t),"PRIVATE")),k(a,c,O),k(a,c,"esm2017"),k("fire-js","")},fQOS:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return Rc}),n.d(e,"b",function(){return Da}),n.d(e,"c",function(){return ma}),n.d(e,"d",function(){return ia}),n.d(e,"e",function(){return uc}),n.d(e,"f",function(){return xa}),n.d(e,"g",function(){return E}),n.d(e,"h",function(){return Na}),n.d(e,"i",function(){return lc}),n.d(e,"j",function(){return hc}),n.d(e,"k",function(){return F}),n.d(e,"l",function(){return Mc}),n.d(e,"m",function(){return Ho}),n.d(e,"n",function(){return it}),n.d(e,"o",function(){return z}),n.d(e,"p",function(){return Zo}),n.d(e,"q",function(){return b}),n.d(e,"r",function(){return G}),n.d(e,"s",function(){return g}),n.d(e,"t",function(){return Qo}),n.d(e,"u",function(){return Wc}),n.d(e,"v",function(){return iu}),n.d(e,"w",function(){return ru}),n.d(e,"x",function(){return Ta}),n.d(e,"y",function(){return aa}),n.d(e,"z",function(){return ca}),n.d(e,"A",function(){return ra}),n.d(e,"B",function(){return Gc}),n.d(e,"C",function(){return eu}),n.d(e,"D",function(){return Sa}),n.d(e,"E",function(){return ua}),n.d(e,"F",function(){return wa}),n.d(e,"G",function(){return ba}),n.d(e,"H",function(){return Ia}),n.d(e,"I",function(){return kc}),n.d(e,"J",function(){return Cc}),n.d(e,"K",function(){return ya}),n.d(e,"L",function(){return Jc}),n.d(e,"M",function(){return jc}),n.d(e,"N",function(){return Vc}),n.d(e,"O",function(){return Uc}),n.d(e,"P",function(){return qc}),n.d(e,"Q",function(){return Bc}),n.d(e,"R",function(){return Kc}),n.d(e,"S",function(){return su}),n.d(e,"T",function(){return _c}),n.d(e,"U",function(){return Tc}),n.d(e,"V",function(){return Aa}),n.d(e,"W",function(){return Ca}),n.d(e,"X",function(){return Qc}),n.d(e,"Y",function(){return Yc}),n.d(e,"Z",function(){return wc}),n.d(e,"_0",function(){return mc}),n.d(e,"_1",function(){return ha}),n.d(e,"_2",function(){return la}),n.d(e,"_3",function(){return tu}),n.d(e,"_4",function(){return nu}),n.d(e,"_5",function(){return zc}),n.d(e,"_6",function(){return f}),n.d(e,"_7",function(){return dc}),n.d(e,"_8",function(){return Sc}),n.d(e,"_9",function(){return Ic}),n.d(e,"_10",function(){return Hc}),n.d(e,"_11",function(){return Ea}),n.d(e,"_12",function(){return yc});var r=n("a7sP"),i=n("xq9A"),s=n("gZMR"),o=n("28tl"),a=n("zBsV");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s.b("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s.a.DEBUG){const n=e.map(y);h.debug(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s.a.ERROR){const n=e.map(y);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s.a.WARN){const n=e.map(y);h.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function w(t,e){t||v()}function b(t,e){t||v()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class C{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class x{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new k(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=(t=>this.p(t)),this.T=(t=>e.writeSequenceNumber(t)))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O.I=-1;class R{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function P(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function M(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new F(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.timestamp=t}static fromTimestamp(t){return new j(t)}static min(){return new j(new F(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function V(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends q{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends q{construct(t,e,n){return new z(t,e,n)}static isValidIdentifier(t){return K.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new E(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new z(e)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.fields=t,t.sort(z.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return P(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new W(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new W(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}W.EMPTY_BYTE_STRING=new W("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Y(t){if(w(!!t),"string"==typeof t){let e=0;const n=Q.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:J(t.seconds),nanos:J(t.nanos)}}function J(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function X(t){return"string"==typeof t?W.fromBase64String(t):W.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tt(t){const e=Y(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(B.fromString(t))}static fromName(t){return new it(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Z(t)?4:10:v()}function ot(t,e){const n=st(t);if(n!==st(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tt(t).isEqual(tt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Y(t.timestampValue),r=Y(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return X(t.bytesValue).isEqual(X(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return J(t.geoPointValue.latitude)===J(e.geoPointValue.latitude)&&J(t.geoPointValue.longitude)===J(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return J(t.integerValue)===J(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=J(t.doubleValue),r=J(e.doubleValue);return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return P(t.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if($(n)!==$(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!ot(n[t],r[t])))return!1;return!0}(t,e);default:return v()}}function at(t,e){return void 0!==(t.values||[]).find(t=>ot(t,e))}function ct(t,e){const n=st(t),r=st(e);if(n!==r)return L(n,r);switch(n){case 0:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=J(t.integerValue||t.doubleValue),r=J(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ut(t.timestampValue,e.timestampValue);case 4:return ut(tt(t),tt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=X(t),r=X(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=L(n[t],r[t]);if(0!==e)return e}return L(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(J(t.latitude),J(e.latitude));return 0!==n?n:L(J(t.longitude),J(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=ct(n[t],r[t]);if(e)return e}return L(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=L(r[t],s[t]);if(0!==e)return e;const o=ct(n[r[t]],i[s[t]]);if(0!==o)return o}return L(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function ut(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=Y(t),r=Y(e),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function lt(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=Y(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?X(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,it.fromName(r).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=t(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${t(e.fields[s])}`;return r+"}"}(e.mapValue):v();var n,r}(t)}function ht(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dt(t){return!!t&&"integerValue"in t}function ft(t){return!!t&&"arrayValue"in t}function pt(t){return!!t&&"nullValue"in t}function mt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gt(t){return!!t&&"mapValue"in t}function yt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return V(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=yt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!gt(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yt(e)}setAll(t){let e=z.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=yt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());gt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];gt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){V(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new vt(yt(this.value))}}function wt(t){const e=[];return V(t.fields,(t,n)=>{const r=new z([t]);if(gt(n)){const t=wt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new H(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class bt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new bt(t,0,j.min(),vt.empty(),0)}static newFoundDocument(t,e,n){return new bt(t,1,e,n,0)}static newNoDocument(t,e){return new bt(t,2,e,vt.empty(),0)}static newUnknownDocument(t,e){return new bt(t,3,e,vt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new bt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Tt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _t(t,e,n,r,i,s,o)}function Et(t){const e=_(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>(function(t){return t.field.canonicalString()+t.op.toString()+lt(t.value)})(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>(function(t){return t.field.canonicalString()+t.dir})(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Mt(e.startAt)),e.endAt&&(t+="|ub:",t+=Mt(e.endAt)),e.R=t}return e.R}function It(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ot(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vt(t.startAt,e.startAt)&&Vt(t.endAt,e.endAt)}function St(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class At extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Ct(t,e,n):"array-contains"===e?new Ot(t,n):"in"===e?new Nt(t,n):"not-in"===e?new Rt(t,n):"array-contains-any"===e?new Lt(t,n):new At(t,e,n)}static P(t,e,n){return"in"===e?new kt(t,n):new xt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ct(e,this.value)):null!==e&&st(this.value)===st(e)&&this.v(ct(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ct extends At{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.v(e)}}class kt extends At{constructor(t,e){super(t,"in",e),this.keys=Dt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xt extends At{constructor(t,e){super(t,"not-in",e),this.keys=Dt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Dt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>it.fromName(t.referenceValue))}class Ot extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ft(e)&&at(e.arrayValue,this.value)}}class Nt extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&at(this.value.arrayValue,e)}}class Rt extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(at(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!at(this.value.arrayValue,e)}}class Lt extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ft(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>at(this.value.arrayValue,t))}}class Pt{constructor(t,e){this.position=t,this.before=e}}function Mt(t){return`${t.before?"b":"a"}:${t.position.map(t=>lt(t)).join(",")}`}class Ft{constructor(t,e="asc"){this.field=t,this.dir=e}}function jt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $t(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):ct(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Vt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ot(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qt(t,e,n,r,i,s,o,a){return new Ut(t,e,n,r,i,s,o,a)}function Bt(t){return new Ut(t)}function Kt(t){return!et(t.limit)&&"F"===t.limitType}function zt(t){return!et(t.limit)&&"L"===t.limitType}function Ht(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gt(t){for(const e of t.filters)if(e.V())return e.field;return null}function Wt(t){return null!==t.collectionGroup}function Qt(t){const e=_(t);if(null===e.S){e.S=[];const t=Gt(e),n=Ht(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Ft(t)),e.S.push(new Ft(z.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Ft(z.keyField(),t))}}}return e.S}function Yt(t){const e=_(t);if(!e.D)if("F"===e.limitType)e.D=Tt(e.path,e.collectionGroup,Qt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Qt(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Ft(n.field,e))}const n=e.endAt?new Pt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Pt(e.startAt.position,!e.startAt.before):null;e.D=Tt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function Jt(t,e,n){return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xt(t,e){return It(Yt(t),Yt(e))&&t.limitType===e.limitType}function Zt(t){return`${Et(Yt(t))}|lt:${t.limitType}`}function te(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${lt(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>(function(t){return`${t.field.canonicalString()} (${t.dir})`})(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Mt(t.startAt)),t.endAt&&(e+=", endAt: "+Mt(t.endAt)),`Target(${e})`}(Yt(t))}; limitType=${t.limitType})`}function ee(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!$t(t.startAt,Qt(t),e))&&(!t.endAt||!$t(t.endAt,Qt(t),e))}(t,e)}function ne(t){return(e,n)=>{let r=!1;for(const i of Qt(t)){const t=re(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function re(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ct(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function se(t){return{integerValue:""+t}}function oe(t,e){return rt(e)?se(e):ie(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this._=void 0}}function ce(t,e,n){return t instanceof he?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof de?fe(t,e):t instanceof pe?me(t,e):function(t,e){const n=le(t,e),r=ye(n)+ye(t.N);return dt(n)&&dt(t.N)?se(r):ie(t.k,r)}(t,e)}function ue(t,e,n){return t instanceof de?fe(t,e):t instanceof pe?me(t,e):n}function le(t,e){return t instanceof ge?dt(n=e)||n&&"doubleValue"in n?e:{integerValue:0}:null;var n}class he extends ae{}class de extends ae{constructor(t){super(),this.elements=t}}function fe(t,e){const n=ve(e);for(const e of t.elements)n.some(t=>ot(t,e))||n.push(e);return{arrayValue:{values:n}}}class pe extends ae{constructor(t){super(),this.elements=t}}function me(t,e){let n=ve(e);for(const e of t.elements)n=n.filter(t=>!ot(t,e));return{arrayValue:{values:n}}}class ge extends ae{constructor(t,e){super(),this.k=t,this.N=e}}function ye(t){return J(t.integerValue||t.doubleValue)}function ve(t){return ft(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.field=t,this.transform=e}}class be{constructor(t,e){this.version=t,this.transformResults=e}}class _e{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _e}static exists(t){return new _e(void 0,t)}static updateTime(t){return new _e(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Te(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ee{}function Ie(t,e,n){t instanceof xe?function(t,e,n){const r=t.value.clone(),i=Ne(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof De?function(t,e,n){if(!Te(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ne(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Oe(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Se(t,e,n){t instanceof xe?function(t,e,n){if(!Te(t.precondition,e))return;const r=t.value.clone(),i=Re(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ke(e),r).setHasLocalMutations()}(t,e,n):t instanceof De?function(t,e,n){if(!Te(t.precondition,e))return;const r=Re(t.fieldTransforms,n,e),i=e.data;i.setAll(Oe(t)),i.setAll(r),e.convertToFoundDocument(ke(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Te(t.precondition,e)&&e.convertToNoDocument(j.min())}(t,e)}function Ae(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=le(r.transform,t||null);null!=i&&(null==n&&(n=vt.empty()),n.set(r.field,i))}return n||null}function Ce(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&P(t,e,(t,e)=>(function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof de&&e instanceof de||t instanceof pe&&e instanceof pe?P(t.elements,e.elements,ot):t instanceof ge&&e instanceof ge?ot(t.N,e.N):t instanceof he&&e instanceof he}(t.transform,e.transform)})(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ke(t){return t.isFoundDocument()?t.version:j.min()}class xe extends Ee{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class De extends Ee{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Oe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ne(t,e,n){const r=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ue(o,a,n[i]))}return r}function Re(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ce(t,s,e))}return r}class Le extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Pe extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,je;function $e(t){switch(t){default:return v();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Ve(t){if(void 0===t)return m("GRPC error has no .code"),T.UNKNOWN;switch(t){case Fe.OK:return T.OK;case Fe.CANCELLED:return T.CANCELLED;case Fe.UNKNOWN:return T.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return T.INTERNAL;case Fe.UNAVAILABLE:return T.UNAVAILABLE;case Fe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Fe.NOT_FOUND:return T.NOT_FOUND;case Fe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Fe.ABORTED:return T.ABORTED;case Fe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Fe.DATA_LOSS:return T.DATA_LOSS;default:return v()}}(je=Fe||(Fe={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t,e){this.comparator=t,this.root=e||Be.EMPTY}insert(t,e){return new Ue(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new Ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qe(this.root,t,this.comparator,!0)}}class qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Be.RED,this.left=null!=r?r:Be.EMPTY,this.right=null!=i?i:Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Be(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Be.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1,Be.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t){this.comparator=t,this.data=new Ue(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ze(this.data.getIterator())}getIteratorFrom(t){return new ze(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ke))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ke(this.comparator);return e.data=t,e}}class ze{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Ue(it.comparator);function Ge(){return He}const We=new Ue(it.comparator);function Qe(){return We}const Ye=new Ue(it.comparator);function Je(){return Ye}const Xe=new Ke(it.comparator);function Ze(...t){let e=Xe;for(const n of t)e=e.add(n);return e}const tn=new Ke(L);function en(){return tn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,rn.createSynthesizedTargetChangeForCurrentChange(t,e)),new nn(j.min(),n,en(),Ge(),Ze())}}class rn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new rn(W.EMPTY_BYTE_STRING,e,Ze(),Ze(),Ze())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.F=r}}class on{constructor(t,e){this.targetId=t,this.O=e}}class an{constructor(t,e,n=W.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class cn{constructor(){this.M=0,this.L=hn(),this.B=W.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Ze(),e=Ze(),n=Ze();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new rn(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=hn()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class un{constructor(t){this.et=t,this.nt=new Map,this.st=Ge(),this.it=ln(),this.rt=new Ke(L)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,r=this.wt(e);if(r){const t=r.target;if(St(t))if(0===n){const n=new it(t.path);this.ct(e,n,bt.newNoDocument(n,j.min()))}else w(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&St(i.target)){const e=new it(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,bt.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=Ze();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new nn(t,e,this.rt,this.st,n);return this.st=Ge(),this.it=ln(),this.rt=new Ke(L),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new cn,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Ke(L),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new cn),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function ln(){return new Ue(it.comparator)}function hn(){return new Ue(it.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={asc:"ASCENDING",desc:"DESCENDING"},fn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class pn{constructor(t,e){this.databaseId=t,this.C=e}}function mn(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gn(t,e){return t.C?e.toBase64():e.toUint8Array()}function yn(t){return w(!!t),j.fromTimestamp(function(t){const e=Y(t);return new F(e.seconds,e.nanos)}(t))}function vn(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function wn(t){const e=B.fromString(t);return w(Fn(e)),e}function bn(t,e){return vn(t.databaseId,e.path)}function _n(t,e){const n=wn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Sn(n))}function Tn(t,e){return vn(t.databaseId,e)}function En(t){const e=wn(t);return 4===e.length?B.emptyPath():Sn(e)}function In(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function An(t,e,n){return{name:bn(t,e),fields:n.value.mapValue.fields}}function Cn(t,e,n){const r=_n(t,e.name),i=yn(e.updateTime),s=new vt({mapValue:{fields:e.fields}}),o=bt.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function kn(t,e){let n;if(e instanceof xe)n={update:An(t,e.key,e.value)};else if(e instanceof Le)n={delete:bn(t,e.key)};else if(e instanceof De)n={update:An(t,e.key,e.data),updateMask:function(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof Pe))return v();n={verify:bn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){const n=e.transform;if(n instanceof he)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof de)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),increment:n.N};throw v()})(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:function(t,e){return mn(t,e.toTimestamp())}(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function xn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?_e.updateTime(yn(t.updateTime)):void 0!==t.exists?_e.exists(t.exists):_e.none()}(e.currentDocument):_e.none(),r=e.updateTransforms?e.updateTransforms.map(e=>(function(t,e){let n=null;if("setToServerValue"in e)w("REQUEST_TIME"===e.setToServerValue),n=new he;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new de(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new pe(t)}else"increment"in e?n=new ge(t,e.increment):v();const r=z.fromServerFormat(e.fieldPath);return new we(r,n)})(t,e)):[];if(e.update){e.update.name;const i=_n(t,e.update.name),s=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new H(e.map(t=>z.fromServerFormat(t)))}(e.updateMask);return new De(i,s,t,n,r)}return new xe(i,s,n,r)}if(e.delete){const r=_n(t,e.delete);return new Le(r,n)}if(e.verify){const r=_n(t,e.verify);return new Pe(r,n)}return v()}function Dn(t,e){return{documents:[Tn(t,e.path)]}}function On(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Tn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>(function(t){if("=="===t.op){if(mt(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NAN"}};if(pt(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(mt(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NAN"}};if(pt(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(t.field),op:function(t){return fn[t]}(t.op),value:t.value}}})(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>(function(t){return{field:Pn(t.field),direction:function(t){return dn[t]}(t.dir)}})(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||et(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Rn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Rn(e.endAt)),n}function Nn(t){let e=En(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function t(e){return e?void 0!==e.unaryFilter?[function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Mn(t.unaryFilter.field);return At.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Mn(t.unaryFilter.field);return At.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Mn(t.unaryFilter.field);return At.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Mn(t.unaryFilter.field);return At.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(e)]:void 0!==e.fieldFilter?[function(t){return At.create(Mn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>t(e)).reduce((t,e)=>t.concat(e)):v():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>(function(t){return new Ft(Mn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))})(t)));let a=null;n.limit&&(a=function(t){let e;return et(e="object"==typeof t?t.value:t)?null:e}(n.limit));let c=null;n.startAt&&(c=Ln(n.startAt));let u=null;return n.endAt&&(u=Ln(n.endAt)),qt(e,i,o,s,a,"F",c,u)}function Rn(t){return{before:t.before,values:t.position}}function Ln(t){const e=!!t.before,n=t.values||[];return new Pt(n,e)}function Pn(t){return{fieldPath:t.canonicalString()}}function Mn(t){return z.fromServerFormat(t.fieldPath)}function Fn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vn(e)),e=$n(t.get(n),e);return Vn(e)}function $n(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Vn(t){return t+""}function Un(t){const e=t.length;if(w(e>=2),2===e)return w(""===t.charAt(0)&&""===t.charAt(1)),B.emptyPath();const n=e-2,r=[];let i="";for(let n=0;n<e;){const e=t.indexOf("",n);switch((e<0||e>s)&&v(),t.charAt(e+1)){case"":const s=t.substring(n,e);let o;0===i.length?o=s:(o=i+=s,i=""),r.push(o);break;case"":i+=t.substring(n,e),i+="\0";break;case"":i+=t.substring(n,e+1);break;default:v()}n=e+2}return new B(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class Bn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Bn.store="owner",Bn.key="owner";class Kn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Kn.store="mutationQueues",Kn.keyPath="userId";class zn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}zn.store="mutations",zn.keyPath="batchId",zn.userMutationsIndex="userMutationsIndex",zn.userMutationsKeyPath=["userId","batchId"];class Hn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,jn(e)]}static key(t,e,n){return[t,jn(e),n]}}Hn.store="documentMutations",Hn.PLACEHOLDER=new Hn;class Gn{constructor(t,e){this.path=t,this.readTime=e}}class Wn{constructor(t,e){this.path=t,this.version=e}}class Qn{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Qn.store="remoteDocuments",Qn.readTimeIndex="readTimeIndex",Qn.readTimeIndexPath="readTime",Qn.collectionReadTimeIndex="collectionReadTimeIndex",Qn.collectionReadTimeIndexPath=["parentPath","readTime"];class Yn{constructor(t){this.byteSize=t}}Yn.store="remoteDocumentGlobal",Yn.key="remoteDocumentGlobalKey";class Jn{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Jn.store="targets",Jn.keyPath="targetId",Jn.queryTargetsIndexName="queryTargetsIndex",Jn.queryTargetsKeyPath=["canonicalId","targetId"];class Xn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Xn.store="targetDocuments",Xn.keyPath=["targetId","path"],Xn.documentTargetsIndex="documentTargetsIndex",Xn.documentTargetsKeyPath=["path","targetId"];class Zn{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Zn.key="targetGlobalKey",Zn.store="targetGlobal";class tr{constructor(t,e){this.collectionId=t,this.parent=e}}tr.store="collectionParents",tr.keyPath=["collectionId","parent"];class er{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}er.store="clientMetadata",er.keyPath="clientId";class nr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}nr.store="bundles",nr.keyPath="bundleId";class rr{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}rr.store="namedQueries",rr.keyPath="name";const ir=[...[...[...[...[Kn.store,zn.store,Hn.store,Qn.store,Jn.store,Bn.store,Zn.store,Xn.store],er.store],Yn.store],tr.store],nr.store,rr.store],sr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class or{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ar((n,r)=>{this.nextCallback=(e=>{this.wrapSuccess(t,e).next(n,r)}),this.catchCallback=(t=>{this.wrapFailure(e,t).next(n,r)})})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ar?e:ar.resolve(e)}catch(t){return ar.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ar.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ar.reject(e)}static resolve(t){return new ar((e,n)=>{e(t)})}static reject(t){return new ar((e,n)=>{n(t)})}static waitFor(t){return new ar((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=ar.resolve(!1);for(const n of t)e=e.next(t=>t?ar.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.It=new I,this.transaction.oncomplete=(()=>{this.It.resolve()}),this.transaction.onabort=(()=>{e.error?this.It.reject(new hr(t,e.error)):this.It.resolve()}),this.transaction.onerror=(e=>{const n=gr(e.target.error);this.It.reject(new hr(t,n))})}static open(t,e,n,r){try{return new cr(e,t.transaction(r,n))}catch(t){throw new hr(e,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new fr(e)}}class ur{constructor(t,e,n){this.name=t,this.version=e,this.Rt=n,12.2===ur.Pt(Object(o.j)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),pr(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(o.o)())return!1;if(ur.vt())return!0;const t=Object(o.j)(),e=ur.Pt(t),n=0<e&&e<10,r=ur.Vt(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static vt(){var e;return void 0!==t&&"YES"===(null===(e=Object({NODE_ENV:"production"}))||void 0===e?void 0:e.St)}static Dt(t,e){return t.store(e)}static Pt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=(t=>{const n=t.target.result;e(n)}),r.onblocked=(()=>{n(new hr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))}),r.onerror=(e=>{const r=e.target.error;"VersionError"===r.name?n(new E(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new E(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new hr(t,r))}),r.onupgradeneeded=(t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Rt.Nt(e,r.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})})})),this.kt&&(this.db.onversionchange=(t=>this.kt(t))),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=(e=>t(e)))}async runTransaction(t,e,n,r){const i="readonly"===e;for(;;){0;try{this.db=await this.Ct(t);const e=cr.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).catch(t=>(e.abort(t),ar.reject(t))).toPromise();return s.catch(()=>{}),await e.At,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class lr{constructor(t){this.$t=t,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(t){this.$t=t}done(){this.Ft=!0}Lt(t){this.Ot=t}delete(){return pr(this.$t.delete())}}class hr extends E{constructor(t,e){super(T.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function dr(t){return"IndexedDbTransactionError"===t.name}class fr{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),pr(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),pr(this.store.add(t))}get(t){return pr(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),pr(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),pr(this.store.count())}Bt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Ut(n,(t,e)=>{r.push(e)}).next(()=>r)}qt(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.Kt=!1;const r=this.cursor(n);return this.Ut(r,(t,e,n)=>n.delete())}jt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Ut(r,e)}Qt(t){const e=this.cursor({});return new ar((n,r)=>{e.onerror=(t=>{const e=gr(t.target.error);r(e)}),e.onsuccess=(e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()})})}Ut(t,e){const n=[];return new ar((r,i)=>{t.onerror=(t=>{i(t.target.error)}),t.onsuccess=(t=>{const i=t.target.result;if(!i)return void r();const s=new lr(i),o=e(i.primaryKey,i.value,s);if(o instanceof ar){const t=o.catch(t=>(s.done(),ar.reject(t)));n.push(t)}s.isDone?r():null===s.Mt?i.continue():i.continue(s.Mt)})}).next(()=>ar.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Kt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function pr(t){return new ar((e,n)=>{t.onsuccess=(t=>{const n=t.target.result;e(n)}),t.onerror=(t=>{const e=gr(t.target.error);n(e)})})}let mr=!1;function gr(t){const e=ur.Pt(Object(o.j)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mr||(mr=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends or{constructor(t,e){super(),this.Wt=t,this.currentSequenceNumber=e}}function vr(t,e){const n=_(t);return ur.Dt(n.Wt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Ie(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Se(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Se(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(j.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ze())}isEqual(t){return this.batchId===t.batchId&&P(this.mutations,t.mutations,(t,e)=>Ce(t,e))&&P(this.baseMutations,t.baseMutations,(t,e)=>Ce(t,e))}}class br{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){w(t.mutations.length===n.length);let r=Je();const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new br(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,r,i=j.min(),s=j.min(),o=W.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new _r(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.Gt=t}}function Er(t,e){if(e.document)return Cn(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=it.fromSegments(e.noDocument.path),n=kr(e.noDocument.readTime),r=bt.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=it.fromSegments(e.unknownDocument.path),n=kr(e.unknownDocument.version);return bt.newUnknownDocument(t,n)}return v()}function Ir(t,e,n){const r=Sr(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:bn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:mn(t,e.version.toTimestamp())}}(t.Gt,e),s=e.hasCommittedMutations;return new Qn(null,null,n,s,r,i)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Cr(e.version),s=e.hasCommittedMutations;return new Qn(null,new Gn(t,n),null,s,r,i)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Cr(e.version);return new Qn(new Wn(t,n),null,null,!0,r,i)}return v()}function Sr(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ar(t){const e=new F(t[0],t[1]);return j.fromTimestamp(e)}function Cr(t){const e=t.toTimestamp();return new qn(e.seconds,e.nanoseconds)}function kr(t){const e=new F(t.seconds,t.nanoseconds);return j.fromTimestamp(e)}function xr(t,e){const n=(e.baseMutations||[]).map(e=>xn(t.Gt,e));for(let t=0;t<e.mutations.length-1;++t){const n=e.mutations[t];if(t+1<e.mutations.length&&void 0!==e.mutations[t+1].transform){const r=e.mutations[t+1];n.updateTransforms=r.transform.fieldTransforms,e.mutations.splice(t+1,1),++t}}const r=e.mutations.map(e=>xn(t.Gt,e)),i=F.fromMillis(e.localWriteTimeMs);return new wr(e.batchId,i,n,r)}function Dr(t){const e=kr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?kr(t.lastLimboFreeSnapshotVersion):j.min();let r;var i;return void 0!==t.query.documents?(w(1===(i=t.query).documents.length),r=Yt(Bt(En(i.documents[0])))):r=function(t){return Yt(Nn(t))}(t.query),new _r(r,t.targetId,0,t.lastListenSequenceNumber,e,n,W.fromBase64String(t.resumeToken))}function Or(t,e){const n=Cr(e.snapshotVersion),r=Cr(e.lastLimboFreeSnapshotVersion);let i;i=St(e.target)?Dn(t.Gt,e.target):On(t.Gt,e.target);const s=e.resumeToken.toBase64();return new Jn(e.targetId,Et(e.target),n,s,e.sequenceNumber,r,i)}function Nr(t){const e=Nn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Jt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{getBundleMetadata(t,e){return Lr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:kr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Lr(t).put({bundleId:(n=e).id,createTime:Cr(yn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Pr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Nr(e.bundledQuery),readTime:kr(e.readTime)};var e})}saveNamedQuery(t,e){return Pr(t).put(function(t){return{name:t.name,readTime:Cr(yn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Lr(t){return vr(t,nr.store)}function Pr(t){return vr(t,rr.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.zt=new Fr}addToCollectionParentIndex(t,e){return this.zt.add(e),ar.resolve()}getCollectionParents(t,e){return ar.resolve(this.zt.getEntries(e))}}class Fr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ke(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ke(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.Ht=new Fr}addToCollectionParentIndex(t,e){if(!this.Ht.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.Ht.add(e)});const i={collectionId:n,parent:jn(r)};return $r(t).put(i)}return ar.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[M(e),""],!1,!0);return $r(t).Bt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(Un(r.parent))}return n})}}function $r(t){return vr(t,tr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ur{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ur(t,Ur.DEFAULT_COLLECTION_PERCENTILE,Ur.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e,n){const r=t.store(zn.store),i=t.store(Hn.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{w(1===a)}));const u=[];for(const t of n.mutations){const r=Hn.key(e,t.key.path,n.batchId);s.push(i.delete(r)),u.push(t.key)}return ar.waitFor(s).next(()=>u)}function Br(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw v();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.DEFAULT_COLLECTION_PERCENTILE=10,Ur.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ur.DEFAULT=new Ur(41943040,Ur.DEFAULT_COLLECTION_PERCENTILE,Ur.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ur.DISABLED=new Ur(-1,0,0);class Kr{constructor(t,e,n,r){this.userId=t,this.k=e,this.Jt=n,this.referenceDelegate=r,this.Yt={}}static Xt(t,e,n,r){w(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new Kr(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hr(t).jt({index:zn.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=Gr(t),s=Hr(t);return s.add({}).next(o=>{w("number"==typeof o);const a=new wr(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>kn(t.Gt,e)),i=n.mutations.map(e=>kn(t.Gt,e));return new zn(e,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.k,this.userId,a),u=[];let l=new Ke((t,e)=>L(t.canonicalString(),e.canonicalString()));for(const t of r){const e=Hn.key(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(i.put(e,Hn.PLACEHOLDER))}return l.forEach(e=>{u.push(this.Jt.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),ar.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return Hr(t).get(e).next(t=>t?(w(t.userId===this.userId),xr(this.k,t)):null)}Zt(t,e){return this.Yt[e]?ar.resolve(this.Yt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Yt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Hr(t).jt({index:zn.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(w(e.batchId>=n),i=xr(this.k,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Hr(t).jt({index:zn.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Hr(t).Bt(zn.userMutationsIndex,e).next(t=>t.map(t=>xr(this.k,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Hn.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return Gr(t).jt({range:r},(n,r,s)=>{const[o,a,c]=n,u=Un(a);if(o===this.userId&&e.path.isEqual(u))return Hr(t).get(c).next(t=>{if(!t)throw v();w(t.userId===this.userId),i.push(xr(this.k,t))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ke(L);const r=[];return e.forEach(e=>{const i=Hn.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(i),o=Gr(t).jt({range:s},(t,r,i)=>{const[s,o,a]=t,c=Un(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),ar.waitFor(r).next(()=>this.te(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=Hn.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Ke(L);return Gr(t).jt({range:s},(t,e,i)=>{const[s,a,c]=t,u=Un(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.te(t,o))}te(t,e){const n=[],r=[];return e.forEach(e=>{r.push(Hr(t).get(e).next(t=>{if(null===t)throw v();w(t.userId===this.userId),n.push(xr(this.k,t))}))}),ar.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return qr(t.Wt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ee(e.batchId)}),ar.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return ar.resolve();const n=IDBKeyRange.lowerBound(Hn.prefixForUser(this.userId)),r=[];return Gr(t).jt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=Un(t[1]);r.push(e)}else n.done()}).next(()=>{w(0===r.length)})})}containsKey(t,e){return zr(t,this.userId,e)}ne(t){return Wr(t).get(this.userId).next(t=>t||new Kn(this.userId,-1,""))}}function zr(t,e,n){const r=Hn.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Gr(t).jt({range:s,Kt:!0},(t,n,r)=>{const[s,a,c]=t;s===e&&a===i&&(o=!0),r.done()}).next(()=>o)}function Hr(t){return vr(t,zn.store)}function Gr(t){return vr(t,Hn.store)}function Wr(t){return vr(t,Kn.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Qr(0)}static re(){return new Qr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e){this.referenceDelegate=t,this.k=e}allocateTargetId(t){return this.oe(t).next(e=>{const n=new Qr(e.highestTargetId);return e.highestTargetId=n.next(),this.ae(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.oe(t).next(t=>j.fromTimestamp(new F(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.oe(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.oe(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.ae(t,r)))}addTargetData(t,e){return this.ce(t,e).next(()=>this.oe(t).next(n=>(n.targetCount+=1,this.ue(e,n),this.ae(t,n))))}updateTargetData(t,e){return this.ce(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Jr(t).delete(e.targetId)).next(()=>this.oe(t)).next(e=>(w(e.targetCount>0),e.targetCount-=1,this.ae(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return Jr(t).jt((s,o)=>{const a=Dr(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>ar.waitFor(i)).next(()=>r)}forEachTarget(t,e){return Jr(t).jt((t,n)=>{const r=Dr(n);e(r)})}oe(t){return Xr(t).get(Zn.key).next(t=>(w(null!==t),t))}ae(t,e){return Xr(t).put(Zn.key,e)}ce(t,e){return Jr(t).put(Or(this.k,e))}ue(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.oe(t).next(t=>t.targetCount)}getTargetData(t,e){const n=Et(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Jr(t).jt({range:r,index:Jn.queryTargetsIndexName},(t,n,r)=>{const s=Dr(n);It(e,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=Zr(t);return e.forEach(e=>{const s=jn(e.path);r.push(i.put(new Xn(n,s))),r.push(this.referenceDelegate.addReference(t,n,e))}),ar.waitFor(r)}removeMatchingKeys(t,e,n){const r=Zr(t);return ar.forEach(e,e=>{const i=jn(e.path);return ar.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=Zr(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=Zr(t);let i=Ze();return r.jt({range:n,Kt:!0},(t,e,n)=>{const r=Un(t[1]),s=new it(r);i=i.add(s)}).next(()=>i)}containsKey(t,e){const n=jn(e.path),r=IDBKeyRange.bound([n],[M(n)],!1,!0);let i=0;return Zr(t).jt({index:Xn.documentTargetsIndex,Kt:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}Et(t,e){return Jr(t).get(e).next(t=>t?Dr(t):null)}}function Jr(t){return vr(t,Jn.store)}function Xr(t){return vr(t,Zn.store)}function Zr(t){return vr(t,Xn.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==sr)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei([t,e],[n,r]){const i=L(t,n);return 0===i?L(e,r):i}class ni{constructor(t){this.he=t,this.buffer=new Ke(ei),this.le=0}fe(){return++this.le}de(t){const e=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();ei(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ri{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const e=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){dr(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ti(t)}await this.me(t)})}}class ii{constructor(t,e){this.ge=t,this.params=e}calculateTargetCount(t,e){return this.ge.ye(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return ar.resolve(O.I);const n=new ni(e);return this.ge.forEachTarget(t,t=>n.de(t.sequenceNumber)).next(()=>this.ge.pe(t,t=>n.de(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.ge.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.ge.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),ar.resolve(Vr)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vr):this.Te(t,e))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,e){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s.a.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),ar.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new ii(t,e)}(this,e)}ye(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.pe(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pe(t,e){return this.Ie(t,(t,n)=>e(n))}addReference(t,e,n){return oi(t,n)}removeReference(t,e,n){return oi(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return oi(t,e)}Ae(t,e){return function(t,e){let n=!1;return Wr(t).Qt(r=>zr(t,r,e).next(t=>(t&&(n=!0),ar.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ie(t,(s,o)=>{if(o<=e){const e=this.Ae(t,s).next(e=>{if(!e)return i++,n.getEntry(t,s).next(()=>(n.removeEntry(s),Zr(t).delete([0,jn(s.path)])))});r.push(e)}}).next(()=>ar.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return oi(t,e)}Ie(t,e){const n=Zr(t);let r,i=O.I;return n.jt({index:Xn.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(i!==O.I&&e(new it(Un(r)),i),i=o,r=s):i=O.I}).next(()=>{i!==O.I&&e(new it(Un(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function oi(t,e){return Zr(t).put(function(t,e){return new Xn(0,jn(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){V(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return U(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.changes=new ai(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:j.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:bt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ar.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.k=t,this.Jt=e}addEntry(t,e,n){return di(t).put(fi(e),n)}removeEntry(t,e){const n=di(t),r=fi(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Re(t,n)))}getEntry(t,e){return di(t).get(fi(e)).next(t=>this.Pe(e,t))}be(t,e){return di(t).get(fi(e)).next(t=>({document:this.Pe(e,t),size:Br(t)}))}getEntries(t,e){let n=Ge();return this.ve(t,e,(t,e)=>{const r=this.Pe(t,e);n=n.insert(t,r)}).next(()=>n)}Ve(t,e){let n=Ge(),r=new Ue(it.comparator);return this.ve(t,e,(t,e)=>{const i=this.Pe(t,e);n=n.insert(t,i),r=r.insert(t,Br(e))}).next(()=>({documents:n,Se:r}))}ve(t,e,n){if(e.isEmpty())return ar.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator();let s=i.getNext();return di(t).jt({range:r},(t,e,r)=>{const o=it.fromSegments(t);for(;s&&it.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,e),s=i.hasNext()?i.getNext():null),s?r.Lt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=Ge();const i=e.path.length+1,s={};if(n.isEqual(j.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=Sr(n);s.range=IDBKeyRange.lowerBound([t,r],!0),s.index=Qn.collectionReadTimeIndex}return di(t).jt(s,(t,n,s)=>{if(t.length!==i)return;const o=Er(this.k,n);e.path.isPrefixOf(o.key.path)?ee(e,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(t){return new li(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return hi(t).get(Yn.key).next(t=>(w(!!t),t))}Re(t,e){return hi(t).put(Yn.key,e)}Pe(t,e){if(e){const t=Er(this.k,e);if(!t.isNoDocument()||!t.version.isEqual(j.min()))return t}return bt.newInvalidDocument(t)}}class li extends ci{constructor(t,e){super(),this.De=t,this.trackRemovals=e,this.Ce=new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Ke((t,e)=>L(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Ce.get(i);if(s.document.isValidDocument()){const a=Ir(this.De.k,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=Br(a);n+=c-o,e.push(this.De.addEntry(t,i,a))}else if(n-=o,this.trackRemovals){const n=Ir(this.De.k,bt.newNoDocument(i,j.min()),this.getReadTime(i));e.push(this.De.addEntry(t,i,n))}else e.push(this.De.removeEntry(t,i))}),r.forEach(n=>{e.push(this.De.Jt.addToCollectionParentIndex(t,n))}),e.push(this.De.updateMetadata(t,n)),ar.waitFor(e)}getFromCache(t,e){return this.De.be(t,e).next(t=>(this.Ce.set(e,t.size),t.document))}getAllFromCache(t,e){return this.De.Ve(t,e).next(({documents:t,Se:e})=>(e.forEach((t,e)=>{this.Ce.set(t,e)}),t))}}function hi(t){return vr(t,Yn.store)}function di(t){return vr(t,Qn.store)}function fi(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this.k=t}Nt(t,e,n,r){w(n<r&&n>=0&&r<=11);const i=new cr("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(Bn.store)}(t),function(t){t.createObjectStore(Kn.store,{keyPath:Kn.keyPath}),t.createObjectStore(zn.store,{keyPath:zn.keyPath,autoIncrement:!0}).createIndex(zn.userMutationsIndex,zn.userMutationsKeyPath,{unique:!0}),t.createObjectStore(Hn.store)}(t),mi(t),function(t){t.createObjectStore(Qn.store)}(t));let s=ar.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(Xn.store),t.deleteObjectStore(Jn.store),t.deleteObjectStore(Zn.store)}(t),mi(t)),s=s.next(()=>(function(t){const e=i.store(Zn.store),n=new Zn(0,0,j.min().toTimestamp(),0);return e.put(Zn.key,n)})())),n<4&&r>=4&&(0!==n&&(s=s.next(()=>(function(t,e){return e.store(zn.store).Bt().next(n=>{t.deleteObjectStore(zn.store),t.createObjectStore(zn.store,{keyPath:zn.keyPath,autoIncrement:!0}).createIndex(zn.userMutationsIndex,zn.userMutationsKeyPath,{unique:!0});const r=e.store(zn.store),i=n.map(t=>r.put(t));return ar.waitFor(i)})})(t,i))),s=s.next(()=>{!function(t){t.createObjectStore(er.store,{keyPath:er.keyPath})}(t)})),n<5&&r>=5&&(s=s.next(()=>this.Ne(i))),n<6&&r>=6&&(s=s.next(()=>((function(t){t.createObjectStore(Yn.store)})(t),this.ke(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.$e(t,i))),n<9&&r>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(Qn.store);e.createIndex(Qn.readTimeIndex,Qn.readTimeIndexPath,{unique:!1}),e.createIndex(Qn.collectionReadTimeIndex,Qn.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(s=s.next(()=>this.Fe(i))),n<11&&r>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(nr.store,{keyPath:nr.keyPath})}(t),function(t){t.createObjectStore(rr.store,{keyPath:rr.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),s}ke(t){let e=0;return t.store(Qn.store).jt((t,n)=>{e+=Br(n)}).next(()=>{const n=new Yn(e);return t.store(Yn.store).put(Yn.key,n)})}Ne(t){const e=t.store(Kn.store),n=t.store(zn.store);return e.Bt().next(e=>ar.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Bt(zn.userMutationsIndex,r).next(n=>ar.forEach(n,n=>{w(n.userId===e.userId);const r=xr(this.k,n);return qr(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(Xn.store),n=t.store(Qn.store);return t.store(Zn.store).get(Zn.key).next(t=>{const r=[];return n.jt((n,i)=>{const s=new B(n),o=[0,jn(s)];r.push(e.get(o).next(n=>n?ar.resolve():(n=>e.put(new Xn(0,jn(n),t.highestListenSequenceNumber)))(s)))}).next(()=>ar.waitFor(r))})}$e(t,e){t.createObjectStore(tr.store,{keyPath:tr.keyPath});const n=e.store(tr.store),r=new Fr,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:jn(r)})}};return e.store(Qn.store).jt({Kt:!0},(t,e)=>{const n=new B(t);return i(n.popLast())}).next(()=>e.store(Hn.store).jt({Kt:!0},([t,e,n],r)=>{const s=Un(e);return i(s.popLast())}))}Fe(t){const e=t.store(Jn.store);return e.jt((t,n)=>{const r=Dr(n),i=Or(this.k,r);return e.put(i)})}}function mi(t){t.createObjectStore(Xn.store,{keyPath:Xn.keyPath}).createIndex(Xn.documentTargetsIndex,Xn.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Jn.store,{keyPath:Jn.keyPath}).createIndex(Jn.queryTargetsIndexName,Jn.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Zn.store)}const gi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class yi{constructor(t,e,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Me=c,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=(t=>Promise.resolve()),!yi.bt())throw new E(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new si(this,r),this.Ge=e+"main",this.k=new Tr(a),this.ze=new ur(this.Ge,11,new pi(this.k)),this.He=new Yr(this.referenceDelegate,this.k),this.Jt=new jr,this.Je=function(t,e){return new ui(t,e)}(this.k,this.Jt),this.Ye=new Rr,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(T.FAILED_PRECONDITION,gi);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.He.getHighestSequenceNumber(t))}).then(t=>{this.Be=new O(t,this.Me)}).then(()=>{this.Ue=!0}).catch(t=>(this.ze&&this.ze.close(),Promise.reject(t)))}sn(t){return this.We=(async e=>{if(this.started)return t(e)}),t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>wi(t).put(new er(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(t)).next(e=>this.isPrimary&&!e?this.an(t).next(()=>!1):!!e&&this.cn(t).next(()=>!0))).catch(t=>{if(dr(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.We(t)),this.isPrimary=t})}rn(t){return vi(t).get(Bn.key).next(t=>ar.resolve(this.un(t)))}hn(t){return wi(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=vr(t,er.store);return e.Bt().next(t=>{const n=this.dn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return ar.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Xe)for(const e of t)this.Xe.removeItem(this.wn(e.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?ar.resolve(!0):vi(t).get(Bn.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)){if(this.un(e)&&this.networkEnabled)return!0;if(!this.un(e)){if(!e.allowTabSynchronization)throw new E(T.FAILED_PRECONDITION,gi);return!1}}return!(!this.networkEnabled||!this.inForeground)||wi(t).Bt().next(t=>void 0===this.dn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[Bn.store,er.store],t=>{const e=new yr(t,O.I);return this.an(e).next(()=>this.hn(e))}),this.ze.close(),this.pn()}dn(t,e){return t.filter(t=>this.fn(t.updateTimeMs,e)&&!this._n(t.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",t=>wi(t).Bt().next(t=>this.dn(t,18e5).map(t=>t.clientId)))}get started(){return this.Ue}getMutationQueue(t){return Kr.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let i;return this.ze.runTransaction(t,r,ir,r=>(i=new yr(r,this.Be?this.Be.next():O.I),"readwrite-primary"===e?this.rn(i).next(t=>!!t||this.on(i)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)),new E(T.FAILED_PRECONDITION,sr);return n(i)}).next(t=>this.cn(i).next(()=>t)):this.En(i).next(()=>n(i)))).then(t=>(i.raiseOnCommittedEvent(),t))}En(t){return vi(t).get(Bn.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new E(T.FAILED_PRECONDITION,gi)})}cn(t){const e=new Bn(this.clientId,this.allowTabSynchronization,Date.now());return vi(t).put(Bn.key,e)}static bt(){return ur.bt()}an(t){const e=vi(t);return e.get(Bn.key).next(t=>this.un(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(Bn.key)):ar.resolve())}fn(t,e){const n=Date.now();return!(t<n-e||t>n&&(m(`Detected an update time that is in the future: ${t} > ${n}`),1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=(()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))}),this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=(()=>{this.mn(),Object(o.r)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())}),this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var e;try{const n=null!==(null===(e=this.Xe)||void 0===e?void 0:e.getItem(this.wn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function vi(t){return vr(t,Bn.store)}function wi(t){return vr(t,er.store)}function bi(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _i{constructor(t,e){this.progress=t,this.In=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const t of e)t.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):Wt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new it(e)).next(t=>{let e=Qe();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let i=Qe();return this.Jt.getCollectionParents(t,r).next(s=>ar.forEach(s,s=>{const o=function(t,e){return new Ut(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,r).next(t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=bt.newInvalidDocument(n),r=r.insert(n,i)),Se(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{ee(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=Ze();for(const t of e)for(const e of t.mutations)e instanceof De&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=Ze(),r=Ze();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Ei(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(j.min())?this.Mn(t,e):this.On.vn(t,r).next(i=>{const o=this.Ln(e,i);return(Kt(e)||zt(e))&&this.Bn(e.limitType,o,r,n)?this.Mn(t,e):(d()<=s.a.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),te(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Ke(ne(t));return e.forEach((e,r)=>{ee(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(t,e){return d()<=s.a.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",te(e)),this.On.getDocumentsMatchingQuery(t,e,j.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new Ue(L),this.Kn=new ai(t=>Et(t),It),this.jn=j.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Ti(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function Ai(t,e,n,r){return new Si(t,e,n,r)}async function Ci(t,e){const n=_(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Ti(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Ze();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function ki(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function xi(t,e,n,r,i){let s=Ze();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Ge();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(j.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Di(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e)))}function Oi(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(i=>i?(r=i,ar.resolve(r)):n.He.allocateTargetId(t).next(i=>(r=new _r(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function Ni(t,e,n){const r=_(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!dr(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function Ri(t,e,n){const r=_(t);let i=j.min(),s=Ze();return r.persistence.runTransaction("Execute query","readonly",t=>(function(t,e,n){const r=_(t),i=r.Kn.get(n);return void 0!==i?ar.resolve(r.qn.get(i)):r.He.getTargetData(e,n)})(r,t,Yt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:j.min(),n?s:Ze())).next(t=>({documents:t,zn:s})))}function Li(t,e){const n=_(t),r=_(n.He),i=n.qn.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Et(t,e).next(t=>t?t.target:null))}function Pi(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>(function(t,e,n){const r=_(t);let i=Ge(),s=Sr(n);const o=di(e),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:Qn.readTimeIndex,range:a},(t,e)=>{const n=Er(r.k,e);i=i.insert(n.key,n),s=e.readTime}).next(()=>({In:i,readTime:Ar(s)}))})(e.Qn,t,e.jn)).then(({In:t,readTime:n})=>(e.jn=n,t))}async function Mi(t,e,n=Ze()){const r=await Oi(t,Yt(Nr(e.bundledQuery))),i=_(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const s=yn(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ye.saveNamedQuery(t,e);const o=r.withResumeToken(W.EMPTY_BYTE_STRING,s);return i.qn=i.qn.insert(o.targetId,o),i.He.updateTargetData(t,o).next(()=>i.He.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.He.addMatchingKeys(t,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return ar.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:yn(n.createTime)}),ar.resolve()}getNamedQuery(t,e){return ar.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Nr(t.bundledQuery),readTime:yn(t.readTime)}}(e)),ar.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.ts=new Ke($i.es),this.ns=new Ke($i.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new $i(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new $i(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new it(new B([])),n=new $i(e,t),r=new $i(e,t+1),i=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new it(new B([])),n=new $i(e,t),r=new $i(e,t+1);let i=Ze();return this.ns.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new $i(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class $i{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return it.comparator(t.key,e.key)||L(t.fs,e.fs)}static ss(t,e){return L(t.fs,e.fs)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Ke($i.es)}checkEmpty(t){return ar.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new wr(i,e,n,r);this.An.push(s);for(const e of r)this.ws=this.ws.add(new $i(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return ar.resolve(s)}lookupMutationBatch(t,e){return ar.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return ar.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return ar.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return ar.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new $i(e,0),r=new $i(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);i.push(e)}),ar.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ke(L);return e.forEach(t=>{const e=new $i(t,0),r=new $i(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),ar.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const s=new $i(new it(i),0);let o=new Ke(L);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},s),ar.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){w(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return ar.forEach(e.mutations,r=>{const i=new $i(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new $i(e,0),r=this.ws.firstAfterOrEqual(n);return ar.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,ar.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Ue(it.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ar.resolve(n?n.document.clone():bt.newInvalidDocument(e))}getEntries(t,e){let n=Ge();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():bt.newInvalidDocument(t))}),ar.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ge();const i=new it(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ee(e,i)&&(r=r.insert(i.key,i.clone()))}return ar.resolve(r)}Es(t,e){return ar.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new qi(this)}getSize(t){return ar.resolve(this.size)}}class qi extends ci{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),ar.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.persistence=t,this.Is=new ai(t=>Et(t),It),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.As=0,this.Rs=new ji,this.targetCount=0,this.Ps=Qr.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),ar.resolve()}getLastRemoteSnapshotVersion(t){return ar.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ar.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),ar.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),ar.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new Qr(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,ar.resolve()}updateTargetData(t,e){return this.ce(e),ar.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,ar.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),ar.waitFor(i).next(()=>r)}getTargetCount(t){return ar.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return ar.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),ar.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),ar.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),ar.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return ar.resolve(n)}containsKey(t,e){return ar.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e){this.bs={},this.Be=new O(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Bi(this),this.Jt=new Mr,this.Je=function(t,e){return new Ui(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Tr(e),this.Ye=new Fi(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Vi(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new zi(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return ar.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class zi extends or{constructor(t){super(),this.currentSequenceNumber=t}}class Hi{constructor(t){this.persistence=t,this.Cs=new ji,this.Ns=null}static ks(t){return new Hi(t)}get xs(){if(this.Ns)return this.Ns;throw v()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),ar.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),ar.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ar.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ar.forEach(this.xs,n=>{const r=it.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return ar.or([()=>ar.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e){return`firestore_clients_${t}_${e}`}function Wi(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Qi(t,e){return`firestore_targets_${t}_${e}`}class Yi{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Fs(t,e,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&((s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new E(r.error.code,r.error.message))),s?new Yi(t,e,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Ji{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Fs(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&((i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new E(n.error.code,n.error.message))),i?new Ji(t,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Xi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Fs(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=en();for(let t=0;r&&t<n.activeTargetIds.length;++t)r=rt(n.activeTargetIds[t]),i=i.add(n.activeTargetIds[t]);return r?new Xi(t,i):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Zi{constructor(t,e){this.clientId=t,this.onlineState=e}static Fs(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Zi(e.clientId,e.onlineState):(m("SharedClientState",`Failed to parse online state: ${t}`),null)}}class ts{constructor(){this.activeTargetIds=en()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class es{constructor(t,e,n,r,i){this.window=t,this.Oe=e,this.persistenceKey=n,this.Bs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Ue(L),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Qs=Gi(this.persistenceKey,this.Bs),this.Ws=function(t){return`firestore_sequence_number_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new ts),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.Ys=function(t){return`firestore_bundle_loaded_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Tn();for(const e of t){if(e===this.Bs)continue;const t=this.getItem(Gi(this.persistenceKey,e));if(t){const n=Xi.Fs(e,t);n&&(this.Ks=this.Ks.insert(n.clientId,n))}}this.Xs();const e=this.storage.getItem(this.Js);if(e){const t=this.Zs(e);t&&this.ti(t)}for(const t of this.js)this.qs(t);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(t){let e=!1;return this.Ks.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ni(t,"pending")}updateMutationState(t,e,n){this.ni(t,e,n),this.si(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Qi(this.persistenceKey,t));if(n){const r=Ji.Fs(t,n);r&&(e=r.state)}}return this.ii.Ms(t),this.Xs(),e}removeLocalQueryTarget(t){this.ii.Ls(t),this.Xs()}isLocalQueryTarget(t){return this.ii.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Qi(this.persistenceKey,t))}updateQueryState(t,e,n){this.ri(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.si(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.oi(t)}notifyBundleLoaded(){this.ai()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}qs(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Qs)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Gs.test(e.key)){if(null==e.newValue){const t=this.ci(e.key);return this.ui(t,null)}{const t=this.hi(e.key,e.newValue);if(t)return this.ui(t.clientId,t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.li(e.key,e.newValue);if(t)return this.fi(t)}}else if(this.Hs.test(e.key)){if(null!==e.newValue){const t=this.di(e.key,e.newValue);if(t)return this.wi(t)}}else if(e.key===this.Js){if(null!==e.newValue){const t=this.Zs(e.newValue);if(t)return this.ti(t)}}else if(e.key===this.Ws){const t=function(t){let e=O.I;if(null!=t)try{const n=JSON.parse(t);w("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==O.I&&this.sequenceNumberHandler(t)}else if(e.key===this.Ys)return this.syncEngine._i()}else this.js.push(e)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Os())}ni(t,e,n){const r=new Yi(this.currentUser,t,e,n),i=Wi(this.persistenceKey,this.currentUser,t);this.setItem(i,r.Os())}si(t){const e=Wi(this.persistenceKey,this.currentUser,t);this.removeItem(e)}oi(t){const e={clientId:this.Bs,onlineState:t};this.storage.setItem(this.Js,JSON.stringify(e))}ri(t,e,n){const r=Qi(this.persistenceKey,t),i=new Ji(t,e,n);this.setItem(r,i.Os())}ai(){this.setItem(this.Ys,"value-not-used")}ci(t){const e=this.Gs.exec(t);return e?e[1]:null}hi(t,e){const n=this.ci(t);return Xi.Fs(n,e)}li(t,e){const n=this.zs.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Yi.Fs(new u(i),r,e)}di(t,e){const n=this.Hs.exec(t),r=Number(n[1]);return Ji.Fs(r,e)}Zs(t){return Zi.Fs(t)}async fi(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.mi(t.batchId,t.state,t.error);p("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}wi(t){return this.syncEngine.gi(t.targetId,t.state,t.error)}ui(t,e){const n=e?this.Ks.insert(t,e):this.Ks.remove(t),r=this.ei(this.Ks),i=this.ei(n),s=[],o=[];return i.forEach(t=>{r.has(t)||s.push(t)}),r.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(t){this.Ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ei(t){let e=en();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class ns{constructor(){this.pi=new ts,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new ts,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.Ii=(()=>this.Ai()),this.Ri=(()=>this.Pi()),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e})}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=ss[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((i,s)=>{const o=new a.g;o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a.a.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new E(T.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(e)>=0?e:T.UNKNOWN}(t.status);s(new E(e,t.message))}else s(new E(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(T.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a.h)(),s=Object(a.i)(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a.d({})),this.qi(c.initMessageHeaders,e,n),Object(o.p)()||Object(o.q)()||Object(o.m)()||Object(o.n)()||Object(o.s)()||Object(o.l)()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new os({Vi:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",t),l.send(t))},Si:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a.f.EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a.f.EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Fi())}),m(l,a.f.EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),f.Fi(new E(T.UNAVAILABLE,"The operation could not be completed")))}),m(l,a.f.EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];w(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Fe[t];if(void 0!==e)return Ve(e)}(t),n=i.message;void 0===e&&(e=T.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,f.Fi(new E(e,n)),l.close()}else p("Connection","WebChannel received:",n),f.Oi(n)}}),m(s,a.b.STAT_EVENT,t=>{t.stat===a.e.PROXY?p("Connection","Detected buffering proxy"):t.stat===a.e.NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){return"undefined"!=typeof window?window:null}function us(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return new pn(t,!0)}class hs{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,n,r,i,s,o,a){this.Oe=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new hs(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===T.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new E(T.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fs extends ds{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.C?(w(void 0===e||"string"==typeof e),W.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),W.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?T.UNKNOWN:Ve(t.code);return new E(e,t.message||"")}(o);n=new an(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_n(t,r.document.name),s=yn(r.document.updateTime),o=new vt({mapValue:{fields:r.document.fields}}),a=bt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new sn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_n(t,r.document),s=r.readTime?yn(r.readTime):j.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_n(t,r.document),s=r.removedTargetIds||[];n=new sn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Me(r),s=t.targetId;n=new on(s,i)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return j.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?j.min():e.readTime?yn(e.readTime):j.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=In(this.k),e.addTarget=function(t,e){let n;const r=e.target;return(n=St(r)?{documents:Dn(t,r)}:{query:On(t,r)}).targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=gn(t,e.resumeToken):e.snapshotVersion.compareTo(j.min())>0&&(n.readTime=mn(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=In(this.k),e.removeTarget=t,this.gr(e)}}class ps extends ds{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=function(t,e){return t&&t.length>0?(w(void 0!==e),t.map(t=>(function(t,e){let n=t.updateTime?yn(t.updateTime):yn(e);return n.isEqual(j.min())&&(n=yn(e)),new be(n,t.transformResults||[])})(t,e))):[]}(t.writeResults,t.commitTime),n=yn(t.commitTime);return this.listener.Cr(n,e)}return w(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=In(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>kn(this.k,t))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new E(T.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(T.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(T.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class gs{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(m(e),this.Lr=!1):p("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{As(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Gr.add(4),await ws(e),e.Jr.set("Unknown"),e.Gr.delete(4),await vs(e)}(this))})}),this.Jr=new gs(n,r)}}async function vs(t){if(As(t))for(const e of t.zr)await e(!0)}async function ws(t){for(const e of t.zr)await e(!1)}function bs(t,e){const n=_(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Ss(n)?Is(n):Ms(n).lr()&&Ts(n,e))}function _s(t,e){const n=_(t),r=Ms(n);n.Wr.delete(e),r.lr()&&Es(n,e),0===n.Wr.size&&(r.lr()?r._r():As(n)&&n.Jr.set("Unknown"))}function Ts(t,e){t.Yr.X(e.targetId),Ms(t).br(e)}function Es(t,e){t.Yr.X(e),Ms(t).vr(e)}function Is(t){t.Yr=new un({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Ms(t).start(),t.Jr.Br()}function Ss(t){return As(t)&&!Ms(t).hr()&&t.Wr.size>0}function As(t){return 0===_(t).Gr.size}function Cs(t){t.Yr=void 0}async function ks(t,e,n){if(!dr(e))throw e;t.Gr.add(1),await ws(t),t.Jr.set("Offline"),n||(n=(()=>ki(t.localStore))),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await vs(t)})}function xs(t,e){return e().catch(n=>ks(t,n,e))}async function Ds(t){const e=_(t),n=Fs(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Os(e);)try{const i=await Di(e.localStore,r);if(null===i){0===e.Qr.length&&n._r();break}r=i.batchId,Ns(e,i)}catch(t){await ks(e,t)}Rs(e)&&Ls(e)}function Os(t){return As(t)&&t.Qr.length<10}function Ns(t,e){t.Qr.push(e);const n=Fs(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Rs(t){return As(t)&&!Fs(t).hr()&&t.Qr.length>0}function Ls(t){Fs(t).start()}async function Ps(t,e){const n=_(t);e?(n.Gr.delete(2),await vs(n)):e||(n.Gr.add(2),await ws(n),n.Jr.set("Unknown"))}function Ms(t){return t.Xr||(t.Xr=function(t,e,n){const r=_(t);return r.Fr(),new fs(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:async function(t){t.Wr.forEach((e,n)=>{Ts(t,e)})}.bind(null,t),Ni:async function(t,e){Cs(t),Ss(t)?(t.Jr.Kr(e),Is(t)):t.Jr.set("Unknown")}.bind(null,t),Pr:async function(t,e,n){if(t.Jr.set("Online"),e instanceof an&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ks(t,n)}else if(e instanceof sn?t.Yr.ot(e):e instanceof on?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(j.min()))try{const r=await ki(t.localStore);n.compareTo(r)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(W.EMPTY_BYTE_STRING,n.snapshotVersion)),Es(t,e);const r=new _r(n.target,e,1,n.sequenceNumber);Ts(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await ks(t,e)}}.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Ss(t)?Is(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Cs(t))})),t.Xr}function Fs(t){return t.Zr||(t.Zr=function(t,e,n){const r=_(t);return r.Fr(),new ps(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(t.datastore,t.asyncQueue,{Di:async function(t){Fs(t).kr()}.bind(null,t),Ni:async function(t,e){e&&Fs(t).Sr&&await async function(t,e){if($e(n=e.code)&&n!==T.ABORTED){const n=t.Qr.shift();Fs(t).wr(),await xs(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ds(t)}var n}(t,e),Rs(t)&&Ls(t)}.bind(null,t),Nr:async function(t){const e=Fs(t);for(const n of t.Qr)e.Dr(n.mutations)}.bind(null,t),Cr:async function(t,e,n){const r=t.Qr.shift(),i=br.from(r,e,n);await xs(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ds(t)}.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Ds(t)):(await t.Zr.stop(),t.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class js{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new js(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $s(t,e){if(m("AsyncQueue",`${e}: ${t}`),dr(t))return new E(T.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=Qe(),this.sortedSet=new Ue(this.comparator)}static emptySet(t){return new Vs(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vs))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vs;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.eo=new Ue(it.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):v():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class qs{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new qs(t,e,Vs.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.so=void 0,this.listeners=[]}}class Ks{constructor(){this.queries=new ai(t=>Zt(t),Xt),this.onlineState="Unknown",this.io=new Set}}async function zs(t,e){const n=_(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bs),i)try{s.so=await n.onListen(r)}catch(t){const n=$s(t,`Initialization of query '${te(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&Gs(n)}async function Hs(t,e){const n=_(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gs(t){t.io.forEach(t=>{t.next()})}class Ws{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new qs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=qs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e){this.payload=t,this.byteLength=e}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this.k=t}Hn(t){return _n(this.k,t)}Jn(t){return t.metadata.exists?Cn(this.k,t.document,!1):bt.newNoDocument(this.Hn(t.metadata.name),this.Yn(t.metadata.readTime))}Yn(t){return yn(t)}}class Js{constructor(t,e,n){this.mo=t,this.localStore=e,this.k=n,this.queries=[],this.documents=[],this.progress=Xs(t)}yo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}po(t){const e=new Map,n=new Ys(this.k);for(const r of t)if(r.metadata.queries){const t=n.Hn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||Ze()).add(t);e.set(n,r)}}return e}async complete(){const t=await async function(t,e,n,r){const i=_(t);let s=Ze(),o=Ge(),a=Je();for(const t of n){const n=e.Hn(t.metadata.name);t.document&&(s=s.add(n)),o=o.insert(n,e.Jn(t)),a=a.insert(n,e.Yn(t.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),u=await Oi(i,function(t){return Yt(Bt(B.fromString(`__bundle__/docs/${t}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>xi(t,c,o,j.min(),a).next(e=>(c.apply(t),e)).next(e=>i.He.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.He.addMatchingKeys(t,s,u.targetId)).next(()=>i.Wn.Vn(t,e)).next(()=>e)))}(this.localStore,new Ys(this.k),this.documents,this.mo.id),e=this.po(this.documents);for(const t of this.queries)await Mi(this.localStore,t,e.get(t.name));return this.progress.taskState="Success",new _i(Object.assign({},this.progress),t)}}function Xs(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.key=t}}class to{constructor(t){this.key=t}}class eo{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Ze(),this.mutatedKeys=Ze(),this.Ao=ne(t),this.Ro=new Vs(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new Us,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Kt(this.query)&&r.size===this.query.limit?r.last():null,c=zt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ee(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Kt(this.query)||zt(this.query))for(;s.size>this.query.limit;){const t=Kt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>(function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new qs(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Us,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Ze(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new to(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new Zs(n))}),e}ko(t){this.To=t.zn,this.Io=Ze();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return qs.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class no{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ro{constructor(t){this.key=t,this.$o=!1}}class io{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new ai(t=>Zt(t),Xt),this.Mo=new Map,this.Lo=new Set,this.Bo=new Ue(it.comparator),this.Uo=new Map,this.qo=new ji,this.Ko={},this.jo=new Map,this.Qo=Qr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function so(t,e,n,r){t.Go=((e,n,r)=>(async function(t,e,n,r){let i=e.view.bo(n);i.Bn&&(i=await Ri(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return po(t,e.targetId,o.Co),o.snapshot})(t,e,n,r));const i=await Ri(t.localStore,e,!0),s=new eo(e,i.zn),o=s.bo(i.documents),a=rn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);po(t,n,c.Co);const u=new no(e,n,s);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function oo(t,e){const n=_(t);try{const r=await function(t,e){const n=_(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return w(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=Ge();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(xi(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(j.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return ar.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?w(r.$o):t.removedDocuments.size>0&&(w(r.$o),r.$o=!1))}),await yo(n,r,e)}catch(t){await ti(t)}}function ao(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.ro(e)&&(r=!0)}),r&&Gs(n)}(r.eventManager,e),t.length&&r.Fo.Pr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function co(t,e){const n=_(t),r=e.batch.batchId;try{const i=await function(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=ar.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.An.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}(n.localStore,e);lo(n,r,null),uo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,i)}catch(t){await ti(t)}}function uo(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function lo(t,e,n){const r=_(t);let i=r.Ko[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function ho(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||fo(t,e)})}function fo(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(_s(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),go(t))}function po(t,e,n){for(const r of n)r instanceof Zs?(t.qo.addReference(r.key,e),mo(t,r)):r instanceof to?(p("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||fo(t,r.key)):v()}function mo(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(p("SyncEngine","New document in limbo: "+n),t.Lo.add(r),go(t))}function go(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new it(B.fromString(e)),r=t.Qo.next();t.Uo.set(r,new ro(n)),t.Bo=t.Bo.insert(n,r),bs(t.remoteStore,new _r(Yt(Bt(n.path)),r,2,O.I))}}async function yo(t,e,n){const r=_(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ei.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ar.forEach(e,e=>ar.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>ar.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!dr(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function vo(t,e){const n=_(t),r=await Ri(n.localStore,e.query,!0),i=e.view.ko(r);return n.isPrimaryClient&&po(n,e.targetId,i.Co),i}async function wo(t,e,n){const r=_(t),i=[],s=[];for(const t of e){let e;const n=r.Mo.get(t);if(n&&0!==n.length){e=await Oi(r.localStore,Yt(n[0]));for(const t of n){const e=r.Oo.get(t),n=await vo(r,e);n.snapshot&&s.push(n.snapshot)}}else{const n=await Li(r.localStore,t);e=await Oi(r.localStore,n),await so(r,bo(n),t,!1)}i.push(e)}return r.Fo.Pr(s),i}function bo(t){return qt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function _o(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=function(t,e){const n=_(t),r=n.Uo.get(e);if(r&&r.$o)return Ze().add(r.key);{let t=Ze();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Po)}return t}}.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=async function(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new Ue(it.comparator);t=t.insert(s,bt.newNoDocument(s,j.min()));const n=Ze().add(s),i=new nn(j.min(),new Map,new Ke(L),t,n);await oo(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),go(r)}else await Ni(r.localStore,e,!1).then(()=>ho(r,e,n)).catch(ti)}.bind(null,e),e.Fo.Pr=function(t,e){const n=_(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(r=!0);i.so=t}}r&&Gs(n)}.bind(null,e.eventManager),e.Fo.zo=function(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}.bind(null,e.eventManager),e}function To(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=co.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=async function(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.An.lookupMutationBatch(t,e).next(e=>(w(null!==e),r=e.keys(),n.An.removeMutationBatch(t,e))).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}(r.localStore,e);lo(r,e,n),uo(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,t)}catch(n){await ti(n)}}.bind(null,e),e}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=ls(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return Ai(this.persistence,new Ii,t.initialUser,this.k)}Yo(t){return new Ki(Hi.ks,this.k)}Jo(t){return new ns}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Io extends Eo{constructor(t,e,n){super(),this.ta=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await async function(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>(function(t){const e=di(t);let n=j.min();return e.jt({index:Qn.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=Ar(e.readTime)),r.done()}).next(()=>n)})(t)).then(t=>{e.jn=t})}(this.localStore),await this.ta.initialize(this,t),await To(this.ta.syncEngine),await Ds(this.ta.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(t){return Ai(this.persistence,new Ii,t.initialUser,this.k)}Xo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new ri(e,t.asyncQueue)}Yo(t){const e=bi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Ur.withCacheSize(this.cacheSizeBytes):Ur.DEFAULT;return new yi(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,cs(),us(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new ns}}class So extends Io{constructor(t,e){super(t,e,!1),this.ta=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.ta.syncEngine;this.sharedClientState instanceof es&&(this.sharedClientState.syncEngine={mi:async function(t,e,n,r){const i=_(t),s=await function(t,e){const n=_(t),r=_(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Zt(t,e).next(e=>e?n.Wn.vn(t,e):ar.resolve(null)))}(i.localStore,e);null!==s?("pending"===n?await Ds(i.remoteStore):"acknowledged"===n||"rejected"===n?(lo(i,e,r||null),uo(i,e),function(t,e){_(_(t).An).ee(e)}(i.localStore,e)):v(),await yo(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}.bind(null,e),gi:async function(t,e,n,r){const i=_(t);if(i.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Mo.has(e))switch(n){case"current":case"not-current":{const t=await Pi(i.localStore),r=nn.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await yo(i,t,r);break}case"rejected":await Ni(i.localStore,e,!0),ho(i,e,r);break;default:v()}}.bind(null,e),yi:async function(t,e,n){const r=_o(t);if(r.Wo){for(const t of e){if(r.Mo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await Li(r.localStore,t),n=await Oi(r.localStore,e);await so(r,bo(e),n.targetId,!1),bs(r.remoteStore,n)}for(const t of n)r.Mo.has(t)&&await Ni(r.localStore,t,!1).then(()=>{_s(r.remoteStore,t),ho(r,t)}).catch(ti)}}.bind(null,e),Tn:function(t){return _(_(_(t).localStore).persistence).Tn()}.bind(null,e),_i:async function(t){const e=_(t);return Pi(e.localStore).then(t=>yo(e,t))}.bind(null,e)},await this.sharedClientState.start()),await this.persistence.sn(async t=>{await async function(t,e){const n=_(t);if(_o(n),To(n),!0===e&&!0!==n.Wo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await wo(n,t.toArray());n.Wo=!0,await Ps(n.remoteStore,!0);for(const t of e)bs(n.remoteStore,t)}else if(!1===e&&!1!==n.Wo){const t=[];let e=Promise.resolve();n.Mo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(ho(n,i),Ni(n.localStore,i,!0))),_s(n.remoteStore,i)}),await e,await wo(n,t),function(t){const e=_(n);e.Uo.forEach((t,n)=>{_s(e.remoteStore,n)}),e.qo.hs(),e.Uo=new Map,e.Bo=new Ue(it.comparator)}(),n.Wo=!1,await Ps(n.remoteStore,!1)}}(this.ta.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Jo(t){const e=cs();if(!es.bt(e))throw new E(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=bi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new es(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Ao{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=(t=>ao(this.syncEngine,t,1)),this.remoteStore.remoteSyncer.handleCredentialChange=async function(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Ci(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new E(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await yo(n,t.Gn)}}.bind(null,this.syncEngine),await Ps(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ks}createDatastore(t){const e=ls(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new as(r));var r;return function(t,e,n,r){return new ms(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=(t=>ao(this.syncEngine,t,0)),s=is.bt()?new is:new rs,new ys(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new io(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await ws(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.sa=t,this.k=e,this.metadata=new I,this.buffer=new Uint8Array,this.ia=new TextDecoder("utf-8"),this.ra().then(t=>{t&&t._o()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))},t=>this.metadata.reject(t))}close(){return this.sa.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.ra()}async ra(){const t=await this.oa();if(null===t)return null;const e=this.ia.decode(t),n=Number(e);isNaN(n)&&this.aa(`length string (${e}) is not valid number`);const r=await this.ca(n);return new Qs(JSON.parse(r),t.length+n)}ua(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async oa(){for(;this.ua()<0&&!await this.ha(););if(0===this.buffer.length)return null;const t=this.ua();t<0&&this.aa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ca(t){for(;this.buffer.length<t;)await this.ha()&&this.aa("Reached the end of bundle when more is expected.");const e=this.ia.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}aa(t){throw this.sa.cancel(),new Error(`Invalid bundle format: ${t}`)}async ha(){const t=await this.sa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),r=In(n.k)+"/documents",i={documents:e.map(t=>bn(n.k,t))},s=await n.ji("BatchGetDocuments",r,i),o=new Map;s.forEach(t=>{const e=function(t,e){return"found"in e?function(t,e){w(!!e.found),e.found.name,e.found.updateTime;const n=_n(t,e.found.name),r=yn(e.found.updateTime),i=new vt({mapValue:{fields:e.found.fields}});return bt.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){w(!!e.missing),w(!!e.readTime);const n=_n(t,e.missing),r=yn(e.readTime);return bt.newNoDocument(n,r)}(t,e):v()}(n.k,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());w(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Le(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=it.fromPath(e);this.mutations.push(new Pe(n,this.precondition(n)))}),await async function(t,e){const n=_(t),r=In(n.k)+"/documents",i={writes:e.map(t=>kn(n.k,t))};await n.Bi("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=j.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new E(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?_e.updateTime(e):_e.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(j.min()))throw new E(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(e)}return _e.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.la=5,this.ur=new hs(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const t=new Do(this.datastore),e=this.da(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.wa(t)}))}).catch(t=>{this.wa(t)})})}da(t){try{const e=this.updateFunction(t);return!et(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}wa(t){this.la>0&&this._a(t)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(t)}_a(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!$e(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=R.A(),this.authCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(n,async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=$s(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ro(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Ci(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Lo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Po(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>(async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=As(n);n.Gr.add(3),await ws(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await vs(n)})(e.remoteStore,t)),t.onlineComponents=e}async function Po(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ro(t,new Eo)),t.offlineComponents}async function Mo(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Lo(t,new Ao)),t.onlineComponents}function Fo(t){return Po(t).then(t=>t.persistence)}function jo(t){return Po(t).then(t=>t.localStore)}function $o(t){return Mo(t).then(t=>t.remoteStore)}function Vo(t){return Mo(t).then(t=>t.syncEngine)}async function Uo(t){const e=await Mo(t),n=e.eventManager;return n.onListen=async function(t,e){const n=_o(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Oi(n.localStore,Yt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await so(n,e,r,"current"===s),n.isPrimaryClient&&bs(n.remoteStore,t)}return i}.bind(null,e.syncEngine),n.onUnlisten=async function(t,e){const n=_(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(t=>!Xt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ni(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_s(n.remoteStore,r.targetId),ho(n,r.targetId)}).catch(ti)):(ho(n,r.targetId),await Ni(n.localStore,r.targetId,!0))}.bind(null,e.syncEngine),n}function qo(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>(function(t,e,n,r,i){const s=new ko({next:s=>{e.enqueueAndForget(()=>Hs(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new E(T.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new E(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Ws(Bt(n.path),s,{includeMetadataChanges:!0,wo:!0});return zs(t,o)})(await Uo(t),t.asyncQueue,e,n,r)),r.promise}function Bo(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>(function(t,e,n,r,i){const s=new ko({next:n=>{e.enqueueAndForget(()=>Hs(t,o)),n.fromCache&&"server"===r.source?i.reject(new E(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ws(n,s,{includeMetadataChanges:!0,wo:!0});return zs(t,o)})(await Uo(t),t.asyncQueue,e,n,r)),r.promise}function Ko(t,e,n,r){const i=function(t,e){let n;return function(t,e){return new xo(t,e)}(function(t,e){if(t instanceof Uint8Array)return Co(t,e);if(t instanceof ArrayBuffer)return Co(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n="string"==typeof t?(new TextEncoder).encode(t):t),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,ls(e));t.asyncQueue.enqueueAndForget(async()=>{!function(t,e,n){const r=_(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=_(t),r=yn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Ye.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(Xs(r));const i=new Js(r,t.localStore,e.k);let s=await e.Ho();for(;s;){const t=await i.yo(s);t&&n._updateProgress(t),s=await e.Ho()}const o=await i.complete();await yo(t,o.In,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Ye.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress)}catch(t){g("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}(await Vo(t),i,r)})}class zo{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ho{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ho&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t,e,n){if(!n)throw new E(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qo(t,e,n,r){if(!0===e&&!0===r)throw new E(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yo(t){if(!it.isDocumentKey(t))throw new E(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jo(t){if(it.isDocumentKey(t))throw new E(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Zo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xo(t);throw new E(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ta(t,e){if(e<=0)throw new E(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qo("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ea({}),this._settingsFrozen=!1,t instanceof Ho?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ea(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return w(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new x(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Go.get(t);e&&(p("ComponentProvider","Removing Datastore"),Go.delete(t),e.terminate())}(this),Promise.resolve()}}function ra(t,e,n,r={}){var i;const s=(t=Zo(t,na))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o.e)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new E(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new C(new S(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ia(this.firestore,t,this._key)}}class sa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new sa(this.firestore,t,this._query)}}class oa extends sa{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ia(this.firestore,null,new it(t))}withConverter(t){return new oa(this.firestore,t,this._path)}}function aa(t,e,...n){if(t=Object(o.i)(t),Wo("collection","path",e),t instanceof na){const r=B.fromString(e,...n);return Jo(r),new oa(t,null,r)}{if(!(t instanceof ia||t instanceof oa))throw new E(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Jo(r),new oa(t.firestore,null,r)}}function ca(t,e){if(t=Zo(t,na),Wo("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new sa(t,null,function(t){return new Ut(B.emptyPath(),t)}(e))}function ua(t,e,...n){if(t=Object(o.i)(t),1===arguments.length&&(e=R.A()),Wo("doc","path",e),t instanceof na){const r=B.fromString(e,...n);return Yo(r),new ia(t,null,new it(r))}{if(!(t instanceof ia||t instanceof oa))throw new E(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Yo(r),new ia(t.firestore,t instanceof oa?t.converter:null,new it(r))}}function la(t,e){return t=Object(o.i)(t),e=Object(o.i)(e),(t instanceof ia||t instanceof oa)&&(e instanceof ia||e instanceof oa)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ha(t,e){return t=Object(o.i)(t),e=Object(o.i)(e),t instanceof sa&&e instanceof sa&&t.firestore===e.firestore&&Xt(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class da{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new hs(this,"async_queue_retry"),this.Ra=(()=>{const t=us();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()});const t=us();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=us();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new I;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!dr(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{throw this.Ta=t,this.Ea=!1,m("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const r=js.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(r),r}Pa(){this.Ta&&v()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}function fa(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class pa{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=-1;class ga extends na{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new da,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||va(this),this._firestoreClient.terminate()}}function ya(t){return t._firestoreClient||va(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function va(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new zo(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new No(t._authCredentials,t._appCheckCredentials,t._queue,r)}function wa(t,e){ka(t=Zo(t,ga));const n=ya(t),r=t._freezeSettings(),i=new Ao;return _a(n,i,new Io(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function ba(t){ka(t=Zo(t,ga));const e=ya(t),n=t._freezeSettings(),r=new Ao;return _a(e,r,new So(r,n.cacheSizeBytes))}function _a(t,e,n){const r=new I;return t.asyncQueue.enqueue(async()=>{try{await Ro(t,n),await Lo(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function Ta(t){if(t._initialized&&!t._terminated)throw new E(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new I;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!ur.bt())return Promise.resolve();const e=t+"main";await ur.delete(e)}(bi(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Ea(t){return function(t){const e=new I;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e){const n=_(t);As(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(t){const e=_(n.localStore);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.An.getHighestUnacknowledgedBatchId(t))}();if(-1===r)return void e.resolve();const i=n.jo.get(r)||[];i.push(e),n.jo.set(r,i)}catch(t){const n=$s(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}})(await Vo(t),e)),e.promise}(ya(t=Zo(t,ga)))}function Ia(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await Fo(t),n=await $o(t);return e.setNetworkEnabled(!0),function(t){const e=_(n);return e.Gr.delete(0),vs(e)}()})}(ya(t=Zo(t,ga)))}function Sa(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await Fo(t),n=await $o(t);return e.setNetworkEnabled(!1),async function(t){const e=_(n);e.Gr.add(0),await ws(e),e.Jr.set("Offline")}()})}(ya(t=Zo(t,ga)))}function Aa(t,e){const n=ya(t=Zo(t,ga)),r=new pa;return Ko(n,t._databaseId,e,r),r}function Ca(t,e){return function(t,e){return t.asyncQueue.enqueue(async()=>(function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Ye.getNamedQuery(t,e))})(await jo(t),e))}(ya(t=Zo(t,ga)),e).then(e=>e?new sa(t,null,e.query):null)}function ka(t){if(t._initialized||t._terminated)throw new E(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Da{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Da(W.fromBase64String(t))}catch(t){throw new E(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Da(W.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=/^__.*__$/;class La{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new De(t,this.data,this.fieldMask,e,this.fieldTransforms):new xe(t,this.data,e,this.fieldTransforms)}}class Pa{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new De(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ma(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Fa{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Fa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.Ma(t),r}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return rc(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Ma(this.xa)&&Ra.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class ja{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||ls(t)}ja(t,e,n,r=!1){return new Fa({xa:t,methodName:e,Ka:n,path:z.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function $a(t){const e=t._freezeSettings(),n=ls(t._databaseId);return new ja(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Va(t,e,n,r,i,s={}){const o=t.ja(s.merge||s.mergeFields?2:0,e,n,i);Za("Data must be an object, but it was:",o,r);const a=Ja(r,o);let c,u;if(s.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=tc(e,r,n);if(!o.contains(i))throw new E(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ic(t,i)||t.push(i)}c=new H(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new La(new vt(a),c,u)}class Ua extends Oa{_toFieldTransform(t){if(2!==t.xa)throw 1===t.xa?t.Ua(`${this._methodName}() can only appear at the top level of your update data`):t.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ua}}function qa(t,e,n){return new Fa({xa:3,Ka:e.settings.Ka,methodName:t._methodName,Oa:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Ba extends Oa{_toFieldTransform(t){return new we(t.path,new he)}isEqual(t){return t instanceof Ba}}class Ka extends Oa{constructor(t,e){super(t),this.Qa=e}_toFieldTransform(t){const e=qa(this,t,!0),n=this.Qa.map(t=>Ya(t,e)),r=new de(n);return new we(t.path,r)}isEqual(t){return this===t}}class za extends Oa{constructor(t,e){super(t),this.Qa=e}_toFieldTransform(t){const e=qa(this,t,!0),n=this.Qa.map(t=>Ya(t,e)),r=new pe(n);return new we(t.path,r)}isEqual(t){return this===t}}class Ha extends Oa{constructor(t,e){super(t),this.Wa=e}_toFieldTransform(t){const e=new ge(t.k,oe(t.k,this.Wa));return new we(t.path,e)}isEqual(t){return this===t}}function Ga(t,e,n,r){const i=t.ja(1,e,n);Za("Data must be an object, but it was:",i,r);const s=[],a=vt.empty();V(r,(t,r)=>{const c=nc(e,t,n);r=Object(o.i)(r);const u=i.La(c);if(r instanceof Ua)s.push(c);else{const t=Ya(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new H(s);return new Pa(a,c,i.fieldTransforms)}function Wa(t,e,n,r,i,s){const a=t.ja(1,e,n),c=[tc(e,r,n)],u=[i];if(s.length%2!=0)throw new E(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)c.push(tc(e,s[t])),u.push(s[t+1]);const l=[],h=vt.empty();for(let t=c.length-1;t>=0;--t)if(!ic(l,c[t])){const e=c[t];let n=u[t];n=Object(o.i)(n);const r=a.La(e);if(n instanceof Ua)l.push(e);else{const t=Ya(n,r);null!=t&&(l.push(e),h.set(e,t))}}const d=new H(l);return new Pa(h,d,a.fieldTransforms)}function Qa(t,e,n,r=!1){return Ya(n,t.ja(r?4:3,e))}function Ya(t,e){if(Xa(t=Object(o.i)(t)))return Za("Unsupported field value:",e,t),Ja(t,e);if(t instanceof Oa)return function(t,e){if(!Ma(e.xa))throw e.Ua(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Ua(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ya(i,e.Ba(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o.i)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return oe(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=F.fromDate(t);return{timestampValue:mn(e.k,n)}}if(t instanceof F){const n=new F(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:mn(e.k,n)}}if(t instanceof Na)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Da)return{bytesValue:gn(e.k,t._byteString)};if(t instanceof ia){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua(`Unsupported field value: ${Xo(t)}`)}(t,e)}function Ja(t,e){const n={};return U(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):V(t,(t,r)=>{const i=Ya(r,e.Fa(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Xa(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Na||t instanceof Da||t instanceof ia||t instanceof Oa)}function Za(t,e,n){if(!Xa(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Xo(n);throw"an object"===r?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function tc(t,e,n){if((e=Object(o.i)(e))instanceof xa)return e._internalPath;if("string"==typeof e)return nc(t,e);throw rc("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ec=new RegExp("[~\\*/\\[\\]]");function nc(t,e,n){if(e.search(ec)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xa(...e.split("."))._internalPath}catch(r){throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new E(T.INVALID_ARGUMENT,a+t+c)}function ic(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ia(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new oc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ac("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class oc extends sc{data(){return super.data()}}function ac(t,e){return"string"==typeof e?nc(t,e):e instanceof xa?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uc extends sc{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ac("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lc extends uc{data(t={}){return super.data(t)}}class hc{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new cc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new lc(this._firestore,this._userDataWriter,n.key,n,new cc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new lc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new cc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new lc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new cc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(s=(n=n.add(e.doc)).indexOf(e.doc.key)),{type:function(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dc(t,e){return t instanceof uc&&e instanceof uc?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hc&&e instanceof hc&&t._firestore===e._firestore&&ha(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){if(zt(t)&&0===t.explicitOrderBy.length)throw new E(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pc{}function mc(t,...e){for(const n of e)t=n._apply(t);return t}class gc extends pc{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=$a(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Oc(o,s);const e=[];for(const n of o)e.push(Dc(r,t,n));a={arrayValue:{values:e}}}else a=Dc(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Oc(o,s),a=Qa(n,"where",o,"in"===s||"not-in"===s);const c=At.create(i,s,a);return function(t,e){if(e.V()){const n=Gt(t);if(null!==n&&!n.isEqual(e.field))throw new E(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ht(t);null!==r&&Nc(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(e.op){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}());if(null!==n)throw n===e.op?new E(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new sa(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function yc(t,e,n){const r=e,i=ac("where",t);return new gc(i,r,n)}class vc extends pc{constructor(t,e){super(),this.Ga=t,this.Ja=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new E(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new E(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ft(e,n);return function(t,e){if(null===Ht(t)){const n=Gt(t);null!==n&&Nc(t,n,e.field)}}(t,r),r}(t._query,this.Ga,this.Ja);return new sa(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ut(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function wc(t,e="asc"){const n=e,r=ac("orderBy",t);return new vc(r,n)}class bc extends pc{constructor(t,e,n){super(),this.type=t,this.Ya=e,this.Xa=n}_apply(t){return new sa(t.firestore,t.converter,Jt(t._query,this.Ya,this.Xa))}}function _c(t){return ta("limit",t),new bc("limit",t,"F")}function Tc(t){return ta("limitToLast",t),new bc("limitToLast",t,"L")}class Ec extends pc{constructor(t,e,n){super(),this.type=t,this.Za=e,this.tc=n}_apply(t){const e=xc(t,this.type,this.Za,this.tc);return new sa(t.firestore,t.converter,function(t,e){return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Ic(...t){return new Ec("startAt",t,!0)}function Sc(...t){return new Ec("startAfter",t,!1)}class Ac extends pc{constructor(t,e,n){super(),this.type=t,this.Za=e,this.tc=n}_apply(t){const e=xc(t,this.type,this.Za,this.tc);return new sa(t.firestore,t.converter,function(t,e){return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Cc(...t){return new Ac("endBefore",t,!0)}function kc(...t){return new Ac("endAt",t,!1)}function xc(t,e,n,r){if(n[0]=Object(o.i)(n[0]),n[0]instanceof sc)return function(t,e,n,r,i){if(!r)throw new E(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of Qt(t))if(n.field.isKeyField())s.push(ht(e,r.key));else{const t=r.data.field(n.field);if(Z(t))throw new E(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=n.field.canonicalString();throw new E(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Pt(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=$a(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new E(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new E(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!Wt(t)&&-1!==c.indexOf("/"))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=t.path.child(B.fromString(c));if(!it.isDocumentKey(n))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new it(n);a.push(ht(e,i))}else{const t=Qa(n,r,c);a.push(t)}}return new Pt(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Dc(t,e,n){if("string"==typeof(n=Object(o.i)(n))){if(""===n)throw new E(T.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wt(e)&&-1!==n.indexOf("/"))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(B.fromString(n));if(!it.isDocumentKey(r))throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ht(t,new it(r))}if(n instanceof ia)return ht(t,n._key);throw new E(T.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(n)}.`)}function Oc(t,e){if(!Array.isArray(t)||0===t.length)throw new E(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Nc(t,e,n){if(!n.isEqual(e))throw new E(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{convertValue(t,e="none"){switch(st(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(X(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return V(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Na(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function t(e){const n=e.mapValue.fields.__previous_value__;return Z(n)?t(n):n}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(tt(t));default:return null}}convertTimestamp(t){const e=Y(t);return new F(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);w(Fn(n));const r=new Ho(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}class Pc extends Rc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Da(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ia(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=$a(t)}set(t,e,n){this._verifyNotCommitted();const r=Fc(t,this._firestore),i=Lc(r.converter,e,n),s=Va(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,_e.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Fc(t,this._firestore);let s;return s="string"==typeof(e=Object(o.i)(e))||e instanceof xa?Wa(this._dataReader,"WriteBatch.update",i._key,e,n,r):Ga(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,_e.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Fc(t,this._firestore);return this._mutations=this._mutations.concat(new Le(e._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fc(t,e){if((t=Object(o.i)(t)).firestore!==e)throw new E(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){const e=Zo((t=Zo(t,ia)).firestore,ga);return qo(ya(e),t._key).then(n=>Xc(e,t,n))}class $c extends Rc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Da(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ia(this.firestore,null,e)}}function Vc(t){const e=Zo((t=Zo(t,ia)).firestore,ga),n=ya(e),r=new $c(e);return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e,n){try{const r=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Wn.Rn(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new E(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=$s(t,`Failed to get document '${e} from cache`);n.reject(r)}})(await jo(t),e,n)),n.promise}(n,t._key).then(n=>new uc(e,r,t._key,n,new cc(null!==n&&n.hasLocalMutations,!0),t.converter))}function Uc(t){const e=Zo((t=Zo(t,ia)).firestore,ga);return qo(ya(e),t._key,{source:"server"}).then(n=>Xc(e,t,n))}function qc(t){const e=Zo((t=Zo(t,sa)).firestore,ga),n=ya(e),r=new $c(e);return fc(t._query),Bo(n,t._query).then(n=>new hc(e,r,t,n))}function Bc(t){const e=Zo((t=Zo(t,sa)).firestore,ga),n=ya(e),r=new $c(e);return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e,n){try{const r=await Ri(t,e,!0),i=new eo(e,r.zn),s=i.bo(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const r=$s(t,`Failed to execute query '${e} against cache`);n.reject(r)}})(await jo(t),e,n)),n.promise}(n,t._query).then(n=>new hc(e,r,t,n))}function Kc(t){const e=Zo((t=Zo(t,sa)).firestore,ga),n=ya(e),r=new $c(e);return Bo(n,t._query,{source:"server"}).then(n=>new hc(e,r,t,n))}function zc(t,e,n){const r=Zo((t=Zo(t,ia)).firestore,ga),i=Lc(t.converter,e,n);return Jc(r,[Va($a(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,_e.none())])}function Hc(t,e,n,...r){const i=Zo((t=Zo(t,ia)).firestore,ga),s=$a(i);let a;return Jc(i,[(a="string"==typeof(e=Object(o.i)(e))||e instanceof xa?Wa(s,"updateDoc",t._key,e,n,r):Ga(s,"updateDoc",t._key,e)).toMutation(t._key,_e.exists(!0))])}function Gc(t){return Jc(Zo(t.firestore,ga),[new Le(t._key,_e.none())])}function Wc(t,e){const n=Zo(t.firestore,ga),r=ua(t),i=Lc(t.converter,e);return Jc(n,[Va($a(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,_e.exists(!1))]).then(()=>r)}function Qc(t,...e){var n,r,i;t=Object(o.i)(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||fa(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(fa(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof ia)l=Zo(t.firestore,ga),h=Bt(t._key.path),u={next:n=>{e[a]&&e[a](Xc(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Zo(t,sa);l=Zo(n.firestore,ga),h=n._query;const r=new $c(l);u={next:t=>{e[a]&&e[a](new hc(l,r,n,t))},error:e[a+1],complete:e[a+2]},fc(t._query)}return function(t,e,n,r){const i=new ko(u),s=new Ws(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>zs(await Uo(t),s)),()=>{i.na(),t.asyncQueue.enqueueAndForget(async()=>Hs(await Uo(t),s))}}(ya(l),h,c)}function Yc(t,e){return function(t,e){const n=new ko(e);return t.asyncQueue.enqueueAndForget(async()=>(function(t,e){_(t).io.add(e),e.next()})(await Uo(t),n)),()=>{n.na(),t.asyncQueue.enqueueAndForget(async()=>(function(t,e){_(t).io.delete(e)})(await Uo(t),n))}}(ya(t=Zo(t,ga)),fa(e)?e:{next:e})}function Jc(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e,n){const r=To(t);try{const i=await function(t,e){const n=_(t),r=F.now(),i=e.reduce((t,e)=>t.add(e.key),Ze());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Wn.vn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Ae(t,s.get(t.key));null!=e&&o.push(new De(t.key,e,wt(e.value.mapValue),_e.exists(!0)))}return n.An.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(t,e,n){let r=t.Ko[t.currentUser.toKey()];r||(r=new Ue(L)),r=r.insert(e,n),t.Ko[t.currentUser.toKey()]=r}(r,i.batchId,n),await yo(r,i.changes),await Ds(r.remoteStore)}catch(t){const e=$s(t,"Failed to persist write");n.reject(e)}})(await Vo(t),e,n)),n.promise}(ya(t),e)}function Xc(t,e,n){const r=n.docs.get(e._key),i=new $c(t);return new uc(t,i,e._key,r,new cc(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=$a(t)}get(t){const e=Fc(t,this._firestore),n=new Pc(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return v();const r=t[0];if(r.isFoundDocument())return new sc(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new sc(this._firestore,n,e._key,null,e.converter);throw v()})}set(t,e,n){const r=Fc(t,this._firestore),i=Lc(r.converter,e,n),s=Va(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Fc(t,this._firestore);let s;return s="string"==typeof(e=Object(o.i)(e))||e instanceof xa?Wa(this._dataReader,"Transaction.update",i._key,e,n,r):Ga(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Fc(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Fc(t,this._firestore),n=new $c(this._firestore);return super.get(t).then(t=>new uc(this._firestore,n,e._key,t._document,new cc(!1,!1),e.converter))}}function tu(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return Mo(t).then(t=>t.datastore)}(t);new Oo(t.asyncQueue,r,e,n).run()}),n.promise}(ya(t=Zo(t,ga)),n=>e(new Zc(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return new Ua("deleteField")}function nu(){return new Ba("serverTimestamp")}function ru(...t){return new Ka("arrayUnion",t)}function iu(...t){return new za("arrayRemove",t)}function su(t){return new Ha("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r.SDK_VERSION),Object(r._registerComponent)(new i.a("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new ga(r,new class{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=(()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable(()=>r(this.currentUser))});const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new u(t)}}(t.getProvider("auth-internal")),new class{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=(n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n))});const n=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(w("string"==typeof t.token),new D(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r.registerVersion)(c,"3.4.1",void 0),Object(r.registerVersion)(c,"3.4.1","esm2017")}()}).call(e,n("W2nU"))},gZMR:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},xq9A:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var r=n("28tl");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===s?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},zBsV:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return rr}),n.d(e,"b",function(){return sr}),n.d(e,"c",function(){return ir}),n.d(e,"d",function(){return ar}),n.d(e,"e",function(){return or}),n.d(e,"f",function(){return cr}),n.d(e,"g",function(){return ur}),n.d(e,"h",function(){return er}),n.d(e,"i",function(){return nr});var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function v(){this.s=this.s,this.o=this.o}var w={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,h)&&t[h]||(t[h]=++d)}(this);delete w[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function T(t){return Array.prototype.concat.apply([],arguments)}function E(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t){return/^[\s\xa0]*$/.test(t)}var S,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function k(t,e){return t<e?-1:t>e?1:0}t:{var x=a.navigator;if(x){var D=x.userAgent;if(D){S=D;break t}}S=""}function O(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function N(t){const e={};for(const n in t)e[n]=t[n];return e}var R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e])t[n]=r[n];for(let e=0;e<R.length;e++)n=R[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function P(t){return P[" "](t),t}P[" "]=c;var M,F,j=C(S,"Opera"),$=C(S,"Trident")||C(S,"MSIE"),V=C(S,"Edge"),U=V||$,q=C(S,"Gecko")&&!(C(S.toLowerCase(),"webkit")&&!C(S,"Edge"))&&!(C(S,"Trident")||C(S,"MSIE"))&&!C(S,"Edge"),B=C(S.toLowerCase(),"webkit")&&!C(S,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var z="",H=(F=S,q?/rv:([^\);]+)(\)|;)/.exec(F):V?/Edge\/([\d\.]+)/.exec(F):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):B?/WebKit\/(\S+)/.exec(F):j?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(H&&(z=H?H[1]:""),$){var G=K();if(null!=G&&G>parseFloat(z)){M=String(G);break t}}M=z}var W,Q={};function Y(){return t=function(){let t=0;const e=A(String(M)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=k(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||k(0==i[2].length,0==s[2].length)||k(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t},e=Q,Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9);var t,e}if(a.document&&$){var J=K();W=J||(parseInt(M,10)||void 0)}else W=void 0;var X=W,Z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(t){}return t}();function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function et(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{P(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:nt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&et.Z.h.call(this)}}tt.prototype.h=function(){this.defaultPrevented=!0},y(et,tt);var nt={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),it=0;function st(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ot(t){this.src=t,this.g={},this.h=0}function at(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=b(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(st(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ct(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ct(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new function(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++it,this.ca=this.fa=!1}(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),lt={};function ht(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}r=vt(r);return e&&e[rt]?e.O(n,r,l(i)?!!i.capture:!!i,s):dt(e,n,r,!0,i,s)}(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ht(t,e[s],n,r,i);return null}return n=vt(n),t&&t[rt]?t.N(e,n,l(r)?!!r.capture:!!r,i):dt(t,e,n,!1,r,i)}function dt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=gt(t);if(a||(t[ut]=a=new ot(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=mt;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Z||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[rt])at(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gt(e))?(at(n,t),0==n.h&&(n.src=null,e[ut]=null)):st(t)}}}function pt(t){return t in lt?lt[t]:lt[t]="on"+t}function mt(t,e){if(t.ca)t=!0;else{e=new et(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ft(t),t=n.call(r,e)}return t}function gt(t){return(t=t[ut])instanceof ot?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){v.call(this),this.i=new ot(this),this.P=this,this.I=null}function bt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;L(e=new tt(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_t(o,r,!0,e)&&i}if(i=_t(o=e.g=t,r,!0,e)&&i,i=_t(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=_t(o=e.g=n[s],r,!1,e)&&i}function _t(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&at(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(wt,v),wt.prototype[rt]=!0,wt.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);else i=l(i)?!!i.capture:!!i,r=vt(r),e&&e[rt]?(e=e.i,(n=String(n).toString())in e.g&&-1<(r=ct(o=e.g[n],r,i,s))&&(st(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[n],e.h--))):e&&(e=gt(e))&&(n=e.g[n.toString()],e=-1,n&&(e=ct(n,r,i,s)),(r=-1<e?n[e]:null)&&ft(r))}(this,t,e,n,r)},wt.prototype.M=function(){if(wt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)st(n[r]);delete e.g[t],e.h--}}this.I=null},wt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=a.JSON.stringify;function Et(){var t=xt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var It,St=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new class{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}},t=>t.reset());function At(t){a.setTimeout(()=>{throw t},0)}function Ct(t,e){It||function(){var t=a.Promise.resolve(void 0);It=function(){t.then(Dt)}}(),kt||(It(),kt=!0),xt.add(t,e)}var kt=!1,xt=new class{constructor(){this.h=this.g=null}add(t,e){const n=St.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Dt(){for(var t;t=Et();){try{t.h.call(t.g)}catch(t){At(t)}var e=St;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kt=!1}function Ot(t,e){wt.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Nt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Rt(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}y(Ot,wt),(r=Ot.prototype).da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),bt(this,"tick"),this.da&&(Nt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ot.Z.M.call(this),Nt(this),delete this.g};class Lt extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=Rt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(t){v.call(this),this.h=t,this.g={}}y(Pt,v);var Mt=[];function Ft(t,e,n,r){Array.isArray(n)||(n&&(Mt[0]=n.toString()),n=Mt);for(var i=0;i<n.length;i++){var s=ht(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function jt(t){O(t.g,function(t,e){this.g.hasOwnProperty(e)&&ft(t)},t),t.g={}}function $t(){this.g=!0}function Vt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Tt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")})}Pt.prototype.M=function(){Pt.Z.M.call(this),jt(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$t.prototype.Aa=function(){this.g=!1},$t.prototype.info=function(){};var Ut={},qt=null;function Bt(){return qt=qt||new wt}function Kt(t){tt.call(this,Ut.Ma,t)}function zt(t){const e=Bt();bt(e,new Kt(e,t))}function Ht(t,e){tt.call(this,Ut.STAT_EVENT,t),this.stat=e}function Gt(t){const e=Bt();bt(e,new Ht(e,t))}function Wt(t,e){tt.call(this,Ut.Na,t),this.size=e}function Qt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){t()},e)}Ut.Ma="serverreachability",y(Kt,tt),Ut.STAT_EVENT="statevent",y(Ht,tt),Ut.Na="timingevent",y(Wt,tt);var Yt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Jt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xt(){}function Zt(t){return t.h||(t.h=t.i())}function te(){}Xt.prototype.h=null;var ee,ne={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function re(){tt.call(this,"d")}function ie(){tt.call(this,"c")}function se(){}function oe(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Pt(this),this.P=ce,t=U?125:void 0,this.W=new Ot(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ae}function ae(){this.i=null,this.g="",this.h=!1}y(re,tt),y(ie,tt),y(se,Xt),se.prototype.g=function(){return new XMLHttpRequest},se.prototype.i=function(){return{}},ee=new se;var ce=45e3,ue={},le={};function he(t,e,n){t.K=1,t.v=Le(ke(e)),t.s=n,t.U=!0,de(t,null)}function de(t,e){t.F=Date.now(),ge(t),t.A=ke(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ge(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ae,t.g=Wn(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Lt(m(t.Ia,t,t.g),t.O)),Ft(t.V,t.g,"readystatechange",t.gb),e=t.H?N(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),zt(1),function(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}(t.j,t.u,t.A,t.m,t.X,t.s)}function fe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function pe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if((r=me(t,n))==le){4==e&&(t.o=4,Gt(14),i=!1),Vt(t.j,t.m,null,"[Incomplete Response]");break}if(r==ue){t.o=4,Gt(15),Vt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Vt(t.j,t.m,r,null),_e(t,r)}fe(t)&&r!=le&&r!=ue&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Gt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vn(e),e.L=!0,Gt(11))):(Vt(t.j,t.m,n,"[Invalid Chunked Response]"),be(t),we(t))}function me(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?le:(n=Number(e.substring(n,r)),isNaN(n)?ue:(r+=1)+n>e.length?le:(e=e.substr(r,n),t.C=r+n,e))}function ge(t){t.Y=Date.now()+t.P,ye(t,t.P)}function ye(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Qt(m(t.eb,t),e)}function ve(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function we(t){0==t.l.G||t.I||Bn(t.l,t)}function be(t){ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Nt(t.W),jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _e(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||tn(n.i,t)))if(n.I=t.N,!t.J&&tn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;qn(n),On(n)}$n(n),Gt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Qt(m(n.ab,n),6e3));if(1>=Ze(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else zn(n,11)}else if((t.J||n.g==t)&&qn(n),!I(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(en(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Re(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=Gn(r,r.H?r.la:null,r.W),o.J){nn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ve(a),ge(a)),r.g=o}else jn(r);0<n.l.length&&Ln(n)}else"stop"!=u[0]&&"close"!=u[0]||zn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?zn(n,7):Dn(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}zt(4)}catch(t){}}function Te(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)_(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ee(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ee)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ie(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Se(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Se(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Se(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(r=oe.prototype).setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Sn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Sn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||U||this.g&&(this.h.h||this.g.ga()||An(this.g)))){this.I||4!=h||7==e||zt(8==e||0>=d?3:2),ve(this);var n=this.g.ba();this.N=n;e:if(fe(this)){var r=An(this.g);t="";var i=r.length,s=4==Sn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){be(this),we(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Gt(12),be(this),we(this);break t}Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_e(this,n)}this.U?(pe(this,h,o),U&&this.i&&3==h&&(Ft(this.V,this.W,"tick",this.fb),this.W.start())):(Vt(this.j,this.m,o,null),_e(this,o)),4==h&&be(this),this.i&&!this.I&&(4==h?Bn(this.l,this):(this.i=!1,ge(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),be(this),we(this)}}}catch(t){}},r.fb=function(){if(this.g){var t=Sn(this.g),e=this.g.ga();this.C<e.length&&(ve(this),pe(this,t,e),this.i&&4!=t&&ge(this))}},r.cancel=function(){this.I=!0,be(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.K&&(zt(3),Gt(17)),be(this),this.o=2,we(this)):ye(this,this.Y-t)},(r=Ee.prototype).R=function(){Ie(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ie(this),this.g.concat()},r.get=function(t,e){return Se(this.h,t)?this.h[t]:e},r.set=function(t,e){Se(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ae=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ce(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ce){this.g=void 0!==e?e:t.g,xe(this,t.j),this.s=t.s,De(this,t.i),Oe(this,t.m),this.l=t.l,e=t.h;var n=new Be;n.i=e.i,e.g&&(n.g=new Ee(e.g),n.h=e.h),Ne(this,n),this.o=t.o}else t&&(n=String(t).match(Ae))?(this.g=!!e,xe(this,n[1]||"",!0),this.s=Pe(n[2]||""),De(this,n[3]||"",!0),Oe(this,n[4]),this.l=Pe(n[5]||"",!0),Ne(this,n[6]||"",!0),this.o=Pe(n[7]||"")):(this.g=!!e,this.h=new Be(null,this.g))}function ke(t){return new Ce(t)}function xe(t,e,n){t.j=n?Pe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function De(t,e,n){t.i=n?Pe(e,!0):e}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ne(t,e,n){e instanceof Be?(t.h=e,function(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(ze(this,e),Ge(this,n,t))},t)),t.j=e}(t.h,t.g)):(n||(e=Me(e,Ue)),t.h=new Be(e,t.g))}function Re(t,e,n){t.h.set(e,n)}function Le(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Me(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Fe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ce.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Me(e,je,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Me(e,je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Me(n,"/"==n.charAt(0)?Ve:$e,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Me(n,qe)),t.join("")};var je=/[#\/\?@]/g,$e=/[#\?:]/g,Ve=/[#\?]/g,Ue=/[#\?@]/g,qe=/#/g;function Be(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Ee,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function ze(t,e){Ke(t),e=We(t,e),Se(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Se((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ie(t)))}function He(t,e){return Ke(t),e=We(t,e),Se(t.g.h,e)}function Ge(t,e,n){ze(t,e),0<n.length&&(t.i=null,t.g.set(We(t,e),E(n)),t.h+=n.length)}function We(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=Be.prototype).add=function(t,e){Ke(this),this.i=null,t=We(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Ke(this),this.g.forEach(function(n,r){_(n,function(n){t.call(e,n,r,this)},this)},this)},r.T=function(){Ke(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){Ke(this);var e=[];if("string"==typeof t)He(this,t)&&(e=T(e,this.g.get(We(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=T(e,t[n])}return e},r.set=function(t,e){return Ke(this),this.i=null,He(this,t=We(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var Qe=class{constructor(t,e){this.h=t,this.g=e}};function Ye(t){this.l=t||Je,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Je=10;function Xe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ze(t){return t.h?1:t.g?t.g.size:0}function tn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function en(t,e){t.g?t.g.add(e):t.h=e}function nn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function rn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return E(t.i)}function sn(){}function on(t,e,n){const r=n||"";try{Te(t,function(t,n){let i=t;l(t)&&(i=Tt(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function an(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function cn(t){this.l=t.$b||null,this.j=t.ib||!1}function un(t,e){wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye.prototype.cancel=function(){if(this.i=rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(cn,Xt),cn.prototype.g=function(){return new un(this.l,this.j)},cn.prototype.i=function(t){return function(){return t}}({}),y(un,wt);var ln=0;function hn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fn(t)}function fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=un.prototype).open=function(t,e){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,dn(this)),this.readyState=ln},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?dn(this):fn(this),3==this.readyState&&hn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,dn(this))},r.Ta=function(t){this.g&&(this.response=t,dn(this))},r.ha=function(){this.g&&dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(un.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var pn=a.JSON.parse;function mn(t){wt.call(this),this.headers=new Ee,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gn,this.K=this.L=!1}y(mn,wt);var gn="",yn=/^https?$/i,vn=["POST","PUT"];function wn(t){return"content-type"==t.toLowerCase()}function bn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_n(t),En(t)}function _n(t){t.D||(t.D=!0,bt(t,"complete"),bt(t,"error"))}function Tn(t){if(t.h&&void 0!==o&&(!t.C[1]||4!=Sn(t)||2!=t.ba()))if(t.v&&4==Sn(t))Rt(t.Fa,0,t);else if(bt(t,"readystatechange"),4==Sn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(Ae)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!yn.test(i?i.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var c=2<Sn(t)?t.g.statusText:""}catch(t){c=""}t.j=c+" ["+t.ba()+"]",_n(t)}}finally{En(t)}}}function En(t,e){if(t.g){In(t);const n=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||bt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function In(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Sn(t){return t.g?t.g.readyState:0}function An(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Cn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return O(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xn(t){this.za=0,this.l=[],this.h=new $t,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=kn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=kn("baseRetryDelayMs",5e3,t),this.$a=kn("retryDelaySeedMs",1e4,t),this.Ya=kn("forwardChannelMaxRetries",2,t),this.ra=kn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ye(t&&t.concurrentRequestLimit),this.Ca=new function(){this.g=new sn},this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Dn(t){if(Nn(t),3==t.G){var e=t.V++,n=ke(t.F);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),Mn(t,n),(e=new oe(t,t.h,e,void 0)).K=2,e.v=Le(ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Wn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ge(e)}Hn(t)}function On(t){t.g&&(Vn(t),t.g.cancel(),t.g=null)}function Nn(t){On(t),t.u&&(a.clearTimeout(t.u),t.u=null),qn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Rn(t,e){t.l.push(new Qe(t.Za++,e)),3==t.G&&Ln(t)}function Ln(t){Xe(t.i)||t.m||(t.m=!0,Ct(t.Ha,t),t.C=0)}function Pn(t,e){var n;n=e?e.m:t.V++;const r=ke(t.F);Re(r,"SID",t.J),Re(r,"RID",n),Re(r,"AID",t.U),Mn(t,r),t.o&&t.s&&Cn(r,t.o,t.s),n=new oe(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Fn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),en(t.i,n),he(n,r,e)}function Mn(t,e){t.j&&Te({},function(t,n){Re(e,n,t)})}function Fn(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(0>(n-=e))e=Math.max(0,i[o].h-100),s=!1;else try{on(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function jn(t){t.g||t.u||(t.Y=1,Ct(t.Ga,t),t.A=0)}function $n(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Qt(m(t.Ga,t),Kn(t,t.A)),t.A++,!0)}function Vn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function Un(t){t.g=new oe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ke(t.oa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.N?"0":"1"),Re(e,"AID",t.U),Mn(t,e),Re(e,"TYPE","xmlhttp"),t.o&&t.s&&Cn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Le(ke(e)),n.s=null,n.U=!0,de(n,t)}function qn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function Bn(t,e){var n=null;if(t.g==e){qn(t),Vn(t),t.g=null;var r=2}else{if(!tn(t.i,e))return;n=e.D,nn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;bt(r=Bt(),new Wt(r,n,e,i)),Ln(t)}else jn(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Ze(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Qt(m(t.Ha,t,e),Kn(t,t.C)),t.C++,0)))}(t,e)||2==r&&$n(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)}}function Kn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function zn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Ce("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||xe(n,"https"),Le(n)),function(t,e){const n=new $t;if(a.Image){const r=new Image;r.onload=g(an,n,r,"TestLoadImage: loaded",!0,e),r.onerror=g(an,n,r,"TestLoadImage: error",!1,e),r.onabort=g(an,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=g(an,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else Gt(2);t.G=0,t.j&&t.j.va(e),Hn(t),Nn(t)}function Hn(t){t.G=0,t.I=-1,t.j&&(0==rn(t.i).length&&0==t.l.length||(t.i.i.length=0,E(t.l),t.l.length=0),t.j.ua())}function Gn(t,e,n){let r=function(t){return t instanceof Ce?ke(t):new Ce(t,void 0)}(n);if(""!=r.i)e&&De(r,e+"."+r.i),Oe(r,r.m);else{const t=a.location;r=function(t,e,n,r){var i=new Ce(null,void 0);return t&&xe(i,t),e&&De(i,e),n&&Oe(i,n),r&&(i.l=r),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&O(t.aa,function(t,e){Re(r,e,t)}),e=t.D,n=t.sa,e&&n&&Re(r,e,n),Re(r,"VER",t.ma),Mn(t,r),r}function Wn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new mn(new cn({ib:!0})):new mn(t.qa)).L=t.H,e}function Qn(){}function Yn(){if($&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function Jn(t,e){wt.call(this),this.g=new xn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!I(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new tr(this)}function Xn(t){re.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Zn(){ie.call(this),this.status=1}function tr(t){this.g=t}(r=mn.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ee.g(),this.C=this.u?Zt(this.u):Zt(ee),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void bn(this,t)}t=n||"";const i=new Ee(this.headers);r&&Te(r,function(t,e){i.set(e,t)}),r=function(t){t:{var e=wn;const n=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=b(vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,e){this.g.setRequestHeader(e,t)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{In(this),0<this.B&&((this.K=function(t){return $&&Y()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Rt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){bn(this,t)}},r.pa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),En(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Tn(this):this.cb())},r.cb=function(){Tn(this)},r.ba=function(){try{return 2<Sn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=xn.prototype).ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new oe(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?L(s=N(s),this.P):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Fn(this,i,e),Re(n=ke(this.F),"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Mn(this,n),this.o&&s&&Cn(n,this.o,s),en(this.i,i),this.Ra&&Re(n,"TYPE","init"),this.ja?(Re(n,"$req",e),Re(n,"SID","null"),i.$=!0,he(i,n,null)):he(i,n,e),this.G=2}}else 3==this.G&&(t?Pn(this,t):0==this.l.length||Xe(this.i)||Pn(this))},r.Ga=function(){if(this.u=null,Un(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Qt(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Gt(10),On(this),Un(this))},r.ab=function(){null!=this.v&&(this.v=null,On(this),$n(this),Gt(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Gt(2)):(this.h.info("Failed to ping google.com"),Gt(1))},(r=Qn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Yn.prototype.g=function(t,e){return new Jn(t,e)},y(Jn,wt),Jn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ct(m(t.hb,t,e))),Gt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Gn(t,null,t.W),Ln(t)},Jn.prototype.close=function(){Dn(this.g)},Jn.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Rn(this.g,e)}else this.v?((e={}).__data__=Tt(t),Rn(this.g,e)):Rn(this.g,t)},Jn.prototype.M=function(){this.g.j=null,delete this.j,Dn(this.g),delete this.g,Jn.Z.M.call(this)},y(Xn,re),y(Zn,ie),y(tr,Qn),tr.prototype.xa=function(){bt(this.g,"a")},tr.prototype.wa=function(t){bt(this.g,new Xn(t))},tr.prototype.va=function(t){bt(this.g,new Zn(t))},tr.prototype.ua=function(){bt(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Jn.prototype.send=Jn.prototype.u,Jn.prototype.open=Jn.prototype.m,Jn.prototype.close=Jn.prototype.close,Yt.NO_ERROR=0,Yt.TIMEOUT=8,Yt.HTTP_ERROR=6,Jt.COMPLETE="complete",te.EventType=ne,ne.OPEN="a",ne.CLOSE="b",ne.ERROR="c",ne.MESSAGE="d",wt.prototype.listen=wt.prototype.N,mn.prototype.listenOnce=mn.prototype.O,mn.prototype.getLastError=mn.prototype.La,mn.prototype.getLastErrorCode=mn.prototype.Da,mn.prototype.getStatus=mn.prototype.ba,mn.prototype.getResponseJson=mn.prototype.Qa,mn.prototype.getResponseText=mn.prototype.ga,mn.prototype.send=mn.prototype.ea;var er=s.createWebChannelTransport=function(){return new Yn},nr=s.getStatEventTarget=function(){return Bt()},rr=s.ErrorCode=Yt,ir=s.EventType=Jt,sr=s.Event=Ut,or=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ar=s.FetchXmlHttpFactory=cn,cr=s.WebChannel=te,ur=s.XhrIo=mn}).call(e,n("DuR2"))}});
//# sourceMappingURL=vendor.f653b3d8b739a5417368.js.map