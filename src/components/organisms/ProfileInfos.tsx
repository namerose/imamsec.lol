import styled from "styled-components";
import ProfileContact from "../molecules/ProfileContact";
import ProfileInfo from "../molecules/ProfileInfo";
import ProfileLink from "../molecules/ProfileLink";
import ProfilePhotoAndName from "../molecules/ProfilePhotoAndName";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const InfosStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  width: 700px;

  @media screen and (max-width: 700px) {
    align-items: center;
    margin-left: 0px;
    width: 100%;
  }
`;

export default function ProfileInfos({
  gotoGithub,
  gotoVelog,
  gotoRocketPunch,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
  gotoRocketPunch: () => void;
}) {
  return (
    <LayoutStyle>
      <ProfilePhotoAndName />
      <InfosStyle>
        <ProfileInfo />
        <ProfileContact />
        <ProfileLink
          gotoGithub={gotoGithub}
          gotoVelog={gotoVelog}
          gotoRocketPunch={gotoRocketPunch}
        />
      </InfosStyle>
    </LayoutStyle>
  );
}
