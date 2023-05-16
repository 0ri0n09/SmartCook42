"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2167],{2167:(v,d,r)=>{r.r(d),r.d(d,{RestaurantsPageModule:()=>C});var u=r(9808),g=r(3075),o=r(603),p=r(7460),l=r(655),t=r(2096),h=r(4457);function m(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ion-card",8)(2,"ion-card-header",9)(3,"div",10)(4,"ion-card-title",11),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).openGoogleMap(c)}),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t._UZ(9,"ion-icon",12),t.qZA()()(),t.TgZ(10,"ion-card-content"),t._UZ(11,"ion-img",13),t.TgZ(12,"ion-grid")(13,"ion-row",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).callPhoneNumber(c.phone_number)}),t.TgZ(14,"ion-col",15),t._UZ(15,"ion-icon",16),t.qZA(),t.TgZ(16,"ion-col",17)(17,"ion-button",18)(18,"p",19),t._uU(19),t.qZA()()()(),t.TgZ(20,"ion-row")(21,"ion-col",15),t._UZ(22,"ion-icon",20),t.qZA(),t.TgZ(23,"ion-col",17)(24,"p",21),t._uU(25),t.qZA()()(),t.TgZ(26,"ion-row")(27,"ion-col",15),t._UZ(28,"ion-icon",20),t.qZA(),t.TgZ(29,"ion-col",17)(30,"p",21),t._uU(31),t.qZA()()(),t.TgZ(32,"ion-row")(33,"ion-col",15),t._UZ(34,"ion-icon",22),t.qZA(),t.TgZ(35,"ion-col",17)(36,"p",23),t._uU(37),t.qZA()()()()()(),t.BQk()}if(2&n){const e=i.$implicit;t.xp6(6),t.Oqu(e.name.toUpperCase()),t.xp6(2),t.Oqu(e.is_open?"(Open)":"(Closed)"),t.xp6(3),t.Q6J("src",e.food_photos[0]),t.xp6(8),t.hij("+",e.phone_number,""),t.xp6(3),t.Q6J("name",e.delivery_enabled?"car-sport":"close"),t.xp6(3),t.hij(" Delivery: ",e.delivery_enabled?"Available":"Not available",""),t.xp6(3),t.Q6J("name",e.pickup_enabled?"briefcase":"close"),t.xp6(3),t.hij(" Pickup: ",e.pickup_enabled?"Available":"Not available",""),t.xp6(6),t.hij(" Rating: ",e.aggregated_rating_count,"")}}function _(n,i){if(1&n&&(t.TgZ(0,"ion-list"),t.YNc(1,m,38,9,"ng-container",7),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.restaurants)}}const f=[{path:"",component:(()=>{class n{constructor(e,a,s,c){this.spoonacularService=e,this.loadingController=a,this.toastController=s,this.platform=c}ngOnInit(){this.cuisine="",this.restaurants=[],this.getCurrentLocation()}presentLoading(){return(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.loadingController.create({message:"Finding restaurants..."})).present()})}clearSearch(){this.restaurants=[]}getCurrentLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{console.log(e.coords.latitude.toString()),console.log(e.coords.longitude.toString())},e=>{console.log(e)}):console.log("Geolocation is not supported by this browser.")}getRestaurants(){return(0,l.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),this.spoonacularService.getRestaurants("40.71362204862987","-74.0378222114517",this.cuisine).subscribe(e=>(0,l.mG)(this,void 0,void 0,function*(){this.restaurants=e.restaurants,yield(yield this.toastController.create({message:"Searching restaurants done :)",duration:2e3,position:"top",animated:!0,color:"success"})).present(),yield this.loadingController.dismiss()}),e=>(0,l.mG)(this,void 0,void 0,function*(){console.log(e),yield(yield this.toastController.create({message:e,duration:2e3,position:"top",animated:!0,color:"danger"})).present(),yield this.loadingController.dismiss()}))})}openGoogleMap(e){const s=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.address.street_addr}, ${e.address.city}, ${e.address.country}`)}`;window.open(s,"_blank")}callPhoneNumber(e){return(0,l.mG)(this,void 0,void 0,function*(){this.platform.is("cordova")?window.location.href=`tel:+${e}`:yield(yield this.toastController.create({message:"Feature only on smartphone",duration:2e3,position:"top",animated:!0,color:"danger"})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.q),t.Y36(o.HT),t.Y36(o.yF),t.Y36(o.t4))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-restaurants"]],decls:16,vars:3,consts:[[1,"favorite-header"],[1,"favorite-header-title"],[1,"centered-button-container"],["color","primary",1,"search-button",3,"click"],["name","restaurant",2,"margin-right","5px"],[3,"placeholder","ngModel","ngModelChange","ionClear"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"restaurant-card","custom-card-margin"],[1,"card-header"],[1,"header-content"],[1,"card-title",3,"click"],["name","locate","size","large","color","primary",1,"ion-margin-horizontal"],["alt","No picture for this restaurant",1,"restaurant-image","rounded-image",3,"src"],[3,"click"],["size","2"],["name","call","size","large","color","success"],["size","10"],["fill","clear",1,"phone-row"],[1,"text-large",2,"color","white"],["size","large","color","primary",3,"name"],[1,"text-large"],["name","star","size","large","color","warning"],[1,"text-large",2,"color","#F0C300"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"SmartCook"),t.qZA()()(),t.TgZ(4,"ion-list")(5,"div",0)(6,"ion-list")(7,"ion-list-header",1),t._uU(8,"Find restaurants near you"),t.qZA()()(),t.TgZ(9,"div",2)(10,"ion-button",3),t.NdJ("click",function(){return a.getRestaurants()}),t._UZ(11,"ion-icon",4),t._uU(12," Search restaurants "),t.qZA()(),t.TgZ(13,"ion-searchbar",5),t.NdJ("ngModelChange",function(c){return a.cuisine=c})("ionClear",function(){return a.clearSearch()}),t.qZA()(),t.TgZ(14,"ion-content"),t.YNc(15,_,2,1,"ion-list",6),t.qZA()),2&e&&(t.xp6(13),t.Q6J("placeholder","Search by cuisine (french, italian...)")("ngModel",a.cuisine),t.xp6(2),t.Q6J("ngIf",a.restaurants&&a.restaurants.length>0))},directives:[o.Gu,o.sr,o.wd,o.q_,o.yh,o.YG,o.gu,o.VI,o.j9,g.JJ,g.On,o.W2,u.O5,u.sg,o.PM,o.Zi,o.Dq,o.FN,o.Xz,o.jY,o.Nd,o.wI],styles:[".restaurant-card[_ngcontent-%COMP%]{height:100%}.restaurant-image[_ngcontent-%COMP%]{height:150px;object-fit:cover}.centered-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:2px}.text-large[_ngcontent-%COMP%]{font-size:20px}.phone-row[_ngcontent-%COMP%]{background-color:#0ec254;border-radius:10px}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center}.header-content[_ngcontent-%COMP%]{flex-grow:1}.card-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.rounded-image[_ngcontent-%COMP%]{border-radius:10px}.restaurant-card[_ngcontent-%COMP%]{margin-top:1px;margin-bottom:1px}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(f)],p.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,g.u5,o.Pc,Z]]}),n})()}}]);