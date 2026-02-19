import React from "react";
import "./MovieGrid.css";
import { MovieCard } from "../../components/Card/Card";
import { Movie } from "../../Types/Types";

interface MovieGridProps {
  movies: Movie[];
  loading: boolean;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, loading }) => {
  if (loading) {
    return null;
  }

  if (movies.length === 0) {
    return (
      <div className="no-results">
        <p>Films not found</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
