(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(190),l=a(358),c=a(1),o=a.n(c),s=a(359),u=a.n(s);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title,o=l.data.site,s=t||o.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var m=d;t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(m,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},182:function(e,t,a){var n;e.exports=(n=a(188))&&n.default||n},184:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return l});var n=a(31),r=function(e){return function(t){t({type:n.a,payload:e})}},i=function(e){return function(t){t({type:n.c,payload:e})}},l=function(){return function(e){e({type:n.b})}}},186:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(39);a.d(t,"b",function(){return c.navigate});a(182);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},188:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(66),o=a(3),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},190:function(e,t,a){"use strict";var n=a(191),r=a(0),i=a.n(r),l=a(1),c=a.n(l),o=a(186),s=function(){return i.a.createElement("footer",{className:"text-center"},i.a.createElement("div",{className:"footer-container"},i.a.createElement("p",null,"Designed by Ronuel Diaz | Jeter Gutierrez | Kelly Lu | Ramon Petgrave | Abraham B. Villaroman"),i.a.createElement("p",null,"© 2019 Universal Design Compass. All right reserved.")))},u=(a(203),a(17)),d=a(285),m=a(550),p=a(549),f=a(64),v=a(184),y=function(e){return i.a.createElement(m.a,{collapseOnSelect:!0,sticky:"top",expand:"md",bg:"dark",variant:"dark"},i.a.createElement(m.a.Brand,{variant:"light"},i.a.createElement(u.Link,{to:e.isAuthenticated?"/Dashboard":"/",style:g.link}," ",e.siteTitle)),i.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(p.a,{className:"justify-content-end"},e.isAuthenticated?function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{className:"nav-link"},i.a.createElement(u.Link,{style:g.link,activeStyle:g.linkActive,rel:"create",to:"/Create"},"Create Compass")),i.a.createElement(d.a,{className:"nav-link"},i.a.createElement(u.Link,{style:g.link,activeStyle:g.linkActive,rel:"dashboard",to:"/Dashboard"},"Dashboard")),i.a.createElement(d.a,{className:"nav-link"},i.a.createElement(u.Link,{style:g.link,activeStyle:g.linkActive,rel:"profile",to:"/Profile"},"Profile")),i.a.createElement(d.a,{className:"nav-link"},i.a.createElement(u.Link,{style:g.link,rel:"logout",to:"/",onClick:function(){e.logOutUser(),Object(u.navigate)("/")}},"Logout")))}(e):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{className:"nav-link"},i.a.createElement(u.Link,{style:g.link,activeStyle:g.linkActive,rel:"about",to:"/About"},"About")),i.a.createElement(d.a,{className:"nav-link"},i.a.createElement(u.Link,{style:g.link,activeStyle:g.linkActive,rel:"login",to:"/Login"},"Login"))))))},g={link:{color:"white",textDecoration:"none"},linkActive:{textDecoration:"underline"}};y.propsTypes={isAuthenticated:c.a.bool,authenticateUser:c.a.func};var k=Object(f.b)(function(e){return{isAuthenticated:e.state.isAuthenticated}},function(e){return{logOutUser:function(){return e(Object(v.b)())}}})(y),E=(a(161),function(e){var t=e.children;return i.a.createElement(o.a,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(s,null))},data:n})});E.propTypes={children:c.a.node.isRequired};t.a=E},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass"}}}}},358:function(e){e.exports={data:{site:{siteMetadata:{title:"Universal Design Compass",description:"A tool for designers to record,track and visualize their progress within their design process",author:"Abraham Bruce Villaroman, Kelly Lu, Jeter Gutierrez, Ronny Diaz ,Ramon Petgrave"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-30569fe4df77149148ec.js.map