(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(t,n,e){t.exports=e(29)},22:function(t,n,e){},28:function(t,n,e){},29:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(9),i=e.n(o),c=(e(22),e(13)),l=e(1),u=e(14),f=e(12),m=e(2);function h(){var t=Object(l.a)(["\n\t/* background: black; */\n"]);return h=function(){return t},t}var s=m.a.circle(h()),d=function(t){var n=Object(a.useRef)(null);Object(a.useEffect)((function(){o(n.current)}),[]);var e=function(t,n){return Math.floor(Math.random()*(n+1-t))+t},o=function t(n){f.TweenLite.to(n,6*Math.random(),{x:300*Math.random(),y:300*Math.random(),onComplete:t,onCompleteParams:[n]})};return r.a.createElement(s,{ref:n,cx:e(0,window.innerWidth/2),cy:e(0,window.innerHeight/2),r:e(25,100),fill:"black"})};function p(){var t=Object(l.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n"]);return p=function(){return t},t}function g(){var t=Object(l.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: white;\n\tfilter: blur(5px) contrast(100);\n"]);return g=function(){return t},t}var v=m.a.svg(g()),b=m.a.svg(p()),E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(b,null,Object(u.a)(new Array(40)).map((function(t){return r.a.createElement(d,null)}))),r.a.createElement("filter",{id:"high-contrast-filter"},r.a.createElement("feColorMatrix",{type:"saturate",values:"0",result:"desat"}),r.a.createElement("feComponentTransfer",null,r.a.createElement("feFuncR",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1"}),r.a.createElement("feFuncG",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1"}),r.a.createElement("feFuncB",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1"})))))};function w(){var t=Object(l.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    margin-bottom: 0;\n\n    h1 {\n        mix-blend-mode: difference;\n        position: absolute;\n        top: 100px;\n        color: #fff;\n        z-index:111;\n        font-size: 126px;\n        line-height: 60px;\n        display: ",";\n    }\n"]);return w=function(){return t},t}var x=m.a.section(w(),(function(t){return t.isActive?"none":"block"})),y=function(t){return r.a.createElement(x,t,r.a.createElement("h1",null,"Charmaine Wang"),r.a.createElement(E,null))};function k(){var t=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    height: 100vh;\n    width: 100vw;\n    margin-bottom: 0;\n    background-color: #0000ff;\n      a {\n        text-decoration: none;\n      }\n\n      h1 {\n        font-size: 96px;\n        margin: 0;\n        /* color: #0000FF; */\n        color: #fff\n      }\n"]);return k=function(){return t},t}var C=m.a.div(k()),j=function(){return r.a.createElement(C,null,r.a.createElement("a",{href:"https://github.com/Charmaine-wang/Fuzzy-memory"},r.a.createElement("h1",null,"Fuzzy Memory.")),r.a.createElement("a",{href:"https://github.com/Charmaine-wang/photoify"},r.a.createElement("h1",null,"Photoify.")),r.a.createElement("a",{href:"https://github.com/Charmaine-wang/webshop"},r.a.createElement("h1",null,"E Commerce.")),r.a.createElement("a",{href:"https://github.com/Charmaine-wang/SGN-frontend"},r.a.createElement("h1",null,"Sgn.")),r.a.createElement("a",{href:"https://github.com/Charmaine-wang/gameover"},r.a.createElement("h1",null,"Game Over.")),r.a.createElement("a",{href:"https://github.com/Charmaine-wang/klearning"},r.a.createElement("h1",null,"Kultur Akademin.")),r.a.createElement("a",{href:"https://github.com/Charmaine-wang/workout"},r.a.createElement("h1",null,"Workout.")))};function O(){var t=Object(l.a)(["\n\tdisplay: ",";\n\twidth: 90vw;\n\theight: 90vh;\n\ttransform: translateX(5.5%);\n\tposition: fixed;\n\tz-index: 2;\n\ttop: 5%;\n\tflex-direction: column;\n\tbackground: #0000ff;\n\tanimation: fade-in 0.2s ease-in-out;\n\n\th2 {\n\t\tfont-size: 96px;\n\t\tmargin: 0;\n\t\tcolor: #fff;\n\t}\n\n\tp {\n\t\tfont-size: 46px;\n\t\tmargin: 0;\n\t\tcolor: #fff;\n\t}\n\n\t@keyframes fade-in {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n"]);return O=function(){return t},t}var z=m.a.div(O(),(function(t){return t.isActive?"flex":"none"})),M=function(t){return r.a.createElement(z,t,r.a.createElement("p",null,"My name is Charmaine. Web developer studying at Yrgo Gothenburg, Sweden."))};e(28);function F(){var t=Object(l.a)(["\n\ttop: 100%;\n\tz-index: 999;\n\tright: 0;\n\tmargin: 0 10px;\n\t/* justify-content: center; */\n\tposition: fixed;\n\ttext-align: center;\n\ttransform: rotate(90deg);\n\twhite-space: nowrap;\n\th3 {\n\t\tpadding: 2px 4px;\n\t\tmargin: 0;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tbackground-color: #0000ff;\n\t\tcolor: #fff;\n\t}\n"]);return F=function(){return t},t}var A=m.a.div(F());var W=function(){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),e=n[0],o=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(A,{onClick:function(){return o(!e)}},r.a.createElement("h3",null,"Web developer")),r.a.createElement(M,{isActive:e}),r.a.createElement(y,{isActive:e}),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.78527ced.chunk.js.map