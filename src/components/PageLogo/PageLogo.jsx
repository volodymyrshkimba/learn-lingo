import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { ALREADY_OPENED_LS_KEY, THEME_COLORS } from "../../constants/ui";

import css from "./PageLogo.module.css";

const PageLogo = () => {
  const [openThemes, setOpenThemes] = useState(false);
  const [alreadyOpened, setAlreadyOpened] = useState(() => {
    const stored = localStorage.getItem(ALREADY_OPENED_LS_KEY);
    return stored === "true";
  });
  const { changeTheme } = useTheme();

  return (
    <div className={css.logoWrapper}>
      <div className={css.logo}>
        <button
          type="button"
          onClick={() => {
            setOpenThemes(!openThemes);
            setAlreadyOpened(true);
            localStorage.setItem(ALREADY_OPENED_LS_KEY, "true");
          }}
          className={css.flagButton}
        >
          <img src="/ukraine.png" alt="Ukraine Flag" width={28} height={28} />
        </button>
        <Link to={"/"}>
          {!alreadyOpened && (
            <svg className={css.tapIcon} width="30" height="30">
              <use href="/icons.svg#tap"></use>
            </svg>
          )}
          <span className={css.logoText}>LearnLingo</span>
        </Link>
      </div>
      <AnimatePresence>
        {openThemes && (
          <motion.ul
            className={css.themesList}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {THEME_COLORS.map((theme) => (
              <li
                key={theme}
                onClick={() => {
                  changeTheme(theme);
                  setOpenThemes(false);
                }}
                className={clsx(css[theme], css.themeOption)}
              ></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageLogo;
