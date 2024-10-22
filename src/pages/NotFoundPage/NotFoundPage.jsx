import { Link } from "react-router-dom";

import css from "../NotFoundPage/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}> This page was not found...</p>
      <Link className={css.link} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
