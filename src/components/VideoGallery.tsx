import { Link, useLocation } from 'react-router-dom';
import { IMovies } from 'types/movies';

interface IVideoGalleryProps {
  movies: IMovies[];
}

export const VideoGallery = ({ movies }: IVideoGalleryProps) => {
  const location = useLocation();

  return (
    <ul className="flex flex-wrap justify-center p-3 gap-4">
      {movies.map(
        ({ id, title, poster_path, original_name, original_title }) => (
          <li className="basis-1/6 shadow-xl" key={id}>
            <Link
              className="flex flex-col"
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img
                className="object-cover ease-out duration-300 hover:scale-105 hover:cursor-zoom-in "
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title}
              />
              <h3 className="my-2 text-center font-semibold">
                {original_name ?? original_title}
              </h3>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
