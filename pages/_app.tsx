import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { PlaylistProvider } from "../context/playlistProvider";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else
    return (
      <ThemeProvider attribute="class" defaultTheme="dark">
        <PlaylistProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PlaylistProvider>
      </ThemeProvider>
    );
}

export default MyApp;
