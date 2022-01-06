import { SiBlockchaindotcom, SiWeb3Dotjs, SiEthereum, SiSolidity } from "react-icons/si";
import BgeBadge from "../atoms/badge/BgeBadge";
import TxtSkillsDevOps from "../atoms/text/TxtSkillsDevOps";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsDevOps() {
  return (
    <LayoutStyle>
      <TxtSkillsDevOps />
      <IcoLinesStyle>
        <IcoStyle>
          <BgeBadge
            icon={<SiBlockchaindotcom />}
            text="Blockchain"
            bgColor="#000000"
            txtColor="white"
          />
          <BgeBadge
            icon={<SiWeb3Dotjs />}
            text="Web3"
            bgColor="#339933"
            txtColor="white"
          />
          <BgeBadge
            icon={<SiSolidity />}
            text="Solidity"
            bgColor="#000000"
            txtColor="white"
          />
          <BgeBadge
            icon={<SiEthereum />}
            text="Ethereum"
            bgColor="#FFFFFF"
            txtColor="black"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
