import React, { useRef, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
import { sendForm } from "../../store/api-actions"
import Header from "../header/header"


function AddReview({ selectedMovie, onReviewSubmit, formSuccessSend, isFormError }) {
  const formRef = useRef()
  const raitingRef = useRef()
  const messageRef = useRef()

  const history = useHistory()


  const [raiting, setRaiting] = useState()
  const [message, setMessage] = useState()
  const [active, seActive] = useState(false)
  const [activeRating, setActiveRating] = useState(false)

  const onChangeRaiting = (evt) => {
    setActiveRating(true)
    setRaiting(+evt.target.value)
  }

  const onChangeMessage = (evt) => {
    setMessage(evt.target.value)
    if (message) {
      if (message.length < 50 || message.length > 400) {
        seActive(false)
      } else { seActive(true) }
    }
  }


  const onFormSubmit = (evt) => {
    evt.preventDefault()
    onReviewSubmit(raiting, message, selectedMovie.id)
    if (isFormError) { formRef.current.classList.add("border") && isFormError }
    history.push("/films/" + selectedMovie.id)
  }

  return (
    <section className="movie-card movie-card--full" style={{ background: selectedMovie.background_color }}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={selectedMovie.background_image} alt={selectedMovie.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="movie-card__poster movie-card__poster--small">
          <img src={selectedMovie.poster_image} alt={selectedMovie.name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form" ref={formRef} method="post" onSubmit={onFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
              <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>
              <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} defaultChecked ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>
              <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>
              <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
              <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>
              <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>
              <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} defaultChecked ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>
              <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>
              <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} ref={raitingRef} onChange={onChangeRaiting} />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>
          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={""} min={40} ref={messageRef} onChange={onChangeMessage} />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={active && activeRating && !formSuccessSend ? false : true}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

const mapToStateProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
  formSuccessSend: state.movies.formSuccessSend,
  isFormError: state.movies.isFormError
})


const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(raiting, message, movieID) {
    dispatch(sendForm(raiting, message, movieID));
  },
})

export default connect(mapToStateProps, mapDispatchToProps)(AddReview);

