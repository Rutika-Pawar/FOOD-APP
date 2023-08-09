import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import L from 'leaflet'; // Add this line to import L (Leaflet)

import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS

const MapComponent = () => {
  const kitchenCoordinates = useMemo(() => new LatLng(51.505, -0.09), []);
  const hotelCoordinates = useMemo(() => new LatLng(51.51, -0.1), []);

  const mapCenter = useMemo(
    () =>
      new LatLng(
        (kitchenCoordinates.lat + hotelCoordinates.lat) / 2,
        (kitchenCoordinates.lng + hotelCoordinates.lng) / 2
      ),
    [kitchenCoordinates, hotelCoordinates]
  );

  // Custom Icon for Rutika's Kitchen
  const kitchenIcon = useMemo(
    () =>
      L.icon({
        iconUrl: '/icon.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      }),
    []
  );

  // Custom Icon for Start position
  const startIcon = useMemo(
    () =>
      L.icon({
        iconUrl: '/human.png', // Icon for the start position
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      }),
    []
  );

  return (
    <div className='mt-4'>
      <MapContainer center={mapCenter} zoom={13} style={{ height: '300px', width: '100%' }}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

        <Marker position={kitchenCoordinates} icon={kitchenIcon}>
          <Popup>Here is "Rutika's Kitchen"</Popup>
        </Marker>

        {/* Marker for Start position */}
        <Marker position={hotelCoordinates} icon={startIcon}>
          <Popup>This is the start position</Popup>
        </Marker>

        {/* Route Line */}
        <RouteLine start={kitchenCoordinates} end={hotelCoordinates} />
      </MapContainer>
    </div>
  );
};

const RouteLine = ({ start, end }) => {
  const map = useMap();

  React.useEffect(() => {
    const route = L.polyline([start, end], { color: 'blue' }).addTo(map);

    // Fit the map to the bounds of the route
    map.fitBounds(route.getBounds());

    return () => {
      map.removeLayer(route);
    };
  }, [map, start, end]);

  return null;
};

export default MapComponent;
