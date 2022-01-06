import styled from "styled-components";

const Styles = styled.div`
  font-size: 17px;
  color: #808080;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export default function TxtWelcomeScrollHint({ mQuery }: { mQuery: boolean }) {
  if (mQuery) {
    return <Styles>하단의 버튼으로 페이지를 넘겨 보세요 ;)</Styles>;
  } else {
    return (
      <Styles>
        Scrool kebawah aja ;)
        <br />
        나는 당신 모두를 사랑합니다 ❤️
      </Styles>
    );
  }
}
