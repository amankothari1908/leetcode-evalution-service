import { Request, Response } from "express";
import { createSubmissionDto } from "../dtos/createSubmission.dto";

export function addSubmission(req: Request, res: Response) {
  const submissionDto = req.body as createSubmissionDto;

  return res.status(200).json({
    success: true,
    error: {},
    message: "successfully collected the submission",
    data: submissionDto,
  }) as any;
}
