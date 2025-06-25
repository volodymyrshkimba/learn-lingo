import { useEffect, useState } from "react";
import { onValue } from "firebase/database";

import { teachersRef } from "../../firebase/firebase";
import { objToArrAndClearEmptyArrValues } from "../../utils/objToArrAndClearEmptyArrValues";
import { useFavorites } from "../../hooks/useFavorites";

import TeachersItem from "../../components/TeachersItem/TeachersItem";
import Button from "../../components/Button/Button";
import Filters from "../../components/Filters/Filters";
import MotionPageWrapper from "../../components/MotionPageWrapper/MotionPageWrapper";
import Loader from "../../components/Loader/Loader";

import { PAGE_SIZE } from "../../constants/ui";

import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [filter, setFilter] = useState({
    lang: "",
    level: "",
    price: "",
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const unsubscribe = onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      const dataToArray = objToArrAndClearEmptyArrValues(data);
      setTeachers(dataToArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLevel =
      filter.level === "" || teacher.levels.includes(filter.level);
    const matchesLang =
      filter.lang === "" || teacher.languages.includes(filter.lang);
    const matchesPrice =
      filter.price === "" || teacher.price_per_hour === Number(filter.price);

    return matchesLevel && matchesLang && matchesPrice;
  });

  const totalPages = Math.ceil(filteredTeachers.length / PAGE_SIZE);

  const pagedTeachers = filteredTeachers.slice(0, page * PAGE_SIZE);

  return (
    <MotionPageWrapper>
      <div className={css.teachersPage}>
        <div className={css.teachersPageContainer}>
          <div className={css.filtersWrapper}>
            <Filters filter={filter} setFilter={setFilter} />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <ul className={css.teachersList}>
              {pagedTeachers.length !== 0 &&
                pagedTeachers.map((teacher) => (
                  <TeachersItem
                    key={teacher.id}
                    {...teacher}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                  />
                ))}
            </ul>
          )}
          {pagedTeachers.length > 0 && totalPages !== page ? (
            <Button size={48} as="button" onClick={() => setPage(page + 1)}>
              Load more
            </Button>
          ) : (
            <div className={css.emptyMessage}>No teachers found</div>
          )}
        </div>
      </div>
    </MotionPageWrapper>
  );
};

export default TeachersPage;
