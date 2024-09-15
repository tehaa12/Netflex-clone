// MoviesList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const MoviesList = () => {
  // Step 1: Define the state to hold movie data
  const [movies, setMovies] = useState([]);

  // Step 2: Define the base URL and API key for TMDb
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "8cd75bd3a27b6d3ce0c1ce31c01eb755"; // Replace with your actual TMDb API key

  // Step 3: Use useEffect to fetch data when the component mounts
  useEffect(() => {
    axios
      .get(`${baseURL}/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        console.log(response.data.results); // Log the response to see the structure
        setMovies(response.data.results); // Step 4: Store movie data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  // Step 5: Return JSX to display the movies
  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
