// We import the map components from react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';

// Fix to load default icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// This is the main map component
function Map() {
    const position = [28.1235, -15.4363]; // Center of Las Palmas

    return (
        // Here we return the map view
        <div className="map-container">
            <MapContainer center={position} zoom={10} scrollWheelZoom={false} className="leaflet-map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Las Palmas de Gran Canaria <br /> Sede Principal WRC 2026.
                    </Popup>
                </Marker>
                <Marker position={[27.9956, -15.4190]}>
                    <Popup>
                        Telde - Tramo Cronometrado
                    </Popup>
                </Marker>
                <Marker position={[27.9976, -15.6158]}>
                    <Popup>
                        Tejeda - Zona de Montaña
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
