(()=>{var e={594:()=>{const e=window.Telegram.WebApp;document.getElementsByName("span-4")[0].innerText=e.WebAppUser.id},466:()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#nav").querySelectorAll(".nav__item"),t=[];e.forEach((e=>{let t=e.getAttribute("data-nav");document.getElementById(t).className.includes("active")||(document.getElementById(t).style.display="none")})),e.forEach((e=>{t.push(document.getElementById(e.getAttribute("data-nav"))),e.addEventListener("click",(function(n){t.forEach((e=>{e.style.display="none"})),document.getElementById(e.getAttribute("data-nav")).style.display="block"}))})),document.getElementById("play_button").onclick=async function(){try{const e=await fetch("http://localhost:4000/api/users"),t=await e.json();console.log(t)}catch(e){console.error("Error fetching friends:",e)}}}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(594),n(466)})()})();