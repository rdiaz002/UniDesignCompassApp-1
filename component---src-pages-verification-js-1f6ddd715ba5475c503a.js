(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t.n(r),s=t(0),i=t.n(s),u=t(196),o=t.n(u),l=t(231),d=t.n(l),p=t(228),c=t.n(p),f=t(229),m=t.n(f),h=t(194),v=t(202),_=t(190),y=t(182);v.Auth.configure(h.a);var x=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleChange=function(e){var n;t.setState(((n={})[e.target.id]=e.target.value,n))},t.handleVerify=function(e){e.preventDefault(),v.Auth.confirmSignUp(t.props.location.state.username,t.state.code).then(function(e){console.log(e),Object(_.c)(t.props.location.state.username,t.props.location.state.first_name,t.props.location.state.last_name,t.props.location.state.email,t.props.location.state.phone,1234).then(function(e){alert("Account Confirmed"),Object(y.c)("/Login")},function(e){alert("Something went wrong"),console.log(e)})},function(e){console.log(e),alert(e.message)})},t.state={code:""},t}return a()(n,e),n.prototype.render=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"Verify"},i.a.createElement("form",{onSubmit:this.handleVerify},i.a.createElement(c.a,{controlId:"code"},i.a.createElement(m.a,null,"Enter Code"),i.a.createElement(d.a,{autoFocus:!0,type:"text",value:this.state.code,onChange:this.handleChange})),i.a.createElement(o.a,{type:"submit"},"Submit"))))},n}(s.Component);n.default=x},179:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===s)for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},182:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var r=t(0),a=t.n(r),s=t(1),i=t.n(s),u=t(39),o=t.n(u);t.d(n,"a",function(){return o.a}),t.d(n,"c",function(){return u.navigate});t(184);var l=a.a.createContext({}),d=function(e){return a.a.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},184:function(e,n,t){var r;e.exports=(r=t(191))&&r.default||r},186:function(e,n,t){"use strict";var r=t(188),a=t(10);n.__esModule=!0,n.useBootstrapPrefix=function(e,n){var t=(0,o.useContext)(l);return e||t.get(n)||n},n.createBootstrapComponent=function(e,n){"string"==typeof n&&(n={prefix:n});var t=e.prototype&&e.prototype.isReactComponent,r=n,a=r.prefix,i=r.forwardRefAs,d=void 0===i?t?"ref":"innerRef":i;return(0,u.default)(function(n,t){var r=(0,s.default)({},n);r[d]=t;var i=(0,o.useContext)(l);return o.default.createElement(e,(0,s.default)({},r,{bsPrefix:r.bsPrefix||i.get(a)||a}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},n.default=n.ThemeConsumer=void 0;var s=a(t(89)),i=a(t(9)),u=a(t(208)),o=r(t(0)),l=o.default.createContext(new Map),d=l.Consumer,p=l.Provider;n.ThemeConsumer=d;var c=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).prefixes=new Map,Object.keys(n.props.prefixes).forEach(function(e){n.prefixes.set(e,n.props.prefixes[e])}),n}return(0,i.default)(n,e),n.prototype.render=function(){return o.default.createElement(p,{value:this.prefixes},this.props.children)},n}(o.default.Component);n.default=c},188:function(e,n){e.exports=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}},189:function(e,n,t){"use strict";var r=function(){};e.exports=r},190:function(e,n,t){"use strict";var r=t(215),a=t.n(r),s=(t(216),t(217)),i=t.n(s),u=t(202),o=t.n(u),l="query GetUser($id: ID!) {\n  getUser(id: $id) {\n    id\n    username\n    first_name\n    last_name\n    email\n    password_hash\n    phone_number\n    processes {\n      items {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n      nextToken\n    }\n  }\n}\n",d="query ListUsers(\n  $filter: ModelUserFilterInput\n  $limit: Int\n  $nextToken: String\n) {\n  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    items {\n      id\n      username\n      first_name\n      last_name\n      email\n      password_hash\n      phone_number\n      processes {\n        nextToken\n      }\n    }\n    nextToken\n  }\n}\n",p="query GetProcess($id: ID!) {\n  getProcess(id: $id) {\n    id\n    phaseids {\n      items {\n        id\n        duration\n        title\n        description\n      }\n      nextToken\n    }\n    user_id\n    user {\n      id\n      username\n      first_name\n      last_name\n      email\n      password_hash\n      phone_number\n      processes {\n        nextToken\n      }\n    }\n    name\n    date_start\n    date_end\n  }\n}\n",c="query GetPhase($id: ID!) {\n  getPhase(id: $id) {\n    id\n    logs {\n      items {\n        id\n        timestamp\n        text\n      }\n      nextToken\n    }\n    duration\n    title\n    description\n    process {\n      id\n      phaseids {\n        nextToken\n      }\n      user_id\n      user {\n        id\n        username\n        first_name\n        last_name\n        email\n        password_hash\n        phone_number\n      }\n      name\n      date_start\n      date_end\n    }\n  }\n}\n",f="mutation CreateUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    id\n    username\n    first_name\n    last_name\n    email\n    password_hash\n    phone_number\n    processes {\n      items {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n      nextToken\n    }\n  }\n}\n",m="mutation UpdateUser($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    id\n    username\n    first_name\n    last_name\n    email\n    password_hash\n    phone_number\n    processes {\n      items {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n      nextToken\n    }\n  }\n}\n",h="mutation CreateProcess($input: CreateProcessInput!) {\n  createProcess(input: $input) {\n    id\n    phaseids {\n      items {\n        id\n        duration\n        title\n        description\n      }\n      nextToken\n    }\n    user_id\n    user {\n      id\n      username\n      first_name\n      last_name\n      email\n      password_hash\n      phone_number\n      processes {\n        nextToken\n      }\n    }\n    name\n    date_start\n    date_end\n  }\n}\n",v="mutation CreatePhase($input: CreatePhaseInput!) {\n  createPhase(input: $input) {\n    id\n    logs {\n      items {\n        id\n        timestamp\n        text\n      }\n      nextToken\n    }\n    duration\n    title\n    description\n    process {\n      id\n      phaseids {\n        nextToken\n      }\n      user_id\n      user {\n        id\n        username\n        first_name\n        last_name\n        email\n        password_hash\n        phone_number\n      }\n      name\n      date_start\n      date_end\n    }\n  }\n}\n",_="mutation UpdatePhase($input: UpdatePhaseInput!) {\n  updatePhase(input: $input) {\n    id\n    logs {\n      items {\n        id\n        timestamp\n        text\n      }\n      nextToken\n    }\n    duration\n    title\n    description\n    process {\n      id\n      phaseids {\n        nextToken\n      }\n      user_id\n      user {\n        id\n        username\n        first_name\n        last_name\n        email\n        password_hash\n        phone_number\n      }\n      name\n      date_start\n      date_end\n    }\n  }\n}\n",y="mutation CreateLog($input: CreateLogInput!) {\n  createLog(input: $input) {\n    id\n    timestamp\n    text\n    phase {\n      id\n      logs {\n        nextToken\n      }\n      duration\n      title\n      description\n      process {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n    }\n  }\n}\n",x="mutation UpdateLog($input: UpdateLogInput!) {\n  updateLog(input: $input) {\n    id\n    timestamp\n    text\n    phase {\n      id\n      logs {\n        nextToken\n      }\n      duration\n      title\n      description\n      process {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n    }\n  }\n}\n",b="mutation DeleteLog($input: DeleteLogInput!) {\n  deleteLog(input: $input) {\n    id\n    timestamp\n    text\n    phase {\n      id\n      logs {\n        nextToken\n      }\n      duration\n      title\n      description\n      process {\n        id\n        user_id\n        name\n        date_start\n        date_end\n      }\n    }\n  }\n}\n",g=t(194);function w(e){return P.apply(this,arguments)}function P(){return(P=i()(a.a.mark(function e(n){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(l,{id:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return O.apply(this,arguments)}function O(){return(O=i()(a.a.mark(function e(n){var t,r,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:{eq:n}},e.next=3,u.API.graphql(Object(u.graphqlOperation)(d,{filter:t}));case 3:return r=e.sent,e.next=6,w(r.data.listUsers.items[0].id);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function q(e){return I.apply(this,arguments)}function I(){return(I=i()(a.a.mark(function e(n){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(p,{id:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e){return j.apply(this,arguments)}function j(){return(j=i()(a.a.mark(function e(n){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(c,{id:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e,n,t,r,a,s){return T.apply(this,arguments)}function T(){return(T=i()(a.a.mark(function e(n,t,r,s,i,o){var l,d;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l={username:n,first_name:t,last_name:r,email:s,password_hash:o,phone_number:i},e.next=3,u.API.graphql(Object(u.graphqlOperation)(f,{input:l}));case 3:return d=e.sent,e.abrupt("return",d);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e,n,t){return $.apply(this,arguments)}function $(){return($=i()(a.a.mark(function e(n,t,r){var s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={timestamp:t,text:r,logPhaseId:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(y,{input:s}));case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,n,t,r){return R.apply(this,arguments)}function R(){return(R=i()(a.a.mark(function e(n,t,r,s){var i,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={user_id:n,name:t,date_start:r,date_end:s,processUserId:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(h,{input:i}));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(e,n,t){return M.apply(this,arguments)}function M(){return(M=i()(a.a.mark(function e(n,t,r){var s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={title:t,description:r,duration:"0000000",phaseProcessId:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(v,{input:s}));case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e){return L.apply(this,arguments)}function L(){return(L=i()(a.a.mark(function e(n){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.API.graphql(Object(u.graphqlOperation)(m,{input:n}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(e,n,t){return z.apply(this,arguments)}function z(){return(z=i()(a.a.mark(function e(n,t,r){var s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return",null);case 2:return s={id:n,timestamp:t,text:r},e.next=5,u.API.graphql(Object(u.graphqlOperation)(x,{input:s}));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function B(e,n,t,r){return K.apply(this,arguments)}function K(){return(K=i()(a.a.mark(function e(n,t,r,s){var i,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={id:n,duration:t,title:r,description:s},e.next=3,u.API.graphql(Object(u.graphqlOperation)(_,{input:i}));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e){return V.apply(this,arguments)}function V(){return(V=i()(a.a.mark(function e(n){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:n},e.next=3,u.API.graphql(Object(u.graphqlOperation)(b,{input:t}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function G(e,n,t){return J.apply(this,arguments)}function J(){return(J=i()(a.a.mark(function e(n,t,r){var s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(n.id,t,"0000000","00000000").then(function(e){s=e.data.createProcess},function(e){console.log(e)});case 2:i=0;case 3:if(!(i<r.length)){e.next=9;break}return e.next=6,U(s.id,r[i].title,r[i].description);case 6:i++,e.next=3;break;case 9:return e.abrupt("return",q(s.id));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.d(n,"g",function(){return w}),t.d(n,"h",function(){return k}),t.d(n,"f",function(){return q}),t.d(n,"e",function(){return C}),t.d(n,"c",function(){return N}),t.d(n,"a",function(){return E}),t.d(n,"k",function(){return D}),t.d(n,"i",function(){return F}),t.d(n,"j",function(){return B}),t.d(n,"d",function(){return S}),t.d(n,"b",function(){return G}),o.a.configure(g.a)},191:function(e,n,t){"use strict";t.r(n);t(29);var r=t(0),a=t.n(r),s=t(1),i=t.n(s),u=t(66),o=t(3),l=function(e){var n=e.location,t=o.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l},194:function(e,n,t){"use strict";n.a={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://tlpgdp57nbdkxd56oozfo5ilve.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-cef5ti5kdzduhd5hpfmirz5k44",aws_cognito_identity_pool_id:"us-east-1:081859b3-b4f7-4f0b-832c-2d199686e884",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_YTLNM43zQ",aws_user_pools_web_client_id:"6jjcu7qj7co9fjhu89cogi7tad",oauth:{},aws_content_delivery_bucket:"niesignompasspp-20190501181012-hostingbucket-dev",aws_content_delivery_bucket_region:"us-east-1",aws_content_delivery_url:"https://dwgjvy2m8ou08.cloudfront.net"}},196:function(e,n,t){"use strict";var r=t(10);n.__esModule=!0,n.default=void 0;var a=r(t(89)),s=r(t(90)),i=r(t(179)),u=r(t(0)),o=t(186),l=r(t(199)),d=u.default.forwardRef(function(e,n){var t=e.bsPrefix,r=e.variant,d=e.size,p=e.active,c=e.className,f=e.block,m=e.type,h=e.as,v=(0,s.default)(e,["bsPrefix","variant","size","active","className","block","type","as"]),_=(0,o.useBootstrapPrefix)(t,"btn"),y=(0,i.default)(c,_,p&&"active",_+"-"+r,f&&_+"-block",d&&_+"-"+d);if(v.href)return u.default.createElement(l.default,(0,a.default)({},v,{as:h,innerRef:n,className:(0,i.default)(y,v.disabled&&"disabled")}));var x=h||"button";return n&&(v.ref=n),u.default.createElement(x,(0,a.default)({},v,{type:m,className:y}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var p=d;n.default=p,e.exports=n.default},199:function(e,n,t){"use strict";var r=t(10);n.__esModule=!0,n.default=void 0;var a=r(t(89)),s=r(t(90)),i=r(t(40)),u=r(t(9)),o=r(t(0)),l=r(t(200));function d(e){return!e||"#"===e.trim()}var p=function(e){function n(n,t){var r;return(r=e.call(this,n,t)||this).handleClick=r.handleClick.bind((0,i.default)(r)),r.handleKeyDown=r.handleKeyDown.bind((0,i.default)(r)),r}(0,u.default)(n,e);var t=n.prototype;return t.handleClick=function(e){var n=this.props,t=n.disabled,r=n.href,a=n.onClick;(t||d(r))&&e.preventDefault(),t?e.stopPropagation():a&&a(e)},t.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},t.render=function(){var e=this.props,n=e.as,t=e.disabled,r=e.onKeyDown,i=e.innerRef,u=(0,s.default)(e,["as","disabled","onKeyDown","innerRef"]);return d(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),t&&(u.tabIndex=-1,u["aria-disabled"]=!0),i&&(u.ref=i),o.default.createElement(n,(0,a.default)({},u,{onClick:this.handleClick,onKeyDown:(0,l.default)(this.handleKeyDown,r)}))},n}(o.default.Component);p.defaultProps={as:"a"};var c=p;n.default=c,e.exports=n.default},200:function(e,n,t){"use strict";n.__esModule=!0,n.default=void 0;var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(e){return null!=e}).reduce(function(e,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}},null)};n.default=r,e.exports=n.default},201:function(e,n,t){"use strict";var r=t(10);n.__esModule=!0,n.default=void 0;var a=r(t(0)).default.createContext({controlId:void 0});n.default=a,e.exports=n.default},204:function(e,n){},208:function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){var t=void 0===n?{}:n,r=t.propTypes,s=t.defaultProps,i=t.allowFallback,u=void 0!==i&&i,o=t.displayName,l=void 0===o?e.name||e.displayName:o,d=function(n,t){return e(n,t)};return Object.assign(a.default.forwardRef||!u?a.default.forwardRef(d):function(e){return d(e,null)},{displayName:l,propTypes:r,defaultProps:s})};var r,a=(r=t(0))&&r.__esModule?r:{default:r}},228:function(e,n,t){"use strict";var r=t(188),a=t(10);n.__esModule=!0,n.default=void 0;var s=a(t(89)),i=a(t(90)),u=a(t(179)),o=r(t(0)),l=a(t(201)),d=t(186),p=o.default.forwardRef(function(e,n){var t=e.bsPrefix,r=e.className,a=e.children,p=e.controlId,c=e.as,f=(0,i.default)(e,["bsPrefix","className","children","controlId","as"]);t=(0,d.useBootstrapPrefix)(t,"form-group");var m=(0,o.useMemo)(function(){return{controlId:p}},[p]);return o.default.createElement(l.default.Provider,{value:m},o.default.createElement(c,(0,s.default)({},f,{ref:n,className:(0,u.default)(r,t)}),a))});p.displayName="FormGroup",p.defaultProps={as:"div"};var c=p;n.default=c,e.exports=n.default},229:function(e,n,t){"use strict";var r=t(188),a=t(10);n.__esModule=!0,n.default=void 0;var s=a(t(89)),i=a(t(90)),u=a(t(179)),o=r(t(0)),l=(a(t(189)),a(t(230))),d=a(t(201)),p=t(186),c=o.default.forwardRef(function(e,n){var t=e.bsPrefix,r=e.column,a=e.srOnly,c=e.className,f=e.htmlFor,m=(0,i.default)(e,["bsPrefix","column","srOnly","className","htmlFor"]),h=(0,o.useContext)(d.default).controlId;t=(0,p.useBootstrapPrefix)(t,"form-label");var v=(0,u.default)(c,t,a&&"sr-only",r&&"col-form-label");return r?o.default.createElement(l.default,(0,s.default)({},m,{className:v,as:"label"})):o.default.createElement("label",(0,s.default)({},m,{htmlFor:f||h,ref:n,className:v}))});c.displayName="FormLabel",c.defaultProps={column:!1,srOnly:!1};var f=c;n.default=f,e.exports=n.default},230:function(e,n,t){"use strict";var r=t(10);n.__esModule=!0,n.default=void 0;var a=r(t(89)),s=r(t(90)),i=r(t(179)),u=r(t(0)),o=t(186),l=["xl","lg","md","sm","xs"],d=u.default.forwardRef(function(e,n){var t=e.bsPrefix,r=e.className,d=e.as,p=(0,s.default)(e,["bsPrefix","className","as"]),c=(0,o.useBootstrapPrefix)(t,"col"),f=[],m=[];return l.forEach(function(e){var n,t,r,a=p[e];if(delete p[e],null!=a&&"object"==typeof a){var s=a.span;n=void 0===s||s,t=a.offset,r=a.order}else n=a;var i="xs"!==e?"-"+e:"";null!=n&&f.push(!0===n?""+c+i:""+c+i+"-"+n),null!=r&&m.push("order"+i+"-"+r),null!=t&&m.push("offset"+i+"-"+t)}),f.length||f.push(c),u.default.createElement(d,(0,a.default)({},p,{ref:n,className:i.default.apply(void 0,[r].concat(f,m))}))});d.displayName="Col",d.defaultProps={as:"div"};var p=d;n.default=p,e.exports=n.default},231:function(e,n,t){"use strict";var r=t(188),a=t(10);n.__esModule=!0,n.default=void 0;var s=a(t(89)),i=a(t(90)),u=a(t(179)),o=r(t(0)),l=(a(t(189)),a(t(232))),d=a(t(201)),p=t(186),c=o.default.forwardRef(function(e,n){var t,r,a=e.bsPrefix,l=e.type,c=e.size,f=e.id,m=e.className,h=e.isValid,v=e.isInvalid,_=e.plaintext,y=e.readOnly,x=e.as,b=(0,i.default)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),g=(0,o.useContext)(d.default).controlId;if(a=(0,p.useBootstrapPrefix)(a,"form-control"),_)(r={})[a+"-plaintext"]=!0,t=r;else if("file"===l){var w;(w={})[a+"-file"]=!0,t=w}else{var P;(P={})[a]=!0,P[a+"-"+c]=c,t=P}return o.default.createElement(x,(0,s.default)({},b,{type:l,ref:n,readOnly:y,id:f||g,className:(0,u.default)(m,t,h&&"is-valid",v&&"is-invalid")}))});c.displayName="FormControl",c.defaultProps={as:"input"},c.Feedback=l.default;var f=c;n.default=f,e.exports=n.default},232:function(e,n,t){"use strict";var r=t(10);n.__esModule=!0,n.default=void 0;var a=r(t(89)),s=r(t(90)),i=r(t(179)),u=r(t(0)),o=r(t(1)),l={type:o.default.string.isRequired,as:o.default.elementType},d=u.default.forwardRef(function(e,n){var t=e.as,r=e.className,o=e.type,l=(0,s.default)(e,["as","className","type"]);return u.default.createElement(t,(0,a.default)({},l,{ref:n,className:(0,i.default)(r,o&&o+"-feedback")}))});d.displayName="Feedback",d.propTypes=l,d.defaultProps={type:"valid",as:"div"};var p=d;n.default=p,e.exports=n.default}}]);
//# sourceMappingURL=component---src-pages-verification-js-1f6ddd715ba5475c503a.js.map