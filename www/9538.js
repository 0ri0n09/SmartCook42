"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9538],{9538:(P,l,i)=>{i.r(l),i.d(l,{LoginPageModule:()=>L});var c=i(9808),d=i(3075),s=i(7460),r=i(931),m=i(655),g=i(8046),o=i(2096),h=i(7556);let f=(()=>{class n{constructor(t,e){this.authService=t,this.router=e}ngOnInit(){}loginUser(t){return(0,m.mG)(this,void 0,void 0,function*(){try{const e=yield this.authService.login(t.email,t.password);this.authService.userId=e.user.uid,yield this.loginForm.hideLoading(),this.router.navigateByUrl("home")}catch(e){yield this.loginForm.hideLoading(),this.loginForm.handleError(e)}})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(h.e),o.Y36(s.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],viewQuery:function(t,e){if(1&t&&o.Gf(g.c,5),2&t){let u;o.iGM(u=o.CRH())&&(e.loginForm=u.first)}},decls:11,vars:1,consts:[[3,"actionButtonText","formSubmitted"],["loginForm",""],["expand","block","fill","clear","routerLink","/signup"],["expand","block","fill","clear","routerLink","/reset-password"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"SmartCook | Login"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"app-auth-form",0,1),o.NdJ("formSubmitted",function(y){return e.loginUser(y)}),o.qZA(),o.TgZ(7,"ion-button",2),o._uU(8," New account "),o.qZA(),o.TgZ(9,"ion-button",3),o._uU(10," Forgot password ? "),o.qZA()()),2&t&&(o.xp6(5),o.Q6J("actionButtonText","Login"))},directives:[r.Gu,r.sr,r.wd,r.W2,g.c,r.YG,r.YI,s.rH],styles:[""]}),n})();var p=i(4833);const v=[{path:"",component:f}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez,d.u5,r.Pc,s.Bz.forChild(v),p.n]]}),n})()}}]);