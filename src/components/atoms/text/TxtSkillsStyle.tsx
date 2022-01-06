import styled from "styled-components";

export const NormalTextStyle = styled.div`
  display: flex;
  font-size: 35px;
  font-family: NanumSquareL;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export const StrongTextStyle = styled.div`
  font-family: NanumSquareB;
`;
