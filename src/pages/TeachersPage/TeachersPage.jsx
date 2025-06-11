import { useEffect, useState } from "react";
import { endAt, onValue, orderByKey, query, startAt } from "firebase/database";

import { teachersRef } from "../../firebase/firebase";
import { objToArrAndClearEmptyArrValues } from "../../utils/objToArrAndClearEmptyArrValues";
import { useFavorites } from "../../hooks/useFavorites";

import TeachersItem from "../../components/TeachersItem/TeachersItem";
import Button from "../../components/Button/Button";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

import css from "./TeachersPage.module.css";

const languages = ["French", "English", "German", "Ukrainian", "Polish"];

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [value, setValue] = useState({
    lang: "",
    level: "",
    price: "",
  });

  const [page, setPage] = useState(0);
  const teachersTotal = 30;

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

  return (
    <div className={css.teachersPage}>
      <div className={css.teachersPageContainer}>
        <CustomSelect options={languages} placeholder={"Languages"} />
        <ul className={css.teachersList}>
          {teachers.length !== 0 &&
            teachers.map((teacher) => (
              <TeachersItem
                key={teacher.id}
                {...teacher}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            ))}
        </ul>
        {teachers.length < teachersTotal && (
          <Button size={48} as="button" onClick={() => setPage(page + 1)}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default TeachersPage;
