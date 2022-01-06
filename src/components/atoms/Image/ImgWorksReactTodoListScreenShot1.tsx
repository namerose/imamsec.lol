type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksReactTodoListScreenShot1() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/916230982980497458/unknown.png?width=238&height=325",
    alt: "React-TodoList_ScreenShot_1",
  };

  return <img src={image.src} alt={image.alt} />;
}
