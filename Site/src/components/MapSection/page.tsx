// components/MapSection/MapSection.tsx
import React from 'react';
import './MapSection.css';

const MapSection: React.FC = () => {
  return (
    <div className="map-section">
      <div className="map-container">
        <img 
          src="/imagem_mapa.png"
          alt="Mapa das estações" 
          className="map-image"
        />
      </div>
    </div>
  );
};

export default MapSection;