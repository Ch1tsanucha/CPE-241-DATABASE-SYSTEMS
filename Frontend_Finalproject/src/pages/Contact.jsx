import React from 'react';
import movies from '../json/Movie.json';
import IMG from "../assets/BG.svg";
import LoginHeader from '../component/Header_login';

  const MovieList = () => {
    let arr = Object.keys(movies).map((movieKey) => {
      return {
        title: movieKey,
        details: movies[movieKey]
      };
    });

    console.log(arr);
    console.log(arr[0].details.schedules.date); 
  
    return (
      <div className='text-black'>
     <LoginHeader/>
        {arr.map((movie) => (
          <div key={movie.title}>
            <h2>{movie.title}</h2>
            <img src={movie.details.mov_img} alt={movie.title} />
            <div>
              {Object.keys(movie.details.schedules).map((theater) => (
                <div key={theater}>
                  <h3>Theater {theater}</h3>
                  {Object.keys(movie.details.schedules[theater]).map((date) => (
                    <div key={date}>
                      <h4>{date}</h4>
                      <ul>
                        {movie.details.schedules[theater][date].map((time) => (
                          <li key={time}>{time}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieList;