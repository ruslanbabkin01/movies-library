import PropTypes from 'prop-types';
import { Image, DetailsInfo, Text, Card } from './MovieCard.styled';
import poster from '../../images/no-movie.webp';

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
  <Card>
    <Image
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : poster
      }
      alt={title}
    />
    <DetailsInfo>
      <h2>
        {title ?? name}
        <span>({Number.parseInt(release_date)})</span>
      </h2>
      <Text>Rating: {vote_average.toFixed(1)}</Text>
      <h3>Owerview</h3>
      <Text>{overview}</Text>
      <h4>Genres</h4>
      <Text>{genres.map(({ name }) => name).join(' ')}</Text>
    </DetailsInfo>
  </Card>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
