export interface Stream {
  id: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  imageUrl: string;
}

export interface KeyMetrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

export interface RevenueSource {
  name: string;
  value: number;
}

export interface TopSong {
  name: string;
  artist: string;
  streams: number;
  imageUrl: string;
}

export interface UserGrowthData {
  month: string;
  totalUsers: number;
  activeUsers: number;
}