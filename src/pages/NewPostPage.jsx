import { useState } from "react";

const initialFormData = {
  title: "prova",
  content: "",
  image: "",
  category: "sport",
  published: true,
};

export default function NewPostPage() {
  const [articleFormData, setArticleFormData] = useState(initialFormData);

  function handleArticleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setArticleFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
  }

  return (
    <div className="container py-5 text-light">
      <form>
        {/* titolo */}
        <div className="mb-3">
          <label htmlFor="post-title" className="form-label">
            Titolo
          </label>
          <input
            type="text"
            className="form-control"
            id="post-title"
            name="title"
            value={articleFormData.title}
            onChange={handleArticleFormData}
          />
        </div>
        {/* contenuto */}
        <div className="mb-3">
          <label htmlFor="post-content" className="form-label">
            Contenuto
          </label>
          <input
            type="text"
            className="form-control"
            id="post-content"
            name="content"
            value={articleFormData.content}
            onChange={handleArticleFormData}
          />
        </div>
        {/* immagine */}
        <div className="mb-3">
          <label htmlFor="post-image" className="form-label">
            Immagine
          </label>
          <input
            type="text"
            className="form-control"
            id="post-image"
            name="image"
            value={articleFormData.image}
            onChange={handleArticleFormData}
          />
        </div>
        {/* categoria */}
        <div className="mb-3">
          <label htmlFor="post-category" className="form-label">
            Categoria
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="category"
            value={articleFormData.category}
            onChange={handleArticleFormData}
            id="post-category"
          >
            <option value="music">Musica</option>
            <option value="news">News</option>
            <option value="gaming">Gaming</option>
            <option value="sport">Sport</option>
            <option value="politics">Politica</option>
          </select>
        </div>
        {/* stato pubblicazione */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="post-published-state"
            name="published"
            checked={articleFormData.published}
            onChange={handleArticleFormData}
          />
          <label className="form-check-label" htmlFor="post-published-state">
            Pubblica
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
