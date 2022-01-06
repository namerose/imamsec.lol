import styled, { css } from "styled-components";
import { SlideLeft } from "../../styles/keyframes/slide";
import SkillsDevOps from "../molecules/SkillsDevOps";
import SkillsLanguage from "../molecules/SkillsLanguage";
import SkillsBackEnd from "../molecules/SkillsBackEnd";
import SkillsFrontEnd from "../molecules/SkillsFrontEnd";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div + div {
    margin-top: 50px;
  }

  @media screen and (max-width: 700px) {
    & > div + div {
      margin-top: 30px;
    }
  }
`;

const ViewAnimation = styled.div`
  animation: 0.25s ease-in-out 0s ${SlideLeft};
  ${({ delayTime }: { delayTime: number }) =>
    css`
      animation-delay: ${delayTime}s;
    `}
  animation-fill-mode: forwards;
  opacity: 0;
`;

export default function Skills() {
  return (
    <Styles>
      <ViewAnimation delayTime={0.2}>
        <SkillsLanguage />
      </ViewAnimation>
      <ViewAnimation delayTime={0.4}>
        <SkillsFrontEnd />
      </ViewAnimation>
      <ViewAnimation delayTime={0.6}>
        <SkillsBackEnd />
      </ViewAnimation>
      <ViewAnimation delayTime={0.8}>
        <SkillsDevOps />
      </ViewAnimation>
    </Styles>
  );
}
