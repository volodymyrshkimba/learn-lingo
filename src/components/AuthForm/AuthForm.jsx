import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";

import { useAuth } from "../../context/AuthContext";

import { LoginSchema, RegisterSchema } from "../../validation/auth";

import css from "./AuthForm.module.css";

const AuthForm = ({ login, handleAuthFormClose, mobmenu }) => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(login ? LoginSchema : RegisterSchema),
  });

  const [passVisible, setPassVisible] = useState(false);

  const onSubmit = async ({ name, email, password }) => {
    if (login) {
      await auth.login(email, password);
      return;
    }
    await auth.register(name, email, password);
  };

  return (
    <div className={clsx(css.authCard, mobmenu && css.mobMenu)}>
      <button
        className={css.closeBtn}
        onClick={() => handleAuthFormClose()}
        type="button"
      >
        <svg width="32" height="32">
          <use href="/icons.svg#close"></use>
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
          <div className={css.inputWrapper}>
            <input
              className={clsx(css.input, errors.name && css.errorBorder)}
              {...register("name")}
              placeholder="Name"
            />
            {errors.name && (
              <span className={css.error}>{errors.name.message}</span>
            )}
          </div>
        )}
        <div className={css.inputWrapper}>
          <input
            className={clsx(css.input, errors.email && css.errorBorder)}
            type="email"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && (
            <span className={css.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={css.pwdWrapper}>
          <input
            className={clsx(css.input, errors.password && css.errorBorder)}
            type={passVisible ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <span className={css.error}>{errors.password.message}</span>
          )}
          <button
            className={css.showPwdBtn}
            onClick={() => setPassVisible(!passVisible)}
            type="button"
          >
            <svg width="20" height="20">
              <use href={`/icons.svg#${passVisible ? "eye" : "eye-off"}`}></use>
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
