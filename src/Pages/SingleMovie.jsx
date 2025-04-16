import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    return (
        <>
            <div className="container my-5">
                <div className="row g-4">

                    <div className="col-md-6">
                        <img
                            src={`http://localhost:3000/images/${movie.image}`}
                            className="img-fluid rounded shadow"
                            alt={movie.title}
                        />
                    </div>

                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold">{movie.title}</h1>
                        <p className="text-muted"><strong>Director:</strong> {movie.director}</p>
                        <p className="text-muted"><strong>Genre:</strong> {movie.genre}</p>
                        <p className="lead">{movie.abstract}</p>
                        <p className="text-muted"><strong>Release Year:</strong> {movie.release_year}</p>
                        <a href="/" className="btn btn-primary mt-3">Back to Movies</a>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="mb-4">Reviews</h2>
                {movie.reviews && movie.reviews.length > 0 ? (
                    <ul className="list-group">
                        {movie.reviews.map((review) => (
                            <li key={review.id} className="list-group-item">
                                <h5 className="fw-bold">{review.reviewer_name}</h5>
                                <p>{review.text}</p>
                                <p className="text-muted">
                                    <strong>Rating:</strong> {review.vote}/10
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">No reviews available for this movie.</p>
                )}
            </div>
        </>
    );
}