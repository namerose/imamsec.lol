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
        text="Universitas Amikom Yogyakarta."
        term="2020. 08 ~ Sekarang"
      />
      <TxtProfileInfo
        title="Hobi"
        text="Singer, tapi ga suka nyanyi ataupun jadi Singer."
        term=""
      />
      <TxtProfileInfo
        title="Pekerjaan"
        text="Paling, Jualan Kopi Pabrikan Sendiri."
        term=""
      />
    </Styles>
  );
}
