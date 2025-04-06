import { Link } from "react-router-dom";

import css from "./PageLogo.module.css";

const PageLogo = () => {
  return (
    <Link className={css.logoLink} to={"/"}>
      <img src="../../../public/ukraine.png" alt="Ukraine Flag" />
      <p className={css.logoText}>LearnLingo</p>
    </Link>
  );
};

export default PageLogo;
