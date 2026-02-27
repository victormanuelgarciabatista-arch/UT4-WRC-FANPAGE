import { db } from "../../firebase";
import { ref, push, get } from "firebase/database";

// Reference to the 'contactos' collection in Firebase
const dbRef = ref(db, "/contactos");

// Fetch all contact messages
const getAllContactos = () => {
  return get(dbRef);
};

// Add a new contact message
const addContacto = (name, email, message) => {
  return push(dbRef, {
    nombre: name,
    correo: email,
    mensaje: message,
    fecha: new Date().toISOString()
  });
};

export default {
  getAllContactos,
  addContacto
};