import { db } from "../../firebase";
import { ref, push, get, update, remove } from "firebase/database";

const dbRef = ref(db, "/contactos");

const getAllContacts = () => {
  return get(dbRef);
}

const addContact = (name, email, message) => {
  const newContact = {
    name: name,
    email: email,
    message: message,
    date: new Date().toISOString()
  };
  return push(dbRef, newContact);
}

const updateContact = (id, data) => {
  const itemRef = ref(db, "/contactos/" + id);
  return update(itemRef, data);
}

const deleteContact = (id) => {
  const itemRef = ref(db, "/contactos/" + id);
  return remove(itemRef);
}

const carsRef = ref(db, "/cars");

const getAllCars = () => {
  return get(carsRef);
}

const addCar = (title, description, image) => {
  const newCar = {
    title,
    description,
    image,
    date: new Date().toISOString()
  };
  return push(carsRef, newCar);
}

const updateCar = (id, data) => {
  const itemRef = ref(db, "/cars/" + id);
  return update(itemRef, data);
}

const deleteCar = (id) => {
  const itemRef = ref(db, "/cars/" + id);
  return remove(itemRef);
}

const firebaseService = {
  getAllContacts: getAllContacts,
  addContact: addContact,
  updateContact: updateContact,
  deleteContact: deleteContact,
  getAllCars: getAllCars,
  addCar: addCar,
  updateCar: updateCar,
  deleteCar: deleteCar
};

export default firebaseService;