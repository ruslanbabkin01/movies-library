import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '13d1d6108716c95692977ae4bce9cff7';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export async function fetchTrendMovies() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
}

export async function fetchSearchMovies(query, page = 1) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const { results } = response.data;
  return results;
}

export async function fetchAboutMovie(movieId) {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
}

export async function fetchActorsMovie(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const { cast } = response.data;
  return cast;
}

export async function fetchReviewMovie(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const { results } = response.data;
  return results;
}
