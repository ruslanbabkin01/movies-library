import { fetchActorsMovie } from '../api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defAvatar from '../images/defAvatar.jpeg';
import { ICast } from 'types/cast';

export default function Cast() {
  const { movieId } = useParams();
  const [actorsList, setActorsList] = useState<ICast[]>([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchActorsMovie(movieId);
        setActorsList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {actorsList && (
        <>
          <ul className="sm:flex flex-wrap gap-3 p-3 justify-center">
            {actorsList &&
              actorsList.map(
                ({ id, profile_path, name, character, original_name }) => (
                  <li
                    className="flex flex-col sm:basis-1/3 lg:basis-1/6 rounded border mb-3"
                    key={id}
                  >
                    <div className="grow">
                      <img
                        className="object-cover rounded border"
                        src={
                          profile_path
                            ? `https://image.tmdb.org/t/p/original${profile_path}`
                            : defAvatar
                        }
                        alt={name}
                      />
                    </div>

                    <div className="p-2">
                      <h4>Name:</h4>
                      <span className="font-bold">{name ?? original_name}</span>
                      <h4>Character:</h4>
                      <span className="font-bold">{character}</span>
                    </div>
                  </li>
                )
              )}
          </ul>
        </>
      )}
    </>
  );
}
