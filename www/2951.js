"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2951],{2951:(v,c,r)=>{r.r(c),r.d(c,{ChatBotPageModule:()=>M});var u=r(9808),g=r(3075),a=r(603),d=r(7460),e=r(2096),p=r(4457);const h=function(t,s){return{"user-message":t,"bot-message":s}};function f(t,s){if(1&t&&(e.TgZ(0,"div",4)(1,"div",5),e._uU(2),e.qZA()()),2&t){const o=s.$implicit;e.xp6(1),e.Q6J("ngClass",e.WLB(2,h,o.isUser,!o.isUser)),e.xp6(1),e.hij(" ",o.content," ")}}const m=[{path:"",component:(()=>{class t{constructor(o){this.spoonacularService=o,this.chatMessages=[],this.userInput=""}ngOnInit(){this.addChatMessage("Hi, I'm Bob, your personal assistant. How can I help you today?",!1)}sendMessage(){if(""!==this.userInput.trim()){const o=this.userInput.trim().split(" ").join("+");this.addChatMessage(o,!0),console.log(o),this.userInput="",this.spoonacularService.sendChatMessage(o).subscribe(n=>{var i;const l=(null===(i=null==n?void 0:n.suggestedUserResponses)||void 0===i?void 0:i[0])||"Sorry, I don't understand your question";setTimeout(()=>{this.addChatMessage(l,!1)},500)})}}addChatMessage(o,n){this.chatMessages.push({content:o,isUser:n})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-chat-bot"]],decls:12,vars:2,consts:[[1,"conversation-window"],["class","message-wrapper",4,"ngFor","ngForOf"],["placeholder","Type your message",3,"ngModel","ngModelChange"],["expand","block",3,"click"],[1,"message-wrapper"],[3,"ngClass"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"SmartCook"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"div",0),e.YNc(6,f,3,5,"div",1),e.qZA(),e.TgZ(7,"ion-footer")(8,"ion-toolbar")(9,"ion-input",2),e.NdJ("ngModelChange",function(l){return n.userInput=l}),e.qZA(),e.TgZ(10,"ion-button",3),e.NdJ("click",function(){return n.sendMessage()}),e._uU(11,"Send"),e.qZA()()()()),2&o&&(e.xp6(6),e.Q6J("ngForOf",n.chatMessages),e.xp6(3),e.Q6J("ngModel",n.userInput))},directives:[a.Gu,a.sr,a.wd,a.W2,u.sg,u.mk,a.fr,a.pK,a.j9,g.JJ,g.On,a.YG],styles:[".conversation-window[_ngcontent-%COMP%]{padding:16px}.message-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin-bottom:10px}.user-message[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff;padding:8px;border-radius:8px;align-self:flex-end}.bot-message[_ngcontent-%COMP%]{background-color:#90ee90;color:#000;padding:8px;border-radius:8px;align-self:flex-start}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(m)],d.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,g.u5,a.Pc,C]]}),t})()}}]);