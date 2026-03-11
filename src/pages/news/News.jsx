// News page with images that can get bigger
import { useState } from 'react';
import './News.css';

function News() {
    // State to know which image is clicked
    const [expandedImageId, setExpandedImageId] = useState(null);

    // Array of news objects
    const [newsItems] = useState([
        {
            id: 1,
            title: "El Circuito Islas Canarias, en el Rally Islas Canarias 2026",
            date: "10 Marzo 2026",
            summary: "El Circuito Islas Canarias, uno de los lugares más emblemáticos de la historia del automovilismo nacional e insular, regresa a lo grande al Rally Islas Canarias–Rally de España, como punto de partida de las bodas de oro que celebra en 2026 la cita mundialista de nuestro país. 35 años después de la última edición, el clásico trazado grancanario se reincorpora al rutómetro para formar parte por primera vez de una prueba del WRC (World Rally Championship). Un nuevo hito que albergará un tramo completamente inédito compuesto por 2,60 kilómetros cronometrados trazados sobre asfalto. Manteniendo la tradición, los vehículos tomarán la salida emparejados y se medirán en paralelo por el tramo espectáculo BP Ultimate.",
            image: "/circuito.webp",
            expandable: false
        },
        {
            id: 2,
            title: "¡El 50 Rally Islas Canarias - Rally de España ya tiene su fecha actual!",
            date: "01 Febrero 2026",
            summary: "El campeonato del mundo de rallies (Fia World Rally Championship) ha publicado de manera oficial el calendario de la temporada 2026, que estara compuesto por 14 pruebas repartidas por todo el planeta entre los meses de entero y noviembre. Entre ellas, y como quinta cita del año, figura el 50 Rally Islas Canarias que se celebrará del 23 al 26 de abril de 2026. Por segundo año consecutivo, la prueba canaria formará parte del WRC, y lo hara en una edición especialmente significativa: la numero 50. \"Ya tenemos fecha oficial para una edición tan importante como lo es la 50ª del Rally Islas Canarias. Es una cita cargada de emoción por todo lo que significa... estamos trabajando con la máxima ilusión para que esté a la altura del aniversario que celebramos\", ha declarado German Morales, promotor del evento. El 50 Rally Islas Canarias será además la segunda cita netamente de asfalto del calendario mundialista.",
            image: "/calendario.jpg",
            expandable: true
        }
    ]);

    return (
        <div className="news-page">
            <h1 className="news-title">Noticias</h1>
            
            <div className="news-list">
                {newsItems.map((news) => (
                    <article key={news.id} className="news-card">
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className={`news-image ${news.expandable ? 'news-image-clickable' : ''} ${expandedImageId === news.id ? 'news-image-expanded' : ''}`}
                            onClick={() => news.expandable && setExpandedImageId(expandedImageId === news.id ? null : news.id)}
                            title={news.expandable ? "Haz clic para ver la imagen completa" : ""}
                        />
                        <div className="news-content">
                            <span className="news-date">{news.date}</span>
                            <h2 className="news-headline">{news.title}</h2>
                            <p className="news-summary">{news.summary}</p>
                            <button className="news-read-more">Leer más</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default News;
