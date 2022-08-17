export const musicNftsMockData = [
  {
    id: "1",
    tokenId: "3851",
    title: "Song number 1",
    url: "https://res.cloudinary.com/aldi/video/upload/v1660740949/nftPlaylist/13_Pauline_Anna_Strom_-_Gossamer_Silk_mnnem0.mp3",
    duration: "43:01",
    artist: "Artist 1",
    description:
      "I regularly notice that Door listeners, from one moment to the next, fall asleep. it doesn't matter where or how, they just fall over the desk, collapse on the floor, crash on the keyboard or even dip their head in a bowl of soup while eating. it happens to me too. i'm often on the couch at snack time and suddenly, as soon as i open my eyes, i find the moon perched on the balcony, like a ghost or something unusual. Sometimes i'm surprised and sometimes i just don't care. It seems that the importance of something is subject to reality... i mean, we're all looking at the same moon, aren't we? - Hi, my name is Romina and this is Door 73, hope you enjoy it xx",
    image:
      "https://res.cloudinary.com/aldi/image/upload/v1660571467/nftPlaylist/paint2_cnl3go.jpg",
  },
  {
    id: "2",
    tokenId: "321",
    title: "Song number 2",
    url: "https://radio-strapi-bucket.s3.sa-east-1.amazonaws.com/72_1_40c3149e1c.mp3",
    duration: "40:00",
    artist: "Artist 2",
    description:
      "Esto es Door 71, featuring: Arian Shafiee, Joanna Mattrey, Petrov, Yume 2kki, New Skin, Pontiac Streator, Oli XL, The Humble Bee, Ando Laj",
    image:
      "https://res.cloudinary.com/aldi/image/upload/v1660571467/nftPlaylist/paint1_vsd9dc.jpg",
  },
  {
    id: "3",
    tokenId: "21",
    title: "Song number 3",
    url: "https://radio-strapi-bucket.s3.sa-east-1.amazonaws.com/71_094ca891fd.mp3",
    duration: "40:29",
    artist: "Artist 3",
    description:
      "Hey, it's me. You've seen my face many times already. Maybe a lifetime. Still don't recognize me? Look at me longer than you could look at the sun at its highest point, at a dead animal, at the person you want out of your life. Still don't recognize me? / Hi. Esto es Door 65, featuring : Lucy Liyou, Yska, SSIEGE, 7038634357, Bing & Ruth, Malibu., Biosphere. xx, r",
    image:
      "https://res.cloudinary.com/aldi/image/upload/v1660571467/nftPlaylist/paint3_ka2lt9.jpg",
  },
];

export const nftMockData = musicNftsMockData.map((musicNft) => {
  return {
    id: musicNft.id,
    tokenId: musicNft.tokenId,
    title: musicNft.title,
    url: musicNft.url,
    duration: musicNft.duration,
    artist: musicNft.artist,
    description: musicNft.description,
    image: musicNft.image,
  };
});
