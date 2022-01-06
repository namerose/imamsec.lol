import ProfileInfos from "../organisms/ProfileInfos";

export default function TmplProfile({
  gotoGithub,
  gotoVelog,
  gotoRocketPunch,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
  gotoRocketPunch: () => void;
}) {
  return (
    <ProfileInfos
      gotoGithub={gotoGithub}
      gotoVelog={gotoVelog}
      gotoRocketPunch={gotoRocketPunch}
    />
  );
}
