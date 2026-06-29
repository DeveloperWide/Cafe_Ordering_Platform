import { Request, Response } from "express";
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

  const user = new User({ name, email, password });
  const svdUser = await user.save();

  return res.status(201).json({
    message: "User Created Successfully",
    user: svdUser,
  });
};

export const login = async (
  req: Request<{}, {}, LoginReqBody>,
  res: Response,
) => {
  const { email, password } = req.body;

  valitadeReqBody({ type: "Login", reqBody: req.body, res });

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User Not found" });
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Wrong Credentials",
    });
  }

  return res.status(200).json({
    message: "User Logged in Successfully",
  });
};
