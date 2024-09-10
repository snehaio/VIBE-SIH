import { body, validationResult } from "express-validator"
import { Request, Response , NextFunction } from "express";

const userStringValues = ["mood", "company", "startDate", "endDate",]

export const userMoodValidationRules =()=> {
  return [
    body(userStringValues).isString().notEmpty(),
    body("Budget").isNumeric().notEmpty(),
    body("roundTrip").isBoolean()
  ]
}

export const validate = (req : Request, res : Response, next : NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({
    errors: errors,
  });
};
