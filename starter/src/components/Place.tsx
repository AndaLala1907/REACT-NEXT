import React from 'react';

interface PlaceProps {
  id: string;
  place: string;
  desc: string;
  img: string;
}

const Place: React.FC<PlaceProps> = ({ place, desc, img }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '100%', 
        overflow: 'hidden',
      }}
    >
      <img
        src={img}
        alt={place}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
          transition: 'transform 0.3s ease', 
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, .5)', 
          transition: 'background-color 0.3s ease', 

        }}
        className="overlay"
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 2, 
        }}
      >
        <h1 style={{ margin: '0', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 'bold' }}>
          {place}
        </h1>
        <p
          style={{
            margin: '20px 0 0', 
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Place;
