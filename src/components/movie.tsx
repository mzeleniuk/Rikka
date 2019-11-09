import React from "react";

import posterPlaceholder from "../images/poster-placeholder.png";
import "../styles/movie.css";

interface IComponentProps {
  Poster: string;
  Title: string;
  Year: string;
}

const Movie: React.FC<IComponentProps> = (movie: IComponentProps) => {
  const posterUrl: string = movie.Poster === "N/A" ? posterPlaceholder : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>

      <img alt={movie.Title} src={posterUrl} />

      <p>({movie.Year})</p>
    </div>
  );
}

export default Movie;
