import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data);
            });
    }, []);

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3 shadow">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-3 fw-bold text-primary">Welcome to MovieHub</h1>
                    <p className="col-md-8 mx-auto fs-4 text-secondary">
                        Discover a world of movies! Browse through our collection and find your next favorite film.
                    </p>
                </div>
            </div>


            <div className="container my-5">
                <h2 className="text-center mb-4 text-primary">Our Movie Collection</h2>
                <div className="row g-4">
                    {movies.map((movie) => (
                        <div className="col-md-4" key={movie.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`http://localhost:3000/images/${movie.image}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary">{movie.title}</h5>
                                    <p className="card-text text-muted">
                                        {movie.abstract?.substring(0, 100)}...
                                    </p>
                                    <Link
                                        to={`/movies/${movie.id}`}
                                        className="btn btn-outline-primary mt-auto"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}