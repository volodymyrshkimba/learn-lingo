import { useState, useEffect } from "react";

const FAVORITES_KEY = "favoriteTeachers";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (teacher) => {
    setFavorites((prev) => [...prev, teacher]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((teacher) => teacher.id !== id));
  };

  const isFavorite = (id) => favorites.some((teacher) => teacher.id === id);

  const toggleFavorite = (teacher) => {
    isFavorite(teacher.id) ? removeFavorite(teacher.id) : addFavorite(teacher);
  };

  return { favorites, isFavorite, toggleFavorite };
};
