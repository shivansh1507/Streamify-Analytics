import { KeyMetrics, RevenueSource, Stream, TopSong, UserGrowthData } from './types';

export const keyMetrics: KeyMetrics = {
  totalUsers: 2547890,
  activeUsers: 1893456,
  totalStreams: 15789234,
  revenue: 8934567,
  topArtist: "Shah Rukh Khan"
};

export const revenueDistribution: RevenueSource[] = [
  { name: 'Premium Subscriptions', value: 6234567 },
  { name: 'Ad Revenue', value: 1893456 },
  { name: 'Student Plans', value: 567890 },
  { name: 'Family Plans', value: 238654 }
];

export const topSongs: TopSong[] = [
  { 
    name: 'Jhoome Jo Pathaan', 
    artist: 'Arijit Singh', 
    streams: 892345,
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  { 
    name: 'What Jhumka?', 
    artist: 'Arijit Singh & Jonita Gandhi', 
    streams: 756234,
    imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b'
  },
  { 
    name: 'Flowers', 
    artist: 'Miley Cyrus', 
    streams: 678234,
    imageUrl: 'https://images.unsplash.com/photo-1504672281656-e4981d70414b'
  },
  { 
    name: 'Calm Down', 
    artist: 'Rema & Selena Gomez', 
    streams: 567123,
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'
  },
  { 
    name: 'Tere Vaaste', 
    artist: 'Varun Jain', 
    streams: 456789,
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4'
  }
];

export const userGrowthData: UserGrowthData[] = [
  { month: 'Jan', totalUsers: 1893456, activeUsers: 1234567 },
  { month: 'Feb', totalUsers: 2012345, activeUsers: 1345678 },
  { month: 'Mar', totalUsers: 2123456, activeUsers: 1456789 },
  { month: 'Apr', totalUsers: 2234567, activeUsers: 1567890 },
  { month: 'May', totalUsers: 2345678, activeUsers: 1678901 },
  { month: 'Jun', totalUsers: 2456789, activeUsers: 1789012 },
  { month: 'Jul', totalUsers: 2478901, activeUsers: 1812345 },
  { month: 'Aug', totalUsers: 2489012, activeUsers: 1834567 },
  { month: 'Sep', totalUsers: 2501234, activeUsers: 1856789 },
  { month: 'Oct', totalUsers: 2523456, activeUsers: 1867890 },
  { month: 'Nov', totalUsers: 2534567, activeUsers: 1878901 },
  { month: 'Dec', totalUsers: 2547890, activeUsers: 1893456 }
];

export const recentStreams: Stream[] = [
  { 
    id: '1', 
    songName: 'Jhoome Jo Pathaan', 
    artist: 'Arijit Singh', 
    dateStreamed: '2024-03-10T14:23:45', 
    streamCount: 1234, 
    userId: 'user123',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  { 
    id: '2', 
    songName: 'What Jhumka?', 
    artist: 'Arijit Singh & Jonita Gandhi', 
    dateStreamed: '2024-03-10T14:22:30', 
    streamCount: 987, 
    userId: 'user456',
    imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b'
  },
  { 
    id: '3', 
    songName: 'Flowers', 
    artist: 'Miley Cyrus', 
    dateStreamed: '2024-03-10T14:21:15', 
    streamCount: 876, 
    userId: 'user789',
    imageUrl: 'https://images.unsplash.com/photo-1504672281656-e4981d70414b'
  },
  { 
    id: '4', 
    songName: 'Calm Down', 
    artist: 'Rema & Selena Gomez', 
    dateStreamed: '2024-03-10T14:20:00', 
    streamCount: 765, 
    userId: 'user234',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'
  },
  { 
    id: '5', 
    songName: 'Tere Vaaste', 
    artist: 'Varun Jain', 
    dateStreamed: '2024-03-10T14:19:45', 
    streamCount: 654, 
    userId: 'user567',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4'
  }
];