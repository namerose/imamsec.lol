type Image = {
  src: string;
  alt: string;
};

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://cdn.discordapp.com/attachments/936730224303939647/936734549658980362/VCBFmMX1.png",
    alt: "Profile picture",
  };

  return <img src={image.src} alt={image.alt} />;
}
