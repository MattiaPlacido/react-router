import { useState, useEffect } from "react";

export default function PostsPage() {
  const [postData, setPostData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => console.error("Errore nella richiesta SHOW :", error));
  };

  useEffect(getData, []);

  return (
    <main className="container py-5 text-center">
      <h2>Lista dei post :</h2>
      {postData.map((post) => (
        <p>{post.id}</p>
      ))}
    </main>
  );
}
