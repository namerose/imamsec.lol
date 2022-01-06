import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
  width: 470px;
  @media screen and (max-width: 700px) {
    width: 250px;
  }
`;

export const IcoLinesStyle = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const IcoStyle = styled.div`
  display: flex;
  margin-top: 20px;
  & > div {
    margin-right: 10px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 10px;
    & > div {
      margin-right: 5px;
    }
  }
`;
