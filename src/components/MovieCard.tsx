import { IMovie } from 'types/movie';
import defMovie from '../images/defMovie.webp';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useToggle } from 'hooks/useToggle';

interface IModvieCardProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IModvieCardProps) => {
  const [watched, setWatched] = useLocalStorage('watchedMovies', []);
  const [queue, setQueue] = useLocalStorage('queueMovies', []);
  const [isAddToWatched, setIsAddToWatched] = useToggle();
  const [isAddToQueue, setIsAddToQueue] = useToggle();

  function findInWatchedMovie(id: number) {
    const isFind = watched.find((item: any) => item.id === id);
    if (isFind) {
      const newArrayMovies = watched.filter((item: any) => item.id !== id);
      setWatched([...newArrayMovies]);
      setIsAddToWatched();
      return;
    }
    setWatched([...watched, movie]);
    setIsAddToWatched();
  }

  function findInQueueMovie(id: number) {
    const isFind = queue.find((item: any) => item.id === id);
    if (isFind) {
      const newArrayMovies = queue.filter((item: any) => item.id !== id);
      setQueue([...newArrayMovies]);
      setIsAddToQueue();
      return;
    }
    setQueue([...queue, movie]);
    setIsAddToQueue();
  }

  const handleAddToWatched = () => {
    findInWatchedMovie(movie.id);
  };

  const handleAddToQueue = () => {
    findInQueueMovie(movie.id);
  };

  return (
    <div className="flex p-5 w-9/12 ml-5">
      <img
        className="w-80 object-cover"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : defMovie
        }
        alt={movie.title}
      />
      <div className="ml-5">
        <h2 className="font-bold text-2xl">
          {movie.title}
          <span>({Number.parseInt(movie.release_date)})</span>
        </h2>
        <p className="my-5 mx-0 font-semibold">
          Rating:{' '}
          <span className="text-red-500">{movie.vote_average.toFixed(1)}</span>
        </p>
        <h3 className="text-lg font-semibold ">Owerview</h3>
        <p className="my-5 mx-0">{movie.overview}</p>
        <h4 className="font-semibold text-lg">Genres</h4>
        <p className="my-5 mx-0">
          {movie.genres.map(({ name }) => name).join('  ')}
        </p>
        <ul className="flex gap-4">
          <li>
            <button
              onClick={handleAddToWatched}
              className="bg-blue-500 p-3 border-1 rounded hover:bg-red-600 hover:text-white  no-underline font-medium"
            >
              {isAddToWatched ? 'Remove from watched' : 'Add to watched'}
            </button>
          </li>
          <li>
            <button
              onClick={handleAddToQueue}
              className="bg-blue-500 p-3 border-1 rounded hover:bg-red-600 hover:text-white  no-underline font-medium"
            >
              {isAddToQueue ? 'Remove from queue' : 'Add to queue'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
