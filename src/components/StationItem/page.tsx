import React from 'react';
import './StationItem.css';

interface StationItemProps {
  lineNumber: string;
  lineColor: string;
  stationName: string;
  time: string;
  onShowRoute: () => void;
}

const StationItem = ({ 
  lineNumber,
  lineColor,
  stationName,
  time,
  onShowRoute
}: StationItemProps) => {
  return (
    <div className="station-item">
      <div className="line-indicator" style={{ backgroundColor: lineColor }}></div>

      <div className="station-content">
        <div className="line-number" style={{ backgroundColor: lineColor }}>
          {lineNumber}
        </div>

        <div className="station-details">
          <h3 className="station-name">{stationName}</h3>
          <span className="time">{time}</span>
        </div>

        <button 
          onClick={onShowRoute} 
          className="route-button"
        >
          Mostrar Trajeto
        </button>
      </div>
    </div>
  );
};

export default StationItem;