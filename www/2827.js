"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2827],{2827:(L,g,s)=>{s.r(g),s.d(g,{ListPageModule:()=>v});var c=s(9808),d=s(3075),i=s(603),l=s(7460),p=s(655),t=s(2096),m=s(7137);function u(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"ion-col",6)(1,"ion-card",7)(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-card-content",8),t._UZ(7,"ion-img",9),t.qZA(),t.TgZ(8,"ion-button",10),t.NdJ("click",function(){const y=t.CHM(n).$implicit;return t.oxw(2).deleteFromShoppingList(y.id)}),t._UZ(9,"ion-icon",11),t.qZA()()()}if(2&e){const n=o.$implicit;t.xp6(5),t.Oqu(n.name.toUpperCase()),t.xp6(2),t.Q6J("src",n.image)}}function h(e,o){if(1&e&&(t.TgZ(0,"ion-grid")(1,"ion-row"),t.YNc(2,u,10,2,"ion-col",5),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.ingredients)}}function f(e,o){1&e&&(t.TgZ(0,"div",12)(1,"p",13),t._uU(2,"Your shopping list is empty"),t.qZA()())}const P=[{path:"",component:(()=>{class e{constructor(n,r){this.listService=n,this.toastController=r}ngOnInit(){this.ingredients=this.listService.getShoppingList()}ionViewDidEnter(){this.loadShoppingList()}loadShoppingList(){this.ingredients=this.listService.getShoppingList()}deleteFromShoppingList(n){return(0,p.mG)(this,void 0,void 0,function*(){this.listService.deleteOfShoppingList(n),this.ingredients=this.listService.getShoppingList(),(yield this.toastController.create({message:"The ingredient has been removed successfully",duration:2e3,position:"top",animated:!0,color:"danger"})).present()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.X),t.Y36(i.yF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:15,vars:2,consts:[[1,"favorite-header"],[1,"favorite-header-title",2,"margin-left","50px"],[1,"ion-align-items-center",2,"margin-top","3px"],[4,"ngIf","ngIfElse"],["emptyList",""],["size","6",4,"ngFor","ngForOf"],["size","6"],[1,"ingredient-card"],[1,"ingredient-content"],["alt","No picture found for this ingredient",1,"ingredient-image",3,"src"],["expand","block","color","danger",1,"remove-button",3,"click"],["name","trash"],[1,"empty-list",2,"margin-bottom","150px"],[1,"text"]],template:function(n,r){if(1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3," SmartCook "),t.qZA()()(),t.TgZ(4,"ion-list")(5,"div",0)(6,"ion-list")(7,"ion-list-header",1),t._uU(8,"Your shopping list"),t.qZA(),t.TgZ(9,"ion-list",2),t._uU(10,"What you need for your next shopping trip"),t.qZA()()()(),t.TgZ(11,"ion-content"),t.YNc(12,h,3,1,"ion-grid",3),t.qZA(),t.YNc(13,f,3,0,"ng-template",null,4,t.W1O)),2&n){const a=t.MAs(14);t.xp6(12),t.Q6J("ngIf",r.ingredients&&r.ingredients.length>0)("ngIfElse",a)}},directives:[i.Gu,i.sr,i.wd,i.q_,i.yh,i.W2,c.O5,i.jY,i.Nd,c.sg,i.wI,i.PM,i.Zi,i.Dq,i.FN,i.Xz,i.YG,i.gu],styles:[".empty-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}.empty-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:green;font-size:4rem;margin-bottom:1rem}.empty-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.5rem}.ingredient-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.ingredient-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.ingredient-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.remove-button[_ngcontent-%COMP%]{margin-top:10px;width:100%}.favorite-header-title[_ngcontent-%COMP%]{margin-left:1px}.ion-align-items-center[_ngcontent-%COMP%]{margin-top:3px}.favorite-header[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(P)],l.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,d.u5,i.Pc,x]]}),e})()}}]);