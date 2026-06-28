import { Request, response, Response } from "express";
import { LoginReqBody, SignupReqBody } from "../types/user.types";
import User from "../models/user.model";
import { valitadeReqBody } from "../services/auth.services";

export const signup = async (
  req: Request<{}, {}, SignupReqBody>,
  res: Response,
) => {
  const { name, email, password } = req.body;
  valitadeReqBody({ type: "Signup", reqBody: req.body, res });

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({
      message: "User Already exists",
    });

  const user = await User.create({ name, email, password });

  return res.status(201).json({
    message: "User Created Successfully",
    user,
  });
};

export const login = async (
  req: Request<{}, {}, LoginReqBody>,
  res: Response,
) => {
  const { email, password } = req.body;

  valitadeReqBody({ type: "Login", reqBody: req.body, res });

  const exists = await User.findOne({ email });

  if (!exists) return res.status(404).json({ message: "User Not found" });

  if (exists.password == password) {
    return res.status(200).json({
      message: "User Logged in Successfully",
    });
  }
};
