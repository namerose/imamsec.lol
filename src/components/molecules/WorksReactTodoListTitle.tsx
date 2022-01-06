import styled from "styled-components";
import ImgWorksReactTodoListLogo from "../atoms/Image/ImgWorksReactTodoListLogo";
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

export default function WorksReactTodoListTitle() {
  return (
    <Styles>
      <TxtWorksCatchPhrase>
        간편하게 사용하는
        <br />
        나만의 투두리스트
      </TxtWorksCatchPhrase>
      <ImgWorksReactTodoListLogo />
    </Styles>
  );
}
