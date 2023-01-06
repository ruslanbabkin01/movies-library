import { fetchReviewMovie } from '../api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IRewiew } from 'types/reviews';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<IRewiew[]>([]);

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
        <ul className="flex flex-col gap-5 py-0 px-4">
          {reviews.map(({ id, author, content }) => (
            <li className="p-1 " key={id}>
              <h4 className="mb-2">
                Author:<span className="ml-2 font-medium">{author}</span>
              </h4>
              <p className="mb-2 tracking-wide">{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="m-3 text-center text-red-500">
          We dont have any reviews for this movie
        </p>
      )}
    </>
  );
}
