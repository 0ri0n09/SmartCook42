"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(O,_,i)=>{i.d(_,{c:()=>c});var u=i(1308),n=i(7864),a=i(1898);const c=(s,t)=>{let e,o;const h=(l,p,f)=>{if("undefined"==typeof document)return;const w=document.elementFromPoint(l,p);w&&t(w)?w!==e&&(m(),d(w,f)):m()},d=(l,p)=>{e=l,o||(o=e);const f=e;(0,u.c)(()=>f.classList.add("ion-activated")),p()},m=(l=!1)=>{if(!e)return;const p=e;(0,u.c)(()=>p.classList.remove("ion-activated")),l&&o!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>h(l.currentX,l.currentY,n.a),onMove:l=>h(l.currentX,l.currentY,n.b),onEnd:()=>{m(!0),(0,n.h)(),o=void 0}})}},2225:(O,_,i)=>{i.d(_,{g:()=>u});const u=(t,e,o,h,d)=>a(t[1],e[1],o[1],h[1],d).map(m=>n(t[0],e[0],o[0],h[0],m)),n=(t,e,o,h,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*o*d+3*o+h*d))-t*Math.pow(d-1,3),a=(t,e,o,h,d)=>s((h-=d)-3*(o-=d)+3*(e-=d)-(t-=d),3*o-6*e+3*t,3*e-3*t,t).filter(l=>l>=0&&l<=1),s=(t,e,o,h)=>{if(0===t)return((t,e,o)=>{const h=e*e-4*t*o;return h<0?[]:[(-e+Math.sqrt(h))/(2*t),(-e-Math.sqrt(h))/(2*t)]})(e,o,h);const d=(3*(o/=t)-(e/=t)*e)/3,m=(2*e*e*e-9*e*o+27*(h/=t))/27;if(0===d)return[Math.pow(-m,1/3)];if(0===m)return[Math.sqrt(-d),-Math.sqrt(-d)];const l=Math.pow(m/2,2)+Math.pow(d/3,3);if(0===l)return[Math.pow(m/2,.5)-e/3];if(l>0)return[Math.pow(-m/2+Math.sqrt(l),1/3)-Math.pow(m/2+Math.sqrt(l),1/3)-e/3];const p=Math.sqrt(Math.pow(-d/3,3)),f=Math.acos(-m/(2*Math.sqrt(Math.pow(-d/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(f/3)-e/3,w*Math.cos((f+2*Math.PI)/3)-e/3,w*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(O,_,i)=>{i.d(_,{i:()=>u});const u=n=>n&&""!==n.dir?"rtl"===n.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(O,_,i)=>{i.r(_),i.d(_,{startFocusVisible:()=>c});const u="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let t=[],e=!0;const o=s?s.shadowRoot:document,h=s||document.body,d=E=>{t.forEach(v=>v.classList.remove(u)),E.forEach(v=>v.classList.add(u)),t=E},m=()=>{e=!1,d([])},l=E=>{e=a.includes(E.key),e||d([])},p=E=>{if(e&&void 0!==E.composedPath){const v=E.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));d(v)}},f=()=>{o.activeElement===h&&d([])};return o.addEventListener("keydown",l),o.addEventListener("focusin",p),o.addEventListener("focusout",f),o.addEventListener("touchstart",m),o.addEventListener("mousedown",m),{destroy:()=>{o.removeEventListener("keydown",l),o.removeEventListener("focusin",p),o.removeEventListener("focusout",f),o.removeEventListener("touchstart",m),o.removeEventListener("mousedown",m)},setFocus:d}}},7626:(O,_,i)=>{i.d(_,{C:()=>s,a:()=>a,d:()=>c});var u=i(5861),n=i(5730);const a=function(){var t=(0,u.Z)(function*(e,o,h,d,m,l){var p;if(e)return e.attachViewToDom(o,h,m,d);if(!(l||"string"==typeof h||h instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof h?null===(p=o.ownerDocument)||void 0===p?void 0:p.createElement(h):h;return d&&d.forEach(w=>f.classList.add(w)),m&&Object.assign(f,m),o.appendChild(f),yield new Promise(w=>(0,n.c)(f,w)),f});return function(o,h,d,m,l,p){return t.apply(this,arguments)}}(),c=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},s=()=>{let t,e;return{attachViewToDom:function(){var d=(0,u.Z)(function*(m,l,p={},f=[]){var w,E;if(t=m,l){const g="string"==typeof l?null===(w=t.ownerDocument)||void 0===w?void 0:w.createElement(l):l;f.forEach(r=>g.classList.add(r)),Object.assign(g,p),t.appendChild(g),yield new Promise(r=>(0,n.c)(g,r))}else if(t.children.length>0&&!t.children[0].classList.contains("ion-delegate-host")){const r=null===(E=t.ownerDocument)||void 0===E?void 0:E.createElement("div");r.classList.add("ion-delegate-host"),f.forEach(y=>r.classList.add(y)),r.append(...t.children),t.appendChild(r)}const v=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),v.appendChild(t),t});return function(l,p){return d.apply(this,arguments)}}(),removeViewFromDom:()=>(t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve())}}},7864:(O,_,i)=>{i.d(_,{a:()=>c,b:()=>s,c:()=>a,d:()=>e,h:()=>t});const u={getEngine(){var o;const h=window;return h.TapticEngine||(null===(o=h.Capacitor)||void 0===o?void 0:o.isPluginAvailable("Haptics"))&&h.Capacitor.Plugins.Haptics},available(){var o;const h=window;return!!this.getEngine()&&("web"!==(null===(o=h.Capacitor)||void 0===o?void 0:o.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(o){const h=this.getEngine();if(!h)return;const d=this.isCapacitor()?o.style.toUpperCase():o.style;h.impact({style:d})},notification(o){const h=this.getEngine();if(!h)return;const d=this.isCapacitor()?o.style.toUpperCase():o.style;h.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const o=this.getEngine();!o||(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();!o||(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();!o||(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},n=()=>u.available(),a=()=>{n()&&u.selection()},c=()=>{n()&&u.selectionStart()},s=()=>{n()&&u.selectionChanged()},t=()=>{n()&&u.selectionEnd()},e=o=>{n()&&u.impact(o)}},109:(O,_,i)=>{i.d(_,{a:()=>u,b:()=>l,c:()=>e,d:()=>p,e:()=>P,f:()=>t,g:()=>f,h:()=>a,i:()=>n,j:()=>r,k:()=>y,l:()=>o,m:()=>d,n:()=>w,o:()=>h,p:()=>s,q:()=>c,r:()=>g,s:()=>M,t:()=>m,u:()=>E,v:()=>v});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(O,_,i)=>{i.d(_,{I:()=>s,a:()=>d,b:()=>t,c:()=>p,d:()=>w,f:()=>m,g:()=>h,i:()=>o,p:()=>f,r:()=>E,s:()=>l});var u=i(5861),n=i(5730),a=i(4147);const s="ion-content",t=".ion-content-scroll-host",e=`${s}, ${t}`,o=v=>"ION-CONTENT"===v.tagName,h=function(){var v=(0,u.Z)(function*(g){return o(g)?(yield new Promise(r=>(0,n.c)(g,r)),g.getScrollElement()):g});return function(r){return v.apply(this,arguments)}}(),d=v=>v.querySelector(t)||v.querySelector(e),m=v=>v.closest(e),l=(v,g)=>o(v)?v.scrollToTop(g):Promise.resolve(v.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),p=(v,g,r,y)=>o(v)?v.scrollByPoint(g,r,y):Promise.resolve(v.scrollBy({top:r,left:g,behavior:y>0?"smooth":"auto"})),f=v=>(0,a.a)(v,s),w=v=>{if(o(v)){const r=v.scrollY;return v.scrollY=!1,r}return v.style.setProperty("overflow","hidden"),!0},E=(v,g)=>{o(v)?v.scrollY=g:v.style.removeProperty("overflow")}},5234:(O,_,i)=>{i.r(_),i.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>u,copyVisualViewport:()=>g,keyboardDidClose:()=>f,keyboardDidOpen:()=>l,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>m,setKeyboardOpen:()=>d,startKeyboardAssist:()=>o,trackViewportChanges:()=>v});const u="ionKeyboardDidShow",n="ionKeyboardDidHide";let c={},s={},t=!1;const e=()=>{c={},s={},t=!1},o=r=>{h(r),r.visualViewport&&(s=g(r.visualViewport),r.visualViewport.onresize=()=>{v(r),l()||p(r)?d(r):f(r)&&m(r)})},h=r=>{r.addEventListener("keyboardDidShow",y=>d(r,y)),r.addEventListener("keyboardDidHide",()=>m(r))},d=(r,y)=>{w(r,y),t=!0},m=r=>{E(r),t=!1},l=()=>!t&&c.width===s.width&&(c.height-s.height)*s.scale>150,p=r=>t&&!f(r),f=r=>t&&s.height===r.innerHeight,w=(r,y)=>{const P=new CustomEvent(u,{detail:{keyboardHeight:y?y.keyboardHeight:r.innerHeight-s.height}});r.dispatchEvent(P)},E=r=>{const y=new CustomEvent(n);r.dispatchEvent(y)},v=r=>{c=Object.assign({},s),s=g(r.visualViewport)},g=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},9852:(O,_,i)=>{i.d(_,{c:()=>n});var u=i(3457);const n=a=>{let c,s,t;const e=()=>{c=()=>{t=!0,a&&a(!0)},s=()=>{t=!1,a&&a(!1)},null==u.w||u.w.addEventListener("keyboardWillShow",c),null==u.w||u.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",c),null==u.w||u.w.removeEventListener("keyboardWillHide",s),c=s=void 0},isKeyboardVisible:()=>t}}},7741:(O,_,i)=>{i.d(_,{S:()=>n});const n={bubbles:{dur:1e3,circles:9,fn:(a,c,s)=>{const t=a*c/s-a+"ms",e=2*Math.PI*c/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(a,c,s)=>{const t=c/s,e=a*t-a+"ms",o=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})}}},6659:(O,_,i)=>{i.r(_),i.d(_,{createSwipeBackGesture:()=>s});var u=i(5730),n=i(5062),a=i(1898);i(4349);const s=(t,e,o,h,d)=>{const m=t.ownerDocument.defaultView;let l=(0,n.i)(t);const f=r=>l?-r.deltaX:r.deltaX;return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(l=(0,n.i)(t),(r=>{const{startX:M}=r;return l?M>=m.innerWidth-50:M<=50})(r)&&e()),onStart:o,onMove:r=>{const M=f(r)/m.innerWidth;h(M)},onEnd:r=>{const y=f(r),M=m.innerWidth,P=y/M,D=(r=>l?-r.velocityX:r.velocityX)(r),L=D>=0&&(D>.2||y>M/2),S=(L?1-P:P)*M;let x=0;if(S>5){const B=S/Math.abs(D);x=Math.min(B,540)}d(L,P<=0?.01:(0,u.l)(0,P,.9999),x)}})}},8046:(O,_,i)=>{i.d(_,{c:()=>h});var u=i(655),n=i(2096),a=i(3075),c=i(603),s=i(9808);function t(d,m){1&d&&(n.TgZ(0,"ion-item",6)(1,"ion-label"),n._uU(2,"Please enter a valid email address."),n.qZA()())}function e(d,m){if(1&d&&(n.TgZ(0,"ion-item")(1,"ion-label",1),n._uU(2,"Password"),n.qZA(),n._UZ(3,"ion-input",7),n.qZA()),2&d){const l=n.oxw();n.xp6(3),n.ekj("invalid",!l.authForm.controls.password.valid&&l.authForm.controls.password.touched)}}function o(d,m){1&d&&(n.TgZ(0,"ion-item",6)(1,"ion-label"),n._uU(2,"Your password needs more than 6 characters."),n.qZA()())}let h=(()=>{class d{constructor(l,p,f){this.formBuilder=l,this.loadingCtrl=p,this.alertCtrl=f,this.isPasswordResetPage=!1,this.formSubmitted=new n.vpe,this.authForm=this.formBuilder.group({email:["",a.kI.compose([a.kI.required,a.kI.email])],password:["",a.kI.minLength(6)]})}ngOnInit(){}submitCredentials(l){l.valid?(this.showLoading(),this.formSubmitted.emit({email:l.value.email,password:l.value.password})):console.log("Form is not valid yet, current value:",l.value)}showLoading(){return(0,u.mG)(this,void 0,void 0,function*(){try{this.loading=yield this.loadingCtrl.create(),yield this.loading.present()}catch(l){this.handleError(l)}})}hideLoading(){return this.loading.dismiss()}handleError(l){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({message:l.message,buttons:[{text:"Ok",role:"cancel"}]})).present()})}}return d.\u0275fac=function(l){return new(l||d)(n.Y36(a.qu),n.Y36(c.HT),n.Y36(c.Br))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-auth-form"]],inputs:{actionButtonText:"actionButtonText",isPasswordResetPage:"isPasswordResetPage"},outputs:{formSubmitted:"formSubmitted"},decls:10,vars:8,consts:[[3,"formGroup"],["position","stacked"],["formControlName","email","type","email","placeholder","Your email address"],["class","error-message",4,"ngIf"],[4,"ngIf"],["expand","block",3,"disabled","click"],[1,"error-message"],["formControlName","password","type","password","placeholder","Your password"]],template:function(l,p){1&l&&(n.TgZ(0,"form",0)(1,"ion-item")(2,"ion-label",1),n._uU(3,"Email"),n.qZA(),n._UZ(4,"ion-input",2),n.qZA(),n.YNc(5,t,3,0,"ion-item",3),n.YNc(6,e,4,2,"ion-item",4),n.YNc(7,o,3,0,"ion-item",3),n.TgZ(8,"ion-button",5),n.NdJ("click",function(){return p.submitCredentials(p.authForm)}),n._uU(9),n.qZA()()),2&l&&(n.Q6J("formGroup",p.authForm),n.xp6(4),n.ekj("invalid",!p.authForm.controls.email.valid&&p.authForm.controls.email.touched),n.xp6(1),n.Q6J("ngIf",!p.authForm.controls.email.valid&&p.authForm.controls.email.touched),n.xp6(1),n.Q6J("ngIf",!p.isPasswordResetPage),n.xp6(1),n.Q6J("ngIf",!p.authForm.controls.password.valid&&p.authForm.controls.password.touched&&!p.isPasswordResetPage),n.xp6(1),n.Q6J("disabled",!p.authForm.valid),n.xp6(1),n.hij(" ",p.actionButtonText," "))},directives:[a._Y,a.JL,a.sg,c.Ie,c.Q$,c.pK,c.j9,a.JJ,a.u,s.O5,c.YG],styles:["form[_ngcontent-%COMP%]{padding:12px;margin-bottom:32px}form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:30px}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0}"]}),d})()},8037:(O,_,i)=>{i.d(_,{H:()=>w});var u=i(4102),n=i(9165),a=i(7323),c=i(4850),s=i(7221),t=i(7545),e=i(2868),o=i(7224),h=i(1406),d=i(8896),m=i(567),l=i(3527),p=i(2096),f=i(7556);let w=(()=>{class E{constructor(g,r){this.firestore=g,this.authService=r}getUserProfileReference(){return this.authService.getUser().pipe((0,c.U)(g=>(this.currentUser=g,(0,u.JU)(this.firestore,`users/${g.uid}`))),(0,s.K)(()=>d.E))}getUserProfile(){return this.getUserProfileReference().pipe((0,t.w)(g=>(0,u._1)(g)),(0,s.K)(()=>d.E))}updateName(g){return this.getUserProfileReference().pipe((0,e.b)({next:r=>(0,u.pl)(r,{fullName:g},{merge:!0}),error:r=>console.error(r)}),(0,s.K)(()=>d.E))}updateEmail(g,r){return(0,m.D)([this.getUserProfile().pipe((0,o.P)()),this.authService.getUser().pipe((0,o.P)()),this.getUserProfileReference().pipe((0,o.P)())]).pipe((0,h.b)(([y,M,P])=>{const D=n.w9.credential(y.email,r);return(0,l.D)((0,a.aF)(M,D)).pipe((0,e.b)({next:()=>(0,l.D)((0,a.s)(M,g).then(()=>(0,u.pl)(P,{email:g},{merge:!0}))),error:C=>console.error(C)}))}))}updatePassword(g,r){return(0,m.D)([this.getUserProfile().pipe((0,o.P)()),this.authService.getUser().pipe((0,o.P)())]).pipe((0,h.b)(([y,M])=>{const P=n.w9.credential(y.email,r);return(0,l.D)((0,a.aF)(M,P)).pipe((0,e.b)({next:()=>(0,l.D)((0,a.gQ)(M,g)),error:D=>console.error(D)}))}))}}return E.\u0275fac=function(g){return new(g||E)(p.LFG(u.gg),p.LFG(f.e))},E.\u0275prov=p.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},5097:(O,_,i)=>{i.d(_,{G:()=>n});var u=i(2096);let n=(()=>{class a{constructor(){this.storageKey="favoriteRecipes"}getFavoriteRecipes(){const s=localStorage.getItem(this.storageKey);return s?JSON.parse(s):[]}addToFavorites(s){const t=this.getFavoriteRecipes();t.push(s),localStorage.setItem(this.storageKey,JSON.stringify(t))}isFavorite(s){return this.getFavoriteRecipes().some(e=>e.id===s)}removeFavorite(s){const e=this.getFavoriteRecipes().filter(o=>o.id!==s);localStorage.setItem(this.storageKey,JSON.stringify(e))}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7137:(O,_,i)=>{i.d(_,{X:()=>n});var u=i(2096);let n=(()=>{class a{constructor(){this.storageKey="shoppingList"}getShoppingList(){const s=localStorage.getItem("shoppingList");return s?JSON.parse(s):[]}addToShoppingList(s){const t=this.getShoppingList();t.push(s),localStorage.setItem("shoppingList",JSON.stringify(t))}isInShoppingList(s){return this.getShoppingList().some(e=>e.id===s)}deleteOfShoppingList(s){const e=this.getShoppingList().filter(o=>o.id!==s);localStorage.setItem(this.storageKey,JSON.stringify(e))}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},4457:(O,_,i)=>{i.d(_,{q:()=>a});var u=i(2096),n=i(520);let a=(()=>{class c{constructor(t){this.http=t,this.apiKey="56525c6326e44e888035f4c90347c1e9",this.apiUrl="https://api.spoonacular.com"}searchRecipesByIngredients(t,e=10){return this.http.get(`${this.apiUrl}/recipes/findByIngredients?apiKey=${this.apiKey}&ingredients=${t}&number=${e}`)}searchRecipes(t,e=10,o,h,d,m,l){let p=`${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${t}&number=${e}`;return o&&(p+=`&diet=${o}`),h&&(p+=`&cuisine=${h}`),d&&(p+=`&intolerances=${d}`),m&&(p+=`&type=${m}`),l&&(p+=`&occasion=${l}`),this.http.get(p)}autocompleteRecipeSearch(t,e=10){return this.http.get(`${this.apiUrl}/recipes/autocomplete?apiKey=${this.apiKey}&query=${t}&number=${e}`)}getRecipeDetailsById(t){return this.http.get(`${this.apiUrl}/recipes/${t}/information?apiKey=${this.apiKey}`)}getRandomRecipes(t=10){return this.http.get(`${this.apiUrl}/recipes/random?apiKey=${this.apiKey}&number=${t}`)}searchIngredients(t,e=10){return this.http.get(`${this.apiUrl}/food/ingredients/search?apiKey=${this.apiKey}&query=${t}&number=${e}`)}searchRecipesByCuisine(t,e=10){return this.http.get(`${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&cuisine=${t}&number=${e}`)}searchRecipesByDiet(t,e=10){return this.http.get(`${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&diet=${t}&number=${e}`)}searchRecipesByType(t,e=10){return this.http.get(`${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&type=${t}&number=${e}`)}searchRecipesByOccasion(t,e=10){return this.http.get(`${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&occasion=${t}&number=${e}`)}searchRecipesByIntolerances(t,e=10){return this.http.get(`${this.apiUrl}/recipes/complexSearch?apiKey=${this.apiKey}&intolerances=${t}&number=${e}`)}getSimilarRecipesById(t,e=10){return this.http.get(`${this.apiUrl}/recipes/${t}/similar?apiKey=${this.apiKey}&number=${e}`)}getRecipeIngredientById(t){return this.http.get(`${this.apiUrl}/recipes/${t}/ingredientWidget.json?apiKey=${this.apiKey}`)}getIngredientInfosbyId(t){return this.http.get(`${this.apiUrl}/food/ingredients/${t}/information?amount1&apiKey=${this.apiKey}`)}}return c.\u0275fac=function(t){return new(t||c)(u.LFG(n.eN))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},4833:(O,_,i)=>{i.d(_,{n:()=>s});var u=i(9808),n=i(3075),a=i(603),c=i(2096);let s=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[u.ez,n.u5,a.Pc,n.UX]]}),t})()}}]);