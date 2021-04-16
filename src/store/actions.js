export const ActionType = {
  LOAD_MOVIES: "LOAD_MOVIES",
  LOAD_PROMO: "LOAD_PROMO",
  GET_SELECTED_MOVIE: "GET_SELECTED_MOVIE",
  GET_GENRES: "GET_GENRES",
  GET_SELECTED_GENRE: "GET_SELECTED_GENRE",
  GET_SORTED_MOVIES: "GET_SORTED_MOVIES",
  SET_FAVORITE_MOVIE: "SET_FAVORITE_MOVIE",
  RESET_FAVORITE_MOVIE: "RESET_FAVORITE_MOVIE",
  GET_REVIEWS: "GET_REVIEWS",
  COMBINE_REVIEWS: "COMBINE_REVIEWS",
  ERROR_SEND: "ERROR_SEND",
  RESET_FORM_STATUS: "RESET_FORM_STATUS",
  REQUIRED_AUTHORIZATION: "REQUIRED_AUTHORIZATION",
};

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadPromo = (promo) => ({
  type: ActionType.LOAD_PROMO,
  payload: promo,
});

export const getSelectedMovie = (movieID) => ({
  type: ActionType.GET_SELECTED_MOVIE,
  payload: movieID,
});

export const getSelectedGenre = (genre) => ({
  type: ActionType.GET_SELECTED_GENRE,
  payload: genre,
});

export const setToFavoritesMovie = (movie) => ({
  type: ActionType.SET_FAVORITE_MOVIE,
  payload: movie,
});

export const resetToFavoritesMovie = (movie) => ({
  type: ActionType.RESET_FAVORITE_MOVIE,
  payload: movie,
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
});

export const combineReviews = (reviews) => ({
  type: ActionType.COMBINE_REVIEWS,
  payload: reviews,
});

export const updateErrorStatus = (status) => ({
  type: ActionType.ERROR_SEND,
  payload: status,
});

export const resetSendFormStatus = (status) => ({
  type: ActionType.RESET_FORM_STATUS,
});

export const requireAuthorization = (status, photo, email = null) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
  photo,
  email,
});
