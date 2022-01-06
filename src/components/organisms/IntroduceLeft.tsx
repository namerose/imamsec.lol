import TxtIntroduceMsg2 from "../atoms/text/TxtIntroduceMsg2";
import IntroduceProfile from "../molecules/IntroduceProfile";

export default function IntroduceLeft() {
  return (
    <div>
      <IntroduceProfile />
      <TxtIntroduceMsg2 />
    </div>
  );
}
