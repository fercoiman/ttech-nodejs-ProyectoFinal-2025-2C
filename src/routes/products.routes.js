import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductByID,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

router.get("/api/products", (req, res) => {
  res.send("estamos de puta madre");
});

export default router;
