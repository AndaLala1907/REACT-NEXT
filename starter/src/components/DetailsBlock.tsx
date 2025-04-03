import React from 'react';

interface DetailsBlockProps {
  introText?: string; 
  title: string;
  description: string;
  imageUrl: string;
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({ introText, title, description, imageUrl }) => {
  // Splitting the description into two parts with the focus on having the last sentence as a separate paragraph
  const [firstPart, secondPart] = description.split(/(Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Facere ratione nostrum ea obcaecati quia magnam!)/);

  return (
    <section style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <div style={{ flex: 1, padding: '10px', margin: '20px 0' }}>
        {introText && (
          <p style={{ marginBottom: '15px', fontFamily: 'Arial, sans-serif', color: '#F89880', marginLeft: '80px' }}>
            {introText}
          </p>
        )}
        <h2 style={{ fontSize: '30px', marginBottom: '10px', fontWeight: 'bold', marginLeft: '80px' }}>{title}</h2>
        {/* First paragraph */}
        <p style={{ marginBottom: '10px', fontSize: '20px', lineHeight: '1.6', marginLeft: '80px' }}>
          {firstPart.trim()}
        </p>
        {/* Second paragraph */}
        <p style={{ fontSize: '20px', lineHeight: '1.6', marginLeft: '80px' }}>
          {secondPart?.trim()}
        </p>
      </div>
      {/* Round image */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '500px', height: '500px', borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default DetailsBlock;
