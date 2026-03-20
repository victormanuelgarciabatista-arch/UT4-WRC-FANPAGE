import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import firebaseService from '../../services/firebase.service';
import './Admin.css';

const Admin = () => {
    const { currentUser } = useAuth();
    const [cars, setCars] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '', image: '' });
    const [editingId, setEditingId] = useState(null);

    const fetchCars = async () => {
        const snapshot = await firebaseService.getAllCars();
        if (snapshot.exists()) {
            const data = snapshot.val();
            const carsArray = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            setCars(carsArray.reverse());
        } else {
            setCars([]);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await firebaseService.updateCar(editingId, formData);
            } else {
                await firebaseService.addCar(formData.title, formData.description, formData.image);
            }
            setFormData({ title: '', description: '', image: '' });
            setEditingId(null);
            fetchCars();
        } catch (error) {
            console.error("Error guardando coche", error);
        }
    };

    const handleEdit = (car) => {
        setFormData({ title: car.title, description: car.description, image: car.image });
        setEditingId(car.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Seguro que quieres borrar este coche?")) {
            await firebaseService.deleteCar(id);
            fetchCars();
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h2>Panel de Control (Admin)</h2>
                <div className="user-controls">
                    <span>Sesión iniciada como: <strong>{currentUser.email}</strong></span>
                    <button onClick={() => signOut(auth)} className="logout-btn">Cerrar Sesión</button>
                </div>
            </div>

            <div className="admin-content">
                <div className="admin-form-container">
                    <h3>{editingId ? "Editar Coche en Galería" : "Añadir Nuevo Coche"}</h3>
                    <form onSubmit={handleSubmit} className="admin-form">
                        <input type="text" name="title" placeholder="Título del coche (ej. Toyota Yaris)" value={formData.title} onChange={handleChange} required />
                        <textarea name="description" placeholder="Descripción breve..." value={formData.description} onChange={handleChange} required></textarea>
                        <input type="url" name="image" placeholder="Pega una URL de internet para la imagen (https://...)" value={formData.image} onChange={handleChange} required />
                        
                        {formData.image && <img src={formData.image} alt="Vista previa" className="image-preview" />}
                        
                        <div className="form-actions">
                            <button type="submit" className="submit-btn">{editingId ? "Actualizar Coche" : "Añadir Coche"}</button>
                            {editingId && <button type="button" className="cancel-btn" onClick={() => { setEditingId(null); setFormData({ title: '', description: '', image: '' }) }}>Cancelar</button>}
                        </div>
                    </form>
                </div>

                <div className="admin-list-container">
                    <h3>Coches Actuales en Galería</h3>
                    {cars.length === 0 ? <p>No hay coches en la base de datos.</p> : (
                        <div className="cars-list">
                            {cars.map(car => (
                                <div key={car.id} className="admin-car-card">
                                    <img src={car.image} alt={car.title} className="admin-car-img" />
                                    <div className="admin-car-info">
                                        <h4>{car.title}</h4>
                                        <p>{car.description}</p>
                                        <div className="admin-actions">
                                            <button onClick={() => handleEdit(car)} className="edit-btn">Editar</button>
                                            <button onClick={() => handleDelete(car.id)} className="delete-btn">Borrar</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
