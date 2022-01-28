import styled from "styled-components";

const LayoutStyle = styled.div`
  width: 100%;
  * {
    text-align: right;
  }

  @media screen and (max-width: 700px) {
    width: 40vw;
  }
`;

const NameStyle = styled.div`
  font-family: NanumSquareB;
  font-size: 40px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

const NicknameStyle = styled.div`
  font-size: 30px;

  @media screen and (max-width: 700px) {
    font-size: 23px;
  }
`;

const EngNicknameStyle = styled.div`
  font-size: 23px;
  color: #808080;

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export default function TxtProfileNameAndNickname() {
  return (
    <LayoutStyle>
      <NameStyle>Syechrul Imam</NameStyle>
      <NicknameStyle>a.k.a. Rul</NicknameStyle>
      <EngNicknameStyle>@ImamSec</EngNicknameStyle>
    </LayoutStyle>
  );
}
