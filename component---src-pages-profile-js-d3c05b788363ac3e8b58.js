(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(e,t,n){"use strict";n.r(t);n(209);var a=n(9),r=n.n(a),l=n(0),i=n.n(l),o=n(254),c=n(200),s=Object(c.a)("card-columns"),u=n(12),m=n(16),d=n(29),p=(n(538),n(234)),E=n.n(p),f=n(541),b=n(319),v=n(255),h=n(235),y=n(218),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getControlledId=function(e){return t.getKey(e,"tabpane")},t.getControllerId=function(e){return t.getKey(e,"tab")},t.state={tabContext:{onSelect:t.props.onSelect,activeKey:t.props.activeKey,transition:t.props.transition,mountOnEnter:t.props.mountOnEnter,unmountOnExit:t.props.unmountOnExit,getControlledId:t.getControlledId,getControllerId:t.getControllerId}},t}Object(d.a)(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.activeKey,a=e.mountOnEnter,r=e.unmountOnExit,l=e.transition;return{tabContext:Object(u.a)({},t.tabContext,{activeKey:n,mountOnEnter:a,unmountOnExit:r,transition:l})}};var n=t.prototype;return n.getKey=function(e,t){var n=this.props,a=n.generateChildId,r=n.id;return a?a(e,t):r?r+"-"+t+"-"+e:null},n.render=function(){var e=this.props,t=e.children,n=e.onSelect;return i.a.createElement(h.a.Provider,{value:this.state.tabContext},i.a.createElement(y.a.Provider,{value:n},t))},t}(i.a.Component),g=E()(O,{activeKey:"onSelect"}),x=n(178),C=n.n(x),j=n(183),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.as,a=e.className,r=Object(m.a)(e,["bsPrefix","as","className"]);return i.a.createElement(n,Object(u.a)({},r,{className:C()(a,t)}))},t}(i.a.Component);N.defaultProps={as:"div"};var k,P=Object(j.a)(N,"tab-content"),S=n(263),w=n.n(S),T=n(262),A=n.n(T),K=n(264),R=((k={})[S.ENTERING]="show",k[S.ENTERED]="show",k),q=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){Object(K.a)(e),t.props.onEnter&&t.props.onEnter(e)},t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,a=Object(m.a)(e,["className","children"]);return i.a.createElement(w.a,Object(u.a)({addEndListener:A.a},a,{onEnter:this.handleEnter}),function(e,a){return i.a.cloneElement(n,Object(u.a)({},a,{className:C()("fade",t,n.props.className,R[e])}))})},t}(i.a.Component);q.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var F=q;var I=i.a.forwardRef(function(e,t){var n=function(e){var t=Object(l.useContext)(h.a);if(!t)return e;var n=t.activeKey,a=t.getControlledId,r=t.getControllerId,i=Object(m.a)(t,["activeKey","getControlledId","getControllerId"]),o=!1!==e.transition&&!1!==i.transition,c=Object(y.b)(e.eventKey);return Object(u.a)({},e,{active:null==e.active&&null!=c?Object(y.b)(n)===c:e.active,id:a(e.eventKey),"aria-labelledby":r(e.eventKey),transition:o&&(e.transition||i.transition||F),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:i.unmountOnExit})}(e),a=n.bsPrefix,r=n.className,o=n.active,c=n.onEnter,s=n.onEntering,d=n.onEntered,p=n.onExit,E=n.onExiting,f=n.onExited,b=n.mountOnEnter,v=n.unmountOnExit,O=n.transition,g=n.as,x=void 0===g?"div":g,N=(n.eventKey,Object(m.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),k=Object(j.b)(a,"tab-pane");if(!o&&v)return null;var P=i.a.createElement(x,Object(u.a)({},N,{ref:t,role:"tabpanel","aria-hidden":!o,className:C()(r,k,{active:o})}));return O&&(P=i.a.createElement(O,{in:o,onEnter:c,onEntering:s,onEntered:d,onExit:p,onExiting:E,onExited:f,mountOnEnter:b,unmountOnExit:b},P)),i.a.createElement(h.a.Provider,{value:null},i.a.createElement(y.a.Provider,{value:null},P))});I.displayName="TabPane";var _=I;function B(e,t){var n=0;return i.a.Children.map(e,function(e){return i.a.isValidElement(e)?t(e,n++):e})}var L=g.ControlledComponent;function V(e){var t;return function(e,t){var n=0;i.a.Children.forEach(e,function(e){i.a.isValidElement(e)&&t(e,n++)})}(e,function(e){null==t&&(t=e.props.eventKey)}),t}var D=function(e){function t(){return e.apply(this,arguments)||this}Object(d.a)(t,e);var n=t.prototype;return n.renderTab=function(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,l=t.tabClassName;return null==n?null:i.a.createElement(v.a,{as:b.a,eventKey:a,disabled:r,className:l},n)},n.render=function(){var e=this.props,t=e.id,n=e.onSelect,a=e.transition,r=e.mountOnEnter,l=e.unmountOnExit,o=e.children,c=e.activeKey,s=void 0===c?V(o):c,d=Object(m.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return i.a.createElement(L,{id:t,activeKey:s,onSelect:n,transition:a,mountOnEnter:r,unmountOnExit:l},i.a.createElement(f.a,Object(u.a)({},d,{role:"tablist",as:"nav"}),B(o,this.renderTab)),i.a.createElement(P,null,B(o,function(e){var t=Object(u.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.a.createElement(_,t)})))},t}(i.a.Component);D.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};var U=E()(D,{activeKey:"onSelect"}),M=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);M.Container=g,M.Content=P,M.Pane=_;var G=M,J=n(189),z=n(64),H=n(184),Q=n(40),W=n.n(Q),X=n(1),Y=n.n(X),Z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onClick=function(){t.props.onClick(t.props.label,t.props.change)},t}return r()(t,e),t.prototype.render=function(){var e=this.onClick,t=this.props,n=t.isOpen,a=t.label,r=t.change;return i.a.createElement("div",{style:{background:n?"#EBEBEB":"#FFFFFF",borderTop:"1px solid #008f68",padding:"5px 10px"}},i.a.createElement("div",{onClick:e,style:{cursor:"pointer"}},i.a.createElement("div",{className:"row"},i.a.createElement("h3",{className:"label col-3"},a),i.a.createElement("span",{className:"col-6"},r),i.a.createElement("div",{style:{float:"right"}},!n&&i.a.createElement("span",null,"▲"),n&&i.a.createElement("span",null,"▼")))),n&&i.a.createElement("div",{style:{background:"#EBEBEB",marginTop:10,padding:"10px 20px"}},this.props.children,i.a.createElement("input",{class:"cancel",value:"Cancel",type:"button",onClick:e})))},t}(l.Component);Z.propTypes={children:Y.a.instanceOf(Object).isRequired,isOpen:Y.a.bool.isRequired,label:Y.a.string.isRequired,change:Y.a.string.isRequired,onClick:Y.a.func.isRequired};var $=Z,ee=function(e){function t(t){var n;(n=e.call(this,t)||this).onClick=function(e){var t,a=!!W()(n).state.openSections[e];n.setState({openSections:(t={},t[e]=!a,t)})};return n.state={openSections:{}},n}return r()(t,e),t.prototype.render=function(){var e=this.onClick,t=this.props.children,n=this.state.openSections;return i.a.createElement("div",{style:{}},t.map(function(t){return i.a.createElement($,{isOpen:!!n[t.props.label],label:t.props.label,change:t.props.change,onClick:e},t.props.children)}))},t}(l.Component);ee.propTypes={children:Y.a.instanceOf(Object).isRequired};var te=ee,ne=function(e){function t(){var t;return(t=e.call(this)||this).state={first_name:"",last_name:"",email:"",phone_number:"",processes:{items:[],nextToken:null},username:""},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.user,t=e.first_name,n=e.last_name,a=e.email,r=e.phone_number,l=e.processes,i=e.username;this.setState({first_name:t,last_name:n,email:a,phone_number:r,processes:l,username:i})},n.render=function(){var e=this.state,t=e.first_name,n=e.last_name,a=e.email,r=e.phone_number,l=e.username,c=this.state.processes.items.map(function(e){return i.a.createElement(o.a,null,i.a.createElement(o.a.Body,null,i.a.createElement(o.a.Title,null,e.name),i.a.createElement("a",{href:"#",class:"card-link"},"Compass Link"),i.a.createElement("a",{href:"#",class:"card-link"},"Analytics Link")),i.a.createElement(o.a.Footer,null,i.a.createElement("small",{className:"text-muted"},"Last updated ",e.date_end)))}),u=null===this.state.processes?i.a.createElement("span",null,"There are no projects."):i.a.createElement(s,null,c);return i.a.createElement(J.a,null,i.a.createElement(U,{defailtActiveKey:"projects",transitions:!1,style:{width:"100%"}},i.a.createElement(G,{eventKey:"projects",title:"Projects"},i.a.createElement("h2",{className:"text-center"},"Projects"),i.a.createElement("div",{id:"processes",className:"container"},u)),i.a.createElement(G,{eventKey:"settings",title:"Settings"},i.a.createElement("h2",{className:"text-center"},"General Account Settings"),i.a.createElement("div",{id:"account-settings",className:"container"},i.a.createElement(te,null,i.a.createElement("div",{label:"Name",change:t+" "+n},i.a.createElement("form",null,"First Name: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"firstName",defaultValue:t}),"Last Name: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"lastName",defaultValue:n})),i.a.createElement("input",{class:"submit",value:"Submit Changes",type:"button"})),i.a.createElement("div",{label:"Username",change:l},i.a.createElement("form",null,"Username: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"username",defaultValue:l})),i.a.createElement("input",{class:"submit",value:"Submit Changes",type:"button"})),i.a.createElement("div",{label:"E-Mail",change:a},i.a.createElement("form",null,"E-Mail: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"email",defaultValue:a})),i.a.createElement("input",{class:"submit",value:"Submit Changes",type:"button"})),i.a.createElement("div",{label:"Password",change:"**********"},i.a.createElement("form",null,"Current Password: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"password",defaultValue:""}),"New Password: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"password",defaultValue:""})),i.a.createElement("input",{class:"submit",value:"Submit Changes",type:"button"})),i.a.createElement("div",{label:"Phone Number",change:r},i.a.createElement("form",null,"Phone Number: ",i.a.createElement("input",{className:"col input-text",type:"text",name:"email",defaultValue:r})),i.a.createElement("input",{class:"submit",value:"Submit Changes",type:"button"})))))))},t}(i.a.Component);t.default=Object(z.b)(function(e){var t=e.state;return{isAuthenticated:t.isAuthenticated,user:t.user}},function(e){return{authenticateUser:function(t){return e(Object(H.a)(t))}}})(ne)},180:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=n(39),c=n.n(o);n.d(t,"a",function(){return c.a}),n.d(t,"c",function(){return o.navigate});n(182);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},182:function(e,t,n){var a;e.exports=(a=n(186))&&a.default||a},184:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return i});var a=n(30),r=function(e){return function(t){t({type:a.a,payload:e})}},l=function(e){return function(t){t({type:a.c,payload:e})}},i=function(){return function(e){e({type:a.b})}}},186:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=n(65),c=n(3),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass"}}}}},189:function(e,t,n){"use strict";var a=n(187),r=n(0),l=n.n(r),i=n(1),o=n.n(i),c=n(180),s=function(){return l.a.createElement("footer",{className:"text-center"},l.a.createElement("div",{className:"footer-container"},l.a.createElement("p",null,"Designed by Ronuel Diaz | Jeter Gutierrez | Kelly Lu | Ramon Petgrave | Abraham B. Villaroman"),l.a.createElement("p",null,"© 2019 Universal Design Compass. All right reserved.")))},u=(n(197),n(255)),m=n(542),d=n(541),p=n(64),E=n(184),f=function(e){return l.a.createElement(m.a,{collapseOnSelect:!0,sticky:"top",expand:"md",bg:"dark",variant:"dark"},l.a.createElement(m.a.Brand,{variant:"light"}," ",l.a.createElement(c.a,{to:"/",style:b.link}," ",e.siteTitle)," "),l.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(d.a,null,e.isAuthenticated?function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,activeStyle:b.linkActive,rel:"create",to:"/Create"},"Create Compass")),l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,activeStyle:b.linkActive,rel:"compass",to:"/Compass"},"Compass")),l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,activeStyle:b.linkActive,rel:"analytics",to:"/Analytics"},"Analytics")),l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,activeStyle:b.linkActive,rel:"profile",to:"/Profile"},"Profile")),l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,rel:"logout",to:"/",onClick:function(){e.logOutUser(),Object(c.c)("/")}},"Logout")))}(e):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,activeStyle:b.linkActive,rel:"about",to:"/About"},"About")),l.a.createElement(u.a,null,l.a.createElement(c.a,{style:b.link,activeStyle:b.linkActive,rel:"login",to:"/Login"},"Login"))))))},b={link:{color:"white",textDecoration:"none"},linkActive:{textDecoration:"underline"}};f.propsTypes={isAuthenticated:o.a.bool,authenticateUser:o.a.func};var v=Object(p.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{logOutUser:function(){return e(Object(E.b)())}}})(f),h=(n(161),function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(s,null))},data:a})});h.propTypes={children:o.a.node.isRequired};t.a=h},209:function(e,t,n){var a=n(31).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(21)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},254:function(e,t,n){"use strict";var a=n(12),r=n(16),l=n(178),i=n.n(l),o=n(0),c=n.n(o),s=n(183),u=n(200),m=function(e){return c.a.forwardRef(function(t,n){return c.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))})},d=n(219),p=c.a.forwardRef(function(e,t){var n=e.bsPrefix,l=e.className,o=e.variant,u=e.as,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=Object(s.b)(n,"card-img");return c.a.createElement(u,Object(a.a)({ref:t,className:i()(o?d+"-"+o:d,l)},m))});p.displayName="CardImg",p.defaultProps={as:"img",variant:null};var E=p,f=m("h5"),b=m("h6"),v=Object(u.a)("card-body"),h=c.a.forwardRef(function(e,t){var n=e.bsPrefix,l=e.className,u=e.bg,m=e.text,p=e.border,E=e.body,f=e.children,b=e.as,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.b)(n,"card"),O=Object(o.useMemo)(function(){return{cardHeaderBsPrefix:y+"-header"}},[y]);return c.a.createElement(d.a.Provider,{value:O},c.a.createElement(b,Object(a.a)({ref:t},h,{className:i()(l,y,u&&"bg-"+u,m&&"text-"+m,p&&"border-"+p)}),E?c.a.createElement(v,null,f):f))});h.displayName="Card",h.defaultProps={as:"div",body:!1},h.Img=E,h.Title=Object(u.a)("card-title",{Component:f}),h.Subtitle=Object(u.a)("card-subtitle",{Component:b}),h.Body=v,h.Link=Object(u.a)("card-link",{Component:"a"}),h.Text=Object(u.a)("card-text",{Component:"p"}),h.Header=Object(u.a)("card-header"),h.Footer=Object(u.a)("card-footer"),h.ImgOverlay=Object(u.a)("card-img-overlay");t.a=h},538:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,a,r,l){var i=a||"<<anonymous>>",o=l||n;if(null==t[n])return new Error("The "+r+" `"+o+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var c=arguments.length,s=Array(c>5?c-5:0),u=5;u<c;u++)s[u-5]=arguments[u];return e.apply(void 0,[t,n,a,r,l].concat(s))}},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-profile-js-d3c05b788363ac3e8b58.js.map