(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{LQpR:function(e,t,n){"use strict";n.r(t),n.d(t,"IonActionSheet",function(){return u}),n.d(t,"IonActionSheetController",function(){return h});var o=n("B5Ai"),i=n("cBjU"),r=n("6Fnk"),a=n("HHlg");function c(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.4),i.fromTo("translateY","100%","0%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function s(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.4,0),i.fromTo("translateY","0%","100%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}function l(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.26),i.fromTo("translateY","100%","0%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function d(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.26,0),i.fromTo("translateY","0%","100%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}var u=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionActionSheetDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionActionSheetDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,r.a)},e.prototype.dispatchCancelHandler=function(e){if(Object(r.d)(e.detail.role)){var t=this.getButtons().find(function(e){return"cancel"===e.role});this.callButtonHandler(t)}},e.prototype.present=function(){return Object(r.e)(this,"actionSheetEnter",c,l)},e.prototype.dismiss=function(e,t){return Object(r.b)(this,e,t,"actionSheetLeave",s,d)},e.prototype.onDidDismiss=function(){return Object(r.c)(this.el,"ionActionSheetDidDismiss")},e.prototype.onWillDismiss=function(){return Object(r.c)(this.el,"ionActionSheetWillDismiss")},e.prototype.buttonClick=function(e){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(n){switch(n.label){case 0:return Object(r.d)(t=e.role)?[2,this.dismiss(void 0,t)]:[4,this.callButtonHandler(e)];case 1:return n.sent()?[2,this.dismiss(void 0,e.role)]:[2,Promise.resolve()]}})})},e.prototype.callButtonHandler=function(e){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(n){switch(n.label){case 0:if(!e||!e.handler)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,e.handler()];case 2:return!1===n.sent()?[2,!1]:[3,4];case 3:return t=n.sent(),console.error(t),[3,4];case 4:return[2,!0]}})})},e.prototype.getButtons=function(){return this.buttons.map(function(e){return"string"==typeof e?{text:e}:e})},e.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(a.g)(this.cssClass),{"action-sheet-translucent":this.translucent})}},e.prototype.render=function(){var e=this,t=this.getButtons(),n=t.find(function(e){return"cancel"===e.role}),o=t.filter(function(e){return"cancel"!==e.role});return[Object(i.b)("ion-backdrop",{tappable:this.backdropDismiss}),Object(i.b)("div",{class:"action-sheet-wrapper",role:"dialog"},Object(i.b)("div",{class:"action-sheet-container"},Object(i.b)("div",{class:"action-sheet-group"},void 0!==this.header&&Object(i.b)("div",{class:"action-sheet-title"},this.header,this.subHeader&&Object(i.b)("div",{class:"action-sheet-sub-title"},this.subHeader)),o.map(function(t){return Object(i.b)("button",{type:"button","ion-activatable":!0,class:b(t),onClick:function(){return e.buttonClick(t)}},Object(i.b)("span",{class:"action-sheet-button-inner"},t.icon&&Object(i.b)("ion-icon",{icon:t.icon,lazy:!1,class:"action-sheet-icon"}),t.text))})),n&&Object(i.b)("div",{class:"action-sheet-group action-sheet-group-cancel"},Object(i.b)("button",{"ion-activatable":!0,type:"button",class:b(n),onClick:function(){return e.buttonClick(n)}},Object(i.b)("span",{class:"action-sheet-button-inner"},n.icon&&Object(i.b)("ion-icon",{icon:n.icon,lazy:!1,class:"action-sheet-icon"}),n.text)))))]},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionActionSheetDidLoad",method:"ionActionSheetDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidUnload",method:"ionActionSheetDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionActionSheetWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-action-sheet-md-h{--width:100%;--max-width:500px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;top:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);max-width:var(--max-width);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{width:var(--width);border:0;outline:0;font-family:inherit}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;background-color:var(--ion-overlay-background-color,#fafafa)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-title.sc-ion-action-sheet-md{padding:11px 16px 17px;color:var(--ion-text-color-step-400,#666);font-size:16px;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding:16px 0 0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:8px}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:8px}.action-sheet-button.sc-ion-action-sheet-md{padding:0 16px;position:relative;height:48px;background:0 0;color:var(--ion-text-color-step-150,#262626);font-size:16px;text-align:start;contain:strict;overflow:hidden}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--ion-background-color-step-50,#f2f2f2)}.action-sheet-icon.sc-ion-action-sheet-md{margin:0 32px 0 0;font-size:24px}.action-sheet-button-inner.sc-ion-action-sheet-md{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function b(e){var t;return Object.assign(((t={"action-sheet-button":!0})["action-sheet-"+e.role]=void 0!==e.role,t),Object(a.g)(e.cssClass))}var h=function(){function e(){}return e.prototype.create=function(e){return Object(r.f)(this.doc.createElement("ion-action-sheet"),e)},e.prototype.dismiss=function(e,t,n){return Object(r.g)(this.doc,e,t,"ion-action-sheet",n)},e.prototype.getTop=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(e){return[2,Object(r.h)(this.doc,"ion-action-sheet")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);