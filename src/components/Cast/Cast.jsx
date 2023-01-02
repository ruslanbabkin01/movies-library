import { fetchActorsMovie } from '../../api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorsList, Actor, Foto, ActorInfo } from './Cast.styled';
import avatar from '../../images/no-ava.jpeg';

export default function Cast() {
  const { movieId } = useParams();
  const [actorsList, setActorsList] = useState(null);

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
          <ActorsList>
            {actorsList &&
              actorsList.map(({ id, profile_path, name, character }) => (
                <Actor key={id}>
                  <Foto
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : avatar
                    }
                    alt={name}
                  />
                  <ActorInfo>
                    <h4>Name:</h4>
                    <span>{name}</span>
                    <h4>Character:</h4>
                    <span>{character}</span>
                  </ActorInfo>
                </Actor>
              ))}
          </ActorsList>
        </>
      )}
    </>
  );
}
