import jwt from "jsonwebtoken";
import "dotenv/config";
import { userModel } from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "f6Z!32cJeQBJj7^YJ&7J";

//{
//    "email": "fernando@pepe.net",
//    "password": "pass"
//}

export const authService = {
  async login(email, password) {
    try {
      const user = await userModel.getUserByEmail(email);

      if (!user) {
        throw new Error("Credenciales inválidas");
      }

      if (user.password !== password) {
        throw new Error("Credenciales inválidas");
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return {
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      };
    } catch (error) {
      throw error;
    }
  },

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new Error("Token inválido o expirado");
    }
  },
};
