import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, submitReview } from '../services/api';
import ReviewForm from '../components/ReviewForm';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const fetchedMovie = await fetchMovieDetails(id);
        setMovie(fetchedMovie);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);

  const handleSubmitReview = async (reviewData) => {
    try {
      await submitReview(id, reviewData);
      const updatedMovie = await fetchMovieDetails(id);
      setMovie(updatedMovie);
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!movie) return <div className="text-center text-2xl text-gray-800">Movie not found</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img src={movie.poster} alt={movie.title} className="h-48 w-full object-cover md:h-full md:w-48" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{movie.year}</div>
          <h1 className="mt-1 text-4xl font-bold text-gray-900">{movie.title}</h1>
          <p className="mt-2 text-gray-600">{movie.description}</p>
        </div>
      </div>
      <div className="px-8 py-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
        {movie.reviews.length > 0 ? (
          movie.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <p className="text-gray-800">{review.text}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                <span className="text-gray-400">{'★'.repeat(10 - review.rating)}</span>
                <span className="ml-2 text-sm text-gray-600">{review.rating}/10</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet. Be the first to review!</p>
        )}
      </div>
      <div className="px-8 py-6">
        <ReviewForm onSubmit={handleSubmitReview} />
      </div>
    </div>
  );
}

export default MovieDetailPage;