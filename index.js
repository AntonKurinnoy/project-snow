(()=>{var e={594:()=>{let e=window.Telegram.WebApp.initData;document.addEventListener("DOMContentLoaded",(function(){let t=document.getElementById("spinner"),n=document.getElementById("app");t.style.display="block",n.style.display="none",fetch("https://shopopalo-server.loca.lt/start",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({data:e})}).then((function(e){return e.json()})).then((function(e){e.isNewUser&&alert(`Welcome, ${e.data.name}! We're glad to have you here.`),document.getElementById("user-avatar").src=e.data.avatar,document.getElementById("user-name").textContent=e.data.name,document.getElementById("user-wins").textContent=e.data.WIN,document.getElementById("user-losses").textContent=e.data.LOSS,document.getElementById("user-draws").textContent=e.data.DRAW,t.style.display="none",n.style.display="block"})).catch((function(e){alert("Failed to load user data."),t.style.display="block"}))}))},466:()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#nav").querySelectorAll(".nav__item"),t=[];e.forEach((e=>{let t=e.getAttribute("data-nav");document.getElementById(t).className.includes("active")||(document.getElementById(t).style.display="none")})),e.forEach((e=>{t.push(document.getElementById(e.getAttribute("data-nav"))),e.addEventListener("click",(function(n){t.forEach((e=>{e.style.display="none"})),document.getElementById(e.getAttribute("data-nav")).style.display="block"}))})),document.getElementById("play_button").onclick=async function(){console.log("play button is clicked")}}))}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var d=t[a]={exports:{}};return e[a](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(594),n(466)})()})();