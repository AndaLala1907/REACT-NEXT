import React from 'react';

const Banner: React.FC = () => {
  return (
    <div
      style={{
        background: 'url(https://picsum.photos/1200/400)',  
        width: '100%',  
        height: '500px',  
        display: 'flex',  
        flexDirection: 'column',  
        alignItems: 'flex-start',  
        justifyContent: 'center',  
        color: '#fff', 
        textAlign: 'center', 
        backgroundRepeat: 'no-repeat',  
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        padding: '20px',  
        fontFamily: 'Montserrat, sans-serif',  
      }}
    >
      {/* Subtitle text */}
      <p style={{ 
        textTransform: 'uppercase',  
        fontSize: '1.2rem', 
        margin: '0 0 10px',  
        marginLeft: '80px'  
      }}>
        Summer Vacation
      </p>
      
      {/* Main heading */}
      <h1 style={{
        fontSize: '3rem',  
        margin: '0',  
        fontWeight: 'bold',  
        marginLeft: '80px'  
      }}>
        Nomad nation
      </h1>

      {/* Button with styling */}
      <button
        style={{
          padding: '10px 30px',  
          fontSize: '1rem',  
          backgroundColor: '#fff',  
          color: '#000',  
          border: 'none',  
          borderRadius: '2px',  
          cursor: 'pointer', 
          textTransform: 'uppercase',  
          fontFamily: 'Arial, sans-serif',  
          marginLeft: '80px',  
        }}
        onClick={() => alert('Read More clicked!')}  
      >
        Read More
      </button>
    </div>
  );
};

export default Banner; 
