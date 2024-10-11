import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapSelector = ({ onLocationSelect, onClose }) => {
  const [markerPosition, setMarkerPosition] = useState(center);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng.toJSON();
    setMarkerPosition({ lat, lng });
  };

  const handleSelectLocation = () => {
    onLocationSelect(markerPosition);
    onClose();
  };

  return (
    <LoadScript googleMapsApiKey="AlzaSyvdkGek4dAqwIY8r2uZH7UsVxe8mXWXv1Z">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={10}
        onClick={handleMapClick}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
      <button onClick={handleSelectLocation} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Select Location
      </button>
    </LoadScript>
  );
};

export default MapSelector;
