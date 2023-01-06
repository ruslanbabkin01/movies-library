import { IResponseReviews, IRewiew } from './../types/reviews';
import { ICastResponse, ICast } from './../types/cast';
import { IMovie } from './../types/movie';
import axios from 'axios';
import { IServerResponse, IMovies } from 'types/movies';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '13d1d6108716c95692977ae4bce9cff7';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export async function fetchTrendMovies() {
  const { data } = await axios.get<IServerResponse<IMovies>>(
    `/trending/all/day?api_key=${API_KEY}`
  );
  const { results } = data;
  return results;
}

export async function fetchSearchMovies(query: string, page = 1) {
  const { data } = await axios.get<IServerResponse<IMovies>>(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const { results } = data;
  return results;
}

export async function fetchAboutMovie(movieId: string | undefined) {
  const { data } = await axios.get<IMovie>(
    `/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
}

export async function fetchActorsMovie(movieId: string | undefined) {
  const { data } = await axios.get<ICastResponse<ICast>>(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const { cast } = data;
  return cast;
}

export async function fetchReviewMovie(movieId: string | undefined) {
  const { data } = await axios.get<IResponseReviews<IRewiew>>(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const { results } = data;
  return results;
}
