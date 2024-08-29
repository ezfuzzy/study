import React, { useEffect, useState, useRef } from "react";

const MapComponent = ({ onSave, onLoad }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);
  const [savedPlaces, setSavedPlaces] = useState([]);
  const [selectedSavedPlace, setSelectedSavedPlace] = useState(null);
  const [showOnlySavedPlaces, setShowOnlySavedPlaces] = useState(false);
  const [markers, setMarkers] = useState([]);

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

    const loadedPlaces = JSON.parse(localStorage.getItem("savedPlaces") || "[]");

    // 불러온 데이터의 position 값을 LatLng 객체로 변환
    const placesWithLatLng = loadedPlaces.map((place) => ({
      ...place,
      position: new window.kakao.maps.LatLng(place.position.Ma, place.position.La),
    }));
  
    setSavedPlaces(placesWithLatLng);
  }, []);

  useEffect(() => {
    // Save places to localStorage whenever savedPlaces changes
    localStorage.setItem("savedPlaces", JSON.stringify(savedPlaces));
  }, [savedPlaces]);

  useEffect(() => {
    // 로컬 스토리지에서 불러온 savedPlaces에 대한 마커 생성 및 지도에 표시
    if (map && savedPlaces.length > 0) {
      // Clear existing markers
      markers.forEach((marker) => marker.setMap(null));
  
      // Create markers for saved places
      const newMarkers = savedPlaces.map((place) => {
        const marker = new window.kakao.maps.Marker({
          position: place.position,
          map: map,
        });
  
        window.kakao.maps.event.addListener(marker, "click", () => {
          setSelectedSavedPlace(place);
          map.setCenter(place.position);
          map.setLevel(5);
        });
  
        return marker;
      });
  
      setMarkers(newMarkers);
    }
  }, [map, savedPlaces]);

  const handleSearch = () => {
    if (map && keyword) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setPlaces(data);
          map.setCenter(new window.kakao.maps.LatLng(data[0].y, data[0].x));
          map.setLevel(3);

          // Clear existing markers
          markers.forEach((marker) => marker.setMap(null));

          const newMarkers = data.map((place) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(place.y, place.x),
              map: map,
            });

            window.kakao.maps.event.addListener(marker, "click", () => {
              setSelectedPlace({
                id: place.id,
                name: place.place_name,
                position: new window.kakao.maps.LatLng(place.y, place.x),
                address: place.road_address_name || place.address_name,
                phone: place.phone || "정보 없음",
                category: place.category_name || "정보 없음",
              });
            });

            return marker;
          });

          setMarkers(newMarkers);
        }
      });
    }
  };

  const handleSave = () => {
    if (selectedPlace) {
      const isAlreadySaved = savedPlaces.some(place => place.id === selectedPlace.id);
      if (isAlreadySaved) {
        alert("이미 저장된 장소입니다.");
      } else {
        setSavedPlaces([...savedPlaces, selectedPlace]);
        onSave(selectedPlace);
        setSelectedPlace(null);
      }
    }
  };

  const handlePlaceClick = (place) => {
    console.log(place);
    
    setSelectedSavedPlace(place);
    map.setCenter(place.position);
    map.setLevel(5);
  };

  const handleShowSavedPlaces = () => {
    setShowOnlySavedPlaces(!showOnlySavedPlaces);

    if (!showOnlySavedPlaces) {
      // Clear existing markers
      markers.forEach((marker) => marker.setMap(null));

      // Show only saved places
      const savedMarkers = savedPlaces.map((place) => {
        return new window.kakao.maps.Marker({
          position: place.position,
          map: map,
        });
      });
      setMarkers(savedMarkers);
    } else {
      // Revert to showing all places
      handleSearch();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleDeleteSavedPlace = () => {
    
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div ref={mapRef} className="w-1/2 h-full"></div>

      <div className="w-1/6 p-4 bg-white shadow-md">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="장소를 검색하세요"
          className="w-full p-2 mb-2 border rounded"
        />
        <button onClick={handleSearch} className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          검색
        </button>

        <ul className="mt-4 space-y-2">
          {places.map((place, index) => (
            <li
              key={index}
              onClick={() => {
                map.setCenter(new window.kakao.maps.LatLng(place.y, place.x));
                map.setLevel(3);
                setSelectedPlace({
                  id: place.id,
                  name: place.place_name,
                  position: new window.kakao.maps.LatLng(place.y, place.x),
                  address: place.road_address_name || place.address_name,
                  phone: place.phone || "정보 없음",
                  category: place.category_name || "정보 없음",
                });
              }}
              className={`p-2 cursor-pointer hover:bg-gray-100 rounded ${
                selectedPlace && selectedPlace.id === place.id ? "bg-blue-100 border border-blue-500" : ""
              }`}>
              {place.place_name}
            </li>
          ))}
        </ul>
        {selectedPlace && (
          <button onClick={handleSave} className="w-full p-2 mt-2 text-white bg-green-500 rounded hover:bg-green-600">
            {`${selectedPlace.name} 저장`}
          </button>
        )}
      </div>

      <div className="w-1/6 p-4 bg-white shadow-md">
        <h2 className="mb-2 text-xl font-bold">저장된 장소 목록</h2>
        <button
          onClick={handleShowSavedPlaces}
          className="w-full p-2 mt-4 text-white bg-purple-500 rounded hover:bg-purple-600">
          {showOnlySavedPlaces ? "모든 장소 보기" : "저장한 장소만 보기"}
        </button>
        <ul className="space-y-2">
          {savedPlaces.map((place, index) => (
            <li
              key={index}
              onClick={() => handlePlaceClick(place)}
              className={`p-2 cursor-pointer hover:bg-gray-100 rounded ${
                selectedSavedPlace && selectedSavedPlace.id === place.id ? "bg-blue-100 border border-blue-500" : ""
              }`}>
              {place.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedSavedPlace && (
        <div className="w-1/6 p-4 bg-white shadow-md">
          <h3 className="mb-4 text-lg font-semibold">{selectedSavedPlace.name} 정보</h3>
          <ul className="space-y-2">
            {Object.entries(selectedSavedPlace).map(([key, value]) => (
              <li key={key} className="p-2 bg-gray-50 rounded">
                <strong className="font-medium">{key}:</strong> {value.toString()}
              </li>
            ))}
          </ul>
          <button
            onClick={handleDeleteSavedPlace}
            className="w-full p-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
