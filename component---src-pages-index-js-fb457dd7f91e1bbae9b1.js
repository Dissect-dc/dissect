(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mjw":function(e,t,r){"use strict";r("q8oJ"),r("C9fy"),r("8npG"),r("nWfQ"),r("LagC"),r("pS08"),r("E5k/"),r("m210"),r("4DPX"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("m210"),r("4DPX"),r("E5k/"),r("q8oJ"),r("8npG"),r("nWfQ"),r("LagC");var n=a(r("q1tI")),i=a(r("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var i=p(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,e);var t,r,i,a=d(o);function o(){return s(this,o),a.apply(this,arguments)}return t=o,(r=[{key:"renderSlidesNumbers",value:function(e){for(var t=this.props,r=t.slidesCount,i=t.scrollToSlide,a=[],o=function(t){var r={disabled:e===t,key:t,onClick:function(){return i(t)}};a.push(n.default.createElement("button",l({type:"button"},r),t+1))},s=0;s<r;s++)o(s);return a}},{key:"render",value:function(){var e=this.props,t=e.getCurrentSlideIndex,r=e.slidesCount,i=e.style,a=e.className,o=t();return n.default.createElement("div",{className:a,style:i},n.default.createElement("button",{type:"button",disabled:0===o,onClick:this.props.onPrev},"←"),this.renderSlidesNumbers(o),n.default.createElement("button",{type:"button",disabled:o===r-1,onClick:this.props.onNext},"→"))}}])&&u(t.prototype,r),i&&u(t,i),o}(n.default.Component);t.default=h,h.propTypes={className:i.default.string,getCurrentSlideIndex:i.default.func.isRequired,onNext:i.default.func.isRequired,onPrev:i.default.func.isRequired,scrollToSlide:i.default.func.isRequired,slidesCount:i.default.number.isRequired,style:i.default.object},h.defaultProps={className:"full-page-controls",style:{}}},"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3nNU":function(e,t,r){"use strict";r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n=window.scrollY||window.pageYOffset||0,a=e-n,o=0;!function e(){o+=20;var l=(0,i.default)(o,n,a,t);window.scrollTo(0,l),o>t?r():setTimeout(e,20)}()};var n,i=(n=r("SVd7"))&&n.__esModule?n:{default:n}},"5Lg8":function(e,t,r){"use strict";r("sc67"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var i,a=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),u=n(r("q1tI")),c=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=d(e),r=p(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),u.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function _(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function P(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?P(e,!0):"")+P(e)})).join("")+"<img "+u+o+l+r+n+t+a+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,l=u.default.createElement(L,(0,s.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,i(n),l):l})),L=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:i},h,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,P=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,s.default)({opacity:x?1:0,transition:C?"opacity "+y+"ms":"none"},l),k="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},z=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&T,l,f),N={title:t,alt:this.state.isVisible?"":r,style:z,className:p,itemProp:S};if(g){var M=g,q=h(g);return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),k&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),q.base64&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:N,imageVariants:M,generateSources:_}),q.tracedSVG&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:N,imageVariants:M,generateSources:O}),this.state.isVisible&&u.default.createElement("picture",null,w(M),u.default.createElement(L,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:P})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:E},q,{imageVariants:M}))}}))}if(m){var D=m,G=h(m),W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},a);return"inherit"===a.display&&delete W.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},k&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:k,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},C&&T)}),G.base64&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:N,imageVariants:D,generateSources:_}),G.tracedSVG&&u.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:N,imageVariants:D,generateSources:O}),this.state.isVisible&&u.default.createElement("picture",null,w(D),u.default.createElement(L,{alt:r,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:P})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:E},G,{imageVariants:D}))}}))}return null},t}(u.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});C.propTypes={resolutions:I,sizes:k,fixed:c.default.oneOfType([I,c.default.arrayOf(I)]),fluid:c.default.oneOfType([k,c.default.arrayOf(k)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=C;t.default=T},D0nf:function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.getObjectValues=void 0,r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");t.getObjectValues=function(e){return Object.keys(e).map((function(t){return e[t]}))}},DpgU:function(e,t,r){"use strict";r("OeI1"),r("q8oJ"),r("C9fy"),r("8npG"),r("nWfQ"),r("LagC"),r("pS08"),r("E5k/"),r("m210"),r("4DPX"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("m210"),r("4DPX"),r("E5k/"),r("q8oJ"),r("8npG"),r("nWfQ"),r("LagC");var n=c(r("17x9")),i=c(r("q1tI")),a=c(r("3nNU")),o=c(r("5Lg8")),l=r("D0nf"),s=c(r("ItWv")),u=c(r("0mjw"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var i=b(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={FULL_PAGE:"full-page",NORMAL:"normal"},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(s,e);var t,r,n,l=g(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).onResize=function(){t._slides=[];for(var e=0;e<t._slidesCount;e++)t._slides.push(window.innerHeight*e);t.setState({height:window.innerHeight})},t.onTouchStart=function(e){t._touchStart=e.touches[0].clientY,t._isScrolledAlready=!1},t.onTouchMove=function(e){if(t.props.scrollMode===y.FULL_PAGE){e.preventDefault();var r=e.changedTouches[0].clientY;t._isScrollPending||t._isScrolledAlready||(t._touchStart>r+t._touchSensitivity?t.scrollToSlide(t.state.activeSlide+1):t._touchStart<r-t._touchSensitivity&&t.scrollToSlide(t.state.activeSlide-1))}},t.onScroll=function(e){if(t.props.scrollMode===y.FULL_PAGE&&(e.preventDefault(),!t._isScrollPending)){var r=(e.wheelDelta||-e.deltaY||-e.detail)<0,n=t.state.activeSlide;r?n++:n--,t.scrollToSlide(n)}},t.getSlidesCount=function(){return t._slidesCount},t.getCurrentSlideIndex=function(){return t.state.activeSlide},t.scrollNext=function(){t.scrollToSlide(t.state.activeSlide+1)},t.scrollPrev=function(){t.scrollToSlide(t.state.activeSlide-1)},t.scrollToSlide=function(e){if(!t._isScrollPending&&e>=0&&e<t._slidesCount){var r=t.state.activeSlide;t.props.beforeChange({from:r,to:e}),t.setState({activeSlide:e}),t._isScrollPending=!0,(0,a.default)(t._slides[e],t.props.duration,(function(){t._isScrollPending=!1,t._isScrolledAlready=!0,t.props.afterChange({from:r,to:e})}))}},t._isScrollPending=!1,t._isScrolledAlready=!1,t._slides=[],t._slidesCount=s.getChildrenCount(t.props.children),t._touchSensitivity=5,t._touchStart=0,t._isMobile=null,t.state={activeSlide:e.initialSlide},t}return t=s,(r=[{key:"componentDidMount",value:function(){this._isMobile=(0,o.default)(),this._isMobile?(document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchstart",this.onTouchStart)):document.addEventListener("wheel",this.onScroll,{passive:!1}),window.addEventListener("resize",this.onResize),this.onResize(),this.scrollToSlide(this.props.initialSlide)}},{key:"componentWillUnmount",value:function(){this._isMobile?(document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchstart",this.onTouchStart)):document.removeEventListener("wheel",this.onScroll),window.removeEventListener("resize",this.onResize)}},{key:"renderControls",value:function(){var e=this.props,t=e.controls,r=e.controlsProps;if(!t)return null;var n={getCurrentSlideIndex:this.getCurrentSlideIndex,onNext:this.scrollNext,onPrev:this.scrollPrev,scrollToSlide:this.scrollToSlide,slidesCount:this.getSlidesCount()};if(!0===t)return i.default.createElement(u.default,f({className:"full-page-controls"},n,r));var a=t;return i.default.createElement(a,f({},n,r))}},{key:"render",value:function(){return i.default.createElement("div",{style:{height:this.state.height}},this.renderControls(),this.props.children)}}])&&p(t.prototype,r),n&&p(t,n),s}(i.default.Component);t.default=v,v.propTypes={afterChange:n.default.func,beforeChange:n.default.func,children:n.default.node.isRequired,controls:n.default.oneOfType([n.default.bool,n.default.element,n.default.func]),controlsProps:n.default.object,duration:n.default.number,initialSlide:n.default.number,scrollMode:n.default.oneOf((0,l.getObjectValues)(y))},v.defaultProps={afterChange:function(){},beforeChange:function(){},controls:!1,controlsProps:{},duration:700,initialSlide:0,scrollMode:y.FULL_PAGE},v.getChildrenCount=function(e){return i.default.Children.toArray(e).filter((function(e){return e.type===s.default})).length}},EDuE:function(e,t,r){},ItWv:function(e,t,r){"use strict";r("+ar0"),r("xtjI"),r("JHok"),r("OeI1"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("E5k/"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("E5k/"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=a(r("17x9")),i=a(r("q1tI"));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){return i.default.createElement("div",o({},e,{style:s(s({},e.style),{},{height:"100%"})}),e.children)};c.propTypes={children:n.default.node,style:n.default.object},c.defaultProps={children:null,style:{}},c.isSlideOfFullpage=!0;var d=c;t.default=d},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"buildImage",(function(){return g})),r.d(t,"query",(function(){return m}));var n=r("q1tI"),i=r.n(n),a=r("LbRr"),o=r("lWan"),l=r("Wbzz"),s=r("9eSz"),u=r.n(s),c=(r("EDuE"),r("Bl7J")),d=r("x242"),f=r("HTXd"),p=r.n(f),h={width:"100%",height:"100vh",backgroundImage:"url("+r("SoXR")+")",backgroundSize:"cover"};t.default=function(e){var t=e.data;return i.a.createElement(c.a,null,i.a.createElement(o.FullPage,null,i.a.createElement(o.Slide,null,i.a.createElement("div",{className:"cComponent",style:h},i.a.createElement(a.a,null))),i.a.createElement(o.Slide,{className:"bg"},i.a.createElement("div",{className:"dissect-vertical"},i.a.createElement("h1",{className:"centering",hidden:!0,tag:"h1"},"Guides"),i.a.createElement("div",{className:"row builds"},i.a.createElement("div",{className:"column hundred zoom"},i.a.createElement(d.Text,{textAlign:"center",textColor:"black",tag:"h1",textWeight:"500",textSize:"title",bg:"white",className:"rcorners-upper"},"Berserker"),i.a.createElement(l.Link,{to:"/berserker"},i.a.createElement(u.a,{className:"blackwhite rcorners-lower",fluid:t.berserker.childImageSharp.fluid}))),i.a.createElement("div",{className:"column hundred zoom"},i.a.createElement(d.Text,{textAlign:"center",textColor:"black",tag:"h1",textWeight:"500",textSize:"title",bg:"white",className:"rcorners-upper"},"Firebrand"),i.a.createElement(l.Link,{to:"/firebrand"},i.a.createElement(u.a,{className:"blackwhite rcorners-lower",fluid:t.firebrand.childImageSharp.fluid}))),i.a.createElement("div",{className:"column hundred zoom"},i.a.createElement(d.Text,{textAlign:"center",textColor:"black",tag:"h1",textWeight:"500",textSize:"title",bg:"white",className:"rcorners-upper"},"Renegade"),i.a.createElement(l.Link,{to:"/renegade"},i.a.createElement(u.a,{className:"blackwhite rcorners-lower",fluid:t.renegade.childImageSharp.fluid}))),i.a.createElement("div",{className:"column hundred zoom"},i.a.createElement(d.Text,{textAlign:"center",textColor:"black",tag:"h1",textWeight:"500",textSize:"title",bg:"white",className:"rcorners-upper"},"Soulbeast"),i.a.createElement(l.Link,{to:"/soulbeast"},i.a.createElement(u.a,{className:"blackwhite rcorners-lower",fluid:t.soulbeast.childImageSharp.fluid}))),i.a.createElement("div",{className:"column hundred zoom"},i.a.createElement(d.Text,{textAlign:"center",textColor:"black",tag:"h1",textWeight:"500",textSize:"title",bg:"white",className:"rcorners-upper"},"Weaver"),i.a.createElement(l.Link,{to:"/weaver"},i.a.createElement(u.a,{className:"blackwhite rcorners-lower",fluid:t.weaver.childImageSharp.fluid}))))),i.a.createElement("div",null,i.a.createElement(d.Image,{className:"image_block",src:p.a,h:"100px",w:"auto"})))))};var g="3866930082",m="43220870"},SVd7:function(e,t,r){"use strict";r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){var i=e/n-1;return r*(i*i*i+1)+t}},SoXR:function(e,t,r){e.exports=r.p+"static/Uten_navn-2-4d8d09a7e0336b741fce6e5782966ad0.jpg"},lWan:function(e,t,r){"use strict";r("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FullPage",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return i.default}});var n=a(r("DpgU")),i=a(r("ItWv"));function a(e){return e&&e.__esModule?e:{default:e}}},nWfQ:function(e,t,r){var n=r("P8UN"),i=r("nsRs"),a=r("nONw"),o=r("1a8y"),l=r("BjK0"),s=r("96qb"),u=r("16Xr"),c=(r("emib").Reflect||{}).construct,d=s((function(){function e(){}return!(c((function(){}),[],e)instanceof e)})),f=!s((function(){c((function(){}))}));n(n.S+n.F*(d||f),"Reflect",{construct:function(e,t){a(e),o(t);var r=arguments.length<3?e:a(arguments[2]);if(f&&!d)return c(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(u.apply(e,n))}var s=r.prototype,p=i(l(s)?s:Object.prototype),h=Function.apply.call(e,p,t);return l(h)?h:p}})},"t+fG":function(e,t,r){var n=r("P8UN"),i=r("96qb"),a=r("ap2Z"),o=/"/g,l=function(e,t,r,n){var i=String(a(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},zTTH:function(e,t,r){"use strict";var n=r("P8UN"),i=r("Wadk")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(a)}}]);
//# sourceMappingURL=component---src-pages-index-js-fb457dd7f91e1bbae9b1.js.map