import React, { useEffect, useState } from "react";
import axios from "../../../utils/Axios";
import "./Row.css"; // Add your CSS for styling
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      console.log("api response :", response.data);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  
 const [trailerUrl, setTrailerUrl] = useState("");

 const handleClick = (movie) => {
   if (trailerUrl) {
     setTrailerUrl(""); // Close the trailer if already open
   } else {
     // movieTrailer can search for the movie's trailer based on its title
     movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
       .then((url) => {
         const urlParams = new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlParams.get("v")); // Get the video ID
       })
       .catch((error) => console.log(error));
   }
 };

 const opts = {
   height: "390",
   width: "100%",
   playerVars: {
     autoplay: 1,
   },
 };



  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <img
            onClick={() => handleClick(movie)}
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.name}
            />
          ))
        ) : (
          <p>No movies avaliable</p>
        )}
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
}

export default Row;
