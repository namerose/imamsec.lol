import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import styled from "styled-components";
import BgeBadge from "../atoms/badge/BgeBadge";

const LinksStyle = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    margin: 0 2.5px;
  }
`;

export default function WorksReactTodoListLinks({
  workLinks,
}: {
  workLinks: WorkLinks;
}) {
  return (
    <LinksStyle>
      <BgeBadge
        icon={<AiFillGithub />}
        text="Front-End"
        bgColor="#373737"
        txtColor="white"
        onClick={workLinks.gotoFrontRepo}
      />

      <BgeBadge
        icon={<AiFillGithub />}
        text="Back-End"
        bgColor="#373737"
        txtColor="white"
        onClick={workLinks.gotoBackRepo}
      />
      <BgeBadge
        icon={<AiOutlineLink />}
        text="사용해보기"
        bgColor="#20c997"
        txtColor="white"
        onClick={workLinks.gotoWorkLink}
      />
    </LinksStyle>
  );
}
