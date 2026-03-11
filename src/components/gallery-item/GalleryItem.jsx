// Component to show one single car card
import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ image, title, description }) {
  // State to show or hide the text
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="gallery-item" onClick={() => setShowDescription(!showDescription)} title="Click para ver descripción">
      <img src={image} alt={title} className="gallery-image" />
      <div className="gallery-content">
        <h3 className="gallery-title">{title} {showDescription ? '▲' : '▼'}</h3>
        {showDescription && <p className="gallery-description">{description}</p>}
      </div>
    </div>
  );
}

export default GalleryItem;
