import express from "express";
const authRouter = express.Router();

import { login } from "../controllers/auth.controller.js";

// POST /auth/login - recibe credenciales y devuelve Bearer token
authRouter.post("/login", login);

export default authRouter;

