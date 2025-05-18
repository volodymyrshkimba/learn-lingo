import Navigation from "../Navigation/Navigation";
import AuthButtons from "../AuthButtons/AuthButtons";

import css from "./Header.module.css";

import { useAuth } from "../../context/AuthContext";
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div className={css.contentWrapper}>
        <Navigation />
        {isLoggedIn ? <UserInfo /> : <AuthButtons />}
      </div>
    </header>
  );
};

export default Header;
