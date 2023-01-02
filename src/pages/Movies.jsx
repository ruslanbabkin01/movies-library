import { Searchbar } from 'components';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../api/themoviedbAPI';
import { VideoGallery, Loader } from 'components';
import { useEffect, useState, Suspense } from 'react';
import { toast } from 'react-toastify';

export default function Movies() {
  const [movies, setMovies] = useState(null);
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

  function handleFormSubmit(search) {
    const nextParams = search !== '' ? { query: search } : {};
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
