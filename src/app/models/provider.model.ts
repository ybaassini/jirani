export interface Provider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  responseDate: string;
  message: string;
  price?: number;
  verifiedProfile: boolean;
  completedJobs: number;
  responseTime: string;
  memberSince: string;
}