import styled from "styled-components";

const LayoutStyle = styled.div`
  width: 100%;

  * {
    margin: 2.5px 0;
  }
`;

const NameStyle = styled.div`
  font-family: NanumSquareB;
  font-size: 25px;

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const NicknameStyle = styled.div`
  font-size: 20px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

const EngNicknameStyle = styled.div`
  font-size: 18px;
  color: #808080;

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export default function TxtIntroduceNameAndNickname() {
  return (
    <LayoutStyle>
      <NameStyle>Imam</NameStyle>
      <NicknameStyle>a.k.a. Rul</NicknameStyle>
      <EngNicknameStyle>@ImamSec</EngNicknameStyle>
    </LayoutStyle>
  );
}
