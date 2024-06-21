import movies from '../../json/Movie.json';

function Ticket({Name_Movie,Time_Show,Number}) {
let MovieName = Name_Movie;
let MovieShow = Time_Show;
  return (
    <div className={`flex items-center justify-start bg-white rounded-3xl w-11/12 ${Number < 4 ? 'h-1/2' : 'h-full'}`}>
      <img
        className="h-full w-32 rounded-2xl left-0 mr-5"
        src="https://www.housesamyan.com/assets/uploads/movie/poster_web_path/20240207235623_D1FCF4B9-4C40-45DA-BCB9-7879EB02DC42.PNG"
        alt="Movie_pic"
      />
      <ul className="w-full h-full flex flex-col justify-between py-4">
        <ul>
          <li className="text-Fontpurple text-base font-bold">{MovieShow}</li>
          <li className="text-black text-xs font-bold">{MovieName}</li>
        </ul>

        <li className="text-black text-base">1 Ticket (s)</li>
      </ul>
    </div>
  );
}
const Ticket_own = [];

let arr = Object.keys(movies).map((movieKey) => {
    let scheduleDates = Object.keys(movies[movieKey].schedules.date);
    return {
        title: movieKey,
        details: movies[movieKey],
        dates: scheduleDates
    };
});

console.log(arr[0].title);
console.log(arr[0].details.mov_img)
console.log(typeof(arr[6].title));
console.log(arr[6].dates)
// Time_Show={arr[i].details.schedules.date}

let Number = 6
for (let i = 0; i < Number; i++) {
    Ticket_own.push(<Ticket Name_Movie={arr[i].title} Time_Show={arr[i].dates} Number={Number}/>);
  }



export default function Ticket_Zone() {
  
      

  return (
    
    <div className="h-full flex justify-center mt-12 h-1/2">
      <div className="grid grid-cols-3 w-2/3 gap-10 ">{Ticket_own}</div>
    </div>
  );
}
