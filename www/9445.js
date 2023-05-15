"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9445],{9445:($,_,d)=>{d.r(_),d.d(_,{FoodPageModule:()=>q});var T=d(9808),x=d(3075),o=d(603),I=d(7460),c=d(655),g=d(4102),A=d(4850),O=d(7221),E=d(8896),S=d(1174),e=d(2096),M=d(7556),R=d(8037),b=d(4457),J=d(520),U=d(7137);function Y(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"ion-col",11)(1,"ion-card",12)(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-card-content",13),e._UZ(7,"ion-img",14),e.qZA(),e.TgZ(8,"ion-button",15),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).addIngredient(s.id,s.name,s.image)}),e._UZ(9,"ion-icon",16),e.qZA()()()}if(2&i){const t=a.$implicit;e.xp6(5),e.Oqu(t.name.toUpperCase()),e.xp6(2),e.Q6J("src","https://spoonacular.com/cdn/ingredients_100x100/"+t.image)}}function N(i,a){if(1&i&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,Y,10,2,"ion-col",10),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.searchResults)}}function L(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"ion-col",11)(1,"ion-card",12)(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-card-content",13),e._UZ(7,"ion-img",14),e.qZA(),e.TgZ(8,"ion-grid")(9,"ion-row")(10,"ion-col",17)(11,"div",18)(12,"ion-button",19),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).saveToShoppingList(s)}),e._UZ(13,"ion-icon",20),e.qZA()()(),e.TgZ(14,"ion-col",17)(15,"div",18)(16,"ion-button",21),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).deleteIngredient(s.id)}),e._UZ(17,"ion-icon",22),e.qZA()()()()()()()}if(2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(5),e.Oqu(t.name.toUpperCase()),e.xp6(2),e.Q6J("src",t.image),e.xp6(5),e.Q6J("disabled",n.isInShoppingList(t.id))}}function G(i,a){if(1&i&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,L,18,3,"ion-col",10),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.ingredients)}}function z(i,a){1&i&&(e.TgZ(0,"div",23)(1,"p",24),e._uU(2,"Your fridge is empty"),e.qZA()())}const j=[{path:"",component:(()=>{class i{constructor(t,n,r,s,l,p,y,h,v,C,u){this.firestore=t,this.authService=n,this.profileService=r,this.spoonacularService=s,this.loadingController=l,this.alertController=p,this.camera=y,this.http=h,this.actionSheetController=v,this.toastController=C,this.listService=u}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){yield this.loadAllIngredients(),yield this.presentLoading(),this.ingredients=[],yield this.loadIngredients(),yield this.loadingController.dismiss()})}saveToShoppingList(t){this.listService.addToShoppingList(t)}ionViewDidEnter(){this.loadIngredients()}loadAllIngredients(){return(0,c.mG)(this,void 0,void 0,function*(){try{this.allIngredients=yield this.http.get("assets/ingredients.json").toPromise()}catch(t){console.error(t)}})}presentLoading(){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.loadingController.create({message:"Loading ingredients..."})).present()})}loadIngredients(){return(0,c.mG)(this,void 0,void 0,function*(){this.authService.getUser().pipe((0,A.U)(t=>(this.currentUser=t,(0,g.JU)(this.firestore,`users/${t.uid}/fridges/fridge`))),(0,O.K)(()=>E.E)).subscribe(t=>(0,c.mG)(this,void 0,void 0,function*(){try{const n=(0,g.hJ)(t,"ingredients"),r=yield(0,g.PL)(n);this.ingredients=r.docs.map(s=>{const l=s.data();return{id:s.id,name:l.name,image:l.image}})}catch(n){console.log("Error loading ingredients:",n)}}),t=>{console.log("Error getting user:",t)})})}selectIngredients(){return(0,c.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),this.spoonacularService.searchIngredients(this.searchQuery).subscribe(t=>(0,c.mG)(this,void 0,void 0,function*(){this.searchResults=t.results,this.searchResults.forEach((n,r)=>{this.ingredients.find(l=>l.name===n.name)&&this.searchResults.splice(r,1)}),yield this.loadingController.dismiss()}),t=>(0,c.mG)(this,void 0,void 0,function*(){console.log("Error searching ingredients:",t),yield this.loadingController.dismiss()}))})}addIngredient(t,n,r){return(0,c.mG)(this,void 0,void 0,function*(){const s={id:t,name:n,image:"https://spoonacular.com/cdn/ingredients_100x100/"+r},l=(0,g.hJ)(this.firestore,`users/${this.currentUser.uid}/fridges/fridge/ingredients`);try{yield(0,g.ET)(l,s),-1!==this.searchResults.findIndex(h=>h.id===t)&&(this.searchResults=this.searchResults.filter(h=>h.id!==t)),this.loadIngredients(),(yield this.toastController.create({message:"The ingredient has been added successfully",duration:2e3,position:"top",animated:!0,color:"success"})).present()}catch(p){console.log("Error adding ingredient:",p)}})}deleteIngredient(t){return(0,c.mG)(this,void 0,void 0,function*(){const n=(0,g.JU)(this.firestore,`users/${this.currentUser.uid}/fridges/fridge/ingredients/${t}`);try{yield(0,g.oe)(n),(yield this.toastController.create({message:"The ingredient has been removed successfully",duration:2e3,position:"top",animated:!0,color:"danger"})).present()}catch(r){console.log("Error adding ingredient:",r)}this.loadIngredients()})}addIngredientsWithPicture(){return(0,c.mG)(this,void 0,void 0,function*(){const t={quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.CAMERA};try{yield(yield this.actionSheetController.create({header:"Select how you want to send your picture",buttons:[{text:"Take a picture with your device",handler:()=>{t.sourceType=this.camera.PictureSourceType.CAMERA,this.getPicture(t)}},{text:"Select a picture from your library",handler:()=>{t.sourceType=this.camera.PictureSourceType.PHOTOLIBRARY,this.getPicture(t)}},{text:"Cancel",role:"cancel"}]})).present()}catch(n){yield(yield this.alertController.create({header:"ERROR",message:JSON.stringify(n),buttons:["OK"]})).present()}})}getPicture(t){return(0,c.mG)(this,void 0,void 0,function*(){try{yield this.presentLoading();const n=yield this.camera.getPicture(t),r="https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA",s={requests:[{image:{content:n},features:[{type:"LABEL_DETECTION",maxResults:20}]}]},y=(yield this.http.post(r,s).toPromise()).responses[0].labelAnnotations.map(u=>u.description.toLowerCase()),h=yield this.http.get("/assets/ingredients.json").toPromise(),v={};let C=!1;for(const u of y){const Z=h.find(m=>m.name===u);if(Z)try{const P=yield this.spoonacularService.getIngredientInfosbyId(Z.id).toPromise();C=!0;const f={id:P.id,name:P.name,image:P.image},F=JSON.stringify(f);v[F]||(v[F]=!0,this.ingredients.find(B=>B.id===f.id)||(yield this.addIngredient(f.id,f.name,f.image)))}catch(m){console.error("Error getting ingredient:",m),yield(yield this.alertController.create({header:"Error getting ingredient",message:m,buttons:["OK"]})).present()}}C?(yield this.toastController.create({message:"The ingredient(s) has been added successfully",duration:2e3,position:"top",animated:!0,color:"success"})).present():(yield this.toastController.create({message:"No ingredient(s) found in the picture",duration:2e3,position:"top",animated:!0,color:"danger"})).present(),yield this.loadIngredients(),yield this.loadingController.dismiss()}catch(n){yield(yield this.alertController.create({header:"ERROR VISION API",message:JSON.stringify(n),buttons:["OK"]})).present()}})}isInShoppingList(t){return this.listService.isInShoppingList(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.gg),e.Y36(M.e),e.Y36(R.H),e.Y36(b.q),e.Y36(o.HT),e.Y36(o.Br),e.Y36(S.V1),e.Y36(J.eN),e.Y36(o.BX),e.Y36(o.yF),e.Y36(U.X))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-food"]],features:[e._Bn([S.V1])],decls:20,vars:5,consts:[["slot","end"],["color","success",3,"click"],["name","camera-outline"],[1,"favorite-header"],[1,"favorite-header-title"],[1,"ion-align-items-center",2,"margin-top","3px"],[3,"placeholder","ngModel","ngModelChange","ionChange"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["emptyFridge",""],["size","6",4,"ngFor","ngForOf"],["size","6"],[1,"ingredient-card"],[1,"ingredient-content"],["alt","No picture found for this ingredient",1,"ingredient-image",3,"src"],["color","primary",1,"add-button",3,"click"],["name","add-circle"],["size","6",1,"icon-col"],[1,"icon-container"],["color","secondary",1,"add-button",3,"disabled","click"],["name","cart"],["color","danger",1,"add-button",3,"click"],["name","trash"],[1,"empty-fridge",2,"margin-bottom","150px"],[1,"text"]],template:function(t,n){if(1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"SmartCook"),e.qZA(),e.TgZ(4,"ion-buttons",0)(5,"ion-button",1),e.NdJ("click",function(){return n.addIngredientsWithPicture()}),e._UZ(6,"ion-icon",2),e.qZA()()()(),e.TgZ(7,"ion-list")(8,"div",3)(9,"ion-list")(10,"ion-list-header",4),e._uU(11,"My fridge ingredients"),e.qZA(),e.TgZ(12,"ion-list",5),e._uU(13,"Search, fill and see what is in your fridge"),e.qZA()()()(),e.TgZ(14,"ion-content")(15,"ion-searchbar",6),e.NdJ("ngModelChange",function(s){return n.searchQuery=s})("ionChange",function(){return n.selectIngredients()}),e.qZA(),e.YNc(16,N,3,1,"ion-grid",7),e.YNc(17,G,3,1,"ion-grid",8),e.YNc(18,z,3,0,"ng-template",null,9,e.W1O),e.qZA()),2&t){const r=e.MAs(19);e.xp6(15),e.Q6J("placeholder","Search for ingredients...")("ngModel",n.searchQuery),e.xp6(1),e.Q6J("ngIf",n.searchResults&&n.searchResults.length>0),e.xp6(1),e.Q6J("ngIf",n.ingredients&&n.ingredients.length>0)("ngIfElse",r)}},directives:[o.Gu,o.sr,o.wd,o.Sm,o.YG,o.gu,o.q_,o.yh,o.W2,o.VI,o.j9,x.JJ,x.On,T.O5,o.jY,o.Nd,T.sg,o.wI,o.PM,o.Zi,o.Dq,o.FN,o.Xz],styles:[".empty-fridge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}.empty-fridge[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:green;font-size:4rem;margin-bottom:1rem}.empty-fridge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.5rem}.ingredient-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.ingredient-image[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain}.ingredient-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:10px}.add-button[_ngcontent-%COMP%]{width:100%;margin-top:2px}"]}),i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}];let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[I.Bz.forChild(j)],I.Bz]}),i})(),q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[T.ez,x.u5,o.Pc,Q]]}),i})()}}]);