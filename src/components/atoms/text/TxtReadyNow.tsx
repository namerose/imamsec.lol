import styled from "styled-components";

const NormalTxtStyle = styled.div`
  display: flex;
  font-size: 60px;
  font-family: NanumSquareL;
  @media screen and (max-width: 700px) {
    font-size: 35px;
  }
`;

const StrongTxtStyle = styled.div`
  font-family: NanumSquareB;
`;

export default function TxtReadyNow() {
  return (
    <NormalTxtStyle>
      <StrongTxtStyle>준비중</StrongTxtStyle>입니다
    </NormalTxtStyle>
  );
}
