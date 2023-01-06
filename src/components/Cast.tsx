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
          <ul className="flex flex-wrap gap-3 p-3 justify-center">
            {actorsList &&
              actorsList.map(
                ({ id, profile_path, name, character, original_name }) => (
                  <li
                    className="flex flex-col basis-1/6 rounded border"
                    key={id}
                  >
                    <img
                      className="grow object-cover"
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/original${profile_path}`
                          : defAvatar
                      }
                      alt={name}
                    />
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
