(this["webpackJsonpmanaging-a-component-tree-practice"]=this["webpackJsonpmanaging-a-component-tree-practice"]||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),m=a(17),o=a(61),s=a(60),u=a(26),i=a.n(u),d=a(58),E=a(24),p=a.n(E);var b=e=>{const t=p.a.A100,a=Object(n.useState)(""),c=Object(m.a)(a,2),r=c[0],u=c[1];return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(s.a,null,e.text),l.a.createElement(d.a,{color:t}),l.a.createElement(i.a,{style:{color:r},onMouseOut:()=>{u("")},onMouseOver:()=>{u("#fdcb6e")},className:"listItem",onClick:()=>{e.onChecked(e.id)}})))};var h=e=>l.a.createElement("div",{className:"form"},l.a.createElement("input",{onChange:e.handleChange,type:"text",value:e.inputText,onKeyPress:e.submit}),l.a.createElement("button",{onClick:e.addItem},l.a.createElement("span",null,"Add")));var v=()=>{const e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(m.a)(r,2),s=o[0],u=o[1],i=()=>{u(e=>[...e,a]),c("")},d=e=>{u(t=>t.filter((t,a)=>a!==e))};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"To-Do List")),l.a.createElement(h,{handleChange:e=>{const t=e.target.value;c(t)},addItem:i,deleteItem:d,inputText:a,submit:e=>{if("Enter"===e.key)return i()}}),l.a.createElement("div",null,l.a.createElement("ul",null,s.map((e,t)=>l.a.createElement(b,{key:t,id:t,text:e,onChecked:d})))))};r.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a0786e58.chunk.js.map