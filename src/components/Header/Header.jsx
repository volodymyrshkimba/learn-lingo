import Navigation from "../Navigation/Navigation";
import AuthButtons from "../AuthButtons/AuthButtons";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={css.contentWrapper}>
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
