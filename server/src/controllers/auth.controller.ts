import { Request, Response } from "express";
import { LoginReqBody, SignupReqBody } from "../types/user.types";
import User from "../models/user.model";
import { valitadeReqBody } from "../services/auth.services";
import bcrypt from "bcrypt";

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

  const exists = await User.findOne({ email });

  if (!exists) return res.status(404).json({ message: "User Not found" });
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  if (await bcrypt.compare(password, exists.password)) {
    return res.status(200).json({
      message: "User Logged in Successfully",
    });
  } else {
    return res.status(400).json({
      message: "Wrong Credentials",
    });
  }
};
