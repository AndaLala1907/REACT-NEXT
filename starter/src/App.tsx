import React from 'react';
import Banner from './components/Banner';
import DetailsBlock from './components/DetailsBlock';
import PlacesContainer from './components/PlacesContainer';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Banner />

      {/* First section of DetailsBlock */}
      <DetailsBlock 
        introText="ABOUT"
        title="Stories of Adventure"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere ratione nostrum ea obcaecati suscipiti quia magnam! Sed, eveniet vel reprehenderit tenetur minima ad aliquid velit quibusdam ea rerum aspernatur doloremque ipsum! 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere ratione nostrum ea obcaecati quia magnam!"
        imageUrl="https://picsum.photos/600/400"
      />

      {/* Section of PlacesContainer */}
      <PlacesContainer />

      {/* Second section of DetailsBlock (after PlacesContainer) */}
      <DetailsBlock 
        introText="ABOUT"
        title="Popular Adventures"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere ratione nostrum ea obcaecati suscipiti quia magnam! Sed, eveniet vel reprehenderit tenetur minima ad aliquid velit quibusdam ea rerum aspernatur doloremque ipsum! 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere ratione nostrum ea obcaecati quia magnam!"
        imageUrl="https://picsum.photos/400/400"
      />

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default App;
