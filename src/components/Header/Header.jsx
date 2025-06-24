import Navigation from "../Navigation/Navigation";
import AuthButtons from "../AuthButtons/AuthButtons";
import UserInfo from "../UserInfo/UserInfo";
import MobMenu from "../MobMenu/MobMenu";

import css from "./Header.module.css";

import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div className={css.contentWrapper}>
        <Navigation />
        {isLoggedIn ? <UserInfo /> : <AuthButtons />}
        <MobMenu />
      </div>
    </header>
  );
};

export default Header;
