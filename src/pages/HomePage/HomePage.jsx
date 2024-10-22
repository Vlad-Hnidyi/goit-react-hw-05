import { useEffect, useState } from "react";
import { fetchMoviesTrendingToday } from "../../components/services/TMDB-API";
import MovieList from "../../components/MovieList/MovieList";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const asyncWarapper = async () => {
      try {
        setLoading(true);
        const requestData = await fetchMoviesTrendingToday();
        setMovies(requestData.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    asyncWarapper();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {loading && <div>Loading...</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
