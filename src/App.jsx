import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() =>
  import("./pages/TeachersPage/TeachersPage.jsx")
);
const FavouritesPage = lazy(() =>
  import("./pages/FavouritesPage/FavouritesPage.jsx")
);

import { useAuth } from "./context/AuthContext.js";

import Header from "./components/Header/Header.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Suspense fallback={<Loader />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/teachers" element={<TeachersPage />} />
                  <Route
                    path="/favourites"
                    element={
                      <PrivateRoute
                        restrictedTo="/"
                        component={<FavouritesPage />}
                      />
                    }
                  />
                </Routes>
              </AnimatePresence>
            </Suspense>
            <ToastContainer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
