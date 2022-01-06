import { IoIosSend } from "react-icons/io";
import styled from "styled-components";
import IcoProfileContact from "../atoms/icon/IcoProfileContact";
import TxtProfileContact from "../atoms/text/TxtProfileContact";

const LayoutStyle = styled.div`
  width: 620px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-left: 0px;
    margin: 15px 0;
    width: 100%;
  }
`;

const Styles = styled.div`
  display: flex;
  align-items: center;

  & {
    margin-right: 10px;
    & > div {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 700px) {
    justify-content: center;
    width: 260px;
    & {
      margin-right: 0px;
      margin-bottom: 7px;
    }
  }
`;

export default function ProfileContact() {
  return (
    <LayoutStyle>
      <Styles>
        <IcoProfileContact icon={<IoIosSend />} />
        <TxtProfileContact title="Email" text="hello@imamsec.lol" />
      </Styles>
    </LayoutStyle>
  );
}
