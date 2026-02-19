export interface Movie {
  // Уникальный интерфейс фильма
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface APIResponse {
  // Объект из api запроса
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
