import React, { useState } from "react"
import Footer from "../footer/footer"
import { connect } from "react-redux";
import MoviesItem from "../movies-item/movies-item"
import PromoMovie from "../promo-movie/promo-movie"
import { getSelectedGenre } from "../../store/actions";
import { getUnicGenres, getSortedMovies } from "../../store/moviesReducer/selectors"

function MainPage({ movies, promo, genres, getAllSelectedGenres }) {

  const handleGenre = (evt) => {
    evt.preventDefault()
    setMoviesList(8)
    const selectedGenre = evt.target.closest("li").dataset.genre
    getAllSelectedGenres(selectedGenre)
  }

  const [moviesList, setMoviesList] = useState(8)

  const handleShowBtn = () => {
    setMoviesList(moviesList + 8)
  }

  return (
    <div style={{ background: promo.background_color }}>
      <PromoMovie promo={promo} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {genres.map((genre, i) => {
              return (
                <li data-genre={genre.genre} key={i} className={genre.isActive ? "catalog__genres-item catalog__genres-item--active" : "catalog__genres-item"}>
                  <a href="#" className="catalog__genres-link" onClick={handleGenre}>{genre.genre} </a>
                </li>
              )
            })}
          </ul>
          <div className="catalog__movies-list">
            {movies.slice(0, moviesList).map(movie => { return < MoviesItem movie={movie} key={movie.id} /> })}
          </div>
          <div className="catalog__more">
            {moviesList < movies.length && <button className="catalog__button" type="button" onClick={handleShowBtn}> Show more</button>}

          </div>
        </section>
        <Footer />
      </div>
    </div>


  )
}

const mapToStateProps = (state) => ({
  movies: getSortedMovies(state),
  promo: state.movies.promo,
  genres: getUnicGenres(state),
})

const mapDispatchToProps = (dispatch) => ({
  getAllSelectedGenres(genre) {
    dispatch(getSelectedGenre(genre))
  },
})

export default connect(mapToStateProps, mapDispatchToProps)(MainPage);
