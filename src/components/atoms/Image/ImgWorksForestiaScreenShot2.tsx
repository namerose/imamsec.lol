type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksForestiaScreenShot2() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/916208419738877982/unknown.png",
    alt: "Forestia_ScreenShot_2",
  };

  return <img src={image.src} alt={image.alt} />;
}
