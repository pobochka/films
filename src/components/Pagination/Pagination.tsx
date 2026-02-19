import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, loading }) => {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const delta = 2;

    //Добавляем троеточие в списке страниц
    if (currentPage - delta > 2) {
      pages.push(1, "...");
    } else if (currentPage > 1) {
      pages.push(1);
    }

    //Отображаем в списке 5 страниц (2 перед и 2 после текущей)
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      pages.push(i);
    }

    //Отображаем последнюю страницу (500 потому что у tmdb ограничение)
    if (currentPage + delta < totalPages - 1) {
      pages.push("...", totalPages);
    } else if (currentPage < totalPages) {
      pages.push(totalPages);
    }

    return pages;
  };

  //Переход на предыдущую страницу
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  //Переход на следующую страницу
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button className="pagination-btn prev-btn" onClick={handlePrev} disabled={currentPage === 1 || loading} aria-label="Previous page">
        Prev
      </button>

      <div className="page-numbers">
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="pagination-dots">...</span>
            ) : (
              <button onClick={() => onPageChange(page as number)} className={`pagination-btn page-number ${currentPage === page ? "active" : ""}`} disabled={loading} aria-label={`Go to page ${page}`} aria-current={currentPage === page ? "page" : undefined}>
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button className="pagination-btn next-btn" onClick={handleNext} disabled={currentPage === totalPages || loading} aria-label="Next page">
        Next
      </button>
    </div>
  );
};
