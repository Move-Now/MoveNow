import { Header } from "../../components/Header/Header";
import { SecaoIndex1 } from "../../components/SecaoIndex1/SecaoIndex1";
import { Partnerships } from "../../components/Partnerships/Partnerships";
import { Footer } from "../../components/Footer/Footer";
import { SecaoIndex2 } from "../../components/SecaoIndex2/SecaoIndex2";
import { Tape } from "../../components/Tape/Tape";
import { SecaoIndex5 } from "../../components/SecaoIndex5/SecaoIndex5";
import { FinishedJobs } from "../../components/FinishedJobs/FinishedJobs";

export function LandingPage() {
  return (
    <>
      <SecaoIndex1 />
      <Partnerships />
      <SecaoIndex2 />
      <Tape />
      <FinishedJobs />
      <SecaoIndex5 />
    </>
  );
}
