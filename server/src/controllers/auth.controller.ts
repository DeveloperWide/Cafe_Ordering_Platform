import { NextFunction, Request, Response } from "express";
import { LoginReqBody, SignupReqBody } from "../types/auth.types";
import User from "../models/user.model";
import { valitadeReqBody } from "../services/auth.services";
import jwt from "jsonwebtoken";
import { generateTokenAndSetCookie } from "../auth";

export const signup = async (
  req: Request<{}, {}, SignupReqBody>,
  res: Response,
) => {
  const { name, email, password, phone = undefined } = req.body;
  console.log(req.body);
  valitadeReqBody({ type: "Signup", reqBody: req.body, res });

  const existingUser = await User.findOne({ email });

  if (existingUser)
    return res.status(400).json({
      message: "User Already exists",
    });

  const user = await User.create({ name, email, password, phone });
  generateTokenAndSetCookie(user._id, res);

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

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User Not found" });
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Wrong Credentials",
    });
  }

  generateTokenAndSetCookie(user._id, res);

  return res.status(200).json({
    message: "User Logged in Successfully",
    user,
  });
};

export const getMe = async (req: Request, res: Response) => {
  const user = await User.findById(req.user);
  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "User not FOUND!" });
  }

  return res.status(200).json({
    user,
  });
};
