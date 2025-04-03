import React, { useState } from "react";
import { Bike } from "../types/Bike";

interface FiltersProps {
  bikes: Bike[];
  onFilter: (filteredBikes: Bike[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ bikes, onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  const countByCategory = (
    bikes: Bike[],
    category: keyof Bike
  ): Record<string, number> =>
    bikes.reduce((counts, bike) => {
      const key = bike[category];
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);

  const genderCounts = countByCategory(bikes, "gender");
  const brandCounts = countByCategory(bikes, "brand");

  const handleFilterClick = (filterType: keyof Bike, filterValue: string) => {
    setActiveFilter(filterValue);
    const filteredBikes = bikes.filter(
      (bike) => bike[filterType] === filterValue
    );
    onFilter(filteredBikes);
  };

  const handleShowAll = () => {
    setActiveFilter("");
    onFilter(bikes);
  };

  return (
    <div className="filters">
      <h1>Bikes</h1>

      <h2>Filter by:</h2>

      {/* Show All Filter */}
      <div
        className={`show-all ${activeFilter === "" ? "active" : ""}`}
        onClick={handleShowAll}
      >
        Show all
        <div className="filter-box">{bikes.length}</div>
      </div>
      <div className="separator"></div>

      {/* Gender Filters */}
      <div className="small-title">Gender</div>
      {Object.entries(genderCounts).map(([gender, count]) => (
        <p
          key={gender}
          onClick={() => handleFilterClick("gender", gender)}
          className={activeFilter === gender ? "active" : ""}
        >
          {gender} <div className="filter-box">{count}</div>
        </p>
      ))}
      <div className="separator"></div>

      {/* Brand Filters */}
      <div className="small-title">Brand</div>
      {Object.entries(brandCounts).map(([brand, count]) => (
        <p
          key={brand}
          onClick={() => handleFilterClick("brand", brand)}
          className={activeFilter === brand ? "active" : ""}
        >
          {brand} <div className="filter-box">{count}</div>
        </p>
      ))}
    </div>
  );
};

export default Filters;
