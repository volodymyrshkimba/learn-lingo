import { useState } from "react";
import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

import css from "./AuthForm.module.css";

const AuthForm = ({ login, handleAuthFormClose }) => {
  const {
    register,
    handleSubmit,
    //  formState: { errors },
  } = useForm();

  const [passVisible, setPassVisible] = useState(false);

  const onSubmit = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name) {
        await updateProfile(userCredential.user, {
          displayName: name,
        });
      }
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
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
            {passVisible ? (
              <svg width="20" height="20">
                <use href="../../../public/icons.svg#eye"></use>
              </svg>
            ) : (
              <svg width="20" height="20">
                <use href="../../../public/icons.svg#eye-off"></use>
              </svg>
            )}
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
