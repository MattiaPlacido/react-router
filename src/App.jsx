import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// PAGINE
import HomePage from "./pages/HomePage";
// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          {<Route path="/about" element={<h2>AboutPage</h2>} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
