import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Header() {

    const { user, logout } = useAuth();

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
                    <div className="container">

                        <NavLink className="navbar-brand fw-bold" to={'/'}>
                            MovieHub
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link text-white"
                                        to={'/'}
                                        aria-current="page"
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                {
                                    !user && (
                                        <>
                                            <li className="nav-item">
                                                <NavLink
                                                    className="nav-link text-white"
                                                    to={'/login'}
                                                >
                                                    Login
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    className="nav-link text-white"
                                                    to={'/register'}
                                                >
                                                    Register
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }

                                {
                                    user && (
                                        <>
                                            <li className="nav-item">
                                                <NavLink
                                                    className="nav-link text-white"
                                                    to={'/admin'}
                                                >
                                                    Admin
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className="btn btn-link nav-link text-white"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </>
                                    )
                                }


                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}