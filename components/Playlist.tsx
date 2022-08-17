import { Fragment, useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlaylistContext } from "../context/playlistCtx";
import { NFT } from "../interfaces/interfaces";

interface props {
  nft: NFT;
  index: number;
}

export default function Playlist({ nft, index }: props) {
  const { setCurrentIndex, setIsPlaying } = useContext(PlaylistContext);
  const [isOpen, setIsOpen] = useState(false);

  const URL = `https://nftPlaylist.link/playlist/${nft?.id}`;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full max-w-4xl mx-auto text-[#444444] dark:text-[#f1f1f1] border border-stone-400 border-b-0 last:border-b  ">
      <div className="relative flex flex-col justify-between  items-center w-full px-4 py-4  text-sm  text-left ">
        <div className="grid grid-cols-12 w-full items-start">
          <div className="col-span-12 md:col-span-2">
            <div className="h-48 w-48">
              <Image
                src={nft?.image}
                alt="nft image"
                layout="responsive"
                objectFit="cover"
                width={180}
                height={180}
                priority
                className="cursor-pointer"
                onClick={openModal}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-2"></div>
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between h-full mt-4 sm:mt-0  ">
            <div className="flex flex-col  h-full gap-[4px] sm:gap-1">
              <span>
                {nft?.artist} - {nft?.title}
              </span>
              <span>TokenID: {nft?.tokenId}</span>
              <span>Contract Address: 0xab...1234</span>
              <span>Duration: {nft?.duration}</span>
              <span className="truncate">{nft?.description}</span>
            </div>
            <div className="flex items-center py-2">
              <button
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(true);
                }}
                className="text-[#1500FF]  dark:text-[#f1f1f1] hover:text-[#1500FF] mr-2 cursor-pointer underline"
              >
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay
                  className="fixed inset-0 bg-black opacity-30"
                  onClick={closeModal}
                />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div
                  className="flex flex-col min-h-screen justify-center items-center w-full overflow-auto transition-all transform "
                  onClick={closeModal}
                >
                  <div className="h-72 w-72 md:h-[32rem] md:w-[32rem]">
                    <Image
                      src={nft?.image}
                      alt="avatar"
                      layout="responsive"
                      objectFit="cover"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}
