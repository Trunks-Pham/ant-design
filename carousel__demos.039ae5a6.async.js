"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[29878],{181632:function(p,s,t){t.d(s,{Z:function(){return Q}});var g=t(9783),r=t.n(g),e=t(805574),i=t.n(e),d=t(97857),o=t.n(d),f=t(513769),E=t.n(f),c=t(667294),b=t(777602),P=t(294184),x=t.n(P),M=t(73287),T=t(900210),L=t(548073),I=t(286665),W=t(986943),$=function(n){var a,v=n.componentCls,u=n.antCls,h=n.carouselArrowSize,A=n.carouselDotOffset,D=n.marginXXS,S=n.calc(h).mul(-1.25).equal(),j=D;return r()({},v,o()(o()({},(0,L.Wf)(n)),{},{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":(a={pointerEvents:"none"},r()(a,"input".concat(u,"-radio-input, input").concat(u,"-checkbox-input"),{visibility:"hidden"}),r()(a,"&.slick-active",r()({pointerEvents:"auto"},"input".concat(u,"-radio-input, input").concat(u,"-checkbox-input"),{visibility:"visible"})),r()(a,"> div > div",{verticalAlign:"bottom"}),a)},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:h,height:h,marginTop:n.calc(h).mul(-1).div(2).equal(),padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:S,"&::before":{content:'"\u2190"'}},".slick-next":{insetInlineEnd:S,"&::before":{content:'"\u2192"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:A},"&-top":{top:A,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:n.dotWidth,height:n.dotHeight,marginInline:j,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(n.motionDurationSlow),button:{position:"relative",display:"block",width:"100%",height:n.dotHeight,padding:0,color:"transparent",fontSize:0,background:n.colorBgContainer,border:0,borderRadius:n.dotHeight,outline:"none",cursor:"pointer",opacity:.3,transition:"all ".concat(n.motionDurationSlow),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:n.calc(j).mul(-1).equal(),content:'""'}},"&.slick-active":{width:n.dotActiveWidth,"& button":{background:n.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}}))},F=function(n){var a=n.componentCls,v=n.carouselDotOffset,u=n.marginXXS,h={width:n.dotHeight,height:n.dotWidth};return r()({},"".concat(a,"-vertical"),{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:n.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:v},"&-right":{insetInlineEnd:v,insetInlineStart:"auto"},li:o()(o()({},h),{},{margin:"".concat((0,T.unit)(u)," 0"),verticalAlign:"baseline",button:h,"&.slick-active":o()(o()({},h),{},{button:h})})}})},k=function(n){var a=n.componentCls;return[r()({},"".concat(a,"-rtl"),{direction:"rtl",".slick-dots":r()({},"".concat(a,"-rtl&"),{flexDirection:"row-reverse"})}),r()({},"".concat(a,"-vertical"),{".slick-dots":r()({},"".concat(a,"-rtl&"),{flexDirection:"column"})})]},G=function(){var n=24;return{dotWidth:16,dotHeight:3,dotWidthActive:n,dotActiveWidth:n}},V=(0,I.I$)("Carousel",function(l){var n=l.controlHeightLG,a=l.controlHeightSM,v=(0,W.TS)(l,{carouselArrowSize:l.calc(n).div(2).equal(),carouselDotOffset:l.calc(a).div(2).equal()});return[$(v),F(v),k(v)]},G,{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),H=t(785893),Y=["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"],J=c.forwardRef(function(l,n){var a,v=l.dots,u=v===void 0?!0:v,h=l.arrows,A=h===void 0?!1:h,D=l.draggable,S=D===void 0?!1:D,j=l.waitForAnimate,w=j===void 0?!1:j,_=l.dotPosition,R=_===void 0?"bottom":_,K=l.vertical,U=K===void 0?R==="left"||R==="right":K,q=l.rootClassName,tt=l.className,et=l.style,nt=l.id,it=E()(l,Y),B=c.useContext(M.E_),ot=B.getPrefixCls,lt=B.direction,y=B.carousel,m=c.useRef(),N=function(ht){var vt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;m.current.slickGoTo(ht,vt)};c.useImperativeHandle(n,function(){return{goTo:N,autoPlay:m.current.innerSlider.autoPlay,innerSlider:m.current.innerSlider,prev:m.current.slickPrev,next:m.current.slickNext}},[m.current]);var Z=c.useRef(c.Children.count(l.children));c.useEffect(function(){Z.current!==c.Children.count(l.children)&&(N(l.initialSlide||0,!1),Z.current=c.Children.count(l.children))},[l.children]);var C=o()({vertical:U,className:x()(tt,y==null?void 0:y.className),style:o()(o()({},y==null?void 0:y.style),et)},it);C.effect==="fade"&&(C.fade=!0);var O=ot("carousel",C.prefixCls),z="slick-dots",rt=!!u,at=x()(z,"".concat(z,"-").concat(R),typeof u=="boolean"?!1:u==null?void 0:u.className),st=V(O),X=i()(st,2),dt=X[0],ct=X[1],ut=x()(O,(a={},r()(a,"".concat(O,"-rtl"),lt==="rtl"),r()(a,"".concat(O,"-vertical"),C.vertical),a),ct,q);return dt((0,H.jsx)("div",{className:ut,id:nt,children:(0,H.jsx)(b.Z,o()(o()({ref:m},C),{},{dots:rt,dotsClass:at,arrows:A,draggable:S,verticalSwiping:U,waitForAnimate:w}))}))}),Q=J},161672:function(p,s,t){t.r(s);var g=t(667294),r=t(181632),e=t(785893),i={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},d=function(){return(0,e.jsxs)(r.Z,{autoplay:!0,children:[(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"1"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"2"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"3"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"4"})})]})};s.default=d},57037:function(p,s,t){t.r(s);var g=t(667294),r=t(181632),e=t(785893),i={margin:0,height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},d=function(){var f=function(c){console.log(c)};return(0,e.jsxs)(r.Z,{afterChange:f,children:[(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"1"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"2"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"3"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"4"})})]})};s.default=d},233741:function(p,s,t){t.r(s);var g=t(667294),r=t(75529),e=t(181632),i=t(785893),d={margin:0,height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"};s.default=function(){return(0,i.jsx)(r.ZP,{theme:{components:{Carousel:{dotWidth:50,dotHeight:50,dotActiveWidth:80}}},children:(0,i.jsxs)(e.Z,{children:[(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:d,children:"1"})}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:d,children:"2"})}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:d,children:"3"})}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{style:d,children:"4"})})]})})}},321871:function(p,s,t){t.r(s);var g=t(667294),r=t(181632),e=t(785893),i={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},d=function(){return(0,e.jsxs)(r.Z,{effect:"fade",children:[(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"1"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"2"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"3"})}),(0,e.jsx)("div",{children:(0,e.jsx)("h3",{style:i,children:"4"})})]})};s.default=d},520181:function(p,s,t){t.r(s);var g=t(805574),r=t.n(g),e=t(667294),i=t(371707),d=t(181632),o=t(785893),f={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},E=function(){var b=(0,e.useState)("top"),P=r()(b,2),x=P[0],M=P[1],T=function(I){var W=I.target.value;M(W)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.ZP.Group,{onChange:T,value:x,style:{marginBottom:8},children:[(0,o.jsx)(i.ZP.Button,{value:"top",children:"Top"}),(0,o.jsx)(i.ZP.Button,{value:"bottom",children:"Bottom"}),(0,o.jsx)(i.ZP.Button,{value:"left",children:"Left"}),(0,o.jsx)(i.ZP.Button,{value:"right",children:"Right"})]}),(0,o.jsxs)(d.Z,{dotPosition:x,children:[(0,o.jsx)("div",{children:(0,o.jsx)("h3",{style:f,children:"1"})}),(0,o.jsx)("div",{children:(0,o.jsx)("h3",{style:f,children:"2"})}),(0,o.jsx)("div",{children:(0,o.jsx)("h3",{style:f,children:"3"})}),(0,o.jsx)("div",{children:(0,o.jsx)("h3",{style:f,children:"4"})})]})]})};s.default=E}}]);
