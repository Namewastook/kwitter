(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){},190:function(e,t,n){e.exports=n(358)},195:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},216:function(e,t,n){},339:function(e,t,n){},342:function(e,t,n){},344:function(e,t,n){},346:function(e,t,n){},348:function(e,t,n){},350:function(e,t,n){},352:function(e,t,n){},354:function(e,t,n){},356:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(66),c=n.n(s),o=(n(195),n(50)),l=n(15),i=n(19),u=n(17),m=n(16),d=n(18),p=(n(210),n(367)),h=n(368),f=(n(212),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"kwitterIcon"}),r.a.createElement("h1",null,"KWITTER"))}}]),t}(r.a.Component)),E=n(22),g=n(116),b=n.n(g),O=n(161),j=function(e){return function(t){return t({type:"LOGIN"}),fetch("https://kwitter-api.herokuapp.com/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(e){if(!0!==e.success)throw"nope.";t({type:"LOGIN_SUCCESS",loginData:e}),t(N())}).catch(function(e){t({type:"LOGIN_FAILURE",loginResult:"You shall not pass!"})})}},y=function(){return function(e){fetch("https://kwitter-api.herokuapp.com/messages?limit=10000").then(function(e){return e.json()}).then(function(t){e(w(t.messages))})}},w=function(e){return{type:"GET_MESSAGES",messages:e}},v=function(e){return{type:"GET_USER_MESSAGES",messages:e}},S=function(e){return{type:"GET_USER_SUCCESS",user:e}},N=function(){return function(e){fetch("https://kwitter-api.herokuapp.com/users?limit=10000&offset=0").then(function(e){return e.json()}).then(function(t){e(C(t.users))})}},C=function(e){return{type:"GET_ALL_USERS",users:e}},k=n(366),U=n(372),R=n(369),_=n(373),T=(n(216),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleCheckUserName=function(e){n.setState({username:e.target.value})},n.handleCheckPassword=function(e){n.setState({password:e.target.value})},n.handleLogin=function(e){n.props.login({username:n.state.username,password:n.state.password})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(R.a,{action:"https://s.codepen.io/voltron2112/debug/PqrEPM?",method:"get",className:"ui large form"},r.a.createElement(_.a,null,r.a.createElement("div",{className:"ui stacked secondary segment"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"user icon"}),r.a.createElement("input",{type:"text",onChange:this.handleCheckUserName,required:!0,placeholder:"Enter Username"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",onChange:this.handleCheckPassword,required:!0,placeholder:"Enter Password"}))),r.a.createElement("div",{className:"ui fluid large teal submit button",onClick:this.handleLogin},"Login")),r.a.createElement(k.a,{to:"/registration"},r.a.createElement("div",{className:"ui message"},"New To Us? Register")))))}}]),t}(a.Component)),D=Object(E.connect)(function(e){return{result:e.LoginResult}},function(e){return{login:function(t){return e(function(e){return function(t){t(j(e)).then(function(){return t(Object(o.push)("/mainFeed"))})}}(t))}}})(T),A=(n(339),n(371)),L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",displayName:""},n.handleChangeUsername=function(e){n.setState({username:e.target.value})},n.handleChangePassword=function(e){n.setState({password:e.target.value})},n.handleChangeDisplayName=function(e){n.setState({displayName:e.target.value})},n.handleRegister=function(e){n.props.register({username:n.state.username,password:n.state.password,displayName:n.state.displayName})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"entireform"},r.a.createElement(U.a,{className:"grid",centered:!0},r.a.createElement(R.a,{className:"regform"},r.a.createElement(_.a,{stacked:!0},r.a.createElement(R.a.Field,null,r.a.createElement("input",{type:"text",onChange:this.handleChangeUsername,required:!0,placeholder:"Username"})),r.a.createElement("br",null),r.a.createElement(R.a.Field,null,r.a.createElement("input",{type:"password",onChange:this.handleChangePassword,required:!0,placeholder:"Password"})),r.a.createElement("br",null),r.a.createElement(R.a.Field,null,r.a.createElement("input",{type:"text",onChange:this.handleChangeDisplayName,required:!0,placeholder:"Display Name"})),r.a.createElement(A.a,{onClick:this.handleRegister,name:"register",placeholder:"Register"},"Register")))))}}]),t}(a.Component),P=Object(E.connect)(function(e){return{result:e.registerResult}},function(e){return{register:function(t){return e(function(e){return function(t){t({type:"REGISTER"}),fetch("https://kwitter-api.herokuapp.com/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(n){function a(){return(a=Object(O.a)(b.a.mark(function n(){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(j({username:e.username,password:e.password})).then(function(){return t(Object(o.push)("/userProfile"))});case 2:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}t({type:"REGISTER_SUCCESS",register:n,result:"Successfully Registered!"}),function(){a.apply(this,arguments)}()}).catch(function(e){t({type:"REGISTER_FAIL",result:"Failed to Register!"})})}}(t))}}})(L),F=(n(156),r.a.Component,function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={message:""},n.handleMessages=function(e){n.setState({message:e.target.value})},n.handlepostMessage=function(e){n.props.postMessage(n.state.message),n.setState({message:""})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"messages"},r.a.createElement("div",{className:"messageFeed"},r.a.createElement("div",null,r.a.createElement("input",{value:this.state.message,placeholder:"Kweet here!",type:"text",onChange:this.handleMessages}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handlepostMessage},"Post Kweet!"),r.a.createElement("br",null))))}}]),t}(r.a.Component)),I=Object(E.connect)(function(e){return{messages:e.messages}},function(e){return{postMessage:function(t){return e((n=t,function(e,t){var a=t().loginData.token;fetch("https://kwitter-api.herokuapp.com/messages/",{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify({text:n})}).then(function(e){return e.json()}).then(function(t){e(y())})}));var n}}})(F),G=n(114),M=n.n(G),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).matchIdtoUsername=function(e){var t=n.props.users.find(function(t){return t.id===e});return t?t.username:"Deleted"},n.formatDate=function(e){var t=new Date(e);return t.toLocaleDateString()+" at "+t.toLocaleTimeString()},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMessages()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"messages"},r.a.createElement("div",{className:"messageFeed"},this.props.messages.map(function(t){return r.a.createElement("div",null,e.matchIdtoUsername(t.userId),": ",r.a.createElement("br",null),t.text," ",r.a.createElement("br",null),e.formatDate(t.createdAt))})))}}]),t}(r.a.Component),B={fetchMessages:y},W=Object(E.connect)(function(e){return{messages:e.messages||[],users:e.users}},B)(x),q=(n(342),n(370)),J=n(359),H=n(36),K=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).matchIdtoUsername=function(e){var t=n.props.user.find(function(t){return t.id===e});return t?t.username:"Deleted"},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(q.a,{className:"userprofile"},r.a.createElement(J.a,{src:"https://semantic-ui.com/images/wireframe/image.png"}),r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,null,"Name: ",this.props.user.displayName),r.a.createElement(q.a.Meta,null,r.a.createElement("span",{className:"date"},"Kweeter since ",M()(this.props.user.createdAt).fromNow())),r.a.createElement(q.a.Description,null,"Hello my name is ",this.props.user.username,' , This is what I have to say about myself: "',this.props.user.about,'""')),r.a.createElement(q.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(H.a,{name:"user"}),"1M Friends"))))}}]),t}(r.a.Component),z=Object(E.connect)(function(e){return{result:e.registerResult,user:e.user}},function(e){return{getUserData:function(){return e(function(e,t){var n=t().loginData.id;e({type:"GET_USER"}),fetch("https://kwitter-api.herokuapp.com/users/".concat(n)).then(function(e){return e.json()}).then(function(t){e(S(t.user))})})}}})(K),V={fetchMessages:function(){return function(e,t){var n=t().loginData.id;fetch("https://kwitter-api.herokuapp.com/users/".concat(n)).then(function(e){return e.json()}).then(function(t){e(v(t.user.messages))})}}},X=Object(E.connect)(function(e){return{messages:e.user.messages||[],users:e.users}},V)(x),Q=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{className:"deleteUserButton",onClick:this.props.deleteUser},"Delete User")}}]),t}(r.a.Component),Y=Object(E.connect)(null,function(e){return{deleteUser:function(){return e(function(e,t){var n=t().loginData.token;e({type:"DELETE_USER"}),fetch("https://kwitter-api.herokuapp.com/users",{method:"DELETE",headers:{Authorization:"Bearer "+n}}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(t){e({type:"DELETE_USER_SUCCESS"}),e(Object(o.push)("/"))}).catch(function(t){e({type:"DELETE_USER_FAILURE",deleteUserResult:"Permission denied"})})})}}})(Q),$=(n(344),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{to:"/mainFeed"},r.a.createElement(A.a,{className:"mainFeedNavButton",onClick:this.setRedirect},"Main Page"))}}]),t}(r.a.Component)),Z=(n(346),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",displayName:"",token:""},n.handleChangeUpdatePassword=function(e){n.setState({password:e.target.value})},n.handleChangeUpdateDisplayName=function(e){n.setState({displayName:e.target.value})},n.handleUpdate=function(e){n.props.updateUser({password:n.state.password,displayName:n.state.displayName})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{className:"grid",centered:!0},r.a.createElement(R.a,{className:"form"},r.a.createElement(R.a.Field,{className:"gridcolumn1",width:4},r.a.createElement(U.a.Column,null,r.a.createElement(z,null),r.a.createElement("div",{className:"uploadphoto"},r.a.createElement(A.a,null,"Upload photo")))),r.a.createElement(R.a.Field,{className:"gridcolumn2",width:6},r.a.createElement(U.a.Column,null,r.a.createElement("p",null,"Where the feed for Profile goes"),r.a.createElement(X,null))),r.a.createElement(R.a.Field,{className:"gridcolumn3",width:4},r.a.createElement(U.a.Column,null,r.a.createElement("legend",null,"Making a Change?"),r.a.createElement(_.a,{className:"segment",stacked:!0},r.a.createElement(R.a.Field,null,r.a.createElement("input",{className:"input",type:"text",onChange:this.handleChangeUpdateDisplayName,placeholder:"New Display Name"})),r.a.createElement("br",null),r.a.createElement(R.a.Field,null,"Enter New Password:",r.a.createElement("br",null),r.a.createElement("input",{className:"input",type:"password",onChange:this.handleChangeUpdatePassword,placeholder:"New Password"})),r.a.createElement("br",null),r.a.createElement(R.a.Field,null,"Confirm New Password:",r.a.createElement("br",null),r.a.createElement("input",{className:"input",type:"password"})),r.a.createElement(A.a,{className:"button",onClick:this.handleUpdate},"Submit changes"),r.a.createElement(Y,null),r.a.createElement("br",null),r.a.createElement($,null),r.a.createElement(A.a,{className:"button",onClick:this.props.toLoginPage},"Log Out"))))))}}]),t}(r.a.Component)),ee=Object(E.connect)(null,function(e){return{updateUser:function(t){return e((n=t,function(e,t){var a=t().loginData.token;e({type:"UPDATE_USER"}),fetch("https://kwitter-api.herokuapp.com/users",{method:"PATCH",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(t){e({type:"UPDATE_USER_SUCCESS",displayName:t.user.displayName}),e(Object(o.push)("/mainFeed"))}).catch(function(t){e({type:"UPDATE_USER_FAILURE",updateResult:"no one likes you"})})}));var n}}})(Z),te=(n(348),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{to:"/LoginForm.js"},r.a.createElement(A.a,{className:"logOutButton",onClick:this.setRedirect},"Log Out"))}}]),t}(r.a.Component)),ne=(n(350),r.a.Component,n(352),r.a.Component,n(354),r.a.Component,n(356),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{to:"/userProfile"},r.a.createElement(A.a,{className:"profilePageNavButton"},"Profile Page"))}}]),t}(r.a.Component)),ae=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{className:"grid",centered:!0},r.a.createElement(R.a,{className:"form"},r.a.createElement(R.a.Field,{className:"gridcolumn1",width:4},r.a.createElement(U.a.Column,null,r.a.createElement(z,null))),r.a.createElement(R.a.Field,{className:"gridcolumn2",width:6},r.a.createElement(U.a.Column,null,r.a.createElement(I,null),r.a.createElement(W,null))),r.a.createElement(R.a.Field,{className:"gridcolumn3",width:4},r.a.createElement(U.a.Column,null,r.a.createElement(ne,null),r.a.createElement(te,null)))))}}]),t}(r.a.Component),re=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={width:window.innerWidth},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"firstView"},r.a.createElement(f,null),r.a.createElement("div",{className:"startingPage"},r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null))}}),r.a.createElement(h.a,{path:"/registration",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))}}),r.a.createElement(h.a,{path:"/userProfile",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(te,null))}}),r.a.createElement(h.a,{path:"/mainFeed",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null))}}))))}}]),t}(r.a.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var oe=n(67),le=n(37),ie={register:{},registerResult:"",loginData:{token:"",id:0,success:!1},loginResult:"",user:{id:0,username:"",displayName:"",about:"",createdAt:"",updatedAt:"",messages:[]},users:[{id:0,username:"",displayName:"",about:"",createdAt:"",updatedAt:""}],displayName:"",updateResult:"",deleteUserResult:"",messages:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":return e;case"REGISTER_SUCCESS":return Object(le.a)({},e,{register:t.register,registerResult:t.result});case"REGISTER_FAIL":return Object(le.a)({},e,{registerResult:t.result});case"LOGIN_SUCCESS":return Object(le.a)({},e,{loginData:t.loginData});case"LOGIN_FAILURE":case"LOGIN":return Object(le.a)({},e,{loginResult:t.result});case"DELETE_USER_SUCCESS":return Object(le.a)({},e,ie);case"DELETE_USER_FAILURE":return Object(le.a)({},e,{deleteUserResult:t.deleteUserResult});case"DELETE_USER":return Object(le.a)({},e);case"GET_MESSAGES":return Object(le.a)({},e,{messages:t.messages});case"POST_MESSAGES":return Object(le.a)({},e,{messages:t.result});case"UPDATE_USER":return Object(le.a)({},e);case"UPDATE_USER_SUCCESS":return Object(le.a)({},e,{displayName:t.displayName});case"UPDATE_USER_FAILURE":return Object(le.a)({},e,{updateResult:t.updateResult});case"GET_USER":return Object(le.a)({},e);case"GET_USER_SUCCESS":return Object(le.a)({},e,{user:t.user});case"GET_ALL_USERS":return Object(le.a)({},e,{users:t.users});case"GET_USER_MESSAGES":return Object(le.a)({},e,{AHMessages:t.messages});default:return e}},me=n(178),de=n(40),pe=Object(de.a)(),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.c,fe=Object(oe.d)(Object(o.connectRouter)(pe)(ue),he(Object(oe.a)(Object(o.routerMiddleware)(pe),me.a)));c.a.render(r.a.createElement(E.Provider,{store:fe},r.a.createElement(o.ConnectedRouter,{basename:"/kwitter",history:pe},r.a.createElement(re,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/kwitter",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/kwitter","/service-worker.js");se?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ce(e)})}}()}},[[190,2,1]]]);
//# sourceMappingURL=main.0a02994a.chunk.js.map