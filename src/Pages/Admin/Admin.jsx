import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Admin() {
    const [movies, setMovies] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        // Check if user is logged in
        if (!user) {
            navigate("/login");
        }

        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data);
            })
            .catch(err => {
                console.error("Error fetching movies:", err);
            });
    }, []);

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3 shadow">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-3 fw-bold text-primary">Welcome to MovieHub Admin</h1>
                    <p className="col-md-8 mx-auto fs-4 text-secondary">
                        Manage your movies here! Add, edit, or delete movies from your collection.
                    </p>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row align-items-center mb-4">
                    <div className="col-md-6">
                        <h2 className="text-center text-md-start">{user && `Welcome ${user?.username}`}</h2>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link className="btn btn-primary" to="/admin/movies/create">Add Movies</Link>
                    </div>
                </div>
                <table className="table table-striped table-bordered">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <tr key={movie.id}>
                                    <td>{movie.id}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No movies available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}