export interface Message {
  id: string;
  title: string;
  content: string;
  date: string;
  isRead: boolean;
  type: 'message' | 'notification';
  icon?: string;
}