import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../services/TMDB-API";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await fetchMovieReviews(movieId);

        setMovieReviews(response.data.results);
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
      {movieReviews !== null && movieReviews.length > 0 && (
        <ul>
          {movieReviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>
                  <b>Comment:</b> {review.content}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {movieReviews !== null && movieReviews.length === 0 && (
        <p>There are no reviews for this movie.</p>
      )}
    </>
  );
};

export default MovieReviews;
