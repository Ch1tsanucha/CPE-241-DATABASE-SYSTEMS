import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Seat(props) {
  const { order, status, onClick, id } = props;

  return (
    <td // Change th to td
      className={`w-8 h-8 rounded-lg cursor-pointer border-4 border-white ${
        !status ? "bg-Reserves" : "bg-black"
      } `}
      onClick={(e) => onClick(e, status, id, order)}
      data-name={`${order}`}
      status={`${status}`}
      id={`${id}${order}`}
    ></td> // Change th to td
  );
}

export default function SeatGroupStaff() {
  const handleConfirm = () => {
    Swal.fire({
      position: "top-mid",
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.reload();
    });
  };

  const [position, setPosition] = useState([]);
  const [Unposition, setUnPosition] = useState([]);

  const Clicked = (e, status, id, order) => {
    if (status) {
      let blockid = e.target.getAttribute("id");
      let blockColor = document.getElementById(`${blockid}`);
      let blockColorStatus = blockColor.getAttribute("status");
      if (blockColorStatus === "true") {
        blockColor.setAttribute("status", "false");
        blockColor.classList.remove("bg-black");
        blockColor.classList.add("bg-Chosen");
      } else {
        blockColor.setAttribute("status", "true");
        blockColor.classList.remove("bg-Chosen");
        blockColor.classList.add("bg-black");
      }
      const newPosition = `${id}${order}`; // Concatenating id with order

      // Check if newPosition is already in position array
      if (position.includes(newPosition)) {
        // If yes, remove it
        setPosition((prevPosition) =>
          prevPosition.filter((item) => item !== newPosition)
        );
      } else {
        // If not, add it
        setPosition((prevPosition) => [...prevPosition, newPosition]);
      }
    } else {
      let blockid = e.target.getAttribute("id");
      let blockColor = document.getElementById(`${blockid}`);
      let blockColorStatus = blockColor.getAttribute("status");
      if (blockColorStatus === "true") {
        blockColor.setAttribute("status", "false");
        blockColor.classList.remove("bg-black");
        blockColor.classList.add("bg-Chosen");
      } else {
        blockColor.setAttribute("status", "true");
        blockColor.classList.remove("bg-Chosen");
        blockColor.classList.add("bg-black");
      }
      const newPosition = `${id}${order}`; // Concatenating id with order

      // Check if newPosition is already in position array
      if (Unposition.includes(newPosition)) {
        // If yes, remove it
        setUnPosition((prevPosition) =>
          prevPosition.filter((item) => item !== newPosition)
        );
      } else {
        // If not, add it
        setUnPosition((prevPosition) => [...prevPosition, newPosition]);
      }
    }
    console.log("Use = ",position); 
    console.log("UnUse = ",Unposition);
  };

  useEffect(() => {}, [position]);

  const seatStatuses = [];

  // Populate seatStatuses with seat statuses
  for (let row = 0; row < 8; row++) {
    // Initialize an array for each row
    seatStatuses[row] = [];

    for (let count = 0; count < 10; count++) {
      const newSeatStatus = {
        position: count,
        status: true,
      };
      if ((row === 7 && count === 5) || (row === 7 && count === 6)) {
        newSeatStatus.status = false;
      }
      seatStatuses[row].push(newSeatStatus);
    }
  }

  const H = seatStatuses[0].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"H"}
    />
  ));
  const G = seatStatuses[1].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"G"}
    />
  ));
  const F = seatStatuses[3].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"F"}
    />
  ));

  const D = seatStatuses[4].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"D"}
    />
  ));

  const C = seatStatuses[5].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"C"}
    />
  ));

  const B = seatStatuses[6].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"B"}
    />
  ));

  const A = seatStatuses[7].map((seatStatus, index) => (
    <Seat
      key={index}
      order={index}
      status={seatStatus.status}
      onClick={Clicked}
      id={"A"}
    />
  ));

  return (
    <div>
      <div className="flex flex-col mb-10 text-black">
        <div className="flex gap-2 justify-center mb-3 items-center">
          <p className="text-xs font-bold">H</p>
          {H}
          <p className="text-xs font-bold">H</p>
        </div>
        <div className="flex gap-2 justify-center mb-10 items-center">
          <p className="text-xs font-bold">F</p>
          {F}
          <p className="text-xs font-bold">F</p>
        </div>
        <div className="flex gap-2 justify-center mb-3 items-center">
          <p className="text-xs font-bold">G</p>
          {G}
          <p className="text-xs font-bold">G</p>
        </div>
        <div className="flex gap-2 justify-center mb-3 items-center">
          <p className="text-xs font-bold">D</p>
          {D}
          <p className="text-xs font-bold">D</p>
        </div>
        <div className="flex gap-2 justify-center mb-3 items-center">
          <p className="text-xs font-bold">C</p>
          {C}
          <p className="text-xs font-bold">C</p>
        </div>
        <div className="flex gap-2 justify-center mb-3 items-center">
          <p className="text-xs font-bold">B</p>
          {B}
          <p className="text-xs font-bold">B</p>
        </div>
        <div className="flex gap-2 justify-center mb-3 items-center">
          <p className="text-xs font-bold">A</p>
          {A}
          <p className="text-xs font-bold">A</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 justify-center mb-10 w-full">
        <div className="grid grid-cols-2"
        style={{ gridTemplateColumns: "1.5fr 2fr" }}>
          <div className="flex justify-end">
            <h3 className="font-bold text-black mr-5">SEATING</h3>
          </div>
          <div className="border-2 border-black mr-2 bg-white h-8 w-2/5 rounded-lg flex items-center px-6 ">
            <p className="text-black ">{position.join(",")}</p>
          </div>
        </div>
        <div className="grid grid-cols-2"
        style={{ gridTemplateColumns: "1.5fr 2fr" }}>
        <div className="flex justify-end">
          <h3 className="font-bold text-black mr-5">UN SEATING</h3>
          </div>
          <div className="border-2 border-black mr-2 bg-white h-8 w-2/5 rounded-lg flex items-center px-6">
            <p className="text-black ">{Unposition.join(",")}</p>
          </div>
        </div>
        <div className="flex justify-center">
        <button
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-2/5 "
          onClick={handleConfirm}
        >
          Confirm
        </button>
        </div>

      </div>
    </div>
  );
}
