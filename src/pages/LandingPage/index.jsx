import { Header } from "../../components/Header/Header";
import { SecaoIndex1 } from "../../components/SecaoIndex1/SecaoIndex1";
import { Partnerships } from "../../components/Partnerships/Partnerships";
import { Footer } from "../../components/Footer/Footer";
import { SecaoIndex2 } from "../../components/SecaoIndex2/SecaoIndex2";
import { Tape } from "../../components/Tape/Tape";

export function LandingPage() {
  return (
    <>
      <SecaoIndex1 />
      <Partnerships />
      <SecaoIndex2 />
      <Tape />
    </>
  );
}
