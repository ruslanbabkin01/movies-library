import { fetchReviewMovie } from '../../api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsList,
  AuthorName,
  ReviewsText,
  DontReviews,
} from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchReviewMovie(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>
                Author:<AuthorName>{author}</AuthorName>
              </h4>
              <ReviewsText>{content}</ReviewsText>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <DontReviews>We dont have any reviews for this movie</DontReviews>
      )}
    </>
  );
}
