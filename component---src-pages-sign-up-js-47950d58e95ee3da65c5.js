(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{170:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),l=a(0),o=a.n(l),s=a(194),i=a.n(s),u=a(222),c=a.n(u),d=a(219),f=a.n(d),p=a(220),m=a.n(p),v=a(186),h=a(193),y=a(201),b=a(190);y.Auth.configure(h.a);var g=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.id]=e.target.value,t))},a.handleCreate=function(e){if(e.preventDefault(),a.comparePasswords()){var t={username:a.state.username,password:a.state.password,attributes:{email:a.state.email,phone_number:a.state.phone}};y.Auth.signUp(t).then(function(e){alert("Check your email for Verification code"),Object(v.b)("/Verification",{state:{username:a.state.username,first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,phone:a.state.phone}})},function(e){console.log(e),alert(e.message)})}else alert("Passwords do not match")},a.comparePasswords=function(){return a.state.password===a.state.repeat_pass},a.state={first_name:" ",last_name:" ",email:"",password:"",repeat_pass:"",username:"",phone:""},a}return r()(t,e),t.prototype.render=function(){return o.a.createElement(b.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"SignUp"},o.a.createElement("form",{onSubmit:this.handleCreate},o.a.createElement(f.a,{controlId:"first_name"},o.a.createElement(m.a,null,"First name"),o.a.createElement(c.a,{placeholder:"jon",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"last_name"},o.a.createElement(m.a,null,"Last name"),o.a.createElement(c.a,{placeholder:"doe",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"username"},o.a.createElement(m.a,null,"Username"),o.a.createElement(c.a,{placeholder:"jondoe1",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"email"},o.a.createElement(m.a,null,"email"),o.a.createElement(c.a,{placeholder:"john.doe@email.com",autoFocus:!0,type:"text",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"password"},o.a.createElement(m.a,null,"New Password"),o.a.createElement(c.a,{placeholder:"New Password",autoFocus:!0,type:"password",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"repeat_pass"},o.a.createElement(m.a,null,"Confirm Password"),o.a.createElement(c.a,{autoFocus:!0,type:"password",onChange:this.handleChange})),o.a.createElement(f.a,{controlId:"phone"},o.a.createElement(m.a,null,"Phone Number"),o.a.createElement(c.a,{placeholder:"+###########",autoFocus:!0,type:"tel",onChange:this.handleChange})),o.a.createElement(i.a,{type:"submit"},"Submit")))))},t}(l.Component);t.default=g},182:function(e,t,a){var n;e.exports=(n=a(188))&&n.default||n},184:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return o});var n=a(31),r=function(e){return function(t){t({type:n.a,payload:e})}},l=function(e){return function(t){t({type:n.c,payload:e})}},o=function(){return function(e){e({type:n.b})}}},185:function(e,t,a){"use strict";var n=a(187),r=a(10);t.__esModule=!0,t.useBootstrapPrefix=function(e,t){var a=(0,i.useContext)(u);return e||a.get(t)||t},t.createBootstrapComponent=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,r=n.prefix,o=n.forwardRefAs,c=void 0===o?a?"ref":"innerRef":o;return(0,s.default)(function(t,a){var n=(0,l.default)({},t);n[c]=a;var o=(0,i.useContext)(u);return i.default.createElement(e,(0,l.default)({},n,{bsPrefix:n.bsPrefix||o.get(r)||r}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},t.default=t.ThemeConsumer=void 0;var l=r(a(89)),o=r(a(9)),s=r(a(204)),i=n(a(0)),u=i.default.createContext(new Map),c=u.Consumer,d=u.Provider;t.ThemeConsumer=c;var f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.keys(t.props.prefixes).forEach(function(e){t.prefixes.set(e,t.props.prefixes[e])}),t}return(0,o.default)(t,e),t.prototype.render=function(){return i.default.createElement(d,{value:this.prefixes},this.props.children)},t}(i.default.Component);t.default=f},186:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(0),r=a.n(n),l=a(1),o=a.n(l),s=a(39);a.d(t,"b",function(){return s.navigate});a(182);var i=r.a.createContext({}),u=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},187:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}},188:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),s=a(66),i=a(3),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},190:function(e,t,a){"use strict";var n=a(191),r=a(0),l=a.n(r),o=a(1),s=a.n(o),i=a(186),u=function(){return l.a.createElement("footer",{className:"text-center"},l.a.createElement("div",{className:"footer-container"},l.a.createElement("p",null,"Designed by Ronuel Diaz | Jeter Gutierrez | Kelly Lu | Ramon Petgrave | Abraham B. Villaroman"),l.a.createElement("p",null,"© 2019 Universal Design Compass. All right reserved.")))},c=(a(203),a(17)),d=a(285),f=a(550),p=a(549),m=a(64),v=a(184),h=function(e){return l.a.createElement(f.a,{collapseOnSelect:!0,sticky:"top",expand:"md",bg:"dark",variant:"dark"},l.a.createElement(f.a.Brand,{variant:"light"},l.a.createElement(c.Link,{to:e.isAuthenticated?"/Dashboard":"/",style:y.link}," ",e.siteTitle)),l.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"justify-content-end"},e.isAuthenticated?function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"nav-link"},l.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"create",to:"/Create"},"Create Compass")),l.a.createElement(d.a,{className:"nav-link"},l.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"dashboard",to:"/Dashboard"},"Dashboard")),l.a.createElement(d.a,{className:"nav-link"},l.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"profile",to:"/Profile"},"Profile")),l.a.createElement(d.a,{className:"nav-link"},l.a.createElement(c.Link,{style:y.link,rel:"logout",to:"/",onClick:function(){e.logOutUser(),Object(c.navigate)("/")}},"Logout")))}(e):l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"nav-link"},l.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"about",to:"/About"},"About")),l.a.createElement(d.a,{className:"nav-link"},l.a.createElement(c.Link,{style:y.link,activeStyle:y.linkActive,rel:"login",to:"/Login"},"Login"))))))},y={link:{color:"white",textDecoration:"none"},linkActive:{textDecoration:"underline"}};h.propsTypes={isAuthenticated:s.a.bool,authenticateUser:s.a.func};var b=Object(m.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{logOutUser:function(){return e(Object(v.b)())}}})(h),g=(a(161),function(e){var t=e.children;return l.a.createElement(i.a,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(u,null))},data:n})});g.propTypes={children:s.a.node.isRequired};t.a=g},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass"}}}}},193:function(e,t,a){"use strict";t.a={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://tlpgdp57nbdkxd56oozfo5ilve.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-5d2jinp73vdnlhogy3pcffpvbu",aws_cognito_identity_pool_id:"us-east-1:081859b3-b4f7-4f0b-832c-2d199686e884",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_YTLNM43zQ",aws_user_pools_web_client_id:"6jjcu7qj7co9fjhu89cogi7tad",oauth:{},aws_content_delivery_bucket:"niesignompasspp-20190501181012-hostingbucket-dev",aws_content_delivery_bucket_region:"us-east-1",aws_content_delivery_url:"https://dwgjvy2m8ou08.cloudfront.net"}},194:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(178)),s=n(a(0)),i=a(185),u=n(a(196)),c=s.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.variant,c=e.size,d=e.active,f=e.className,p=e.block,m=e.type,v=e.as,h=(0,l.default)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,i.useBootstrapPrefix)(a,"btn"),b=(0,o.default)(f,y,d&&"active",y+"-"+n,p&&y+"-block",c&&y+"-"+c);if(h.href)return s.default.createElement(u.default,(0,r.default)({},h,{as:v,innerRef:t,className:(0,o.default)(b,h.disabled&&"disabled")}));var g=v||"button";return t&&(h.ref=t),s.default.createElement(g,(0,r.default)({},h,{type:m,className:b}))});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var d=c;t.default=d,e.exports=t.default},196:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(40)),s=n(a(9)),i=n(a(0)),u=n(a(197));function c(e){return!e||"#"===e.trim()}var d=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).handleClick=n.handleClick.bind((0,o.default)(n)),n.handleKeyDown=n.handleKeyDown.bind((0,o.default)(n)),n}(0,s.default)(t,e);var a=t.prototype;return a.handleClick=function(e){var t=this.props,a=t.disabled,n=t.href,r=t.onClick;(a||c(n))&&e.preventDefault(),a?e.stopPropagation():r&&r(e)},a.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},a.render=function(){var e=this.props,t=e.as,a=e.disabled,n=e.onKeyDown,o=e.innerRef,s=(0,l.default)(e,["as","disabled","onKeyDown","innerRef"]);return c(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),a&&(s.tabIndex=-1,s["aria-disabled"]=!0),o&&(s.ref=o),i.default.createElement(t,(0,r.default)({},s,{onClick:this.handleClick,onKeyDown:(0,u.default)(this.handleKeyDown,n)}))},t}(i.default.Component);d.defaultProps={as:"a"};var f=d;t.default=f,e.exports=t.default},197:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},null)};t.default=n,e.exports=t.default},198:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(0)).default.createContext({controlId:void 0});t.default=r,e.exports=t.default},199:function(e,t,a){"use strict";var n=function(){};e.exports=n},205:function(e,t){},219:function(e,t,a){"use strict";var n=a(187),r=a(10);t.__esModule=!0,t.default=void 0;var l=r(a(89)),o=r(a(90)),s=r(a(178)),i=n(a(0)),u=r(a(198)),c=a(185),d=i.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,r=e.children,d=e.controlId,f=e.as,p=(0,o.default)(e,["bsPrefix","className","children","controlId","as"]);a=(0,c.useBootstrapPrefix)(a,"form-group");var m=(0,i.useMemo)(function(){return{controlId:d}},[d]);return i.default.createElement(u.default.Provider,{value:m},i.default.createElement(f,(0,l.default)({},p,{ref:t,className:(0,s.default)(n,a)}),r))});d.displayName="FormGroup",d.defaultProps={as:"div"};var f=d;t.default=f,e.exports=t.default},220:function(e,t,a){"use strict";var n=a(187),r=a(10);t.__esModule=!0,t.default=void 0;var l=r(a(89)),o=r(a(90)),s=r(a(178)),i=n(a(0)),u=(r(a(199)),r(a(221))),c=r(a(198)),d=a(185),f=i.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.column,r=e.srOnly,f=e.className,p=e.htmlFor,m=(0,o.default)(e,["bsPrefix","column","srOnly","className","htmlFor"]),v=(0,i.useContext)(c.default).controlId;a=(0,d.useBootstrapPrefix)(a,"form-label");var h=(0,s.default)(f,a,r&&"sr-only",n&&"col-form-label");return n?i.default.createElement(u.default,(0,l.default)({},m,{className:h,as:"label"})):i.default.createElement("label",(0,l.default)({},m,{htmlFor:p||v,ref:t,className:h}))});f.displayName="FormLabel",f.defaultProps={column:!1,srOnly:!1};var p=f;t.default=p,e.exports=t.default},221:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(178)),s=n(a(0)),i=a(185),u=["xl","lg","md","sm","xs"],c=s.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,c=e.as,d=(0,l.default)(e,["bsPrefix","className","as"]),f=(0,i.useBootstrapPrefix)(a,"col"),p=[],m=[];return u.forEach(function(e){var t,a,n,r=d[e];if(delete d[e],null!=r&&"object"==typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&m.push("order"+o+"-"+n),null!=a&&m.push("offset"+o+"-"+a)}),p.length||p.push(f),s.default.createElement(c,(0,r.default)({},d,{ref:t,className:o.default.apply(void 0,[n].concat(p,m))}))});c.displayName="Col",c.defaultProps={as:"div"};var d=c;t.default=d,e.exports=t.default},222:function(e,t,a){"use strict";var n=a(187),r=a(10);t.__esModule=!0,t.default=void 0;var l=r(a(89)),o=r(a(90)),s=r(a(178)),i=n(a(0)),u=(r(a(199)),r(a(223))),c=r(a(198)),d=a(185),f=i.default.forwardRef(function(e,t){var a,n,r=e.bsPrefix,u=e.type,f=e.size,p=e.id,m=e.className,v=e.isValid,h=e.isInvalid,y=e.plaintext,b=e.readOnly,g=e.as,E=(0,o.default)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),_=(0,i.useContext)(c.default).controlId;if(r=(0,d.useBootstrapPrefix)(r,"form-control"),y)(n={})[r+"-plaintext"]=!0,a=n;else if("file"===u){var w;(w={})[r+"-file"]=!0,a=w}else{var x;(x={})[r]=!0,x[r+"-"+f]=f,a=x}return i.default.createElement(g,(0,l.default)({},E,{type:u,ref:t,readOnly:b,id:p||_,className:(0,s.default)(m,a,v&&"is-valid",h&&"is-invalid")}))});f.displayName="FormControl",f.defaultProps={as:"input"},f.Feedback=u.default;var p=f;t.default=p,e.exports=t.default},223:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r=n(a(89)),l=n(a(90)),o=n(a(178)),s=n(a(0)),i=n(a(1)),u={type:i.default.string.isRequired,as:i.default.elementType},c=s.default.forwardRef(function(e,t){var a=e.as,n=e.className,i=e.type,u=(0,l.default)(e,["as","className","type"]);return s.default.createElement(a,(0,r.default)({},u,{ref:t,className:(0,o.default)(n,i&&i+"-feedback")}))});c.displayName="Feedback",c.propTypes=u,c.defaultProps={type:"valid",as:"div"};var d=c;t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-sign-up-js-47950d58e95ee3da65c5.js.map