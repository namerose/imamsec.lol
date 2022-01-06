import styled from "styled-components";
import CtnIntroduceProfile from "../atoms/container/CtnIntroduceProfile";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtIntroduceNameAndNickname from "../atoms/text/TxtIntroduceNameAndNickname";

const OuterStyle = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const InnerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }

  @media screen and (max-width: 700px) {
    img {
      width: 59px;
    }
  }
`;

export default function IntroduceProfile() {
  return (
    <OuterStyle>
      <CtnIntroduceProfile>
        <InnerStyle>
          <ImgProfileImage />
          <TxtIntroduceNameAndNickname />
        </InnerStyle>
      </CtnIntroduceProfile>
    </OuterStyle>
  );
}
