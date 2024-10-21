import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={buildCssClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={buildCssClasses}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
