(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],v=0,d=[];v<r.length;v++)o=r[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Nav"),a("Roof"),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawerState,callback:function(e){t.drawerState=e},expression:"drawerState"}},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v(" Nikita Smirnov ")]),a("v-list-item-subtitle",[t._v("titkk@vmail.com")])],1),a("v-list-item-action",[a("v-icon",[t._v("mdi-menu-down")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,i){return a("v-list-item",{key:i,attrs:{link:"",to:e.url}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),a("v-divider")],1)},r=[],l={name:"NavigationDrawer",computed:{drawerState:{get:function(){return this.$store.state.drawerState},set:function(){return null}}},data:function(){return{selectedItem:0,items:[{text:"Облачное хранилище",icon:"mdi-cloud-check",url:{name:"CloudFile"}},{text:"Бэклог",icon:"mdi-star",url:{name:"Backlog"}},{text:"Доска",icon:"mdi-view-dashboard-edit-outline",url:{name:"Board"}},{text:"Код",icon:"mdi-bicycle",url:{name:"Repositories"}},{text:"Чат",icon:"mdi-tooltip-text",url:"Chat"},{text:"Настройки",icon:"mdi-message-cog",url:"Setting"}]}}},c=l,u=a("2877"),v=a("6544"),d=a.n(v),m=a("ce7e"),p=a("132d"),f=a("adda"),b=a("8860"),h=a("da13"),g=a("1800"),_=a("8270"),V=a("5d23"),x=a("1baa"),y=a("34c3"),w=a("f774"),k=Object(u["a"])(c,o,r,!1,null,null,null),I=k.exports;d()(k,{VDivider:m["a"],VIcon:p["a"],VImg:f["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemAvatar:_["a"],VListItemContent:V["a"],VListItemGroup:x["a"],VListItemIcon:y["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VNavigationDrawer:w["a"]});var S,L,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(e){return t.toggleDrawer()}}}),a("v-toolbar-title",[t._v("IYURA")]),a("v-spacer"),a("v-spacer"),a("v-text-field",{attrs:{"hide-details":"","prepend-icon":"mdi-magnify","single-line":""}})],1)},T=[],P={name:"AppBar",methods:{toggleDrawer:function(){this.$store.commit("toggleDrawerState")}}},O=P,j=a("40dc"),M=a("5bc1"),D=a("2fa4"),B=a("8654"),A=a("2a7f"),E=Object(u["a"])(O,C,T,!1,null,null,null),$=E.exports;d()(E,{VAppBar:j["a"],VAppBarNavIcon:M["a"],VSpacer:D["a"],VTextField:B["a"],VToolbarTitle:A["a"]});var N={},R=Object(u["a"])(N,S,L,!1,null,null,null),F=R.exports,J={components:{Nav:I,Roof:$,Footer:F}},H=J,W=a("7496"),G=a("a523"),Y=a("f6c4"),U=Object(u["a"])(H,n,s,!1,null,null,null),q=U.exports;d()(U,{VApp:W["a"],VContainer:G["a"],VMain:Y["a"]});var Q=a("f309");i["a"].use(Q["a"]);var z=new Q["a"]({theme:{dark:!0}}),K=a("8c4f"),X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{on:{click:function(e){return t.sprints.push({})}}},[t._v("Создать спринт")]),a("v-expansion-panels",[t._l(t.sprints,(function(e,i){return a("v-expansion-panel",{key:i},[a("v-expansion-panel-header",[a("v-row",[a("v-col",[a("span",[t._v("Спринт "+t._s(i))]),a("span",[t._v(" "+t._s(Math.floor(10*Math.random()+21))+" янв. - "+t._s(Math.floor(20*Math.random()+6))+" февраля.")]),a("span",[t._v("(задач "+t._s(t.x)+")")])]),a("v-col",[a("v-btn",[t._v("Завершить спринт")])],1)],1)],1),t._l(t.x=Math.floor(10*Math.random()+1),(function(e,i){return a("v-expansion-panel-content",{key:i},[t._v(" контент ")])}))],2)})),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Беклог (задач: "+t._s(t.backlog.length)+") ")]),a("v-expansion-panel-content",[t._l(t.backlog,(function(e,i){return a("div",{key:i},[t._v(" test "+t._s(i)+" ")])})),a("v-text-field",{attrs:{label:"Что нужно сделать?",type:"text"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-select",{attrs:{label:"Standard"}})]},proxy:!0},{key:"append-outer",fn:function(){return[a("v-btn",{on:{click:function(e){return t.backlog.push({})}}},[t._v(" Создать задачу ")])]},proxy:!0}]),model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],2)],1)],2)],1)},Z=[],tt={data:function(){return{message:"",backlog:[],sprints:[]}}},et=tt,at=a("8336"),it=a("62ad"),nt=a("cd55"),st=a("49e2"),ot=a("c865"),rt=a("0393"),lt=a("0fd9"),ct=a("b974"),ut=Object(u["a"])(et,X,Z,!1,null,null,null),vt=ut.exports;d()(ut,{VBtn:at["a"],VCol:it["a"],VExpansionPanel:nt["a"],VExpansionPanelContent:st["a"],VExpansionPanelHeader:ot["a"],VExpansionPanels:rt["a"],VRow:lt["a"],VSelect:ct["a"],VTextField:B["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[t._l(t.count,(function(e,i){return a("v-col",{key:i,attrs:{cols:"2"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v("Задачи")])],1),a("v-list",{attrs:{"three-line":""}},[t._l(t.shuffle(t.items),(function(e,i){return[i?a("v-divider",{key:i}):t._e(),a("v-list-item",{key:e.title},[a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2)],1)],1)})),a("v-col",[a("v-btn",{attrs:{elevation:"5",icon:"","x-large":""},on:{click:function(e){return t.count.push({})}}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],2)],1)},mt=[],pt=(a("4e827"),{data:function(){return{items:[{title:"Задача",subtitle:"lorem upsum"},{title:"Тестирование",subtitle:"Протестировать супер сложную задачу"},{title:"Фича",subtitle:"Чтобы клиент был доволен"},{title:"Баг",subtitle:"Исправить!!!"}],count:[]}},methods:{shuffle:function(t){return t.sort((function(){return Math.floor(Math.random()-.5)}))}}}),ft=pt,bt=a("b0af"),ht=a("71d9"),gt=Object(u["a"])(ft,dt,mt,!1,null,null,null),_t=gt.exports;d()(gt,{VBtn:at["a"],VCard:bt["a"],VCol:it["a"],VDivider:m["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VRow:lt["a"],VToolbar:ht["a"],VToolbarTitle:A["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v(" Репозитории "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.desserts,search:t.search}})],1)},xt=[],yt={data:function(){return{search:"",headers:[{text:"Название",align:"start",sortable:!1,value:"summary"},{text:"Описание",sortable:!1,value:"description"},{text:"Последнее обновление",value:"updated"}],desserts:[{summary:"Задача о философах",description:"философия...",updated:"17.03.2002"},{summary:"Качественный продукт",description:"Некачественный продукт",updated:"18.03.2021"},{summary:"rofl",description:"rofl",updated:"21.01.2022"},{summary:"Бот",description:"бот контролирующий активность пользователя",updated:"20.01.2022"},{summary:"rofl2",description:"rofl2",updated:"21.01.2022"},{summary:"rofl3",description:"rofl3",updated:"21.01.2022"}]}}},wt=yt,kt=a("99d9"),It=a("8fea"),St=Object(u["a"])(wt,Vt,xt,!1,null,null,null),Lt=St.exports;d()(St,{VCard:bt["a"],VCardTitle:kt["a"],VDataTable:It["a"],VSpacer:D["a"],VTextField:B["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Message Board")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1)],1),a("v-row",[a("v-col",[a("v-list",{attrs:{"two-line":""}},[t._l(t.items,(function(e,i){return[e.header?a("v-subheader",{key:e.header,attrs:{inset:""}},[t._v(" "+t._s(e.header)+" ")]):e.divider?a("v-divider",{key:i,attrs:{inset:""}}):a("v-list-item",{key:e.title,attrs:{ripple:""}},[a("v-list-item-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2)],1),a("v-col",[t._v(" Chat... ")])],1)],1)},Tt=[],Pt={data:function(){return{items:[{header:"Today"},{divider:!0},{avatar:"https://picsum.photos/250/300?image=660",title:"Meeting @ Noon",subtitle:'<span class="font-weight-bold">Spike Lee</span> &mdash; I\'ll be in your neighborhood'},{avatar:"https://picsum.photos/250/300?image=821",title:'Summer BBQ <span class="grey--text text--lighten-1"></span>',subtitle:'<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.'},{avatar:"https://picsum.photos/250/300?image=783",title:"Yes yes",subtitle:'<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations'},{header:"Yesterday"},{divider:!0},{avatar:"https://picsum.photos/250/300?image=1006",title:"Dinner tonight?",subtitle:'<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?'},{avatar:"https://picsum.photos/250/300?image=146",title:"So long",subtitle:'<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?'},{header:"Last Week"},{divider:!0},{avatar:"https://picsum.photos/250/300?image=1008",title:"Breakfast?",subtitle:'<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?'},{avatar:"https://picsum.photos/250/300?image=839",title:'Winter Porridge <span class="grey--text text--lighten-1"></span>',subtitle:'<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...'},{avatar:"https://picsum.photos/250/300?image=145",title:"Oui oui",subtitle:'<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?'}]}}},Ot=Pt,jt=a("e0c7"),Mt=Object(u["a"])(Ot,Ct,Tt,!1,null,null,null),Dt=Mt.exports;d()(Mt,{VAppBarNavIcon:M["a"],VBtn:at["a"],VCard:bt["a"],VCol:it["a"],VDivider:m["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemAvatar:_["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VRow:lt["a"],VSpacer:D["a"],VSubheader:jt["a"],VToolbar:ht["a"],VToolbarTitle:A["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v("Settings")])],1),a("v-list",{attrs:{subheader:"","three-line":""}},[a("v-subheader",[t._v("User Controls")]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Content filtering")]),a("v-list-item-subtitle",[t._v("Set the content filtering level to restrict appts that can be downloaded")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Password")]),a("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{flat:"",subheader:"","three-line":""}},[a("v-subheader",[t._v("General")]),a("v-list-item-group",{attrs:{multiple:"","active-class":""},model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}},[a("v-list-item",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.active;return[a("v-list-item-action",[a("v-checkbox",{attrs:{"input-value":i}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Notifications")]),a("v-list-item-subtitle",[t._v("Notify me about updates to apps or games that I downloaded")])],1)]}}])}),a("v-list-item",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.active;return[a("v-list-item-action",[a("v-checkbox",{attrs:{"input-value":i}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Sound")]),a("v-list-item-subtitle",[t._v("Auto-update apps at any time. Data charges may apply")])],1)]}}])}),a("v-list-item",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.active;return[a("v-list-item-action",[a("v-checkbox",{attrs:{"input-value":i}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Auto-add widgets")]),a("v-list-item-subtitle",[t._v("Automatically add home screen widgets when downloads complete")])],1)]}}])})],1)],1)],1)},At=[],Et={data:function(){return{settings:[]}}},$t=Et,Nt=a("ac7c"),Rt=Object(u["a"])($t,Bt,At,!1,null,null,null),Ft=Rt.exports;d()(Rt,{VCard:bt["a"],VCheckbox:Nt["a"],VDivider:m["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemContent:V["a"],VListItemGroup:x["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VSubheader:jt["a"],VToolbar:ht["a"],VToolbarTitle:A["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto"},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v("My files")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1)],1),a("v-list",{attrs:{subheader:"","two-line":""}},[a("v-subheader",{attrs:{inset:""}},[t._v("Folders")]),t._l(t.folders,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-icon",{staticClass:"indigo",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-information")])],1)],1)],1)})),a("v-divider",{attrs:{inset:""}}),a("v-subheader",{attrs:{inset:""}},[t._v("Files")]),t._l(t.files,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-icon",{class:e.color,attrs:{dark:""},domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-information")])],1)],1)],1)}))],2)],1)},Ht=[],Wt={data:function(){return{files:[{color:"green",icon:"mdi-clipboard-text",subtitle:"Jan 20, 2014",title:"Readme"},{color:"indigo",icon:"mdi-gesture-tap-button",subtitle:"Jan 10, 2014",title:"Roflan"}],folders:[{subtitle:"Jan 11, 2015",title:"Media"},{subtitle:"Jan 27, 2017",title:"Srs"},{subtitle:"Jan 18, 2018",title:"Work"}]}}},Gt=Wt,Yt=Object(u["a"])(Gt,Jt,Ht,!1,null,null,null),Ut=Yt.exports;d()(Yt,{VBtn:at["a"],VCard:bt["a"],VDivider:m["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemAvatar:_["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VSpacer:D["a"],VSubheader:jt["a"],VToolbar:ht["a"],VToolbarTitle:A["a"]});var qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Макет Джиры) ")])},Qt=[],zt={},Kt=zt,Xt=Object(u["a"])(Kt,qt,Qt,!1,null,null,null),Zt=Xt.exports;i["a"].use(K["a"]);var te=[{path:"/backlog",name:"Backlog",component:vt},{path:"/board",name:"Board",component:_t},{path:"/repositories",name:"Repositories",component:Lt},{path:"/chat",name:"Chat",component:Dt},{path:"/setting",name:"Setting",component:Ft},{path:"/cloud",name:"CloudFile",component:Ut},{path:"*",component:Zt}],ee=new K["a"]({mode:"history",routes:te}),ae=ee,ie=a("2f62");i["a"].use(ie["a"]);var ne=new ie["a"].Store({state:{drawerState:!0},mutations:{toggleDrawerState:function(t){t.drawerState=!t.drawerState}},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({vuetify:z,router:ae,store:ne,render:function(t){return t(q)}}).$mount("#app")}});
//# sourceMappingURL=app.e431da4b.js.map