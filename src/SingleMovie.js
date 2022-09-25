import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const api_url = `https://www.omdbapi.com/?&apikey=d777fd95`;

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies(`${api_url}&s=&i=${id}`);
    //console.log(`${api_url}&i=${id}`);
    //getMovies(api_url);
  }, [id]);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
