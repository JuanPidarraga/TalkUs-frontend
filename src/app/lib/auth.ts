import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const loginAndGetToken = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken(); // 🔥 Obtener el token
    return token;
  } catch (error) {
    console.error("Error al obtener el token:", error);
    throw error;
  }
};
