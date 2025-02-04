import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { RevenueSource, TopSong, UserGrowthData } from '../types';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316'];

interface ChartsProps {
  userGrowthData: UserGrowthData[];
  revenueDistribution: RevenueSource[];
  topSongs: TopSong[];
}

export const Charts: React.FC<ChartsProps> = ({
  userGrowthData,
  revenueDistribution,
  topSongs,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#F3F4F6'
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#6366f1"
              name="Total Users"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#8b5cf6"
              name="Active Users"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Revenue Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={revenueDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {revenueDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#F3F4F6'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg lg:col-span-2 transition-colors">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Top 5 Streamed Songs</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topSongs}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#F3F4F6'
              }}
            />
            <Legend />
            <Bar dataKey="streams" fill="#6366f1" name="Streams" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}