if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const c=e=>s(e,d),o={module:{uri:d},exports:r,require:c};i[d]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(t(...e),r)))}}define(["https://img-tama-guru.oss-cn-hongkong.aliyuncs.com/monitor/workbox-c11f15a2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://img-tama-guru.oss-cn-hongkong.aliyuncs.com/monitor/assets/index-89a99588.css",revision:null},{url:"https://img-tama-guru.oss-cn-hongkong.aliyuncs.com/monitor/assets/index-a3978e79.js",revision:null},{url:"index.html",revision:"edd6503cc85d9e5e27dda25cdf52e17d"},{url:"https://tamakyi.github.io/statusv2/registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"https://tamakyi.github.io/statusv2/favicon.png",revision:"e66ede46bda335165acfc55b6ed16ece"},{url:"https://tamakyi.github.io/statusv2/manifest.webmanifest",revision:"7db7838d325d1c1d82de8df7d287e9f7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new e.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
