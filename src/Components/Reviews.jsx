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

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">Reviews</h2>
            {reviews && reviews.length > 0 ? (
                <div className="row">
                    {reviews.map((review) => (
                        <div key={review.id} className="col-md-6 mb-4">
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="fw-bold mb-0">{review.name}</h5>
                                        <small className="text-muted">{formatDate(review.created_at)}</small>
                                    </div>
                                    <p className="text-muted">{review.text}</p>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2"><strong>Rating:</strong></span>
                                        <div>{renderStars(review.vote)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted text-center">No reviews available for this movie.</p>
            )}
        </div>
    );
}