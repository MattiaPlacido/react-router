export default function Header() {
  return (
    <header className="bg-dark py-4">
      <div className="container d-flex justify-content-around">
        <a href="/" className="text-decoration-none text-light mx-2">
          Home
        </a>
        <a href="/about" className="text-decoration-none text-light mx-2">
          About
        </a>
        <a href="" className="text-decoration-none text-light mx-2">
          Lista Post
        </a>
      </div>
    </header>
  );
}
