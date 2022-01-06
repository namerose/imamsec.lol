import styled from "styled-components";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtProfileNameAndNickname from "../atoms/text/TxtProfileNameAndNickname";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-right: 50px;

  border-right: 1px solid #b0b0b0;

  img {
    width: 280px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: row;
    border-right: 0px;
    padding-right: 0px;
    margin-bottom: 10px;

    img {
      width: 100px;
    }
  }
`;

export default function ProfilePhotoAndName() {
  return (
    <Styles>
      <ImgProfileImage />
      <TxtProfileNameAndNickname />
    </Styles>
  );
}
