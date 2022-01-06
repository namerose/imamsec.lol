import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";
import BtnHeader from "../atoms/button/BtnHeader";
import HeaderPopupEmail from "../molecules/HeaderPopupEmail";
import HeaderPopupGithubLink from "../molecules/HeaderPopupGithubLink";

const LayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 120px;

  @media screen and (max-width: 700px) {
    width: 90px;
  }
`;

const BtnsStyle = styled.div``;

export default function HeaderBtns({
  headerHover,
  headerClick,
  headerClickMobile,
  headerSetHover,
  mQuery,
  dispatch,
}: HeaderProps) {
  return (
    <LayoutStyle>
      <BtnsStyle>
        {mQuery ? (
          <BtnHeader
            onClick={headerClickMobile.githubLink}
            headerSetHover={headerSetHover}
            btnKind="githubLink"
            icon={<BsGithub />}
            mQuery={mQuery}
            dispatch={dispatch}
          />
        ) : (
          <BtnHeader
            onClick={headerClick.githubLink}
            headerSetHover={headerSetHover}
            btnKind="githubLink"
            icon={<BsGithub />}
            mQuery={mQuery}
            dispatch={dispatch}
          />
        )}
        {headerHover.githubLink && <HeaderPopupGithubLink />}
      </BtnsStyle>
      <BtnsStyle>
        {mQuery ? (
          <BtnHeader
            onClick={headerClickMobile.email}
            headerSetHover={headerSetHover}
            btnKind="email"
            icon={<AiTwotoneMail />}
            mQuery={mQuery}
            dispatch={dispatch}
          />
        ) : (
          <BtnHeader
            onClick={headerClick.email}
            headerSetHover={headerSetHover}
            btnKind="email"
            icon={<AiTwotoneMail />}
            mQuery={mQuery}
            dispatch={dispatch}
          />
        )}
        {headerHover.email && <HeaderPopupEmail />}
      </BtnsStyle>
    </LayoutStyle>
  );
}
