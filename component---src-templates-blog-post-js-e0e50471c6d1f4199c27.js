(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1eu9":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n=a(r("8OQS")),i=a(r("pVnL")),o=a(r("PJYZ")),s=a(r("VbXa")),c=a(r("lSNA")),l=a(r("q1tI")),u=a(r("17x9")),d=a(r("yBBL")),f=r("uXx/"),m=r("EFel"),p=r("vD7z"),g=r("BfiH"),h=r("perC"),y=r("NVWv"),v=r("QxZ1"),b=r("oFdo"),S=function(e){function t(t){var r;r=e.call(this,t)||this,(0,c.default)((0,o.default)(r),"cleanUpListeners",void 0),(0,c.default)((0,o.default)(r),"intersectionListener",(function(){var e=(0,p.inImageCache)(r.props);r.state.isVisible||"function"!=typeof r.props.onStartLoad||r.props.onStartLoad({wasCached:e}),r.imageRef=(0,g.activatePictureRef)(r.imageRef,r.props,r.selfRef),r.setState((function(e){return{isVisible:!0,imageState:e.imageState+1}}),(function(){r.setState((function(t){return{imgLoaded:e,imgCached:(0,g.hasActivatedPictureRefs)(r.imageRef),imageState:t.imageState+1}}))}))}));var a=(0,f.convertProps)(t),n=!0,s=!1,l=a.fadeIn,u=(0,p.inImageCache)(a);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,s=!0),"undefined"==typeof window&&(n=!1),a.critical&&(n=!0,s=!1);var m=!(a.critical&&!l),v=(0,y.fixClassName)(a)[0];return r.state={isVisible:n,imgLoaded:!1,IOSupported:s,fadeIn:l,hasNoScript:m,seenBefore:u,imageState:0,currentClassNames:v},r.backgroundStyles=(0,y.presetBackgroundStyles)((0,d.default)(a.className)),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r.imageRef=(0,g.createPictureRef)((0,i.default)({},a,{isVisible:n}),r.handleImageLoaded),r.bgImage=(0,h.initialBgImage)(a),r.selfRef=null,r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.backgroundStyles=(0,y.presetBackgroundStyles)((0,d.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,p.inImageCache)(this.props)}),(this.props.critical||this.state.seenBefore)&&(0,g.imageReferenceCompleted)(this.imageRef)&&this.handleImageLoaded();var e=(0,y.fixClassName)(this.props)[0];this.setState({currentClassNames:e})},r.componentDidUpdate=function(e){var t=this;if((0,m.imagePropsChanged)(this.props,e)){var r=(0,f.convertProps)(this.props),a=(0,p.inImageCache)(r),n=(0,y.fixClassName)(r)[0];this.setState({isVisible:a||r.critical,imgLoaded:a,seenBefore:a,currentClassNames:n},(function(){t.bgImage=(0,m.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,m.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,g.createPictureRef)((0,i.default)({},r,{isVisible:t.state.isVisible}),t.handleImageLoaded)}))}},r.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach((function(e){return!!e&&(e.onload=null)})):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){this.selfRef=e,this.state.IOSupported&&e&&(this.cleanUpListeners=(0,b.listenToIntersections)(e,this.intersectionListener,this.props.rootMargin))},r.handleImageLoaded=function(){(0,p.activateCacheForImage)(this.props),this.setState((function(e){return{imgLoaded:!0,imageState:e.imageState+1}})),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=(0,y.fixOpacity)((0,f.convertProps)(this.props),this.props.preserveStackingContext),t=e.className,r=e.style,a=void 0===r?{}:r,o=e.fluid,s=e.fixed,c=e.backgroundColor,u=e.durationFadeIn,d=e.Tag,p=e.children,g=e.classId,b=void 0===g?t?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7)+"_depr":g,S=(0,n.default)(e,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),C=(0,f.stripRemainingProps)(S),A="boolean"==typeof c?"lightgray":void 0!==c?c:"",w=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,I=this.state.imgLoaded?u+"ms":"0.25s",x=(0,i.default)({position:"relative"},a);this.props.preserveStackingContext||(x.opacity=.99);var E=(0,m.getCurrentSrcData)({fluid:o,fixed:s,returnArray:!0}),_=(0,m.getCurrentSrcData)({fluid:o,fixed:s});if(!o&&!s)return null;s&&(x.width=E.width,x.height=E.height,x.display="inline-block","inherit"===a.display&&delete x.display);var O=(0,h.switchImageSettings)({image:E,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=O.nextImageArray||O.nextImage||this.bgImage;var R=(0,v.createPseudoStyles)((0,i.default)({classId:b,className:this.state.currentClassNames,transitionDelay:I,bgColor:A,backgroundStyles:this.backgroundStyles,style:a,fadeIn:w},O,{originalData:o||s})),k=(0,v.createNoScriptStyles)({image:E,bgColor:A,classId:b,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:a}),N=""+(o&&"fluid")+(s&&"fixed")+"-"+JSON.stringify(_.srcSet);return l.default.createElement(d,(0,i.default)({className:""+(this.state.currentClassNames||"")+(b&&" gatsby-background-image-"+b)+" gatsby-image-wrapper",style:(0,i.default)({},x,{},this.backgroundStyles),ref:this.handleRef,key:N},C),l.default.createElement("style",{dangerouslySetInnerHTML:{__html:R}}),this.state.hasNoScript&&l.default.createElement("noscript",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:k}})),p)},t}(l.default.Component);S.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1,rootMargin:"200px"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),A=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});S.propTypes={resolutions:u.default.oneOfType([C,u.default.arrayOf(C),u.default.arrayOf(u.default.oneOfType([C,u.default.string]))]),sizes:u.default.oneOfType([A,u.default.arrayOf(A),u.default.arrayOf(u.default.oneOfType([A,u.default.string]))]),fixed:u.default.oneOfType([C,u.default.arrayOf(C),u.default.arrayOf(u.default.oneOfType([C,u.default.string]))]),fluid:u.default.oneOfType([A,u.default.arrayOf(A),u.default.arrayOf(u.default.oneOfType([A,u.default.string]))]),fadeIn:u.default.oneOfType([u.default.string,u.default.bool]),durationFadeIn:u.default.number,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.oneOfType([u.default.object,u.default.array]),backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.oneOfType([u.default.string,u.default.func]),classId:u.default.string,preserveStackingContext:u.default.bool,rootMargin:u.default.string};var w=S;t.default=w},"4fRq":function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var a=new Uint8Array(16);e.exports=function(){return r(a),a}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},BfiH:function(e,t,r){"use strict";t.__esModule=!0,t.imageReferenceCompleted=t.hasPictureRef=t.hasActivatedPictureRefs=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=void 0;var a=r("uXx/"),n=r("EFel"),i=r("K9wq"),o=r("lOcZ"),s=r("vD7z"),c=function(e,t,r,s){void 0===s&&(s=!1);var c=(0,a.convertProps)(e);if((0,o.isBrowser)()&&(void 0!==c.fluid||void 0!==c.fixed)){if((0,n.hasImageArray)(c)&&!(0,i.hasArtDirectionArray)(c)&&!s)return l(e,t);var d=new Image;return d.onload=function(){return t()},d.complete||"function"!=typeof c.onLoad||d.addEventListener("load",c.onLoad),"function"==typeof c.onError&&d.addEventListener("error",c.onError),c.crossOrigin&&(d.crossOrigin=c.crossOrigin),!c.critical&&!c.isVisible||s?d:u(d,c,r,s)}return null};t.createPictureRef=c;var l=function(e,t){var r=(0,a.convertProps)(e),n=(r.fluid||r.fixed).map((function(e,a){return c(r,t,a,!0)}));return r.critical||r.isVisible?u(n,r):n};t.createMultiplePictureRefs=l;var u=function(e,t,r,s,c){void 0===r&&(r=null),void 0===s&&(s=0),void 0===c&&(c=!1);var l=(0,a.convertProps)(t);if((0,o.isBrowser)()&&(void 0!==l.fluid||void 0!==l.fixed)){var u=(0,n.hasImageArray)(l)&&!(0,i.hasArtDirectionArray)(l);if(u&&!c)return d(e,t,r);var f=document.body.cloneNode(!0),m=u?(0,n.getSelectedImage)(l,s):(0,n.getCurrentSrcData)(l);if(!m||(0,o.isString)(m))return null;if((0,n.hasPictureElement)()){var p=document.createElement("picture");if(r&&(e.width=r.offsetWidth,e.height=r.offsetHeight,p.width=e.width,p.height=e.height),(0,i.hasArtDirectionArray)(l))(0,i.createArtDirectionSources)(l).reverse().forEach((function(e){return p.appendChild(e)}));if(m.srcSetWebp){var g=document.createElement("source");g.type="image/webp",g.srcset=m.srcSetWebp,g.sizes=m.sizes,p.appendChild(g)}p.appendChild(e),f.appendChild(p)}else r&&(e.width=r.offsetWidth,e.height=r.offsetHeight);return e.sizes=m.sizes||"",e.srcset=m.srcSet||"",e.src=m.src||"",e}return null};t.activatePictureRef=u;var d=function(e,t,r){return e.map((function(e,a){return u(e,t,r,a,!0)}))};t.activateMultiplePictureRefs=d;t.hasActivatedPictureRefs=function(e){return Array.isArray(e)?e.every((function(e){return f(e)})):f(e)};var f=function(e){return(0,o.isString)(e)||!!e&&!!e.currentSrc};t.hasPictureRef=f;t.imageReferenceCompleted=function(e,t){return e?Array.isArray(e)?e.every((function(e){return(0,n.imageLoaded)(e)}))||(0,s.inImageCache)(t):(0,n.imageLoaded)(e)||(0,s.inImageCache)(t):(0,o.isString)(e)}},EFel:function(e,t,r){"use strict";t.__esModule=!0,t.imageLoaded=t.createDummyImageArray=t.imageArrayPropsChanged=t.imagePropsChanged=t.hasImageUrl=t.isBase64=t.getUrlString=t.getSelectedImage=t.getCurrentSrcData=t.getImageSrcKey=t.getCurrentFromData=t.hasImageArray=t.hasPictureElement=void 0;var a=r("K9wq"),n=r("lOcZ");t.hasPictureElement=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};var i=function(e){return Boolean(e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed))};t.hasImageArray=i;t.getCurrentFromData=function(e){var t=e.data,r=e.propName,i=e.addUrl,c=void 0===i||i,l=e.returnArray,u=void 0!==l&&l,f=e.checkLoaded,m=void 0===f||f;if(!t||!r)return"";var p="tracedSVG"===r;if(Array.isArray(t)&&!(0,a.hasArtDirectionArray)({fluid:t})){var g=t.map((function(e){return"currentSrc"===r||"src"===r?m?d(e)&&e[r]||"":e[r]:"CSS_STRING"===r&&(0,n.isString)(e)?e:e[r]||""}));return s({imageString:g,tracedSVG:p,addUrl:c,returnArray:u})}if((0,a.hasArtDirectionArray)({fluid:t})&&("currentSrc"===r||"src"===r||"base64"===r||p)){var h=o({fluid:t});return r in h?s({imageString:h[r],tracedSVG:p,addUrl:c}):""}return"currentSrc"!==r&&"src"!==r||!(r in t)?r in t?s({imageString:t[r],tracedSVG:p,addUrl:c}):"":s({imageString:m?d(t)&&t[r]||"":t[r],addUrl:c})};t.getImageSrcKey=function(e){var t=e.fluid,r=e.fixed,a=o({fluid:t,fixed:r});return a&&a.src||null};var o=function(e,t){var r=e.fluid,o=e.fixed,s=e.returnArray;void 0===t&&(t=0);var c=r||o;if(i({fluid:r,fixed:o})){if(s)return c;if((0,n.isBrowser)()&&(0,a.hasArtDirectionArray)({fluid:r,fixed:o})){var l=c.slice().reverse(),u=l.findIndex(a.matchesMedia);if(-1!==u)return l[u]}return c[t]}return c};t.getCurrentSrcData=o;t.getSelectedImage=function(e,t){var r=e.fluid,a=e.fixed;void 0===t&&(t=0);var n=r||a;return i({fluid:r,fixed:a})?n[t]||n[0]:n};var s=function(e){var t=e.imageString,r=e.tracedSVG,a=void 0!==r&&r,i=e.addUrl,o=void 0===i||i,s=e.returnArray,u=void 0!==s&&s,d=e.hasImageUrls,f=void 0!==d&&d;if(Array.isArray(t)){var m=t.map((function(e){if(e){var r=c(e),n=f||l(t),i=e&&a?'"'+e+'"':e&&!r&&!a&&n?"'"+e+"'":e;return o&&e?"url("+i+")":i}return e}));return u?m:(0,n.filteredJoin)(m)}var p=c(t),g=f||l(t),h=t&&a?'"'+t+'"':t&&!p&&!a&&g?"'"+t+"'":t;return t?o?"url("+h+")":h:""};t.getUrlString=s;var c=function(e){return(0,n.isString)(e)&&-1!==e.indexOf("base64")};t.isBase64=c;var l=function(e){return(0,n.isString)(e)&&"http"===e.substr(0,4)};t.hasImageUrl=l;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||u(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var u=function(e,t){var r=Array.isArray(e.fluid),a=Array.isArray(t.fluid),n=Array.isArray(e.fixed),i=Array.isArray(t.fixed);return!!(r&&!a||n&&!i||!r&&a||!n&&i)||(r&&a?e.fluid.length!==t.fluid.length||e.fluid.some((function(e,r){return e.src!==t.fluid[r].src})):n&&i?e.fixed.length!==t.fixed.length||e.fixed.some((function(e,r){return e.src!==t.fixed[r].src})):void 0)};t.imageArrayPropsChanged=u;t.createDummyImageArray=function(e){var t=s({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};var d=function(e){return!!e&&(e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=d},I2ZF:function(e,t){for(var r=[],a=0;a<256;++a)r[a]=(a+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,n=r;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")}},I59i:function(e,t,r){var a=r("UfPM");function n(e,t){var r=new a(e,t);return function(e){return r.convert(e)}}n.BIN="01",n.OCT="01234567",n.DEC="0123456789",n.HEX="0123456789abcdef",e.exports=n},IFaA:function(e,t,r){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}},K9wq:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.matchesMedia=t.hasArtDirectionArray=t.hasArtDirectionSupport=t.createArtDirectionSources=t.groupByMedia=void 0;var n=a(r("auJE")),i=r("lOcZ");t.groupByMedia=function(e){var t=[],r=(0,n.default)(e,"media");return r.forEach((function(e){return!e.media&&t.push(e)})),t.length,r};t.createArtDirectionSources=function(e){var t=e.fluid,r=e.fixed;return(t||r).reduce((function(e,t){if(!t.media)return e;var r=document.createElement("source");return t.srcSetWebp&&(r.type="image/webp",r.srcset=t.srcSetWebp),t.sizes&&(r.sizes=t.sizes),r.media=t.media,e.push(r),e}),[])};var o=function(e,t){return e[t]&&Array.isArray(e[t])&&e[t].some((function(e){return!!e&&void 0!==e.media}))};t.hasArtDirectionSupport=o;t.hasArtDirectionArray=function(e){return o(e,"fluid")||o(e,"fixed")};t.matchesMedia=function(e){var t=e.media;return!!t&&((0,i.isBrowser)()&&void 0!==window.matchMedia&&!!window.matchMedia(t).matches)}},NVWv:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.escapeClassNames=t.fixClassName=void 0;var n=a(r("pVnL")),i=a(r("8OQS")),o=a(r("gv3/")),s=r("uXx/"),c=r("YWaw"),l=r("EFel"),u=r("lOcZ");t.fixClassName=function(e){var t=e.className,r=(0,i.default)(e,["className"]),a=(0,s.convertProps)(r),n=(0,c.inComponentClassCache)(t),d=(0,l.getCurrentSrcData)(a),f=o.default.generate(),m=" gbi-"+(0,u.hashString)(d&&d.srcSet||t)+"-"+f,p=(""+(t||"")+((n?m:"")||"")).trim();return n||(0,c.activateCacheForComponentClass)(t),[p]};t.escapeClassNames=function(e){if(e){var t=(0,u.isBrowser)()&&window._gbiSpecialChars?window._gbiSpecialChars:"undefined"!=typeof __GBI_SPECIAL_CHARS__?__GBI_SPECIAL_CHARS__:":/",r=new RegExp("["+t+"]","g");return e.replace(r,"\\$&")}return e};t.kebabifyBackgroundStyles=function(e){return(0,u.isString)(e)?e:e instanceof Object?Object.keys(e).filter((function(t){return 0===t.indexOf("background")&&""!==e[t]})).reduce((function(t,r){return""+t+(0,u.toKebabCase)(r)+": "+e[r]+";\n"}),""):""};t.setTransitionStyles=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.fixOpacity=function(e){var t=(0,n.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(r){}return t};t.presetBackgroundStyles=function(e){return(0,n.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},{},e)}},QxZ1:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.createNoScriptStyles=t.createStyleImage=t.createPseudoStyles=t.createPseudoElementMediaQuery=t.createPseudoElementWithContent=t.createPseudoElement=void 0;var n=a(r("pVnL")),i=r("NVWv"),o=r("EFel"),s=r("K9wq"),c=r("lOcZ"),l=function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=":before");var a=(0,i.escapeClassNames)(e),n=(0,c.stringToArray)(a),o="";return Array.isArray(n)&&(n=n.filter((function(e){return""!==e}))).length>0&&(o="."+n.join(".")+r),""!==t&&(o+=(o&&",\n")+".gatsby-background-image-"+t+r),o};t.createPseudoElement=l;var u=function(e,t){return"\n    "+e+" {\n      opacity: 1;\n      background-image: "+t+";\n    }"};t.createPseudoElementWithContent=u;var d=function(e,t,r,a){return"\n      @media "+t+" {\n        "+u(e,r)+"\n      }\n      "+(a&&"@media "+t+" {\n          "+u(e,a)+"\n        }")+"\n    "};t.createPseudoElementMediaQuery=d;t.createPseudoStyles=function(e){var t=e.classId,r=e.className,a=e.transitionDelay,o=e.lastImage,s=e.nextImage,c=e.afterOpacity,u=e.bgColor,d=e.fadeIn,m=e.backgroundStyles,p=e.style,g=e.finalImage,h=e.originalData,y=l(r,t),v=l(r,t,":after");return"\n          "+y+",\n          "+v+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(u&&"background-color: "+u+";")+"\n            "+(0,i.setTransitionStyles)(a,d)+"\n            "+(0,i.kebabifyBackgroundStyles)((0,n.default)({},m,{},p))+"\n          }\n          "+y+" {\n            z-index: -100;\n            "+(c&&f(s,h)||"")+"\n            "+(!c&&f(o,h)||"")+"\n            opacity: "+c+"; \n          }\n          "+v+" {\n            z-index: -101;\n            "+(!c&&f(s,h)||"")+"\n            "+(c&&f(o,h)||"")+"\n            "+(g?"opacity: "+Number(!c)+";":"")+"\n          }\n        "};var f=function(e,t){var r=(0,o.hasImageArray)({fluid:t})&&!(0,s.hasArtDirectionArray)({fluid:t});return((0,c.isBrowser)()||r)&&e?"background-image: "+e+";":""};t.createStyleImage=f;t.createNoScriptStyles=function(e){var t=e.classId,r=e.className,a=e.image;if(a){var n=Array.isArray(a)&&!(0,s.hasArtDirectionArray)({fluid:a}),i=(0,o.getCurrentFromData)({data:a,propName:"src",checkLoaded:!1,addUrl:!1,returnArray:n}),f=(0,o.getUrlString)({imageString:i,hasImageUrls:!0,returnArray:n}),m="";if(n){var p=(0,o.getCurrentFromData)({data:a,propName:"CSS_STRING",addUrl:!1,returnArray:n});m=(0,c.filteredJoin)((0,c.combineArray)(f,p))}var g=l(r,t);return(0,s.hasArtDirectionArray)({fluid:a})?a.map((function(e){var t=(0,o.getUrlString)({imageString:e.src}),r=(0,o.getUrlString)({imageString:e.srcWebp||""});return e.media?d(g,e.media,t,r):""})).join(""):u(g,m||f)}return""}},Ros5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&s(r)&&(t[r]=e[r]);return t};var a,n=r("IFaA"),i=(a=n)&&a.__esModule?a:{default:a};var o={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function s(e){return o[e]||i.default[e]||/^(data|aria)-/.test(e)}},U6jy:function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var a=arguments[t];for(var n in a)r.call(a,n)&&(e[n]=a[n])}return e};var r=Object.prototype.hasOwnProperty},UfPM:function(e,t,r){"use strict";function a(e,t){if(!(e&&t&&e.length&&t.length))throw new Error("Bad alphabet");this.srcAlphabet=e,this.dstAlphabet=t}a.prototype.convert=function(e){var t,r,a,n={},i=this.srcAlphabet.length,o=this.dstAlphabet.length,s=e.length,c="string"==typeof e?"":[];if(!this.isValid(e))throw new Error('Number "'+e+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return e;for(t=0;t<s;t++)n[t]=this.srcAlphabet.indexOf(e[t]);do{for(r=0,a=0,t=0;t<s;t++)(r=r*i+n[t])>=o?(n[a++]=parseInt(r/o,10),r%=o):a>0&&(n[a++]=0);s=a,c=this.dstAlphabet.slice(r,r+1).concat(c)}while(0!==a);return c},a.prototype.isValid=function(e){for(var t=0;t<e.length;++t)if(-1===this.srcAlphabet.indexOf(e[t]))return!1;return!0},e.exports=a},YWaw:function(e,t,r){"use strict";t.__esModule=!0,t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var a=Object.create({});t.inComponentClassCache=function(e){return a[e]||!1};t.activateCacheForComponentClass=function(e){e&&(a[e]=!0)};t.resetComponentClassCache=function(){for(var e in a)delete a[e]}},auJE:function(e,t,r){var a=r("U6jy"),n=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function i(e){return function(t,r){var a=t.sortVal,n=r.sortVal,i=t.item.__media,o=r.item.__media;if(e=void 0!==e&&e,a===n){if(i.match(/print/))return 1;if(o.match(/print/))return-1}return e?n-a:a-n}}function o(e,t,r){switch(function(e,t,r){return e&&e.length&&"string"!=typeof e?("object"!==t||r&&"string"==typeof r)&&function(e,t,r){for(var a=!0,n=0,i=e.length;n<i;n++)if(typeof e[n]!==t||r&&!e[n].hasOwnProperty(r)){a=!1;break}return a}(e,t,r)?"all":"some":"none"}(e,t,r)){case"none":return[];case"some":return e}var o=function(){for(var e={},t=0,r=n.length;t<r;t++)e[n[t]]=[];return e}();return e=function(e,t,r){for(var n=[],i={},o=0,s=e.length;o<s;o++)"string"===t?i=a({},{__media:e[o]}):(i=a({},e[o])).__media=e[o][r],n.push(i);return n}(e,t,r),function(e,t){for(var r=0,a=t.length;r<a;r++){var n=t[r],i=n.__media,o="blank",s=i.match(/\d+/g);i.match(/min-width/)?o="minWidth":i.match(/min-height/)?o="minHeight":i.match(/max-width/)?o="maxWidth":i.match(/max-height/)?o="maxHeight":i.match(/print/)?o="print":i.match(/all/)&&(o="all"),e[o].push({item:n,sortVal:s?s[0]:0})}}(o,e),function(e){var t;for(var r in e)e.hasOwnProperty(r)&&(t=i(!1),"maxWidth"!==r&&"maxHeight"!==r||(t=i(!0)),e[r].sort(t))}(o),function(e,t,r){var a=[];function i(e){for(var r,n=0,i=e.length;n<i;n++)"string"===t?r=e[n].item.__media:delete(r=e[n].item).__media,a.push(r)}for(var o=0,s=n.length;o<s;o++)i(e[n[o]]);return a}(o,t)}e.exports=function(e,t){return e?t?o(e,"object",t):o(e,"string"):[]}},"gv3/":function(e,t,r){var a,n=r("I59i"),i=r("xk4V"),o="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";function s(e,t){return t(e.toLowerCase().replace(/-/g,""))}e.exports=function(){function e(e){var t=e||o,r=n(n.HEX,t),a=n(t,n.HEX),c=function(){return s(i(),r)};return{new:c,generate:c,uuid:i,fromUUID:function(e){return s(e,r)},toUUID:function(e){return function(e,t){for(var r,a=t(e),n="",i=0,o=32-a.length;i<o;++i)n+="0";return[(r=(n+a).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/))[1],r[2],r[3],r[4],r[5]].join("-")}(e,a)},alphabet:t}}return e.constants={flickrBase58:o,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},e.uuid=i,e.generate=function(){return a||(a=n(n.HEX,o)),s(i(),a)},e}()},lOcZ:function(e,t,r){"use strict";t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.isString=t.isBrowser=void 0;t.isBrowser=function(){return"undefined"!=typeof window};var a=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=a;t.toCamelCase=function(e){return a(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return a(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!a(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return a(e)&&[].reduce.call(e,(function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))}),0)};t.filteredJoin=function(e){return e.filter((function(e){return""!==e})).join()};t.combineArray=function(e,t){return Array.isArray(e)?e.map((function(e,r){return e||t[r]})):[e]}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},oFdo:function(e,t,r){"use strict";var a;t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var n=new WeakMap,i=function(e){e.forEach((function(e){if(n.has(e.target)){var t=n.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),n.delete(e.target),t())}}))};t.callbackIO=i;var o=function(e){return void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(i,{rootMargin:e})),a};t.getIO=o;t.listenToIntersections=function(e,t,r){void 0===r&&(r="200px");var a=o(r);return a?(a.observe(e),n.set(e,t),function(){a.unobserve(e),n.delete(e)}):function(){}}},perC:function(e,t,r){"use strict";t.__esModule=!0,t.initialBgImage=t.switchImageSettings=void 0;var a=r("uXx/"),n=r("EFel"),i=r("K9wq"),o=r("lOcZ");t.switchImageSettings=function(e){var t,r,a=e.image,s=e.bgImage,c=e.imageRef,l=e.state,u=(0,n.getCurrentFromData)({data:c,propName:"currentSrc"}),d=Array.isArray(a)&&!(0,i.hasArtDirectionArray)({fluid:a}),f=Array.isArray(s)?(0,o.filteredJoin)(s):s,m=!1;if(d){t=(0,n.getCurrentFromData)({data:a,propName:"tracedSVG",returnArray:d}),t=(0,o.combineArray)((0,n.getCurrentFromData)({data:a,propName:"base64",returnArray:d}),t),t=(0,o.combineArray)((0,n.getCurrentFromData)({data:a,propName:"CSS_STRING",addUrl:!1,returnArray:d}),t),l.imgLoaded&&l.isVisible&&(u?(t=(0,o.combineArray)((0,n.getCurrentFromData)({data:c,propName:"currentSrc",returnArray:d}),t),m=!0):(t=(0,o.combineArray)((0,n.getCurrentFromData)({data:c,propName:"src",returnArray:d}),t),m=!0)),t=(0,o.combineArray)(t,s);var p=(0,n.createDummyImageArray)(a.length);r=t=(0,o.combineArray)(t,p),t=(0,o.filteredJoin)(t)}else t="",t=(0,n.getCurrentFromData)({data:a,propName:"tracedSVG"})||(0,n.getCurrentFromData)({data:a,propName:"base64"}),l.imgLoaded&&l.isVisible&&(t=u,m=!0);var g=l.imageState%2;!d&&""===t&&l.imgLoaded&&l.isVisible&&c&&!c.currentSrc&&(t=(0,n.getCurrentFromData)({data:c,propName:"src",checkLoaded:!1}),m=!0),t||(t=f);var h={lastImage:f,nextImage:t,afterOpacity:g,finalImage:m};return r&&(h.nextImageArray=r),h};t.initialBgImage=function(e,t){void 0===t&&(t=!0);var r=(0,a.convertProps)(e),i=r.fluid||r.fixed;if(!i)return"";var s,c=(0,n.hasImageArray)(r);if(c){if(s=(0,n.getCurrentFromData)({data:i,propName:"tracedSVG",returnArray:c}),s=(0,o.combineArray)((0,n.getCurrentFromData)({data:i,propName:"base64",returnArray:c}),s),s=(0,o.combineArray)((0,n.getCurrentFromData)({data:i,propName:"CSS_STRING",addUrl:!1,returnArray:c}),s),t){var l=(0,n.createDummyImageArray)(i.length);s=(0,o.combineArray)(s,l)}}else s="",s=(0,n.getCurrentFromData)({data:i,propName:"tracedSVG"})||(0,n.getCurrentFromData)({data:i,propName:"base64"});return s}},"uXx/":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.logDeprecationNotice=t.convertProps=t.stripRemainingProps=void 0;var n=a(r("pVnL")),i=a(r("Ros5")),o=r("K9wq");t.stripRemainingProps=function(e){return(0,i.default)(e)};t.convertProps=function(e){var t=(0,n.default)({},e),r=t.resolutions,a=t.sizes,i=t.classId,c=t.fixed,l=t.fluid;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&s("classId","gatsby-background-image should provide unique classes automatically. Open an Issue should you still need this property."),l&&(0,o.hasArtDirectionSupport)(e,"fluid")&&(t.fluid=(0,o.groupByMedia)(t.fluid)),c&&(0,o.hasArtDirectionSupport)(e,"fixed")&&(t.fixed=(0,o.groupByMedia)(t.fixed)),t};var s=function(e,t){};t.logDeprecationNotice=s},vD7z:function(e,t,r){"use strict";t.__esModule=!0,t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var a=r("uXx/"),n=r("K9wq"),i=r("EFel"),o=Object.create({}),s=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var s=(0,a.convertProps)(e),l=(0,i.hasImageArray)(s)&&!(0,n.hasArtDirectionArray)(s);if(l&&!r)return c(e);var u=l?(0,i.getSelectedImage)(s,t):(0,i.getImageSrcKey)(s);return o[u]||!1};t.inImageCache=s;var c=function(e){var t=(0,a.convertProps)(e);return(t.fluid||t.fixed).every((function(e,r){return s(t,r,!0)}))};t.allInImageCache=c;var l=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var s=(0,a.convertProps)(e),c=(0,i.hasImageArray)(s)&&!(0,n.hasArtDirectionArray)(s);if(c&&!r)return u(e);var l=c?(0,i.getSelectedImage)(s,t):(0,i.getImageSrcKey)(s);l&&(o[l]=!0)};t.activateCacheForImage=l;var u=function(e){var t=(0,a.convertProps)(e);(t.fluid||t.fixed).forEach((function(e,r){return l(t,r,!0)}))};t.activateCacheForMultipleImages=u;t.resetImageCache=function(){for(var e in o)delete o[e]}},xk4V:function(e,t,r){var a=r("4fRq"),n=r("I2ZF");e.exports=function(e,t,r){var i=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||n(o)}},yBBL:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var a=r("lOcZ"),n=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],r=0;r<t.length;r++){var a=void 0;try{a=void 0!==t[r].rules?t[r].rules:void 0!==t[r].cssRules?t[r].cssRules:""}catch(o){}if(a){var n=Array.prototype.slice.call(a).reduce((function(t,r){return r.selectorText===e&&""===t?r:t}),"");if(n){var i=n.cssText?n.cssText:n.style.cssText;return-1===i.indexOf(n.selectorText)?n.selectorText+"{"+i+"}":i}}}};t.getStyle=n;var i=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),r=document.createElement("style");return r.textContent=e,t.body.appendChild(r),r.sheet.cssRules}return{}};t.rulesForCssText=i;var o=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach((function(r){t[(0,a.toCamelCase)(r)]=e[0].style[r]}));break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=o;var s=function(e){if((0,a.isString)(e)){var t=n("."+e),r=i(t);if(r.length>0&&void 0!==r[0].style)return Object.keys(o(r)).filter((function(e){return 0===e.indexOf("background")&&""!==r[0].style[e]})).reduce((function(e,t){return e[t]=r[0].style[t],e}),{})}return{}};t.getBackgroundStylesForSingleClass=s;var c=function(e){if("undefined"!=typeof window){var t=(0,a.stringToArray)(e);if(t instanceof Array){var r=[];return t.forEach((function(e){return r.push(s(e))})),Object.assign.apply(Object,r)}return s(e)}return{}};t.default=c},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return P}));var a=r("Wbzz"),n=r("1eu9"),i=r.n(n),o=r("mwIZ"),s=r.n(o),c=r("q1tI"),l=r.n(c),u=r("wBNj"),d=r("TJpk"),f=r.n(d),m=r("vOnD"),p=r("upwP"),g=r("KPo6"),h=r("JwsL"),y=r("VwyP");Object(u.setConfiguration)({defaultScreenClass:"md",gutterWidth:32});var v=m.a.div.withConfig({displayName:"layout__Root",componentId:"yhixhu-0"})(["overflow:hidden;background:",";"],(function(e){return e.postLayout?p.a.palette.lights[100]:p.a.palette.fill}));function b(e){e.data;var t=e.location,r=e.siteTitle,a=e.siteHeading,n=e.author,i=e.postLayout,o=void 0!==i&&i,c=e.children,u=t.pathname,d=s()(n,"author_bio"),m=s()(n,"author_avatar");return l.a.createElement(v,{postLayout:o},l.a.createElement(g.a,null),l.a.createElement(f.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,r),l.a.createElement("meta",{property:"og:url",content:t}),l.a.createElement("meta",{property:"og:title",content:r}),l.a.createElement("meta",{name:"description",content:a})),"/"===u&&l.a.createElement("header",null,l.a.createElement(y.a,{title:r,avatar:m,authorBio:d})),l.a.createElement("main",null,c),l.a.createElement("footer",null,l.a.createElement(h.a,{author:n,postFooter:o})))}var S=r("bv6p"),C=r.n(S),A=m.a.img.withConfig({displayName:"PostHeader__Logo",componentId:"uo8kj8-0"})(["margin-top:",";height:",";width:",";margin-bottom:",";"],p.a.spacing(6),p.a.spacing(7),p.a.spacing(7),p.a.spacing(5)),w=Object(m.a)(u.Container).withConfig({displayName:"PostHeader__Root",componentId:"uo8kj8-1"})(["max-width:1640px;margin-bottom:",";text-align:center;"],p.a.spacing(6)),I=m.a.h2.withConfig({displayName:"PostHeader__Title",componentId:"uo8kj8-2"})(["color:",";@media only screen and (max-width:768px){font-size:"," !important;}@media only screen and (max-width:576px){font-size:"," !important;}"],p.a.palette.shades[90],p.a.fontSize(3),p.a.fontSize(2)),x=m.a.small.withConfig({displayName:"PostHeader__Date",componentId:"uo8kj8-3"})(["color:",";"],p.a.palette.shades[50]),E=m.a.div.withConfig({displayName:"PostHeader__Separator",componentId:"uo8kj8-4"})(["width:100%;height:",";position:relative;z-index:0;border:2px solid ",";margin-top:",";margin-bottom:",";@media only screen and (max-width:576px){margin-bottom:0;}&:before{width:100%;content:'';z-index:-1;height:100%;display:block;position:absolute;bottom:calc(-1 * ",");right:calc(-1 * ",");background:",";}"],p.a.spacing(4),p.a.palette.lights[50],p.a.spacing(5),p.a.spacing(5),p.a.spacing(2),p.a.spacing(2),p.a.palette.secondary);function _(e){var t=e.title,r=e.created;return l.a.createElement(w,{fluid:!0},l.a.createElement(u.Row,{justify:"center"},l.a.createElement(u.Col,{lg:6},l.a.createElement(A,{src:C.a,alt:"gceico logo"}),l.a.createElement(I,null,t),l.a.createElement(x,null,r)),l.a.createElement(u.Col,{lg:8},l.a.createElement(E,null," "))))}var O=Object(m.a)(a.a).withConfig({displayName:"blog-post__Back",componentId:"concdi-0"})(["margin-top:",";display:block;width:fit-content;"],p.a.spacing(4)),R=Object(m.a)(u.Container).withConfig({displayName:"blog-post__Root",componentId:"concdi-1"})(["max-width:1640px;"]),k=Object(m.a)(a.a).withConfig({displayName:"blog-post__Prev",componentId:"concdi-2"})([""]),N=Object(m.a)(a.a).withConfig({displayName:"blog-post__Next",componentId:"concdi-3"})(["margin-left:auto;display:block;width:fit-content;&:hover{color:",";transition:color 0.25s ease-in;}"],p.a.palette.primary),D=m.a.div.withConfig({displayName:"blog-post__Content",componentId:"concdi-4"})(["& > *{color:",";}h1,h2,h3,h4,h5{color:",";}"],p.a.palette.shades[80],p.a.palette.shades[90]);t.default=function(e){var t=e.data,r=e.location,a=e.pageContext,n=t.cosmicjsPosts,o=s()(t,"cosmicjsSettings.metadata.site_title"),c=s()(t,"cosmicjsSettings.metadata"),d=a.previous,m=a.next;return l.a.createElement(b,{location:r,author:c,postLayout:!0},l.a.createElement(R,{fluid:!0,id:"head-root"},l.a.createElement(f.a,{title:n.title+" | "+o}),l.a.createElement(u.Row,{justify:"center"},l.a.createElement(u.Col,{lg:6,md:10},l.a.createElement(O,{to:"/posts"},"← Back to Posts"))),l.a.createElement(_,{title:n.title,created:n.created}),l.a.createElement(u.Row,{justify:"center"},l.a.createElement(u.Col,{lg:6,md:10},l.a.createElement(i.a,{Tag:"div",className:"post-hero",fluid:n.metadata.hero.local.childImageSharp.fluid,backgroundColor:"#007ACC"}),l.a.createElement(D,{dangerouslySetInnerHTML:{__html:n.content}}))),l.a.createElement(u.Row,{justify:"center"},l.a.createElement(u.Col,{lg:3,md:5,sm:6},d&&l.a.createElement(k,{to:"posts/"+d.slug,rel:"prev"},"← ",d.title)),l.a.createElement(u.Col,{lg:3,md:5,sm:6},m&&l.a.createElement(N,{to:"posts/"+m.slug,rel:"next"},m.title," →")))))};var P="1418663966"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e0e50471c6d1f4199c27.js.map