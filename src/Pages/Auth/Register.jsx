import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Register() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const registerUrl = "http://localhost:3000/api/v1/movies/register";

    const initialForm = {
        username: "",
        email: "",
        password: ""
    };

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted:", form);

        fetch(registerUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response data:", data);
                if (data.user) {
                    login(form.email, form.password).then(() => navigate('/admin'))
                }
            })
            .catch(err => {
                console.error("Error:", err);
            })
            .finally(() => {
                setForm(initialForm);
            });
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
                    <h1 className="text-center mb-4">Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                value={form.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to={'/login'} className="text-decoration-none">Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}