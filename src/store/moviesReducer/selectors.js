import { createSelector } from "reselect";

export const getMovies = (state) => {
  return state.movies.movies;
};

export const getActualGenre = (state) => {
  return state.movies.selectedGenre;
};

export const getSelectedMovie = (state) => {
  return state.movies.selectedMovie;
};

export const getUnicGenres = createSelector(
  getMovies,
  getActualGenre,
  (movies, actualGenre) => {
    return [
      "All Genres",
      ...new Set(
        movies.map((movie) => {
          return movie.genre;
        })
      ),
    ].map((item) => {
      if (item === actualGenre) {
        return { genre: item, isActive: true };
      }
      return { genre: item, isActive: false };
    });
  }
);

export const getMoreLikeThisMovies = createSelector(
  getSelectedMovie,
  getMovies,
  (selectedMovie, movies) => {
    return movies.filter((movie) => {
      return movie.genre === selectedMovie.genre;
    });
  }
);

export const getSortedMovies = createSelector(
  getMovies,
  getActualGenre,
  (movies, currentGenre) => {
    const superMovies = [...movies];
    return superMovies.filter((movie) => {
      if (!currentGenre || currentGenre === "All Genres") {
        return superMovies;
      }
      return movie.genre === currentGenre;
    });
  }
);
