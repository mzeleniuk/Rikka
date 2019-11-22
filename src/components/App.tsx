import React, { useState, useEffect } from "react";

import Header from "./header";
import Movie from "./movie";
import "../styles/App.css";
import "../styles/movies.css";

const App: React.FC = () => {
  const [loading, setLoading]: Array<boolean | React.Dispatch<React.SetStateAction<any>>> = useState(true);
  const [movies, setMovies]: Array<any | React.Dispatch<React.SetStateAction<any>>> = useState([]);
  const [errorMessage, setErrorMessage]: Array<string | React.Dispatch<React.SetStateAction<string>>> = useState("");

  const search = (searchValue: string) => {
    setLoading(true);
    setErrorMessage("");

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response: Response) => response.json())
      .then((jsonResponse: any) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
  }

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((response: Response) => response.json())
      .then((jsonResponse: any) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
  }, []);

  return (
    <div className="App">
      <Header search={search} text="Rikka" />

      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <h4 className="error-message">{errorMessage}</h4>
        ) : (
          movies.map((movie: any) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
