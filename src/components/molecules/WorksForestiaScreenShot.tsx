import styled from "styled-components";
import ImgWorksForestiaScreenShot1 from "../atoms/Image/ImgWorksForestiaScreenShot1";
import ImgWorksForestiaScreenShot2 from "../atoms/Image/ImgWorksForestiaScreenShot2";

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

export default function WorksForestiaScreenShot() {
  return (
    <Styles>
      <ImgWorksForestiaScreenShot1 />
      <ImgWorksForestiaScreenShot2 />
    </Styles>
  );
}
