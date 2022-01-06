type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksReactTodoListScreenShot2() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/916229008709025812/unknown.png?width=217&height=325",
    alt: "React-TodoList_ScreenShot_2",
  };

  return <img src={image.src} alt={image.alt} />;
}
