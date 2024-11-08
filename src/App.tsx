import { PlayerProvider } from './context/PlayerContext';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { SearchBar } from './components/SearchBar';
import { AlbumCard } from './components/AlbumCard';

// Mock data
const recentSongs = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: 354,
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    audioUrl: '',
  },
  {
    id: '2',
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    duration: 391,
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    audioUrl: '',
  },
  {
    id: '3',
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    album: 'Appetite for Destruction',
    duration: 356,
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
    audioUrl: '',
  },
  {
    id: '4',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    duration: 482,
    coverUrl: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6',
    audioUrl: '',
  },
];

export default function App() {
  return (
    <PlayerProvider>
      <div className="flex bg-black min-h-screen">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-8">
          <div className="mb-8">
            <SearchBar />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {recentSongs.map((song) => (
                <AlbumCard key={song.id} song={song} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Made for You</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {recentSongs.slice(0, 5).map((song) => (
                <AlbumCard key={song.id} song={song} />
              ))}
            </div>
          </section>
        </main>

        <Player />
      </div>
    </PlayerProvider>
  );
}