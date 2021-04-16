import { ActionType } from "../actions";

const initialState = {
  movies: [],
  promo: {},
  selectedMovie: {},
  selectedGenre: "All Genres",
  reviews: [],
  formSuccessSend: false,
  isFormError: false,
  login: "NO_AUTH",
  userEmail: "",
  userAvatar: "",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, { movies: action.payload });
    case ActionType.LOAD_PROMO:
      const sameMovie = state.movies.find((movie) => {
        return movie.id === action.payload.id;
      });
      const index = state.movies.indexOf(sameMovie);
      return Object.assign({}, state, {
        promo: state.movies[index],
      });
    case ActionType.GET_REVIEWS:
      return Object.assign({}, state, {
        reviews: [...state.reviews, ...new Set(Array.from(action.payload))],
      });
    case ActionType.GET_SELECTED_MOVIE:
      const actualMovie = state.movies.find((movie) => {
        return movie.id === action.payload;
      });
      return Object.assign({}, state, {
        selectedMovie: actualMovie,
      });
    case ActionType.GET_SELECTED_GENRE:
      return Object.assign({}, state, {
        selectedGenre: action.payload,
      });
    case ActionType.SET_FAVORITE_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies.reduce((movieList, movie) => {
          if (movie.id === action.payload) {
            movieList.push(Object.assign(movie, { is_favorite: true }));
          }
          movieList.push(movie);
          return [...new Set(movieList)];
        }, []),
      });
    case ActionType.RESET_FAVORITE_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies.reduce((movieList, movie) => {
          if (movie.id === action.payload) {
            movieList.push(Object.assign(movie, { is_favorite: false }));
          }
          movieList.push(movie);
          return [...new Set(movieList)];
        }, []),
      });
    case ActionType.COMBINE_REVIEWS:
      return Object.assign({}, state, {
        reviews: [...state.reviews, ...new Set(Array.from(action.payload))],
        formSuccessSend: true,
      });
    case ActionType.ERROR_SEND:
      return Object.assign({}, state, {
        isFormError: action.payload,
      });
    case ActionType.RESET_FORM_STATUS:
      return Object.assign({}, state, {
        formSuccessSend: false,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        login: action.payload,
        userEmail: action.email,
        userAvatar: action.photo
      });
    default:
      return state;
  }
};
