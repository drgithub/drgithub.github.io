(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},22:function(e,t,n){var a={"./ceb/":23,"./en/":24,"./tl/":25};function c(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id=22},23:function(e,t,n){"use strict";n.r(t),n.d(t,"get",function(){return a});var a={home:"balay",back:"balik",ok:"gi",cancel:"aylang"}},24:function(e,t,n){"use strict";n.r(t),n.d(t,"get",function(){return a});var a={home:"home",back:"back",ok:"ok",cancel:"cancel"}},25:function(e,t,n){"use strict";n.r(t),n.d(t,"get",function(){return a});var a={home:"bahay",back:"balik",ok:"sige",cancel:"huwag"}},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l,u,s,m,p=n(31),f=n(32),h=n(5),d=n(6),E=n(10),b=n(7),v=n(11),O=n(33),g={en:function(){return{code:"en",name:"English",active:!0}},ceb:function(){return{code:"ceb",name:"Cebuano",active:!0}},tl:function(){return{code:"tl",name:"Tagalog",active:!0}},es:function(){return{code:"es",name:"Spanish",active:!1}},de:function(){return{code:"de",name:"German",active:!1}},cn:function(){return{code:"cn",name:"Chinese",active:!1}},jpn:function(){return{code:"jpn",name:"Japanese",active:!1}},kor:function(){return{code:"kor",name:"Korean",active:!1}}},k=function(e){e,s=e.location.pathname,m=e.location.search},j=function(e,t){var n=e;return t&&Object.entries(t).forEach(function(e){n=n.replace(":".concat(e[0]),"".concat(e[1]))}),u+n},w=function(e){return j("/blog",e)},y=function(e){return j("/about",e)},T=function(e){return j("/contact",e)},C=function(e){return j("/admin",e)},L=function(e){return j("/",e)},N=function(e){var t=s.split("/");t[1].length<=3&&(t[1]=t[1].replace("".concat(i.code),""),"/"!==s&&u!=="".concat("/portfolio")&&t.shift());var n=e&&"/".concat(e.code)||"";return"".concat(n).concat(t.join("/")).concat(m&&m||"")},A=n(30),U=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sample"},"Welcome to Dino's Blog",c.a.createElement(A.a,{to:L(),replace:!0},"HOME"),c.a.createElement(A.a,{to:y(),replace:!0},"ABOUT ME"),c.a.createElement(A.a,{to:T(),replace:!0},"CONTACT ME"),c.a.createElement(A.a,{to:w(),replace:!0},"BLOG"),c.a.createElement(A.a,{to:N(g.en()),replace:!0},"ENGLISH"),c.a.createElement(A.a,{to:N(g.ceb()),replace:!0},"CEBUANO"),c.a.createElement(A.a,{to:N(g.tl()),replace:!0},"TAGALOG"),c.a.createElement(A.a,{to:N(),replace:!0},"DEFAULT"),c.a.createElement("br",null),l.home,c.a.createElement("br",null),l.ok,c.a.createElement("br",null),l.cancel,c.a.createElement("br",null),l.back,this.props.children)}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(E.a)(this,Object(b.a)(t).call(this,e))).updateLocale(),n.state={changes:!0},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props.match.url.split("/")[2],n=e.match.url.split("/")[2],a=t.length>3?"":t;a!==(n.length>3?"":n)?(console.log("Updating Locale to",""===a?"default":a),this.updateLocale()):k(this.props.history),this.setState({changes:!this.state.changes})}}},{key:"updateLocale",value:function(){!function(e){var t=Object.entries(g).find(function(e){return e[1]().active}),a=Object.entries(g).find(function(t){return t[1]().code===e&&t[1]().active}),c=a&&a[1]()||t&&t[1](),o=c&&c.code;i=Object.assign({},c),l=Object.assign({},n(22)("./"+(c&&c.code)+"/").get),u=e===o?"".concat("/portfolio","/").concat(o):"".concat("/portfolio")}(this.props.match.params.lang),k(this.props.history)}},{key:"render",value:function(){return console.log(this.props.history,L()),c.a.createElement(O.a,null,c.a.createElement(f.a,{path:y(),component:function(){return c.a.createElement(U,null,"ABOUT ",l.back)}}),c.a.createElement(f.a,{path:T(),component:function(){return c.a.createElement(U,null,"CONTACT ",l.home)}}),c.a.createElement(f.a,{path:w(),component:function(){return c.a.createElement(U,null,"BLOG ",l.ok)}}),c.a.createElement(f.a,{path:C(),component:function(){return c.a.createElement(U,null,"ADMIN ",l.home)}}),c.a.createElement(f.a,{exact:!0,path:L(),component:function(){return c.a.createElement(U,null,"HOME ",l.cancel)}}),c.a.createElement(f.a,{render:function(){return c.a.createElement("p",null,"NOT FOUND")}}))}}]),t}(a.Component);r.a.render(c.a.createElement(p.a,{basename:"/portfolio"},c.a.createElement(f.a,{path:"/:lang?",render:function(e){return c.a.createElement(B,e)}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.6a41e984.chunk.js.map