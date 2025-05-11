import express, { Router } from "express";
import { addSubmission } from "../../controllers/submission.controller";
import { createSubmissionZodSchema } from "../../dtos/createSubmission.dto";
import { validate } from "../../validators/validate.validator";

const submissionRouter = express.Router();

submissionRouter.post(
  "/",
  validate(createSubmissionZodSchema) as any,
  addSubmission
);

export default submissionRouter;
