(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,a){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=t(27),i=t(156),m=t(157),s=t(160),u=t(158),g=t(161),E=t(159),d=t(147),h=t(148),f=t(118),b=t(149),p=t(150),v=t(143),S=t(146),k=t(151),O=t(152),w=t(64),C=t.n(w),N="https://thawing-springs-77530.herokuapp.com";console.log("ConsoleLog: SOCKET_URL",N);var T=C()(N,{transports:["websocket"]});var j=function(e){var a=e.stock;return l.a.createElement(v.a,{style:{backgroundColor:a.change>=0?"#9de4af":"#fdaab0"}},l.a.createElement(S.a,{component:"th",scope:"row"},a.longName," (",a.scripName,")"),l.a.createElement(S.a,{align:"right"},a.price),l.a.createElement(S.a,{align:"right"},a.change),l.a.createElement(S.a,{align:"right"},a.percentChange),l.a.createElement(S.a,{align:"right"},a.volume),l.a.createElement(S.a,{align:"right"},a.lastTradingTime))},_=Object(d.a)({table:{minWidth:650},tableHead:{fontWeight:"bold"}});var y=function(){var e=_(),a=Object(n.useState)([]),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),m=Object(o.a)(i,2),s=m[0],u=m[1],g=Object(n.useState)(!1),E=Object(o.a)(g,2),d=E[0],w=E[1];return Object(n.useEffect)((function(){var e,a,t=localStorage.getItem("email")||"";return e=t,a=function(e){var a=e.stocks,t=e.socketId;c(a),u(t),w(!0)},T.on("stocks-fetched",(function(e){return a(e)})),setInterval((function(){T.emit("fetch-stocks",{email:e})}),5e3),function(){return T.off("fetch-stocks"),void T.disconnect()}}),[]),r&&r.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Session ID: ",s||""),l.a.createElement(h.a,{component:f.a},l.a.createElement(b.a,{className:e.table,size:"small"},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(S.a,{className:e.tableHead},"Company"),l.a.createElement(S.a,{className:e.tableHead,align:"right"},"Price"),l.a.createElement(S.a,{className:e.tableHead,align:"right"},"Change"),l.a.createElement(S.a,{className:e.tableHead,align:"right"},"Percent Change"),l.a.createElement(S.a,{className:e.tableHead,align:"right"},"Volume"),l.a.createElement(S.a,{className:e.tableHead,align:"right"},"Last Trading Time"))),l.a.createElement(k.a,null,r.map((function(e,a){return l.a.createElement(j,{key:a,stock:e})})))))):d?l.a.createElement("h4",null,"No stocks found for this email"):l.a.createElement(O.a,null)},H=t(153),W=t(154),I=t(155),P=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).APP_NAME||"Wallstreet91";var B=function(){return l.a.createElement(H.a,{position:"static"},l.a.createElement(W.a,null,l.a.createElement(I.a,{variant:"h6"},P)))};var D=function(){var e=Object(n.useState)(!!localStorage.getItem("email")),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(B,null),l.a.createElement(m.a,null,l.a.createElement(s.a,{marginTop:5,marginBottom:5},t?l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(u.a,{style:{marginTop:"2em",marginBottom:"2em"}}),l.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){delete localStorage.email,window.location.reload()}},"Reset Email")):l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{id:"email",placeholder:"Email",fullWidth:!0,margin:"normal",required:!0}),l.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){localStorage.email=document.getElementById("email").value,r(!0)}},"Start")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){e.exports=t(116)}},[[77,1,2]]]);
//# sourceMappingURL=main.3569df31.chunk.js.map