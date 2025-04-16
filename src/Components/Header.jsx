import { NavLink } from "react-router-dom";

export default function Header() {
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
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link text-white"
                                        to={'/about'}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link text-white"
                                        to={'/contact'}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}