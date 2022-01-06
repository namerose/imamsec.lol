import styled from "styled-components";
import ImgWorksReactTodoListScreenShot1 from "../atoms/Image/ImgWorksReactTodoListScreenShot1";
import ImgWorksReactTodoListScreenShot2 from "../atoms/Image/ImgWorksReactTodoListScreenShot2";

const Styles = styled.div`
  display: flex;
  flex-direction: row;

  img {
    box-shadow: #cccccc 0px 0px 10px 0px;
    height: 250px;
    margin: 0 10px;
    border-radius: 10px;
  }

  @media screen and (max-width: 700px) {
    img {
      height: 150px;
    }
  }
`;

export default function WorksReactTodoListScreenShot() {
  return (
    <Styles>
      <ImgWorksReactTodoListScreenShot1 />
      <ImgWorksReactTodoListScreenShot2 />
    </Styles>
  );
}
