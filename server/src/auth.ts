import { Response } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const generateTokenAndSetCookie = (
  userId: Types.ObjectId,
  res: Response,
) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
