import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase.js";

const PRODUCTS_COLLECTION = "products";

export const productModel = {
  // Obtener todos los productos
  async getAllProducts() {
    try {
      const productsCollection = collection(db, PRODUCTS_COLLECTION);
      const snapshot = await getDocs(productsCollection);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error obteniendo productos:", error);
      throw error;
    }
  },

  // Obtener un producto por ID
  async getProductById(id) {
    try {
      const productDoc = doc(db, PRODUCTS_COLLECTION, id);
      const productSnapshot = await getDoc(productDoc);
      
      if (!productSnapshot.exists()) {
        return null;
      }
      
      return {
        id: productSnapshot.id,
        ...productSnapshot.data(),
      };
    } catch (error) {
      console.error("Error obteniendo producto por ID:", error);
      throw error;
    }
  },

  // Crear un nuevo producto
  async createProduct(productData) {
    try {
      const productsCollection = collection(db, PRODUCTS_COLLECTION);
      const docRef = await addDoc(productsCollection, {
        ...productData,
        createdAt: new Date().toISOString(),
      });
      return {
        id: docRef.id,
        ...productData,
        createdAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error creando producto:", error);
      throw error;
    }
  },

  // Eliminar un producto
  async deleteProduct(id) {
    try {
      const productDoc = doc(db, PRODUCTS_COLLECTION, id);
      await deleteDoc(productDoc);
      return true;
    } catch (error) {
      console.error("Error eliminando producto:", error);
      throw error;
    }
  },
};
