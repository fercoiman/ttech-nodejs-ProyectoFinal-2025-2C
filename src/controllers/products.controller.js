import { productService } from "../services/product.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error en getAllProducts:", error);
    res.status(500).json({
      error: "Error al obtener los productos",
      message: error.message,
    });
  }
};

export const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error en getProductByID:", error);
    if (error.message === "Producto no encontrado") {
      res.status(404).json({
        error: "Producto no encontrado",
        message: error.message,
      });
    } else {
      res.status(500).json({
        error: "Error al obtener el producto",
        message: error.message,
      });
    }
  }
};

export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const product = await productService.createProduct(productData);
    res.status(201).json({
      message: "Producto creado exitosamente",
      product,
    });
  } catch (error) {
    console.error("Error en createProduct:", error);
    if (error.message.includes("obligatorios")) {
      res.status(400).json({
        error: "Datos inválidos",
        message: error.message,
      });
    } else {
      res.status(500).json({
        error: "Error al crear el producto",
        message: error.message,
      });
    }
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(200).json({
      message: "Producto eliminado exitosamente",
    });
  } catch (error) {
    console.error("Error en deleteProduct:", error);
    if (error.message === "Producto no encontrado") {
      res.status(404).json({
        error: "Producto no encontrado",
        message: error.message,
      });
    } else {
      res.status(500).json({
        error: "Error al eliminar el producto",
        message: error.message,
      });
    }
  }
};
