(this["webpackJsonpmy-watchlist"]=this["webpackJsonpmy-watchlist"]||[]).push([[0],{41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(15),c=n.n(r),a=(n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(34),d=n(3),h=n(13),u=n(8),p=n(9),b=n(19),f=n(10),g=n(36),w=(n(14),function(e){var t=localStorage.getItem(e);return JSON.parse(t)}),m=function(e,t){localStorage.setItem(e,JSON.stringify(t))},v=new(Object(p.a)((function e(){var t=this;Object(u.a)(this,e),this.get=function(e){return e.method="get",t.request(e)},this.post=function(e){return e.method="post",t.request(e)},this.delete=function(e){return e.method="delete",t.request(e)},this.request=function(e){e.url;var t="get";return e.method||(e.method=t),new Promise((function(t,n){var i=e.url,o=Object.assign({},e);delete o.url,o.data&&delete o.data,o.headers||(o.headers={}),o.headers["Content-Type"]="application/x-www-form-urlencoded",fetch(i,o).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return console.error(e),n({message:"Request Failed - "+e})}))}))},this.request=this.request.bind(this)}))),j=n(31).a.div.withConfig({displayName:"style__DashboardContainer",componentId:"sc-1pyb9bd-0"})(["padding:50px 15px;.title{font-size:32px;font-weight:500;letter-spacing:1.62px;margin-bottom:30px;text-align:center;img{display:inline-block;}}.table-container{background-color:rgb(48,48,60);max-width:400px;margin:auto;padding:20px;font-size:18px;}table{width:100%;text-align:left;border-collapse:collapse;color:rgba(230,235,255,0.7);tr{&:not(:last-child){border-bottom:1px solid rgba(230,235,255,0.7);}}th,td{padding:16px 2px;}a,.fa-minus{transition:color 0.2s ease;&:hover{color:white;}}.fa-minus{cursor:pointer;}}.fa-sync{cursor:pointer;font-size:18px;color:rgba(230,235,255,0.7);transition:color 0.2s ease;&:hover{color:white;}}select{color:black;width:100%;}.react-select__control{background:#23232CB3;border:1px solid transparent;border-radius:2px;box-shadow:none;min-height:40px;cursor:pointer;color:#E6EBFFB3;&:hover{border-color:transparent;background:#23232C;}}.react-select__single-value{color:inherit;}.react-select__input{color:white !important;}.react-select__placeholder{color:inherit;}.react-select__indicator{color:inherit;&:hover{color:inherit;}}.react-select__clear-indicator{> svg{height:16px;width:16px;}}.react-select__indicator-separator{display:none;}"]),x=n.p+"static/media/binance-logo.428d8599.svg",O=n(35),y=n(2),k={BTCUSDT:{base:"BTC",quote:"USDT"},API3USDT:{base:"ETH",quote:"USDT"}},S=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={watchlist:w("watchlist")||k,prices:{},symbols:[]},i.onAdd=i.onAdd.bind(Object(b.a)(i)),i}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.get({url:"https://api.binance.com/api/v3/ticker/24hr"}).then((function(t){var n=e.state.prices;t.forEach((function(e){n[e.symbol]={price:+e.lastPrice,percent:+e.priceChangePercent}})),e.setState({prices:n})})),this.ws=new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr"),this.ws.onmessage=function(t){var n=e.state.prices;JSON.parse(t.data).forEach((function(e){var t=+e.c;n[e.s]={price:t,percent:+e.P}})),e.setState({prices:n})},v.get({url:"https://api.binance.com/api/v1/exchangeInfo"}).then((function(t){e.setState({symbols:t.symbols.filter((function(e){return"TRADING"===e.status&&["USDT","AUD"].includes(e.quoteAsset)}))})}))}},{key:"componentWillUnmount",value:function(){this.ws&&this.ws.close()}},{key:"onAdd",value:function(e){var t=this.state,n=t.watchlist,i=t.symbols[e];n[i.symbol]={base:i.baseAsset,quote:i.quoteAsset},this.setState({watchlist:n}),m("watchlist",n)}},{key:"onRemove",value:function(e){var t=this;return function(){var n=t.state.watchlist;delete n[e],t.setState({watchlist:n}),m("watchlist",n)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.watchlist,i=t.prices,o=t.symbols;return Object(y.jsxs)(j,{children:[Object(y.jsxs)("div",{className:"title",children:[Object(y.jsx)("div",{style:{marginBottom:8},children:"My Watchlist"}),Object(y.jsx)("img",{src:x,style:{width:120},alt:"Binance Logo"})]}),Object(y.jsx)("div",{className:"table-container",children:Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object.keys(n).map((function(t){var o,r=n[t];return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{width:"35%",children:Object(y.jsxs)("a",{href:"https://www.binance.com/en/trade/".concat(r.base,"_").concat(r.quote),target:"_blank",rel:"noreferrer",children:[r.base,Object(y.jsxs)("span",{style:{fontWeight:400,fontSize:13},children:[" / ",r.quote]})]})}),Object(y.jsx)("td",{width:"30%",style:{textAlign:"right",fontWeight:500},children:null===(o=i[t])||void 0===o?void 0:o.price}),Object(y.jsx)("td",{width:"30%",style:{textAlign:"right",padding:"0 2px"},children:i[t]&&Object(y.jsxs)("div",{style:{background:i[t].percent<0?"#e35e5e":"#2ead65",color:"white",textAlign:"center",padding:"4px 0",width:70,borderRadius:4,fontSize:14,fontWeight:500,display:"inline-block"},children:[i[t].percent>0&&"+",i[t].percent.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})}),Object(y.jsx)("td",{width:"5%",style:{paddingLeft:8},children:Object(y.jsx)("i",{className:"fa fa-minus",onClick:e.onRemove(t)})})]},t)})),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:4,children:Object(y.jsx)(O.a,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"Search...",styles:A,value:null,onChange:function(t){e.onAdd(t.value)},options:o.map((function(e,t){return{value:t,label:"".concat(e.baseAsset,"/").concat(e.quoteAsset)}}))})})})]})})}),Object(y.jsx)("div",{className:"flex-center",style:{marginTop:32},children:Object(y.jsx)("i",{onClick:function(){return window.location.reload()},className:"fa fa-sync"})})]})}}]),n}(i.Component),A={menu:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{background:"#3E404D"})},menuList:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{padding:"4px"})},option:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{height:32,lineHeight:"32px",background:t.isSelected||t.isFocused?"#30303C":"unset",padding:"0 12px",cursor:"pointer",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis","&:hover":{background:"#30303C"}})}},_=function(e){return Object(y.jsx)(l.a,{children:Object(y.jsx)(d.c,{children:Object(y.jsx)(d.a,{path:"/",component:S})})})};c.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");a?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}({onUpdate:function(e){var t=e.waiting;t&&(t.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})),t.postMessage({type:"SKIP_WAITING"}))}})}},[[67,1,2]]]);
//# sourceMappingURL=main.a3510be8.chunk.js.map