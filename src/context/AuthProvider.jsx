import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.js";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserInfo({
          name: user.displayName,
          email: user.email,
        });
      } else {
        setIsLoggedIn(false);
        setUserInfo({
          name: "",
          email: "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      await auth.currentUser.reload();

      setUserInfo({
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      });

      setIsLoggedIn(true);
    } catch (error) {
      console.error("Registration error:", error.message);
      setIsLoggedIn(false);
      setUserInfo({
        name: "",
        email: "",
      });
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUserInfo({
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      });

      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login error:", error.message);
      setIsLoggedIn(false);
      setUserInfo({
        name: "",
        email: "",
      });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserInfo({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Logout error:", error.message);
      setIsLoggedIn(false);
      setUserInfo({
        name: "",
        email: "",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userInfo, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
