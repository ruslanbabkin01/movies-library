import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  ImageList,
  MovieItem,
  MovieImg,
  LinkMovie,
  Title,
} from './VideoGallery.styled';

export const VideoGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <ImageList>
      {movies.map(
        ({ id, title, poster_path, original_name, original_title }) => (
          <MovieItem key={id}>
            <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title}
              />
            </LinkMovie>
            <Title>{original_name ?? original_title}</Title>
          </MovieItem>
        )
      )}
    </ImageList>
  );
};

VideoGallery.prototype = {
  movies: PropTypes.array.isRequired,
};
