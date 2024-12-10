import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initialPostData = {
  title: "Default title",
  content: "Default content",
  image: "https://via.placeholder.com/600/771796",
  category: "Sport",
  published: true,
  id: -1,
};

export default function SinglePost() {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState([initialPostData]);

  const getData = () => {
    fetch("http://localhost:3000/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCurrentPost(data);
      })
      .catch((error) => console.error("Errore nella richiesta SHOW :", error));
  };

  useEffect(getData, []);

  return (
    <main className="container py-5 text-center">
      <p className="fs-1">Stai guardando il post id: {id}</p>
      <div className="card">
        <img
          src={currentPost.image || "https://via.placeholder.com/600/771796"}
          className="card-img-top mx-auto w-100 "
        />
        <div className="card-body">
          <h5 className="card-title">{currentPost.title}</h5>
          <p className="card-text fs-6">{currentPost.content}</p>
        </div>
      </div>
    </main>
  );
}
