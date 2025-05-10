import express from "express";
import apiRouter from "./routes";
import sampleQueueProducer from "./producers/sampleQueue.producer";
import SamplelWorker from "./workers/sample.worker";
import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import sampleQueue from "./queues/sample.queue";

const app = express();

app.use("/api", apiRouter);

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [new BullMQAdapter(sampleQueue)],
  serverAdapter,
});

app.use("/admin/queues", serverAdapter.getRouter());

app.listen(3000, () => {
  console.log("server running on port 3000");
  SamplelWorker("SampleQueue");
  sampleQueueProducer(
    "SampleJob",
    {
      name: "Aman",
    },
    2
  );
  sampleQueueProducer(
    "SampleJob",
    {
      name: "Ayush",
    },
    1
  );
});
