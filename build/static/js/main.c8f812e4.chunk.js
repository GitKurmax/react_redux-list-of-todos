(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),l=(n(25),n(4)),u=n(17),c=n(5),s="remove_item",m="load_data",d="display",f="sort";function p(){return function(e){e({type:m});var t={};["todos","users"].forEach(function(n){var r=new XMLHttpRequest;r.open("GET","https://jsonplaceholder.typicode.com/".concat(n)),r.addEventListener("load",function(){if(t[n]=JSON.parse(r.response),t.todos&&t.users){var a=[],o=!0,i=!1,l=void 0;try{for(var u,c=function(){var e=u.value,n={};n.completed=e.completed?"completed":"not completed";var r=t.users.find(function(t){return t.id===e.userId});n.id=e.id,n.title=e.title,n.author=r.name,n.email=r.email,a.push(n)},s=t.todos[Symbol.iterator]();!(o=(u=s.next()).done);o=!0)c()}catch(m){i=!0,l=m}finally{try{o||null==s.return||s.return()}finally{if(i)throw l}}e(function(e){return{type:d,data:e}}(a))}}),r.send()})}}var h={items:null,requested:!1};var v=n(3),b=n(13),E=n(14),y=n(18),w=n(15),j=n(19);var O=function(e){return a.a.createElement("td",null,a.a.createElement("a",{href:"mailto:"+e.email},e.name))};var g=function(e){return a.a.createElement("tr",{key:1},a.a.createElement("td",null,e.id),a.a.createElement("td",null,e.title),a.a.createElement(O,{name:e.author,email:e.email}),a.a.createElement("td",null,e.completed,a.a.createElement("button",{onClick:function(){return e.removeItem(e.id)}},"remove")))};var k=Object(v.b)(function(e,t){return{id:t.item.id,title:t.item.title,author:t.item.author,email:t.item.email,completed:t.item.completed}},function(e){return{removeItem:function(t){return e(function(e){return{type:s,id:e}}(t))}}})(g),C=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;if(this.props.requested){if(this.props.items){var t=[],n=!0,r=!1,o=void 0;try{for(var i,l=this.props.items[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var u=i.value;t.push(a.a.createElement(k,{key:u.id,item:u}))}}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a.a.createElement("table",{className:"table"},a.a.createElement("thead",null,a.a.createElement("tr",{onClick:function(t){return e.props.sort(t.target.innerText)}},a.a.createElement("th",null,"id"),a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Author"),a.a.createElement("th",null,"Completed"))),a.a.createElement("tbody",null,t))}return"Loading..."}return a.a.createElement("button",{onClick:this.props.getData},"Load")}}]),t}(a.a.Component);var q=Object(v.b)(function(e){return{items:e.items,requested:e.requested}},function(e){return{getData:function(){return e(p())},sort:function(t){return e({type:f,data:t})}}})(C),L=n(16),x=Object(l.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)({},e,{items:e.items.filter(function(e,n){return t.id!==e.id})});case m:return Object(c.a)({},e,{requested:!0});case d:return Object(c.a)({},e,{items:t.data});case f:var n=Object(u.a)(e.items);return"Title"===t.data||"Author"===t.data||"Completed"===t.data?n.sort(function(e,n){return e[t.data.toLowerCase()].localeCompare(n[t.data.toLowerCase()])}):n.sort(function(e,t){return e.id-t.id}),Object(c.a)({},e,{items:n});default:return e}},Object(l.a)(L.a));var I=function(){return a.a.createElement(v.a,{store:x},a.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.c8f812e4.chunk.js.map