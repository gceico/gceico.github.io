(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yZlL:function(e,t,a){"use strict";a.r(t);var n=a("Wbzz"),o=a("mwIZ"),i=a.n(o),c=a("q1tI"),l=a.n(c),r=a("wBNj"),m=a("TJpk"),s=a.n(m),d=a("vOnD"),p=a("upwP"),g=a("KPo6"),h=a("JwsL"),u=a("VwyP");Object(r.setConfiguration)({defaultScreenClass:"md",gutterWidth:32});var E=d.a.div.withConfig({displayName:"layout__Root",componentId:"sc-yhixhu-0"})(["overflow:hidden;background:",";"],(function(e){return e.postLayout?p.a.palette.lights[100]:p.a.palette.fill}));function w(e){e.data;var t=e.location,a=e.siteTitle,n=e.siteHeading,o=e.author,c=e.postLayout,r=void 0!==c&&c,m=e.children,d=t.pathname,w=i()(o,"author_name"),y=i()(o,"author_bio"),f=i()(o,"author_avatar");return l.a.createElement(E,{postLayout:r},l.a.createElement(g.a,null),l.a.createElement(s.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,a),l.a.createElement("meta",{charset:"UTF-8"}),l.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js-eu1.hs-scripts.com/26003364.js"}),l.a.createElement("meta",{name:"author",content:w}),l.a.createElement("meta",{property:"og:url",content:t}),l.a.createElement("meta",{property:"og:title",content:a}),l.a.createElement("meta",{name:"og:description",content:n}),l.a.createElement("meta",{property:"og:image",content:f.imgix_url}),l.a.createElement("meta",{name:"theme-color",content:p.a.palette.secondary}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),"/"===d&&l.a.createElement("header",null,l.a.createElement(u.a,{title:a,avatar:f,authorBio:y})),l.a.createElement("main",null,m),l.a.createElement("footer",null,l.a.createElement(h.a,{author:o,postFooter:r})))}var y=a("bv6p"),f=a.n(y),_=d.a.img.withConfig({displayName:"PostHeader__Logo",componentId:"sc-uo8kj8-0"})(["margin-top:",";height:",";width:",";margin-bottom:",";"],p.a.spacing(6),p.a.spacing(7),p.a.spacing(7),p.a.spacing(5)),b=Object(d.a)(r.Container).withConfig({displayName:"PostHeader__Root",componentId:"sc-uo8kj8-1"})(["max-width:1640px;margin-bottom:",";text-align:center;"],p.a.spacing(6)),v=d.a.h2.withConfig({displayName:"PostHeader__Title",componentId:"sc-uo8kj8-2"})(["color:",";@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],p.a.palette.shades[90],p.a.fontSize(3),p.a.fontSize(2)),C=d.a.small.withConfig({displayName:"PostHeader__Date",componentId:"sc-uo8kj8-3"})(["color:",";"],p.a.palette.shades[50]),j=d.a.div.withConfig({displayName:"PostHeader__Separator",componentId:"sc-uo8kj8-4"})(["width:100%;height:",";position:relative;z-index:0;border:2px solid ",";margin-top:",";margin-bottom:",";@media only screen and (max-width:576px){margin-bottom:0;}&:before{width:100%;content:'';z-index:-1;height:100%;display:block;position:absolute;bottom:calc(-1 * ",");right:calc(-1 * ",");background:",";}"],p.a.spacing(4),p.a.palette.lights[50],p.a.spacing(5),p.a.spacing(5),p.a.spacing(2),p.a.spacing(2),p.a.palette.secondary);function x(e){var t=e.title,a=e.created;return l.a.createElement(b,{fluid:!0},l.a.createElement(r.Row,{justify:"center"},l.a.createElement(r.Col,{lg:6},l.a.createElement(_,{src:f.a,alt:"gceico logo"}),l.a.createElement(v,null,t),l.a.createElement(C,null,a)),l.a.createElement(r.Col,{sm:8},l.a.createElement(j,null," "))))}var k=Object(d.a)(n.a).withConfig({displayName:"blog-post__Back",componentId:"sc-concdi-0"})(["margin-top:",";display:block;width:fit-content;"],p.a.spacing(4)),I=Object(d.a)(r.Container).withConfig({displayName:"blog-post__Root",componentId:"sc-concdi-1"})(["max-width:1640px;"]),N=Object(d.a)(n.a).withConfig({displayName:"blog-post__Prev",componentId:"sc-concdi-2"})([""]),P=Object(d.a)(n.a).withConfig({displayName:"blog-post__Next",componentId:"sc-concdi-3"})(["margin-left:auto;display:block;width:fit-content;&:hover{color:",";transition:color 0.25s ease-in;}"],p.a.palette.primary),z=d.a.div.withConfig({displayName:"blog-post__Content",componentId:"sc-concdi-4"})(["& > *{color:",";}h1,h2,h3,h4,h5{color:",";}"],p.a.palette.shades[80],p.a.palette.shades[90]);t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,o=t.cosmicjsPosts,c=i()(t,"cosmicjsSettings.metadata.site_title"),m=i()(t,"cosmicjsSettings.metadata"),d=n.previous,p=n.next;return l.a.createElement(w,{location:a,author:m,postLayout:!0},l.a.createElement(I,{fluid:!0,id:"head-root"},l.a.createElement(s.a,null,l.a.createElement("meta",{property:"og:title",content:o.title+" | "+c}),l.a.createElement("meta",{name:"og:description",content:o.metadata.description}),l.a.createElement("meta",{property:"og:image",content:o.metadata.description.imgix_url})),l.a.createElement(r.Row,{justify:"center"},l.a.createElement(r.Col,{lg:6,md:10},l.a.createElement(k,{to:"/posts"},"← Back to Posts"))),l.a.createElement(x,{title:o.title,created:o.created}),l.a.createElement(r.Row,{justify:"center"},l.a.createElement(r.Col,{lg:6,md:10},l.a.createElement(z,{dangerouslySetInnerHTML:{__html:o.content}}))),l.a.createElement(r.Row,{justify:"center"},l.a.createElement(r.Col,{lg:3,md:5,sm:6},d&&l.a.createElement(N,{to:"/posts/"+d.slug,rel:"prev"},"← ",d.title)),l.a.createElement(r.Col,{lg:3,md:5,sm:6},p&&l.a.createElement(P,{to:"/posts/"+p.slug,rel:"next"},p.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fdee4a78d8fd453b4ff5.js.map