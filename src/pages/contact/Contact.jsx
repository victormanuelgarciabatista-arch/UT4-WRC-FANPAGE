import { useState, useEffect } from 'react';
import './Contact.css';

import Modal from '../../components/modal/Modal';
import firebaseService from '../../services/firebase.service';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messagesList, setMessagesList] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [deleteModalId, setDeleteModalId] = useState(null);

    const fetchMessages = async () => {
        try {
            const snapshot = await firebaseService.getAllContactos();
            if (snapshot.exists()) {
                const data = snapshot.val();

                // Change object to array to use map()
                const messagesArray = [];
                for (const key in data) {
                    const messageObject = data[key];
                    messageObject.id = key; // We save the ID
                    messagesArray.push(messageObject);
                }

                const reversedArray = messagesArray.reverse();
                setMessagesList(reversedArray);
            } else {
                setMessagesList([]); 
            }
        } catch (error) {
            console.error("Error al obtener los mensajes:", error);
        }
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        const newFormData = { ...formData };
        newFormData[inputName] = inputValue;

        setFormData(newFormData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingId !== null) {
                const updatedData = {
                    nombre: formData.name,
                    correo: formData.email,
                    mensaje: formData.message
                };
                await firebaseService.updateContacto(editingId, updatedData);
            } else {
                await firebaseService.addContacto(
                    formData.name,
                    formData.email,
                    formData.message
                );
            }

            fetchMessages();
            setEditingId(null);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error saving message:", error);
            alert("There was an error saving the message. Please try again.");
        }
    }

    const handleEdit = (msg) => {
        let emailValue = msg.correo;
        if (!emailValue) {
            emailValue = '';
        }

        const newFormData = {
            name: msg.nombre,
            email: emailValue,
            message: msg.mensaje
        };

        setFormData(newFormData);
        setEditingId(msg.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleDeleteClick = (id) => {
        setDeleteModalId(id);
    }

    const confirmDelete = async () => {
        if (deleteModalId !== null) {
            try {
                await firebaseService.deleteContacto(deleteModalId);
                setDeleteModalId(null);
                fetchMessages(); 
            } catch (error) {
                console.error("Error deleting message:", error);
                alert("Hubo un error al eliminar el mensaje.");
            }
        }
    }

    const closeDeleteModal = () => {
        setDeleteModalId(null);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', message: '' }); 
        setEditingId(null);
    }

    return (
        <div className="contact-page">
            <h1>Contacto</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Sede del Rally</h2>
                    <p>Estadio de Gran Canaria</p>
                    <p>C. Fondos de Segura, s/n</p>
                    <p>35019 Las Palmas de Gran Canaria</p>
                    <p>Email: info@rallyislascanarias.com</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn" style={{ gridColumn: '1 / -1' }}>
                        {editingId ? 'Actualizar Mensaje' : 'Enviar Mensaje'}
                    </button>
                </form>
            </div>

            <div className="messages-section">
                <h2>Mensajes de los Aficionados</h2>

                {messagesList.length === 0 && (
                    <p className="no-messages">Aún no hay mensajes. ¡Sé el primero en apoyarnos!</p>
                )}

                {messagesList.length > 0 && (
                    <div className="messages-grid">
                        {messagesList.map((msg) => {
                            let dateString = "Fecha desconocida";
                            if (msg.fecha) {
                                const dateObj = new Date(msg.fecha);
                                dateString = dateObj.toLocaleDateString();
                            }

                            return (
                                <div key={msg.id} className="message-card">
                                    <h3>{msg.nombre}</h3>
                                    <p className="message-date">
                                        {dateString}
                                    </p>
                                    <p className="message-text">"{msg.mensaje}"</p>
                                    <div className="message-actions">
                                        <button onClick={() => handleEdit(msg)} className="edit-btn">Editar</button>
                                        <button onClick={() => handleDeleteClick(msg.id)} className="delete-btn">Eliminar</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="¡Mensaje Guardado!"
            >
                <p>Gracias por apoyar a <strong>WRC Islas Canarias</strong>.</p>
                <p>Tu mensaje se ha guardado correctamente.</p>
            </Modal>

            <Modal
                isOpen={deleteModalId !== null}
                onClose={closeDeleteModal}
                title="Eliminar Mensaje"
            >
                <p>¿Estás seguro de que quieres eliminar este mensaje?</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
                    <button className="edit-btn" onClick={closeDeleteModal}>Cancelar</button>
                    <button className="delete-btn" onClick={confirmDelete}>Sí, eliminar</button>
                </div>
            </Modal>
        </div>
    );
}

export default Contact;
