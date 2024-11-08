import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-white"
        placeholder="Search for songs, artists, or albums"
      />
    </div>
  );
}