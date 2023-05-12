"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9288],{9288:(he,T,a)=>{a.r(T),a.d(T,{ProfilePageModule:()=>de});var m=a(9808),z=a(3075),N=a(7460),u=a(603),f=a(655),M=a(7224),I=a(2916),E=a(2654),F=a(8139),j=a(8929),g=a(341),G=a(2102),L=a(5279),R=a(5283);class v extends j.xQ{constructor(s=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,t){super(),this.scheduler=t,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=s<1?1:s,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(s){if(!this.isStopped){const e=this._events;e.push(s),e.length>this._bufferSize&&e.shift()}super.next(s)}nextTimeWindow(s){this.isStopped||(this._events.push(new W(this._getNow(),s)),this._trimBufferThenGetEvents()),super.next(s)}_subscribe(s){const e=this._infiniteTimeWindow,t=e?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,r=t.length;let l;if(this.closed)throw new L.N;if(this.isStopped||this.hasError?l=E.w.EMPTY:(this.observers.push(s),l=new R.W(this,s)),o&&s.add(s=new G.ht(s,o)),e)for(let c=0;c<r&&!s.closed;c++)s.next(t[c]);else for(let c=0;c<r&&!s.closed;c++)s.next(t[c].value);return this.hasError?s.error(this.thrownError):this.isStopped&&s.complete(),l}_getNow(){return(this.scheduler||g.c).now()}_trimBufferThenGetEvents(){const s=this._getNow(),e=this._bufferSize,t=this._windowTime,o=this._events,r=o.length;let l=0;for(;l<r&&!(s-o[l].time<t);)l++;return r>e&&(l=Math.max(l,r-e)),l>0&&o.splice(0,l),o}}class W{constructor(s,e){this.time=s,this.value=e}}function C(n){return!!n&&(n instanceof I.y||"function"==typeof n.lift&&"function"==typeof n.subscribe)}var $=a(1086),Z=a(3998),J=a(1737),Q=a(6053),D=a(1406),V=a(826),B=a(448);class K{constructor(s,e){this.observables=s,this.project=e}call(s,e){return e.subscribe(new X(s,this.observables,this.project))}}class X extends V.L{constructor(s,e,t){super(s),this.observables=e,this.project=t,this.toRespond=[];const o=e.length;this.values=new Array(o);for(let r=0;r<o;r++)this.toRespond.push(r);for(let r=0;r<o;r++)this.add((0,B.D)(this,e[r],void 0,r))}notifyNext(s,e,t){this.values[t]=e;const o=this.toRespond;if(o.length>0){const r=o.indexOf(t);-1!==r&&o.splice(r,1)}}notifyComplete(){}_next(s){if(0===this.toRespond.length){const e=[s,...this.values];this.project?this._tryProject(e):this.destination.next(e)}}_tryProject(s){let e;try{e=this.project.apply(this,s)}catch(t){return void this.destination.error(t)}this.destination.next(e)}}var b=a(1177);function p(n){return s=>s.lift(new k(n))}class k{constructor(s){this.notifier=s}call(s,e){const t=new q(s),o=(0,b.ft)(this.notifier,new b.IY(t));return o&&!t.seenValue?(t.add(o),e.subscribe(t)):t}}class q extends b.Ds{constructor(s){super(s),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var _=a(2986),O=a(4850),ee=a(5778);var i=a(2096);function A(){return n=>new I.y(s=>{let e,t;const o=new E.w;return o.add(n.subscribe({complete:()=>{e&&s.next(t),s.complete()},error:r=>{s.error(r)},next:r=>{t=r,e||(e=F.E.schedule(()=>{s.next(t),e=void 0}),o.add(e))}})),o})}const oe=new i.OlP("@ngrx/component-store Initial State");let se=(()=>{class n{constructor(e){this.destroySubject$=new v(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new v(1),this.isInitialized=!1,this.notInitializedErrorMessage=`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`,this.state$=this.select(t=>t),e&&this.initState(e)}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(e){return t=>{let o;const l=(C(t)?t:(0,$.of)(t)).pipe((0,D.b)(c=>this.isInitialized?(0,Z.x)([c],g.N).pipe(function H(...n){return s=>{let e;return"function"==typeof n[n.length-1]&&(e=n.pop()),s.lift(new K(n,e))}}(this.stateSubject$)):(0,J._)(()=>new Error(this.notInitializedErrorMessage))),p(this.destroy$)).subscribe({next:([c,d])=>{this.stateSubject$.next(e(d,c))},error:c=>{o=c,this.stateSubject$.error(c)}});if(o)throw o;return l}}initState(e){(0,Z.x)([e],g.N).subscribe(t=>{this.isInitialized=!0,this.stateSubject$.next(t)})}setState(e){"function"!=typeof e?this.initState(e):this.updater(e)()}patchState(e){const t="function"==typeof e?e(this.get()):e;this.updater((o,r)=>Object.assign(Object.assign({},o),r))(t)}get(e){if(!this.isInitialized)throw new Error(this.notInitializedErrorMessage);let t;return this.stateSubject$.pipe((0,_.q)(1)).subscribe(o=>{t=e?e(o):o}),t}select(...e){const{observables:t,projector:o,config:r}=function ne(n){const s=Array.from(n);let t,e={debounce:!1};const o=s.pop();return"function"!=typeof o?(e=Object.assign(Object.assign({},e),o),t=s.pop()):t=o,{observables:s,projector:t,config:e}}(e);let l;return l=0===t.length?this.stateSubject$.pipe(r.debounce?A():c=>c,(0,O.U)(c=>o(c))):(0,Q.aj)(t).pipe(r.debounce?A():c=>c,(0,O.U)(c=>o(...c))),l.pipe((0,ee.x)(),function te(n,s,e){let t;return t=n&&"object"==typeof n?n:{bufferSize:n,windowTime:s,refCount:!1,scheduler:e},o=>o.lift(function ie({bufferSize:n=Number.POSITIVE_INFINITY,windowTime:s=Number.POSITIVE_INFINITY,refCount:e,scheduler:t}){let o,l,r=0,c=!1,d=!1;return function(pe){let h;r++,!o||c?(c=!1,o=new v(n,s,t),h=o.subscribe(this),l=pe.subscribe({next(w){o.next(w)},error(w){c=!0,o.error(w)},complete(){d=!0,l=void 0,o.complete()}}),d&&(l=void 0)):h=o.subscribe(this),this.add(()=>{r--,h.unsubscribe(),h=void 0,l&&!d&&e&&0===r&&(l.unsubscribe(),l=void 0,o=void 0)})}}(t))}({refCount:!0,bufferSize:1}),p(this.destroy$))}effect(e){const t=new j.xQ;return e(t).pipe(p(this.destroy$)).subscribe(),o=>(C(o)?o:(0,$.of)(o)).pipe(p(this.destroy$)).subscribe(l=>{t.next(l)})}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(oe,8))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})();var P=a(8896),y=a(7545),S=a(2868),x=a(7221),Y=a(8037);let U=(()=>{class n extends se{constructor(e){super({email:"",fullName:""}),this.profileService=e,this.userProfile$=this.select(t=>t),this.updateEmail=this.updater((t,o)=>Object.assign(Object.assign({},t),{email:o})),this.updateFullName=this.updater((t,o)=>Object.assign(Object.assign({},t),{fullName:o})),this.updateUserName=this.effect(t=>t.pipe((0,y.w)(o=>this.profileService.updateName(o).pipe((0,S.b)({next:()=>this.updateFullName(o),error:r=>console.log(r)}),(0,x.K)(()=>P.E))))),this.updateUserEmail=this.effect(t=>t.pipe((0,y.w)(({email:o,password:r})=>this.profileService.updateEmail(o,r).pipe((0,S.b)({next:()=>this.updateEmail(o),error:l=>console.log(l)}),(0,x.K)(()=>P.E))))),this.updateUserPassword=this.effect(t=>t.pipe((0,y.w)(({newPassword:o,oldPassword:r})=>this.profileService.updatePassword(o,r).pipe((0,S.b)({next:()=>console.log("Updated Password"),error:l=>console.log(l)}),(0,x.K)(()=>P.E)))))}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(Y.H))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})();var re=a(7556);function le(n,s){if(1&n&&(i.TgZ(0,"ion-col",9),i._uU(1),i.ALo(2,"async"),i.qZA()),2&n){const e=i.oxw();let t;i.xp6(1),i.hij(" ",null==(t=i.lcZ(2,1,e.userProfile$))?null:t.fullName," ")}}function ae(n,s){1&n&&(i.TgZ(0,"ion-col",10)(1,"span"),i._uU(2,"Tap here to edit..."),i.qZA()())}function ce(n,s){if(1&n&&(i.TgZ(0,"ion-col",9),i._uU(1),i.ALo(2,"async"),i.qZA()),2&n){const e=i.oxw();let t;i.xp6(1),i.hij(" ",null==(t=i.lcZ(2,1,e.userProfile$))?null:t.email," ")}}function ue(n,s){1&n&&(i.TgZ(0,"ion-col",10)(1,"span"),i._uU(2,"Tap here to edit..."),i.qZA()())}const fe=[{path:"",component:(()=>{class n{constructor(e,t,o,r,l,c){this.authService=e,this.router=t,this.profileService=o,this.alertCtrl=r,this.toastController=l,this.profileStore=c,this.userProfile$=this.profileStore.userProfile$}ngOnInit(){this.userProfileSubscription=this.profileService.getUserProfile().subscribe(e=>this.profileStore.setState(e))}ngOnDestroy(){var e;null===(e=this.userProfileSubscription)||void 0===e||e.unsubscribe()}logOut(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.authService.logout(),this.router.navigateByUrl("login")})}updateName(){this.userProfileSubscription=this.userProfile$.pipe((0,M.P)()).subscribe(e=>(0,f.mG)(this,void 0,void 0,function*(){return yield(yield this.alertCtrl.create({subHeader:"Change your name",inputs:[{type:"text",name:"fullName",placeholder:"Your full name",value:e.fullName}],buttons:[{text:"Cancel"},{text:"Save",handler:o=>(0,f.mG)(this,void 0,void 0,function*(){yield this.profileStore.updateUserName(o.fullName),(yield this.toastController.create({message:"Fullname updated",duration:2e3,position:"top",animated:!0,color:"success"})).present()})}]})).present()}))}updateEmail(){return(0,f.mG)(this,void 0,void 0,function*(){return yield(yield this.alertCtrl.create({subHeader:"Change your email",inputs:[{type:"text",name:"newEmail",placeholder:"Your new email",value:""},{name:"password",placeholder:"Your password",type:"password",value:""}],buttons:[{text:"Cancel"},{text:"Save",handler:t=>(0,f.mG)(this,void 0,void 0,function*(){t.newEmail&&t.password?(yield this.profileStore.updateUserEmail({email:t.newEmail,password:t.password}),(yield this.toastController.create({message:"Email updated",duration:2e3,position:"top",animated:!0,color:"success"})).present()):(yield this.toastController.create({message:"Please fill in all fields",duration:2e3,position:"top",animated:!0,color:"danger"})).present()})}]})).present()})}updatePassword(){return(0,f.mG)(this,void 0,void 0,function*(){return yield(yield this.alertCtrl.create({subHeader:"Change your password",inputs:[{name:"newPassword",placeholder:"New password",type:"password"},{name:"oldPassword",placeholder:"Old password",type:"password"}],buttons:[{text:"Cancel"},{text:"Save",handler:t=>(0,f.mG)(this,void 0,void 0,function*(){t.password&&t.oldPassword?(yield this.profileStore.updateUserPassword({newPassword:t.newPassword,oldPassword:t.oldPassword}),(yield this.toastController.create({message:"Password updated",duration:2e3,position:"top",animated:!0,color:"success"})).present()):(yield this.toastController.create({message:"Please fill in all fields",duration:2e3,position:"top",animated:!0,color:"danger"})).present()})}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(re.e),i.Y36(N.F0),i.Y36(Y.H),i.Y36(u.Br),i.Y36(u.yF),i.Y36(U))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-profile"]],features:[i._Bn([U])],decls:42,vars:12,consts:[["slot","end"],[3,"click"],["color","danger","slot","icon-only","name","log-out-outline"],[1,"favorite-header"],[1,"favorite-header-title"],["size","5",1,"text-left"],["class","text-center","size","7",4,"ngIf"],["size","7","class","placeholder-profile text-center",4,"ngIf"],["size","7",1,"placeholder-profile"],["size","7",1,"text-center"],["size","7",1,"placeholder-profile","text-center"]],template:function(e,t){if(1&e&&(i.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),i._uU(3,"SmartCook"),i.qZA(),i.TgZ(4,"ion-buttons",0)(5,"ion-button",1),i.NdJ("click",function(){return t.logOut()}),i._UZ(6,"ion-icon",2),i.qZA()()()(),i.TgZ(7,"ion-content")(8,"ion-list")(9,"div",3)(10,"ion-list")(11,"ion-list-header",4),i._uU(12,"Personnal informations"),i.qZA()()()(),i.TgZ(13,"ion-item",1),i.NdJ("click",function(){return t.updateName()}),i.TgZ(14,"ion-label")(15,"ion-grid")(16,"ion-row")(17,"ion-col",5),i._uU(18," Name "),i.qZA(),i.YNc(19,le,3,3,"ion-col",6),i.ALo(20,"async"),i.YNc(21,ae,3,0,"ion-col",7),i.ALo(22,"async"),i.qZA()()()(),i.TgZ(23,"ion-item",1),i.NdJ("click",function(){return t.updateEmail()}),i.TgZ(24,"ion-label")(25,"ion-grid")(26,"ion-row")(27,"ion-col",5),i._uU(28," Email "),i.qZA(),i.YNc(29,ce,3,3,"ion-col",6),i.ALo(30,"async"),i.YNc(31,ue,3,0,"ion-col",7),i.ALo(32,"async"),i.qZA()()()(),i.TgZ(33,"ion-item",1),i.NdJ("click",function(){return t.updatePassword()}),i.TgZ(34,"ion-label")(35,"ion-grid")(36,"ion-row")(37,"ion-col",5),i._uU(38," Password "),i.qZA(),i.TgZ(39,"ion-col",8)(40,"span"),i._uU(41,"Tap here to edit..."),i.qZA()()()()()()()),2&e){let o,r,l,c;i.xp6(19),i.Q6J("ngIf",null==(o=i.lcZ(20,4,t.userProfile$))?null:o.fullName),i.xp6(2),i.Q6J("ngIf",!(null!=(r=i.lcZ(22,6,t.userProfile$))&&r.fullName)),i.xp6(8),i.Q6J("ngIf",null==(l=i.lcZ(30,8,t.userProfile$))?null:l.email),i.xp6(2),i.Q6J("ngIf",!(null!=(c=i.lcZ(32,10,t.userProfile$))&&c.email))}},directives:[u.Gu,u.sr,u.wd,u.Sm,u.YG,u.gu,u.W2,u.q_,u.yh,u.Ie,u.Q$,u.jY,u.Nd,u.wI,m.O5],pipes:[m.Ov],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}.text-left[_ngcontent-%COMP%]{text-align:left}.placeholder-profile[_ngcontent-%COMP%]{color:#ccc}"]}),n})()}];let de=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[m.ez,z.u5,u.Pc,N.Bz.forChild(fe)]]}),n})()}}]);