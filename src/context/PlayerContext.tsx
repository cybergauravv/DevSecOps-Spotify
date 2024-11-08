import React, { createContext, useContext, useReducer } from 'react';
import type { Song } from '../types';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  queue: Song[];
}

type PlayerAction =
  | { type: 'SET_SONG'; payload: Song }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'ADD_TO_QUEUE'; payload: Song };

const initialState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  volume: 1,
  queue: [],
};

const PlayerContext = createContext<{
  state: PlayerState;
  dispatch: React.Dispatch<PlayerAction>;
} | null>(null);

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'SET_SONG':
      return { ...state, currentSong: action.payload, isPlaying: true };
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload };
    case 'ADD_TO_QUEUE':
      return { ...state, queue: [...state.queue, action.payload] };
    default:
      return state;
  }
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayer must be used within PlayerProvider');
  return context;
}