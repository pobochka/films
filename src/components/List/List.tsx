import React from "react";
import { useState, useEffect } from "react";
import "./List.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_API_URL;

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

const List = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchList = async (page = 1) => {
    const fetchResult = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US$page=${page}`
    );
    if (!fetchResult.ok) throw new Error("Ошибка ответа");
    return fetchResult.json();
  };

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchList();

        setMovies(data.results);
      } catch (error) {
        alert(`Ошибка получения запроса: ${error}`);
      }
    };

    loadContent();
  }, []);

  return (
    <>
      <div>
        <div className="list">
          {movies.map((movie) => (
            <div key={movie.id} className="listItems">
              <div className="leftInfo">
                <h1 id="title">{movie.title}</h1>
                <img
                  src={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title}`}
                />
              </div>
              <div className="rightInfo">
                <span id="releaseDate">{movie.release_date}</span>
                <span>{movie.vote_average}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
