"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9445],{9445:(Y,y,d)=>{d.r(y),d.d(y,{FoodPageModule:()=>R});var p=d(9808),m=d(3075),o=d(603),v=d(7460),g=d(655),u=d(4102),_=d(4850),M=d(7221),P=d(8896),C=d(1174),e=d(2096),T=d(7556),A=d(8037),x=d(4457);function F(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"ion-col",9)(1,"ion-card",10)(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-card-content",11),e._UZ(7,"ion-img",12),e.qZA(),e.TgZ(8,"ion-button",13),e.NdJ("click",function(){const s=e.CHM(n).$implicit;return e.oxw(2).addIngredient(s.id,s.name,s.image)}),e._UZ(9,"ion-icon",14),e.qZA()()()}if(2&t){const n=c.$implicit;e.xp6(5),e.Oqu(n.name.toUpperCase()),e.xp6(2),e.Q6J("src","https://spoonacular.com/cdn/ingredients_100x100/"+n.image)}}function Z(t,c){if(1&t&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,F,10,2,"ion-col",8),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.searchResults)}}function I(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"ion-col",9)(1,"ion-card",10)(2,"ion-card-header")(3,"ion-card-title")(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-card-content",11),e._UZ(7,"ion-img",12),e.qZA(),e.TgZ(8,"ion-button",15),e.NdJ("click",function(){const s=e.CHM(n).$implicit;return e.oxw(2).deleteIngredient(s.id)}),e._UZ(9,"ion-icon",16),e.qZA()()()}if(2&t){const n=c.$implicit;e.xp6(5),e.Oqu(n.name.toUpperCase()),e.xp6(2),e.Q6J("src",n.image)}}function E(t,c){if(1&t&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,I,10,2,"ion-col",8),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.ingredients)}}function O(t,c){1&t&&(e.TgZ(0,"div",17)(1,"p",18),e._uU(2,"Your fridge is empty"),e.qZA()())}const U=[{path:"",component:(()=>{class t{constructor(n,i,r,s,a,l,f,h){this.firestore=n,this.authService=i,this.profileService=r,this.spoonacularService=s,this.loadingController=a,this.alertController=l,this.camera=f,this.toastController=h}ngOnInit(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),this.ingredients=[],yield this.loadIngredients(),yield this.loadingController.dismiss()})}ionViewDidEnter(){this.loadIngredients()}presentLoading(){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.loadingController.create({message:"Loading ingredients..."})).present()})}loadIngredients(){return(0,g.mG)(this,void 0,void 0,function*(){this.authService.getUser().pipe((0,_.U)(n=>(this.currentUser=n,(0,u.JU)(this.firestore,`users/${n.uid}/fridges/fridge`))),(0,M.K)(()=>P.E)).subscribe(n=>(0,g.mG)(this,void 0,void 0,function*(){try{const i=(0,u.hJ)(n,"ingredients"),r=yield(0,u.PL)(i);this.ingredients=r.docs.map(s=>{const a=s.data();return{id:s.id,name:a.name,image:a.image}})}catch(i){console.log("Error loading ingredients:",i)}}),n=>{console.log("Error getting user:",n)})})}selectIngredients(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),this.spoonacularService.searchIngredients(this.searchQuery).subscribe(n=>(0,g.mG)(this,void 0,void 0,function*(){this.searchResults=n.results,this.searchResults.forEach((i,r)=>{this.ingredients.find(a=>a.name===i.name)&&this.searchResults.splice(r,1)}),yield this.loadingController.dismiss()}),n=>(0,g.mG)(this,void 0,void 0,function*(){console.log("Error searching ingredients:",n),yield this.loadingController.dismiss()}))})}addIngredient(n,i,r){return(0,g.mG)(this,void 0,void 0,function*(){const s={id:n,name:i,image:"https://spoonacular.com/cdn/ingredients_100x100/"+r},a=(0,u.hJ)(this.firestore,`users/${this.currentUser.uid}/fridges/fridge/ingredients`);try{yield(0,u.ET)(a,s),-1!==this.searchResults.findIndex(h=>h.id===n)&&(this.searchResults=this.searchResults.filter(h=>h.id!==n)),this.loadIngredients(),(yield this.toastController.create({message:"The ingredient has been added successfully",duration:2e3,position:"top",animated:!0,color:"success"})).present()}catch(l){console.log("Error adding ingredient:",l)}})}deleteIngredient(n){return(0,g.mG)(this,void 0,void 0,function*(){const i=(0,u.JU)(this.firestore,`users/${this.currentUser.uid}/fridges/fridge/ingredients/${n}`);try{yield(0,u.oe)(i),(yield this.toastController.create({message:"The ingredient has been removed successfully",duration:2e3,position:"top",animated:!0,color:"danger"})).present()}catch(r){console.log("Error adding ingredient:",r)}this.loadIngredients()})}addIngredientsWithPicture(){return(0,g.mG)(this,void 0,void 0,function*(){try{this.camera.getPicture({quality:80,destinationType:this.camera.DestinationType.DATA_URL,sourceType:this.camera.PictureSourceType.CAMERA,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0}).then(i=>{fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCzM3dSOLLxBqEOrthKOHYR6iqXNYrfSAA",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requests:[{image:{content:i},features:[{type:"LABEL_DETECTION",maxResults:10}]}]})}).then(l=>{if(!l.ok)throw new Error("Error calling Google Cloud Vision API");return l.json()}).then(l=>{l.responses[0].labelAnnotations.forEach(h=>{console.log(l),console.log(h.description)})}).catch(l=>{console.error("Error:",l)})}).catch(i=>{console.error("Camera error:",i)})}catch(n){console.error("Error:",n)}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.gg),e.Y36(T.e),e.Y36(A.H),e.Y36(x.q),e.Y36(o.HT),e.Y36(o.Br),e.Y36(C.V1),e.Y36(o.yF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-food"]],features:[e._Bn([C.V1])],decls:17,vars:5,consts:[[3,"placeholder","ngModel","ngModelChange","ionChange"],[4,"ngIf"],[1,"favorite-header"],[1,"favorite-header-title"],[1,"icon-container","ion-align-items-center"],["color","success",3,"click"],[4,"ngIf","ngIfElse"],["emptyFridge",""],["size","6",4,"ngFor","ngForOf"],["size","6"],[1,"ingredient-card"],[1,"ingredient-content"],["alt","No picture found for this ingredient",1,"ingredient-image",3,"src"],["color","primary",1,"add-button",3,"click"],["name","add-circle"],["color","danger",1,"add-button",3,"click"],["name","trash"],[1,"empty-fridge",2,"margin-bottom","150px"],[1,"text"]],template:function(n,i){if(1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"SmartCook"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-searchbar",0),e.NdJ("ngModelChange",function(s){return i.searchQuery=s})("ionChange",function(){return i.selectIngredients()}),e.qZA(),e.YNc(6,Z,3,1,"ion-grid",1),e.TgZ(7,"div",2)(8,"ion-list")(9,"ion-list-header",3),e._uU(10,"My fridge ingredients"),e.qZA()()(),e.TgZ(11,"div",4)(12,"ion-button",5),e.NdJ("click",function(){return i.addIngredientsWithPicture()}),e._uU(13," Add ingredients with a picture "),e.qZA()(),e.YNc(14,E,3,1,"ion-grid",6),e.YNc(15,O,3,0,"ng-template",null,7,e.W1O),e.qZA()),2&n){const r=e.MAs(16);e.xp6(5),e.Q6J("placeholder","Search for ingredients ...")("ngModel",i.searchQuery),e.xp6(1),e.Q6J("ngIf",i.searchResults&&i.searchResults.length>0),e.xp6(8),e.Q6J("ngIf",i.ingredients&&i.ingredients.length>0)("ngIfElse",r)}},directives:[o.Gu,o.sr,o.wd,o.W2,o.VI,o.j9,m.JJ,m.On,p.O5,o.jY,o.Nd,p.sg,o.wI,o.PM,o.Zi,o.Dq,o.FN,o.Xz,o.YG,o.gu,o.q_,o.yh],styles:[".empty-fridge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}.empty-fridge[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:green;font-size:4rem;margin-bottom:1rem}.empty-fridge[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.5rem}.ingredient-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.ingredient-image[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain}.ingredient-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:10px}.add-button[_ngcontent-%COMP%]{width:100%;margin-top:2px}"]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[v.Bz.forChild(U)],v.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,m.u5,o.Pc,J]]}),t})()}}]);