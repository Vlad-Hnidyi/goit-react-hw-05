import axios from "axios";

const options = {
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTYxNDk2NTkxZDYxMjU5MjU0OTJmZTdmNWExMWM3MCIsIm5iZiI6MTcyOTQ1MTk1OC4wMTg5NSwic3ViIjoiNjcxNDFiZmEwY2I2MjUyZjk5MDg3YzU3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VjOlt7gLy8yTDab1eMDs4g_76J3gW2Mkch9nFETKVCI",
  },
};
export const fetchMoviesByQuery = (query) => {
  return axios.get(`search/movie?query=${query}`, options);
};

export const fetchMoviesTrendingToday = () => {
  return axios.get("/trending/movie/day", options);
};
export const fetchMovieById = (movieId) => {
  return axios.get(`/movie/${movieId}`, options);
};
export const fetchMovieCast = (movieId) => {
  return axios.get(`/movie/${movieId}/credits`, options);
};
export const fetchMovieReviews = (movieId) => {
  return axios.get(`/movie/${movieId}/reviews`, options);
};
