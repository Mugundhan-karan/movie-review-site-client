const API_URL = 'http://localhost:6030/api';

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${API_URL}/movies/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};

export const submitReview = async (movieId, reviewData) => {
  const response = await fetch(`${API_URL}/movies/${movieId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
  });
  if (!response.ok) {
    throw new Error('Failed to submit review');
  }
  return response.json();
};