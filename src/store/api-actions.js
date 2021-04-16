import {
  loadMovies,
  loadPromo,
  resetSendFormStatus,
  requireAuthorization,
} from "./actions";
import axios from "axios";
import {
  getReviews,
  combineReviews,
  updateErrorStatus,
} from "../store/actions";


const initialSource = "https://4.react.pages.academy/wtw";

export const fetchMoviesList = () => (dispatch) =>
  axios
    .get(initialSource + `/films`)
    .then(({ data }) => dispatch(loadMovies(data)), { withCredentials: true });

export const fetchPromoMovie = () => (dispatch) =>
  axios
    .get(initialSource + `/films/promo`)
    .then(({ data }) => dispatch(loadPromo(data)), { withCredentials: true });

export const fetchReviews = (movieID) => (dispatch) =>
  axios.get("https://4.react.pages.academy/wtw" + `/comments/` + movieID).then(
    ({ data }) => {
      dispatch(getReviews(data));
    },
    { withCredentials: true }
  );

export const sendForm = (rating, comment, movieID) => (dispatch) => {
  return axios
    .post(
      `https://4.react.pages.academy/wtw/comments/${movieID}`,
      {
        comment,
        rating,
      },
      { withCredentials: true }
    )
    .then(({ data }) => dispatch(combineReviews(data)))
    .then(() => {
      dispatch(resetSendFormStatus());
    })
    .catch((err) => {
      dispatch(updateErrorStatus(true));
    });
};

export const login = (email, password) => (dispatch) =>
  axios
    .post(
      `https://4.react.pages.academy/wtw/login`,
      { email, password },
      { withCredentials: true }
    )
    .then(({ data }) => {
      dispatch(requireAuthorization(`AUTH`, data.email));
    });

export const checkAuth = () => (dispatch) =>
  axios
    .get(`https://4.react.pages.academy/wtw/login`, { withCredentials: true })
    .then(({ data }) =>
      dispatch(requireAuthorization(`AUTH`, data.avatar_url, data.email))
    );
