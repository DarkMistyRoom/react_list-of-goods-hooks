(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c,s=n(4),a=n.n(s),r=n(2),o=n(1),l=(n(9),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPABET=1]="ALPABET",e[e.LENGTH=2]="LENGTH"}(c||(c={}));var i=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(!1),i=Object(r.a)(a,2),b=i[0],j=i[1],h=Object(o.useState)(c.NONE),p=Object(r.a)(h,2),d=p[0],O=p[1],m=Object(o.useState)(1),N=Object(r.a)(m,2),f=N[0],g=N[1],x=function(e,t,n,s){var a=e.filter((function(e){return e.length>=s}));return a.sort((function(e,n){switch(t){case c.ALPABET:return e.localeCompare(n);case c.LENGTH:return e.length-n.length;default:return 0}})),n&&a.reverse(),a}(u,d,b,f);return Object(l.jsx)("div",{className:"App panel is-success",children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"panel-heading",children:[Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return O(c.ALPABET)},children:"Sort alphabetically"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return O(c.LENGTH)},children:"Sort by length"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return j(!b)},children:"Reverse"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){j(!1),O(c.NONE),g(1)},children:"Reset"})]}),Object(l.jsxs)("label",{className:"App__label panel-block",children:["Min-length:",Object(l.jsx)("select",{className:"App__select select",name:"minLength",id:"minLength",value:f,onChange:function(e){return g(+e.currentTarget.value)},children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))})]}),Object(l.jsx)("ul",{className:"Goods",children:x.map((function(e){return Object(l.jsx)("li",{className:"Goods__item panel-block",children:e},e)}))})]}):Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return s(!0)},children:"Start"})})};a.a.render(Object(l.jsx)(i,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.cd149893.chunk.js.map