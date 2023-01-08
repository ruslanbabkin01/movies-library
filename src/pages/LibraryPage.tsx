import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { VideoGallery } from 'components/VideoGallery';
import { Loader } from 'components/Loader';
import { IMovies } from 'types/movies';

export default function LiabraryPage() {
  const [movies, setMovies] = useState<IMovies[]>(() => {
    const value = localStorage.getItem('watchedMovies');
    if (typeof value === 'string') {
      return JSON.parse(value);
    }
  });
  console.log(movies);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  return (
    <main>
      {movies ? <VideoGallery movies={movies} /> : <p>no movies</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
