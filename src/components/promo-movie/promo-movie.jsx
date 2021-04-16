import React from "react"
import Header from "../header/header"
import MovieButtons from "../movie-buttons/movie-buttons"

function PromoMovie({ promo }) {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promo.background_image} alt="The Grand Budapest Hotel" />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promo.poster_image} alt={promo.name} width={218} height={327} />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promo.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promo.genre}</span>
              <span className="movie-card__year">{promo.released}</span>
            </p>
            <MovieButtons movie={promo}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoMovie
