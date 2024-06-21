import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import SeatGroup from "./SeatGroup";
import Show from "./Showdate";
import IMG from "../../assets/BG.svg";
import { useEffect, useState } from "react";
import movies from '../../json/Movie2.json';

export default function Info() {

  function splitTime(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return { hours: hours, minutes: minutes };
  }

  let arr = Object.keys(movies).map((movieKey) => {
    let scheduleDates = Object.keys(movies[movieKey].schedules.date);
    return {
      title: movieKey,
      details: movies[movieKey],
      dates: scheduleDates,
    };
  });

  let hoursArray = [];
  let minutesArray = [];

  arr.forEach((element) => {
    let time = splitTime(element.details.time_show);
    hoursArray.push(time.hours);
    minutesArray.push(time.minutes);
  });

  const {id} = useParams();
  let MoivePositionId = parseInt(id);
  console.log("MovieId:",MoivePositionId);
  // console.log("Movie:", arr[MoivePosition].title);
   console.log(arr[MoivePositionId].title);
  console.log("ID:", id);


  let MovieSRC = arr[MoivePositionId].details.mov_img || "https://asianwiki.com/images/7/75/April_Come_She_Will-p1.jpg";
  let MovieName = arr[MoivePositionId].title;
  let Moviedescription = arr[MoivePositionId].details.mov_des;
  const [openSeat, setOpenSeat] = useState(false)
  return (
    <div
      className="bg-cover bg-center mt-20 h-screen"
      style={{ backgroundImage: `url(${IMG})` }}
    >
      <Header />

      <div className="h-screen">

        <div class="grid grid-cols-3 h-screen px-20">
          <div class=" mt-3">
            <div className="flex flex-col items-center">
              <h3 className="mb-4 font-bold">MOVIE INFOMATION</h3>
              <img
                src={MovieSRC}
                alt="movie pic"
                className="w-1/2 rounded-xl mb-2"
              />
              <h3 className="mb-2 font-bold">{MovieName}</h3>
              <p className="mb-2">{hoursArray[MoivePositionId]} Hour {minutesArray[MoivePositionId]} Minute</p>
              <a href="https://www.youtube.com/watch?v=rgEz1AFoy7Y" target=" ">
              <button class="bg-white hover:bg-gray-400 text-black  py-2 px-4 rounded-lg mb-4">
                PLAY TRAILER
              </button>
              </a>
              

              <p className="w-8/12 text-center">
                {Moviedescription}
              </p>
            </div>
          </div>

          <div class="mt-3">
            <h3 className="mb-4 font-bold">SHOWTIMES</h3>

            <div className="flex">
              <Show  setStatus={setOpenSeat}/>
            </div>
          </div>
          {
             openSeat && <div className=" mt-3 px-8">
             <h3 className="mb-4 font-bold">SEATING STATUS</h3>
 
             
             {/* <div class="ml-5 flex justify-around">
                         <div class="border-5">a</div>
                         <div>s</div>
                         <div>d</div>
                     </div> */}
             <div class="flex justify-start mb-4">
               <div class="flex mr-20">
                 <th class="w-5 h-5 mr-2  bg-Chosen rounded"></th>
                 <p>Chosen</p>
               </div>
               <div class="flex mr-20">
                 <th class="w-5 h-5 mr-2 bg-Reserves rounded"></th>
                 <p>Reserves</p>
               </div>
               <div class="flex mr-20">
                 <th class="w-5 h-5 mr-2 bg-Empty  rounded"></th>
                 <p>Empty</p>
               </div>
 
              
             </div>
             <h3 className="font-bold mb-6">April, Come She Will</h3>
             <div class="md-10">
               <p class="flex justify-center text-xl text-Empty">Screen</p>
               <div className="flex justify-center">
               <div className="bg-Empty h-1 w-11/12 rounded"></div>
               </div>
             
               <div className="mt-5">
                 <SeatGroup />
               </div>
             </div>
           </div>
          }
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
