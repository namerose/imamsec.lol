import styled from "styled-components";
import { FadeIn } from "../../styles/keyframes/fade";
import TxtWelcomeMsg from "../atoms/text/TxtWelcomeMsg";
import WelcomeScrollHint from "../molecules/WelcomeScrollHint";

const Styles = styled.div`
  width: 405px;
  height: 320px;
  margin-bottom: 100px;

  img {
    width: 100px;
    opacity: 0;
    animation: 1s ease-in-out 0s ${FadeIn};
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 700px) {
    width: 268px;
    img {
      width: 60px;
    }
  }
`;

export default function WelcomeTxtAndProfilePhoto({
  mQuery,
}: {
  mQuery: boolean;
}) {
  return (
    <Styles>
      <TxtWelcomeMsg />
      <WelcomeScrollHint mQuery={mQuery} />
    </Styles>
  );
}
