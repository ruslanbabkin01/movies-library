import defMovie from '../images/defMovie.webp';

export const MovieCard = ({
  movie: {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    release_date,
    genres,
  },
}) => (
  <div className="flex p-5 w-9/12 ml-5">
    <img
      className="w-80 object-cover"
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : defMovie
      }
      alt={title}
    />
    <div className="ml-5">
      <h2 className="font-bold text-2xl">
        {title ?? name}
        <span>({Number.parseInt(release_date)})</span>
      </h2>
      <p className="my-5 mx-0 font-semibold">
        Rating: <span className="text-red-500">{vote_average.toFixed(1)}</span>
      </p>
      <h3 className="text-lg font-semibold ">Owerview</h3>
      <p className="my-5 mx-0">{overview}</p>
      <h4 className="font-semibold text-lg">Genres</h4>
      <p className="my-5 mx-0">{genres.map(({ name }) => name).join('  ')}</p>
    </div>
  </div>
);

// MovieCard.propTypes = {
//   movie: PropTypes.object.isRequired,
// };
