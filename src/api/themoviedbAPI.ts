import { IResponseReviews, IReview } from './../types/reviews';
import { ICastResponse, ICast } from './../types/cast';
import { IMovie } from './../types/movie';
import axios from 'axios';
import { IServerResponse, IMovies } from 'types/movies';

const TheMovieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchTrendMovies() {
  const { data } = await TheMovieDb<IServerResponse<IMovies>>(
    `/trending/all/day?api_key=${API_KEY}`
  );
  const { results } = data;
  return results;
}

export async function fetchSearchMovies(query: string, page = 1) {
  const { data } = await TheMovieDb<IServerResponse<IMovies>>(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const { results } = data;
  return results;
}

export async function fetchAboutMovie(movieId: string | undefined) {
  const { data } = await TheMovieDb<IMovie>(
    `/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
}

export async function fetchActorsMovie(movieId: string | undefined) {
  const { data } = await TheMovieDb<ICastResponse<ICast>>(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const { cast } = data;
  return cast;
}

export async function fetchReviewMovie(movieId: string | undefined) {
  const { data } = await TheMovieDb<IResponseReviews<IReview>>(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const { results } = data;
  return results;
}
