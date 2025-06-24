import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import clsx from "clsx";

import { useAuth } from "../../context/AuthContext";

import css from "./NavLinks.module.css";

const NavLinks = ({ mobmenu, closeMenu }) => {
  const { isLoggedIn } = useAuth();

  return (
    <ul className={clsx(css.navLinksList, mobmenu && css.mobMenu)}>
      <li
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
      >
        <NavLink className={css.link} to={"/"}>
          Home
        </NavLink>
      </li>
      <li
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
      >
        <NavLink className={css.link} to={"/teachers"}>
          Teachers
        </NavLink>
      </li>
      <li
        onClick={() => {
          if (!isLoggedIn) {
            toast("Please sign in to use a favorites list!", {
              position: "top-right",
              autoClose: 5000,
              theme: "light",
            });
          }

          if (closeMenu && isLoggedIn) closeMenu();
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
