import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../../context/context";
import Button from "../../UI/Button";
import AddToList from "../AddToList";
import classes from "./index.module.css";

const MovieInfo = React.memo(() => {
  const ctxData = useContext(ContextData);
  const { selectedData: data } = ctxData;
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/anime");
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={data.images.jpg.image_url} alt={data.images.jpg.image_url} />
        <a href={data.url}>WATCH NOW</a>

        <AddToList animeListData={data} />
      </div>
      <div className={classes.secondContainer}>
        <header>{data.title}</header>
        <p className={classes.synopsis}>{data.synopsis}</p>
        <p>Aired From: {data.aired.string}</p>
        <p>Episodes: {data.episodes}</p>
        <p>Rating: {data.rating}</p>
        <div className={classes.button}>
          <Button onClick={navigateHandler}>Go Back</Button>
        </div>
      </div>
    </div>
  );
});

export default MovieInfo;
