import { SiTelegram, SiInstagram, SiFacebook } from "react-icons/si";
import styled from "styled-components";
import BgeBadge from "../atoms/badge/BgeBadge";
import { useSampleState } from "../context/pageContext";

const LayoutStyle = styled.div`
  display: flex;
  width: 500px;
  margin: 20px 0;
  justify-content: space-between;
`;

const MobileLayoutStyle = styled.div`
  width: 225px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MobileFloorStyle = styled.div`
  display: flex;
  margin: 0 auto;

  & > div {
    margin: 2.5px;
  }
`;

export default function ProfileLink({
  gotoGithub,
  gotoVelog,
  gotoRocketPunch,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
  gotoRocketPunch: () => void;
}) {
  const { mQuery } = useSampleState();

  if (mQuery) {
    return (
      <MobileLayoutStyle>
        <MobileFloorStyle>
          <BgeBadge
            icon={<SiTelegram />}
            text="ImamSec"
            bgColor="#87CEEB"
            txtColor="white"
            onClick={gotoGithub}
          />
          <BgeBadge
            icon={<SiInstagram />}
            text="@Imam_Walks"
            bgColor="#FF3659"
            txtColor="white"
            onClick={gotoVelog}
          />
        </MobileFloorStyle>
        <MobileFloorStyle>
          <BgeBadge
            icon={<SiFacebook />}
            text="Syechrul Imam"
            bgColor="#4e60ff"
            txtColor="white"
            onClick={gotoRocketPunch}
          />
        </MobileFloorStyle>
      </MobileLayoutStyle>
    );
  } else {
    return (
      <LayoutStyle>
        <BgeBadge
          icon={<SiTelegram />}
          text="ImamSec"
          bgColor="#87CEEB"
          txtColor="white"
          onClick={gotoGithub}
        />
        <BgeBadge
          icon={<SiInstagram />}
          text="@Imam_Walks"
          bgColor="#FF3659"
          txtColor="white"
          onClick={gotoVelog}
        />
        <BgeBadge
          icon={<SiFacebook />}
          text="Syechrul Imam"
          bgColor="#4e60ff"
          txtColor="white"
          onClick={gotoRocketPunch}
        />
      </LayoutStyle>
    );
  }
}
