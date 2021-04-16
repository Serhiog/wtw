import React from "react"
import { connect } from "react-redux";

function MovieDetails({ selectedMovie }) {

  const convertMinutes = (mins) => {
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;
    return hours + "h " + minutes + "m";
  }
  return (

    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{selectedMovie.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {selectedMovie.starring.map(name => {
              return name + `,` + `\n`
            })}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{convertMinutes(selectedMovie.run_time)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{selectedMovie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{selectedMovie.released}</span>
        </p>
      </div>
    </div>
  )
}

const mapToStateProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
})

export default connect(mapToStateProps)(MovieDetails);
