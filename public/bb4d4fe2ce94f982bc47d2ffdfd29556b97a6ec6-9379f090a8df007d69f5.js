(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/zjr":function(e,t,n){"use strict";var r=n("MUpH"),a=n("q1tI"),i=n.n(a),s=n("vOnD"),o=n("Wbzz"),d=n("9eSz"),l=n.n(d),u=n("5Wrh"),c=n("+jxT"),f=n("2F5z");function p(){var e=Object(r.a)(["\n  position: absolute;\n  top: 420px;\n  font-size: 14px;\n"]);return p=function(){return e},e}function g(){var e=Object(r.a)(["\n  font-weight: 400;\n  font-size: 1rem;\n  margin-left: 0.5rem;\n"]);return g=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 375px;\n"]);return m=function(){return e},e}function h(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 2rem;\n  font-weight: bold;\n\n  @media screen and (max-width: 280px) {\n    padding: 0 2rem;\n  }\n"]);return h=function(){return e},e}function b(){var e=Object(r.a)(["\n  height: 100%;\n  max-width: 100%;\n  position: relative;\n  border-radius: 10px;\n  filter: brightness(70%);\n  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover {\n    filter: brightness(100%);\n    transition: 0.2s ease-in;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(r.a)(["\n  line-height: 2;\n  width: 100%;\n  height: 500px;\n  position: relative;\n  border-radius: 10px;\n  transition: 0.3s ease;\n\n  &:hover {\n    transform: scale(0.95);\n    transition: 0.2s ease-in;\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  justify-items: center;\n  padding: 0 2rem;\n  max-width: 100%;\n  height: 100%;\n\n  @media screen and (max-width: 1200px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media screen and (max-width: 868px) {\n    grid-template-columns: 1fr;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(r.a)(["\n  padding: 4rem calc((100vw - 1300px) / 2);\n  background: #fff;\n  color: #fff;\n"]);return S=function(){return e},e}var w=s.a.div(S()),x=s.a.div(y()),E=s.a.div(v()),O=Object(s.a)(l.a)(b()),z=s.a.div(h()),L=s.a.div(m()),I=s.a.div(g()),R=Object(s.a)(u.a)(p());t.a=function(){var e=Object(o.useStaticQuery)("2417259170");return i.a.createElement(w,null,i.a.createElement(f.b,null,"Popular Destinations"),i.a.createElement(f.a,null,"World's best tourist destinations"),i.a.createElement(x,null,function(e){var t=[];return e.allDataJson.edges.forEach((function(e,n){t.push(i.a.createElement(E,{key:n},i.a.createElement(O,{src:e.node.img.childImageSharp.fluid.src,fluid:e.node.img.childImageSharp.fluid}),i.a.createElement(z,null,i.a.createElement(L,null,i.a.createElement(c.a,null),i.a.createElement(I,null,e.node.name)),i.a.createElement(R,{to:"/destinations",primary:"true"},e.node.button))))})),t}(e)))}},"2F5z":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return d}));var r=n("MUpH"),a=(n("1Xma"),n("vOnD"));function i(){var e=Object(r.a)(["\n  font-size: clamp(0.5rem, 6vw, 1.1rem);\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 0.3rem;\n  color: #595959;\n"]);return i=function(){return e},e}function s(){var e=Object(r.a)(['\n  font-size: clamp(1.8rem, 6vw, 2.3rem);\n  text-align: center;\n  font-family: "PT Sans Caption", sans-serif;\n  font-weight: bold;\n  color: #000;\n  letter-spacing: -1px;\n']);return s=function(){return e},e}var o=a.a.h1(s()),d=a.a.p(i())},"5Wrh":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("MUpH"),a=n("vOnD"),i=n("Wbzz");function s(){var e=Object(r.a)(["\n  background: ",";\n  white-space: nowrap;\n  padding: 14px 32px;\n  color: #fff;\n  font-size: 0.9rem;\n  outline: none;\n  border: none;\n  min-width: 100px;\n  text-decoration: none;\n  transition: 0.3s !important;\n  border-radius: 50px;\n  cursor: pointer;\n\n  &:hover {\n    background: ",";\n    transform: translateY(-5px);\n  }\n"]);return s=function(){return e},e}var o=Object(a.a)(i.Link)(s(),(function(e){return e.primary?"#F26A2E":"#077BF1"}),(function(e){return e.primary?"#077BF1":"#F26A2E"}))},"9eSz":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),s=r(n("VbXa")),o=r(n("8OQS")),d=r(n("pVnL")),l=r(n("q1tI")),u=r(n("17x9")),c=function(e){var t=(0,d.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed,r=g(t||n||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),n=p(t);return m[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),n&&l.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function x(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:r})}))}function z(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),S.set(e,t)),function(){n.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+l+s+o+n+r+t+i+a+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(j,(0,d.default)({ref:t,src:n},i,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,a(r),o):o})),j=l.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:n,srcSet:r,src:a},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=v&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&y&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||v&&(b||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=l.default.createRef(),n.placeholderRef=t.placeholderRef||l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=c(e),(n=p(t))&&(m[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=c(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,x=e.loading,z=e.draggable,L=m||h;if(!L)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:V?1:0,transition:H?"opacity "+v+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},W=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&C,o,f),P={title:t,alt:this.state.isVisible?"":n,style:W,className:p,itemProp:S},q=this.state.isHydrated?g(L):L[0];if(m)return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&C)}),q.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:L,generateSources:O}),q.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:L,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(L),l.default.createElement(j,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:n,title:t,loading:x},q,{imageVariants:L}))}}));if(h){var M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete M.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},H&&C)}),q.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:L,generateSources:O}),q.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:L,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(L),l.default.createElement(j,{alt:n,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:n,title:t,loading:x},q,{imageVariants:L}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,n,r){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[n]=e,a),t,"prop",r)}}V.propTypes={resolutions:H,sizes:k,fixed:T(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:T(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=V;t.default=C}}]);
//# sourceMappingURL=bb4d4fe2ce94f982bc47d2ffdfd29556b97a6ec6-9379f090a8df007d69f5.js.map