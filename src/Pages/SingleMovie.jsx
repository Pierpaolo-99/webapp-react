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

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi ${i <= rating ? "bi-star-fill text-warning" : "bi-star text-muted"}`}
                ></i>
            );
        }
        return stars;
    };

    return (
        <>
            <div className="container my-5">
                <div className="row g-4">

                    <div className="col-md-6">
                        <img
                            src={`http://localhost:3000/images/${movie.image}`}
                            className="img-fluid rounded shadow"
                            alt={movie.title}
                            style={{ height: "600px", objectFit: "cover" }}
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
                {movie.review && movie.review.length > 0 ? (
                    <ul className="list-group">
                        {movie.review.map((review) => (
                            <li key={review.id} className="list-group-item">
                                <h5 className="fw-bold">{review.name}</h5>
                                <p>{review.text}</p>
                                <div className="d-flex align-items-center">
                                    <span className="me-2"><strong>Rating:</strong></span>
                                    <div>{renderStars(review.vote)}</div>
                                </div>
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