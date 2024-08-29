import React, { useState } from "react";
import MapComponent from "./MapComponent";
import TheaterLocation from "./TheaterLocation";

const App = () => {
  const [savedPlaces, setSavedPlaces] = useState([]);
  const [map, setMap] = useState(null);

  const handleSavePlace = (place) => {
    setSavedPlaces([...savedPlaces, place]);
  };

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handlePlaceClick = (place) => {
    if (map) {
      map.setCenter(place.position);
      map.setLevel(3); // 줌 레벨 조정 가능
    }
  };

  return (
    <>
      <div>
        <MapComponent onSave={handleSavePlace} onLoad={handleMapLoad} />
        <ul>
          {savedPlaces.map((place, index) => (
            <li key={index} onClick={() => handlePlaceClick(place)}>
              {place.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
