import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon, trend, delay = 0 }) => {
  return (
    <div 
      className="card-gradient bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg animate-pulse-ring">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
        </div>
        {trend && (
          <span className={`text-sm ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-semibold gradient-text">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
    </div>
  );
}