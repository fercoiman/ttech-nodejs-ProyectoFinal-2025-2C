import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./src/routes/products.routes.js";

dotenv.config();
const app = express();
const LOCAL_PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", productsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Productos API REST!" });
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "name y price son obligatorios" });
  }

  const product = {
    id: Date.now(), // ejemplo simple
    name,
    price,
  };

  res.status(201).json({
    message: "Producto recibido",
    product,
  });
});

app.listen(LOCAL_PORT, () => {
  console.log(`Servidor Express en http://localhost:${LOCAL_PORT}`);
});
