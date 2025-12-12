import express from "express";
import { login } from "../controllers/auth.controller.js";

const authRouter = express.Router();

//{
//    "email": "fernando@pepe.net",
//    "password": "pass"
//}

authRouter.post("/login", login);

export default authRouter;
