import { PlayerState } from "../interfaces/interfaces";

type playerActions =
  | { type: "SET_CURRENT_INDEX"; payload: number }
  | { type: "SET_IS_PLAYING"; payload: boolean };

export const playerReducer = (
  state: PlayerState,
  action: playerActions
): PlayerState => {
  switch (action.type) {
    case "SET_CURRENT_INDEX":
      return {
        ...state,
        currentIndex: action.payload,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.payload,
      };
    default:
      return state;
  }
};
