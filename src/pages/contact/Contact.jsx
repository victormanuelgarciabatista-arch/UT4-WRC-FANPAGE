import { useState } from 'react';
import './Contact.css';

import Modal from '../../components/modal/Modal';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        // Real submission logic would go here
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form
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
