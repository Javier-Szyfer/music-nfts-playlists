import { useContext, useState, useEffect } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { PlaylistContext } from "../context/playlistCtx";
import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";

export const NFTPlayer = () => {
  const { playerState, setCurrentIndex, setIsPlaying } =
    useContext(PlaylistContext);
  const { currentIndex, playlist, isPlaying } = playerState;
  // console.log("currentIndex", currentIndex);
  // console.log("isPlaying", isPlaying);
  const audioPlayer = useRef();
  const handleClickNext = () => {
    currentIndex && currentIndex < playlist.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const handleClickPrev = () => {
    currentIndex && currentIndex > 1
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(0);
  };

  const handleEnd = () => {
    currentIndex && currentIndex < playlist.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setCurrentIndex(-1);
  };
  return (
    <AudioPlayer
      className="dark:bg-[#202020] bg-[#f1f1f1] backdrop-blur-[40px] dark:text-stone-100 text-sm text-stone-800 border-t border-t-stone-300 border-l-0 border-b-0 border-r-0   dark:md:border dark:md:border-stone-400 md:border md:border-stone-300 "
      src={
        currentIndex !== null && currentIndex >= 0
          ? playlist[currentIndex].url
          : ""
      }
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
      onEnded={handleEnd}
      autoPlay
      autoPlayAfterSrcChange={true}
      customControlsSection={[]}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.CURRENT_LEFT_TIME,
        <div className="mr-6" />,
        RHAP_UI.VOLUME,
      ]}
      customAdditionalControls={[]}
      header={
        <div className="flex items-center justify-between">
          {currentIndex !== null
            ? `${playlist[currentIndex]?.artist} - ${playlist[currentIndex]?.title}`
            : ""}
          <button onClick={() => handleClose()}>
            <IoCloseSharp />
          </button>
        </div>
      }
    />
  );
};
