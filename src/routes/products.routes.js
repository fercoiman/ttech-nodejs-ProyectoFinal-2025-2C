import express from "express";
const productsRouter = express.Router();

import {
  getAllProducts,
  getProductByID,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// GET /api/products - devuelve todos los productos
productsRouter.get("/products", getAllProducts);

// GET /api/products/:id - devuelve el producto con el ID indicado
productsRouter.get("/products/:id", getProductByID);

// POST /api/products/create - crea un nuevo producto
productsRouter.post("/products/create", createProduct);

// DELETE /api/products/:id - elimina el producto con el ID indicado
productsRouter.delete("/products/:id", deleteProduct);

export default productsRouter;
