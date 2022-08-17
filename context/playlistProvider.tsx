import { PlayerState } from "../interfaces/interfaces";
import { PlaylistContext } from "./playlistCtx";
import { musicNftsMockData } from "../fakeApi";
import { useReducer } from "react";
import { playerReducer } from "./playerReducer";

const INITIAL_STATE: PlayerState = {
  playlist: musicNftsMockData,
  currentIndex: null,
  isPlaying: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PlaylistProvider = ({ children }: props) => {
  const [playerState, dispatch] = useReducer(playerReducer, INITIAL_STATE);
  const setIsPlaying = (isPlaying: boolean) => {
    dispatch({ type: "SET_IS_PLAYING", payload: isPlaying });
  };
  const setCurrentIndex = (index: number) => {
    dispatch({ type: "SET_CURRENT_INDEX", payload: index });
  };

  return (
    <PlaylistContext.Provider
      value={{
        playerState,
        setCurrentIndex,
        setIsPlaying,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
