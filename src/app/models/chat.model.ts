export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content?: string;
  image?: string;
  timestamp: Date;
  isRead: boolean;
}

export interface ChatRoom {
  id: string;
  participants: {
    id: string;
    name: string;
    avatar: string;
  }[];
  lastMessage?: ChatMessage;
  unreadCount: number;
}