import React from "react";
import { UseMovies } from "../../hooks/useMovies";
import { MovieGrid } from "../MovieGrid/MovieGrid";
import { Pagination } from "../Pagination/Pagination";
import "./List.css";
import { QuickNavigation } from "../QuickNav/QuickNav";
import { ErrorMessage } from "../Error message/ErrorMessage";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";

const List: React.FC = () => {
  const { movies, currentPage, loadContent, totalPage, goToPage, loading, error } = UseMovies();

  if (error) {
    return <ErrorMessage message={error} onRetry={() => loadContent(currentPage)} />;
  }
  return (
    <div className="list-container">
      {loading && <LoadingOverlay />}

      <div className="list-header">
        <h1>Popular now</h1>

        <p className="results-info">
          Page {currentPage} of {totalPage}
        </p>
      </div>

      <MovieGrid movies={movies} loading={loading} />

      <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={goToPage} loading={loading} />

      <QuickNavigation currentPage={currentPage} totalPages={totalPage} onPageChange={goToPage} loading={loading} />
    </div>
  );
};

export default List;
