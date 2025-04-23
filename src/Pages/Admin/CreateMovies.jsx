import { useState } from "react";

export default function CreateMovies() {

    const [form, setForm] = useState({
        title: "",
        genre: "",
        director: "",
        release_year: "",
        abstract: "",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="card shadow p-4 my-4" style={{ width: "100%", maxWidth: "600px" }}>
                <h1 className="text-center mb-4">Create New Movie</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Enter movie title"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="genre"
                            name="genre"
                            placeholder="Enter movie genre"
                            value={form.genre}
                            onChange={(e) => setForm({ ...form, genre: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input
                            type="text"
                            className="form-control"
                            id="director"
                            name="director"
                            placeholder="Enter director's name"
                            value={form.director}
                            onChange={(e) => setForm({ ...form, director: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="release_year" className="form-label">Release Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="release_year"
                            name="release_year"
                            placeholder="Enter release year"
                            value={form.release_year}
                            onChange={(e) => setForm({ ...form, release_year: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea
                            className="form-control"
                            id="abstract"
                            name="abstract"
                            rows="3"
                            placeholder="Enter movie abstract"
                            value={form.abstract}
                            onChange={(e) => setForm({ ...form, abstract: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Movie</button>
                </form>
            </div>
        </div>
    );
}