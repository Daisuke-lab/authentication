(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(5),s=n(4),o=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{class:"jumbotron mt-5",children:[Object(a.jsx)("h1",{class:"display-4",children:"Welcome"}),Object(a.jsx)("p",{class:"lead",children:"This is authentication system."}),Object(a.jsx)("hr",{class:"my-4"}),Object(a.jsx)("p",{children:"Click the login button"}),Object(a.jsx)(c.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})},i=n(13),u=n(3),l=n(11),p=n(6),j=n(8),b=n.n(j),d=n(15),h="LOGIN_SUCCESS",m="LOGIN_FAIL",O="LOAD_USER_SUCCESS",f="LOAD_USER_FAIL",v="AUTHENTICATED_SUCCESS",x="AUTHENTICATED_FAIL",g="AUTHENTICATED_SUCCESS",y="AUTHENTICATED_FAIL",w="AUTHENTICATED_SUCCESS",S="AUTHENTICATED_FAIL",N="SIGNUP_SUCCESS",A="SIGNUP_FAIL",C="ACTIVATION_SUCCESS",_="ACTIVATION_FAIL",T=n(16),k=n.n(T),I=function(){return function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return console.log("JWT ".concat(localStorage.getItem("access"))),n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=3,e.next=6,k.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 6:a=e.sent,t({type:O,payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:f});case 13:e.next=17;break;case 15:console.log("no access"),t({type:f});case 17:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},E=Object(p.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(){var n=Object(d.a)(b.a.mark((function n(a){var r,c,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,k.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),c,r);case 5:s=n.sent,a({type:h,payload:s.data}),a(I()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:m});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=Object(r.useState)({email:"",password:""}),n=Object(l.a)(t,2),o=n[0],p=n[1],j=o.email,b=o.password,d=function(e){return p(Object(u.a)(Object(u.a)({},o),{},Object(i.a)({},e.target.name,e.target.value)))};return e.isAuthenticated?Object(a.jsx)(s.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Sign in"}),Object(a.jsx)("p1",{children:"Sign into your Account"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.login(j,b)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email",name:"email",value:j,onChange:function(e){return d(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Password",name:"password",value:b,onChange:function(e){return d(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(a.jsx)(c.b,{to:"/signup",children:"Sign up"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Forget your password? ",Object(a.jsx)(c.b,{to:"/reset_password",children:"Reset Password"})]})]})})),L=Object(p.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{signup:function(t,n,a,r){return e(function(e,t,n,a){return function(){var r=Object(d.a)(b.a.mark((function r(c){var s,o,i;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:e,email:t,password:n,re_password:a}),r.prev=2,r.next=5,k.a.post("".concat("http://localhost:8000","/auth/users/"),o,s);case 5:i=r.sent,c({type:N,payload:i.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),c({type:A});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,a,r))}}}))((function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),o=n[0],p=n[1],j=Object(r.useState)({name:"",email:"",password:"",re_password:""}),b=Object(l.a)(j,2),d=b[0],h=b[1],m=d.name,O=d.email,f=d.password,v=d.re_password,x=function(e){return h(Object(u.a)(Object(u.a)({},d),{},Object(i.a)({},e.target.name,e.target.value)))};return e.isAuthenticated||o?Object(a.jsx)(s.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Sign up"}),Object(a.jsx)("p1",{children:"Create your Account"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.signup(m,O,f,v),p(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"name",placeholder:"name",name:"name",value:m,onChange:function(e){return x(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email*",name:"email",value:O,onChange:function(e){return x(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Password*",name:"password",value:f,onChange:function(e){return x(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:v,onChange:function(e){return x(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Sign up"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(a.jsx)(c.b,{to:"/login",children:"Log in"})]})]})})),U=Object(p.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{verify:function(t,n){return e(function(e,t){return function(){var n=Object(d.a)(b.a.mark((function n(a){var r,c,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,k.a.post("".concat("http://localhost:8000","/auth/users/activation/"),c,r);case 5:s=n.sent,a({type:C,payload:s.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),a({type:_});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e,t){var n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],i=c[1];return o?Object(a.jsx)(s.a,{to:"/"}):Object(a.jsx)("div",{className:"eontainer mt-5",children:Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(a.jsx)("h1",{children:"Verify your account:"}),Object(a.jsx)("button",{onClick:function(n){var a=e.params.uid,r=e.params.uid;t.verify(a,r),i(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),D=Object(p.b)(null,(function(e){return{reset_password:function(t){return e(function(e){return function(){var t=Object(d.a)(b.a.mark((function t(n){var a,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e}),t.prev=2,t.next=5,k.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),r,a);case 5:c=t.sent,n({type:g,payload:c.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:y});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],p=Object(r.useState)({email:""}),j=Object(l.a)(p,2),b=j[0],d=j[1],h=b.email;return c?Object(a.jsx)(s.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Request Password Reset"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.reset_password(h),o(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email",name:"email",value:h,onChange:function(e){return function(e){return d(Object(u.a)(Object(u.a)({},b),{},Object(i.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),P=Object(p.b)(null,(function(e){return{reset_password_confirm:function(t,n,a,r){return e(function(e,t,n,a){return function(){var r=Object(d.a)(b.a.mark((function r(c){var s,o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:a}),r.prev=2,r.next=5,k.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 5:c({type:w}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),c({type:S});case 11:case"end":return r.stop()}}),r,null,[[2,8]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,a,r))}}}))((function(e,t){var n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],p=c[1],j=Object(r.useState)({new_password:"",re_new_password:""}),b=Object(l.a)(j,2),d=b[0],h=b[1];console.log("match::",e),console.log("props::",t);var m=d.new_password,O=d.re_new_password,f=function(e){return h(Object(u.a)(Object(u.a)({},d),{},Object(i.a)({},e.target.name,e.target.value)))};return o?Object(a.jsx)(s.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Request Password Reset"}),Object(a.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var a=e.match.params.uid,r=e.match.params.token;t.reset_password_confirm(a,r,m,O),p(!0)}(n)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"New Pasword",name:"new_password",value:m,onChange:function(e){return f(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:O,onChange:function(e){return f(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"ResetPasswordConfirm"})]})]})})),F=Object(p.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{logout:function(){return e((function(e){e({type:"LOG_OUT"})}))}}}))((function(e){return Object(a.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(c.b,{class:"navbar-brand",to:"/",children:"Auth System"}),Object(a.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{class:"navbar-nav",children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(c.b,{class:"nav-link",to:"/",children:["Home",Object(a.jsx)("span",{class:"sr-only",children:"(current)"})]})}),e.isAuthenticated?Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(c.b,{class:"nav-link",to:"/",onClick:e.logout,children:["Logout",Object(a.jsx)("span",{class:"sr-only",children:"(current)"})]})}):Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)(c.b,{class:"nav-link",to:"/login",children:"Login"})}),Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)(c.b,{class:"nav-link",to:"/signup",children:"Signup"})})]})]})})]})})),q=Object(p.b)(null,(function(e){return{checkAuthenticated:function(){return e(function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,k.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:r=e.sent,t("token_not_valid"!==r?{type:v}:{type:x}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:x});case 13:e.next=16;break;case 15:t({type:x});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}())},load_user:function(){return e(I())}}}))((function(e){return Object(r.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(F,{}),e.children]})}));var J=function(){return Object(a.jsx)(c.a,{children:Object(a.jsx)(q,{children:Object(a.jsxs)(s.d,{children:[Object(a.jsx)(s.b,{exact:!0,path:"/",component:o}),Object(a.jsx)(s.b,{exact:!0,path:"/login",component:E}),Object(a.jsx)(s.b,{exact:!0,path:"/signup",component:L}),Object(a.jsx)(s.b,{exact:!0,path:"/reset_password",component:D}),Object(a.jsx)(s.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:P}),Object(a.jsx)(s.b,{exact:!0,path:"/activate/:uid/:token",component:U})]})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},H=n(21),G=n.n(H),V=n(14),W=n(38),B=n(39),z={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h:return localStorage.setItem("access",a.access),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case m:case A:return Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case O:return Object(u.a)(Object(u.a)({},e),{},{user:a.user});case f:return Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case v:return Object(u.a)(Object(u.a)({},e),{},{user:a});case x:return Object(u.a)(Object(u.a)({},e),{},{user:null});case N:return Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!1});case g:case y:case w:case S:case _:case C:return Object(u.a)({},e);default:return e}},K=Object(V.combineReducers)({reducer:M}),Q=[B.a],X=Object(V.createStore)(K,Object(W.composeWithDevTools)(V.applyMiddleware.apply(void 0,Q))),Y=Object(a.jsx)(p.a,{store:X,children:Object(a.jsx)(J,{})});G.a.render(Y,document.getElementById("root")),R()}},[[68,1,2]]]);
//# sourceMappingURL=main.9a83060a.chunk.js.map