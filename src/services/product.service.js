import { productModel } from "../models/product.model.js";

export const productService = {
  async getAllProducts() {
    try {
      const products = await productModel.getAllProducts();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async getProductById(id) {
    try {
      const product = await productModel.getProductById(id);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    } catch (error) {
      throw error;
    }
  },

  async createProduct(productData) {
    try {
      // Validar datos requeridos
      if (!productData.name || !productData.price) {
        throw new Error("name y price son campos obligatorios");
      }

      const product = await productModel.createProduct(productData);
      return product;
    } catch (error) {
      throw error;
    }
  },

  async deleteProduct(id) {
    try {
      // Verificar que el producto existe
      const product = await productModel.getProductById(id);
      if (!product) {
        throw new Error("Producto no encontrado");
      }

      await productModel.deleteProduct(id);
      return true;
    } catch (error) {
      throw error;
    }
  },
};
