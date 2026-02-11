import Map from '../../components/map/Map';
import GalleryItem from '../../components/gallery-item/GalleryItem';
import './Home.css';

import { useState } from 'react';

function Home() {
    const [showDescription, setShowDescription] = useState(false);

    const featuredItem = {
        title: "El Rally más espectacular",
        description: "Disfruta de la emoción del asfalto en el corazón de las Islas Canarias. El WRC llega en 2026 para hacer historia.",
        image: "/portada.jpg"
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <h1
                    onClick={() => setShowDescription(!showDescription)}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                    title="Haz click para ver más"
                >
                    WRC Islas Canarias 2026
                </h1>
                {showDescription && (
                    <p className="fade-in"> UNICA PRUEBA DEL CAMPEONATO WRC EN TERRITORIO ESPAÑOL</p>
                )}
            </section>

            <section className="featured-section">
                <h2>50º ANIVERSARIO DEL RALLY ISLAS CANARIAS</h2>
                <div className="featured-content">
                    <GalleryItem
                        image={featuredItem.image}
                        title={featuredItem.title}
                        description={featuredItem.description}
                    />
                </div>
            </section>

            <section className="map-section">
                <h2>Mapa del Evento</h2>
                <Map />
            </section>
        </div>
    );
}

export default Home;