(this["webpackJsonpts-quiz"]=this["webpackJsonpts-quiz"]||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var r,a,c,s=t(0),i=t.n(s),o=t(15),u=t.n(o),d=t(3),l=t(4),b=t.n(l),f=t(9),p=t(2),x=t(5),j=t(6),g=j.b.div(r||(r=Object(x.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"]))),h=j.b.div(a||(a=Object(x.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n\n    background: ",";\n    border: 5px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #56ffa4, #ff5656, #c16868)":"linear-gradient(90deg, #56ffa4, #56ccff, #6eafb4)"})),O=t(1),m=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNr,s=n.totalQuestions;return Object(O.jsxs)(g,{children:[Object(O.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(O.jsx)("div",{children:t.map((function(n){return Object(O.jsx)(h,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(O.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(O.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},w=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(c||(c={}));var v,k,y=function(){var n=Object(f.a)(b.a.mark((function n(e,t){var r,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{answers:(e=[].concat(Object(d.a)(n.incorrect_answers),[n.correct_answer]),Object(d.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),S=t.p+"static/media/nattu-adnan.c866d607.jpg",z=Object(j.a)(v||(v=Object(x.a)(["\nhtml {\n    height: 100%\n}\n\nbody {\n background-image: url(",");\n background-size: cover;\n margin: 0;\n padding: 0 20px;\n display: flex;\n justify-content: center;\n\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif\n}\n"])),S),q=j.b.div(k||(k=Object(x.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #fff;\n  }\n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n  h1 {\n    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",\n      sans-serif;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    font-weight: 400;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    border: 2px solid #d38558;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n']))),A=function(){var n=Object(s.useState)(!1),e=Object(p.a)(n,2),t=e[0],r=e[1],a=Object(s.useState)([]),i=Object(p.a)(a,2),o=i[0],u=i[1],l=Object(s.useState)(0),x=Object(p.a)(l,2),j=x[0],g=x[1],h=Object(s.useState)([]),w=Object(p.a)(h,2),v=w[0],k=w[1],S=Object(s.useState)(0),A=Object(p.a)(S,2),N=A[0],_=A[1],C=Object(s.useState)(!0),M=Object(p.a)(C,2),I=M[0],Q=M[1],E=function(){var n=Object(f.a)(b.a.mark((function n(){var e;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),Q(!1),n.next=4,y(10,c.EASY);case 4:e=n.sent,u(e),_(0),k([]),g(0),r(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{}),Object(O.jsxs)(q,{children:[Object(O.jsx)("h1",{children:"Quiz"}),I||10===v.length?Object(O.jsx)("button",{className:"start",onClick:E,children:"Start Trivia"}):null,I?null:Object(O.jsxs)("p",{className:"score",children:["Score:",N]}),t&&Object(O.jsx)("p",{children:"Loading Questions ..."}),!t&&!I&&Object(O.jsx)(m,{questionNr:j+1,totalQuestions:10,question:o[j].question,answers:o[j].answers,userAnswer:v?v[j]:void 0,callback:function(n){if(!I){var e=n.currentTarget.value,t=o[j].correct_answer===e;t&&_((function(n){return n+1}));var r={question:o[j].question,answer:e,correct:t,correctAnswer:o[j].correct_answer};k((function(n){return[].concat(Object(d.a)(n),[r])}))}}}),t||I||v.length!==j+1||9===j?null:Object(O.jsx)("button",{className:"next",onClick:function(){var n=j+1;10===n?Q(!0):g(n)},children:"Next question"})]})]})};u.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3d893255.chunk.js.map