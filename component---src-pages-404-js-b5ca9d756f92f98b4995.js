(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(197);t.default=function(){return r.a.createElement(l.a,{fullMenu:!0},r.a.createElement("article",{id:"main"},r.a.createElement("header",null,r.a.createElement("h2",null,"Oops"),r.a.createElement("p",null,"I see you sneaking around..."))))}},193:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},194:function(e,t){e.exports={siteTitle:"Andrew Sellenrick - Designer & Developer",manifestName:"Andrew Sellenrick",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",heading:"Andrew Sellenrick",subHeading:"Organized Designer & Creative Developer",socialLinks:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/asellenrick"},{style:"brands",icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/sellenrick"},{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto:sellenrick@gmail.com"}]}},195:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Andrew Sellenrick - Designer & Developer"}}}}')},196:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),l=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},197:function(e,t,a){"use strict";var n=a(195),r=a(0),l=a.n(r),i=a(198),o=a.n(i),c=a(66),s=a.n(c),u=(a(193),a(7).default.enqueue,l.a.createContext({}));function m(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,i=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,i&&r(i),!i&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return l.a.createElement(u.Consumer,null,function(e){return l.a.createElement(m,{data:t,query:a,render:n||r,staticQueryData:e})})};a(201),a(49);var p=a(194),f=a.n(p);function v(){return l.a.createElement("footer",{id:"footer"},l.a.createElement("ul",{className:"icons"},f.a.socialLinks.map(function(e){var t=e.style,a=e.icon,n=e.name,r=e.url;return l.a.createElement("li",{key:r},l.a.createElement("a",{href:r,className:"icon "+t+" "+a},l.a.createElement("span",{className:"label"},n)))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Copyright © ",(new Date).getFullYear()," Andrew Sellenrick. All rights reserved")))}function E(e){var t=e.fullMenu,a=Object(r.useState)(!1),n=a[0];a[1];return l.a.createElement("header",{id:"header",className:t?"":"alt"},l.a.createElement("h1",null,l.a.createElement(s.a,{to:"/"},"Sellenrick")),l.a.createElement("div",{className:n?"is-menu-visible":" "},null))}var g=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={isPreloaded:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},i.render=function(){var e=this.props,t=e.children,a=e.fullMenu,r=this.state.isPreloaded;return l.a.createElement(d,{query:"1044757290",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Andrew Sellenrick Designer and Developer"},{name:"keywords",content:"designer, developer, interface design, coder, portfolio"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("div",{className:r?"landing main-body is-preload":"landing main-body"},l.a.createElement("div",{id:"page-wrapper"},l.a.createElement(E,{fullMenu:a}),t,l.a.createElement(v,null))))},data:n})},r}(r.Component);t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-b5ca9d756f92f98b4995.js.map