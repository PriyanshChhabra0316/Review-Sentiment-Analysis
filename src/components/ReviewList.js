import React, { useEffect, useState } from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviewsData.json')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="review-list">
            {reviews.map((review, index) => (
                <ReviewHighlighter key={review.review_id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
