import { fetchbooks } from "./slices/bookSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookLayout from "./layouts/BookLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AllBooksList from "./pages/AllBooksList/AllBooksList.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ManageBooks from "./pages/ManageBooks/ManageBooks.jsx";
import DetailOfBooks from "./components/DetailOfBooks/DetailOfBooks.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbooks());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<BookLayout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<AllBooksList />}>
            {/* Nested routes under /books */}
            <Route index element={<AllBooksList />} />
            <Route path="detail/:id" element={<DetailOfBooks />} />
          </Route>
          <Route path="/managebook" element={<ManageBooks />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
