import React, { useContext, useEffect, useState } from "react";

export const api_url = `https://www.omdbapi.com/?i=tt3896198&apikey=d777fd95`;

const AppContext = React.createContext();

const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies(`${api_url}&s=${query}`);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGlobalContext };
