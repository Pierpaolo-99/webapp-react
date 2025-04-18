import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieReviewForm({ movieId }) {

    const api_url = "http://localhost:3000/api/v1/movies/" + movieId + "/review";
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState(false);

    function isFormValid(data) {
        const { name, text, vote } = data;
        const errors = {};

        if (!name) {
            errors.name = "Name is required";
        }

        if (name.length < 3) {
            errors.name = "Name must be at least 3 characters long";
        }

        if (!text) {
            errors.text = "Review is required";
        }

        if (text.length < 10) {
            errors.text = "Review must be at least 10 characters long";
        }

        if (!vote || vote < 1 || vote > 5) {
            errors.vote = "Vote must be between 1 and 5";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!isFormValid(formData)) {
            console.log("Form is not valid");
            return;
        }

        console.log("Form submitted", formData);

        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.error) {
                    console.log(data.error);
                    return;
                }

                console.log("Review submitted successfully", data);
                if (data?.message) {

                    setSuccess(data.message);

                    setTimeout(() => {
                        navigate(0);
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
            });


    }

    return (
        <>
            <div className="container">

                <div className="add-reviews my-5 p-4 border rounded shadow-sm bg-light">

                    <h2 className="mb-3">Add a Review</h2>

                    {Object.keys(formErrors).length > 0 && (
                        <div className="alert alert-danger" role="alert">
                            <ul className="mb-0">
                                {Object.keys(formErrors).map(key => (
                                    <li key={key}>{formErrors[key]}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {success && (
                        <div className="alert alert-success" role="alert">
                            {success}
                        </div>
                    )}

                    <form action="POST" className="mb-3" onSubmit={handleFormSubmit}>

                        <div className="mb-3">

                            <label htmlFor="name" className="form-label">Name</label>

                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label htmlFor="text" className="form-label">Review</label>

                            <textarea
                                className="form-control"
                                id="text"
                                rows="3"
                                placeholder="Write your text here..."
                                value={formData.text}
                                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                required></textarea>

                        </div>

                        <div className="mb-3">

                            <label htmlFor="rating" className="form-label">Rating</label>

                            <input
                                type="number"
                                className="form-control"
                                id="rating"
                                min={1}
                                max={5}
                                placeholder="Rate the movie (1-5)"
                                value={formData.vote}
                                onChange={(e) => setFormData({ ...formData, vote: Number(e.target.value) })}
                                required
                            />

                        </div>

                        <button type="submit" className="btn btn-primary">Submit Review</button>

                    </form>

                </div>

            </div>
        </>
    )
}