import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() =>
  import("./pages/TeachersPage/TeachersPage.jsx")
);
const FavouritesPage = lazy(() =>
  import("./pages/FavouritesPage/FavouritesPage.jsx")
);

import Header from "./components/Header/Header.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={"LOADING..."}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route
              path="/favourites"
              element={
                <PrivateRoute restrictedTo="/" component={<FavouritesPage />} />
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
