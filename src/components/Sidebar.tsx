import { Home, Search, Library, PlusCircle, Heart } from 'lucide-react';

const playlists = [
  { id: '1', name: 'Chill Vibes' },
  { id: '2', name: 'Workout Mix' },
  { id: '3', name: 'Focus Flow' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-8">Spotify Clone</h1>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Home className="w-6 h-6 mr-3" />
            Home
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Search className="w-6 h-6 mr-3" />
            Search
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Library className="w-6 h-6 mr-3" />
            Your Library
          </a>
        </nav>

        <div className="mt-8">
          <button className="flex items-center text-gray-300 hover:text-white">
            <PlusCircle className="w-6 h-6 mr-3" />
            Create Playlist
          </button>
          <button className="flex items-center text-gray-300 hover:text-white mt-4">
            <Heart className="w-6 h-6 mr-3" />
            Liked Songs
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-400 uppercase text-sm font-bold mb-4">Playlists</h2>
          <div className="space-y-2">
            {playlists.map(playlist => (
              <a
                key={playlist.id}
                href="#"
                className="block text-gray-300 hover:text-white truncate"
              >
                {playlist.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}