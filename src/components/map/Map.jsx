import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
    const position = [28.1235, -15.4363]; // Las Palmas de Gran Canaria

    return (
        <div className="map-container">
            <MapContainer center={position} zoom={10} scrollWheelZoom={false} className="leaflet-map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Las Palmas de Gran Canaria <br /> WRC 2026 Headquarters.
                    </Popup>
                </Marker>
                <Marker position={[27.9956, -15.4190]}>
                    <Popup>
                        Telde - Timed Stage
                    </Popup>
                </Marker>
                <Marker position={[27.9976, -15.6158]}>
                    <Popup>
                        Tejeda - Mountain Zone
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
