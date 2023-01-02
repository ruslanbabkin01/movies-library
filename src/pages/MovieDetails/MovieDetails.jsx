import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { fetchAboutMovie } from '../../api/themoviedbAPI';
import { MovieCard, Loader } from 'components';
import {
  BackLink,
  AboutList,
  AboutLink,
  TitleInfo,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchAboutMovie(Number(movieId));
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {movie && <MovieCard movie={movie} />}
      <TitleInfo>Additional information</TitleInfo>
      <AboutList>
        <li>
          <AboutLink to="cast">Cast</AboutLink>
        </li>
        <li>
          <AboutLink to="reviews">Reviews</AboutLink>
        </li>
      </AboutList>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
