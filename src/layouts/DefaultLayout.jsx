import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  <div>
    <header>
      <h2>Header</h2>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <h2>Footer</h2>
    </footer>
  </div>;
}
