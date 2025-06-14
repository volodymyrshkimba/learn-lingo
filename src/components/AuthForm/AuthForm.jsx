import { useState } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "../../context/AuthContext";

import css from "./AuthForm.module.css";

const AuthForm = ({ login, handleAuthFormClose }) => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    //  formState: { errors },
  } = useForm();

  const [passVisible, setPassVisible] = useState(false);

  const onSubmit = async ({ name, email, password }) => {
    if (login) {
      await auth.login(email, password);
      return;
    }
    await auth.register(name, email, password);
  };

  return (
    <div className={css.authCard}>
      <button
        className={css.closeBtn}
        onClick={() => handleAuthFormClose()}
        type="button"
      >
        <svg width="32" height="32">
          <use href="../../../public/icons.svg#close"></use>
        </svg>
      </button>
      <h2 className={css.authTitle}>{login ? "Log In" : "Registration"}</h2>
      <p className={css.authDescr}>
        {login
          ? "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
          : "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {!login && (
          <input
            className={css.input}
            {...register("name")}
            placeholder="Name"
          />
        )}
        <input
          className={css.input}
          type="email"
          {...register("email")}
          placeholder="Email"
        />
        <div className={css.pwdWrapper}>
          <input
            className={css.input}
            type={passVisible ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
          />
          <button
            className={css.showPwdBtn}
            onClick={() => setPassVisible(!passVisible)}
            type="button"
          >
            <svg width="20" height="20">
              <use
                href={`../../../public/icons.svg#${
                  passVisible ? "eye" : "eye-off"
                }`}
              ></use>
            </svg>
          </button>
        </div>

        <button className={css.btn} type="submit">
          {login ? "Log In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
