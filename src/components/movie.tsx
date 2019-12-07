import React, { useState } from "react";

import Image from "./image";
import MovieDetails from "./movieDetails";
import posterPlaceholder from "../images/poster-placeholder.png";
import "../styles/movie.css";

interface IComponentProps {
  movie: {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
  };
}

const Movie: React.FC<IComponentProps> = (props: IComponentProps): JSX.Element => {
  const movie: IComponentProps["movie"] = props.movie;
  const posterUrl: string = movie.Poster === "N/A" ? posterPlaceholder : movie.Poster;
  const [showDetailsValue, setShowDetailsValue]: Array<any> = useState(false);

  const hideDetails = (): void => {
    setTimeout(() => setShowDetailsValue(false), 0);
  };

  const showDetails = (): void => {
    setShowDetailsValue(true);
  };

  return (
    <div className="movie" onClick={showDetails}>
      <h2>{movie.Title} ({movie.Type})</h2>

      <Image alt={movie.Title} className="poster" src={posterUrl} />

      <p>({movie.Year})</p>

      {showDetailsValue && (
        <MovieDetails handleModalClose={hideDetails} imdbID={movie.imdbID} />
      )}
    </div>
  );
};

export default Movie;
