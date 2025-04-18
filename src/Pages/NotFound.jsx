import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="mb-4 text-secondary">Page Not Found</h2>
            <p className="text-muted text-center">
                Oops! The page you are looking for does not exist. <br />
                It might have been moved or deleted.
            </p>
            <Link to={'/'} className="btn btn-primary mt-4">
                Go Back to Home
            </Link>
        </div>
    )
}