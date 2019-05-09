(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{176:function(e,n,t){"use strict";t.r(n);var a=t(9),r=t.n(a),s=t(0),i=t.n(s),u=t(186),o=t(190),l=(t(91),t(64)),c=t(184),d=t(201),p=t(193),f=t(194),m=t.n(f),h=t(222),v=t.n(h),y=t(219),_=t.n(y),b=t(220),g=t.n(b),x=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"Login"},i.a.createElement("form",{onSubmit:this.props.handleAuth},i.a.createElement(_.a,{controlId:"username",bssize:"large"},i.a.createElement(g.a,null,"Username"),i.a.createElement(v.a,{placeholder:"Username",autoFocus:!0,type:"text",onChange:this.props.handleChange})),i.a.createElement(_.a,{controlId:"password",bssize:"large"},i.a.createElement(g.a,null,"Password"),i.a.createElement(v.a,{placeholder:"Password",onChange:this.props.handleChange,type:"password"})),i.a.createElement(m.a,{bssize:"large",type:"submit"},"Login"),i.a.createElement(m.a,{className:"float-right",onClick:this.props.handleAccount},"Create New Account"))))},n}(s.Component),w=t(189),k=t(234);d.Auth.configure(p.a);var P=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleChange=function(e){var n;t.setState(((n={})[e.target.id]=e.target.value,n))},t.handleAuth=function(e){e.preventDefault(),t.setState({loading:!0},function(){d.Auth.signIn(t.state.username,t.state.password).then(function(e){switch(console.log(e),e.challengeName){case"NEW_PASSWORD_REQUIRED":Object(u.b)("/newPassword",{state:{username:t.state.username}});break;case"SOFTWARE_TOKEN_MFA":case"MFA_SETUP":case"SMS_MFA":break;default:Object(w.h)(t.state.username).then(function(e){var n=e.data.getUser;t.props.authenticateUser(n),Object(u.b)("/")})}},function(e){console.log(e),alert(e.message),t.setState({loading:!1})})})},t.createAccount=function(e){Object(u.b)("/SignUp")},t.state={password:"",username:"",user:[],loading:!1},t}return r()(n,e),n.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(x,{handleAuth:this.handleAuth,handleChange:this.handleChange,handleAccount:this.createAccount}),this.state.loading&&i.a.createElement(k.a,null))},n}(s.Component);n.default=Object(l.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{authenticateUser:function(n){return e(Object(c.a)(n))}}})(P)},182:function(e,n,t){var a;e.exports=(a=t(188))&&a.default||a},184:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"c",function(){return s}),t.d(n,"b",function(){return i});var a=t(31),r=function(e){return function(n){n({type:a.a,payload:e})}},s=function(e){return function(n){n({type:a.c,payload:e})}},i=function(){return function(e){e({type:a.b})}}},185:function(e,n,t){"use strict";var a=t(187),r=t(10);n.__esModule=!0,n.useBootstrapPrefix=function(e,n){var t=(0,o.useContext)(l);return e||t.get(n)||n},n.createBootstrapComponent=function(e,n){"string"==typeof n&&(n={prefix:n});var t=e.prototype&&e.prototype.isReactComponent,a=n,r=a.prefix,i=a.forwardRefAs,c=void 0===i?t?"ref":"innerRef":i;return(0,u.default)(function(n,t){var a=(0,s.default)({},n);a[c]=t;var i=(0,o.useContext)(l);return o.default.createElement(e,(0,s.default)({},a,{bsPrefix:a.bsPrefix||i.get(r)||r}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},n.default=n.ThemeConsumer=void 0;var s=r(t(89)),i=r(t(9)),u=r(t(204)),o=a(t(0)),l=o.default.createContext(new Map),c=l.Consumer,d=l.Provider;n.ThemeConsumer=c;var p=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).prefixes=new Map,Object.keys(n.props.prefixes).forEach(function(e){n.prefixes.set(e,n.props.prefixes[e])}),n}return(0,i.default)(n,e),n.prototype.render=function(){return o.default.createElement(d,{value:this.prefixes},this.props.children)},n}(o.default.Component);n.default=p},186:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var a=t(0),r=t.n(a),s=t(1),i=t.n(s),u=t(39);t.d(n,"b",function(){return u.navigate});t(182);var o=r.a.createContext({}),l=function(e){return r.a.createElement(o.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},187:function(e,n){e.exports=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}},188:function(e,n,t){"use strict";t.r(n);t(29);var a=t(0),r=t.n(a),s=t(1),i=t.n(s),u=t(66),o=t(3),l=function(e){var n=e.location,t=o.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l},189:function(e,n,t){"use strict";var a=t(214),r=t.n(a),s=(t(215),t(216)),i=t.n(s),u=t(201),o=t.n(u),l="query GetUser($id: ID!) {\n  getUser(id: $id) {\n    id\n    username\n    first_name\n    last_name\n    email\n    password_hash\n    phone_number\n    processes {\n      items {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n      nextToken\n    }\n  }\n}\n",c="query ListUsers(\n  $filter: ModelUserFilterInput\n  $limit: Int\n  $nextToken: String\n) {\n  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    items {\n      id\n      username\n      first_name\n      last_name\n      email\n      password_hash\n      phone_number\n      processes {\n        nextToken\n      }\n    }\n    nextToken\n  }\n}\n",d="query GetProcess($id: ID!) {\n  getProcess(id: $id) {\n    id\n    phaseids {\n      items {\n        id\n        duration\n        title\n        description\n      }\n      nextToken\n    }\n    user_id\n    user {\n      id\n      username\n      first_name\n      last_name\n      email\n      password_hash\n      phone_number\n      processes {\n        nextToken\n      }\n    }\n    name\n    date_start\n    date_end\n  }\n}\n",p="query GetPhase($id: ID!) {\n  getPhase(id: $id) {\n    id\n    logs {\n      items {\n        id\n        timestamp\n        text\n      }\n      nextToken\n    }\n    duration\n    title\n    description\n    process {\n      id\n      phaseids {\n        nextToken\n      }\n      user_id\n      user {\n        id\n        username\n        first_name\n        last_name\n        email\n        password_hash\n        phone_number\n      }\n      name\n      date_start\n      date_end\n    }\n  }\n}\n",f="mutation CreateUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    id\n    username\n    first_name\n    last_name\n    email\n    password_hash\n    phone_number\n    processes {\n      items {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n      nextToken\n    }\n  }\n}\n",m="mutation UpdateUser($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    id\n    username\n    first_name\n    last_name\n    email\n    password_hash\n    phone_number\n    processes {\n      items {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n      nextToken\n    }\n  }\n}\n",h="mutation CreateProcess($input: CreateProcessInput!) {\n  createProcess(input: $input) {\n    id\n    phaseids {\n      items {\n        id\n        duration\n        title\n        description\n      }\n      nextToken\n    }\n    user_id\n    user {\n      id\n      username\n      first_name\n      last_name\n      email\n      password_hash\n      phone_number\n      processes {\n        nextToken\n      }\n    }\n    name\n    date_start\n    date_end\n  }\n}\n",v="mutation CreatePhase($input: CreatePhaseInput!) {\n  createPhase(input: $input) {\n    id\n    logs {\n      items {\n        id\n        timestamp\n        text\n      }\n      nextToken\n    }\n    duration\n    title\n    description\n    process {\n      id\n      phaseids {\n        nextToken\n      }\n      user_id\n      user {\n        id\n        username\n        first_name\n        last_name\n        email\n        password_hash\n        phone_number\n      }\n      name\n      date_start\n      date_end\n    }\n  }\n}\n",y="mutation UpdatePhase($input: UpdatePhaseInput!) {\n  updatePhase(input: $input) {\n    id\n    logs {\n      items {\n        id\n        timestamp\n        text\n      }\n      nextToken\n    }\n    duration\n    title\n    description\n    process {\n      id\n      phaseids {\n        nextToken\n      }\n      user_id\n      user {\n        id\n        username\n        first_name\n        last_name\n        email\n        password_hash\n        phone_number\n      }\n      name\n      date_start\n      date_end\n    }\n  }\n}\n",_="mutation CreateLog($input: CreateLogInput!) {\n  createLog(input: $input) {\n    id\n    timestamp\n    text\n    phase {\n      id\n      logs {\n        nextToken\n      }\n      duration\n      title\n      description\n      process {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n    }\n  }\n}\n",b="mutation UpdateLog($input: UpdateLogInput!) {\n  updateLog(input: $input) {\n    id\n    timestamp\n    text\n    phase {\n      id\n      logs {\n        nextToken\n      }\n      duration\n      title\n      description\n      process {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n    }\n  }\n}\n",g="mutation DeleteLog($input: DeleteLogInput!) {\n  deleteLog(input: $input) {\n    id\n    timestamp\n    text\n    phase {\n      id\n      logs {\n        nextToken\n      }\n      duration\n      title\n      description\n      process {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n    }\n  }\n}\n",x=t(193);function w(e){return k.apply(this,arguments)}function k(){return(k=i()(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(l,{id:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e){return E.apply(this,arguments)}function E(){return(E=i()(r.a.mark(function e(n){var t,a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:{eq:n}},e.next=3,u.API.graphql(Object(u.graphqlOperation)(c,{filter:t}));case 3:return a=e.sent,e.next=6,w(a.data.listUsers.items[0].id);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){return A.apply(this,arguments)}function A(){return(A=i()(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(d,{id:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e){return N.apply(this,arguments)}function N(){return(N=i()(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(p,{id:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(e,n,t,a,r,s){return q.apply(this,arguments)}function q(){return(q=i()(r.a.mark(function e(n,t,a,s,i,o){var l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l={username:n,first_name:t,last_name:a,email:s,password_hash:o,phone_number:i},e.next=3,u.API.graphql(Object(u.graphqlOperation)(f,{input:l}));case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e,n,t){return T.apply(this,arguments)}function T(){return(T=i()(r.a.mark(function e(n,t,a){var s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={timestamp:t,text:a,logPhaseId:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(_,{input:s}));case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(e,n,t,a){return D.apply(this,arguments)}function D(){return(D=i()(r.a.mark(function e(n,t,a,s){var i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={user_id:n,name:t,date_start:a,date_end:s,processUserId:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(h,{input:i}));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e,n,t){return L.apply(this,arguments)}function L(){return(L=i()(r.a.mark(function e(n,t,a){var s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={title:t,description:a,duration:"0000000",phaseProcessId:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(v,{input:s}));case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(e){return M.apply(this,arguments)}function M(){return(M=i()(r.a.mark(function e(n){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(m,{input:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e,n,t){return F.apply(this,arguments)}function F(){return(F=i()(r.a.mark(function e(n,t,a){var s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return",null);case 2:return s={id:n,timestamp:t,text:a},e.next=5,u.API.graphql(Object(u.graphqlOperation)(b,{input:s}));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e,n,t,a){return B.apply(this,arguments)}function B(){return(B=i()(r.a.mark(function e(n,t,a,s){var i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={id:n,duration:t,title:a,description:s},e.next=3,u.API.graphql(Object(u.graphqlOperation)(y,{input:i}));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function K(e){return G.apply(this,arguments)}function G(){return(G=i()(r.a.mark(function e(n){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(g,{input:t}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e,n,t){return Q.apply(this,arguments)}function Q(){return(Q=i()(r.a.mark(function e(n,t,a){var s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n.id,t,"0000000","00000000").then(function(e){s=e.data.createProcess},function(e){console.log(e)});case 2:i=0;case 3:if(!(i<a.length)){e.next=9;break}return e.next=6,$(s.id,a[i].title,a[i].description);case 6:i++,e.next=3;break;case 9:return e.abrupt("return",O(s.id));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.d(n,"g",function(){return w}),t.d(n,"h",function(){return P}),t.d(n,"f",function(){return O}),t.d(n,"e",function(){return C}),t.d(n,"c",function(){return I}),t.d(n,"a",function(){return j}),t.d(n,"k",function(){return R}),t.d(n,"i",function(){return S}),t.d(n,"j",function(){return z}),t.d(n,"d",function(){return K}),t.d(n,"b",function(){return J}),o.a.configure(x.a)},190:function(e,n,t){"use strict";var a=t(191),r=t(0),s=t.n(r),i=t(1),u=t.n(i),o=t(186),l=function(){return s.a.createElement("footer",{className:"text-center"},s.a.createElement("div",{className:"footer-container"},s.a.createElement("p",null,"Designed by Ronuel Diaz | Jeter Gutierrez | Kelly Lu | Ramon Petgrave | Abraham B. Villaroman"),s.a.createElement("p",null,"© 2019 Universal Design Compass. All right reserved.")))},c=(t(203),t(17)),d=t(285),p=t(550),f=t(549),m=t(64),h=t(184),v=function(e){return s.a.createElement(p.a,{collapseOnSelect:!0,sticky:"top",expand:"md",bg:"dark",variant:"dark"},s.a.createElement(p.a.Brand,{variant:"light"},s.a.createElement(c.Link,{to:e.isAuthenticated?"/Dashboard":"/",style:y.link}," ",e.siteTitle)),s.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(f.a,{className:"justify-content-end"},e.isAuthenticated?function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"nav-link"},s.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"create",to:"/Create"},"Create Compass")),s.a.createElement(d.a,{className:"nav-link"},s.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"dashboard",to:"/Dashboard"},"Dashboard")),s.a.createElement(d.a,{className:"nav-link"},s.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"profile",to:"/Profile"},"Profile")),s.a.createElement(d.a,{className:"nav-link"},s.a.createElement(c.Link,{style:y.link,rel:"logout",to:"/",onClick:function(){e.logOutUser(),Object(c.navigate)("/")}},"Logout")))}(e):s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"nav-link"},s.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"about",to:"/About"},"About")),s.a.createElement(d.a,{className:"nav-link"},s.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"login",to:"/Login"},"Login"))))))},y={link:{color:"white",textDecoration:"none"},linkActive:{textDecoration:"underline"}};v.propsTypes={isAuthenticated:u.a.bool,authenticateUser:u.a.func};var _=Object(m.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{logOutUser:function(){return e(Object(h.b)())}}})(v),b=(t(161),function(e){var n=e.children;return s.a.createElement(o.a,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(_,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",null,n),s.a.createElement(l,null))},data:a})});b.propTypes={children:u.a.node.isRequired};n.a=b},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass"}}}}},193:function(e,n,t){"use strict";n.a={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://tlpgdp57nbdkxd56oozfo5ilve.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-5d2jinp73vdnlhogy3pcffpvbu",aws_cognito_identity_pool_id:"us-east-1:081859b3-b4f7-4f0b-832c-2d199686e884",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_YTLNM43zQ",aws_user_pools_web_client_id:"6jjcu7qj7co9fjhu89cogi7tad",oauth:{},aws_content_delivery_bucket:"niesignompasspp-20190501181012-hostingbucket-dev",aws_content_delivery_bucket_region:"us-east-1",aws_content_delivery_url:"https://dwgjvy2m8ou08.cloudfront.net"}},194:function(e,n,t){"use strict";var a=t(10);n.__esModule=!0,n.default=void 0;var r=a(t(89)),s=a(t(90)),i=a(t(178)),u=a(t(0)),o=t(185),l=a(t(196)),c=u.default.forwardRef(function(e,n){var t=e.bsPrefix,a=e.variant,c=e.size,d=e.active,p=e.className,f=e.block,m=e.type,h=e.as,v=(0,s.default)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,o.useBootstrapPrefix)(t,"btn"),_=(0,i.default)(p,y,d&&"active",y+"-"+a,f&&y+"-block",c&&y+"-"+c);if(v.href)return u.default.createElement(l.default,(0,r.default)({},v,{as:h,innerRef:n,className:(0,i.default)(_,v.disabled&&"disabled")}));var b=h||"button";return n&&(v.ref=n),u.default.createElement(b,(0,r.default)({},v,{type:m,className:_}))});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var d=c;n.default=d,e.exports=n.default},196:function(e,n,t){"use strict";var a=t(10);n.__esModule=!0,n.default=void 0;var r=a(t(89)),s=a(t(90)),i=a(t(40)),u=a(t(9)),o=a(t(0)),l=a(t(197));function c(e){return!e||"#"===e.trim()}var d=function(e){function n(n,t){var a;return(a=e.call(this,n,t)||this).handleClick=a.handleClick.bind((0,i.default)(a)),a.handleKeyDown=a.handleKeyDown.bind((0,i.default)(a)),a}(0,u.default)(n,e);var t=n.prototype;return t.handleClick=function(e){var n=this.props,t=n.disabled,a=n.href,r=n.onClick;(t||c(a))&&e.preventDefault(),t?e.stopPropagation():r&&r(e)},t.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},t.render=function(){var e=this.props,n=e.as,t=e.disabled,a=e.onKeyDown,i=e.innerRef,u=(0,s.default)(e,["as","disabled","onKeyDown","innerRef"]);return c(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),t&&(u.tabIndex=-1,u["aria-disabled"]=!0),i&&(u.ref=i),o.default.createElement(n,(0,r.default)({},u,{onClick:this.handleClick,onKeyDown:(0,l.default)(this.handleKeyDown,a)}))},n}(o.default.Component);d.defaultProps={as:"a"};var p=d;n.default=p,e.exports=n.default},197:function(e,n,t){"use strict";n.__esModule=!0,n.default=void 0;var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(e){return null!=e}).reduce(function(e,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];e.apply(this,a),n.apply(this,a)}},null)};n.default=a,e.exports=n.default},198:function(e,n,t){"use strict";var a=t(10);n.__esModule=!0,n.default=void 0;var r=a(t(0)).default.createContext({controlId:void 0});n.default=r,e.exports=n.default},199:function(e,n,t){"use strict";var a=function(){};e.exports=a},205:function(e,n){},219:function(e,n,t){"use strict";var a=t(187),r=t(10);n.__esModule=!0,n.default=void 0;var s=r(t(89)),i=r(t(90)),u=r(t(178)),o=a(t(0)),l=r(t(198)),c=t(185),d=o.default.forwardRef(function(e,n){var t=e.bsPrefix,a=e.className,r=e.children,d=e.controlId,p=e.as,f=(0,i.default)(e,["bsPrefix","className","children","controlId","as"]);t=(0,c.useBootstrapPrefix)(t,"form-group");var m=(0,o.useMemo)(function(){return{controlId:d}},[d]);return o.default.createElement(l.default.Provider,{value:m},o.default.createElement(p,(0,s.default)({},f,{ref:n,className:(0,u.default)(a,t)}),r))});d.displayName="FormGroup",d.defaultProps={as:"div"};var p=d;n.default=p,e.exports=n.default},220:function(e,n,t){"use strict";var a=t(187),r=t(10);n.__esModule=!0,n.default=void 0;var s=r(t(89)),i=r(t(90)),u=r(t(178)),o=a(t(0)),l=(r(t(199)),r(t(221))),c=r(t(198)),d=t(185),p=o.default.forwardRef(function(e,n){var t=e.bsPrefix,a=e.column,r=e.srOnly,p=e.className,f=e.htmlFor,m=(0,i.default)(e,["bsPrefix","column","srOnly","className","htmlFor"]),h=(0,o.useContext)(c.default).controlId;t=(0,d.useBootstrapPrefix)(t,"form-label");var v=(0,u.default)(p,t,r&&"sr-only",a&&"col-form-label");return a?o.default.createElement(l.default,(0,s.default)({},m,{className:v,as:"label"})):o.default.createElement("label",(0,s.default)({},m,{htmlFor:f||h,ref:n,className:v}))});p.displayName="FormLabel",p.defaultProps={column:!1,srOnly:!1};var f=p;n.default=f,e.exports=n.default},221:function(e,n,t){"use strict";var a=t(10);n.__esModule=!0,n.default=void 0;var r=a(t(89)),s=a(t(90)),i=a(t(178)),u=a(t(0)),o=t(185),l=["xl","lg","md","sm","xs"],c=u.default.forwardRef(function(e,n){var t=e.bsPrefix,a=e.className,c=e.as,d=(0,s.default)(e,["bsPrefix","className","as"]),p=(0,o.useBootstrapPrefix)(t,"col"),f=[],m=[];return l.forEach(function(e){var n,t,a,r=d[e];if(delete d[e],null!=r&&"object"==typeof r){var s=r.span;n=void 0===s||s,t=r.offset,a=r.order}else n=r;var i="xs"!==e?"-"+e:"";null!=n&&f.push(!0===n?""+p+i:""+p+i+"-"+n),null!=a&&m.push("order"+i+"-"+a),null!=t&&m.push("offset"+i+"-"+t)}),f.length||f.push(p),u.default.createElement(c,(0,r.default)({},d,{ref:n,className:i.default.apply(void 0,[a].concat(f,m))}))});c.displayName="Col",c.defaultProps={as:"div"};var d=c;n.default=d,e.exports=n.default},222:function(e,n,t){"use strict";var a=t(187),r=t(10);n.__esModule=!0,n.default=void 0;var s=r(t(89)),i=r(t(90)),u=r(t(178)),o=a(t(0)),l=(r(t(199)),r(t(223))),c=r(t(198)),d=t(185),p=o.default.forwardRef(function(e,n){var t,a,r=e.bsPrefix,l=e.type,p=e.size,f=e.id,m=e.className,h=e.isValid,v=e.isInvalid,y=e.plaintext,_=e.readOnly,b=e.as,g=(0,i.default)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=(0,o.useContext)(c.default).controlId;if(r=(0,d.useBootstrapPrefix)(r,"form-control"),y)(a={})[r+"-plaintext"]=!0,t=a;else if("file"===l){var w;(w={})[r+"-file"]=!0,t=w}else{var k;(k={})[r]=!0,k[r+"-"+p]=p,t=k}return o.default.createElement(b,(0,s.default)({},g,{type:l,ref:n,readOnly:_,id:f||x,className:(0,u.default)(m,t,h&&"is-valid",v&&"is-invalid")}))});p.displayName="FormControl",p.defaultProps={as:"input"},p.Feedback=l.default;var f=p;n.default=f,e.exports=n.default},223:function(e,n,t){"use strict";var a=t(10);n.__esModule=!0,n.default=void 0;var r=a(t(89)),s=a(t(90)),i=a(t(178)),u=a(t(0)),o=a(t(1)),l={type:o.default.string.isRequired,as:o.default.elementType},c=u.default.forwardRef(function(e,n){var t=e.as,a=e.className,o=e.type,l=(0,s.default)(e,["as","className","type"]);return u.default.createElement(t,(0,r.default)({},l,{ref:n,className:(0,i.default)(a,o&&o+"-feedback")}))});c.displayName="Feedback",c.propTypes=l,c.defaultProps={type:"valid",as:"div"};var d=c;n.default=d,e.exports=n.default},234:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",{style:{position:"fixed",zIndex:"1020",top:"50%",left:"50%",width:"5em",height:"5em",marginTop:"-2.5em",marginLeft:"-2.5em"},className:"spinner-grow text-info"})}}}]);
//# sourceMappingURL=component---src-pages-login-js-ddba0ea90cddf04d016f.js.map