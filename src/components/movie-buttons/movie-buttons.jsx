import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useParams, useHistory } from "react-router";
import { setToFavoritesMovie, resetToFavoritesMovie } from "../../store/actions";




function MovieButtons({ movie, setFavoriteMovie, movies, resetFavoriteMovie }) {

  useEffect(() => { }, [movies])

  const params = useParams()

  const [pushBtn, setPushBtn] = useState(false)

  const handleMyListMovies = (favoriteMovie) => {
    setPushBtn(true)
    setFavoriteMovie(favoriteMovie.id)
    if (pushBtn) {
      resetFavoriteMovie(favoriteMovie.id)
      setPushBtn(false)
    }
  }

  const history = useHistory()

  const handleReview = (evt) => {
    evt.preventDefault()
    history.push(`/films/${movie.id}/review`)
  }

  return (
    <div className="movie-card__buttons">
      {/* <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox={"0 0 19 19"} width={"19"} height={"19"}>
          <use xlinkHref={"#play-s"} />
        </svg>
        <span>Play</span>
      </button> */}
      <button className="btn btn--list movie-card__button" type="button" onClick={() => { handleMyListMovies(movie) }}>
        <svg viewBox={"0 0 19 19"} width={"19"} height={"20"}>
          <use xlinkHref={movie.is_favorite ? "#in-list" : "#add"} />
        </svg>
        <span>My list</span>
      </button>
      {params.id && <a href="add-review.html" className="btn movie-card__button" onClick={handleReview}>Add review</a>}
    </div >

  )
}


const mapStateToProps = (state) => ({
  movies: state.movies.movies
})

const mapDispatchToProps = (dispatch) => ({
  setFavoriteMovie(movie) {
    dispatch(setToFavoritesMovie(movie))
  },
  resetFavoriteMovie(movie) {
    dispatch(resetToFavoritesMovie(movie))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieButtons)
