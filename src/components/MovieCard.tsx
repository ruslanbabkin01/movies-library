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
  const { isAdd: isAddToWatched, toggle: toggleIsAddToWatched } =
    useToggle(false);
  const { isAdd: isAddToQueue, toggle: toggleIsAddToQueue } = useToggle(false);

  // function checkCurruntMovie(array: IMovie[], id: number, togleFunc: Function) {
  //   const findCurrentMovie = array.find((item: IMovie) => item.id === id);
  //   if (findCurrentMovie) togleFunc();
  // }

  function findInWatchedMovie(id: number) {
    const isFind = watched.find((item: IMovie) => item.id === id);
    if (isFind) {
      const newArrayMovies = watched.filter((item: IMovie) => item.id !== id);
      setWatched([...newArrayMovies]);
      toggleIsAddToWatched();
      return;
    }
    setWatched([...watched, movie]);
    toggleIsAddToWatched();
  }

  function findInQueueMovie(id: number) {
    const isFind = queue.find((item: IMovie) => item.id === id);
    if (isFind) {
      const newArrayMovies = queue.filter((item: IMovie) => item.id !== id);
      setQueue([...newArrayMovies]);
      toggleIsAddToQueue();
      return;
    }
    setQueue([...queue, movie]);
    toggleIsAddToQueue();
  }

  const handleAddToWatched = () => {
    findInWatchedMovie(movie.id);
  };

  const handleAddToQueue = () => {
    findInQueueMovie(movie.id);
  };

  return (
    <div className="max-w-lg sm:max-w-3xl xl:max-w-full mb-3 mx-auto sm:flex  xl:w-9/12 ">
      <div className="max-w-xs  lg:max-w-sm mx-auto flex items-center mb-2 sm:mb-0 ">
        <img
          className=" object-cover rounded"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : defMovie
          }
          alt={movie.title}
        />
      </div>

      <div className=" text-center sm:p-4 sm:text-left">
        <h2 className="font-bold text-xl mb-2 md:text-2xl">
          {movie.title}
          <span>({Number.parseInt(movie.release_date)})</span>
        </h2>
        <p className="mb-2 font-semibold text-lg">
          Rating:{' '}
          <span className="text-red-500">{movie.vote_average.toFixed(1)}</span>
        </p>
        <h3 className="text-lg font-semibold ">Owerview</h3>
        <p className="mb-2">{movie.overview}</p>
        <h4 className="font-semibold text-lg">Genres</h4>
        <p className="mb-5 lg:mb-16">
          {movie.genres.map(({ name }) => name).join('  ')}
        </p>
        <ul className="flex gap-4 justify-center xl:gap-10 xl:justify-start">
          <li>
            <button
              onClick={handleAddToWatched}
              className="bg-blue-500 p-2 rounded hover:bg-red-600 text-white focus:bg-red-600"
            >
              {isAddToWatched ? 'Remove from watched' : 'Add to watched'}
            </button>
          </li>
          <li>
            <button
              onClick={handleAddToQueue}
              className="bg-blue-500 p-2 rounded hover:bg-red-600 text-white focus:bg-red-600"
            >
              {isAddToQueue ? 'Remove from queue' : 'Add to queue'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
