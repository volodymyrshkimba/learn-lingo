import clsx from "clsx";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

import css from "./UserInfo.module.css";

const UserInfo = () => {
  const { theme } = useTheme();

  const { userInfo, logout } = useAuth();

  return (
    <div className={css.userInfoWrapper}>
      <div className={css.userInfo}>
        <span className={clsx(css.userAvatar, css[theme])}>
          <svg width="16" height="16">
            <use href="../../../public/icons.svg#user"></use>
          </svg>
        </span>
        <p>{userInfo.name}</p>
      </div>
      <button
        className={css.logoutBtn}
        onClick={async () => await logout()}
        type="button"
        data-type="login"
      >
        <svg className={clsx(css[theme], css.icon)} width="20" height="20">
          <use href="../../../public/icons.svg#log-in"></use>
        </svg>
        Log out
      </button>
    </div>
  );
};

export default UserInfo;
