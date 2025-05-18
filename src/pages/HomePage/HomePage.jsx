import { Link } from "react-router-dom";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <div className={css.textImageWrapper}>
        <div className={css.textSide}>
          <h1 className={css.title}>
            Unlock your potential with the best
            <span className={css.accent}>language</span> tutors
          </h1>
          <p className={css.description}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link to="/teachers">Get started</Link>
        </div>
        <div className={css.imageSide}>ImageSide</div>
      </div>
      <div className={css.stats}>Stats</div>
    </div>
  );
};

export default HomePage;
