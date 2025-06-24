import { useState } from "react";
import clsx from "clsx";

import AuthForm from "../AuthForm/AuthForm";

import { useTheme } from "../../context/ThemeContext/ThemeContext";

import css from "./AuthButtons.module.css";

const AuthButtons = ({ mobmenu }) => {
  const { theme } = useTheme();

  const authFormDefaultValues = {
    isOpen: false,
    authForm: "",
  };

  const [authFormControl, setAuthFormControl] = useState(authFormDefaultValues);

  const handleAuthFormOpen = (e) => {
    if (e.target.dataset.type === authFormControl.authForm) {
      return handleAuthFormClose();
    }

    if (
      e.target.dataset.type === "login" ||
      e.target.dataset.type === "register"
    ) {
      setAuthFormControl({
        isOpen: true,
        authForm: e.target.dataset.type,
      });
    }
  };

  const handleAuthFormClose = () => {
    setAuthFormControl({ ...authFormDefaultValues });
  };

  return (
    <ul
      className={clsx(css.authButtonsWrapper, mobmenu && css.mobMenu)}
      onClick={handleAuthFormOpen}
    >
      <li className={css.btnWrapper}>
        <button className={css.loginBtn} type="button" data-type="login">
          <svg className={clsx(css[theme], css.icon)} width="20" height="20">
            <use href="/icons.svg#log-in"></use>
          </svg>
          Log in
        </button>
        {authFormControl.isOpen && authFormControl.authForm === "login" && (
          <AuthForm mobmenu login handleAuthFormClose={handleAuthFormClose} />
        )}
      </li>
      <li className={css.btnWrapper}>
        <button
          className={css.registrationBtn}
          type="button"
          data-type="register"
        >
          Registration
        </button>
        {authFormControl.isOpen && authFormControl.authForm === "register" && (
          <AuthForm mobmenu handleAuthFormClose={handleAuthFormClose} />
        )}
      </li>
    </ul>
  );
};

export default AuthButtons;
