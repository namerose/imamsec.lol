import CtnSnackBar from "../atoms/container/CtnSnackBar";
import TxtSnackBar from "../atoms/text/TxtSnackBar";

export default function SnackBar({ text }: { text: string }) {
  return (
    <CtnSnackBar>
      <TxtSnackBar text={text} />
    </CtnSnackBar>
  );
}
