import React from 'react';
import { Download } from 'lucide-react';
import { Stream } from '../types';

interface ExportButtonProps {
  data: Stream[];
}

export const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const exportToCSV = () => {
    const headers = ['Song Name', 'Artist', 'Date Streamed', 'Stream Count', 'User ID'];
    const csvContent = [
      headers.join(','),
      ...data.map(stream => [
        `"${stream.songName}"`,
        `"${stream.artist}"`,
        stream.dateStreamed,
        stream.streamCount,
        stream.userId
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `streamify-data-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={exportToCSV}
      className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <Download className="w-4 h-4" />
      <span>Export CSV</span>
    </button>
  );
}