import { Link } from "react-router-dom";

export default function Movie_card({
  x,
  Name_Movie,
  SRC_Movie,
  Movie_Hour,
  Movie_Minute,
}) {
  let MovieName = Name_Movie;
  let MovieSRC =
    SRC_Movie || "https://asianwiki.com/images/7/75/April_Come_She_Will-p1.jpg";
  let MovieHour = Movie_Hour;
  let MovieMinute = Movie_Minute;

  return (
    <div className="max-w-sm  rounded overflow-hidden">
      <Link to={`/Info/${x}`} reloadDocument>
        <div className="flex justify-center px-1 pt-5 h-[430px]">
          <img
            className="max-w-5/6 max-h-full rounded-2xl"
            src={MovieSRC}
            alt="movie-img"
          />
        </div>
      </Link>
      <div className="px-7">
        <div className="font-bold text-xl mb-2 h-1/2 flex justify-center mt-4">
          <p className="line-clamp-2 text-xl text-center"> {MovieName} </p>
        </div>
        <div className="flex justify-center text-base mt-2">
          {MovieHour} Hour {MovieMinute > 0 ? `${MovieMinute} Minute` : ""}
        </div>
      </div>
    </div>
  );
}
