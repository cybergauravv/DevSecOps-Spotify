import { Play } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import type { Song } from '../types';

interface AlbumCardProps {
  song: Song;
}

export function AlbumCard({ song }: AlbumCardProps) {
  const { dispatch } = usePlayer();

  return (
    <div className="group relative bg-gray-900 p-4 rounded-md hover:bg-gray-800 transition duration-300">
      <div className="relative aspect-square mb-4">
        <img
          src={song.coverUrl}
          alt={song.title}
          className="w-full h-full object-cover rounded-md"
        />
        <button
          onClick={() => dispatch({ type: 'SET_SONG', payload: song })}
          className="absolute bottom-2 right-2 p-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform"
        >
          <Play fill="white" className="w-6 h-6 text-white" />
        </button>
      </div>
      <h3 className="text-white font-semibold truncate">{song.title}</h3>
      <p className="text-gray-400 text-sm mt-1">{song.artist}</p>
    </div>
  );
}