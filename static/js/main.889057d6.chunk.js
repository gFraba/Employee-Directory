(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(15),r=c.n(n),i=c(6),a=c.n(i),l=c(18),o=c(16),j=c(19),d=c(17),b=c.n(d),u=c(0);var h=function(e){return Object(u.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var m=function(e){return Object(u.jsx)(h,{children:Object(u.jsxs)("table",{className:"table table-striped mt-2",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{style:{fontStyle:"italic"},children:[Object(u.jsx)("th",{scope:"col"}),Object(u.jsxs)("th",{scope:"col",children:["Name",Object(u.jsx)("button",{style:{border:0,background:"white"},onClick:e.sortName,children:Object(u.jsx)("i",{className:"fas fa-sort"})})]}),Object(u.jsx)("th",{scope:"col",children:"Location"}),Object(u.jsx)("th",{scope:"col",children:"Phone Number"}),Object(u.jsx)("th",{scope:"col",children:"Email"})]})}),Object(u.jsx)("tbody",{children:e.list.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"align-middle text-center",children:Object(u.jsx)("img",{src:e.picture.medium,className:"rounded-circle",alt:"Employee Profile"})}),Object(u.jsxs)("td",{className:"align-middle",children:[e.name.first," ",e.name.last]}),Object(u.jsx)("td",{className:"align-middle",children:e.location.state}),Object(u.jsx)("td",{className:"align-middle",children:e.phone}),Object(u.jsx)("td",{className:"align-middle",children:e.email})]},e.login.uuid)}))})]})})};var O=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];function r(){return(r=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://randomuser.me/api/?results=100&nat=us");case 2:t=e.sent,n(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{list:c,sortName:function(){console.log("sorting by name");var e=c.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}));n(Object(l.a)(e))}})})};var x=function(){return Object(u.jsxs)("div",{className:"text-center bg-info p-5",children:[Object(u.jsx)("h1",{style:{fontSize:60,color:"white"},children:"Staff Directory"}),Object(u.jsx)("p",{style:{color:"white"},children:"Employee Details"})]})};var f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(O,{})]})};c(44);r.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.889057d6.chunk.js.map