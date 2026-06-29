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
  console.log(svdUsers);
};

initDb();
