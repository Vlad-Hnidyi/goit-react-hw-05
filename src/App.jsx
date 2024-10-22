import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./componets/Navigation/Navigation.jsx";
import css from "./App.module.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const MovieCast = lazy(() => import("./componets/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./componets/MovieReviews//MovieReviews.jsx")
);

function App() {
  return (
    <>
      <div className={css.wrapper}>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
