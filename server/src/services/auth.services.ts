import { Response } from "express";
import { LoginReqBody, SignupReqBody } from "../types/user.types";

interface ValitadeSignUpReqBody {
  type: "Signup";
  reqBody: SignupReqBody;
  res: Response;
}

interface ValidateLoginReqBody {
  type: "Login";
  reqBody: LoginReqBody;
  res: Response;
}

type ValidateReqBody = ValitadeSignUpReqBody | ValidateLoginReqBody;

export const valitadeReqBody = (data: ValidateReqBody) => {
  if (data.type == "Signup") {
    const { name, email, password } = data.reqBody;
    if (!name || !email || !password) {
      return data.res.status(400).json({
        message: "All fields are required",
      });
    }
  } else {
    const { email, password } = data.reqBody;

    if (!email || !password) {
      return data.res.status(400).json({
        message: "All fields are required",
      });
    }
  }
};
