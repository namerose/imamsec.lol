import WelcomeTxtAndProfilePhoto from "../organisms/WelcomeTxtAndProfilePhoto";

export default function TmplWelcome({ mQuery }: { mQuery: boolean }) {
  return <WelcomeTxtAndProfilePhoto mQuery={mQuery} />;
}
