import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Movie_card from "./Moviecard";
import HOMEIMG from "../../assets/homebg.svg";
import movies from "../../json/Movie2.json";

export default function Home() {
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

  console.log(arr[0].title);
  console.log(arr[0].dates[0]);
  console.log(arr[0].details.mov_img);
  console.log(arr[0].details.mov_price);

  console.log(typeof arr[0].details.time_show);

  let hoursArray = [];
  let minutesArray = [];

  // Process each element in arr
  arr.forEach((element) => {
    let time = splitTime(element.details.time_show);
    hoursArray.push(time.hours);
    minutesArray.push(time.minutes);
  });

  // Output the results
  console.log(hoursArray);
  console.log(minutesArray);

  const card = [];

  for (let i = 0; i < 10; i++) {
    card.push(
      <Movie_card
        key={i}
        x={i}
        Name_Movie={arr[i].title}
        SRC_Movie={arr[i].details.mov_img}
        Movie_Hour={hoursArray[i]}
        Movie_Minute={minutesArray[i]}
      />
    );
  }

  return (
    <div
      className="w-full bg-black object-cover"
      style={{
        backgroundImage: `url(${HOMEIMG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <Header />
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-4 gap-6 my-2 mb-20 ">{card}</div>
      </div>
      <Footer />
    </div>
  );
}
