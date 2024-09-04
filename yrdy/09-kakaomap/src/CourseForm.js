import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseMapComponent from "./CourseMapComponent";

const CourseForm = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [days, setDays] = useState([{ places: [""], dayMemo: "" }]);

  const [postType, setPostType] = useState("");

  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(null);
  const [savedPlaces, setSavedPlaces] = useState([]);

  const [isSelectPlace, setIsSelectPlace] = useState(false);

  useEffect(() => {}, []);
  const handleSubmit = () => {
    const formData = {
      title,
      country,
      city,
      tags,
      days: days.map((day) => ({
        ...day,
        places: day.places.map((place) => ({
          ...place,
          position: {
            latitude: place.position.Ma,
            longitude: place.position.La,
          },
        })),
      })),
    };

    console.log(formData);

    axios
      .post("/api/v1/posts", formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const test1 = () => {
    console.log(days);
  };

  const handleTagInput = (e) => {
    const value = e.target.value;
    setTagInput(value);

    if (value.endsWith(" ") && value.trim() !== "") {
      const newTag = value.trim();
      if (newTag !== "#" && newTag.startsWith("#") && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove) => setTags(tags.filter((tag) => tag !== tagToRemove));

  const addDay = () => setDays([...days, { places: [""], dayMemo: "" }]);

  const removeDay = (dayIndex) => {
    if (days.length > 1) {
      setDays(days.filter((_, index) => index !== dayIndex));
    }
  };

  const addPlace = (dayIndex) => {
    const newDays = [...days];
    newDays[dayIndex].places.push("");
    setDays(newDays);
  };

  const removePlace = (dayIndex, placeIndex) => {
    const newDays = [...days];
    newDays[dayIndex].places.splice(placeIndex, 1);
    setDays(newDays);
  };

  const handlePlaceSelection = (dayIndex, placeIndex) => {
    setSelectedDayIndex(dayIndex);
    setSelectedPlaceIndex(placeIndex);
    setIsSelectPlace(true);
  };

  const handleSavePlace = (place) => {
    if (place && isSelectPlace) {
      const newDays = [...days];
      newDays[place.dayIndex].places[place.placeIndex] = place;
      setDays(newDays);
      setSavedPlaces([...savedPlaces, place]);
      setIsSelectPlace(false);
    }
  };

  const handlePlaceMemoChange = (dayIndex, placeIndex, memo) => {
    const newDays = [...days];
    newDays[dayIndex].places[placeIndex] = {
      ...newDays[dayIndex].places[placeIndex],
      placeMemo: memo,
    };
    setDays(newDays);
  };

  const handleDayMemoChange = (dayIndex, memo) => {
    const newDays = [...days];
    newDays[dayIndex].dayMemo = memo;
    setDays(newDays);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Travel course writing form */}
      <div className="flex flex-col w-1/2 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold mb-4">여행 코스 글쓰기</h1>
          <button
            onClick={test1}
            className="text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
            print days
          </button>
          <button
            className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}>
            작성 완료
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-semibold">
              제목
            </label>
            <input
              className="border p-2 w-full"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country" className="block font-semibold">
              여행할 나라
            </label>
            <input
              className="border p-2 w-full"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city" className="block font-semibold">
              여행할 도시
            </label>
            <input className="border p-2 w-full" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label htmlFor="tags" className="block font-semibold">
              태그
            </label>
            <input
              id="tags"
              value={tagInput}
              onChange={handleTagInput}
              placeholder="#태그 입력 후 스페이스바"
              className="border p-2 w-full"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center">
                  {tag}
                  <button className="ml-1 p-0 h-4 w-4 text-red-500" onClick={() => removeTag(tag)}>
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Travel plan */}
        <div className="space-y-6 mt-6">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="border p-4 rounded-lg bg-white shadow">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Day {dayIndex + 1}</h2>
                <button
                  className={`text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ${
                    days.length === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => removeDay(dayIndex)}
                  disabled={days.length === 1}>
                  Day 삭제
                </button>
              </div>
              <div className="mb-4">
                <label htmlFor={`dayMemo-${dayIndex}`} className="block font-semibold">
                  Day Memo
                </label>
                <input
                  className="border p-2 w-full"
                  type="text"
                  id={`dayMemo-${dayIndex}`}
                  value={day.dayMemo || ""}
                  onChange={(e) => handleDayMemoChange(dayIndex, e.target.value)}
                />
              </div>
              {day.places.map((place, placeIndex) => (
                <div key={placeIndex}>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-20">{placeIndex + 1}번 장소</span>
                    <button
                      type="button"
                      className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                      onClick={() => handlePlaceSelection(dayIndex, placeIndex)}>
                      장소 선택
                    </button>
                    <input value={place.place_name || ""} className="flex-grow border p-2" disabled />
                    <button
                      className={`text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ${
                        day.places.length === 1 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() => removePlace(dayIndex, placeIndex)}
                      disabled={day.places.length === 1}>
                      삭제
                    </button>
                  </div>
                  <div className="mb-2">
                    {postType === "" && (
                      <>
                        <label htmlFor="inputImages" className="text-sm">
                          이미지 추가
                        </label>

                        <input type="file" name="inputImages" id="inputImages" />
                      </>
                    )}
                    <label htmlFor={`placeMemo-${dayIndex}-${placeIndex}`} className="text-sm">
                      장소 메모
                    </label>
                    <input
                      className="flex-grow border p-2 w-full"
                      type="text"
                      id={`placeMemo-${dayIndex}-${placeIndex}`}
                      value={place.placeMemo || ""}
                      onChange={(e) => handlePlaceMemoChange(dayIndex, placeIndex, e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={() => addPlace(dayIndex)}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded">
                장소 추가
              </button>
            </div>
          ))}
          <button onClick={addDay} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded">
            Day 추가
          </button>
        </div>
      </div>
      <div>
        {isSelectPlace && (
          <div className="flex text-xl text-blue-600 font-bold bg-green-200 justify-center my-3">
            Day {selectedDayIndex + 1} : {selectedPlaceIndex + 1}번 장소 선택 중
          </div>
        )}
        <CourseMapComponent
          onSave={handleSavePlace}
          selectedDayIndex={selectedDayIndex}
          selectedPlaceIndex={selectedPlaceIndex}
          isSelectPlace={isSelectPlace}
        />
      </div>
    </div>
  );
};

export default CourseForm;
