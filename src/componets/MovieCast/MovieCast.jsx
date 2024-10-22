import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";
import { fetchMovieCast } from "../services/TMDB-API";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await fetchMovieCast(movieId);

        setMovieCast(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, [movieId]);

  return (
    <>
      {loading && <div>Loading...</div>}
      <ul className={css.list}>
        {movieCast !== null &&
          movieCast.length > 0 &&
          movieCast.map((person) => {
            return (
              <li className={css.item} key={person.id}>
                <img
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt={person.name}
                />
                <div>
                  <p>
                    <b>{person.name}</b>
                  </p>
                  <p>Character: {person.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
      {movieCast !== null && movieCast.length === 0 && (
        <p>We don&apos;t have any information about the cast for this movie.</p>
      )}
    </>
  );
};

export default MovieCast;
