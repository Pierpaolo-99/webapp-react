import { useState, useEffect } from "react";
import HomeMovieCard from "../Components/HomeMovieCard";
import { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

export default function Home() {
    const [movies, setMovies] = useState([]);

    const { setIsLoading } = useContext(GlobalContext);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching movies:", err);
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
                        <HomeMovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    );
}