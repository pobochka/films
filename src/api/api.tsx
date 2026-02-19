import { APIResponse } from "../Types/Types";

//храним ключи доступа и ссылку
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchMovies = async (page: number): Promise<APIResponse> => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-RU&page=${page}&sort_by=popularity.desc`); //Запрос на популярные фильмы

  if (!response.ok) {
    throw new Error(`HTTP Error. Status ${response.status}`);
  }
  return response.json();
};
