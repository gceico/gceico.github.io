(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return L}));var n=a("Wbzz"),o=a("mwIZ"),i=a.n(o),l=a("q1tI"),r=a.n(l),c=a("wBNj"),m=a("TJpk"),s=a.n(m),d=a("vOnD"),p=a("upwP"),g=a("KPo6"),u=a("JwsL"),h=a("VwyP");Object(c.setConfiguration)({defaultScreenClass:"md",gutterWidth:32});var E=d.a.div.withConfig({displayName:"layout__Root",componentId:"yhixhu-0"})(["overflow:hidden;background:",";"],(function(e){return e.postLayout?p.a.palette.lights[100]:p.a.palette.fill}));function w(e){e.data;var t=e.location,a=e.siteTitle,n=e.siteHeading,o=e.author,l=e.postLayout,c=void 0!==l&&l,m=e.children,d=t.pathname,w=i()(o,"author_name"),y=i()(o,"author_bio"),f=i()(o,"author_avatar");return r.a.createElement(E,{postLayout:c},r.a.createElement(g.a,null),r.a.createElement(s.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{charset:"UTF-8"}),r.a.createElement("meta",{name:"author",content:w}),r.a.createElement("meta",{property:"og:url",content:t}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{property:"og:image",content:f.imgix_url}),r.a.createElement("meta",{name:"theme-color",content:p.a.palette.secondary}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),"/"===d&&r.a.createElement("header",null,r.a.createElement(h.a,{title:a,avatar:f,authorBio:y})),r.a.createElement("main",null,m),r.a.createElement("footer",null,r.a.createElement(u.a,{author:o,postFooter:c})))}var y=a("bv6p"),f=a.n(y),_=d.a.img.withConfig({displayName:"PostHeader__Logo",componentId:"uo8kj8-0"})(["margin-top:",";height:",";width:",";margin-bottom:",";"],p.a.spacing(6),p.a.spacing(7),p.a.spacing(7),p.a.spacing(5)),b=Object(d.a)(c.Container).withConfig({displayName:"PostHeader__Root",componentId:"uo8kj8-1"})(["max-width:1640px;margin-bottom:",";text-align:center;"],p.a.spacing(6)),v=d.a.h2.withConfig({displayName:"PostHeader__Title",componentId:"uo8kj8-2"})(["color:",";@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],p.a.palette.shades[90],p.a.fontSize(3),p.a.fontSize(2)),C=d.a.small.withConfig({displayName:"PostHeader__Date",componentId:"uo8kj8-3"})(["color:",";"],p.a.palette.shades[50]),x=d.a.div.withConfig({displayName:"PostHeader__Separator",componentId:"uo8kj8-4"})(["width:100%;height:",";position:relative;z-index:0;border:2px solid ",";margin-top:",";margin-bottom:",";@media only screen and (max-width:576px){margin-bottom:0;}&:before{width:100%;content:'';z-index:-1;height:100%;display:block;position:absolute;bottom:calc(-1 * ",");right:calc(-1 * ",");background:",";}"],p.a.spacing(4),p.a.palette.lights[50],p.a.spacing(5),p.a.spacing(5),p.a.spacing(2),p.a.spacing(2),p.a.palette.secondary);function j(e){var t=e.title,a=e.created;return r.a.createElement(b,{fluid:!0},r.a.createElement(c.Row,{justify:"center"},r.a.createElement(c.Col,{lg:6},r.a.createElement(_,{src:f.a,alt:"gceico logo"}),r.a.createElement(v,null,t),r.a.createElement(C,null,a)),r.a.createElement(c.Col,{sm:8},r.a.createElement(x,null," "))))}var k=Object(d.a)(n.a).withConfig({displayName:"blog-post__Back",componentId:"concdi-0"})(["margin-top:",";display:block;width:fit-content;"],p.a.spacing(4)),I=Object(d.a)(c.Container).withConfig({displayName:"blog-post__Root",componentId:"concdi-1"})(["max-width:1640px;"]),N=Object(d.a)(n.a).withConfig({displayName:"blog-post__Prev",componentId:"concdi-2"})([""]),P=Object(d.a)(n.a).withConfig({displayName:"blog-post__Next",componentId:"concdi-3"})(["margin-left:auto;display:block;width:fit-content;&:hover{color:",";transition:color 0.25s ease-in;}"],p.a.palette.primary),z=d.a.div.withConfig({displayName:"blog-post__Content",componentId:"concdi-4"})(["& > *{color:",";}h1,h2,h3,h4,h5{color:",";}"],p.a.palette.shades[80],p.a.palette.shades[90]);t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,o=t.cosmicjsPosts,l=i()(t,"cosmicjsSettings.metadata.site_title"),m=i()(t,"cosmicjsSettings.metadata"),d=n.previous,p=n.next;return r.a.createElement(w,{location:a,author:m,postLayout:!0},r.a.createElement(I,{fluid:!0,id:"head-root"},r.a.createElement(s.a,null,r.a.createElement("meta",{property:"og:title",content:o.title+" | "+l}),r.a.createElement("meta",{name:"description",content:o.metadata.description}),r.a.createElement("meta",{property:"og:image",content:o.metadata.description.imgix_url})),r.a.createElement(c.Row,{justify:"center"},r.a.createElement(c.Col,{lg:6,md:10},r.a.createElement(k,{to:"/posts"},"← Back to Posts"))),r.a.createElement(j,{title:o.title,created:o.created}),r.a.createElement(c.Row,{justify:"center"},r.a.createElement(c.Col,{lg:6,md:10},r.a.createElement(z,{dangerouslySetInnerHTML:{__html:o.content}}))),r.a.createElement(c.Row,{justify:"center"},r.a.createElement(c.Col,{lg:3,md:5,sm:6},d&&r.a.createElement(N,{to:"posts/"+d.slug,rel:"prev"},"← ",d.title)),r.a.createElement(c.Col,{lg:3,md:5,sm:6},p&&r.a.createElement(P,{to:"posts/"+p.slug,rel:"next"},p.title," →")))))};var L="3942853477"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9c453fe93e39434ba123.js.map