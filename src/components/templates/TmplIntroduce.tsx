import styled from "styled-components";
import IntroduceLeft from "../organisms/IntroduceLeft";
import IntroduceRight from "../organisms/IntroduceRight";

const Styles = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export default function TmplIntroduce() {
  return (
    <Styles>
      <IntroduceLeft />
      <IntroduceRight />
    </Styles>
  );
}
