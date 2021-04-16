import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getMoreLikeThisMovies } from "../../store/moviesReducer/selectors"
import MoviesItem from "../movies-item/movies-item"

function MoreLikeThis({ moreLikeThisMovies }) {

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {moreLikeThisMovies.slice(0, 4).map(movie => {
          return <MoviesItem movie={movie} key={movie.id} />
        })}
      </div>
    </section>
  )
}

const mapToStateProps = (state) => ({
  moreLikeThisMovies: getMoreLikeThisMovies(state)
})


const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapToStateProps, mapDispatchToProps)(MoreLikeThis);

