(()=>{var e={594:()=>{const e=Telegram.WebApp,t=e.initData,n=e.initDataUnsafe;document.getElementsByName("span-3")[0].innerText=t,document.getElementsByName("span-4")[0].innerText=e.platform,document.getElementsByName("span-5")[0].innerText=n.user.id,document.getElementsByName("span-6")[0].innerText=n.user.first_name},466:()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#nav").querySelectorAll(".nav__item"),t=[];e.forEach((e=>{let t=e.getAttribute("data-nav");document.getElementById(t).className.includes("active")||(document.getElementById(t).style.display="none")})),e.forEach((e=>{t.push(document.getElementById(e.getAttribute("data-nav"))),e.addEventListener("click",(function(n){t.forEach((e=>{e.style.display="none"})),document.getElementById(e.getAttribute("data-nav")).style.display="block"}))})),document.getElementById("play_button").onclick=async function(){try{const e=await fetch("http://localhost:4000/api/users"),t=await e.json();console.log(t)}catch(e){console.error("Error fetching friends:",e)}}}))}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(594),n(466)})()})();