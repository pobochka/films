import { fetchMovies } from "../api/api";
import { useState, useEffect, useCallback } from "react";
import { Movie } from "../Types/Types";

export const UseMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const saved = sessionStorage.getItem("currentPage");
    return saved ? parseInt(saved, 10) : 1;
  });

  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadContent = useCallback(
    async (page: number) => {
      if (page === currentPage && movies.length > 0) return;

      setLoading(true);
      setError(null);

      try {
        const data = await fetchMovies(page);

        setMovies(data.results);
        setCurrentPage(data.page);
        setTotalPage(Math.min(data.total_pages, 500)); //ограничение tmdbapi в 500 страниц(
        sessionStorage.setItem("currentPage", data.page.toString());

        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown Error";
        setError(`Loading Error: ${errorMessage}`);
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    },
    [currentPage, movies.length]
  );

  useEffect(() => {
    loadContent(currentPage);
  }, [currentPage, loadContent]);

  //Переход на другую страницу
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPage && page !== currentPage) {
      loadContent(page);
    }
  };

  return { movies, loadContent, currentPage, totalPage, goToPage, loading, error };
};
