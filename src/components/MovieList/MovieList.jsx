import React, { useCallback, useContext } from "react";
import classes from "./MovieList.module.css";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../../context/context";

const MovieList = ({ animeList }) => {
  const navigate = useNavigate();
  const ctxData = useContext(ContextData);

  const fetchMovieDetailHandler = useCallback((data) => {
    navigate(`/movie-details/${data.title}`);
    ctxData.fetchDetails(data);
  }, []);

  return (
    <div>
      <div
        className={classes.container}
        onClick={() => {
          fetchMovieDetailHandler(animeList);
        }}
      >
        <div>
          <img
            src={animeList.images.jpg.image_url}
            alt={animeList.images.jpg.image_url}
          />
        </div>

        <div className={classes.overlay}>
          <h1>{animeList.title_japanese}</h1>
          <p>Popularity: {animeList.popularity}</p>
          <p>Rank: {animeList.rank}</p>
          <p>Score: {animeList.score}</p>
          <p>Scored by: {animeList.scored_by}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
