import { Marker, Popup, Circle } from "react-leaflet";
import useClickHandler from "../../hooks/useClickHandler";
import { LatLng } from "#types";

const RADIUS = 5000; // 5 km en metros

const ClickHandler: React.FC<{ onPointSelected: (coordinates: LatLng) => void }> = ({ onPointSelected }) => {
  const selectedPoint = useClickHandler(onPointSelected);

  return (
    <>
      {selectedPoint && (
        <>
          <Marker position={[selectedPoint.lat, selectedPoint.lng]}>
            <Popup>Punto seleccionado: ({selectedPoint.lat.toFixed(4)}, {selectedPoint.lng.toFixed(4)})</Popup>
          </Marker>
          <Circle center={[selectedPoint.lat, selectedPoint.lng]} radius={RADIUS} color="blue" />
        </>
      )}
    </>
  );
};

export default ClickHandler;