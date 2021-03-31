// Helpers
import { Response } from "../helpers";
import { ISum } from "../interfaces/Calculate";

//Sum
const sum = async (params: ISum) => {
  const { num1, num2 } = params;
  let sum = num1 + num2;
  return new Response(200, { sum });
};

export { sum };
