import styled, { css } from "styled-components";
import "../../../styles/font.css";
import React from "react";
import { SlideUp } from "../../../styles/keyframes/slide";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: NanumSquareL;
  font-size: 35px;
  width: 375px;
  opacity: 1;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const NormalTextStyle = styled.div`
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ delayTime }: { delayTime: number }) =>
    css`
      animation-delay: ${delayTime}s;
    `}
  animation-fill-mode: forwards;
  margin-left: auto;
  margin-bottom: 10px;
  opacity: 0;

  @media screen and (max-width: 700px) {
    margin: 0 auto;
    margin-bottom: 5px;
  }
`;

const StrongTextStyle = styled(NormalTextStyle)`
  font-family: NanumSquareB;
`;

function TxtIntroduceMsg1() {
  return (
    <LayoutStyle>
      <StrongTextStyle delayTime={0.6}>건강하세요 😘</StrongTextStyle>
    </LayoutStyle>
  );
}

export default React.memo(TxtIntroduceMsg1);
