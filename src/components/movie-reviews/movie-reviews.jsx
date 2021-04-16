import React, { useEffect } from "react"
import { fetchReviews } from "../../store/api-actions"
import Review from "../review/review"
import { connect } from "react-redux";

function MovieReviews({ selectedMovie, getReviews, reviews }) {

  useEffect(() => {
    getReviews(selectedMovie.id)
  }, [selectedMovie])

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews && reviews.map((review, id) => {
          return (<Review key={id} review={review} />)
        })}
      </div>
    </div>
  )
}


const mapToStateProps = (state) => ({
  reviews: state.movies.reviews,
})


const mapDispatchToProps = (dispatch) => ({
  getReviews(movieID) {
    dispatch(fetchReviews(movieID))
  }
})

export default connect(mapToStateProps, mapDispatchToProps)(MovieReviews);

