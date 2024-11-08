import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

export function Player() {
  const { state, dispatch } = usePlayer();
  const { currentSong, isPlaying, volume } = state;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black h-24 border-t border-gray-800">
      <div className="flex items-center justify-between h-full px-4">
        {/* Song Info */}
        <div className="flex items-center w-1/4">
          {currentSong && (
            <>
              <img
                src={currentSong.coverUrl}
                alt={currentSong.title}
                className="w-14 h-14 rounded"
              />
              <div className="ml-4">
                <div className="text-white text-sm">{currentSong.title}</div>
                <div className="text-gray-400 text-xs">{currentSong.artist}</div>
              </div>
            </>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              className="bg-white rounded-full p-2 hover:scale-105 transition"
              onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-black" />
              ) : (
                <Play className="w-6 h-6 text-black" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full max-w-md mt-2">
            <div className="bg-gray-600 h-1 rounded-full">
              <div className="bg-green-500 w-1/3 h-full rounded-full" />
            </div>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center w-1/4 justify-end">
          <Volume2 className="text-gray-400 w-5 h-5" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) =>
              dispatch({ type: 'SET_VOLUME', payload: parseFloat(e.target.value) })
            }
            className="ml-2 w-24"
          />
        </div>
      </div>
    </div>
  );
}