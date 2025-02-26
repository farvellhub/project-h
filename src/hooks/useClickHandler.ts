import { LatLng } from "#types";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";

function useClickHandler(onPointSelected: (coordinates: LatLng) => void ) {
    const [selectedPoint, setSelectedPoint] = useState<LatLng | null>(null);
    
      useMapEvents({
        click(e) {
          const newPoint = { lat: e.latlng.lat, lng: e.latlng.lng };
          setSelectedPoint(newPoint);
          onPointSelected(newPoint);
        },
      });

      return selectedPoint;
}

export default useClickHandler;