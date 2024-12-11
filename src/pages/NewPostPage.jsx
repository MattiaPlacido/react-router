import { useState } from "react";

const initialFormData = {
  title: "",
  content: "",
  image: "",
  category: "sport",
  published: true,
};

export default function NewPostPage() {
  const [articleFormData, setArticleFormData] = useState(initialFormData);

  // STORE
  const storeData = (item) => {
    fetch("http://localhost:3000/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(item),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nell'aggiunta dell'articolo");
        return res.json();
      })
      .then((data) => {
        console.log(`L'articolo è stato aggiunto con successo:`, data);
      })
      .catch((error) => console.error("Errore nella richiesta POST :", error));
  };

  //HANDLERS
  function handleArticleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setArticleFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
  }

  const handleFormSubmit = (e) => {
    const { title, content, image, published, category } = articleFormData;
    //l'id è assegnato da una funzione nel server
    if (!title || !content) {
      //non controllo il resto dei campi perchè sono presenti opzioni di default / sostitutive nel caso dell'immagine
      alert("Sono presenti dei campi non compilati");
      return;
    }

    e.preventDefault();

    storeData(articleFormData);
    setArticleFormData(initialFormData);
  };

  //DOM
  return (
    <div className="container py-5 text-light">
      <form onSubmit={handleFormSubmit}>
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
