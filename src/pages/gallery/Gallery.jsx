import { useState } from 'react';
import GalleryItem from '../../components/gallery-item/GalleryItem';
import './Gallery.css';

function Gallery() {
    const [items] = useState([
        {
            id: 1,
            title: "Toyota Yaris Rally1",
            description: "El coche campeón del mundo, listo para los tramos de asfalto en Canarias.",
            image: "/toyota.avif"
        },
        {
            id: 2,
            title: "Hyundai i20 N Rally1",
            description: "Potencia coreana desafiando las curvas en el asfalto.",
            image: "/hyundai.avif"
        },
        {
            id: 3,
            title: "Ford Puma Rally1",
            description: "Agilidad y rendimiento en cada kilómetro del rally.",
            image: "/ford.avif"
        },

    ]);

    return (
        <div className="gallery-page">
            <h1>Galería WRC Canarias 2026</h1>
            <div className="gallery-grid">
                {items.map(item => (
                    <GalleryItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
