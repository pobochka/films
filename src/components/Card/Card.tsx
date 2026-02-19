import React from "react";
import { Movie } from "../../Types/Types";
import { getPosterURL, formatDate, formatRating } from "../../utils/movieHelpers";
import "./Card.css";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={getPosterURL(movie.poster_path)} alt={`${movie.title}_poster`} loading="lazy" />

        <div className="movie-rating" style={{ color: movie.vote_average > 7.5 ? "#76f22c" : movie.vote_average < 5.5 ? "#f2221c" : "white" }}>
          <span className="rating-star">⭐</span>
          {formatRating(movie.vote_average)}
        </div>
      </div>

      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-date">{formatDate(movie.release_date)}</p>
      </div>
    </div>
  );
};
