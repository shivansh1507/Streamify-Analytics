import React, { useState, useEffect } from 'react';
import { Users, Music, DollarSign, TrendingUp, Crown } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { Charts } from './components/Charts';
import { DataTable } from './components/DataTable';
import { ThemeToggle } from './components/ThemeToggle';
import { ExportButton } from './components/ExportButton';
import {
  keyMetrics,
  revenueDistribution,
  topSongs,
  userGrowthData,
  recentStreams,
} from './mockData';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg transition-colors sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold gradient-text animate-float">
              Streamify Analytics
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: {new Date().toLocaleString()}
              </span>
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <MetricCard
            title="Total Users"
            value={keyMetrics.totalUsers}
            icon={Users}
            trend={{ value: 12.5, isPositive: true }}
            delay={0}
          />
          <MetricCard
            title="Active Users"
            value={keyMetrics.activeUsers}
            icon={Music}
            trend={{ value: 8.3, isPositive: true }}
            delay={100}
          />
          <MetricCard
            title="Total Streams"
            value={keyMetrics.totalStreams}
            icon={TrendingUp}
            trend={{ value: 15.7, isPositive: true }}
            delay={200}
          />
          <MetricCard
            title="Revenue"
            value={`$${(keyMetrics.revenue / 1000000).toFixed(1)}M`}
            icon={DollarSign}
            trend={{ value: 10.2, isPositive: true }}
            delay={300}
          />
          <MetricCard
            title="Top Artist"
            value={keyMetrics.topArtist}
            icon={Crown}
            delay={400}
          />
        </div>

        {/* Charts */}
        <div className="animate-slide-up">
          <Charts
            userGrowthData={userGrowthData}
            revenueDistribution={revenueDistribution}
            topSongs={topSongs}
          />
        </div>

        {/* Recent Streams Table */}
        <div className="animate-slide-up">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold gradient-text">Recent Streams</h2>
            <ExportButton data={recentStreams} />
          </div>
          <DataTable data={recentStreams} />
        </div>
      </main>
    </div>
  );
}

export default App;