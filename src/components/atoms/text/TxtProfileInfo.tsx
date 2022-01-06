import styled from "styled-components";

const LayoutStyle = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const TitleStyle = styled.div`
  font-family: NanumSquareB;
  font-size: 25px;
  @media screen and (max-width: 700px) {
    font-size: 19px;
  }
`;

const TextStyle = styled.div`
  font-size: 23px;
  margin-left: 10px;
  @media screen and (max-width: 700px) {
    margin-left: 0px;
    font-size: 17px;
  }
`;

const TermStyle = styled.div`
  color: #808080;
  font-size: 20px;
  margin-left: 10px;
  @media screen and (max-width: 700px) {
    margin-left: 0px;
    font-size: 13px;
  }
`;

export default function TxtProfileInfo({
  title,
  text,
  term,
}: {
  title: string;
  text: string;
  term: string;
}) {
  return (
    <LayoutStyle>
      <TitleStyle>{title}</TitleStyle>
      <TextStyle>{text}</TextStyle>
      <TermStyle>{term}</TermStyle>
    </LayoutStyle>
  );
}
