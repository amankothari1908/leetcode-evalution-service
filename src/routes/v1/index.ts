import express, { Router } from "express";
import pingCheck from "../../controllers/ping.controller";
import submissionRouter from "./submission.route";

const v1Router: Router = express.Router();

v1Router.use("/submissions", submissionRouter);
v1Router.get("/ping", pingCheck);

export default v1Router;
