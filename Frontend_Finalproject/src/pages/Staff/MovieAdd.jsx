import React, { useState } from "react";
import Header from "../../component/Header_staff";
import Swal from "sweetalert2";

export default function Movie_Add() {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const [staffName, setStaffName] = useState("");
  const [price, setPrice] = useState("");
  const [schedules, setSchedules] = useState({});

  const handlePictureChange = (e) => setPicture(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTrailerChange = (e) => setTrailer(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleStaffNameChange = (e) => setStaffName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

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
      mov_title:title,
      mov_img: picture,
      mov_price: parseInt(price, 10),
      mov_date: new Date().toISOString().split("T")[0],
      mov_trailer: trailer,
      mov_des: description,
      time_show: 104,
      staff_name: staffName,
      schedules: {
        date: schedules,
      },
    };

    console.log(movieData);
    // Perform any action with the movieData object, like sending it to a server
  };

  // const handleConfirm = () => {
  //   Swal.fire({
  //     position: "top-mid",
  //     icon: "success",
  //     title: "Success",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   }).then(() => {
  //     window.location.reload();
  //   });
  // };

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
              <label htmlFor="title" className="font-bold">Title</label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="title"
                type="text"
                placeholder="Edit"
                value={title}
                onChange={handleTitleChange}
              />
            </div>

            <div
              className="grid grid-cols-3 mb-5 items-center"
              style={{ gridTemplateColumns: "0.5fr 1fr 1fr" }}
            >
              <label htmlFor="Picture" className="font-bold">Picture</label>
              <input
                className="bg-white appearance-none w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="Picture"
                type="text"
                placeholder="Link"
                value={picture}
                onChange={handlePictureChange}
              />
              <div className="flex justify-end">
                <input type="file" id="myFile" name="filename" />
              </div>
            </div>

            <div
              className="grid grid-cols-2 mb-5"
              style={{ gridTemplateColumns: "0.5fr 2fr" }}
            >
              <label htmlFor="trailer" className="font-bold">PLAY TRAILER</label>
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
              <label htmlFor="description" className="font-bold">DESCRIPTION</label>
              <input
                className="bg-white appearance-none  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
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
              <label htmlFor="staffName" className="font-bold">STAFF NAME</label>
              <input
                className="bg-white appearance-none  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
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
              <label htmlFor="price" className="font-bold">Price</label>
              <input
                className="bg-white appearance-none  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-purple-500"
                id="price"
                type="number"
                placeholder="EDIT"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>

          {[1, 2, 3].map((index) => (
            <div className="flex items-center mt-5" key={index}>
              <div className="grid grid-cols-2 items-center w-full">
                <div className="flex justify-end ">
                  <label
                    htmlFor={`showtime${index}`}
                    className="mr-2 font-bold"
                  >{`SHOWTIME ${index}`}</label>
                  <input
                    type="date"
                    id={`showtime${index}`}
                    name={`showtime${index}`}
                    className="text-black "
                    onChange={(e) => handleDateChange(e)}
                  />
                </div>

                <div className="flex flex-col items-end">
                  {[0, 1, 2, 3].map((timeIndex) => (
                    <div key={timeIndex}>
                      <label
                        htmlFor={`time${index}${timeIndex}`}
                        className="mr-2 font-bold"
                      >
                        Select a time
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
              // onClick={handleConfirm}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
