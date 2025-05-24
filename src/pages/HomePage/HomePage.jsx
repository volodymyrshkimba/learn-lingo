import Button from "../../components/Button/Button";

import stats from "../../stats.json";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <div className={css.textImageWrapper}>
        <div className={css.textSide}>
          <h1 className={css.title}>
            Unlock your potential with the best&nbsp;
            <span className={css.accent}>language</span>&nbsp;tutors
          </h1>
          <p className={css.description}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Button size={88} as="link" to="/teachers">
            Get started
          </Button>
        </div>
        <div className={css.imageSide}></div>
      </div>
      <ul className={css.statsList}>
        {stats.map((stat) => (
          <li key={stat.description} className={css.statsItem}>
            <p className={css.statsValue}>{`${stat.value.toLocaleString(
              "en-US"
            )} +`}</p>
            <p className={css.statsDesc}>{stat.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
