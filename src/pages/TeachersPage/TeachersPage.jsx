import { useEffect, useState } from "react";
import { endAt, onValue, orderByKey, query, startAt } from "firebase/database";
import { teachersRef } from "../../firebase/firebase";

import TeachersItem from "../../components/TeachersItem/TeachersItem";
import Button from "../../components/Button/Button";

import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(0);
  const teachersTotal = 30;
  console.log(teachers);

  useEffect(() => {
    const teachersQuery = query(
      teachersRef,
      orderByKey(),
      startAt((0 + page * 4).toString()),
      endAt((3 + page * 4).toString())
    );

    const unsubscribe = onValue(teachersQuery, (snapshot) => {
      const data = snapshot.val();

      const dataToArray = data
        ? Array.isArray(data)
          ? data.filter(() => true)
          : Object.entries(data).map(([_, value]) => ({ ...value }))
        : [];

      setTeachers((prev) => [...prev, ...dataToArray]);
    });

    return () => unsubscribe();
  }, [page]);

  return (
    <div className={css.teachersPage}>
      <div className={css.teachersPageContainer}>
        <ul className={css.teachersList}>
          {teachers.length !== 0 &&
            teachers.map((teacher) => (
              <TeachersItem key={teacher.avatar_url} {...teacher} />
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
