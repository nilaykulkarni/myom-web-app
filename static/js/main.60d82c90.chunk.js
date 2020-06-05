(this["webpackJsonpmyom-web-app"]=this["webpackJsonpmyom-web-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),r=a.n(i),l=(a(96),a(97),a(27)),c=a(142),s=a(144),m=a(145),p=a(38),d=(a(160),a(140)),u=a(13),g=a(29),h=a.n(g);a(58),Object(d.a)((function(e){return{root:{flexGrow:1},homeButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var b=a(59),f=a(60),v=a(83),E=a(82),w=a(159),y=a(146),x=a(148),A=a(147),I=a(162),k=a(149),j=a(150),S=a(62),O=a.n(S),T=a(63),N=a.n(T),M=a(61),Y=a.n(M),C=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(250,"px)"),marginLeft:250},drawer:{width:250,flexShrink:0},drawerPaper:{width:250},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));n.Component;var F=a(153),P=a(151),B=a(64),W=a.n(B),J=Object(d.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1,color:"#0066ff"},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function q(e){var t=J(),a=e.sections,n=e.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:t.toolbar},o.a.createElement("a",{href:"/home"},o.a.createElement("img",{src:W.a})),o.a.createElement(p.a,{component:"h2",variant:"h3",color:"blue",align:"center",noWrap:!0,className:t.toolbarTitle},n)),o.a.createElement(s.a,{component:"nav",variant:"dense",className:t.toolbarSecondary},a.map((function(e){return o.a.createElement(P.a,{color:"primary",noWrap:!0,key:e.title,variant:"outlined",href:e.url,className:t.toolbarLink},e.title)}))))}var H=a(152);function Z(){return o.a.createElement(p.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(H.a,{color:"inherit",href:"https://material-ui.com/"},"MYOM")," ",(new Date).getFullYear(),".")}var z=Object(d.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function R(e){var t=z(),a=e.description;e.title;return o.a.createElement("footer",{className:t.footer},o.a.createElement(F.a,{maxWidth:"lg"},o.a.createElement(p.a,{variant:"h6",align:"center",gutterBottom:!0}),o.a.createElement(p.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},a),o.a.createElement(Z,null)))}var L=a(84),Q=a(154),G=Object(d.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"350px"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(l.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function K(e){var t=G(),a=e.post;return o.a.createElement(L.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")"),backgroundSize:"".concat(a.imageSize)}},o.a.createElement("img",{style:{display:"none"},src:a.image,alt:a.imageText}),o.a.createElement("div",{className:t.overlay}),o.a.createElement(Q.a,{container:!0},o.a.createElement(Q.a,{item:!0,md:6},o.a.createElement("div",{className:t.mainFeaturedPostContent},o.a.createElement(p.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},a.title),o.a.createElement(p.a,{variant:"h5",color:"inherit",paragraph:!0},a.description),o.a.createElement(H.a,{variant:"subtitle1",href:"#"},a.linkText)))))}var D=a(156),U=a(155),X=a(157),V=a(158),$=a(161),_=Object(d.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160,height:200}});function ee(e){var t=_(),a=e.post;return o.a.createElement(Q.a,{item:!0,xs:12,md:4},o.a.createElement(U.a,{component:"a",href:a.url},o.a.createElement(D.a,{className:t.card},o.a.createElement("div",{className:t.cardDetails},o.a.createElement(X.a,null,o.a.createElement(p.a,{component:"h2",variant:"h5"},a.title),o.a.createElement(p.a,{variant:"subtitle2",color:"textSecondary"},a.date),o.a.createElement(p.a,{variant:"subtitle2",paragraph:!0},a.description),o.a.createElement(p.a,{variant:"subtitle2",color:"primary"},"Continue reading..."))),o.a.createElement($.a,{xsDown:!0},o.a.createElement(V.a,{className:t.cardMedia,image:a.image,title:a.imageTitle})))))}var te=a(50),ae=a(66),ne=Object(d.a)((function(e){return{markdown:Object(te.a)(Object(te.a)({},e.typography.body2),{},{padding:e.spacing(3,0)})}}));function oe(e){ne(),e.posts;var t=e.title;return o.a.createElement(Q.a,{item:!0,xs:12,md:8},o.a.createElement(p.a,{variant:"h6",gutterBottom:!0},t),o.a.createElement(A.a,null),o.a.createElement(ae.a,null,"M.Y.O.M is a Pune-based social group that provides a platform for every budding idea to thrive. Idea is nurtured into Movements which allows Individuals to join & connect with people in the community and thus promulgate the cause. So, Ideas from diverse sectors of social welfare are welcomed; be it environment, animal care, child education or any other concern. Many of us might have had a wish to do something for the society but couldn't bring it out into action because of lack of advocacy and resource. Approaching & working with the conventional welfare organisations also won\u2019t gratify one\u2019s need because most of them rather make you follow \u2018their\u2019 mission, and thus putting you at an early path of compromise and dissatisfaction. At M.Y.O.M, we believe in what \u2018You\u2019 believe i.e. to make world a better place to live in. We provide you much required Liberty & the Platform to come up with your noble ideas, and assist you in every possible way to make \u2018it\u2019 a reality. Conducting events would have never been so fun because you get the opportunity to lead, share & connect with folks who share your mind-set. You just need to send your ideas to us through the link, whose feasibility is then judged by our panel. Once the screening is over, ideas are reformed into events which are further resourced by the Team M.Y.O.M. The events are made open to public for volunteering. All volunteers thus, have opportunity to volunteer in their vicinity and their field of interest. Our mission:To promote altruism by channelizing the ideas of people   onto a flexible volunteering platform in-order to make the idea a reality. How we will work:There will be an online portal where people will submit their ideas to the admin team(or the request handling team).Upon shortlisting from our end, the original idea holder will be called for a meeting to plan out the activity along with a tentative date for the same. Once it's done, then the activity will be posted on the portal along with the requirements, to register volunteers who are willing to be a part of it. Initially we need to create our own activities and invite people to join. Once the portal gains momentum and publicity,we will start receiving more ideas and so we will help accomplish those. The intention is to serve in every possible way and hence there are no restrictions on the area of social welfare."))}var ie=Object(d.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function re(e){var t=ie(),a=(e.archives,e.description),n=e.social,i=e.title;return o.a.createElement(Q.a,{item:!0,xs:12,md:4},o.a.createElement(L.a,{elevation:0,className:t.sidebarAboutBox},o.a.createElement(p.a,{variant:"h6",gutterBottom:!0},i),o.a.createElement(p.a,null,a)),o.a.createElement(p.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection},"Social"),n.map((function(e){return o.a.createElement(H.a,{display:"block",variant:"body1",href:e.url,key:e},o.a.createElement(Q.a,{container:!0,direction:"row",spacing:1,alignItems:"center",justify:"center"},o.a.createElement(Q.a,{item:!0},o.a.createElement(e.icon,null)),o.a.createElement(Q.a,{item:!0},e.name)))})))}var le=a(68),ce=a.n(le),se=a(69),me=a.n(se),pe=a(70),de=a.n(pe),ue=a(46),ge=a.n(ue),he=a(71),be=a.n(he),fe=a(72),ve=a.n(fe),Ee=a(73),we=a.n(Ee),ye=a(75),xe=a.n(ye),Ae=a(74),Ie=a.n(Ae),ke=a(76),je=a.n(ke),Se=Object(d.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),Oe={title:"",description:"",image:ge.a,imgText:"main image description"},Te=[{title:"Make New Life",date:"April 2020",description:"Suvarna & Arun Pasare have selflessly devoted their life for strays since 2007",image:be.a,imageText:"Image Text",url:"/featuredPost1"},{title:"Mega collection drive",date:"September 2016",description:"Banket donation drive during winter season",image:we.a,imageText:"Image Text",url:"/featuredPost2"},{title:"Umeed Surron Se",date:"June 2015",description:"A fundraiser for old age home",image:ve.a,imageText:"Image Text",url:"/featuredPost3"}],Ne={title:"Mission",description:"To promote altruism by giving \u2018You\u2019 a chance to create an impact and revamp the society.",archives:[{title:"March 2020",url:"#"},{title:"February 2020",url:"#"},{title:"January 2020",url:"#"},{title:"November 1999",url:"#"},{title:"October 1999",url:"#"},{title:"September 1999",url:"#"}],social:[{name:"Facebook",icon:Ie.a,url:"https://www.facebook.com/myomindia/"},{name:"Instagram",icon:xe.a,url:"https://instagram.com/myomindia?igshid=mg2crc852upr"},{name:"Twitter",icon:je.a,url:"https://twitter.com/myomindia?s=20"}]},Me=[ce.a,me.a,de.a];function Ye(){var e=Se();return o.a.createElement("div",null,o.a.createElement(K,{post:Oe}),o.a.createElement(Q.a,{container:!0,spacing:4},Te.map((function(e){return o.a.createElement(ee,{key:e.title,post:e})}))),o.a.createElement(Q.a,{container:!0,spacing:5,className:e.mainGrid},o.a.createElement(oe,{title:"Introduction",posts:Me}),o.a.createElement(re,{title:Ne.title,description:Ne.description,archives:Ne.archives,social:Ne.social})))}var Ce=a(77),Fe={title:"",description:"",image:a.n(Ce).a,imgText:"main image description",imageSize:"contain"},Pe=function(){return o.a.createElement("div",null,o.a.createElement(K,{post:Fe}),"There will be an online portal where people will submit their ideas to the admin team(or the request handling team).Upon shortlisting from our end, the original idea holder will be called for a meeting to plan out the activity along with a tentative date for the same. Once it's done, then the activity will be posted on the portal along with the requirements, to register volunteers who are willing to be a part of it. Initially we need to create our own activities and invite people to join. Once the portal gains momentum & publicity,we will start receiving more ideas and so we will help accomplish those. The intention is to serve in every possible way and hence there are no restrictions on the area of social welfare.")},Be=a(80),We=a(9),Je={title:"",description:"",image:ge.a,imgText:"main image description"},qe=function(){return o.a.createElement("div",null,o.a.createElement(K,{post:Je}),"Put details here")},He=a(78),Ze={title:"",description:"",image:a.n(He).a,imgText:"main image description"},ze=function(){return o.a.createElement("div",null,o.a.createElement(K,{post:Ze}),"Put details here")},Re=a(79),Le={title:"",description:"",image:a.n(Re).a,imgText:"main image description"},Qe=function(){return o.a.createElement("div",null,o.a.createElement(K,{post:Le}),"Put details here")},Ge=Object(d.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),Ke=[{title:"Home",url:"/home"},{title:"How we work",url:"/work"},{title:"Past movements",url:"/campaigns"},{title:"Gallery",url:"/gallery"},{title:"Contact Us",url:"/contact"}];function De(){Ge();return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,null),o.a.createElement(F.a,{maxWidth:"lg"},o.a.createElement(q,{title:"Make Your Own Movement",sections:Ke}),o.a.createElement("main",null,o.a.createElement(Be.a,null,o.a.createElement(We.a,{path:"/",exact:!0,component:Ye}),o.a.createElement(We.a,{path:"/home",exact:!0,component:Ye}),o.a.createElement(We.a,{path:"/work",exact:!0,component:Pe}),o.a.createElement(We.a,{path:"/featuredpost1",exact:!0,component:qe}),o.a.createElement(We.a,{path:"/featuredpost2",exact:!0,component:ze}),o.a.createElement(We.a,{path:"/featuredpost3",exact:!0,component:Qe})))),o.a.createElement(R,{title:"Copyright information"}))}var Ue=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(o.a.Fragment,null,o.a.createElement(De,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){e.exports=a.p+"static/media/dogShelter.5fcd63d4.png"},61:function(e,t,a){e.exports=a.p+"static/media/logo.dee2571c.png"},64:function(e,t){e.exports="data:image/png;base64,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"},68:function(e,t,a){e.exports=a.p+"static/media/blog-post-1.30897ee9.md"},69:function(e,t,a){e.exports=a.p+"static/media/blog-post-2.4ced253a.md"},70:function(e,t,a){e.exports=a.p+"static/media/blog-post-3.fec40a74.md"},71:function(e,t,a){e.exports=a.p+"static/media/dog.1b0bd462.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/oldAgeHome.f74ac121.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/collectionDrive.f15d6096.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/myomTeam.508ff636.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/featuredPost2.32fa54e2.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/uss.cebcb618.jpg"},91:function(e,t,a){e.exports=a(104)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.60d82c90.chunk.js.map