import React, { useEffect, useRef, useState } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import MovieDetails from "../movie-details/movie-details"
import MovieReviews from "../movie-reviews/movie-reviews"
import MovieOverview from "../movie-overview/movie-overview"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedMovie } from "../../store/actions"
import MovieButtons from "../movie-buttons/movie-buttons"
import MoreLikeThis from "../more-like-this/more-like-this"
import AddReview from "../add-review/add-review"


function MoviePage({ selectedMovie, getSelectedMovieInfo, movies }) {


  const params = useParams()

  useEffect(() => {
    getSelectedMovieInfo(+params.id)
  }, [movies])

  const activeMovieTabs = {
    overview: "overview",
    details: "details",
    reviews: "reviews"
  }
  const [activeMovieTab, setactiveMovieTab] = useState(activeMovieTabs.overview)

  const overviewTab = useRef()
  const detailsTab = useRef()
  const reviewsTab = useRef()
  const arrayRefs = [overviewTab, detailsTab, reviewsTab]

  const handleMovieTab = (evt) => {
    evt.preventDefault()
    const activeTabName = evt.target.dataset.name
    arrayRefs.forEach(tab => {
      tab.current.classList.remove("movie-nav__item--active")
    })
    evt.target.closest('li').classList.add("movie-nav__item--active");
    setactiveMovieTab(activeTabName)
  }

  return (

    <div>
      <section className="movie-card movie-card--full" style={{ background: selectedMovie.background_color }}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={selectedMovie.background_image} alt={selectedMovie.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{selectedMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{selectedMovie.genre}</span>
                <span className="movie-card__year">{selectedMovie.released}</span>
              </p>
              <MovieButtons movie={selectedMovie} />
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top" >
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={selectedMovie.poster_image} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active" ref={overviewTab}>
                    <a href="#" className="movie-nav__link" data-name={activeMovieTabs.overview} onClick={handleMovieTab}> Overview</a>
                  </li>
                  <li className="movie-nav__item" ref={detailsTab}>
                    <a href="#" className="movie-nav__link" data-name={activeMovieTabs.details} onClick={handleMovieTab}>Details</a>
                  </li>
                  <li className="movie-nav__item" ref={reviewsTab}>
                    <a href="#" className="movie-nav__link" data-name={activeMovieTabs.reviews} onClick={handleMovieTab}>Reviews</a>
                  </li>
                </ul>
              </nav>
              {activeMovieTab === "overview" && selectedMovie.starring && < MovieOverview />}
              {activeMovieTab === "details" && selectedMovie.starring && <MovieDetails />}
              {activeMovieTab === "reviews" && selectedMovie.starring && <MovieReviews selectedMovie={selectedMovie} />}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLikeThis/>
        <Footer />
      </div>
    </div >
  )
}

const mapToStateProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
  movies: state.movies.movies,
})


const mapDispatchToProps = (dispatch) => ({
  getSelectedMovieInfo(movieID) {
    dispatch(getSelectedMovie(movieID))
  }
})

export default connect(mapToStateProps, mapDispatchToProps)(MoviePage);

