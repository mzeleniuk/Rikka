import React, { Fragment, useEffect, useState } from "react";

import Image from "./image";
import Modal from "./modal";
import Spinner from "./spinner";
import "../styles/movieDetails.css";

interface IComponentProps {
  handleModalClose: () => void;
  imdbID: string;
}

const MovieDetails: React.FC<IComponentProps> = (props: IComponentProps): JSX.Element => {
  const [contentValue, setContentValue]: Array<any> = useState(null);
  const [errorValue, setErrorValue]: Array<any> = useState("");
  const [loadingValue, setLoadingValue]: Array<any> = useState(false);

  useEffect(() => {
    setLoadingValue(true);

    fetch(`https://www.omdbapi.com/?i=${props.imdbID}&apikey=4a3b711b`)
      .then((response: Response) => response.json())
      .then((jsonResponse: any) => {
        if (jsonResponse.Response === "True") {
          setContentValue(jsonResponse);
        } else {
          setErrorValue(jsonResponse.Error);
        }

        setLoadingValue(false);
      })
  }, [props.imdbID]);

  return (
    <Modal id="movie-details-modal">
      <div className="movie-details-container">
        {loadingValue ? (
          <Spinner />
        ) : (
          <Fragment>
            {errorValue && (
              <h2 className="error">{errorValue}</h2>
            )}

            {contentValue && (
              <Fragment>
                {(contentValue.Poster !== "N/A") && (
                  <Image alt={contentValue.Poster} className="poster" src={contentValue.Poster} />
                )}

                <button type="button" onClick={props.handleModalClose}>Close</button>

                <div className="movie-details">
                  {(contentValue.Title && contentValue.Title !== "N/A") && (
                    <h2>{contentValue.Title}</h2>
                  )}

                  {(contentValue.Plot && contentValue.Plot !== "N/A") && (
                    <p>{contentValue.Plot}</p>
                  )}

                  {(contentValue.totalSeasons && contentValue.totalSeasons !== "N/A") && (
                    <p>Total Seasons: {contentValue.totalSeasons}</p>
                  )}

                  {(contentValue.Genre && contentValue.Genre !== "N/A") && (
                    <p>Genre: {contentValue.Genre}</p>
                  )}

                  {(contentValue.Country && contentValue.Country !== "N/A") && (
                    <p>Country: {contentValue.Country}</p>
                  )}

                  {(contentValue.Language && contentValue.Language !== "N/A") && (
                    <p>Language: {contentValue.Language}</p>
                  )}

                  {(contentValue.Rated && contentValue.Rated !== "N/A") && (
                    <p>Rated: {contentValue.Rated}</p>
                  )}

                  {(contentValue.Year && contentValue.Year !== "N/A") && (
                    <p>Year: {contentValue.Year}</p>
                  )}

                  {(contentValue.Actors && contentValue.Actors !== "N/A") && (
                    <p>Actors: {contentValue.Actors}</p>
                  )}

                  {(contentValue.Director && contentValue.Director !== "N/A") && (
                    <p>Director: {contentValue.Director}</p>
                  )}

                  {(contentValue.Writer && contentValue.Writer !== "N/A") && (
                    <p>Writer: {contentValue.Writer}</p>
                  )}

                  {(contentValue.Production && contentValue.Production !== "N/A") && (
                    <p>Production: {contentValue.Production}</p>
                  )}

                  {(contentValue.Released && contentValue.Released !== "N/A") && (
                    <p>Released: {contentValue.Released}</p>
                  )}

                  {(contentValue.DVD && contentValue.DVD !== "N/A") && (
                    <p>DVD: {contentValue.DVD}</p>
                  )}

                  {(contentValue.Runtime && contentValue.Runtime !== "N/A") && (
                    <p>Runtime: {contentValue.Runtime}</p>
                  )}

                  {(contentValue.Awards && contentValue.Awards !== "N/A") && (
                    <p>Awards: {contentValue.Awards}</p>
                  )}

                  {(contentValue.BoxOffice && contentValue.BoxOffice !== "N/A") && (
                    <p>Box Office: {contentValue.BoxOffice}</p>
                  )}

                  {(contentValue.Metascore && contentValue.Metascore !== "N/A") && (
                    <p>Metascore: {contentValue.Metascore}</p>
                  )}

                  {(contentValue.imdbRating && contentValue.imdbRating !== "N/A") && (
                    <p>IMDB Rating: {contentValue.imdbRating}</p>
                  )}

                  {(contentValue.Ratings && contentValue.Ratings.length > 0) && (
                    contentValue.Ratings.map((rating: { Source: string; Value: string; }, index: number) => {
                      return (
                        <p key={`${rating.Source}-${index}`}>{rating.Source}: {rating.Value}</p>
                      );
                    })
                  )}
                </div>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </Modal>
  );
};

export default MovieDetails;
