import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() =>
  import("./pages/TeachersPage/TeachersPage.jsx")
);
const FavouritesPage = lazy(() =>
  import("./pages/FavouritesPage/FavouritesPage.jsx")
);

import Header from "./components/Header/Header.jsx";
import PageContainer from "./components/PageContainer/PageContainer.jsx";

// import css from "./App.module.css";

function App() {
  return (
    <main>
      <Suspense fallback={"LOADING..."}>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </PageContainer>
      </Suspense>
    </main>
  );
}

export default App;
