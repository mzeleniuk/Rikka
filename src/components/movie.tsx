import React from "react";

import Image from "../components/image";
import posterPlaceholder from "../images/poster-placeholder.png";
import "../styles/movie.css";

interface IComponentProps {
  movie: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
  };
}

const Movie: React.FC<IComponentProps> = (props: IComponentProps): JSX.Element => {
  const movie: IComponentProps["movie"] = props.movie;
  const posterUrl: string = movie.Poster === "N/A" ? posterPlaceholder : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title} ({movie.Type})</h2>

      <Image alt={movie.Title} className="poster" src={posterUrl} />

      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
