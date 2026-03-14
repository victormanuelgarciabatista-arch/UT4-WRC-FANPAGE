import { db } from "../../firebase";
import { ref, push, get, update, remove } from "firebase/database";

const dbRef = ref(db, "/contactos");

const getAllContactos = () => {
  return get(dbRef);
}

const addContacto = (name, email, message) => {
  const newContact = {
    nombre: name,
    correo: email,
    mensaje: message,
    fecha: new Date().toISOString()
  };
  return push(dbRef, newContact);
}

const updateContacto = (id, data) => {
  const itemRef = ref(db, "/contactos/" + id);
  return update(itemRef, data);
}

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