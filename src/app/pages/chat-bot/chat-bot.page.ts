import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';

interface ChatMessage {
  content: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: 'chat-bot.page.html',
  styleUrls: ['chat-bot.page.scss'],
})
export class ChatBotPage implements OnInit {
  chatMessages: ChatMessage[] = [];
  userInput: string = '';

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit(): void {
    this.addChatMessage(`Hi, I'm Bob, your personal assistant. How can I help you today?`, false);
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {
      const userMessage = this.userInput.trim().split(' ').join('+');
      this.addChatMessage(userMessage, true);
      console.log(userMessage);
      this.userInput = '';

      this.spoonacularService.sendChatMessage(userMessage).subscribe((response) => {
        const reply = response?.suggestedUserResponses?.[0] || 'Sorry, I don\'t understand your question';
        setTimeout(() => {
          this.addChatMessage(reply, false);
        }, 500);
      });
    }
  }

  addChatMessage(message: string, isUser: boolean) {
    this.chatMessages.push({ content: message, isUser });
  }
}
