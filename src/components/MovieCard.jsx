import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-32 h-auto object-cover"
        />
        
        
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{movie.title}</h2>
            <p className="text-gray-600 mb-2">{movie.year}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">{movie.reviews.length} reviews</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {movie.reviews.length > 0
                ? (movie.reviews.reduce((acc, review) => acc + review.rating, 0) / movie.reviews.length).toFixed(1)
                : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
