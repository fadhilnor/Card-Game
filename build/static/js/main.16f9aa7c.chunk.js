(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(14),n(4)),u=n(5),s=n(7),i=n(6),m=n(8),v=n(1),b=function(){var e=["A","2","3","4","5","6","7","8","9","X","J","Q","K"],t=["D","H","S","C"],n=Object(a.useState)([]),c=Object(v.a)(n,2),l=c[0],o=c[1],u=Object(a.useState)(1),s=Object(v.a)(u,2),i=s[0],b=s[1],f=Object(a.useState)({}),h=Object(v.a)(f,2),p=h[0],d=h[1],E=Object(a.useState)(!1),g=Object(v.a)(E,2),j=g[0],O=g[1];Object(a.useEffect)((function(){!function(){for(var n=[],a=0;a<t.length;a++)for(var r=0;r<e.length;r++){var c=t[a]+"-"+e[r];n.push(c)}o(n)}()}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Card Game Generator"),r.a.createElement("p",null,"Enter number of players:"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return function(e){isNaN(e)?b(e):b(parseInt(e))}(e.target.value)}}),r.a.createElement("button",{onClick:function(){O(!1);var e=(i>52&&O(!0),i<1?{success:!1,msg:"Please enter at least 1 player"}:Number.isInteger(i)?{success:!0,msg:""}:{success:!1,msg:"Input value does not exist or value is invalid"});e.success?(l.sort((function(){return.5-Math.random()})),d(Object(m.a)({},function(e){for(var t,n=[],a=0,r=i;a<52;)t=Math.ceil((52-a)/r--),n.push(e.slice(a,a+=t));return n}(l)))):(d({}),alert(e.msg))}},"Serve"),r.a.createElement("p",null),r.a.createElement("div",null,Object.keys(p).map((function(e,t){return r.a.createElement("div",{key:t},"Player ",t+1,": ",p[e].toString())})),r.a.createElement("p",null),j&&i>53&&r.a.createElement("div",null,"Player 53 until ",i," has no available cards."),j&&53===i&&r.a.createElement("div",null,"Player 53 has no available cards.")))},f=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b,null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.16f9aa7c.chunk.js.map