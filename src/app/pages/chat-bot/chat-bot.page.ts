import { Component, OnInit } from '@angular/core';
import {SpoonacularService} from "../../services/spoonacular.service";

@Component({
  selector: 'app-chat-bot',
  templateUrl: 'chat-bot.page.html',
  styleUrls: ['chat-bot.page.scss'],
})

export class ChatBotPage implements OnInit {

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit(): void {
  }
  processUserMessage(message: string) {
    this.spoonacularService.sendChatMessage(message).subscribe(response => {
      // Traitez la réponse du chatbot
      const reply = response?.suggestedUserResponses?.[0] || 'Désolé, je ne comprends pas.';
      //this.addChatMessage(reply);
    });
  }
}
