import { Route, Routes } from "react-router-dom";

import Navigation from "./componets/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "./componets/MovieCast/MovieCast.jsx";
import MovieReviews from "./componets/MovieReviews/MovieReviews.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import css from "./App.module.css";

function App() {
  return (
    <>
      <Navigation />
      <div className={css.wrapper}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
