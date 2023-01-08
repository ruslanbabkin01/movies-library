import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../api/themoviedbAPI';
import { useEffect, useState, Suspense } from 'react';
import { toast } from 'react-toastify';
import { VideoGallery } from 'components/VideoGallery';
import { Loader } from 'components/Loader';
import { IMovies } from 'types/movies';

export default function LiabraryPage() {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    async function fetchMovie() {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data);
        if (!data.length) {
          toast.info(`${query} not found`);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [query]);

  return (
    <main>
      {movies && <VideoGallery movies={movies} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
