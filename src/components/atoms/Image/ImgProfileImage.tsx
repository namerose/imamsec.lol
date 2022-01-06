type Image = {
  src: string;
  alt: string;
};

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://cdn.discordapp.com/attachments/859530504339718225/928444649562046464/Untitled_design_6.png",
    alt: "Profile picture",
  };

  return <img src={image.src} alt={image.alt} />;
}
