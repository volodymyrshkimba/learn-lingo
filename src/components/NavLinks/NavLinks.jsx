import { NavLink } from "react-router-dom";

import css from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={css.navLinksList}>
      <li>
        <NavLink className={css.link} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={"/teachers"}>
          Teachers
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={"/favourites"}>
          Favourites
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
