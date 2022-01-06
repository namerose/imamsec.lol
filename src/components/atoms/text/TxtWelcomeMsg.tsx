import styled from "styled-components";
import "../../../styles/font.css";
import Typist from "react-text-typist";
import React from "react";

const NormalTextStyle = styled.div`
  font-family: NanumSquareL;
  font-size: 60px;

  @media screen and (max-width: 700px) {
    font-size: 40px;
  }
`;

const StrongTextStyle = styled.div`
  font-family: NanumSquareB;
`;

function TxtWelcomeMsg() {
  return (
    <NormalTextStyle>
      <Typist
        sentences={["Dev"]}
        loop={false}
        showCursor={false}
        startDelay={300}
      />
      <br />
      <Typist
        sentences={["Paling"]}
        loop={false}
        startDelay={800}
        showCursor={false}
      />
      <Typist
        sentences={["Random"]}
        loop={false}
        startDelay={1200}
        showCursor={false}
      />
      <br />
      <StrongTextStyle>
        <Typist
          sentences={["Imam :)"]}
          loop={false}
          startDelay={1600}
          showCursor={true}
        />
      </StrongTextStyle>
    </NormalTextStyle>
  );
}

export default React.memo(TxtWelcomeMsg);
