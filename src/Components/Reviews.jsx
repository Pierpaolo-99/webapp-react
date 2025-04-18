export default function Reviews({ reviews }) {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi ${i <= rating ? "bi-star-fill text-warning" : "bi-star text-muted"}`}
                ></i>
            );
        }
        return stars;
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Reviews</h2>
            {reviews && reviews.length > 0 ? (
                <ul className="list-group">
                    {reviews.map((review) => (
                        <li key={review.id} className="list-group-item">
                            <h5 className="fw-bold">{review.name}</h5>
                            <p>{review.text}</p>
                            <div className="d-flex align-items-center">
                                <span className="me-2"><strong>Rating:</strong></span>
                                <div>{renderStars(review.vote)}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted">No reviews available for this movie.</p>
            )}
        </div>
    )
}