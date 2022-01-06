import styled from "styled-components";
import ImgWorksForestiaLogo from "../atoms/Image/ImgWorksForestiaLogo";
import TxtWorksCatchPhrase from "../atoms/text/TxtWorksCatchPhrase";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  img {
    height: 59px;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;
    img {
      height: 40px;
    }
  }
`;

export default function WorksForestiaTitle() {
  return (
    <Styles>
      <TxtWorksCatchPhrase>
        숲세권 자취 이야기 컨셉의
        <br />
        커뮤니티 공간
      </TxtWorksCatchPhrase>
      <ImgWorksForestiaLogo />
    </Styles>
  );
}
