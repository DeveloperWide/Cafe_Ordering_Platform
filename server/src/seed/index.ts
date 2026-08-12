import { connectDB } from "../config/db";
import User from "../models/user.model";
import { seedUsers } from "./users.seed";
import bcrypt from "bcrypt";

interface User {
  name: string;
  email: string;
  password: string;
}

const initDb = async () => {
  await connectDB();

  const hashUsers = await Promise.all(
    seedUsers.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, 12),
    })),
  );

  const svdUsers = await User.insertMany(hashUsers);
};

const insertAdmin = async () => {
  await connectDB();

  const admin = await User.create({
    name: "Mahesh Rana",
    email: "maheahrana9520@gmail.com",
    password: "mahesh@mahesh",
    role: "admin",
  });

  console.log(admin);
};

insertAdmin();
