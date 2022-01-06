type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksForestiaScreenShot1() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/916208343427739698/main.PNG?width=669&height=683",
    alt: "Forestia_ScreenShot_1",
  };

  return <img src={image.src} alt={image.alt} />;
}
