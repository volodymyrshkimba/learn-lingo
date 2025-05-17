import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

import css from "./AuthButtons.module.css";

const AuthButtons = () => {
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
    <ul className={css.authButtonsWrapper} onClick={handleAuthFormOpen}>
      <li className={css.btnWrapper}>
        <button className={css.loginBtn} type="button" data-type="login">
          <svg width="20" height="20">
            <use href="../../../public/icons.svg#log-in"></use>
          </svg>
          Log in
        </button>
        {authFormControl.isOpen && authFormControl.authForm === "login" && (
          <AuthForm login handleAuthFormClose={handleAuthFormClose} />
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
          <AuthForm handleAuthFormClose={handleAuthFormClose} />
        )}
      </li>
    </ul>
  );
};

export default AuthButtons;
