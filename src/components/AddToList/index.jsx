import React, { useContext } from "react";
import { ContextData } from "../../context/context";
import Button from "../../UI/Button";

const AddToList = ({ animeListData }) => {
  const ctxData = useContext(ContextData);
  const { fetchMyList, myListData, removeFromMyList } = ctxData;

  function addToList() {
    fetchMyList(animeListData);
  }

  function removeToList() {
    removeFromMyList(existingAnime);
  }

  let button;

  //Find the existing data on the array
  const existingAnimeIndex = myListData.findIndex(
    (item) => item.mal_id === animeListData.mal_id
  );

  const existingAnime = myListData[existingAnimeIndex];

  if (existingAnime) {
    button = <Button onClick={removeToList}>Remove from MyList</Button>;
  } else {
    button = <Button onClick={addToList}>Add to MyList</Button>;
  }

  return <div>{button}</div>;
};

export default AddToList;
