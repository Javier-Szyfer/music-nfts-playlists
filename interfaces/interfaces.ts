//THIS HAVE TO MATCH THE NFT METADATA OR THE FIELDS THAT WE WANT TO BRING BACK TO THE CLIENT
export interface NFT {
  id: string;
  tokenId: string;
  title: string;
  url: string;
  duration: string;
  artist: string;
  description: string;
  image: string;
}

export interface PlayerState {
  playlist: NFT[];
  currentIndex: number | null;
  isPlaying: boolean;
}
