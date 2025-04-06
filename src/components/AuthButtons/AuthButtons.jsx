import css from "./AuthButtons.module.css";

const AuthButtons = () => {
  return (
    <div className={css.authButtonsWrapper}>
      <button className={css.loginBtn} type="button">
        <svg width="20" height="20">
          <use href="../../../public/icons.svg#log-in"></use>
        </svg>
        Log in
      </button>
      <button className={css.registrationBtn} type="button">
        Registration
      </button>
    </div>
  );
};

export default AuthButtons;
