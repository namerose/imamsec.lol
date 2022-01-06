import styled from "styled-components";
import TxtProfileInfo from "../atoms/text/TxtProfileInfo";

const Styles = styled.div`
  & > div {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 700px) {
    & > div {
      margin-top: 5px;
      margin-bottom: 5px;

      * {
        margin-bottom: 2px;
      }
    }
  }
`;

export default function ProfileInfo() {
  return (
    <Styles>
      <TxtProfileInfo
        title="Pendidikan"
        text="Universitas Amikom Yogyakarta"
        term="2020. 09 ~ Sekarang"
      />
      <TxtProfileInfo
        title="Pekerjaan"
        text="Gaada sih, paling jualan kopi doang :)"
        term="2018 ~ Sekarang"
      />
      <TxtProfileInfo
        title="Hobi"
        text="Gapernah Pacaran"
        term="2001. 03 ~ Sekarang"
      />
    </Styles>
  );
}
