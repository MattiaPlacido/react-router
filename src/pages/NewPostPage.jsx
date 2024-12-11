const initialFormData = {
    title: "",
    content: "",
    image: "",
    category: "sport",
    published: true,
  };
  
  export default function NewPostPage() {
    return (
      <div className="container py-5 text-light">
        <form>
          <div class="mb-3">
            <label for="post-title" class="form-label">
              Titolo
            </label>
            <input type="text" class="form-control" id="post-title" />
          </div>
          <div class="mb-3">
            <label for="post-content" class="form-label">
              Contenuto
            </label>
            <input type="text" class="form-control" id="post-content" />
          </div>
          <div class="mb-3">
            <label for="post-image" class="form-label">
              Immagine
            </label>
            <input type="text" class="form-control" id="post-image" />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="post-published-state"
            />
            <label class="form-check-label" for="post-published-state">
              Pubblica
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  