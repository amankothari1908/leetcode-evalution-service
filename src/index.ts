import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes";
import sampleQueueProducer from "./producers/sampleQueue.producer";
import SamplelWorker from "./workers/sample.worker";
import serverAdapter from "./config/bullBoard.config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use("/api", apiRouter);

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
