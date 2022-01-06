import { SiReact, SiHtml5, SiNextdotjs } from "react-icons/si";
import BgeBadge from "../atoms/badge/BgeBadge";
import TxtSkillsFrontEnd from "../atoms/text/TxtSkillsFrontEnd";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsFrontEnd() {
  return (
    <LayoutStyle>
      <TxtSkillsFrontEnd />
      <IcoLinesStyle>
        <IcoStyle>
          <BgeBadge
            icon={<SiReact />}
            text="React"
            bgColor="#61DAFB"
            txtColor="black"
          />
          <BgeBadge
            icon={<SiNextdotjs />}
            text="Next.js"
            bgColor="#000000"
            txtColor="white"
          />
        </IcoStyle>
        <IcoStyle>
        <BgeBadge
            icon={<SiHtml5 />}
            text="HTML 5"
            bgColor="#61DAFB"
            txtColor="black"
          />
          </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
