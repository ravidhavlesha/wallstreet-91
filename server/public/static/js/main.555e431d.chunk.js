(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,a){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=t(27),i=t(156),m=t(157),s=t(160),u=t(158),E=t(161),g=t(159),d=t(147),h=t(148),f=t(118),v=t(149),b=t(150),p=t(143),O=t(146),S=t(151),T=t(152),_=t(64),C=t.n(_),k=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SOCKET_URL||"https://wallstreet-psi.vercel.app";console.log("ConsoleLog: SOCKET_URL",k);var N=C()(k,{transports:["websocket"]});var w=function(e){var a=e.stock;return l.a.createElement(p.a,{style:{backgroundColor:a.change>=0?"#9de4af":"#fdaab0"}},l.a.createElement(O.a,{component:"th",scope:"row"},a.longName," (",a.scripName,")"),l.a.createElement(O.a,{align:"right"},a.price),l.a.createElement(O.a,{align:"right"},a.change),l.a.createElement(O.a,{align:"right"},a.percentChange),l.a.createElement(O.a,{align:"right"},a.volume),l.a.createElement(O.a,{align:"right"},a.lastTradingTime))},j=Object(d.a)({table:{minWidth:650},tableHead:{fontWeight:"bold"}});var W=function(){var e=j(),a=Object(n.useState)([]),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),m=Object(o.a)(i,2),s=m[0],u=m[1],E=Object(n.useState)(!1),g=Object(o.a)(E,2),d=g[0],_=g[1];return Object(n.useEffect)((function(){var e,a,t=localStorage.getItem("email")||"";return e=t,a=function(e){var a=e.stocks,t=e.socketId;c(a),u(t),_(!0)},N.on("stocks-fetched",(function(e){return a(e)})),setInterval((function(){N.emit("fetch-stocks",{email:e})}),5e3),function(){return N.off("fetch-stocks"),void N.disconnect()}}),[]),r&&r.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Session ID: ",s||""),l.a.createElement(h.a,{component:f.a},l.a.createElement(v.a,{className:e.table,size:"small"},l.a.createElement(b.a,null,l.a.createElement(p.a,null,l.a.createElement(O.a,{className:e.tableHead},"Company"),l.a.createElement(O.a,{className:e.tableHead,align:"right"},"Price"),l.a.createElement(O.a,{className:e.tableHead,align:"right"},"Change"),l.a.createElement(O.a,{className:e.tableHead,align:"right"},"Percent Change"),l.a.createElement(O.a,{className:e.tableHead,align:"right"},"Volume"),l.a.createElement(O.a,{className:e.tableHead,align:"right"},"Last Trading Time"))),l.a.createElement(S.a,null,r.map((function(e,a){return l.a.createElement(w,{key:a,stock:e})})))))):d?l.a.createElement("h4",null,"No stocks found for this email"):l.a.createElement(T.a,null)},H=t(153),L=t(154),P=t(155),y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).APP_NAME||"Wallstreet91";var D=function(){return l.a.createElement(H.a,{position:"static"},l.a.createElement(L.a,null,l.a.createElement(P.a,{variant:"h6"},y)))};var I=function(){var e=Object(n.useState)(!!localStorage.getItem("email")),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(D,null),l.a.createElement(m.a,null,l.a.createElement(s.a,{marginTop:5,marginBottom:5},t?l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null),l.a.createElement(u.a,{style:{marginTop:"2em",marginBottom:"2em"}}),l.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){delete localStorage.email,window.location.reload()}},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{id:"email",placeholder:"Email",fullWidth:!0,margin:"normal",required:!0}),l.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){localStorage.email=document.getElementById("email").value,r(!0)}},"Login")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){e.exports=t(116)}},[[77,1,2]]]);
//# sourceMappingURL=main.555e431d.chunk.js.map