import { useState, useEffect } from 'react';
import './Contact.css';

import Modal from '../../components/modal/Modal';
import firebaseService from '../../services/firebase.service';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messagesList, setMessagesList] = useState([]);

    const fetchMessages = async () => {
        try {
            const snapshot = await firebaseService.getAllContactos();
            if (snapshot.exists()) {
                const data = snapshot.val();

                // turn the object into an array to map it later
                const messagesArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));

                // show newest messages first
                setMessagesList(messagesArray.reverse());
            } else {
                setMessagesList([]); // no data found
            }
        } catch (error) {
            console.error("Error al obtener los mensajes:", error);
        }
    };

    // fetch messages when component loads
    useEffect(() => {
        fetchMessages();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Save data to Firebase using our service
            await firebaseService.addContacto(
                formData.name,
                formData.email,
                formData.message
            );

            // update the messages list
            fetchMessages();

            // Open success modal if everything goes well
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("There was an error sending the message. Please try again.");
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form data
    };

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
                    <button type="submit" className="submit-btn">Enviar Mensaje</button>
                </form>
            </div>

            {/* User messages section */}
            <div className="messages-section">
                <h2>Mensajes de los Aficionados</h2>
                {messagesList.length === 0 ? (
                    <p className="no-messages">Aún no hay mensajes. ¡Sé el primero en apoyarnos!</p>
                ) : (
                    <div className="messages-grid">
                        {messagesList.map((msg) => (
                            <div key={msg.id} className="message-card">
                                <h3>{msg.nombre}</h3>
                                <p className="message-date">
                                    {msg.fecha ? new Date(msg.fecha).toLocaleDateString() : "Fecha desconocida"}
                                </p>
                                <p className="message-text">"{msg.mensaje}"</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="¡Mensaje Enviado!"
            >
                <p>Gracias por contactar con <strong>WRC Islas Canarias</strong>.</p>
                <p>Hemos recibido tu mensaje correctamente. Te responderemos a la mayor brevedad posible.</p>
            </Modal>
        </div>
    );
}

export default Contact;
