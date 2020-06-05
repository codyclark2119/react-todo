(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),o=a(16),i=a(5),s=a(45),m=a(46),d=a(47),u=a(48),v=a(49);a(32);function E(){return c.a.createElement(s.a,{color:"dark",dark:!0,expand:"xs"},c.a.createElement(m.a,{href:"/home"},"To-Dos"),c.a.createElement(d.a,{className:"ml-auto",navbar:!0},c.a.createElement(u.a,null,c.a.createElement(v.a,{href:"/"},"Home")),c.a.createElement(u.a,null,c.a.createElement(v.a,{href:"/saved"},"Saved"))))}var _=a(13),f=a(50),T=a(51),p=a(52),b=a(26),N=a(11),O=a(7),h=a(14),j=a.n(h),S=Object(n.createContext)(),y=S.Provider,V=function(e,t){localStorage.setItem(t,JSON.stringify(e))},g=function(e,t){return e.filter((function(e){return e._id!==t}))},C=function(e,t){return e.filter((function(e){return e._id===t}))[0]},k=function(e,t){switch(t.type){case"SET_CURRENT_EVENT":var a=C(e.events,t._id);return a||(a=C(e.saved,t._id)),Object(O.a)(Object(O.a)({},e),{},{currentEvent:a});case"ADD_EVENT":return localStorage.removeItem("events"),V([t.post].concat(Object(N.a)(e.events)),"events"),Object(O.a)(Object(O.a)({},e),{},{events:[t.post].concat(Object(N.a)(e.events))});case"REMOVE_EVENT":return localStorage.removeItem("events"),V(g(e.events,t._id),"events"),Object(O.a)(Object(O.a)({},e),{},{currentEvent:{_id:0,title:"",startTime:"",duration:""},events:g(e.events,t._id)});case"EDIT_EVENT":localStorage.removeItem("events");var n=g(e.events,t._id),c=C(e.events,t._id);return c.title=t.title,n=[c].concat(Object(N.a)(n)),V(n,"events"),Object(O.a)(Object(O.a)({},e),{},{currentEvent:c,events:Object(N.a)(n)});case"START_EVENT":localStorage.removeItem("events");var r=g(e.events,t._id),l=C(e.events,t._id);return l.startTime=j()().format(),r=[l].concat(Object(N.a)(r)),V(r,"events"),Object(O.a)(Object(O.a)({},e),{},{currentEvent:l,events:Object(N.a)(r)});case"END_EVENT":localStorage.removeItem("events");var o=g(e.events,t._id),i=C(e.events,t._id);return i.endTime=j()().format(),i.duration=j()(i.startTime).diff(i.endTime,"minute"),o=[i].concat(Object(N.a)(o)),V(o,"events"),Object(O.a)(Object(O.a)({},e),{},{currentEvent:i,events:Object(N.a)(o)});case"GET_EVENTS":var s=JSON.parse(localStorage.getItem("events"));return s=null!==s?g(s,null):[],V(s,"events"),Object(O.a)(Object(O.a)({},e),{},{events:[].concat(s)});case"SAVE_EVENT":localStorage.removeItem("saved"),localStorage.removeItem("events");var m=C(e.events,t._id);return V([m].concat(Object(N.a)(e.saved)),"saved"),V(g(e.events,m._id),"events"),Object(O.a)(Object(O.a)({},e),{},{events:g(e.events,m._id),saved:[m].concat(Object(N.a)(e.saved))});case"REMOVE_SAVED":return localStorage.removeItem("saved"),V(g(e.saved,t._id),"saved"),Object(O.a)(Object(O.a)({},e),{},{saved:g(e.saved,t._id)});case"GET_SAVED":var d=JSON.parse(localStorage.getItem("saved"));return d=null!==d?g(d,null):[],V(d,"saved"),Object(O.a)(Object(O.a)({},e),{},{saved:[].concat(d)});default:return e}},D=function(e){e.value;var t=Object(b.a)(e,["value"]),a=Object(n.useReducer)(k,{events:[],currentEvent:{_id:0,title:"",startTime:"",endTime:"",duration:""},saved:[]}),r=Object(_.a)(a,2),l=r[0],o=r[1];return c.a.createElement(y,Object.assign({value:[l,o]},t))},I=function(){return Object(n.useContext)(S)},A=a(53);a(36);function x(e){var t=e.type,a=e.id,r=Object(n.useRef)(),l=I(),o=Object(_.a)(l,2)[1];return c.a.createElement("div",{className:"formContainer"},c.a.createElement(f.a,{onSubmit:function(e){var n;e.preventDefault(),"create"===t&&(n={_id:Object(A.a)(),title:r.current.value,startTime:"",endTime:"",duration:""},o({type:"ADD_EVENT",post:n})),"edit"===t&&o({type:"EDIT_EVENT",title:r.current.value,_id:a}),r.current.value=""}},c.a.createElement(T.a,{required:!0,innerRef:r,placeholder:"Title"}),c.a.createElement(p.a,{className:"btn btn-success mt-2 mb-3",type:"submit"},"Save Event")))}a(37);function R(e){var t=e.location,a=I(),r=Object(_.a)(a,2),l=r[0],i=l.events,s=l.saved,m=r[1],d=Object(n.useState)(!1),u=Object(_.a)(d,2),v=u[0],E=u[1],f=function(e){return""===e.startTime?c.a.createElement(p.a,{color:"success",className:"delButton",onClick:function(){return t=e._id,E(!0),void setTimeout((function(){m({type:"START_EVENT",_id:t}),E(!1)}),1e3);var t}},"Start"):""===e.endTime?c.a.createElement(p.a,{color:"primary",className:"delButton",onClick:function(){return t=e._id,E(!0),void setTimeout((function(){m({type:"END_EVENT",_id:t}),E(!1)}),1e3);var t}},"Complete"):c.a.createElement(p.a,{color:"warning",className:"delButton",onClick:function(){return t=e._id,E(!0),void setTimeout((function(){m({type:"SAVE_EVENT",_id:t}),E(!1)}),1e3);var t}},"Save")};return Object(n.useEffect)((function(){m({type:"GET_EVENTS"}),m({type:"GET_SAVED"})}),[]),c.a.createElement(c.a.Fragment,null,"home"===t?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"eventHeader"},"All Events"),c.a.createElement("h3",{className:"eventSubheader"},"Click on a event to view"),i.length?c.a.createElement("div",{className:"eventList"},i.map((function(e){return c.a.createElement("div",{key:e._id,className:v?"fadeOut eventItem":"fadeIn eventItem"},c.a.createElement("div",{className:"eventText"},c.a.createElement(o.b,{to:"/event/"+e._id},e.title)),c.a.createElement("div",{className:"eventBtns"},f(e),c.a.createElement(p.a,{color:"danger",className:"delButton",onClick:function(){return t=e._id,E(!0),void setTimeout((function(){m({type:"REMOVE_EVENT",_id:t}),E(!1)}),1e3);var t}},"Delete")))}))):c.a.createElement("h3",{className:"noEventHeader"},"You haven't added any events yet!")):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"eventHeader"},"All Saved Events"),c.a.createElement("h3",{className:"eventSubheader"},"Click on a event to view"),s.length?c.a.createElement("div",{className:"eventList"},s.map((function(e){return c.a.createElement("div",{key:e._id,className:v?"fadeOut eventItem":"fadeIn eventItem"},c.a.createElement("div",{className:"eventText"},c.a.createElement(o.b,{to:"/event/"+e._id},e.title)),c.a.createElement("div",{className:"eventBtns"},c.a.createElement(p.a,{color:"danger",className:"delButton",onClick:function(){return t=e._id,E(!0),void setTimeout((function(){m({type:"REMOVE_SAVED",_id:t}),E(!1)}),1e3);var t}},"Delete")))}))):c.a.createElement("h3",null,"You haven't saved any events yet!")))}function B(){return c.a.createElement("div",{id:"home-page"},c.a.createElement("h2",{className:"subHeader"},"Create a Event for your day!"),c.a.createElement(x,{type:"create"}),c.a.createElement(R,{location:"home"}))}function w(e){var t,a=I(),r=Object(_.a)(a,2),l=r[0].currentEvent,o=r[1];return Object(n.useEffect)((function(){o({type:"GET_EVENTS"}),o({type:"GET_SAVED"}),o({type:"SET_CURRENT_EVENT",_id:e.match.params.id})}),[]),c.a.createElement("div",{id:"event-page"},l?c.a.createElement(c.a.Fragment,null,0!==l._id?c.a.createElement("div",{id:"eventDisplay"},c.a.createElement("div",{className:"eventHeaders"},c.a.createElement("h1",null,""===l.startTime?"".concat(l.title," hasn't started yet!"):"".concat(l.title," started at ").concat(j()(l.startTime).format("hh:mm A"),"!")),c.a.createElement("h2",null,""===l.endTime?"".concat(l.title," hasn't ended yet!"):"".concat(l.title," Ended at ").concat(j()(l.endTime).format("hh:mm A"),"!")),c.a.createElement("h3",null,""===l.duration?"":"".concat(l.title," lasted ").concat(l.duration," minutes"))),c.a.createElement("h3",null,"Need to edit your event title?"),c.a.createElement(x,{type:"edit",id:e.match.params.id}),c.a.createElement("div",{className:"btnContainer"},""===(t=l).startTime?c.a.createElement(p.a,{color:"success",className:"delButton",onClick:function(){return e=t._id,void o({type:"START_EVENT",_id:e});var e}},"Start"):""===t.endTime?c.a.createElement(p.a,{color:"primary",className:"delButton",onClick:function(){return e=t._id,console.log(j()().format("hh:mm A")),void o({type:"END_EVENT",_id:e});var e}},"Complete"):c.a.createElement(p.a,{color:"warning",className:"delButton",onClick:function(){return e=t._id,void o({type:"SAVE_EVENT",_id:e});var e}},"Save"),c.a.createElement(p.a,{color:"danger",className:"delButton",onClick:function(){return e=l._id,void o({type:"REMOVE_EVENT",_id:e});var e}},"Delete"))):c.a.createElement("h1",null,"Event Deleted!")):c.a.createElement("h1",null,"No event to display!"))}function G(){return c.a.createElement("div",{id:"missing-page"},c.a.createElement("h1",null,"404"))}function H(){return c.a.createElement(s.a,{color:"dark",dark:!0,expand:"xs",fixed:"bottom"},c.a.createElement(m.a,{href:"https://codyevanclark.com",className:"mx-auto"},"\xa9Cody Clark"))}function M(){return c.a.createElement("div",{id:"complete-page"},c.a.createElement(R,null))}a(41);var J=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{id:"App"},c.a.createElement(D,null,c.a.createElement(E,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:B}),c.a.createElement(i.a,{exact:!0,path:"/home",component:B}),c.a.createElement(i.a,{exact:!0,path:"/saved",component:M}),c.a.createElement(i.a,{exact:!0,path:"/event/:id",component:w}),c.a.createElement(i.a,{component:G})),c.a.createElement(H,null))))};a(42);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.ab6f40de.chunk.js.map