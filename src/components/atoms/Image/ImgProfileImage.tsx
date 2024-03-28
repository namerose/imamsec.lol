type Image = {
  src: string;
  alt: string;
};

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/993067467914096663/993067797141790780/W7stl0Bq_a-removebg-preview.png?ex=66125675&is=65ffe175&hm=75a127a262eef6dea181b037a7656fec08d648895e97668cc608185d1f5e47a4&=&format=webp&quality=lossless",
    alt: "Profile picture",
  };

  return <img src={image.src} alt={image.alt} />;
}
