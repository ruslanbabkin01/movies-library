import { VideoGallery } from '../components/VideoGallery';
import { fetchTrendMovies } from '../api/themoviedbAPI';
import { useState, useEffect } from 'react';
import { IMovies } from 'types/movies';
import { AxiosError } from 'axios';

export default function Home() {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendMovies();
        setMovies(data);
      } catch (e: unknown) {
        const error = e as AxiosError;
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h2 className="text-center m-3 text-3xl font-bold text-lime-700">
        Trending today
      </h2>
      {movies && <VideoGallery movies={movies} />}
    </main>
  );
}
