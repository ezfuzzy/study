import React from "react";
import CourseForm from "./CourseForm";

const App = () => {
  // const [savedPlaces, setSavedPlaces] = useState([]);
  // const [map, setMap] = useState(null);

  // const handleSavePlace = (place) => {
  //   setSavedPlaces([...savedPlaces, place]);
  // };

  // const handleMapLoad = (mapInstance) => {
  //   setMap(mapInstance);
  // };

  return (
    <div>
      <CourseForm />
      {/* <MapComponent onSave={handleSavePlace} onLoad={handleMapLoad} /> */}
    </div>
  );
};

export default App;
