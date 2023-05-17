"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2167],{2167:(v,d,a)=>{a.r(d),a.d(d,{RestaurantsPageModule:()=>y});var u=a(9808),g=a(3075),o=a(603),p=a(7460),l=a(655),e=a(2096),h=a(4457);function m(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-card",8)(2,"ion-card-header",9)(3,"div",10)(4,"ion-card-title",11),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).openGoogleMap(c)}),e.TgZ(5,"strong"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e._UZ(9,"ion-icon",12),e.qZA()()(),e.TgZ(10,"ion-card-content"),e._UZ(11,"ion-img",13),e.TgZ(12,"ion-grid")(13,"ion-row",14),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).callPhoneNumber(c.phone_number)}),e.TgZ(14,"ion-col",15),e._UZ(15,"ion-icon",16),e.qZA(),e.TgZ(16,"ion-col",17)(17,"ion-button",18)(18,"p",19),e._uU(19),e.qZA()()()(),e.TgZ(20,"ion-row")(21,"ion-col",15),e._UZ(22,"ion-icon",20),e.qZA(),e.TgZ(23,"ion-col",17)(24,"p",21),e._uU(25),e.qZA()()(),e.TgZ(26,"ion-row")(27,"ion-col",15),e._UZ(28,"ion-icon",20),e.qZA(),e.TgZ(29,"ion-col",17)(30,"p",21),e._uU(31),e.qZA()()(),e.TgZ(32,"ion-row")(33,"ion-col",15),e._UZ(34,"ion-icon",22),e.qZA(),e.TgZ(35,"ion-col",17)(36,"p",23),e._uU(37),e.qZA()()()()()(),e.BQk()}if(2&n){const t=i.$implicit;e.xp6(6),e.Oqu(t.name.toUpperCase()),e.xp6(2),e.Oqu(t.is_open?"(Open)":"(Closed)"),e.xp6(3),e.Q6J("src",t.food_photos[0]),e.xp6(8),e.hij("+",t.phone_number,""),e.xp6(3),e.Q6J("name",t.delivery_enabled?"car-sport":"close"),e.xp6(3),e.hij(" Delivery: ",t.delivery_enabled?"Available":"Not available",""),e.xp6(3),e.Q6J("name",t.pickup_enabled?"briefcase":"close"),e.xp6(3),e.hij(" Pickup: ",t.pickup_enabled?"Available":"Not available",""),e.xp6(6),e.hij(" Rating: ",t.aggregated_rating_count,"")}}function _(n,i){if(1&n&&(e.TgZ(0,"ion-list"),e.YNc(1,m,38,9,"ng-container",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.restaurants)}}const f=[{path:"",component:(()=>{class n{constructor(t,r,s,c){this.spoonacularService=t,this.loadingController=r,this.toastController=s,this.platform=c}ngOnInit(){this.cuisine="",this.restaurants=[],this.getCurrentLocation()}presentLoading(){return(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.loadingController.create({message:"Finding restaurants..."})).present()})}clearSearch(){this.restaurants=[]}getCurrentLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{console.log(t.coords.latitude.toString()),console.log(t.coords.longitude.toString())},t=>{console.log(t)}):console.log("Geolocation is not supported by this browser.")}getRestaurants(){return(0,l.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),this.spoonacularService.getRestaurants("40.71362204862987","-74.0378222114517",this.cuisine).subscribe(t=>(0,l.mG)(this,void 0,void 0,function*(){this.restaurants=t.restaurants,yield(yield this.toastController.create({message:"Searching restaurants done :)",duration:2e3,position:"top",animated:!0,color:"success"})).present(),yield this.loadingController.dismiss()}),t=>(0,l.mG)(this,void 0,void 0,function*(){console.log(t),yield(yield this.toastController.create({message:t,duration:2e3,position:"top",animated:!0,color:"danger"})).present(),yield this.loadingController.dismiss()}))})}openGoogleMap(t){const s=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${t.address.street_addr}, ${t.address.city}, ${t.address.country}`)}`;window.open(s,"_blank")}callPhoneNumber(t){return(0,l.mG)(this,void 0,void 0,function*(){this.platform.is("cordova")?window.location.href=`tel:+${t}`:yield(yield this.toastController.create({message:"Feature only on smartphone",duration:2e3,position:"top",animated:!0,color:"danger"})).present()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.q),e.Y36(o.HT),e.Y36(o.yF),e.Y36(o.t4))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-restaurants"]],decls:16,vars:3,consts:[[1,"favorite-header"],[1,"favorite-header-title"],[1,"centered-button-container"],["color","primary",1,"search-button",3,"click"],["name","restaurant",2,"margin-right","5px"],[3,"placeholder","ngModel","ngModelChange","keyup.enter","ionClear"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"restaurant-card","custom-card-margin"],[1,"card-header"],[1,"header-content"],[1,"card-title",3,"click"],["name","locate","size","large","color","primary",1,"ion-margin-horizontal"],["alt","No picture for this restaurant",1,"restaurant-image","rounded-image",3,"src"],[3,"click"],["size","2"],["name","call","size","large","color","success"],["size","10"],["fill","clear",1,"phone-row"],[1,"text-large",2,"color","white"],["size","large","color","primary",3,"name"],[1,"text-large"],["name","star","size","large","color","warning"],[1,"text-large",2,"color","#F0C300"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"SmartCook"),e.qZA()()(),e.TgZ(4,"ion-list")(5,"div",0)(6,"ion-list")(7,"ion-list-header",1),e._uU(8,"Find restaurants near you"),e.qZA()()(),e.TgZ(9,"div",2)(10,"ion-button",3),e.NdJ("click",function(){return r.getRestaurants()}),e._UZ(11,"ion-icon",4),e._uU(12," Search restaurants "),e.qZA()(),e.TgZ(13,"ion-searchbar",5),e.NdJ("ngModelChange",function(c){return r.cuisine=c})("keyup.enter",function(){return r.getRestaurants()})("ionClear",function(){return r.clearSearch()}),e.qZA()(),e.TgZ(14,"ion-content"),e.YNc(15,_,2,1,"ion-list",6),e.qZA()),2&t&&(e.xp6(13),e.Q6J("placeholder","Filter by cuisine (french, italian...)")("ngModel",r.cuisine),e.xp6(2),e.Q6J("ngIf",r.restaurants&&r.restaurants.length>0))},directives:[o.Gu,o.sr,o.wd,o.q_,o.yh,o.YG,o.gu,o.VI,o.j9,g.JJ,g.On,o.W2,u.O5,u.sg,o.PM,o.Zi,o.Dq,o.FN,o.Xz,o.jY,o.Nd,o.wI],styles:[".restaurant-card[_ngcontent-%COMP%]{height:100%}.restaurant-image[_ngcontent-%COMP%]{height:150px;object-fit:cover}.centered-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:2px}.text-large[_ngcontent-%COMP%]{font-size:20px}.phone-row[_ngcontent-%COMP%]{background-color:#0ec254;border-radius:10px}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center}.header-content[_ngcontent-%COMP%]{flex-grow:1}.card-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.rounded-image[_ngcontent-%COMP%]{border-radius:10px}.restaurant-card[_ngcontent-%COMP%]{margin-top:1px;margin-bottom:1px}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.Bz.forChild(f)],p.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,g.u5,o.Pc,Z]]}),n})()}}]);