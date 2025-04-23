import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Login() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const initialForm = {
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

        login(form.email, form.password)
            .then(data => {
                console.log("Response data:", data);
                if (data.user) {
                    navigate("/admin");
                } else {
                    alert("Login failed. Please check your credentials.");
                }
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Login failed. Please try again.");
            })
            .finally(() => {
                setForm(initialForm);
            });
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
                    <h1 className="text-center mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email" name="email"
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
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to={"/forgot-password"} className="text-decoration-none">Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
