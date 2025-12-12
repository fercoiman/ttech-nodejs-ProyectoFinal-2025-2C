import express from "express";
import cors from "cors";
import "dotenv/config";
import dotenv from "dotenv";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { authenticateToken } from "./src/middlewares/auth.middleware.js";

dotenv.config(".env");
const app = express();
const LOCAL_PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());
//app.use(authenticateToken);

//app.use("/api", authenticateToken, productsRouter);
// Rutas
app.get("/", (req, res) => {
  res.json({ message: "Productos API REST!" });
});

app.use("/api", productsRouter);
app.use("/auth", authRouter);

// Middleware para manejar rutas no definidas (404)
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    message: `La ruta ${req.method} ${req.path} no existe`,
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error("Error no manejado:", err);
  res.status(500).json({
    error: "Error interno del servidor",
    message: err.message,
  });
});

app.listen(LOCAL_PORT, () => {
  console.log(`Servidor Express en http://localhost:${LOCAL_PORT}`);
});
