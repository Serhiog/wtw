import React from "react"
import { connect } from "react-redux"
import Footer from "../footer/footer"
import Header from "../header/header"
import MoviesItem from "../movies-item/movies-item"


function MyList({ favoriteMovies }) {
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {favoriteMovies.map(movie => {
            if (movie.is_favorite) {
              return <MoviesItem movie={movie} key={movie.id} />
            }
          })}
        </div>
      </section>
      <Footer />
    </div>

  )
}

const MapStateToProps = (state) => ({
  favoriteMovies: state.movies.movies
})

export default connect(MapStateToProps)(MyList)
