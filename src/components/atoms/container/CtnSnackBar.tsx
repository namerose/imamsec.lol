import React, { useState } from "react";
import styled, { css } from "styled-components";
import { SlideUp, SlideDown } from "../../../styles/keyframes/slide";

const Styles = styled.div`
  background: #363636;
  border-radius: 5px;
  padding: 10px;
  opacity: 0.5;
  position: absolute;
  bottom: 100px;
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ leave }: { leave: boolean }) =>
    leave &&
    css`
      animation-name: ${SlideDown};
    `}
  animation-fill-mode: forwards;
`;

export default function CtnSnackBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [leave, setLeave] = useState<boolean>(false);
  setTimeout(() => {
    setLeave(true);
  }, 2000);
  return <Styles leave={leave}>{children}</Styles>;
}
