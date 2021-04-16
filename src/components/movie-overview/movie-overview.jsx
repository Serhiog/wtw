import React from "react"
import { connect } from "react-redux";

function MovieOverview({ selectedMovie }) {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{selectedMovie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{
            selectedMovie.rating < 3 && "Bad" ||
            selectedMovie.rating > 3 && selectedMovie.rating < 5 && "Normal" ||
            selectedMovie.rating > 5 && selectedMovie.rating < 8 && "Good" ||
            selectedMovie.rating > 8 && selectedMovie.rating < 10 && "Very good" ||
            selectedMovie.rating > 10 && "Awesome"
          }</span>
          <span className="movie-rating__count">{selectedMovie.scores_count} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{selectedMovie.description}</p>
        <p className="movie-card__director"><strong>Director: {selectedMovie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {selectedMovie.starring.map(name => {
          return name + `,` + `\n`
        })}</strong></p>
      </div>
    </>
  )
}

const mapToStateProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
})

export default connect(mapToStateProps)(MovieOverview);
