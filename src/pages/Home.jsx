import { VideoGallery } from '../components/VideoGallery/VideoGallery';
import { fetchTrendMovies } from '../api/themoviedbAPI';
import { useState, useEffect } from 'react';
import { Box } from 'styles';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendMovies();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <Box as="h2" textAlign="center" m="10px">
        Trending today
      </Box>
      {movies && <VideoGallery movies={movies} />}
    </main>
  );
}
