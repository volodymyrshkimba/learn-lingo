import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import clsx from "clsx";

import { useAuth } from "../../context/AuthContext";

import css from "./NavLinks.module.css";

const NavLinks = () => {
  const { isLoggedIn } = useAuth();

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
      <li
        onClick={() => {
          if (isLoggedIn) return;
          toast("Please sign in to use to favorites list!", {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
          });
        }}
      >
        <NavLink
          className={clsx(css.link, !isLoggedIn && css.disabled)}
          to={"/favourites"}
        >
          Favourites
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
