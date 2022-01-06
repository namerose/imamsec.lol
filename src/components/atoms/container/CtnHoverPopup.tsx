import React from "react";
import styled from "styled-components";
import { FadeIn } from "../../../styles/keyframes/fade";

const Styles = styled.div`
  background: #363636;
  border-radius: 5px;
  padding: 10px;
  opacity: 0.5;
  position: absolute;
  animation: 0.25s ease-in-out 0s ${FadeIn};
  animation-fill-mode: forwards;
`;

export default function CtnHoverPopup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
