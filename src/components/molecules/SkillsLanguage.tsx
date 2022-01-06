import { SiJavascript, SiTypescript } from "react-icons/si";
import BgeBadge from "../atoms/badge/BgeBadge";
import TxtSkillsLanguage from "../atoms/text/TxtSkillsLanguage";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsLanguage() {
  return (
    <LayoutStyle>
      <TxtSkillsLanguage />
      <IcoLinesStyle>
        <IcoStyle>
          <BgeBadge
            icon={<SiTypescript />}
            text="TypeScript"
            bgColor="#3178C6"
            txtColor="white"
          />
          <BgeBadge
            icon={<SiJavascript />}
            text="JavaScript"
            bgColor="#F7DF1E"
            txtColor="black"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
