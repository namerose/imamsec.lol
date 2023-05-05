import TmplProfile from "../templates/TmplProfile";
import PageStyle from "./PageStyle";

export default function Profile() {
  const githubUrl = "https://twitter.com/imam_walks";
  const velogUrl = "https://instagram.com/imam_walks";
  const rocketPunchUrl = "https://www.facebook.com/imam.walks/";

  const gotoSite: (url: string) => void = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <PageStyle>
      <TmplProfile
        gotoGithub={() => gotoSite(githubUrl)}
        gotoVelog={() => gotoSite(velogUrl)}
        gotoRocketPunch={() => gotoSite(rocketPunchUrl)}
      />
    </PageStyle>
  );
}
