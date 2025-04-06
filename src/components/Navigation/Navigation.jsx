import PageLogo from "../PageLogo/PageLogo";
import NavLinks from "../NavLinks/NavLinks";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.navWrapper}>
      <PageLogo />
      <NavLinks />
    </nav>
  );
};

export default Navigation;
