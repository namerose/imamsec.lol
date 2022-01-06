import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-family: NanumSquareB;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export default function TxtWorksCatchPhrase({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
