import { Link, useLocation } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={{
                from: location,
              }}
            >
              <BiSolidCameraMovie size={18} />
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
