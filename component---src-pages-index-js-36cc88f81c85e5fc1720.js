(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return F}));var n=t("mwIZ"),i=t.n(n),o=t("q1tI"),l=t.n(o),m=t("LvDl"),r=t("wBNj"),c=t("vOnD"),s=t("upwP"),d=Object(c.a)(r.Container).withConfig({displayName:"CV__Root",componentId:"sc-1qc7q5k-0"})(["max-width:1640px;"]),p=Object(c.a)(r.Row).withConfig({displayName:"CV__Group",componentId:"sc-1qc7q5k-1"})([""]),g=c.a.h1.withConfig({displayName:"CV__BigTitle",componentId:"sc-1qc7q5k-2"})(["@media only screen and (max-width:1024px){font-size:"," !important;}@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],s.a.fontSize(2.5),s.a.fontSize(3.5),s.a.fontSize(2.5)),h=c.a.h3.withConfig({displayName:"CV__SmallTitle",componentId:"sc-1qc7q5k-3"})(["@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],s.a.fontSize(2.5),s.a.fontSize(1.5)),f=c.a.div.withConfig({displayName:"CV__Separator",componentId:"sc-1qc7q5k-4"})(["width:100%;height:",";position:relative;z-index:0;border:2px solid ",";margin-top:",";margin-bottom:",";&:before{width:100%;content:'';z-index:-1;height:100%;display:block;position:absolute;bottom:calc(-1 * ",");right:calc(-1 * ",");background:",";}"],s.a.spacing(4),s.a.palette.lights[50],s.a.spacing(5),s.a.spacing(5),s.a.spacing(2),s.a.spacing(2),s.a.palette.secondary),w=Object(c.a)(r.Row).withConfig({displayName:"CV__Summary",componentId:"sc-1qc7q5k-5"})(["display:flex;justify-content:space-between;margin-bottom:",";"],s.a.spacing(5)),x=c.a.div.withConfig({displayName:"CV__Content",componentId:"sc-1qc7q5k-6"})(["max-width:800px;"]),u=c.a.div.withConfig({displayName:"CV__Experience",componentId:"sc-1qc7q5k-7"})(["margin-bottom:",";@media only screen and (max-width:576px){margin-bottom:",";}"],s.a.spacing(6),s.a.spacing(5.5));function y(e){var a=e.experiences,t=e.author,n=Object(m.groupBy)(a,(function(e){return e.node.metadata.category}));return l.a.createElement(d,{fluid:!0},l.a.createElement(h,null,"cv."),l.a.createElement(g,null,"@",t.author_slug),l.a.createElement(f,null," "),l.a.createElement(w,null,l.a.createElement(r.Col,{lg:3,md:4,sm:6},l.a.createElement("h5",null,l.a.createElement("strong",null,t.author_name))),l.a.createElement(r.Hidden,{sm:!0,xs:!0},l.a.createElement(r.Col,{lg:3,md:4,sm:6},l.a.createElement("h5",null,l.a.createElement("strong",null,t.author_email)))),l.a.createElement(r.Col,{lg:6,md:4,sm:6},l.a.createElement("h5",null,l.a.createElement("strong",null,t.author_address)))),Object(m.map)(n,(function(e,a){return l.a.createElement(p,{key:a},l.a.createElement(r.Col,{lg:3,md:4},l.a.createElement("h5",null,l.a.createElement("strong",null,Object(m.capitalize)(a)))),l.a.createElement(r.Col,{lg:6,md:8},l.a.createElement(x,null,Object(m.map)(e,(function(e){var a=e.node;return l.a.createElement(u,{key:a.slug},(a.metadata.company||a.metadata.position)&&l.a.createElement("h5",null,a.metadata.company,a.metadata.position&&" - "+a.metadata.position),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.metadata.description}}),l.a.createElement("small",null,a.metadata.period))})))))})))}var b=t("7oih"),E=t("9eSz"),_=t.n(E),v=t("wEEd"),C=t("lwPf"),z=Object(c.a)(r.Container).withConfig({displayName:"Portfolios__Root",componentId:"sc-10tkxe5-0"})(["max-width:1640px;"]),P=Object(c.a)(r.Row).withConfig({displayName:"Portfolios__Portfolio",componentId:"sc-10tkxe5-1"})(["margin-bottom:",";",";@media only screen and (max-width:768px){margin-bottom:",";}@media only screen and (max-width:576px){padding-bottom:",";}"],s.a.spacing(8),(function(e){return e.reverse&&"flex-direction: row-reverse"}),s.a.spacing(6),s.a.spacing(4)),I=Object(c.a)(r.Col).withConfig({displayName:"Portfolios__Content",componentId:"sc-10tkxe5-2"})(["@media only screen and (max-width:768px){margin-top:",";}"],s.a.spacing(4)),S=Object(c.a)(r.Col).withConfig({displayName:"Portfolios__Hero",componentId:"sc-10tkxe5-3"})(["z-index:0;position:relative;width:100%;margin-top:",";&:before{width:calc(100% - 30px);content:'';z-index:-1;height:calc(100% - 30px);display:block;position:absolute;border:2px solid ",";transform:translate( calc(-1 * ","),calc(-1 * ",") );","}@media only screen and (max-width:768px){margin-top:",";&:before{display:none;}}"],s.a.spacing(7),s.a.palette.lights[50],s.a.spacing(6),s.a.spacing(6),(function(e){return e.reverse&&"transform: translate(calc("+s.a.spacing(6)+"),\n       calc(-1 * "+s.a.spacing(6)+"));"}),s.a.spacing(4)),j=c.a.h1.withConfig({displayName:"Portfolios__BigTitle",componentId:"sc-10tkxe5-4"})(["@media only screen and (max-width:1024px){font-size:"," !important;}@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],s.a.fontSize(2.5),s.a.fontSize(3.5),s.a.fontSize(2.5)),k=c.a.h3.withConfig({displayName:"Portfolios__SmallTitle",componentId:"sc-10tkxe5-5"})(["@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],s.a.fontSize(2.5),s.a.fontSize(1.5));function N(e){var a=e.portfolios,t=Object(C.a)(),n=t[0],i=t[1],o=t[2];return l.a.createElement(z,{fluid:!0,onMouseMove:i},a.map((function(e,a){var t=e.node;return l.a.createElement(P,{reverse:1===a,kye:a,align:"flex-start"},l.a.createElement(r.Visible,{md:!0,sm:!0,xs:!0},l.a.createElement(r.Col,null,l.a.createElement(k,null,"work."),l.a.createElement(j,null,t.title))),l.a.createElement(S,{component:v.a.div,lg:7,md:12,reverse:1===a,style:{transform:n.interpolate(o(32))}},l.a.createElement(_.a,{alt:t.title,fluid:t.metadata.hero.local.childImageSharp.fluid})),l.a.createElement(I,{lg:5,md:12},l.a.createElement(r.Hidden,{md:!0,sm:!0,xs:!0},l.a.createElement(k,null,"work."),l.a.createElement(j,null,t.title)),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.content}})))})))}var O=t("Wbzz"),q=Object(c.a)(r.Container).withConfig({displayName:"PostsPreview__Root",componentId:"wamvhb-0"})(["max-width:1640px;margin-bottom:",";@media only screen and (max-width:768px){margin-bottom:",";}@media only screen and (max-width:576px){margin-bottom:",";}"],s.a.spacing(8),s.a.spacing(6),s.a.spacing(5)),T=Object(c.a)(r.Col).withConfig({displayName:"PostsPreview__Title",componentId:"wamvhb-1"})(["margin-right:",";@media only screen and (max-width:768px){margin-bottom:",";}"],s.a.spacing(6),s.a.spacing(4)),V=c.a.h1.withConfig({displayName:"PostsPreview__BigTitle",componentId:"wamvhb-2"})(["@media only screen and (max-width:1024px){font-size:"," !important;}@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],s.a.fontSize(4),s.a.fontSize(3.5),s.a.fontSize(2.5)),R=c.a.h3.withConfig({displayName:"PostsPreview__SmallTitle",componentId:"wamvhb-3"})(["@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],s.a.fontSize(2.5),s.a.fontSize(1.5)),H=c.a.div.withConfig({displayName:"PostsPreview__Post",componentId:"wamvhb-4"})(["display:flex;max-width:720px;margin-bottom:",";&:last-child:{margin-bottom:0;}@media only screen and (max-width:768px){padding-left:",";}"],s.a.spacing(6),s.a.spacing(4)),M=Object(c.a)(v.a.div).withConfig({displayName:"PostsPreview__Thumbnail",componentId:"wamvhb-5"})(["z-index:0;position:relative;width:",";height:",";min-width:",";margin-top:",";&:before{width:100%;content:'';z-index:-1;height:100%;display:block;position:absolute;transform:translate( calc(-1 * ","),calc(-1 * ",") );border:2px solid ",";}@media only screen and (max-width:576px){width:",";height:",";&:before{width:",";height:",";transform:translate( calc(-1 * ","),calc(-1 * ",") );}& > div{width:"," !important;height:"," !important;}}"],s.a.spacing(7),s.a.spacing(7),s.a.spacing(7),s.a.spacing(4),s.a.spacing(4),s.a.spacing(4),s.a.palette.lights[50],s.a.spacing(6.5),s.a.spacing(6.5),s.a.spacing(6.5),s.a.spacing(6.5),s.a.spacing(4),s.a.spacing(4),s.a.spacing(6.5),s.a.spacing(6.5)),B=Object(c.a)(r.Col).withConfig({displayName:"PostsPreview__PostsList",componentId:"wamvhb-6"})(["margin-left:auto;margin-right:auto;"]),L=c.a.div.withConfig({displayName:"PostsPreview__Text",componentId:"wamvhb-7"})(["margin-left:",";display:flex;flex-direction:column;& > *{margin-bottom:",";}& > *:last-child{margin-top:auto;margin-bottom:0;}@media only screen and (max-width:576px){margin-left:0;}"],s.a.spacing(5),s.a.spacing(3));function D(e){var a=e.posts,t=Object(C.a)(),n=t[0],i=t[1],o=t[2];return l.a.createElement(q,{fluid:!0,onMouseMove:i},l.a.createElement(r.Row,null,l.a.createElement(T,{lg:5,md:12},l.a.createElement(R,null,"posts."),l.a.createElement(V,null,"Find",l.a.createElement(r.Hidden,{md:!0,sm:!0,xs:!0},l.a.createElement("br",null))," ","latest stories")),l.a.createElement(B,{lg:6,md:12},a.map((function(e,a){var t=e.node;return l.a.createElement(H,{key:t.slug},l.a.createElement(M,{style:{transform:n.interpolate(o(32))}},l.a.createElement(_.a,{fixed:t.metadata.hero.local.childImageSharp.fixed,objectFit:"cover",objectPosition:"center",alt:t.title})),l.a.createElement(L,null,l.a.createElement("h5",null,l.a.createElement(O.a,{to:"/posts/"+t.slug},t.title||t.slug)),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:Object(m.truncate)(t.metadata.description,{length:90,separator:/,? +/})}}),l.a.createElement("small",null,t.created)))})))))}a.default=function(e){var a=e.data,t=e.location,n=i()(a,"cosmicjsSettings.metadata.site_title"),o=i()(a,"allCosmicjsPosts.edges"),m=i()(a,"allCosmicjsPortfolios.edges"),r=i()(a,"allCosmicjsExperiences.edges"),c=i()(a,"cosmicjsSettings.metadata");return l.a.createElement(b.a,{location:t,siteTitle:n,author:c},l.a.createElement(D,{posts:o}),l.a.createElement(N,{portfolios:m}),l.a.createElement(y,{experiences:r,author:c}))};var F="930357337"}}]);
//# sourceMappingURL=component---src-pages-index-js-36cc88f81c85e5fc1720.js.map