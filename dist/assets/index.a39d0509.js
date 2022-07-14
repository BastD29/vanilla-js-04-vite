const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};u();class a extends HTMLElement{constructor(){super(),this.innerHTML=`
            <button>Clicks : ${s}</button>
        `;let n=this.querySelector("button");n.onclick=()=>{n.innerHTML="Clicks : "+ ++s}}}var s=0;customElements.define("click-counter",a);const d=()=>`
    <h1>Home</h1>
    <p>Simple click counter</p>
    <click-counter></click-counter>
`,p=()=>`
    <h1>About</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
`,f=()=>`
    <h1>Contact</h1>
    <p>Consectetur in vitae totam nulla reprehenderit est earum debitis quam laboriosam.</p>
`,m={"/":{title:"Home",render:d},"/about":{title:"About",render:p},"/contact":{title:"Contact",render:f}};function r(){let o=m[location.pathname];o?(document.title=o.title,app.innerHTML=o.render()):(history.replaceState("","","/"),r())}window.addEventListener("click",o=>{o.target.matches("[data-link]")&&(o.preventDefault(),history.pushState("","",o.target.href),r())});window.addEventListener("popstate",r);window.addEventListener("DOMContentLoaded",r);
