import { useContext } from "react";
import { PlaylistContext } from "../context/playlistCtx";
import { NFTPlayer } from "./NftPlayer";

export const PlayerWrapper = () => {
  const { playerState } = useContext(PlaylistContext);
  const { isPlaying } = playerState;

  return (
    <div className="flex flex-col items-center z-10 fixed bottom-0 left-0 right-0 justify-between ">
      <div
        className={` ${isPlaying ? "block" : "hidden"} w-[100%] md:w-[50%] `}
      >
        <NFTPlayer />
      </div>
    </div>
  );
};
