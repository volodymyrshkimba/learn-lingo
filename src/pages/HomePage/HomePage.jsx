import clsx from "clsx";

import Button from "../../components/Button/Button";
import MotionPageWrapper from "../../components/MotionPageWrapper/MotionPageWrapper";

import { STATS } from "../../constants/ui";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

import css from "./HomePage.module.css";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <MotionPageWrapper>
      <div className={css.homePageContainer}>
        <div className={css.textImageWrapper}>
          <div className={css.textSide}>
            <h1 className={css.title}>
              Unlock your potential with the best&nbsp;
              <span className={clsx(css.accent, css[theme])}>language</span>
              &nbsp;tutors
            </h1>
            <p className={css.description}>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Button size={88} as="link" to="/teachers">
              Get started
            </Button>
          </div>
          <div className={clsx(css.imageSide, css[theme])}></div>
        </div>
        <ul className={clsx(css.statsList, css[theme])}>
          {STATS.map((stat) => (
            <li key={stat.description} className={css.statsItem}>
              <p className={css.statsValue}>{`${stat.value.toLocaleString(
                "en-US"
              )} +`}</p>
              <p className={css.statsDesc}>{stat.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </MotionPageWrapper>
  );
};

export default HomePage;
