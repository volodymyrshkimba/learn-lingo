import css from "./AuthForm.module.css";

const AuthForm = () => {
  return (
    <div className={css.authCard}>
      <button className={css.closeBtn} type="button">
        <svg width="32" height="32">
          <use href="../../../public/icons.svg#close"></use>
        </svg>
      </button>
      <h2 className={css.authTitle}>Registration</h2>
      <p className={css.authDescr}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
    </div>
  );
};

export default AuthForm;
