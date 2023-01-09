import { Outlet, useParams, useLocation, NavLink } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { fetchAboutMovie } from '../api/themoviedbAPI';
import { MovieCard } from 'components/MovieCard';
import { Loader } from 'components/Loader';
import { IMovie } from 'types/movie';

export default function MovieDetails() {
  const [movie, setMovie] = useState<IMovie>();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchAboutMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  const activeStyle = {
    background: 'red',
    color: 'white',
  };

  return (
    <div className="mx-auto">
      <NavLink
        className="inline-block px-6 py-1 mb-3 ml-20 rounded cursor-pointer bg-blue-500 text-white hover:bg-red-600 focus:text-white focus:bg-red-600"
        to={backLinkHref}
      >
        Back
      </NavLink>
      {movie && <MovieCard movie={movie} />}
      <h2 className="mb-4 text-center font-semibold text-lg">
        Additional information
      </h2>
      <ul className="flex justify-center gap-4 mb-5">
        <li className="">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="text-white bg-blue-500 py-2 px-5 rounded cursor-pointer hover:bg-red-600 focus:bg-red-600"
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="text-white bg-blue-500 py-2 px-5 rounded cursor-pointer hover:bg-red-600 focus:bg-red-600"
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
