(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),a=n(12),s=n.n(a),i=n(17),l=n(13),h=n(14),o=n(15),j=n(19),u=n(18);var d=function(e){return Object(c.jsx)("div",{className:12,children:e.children})};var m=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("img",{alt:e.firstName,src:e.picture})}),Object(c.jsx)("td",{children:e.firstName}),Object(c.jsx)("td",{children:e.lastName}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.city})]},e.key)};n(25);var b=function(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})};var O=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Employee",id:"search"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})},p=n(16),x=n.n(p),f=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")},y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={result:[],search:""},e.searchEmployee=function(t){f(t).then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,c=t.target.name;e.setState(Object(l.a)({},c,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){console.log(t),e.setState({employees:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,picture:e.picture.large,email:e.email,phone:e.phone,city:e.location.city,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)(b,{children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(d,{children:[Object(c.jsx)("h2",{children:"Employee Directory"}),Object(c.jsx)(O,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(d,{children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Photo"}),Object(c.jsx)("th",{children:"First Name"}),Object(c.jsx)("th",{children:"Last Name"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"City"})]})}),Object(c.jsx)("tbody",{children:Object(i.a)(this.state.result).map((function(e){return Object(c.jsx)(m,{picture:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,city:e.location.city},e.key)}))})]})})})]})}}]),n}(r.Component);var v=function(){return Object(c.jsx)(y,{})};n(44);s.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.31e6f5e2.chunk.js.map