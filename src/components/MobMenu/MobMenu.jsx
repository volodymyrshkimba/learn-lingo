import { useEffect, useState } from "react";
import clsx from "clsx";

import UserInfo from "../UserInfo/UserInfo";
import AuthButtons from "../AuthButtons/AuthButtons";
import NavLinks from "../NavLinks/NavLinks";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

import css from "./MobMenu.module.css";

const MobMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const { theme } = useTheme();

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button className={css.mobMenuBtn} onClick={() => setIsOpen(true)}>
        Menu
      </button>
      {isOpen && (
        <div className={clsx(css.menuOverlay, css[theme])}>
          <div className={css.menu}>
            <button
              className={css.closeBtn}
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <svg width="32" height="32">
                <use href="/icons.svg#close"></use>
              </svg>
            </button>
            <NavLinks mobmenu closeMenu={closeMenu} />
            {isLoggedIn ? <UserInfo mobmenu /> : <AuthButtons mobmenu />}
          </div>
        </div>
      )}
    </>
  );
};

export default MobMenu;
