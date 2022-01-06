type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksForestiaLogo() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/916208192638308382/logo.png?width=705&height=207",
    alt: "Forestia_Logo",
  };

  return <img src={image.src} alt={image.alt} />;
}
