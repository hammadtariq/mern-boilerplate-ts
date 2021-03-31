import { check } from "express-validator";

import validate from "../middleware/validate";

const sumValidation = [
  check("num1", "Number 1 is required")
    .custom(value => {
      return typeof value === "number";
    })
    .withMessage("Integer required"),
  check("num2", "Number 2 is required")
    .custom(value => {
      return typeof value === "number";
    })
    .withMessage("Integer required"),
  validate,
];

export { sumValidation };
