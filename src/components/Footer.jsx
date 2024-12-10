export default function Footer() {
  return (
    <footer className="bg-dark py-4">
      <div className="container d-flex justify-content-around">
        <a href="/about" className="text-decoration-none text-light mx-2">
          Chi siamo
        </a>
        <a
          href="https://instagram.com"
          className="text-decoration-none text-light mx-2"
        >
          Instagram
        </a>
        <a
          href="https://youtube.com"
          className="text-decoration-none text-light mx-2"
        >
          Youtube
        </a>
        <a
          href="https://twitter.com"
          className="text-decoration-none text-light mx-2"
        >
          Twitter
        </a>
        <a
          href="https://gmail.com"
          className="text-decoration-none text-light mx-2"
        >
          Gmail
        </a>
      </div>
    </footer>
  );
}
