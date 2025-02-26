import { useState } from "react";
import { LatLng } from "#types"; // Importa la interfaz LatLng

interface MapHook {
  selectedPoint: LatLng | null;
  handleMap: (coordinates: LatLng) => void;
}

function useMap(): MapHook {
  const [selectedPoint, setSelectedPoint] = useState<LatLng | null>(null);

  const handleMap = (coordinates: LatLng) => {
    setSelectedPoint(coordinates);
    console.log("Punto seleccionado en el mapa:", coordinates);
  };

  return {
    selectedPoint,
    handleMap,
  };
}

export default useMap;
