import { Job } from "bullmq";
import { IJob } from "../types/bullMqJobDefinition";

class SampleJob implements IJob {
  name: string;
  payload: Record<string, unknown> | undefined;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  handler = () => {
    console.log("han lder is wokring");
  };

  failed = (job?: Job) => {
    console.log("job failed");
    if (job) {
      console.log(job.id);
    }
  };
}

export default SampleJob;
