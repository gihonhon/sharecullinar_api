import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

//* Generate Token
export const generateToken = (user) => {
  return jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: "12h" });
};

//* Hash Password
export const hashPassword = async (password) => {
  return bcrypt.hash(password, saltRounds);
};

//* CheckPassword
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
