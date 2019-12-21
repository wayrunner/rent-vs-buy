(this.webpackJsonprent_vs_buy=this.webpackJsonprent_vs_buy||[]).push([[0],{273:function(e,t,a){e.exports=a(481)},278:function(e,t,a){},279:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(14),o=a.n(c),l=(a(278),a(112)),i=a(510),s=(a(279),a(104)),u=a(238),m=a(508),p={primary:{main:"#f9b282"},rent:{main:"#64ccda"},buy:{main:"#8f4426"},secondary:{dark:"#8f4426",main:"#de6b35",light:"#f9b282"}},d=Object(u.a)({palette:Object(s.a)({type:"dark"},p,{background:{default:"#F0F0F0"}})}),b=Object(u.a)({palette:p});function g(e){var t=e.children,a=e.dark;return r.a.createElement(m.a,{theme:a?d:b},t)}var v=a(59),y=a(239),f=a(224),h=a.n(f),E=a(514),k=a(145),j=a.n(k),O=a(151),C=a(31),x=function(e){return function(t){return parseFloat(t.values[e])||0}},w=Object(C.a)([function(e){return e.values}],(function(e){return e.years})),I=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map((function(e){return x(e)}))},K=Object(C.a)(I("mortgageHousePrice","mortgageDeposit","mortgageYears","mortgageInterest"),(function(e,t,a,n){var r=e-t,c=12*a;if(0===n)return r/c;var o=n/1200;return r*o*Math.pow(1+o,c)/(Math.pow(1+o,c)-1)})),F=Object(C.a)([K].concat(Object(O.a)(I("buyMaintenanceCosts"))),(function(e,t){return e+t/12})),N=Object(C.a)(I("mortgageDeposit","buyInitialCosts"),(function(e,t){return e+t})),M=Object(C.a)(I("years","rentAmount","rentDeposit","savingsInterest"),(function(e,t,a,n){console.log("rentDeposit: ",t,a);var r=t*a/100;return Array(12*e+1).fill(0).map((function(){return r+=t+r*n/12/100}))})),D=Object(C.a)([K].concat(Object(O.a)(I("years","mortgageHousePrice","mortgageInterest","mortgageDeposit","savingsInterest","houseGrowth","buyMaintenanceCosts","buyInitialCosts"))),(function(e,t,a,n,r,c,o,l,i){var s=a-r,u=i+r,m=0,p=0,d=0,b=a;return Array(12*t+1).fill(0).map((function(t,r){var g=Math.max(0,n/100/12*s),v=s>0?e:0,y=u*c/12/100,f=a-b;return u+=l/12+y+v,s-=v-g,b+=b*o/12/100,{total:i+(m+=y)+(d+=l/12)+(p+=g)+f,initialCost:i,opportunityCost:m,maintenanceCost:d,interestCost:p,houseCost:f,month:r}}))})),B=Object(C.a)([D],(function(e){return e.map((function(e){return e.total}))})),R=a(113),P=Object(R.b)({name:"counter",initialState:{rentAmount:900,rentDeposit:100,mortgageAmount:3e5,mortgageInterest:2,mortgageYears:25,mortgageDeposit:3e4,houseGrowth:1,savingsInterest:1,years:30,mortgageHousePrice:3e5,buyMaintenanceCosts:2e3,buyInitialCosts:1e4},reducers:{setValue:function(e,t){var a=t.payload;return Object(s.a)({},e,Object(v.a)({},a.valueKey,a.value))}}}),A=P.actions.setValue,S=P.reducer,G=a(18),H=a(7);function V(e,t){return new Intl.NumberFormat("en-GB",{style:"currency",currency:t||"GBP",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}function W(){return function(e){return V(e,"GBP")}}function z(e){var t=e.value,a=e.children;return V(t||a||0,e.currency)}var L=r.a.createElement(j.a,{position:"end"},"%"),Y=r.a.createElement(j.a,{position:"start"},"\xa3"),_=Object(H.a)((function(e){return{root:{color:e.palette.primary.main,height:8},thumb:{height:24,width:24,backgroundColor:e.palette.background.paper,border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}}}))(E.a);var T=Object(i.a)((function(e){return{root:Object(v.a)({display:"flex",alignItems:"center",padding:e.spacing(2,4),maxWidth:1024,flexWrap:"wrap"},e.breakpoints.down("xs"),{padding:e.spacing(1,2)}),input:{flexBasis:128},slider:Object(v.a)({flex:1,marginTop:e.spacing(4),marginLeft:e.spacing(4),marginRight:e.spacing(2)},e.breakpoints.down("xs"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)})}})),J=Object(G.b)(Object(C.b)({value:function(e,t){return e.values[t.valueKey]}}),{setValue:A})((function(e){var t=e.valueKey,a=e.setValue,n=e.type,c=e.value,o=Object(y.a)(e,["valueKey","setValue","type","value"]),i=T(),s=r.a.useState(),u=Object(l.a)(s,2),m=u[0],p=u[1],d=r.a.useCallback((function(e){a({valueKey:t,value:e.target.value})}),[t]),b=r.a.useCallback((function(e,t){p(t)}),[t]),g=r.a.useCallback((function(e,n){p(void 0),a({valueKey:t,value:n})}),[t]),v=r.a.useCallback((function(e){switch(n){case"money":return r.a.createElement(z,{value:e});case"percent":return"".concat(e,"%");default:return e}}),[n]),f=o.min||0,E=o.max||("percent"===n?100:Math.max(100*o.step,2*c)),k=E/2-f/2,j=r.a.useMemo((function(){return[{value:f,label:v(f)},{value:k,label:v(k)},{value:E,label:v(E)}]}),[c,v]);return r.a.createElement("div",{className:i.root},r.a.createElement(h.a,Object.assign({type:"number",className:i.input,InputProps:{endAdornment:"percent"===n?L:void 0,startAdornment:"money"===n?Y:void 0},onChange:d,margin:"normal",variant:"outlined",value:void 0===m?c:m},o)),r.a.createElement(_,{step:o.step,defaultValue:m||c||0,min:f,max:E,onChangeCommitted:g,onChange:b,marks:j,className:i.slider}))}));function $(e){var t=e.children,a=q();return r.a.createElement("div",{className:a.root},t)}var q=Object(i.a)((function(e){return{root:{display:"flex",alignSelf:"stretch",justifyContent:"space-around",padding:e.spacing(4,0),margin:"0 auto",maxWidth:640,flexDirection:"column"}}}));function Q(e){e.values;return r.a.createElement($,null,r.a.createElement(J,{valueKey:"mortgageHousePrice",type:"money",step:5e3,label:"House price"}),r.a.createElement(J,{valueKey:"mortgageDeposit",type:"money",step:500,label:"Deposit"}),r.a.createElement(J,{valueKey:"mortgageYears",step:1,label:"Years"}),r.a.createElement(J,{valueKey:"mortgageInterest",step:.01,max:10,type:"percent",label:"Interest"}))}function U(e){e.values;return r.a.createElement($,null,r.a.createElement(J,{valueKey:"savingsInterest",label:"Savings interest",type:"percent",step:.01,max:10}),r.a.createElement(J,{label:"House growth",valueKey:"houseGrowth",type:"percent",step:.01,max:10}))}var X=a(53),Z=a(37),ee=a(13);function te(){var e=ae(),t=Object(Z.a)(),a=Object(G.d)(D),n=W(),c=function(e){return n(e)},o=function(e){return e/12};return r.a.createElement("div",{className:e.chartContainer},r.a.createElement(ee.b,{width:600,height:300,data:a,margin:{top:5,right:20,bottom:5,left:20}},r.a.createElement(ee.a,{stackId:1,dot:!1,name:"House cost",dataKey:"houseCost",tickFormatter:c,stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(ee.a,{stackId:1,dot:!1,name:"Initial cost",dataKey:"initialCost",tickFormatter:c,stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(ee.a,{stackId:1,dot:!1,stroke:"#82ca9d",fill:"#82ca9d",name:"Maintenance cost",dataKey:"maintenanceCost",tickFormatter:c}),r.a.createElement(ee.a,{stroke:"#ffc658",fill:"#ffc658",stackId:1,dot:!1,name:"Interest cost",dataKey:"interestCost",tickFormatter:c}),r.a.createElement(ee.a,{stackId:1,dot:!1,name:"Opportunity cost",dataKey:"opportunityCost",tickFormatter:c,stroke:t.palette.buy.main,fill:t.palette.buy.main}),r.a.createElement(ee.c,{stroke:t.palette.text.hint,strokeDasharray:"5 5"}),r.a.createElement(ee.g,{stroke:t.palette.text.hint,dataKey:"month",tickFormatter:o,tickSize:5}),r.a.createElement(ee.h,{stroke:t.palette.text.hint,tickFormatter:c}),r.a.createElement(ee.f,{tickFormatter:o,formatter:c})))}var ae=Object(i.a)((function(e){return{chartContainer:{display:"flex",alignItems:"center",justifyContent:"space-around",padding:e.spacing(2,4)}}}));function ne(){var e=re(),t=Object(Z.a)(),a=Object(G.d)(M),n=Object(G.d)(F),c=a.map((function(e,t){return{rent:e,buy:n[t],month:t}})),o=W(),l=function(e){return o(e)};return r.a.createElement("div",{className:e.chartContainer},r.a.createElement(ee.e,{width:600,height:300,data:c,margin:{top:5,right:20,bottom:5,left:20}},r.a.createElement(ee.d,{dot:!1,name:"Rent",dataKey:"rent",tickFormatter:l,stroke:t.palette.rent.main}),r.a.createElement(ee.d,{dot:!1,name:"Buy",dataKey:"buy",tickFormatter:l,stroke:t.palette.buy.main}),r.a.createElement(ee.c,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(ee.g,{stroke:"white",dataKey:"month",tickFormatter:function(e){return e/12},tickSize:5}),r.a.createElement(ee.h,{stroke:"white",tickFormatter:l}),r.a.createElement(ee.f,{formatter:l})))}var re=Object(i.a)((function(e){return{chartContainer:{display:"flex",alignItems:"center",justifyContent:"space-around",padding:e.spacing(2,4)}}}));function ce(){var e=oe(),t=Object(Z.a)(),a=Object(G.d)(M),n=Object(G.d)(B),c=a.map((function(e,t){return{rent:e,buy:n[t],month:t}})),o=W(),l=function(e){return o(e)};return r.a.createElement("div",{className:e.chartContainer},r.a.createElement(ee.e,{width:600,height:300,data:c,margin:{top:5,right:20,bottom:5,left:20}},r.a.createElement(ee.d,{dot:!1,name:"Rent",dataKey:"rent",tickFormatter:l,stroke:t.palette.rent.main}),r.a.createElement(ee.d,{dot:!1,name:"Buy",dataKey:"buy",tickFormatter:l,stroke:t.palette.buy.main}),r.a.createElement(ee.c,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(ee.g,{stroke:"white",dataKey:"month",tickFormatter:function(e){return e/12},tickSize:5}),r.a.createElement(ee.h,{stroke:"white",tickFormatter:l}),r.a.createElement(ee.f,{formatter:l})))}var oe=Object(i.a)((function(e){return{chartContainer:{display:"flex",alignItems:"center",justifyContent:"space-around",padding:e.spacing(2,4)}}})),le=a(166);function ie(){var e=se(),t=(Object(Z.a)(),Object(G.d)(K)),a=Object(G.d)(F),n=Object(G.d)(N);return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.valueContainer},r.a.createElement(le.a,{variant:"h3"},r.a.createElement(z,{value:n})),r.a.createElement(le.a,{className:e.caption,variant:"caption"},"Initial buy cost")),r.a.createElement("div",{className:e.valueContainer},r.a.createElement(le.a,{variant:"h3"},r.a.createElement(z,{value:t})),r.a.createElement(le.a,{className:e.caption,variant:"caption"},"Monthly mortgage payment")),r.a.createElement("div",{className:e.valueContainer},r.a.createElement(le.a,{variant:"h3"},r.a.createElement(z,{value:a})),r.a.createElement(le.a,{className:e.caption,variant:"caption"},"Monthly costs")))}var se=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap",padding:e.spacing(2,2)},valueContainer:{color:e.palette.text.primary,padding:e.spacing(1,1)},caption:{color:e.palette.text.hint}}})),ue=a(4),me=a(234),pe=a.n(me),de=a(233),be=a.n(de),ge=[10,30,50];function ve(e){var t=e.className,a=Object(G.d)(w),n=Object(G.c)(),c=ye();return r.a.createElement(be.a,{className:Object(ue.default)(c.root,t),color:"primary"},ge.map((function(e){return r.a.createElement(pe.a,{key:e,onClick:function(){return n(A({valueKey:"years",value:e}))},variant:e===a&&"contained"},e," years")})))}var ye=Object(i.a)((function(e){return{root:{}}}));function fe(){var e=he();return r.a.createElement(X.c,null,r.a.createElement(X.a,{path:"/buy-costs"},r.a.createElement(te,null),r.a.createElement(ve,{className:e.yearPicker})),r.a.createElement(X.a,{path:"/rent-costs"},r.a.createElement(ne,null),r.a.createElement(ve,{className:e.yearPicker})),r.a.createElement(X.a,{path:"/rent-vs-buy"},r.a.createElement(ce,null),r.a.createElement(ve,{className:e.yearPicker})),r.a.createElement(X.a,{path:"/"},r.a.createElement(ie,null)))}var he=Object(i.a)((function(e){return{yearPicker:{marginBottom:e.spacing(2)}}})),Ee=a(511),ke=a(512),je=a(513),Oe=a(52),Ce=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function xe(){var e=Ce(),t=Object(X.f)();return console.log(t),r.a.createElement("div",{className:e.root},r.a.createElement(Ee.a,{position:"static"},r.a.createElement(je.a,{"aria-label":"simple tabs example",value:t.pathname,centered:!0},r.a.createElement(ke.a,{label:"Summary",component:Oe.b,to:"/",value:"/"}),r.a.createElement(ke.a,{label:"Rent vs Buy",component:Oe.b,to:"/rent-vs-buy",value:"/rent-vs-buy"}),r.a.createElement(ke.a,{label:"Buy costs",component:Oe.b,to:"/buy-costs",value:"/buy-costs"}),r.a.createElement(ke.a,{label:"Rent costs",component:Oe.b,to:"/rent-costs",value:"/rent-costs"}))))}var we=a(488);function Ie(e){e.values;return r.a.createElement($,null,r.a.createElement(J,{valueKey:"rentAmount",label:"Rent / Month",step:10,type:"money"}),r.a.createElement(J,{label:"Rent deposit",valueKey:"rentDeposit",step:5,type:"percent"}))}function Ke(e){e.values;return r.a.createElement($,null,r.a.createElement(J,{valueKey:"buyMaintenanceCosts",step:100,label:"Maintenance / year",type:"money"}),r.a.createElement(J,{valueKey:"buyInitialCosts",step:100,label:"Initial buy costs",type:"money"}))}var Fe=Object(i.a)((function(e){return{header:{background:"linear-gradient(135deg, ".concat(e.palette.rent.main,", ").concat(e.palette.buy.main,")"),paddingTop:e.spacing(2),position:"sticky",top:0,zIndex:10},content:{padding:e.spacing(4,6)},chartContainer:{display:"flex",alignItems:"center",justifyContent:"center"},values:{background:e.palette.background.default}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=a(236),Me=a(150),De=a(237),Be=a.n(De),Re=a(24),Pe={key:"root",storage:Be.a},Ae=Object(Re.combineReducers)({values:S}),Se=Object(R.a)({reducer:Object(Me.a)(Pe,Ae)}),Ge=Object(Me.b)(Se),He=Se;o.a.render(r.a.createElement(G.a,{store:He},r.a.createElement(g,null,r.a.createElement(Oe.a,null,r.a.createElement(Ne.a,{loading:null,persistor:Ge},r.a.createElement((function(){var e=Fe(),t=r.a.useState("mortgage"),a=Object(l.a)(t,2),n=a[0],c=a[1],o=r.a.useCallback((function(e,t){c(t)}),[]),i=r.a.useMemo((function(){switch(n){case"mortgage":return r.a.createElement(Q,null);case"market":return r.a.createElement(U,null);case"rent":return r.a.createElement(Ie,null);case"bills":return r.a.createElement(Ke,null)}}),[n]);return r.a.createElement("div",{className:"App"},r.a.createElement(xe,null),r.a.createElement(g,{dark:!0},r.a.createElement("header",{className:e.header},r.a.createElement(fe,null),r.a.createElement(we.a,{square:!0},r.a.createElement(je.a,{value:n,onChange:o,centered:!0,"aria-label":"simple tabs example"},r.a.createElement(ke.a,{label:"Mortgage",value:"mortgage"}),r.a.createElement(ke.a,{label:"Fees / Bills",value:"bills"}),r.a.createElement(ke.a,{label:"Rent",value:"rent"}),r.a.createElement(ke.a,{label:"Market",value:"market"}))))),r.a.createElement("div",{className:e.values},i))}),null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[273,1,2]]]);
//# sourceMappingURL=main.f1931b78.chunk.js.map