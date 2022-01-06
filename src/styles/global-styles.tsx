import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    font-family: NanumSquareR;
    color: #404040;
  }

  .outer {
    height: 82vh;
    min-height: 750px;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 700px) {
      min-height: 500px;
    }

    &::webkit-scrollbar {
      display: none;
    }
  }

  * {
    box-sizing: border-box;
    ::selection {
      background: #373737;
      color: white;
    }
  }
`;

export default GlobalStyle;
