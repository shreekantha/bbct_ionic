(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"f+ep":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),o=u("Cs7S"),t=function(){function n(){}return Object.defineProperty(n.prototype,"Username",{get:function(){return this.username},set:function(n){this.username=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"Email",{get:function(){return this.email},set:function(n){this.email=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"Password",{get:function(){return this.password},set:function(n){this.password=n},enumerable:!0,configurable:!0}),n}(),r=u("t/Na"),i=u("XlPw"),a=u("9Z1F"),s=function(){function n(n,l){this.http=n,this.utilService=l,this.url="http://localhost:8080/bbt-server/api/auth/login",this.httpOptions={headers:new r.g({"Content-Type":"application/json"})}}return n.prototype.validate=function(n){var l=this;return this.http.post(this.url,n,this.httpOptions).pipe(Object(a.a)(function(n){return l.handleError(n)}))},n.prototype.handleError=function(n){return n.error instanceof ErrorEvent?console.error("An error occurred:",n.error.message):console.error("Backend returned code "+n.status+", body was: "+n.error),Object(i.a)(n.error.message)},n.ngInjectableDef=e.V({factory:function(){return new n(e.Z(r.c),e.Z(o.a))},token:n,providedIn:"root"}),n}(),c=(u("OO+k"),u("Ip0R")),b=u("ZYCi"),g=function(){function n(n,l){this.document=n,this.navCtrl=l}return n.prototype.set=function(n,l,u,e,o,t){var r=this,i=encodeURIComponent(n)+"="+encodeURIComponent(l)+";";u&&(i+="number"==typeof u?"expires="+new Date((new Date).getTime()+1e3*u*60).toUTCString()+";":"expires="+u.toUTCString()+";"),e&&(i+="path="+e+";"),o&&(i+="domain="+o+";"),this.document.cookie=i,setInterval(function(){r.document.cookie||(console.log("time out =====",r.document.cookie),window.location.href="http://localhost:8100/login")},100)},n.ngInjectableDef=e.V({factory:function(){return new n(e.Z(c.c),e.Z(b.l))},token:n,providedIn:"root"}),n}(),d=function(){function n(n,l,u,e,o){this.cookieService=n,this.navCtl=l,this.utilService=u,this.router=e,this.loginService=o,this.user=new t}return n.prototype.login=function(){var n=this;this.loginService.validate(this.user).subscribe(function(l){null!=l&&void 0!=l.token?(n.utilService.setLogedin(!0),n.cookieService.set("_token",l.token,1,location.href,location.hostname,!0),n.navCtl.navigateForward("/home")):n.errorMsg="Unauthorized user"},function(l){n.errorMsg=l})},n}(),p=function(){},f=u("pMnS"),h=u("ra/t"),v=u("ntG5"),C=u("M9A9"),m=u("Zq1E"),k=u("gIcY"),B=u("tXrQ"),w=e.qb({encapsulation:0,styles:[[""]],data:{}});function y(n){return e.Gb(0,[(n()(),e.sb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,h.I,h.n)),e.rb(1,49152,null,0,v.L,[e.l],{color:[0,"color"]},null),(n()(),e.Fb(2,0,["",""]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,2,0,l.component.errorMsg)})}function I(n){return e.Gb(0,[(n()(),e.sb(0,0,null,null,6,"ion-header",[],null,null,null,h.D,h.i)),e.rb(1,49152,null,0,v.y,[e.l],null,null),(n()(),e.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,h.P,h.t)),e.rb(3,49152,null,0,v.xb,[e.l],null,null),(n()(),e.sb(4,0,null,0,2,"ion-title",[],null,null,null,h.O,h.u)),e.rb(5,49152,null,0,v.yb,[e.l],null,null),(n()(),e.Fb(-1,0,["Login"])),(n()(),e.sb(7,0,null,null,36,"ion-content",[["padding",""]],null,null,null,h.C,h.h)),e.rb(8,49152,null,0,v.r,[e.l],null,null),(n()(),e.sb(9,0,null,0,12,"ion-item",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==e.Bb(n,11).onClick(u)&&o),o},h.H,h.l)),e.rb(10,49152,null,0,v.F,[e.l],null,null),e.rb(11,16384,null,0,C.a,[[2,b.l],e.l],null,null),(n()(),e.sb(12,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,h.I,h.n)),e.rb(13,49152,null,0,v.L,[e.l],{position:[0,"position"]},null),(n()(),e.Fb(-1,0,["Username"])),(n()(),e.sb(15,0,null,0,6,"ion-input",[["autofocus","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,u){var o=!0,t=n.component;return"ionChange"===l&&(o=!1!==e.Bb(n,16)._handleInputEvent(u.target.value)&&o),"ionBlur"===l&&(o=!1!==e.Bb(n,16)._handleBlurEvent()&&o),"ngModelChange"===l&&(o=!1!==(t.user.Username=u)&&o),o},h.F,h.k)),e.rb(16,16384,null,0,m.a,[e.l],null,null),e.Db(1024,null,k.b,function(n){return[n]},[m.a]),e.rb(18,671744,null,0,k.e,[[8,null],[8,null],[8,null],[6,k.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,k.c,null,[k.e]),e.rb(20,16384,null,0,k.d,[[4,k.c]],null,null),e.rb(21,49152,null,0,v.E,[e.l],{autofocus:[0,"autofocus"]},null),(n()(),e.sb(22,0,null,0,12,"ion-item",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==e.Bb(n,24).onClick(u)&&o),o},h.H,h.l)),e.rb(23,49152,null,0,v.F,[e.l],null,null),e.rb(24,16384,null,0,C.a,[[2,b.l],e.l],null,null),(n()(),e.sb(25,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,h.I,h.n)),e.rb(26,49152,null,0,v.L,[e.l],{position:[0,"position"]},null),(n()(),e.Fb(-1,0,["Password"])),(n()(),e.sb(28,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,u){var o=!0,t=n.component;return"ionChange"===l&&(o=!1!==e.Bb(n,29)._handleInputEvent(u.target.value)&&o),"ionBlur"===l&&(o=!1!==e.Bb(n,29)._handleBlurEvent()&&o),"ngModelChange"===l&&(o=!1!==(t.user.Password=u)&&o),o},h.F,h.k)),e.rb(29,16384,null,0,m.a,[e.l],null,null),e.Db(1024,null,k.b,function(n){return[n]},[m.a]),e.rb(31,671744,null,0,k.e,[[8,null],[8,null],[8,null],[6,k.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,k.c,null,[k.e]),e.rb(33,16384,null,0,k.d,[[4,k.c]],null,null),e.rb(34,49152,null,0,v.E,[e.l],{type:[0,"type"]},null),(n()(),e.sb(35,0,null,0,4,"ion-item",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==e.Bb(n,37).onClick(u)&&o),o},h.H,h.l)),e.rb(36,49152,null,0,v.F,[e.l],null,null),e.rb(37,16384,null,0,C.a,[[2,b.l],e.l],null,null),(n()(),e.jb(16777216,null,0,1,null,y)),e.rb(39,16384,null,0,c.i,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.sb(40,0,null,0,3,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,u){var o=!0,t=n.component;return"click"===l&&(o=!1!==e.Bb(n,42).onClick(u)&&o),"click"===l&&(o=!1!==t.login()&&o),o},h.x,h.c)),e.rb(41,49152,null,0,v.f,[e.l],{expand:[0,"expand"]},null),e.rb(42,16384,null,0,C.a,[[2,b.l],e.l],null,null),(n()(),e.Fb(-1,0,["LOGIN"]))],function(n,l){var u=l.component;n(l,13,0,"floating"),n(l,18,0,u.user.Username),n(l,21,0,"true"),n(l,26,0,"floating"),n(l,31,0,u.user.Password),n(l,34,0,"password"),n(l,39,0,u.errorMsg),n(l,41,0,"block")},function(n,l){n(l,15,0,e.Bb(l,20).ngClassUntouched,e.Bb(l,20).ngClassTouched,e.Bb(l,20).ngClassPristine,e.Bb(l,20).ngClassDirty,e.Bb(l,20).ngClassValid,e.Bb(l,20).ngClassInvalid,e.Bb(l,20).ngClassPending),n(l,28,0,e.Bb(l,33).ngClassUntouched,e.Bb(l,33).ngClassTouched,e.Bb(l,33).ngClassPristine,e.Bb(l,33).ngClassDirty,e.Bb(l,33).ngClassValid,e.Bb(l,33).ngClassInvalid,e.Bb(l,33).ngClassPending)})}var z=e.ob("app-login",d,function(n){return e.Gb(0,[(n()(),e.sb(0,0,null,null,1,"app-login",[],null,null,null,I,w)),e.rb(1,49152,null,0,d,[g,B.a,o.a,b.l,s],null,null)],null,null)},{},{},[]),P=u("95zI"),F=u("9opb"),M=u("apKv"),E=u("B4/3");u.d(l,"LoginPageModuleNgFactory",function(){return O});var O=e.pb(p,[],function(n){return e.yb([e.zb(512,e.k,e.eb,[[8,[f.a,z]],[3,e.k],e.z]),e.zb(4608,c.k,c.j,[e.w,[2,c.r]]),e.zb(4608,k.g,k.g,[]),e.zb(4608,P.a,P.a,[e.B,e.g]),e.zb(4608,F.a,F.a,[P.a,e.k,e.s]),e.zb(4608,M.a,M.a,[P.a,e.k,e.s]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,k.f,k.f,[]),e.zb(1073742336,k.a,k.a,[]),e.zb(1073742336,E.a,E.a,[]),e.zb(1073742336,b.n,b.n,[[2,b.t],[2,b.l]]),e.zb(1073742336,p,p,[]),e.zb(1024,b.j,function(){return[[{path:"",component:d,children:[{path:"forgot-password",loadChildren:"./forgot-password/forgot-password.module#ForgotPasswordPageModule"}]}]]},[])])})}}]);