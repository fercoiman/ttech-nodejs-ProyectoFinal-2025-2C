import express from "express";
const productsRouter = express.Router();

import {
  getAllProducts,
  getProductByID,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

productsRouter.get("/products", (req, res) => {
  res.send("estamos de puta madre");
});

productsRouter.get("/api/products/:id", (req, res) => {
  res.send(`Producto con id ${req.params.id}`);
});

productsRouter.post("/products", (req, res) => {
  res.send("Producto Creado");
});

export default productsRouter;
