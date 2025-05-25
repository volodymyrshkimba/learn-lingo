import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { teachersRef } from "../../firebase/firebase";

import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    const unsubscribe = onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      setTeachers(data);
    });

    return () => unsubscribe();
  }, []);

  console.log(teachers);

  return (
    <div className={css.teachersPage}>
      <div className={css.teachersPageContainer}>
        <ul>
          <li className={css.teacherCard}>
            <div className={css.imgWrapper}>
              <img
                src="https://ftp.goit.study/img/avatars/2.jpg"
                alt="avatar"
                width={96}
                height={96}
              />
            </div>
            <div className={css.teacherInfo}>
              <div className={css.teacherHeader}>
                <div className={css.nameBlock}>
                  <p className={css.nameDescr}>Languages</p>
                  <p className={css.name}>Jane Smith</p>
                </div>
                <div className={css.teacherStatsBtnWrapper}>
                  <ul className={css.teacherStats}>
                    <li className={css.statItem}>
                      <svg width="16" height="16">
                        <use href="../../../public/icons.svg#book"></use>
                      </svg>
                      Lessons online
                    </li>
                    <li>Lessons done: 1098</li>
                    <li className={css.statItem}>
                      <svg width="16" height="16">
                        <use href="../../../public/icons.svg#star"></use>
                      </svg>
                      Rating: 4.8
                    </li>
                    <li>
                      Price / 1 hour:
                      <span className={css.priceAccent}> 30$</span>
                    </li>
                  </ul>
                  <button type="button">
                    <svg width="26" height="22">
                      <use href="../../../public/icons.svg#heart"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className={css.mainDercriptionList}>
                <li className={css.mainDercriptionItem}>
                  <span className={css.mainDescrKeyWord}>Speaks: </span>
                  <span className={css.languages}>German, French</span>
                </li>
                <li className={css.mainDercriptionItem}>
                  <span className={css.mainDescrKeyWord}>Lesson Info:</span>{" "}
                  Lessons are structured to cover grammar, vocabulary, and
                  practical usage of the language.
                </li>
                <li className={css.mainDercriptionItem}>
                  <span className={css.mainDescrKeyWord}>Conditions:</span>{" "}
                  Welcomes both adult learners and teenagers (13 years and
                  above).Provides personalized study plans
                </li>
              </ul>
              {/* Load More JSX */}
              <p className={css.summary}>
                Jane is an experienced and dedicated language teacher
                specializing in German and French. She holds a Bachelor's degree
                in German Studies and a Master's degree in French Literature.
                Her passion for languages and teaching has driven her to become
                a highly proficient and knowledgeable instructor. With over 10
                years of teaching experience, Jane has helped numerous students
                of various backgrounds and proficiency levels achieve their
                language learning goals. She is skilled at adapting her teaching
                methods to suit the needs and learning styles of her students,
                ensuring that they feel supported and motivated throughout their
                language journey.
              </p>
              <button className={css.readMoreBtn} type="button">
                Read more
              </button>
              <ul className={css.languageLevelsList}>
                <li className={css.languageLevelsItem}>#A1 Beginner</li>
                <li className={css.languageLevelsItem}>#A2 Elementary</li>
                <li className={css.languageLevelsItem}>#B1 Intermediate</li>
                <li className={css.languageLevelsItem}>
                  #B2 Upper-Intermediate
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeachersPage;
