import React, { useContext } from "react";
import classes from "./Movies.module.css";
import MovieList from "../MovieList/MovieList";
import { ContextData } from "../../context/context";

const Movies = React.memo(() => {
  const ctxData = useContext(ContextData);
  const animeList = ctxData.data;

  return (
    <div className={classes.container}>
      <h1>Anime List</h1>

      {animeList ? (
        <div className={classes.listcontainer}>
          {animeList.map((anime, index) => (
            <MovieList key={index} animeList={anime} />
          ))}
        </div>
      ) : (
        <div className={classes[`lds-roller`]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
});

export default Movies;
