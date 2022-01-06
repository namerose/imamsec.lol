import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

export default function TxtWorksDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
