(this["webpackJsonpjutsu-example"]=this["webpackJsonpjutsu-example"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(11),n(2)),c=n(1),l=n.n(c),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p=function(e){var t=e.domain,n=void 0===t?"meet.jit.si":t,r=e.parentNode,o=e.subject,i=e.password,s=e.displayName,c=e.onMeetingEnd,l=d(e,["domain","parentNode","subject","password","displayName","onMeetingEnd"]),p=Object(a.useState)(!0),f=m(p,2),b=f[0],h=f[1],j=Object(a.useState)(null),g=m(j,2),E=g[0],v=g[1],y=Object(a.useState)(null),w=m(y,2),O=w[0],C=w[1];return Object(a.useEffect)((function(){if(window.JitsiMeetExternalAPI){if(l.parentNode=document.getElementById(r),l.parentNode){var e=new window.JitsiMeetExternalAPI(n,u({},l));return C(e),h(!1),v(null),o&&e.executeCommand("subject",o),e.addEventListener("videoConferenceJoined",(function(){i&&e.executeCommand("password",i),s&&e.executeCommand("displayName",s)})),e.addEventListener("passwordRequired",(function(){i&&e.executeCommand("password",i)})),c&&e.addEventListener("readyToClose",c),function(){return O&&O.dispose()}}v('Parent node is not available, check container have the correct id: "'+r+'"')}else v("JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded")}),[window.JitsiMeetExternalAPI]),{jitsi:O,error:E,loading:b}};p.propTypes={options:l.a.shape({domain:l.a.string,roomName:l.a.string.isRequired,subject:l.a.string,password:l.a.string,displayName:l.a.string,onMeetingEnd:l.a.func,width:l.a.string,height:l.a.string,parentNode:l.a.string,configOverwrite:l.a.object,interfaceConfigOverwrite:l.a.object,noSSL:l.a.bool,jwt:l.a.string,onload:l.a.func,invitees:l.a.array,devices:l.a.object,userInfo:l.a.object})};var f=function(e){var t=e.loadingComponent,n=e.errorComponent,o=e.containerStyles,i=e.jitsiContainerStyles,s=e.onError,c=e.onJitsi,l=d(e,["loadingComponent","errorComponent","containerStyles","jitsiContainerStyles","onError","onJitsi"]),m=p(u({parentNode:"jitsi-container"},l)),f=m.loading,b=m.error,h=m.jitsi;return Object(a.useEffect)((function(){h&&c&&c(h)}),[h]),Object(a.useEffect)((function(){b&&s&&s(b)}),[b]),r.a.createElement("div",{style:u({width:"800px",height:"400px"},o)},b&&(n||r.a.createElement("p",null,b)),!b&&f&&(t||r.a.createElement("p",null,"Loading ...")),r.a.createElement("div",{id:"jitsi-container",style:u({display:f?"none":"block",width:"100%",height:"100%"},i)}))};f.propTypes={jwt:l.a.string,domain:l.a.string,subject:l.a.string,password:l.a.string,roomName:l.a.string.isRequired,displayName:l.a.string,onMeetingEnd:l.a.func,loadingComponent:l.a.object,errorComponent:l.a.object,containerStyles:l.a.object,jitsiContainerStyles:l.a.object,configOverwrite:l.a.object,interfaceConfigOverwrite:l.a.object,onError:l.a.func,onJitsi:l.a.func};var b=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),c=Object(s.a)(i,2),l=c[0],u=c[1],d=Object(a.useState)(!1),m=Object(s.a)(d,2),p=m[0],b=m[1],h=Object(a.useState)(""),j=Object(s.a)(h,2),g=j[0],E=j[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"<Jutsu /> Demo !"),r.a.createElement("blockquote",null,"View the ",r.a.createElement("a",{href:"https://github.com/this-fifo/jutsu"},"source")," for Jutsu and check ",r.a.createElement("a",{href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md"},"jitsi-meet")," for the Jitsi Meet API"),p?r.a.createElement(f,{roomName:n,password:g,displayName:l,onMeetingEnd:function(){return console.log("Meeting has ended")},loadingComponent:r.a.createElement("p",null,"\u0295 \u2022\u1d25\u2022\u0294 jitsi is loading ...")}):r.a.createElement("form",null,r.a.createElement("input",{id:"room",type:"text",placeholder:"Room",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name",value:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{id:"password",type:"text",placeholder:"Password (optional)",value:g,onChange:function(e){return E(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),n&&l&&b(!0)},type:"submit"},"Start / Join")),r.a.createElement("p",null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"\u2615")," by ",r.a.createElement("a",{href:"https://github.com/this-fifo"},"Filipe Herculano")),r.a.createElement("small",null,r.a.createElement("i",null,"Note: works only on a desktop browser for now, checkout ",r.a.createElement("a",{href:"https://github.com/jitsi/jitsi-meet/pull/3518"},"this PR")," for more information")))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.61e8bbac.chunk.js.map