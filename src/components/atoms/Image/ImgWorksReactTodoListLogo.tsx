type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksReactTodoListLogo() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/916231852904300544/unknown.png?width=481&height=325",
    alt: "React-TodoList_Logo",
  };

  return <img src={image.src} alt={image.alt} />;
}
