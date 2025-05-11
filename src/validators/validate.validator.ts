import { date, ZodSchema } from "zod";
import { createSubmissionDto } from "../dtos/createSubmission.dto";
import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.config";

export const validate =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (schema: ZodSchema<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({ ...req.body });
        next();
      } catch (error) {
        logger.error(error);
        return res.status(404).json({
          success: false,
          message: "Bad Request",
          data: {},
          error: error,
        });
      }
    };
