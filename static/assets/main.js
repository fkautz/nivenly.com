!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){function n(){return window.matchMedia(a).matches}function o(){d&&d.classList.toggle("hidden",!n()),r&&r.classList.toggle("hidden",n()),c&&c.classList.toggle("hidden",!n())}var i=document.querySelector(".container"),r=document.querySelector(".menu"),d=document.querySelector(".menu-trigger"),l=(document.querySelector(".menu__inner--desktop"),document.querySelector(".menu__sub-inner-more-trigger")),c=document.querySelector(".menu__sub-inner-more"),a=getComputedStyle(document.body).getPropertyValue("--phoneWidth");r&&r.addEventListener("click",function(e){return e.stopPropagation()}),c&&c.addEventListener("click",function(e){return e.stopPropagation()}),o(),document.body.addEventListener("click",function(){n()||!c||c.classList.contains("hidden")?n()&&!r.classList.contains("hidden")&&r.classList.add("hidden"):c.classList.add("hidden")}),window.addEventListener("resize",o),d&&d.addEventListener("click",function(e){e.stopPropagation(),r&&r.classList.toggle("hidden")}),l&&l.addEventListener("click",function(e){e.stopPropagation(),c&&c.classList.toggle("hidden"),c&&c.getBoundingClientRect().right>i.getBoundingClientRect().right&&(c.style.left="auto",c.style.right=0)})},function(e,t){var n=window.localStorage&&window.localStorage.getItem("theme"),o=document.querySelector(".theme-toggle"),i="dark"===n;null!==n&&document.body.classList.toggle("dark-theme",i),o.addEventListener("click",function(){document.body.classList.toggle("dark-theme"),window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light")});var r=window.localStorage&&window.localStorage.getItem("toggleL"),d=document.querySelector(".sidebar-toggle-right"),l=document.getElementById("magicSidebarLeft"),c="true"===r;null!==r&&l.classList.toggle("hidden",c),d.addEventListener("click",function(){l.classList.toggle("hidden"),window.localStorage&&window.localStorage.setItem("toggleL",l.classList.contains("hidden")?"true":"false")});var a=window.localStorage&&window.localStorage.getItem("toggleR"),s=document.querySelector(".sidebar-toggle-right"),u=document.getElementById("magicSidebarRight"),g="true"===a;null!==a&&u.classList.toggle("hidden",g),s.addEventListener("click",function(){u.classList.toggle("hidden"),window.localStorage&&window.localStorage.setItem("toggleR",u.classList.contains("hidden")?"true":"false")})}]);

