import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// PAGINE
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePost from "./pages/SinglePost";
// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
