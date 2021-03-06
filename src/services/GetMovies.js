const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e0c73a674fe9ac3d07ab423a32b0f862';

export const fetchMostPopularMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(res => res.json());
};

export const fetchMovieByQuery = query => {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`).then(res => res.json());
};

export const fetchDetailsAboutMovie = id => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(res => res.json());
};

export const fetchMovieCast = id => {
  return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`).then(res => res.json());
};

export const fetchMovieReviews = id => {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`).then(res => res.json());
};

export default {
  fetchMostPopularMovies,
  fetchMovieByQuery,
  fetchDetailsAboutMovie,
  fetchMovieCast,
  fetchMovieReviews
}