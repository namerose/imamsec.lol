import styled from "styled-components";
import FooterBtns from "../organisms/FooterBtns";

const Styles = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TmplFooter({
  nowSlide,
  pageChangeWork,
  dispatch,
}: FooterProps) {
  return (
    <Styles>
      <FooterBtns
        nowSlide={nowSlide}
        pageChangeWork={pageChangeWork}
        dispatch={dispatch}
      />
    </Styles>
  );
}
