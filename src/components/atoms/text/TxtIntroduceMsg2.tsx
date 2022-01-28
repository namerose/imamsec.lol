import styled from "styled-components";
import "../../../styles/font.css";
import React from "react";

const NormalTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    align-items: center;
  }
`;

function TxtIntroduceMsg1() {
  return (
    <div>
      <NormalTextStyle> Loituma - Ievan Polkka</NormalTextStyle>
    </div>
  );
}

export default React.memo(TxtIntroduceMsg1);
