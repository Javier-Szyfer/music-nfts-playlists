import { useState, useEffect, useContext } from "react";
// import { TrackContext } from "../context/trackContext";
import Image from "next/image";
import Link from "next/link";
//Components
import { useTheme } from "next-themes";

export default function Header() {
  const [, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [fullDescription, setFullDescription] = useState(false);
  const handleInfo = () => {
    setFullDescription(!fullDescription);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col px-4 text-sm text-[rgb(68,68,68)] dark:text-[#f1f1f1] ">
      <div className="flex justify-between items-center pt-6 lg:pt-12  ">
        <h1 className="font-semibold">NftPlaylists</h1>
        <div
          className="cursor-pointer  dark:text-[#f1f1f1] text-[rgba(68,68,68)] tracking-tighter px-2 outline-dashed "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? "light" : "dark"}{" "}
        </div>
      </div>
      <div className="max-w-[18rem] sm:max-w-[60rem]">
        {!fullDescription ? (
          <div className="flex mt-7  lg:mt-12">
            <p>
              This is the project tagline
              <span
                onClick={handleInfo}
                className="text-[#1500FF] tracking-tighter underline dark:text-[#84858C] whitespace-nowrap ml-2 cursor-pointer"
              >
                more
              </span>
            </p>
          </div>
        ) : (
          <div className="mt-7 lg:mt-12">
            <p>
              And a large -in detail- description here (maybe a manifesto??), we
              ripped albums that we found in physical stores and{" "}
              <i> took them to the internet.</i> It was during this era that we
              built a content channel with a noble purpose, that of listening.
              Soulseek's directories were cities and “emigrate to a new land”
              was a common feeling. Back then, connecting to the Internet
              required a desktop computer, a good local provider, modem, and
              time. <br /> <br /> Life was concretely and cybernetically
              constituted,a division that no longer exists and -without
              automatic playlists or advertising- finding material was the
              product of research so the user was, at the very least, selective.
              With free internet on the streets and the advent of the
              smartphone, the latest generations are now easy recipients of
              unrequested information. All this, before touching a wire or
              having a thoughtful moment. <br />
              <br />
              NftPlaylists is - This is the project tagline
              <span
                onClick={handleInfo}
                className="text-[#1500FF] tracking-tighter underline dark:text-[#84858C] whitespace-nowrap ml-2 cursor-pointer"
              >
                less
              </span>
            </p>
          </div>
        )}
        <div className="py-6 lg:py-9 flex space-x-3 text-[#1500FF] dark:text-[#84858C]">
          <Link href="/rss.xml">
            <a target="_blank" rel="noopener noreferrer">
              <h2>RSS</h2>
            </a>
          </Link>
          <Link href="https://github.com/Javier-Szyfer/door.link">
            <a target="_blank" rel="noopener noreferrer">
              <h2>Github</h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
