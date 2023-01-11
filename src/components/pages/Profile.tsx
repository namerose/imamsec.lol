import TmplProfile from "../templates/TmplProfile";
import PageStyle from "./PageStyle";

export default function Profile() {
  const githubUrl = "https://t.me/imamsec";
  const velogUrl = "https://instagram.com/imamsec_";
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
