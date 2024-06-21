import React, { useState, useEffect } from "react";
import Header from "../../component/Header_staff";
import SeatGroupStaff from "./SeatGroupStaff";
import moviesData from "../../json/Movie3.json";

function Day({ day, times, selectedDay, selectedTime, setSelectedDay, setSelectedTime }) {
  const isSelected = selectedDay === day;

  const handleClick = () => {
    setSelectedDay(day);

    if (!times.includes(selectedTime)) {
      setSelectedTime(times[0]); // Set to the first available time if the previously selected time is not valid
    }

    console.log(`Selected day: ${day}`);
  };

  return (
    <div
      className={`mr-5 text-black cursor-pointer`}
      onClick={handleClick}
    >
      <div className={`font-bold  border-4 mb-2 p-1 border-white`}>{day}</div>
      {times.map((time) => (
        <Time key={time} time={time} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      ))}
    </div>
  );
}


function Time({ time, selectedTime, setSelectedTime }) {
  const isSelected = selectedTime === time;

  const handleClick = () => {
    setSelectedTime(time);
    console.log(`Selected time: ${time}`);
  };

  return (
    <div
      className={`text-black border-white border-4 mb-2 p-1 cursor-pointer `}
      onClick={handleClick}
    >
      {time}
    </div>
  );
}

export default function SeatControl() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [schedules, setSchedules] = useState({});
  const [movietheatre, setMovietheatre]  =  useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  console.log(movietheatre)
  const handleMovieChange = (e) => {
    const selectedMovieName = e.target.value;
    setSelectedMovie(selectedMovieName);
    const selectedMovieData = moviesData[selectedMovieName];

    if (selectedMovieData) {
      setSchedules(selectedMovieData.schedules || {});
      setMovietheatre(Object.keys(selectedMovieData.schedules) || "");
    } else {
      setSchedules({});
      setMovietheatre("");
    }
    setSelectedDay(null);
    setSelectedTime(null);
  };

  useEffect(() => {
    // Set default selected movie
    const defaultMovie = Object.keys(moviesData)[0] || "";
    setSelectedMovie(defaultMovie);
    const selectedMovieData = moviesData[defaultMovie];
    if (selectedMovieData) {
      setSchedules(selectedMovieData.schedules || {});
    }
  }, []); // Run only once on component mount

  const theatres = Object.keys(schedules);
  const days = theatres.length > 0 ? Object.keys(schedules[theatres[0]]) : [];

  const DayBox = days.map((day) => {
    const times = schedules[theatres[0]][day];
    return (
      <Day
        key={day}
        day={day}
        times={times}
        selectedDay={selectedDay}
        selectedTime={selectedTime}
        setSelectedDay={setSelectedDay}
        setSelectedTime={setSelectedTime}
      />
    );
  });

  console.log(selectedMovie, selectedDay, selectedTime, movietheatre);

  return (
    <div className="bg-Empty mt-20 w-full flex justify-center">
      <Header />
      <div className="mt-10 w-full">
        <div className="pt-10 w-full">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 mb-5" style={{ gridTemplateColumns: "0.5fr 2fr" }}>
              <label className="text-black font-bold mr-5">Theater</label>
              <select
                id="movie"
                name="movie"
                value={selectedMovie}
                onChange={handleMovieChange}
                className="text-black"
              >
                <option value="">Select a movie</option>
                {Object.keys(moviesData).map((movie) => (
                  <option key={movie} value={movie}>
                    {movie}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            {DayBox}
          </div>
          <SeatGroupStaff MovieName={selectedMovie} MovieDay={selectedDay} MovieTime={selectedTime} Theater={movietheatre}/>
        </div>
      </div>
    </div>
  );
}
