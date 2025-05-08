import { Request, Response } from "express";

const pingCheck = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Leetcode evaluation controller is working",
  });
};

export default pingCheck;
