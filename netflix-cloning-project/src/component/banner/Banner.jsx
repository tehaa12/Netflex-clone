import React, { useState } from "react";
import axios from "../../utils/Axios";
import requests from "../../utils/reqests";
import { useEffect } from "react";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        console.log(response);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-contents">
          {/* Title */}
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          {/* Buttons */}
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>

          {/* Description */}
          <h1 className="banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="banner-fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
