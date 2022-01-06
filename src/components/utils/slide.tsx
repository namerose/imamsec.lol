import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  width: 100%;
`;

export default function Slide({ children }: { children: React.ReactNode }) {
  return <Styles>{children}</Styles>;
}
