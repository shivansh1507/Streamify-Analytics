import React, { useState } from 'react';
import { Stream } from '../types';
import { ArrowUpDown } from 'lucide-react';

interface DataTableProps {
  data: Stream[];
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [sortField, setSortField] = useState<keyof Stream>('dateStreamed');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [search, setSearch] = useState('');

  const handleSort = (field: keyof Stream) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === 'asc') {
      return String(a[sortField]).localeCompare(String(b[sortField]));
    }
    return String(b[sortField]).localeCompare(String(a[sortField]));
  });

  const filteredData = sortedData.filter(
    stream =>
      stream.songName.toLowerCase().includes(search.toLowerCase()) ||
      stream.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by song or artist..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   placeholder-gray-500 dark:placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                Image
              </th>
              {['Song Name', 'Artist', 'Date Streamed', 'Stream Count', 'User ID'].map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 
                           uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase().replace(' ', '') as keyof Stream)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{header}</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredData.map((stream) => (
              <tr key={stream.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img 
                    src={`${stream.imageUrl}?auto=format&fit=crop&w=50&h=50`} 
                    alt={stream.songName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {stream.songName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {stream.artist}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {new Date(stream.dateStreamed).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {stream.streamCount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {stream.userId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}