import { productModel } from "../models/product.model";

async function getAllProducts() {
  const products = await productModel.getAllProducts();
  return products;
}

async function getAllProductsInStock() {
  const products = await productModel.getAllProducts();
  return products.filter((product) => product.stock > 0);
}
