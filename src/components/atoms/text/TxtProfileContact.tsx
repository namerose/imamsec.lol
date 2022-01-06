import styled from "styled-components";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const TitleStyle = styled.div`
  font-family: NanumSquareB;
  font-size: 23px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const TextStyle = styled.div`
  font-size: 20px;
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export default function TxtProfileContact({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <LayoutStyle>
      <TitleStyle>{title}</TitleStyle>
      <TextStyle>{text}</TextStyle>
    </LayoutStyle>
  );
}
