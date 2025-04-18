import { Link } from "react-router-dom"

export default function HomeMovieCard({ movie }) {

    return (
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
    )
}