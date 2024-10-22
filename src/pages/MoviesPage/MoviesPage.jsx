import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MoviesSearchForm from "../../components/MoviesSearchForm/MoviesSearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByQuery } from "../../components/services/TMDB-API";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") {
      return;
    }
    const asyncWarapper = async () => {
      try {
        setLoading(true);
        const requestData = await fetchMoviesByQuery(query);
        setMovies(requestData.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    asyncWarapper();
  }, [query]);

  const onSubmit = (query) => {
    setSearchParams({ query });
  };
  return (
    <div>
      <MoviesSearchForm onSubmit={onSubmit} />
      {loading && <div>Loading...</div>}
      {movies.length !== 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
