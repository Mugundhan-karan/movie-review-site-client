import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ review, rating });
    setReview('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Submit a Review</h3>
      <div className="mb-4">
        <label htmlFor="review" className="block text-gray-700 text-sm font-bold mb-2">
          Your Review
        </label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
          rows="4"
          placeholder="Write your review here..."
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
          Rating
        </label>
        <input
          id="rating"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;