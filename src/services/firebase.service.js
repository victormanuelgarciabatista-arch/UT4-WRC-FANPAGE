import { db } from "../../firebase";
import { ref, push, get, update, remove } from "firebase/database";

// Reference to the 'contactos' collection in Firebase
const dbRef = ref(db, "/contactos");

// Fetch all contact messages
const getAllContactos = () => {
  return get(dbRef);
}

// Add a new contact message
const addContacto = (name, email, message) => {
  const newContact = {
    nombre: name,
    correo: email,
    mensaje: message,
    fecha: new Date().toISOString()
  };
  return push(dbRef, newContact);
}

// Update an existing contact message
const updateContacto = (id, data) => {
  const itemRef = ref(db, "/contactos/" + id);
  return update(itemRef, data);
}

// Delete a contact message
const deleteContacto = (id) => {
  const itemRef = ref(db, "/contactos/" + id);
  return remove(itemRef);
}

const firebaseService = {
  getAllContactos: getAllContactos,
  addContacto: addContacto,
  updateContacto: updateContacto,
  deleteContacto: deleteContacto
};

export default firebaseService;