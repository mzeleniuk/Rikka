import React, { useReducer, useEffect } from "react";

import Header from "./header";
import Movie from "./movie";
import Spinner from "./spinner";
import { initialState, reducer } from "../store/reducer";
import "../styles/App.css";
import "../styles/movies.css";

const App: React.FC = (): JSX.Element => {
  const [state, dispatch]: Array<any> = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SEARCH_MOVIES_REQUEST" });

    fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((response: Response) => response.json())
      .then((jsonResponse: any) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      })
  }, []);

  const search = (searchValue: string) => {
    dispatch({ type: "SEARCH_MOVIES_REQUEST" });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response: Response) => response.json())
      .then((jsonResponse: any) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      })
  };

  return (
    <div className="App">
      <Header search={search} text="Rikka" />

      <div className="movies">
        {state.loading && !state.errorMessage ? (
          <Spinner />
        ) : state.errorMessage ? (
          <h4 className="error-message">{state.errorMessage}</h4>
        ) : (
          state.movies.map((movie: any) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
