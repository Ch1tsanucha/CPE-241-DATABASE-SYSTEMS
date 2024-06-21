import React, { useState, useEffect } from "react";
import Header from "../../component/Header_staff";
import moviesData from "../../json/Movie3.json";
import Swal from "sweetalert2";

export default function Movie_Edit() {
  const [selectedMovie, setSelectedMovie] = useState("");

  const [picture, setPicture] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const [staffName, setStaffName] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [schedules, setSchedules] = useState({});
  const [movieDate, setMovieDate] = useState("");
  const [movietheatre, setMovietheatre] = useState([]);

  const handlePictureChange = (e) => setPicture(e.target.value);
  const handleTrailerChange = (e) => setTrailer(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleStaffNameChange = (e) => setStaffName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleMoviedate = (e) => setMovieDate(e.target.value);
  const handleTimeshow = (e) => setTime(e.target.value);
  const handleMovietheatre = (e) => setMovietheatre(e.target.value);

  const handleMovieChange = (e) => {
    const selectedMovieName = e.target.value;
    const selectedMovieData = moviesData[selectedMovieName];

    setSelectedMovie(selectedMovieName);

    if (selectedMovieData) {
      setPicture(selectedMovieData.mov_img || "");
      setTrailer(selectedMovieData.mov_trailer || "");
      setDescription(selectedMovieData.mov_des || "");
      setTime(selectedMovieData.time_show || "");
      setPrice(selectedMovieData.mov_price.toString() || "");
      setSchedules(selectedMovieData.schedules || {});
      setMovieDate(selectedMovieData.mov_date || "");
      setMovietheatre(Object.keys(selectedMovieData.schedules) || "");
    } else {
      setPicture(""); // Clear the picture value when no movie is selected
      setTrailer("");
      setDescription("");
      setPrice("");
      setTime("");
      setSchedules({});
      setMovieDate("");
      setMovietheatre("");
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSchedules((prevSchedules) => {
      const newSchedules = { ...prevSchedules };
      if (!newSchedules[date]) {
        newSchedules[date] = ["", "", "", ""];
      }
      return newSchedules;
    });
  };

  const handleMovietheatreChange = (e) => {
    const selectedTheatre = e.target.value;
    const theatreArray = selectedTheatre.split(",").map((item) => item.trim()); // Assuming theatres are separated by comma
    setMovietheatre(theatreArray);
  };

  const handleTimeChange = (e, date, timeIndex) => {
    const time = e.target.value;
    setSchedules((prevSchedules) => {
      const newSchedules = { ...prevSchedules };
      if (!newSchedules[date]) {
        newSchedules[date] = ["", "", "", ""];
      }
      newSchedules[date][timeIndex] = time;
      return newSchedules;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieData = {
      mov_title: selectedMovie,
      mov_img: picture,
      mov_price: parseInt(price, 10),
      mov_date: movieDate,
      mov_trailer: trailer,
      mov_des: description,
      time_show: time,
      staff_name: staffName,
      schedules: schedules,
      theatre: movietheatre,
    };

    console.log(movieData);
    // Perform any action with the movieData object, like sending it to a server
  };

  useEffect(() => {
    // Set default selected movie
    const defaultMovie = Object.keys(moviesData)[0] || "";
    handleMovieChange({ target: { value: defaultMovie } });
  }, []); // Run only once on component mount

  const theatre = Object.keys(schedules);
  const day = theatre.length > 0 ? Object.keys(schedules[theatre[0]]) : [];

  // console.log(schedules[theatre]);
  // console.log(schedules[theatre][day[0]][0]);

  const handleConfirm = () => {
    Swal.fire({
      position: "top-mid",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // window.location.reload();
    });
  };

  return (
    <div className="bg-Empty mt-20 w-full">
      <Header />
      <div className="flex flex-col items-center justify-center w-full">
        <form onSubmit={handleSubmit} className="mt-10 w-1/2 text-black">
          <div className="">
            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="title" className="font-bold">
                TITLE
              </label>
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

            <div
              className="grid grid-cols-3 mb-5 items-center"
              style={{ gridTemplateColumns: "0.5fr 2fr " }}
            >
              <label htmlFor="Picture" className="font-bold">
                PICTURE
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="Picture"
                type="text"
                placeholder="Link"
                value={picture}
                onChange={handlePictureChange}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="trailer" className="font-bold">
                MOVIE DATE
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="trailer"
                type="text"
                placeholder="Link"
                value={movieDate}
                onChange={handleMoviedate}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="trailer" className="font-bold">
                PLAY TRAILER
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="trailer"
                type="text"
                placeholder="Link"
                value={trailer}
                onChange={handleTrailerChange}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="description" className="font-bold">
                DESCRIPTION
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="description"
                type="text"
                placeholder="EDIT"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="staffName" className="font-bold">
                STAFF NAME
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="staffName"
                type="text"
                placeholder="EDIT"
                value={staffName}
                onChange={handleStaffNameChange}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="price" className="font-bold">
                PRICE
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="price"
                type="number"
                placeholder="EDIT"
                value={price}
                onChange={handlePriceChange}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="price" className="font-bold">
                TIME SHOW
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="price"
                type="number"
                placeholder="EDIT"
                value={time}
                onChange={handleTimeshow}
              />
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="price" className="font-bold">
                THEATER
              </label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="price"
                type="text" // Change this to text as you're inputting multiple theatres separated by comma
                placeholder="EDIT"
                value={movietheatre.join(", ")} // Join the array to display it as a comma-separated string
                onChange={handleMovietheatreChange}
              />
            </div>
          </div>

          {/* {day.map((dayValue, index) => (
            <div className="flex items-center mt-5" key={index}>
              <div className="grid grid-cols-2 items-center w-full">
                <div className="flex justify-end">
                  <label
                    htmlFor={`showtime${index}`}
                    className="mr-2 font-bold"
                  >
                    {theatre.length > 0 && dayValue && dayValue.length > 2
                      ? dayValue
                      : ""}
                  </label>
                  <input
                    type="date"
                    id={`showtime${index}`}
                    name={`showtime${index}`}
                    className="text-black"
                    onChange={(e) => handleDateChange(e, index)} // Pass the index to the handler
                  />
                </div>

                <div className="flex flex-col items-end">
                  {theatre.length > 0 &&
                    schedules[theatre] &&
                    schedules[theatre][dayValue] &&
                    schedules[theatre][dayValue].map((time, timeIndex) => (
                      <div key={timeIndex} className="mb-2">
                        <label
                          htmlFor={`time${index}${timeIndex}`}
                          className="mr-2 font-bold"
                        >
                          {time}
                        </label>
                        <input
                          type="time"
                          id={`time${index}${timeIndex}`}
                          name={`time${index}${timeIndex}`}
                          className="text-black"
                          onChange={(e) =>
                            handleTimeChange(e, dayValue, timeIndex)
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))} */}

{[1, 2, 3].map((index) => (
  <div className="flex items-center mt-5" key={index}>
    <div className="grid grid-cols-2 items-center w-full">
      <div className="flex justify-end">
        <label htmlFor={`showtime${index}`} className="mr-2 font-bold">
          {day[index-1]}
        </label>
        <input
          type="date"
          id={`showtime${index}`}
          name={`showtime${index}`}
          className="text-black"
          onChange={(e) => handleDateChange(e)}
        />
      </div>

      <div className="flex flex-col items-end">
        {[0, 1, 2, 3].map((timeIndex) => (
          <div key={timeIndex}>
            <label htmlFor={`time${index}${timeIndex}`} className="mr-2 font-bold">
              {time}
            </label>
            <input
              type="time"
              id={`time${index}${timeIndex}`}
              name={`time${index}${timeIndex}`}
              className="text-black font-bold"
              onChange={(e) =>
                handleTimeChange(
                  e,
                  document.getElementById(`showtime${index}`).value,
                  timeIndex
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  </div>
))}


          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-xl"
              onClick={handleConfirm}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// MovieName={selectedMovie} MovieDay={selectedDay} MovieTime={selectedTime} Theater={selectedTime}
