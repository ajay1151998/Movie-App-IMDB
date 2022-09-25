import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./App.css";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((item) => {
                const { imdbID, Title, Poster } = item;
                const movieName = Title.substring(0, 15);
                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length >= 13
                            ? `${movieName} ... `
                            : movieName}
                        </h2>
                        <img src={Poster} alt={imdbID} />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movies;
