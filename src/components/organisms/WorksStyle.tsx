import React from "react";
import styled, { css } from "styled-components";
import { SlideUp } from "../../styles/keyframes/slide";
import CtnWorks from "../atoms/container/CtnWorks";

const Styles = styled.div`
  width: 550px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 11px 0;
  }
  @media screen and (max-width: 700px) {
    width: 80vw;
    height: 75vh;
    min-height: 470px;
    margin: 1.5vh 0;
  }
`;

const ViewAnimation = styled.div`
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ delayTime }: { delayTime: number }) =>
    css`
      animation-delay: ${delayTime}s;
    `}
  animation-fill-mode: forwards;
  opacity: 0;
`;

export default function WorksStyle({
  delayTime,
  children,
}: {
  delayTime: number;
  children: React.ReactNode;
}) {
  return (
    <ViewAnimation delayTime={delayTime}>
      <CtnWorks>
        <Styles>{children}</Styles>
      </CtnWorks>
    </ViewAnimation>
  );
}
