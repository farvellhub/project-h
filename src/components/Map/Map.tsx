import { MapContainer, TileLayer } from "react-leaflet";
import ClickHandler from "./ClickHandler";
import "leaflet/dist/leaflet.css";
import { LatLng } from "#types";

interface MapProps {
  onPointSelected: (coordinates: LatLng) => void;
}

const defaultCenter: LatLng = { lat: 39.5715575945167, lng: 2.650794982910156 }; // Palma de Mallorca

const Map: React.FC<MapProps> = ({ onPointSelected }) => {
  return (
    <div className="w-full h-[500px] mt-8">
      <MapContainer center={[defaultCenter.lat, defaultCenter.lng]} zoom={12} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler onPointSelected={onPointSelected} />
      </MapContainer>
    </div>
  );
};

export default Map;

