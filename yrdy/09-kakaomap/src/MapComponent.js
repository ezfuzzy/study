import React, { useEffect, useState, useRef } from "react";

const MapComponent = ({ onSave, onLoad }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);
  const [savedPlaces, setSavedPlaces] = useState([]); // 저장된 장소 목록
  const [selectedSavedPlace, setSelectedSavedPlace] = useState(null); // 선택된 저장 장소 정보

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao Maps API is not loaded.");
        return;
      }

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      });
      setMap(map);
      onLoad(map);
    };

    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=de8bb4ac88880a204a617a3e3f74d387&libraries=services`;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  const handleSearch = () => {
    if (map && keyword) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setPlaces(data);
          map.setCenter(new window.kakao.maps.LatLng(data[0].y, data[0].x));
          map.setLevel(3);
          data.forEach((place) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(place.y, place.x),
            });
            marker.setMap(map);

            window.kakao.maps.event.addListener(marker, "click", () => {
              setSelectedPlace({
                id: place.id,
                name: place.place_name,
                position: new window.kakao.maps.LatLng(place.y, place.x),
                address: place.road_address_name || place.address_name,
                phone: place.phone || '정보 없음',
                category: place.category_name || '정보 없음',
              });
            });
          });
        }
      });
    }
  };

  const handleSave = () => {
    if (selectedPlace) {
      setSavedPlaces([...savedPlaces, selectedPlace]); // 저장된 장소 목록 업데이트
      onSave(selectedPlace);
      setSelectedPlace(null);
    }
  };

  const handlePlaceClick = (place) => {
    setSelectedSavedPlace(place);
    console.log(place);
    

    map.setCenter(place.position);
    map.setLevel(3);
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="장소를 검색하세요" />
      <button onClick={handleSearch}>검색</button>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
      {selectedPlace && (
        <div>
          <button onClick={handleSave}>저장</button>
        </div>
      )}
      <ul>
        {places.map((place, index) => (
          <li
            key={index}
            onClick={() => {
              map.setCenter(new window.kakao.maps.LatLng(place.y, place.x));
              map.setLevel(3);
            }}>
            {place.place_name}
          </li>
        ))}
      </ul>
      <h2>저장된 장소 목록</h2>
      <ul>
        {savedPlaces.map((place, index) => (
          <li key={index} onClick={() => handlePlaceClick(place)}>
            {place.name}
          </li>
        ))}
      </ul>
      {selectedSavedPlace && (
        <div>
          <h3>{selectedSavedPlace.name} 정보</h3>
          <ul>
            {Object.entries(selectedSavedPlace).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
