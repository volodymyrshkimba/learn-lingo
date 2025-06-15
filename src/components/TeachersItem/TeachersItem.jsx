import { useState } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

import Button from "../Button/Button";
import ReviewerItem from "../ReviewerItem/ReviewerItem";

import css from "./TeachersItem.module.css";

const TeachersItem = ({
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  levels,
  name,
  surname,
  price_per_hour,
  rating,
  reviews,
  id,
  toggleFavorite,
  isFavorite,
}) => {
  const { theme } = useTheme();
  const [readMore, setReadMore] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <li className={css.teacherCard}>
      <div className={css.avatarSide}>
        <div className={clsx(css.imgWrapper, css[theme])}>
          <img
            className={css.img}
            src={avatar_url}
            alt="avatar"
            width={96}
            height={96}
          />
        </div>
        <span className={css.liveMark}></span>
      </div>
      <div className={css.teacherInfo}>
        <div className={css.teacherHeader}>
          <div className={css.nameBlock}>
            <p className={css.nameDescr}>Languages</p>
            <p className={css.name}>
              {name}&nbsp;{surname}
            </p>
          </div>
          <div className={css.teacherStatsBtnWrapper}>
            <ul className={css.teacherStats}>
              <li className={css.statItem}>
                <svg width="16" height="16">
                  <use href="../../../public/icons.svg#book"></use>
                </svg>
                Lessons online
              </li>
              <li>Lessons done: {lessons_done}</li>
              <li className={css.statItem}>
                <svg width="16" height="16">
                  <use href="../../../public/icons.svg#star"></use>
                </svg>
                Rating:&nbsp;{rating}
              </li>
              <li>
                Price / 1 hour:
                <span className={css.priceAccent}>&nbsp;{price_per_hour}$</span>
              </li>
            </ul>
            <button
              onClick={() => {
                if (!isLoggedIn) {
                  return toast("Please sign in to use a favorites list!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                  });
                }
                toggleFavorite({
                  avatar_url,
                  conditions,
                  experience,
                  languages,
                  lesson_info,
                  lessons_done,
                  levels,
                  name,
                  surname,
                  price_per_hour,
                  rating,
                  reviews,
                  id,
                });
              }}
              type="button"
            >
              <svg
                className={clsx(
                  css.heart,
                  isFavorite(id) && css.active,
                  css[theme]
                )}
                width="26"
                height="26"
              >
                <use href="../../../public/icons.svg#heart"></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.mainDercriptionList}>
          <li className={css.mainDercriptionItem}>
            <span className={css.mainDescrKeyWord}>Speaks:&nbsp;</span>
            <span className={css.languages}>{languages.join(", ")}</span>
          </li>
          <li className={css.mainDercriptionItem}>
            <span className={css.mainDescrKeyWord}>Lesson Info:&nbsp;</span>
            {lesson_info}
          </li>
          <li className={css.mainDercriptionItem}>
            <span className={css.mainDescrKeyWord}>Conditions:&nbsp;</span>
            {conditions.join(" ")}
          </li>
        </ul>
        {readMore && (
          <>
            <p className={css.summary}>{experience}</p>
            <ul className={css.reviewsList}>
              {reviews.map((review) => (
                <ReviewerItem key={review.comment} {...review} />
              ))}
            </ul>
          </>
        )}
        {!readMore && (
          <button
            onClick={() => setReadMore(true)}
            className={css.readMoreBtn}
            type="button"
          >
            Read more
          </button>
        )}
        <ul className={css.languageLevelsList}>
          {levels.map((level) => (
            <li
              key={level}
              className={clsx(css.languageLevelsItem, css[theme])}
            >
              {level}
            </li>
          ))}
        </ul>
        {readMore && (
          <Button size={48} as="button">
            Book trial lesson
          </Button>
        )}
      </div>
    </li>
  );
};

export default TeachersItem;
