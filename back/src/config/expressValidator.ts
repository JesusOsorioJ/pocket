import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (req: Request, res: Response, next: NextFunction): void => {
  try {
    validationResult(req).throw();
    next();
  } catch (err: any) {
    res.status(403).json({ errors: err.array() });
  }
};
