import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container d-flex justify-content-around">
        <NavLink href="/about" className="nav-link text-decoration-none mx-2">
          Chi siamo
        </NavLink>
        <NavLink
          href="https://instagram.com"
          className="nav-link text-decoration-none mx-2"
        >
          Instagram
        </NavLink>
        <NavLink
          href="https://youtube.com"
          className="nav-link text-decoration-none mx-2"
        >
          Youtube
        </NavLink>
        <NavLink
          href="https://twitter.com"
          className="nav-link text-decoration-none mx-2"
        >
          Twitter
        </NavLink>
        <NavLink
          href="https://gmail.com"
          className="nav-link text-decoration-none mx-2"
        >
          Gmail
        </NavLink>
      </div>
    </footer>
  );
}
