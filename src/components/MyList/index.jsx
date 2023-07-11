import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../../context/context";
import classes from "./index.module.css";
import Modal from "../../UI/Modal";

const MyList = React.memo(() => {
  const ctx = useContext(ContextData);
  const { myListData: myListItemArray, fetchDetails } = ctx;

  const navigate = useNavigate();

  function navigateToDetailsHandler(data) {
    fetchDetails(data);
    navigate(`/movie-details/${data.title}`);
  }

  function navigateBackHandler() {
    navigate(`/anime`);
  }

  return (
    <Modal onClick={navigateBackHandler}>
      <div className={classes.container}>
        <ul>
          {myListItemArray.length > 0 ? (
            myListItemArray.map((item, index) => (
              <li
                key={index}
                onClick={navigateToDetailsHandler.bind(null, item)}
              >
                <header>
                  <img src={item.images.jpg.image_url} alt={item.title}></img>
                </header>
                <div className={classes.section}>
                  <h1>{item.title_japanese}</h1>
                  <p>Popularity: {item.popularity}</p>
                  <p>Rank: {item.rank}</p>
                  <p>Score: {item.score}</p>
                  <p>Scored by: {item.scored_by}</p>
                </div>
              </li>
            ))
          ) : (
            <p>Add some Anime to your List!</p>
          )}
        </ul>
      </div>
    </Modal>
  );
});

export default MyList;
