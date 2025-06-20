import { useFavorites } from "../../hooks/useFavorites";

import TeachersItem from "../../components/TeachersItem/TeachersItem";
import MotionPageWrapper from "../../components/MotionPageWrapper/MotionPageWrapper";

import css from "./FavouritesPage.module.css";

const FavouritesPage = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <MotionPageWrapper>
      <section className={css.favouritesPage}>
        <div className={css.container}>
          {favorites.length !== 0 ? (
            <ul>
              {favorites.map((teacher) => (
                <TeachersItem
                  key={teacher.id}
                  {...teacher}
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />
              ))}
            </ul>
          ) : (
            <p className={css.emptyMessage}>
              You haven't added anyone to your favorites yet.
            </p>
          )}
        </div>
      </section>
    </MotionPageWrapper>
  );
};

export default FavouritesPage;
