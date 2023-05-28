import { SecaoIndex1 } from "../../components/SecaoIndex1/SecaoIndex1";
import { Partnerships } from "../../components/Partnerships/Partnerships";
import { SecaoIndex2 } from "../../components/SecaoIndex2/SecaoIndex2";
import { Tape } from "../../components/Tape/Tape";

import { SecaoIndex5 } from "../../components/SecaoIndex5/SecaoIndex5";
import { FinishedJobs } from "../../components/FinishedJobs/FinishedJobs";
import { SecaoIndex3 } from "../../components/SecaoIndex3/SecaoIndex3";

export function LandingPage() {
  return (
    <>
      <SecaoIndex1 />
      <Partnerships />
      <SecaoIndex2 />
      <Tape />
      <SecaoIndex3 />
      {/* <FinishedJobs />
      <SecaoIndex5 /> */}
    </>
  );
}
