import React from "react";
import styled, { css } from "styled-components";
import { SlideUp, SlideDown } from "../../styles/keyframes/slide";
import { useSampleState } from "../context/pageContext";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ unmountAnimation }: { unmountAnimation: boolean }) =>
    unmountAnimation &&
    css`
      animation-name: ${SlideDown};
    `}
  animation-fill-mode: forwards;
`;

export default function PageStyle({ children }: { children: React.ReactNode }) {
  const { unmountAnimation }: { unmountAnimation: boolean } = useSampleState();

  return <Styles unmountAnimation={unmountAnimation}>{children}</Styles>;
}
