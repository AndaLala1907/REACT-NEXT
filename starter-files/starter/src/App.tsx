import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { fetchBikes } from "./api";
import { Bike } from "./types/Bike";
import "./styles/index.css";

const App: React.FC = () => {
  const [bikeData, setBikeData] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBikes();
        setBikeData(data);
        setFilteredBikes(data); // Initial filter state is set to the full data
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="sidebar"></div>
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <Filters bikes={bikeData} onFilter={setFilteredBikes} />
          <div className="card-container">
            {filteredBikes.map((bike) => (
              <Card key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
