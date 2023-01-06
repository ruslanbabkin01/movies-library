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
    <>
      <NavLink
        className="text-black bg-blue-500 border bg-blue px-8 py-2 mt-5 ml-5 rounded-lg cursor-pointer hover:text-white hover:bg-red-500 focus:text-white focus:bg-red-500"
        to={backLinkHref}
      >
        Back
      </NavLink>
      {movie && <MovieCard movie={movie} />}
      <h2 className="p-2 mb-5 text-center font-semibold text-lg">
        Additional information
      </h2>
      <ul className="flex justify-center mb-5">
        <li className="mx-5">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="text-white bg-blue-500 p-2 py-3 px-8 my-3 mx-5 rounded-lg cursor-pointer"
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="text-white bg-blue-500 py-3 px-8 my-3 mx-5 rounded-lg cursor-pointer"
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
