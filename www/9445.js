"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9445],{9445:(B,S,d)=>{d.r(S),d.d(S,{FoodPageModule:()=>z});var v=d(9808),I=d(3075),r=d(603),_=d(7460),a=d(655),g=d(4102),A=d(4850),Z=d(7221),O=d(8896),b=d(1174),e=d(2096),M=d(7556),E=d(8037),J=d(4457),N=d(520),R=d(7137);function U(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"ion-col",14)(1,"ion-card",15)(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-card-content",16),e._UZ(7,"ion-img",17),e.qZA(),e.TgZ(8,"ion-button",18),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).addIngredient(s.id,s.name,s.image)}),e._UZ(9,"ion-icon",19),e.qZA()()()}if(2&n){const t=c.$implicit;e.xp6(5),e.Oqu(t.name.toUpperCase()),e.xp6(2),e.Q6J("src","https://spoonacular.com/cdn/ingredients_100x100/"+t.image)}}function Y(n,c){if(1&n&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,U,10,2,"ion-col",13),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.searchResults)}}const L=function(n){return{selected:n}};function G(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"ion-col",14)(1,"ion-card",20),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).selectIngredient(s)}),e.TgZ(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-card-content",16),e._UZ(7,"ion-img",17),e.qZA(),e.TgZ(8,"ion-grid")(9,"ion-row")(10,"ion-col",21)(11,"div",22)(12,"ion-button",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).saveToShoppingList(s)}),e._UZ(13,"ion-icon",24),e.qZA()()(),e.TgZ(14,"ion-col",21)(15,"div",22)(16,"ion-button",25),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).deleteIngredient(s.id)}),e._UZ(17,"ion-icon",26),e.qZA()()()()()()()}if(2&n){const t=c.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.VKq(4,L,t.isSelected)),e.xp6(4),e.Oqu(t.name.toUpperCase()),e.xp6(2),e.Q6J("src",t.image),e.xp6(5),e.Q6J("disabled",i.isInShoppingList(t.id))}}function w(n,c){if(1&n&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,G,18,6,"ion-col",13),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.ingredients)}}function Q(n,c){1&n&&(e.TgZ(0,"div",27)(1,"p",28),e._uU(2,"Your fridge is empty"),e.qZA()())}const j=[{path:"",component:(()=>{class n{constructor(t,i,o,s,l,f,C,u,P,x,h,T,p,m){this.firestore=t,this.authService=i,this.profileService=o,this.spoonacularService=s,this.loadingController=l,this.alertController=f,this.camera=C,this.http=u,this.actionSheetController=P,this.toastController=x,this.listService=h,this.router=T,this.route=p,this.platform=m}showFeatureNotAvailableAlert(){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Not Available",message:"Feature only available on the native application",buttons:["OK"]})).present()})}isNativeApp(){return this.platform.is("cordova")}ngOnInit(){return(0,a.mG)(this,void 0,void 0,function*(){yield this.loadAllIngredients(),yield this.presentLoading(),this.ingredients=[],yield this.loadIngredients(),yield this.loadingController.dismiss(),this.ingredients=this.ingredients.map(t=>Object.assign(Object.assign({},t),{isSelected:!1}))})}selectIngredient(t){t.isSelected=!t.isSelected}saveToShoppingList(t){return(0,a.mG)(this,void 0,void 0,function*(){this.listService.addToShoppingList(t),(yield this.toastController.create({message:"The ingredient has been added successfully",duration:2e3,position:"top",animated:!0,color:"success"})).present()})}ionViewDidEnter(){this.loadIngredients()}loadAllIngredients(){return(0,a.mG)(this,void 0,void 0,function*(){try{this.allIngredients=yield this.http.get("assets/ingredients.json").toPromise()}catch(t){console.error(t)}})}anyIngredientSelected(){return this.ingredients&&this.ingredients.some(t=>t.isSelected)}presentLoading(){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.loadingController.create({message:"Loading ingredients..."})).present()})}loadIngredients(){return(0,a.mG)(this,void 0,void 0,function*(){this.authService.getUser().pipe((0,A.U)(t=>(this.currentUser=t,(0,g.JU)(this.firestore,`users/${t.uid}/fridges/fridge`))),(0,Z.K)(()=>O.E)).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){try{const i=(0,g.hJ)(t,"ingredients"),o=yield(0,g.PL)(i);this.ingredients=o.docs.map(s=>{const l=s.data();return{id:s.id,name:l.name,image:l.image}})}catch(i){console.log("Error loading ingredients:",i)}}),t=>{console.log("Error getting user:",t)})})}selectIngredients(){return(0,a.mG)(this,void 0,void 0,function*(){yield new Promise(t=>setTimeout(t,1400)),yield this.presentLoading(),this.spoonacularService.searchIngredients(this.searchQuery).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){this.searchResults=t.results,this.searchResults.forEach((i,o)=>{this.ingredients.find(l=>l.name===i.name)&&this.searchResults.splice(o,1)}),yield this.loadingController.dismiss()}),t=>(0,a.mG)(this,void 0,void 0,function*(){console.log("Error searching ingredients:",t),yield this.loadingController.dismiss()}))})}addIngredient(t,i,o){return(0,a.mG)(this,void 0,void 0,function*(){const s={id:t,name:i,image:"https://spoonacular.com/cdn/ingredients_100x100/"+o},l=(0,g.hJ)(this.firestore,`users/${this.currentUser.uid}/fridges/fridge/ingredients`);try{yield(0,g.ET)(l,s),-1!==this.searchResults.findIndex(u=>u.id===t)&&(this.searchResults=this.searchResults.filter(u=>u.id!==t)),this.loadIngredients(),(yield this.toastController.create({message:"The ingredient has been added successfully",duration:2e3,position:"top",animated:!0,color:"success"})).present()}catch(f){console.log("Error adding ingredient:",f)}})}deleteIngredient(t){return(0,a.mG)(this,void 0,void 0,function*(){const i=(0,g.JU)(this.firestore,`users/${this.currentUser.uid}/fridges/fridge/ingredients/${t}`);try{yield(0,g.oe)(i),(yield this.toastController.create({message:"The ingredient has been removed successfully",duration:2e3,position:"top",animated:!0,color:"danger"})).present()}catch(o){console.log("Error adding ingredient:",o)}this.loadIngredients()})}addIngredientsWithPicture(){return(0,a.mG)(this,void 0,void 0,function*(){const t={quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.CAMERA};try{yield(yield this.actionSheetController.create({header:"Select how you want to send your picture",buttons:[{text:"Take a picture with your device",handler:()=>{t.sourceType=this.camera.PictureSourceType.CAMERA,this.getPicture(t)}},{text:"Select a picture from your library",handler:()=>{t.sourceType=this.camera.PictureSourceType.PHOTOLIBRARY,this.getPicture(t)}},{text:"Cancel",role:"cancel"}]})).present()}catch(i){yield(yield this.alertController.create({header:"ERROR",message:JSON.stringify(i),buttons:["OK"]})).present()}})}getPicture(t){return(0,a.mG)(this,void 0,void 0,function*(){try{yield this.presentLoading();const i=yield this.camera.getPicture(t),o="https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA",s={requests:[{image:{content:i},features:[{type:"LABEL_DETECTION",maxResults:20}]}]},C=(yield this.http.post(o,s).toPromise()).responses[0].labelAnnotations.map(h=>h.description.toLowerCase()),u=yield this.http.get("/assets/ingredients.json").toPromise(),P={};let x=!1;for(const h of C){const T=u.find(p=>p.name===h);if(T)try{const m=yield this.spoonacularService.getIngredientInfosbyId(T.id).toPromise();x=!0;const y={id:m.id,name:m.name,image:m.image},F=JSON.stringify(y);P[F]||(P[F]=!0,this.ingredients.find(k=>k.id===y.id)||(yield this.addIngredient(y.id,y.name,y.image)))}catch(p){console.error("Error getting ingredient:",p),yield(yield this.alertController.create({header:"Error getting ingredient",message:p,buttons:["OK"]})).present()}}x?(yield this.toastController.create({message:"The ingredient(s) has been added successfully",duration:2e3,position:"top",animated:!0,color:"success"})).present():(yield this.toastController.create({message:"No ingredient(s) found in the picture",duration:2e3,position:"top",animated:!0,color:"danger"})).present(),yield this.loadIngredients(),yield this.loadingController.dismiss()}catch(i){yield(yield this.alertController.create({header:"ERROR VISION API",message:JSON.stringify(i),buttons:["OK"]})).present()}})}isInShoppingList(t){return this.listService.isInShoppingList(t)}searchRecipesWithFridgeIngredients(){const i=this.ingredients.filter(s=>s.isSelected).map(s=>s.name),o=JSON.stringify(i);this.router.navigate(["/search"],{queryParams:{searchIngredients:o}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gg),e.Y36(M.e),e.Y36(E.H),e.Y36(J.q),e.Y36(r.HT),e.Y36(r.Br),e.Y36(b.V1),e.Y36(N.eN),e.Y36(r.BX),e.Y36(r.yF),e.Y36(R.X),e.Y36(_.F0),e.Y36(_.gz),e.Y36(r.t4))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-food"]],features:[e._Bn([b.V1])],decls:24,vars:7,consts:[["slot","end"],["color","success",3,"disabled","click"],["name","camera-outline"],[1,"favorite-header"],[1,"favorite-header-title"],[1,"ion-align-items-center",2,"margin-top","3px"],[1,"centered-button-container"],["color","primary",1,"search-button",3,"disabled","click"],["name","search-outline"],[3,"placeholder","ngModel","ngModelChange","ionChange"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["emptyFridge",""],["size","6",4,"ngFor","ngForOf"],["size","6"],[1,"ingredient-card"],[1,"ingredient-content"],["alt","No picture found for this ingredient",1,"ingredient-image",3,"src"],["color","primary",1,"add-button",3,"click"],["name","add-circle"],[1,"ingredient-card",3,"ngClass","click"],["size","6",1,"icon-col"],[1,"icon-container"],["color","secondary",1,"add-button",3,"disabled","click"],["name","cart"],["color","danger",1,"add-button",3,"click"],["name","trash"],[1,"empty-fridge",2,"margin-bottom","150px"],[1,"text"]],template:function(t,i){if(1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"SmartCook"),e.qZA(),e.TgZ(4,"ion-buttons",0)(5,"ion-button",1),e.NdJ("click",function(){return i.isNativeApp()?i.addIngredientsWithPicture():i.showFeatureNotAvailableAlert()}),e._UZ(6,"ion-icon",2),e.qZA()()()(),e.TgZ(7,"ion-list")(8,"div",3)(9,"ion-list")(10,"ion-list-header",4),e._uU(11,"My fridge ingredients"),e.qZA(),e.TgZ(12,"ion-list",5),e._uU(13,"Search, fill and see what's in your fridge"),e.qZA()()(),e.TgZ(14,"div",6)(15,"ion-button",7),e.NdJ("click",function(){return i.searchRecipesWithFridgeIngredients()}),e._UZ(16,"ion-icon",8),e._uU(17," Search with my ingredients "),e.qZA()(),e.TgZ(18,"ion-searchbar",9),e.NdJ("ngModelChange",function(s){return i.searchQuery=s})("ionChange",function(){return i.selectIngredients()}),e.qZA()(),e.TgZ(19,"ion-content"),e.YNc(20,Y,3,1,"ion-grid",10),e.YNc(21,w,3,1,"ion-grid",11),e.YNc(22,Q,3,0,"ng-template",null,12,e.W1O),e.qZA()),2&t){const o=e.MAs(23);e.xp6(5),e.Q6J("disabled",!i.isNativeApp()),e.xp6(10),e.Q6J("disabled",!i.anyIngredientSelected()),e.xp6(3),e.Q6J("placeholder","Search for ingredients...")("ngModel",i.searchQuery),e.xp6(2),e.Q6J("ngIf",i.searchResults&&i.searchResults.length>0),e.xp6(1),e.Q6J("ngIf",i.ingredients&&i.ingredients.length>0)("ngIfElse",o)}},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.gu,r.q_,r.yh,r.VI,r.j9,I.JJ,I.On,r.W2,v.O5,r.jY,r.Nd,v.sg,r.wI,r.PM,r.Zi,r.Dq,r.FN,r.Xz,v.mk],styles:[".empty-fridge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}.empty-fridge[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:green;font-size:4rem;margin-bottom:1rem}.empty-fridge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.5rem}.ingredient-card[_ngcontent-%COMP%]{height:89%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.ingredient-image[_ngcontent-%COMP%]{width:100px;height:100px}.ingredient-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.add-button[_ngcontent-%COMP%]{margin-top:10px;width:100%}.centered-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.search-button[_ngcontent-%COMP%]{display:flex;align-items:center}.search-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px}.ingredient-card.selected[_ngcontent-%COMP%]{background-color:#f0f0f0;border-radius:8px;box-shadow:0 0 6px #0000001a}"]}),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.Bz.forChild(j)],_.Bz]}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[v.ez,I.u5,r.Pc,q]]}),n})()}}]);