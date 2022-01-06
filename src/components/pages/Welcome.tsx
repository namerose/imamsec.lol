import { useSampleState } from "../context/pageContext";
import TmplWelcome from "../templates/TmplWelcome";
import PageStyle from "./PageStyle";

export default function Welcome() {
  const { mQuery } = useSampleState();

  return (
    <PageStyle>
      <TmplWelcome mQuery={mQuery} />
    </PageStyle>
  );
}
