(function(){"use strict";var t={7573:function(t,e,i){var n=i(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-container",[n("v-row",[n("v-col",{attrs:{md:"4"}},[n("v-card",{staticClass:"fill-height",attrs:{elevation:"6"}},[n("v-img",{attrs:{src:i(9650),height:"400px"}},[n("v-card-title",{staticClass:"name"},[t._v("Marcel Wlotzka")])],1),n("v-card-text",[n("v-list",t._l(t.personalData,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"d-flex align-center"},[n("v-icon",[t._v("mdi-"+t._s(i))]),n("span",{staticClass:"ml-2"},[t._v(t._s(e))])],1)],1)],1)})),1),t._l(t.charts,(function(e,i){return n("v-list",{key:i},[n("v-divider",{staticClass:"ma-4"}),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"d-flex align-center"},[n("v-icon",[t._v(t._s(e.icon))]),n("span",{staticClass:"ml-2"},[n("b",[t._v(t._s(e.title))])])],1)],1)],1),t._l(e.data,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.label))]),n("v-progress-linear",{staticClass:"progress",attrs:{color:"primary",height:"15"},model:{value:e.level,callback:function(i){t.$set(e,"level",i)},expression:"item.level"}})],1)],1)}))],2)}))],2)],1)],1),n("v-col",{attrs:{md:"8"}},[n("v-card",{staticClass:"fill-height",attrs:{elevation:"6"}},[n("v-card-title",{staticClass:"title text-h4"},[n("v-icon",{staticClass:"text-h4",attrs:{color:"primary"}},[t._v("mdi-chart-bar")]),n("span",{staticClass:"ml-2 occupationalHistoryTitle"},[t._v("Occupational history")])],1),n("v-card-text",[n("v-list",[t._l(t.history,(function(e,i){return[0!==i?n("v-divider",{key:i+"-divider",staticClass:"mx-4"}):t._e(),n("v-list-item",{key:i+"-item"},[n("v-list-item-content",[n("v-list-item-title",[n("b",[t._v(t._s(e.doing))])]),n("v-list-item-subtitle",{staticClass:"primary--text d-flex align-center"},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-calendar-month")]),n("span",{staticClass:"ml-2 mt-1"},[t._v(t._s(e.since)+" - "+t._s(e.until))])],1),n("v-list-item-subtitle",{staticClass:"black--text d-flex align-center"},[n("v-icon",{attrs:{color:"black"}},[t._v("mdi-map-marker-circle")]),n("span",{staticClass:"ml-2 mt-1"},[t._v(t._s(e.where))])],1)],1)],1)]}))],2)],1)],1)],1)],1)],1)],1),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"primary"},[n("strong",{staticClass:"subheading"},[t._v("Find me on social media.")]),n("v-spacer"),t._l(t.links,(function(e,i){return n("v-btn",{key:i,staticClass:"mx-4",attrs:{href:e.href,target:"_blank",dark:"",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)}))],2),n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Marcel Wlotzka")])])],1)],1)],1)},r=[],l={name:"App",data:()=>({personalData:{home:"Lautertal, Germany",briefcase:"Full-Stack Web-Developer",email:"marcel@wlotzka.org"},charts:[{title:"Skills",icon:"mdi-star-circle-outline",data:[{label:"JavaScript (ES2021+)",level:95},{label:"NodeJS",level:93},{label:"PHP 8",level:90},{label:"Linux (Debian based)",level:85},{label:"Objective-C",level:70},{label:"Java",level:68},{label:"Swift",level:60},{label:"Kubernetes",level:40}]},{title:"Languages",icon:"mdi-earth",data:[{label:"German",level:100},{label:"English",level:90},{label:"tlhIngan Hol (Klingon)",level:1}]}],history:[{doing:"IT-Innovation Manager",where:"Mainova AG, Frankfurt am Main",since:"Sep. 2018",until:"Current"},{doing:"Head of softeware development",where:"CMF | Die Sales Agentur®, Mörfelden-Walldorf",since:"Sep. 2016",until:"Aug. 2018"},{doing:"Sr. App developer",where:"2VizCon GmbH, Neu-Isenburg",since:"Aug. 2014",until:"Aug. 2016"},{doing:"Web and App developer",where:"KWP | Agency for interconnected communications, Neu-Isenburg",since:"Aug. 2009",until:"Aug. 2014"},{doing:"Master of Science in Computer Science with specialization in IT Management",where:"TU Darmstadt",since:"Oct. 2009",until:"Sep. 2018"},{doing:"Web developer, Internship",where:"XYQOM, Waldbröl",since:"Aug. 2009",until:"Aug. 2014"}],links:[{icon:"mdi-github",href:"https://github.com/myMartek"},{icon:"mdi-facebook",href:"https://www.facebook.com/myMartek"},{icon:"mdi-twitter",href:"https://twitter.com/myMartek"},{icon:"mdi-linkedin",href:"https://www.linkedin.com/in/marcel-wlotzka-5b61a0a4/"}]})},s=l,o=i(1001),c=i(3453),u=i.n(c),v=i(7524),m=i(680),d=i(6661),f=i(7118),p=i(2102),g=i(9846),h=i(1418),b=i(1966),_=i(6428),k=i(7047),w=i(6816),y=i(7620),C=i(4618),x=i(7877),Z=i(7003),V=i(2877),S=i(9762),M=(0,o.Z)(s,a,r,!1,null,"4791f55b",null),O=M.exports;u()(M,{VApp:v.Z,VBtn:m.Z,VCard:d.Z,VCardText:f.ZB,VCardTitle:f.EB,VCol:p.Z,VContainer:g.Z,VDivider:h.Z,VFooter:b.Z,VIcon:_.Z,VImg:k.Z,VList:w.Z,VListItem:y.Z,VListItemContent:C.km,VListItemSubtitle:C.oZ,VListItemTitle:C.V9,VMain:x.Z,VProgressLinear:Z.Z,VRow:V.Z,VSpacer:S.Z});var A=i(1910),F=i(5889);n.Z.use(A.Z);var I=new A.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#0D47A1",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{de:F.Z},current:"de"}});n.Z.config.productionTip=!1,new n.Z({vuetify:I,render:t=>t(O)}).$mount("#app")},9650:function(t,e,i){t.exports=i.p+"img/marcelwlotzka.aa204d9c.jpg"}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,a,r){if(!n){var l=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],r=t[u][2];for(var s=!0,o=0;o<n.length;o++)(!1&r||l>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[o])}))?n.splice(o--,1):(s=!1,r<l&&(l=r));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,a,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/marcel-wlotzka-resume/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,l=n[0],s=n[1],o=n[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(o)var u=o(i)}for(e&&e(n);c<l.length;c++)r=l[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},n=self["webpackChunkmarcel_wlotzka_resume"]=self["webpackChunkmarcel_wlotzka_resume"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7573)}));n=i.O(n)})();
//# sourceMappingURL=app.7704c64f.js.map