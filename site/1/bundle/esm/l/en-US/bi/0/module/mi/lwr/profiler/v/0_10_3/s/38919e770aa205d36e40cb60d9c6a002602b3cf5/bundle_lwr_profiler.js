function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(n){g(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function g(t,e,r){return e=O(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=v(t,"string");return typeof e=="symbol"?e:String(e)}function v(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var f=function(t){return t[t.Start=0]="Start",t[t.End=1]="End",t}(f||{});let a;function j(t){a=t}const o=globalThis.performance,l=typeof o!="undefined"&&typeof o.mark=="function"&&typeof o.clearMarks=="function"&&typeof o.measure=="function"&&typeof o.clearMeasures=="function";function s(t,e){return e?`${t}-${e}`:t}function m(t,e,r){const n=s(t,e);return e&&r?`${n}_${r}`:n}function p(t,e){const r=t||e?b({},e):null;return r&&t&&(r.specifier=t),r}function P({id:t,specifier:e,specifierIndex:r,metadata:n}){if(a){a({id:t,phase:f.Start,specifier:e,metadata:n});return}if(l){const u=m(t,e,r),c=p(e,n);o.mark(u,{detail:c})}}function S({id:t,specifier:e,specifierIndex:r,metadata:n}){if(a)a({id:t,phase:f.End,specifier:e,metadata:n});else if(l){const u=m(t,e,r),c=s(t,e),y=p(e,n);o.measure(c,{start:u,detail:y}),o.clearMarks(u),o.clearMeasures(c)}}export{j as attachDispatcher,S as logOperationEnd,P as logOperationStart};