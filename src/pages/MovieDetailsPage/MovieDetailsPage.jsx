import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../componets/services/TMDB-API";
import { RiArrowGoBackFill } from "react-icons/ri";

import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieDetailsPage = () => {
  const [movieData, setmovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const asyncWarapper = async () => {
      try {
        setLoading(true);
        const requestData = await fetchMovieById(movieId);
        setmovieData(requestData.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    asyncWarapper();
  }, [movieId]);

  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <div>
      <Link className={css.backLink} to={backLink.current}>
        <RiArrowGoBackFill size={12} />
        Go Back
      </Link>
      {loading && <div>Loading...</div>}
      {movieData !== null && (
        <>
          <div className={css.posterWrapper}>
            <div>
              <img
                src={
                  movieData.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                    : defaultImg
                }
                alt={movieData["original_title"]}
                width={300}
              />
            </div>
            <div className={css.textWrapper}>
              <h2>{movieData.original_title}</h2>
              {movieData.overview && (
                <p>
                  <b>Overview:</b> {movieData.overview}
                </p>
              )}
              {movieData.length !== 0 && (
                <ul className={css.ganres}>
                  <b>Genres:</b>
                  {movieData.genres.map((genre) => {
                    return (
                      <li className={css.ganre} key={genre.id}>
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              )}
              {movieData.vote_count !== 0 && (
                <ul>
                  <li>
                    <b>Rating: </b>
                    {Math.round(movieData.vote_average * 10) / 10} / 10
                  </li>
                  <li>
                    <b>Votes:</b> {movieData.vote_count}
                  </li>
                </ul>
              )}
            </div>
          </div>
          <ul className={css.linkList}>
            <b>Aditional Information</b>
            <li>
              <NavLink className={buildCssClasses} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={buildCssClasses} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
