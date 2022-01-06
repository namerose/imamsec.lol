import styled from "styled-components";
import HeaderBtns from "../organisms/HeaderBtns";

const Styles = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TmplHeader({
  headerHover,
  headerClick,
  headerClickMobile,
  headerSetHover,
  mQuery,
  dispatch,
}: HeaderProps) {
  return (
    <Styles>
      <HeaderBtns
        headerHover={headerHover}
        headerClick={headerClick}
        headerClickMobile={headerClickMobile}
        headerSetHover={headerSetHover}
        mQuery={mQuery}
        dispatch={dispatch}
      />
    </Styles>
  );
}
