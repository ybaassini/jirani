export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  title: string;
  description: string;
  category: string;
  location: {
    address: string;
    distance: number;
  };
  budget?: number;
  duration?: string;
  images?: string[];
  createdAt: Date;
  timeAgo: string;
  responses: number;
  isNew: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
}