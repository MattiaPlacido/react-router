import { useState, useEffect } from "react";

const initialPostData = {
  title: "Default title",
  content: "Default content",
  image: "https://via.placeholder.com/600/771796",
  category: "Sport",
  published: true,
  id: -1,
};

export default function PostsPage() {
  const [postData, setPostData] = useState([initialPostData]);

  const getData = () => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data.posts);
      })
      .catch((error) => console.error("Errore nella richiesta SHOW :", error));
  };

  useEffect(getData, []);

  return (
    <main className="container py-5">
      <div className="row row-cols-2">
        {postData.map((post) => (
          <div className="card col-6" key={post.key}>
            <img
              src={post.image || "https://via.placeholder.com/600/771796"}
              className="card-img-top mx-auto w-100 "
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text fs-6">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
