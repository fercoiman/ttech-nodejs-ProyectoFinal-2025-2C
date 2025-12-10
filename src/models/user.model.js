import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase.js";

const USERS_COLLECTION = "users";

export const userModel = {
  // Buscar usuario por email
  async getUserByEmail(email) {
    try {
      const usersCollection = collection(db, USERS_COLLECTION);
      const q = query(usersCollection, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return null;
      }
      
      const userDoc = querySnapshot.docs[0];
      return {
        id: userDoc.id,
        ...userDoc.data(),
      };
    } catch (error) {
      console.error("Error obteniendo usuario por email:", error);
      throw error;
    }
  },

  // Buscar usuario por ID
  async getUserById(id) {
    try {
      const userDoc = doc(db, USERS_COLLECTION, id);
      const userSnapshot = await getDoc(userDoc);
      
      if (!userSnapshot.exists()) {
        return null;
      }
      
      return {
        id: userSnapshot.id,
        ...userSnapshot.data(),
      };
    } catch (error) {
      console.error("Error obteniendo usuario por ID:", error);
      throw error;
    }
  },
};

