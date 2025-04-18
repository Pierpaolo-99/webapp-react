import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Components/Reviews";

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

            <Reviews reviews={movie.review} />
        </>
    );
}