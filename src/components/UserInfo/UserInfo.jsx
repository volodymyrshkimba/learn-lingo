import clsx from "clsx";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

import css from "./UserInfo.module.css";

const UserInfo = ({ mobmenu }) => {
  const { theme } = useTheme();

  const { userInfo, logout } = useAuth();

  return (
    <div className={clsx(css.userInfoWrapper, mobmenu && css.mobMenu)}>
      <div className={css.userInfo}>
        <span className={clsx(css.userAvatar, css[theme])}>
          <svg width="16" height="16">
            <use href="/icons.svg#user"></use>
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
          <use href="/icons.svg#log-in"></use>
        </svg>
        Log out
      </button>
    </div>
  );
};

export default UserInfo;
