import React, { useEffect, useState } from 'react';
import Place from './Place';

interface PlaceData {
  id: string;
  place: string;
  desc: string;
  img: string;
}

const PlacesContainer: React.FC = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => response.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '0', 
      }}
    >
      {places.map((place) => (
        <Place key={place.id} {...place} />
      ))}
    </div>
  );
};

export default PlacesContainer;