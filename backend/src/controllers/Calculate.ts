import { Request, Response, Router } from "express";
// Services
import * as calculateService from "../services/calculateService";

// Validations
import { sumValidation } from "../validations/calculateValidations";

// Helpers
import { Response as ResponseModel } from "../helpers/Response";

class CalculateController {
  public path: string = "/api/calculate";
  public router: Router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(`${this.path}/sum`, sumValidation, this.sum);
    this.router.get(`${this.path}/sum`, this.getSum);
  }
  sum = async (req: Request, res: Response) => {
    try {
      const result = await calculateService.sum(req.body);
      return res.status(result.status).json(result.getBody());
    } catch (err) {
      console.log(err.message);
      const result = new ResponseModel(500).setMsg("Server error");
      return res.status(result.status).json(result.getBody());
    }
  };
  getSum = async (req: Request, res: Response) => {
    return res.status(200).json({});
  };
}

export default CalculateController;
