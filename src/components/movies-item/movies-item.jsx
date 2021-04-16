import React from "react"
import { useHistory, useLocation } from "react-router"

function MoviesItem({ movie }) {


  const history = useHistory()
  const location = useLocation()


  const handleMoviePreview = () => {
    history.push('films/' + movie.id)
  }

  return (
    <article className="small-movie-card catalog__movies-card" onClick={handleMoviePreview}>
      <div className="small-movie-card__image">
        <img src={movie.preview_image} alt={movie.name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
      </h3>
    </article>
  )
}

export default MoviesItem;
