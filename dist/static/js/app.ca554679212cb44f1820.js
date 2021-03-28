webpackJsonp([1],{AjQJ:function(t,s){},Ceei:function(t,s){},Ezhe:function(t,s,e){"use strict";var n=e("Ceei"),a=e.n(n),r=e("W8wm");var o=function(t){e("szzv")},i=e("VU/8")(a.a,r.a,!1,o,"data-v-31ada389",null);s.default=i.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),a=e("mtWM"),r=e.n(a),o={data:function(){return{tableData:null,tableEndpoint:"https://covid-api.mmediagroup.fr/v1/vaccines"}},created:function(){this.getTableData()},methods:{getTableData:function(){var t=this;r.a.get(this.tableEndpoint).then(function(s){t.tableData=s.data}).catch(function(t){console.log("-----error-------"),console.log(t)})}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"table-list"},[t._m(0),t._v(" "),t._l(t.tableData,function(s){return s.All.country?e("li",{staticClass:"table-item"},[e("span",{staticClass:"country-name"},[t._v(t._s(s.All.country))]),t._v(" "),s.All.population?e("span",{staticClass:"population"},[t._v(t._s(s.All.population))]):e("span",{staticClass:"population"},[t._v("No data")]),t._v(" "),s.All.people_vaccinated?e("span",{staticClass:"people_vaccinated"},[t._v(t._s(s.All.people_vaccinated))]):e("span",{staticClass:"people_vaccinated"},[t._v("No data")]),t._v(" "),s.All.people_vaccinated&&s.All.population?e("span",{staticClass:"percent-of-vaccinated"},[t._v("\n            "+t._s((100*s.All.people_vaccinated/s.All.population).toFixed(3))+" %\n          ")]):e("span",{staticClass:"percent-of-vaccinated"},[t._v("No data")])]):t._e()})],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"table-item table-title"},[s("h3",{staticClass:"country-name-title"},[this._v("Сountry")]),this._v(" "),s("h3",{staticClass:"population-title"},[this._v("Population")]),this._v(" "),s("h3",{staticClass:"people_vaccinated-title"},[this._v("Number of people vaccinated")]),this._v(" "),s("h3",{staticClass:"percent-of-vaccinated-title"},[this._v("% of people vaccinated")])])}]};var l=e("VU/8")(o,i,!1,function(t){e("PI0W")},"data-v-b6069634",null).exports,c=e("Xxa5"),u=e.n(c),j=e("fZjL"),p=e.n(j),h=e("exGp"),d=e.n(h),v=e("gRE1"),f=e.n(v),m=e("UlOv"),b=m.b.reactiveProp,_={components:{ChartLine:{extends:m.a,mixins:[b],props:{chartData:{type:Object,default:null},options:{type:Object,default:null,responsive:!1,maintainAspectRatio:!1}},mounted:function(){this.renderChart(this.chartData,this.options)}}},data:function(){return{datacollection:null,loaded:!1,top10FirstCountries:null,dates:[],datasets:[]}},methods:{fillData:function(){this.datacollection={labels:this.dates,datasets:this.datasets}},getRandomColor:function(){function t(t){return Math.floor(Math.random()*Math.floor(t))}return"rgb("+t(255)+","+t(255)+","+t(255)+")"},createDatasets:function(){var t=this;this.top10FirstCountries.forEach(function(s){t.datasets.push({label:s.All.country,backgroundColor:"transparent",borderColor:t.getRandomColor(),pointBackgroundColor:t.borderColor,pointBorderColor:t.borderColor,borderWidth:1,data:f()(s.All.dates).reverse()})})}},created:function(){var t=this;return d()(u.a.mark(function s(){var e,n,a,o;return u.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.get("https://covid-api.mmediagroup.fr/v1/history?status=Confirmed&continent=Europe");case 2:e=s.sent,n=e.data,a=f()(n),o=a.sort(function(t,s){return s.All.population-t.All.population}),t.top10FirstCountries=o.slice(0,10),t.dates=p()(t.top10FirstCountries[0].All.dates).reverse(),t.fillData(),t.createDatasets();case 10:case"end":return s.stop()}},s,t)}))()}},g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"chart-container"},[s("ChartLine",{attrs:{"chart-data":this.datacollection,id:"chart"}})],1)},staticRenderFns:[]};var C=e("VU/8")(_,g,!1,function(t){e("bTmR")},null,null).exports,z=e("Ezhe"),y={components:{Table:l,Chart:C,NotFound:z.default},data:function(){return{title:"Coronavirus",component:"Table"}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("div",{staticClass:"content"},[e("main",[e("nav",{staticClass:"subscribe"},[e("button",{staticClass:"btn-3d-sub",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/")}}},[t._v("Table")]),t._v(" "),e("button",{staticClass:"btn-3d-sub",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/chart")}}},[t._v("Chart")])]),t._v(" "),e("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",[s("h1",{staticClass:"header-title"},[this._v("\n      Coronavirus\n      "),s("span",{staticClass:"header-title--yellow-style"},[this._v("Dashboard")])]),this._v(" "),s("h2",{staticClass:"header-creator-title"},[this._v("\n      Created by\n      "),s("a",{attrs:{href:"https://github.com/EugeneKuhot",target:"_blank"}},[this._v("Eugene Kuhot")])])])}]};var E=e("VU/8")(y,k,!1,function(t){e("ONFF")},null,null).exports,F=e("/ocq"),x={components:{Chart:C}},w={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"chart"},[s("h3",{staticClass:"chart-title"},[this._v("Epidemic spreading chart")]),this._v(" "),s("Chart")],1)},staticRenderFns:[]};var N=e("VU/8")(x,w,!1,function(t){e("AjQJ")},null,null).exports,R=new F.a({mode:"history",routes:[{path:"/",component:l},{path:"/chart",component:N},{path:"*",component:z.default}]});n.a.use(F.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:R,components:{App:E},template:"<App/>"}).$mount("#app")},ONFF:function(t,s){},PI0W:function(t,s){},W8wm:function(t,s,e){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Monoton",rel:"stylesheet",type:"text/css"}}),t._v(" "),e("p",{attrs:{id:"error"}},[t._v("E"),e("span",[t._v("r")]),t._v("ror")]),t._v(" "),e("p",{attrs:{id:"code"}},[t._v("4"),e("span",[t._v("0")]),e("span",[t._v("4")])])])}]};s.a=n},bTmR:function(t,s){},szzv:function(t,s){},uslO:function(t,s,e){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return e(r(t))}function r(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.ca554679212cb44f1820.js.map