import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../api/themoviedbAPI';
import { useEffect, useState, Suspense } from 'react';
import { toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar';
import { VideoGallery } from 'components/VideoGallery';
import { Loader } from 'components/Loader';
import { IMovies } from 'types/movies';
import { AxiosError } from 'axios';

export default function Movies() {
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
      } catch (e: unknown) {
        const error = e as AxiosError;
        console.log(error.message);
        toast.error(error.message)
      }
    }
    fetchMovie();
  }, [query]);

  function handleFormSubmit(search: string) {
    const nextParams:any = search !== '' ? { query: search } : {};
    setSearchParams(nextParams);
  }

  return (
    <main>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && <VideoGallery movies={movies} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
