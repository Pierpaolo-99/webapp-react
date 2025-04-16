import { useState, useEffect } from "react"

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            })
    }, [])

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to MovieHub</h1>
                    <p className="col-md-8 fs-4">
                        Discover a world of movies! Browse through our collection and find your next favorite film.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Browse Movies
                    </button>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    {movies.map((movie) => (
                        <div className="col-md-4 mb-4" key={movie.id}>
                            <div className="card h-100">
                                <img
                                    src={`http://localhost:3000/images/${movie.image}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <a href={`/movies/${movie.id}`} className="btn btn-primary">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}