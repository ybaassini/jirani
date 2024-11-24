import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageSource, knownFolders, path } from '@nativescript/core';
import { ImagePicker } from '@nativescript/imagepicker';
import { ChatMessage } from '../../models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage = '';
  recipientName = 'John Doe';
  recipientAvatar = '~/assets/avatar-placeholder.png';
  lastDisplayedDate: string = '';

  constructor(private route: ActivatedRoute) {
    // Sample messages
    this.messages = [
      {
        id: '1',
        senderId: 'recipient',
        senderName: 'John Doe',
        senderAvatar: '~/assets/avatar-placeholder.png',
        content: 'Bonjour, je peux vous aider avec votre demande.',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
        isRead: true
      },
      {
        id: '2',
        senderId: 'me',
        senderName: 'Moi',
        senderAvatar: '~/assets/avatar-placeholder.png',
        content: 'Super ! Voici une photo du problème.',
        timestamp: new Date(),
        isRead: true
      }
    ];
  }

  ngOnInit() {
    const chatId = this.route.snapshot.params['id'];
    // TODO: Load chat history
  }

  async sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      id: Date.now().toString(),
      senderId: 'me',
      senderName: 'Moi',
      senderAvatar: '~/assets/avatar-placeholder.png',
      content: this.newMessage,
      timestamp: new Date(),
      isRead: false
    });

    this.newMessage = '';
  }

  async pickImage() {
    const imagePicker = new ImagePicker();
    await imagePicker.authorize();

    const selected = await imagePicker.present();
    if (selected.length > 0) {
      const imageAsset = selected[0];
      const imageSource = await ImageSource.fromAsset(imageAsset.asset);

      // Save image to app's temporary directory
      const fileName = `image_${Date.now()}.jpg`;
      const tempPath = path.join(knownFolders.temp().path, fileName);
      imageSource.saveToFile(tempPath, "jpg");

      this.messages.push({
        id: Date.now().toString(),
        senderId: 'me',
        senderName: 'Moi',
        senderAvatar: '~/assets/avatar-placeholder.png',
        image: tempPath,
        timestamp: new Date(),
        isRead: false
      });
    }

  }

  shouldShowDate(message: ChatMessage): boolean {
    const messageDate = this.formatMessageDate(message.timestamp);
    if (messageDate !== this.lastDisplayedDate) {
      this.lastDisplayedDate = messageDate;
      return true;
    }
    return false;
  }

  formatMessageDate(date: Date): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Aujourd'hui";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Hier";
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long'
      });
    }
  }

  formatMessageTime(date: Date): string {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}