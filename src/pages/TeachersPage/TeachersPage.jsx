import { useEffect, useState } from "react";
import { endAt, onValue, orderByKey, query, startAt } from "firebase/database";

import { teachersRef } from "../../firebase/firebase";
import { objToArrAndClearEmptyArrValues } from "../../utils/objToArrAndClearEmptyArrValues";
import { useFavorites } from "../../hooks/useFavorites";

import TeachersItem from "../../components/TeachersItem/TeachersItem";
import Button from "../../components/Button/Button";
import Filters from "../../components/Filters/Filters";

import css from "./TeachersPage.module.css";

const teachersTotal = 30;

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [filter, setFilter] = useState({
    lang: "",
    level: "",
    price: "",
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    const teachersQuery = query(
      teachersRef,
      orderByKey(),
      startAt((0 + page * 4).toString()),
      endAt((3 + page * 4).toString())
    );

    const unsubscribe = onValue(teachersQuery, (snapshot) => {
      const data = snapshot.val();

      const dataToArray = objToArrAndClearEmptyArrValues(data);

      setTeachers((prev) => [...prev, ...dataToArray]);
    });

    return () => unsubscribe();
  }, [page]);

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLevel =
      filter.level === "" || teacher.levels.includes(filter.level);
    const matchesLang =
      filter.lang === "" || teacher.languages.includes(filter.lang);
    const matchesPrice =
      filter.price === "" || teacher.price_per_hour === Number(filter.price);

    return matchesLevel && matchesLang && matchesPrice;
  });

  return (
    <div className={css.teachersPage}>
      <div className={css.teachersPageContainer}>
        <div className={css.filtersWrapper}>
          <Filters filter={filter} setFilter={setFilter} />
        </div>
        <ul className={css.teachersList}>
          {filteredTeachers.length !== 0 &&
            filteredTeachers.map((teacher) => (
              <TeachersItem
                key={teacher.id}
                {...teacher}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            ))}
        </ul>

        <Button
          disabled={
            teachers.length >= teachersTotal || filteredTeachers.length === 0
          }
          size={48}
          as="button"
          onClick={() => setPage(page + 1)}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default TeachersPage;
