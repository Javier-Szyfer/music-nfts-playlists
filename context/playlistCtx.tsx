import { createContext } from "react";
import { PlayerState } from "../interfaces/interfaces";

export type PlayerContextProps = {
  playerState: PlayerState;
  setCurrentIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
};

export const PlaylistContext = createContext<PlayerContextProps>(
  {} as PlayerContextProps
);
