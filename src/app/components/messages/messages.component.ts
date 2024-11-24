import { Component } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  activeTab: 'messages' | 'notifications' = 'messages';
  messages: Message[] = [
    {
      id: '1',
      title: 'Nouvelle demande dans votre périmètre',
      content: '📍 Demande Local commercial à Rouen : Bonjour, je suis à la recherche d\'un petit local à louer Rouen rive gauche pour pratiquer mon activité d\'esthéticienne merci',
      date: '16/11/24',
      isRead: true,
      type: 'notification',
      icon: '🔔'
    },
    {
      id: '2',
      title: 'Marie D. vous a envoyé un message',
      content: 'Bonjour, je suis intéressée par votre annonce. Est-ce toujours disponible ?',
      date: '12/11/24',
      isRead: false,
      type: 'message',
      icon: '💬'
    }
  ];

  get filteredMessages() {
    return this.messages.filter(msg => 
      this.activeTab === 'messages' ? msg.type === 'message' : msg.type === 'notification'
    );
  }

  get unreadCount() {
    return this.messages.filter(msg => !msg.isRead && msg.type === 'message').length;
  }

  get notificationCount() {
    return this.messages.filter(msg => msg.type === 'notification').length;
  }

  switchTab(tab: 'messages' | 'notifications') {
    this.activeTab = tab;
  }

  deleteMessage(id: string) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }

  onDeleteAll() {
    this.messages = this.messages.filter(msg => 
      this.activeTab === 'messages' ? msg.type !== 'message' : msg.type !== 'notification'
    );
  }
}