type Image = {
  src: string;
  alt: string;
};

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://cdn.discordapp.com/attachments/993067467914096663/993067797141790780/W7stl0Bq_a-removebg-preview.png",
    alt: "Profile picture",
  };

  return <img src={image.src} alt={image.alt} />;
}
