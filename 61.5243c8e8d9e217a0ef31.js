(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"2mlg":function(e,t,n){"use strict";n.r(t),n.d(t,"IonToggle",function(){return a});var o=n("B5Ai"),i=n("cBjU"),r=n("HHlg"),c=n("TJRR"),a=function(){function e(){var e=this;this.inputId="ion-tg-"+u++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onChange=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value})},e.prototype.disabledChanged=function(){this.ionStyle.emit({"interactive-disabled":this.disabled}),this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentWillLoad=function(){this.ionStyle=Object(c.e)(this.ionStyle)},e.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var e,t,i,r=this;return o.c(this,function(o){switch(o.label){case 0:return(e=this.nativeInput.closest("ion-item"))&&(t=e.querySelector("ion-label"))&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id)),i=this,[4,n.e(0).then(n.bind(null,"2jMD"))];case 1:return i.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:function(e){return r.onStart(e)},onMove:function(e){return r.onMove(e)},onEnd:function(e){return r.onEnd(e)}}),this.disabledChanged(),[2]}})})},e.prototype.onStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onMove=function(e){var t=e.currentX;s(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,Object(r.f)())},e.prototype.onEnd=function(e){s(this.checked,e.currentX-this.pivotX,4)&&(this.checked=!this.checked,Object(r.f)()),this.activated=!1,this.nativeInput.focus()},e.prototype.hostData=function(){return{class:Object.assign({},Object(r.h)(this.color),{"in-item":Object(r.j)("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){var e=this;return Object(c.f)(this.el,this.name,this.checked?this.value:"",this.disabled),[Object(i.b)("div",{class:"toggle-icon"},Object(i.b)("div",{class:"toggle-inner"})),Object(i.b)("input",{type:"checkbox",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}}),Object(i.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--handle-background:var(--ion-background-color, #fff);--handle-background-checked:var(--ion-color-primary, #3880ff);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(:focus){outline:0}:host(.toggle-disabled){pointer-events:none;opacity:.3}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color 160ms;transition:background-color 160ms;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:160ms;transition-duration:160ms;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host(.in-item[slot]){margin:0;padding:12px 8px 12px 16px;cursor:pointer}:host(.in-item[slot=start]){padding:12px 18px 12px 2px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function s(e,t,n){var o="rtl"===document.dir;return e?!o&&n>t||o&&-n<t:!o&&-n<t||o&&n>t}var u=0}}]);